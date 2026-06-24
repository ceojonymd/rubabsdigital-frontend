import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";

const allowed = new Set(["new", "contacted", "qualified", "closed"]);

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(getAdminCookieName())?.value;
    if (!verifyAdminValue(token)) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const file = typeof body?.file === "string" ? body.file : "";
    const status = typeof body?.status === "string" ? body.status : "";

    if (!file || !allowed.has(status)) {
      return NextResponse.json({ ok: false, error: "Invalid file or status." }, { status: 400 });
    }

    const fullPath = path.join(process.cwd(), "data", "enquiries", path.basename(file));
    const raw = await fs.readFile(fullPath, "utf8");
    const parsed = JSON.parse(raw);

    parsed.ops = {
      ...(parsed.ops || {}),
      inboxStatus: status,
      updatedAt: new Date().toISOString(),
    };

    await fs.writeFile(fullPath, JSON.stringify(parsed, null, 2), "utf8");

    return NextResponse.json({ ok: true, file: path.basename(file), status });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to update enquiry status." }, { status: 500 });
  }
}
