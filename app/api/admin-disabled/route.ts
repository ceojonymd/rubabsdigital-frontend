import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      ok: false,
      error: "Website admin routes have been removed. Backend automation remains available through machine-to-machine endpoints only.",
    },
    { status: 410 }
  );
}
