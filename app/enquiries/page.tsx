import { promises as fs } from "fs";
import path from "path";
import EnquiryInbox from "@/components/enquiries/EnquiryInbox";

export const metadata = {
  title: "Enquiries | Rubab's Digital",
  description: "Admin inbox view for local enquiry fallback records.",
};

type StoredRecord = {
  subject?: string;
  contact?: {
    businessName?: string;
    email?: string;
    service?: string;
    packageDirection?: string;
    budget?: string;
    timeline?: string;
  };
  ops?: {
    priority?: string;
    inboxStatus?: string;
  };
  meta?: {
    receivedAt?: string;
  };
};

async function getItems() {
  const dir = path.join(process.cwd(), "data", "enquiries");

  try {
    const files = (await fs.readdir(dir))
      .filter((name) => name.endsWith(".json"))
      .sort()
      .reverse()
      .slice(0, 20);

    const rows = await Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const parsed = JSON.parse(raw) as StoredRecord;

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
          receivedAt: parsed.meta?.receivedAt || file.replace("enquiry-", "").replace(".json", ""),
        };
      })
    );

    return rows;
  } catch {
    return [];
  }
}

export default async function EnquiriesPage() {
  const items = await getItems();
  return <EnquiryInbox items={items} />;
}
