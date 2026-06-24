import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { canManageRoleSensitive, getAdminCookieName, getAdminRole, verifyAdminValue } from "@/lib/admin-auth";
import { appendDigestAudit, issuePreferenceToken } from "@/lib/enquiry-store";

export async function POST(req: Request) {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const role = getAdminRole();
  if (!canManageRoleSensitive(role)) {
    return NextResponse.json({ ok: false, error: "Operator cannot regenerate preference links." }, { status: 403 });
  }

  try {
    const body = await req.json();
    const email = String(body?.email || "").trim().toLowerCase();
    if (!email) {
      return NextResponse.json({ ok: false, error: "Missing email." }, { status: 400 });
    }

    const publicLinkToken = issuePreferenceToken(email);

    await appendDigestAudit({
      at: new Date().toISOString(),
      type: "preference-link-regenerated",
      email,
      actor: role,
    });

    return NextResponse.json({ ok: true, email, publicLinkToken });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to regenerate link." }, { status: 500 });
  }
}
