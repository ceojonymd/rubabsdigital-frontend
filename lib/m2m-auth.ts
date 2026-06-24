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
  await fs.writeFile(NONCE_STORE, JSON.stringify(rows.slice(-500), null, 2), "utf8");
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
    return { ok: true, mode: "admin-cookie" as const, bodyText: await req.text() };
  }

  const key = req.headers.get(HEADER_KEY) || "";
  const timestamp = req.headers.get(HEADER_TS) || "";
  const signature = req.headers.get(HEADER_SIG) || "";
  const nonce = req.headers.get(HEADER_NONCE) || "";
  const idempotencyKey = req.headers.get(HEADER_IDEMPOTENCY) || "";

  const expectedKey = process.env.RD_MACHINE_KEY || "";
  const secret = process.env.RD_MACHINE_SECRET || "";

  if (!key || !timestamp || !signature || !nonce || !idempotencyKey || !expectedKey || !secret) {
    return { ok: false, error: "Missing machine auth headers or env." };
  }

  if (key !== expectedKey) {
    return { ok: false, error: "Invalid machine key." };
  }

  const now = Math.floor(Date.now() / 1000);
  const ts = Number(timestamp);
  if (!Number.isFinite(ts) || Math.abs(now - ts) > MAX_AGE_SECONDS) {
    return { ok: false, error: "Timestamp expired." };
  }

  const url = new URL(req.url);
  const body = await req.text();

  const expectedSig = createM2MSignature({
    secret,
    method: req.method,
    path: url.pathname,
    timestamp,
    nonce,
    idempotencyKey,
    body,
  });

  if (!safeEqual(signature, expectedSig)) {
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
  });

  await writeNonceStore(existing);

  return {
    ok: true,
    mode: "machine-hmac" as const,
    bodyText: body,
    nonce,
    idempotencyKey,
  };
}
