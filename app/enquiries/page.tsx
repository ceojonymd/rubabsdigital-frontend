import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EnquiryInbox from "@/components/enquiries/EnquiryInbox";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import { readEnquiryRows } from "@/lib/enquiry-store";

export const metadata = {
  title: "Enquiries | Rubab's Digital",
  description: "Admin inbox view for local enquiry fallback records.",
};

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams?: { q?: string; status?: string; page?: string };
}) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    redirect("/admin-login?next=/enquiries");
  }

  const q = (searchParams?.q || "").trim().toLowerCase();
  const status = (searchParams?.status || "").trim().toLowerCase();
  const page = Math.max(1, Number(searchParams?.page || "1") || 1);
  const perPage = 10;

  const allRows = await readEnquiryRows();

  const filtered = allRows.filter((item) => {
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
        item.deliveryStatus,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q);

    const matchesStatus = !status || status === "all" || item.inboxStatus.toLowerCase() === status;
    return matchesQ && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(page, totalPages);
  const items = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  return <EnquiryInbox items={items} page={safePage} totalPages={totalPages} />;
}
