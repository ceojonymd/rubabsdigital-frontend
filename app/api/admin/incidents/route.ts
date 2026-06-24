import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, getAdminRole, verifyAdminValue } from "@/lib/admin-auth";
import {
  appendOperatorTimeline,
  createIncident,
  readIncidentEvents,
  readIncidents,
} from "@/lib/enquiry-store";

export async function GET() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const items = await readIncidents();
  const events = await readIncidentEvents();
  return NextResponse.json({ ok: true, role: getAdminRole(), items, events: events.slice(0, 100) });
}

export async function POST(req: Request) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const role = getAdminRole();

  try {
    const body = await req.json();
    const item = await createIncident({
      type: String(body?.type || "delivery"),
      severity: String(body?.severity || "high"),
      title: String(body?.title || "Untitled incident"),
      roleCreatedBy: role,
      escalationDueAt: typeof body?.escalationDueAt === "string" ? body.escalationDueAt : undefined,
    });

    await appendOperatorTimeline({
      at: item.at,
      type: "incident-created",
      status: item.status,
      message: item.title,
    });

    return NextResponse.json({ ok: true, item });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to create incident." }, { status: 500 });
  }
}
