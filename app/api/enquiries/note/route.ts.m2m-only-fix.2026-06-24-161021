import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const file = typeof body?.file === "string" ? body.file : "";
    const note = typeof body?.note === "string" ? body.note.slice(0, 2000) : "";

    if (!file) {
      return NextResponse.json({ ok: false, error: "Invalid file." }, { status: 400 });
    }

    const fullPath = path.join(process.cwd(), "data", "enquiries", path.basename(file));
    const raw = await fs.readFile(fullPath, "utf8");
    const parsed = JSON.parse(raw);

    parsed.ops = {
      ...(parsed.ops || {}),
      note,
      updatedAt: new Date().toISOString(),
    };

    await fs.writeFile(fullPath, JSON.stringify(parsed, null, 2), "utf8");

    return NextResponse.json({ ok: true, file: path.basename(file), note });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to save note." }, { status: 500 });
  }
}
