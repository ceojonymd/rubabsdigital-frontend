import { NextResponse } from "next/server";
import {
  appendDigestAudit,
  getDigestPreferences,
  saveDigestPreferences,
  verifyPreferenceToken,
} from "@/lib/enquiry-store";

export async function GET(_: Request, { params }: { params: { token: string } }) {
  const verified = verifyPreferenceToken(params.token);
  if (!verified.ok || !verified.email) {
    return NextResponse.json({ ok: false, error: verified.error || "Invalid token." }, { status: 401 });
  }

  const items = await getDigestPreferences();
  const found = items.find((item: any) => item.email === verified.email) || {
    email: verified.email,
    opsDaily: true,
    executiveWeekly: true,
    criticalAlerts: true,
    unsubscribedAll: false,
  };

  await appendDigestAudit({
    at: new Date().toISOString(),
    type: "public-preference-read",
    email: verified.email,
    actor: "public-link",
  });

  return NextResponse.json({ ok: true, item: found, expiresAt: verified.expiresAt });
}

export async function POST(req: Request, { params }: { params: { token: string } }) {
  const verified = verifyPreferenceToken(params.token);
  if (!verified.ok || !verified.email) {
    return NextResponse.json({ ok: false, error: verified.error || "Invalid token." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const items = await getDigestPreferences();
    const next = items.filter((item: any) => item.email !== verified.email);

    next.unshift({
      email: verified.email,
      opsDaily: body?.opsDaily !== false,
      executiveWeekly: body?.executiveWeekly !== false,
      criticalAlerts: body?.criticalAlerts !== false,
      unsubscribedAll: body?.unsubscribedAll === true,
      updatedAt: new Date().toISOString(),
    });

    await saveDigestPreferences(next);

    await appendDigestAudit({
      at: new Date().toISOString(),
      type: "public-preference-update",
      email: verified.email,
      actor: "public-link",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to update preferences." }, { status: 500 });
  }
}
