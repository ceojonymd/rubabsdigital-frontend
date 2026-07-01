import { NextResponse } from "next/server";

const INDEXNOW_KEY = "b3f7a2c8e1d94f5690ab12cd34ef5678";
const SITE = "https://rubabsdigital.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urls: string[] = body.urls || [];

    if (urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }

    // Submit to IndexNow (Bing + Yandex)
    const indexNowPayload = {
      host: "rubabsdigital.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      urlList: urls.slice(0, 10000), // Max 10k per submission
    };

    const result = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(indexNowPayload),
    });

    return NextResponse.json({
      success: true,
      status: result.status,
      submitted: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "IndexNow submission failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    endpoint: "POST /api/indexnow with { urls: [...] }",
  });
}

