import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import {
  appendDeliveryLog,
  readEnquiryByFile,
  writeEnquiryByFile,
} from "@/lib/enquiry-store";

export async function POST(req: Request) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const file = typeof body?.file === "string" ? body.file : "";

    if (!file) {
      return NextResponse.json({ ok: false, error: "Invalid file." }, { status: 400 });
    }

    const enquiry = await readEnquiryByFile(file);
    const now = new Date().toISOString();

    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
    const webhookToken = process.env.N8N_CONTACT_WEBHOOK_TOKEN;

    let result: Record<string, unknown>;

    if (!webhookUrl || !webhookToken) {
      result = {
        ok: false,
        retriedAt: now,
        status: "config-missing",
        message: "Webhook URL or token missing.",
      };
    } else {
      try {
        const payload = {
          source: "rubabs-digital",
          retriedAt: now,
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
            `Retry Rubabs Digital delivery\n` +
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

        result = {
          ok: response.ok,
          retriedAt: now,
          status: response.ok ? "sent" : "failed",
          statusCode: response.status,
          message: response.ok ? "Retry delivery completed." : "Retry delivery failed.",
          responseBody,
        };
      } catch (error) {
        result = {
          ok: false,
          retriedAt: now,
          status: "failed",
          message: error instanceof Error ? error.message : "Unknown retry error.",
        };
      }
    }

    enquiry.delivery = {
      ...(enquiry.delivery || {}),
      lastStatus: String(result.status || "unknown"),
      lastUpdatedAt: now,
      lastMessage: String(result.message || ""),
      retryCount: Number(enquiry.delivery?.retryCount || 0) + 1,
    };

    await writeEnquiryByFile(file, enquiry);
    await appendDeliveryLog(file, { file, action: "retry", ...result });

    return NextResponse.json(result, { status: result.ok ? 200 : 500 });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to retry delivery." }, { status: 500 });
  }
}
