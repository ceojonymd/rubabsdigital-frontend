import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

async function persistFallback(record: Record<string, unknown>) {
  const dir = path.join("/tmp", "rubabs-digital-enquiries");
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

    // ── Primary: POST to Cloudflare Worker API ──
    // Worker stores in D1 + sends email via Resend
    let workerOk = false;
    let workerResponse: unknown = null;

    try {
      const res = await fetch(`${WORKER_API}/api/contact`, {
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
          details: [
            `Source: ${clean.source}`,
            `Page: ${clean.page}`,
            `Submitted: ${clean.submittedAt}`,
            "",
            clean.details,
          ].join("\n"),
        }),
      });

      const data = await res.json();
      workerOk = res.ok && data?.success;
      workerResponse = data;
    } catch (err) {
      console.error("[contact] Worker API failed:", err);
      workerResponse = err instanceof Error ? err.message : "Worker unreachable";
    }

    // ── Fallback: save to /tmp if Worker failed ──
    let fallbackFile = "";
    if (!workerOk) {
      try {
        fallbackFile = await persistFallback({ ...clean, workerResponse });
      } catch (e) {
        console.error("[contact] fallback failed:", e);
      }
    }

    return NextResponse.json({
      ok: true,
      message: workerOk
        ? "Your enquiry has been received. We will review it and get back to you shortly."
        : "Your enquiry has been queued for follow-up. We will contact you soon.",
      delivered: workerOk,
    });
  } catch (error) {
    console.error("[contact] unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process your enquiry right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
