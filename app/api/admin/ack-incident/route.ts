import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { canManageRoleSensitive, getAdminCookieName, getAdminRole, verifyAdminValue } from "@/lib/admin-auth";
import { acknowledgeIncident, appendOperatorTimeline } from "@/lib/enquiry-store";

export async function POST(req: Request) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const role = getAdminRole();
  if (!canManageRoleSensitive(role)) {
    return NextResponse.json({ ok: false, error: "Operator cannot acknowledge incidents." }, { status: 403 });
  }

  try {
    const body = await req.json();
    const incidentId = String(body?.incidentId || "");
    if (!incidentId) {
      return NextResponse.json({ ok: false, error: "Missing incident id." }, { status: 400 });
    }

    const item = await acknowledgeIncident(incidentId, role);
    if (!item) {
      return NextResponse.json({ ok: false, error: "Incident not found." }, { status: 404 });
    }

    await appendOperatorTimeline({
      at: new Date().toISOString(),
      type: "incident-ack",
      status: "acknowledged",
      message: incidentId,
    });

    return NextResponse.json({ ok: true, item });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to acknowledge incident." }, { status: 500 });
  }
}
