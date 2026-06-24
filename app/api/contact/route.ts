import { NextResponse } from "next/server";

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

    console.log(structuredText);

    return NextResponse.json({
      ok: true,
      message: "Your enquiry has been received. We will review it and get back to you shortly.",
      subject: structuredSubject,
      payload: clean,
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
