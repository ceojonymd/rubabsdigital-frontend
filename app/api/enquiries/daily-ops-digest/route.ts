import { NextResponse } from "next/server";
import {
  appendDigestAudit,
  appendOperatorTimeline,
  getAnalyticsSummary,
  getDigestPreferences,
  getDigestSettings,
  saveDigestRecord,
} from "@/lib/enquiry-store";
import { verifyM2MRequest } from "@/lib/m2m-auth";

function today() {
  return new Date().toISOString().slice(0, 10);
}

function buildOpsHtml(summary: Awaited<ReturnType<typeof getAnalyticsSummary>>, severityRules: any[]) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;">
      <h2>Rubabs Digital Daily Ops Digest</h2>
      <p>Operational summary for today.</p>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
        <tr><th align="left">Metric</th><th align="left">Value</th></tr>
        <tr><td>Total Leads</td><td>${summary.summary.total}</td></tr>
        <tr><td>Sent</td><td>${summary.summary.sentCount}</td></tr>
        <tr><td>Failed</td><td>${summary.summary.failedCount}</td></tr>
        <tr><td>Pending Retry</td><td>${summary.summary.pendingRetryCount}</td></tr>
        <tr><td>Dead Letter</td><td>${summary.summary.deadLetterCount}</td></tr>
      </table>
      <p style="margin-top:16px;"><strong>Severity rules:</strong></p>
      <ul>
        ${severityRules.map((r) => `<li>${r.key}: ${r.severity} → ${r.action}</li>`).join("")}
      </ul>
    </div>
  `;
}

function filterRecipients(recipients: string[], prefs: any[], field: "opsDaily" | "executiveWeekly" | "criticalAlerts") {
  return recipients.filter((email) => {
    const pref = prefs.find((item) => item.email.toLowerCase() === email.toLowerCase());
    if (!pref) return true;
    if (pref.unsubscribedAll) return false;
    return pref[field] !== false;
  });
}

async function sendCriticalFastLane(summary: Awaited<ReturnType<typeof getAnalyticsSummary>>, recipients: string[]) {
  if (summary.summary.deadLetterCount < 1) {
    return { ok: true, skipped: true, message: "No critical dead-letter count." };
  }

  const webhookUrl = process.env.N8N_CRITICAL_ALERT_WEBHOOK_URL || "";
  const webhookToken = process.env.N8N_CRITICAL_ALERT_WEBHOOK_TOKEN || "";
  const telegramBot = process.env.TELEGRAM_BOT_TOKEN || "";
  const telegramChat = process.env.TELEGRAM_CHAT_ID || "";

  const message = `Rubabs Digital critical alert: dead-letter=${summary.summary.deadLetterCount}, failed=${summary.summary.failedCount}, pending-retry=${summary.summary.pendingRetryCount}`;

  let emailResult = { ok: false, status: "not-configured" };
  let telegramResult = { ok: false, status: "not-configured" };

  if (webhookUrl && webhookToken) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${webhookToken}`,
      },
      body: JSON.stringify({
        source: "rubabs-digital",
        channel: "critical-alert-email",
        recipients,
        subject: "Rubabs Digital Critical Alert",
        text: message,
        summary,
      }),
      cache: "no-store",
    });

    emailResult = { ok: response.ok, status: response.ok ? "sent" : "failed" };
  }

  if (telegramBot && telegramChat) {
    const tg = await fetch(`https://api.telegram.org/bot${telegramBot}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: telegramChat,
        text: message,
      }),
      cache: "no-store",
    });

    telegramResult = { ok: tg.ok, status: tg.ok ? "sent" : "failed" };
  }

  return {
    ok: emailResult.ok || telegramResult.ok,
    skipped: false,
    emailResult,
    telegramResult,
    message,
  };
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
  const prefs = await getDigestPreferences();

  const baseRecipients = settings.opsRecipients;
  const recipients = filterRecipients(baseRecipients, prefs, "opsDaily");
  const criticalRecipients = filterRecipients(baseRecipients, prefs, "criticalAlerts");
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

  const critical = mode === "live"
    ? await sendCriticalFastLane(summary, criticalRecipients)
    : { ok: true, skipped: true, message: "Critical fast lane skipped in dry-run." };

  const record = {
    createdAt: new Date().toISOString(),
    authMode: m2m.mode,
    keySlot: m2m.keySlot || "",
    mode,
    digestType: "daily-ops",
    from,
    to,
    recipients,
    subject,
    html,
    delivery,
    critical,
    summary,
    severityRules: settings.severityRules,
  };

  const file = await saveDigestRecord(record);

  await appendDigestAudit({
    at: new Date().toISOString(),
    type: "digest-create",
    file,
    digestType: "daily-ops",
    deliveryStatus: delivery.status,
    criticalStatus: critical.skipped ? "skipped" : critical.ok ? "sent" : "failed",
    keySlot: m2m.keySlot || "",
  });

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
    critical,
  }, { status: delivery.ok ? 200 : 500 });
}
