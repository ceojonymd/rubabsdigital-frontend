import { NextResponse } from "next/server";
import { getAnalyticsSummary } from "@/lib/enquiry-store";

function csvEscape(value: unknown) {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const format = searchParams.get("format") || "json";
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";

  const data = await getAnalyticsSummary(from, to);
  const stamp = new Date().toISOString().slice(0, 10);

  if (format === "csv") {
    const rows = [
      ["metric", "value"],
      ["total", data.summary.total],
      ["newCount", data.summary.newCount],
      ["qualifiedCount", data.summary.qualifiedCount],
      ["highPriorityCount", data.summary.highPriorityCount],
      ["sentCount", data.summary.sentCount],
      ["failedCount", data.summary.failedCount],
      ["configMissingCount", data.summary.configMissingCount],
      ["dryRunCount", data.summary.dryRunCount],
      ["notTestedCount", data.summary.notTestedCount],
      ["pendingRetryCount", data.summary.pendingRetryCount],
      ["deadLetterCount", data.summary.deadLetterCount],
    ];

    const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="rubabs-analytics-snapshot-${stamp}.csv"`,
      },
    });
  }

  return NextResponse.json(
    {
      ok: true,
      exportedAt: new Date().toISOString(),
      from,
      to,
      snapshot: data,
    },
    {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename="rubabs-analytics-snapshot-${stamp}.json"`,
      },
    }
  );
}
