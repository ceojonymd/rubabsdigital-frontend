import { NextResponse } from "next/server";

const API_BASE =
  process.env.NEXT_PUBLIC_RD_API_URL ||
  "https://rubabsdigital-api.rdceojony.workers.dev";
const SITE = "https://rubabsdigital.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/api/articles?page=1&limit=50`, {
      next: { revalidate: 3600 },
    });

    let articles: {
      title: string;
      slug: string;
      meta_description: string;
      category: string;
      created_at: string;
      updated_at?: string;
      author?: string;
    }[] = [];

    if (res.ok) {
      const data = await res.json();
      articles = data.articles || [];
    }

    const now = new Date().toUTCString();

    const items = articles
      .map(
        (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE}/blog/${a.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${a.slug}</guid>
      <description>${escapeXml(a.meta_description || "")}</description>
      <category>${escapeXml(a.category?.replace(/_/g, " ") || "general")}</category>
      <pubDate>${new Date(a.created_at).toUTCString()}</pubDate>
      <author>hello@rubabsdigital.com (${escapeXml(a.author || "Rubab's Digital")})</author>
    </item>`
      )
      .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rubab's Digital — Tech Blog</title>
    <link>${SITE}/blog</link>
    <description>Expert articles on web hosting, AI tools, cloud, development, cybersecurity, SEO, and more.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE}/logo.png</url>
      <title>Rubab's Digital</title>
      <link>${SITE}</link>
    </image>${items}
  </channel>
</rss>`;

    return new NextResponse(rss, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch {
    return new NextResponse("<rss version='2.0'><channel><title>Error</title></channel></rss>", {
      status: 500,
      headers: { "Content-Type": "application/xml" },
    });
  }
}
