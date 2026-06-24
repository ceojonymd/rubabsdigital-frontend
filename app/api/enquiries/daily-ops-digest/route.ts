import { NextResponse } from "next/server";
import {
  appendOperatorTimeline,
  getAnalyticsSummary,
  getDigestSettings,
  saveDigestRecord,
} from "@/lib/enquiry-store";
import { verifyM2MRequest } from "@/lib/m2m-auth";

function today() {
  return new Date().toISOString().slice(0, 10);
}

function buildOpsHtml(summary: Awaited<ReturnType<typeof getAnalyticsSummary>>, severityRules: any[]) {
  const dead = summary.summary.deadLetterCount;
  const failed = summary.summary.failedCount;
  const pending = summary.summary.pendingRetryCount;

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;">
      <h2>Rubabs Digital Daily Ops Digest</h2>
      <p>Operational summary for today.</p>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
        <tr><th align="left">Metric</th><th align="left">Value</th></tr>
        <tr><td>Total Leads</td><td>${summary.summary.total}</td></tr>
        <tr><td>Sent</td><td>${summary.summary.sentCount}</td></tr>
        <tr><td>Failed</td><td>${failed}</td></tr>
        <tr><td>Pending Retry</td><td>${pending}</td></tr>
        <tr><td>Dead Letter</td><td>${dead}</td></tr>
      </table>
      <p style="margin-top:16px;"><strong>Severity rules:</strong></p>
      <ul>
        ${severityRules.map((r) => `<li>${r.key}: ${r.severity} → ${r.action}</li>`).join("")}
      </ul>
    </div>
  `;
}

export async function POST(req: Request) {
  const m2m = await verifyM2MRequest(req);
  if (!m2m.ok) {
    return NextResponse.json({ ok: false, error: m2m.error || "Unauthorized." }, { status: 401 });
  }

  let body: Record<string, unknown> = {};
  try {
    body = m2m.bodyText ? JSON.parse(m2m.bodyText) : {};
  } catch {}

  const from = typeof body?.from === "string" ? body.from : today();
  const to = typeof body?.to === "string" ? body.to : today();
  const mode = body?.mode === "live" ? "live" : "dry-run";

  const summary = await getAnalyticsSummary(from, to);
  const settings = await getDigestSettings();
  const recipients = settings.opsRecipients;
  const html = buildOpsHtml(summary, settings.severityRules);
  const subject = `Rubabs Digital Daily Ops Digest (${from})`;

  let delivery = {
    ok: true,
    status: "dry-run",
    message: "Daily ops digest prepared in dry-run mode.",
  };

  if (mode === "live" && settings.opsDigestEnabled) {
    const webhookUrl = process.env.N8N_EXEC_SUMMARY_WEBHOOK_URL || "";
    const webhookToken = process.env.N8N_EXEC_SUMMARY_WEBHOOK_TOKEN || "";

    if (!webhookUrl || !webhookToken) {
      delivery = {
        ok: false,
        status: "config-missing",
        message: "Digest webhook config missing.",
      };
    } else {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${webhookToken}`,
          },
          body: JSON.stringify({
            source: "rubabs-digital",
            digestType: "daily-ops",
            from,
            to,
            recipients,
            subject,
            html,
            summary,
            severityRules: settings.severityRules,
          }),
          cache: "no-store",
        });

        delivery = {
          ok: response.ok,
          status: response.ok ? "sent" : "failed",
          message: response.ok ? "Daily ops digest sent." : "Daily ops digest failed.",
        };
      } catch (error) {
        delivery = {
          ok: false,
          status: "failed",
          message: error instanceof Error ? error.message : "Unknown digest error.",
        };
      }
    }
  }

  const record = {
    createdAt: new Date().toISOString(),
    authMode: m2m.mode,
    mode,
    digestType: "daily-ops",
    from,
    to,
    recipients,
    subject,
    delivery,
    summary,
    severityRules: settings.severityRules,
  };

  const file = await saveDigestRecord(record);

  await appendOperatorTimeline({
    at: new Date().toISOString(),
    type: "daily-ops-digest",
    status: String(delivery.status),
    authMode: m2m.mode,
    file,
    message: String(delivery.message),
  });

  return NextResponse.json({
    ok: delivery.ok,
    file,
    subject,
    delivery,
  }, { status: delivery.ok ? 200 : 500 });
}
