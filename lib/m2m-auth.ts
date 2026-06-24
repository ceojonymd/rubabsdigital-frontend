import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";

const HEADER_KEY = "x-rd-key";
const HEADER_TS = "x-rd-timestamp";
const HEADER_SIG = "x-rd-signature";
const HEADER_NONCE = "x-rd-nonce";
const HEADER_IDEMPOTENCY = "x-rd-idempotency-key";
const MAX_AGE_SECONDS = 300;
const NONCE_STORE = path.join(process.cwd(), "data", "security", "machine-auth.json");

function safeEqual(a: string, b: string) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

async function readNonceStore() {
  try {
    const raw = await fs.readFile(NONCE_STORE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeNonceStore(rows: Record<string, unknown>[]) {
  await fs.mkdir(path.dirname(NONCE_STORE), { recursive: true });
  await fs.writeFile(NONCE_STORE, JSON.stringify(rows.slice(-800), null, 2), "utf8");
}

function getMachineSecrets() {
  const activeKey = process.env.RD_MACHINE_KEY || "";
  const activeSecret = process.env.RD_MACHINE_SECRET || "";
  const nextKey = process.env.RD_MACHINE_NEXT_KEY || "";
  const nextSecret = process.env.RD_MACHINE_NEXT_SECRET || "";

  return [
    { slot: "active", key: activeKey, secret: activeSecret },
    ...(nextKey && nextSecret ? [{ slot: "next", key: nextKey, secret: nextSecret }] : []),
  ].filter((item) => item.key && item.secret);
}

export function getM2MHeaders() {
  return {
    key: HEADER_KEY,
    timestamp: HEADER_TS,
    signature: HEADER_SIG,
    nonce: HEADER_NONCE,
    idempotency: HEADER_IDEMPOTENCY,
  };
}

export function createM2MSignature(input: {
  secret: string;
  method: string;
  path: string;
  timestamp: string;
  nonce: string;
  idempotencyKey: string;
  body: string;
}) {
  const canonical = [
    input.method.toUpperCase(),
    input.path,
    input.timestamp,
    input.nonce,
    input.idempotencyKey,
    input.body,
  ].join("\n");

  return crypto.createHmac("sha256", input.secret).update(canonical).digest("hex");
}

export async function verifyM2MRequest(req: Request, options?: { allowAdminCookie?: boolean }) {
  if (options?.allowAdminCookie) {
    return {
      ok: true,
      mode: "admin-cookie" as const,
      bodyText: await req.text(),
      keySlot: "admin-cookie",
    };
  }

  const key = req.headers.get(HEADER_KEY) || "";
  const timestamp = req.headers.get(HEADER_TS) || "";
  const signature = req.headers.get(HEADER_SIG) || "";
  const nonce = req.headers.get(HEADER_NONCE) || "";
  const idempotencyKey = req.headers.get(HEADER_IDEMPOTENCY) || "";

  if (!key || !timestamp || !signature || !nonce || !idempotencyKey) {
    return { ok: false, error: "Missing machine auth headers." };
  }

  const now = Math.floor(Date.now() / 1000);
  const ts = Number(timestamp);
  if (!Number.isFinite(ts) || Math.abs(now - ts) > MAX_AGE_SECONDS) {
    return { ok: false, error: "Timestamp expired." };
  }

  const url = new URL(req.url);
  const body = await req.text();

  const secrets = getMachineSecrets();
  if (!secrets.length) {
    return { ok: false, error: "Machine auth env missing." };
  }

  let matchedSlot = "";
  let matchedKey = "";

  for (const item of secrets) {
    if (key !== item.key) continue;

    const expectedSig = createM2MSignature({
      secret: item.secret,
      method: req.method,
      path: url.pathname,
      timestamp,
      nonce,
      idempotencyKey,
      body,
    });

    if (safeEqual(signature, expectedSig)) {
      matchedSlot = item.slot;
      matchedKey = item.key;
      break;
    }
  }

  if (!matchedSlot) {
    return { ok: false, error: "Invalid signature." };
  }

  const existing = await readNonceStore();
  const replayFound = existing.find(
    (row) =>
      row.path === url.pathname &&
      row.nonce === nonce &&
      row.idempotencyKey === idempotencyKey
  );

  if (replayFound) {
    return { ok: false, error: "Replay detected." };
  }

  existing.push({
    at: new Date().toISOString(),
    path: url.pathname,
    nonce,
    idempotencyKey,
    timestamp,
    key,
    keySlot: matchedSlot,
  });

  await writeNonceStore(existing);

  return {
    ok: true,
    mode: "machine-hmac" as const,
    bodyText: body,
    nonce,
    idempotencyKey,
    keySlot: matchedSlot,
    machineKey: matchedKey,
  };
}
