import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type EnquiryRow = {
  file: string;
  subject: string;
  businessName: string;
  email: string;
  service: string;
  packageDirection: string;
  budget: string;
  timeline: string;
  priority: string;
  inboxStatus: string;
  note: string;
  receivedAt: string;
  deliveryStatus: string;
  deliveryUpdatedAt: string;
  deliveryMessage: string;
  retryCount?: number;
  recoveryState?: string;
};

const SETTINGS_FILE = path.join(process.cwd(), "data", "settings", "digest-settings.json");
const PREFS_FILE = path.join(process.cwd(), "data", "settings", "digest-preferences.json");
const AUDIT_FILE = path.join(process.cwd(), "data", "audit", "digest-audit.json");
const INCIDENT_STATE_FILE = path.join(process.cwd(), "data", "incidents", "incidents.json");
const INCIDENT_EVENT_FILE = path.join(process.cwd(), "data", "incidents", "incident-events.json");
const TOKEN_SECRET = process.env.RD_PREFERENCE_TOKEN_SECRET || process.env.RD_ADMIN_SECRET || "fallback-secret";
const TOKEN_MAX_AGE_SECONDS = Number(process.env.RD_PREFERENCE_TOKEN_MAX_AGE_SECONDS || 60 * 60 * 24 * 14);

export async function readEnquiryRows() {
  const dir = path.join(process.cwd(), "data", "enquiries");
  try {
    const files = (await fs.readdir(dir)).filter((name) => name.endsWith(".json")).sort().reverse();
    const rows = await Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const parsed = JSON.parse(raw);
        return {
          file,
          subject: parsed.subject || "Untitled enquiry",
          businessName: parsed.contact?.businessName || "Unknown business",
          email: parsed.contact?.email || "Unknown email",
          service: parsed.contact?.service || "Not specified",
          packageDirection: parsed.contact?.packageDirection || "Not specified",
          budget: parsed.contact?.budget || "Not specified",
          timeline: parsed.contact?.timeline || "Not specified",
          priority: parsed.ops?.priority || "normal",
          inboxStatus: parsed.ops?.inboxStatus || "new",
          note: parsed.ops?.note || "",
          receivedAt: parsed.meta?.receivedAt || file.replace("enquiry-", "").replace(".json", ""),
          deliveryStatus: parsed.delivery?.lastStatus || "not-tested",
          deliveryUpdatedAt: parsed.delivery?.lastUpdatedAt || "",
          deliveryMessage: parsed.delivery?.lastMessage || "",
          retryCount: Number(parsed.delivery?.retryCount || 0),
          recoveryState: parsed.delivery?.recoveryState || "clear",
        } as EnquiryRow;
      })
    );
    return rows;
  } catch {
    return [] as EnquiryRow[];
  }
}

export async function readEnquiryByFile(file: string) {
  const fullPath = path.join(process.cwd(), "data", "enquiries", path.basename(file));
  return JSON.parse(await fs.readFile(fullPath, "utf8"));
}

export async function writeEnquiryByFile(file: string, data: unknown) {
  const fullPath = path.join(process.cwd(), "data", "enquiries", path.basename(file));
  await fs.writeFile(fullPath, JSON.stringify(data, null, 2), "utf8");
}

export async function appendDeliveryLog(file: string, entry: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data", "delivery-logs");
  await fs.mkdir(dir, { recursive: true });
  const out = path.join(dir, `${path.basename(file, ".json")}.json`);
  let logs: Record<string, unknown>[] = [];
  try {
    logs = JSON.parse(await fs.readFile(out, "utf8"));
    if (!Array.isArray(logs)) logs = [];
  } catch {}
  logs.unshift(entry);
  await fs.writeFile(out, JSON.stringify(logs.slice(0, 100), null, 2), "utf8");
}

