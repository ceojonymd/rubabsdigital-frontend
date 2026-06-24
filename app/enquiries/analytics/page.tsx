import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import { getAnalyticsSummary } from "@/lib/enquiry-store";
import LogoutButton from "@/components/enquiries/LogoutButton";
import AnalyticsCharts from "@/components/enquiries/AnalyticsCharts";
import RetryDeliveryButton from "@/components/enquiries/RetryDeliveryButton";
import RunRetryWorkerButton from "@/components/enquiries/RunRetryWorkerButton";
import AnalyticsFilters from "@/components/enquiries/AnalyticsFilters";
import ReplayDlqButton from "@/components/enquiries/ReplayDlqButton";
import AnalyticsExportButtons from "@/components/enquiries/AnalyticsExportButtons";

export const metadata = {
  title: "Enquiry Analytics | Rubab's Digital",
  description: "Analytics dashboard for lead desk reporting and delivery recovery.",
};

export default async function EnquiryAnalyticsPage({
  searchParams,
}: {
  searchParams?: { from?: string; to?: string };
}) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    redirect("/admin-login?next=/enquiries/analytics");
  }

  const from = searchParams?.from || "";
  const to = searchParams?.to || "";
  const data = await getAnalyticsSummary(from, to);

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
            Replay, Snapshot
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>and Handoff Layer.</span>
          </h1>

          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "780px", marginBottom: "1rem" }}>
            Export analytics snapshots, replay dead-letter items, run the retry worker, and integrate with n8n error workflow handoff.
          </p>

          <AnalyticsFilters />

          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <RunRetryWorkerButton />
            <AnalyticsExportButtons />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.8rem", marginBottom: "1rem" }}>
            <StatCard label="Total Leads" value={String(data.summary.total)} />
            <StatCard label="Pending Retry" value={String(data.summary.pendingRetryCount)} />
            <StatCard label="Dead Letter" value={String(data.summary.deadLetterCount)} />
            <StatCard label="Qualified" value={String(data.summary.qualifiedCount)} />
            <StatCard label="Sent" value={String(data.summary.sentCount)} />
            <StatCard label="Failed" value={String(data.summary.failedCount)} />
          </div>

          <AnalyticsCharts
            statusBuckets={data.charts.statusBuckets}
            deliveryBuckets={data.charts.deliveryBuckets}
            recoveryBuckets={data.charts.recoveryBuckets}
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
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Recovery Queue</div>

            <div style={{ display: "grid", gap: "0.8rem" }}>
              {data.failures.length === 0 ? (
                <div style={{ color: "var(--color-text-muted)" }}>No pending retry or dead-letter items in this filter range.</div>
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
                      <div style={{ marginBottom: "0.25rem", color: "var(--color-text)" }}>
                        {item.recoveryState} · retry {item.retryCount}
                      </div>
                      <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                        {item.deliveryUpdatedAt || item.deliveryMessage || "No timestamp"}
                      </div>
                    </div>

                    {item.recoveryState === "pending-retry" ? (
                      <RetryDeliveryButton file={item.file} />
                    ) : (
                      <ReplayDlqButton file={item.file} />
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div
            style={{
              marginTop: "1rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Operator Activity Timeline</div>

            <div style={{ display: "grid", gap: "0.75rem" }}>
              {data.timeline.length === 0 ? (
                <div style={{ color: "var(--color-text-muted)" }}>No operator activity found in this date range.</div>
              ) : (
                data.timeline.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "1rem",
                      padding: "0.9rem",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>
                      {String(item.type || "activity")} · {String(item.status || "unknown")}
                    </div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                      {String(item.subject || "")}
                    </div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                      {String(item.at || "")}
                    </div>
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
