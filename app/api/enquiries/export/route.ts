import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "This endpoint has moved to /api/internal/enquiries/export." },
    { status: 410 }
  );
}

export async function POST() {
  return NextResponse.json(
    { ok: false, error: "This endpoint has moved to /api/internal/enquiries/export." },
    { status: 410 }
  );
}
