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
  await fs.writeFile(out, JSON.stringify(logs.slice(0, 50), null, 2), "utf8");
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
