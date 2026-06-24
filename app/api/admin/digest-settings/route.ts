import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import { appendOperatorTimeline, getDigestSettings, saveDigestSettings } from "@/lib/enquiry-store";

export async function GET() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const settings = await getDigestSettings();
  return NextResponse.json({ ok: true, settings });
}

export async function POST(req: Request) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const payload = {
      opsRecipients: Array.isArray(body?.opsRecipients) ? body.opsRecipients.map(String) : [],
      executiveRecipients: Array.isArray(body?.executiveRecipients) ? body.executiveRecipients.map(String) : [],
      opsDigestEnabled: Boolean(body?.opsDigestEnabled),
      executiveDigestEnabled: Boolean(body?.executiveDigestEnabled),
      severityRules: Array.isArray(body?.severityRules) ? body.severityRules : [],
      updatedAt: new Date().toISOString(),
    };

    await saveDigestSettings(payload);
    await appendOperatorTimeline({
      at: new Date().toISOString(),
      type: "digest-settings",
      status: "saved",
      message: "Digest settings updated.",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to save settings." }, { status: 500 });
  }
}
