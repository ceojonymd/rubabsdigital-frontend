import { NextResponse } from "next/server";
import {
  appendDeliveryLog,
  appendOperatorTimeline,
  classifyRecoveryState,
  readEnquiryByFile,
  writeEnquiryByFile,
} from "@/lib/enquiry-store";

export async function POST(req: Request) {
  try {
    const body = await req.json();
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
    });

    await appendOperatorTimeline({
      at: now,
      type: "error-handoff",
      file,
      subject: enquiry.subject || "Untitled enquiry",
      status: "failed",
      sourceWorkflow,
      recoveryState,
      message: errorMessage,
    });

    return NextResponse.json({ ok: true, recoveryState });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process error handoff." }, { status: 500 });
  }
}
