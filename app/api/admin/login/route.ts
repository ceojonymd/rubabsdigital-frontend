import { NextResponse } from "next/server";
import { getAdminCookieName, signAdminValue, verifyPassword } from "@/lib/admin-auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = typeof body?.password === "string" ? body.password : "";

    if (!verifyPassword(password)) {
      return NextResponse.json({ ok: false, error: "Invalid admin password." }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set({
      name: getAdminCookieName(),
      value: signAdminValue(`admin:${Date.now()}`),
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    return res;
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to login." }, { status: 500 });
  }
}
