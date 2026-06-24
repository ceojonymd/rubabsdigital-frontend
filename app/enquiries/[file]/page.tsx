import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import { readDeliveryLogs, readEnquiryByFile } from "@/lib/enquiry-store";
import LogoutButton from "@/components/enquiries/LogoutButton";
import TestDeliveryButton from "@/components/enquiries/TestDeliveryButton";

export default async function EnquiryDetailPage({
  params,
}: {
  params: { file: string };
}) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    redirect("/admin-login?next=/enquiries");
  }

  const file = decodeURIComponent(params.file);
  const enquiry = await readEnquiryByFile(file);
  const logs = await readDeliveryLogs(file);

  return (
    <main style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <section style={{ padding: "5rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
            <Link href="/enquiries" style={{ color: "var(--color-accent)", textDecoration: "none", fontWeight: 700 }}>
              ← Back to enquiries
            </Link>
            <LogoutButton />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.1rem, 1rem + 4vw, 4.2rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            {enquiry.subject || "Untitled enquiry"}
          </h1>

          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "1rem" }}>
            Review full lead context, run test delivery, and inspect webhook response history.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.8rem", marginBottom: "1.2rem" }}>
            <InfoCard label="Business" value={enquiry.contact?.businessName || "Unknown"} />
            <InfoCard label="Email" value={enquiry.contact?.email || "Unknown"} />
            <InfoCard label="Service" value={enquiry.contact?.service || "Not specified"} />
            <InfoCard label="Timeline" value={enquiry.contact?.timeline || "Not specified"} />
            <InfoCard label="Status" value={enquiry.ops?.inboxStatus || "new"} />
            <InfoCard label="Priority" value={enquiry.ops?.priority || "normal"} />
            <InfoCard label="Last Delivery" value={enquiry.delivery?.lastStatus || "not-tested"} />
            <InfoCard label="Updated" value={enquiry.delivery?.lastUpdatedAt || "—"} />
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.65rem" }}>Internal Note</div>
            <div style={{ color: "var(--color-text-muted)", whiteSpace: "pre-wrap" }}>
              {enquiry.ops?.note || "No internal note yet."}
            </div>
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Test Delivery</div>
            <TestDeliveryButton file={file} />
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Webhook Response Log</div>

            <div style={{ display: "grid", gap: "0.8rem" }}>
              {logs.length === 0 ? (
                <div style={{ color: "var(--color-text-muted)" }}>No delivery log yet.</div>
              ) : (
                logs.map((log, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "1rem",
                      padding: "0.9rem",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.35rem" }}>
                      {String(log.status || "unknown")} · {String(log.mode || "dry-run")}
                    </div>
                    <div style={{ color: "var(--color-text-muted)", marginBottom: "0.45rem" }}>
                      {String(log.testedAt || "")}
                    </div>
                    <pre
                      style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        color: "var(--color-text-muted)",
                        fontSize: "0.92rem",
                      }}
                    >
{JSON.stringify(log, null, 2)}
                    </pre>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <div style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: "0.45rem" }}>
        {label}
      </div>
      <div style={{ lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}