export async function readDeliveryLogs(file: string) {
  const out = path.join(process.cwd(), "data", "delivery-logs", `${path.basename(file, ".json")}.json`);
  try {
    const raw = await fs.readFile(out, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function appendOperatorTimeline(entry: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data", "operator-timeline");
  await fs.mkdir(dir, { recursive: true });
  const out = path.join(dir, "timeline.json");
  let rows: Record<string, unknown>[] = [];
  try {
    rows = JSON.parse(await fs.readFile(out, "utf8"));
    if (!Array.isArray(rows)) rows = [];
  } catch {}
  rows.unshift(entry);
  await fs.writeFile(out, JSON.stringify(rows.slice(0, 400), null, 2), "utf8");
}

export async function readOperatorTimeline() {
  const out = path.join(process.cwd(), "data", "operator-timeline", "timeline.json");
  try {
    const raw = await fs.readFile(out, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function inDateRange(dateValue: string, from?: string, to?: string) {
  const day = String(dateValue || "").slice(0, 10);
  if (!day) return !from && !to;
  if (from && day < from) return false;
  if (to && day > to) return false;
  return true;
}

export function classifyRecoveryState(message: string, attemptCount: number, maxRetries = 5) {
  const text = String(message || "").toLowerCase();
  if (text.includes("403") || text.includes("404") || text.includes("not found") || text.includes("invalid") || text.includes("unauthorized") || text.includes("forbidden")) {
    return "dead-letter";
  }
  if (attemptCount >= maxRetries) return "dead-letter";
  return "pending-retry";
}

export async function getDigestSettings() {
  try {
    const parsed = JSON.parse(await fs.readFile(SETTINGS_FILE, "utf8"));
    return {
      opsRecipients: Array.isArray(parsed?.opsRecipients) ? parsed.opsRecipients : [],
      executiveRecipients: Array.isArray(parsed?.executiveRecipients) ? parsed.executiveRecipients : [],
      opsDigestEnabled: parsed?.opsDigestEnabled !== false,
      executiveDigestEnabled: parsed?.executiveDigestEnabled !== false,
      severityRules: Array.isArray(parsed?.severityRules) ? parsed.severityRules : [
        { key: "dead-letter", severity: "critical", action: "immediate-escalation" },
        { key: "failed", severity: "high", action: "daily-digest" },
        { key: "pending-retry", severity: "medium", action: "watchlist" },
      ],
    };
  } catch {
    return {
      opsRecipients: [],
      executiveRecipients: [],
      opsDigestEnabled: true,
      executiveDigestEnabled: true,
      severityRules: [
        { key: "dead-letter", severity: "critical", action: "immediate-escalation" },
        { key: "failed", severity: "high", action: "daily-digest" },
        { key: "pending-retry", severity: "medium", action: "watchlist" },
      ],
    };
  }
}

export async function saveDigestSettings(payload: Record<string, unknown>) {
  await fs.mkdir(path.dirname(SETTINGS_FILE), { recursive: true });
  await fs.writeFile(SETTINGS_FILE, JSON.stringify(payload, null, 2), "utf8");
}

export async function getDigestPreferences() {
  try {
    const parsed = JSON.parse(await fs.readFile(PREFS_FILE, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveDigestPreferences(payload: Record<string, unknown>[]) {
  await fs.mkdir(path.dirname(PREFS_FILE), { recursive: true });
  await fs.writeFile(PREFS_FILE, JSON.stringify(payload, null, 2), "utf8");
}

export function issuePreferenceToken(email: string) {
  const payload = JSON.stringify({
    email: email.toLowerCase(),
    issuedAt: Math.floor(Date.now() / 1000),
    expiresAt: Math.floor(Date.now() / 1000) + TOKEN_MAX_AGE_SECONDS,
  });
  const encoded = Buffer.from(payload).toString("base64url");
  const sig = crypto.createHmac("sha256", TOKEN_SECRET).update(encoded).digest("hex");
  return `${encoded}.${sig}`;
}

export function verifyPreferenceToken(token: string) {
  const [encoded, sig] = String(token || "").split(".");
  if (!encoded || !sig) return { ok: false, error: "Malformed token." };

  const expected = crypto.createHmac("sha256", TOKEN_SECRET).update(encoded).digest("hex");
  if (expected !== sig) return { ok: false, error: "Invalid signature." };

  try {
    const decoded = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    const email = String(decoded?.email || "").toLowerCase();
    const expiresAt = Number(decoded?.expiresAt || 0);
    const now = Math.floor(Date.now() / 1000);

    if (!email || !expiresAt) return { ok: false, error: "Invalid token payload." };
    if (now > expiresAt) return { ok: false, error: "Token expired.", expired: true };

    return { ok: true, email, expiresAt };
  } catch {
    return { ok: false, error: "Unreadable token." };
  }
}

export async function appendDigestAudit(entry: Record<string, unknown>) {
  await fs.mkdir(path.dirname(AUDIT_FILE), { recursive: true });
  let rows: Record<string, unknown>[] = [];
  try {
    rows = JSON.parse(await fs.readFile(AUDIT_FILE, "utf8"));
    if (!Array.isArray(rows)) rows = [];
  } catch {}
  const previousHash = rows[0]?.hash ? String(rows[0].hash) : "";
  const body = JSON.stringify({ ...entry, previousHash });
  const hash = crypto.createHash("sha256").update(body).digest("hex");
  rows.unshift({ ...entry, previousHash, hash });
  await fs.writeFile(AUDIT_FILE, JSON.stringify(rows.slice(0, 600), null, 2), "utf8");
}

export async function readDigestAudit() {
  try {
    const parsed = JSON.parse(await fs.readFile(AUDIT_FILE, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function verifyDigestAuditChain() {
  const rows = await readDigestAudit();
  let valid = true;
  for (let i = 0; i < rows.length; i++) {
    const current = rows[i];
    const clone = { ...current };
    const hash = clone.hash || "";
    delete clone.hash;
    const expected = crypto.createHash("sha256").update(JSON.stringify(clone)).digest("hex");
    if (expected !== hash) { valid = false; break; }
    if (i < rows.length - 1 && String(current.previousHash || "") !== String(rows[i + 1]?.hash || "")) { valid = false; break; }
  }
  return { valid, count: rows.length };
}

async function readJsonArray(file: string) {
  try {
    const parsed = JSON.parse(await fs.readFile(file, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeJson(file: string, payload: unknown) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(payload, null, 2), "utf8");
}

export async function readIncidents() {
  return readJsonArray(INCIDENT_STATE_FILE);
}

export async function saveIncidents(items: Record<string, unknown>[]) {
  await writeJson(INCIDENT_STATE_FILE, items);
}

export async function readIncidentEvents() {
  return readJsonArray(INCIDENT_EVENT_FILE);
}

export async function appendIncidentEvent(entry: Record<string, unknown>) {
  const rows = await readIncidentEvents();
  rows.unshift(entry);
  await writeJson(INCIDENT_EVENT_FILE, rows.slice(0, 1000));
}

export async function createIncident(input: {
  type: string;
  severity: string;
  title: string;
  roleCreatedBy: string;
  escalationDueAt?: string;
}) {
  const items = await readIncidents();
  const item = {
    id: `incident-${Date.now()}`,
    at: new Date().toISOString(),
    type: input.type || "delivery",
    severity: input.severity || "high",
    title: input.title || "Untitled incident",
    status: "open",
    acknowledgedBy: "",
    acknowledgedAt: "",
    escalatedAt: "",
    closedAt: "",
    escalationDueAt: input.escalationDueAt || new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    roleCreatedBy: input.roleCreatedBy,
    slaBreached: false,
  };

  items.unshift(item);
  await saveIncidents(items);
  await appendIncidentEvent({
    at: new Date().toISOString(),
    incidentId: item.id,
    type: "incident-created",
    actor: input.roleCreatedBy,
    status: "open",
    title: item.title,
    severity: item.severity,
  });

  return item;
}

export async function acknowledgeIncident(incidentId: string, actor: string) {
  const items = await readIncidents();
  const index = items.findIndex((item: any) => item.id === incidentId);
  if (index < 0) return null;

  const next = [...items];
  const current: any = next[index];
  const updated = {
    ...current,
    status: "acknowledged",
    acknowledgedBy: actor,
    acknowledgedAt: new Date().toISOString(),
  };
  next[index] = updated;

  await saveIncidents(next);
  await appendIncidentEvent({
    at: new Date().toISOString(),
    incidentId,
    type: "incident-acknowledged",
    actor,
    status: "acknowledged",
  });

  return updated;
}

export async function detectSlaBreaches() {
  const items = await readIncidents();
  const now = Date.now();
  const breached: Record<string, unknown>[] = [];
  let changed = false;

  const next = items.map((item: any) => {
    const due = Date.parse(String(item.escalationDueAt || ""));
    const openLike = item.status === "open";
    const shouldBreach = Number.isFinite(due) && openLike && now > due;

    if (shouldBreach && item.slaBreached !== true) {
      changed = true;
      const updated = {
        ...item,
        slaBreached: true,
        status: "overdue",
        escalatedAt: new Date().toISOString(),
      };
      breached.push(updated);
      return updated;
    }

    return item;
  });

  if (changed) {
    await saveIncidents(next);
    for (const item of breached) {
      await appendIncidentEvent({
        at: new Date().toISOString(),
        incidentId: String((item as any).id || ""),
        type: "incident-sla-breached",
        actor: "scheduler",
        status: "overdue",
        severity: String((item as any).severity || ""),
      });
    }
  }

  return breached;
}

export async function getAnalyticsSummary(from?: string, to?: string) {
  const rows = (await readEnquiryRows()).filter((row) => inDateRange(row.receivedAt, from, to));

  const summary = {
    total: rows.length,
    newCount: rows.filter((r) => r.inboxStatus === "new").length,
    qualifiedCount: rows.filter((r) => r.inboxStatus === "qualified").length,
    highPriorityCount: rows.filter((r) => r.priority === "high").length,
    sentCount: rows.filter((r) => r.deliveryStatus === "sent").length,
    failedCount: rows.filter((r) => r.deliveryStatus === "failed").length,
    configMissingCount: rows.filter((r) => r.deliveryStatus === "config-missing").length,
    dryRunCount: rows.filter((r) => r.deliveryStatus === "dry-run").length,
    notTestedCount: rows.filter((r) => r.deliveryStatus === "not-tested").length,
    pendingRetryCount: rows.filter((r) => r.recoveryState === "pending-retry").length,
    deadLetterCount: rows.filter((r) => r.recoveryState === "dead-letter").length,
  };

  const statusBuckets = ["new", "contacted", "qualified", "closed"].map((key) => ({
    label: key,
    value: rows.filter((r) => r.inboxStatus === key).length,
  }));

  const deliveryBuckets = ["sent", "failed", "config-missing", "dry-run", "not-tested"].map((key) => ({
    label: key,
    value: rows.filter((r) => r.deliveryStatus === key).length,
  }));

  const recoveryBuckets = ["clear", "pending-retry", "dead-letter"].map((key) => ({
    label: key,
    value: rows.filter((r) => (r.recoveryState || "clear") === key).length,
  }));

  const serviceMap = new Map<string, number>();
  for (const row of rows) {
    const key = row.service || "Not specified";
    serviceMap.set(key, (serviceMap.get(key) || 0) + 1);
  }

  const topServices = Array.from(serviceMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([label, value]) => ({ label, value }));

  const volumeMap = new Map<string, number>();
  for (const row of rows) {
    const day = String(row.receivedAt || "").slice(0, 10) || "unknown";
    volumeMap.set(day, (volumeMap.get(day) || 0) + 1);
  }

  const volumeTrend = Array.from(volumeMap.entries()).sort((a, b) => a[0].localeCompare(b[0])).slice(-31).map(([label, value]) => ({ label, value }));

  const failures = rows
    .filter((r) => r.recoveryState === "pending-retry" || r.recoveryState === "dead-letter")
    .map((r) => ({
      file: r.file,
      subject: r.subject,
      businessName: r.businessName,
      email: r.email,
      deliveryStatus: r.deliveryStatus,
      deliveryUpdatedAt: r.deliveryUpdatedAt,
      deliveryMessage: r.deliveryMessage,
      retryCount: r.retryCount || 0,
      recoveryState: r.recoveryState || "clear",
    }));

  const timeline = await readOperatorTimeline();

  return {
    summary,
    charts: { statusBuckets, deliveryBuckets, recoveryBuckets, topServices, volumeTrend },
    failures,
    timeline: timeline.filter((item) => {
      const at = String(item.at || "");
      return inDateRange(at, from, to);
    }).slice(0, 80),
  };
}

export async function archiveAnalyticsSnapshot(payload: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data", "report-archive");
  await fs.mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = path.join(dir, `analytics-snapshot-${stamp}.json`);
  await fs.writeFile(file, JSON.stringify(payload, null, 2), "utf8");
  return file;
}

export async function readArchivedSnapshots() {
  const dir = path.join(process.cwd(), "data", "report-archive");
  try {
    const files = (await fs.readdir(dir)).filter((name) => name.endsWith(".json")).sort().reverse();
    return Promise.all(files.slice(0, 30).map(async (file) => {
      const full = path.join(dir, file);
      const parsed = JSON.parse(await fs.readFile(full, "utf8"));
      return { file, parsed };
    }));
  } catch {
    return [];
  }
}

export async function saveDigestRecord(payload: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data", "digests");
  await fs.mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = path.join(dir, `digest-${stamp}.json`);
  const previousFiles = await readDigestRecords();
  const previousHash = previousFiles[0]?.parsed?.hash ? String(previousFiles[0].parsed.hash) : "";
  const body = JSON.stringify({ ...payload, previousHash });
  const hash = crypto.createHash("sha256").update(body).digest("hex");
  await fs.writeFile(file, JSON.stringify({ ...payload, previousHash, hash }, null, 2), "utf8");
  return file;
}

export async function readDigestRecords() {
  const dir = path.join(process.cwd(), "data", "digests");
  try {
    const files = (await fs.readdir(dir)).filter((name) => name.endsWith(".json")).sort().reverse();
    return Promise.all(files.slice(0, 40).map(async (file) => {
      const full = path.join(dir, file);
      const parsed = JSON.parse(await fs.readFile(full, "utf8"));
      return { file, parsed };
    }));
  } catch {
    return [];
  }
}

export async function verifyDigestArchiveChain() {
  const rows = await readDigestRecords();
  let valid = true;
  for (let i = 0; i < rows.length; i++) {
    const current = rows[i].parsed || {};
    const clone = { ...current };
    const hash = clone.hash || "";
    delete clone.hash;
    const expected = crypto.createHash("sha256").update(JSON.stringify(clone)).digest("hex");
    if (expected !== hash) { valid = false; break; }
    if (i < rows.length - 1 && String(current.previousHash || "") !== String(rows[i + 1]?.parsed?.hash || "")) { valid = false; break; }
  }
  return { valid, count: rows.length };
}
