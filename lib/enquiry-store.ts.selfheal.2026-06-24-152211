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
};

export async function readEnquiryRows() {
  const dir = path.join(process.cwd(), "data", "enquiries");

  try {
    const files = (await fs.readdir(dir))
      .filter((name) => name.endsWith(".json"))
      .sort()
      .reverse();

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
  const raw = await fs.readFile(fullPath, "utf8");
  return JSON.parse(raw);
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

export async function getAnalyticsSummary() {
  const rows = await readEnquiryRows();

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
  };

  const statusBuckets = ["new", "contacted", "qualified", "closed"].map((key) => ({
    label: key,
    value: rows.filter((r) => r.inboxStatus === key).length,
  }));

  const deliveryBuckets = ["sent", "failed", "config-missing", "dry-run", "not-tested"].map((key) => ({
    label: key,
    value: rows.filter((r) => r.deliveryStatus === key).length,
  }));

  const serviceMap = new Map<string, number>();
  for (const row of rows) {
    const key = row.service || "Not specified";
    serviceMap.set(key, (serviceMap.get(key) || 0) + 1);
  }

  const topServices = Array.from(serviceMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([label, value]) => ({ label, value }));

  const volumeMap = new Map<string, number>();
  for (const row of rows) {
    const day = String(row.receivedAt || "").slice(0, 10) || "unknown";
    volumeMap.set(day, (volumeMap.get(day) || 0) + 1);
  }

  const volumeTrend = Array.from(volumeMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-14)
    .map(([label, value]) => ({ label, value }));

  const failures = rows
    .filter((r) => r.deliveryStatus === "failed" || r.deliveryStatus === "config-missing")
    .map((r) => ({
      file: r.file,
      subject: r.subject,
      businessName: r.businessName,
      email: r.email,
      deliveryStatus: r.deliveryStatus,
      deliveryUpdatedAt: r.deliveryUpdatedAt,
      deliveryMessage: r.deliveryMessage,
    }));

  return {
    summary,
    charts: {
      statusBuckets,
      deliveryBuckets,
      topServices,
      volumeTrend,
    },
    failures,
  };
}
