import { NextResponse } from "next/server";
import { appendDigestAudit, detectSlaBreaches, getDigestSettings } from "@/lib/enquiry-store";
import { verifyM2MRequest } from "@/lib/m2m-auth";

async function notifyBreaches(breached: any[]) {
  if (!breached.length) {
    return { ok: true, skipped: true, notified: 0 };
  }

  const webhookUrl = process.env.N8N_CRITICAL_ALERT_WEBHOOK_URL || "";
  const webhookToken = process.env.N8N_CRITICAL_ALERT_WEBHOOK_TOKEN || "";
  const telegramBot = process.env.TELEGRAM_BOT_TOKEN || "";
  const telegramChat = process.env.TELEGRAM_CHAT_ID || "";
  const settings = await getDigestSettings();
  const recipients = Array.isArray(settings.opsRecipients) ? settings.opsRecipients : [];

  const text = breached
    .map((item) => `SLA breached: ${item.title} (${item.severity}) due ${item.escalationDueAt}`)
    .join("\n");

  let emailOk = false;
  let telegramOk = false;

  if (webhookUrl && webhookToken) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${webhookToken}`,
      },
      body: JSON.stringify({
        source: "rubabs-digital",
        channel: "incident-sla-breach",
        recipients,
        subject: "Rubabs Digital Incident SLA Breach",
        text,
        incidents: breached,
      }),
      cache: "no-store",
    });
    emailOk = res.ok;
  }

  if (telegramBot && telegramChat) {
    const tg = await fetch(`https://api.telegram.org/bot${telegramBot}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: telegramChat,
        text,
      }),
      cache: "no-store",
    });
    telegramOk = tg.ok;
  }

  return { ok: emailOk || telegramOk, skipped: false, notified: breached.length, emailOk, telegramOk };
}

export async function POST(req: Request) {
  const m2m = await verifyM2MRequest(req);
  if (!m2m.ok) {
    return NextResponse.json({ ok: false, error: m2m.error || "Unauthorized." }, { status: 401 });
  }

  const breached = await detectSlaBreaches();
  const notify = await notifyBreaches(breached);

  await appendDigestAudit({
    at: new Date().toISOString(),
    type: "incident-sla-check",
    breachedCount: breached.length,
    actor: "scheduler",
    notify,
    keySlot: m2m.keySlot || "",
  });

  return NextResponse.json({
    ok: true,
    breachedCount: breached.length,
    breached,
    notify,
  });
}
