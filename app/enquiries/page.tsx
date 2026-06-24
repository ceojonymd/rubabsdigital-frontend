import { promises as fs } from "fs";
import path from "path";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EnquiryInbox from "@/components/enquiries/EnquiryInbox";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";

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
    note?: string;
  };
  meta?: {
    receivedAt?: string;
  };
};

async function getItems(searchParams?: { q?: string; status?: string }) {
  const dir = path.join(process.cwd(), "data", "enquiries");
  const q = (searchParams?.q || "").trim().toLowerCase();
  const status = (searchParams?.status || "").trim().toLowerCase();

  try {
    const files = (await fs.readdir(dir))
      .filter((name) => name.endsWith(".json"))
      .sort()
      .reverse()
      .slice(0, 100);

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
          note: parsed.ops?.note || "",
          receivedAt: parsed.meta?.receivedAt || file.replace("enquiry-", "").replace(".json", ""),
        };
      })
    );

    return rows.filter((item) => {
      const matchesQ =
        !q ||
        [
          item.subject,
          item.businessName,
          item.email,
          item.service,
          item.packageDirection,
          item.budget,
          item.timeline,
          item.note,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q);

      const matchesStatus = !status || status === "all" || item.inboxStatus.toLowerCase() === status;

      return matchesQ && matchesStatus;
    });
  } catch {
    return [];
  }
}

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams?: { q?: string; status?: string };
}) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    redirect("/admin-login?next=/enquiries");
  }

  const items = await getItems(searchParams);
  return <EnquiryInbox items={items} />;
}
