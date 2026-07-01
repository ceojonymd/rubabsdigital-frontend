import { CATEGORIES } from "@/lib/blog-api";

const API_BASE = process.env.NEXT_PUBLIC_RD_API_URL || "https://rubabsdigital-api.rdceojony.workers.dev";
const SITE = "https://rubabsdigital.com";

interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const entries: SitemapEntry[] = [
    { url: SITE, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/portfolio`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/website-design`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/ai-automation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/custom-ai-agents`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/digital-marketing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/dentist-websites`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/law-firm-websites`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/real-estate-websites`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/salon-websites`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE}/blog/categories`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms-conditions`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/refund-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  for (const key of Object.keys(CATEGORIES)) {
    entries.push({ url: `${SITE}/blog/category/${key}`, changeFrequency: "weekly", priority: 0.6 });
  }

  try {
    const res = await fetch(`${API_BASE}/api/articles?page=1&limit=1000`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      for (const a of data.articles || []) {
        entries.push({
          url: `${SITE}/blog/${a.slug}`,
          lastModified: new Date(a.updated_at || a.created_at),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    }
  } catch {}

  return entries;
}
