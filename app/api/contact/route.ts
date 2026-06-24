import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type ContactPayload = {
  source?: string;
  page?: string;
  service?: string;
  packageDirection?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  businessName?: string;
  email?: string;
  details?: string;
  submittedAt?: string;
};

function required(value?: string) {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function persistFallback(record: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data", "enquiries");
  await fs.mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = path.join(dir, `enquiry-${stamp}.json`);
  await fs.writeFile(file, JSON.stringify(record, null, 2), "utf8");
  return file;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (!required(body.email) || !required(body.businessName) || !required(body.details)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please provide your business name, email, and project details.",
        },
        { status: 400 }
      );
    }

    const clean = {
      source: body.source || "website_contact_form",
      page: body.page || "/contact",
      service: body.service || "Not specified",
      packageDirection: body.packageDirection || "Not specified",
      budget: body.budget || "Not specified",
      timeline: body.timeline || "Not specified",
      projectType: body.projectType || "Not specified",
      businessName: body.businessName?.trim() || "",
      email: body.email?.trim() || "",
      details: body.details?.trim() || "",
      submittedAt: body.submittedAt || new Date().toISOString(),
    };

    const structuredSubject = `[Rubab's Digital] ${clean.service} enquiry from ${clean.businessName}`;

    const structuredText = [
      structuredSubject,
      "",
      `Source: ${clean.source}`,
      `Page: ${clean.page}`,
      `Business Name: ${clean.businessName}`,
      `Email: ${clean.email}`,
      `Service Needed: ${clean.service}`,
      `Package Direction: ${clean.packageDirection}`,
      `Budget Range: ${clean.budget}`,
      `Timeline: ${clean.timeline}`,
      `Project Type: ${clean.projectType}`,
      `Submitted At: ${clean.submittedAt}`,
      "",
      "Project Details:",
      clean.details,
    ].join("\n");

    const telegramText = [
      "📩 Rubab's Digital Enquiry",
      `Business: ${clean.businessName}`,
      `Email: ${clean.email}`,
      `Service: ${clean.service}`,
      `Package: ${clean.packageDirection}`,
      `Budget: ${clean.budget}`,
      `Timeline: ${clean.timeline}`,
      `Project: ${clean.projectType}`,
      `Page: ${clean.page}`,
    ].join("\n");

    const htmlMessage = `
      <h2>${escapeHtml(structuredSubject)}</h2>
      <p><strong>Source:</strong> ${escapeHtml(clean.source)}</p>
      <p><strong>Page:</strong> ${escapeHtml(clean.page)}</p>
      <p><strong>Business Name:</strong> ${escapeHtml(clean.businessName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(clean.email)}</p>
      <p><strong>Service Needed:</strong> ${escapeHtml(clean.service)}</p>
      <p><strong>Package Direction:</strong> ${escapeHtml(clean.packageDirection)}</p>
      <p><strong>Budget Range:</strong> ${escapeHtml(clean.budget)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(clean.timeline)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(clean.projectType)}</p>
      <p><strong>Submitted At:</strong> ${escapeHtml(clean.submittedAt)}</p>
      <hr />
      <p><strong>Project Details:</strong></p>
      <p>${escapeHtml(clean.details).replaceAll("\n", "<br />")}</p>
    `.trim();

    const opsRecord = {
      ok: true,
      type: "rubabs_digital_contact_enquiry",
      subject: structuredSubject,
      text: structuredText,
      html: htmlMessage,
      telegramText,
      contact: clean,
      ops: {
        inboxStatus: "new",
        priority:
          clean.packageDirection === "Enterprise Direction" || clean.budget === "$7,000+"
            ? "high"
            : clean.budget === "$3,000–$7,000"
            ? "medium"
            : "normal",
        channelTargets: ["n8n", "email", "telegram", "local_inbox"],
      },
      meta: {
        receivedAt: new Date().toISOString(),
        site: "Rubab's Digital",
      },
    };

    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
    const webhookToken = process.env.N8N_CONTACT_WEBHOOK_TOKEN;

    let handoff = {
      attempted: false,
      delivered: false,
      target: "local_fallback",
      status: 0,
      response: null as unknown,
      fallbackFile: "",
    };

    if (webhookUrl) {
      handoff.attempted = true;
      handoff.target = "n8n_webhook";

      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(webhookToken ? { Authorization: `Bearer ${webhookToken}` } : {}),
          },
          body: JSON.stringify(opsRecord),
          cache: "no-store",
        });

        const raw = await res.text();
        let parsed: unknown = raw;
        try {
          parsed = JSON.parse(raw);
        } catch {}

        if (!res.ok) {
          throw new Error(`n8n webhook returned ${res.status}`);
        }

        handoff.delivered = true;
        handoff.status = res.status;
        handoff.response = parsed;
      } catch (err) {
        handoff.delivered = false;
        handoff.status = 502;
        handoff.response = err instanceof Error ? err.message : "Webhook handoff failed";
        handoff.fallbackFile = await persistFallback(opsRecord);
      }
    } else {
      handoff.fallbackFile = await persistFallback(opsRecord);
    }

    return NextResponse.json({
      ok: true,
      message: "Your enquiry has been received. We will review it and get back to you shortly.",
      subject: structuredSubject,
      handoff,
      ops: opsRecord.ops,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process your enquiry right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
