import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import { readDigestAudit, readDigestRecords } from "@/lib/enquiry-store";

export async function GET() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const items = await readDigestRecords();
  const audit = await readDigestAudit();

  return NextResponse.json({ ok: true, items, audit });
}
