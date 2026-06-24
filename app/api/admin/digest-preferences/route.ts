import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import {
  appendDigestAudit,
  appendOperatorTimeline,
  getDigestPreferences,
  saveDigestPreferences,
} from "@/lib/enquiry-store";

export async function GET() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const items = await getDigestPreferences();
  return NextResponse.json({ ok: true, items });
}

export async function POST(req: Request) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const items = Array.isArray(body?.items) ? body.items : [];

    const sanitized = items.map((item: any) => ({
      email: String(item?.email || "").trim(),
      opsDaily: item?.opsDaily !== false,
      executiveWeekly: item?.executiveWeekly !== false,
      criticalAlerts: item?.criticalAlerts !== false,
      unsubscribedAll: item?.unsubscribedAll === true,
      updatedAt: new Date().toISOString(),
    })).filter((item: any) => item.email);

    await saveDigestPreferences(sanitized);

    await appendDigestAudit({
      at: new Date().toISOString(),
      type: "preferences-save",
      count: sanitized.length,
      actor: "admin",
    });

    await appendOperatorTimeline({
      at: new Date().toISOString(),
      type: "digest-preferences",
      status: "saved",
      message: "Digest preferences updated.",
    });

    return NextResponse.json({ ok: true, items: sanitized });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to save preferences." }, { status: 500 });
  }
}
