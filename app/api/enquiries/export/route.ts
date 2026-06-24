import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";

function csvEscape(value: unknown) {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

export async function GET() {
  try {
    const token = cookies().get(getAdminCookieName())?.value;
    if (!verifyAdminValue(token)) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }

    const dir = path.join(process.cwd(), "data", "enquiries");
    const files = await fs.readdir(dir).catch(() => []);
    const jsonFiles = files.filter((name) => name.endsWith(".json")).sort().reverse();

    const rows = await Promise.all(
      jsonFiles.map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const parsed = JSON.parse(raw);

        return [
          file,
          parsed.subject || "",
          parsed.contact?.businessName || "",
          parsed.contact?.email || "",
          parsed.contact?.service || "",
          parsed.contact?.packageDirection || "",
          parsed.contact?.budget || "",
          parsed.contact?.timeline || "",
          parsed.ops?.priority || "",
          parsed.ops?.inboxStatus || "",
          parsed.ops?.note || "",
          parsed.meta?.receivedAt || "",
        ];
      })
    );

    const header = [
      "file",
      "subject",
      "businessName",
      "email",
      "service",
      "packageDirection",
      "budget",
      "timeline",
      "priority",
      "status",
      "note",
      "receivedAt",
    ];

    const csv = [
      header.join(","),
      ...rows.map((row) => row.map(csvEscape).join(",")),
    ].join("\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="rubabs-digital-enquiries.csv"',
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to export enquiries." }, { status: 500 });
  }
}
