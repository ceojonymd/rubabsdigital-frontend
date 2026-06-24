import { NextResponse } from "next/server";
import {
  appendDeliveryLog,
  appendOperatorTimeline,
  readEnquiryByFile,
  writeEnquiryByFile,
} from "@/lib/enquiry-store";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const file = typeof body?.file === "string" ? body.file : "";
    const now = new Date().toISOString();

    if (!file) {
      return NextResponse.json({ ok: false, error: "Invalid file." }, { status: 400 });
    }

    const enquiry = await readEnquiryByFile(file);

    enquiry.delivery = {
      ...(enquiry.delivery || {}),
      recoveryState: "pending-retry",
      lastUpdatedAt: now,
      lastMessage: "Replay requested from dead-letter queue.",
    };

    await writeEnquiryByFile(file, enquiry);
    await appendDeliveryLog(file, {
      file,
      action: "replay-dlq",
      at: now,
      status: "queued",
      message: "Moved from dead-letter to pending-retry.",
      recoveryState: "pending-retry",
    });

    await appendOperatorTimeline({
      at: now,
      type: "replay-dlq",
      file,
      subject: enquiry.subject || "Untitled enquiry",
      status: "queued",
      recoveryState: "pending-retry",
      message: "Replay requested from dead-letter queue.",
    });

    return NextResponse.json({ ok: true, recoveryState: "pending-retry" });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to replay DLQ item." }, { status: 500 });
  }
}
