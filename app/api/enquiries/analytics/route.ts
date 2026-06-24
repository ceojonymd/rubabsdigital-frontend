import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";
import { getAnalyticsSummary } from "@/lib/enquiry-store";

export async function GET() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const data = await getAnalyticsSummary();
  return NextResponse.json({ ok: true, ...data });
}
