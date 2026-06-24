import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import {
  appendDigestAudit,
  appendOperatorTimeline,
  getDigestPreferences,
  readDigestRecords,
} from "@/lib/enquiry-store";

function applyPreferences(recipients: string[], prefs: any[], digestType: string) {
  return recipients.filter((email) => {
    const pref = prefs.find((item) => item.email.toLowerCase() === email.toLowerCase());
    if (!pref) return true;
    if (pref.unsubscribedAll) return false;
    if (digestType === "daily-ops" && pref.opsDaily === false) return false;
    if (digestType === "weekly-executive" && pref.executiveWeekly === false) return false;
    return true;
  });
}

export async function POST(req: Request) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const file = String(body?.file || "");
    if (!file) {
      return NextResponse.json({ ok: false, error: "Missing digest file." }, { status: 400 });
    }

    const items = await readDigestRecords();
    const found = items.find((item) => item.file === file);

    if (!found) {
      return NextResponse.json({ ok: false, error: "Digest not found." }, { status: 404 });
    }

    const prefs = await getDigestPreferences();
    const digestType = String(found.parsed?.digestType || "unknown");
    const baseRecipients = Array.isArray(found.parsed?.recipients) ? found.parsed.recipients.map(String) : [];
    const recipients = applyPreferences(baseRecipients, prefs, digestType);
    const subject = String(found.parsed?.subject || "Rubabs Digital Digest");
    const summary = found.parsed?.summary || {};
    const html = String(found.parsed?.html || "<p>No HTML stored.</p>");

    const webhookUrl = process.env.N8N_EXEC_SUMMARY_WEBHOOK_URL || "";
    const webhookToken = process.env.N8N_EXEC_SUMMARY_WEBHOOK_TOKEN || "";

    if (!webhookUrl || !webhookToken) {
      return NextResponse.json({ ok: false, error: "Digest webhook config missing." }, { status: 500 });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${webhookToken}`,
      },
      body: JSON.stringify({
        source: "rubabs-digital",
        digestType,
        resend: true,
        recipients,
        subject,
        html,
        summary,
      }),
      cache: "no-store",
    });

    await appendDigestAudit({
      at: new Date().toISOString(),
      type: "digest-resend",
      file,
      digestType,
      recipients,
      status: response.ok ? "sent" : "failed",
      actor: "admin",
    });

    await appendOperatorTimeline({
      at: new Date().toISOString(),
      type: "digest-resend",
      status: response.ok ? "sent" : "failed",
      message: response.ok ? "Digest resent." : "Digest resend failed.",
      file,
    });

    return NextResponse.json({
      ok: response.ok,
      recipients,
      status: response.ok ? "sent" : "failed",
    }, { status: response.ok ? 200 : 500 });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to resend digest." }, { status: 500 });
  }
}
