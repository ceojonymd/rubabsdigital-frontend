import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import {
  appendDeliveryLog,
  appendOperatorTimeline,
  classifyRecoveryState,
  readEnquiryByFile,
  readEnquiryRows,
  writeEnquiryByFile,
} from "@/lib/enquiry-store";

export async function POST() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
  const webhookToken = process.env.N8N_CONTACT_WEBHOOK_TOKEN;
  const now = new Date().toISOString();

  if (!webhookUrl || !webhookToken) {
    return NextResponse.json({ ok: false, error: "Webhook config missing." }, { status: 500 });
  }

  const rows = await readEnquiryRows();
  const queue = rows.filter((row) => row.recoveryState === "pending-retry").slice(0, 10);

  const results = [];

  for (const row of queue) {
    const enquiry = await readEnquiryByFile(row.file);
    const retryCount = Number(enquiry.delivery?.retryCount || 0) + 1;

    try {
      const payload = {
        source: "rubabs-digital",
        workerAt: now,
        subject: enquiry.subject || "Untitled enquiry",
        contact: enquiry.contact || {},
        ops: enquiry.ops || {},
        meta: enquiry.meta || {},
        html: `
          <h2>${enquiry.subject || "Untitled enquiry"}</h2>
          <p><strong>Business:</strong> ${enquiry.contact?.businessName || ""}</p>
          <p><strong>Email:</strong> ${enquiry.contact?.email || ""}</p>
          <p><strong>Service:</strong> ${enquiry.contact?.service || ""}</p>
        `,
        telegramText:
          `Scheduled Retry Rubabs Digital\n` +
          `Subject: ${enquiry.subject || "Untitled enquiry"}\n` +
          `Business: ${enquiry.contact?.businessName || ""}\n` +
          `Email: ${enquiry.contact?.email || ""}`,
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${webhookToken}`,
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      let responseBody: unknown = null;
      try {
        responseBody = await response.json();
      } catch {
        responseBody = await response.text();
      }

      const status = response.ok ? "sent" : "failed";
      const message = response.ok ? "Scheduled retry completed." : "Scheduled retry failed.";
      const recoveryState = response.ok ? "clear" : classifyRecoveryState(message, retryCount);

      enquiry.delivery = {
        ...(enquiry.delivery || {}),
        lastStatus: status,
        lastUpdatedAt: now,
        lastMessage: message,
        retryCount,
        recoveryState,
      };

      await writeEnquiryByFile(row.file, enquiry);
      await appendDeliveryLog(row.file, {
        file: row.file,
        action: "scheduled-retry",
        workerAt: now,
        status,
        message,
        retryCount,
        recoveryState,
        responseBody,
      });

      await appendOperatorTimeline({
        at: now,
        type: "scheduled-retry",
        file: row.file,
        subject: enquiry.subject || "Untitled enquiry",
        status,
        retryCount,
        recoveryState,
        message,
      });

      results.push({ file: row.file, status, retryCount, recoveryState });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown scheduled retry error.";
      const recoveryState = classifyRecoveryState(message, retryCount);

      enquiry.delivery = {
        ...(enquiry.delivery || {}),
        lastStatus: "failed",
        lastUpdatedAt: now,
        lastMessage: message,
        retryCount,
        recoveryState,
      };

      await writeEnquiryByFile(row.file, enquiry);
      await appendDeliveryLog(row.file, {
        file: row.file,
        action: "scheduled-retry",
        workerAt: now,
        status: "failed",
        message,
        retryCount,
        recoveryState,
      });

      await appendOperatorTimeline({
        at: now,
        type: "scheduled-retry",
        file: row.file,
        subject: enquiry.subject || "Untitled enquiry",
        status: "failed",
        retryCount,
        recoveryState,
        message,
      });

      results.push({ file: row.file, status: "failed", retryCount, recoveryState });
    }
  }

  return NextResponse.json({
    ok: true,
    processed: results.length,
    results,
  });
}
