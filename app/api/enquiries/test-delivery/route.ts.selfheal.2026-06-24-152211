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
    const mode = body?.mode === "live" ? "live" : "dry-run";

    if (!file) {
      return NextResponse.json({ ok: false, error: "Invalid file." }, { status: 400 });
    }

    const enquiry = await readEnquiryByFile(file);
    const now = new Date().toISOString();

    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
    const webhookToken = process.env.N8N_CONTACT_WEBHOOK_TOKEN;

    let result: Record<string, unknown> = {
      ok: true,
      mode,
      testedAt: now,
      status: "dry-run",
      message: "Dry run completed. No live webhook called.",
    };

    if (mode === "live") {
      if (!webhookUrl || !webhookToken) {
        result = {
          ok: false,
          mode,
          testedAt: now,
          status: "config-missing",
          message: "Webhook URL or token missing.",
        };
      } else {
        try {
          const payload = {
            source: "rubabs-digital",
            testedAt: now,
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
              `New Rubabs Digital delivery test\n` +
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
            mode,
            testedAt: now,
            status: response.ok ? "sent" : "failed",
            statusCode: response.status,
            message: response.ok ? "Live webhook call completed." : "Webhook returned an error.",
            responseBody,
          };
        } catch (error) {
          result = {
            ok: false,
            mode,
            testedAt: now,
            status: "failed",
            message: error instanceof Error ? error.message : "Unknown webhook error.",
          };
        }
      }
    }

    enquiry.delivery = {
      ...(enquiry.delivery || {}),
      lastStatus: String(result.status || "unknown"),
      lastUpdatedAt: now,
      lastMessage: String(result.message || ""),
      lastMode: mode,
    };

    await writeEnquiryByFile(file, enquiry);

    await appendDeliveryLog(file, {
      file,
      ...result,
    });

    return NextResponse.json(result, { status: result.ok ? 200 : 500 });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to trigger test delivery." }, { status: 500 });
  }
}
