import { NextResponse } from "next/server";
import { readEnquiryByFile, writeEnquiryByFile, appendOperatorTimeline } from "@/lib/enquiry-store";
import { verifyM2MRequest } from "@/lib/m2m-auth";

export async function POST(req: Request) {
  const m2m = await verifyM2MRequest(req);
  if (!m2m.ok) {
    return NextResponse.json({ ok: false, error: m2m.error || "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const file = typeof body?.file === "string" ? body.file : "";
    const inboxStatus = typeof body?.inboxStatus === "string" ? body.inboxStatus : "";

    if (!file || !inboxStatus) {
      return NextResponse.json({ ok: false, error: "Missing file or inboxStatus." }, { status: 400 });
    }

    const record = await readEnquiryByFile(file);
    const updated = {
      ...record,
      ops: {
        ...(record?.ops || {}),
        inboxStatus,
        updatedAt: new Date().toISOString(),
      },
    };

    await writeEnquiryByFile(file, updated);
    await appendOperatorTimeline({
      at: new Date().toISOString(),
      type: "status-update",
      status: inboxStatus,
      message: file,
      actor: "scheduler",
      keySlot: m2m.keySlot || "",
    });

    return NextResponse.json({ ok: true, file, inboxStatus });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to update status." }, { status: 500 });
  }
}
