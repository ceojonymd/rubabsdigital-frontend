import { NextResponse } from "next/server";

const SITE = "https://rubabsdigital.com";

/**
 * Sitemap Index — points crawlers to all 14 per-category sitemaps.
 * Next.js 14.2 generates individual sitemaps via generateSitemaps() in sitemap.ts
 * but doesn't always auto-generate the index. This route fills that gap.
 */
export async function GET() {
  const now = new Date().toISOString();

  // 14 sitemaps: 0 = static pages, 1-13 = 13 article categories
  const sitemaps = Array.from({ length: 14 }, (_, i) => i);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (id) => `  <sitemap>
    <loc>${SITE}/sitemap/${id}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
