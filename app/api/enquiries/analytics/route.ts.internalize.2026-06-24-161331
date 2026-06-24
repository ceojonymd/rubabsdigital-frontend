import { NextResponse } from "next/server";
import { getAnalyticsSummary } from "@/lib/enquiry-store";

export async function GET() {
  const data = await getAnalyticsSummary();
  return NextResponse.json({ ok: true, ...data });
}
