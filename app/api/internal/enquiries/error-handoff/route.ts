import { NextResponse } from "next/server";
import {
  appendDeliveryLog,
  appendOperatorTimeline,
  classifyRecoveryState,
  readEnquiryByFile,
  writeEnquiryByFile,
} from "@/lib/enquiry-store";
import { verifyM2MRequest } from "@/lib/m2m-auth";

export async function POST(req: Request) {
  const m2m = await verifyM2MRequest(req);
  if (!m2m.ok) {
    return NextResponse.json({ ok: false, error: m2m.error || "Unauthorized." }, { status: 401, headers: { "X-Robots-Tag": "noindex, nofollow" } });
  }

  try {
    const body = JSON.parse(m2m.bodyText || "{}");
    const file = typeof body?.file === "string" ? body.file : "";
    const errorMessage = typeof body?.errorMessage === "string" ? body.errorMessage : "Unknown n8n error.";
    const sourceWorkflow = typeof body?.sourceWorkflow === "string" ? body.sourceWorkflow : "unknown-workflow";
    const statusCode = Number(body?.statusCode || 500);
    const now = new Date().toISOString();

    if (!file) {
      return NextResponse.json({ ok: false, error: "Invalid file." }, { status: 400 });
    }

    const enquiry = await readEnquiryByFile(file);
    const retryCount = Number(enquiry.delivery?.retryCount || 0);
    const recoveryState = classifyRecoveryState(`${statusCode} ${errorMessage}`, retryCount);

    enquiry.delivery = {
      ...(enquiry.delivery || {}),
      lastStatus: "failed",
      lastUpdatedAt: now,
      lastMessage: errorMessage,
      recoveryState,
      lastHandoffWorkflow: sourceWorkflow,
    };

    await writeEnquiryByFile(file, enquiry);
    await appendDeliveryLog(file, {
      file,
      action: "error-handoff",
      at: now,
      status: "failed",
      statusCode,
      message: errorMessage,
      sourceWorkflow,
      recoveryState,
      authMode: m2m.mode,
    });

    await appendOperatorTimeline({
      at: now,
      type: "error-handoff",
      file,
      subject: enquiry.subject || "Untitled enquiry",
      status: "failed",
      sourceWorkflow,
      recoveryState,
      authMode: m2m.mode,
      message: errorMessage,
    });

    return NextResponse.json({ ok: true, recoveryState, authMode: m2m.mode });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process error handoff." }, { status: 500 });
  }
}
