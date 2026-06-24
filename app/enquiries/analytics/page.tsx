import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import { getAnalyticsSummary } from "@/lib/enquiry-store";
import LogoutButton from "@/components/enquiries/LogoutButton";
import AnalyticsCharts from "@/components/enquiries/AnalyticsCharts";
import RetryDeliveryButton from "@/components/enquiries/RetryDeliveryButton";

export const metadata = {
  title: "Enquiry Analytics | Rubab's Digital",
  description: "Analytics dashboard for lead desk reporting and delivery recovery.",
};

export default async function EnquiryAnalyticsPage() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    redirect("/admin-login?next=/enquiries/analytics");
  }

  const data = await getAnalyticsSummary();

  return (
    <main style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <section style={{ padding: "5rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
            <Link href="/enquiries" style={{ color: "var(--color-accent)", textDecoration: "none", fontWeight: 700 }}>
              ← Back to enquiries
            </Link>
            <LogoutButton />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 1rem + 4vw, 4.4rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Dashboard Analytics
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>and Recovery Layer.</span>
          </h1>

          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "780px", marginBottom: "1rem" }}>
            Track lead flow, delivery health, and failed items that need retry or recovery action.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.8rem", marginBottom: "1rem" }}>
            <StatCard label="Total Leads" value={String(data.summary.total)} />
            <StatCard label="Qualified" value={String(data.summary.qualifiedCount)} />
            <StatCard label="Sent" value={String(data.summary.sentCount)} />
            <StatCard label="Failed" value={String(data.summary.failedCount)} />
            <StatCard label="Config Missing" value={String(data.summary.configMissingCount)} />
            <StatCard label="Not Tested" value={String(data.summary.notTestedCount)} />
          </div>

          <AnalyticsCharts
            statusBuckets={data.charts.statusBuckets}
            deliveryBuckets={data.charts.deliveryBuckets}
            topServices={data.charts.topServices}
            volumeTrend={data.charts.volumeTrend}
          />

          <div
            style={{
              marginTop: "1rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Failure Queue</div>

            <div style={{ display: "grid", gap: "0.8rem" }}>
              {data.failures.length === 0 ? (
                <div style={{ color: "var(--color-text-muted)" }}>No failed or blocked delivery items right now.</div>
              ) : (
                data.failures.map((item) => (
                  <div
                    key={item.file}
                    style={{
                      display: "grid",
                      gap: "0.8rem",
                      gridTemplateColumns: "1.4fr 1fr auto",
                      alignItems: "center",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "1rem",
                      padding: "0.9rem",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{item.subject}</div>
                      <div style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                        {item.businessName} · {item.email}
                      </div>
                    </div>

                    <div>
                      <div style={{ marginBottom: "0.25rem", color: "var(--color-text)" }}>{item.deliveryStatus}</div>
                      <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                        {item.deliveryUpdatedAt || item.deliveryMessage || "No timestamp"}
                      </div>
                    </div>

                    <RetryDeliveryButton file={item.file} />
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

function StatCard({ label, value }: { label: string; value: string }) {
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
      <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", lineHeight: 1 }}>
        {value}
      </div>
    </div>
  );
}
