import { NextResponse } from "next/server";

const WORKER_API = "https://rubabsdigital-api.rdceojony.workers.dev";

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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (!required(body.email) || !required(body.businessName) || !required(body.details)) {
      return NextResponse.json(
        { ok: false, error: "Please provide your business name, email, and project details." },
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

    const subject = `New Enquiry: ${clean.businessName} — ${clean.service}`;
    const htmlBody = `
      <h2>${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Business</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.businessName)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.email)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.service)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Package</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.packageDirection)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Budget</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.budget)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Timeline</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.timeline)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Project Type</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.projectType)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Details</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(clean.details)}</td></tr>
      </table>
      <p style="margin-top:16px;color:#666">Source: ${escapeHtml(clean.source)} | Page: ${escapeHtml(clean.page)} | ${escapeHtml(clean.submittedAt)}</p>
    `.trim();

    // ── 1. Store in D1 via Worker API (non-blocking) ──
    let workerOk = false;
    const workerPromise = fetch(`${WORKER_API}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service: clean.service,
        package_direction: clean.packageDirection,
        budget: clean.budget,
        timeline: clean.timeline,
        project_type: clean.projectType,
        business_name: clean.businessName,
        email: clean.email,
        details: clean.details,
      }),
    }).then(r => { workerOk = r.ok; return r.json(); }).catch(() => null);

    // ── 2. Send email via Resend (from Vercel env) ──
    let emailSent = false;
    const resendKey = process.env.RESEND_API_KEY;
    
    if (resendKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Rubab\'s Digital <onboarding@resend.dev>",
            to: ["ceojonym@gmail.com"],
            subject,
            html: htmlBody,
          }),
        });
        emailSent = emailRes.ok;
        if (!emailRes.ok) {
          const errText = await emailRes.text();
          console.error(`[contact] Resend ${emailRes.status}: ${errText}`);
        }
      } catch (err) {
        console.error("[contact] Resend failed:", err);
      }
    } else {
      console.warn("[contact] RESEND_API_KEY not set");
    }

    // Wait for Worker storage
    await workerPromise;

    return NextResponse.json({
      ok: true,
      message: emailSent
        ? "Your enquiry has been received. We will review it and get back to you shortly."
        : workerOk
        ? "Your enquiry has been received and queued for follow-up."
        : "Your enquiry has been noted. We will contact you soon.",
      delivered: workerOk,
      email_sent: emailSent,
    });
  } catch (error) {
    console.error("[contact] unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process your enquiry right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
