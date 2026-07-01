import { CATEGORIES } from "@/lib/blog-api";

const API_BASE =
  process.env.NEXT_PUBLIC_RD_API_URL ||
  "https://rubabsdigital-api.rdceojony.workers.dev";
const SITE = "https://rubabsdigital.com";

interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

/**
 * Generate multiple sitemaps split by category.
 * Next.js automatically creates a sitemap index at /sitemap.xml
 * pointing to /sitemap/0.xml, /sitemap/1.xml, etc.
 * 
 * Google limit: 50,000 URLs per sitemap file.
 * With 13 categories + 1 static, each sitemap stays well under the limit.
 */
export async function generateSitemaps() {
  const ids = [
    { id: 0 }, // static pages + category index pages
    ...Object.keys(CATEGORIES).map((cat, i) => ({ id: i + 1 })),
  ];
  return ids;
}

const CATEGORY_KEYS = Object.keys(CATEGORIES);

async function fetchCategoryArticles(
  category: string
): Promise<{ slug: string; updated_at?: string; created_at: string }[]> {
  const all: { slug: string; updated_at?: string; created_at: string }[] = [];
  let page = 1;
  const limit = 100;

  while (true) {
    try {
      const res = await fetch(
        `${API_BASE}/api/articles?page=${page}&limit=${limit}&category=${category}`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) break;
      const data = await res.json();
      const articles = data.articles || [];
      if (articles.length === 0) break;
      for (const a of articles) {
        all.push({
          slug: a.slug,
          updated_at: a.updated_at,
          created_at: a.created_at,
        });
      }
      if (page >= (data.pagination?.pages || 1)) break;
      page++;
    } catch {
      break;
    }
  }

  return all;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<SitemapEntry[]> {
  const now = new Date();

  // id=0 → static pages + category index pages
  if (id === 0) {
    const entries: SitemapEntry[] = [
      { url: SITE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
      { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE}/website-design`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE}/ai-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE}/custom-ai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE}/digital-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE}/dentist-websites`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE}/law-firm-websites`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE}/real-estate-websites`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE}/salon-websites`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
      { url: `${SITE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
      { url: `${SITE}/blog/categories`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
      { url: `${SITE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
      { url: `${SITE}/terms-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
      { url: `${SITE}/refund-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ];

    // Category pages
    for (const key of CATEGORY_KEYS) {
      entries.push({
        url: `${SITE}/blog/category/${key}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }

    return entries;
  }

  // id=1..13 → articles in that category
  const catIndex = id - 1;
  if (catIndex < 0 || catIndex >= CATEGORY_KEYS.length) return [];

  const category = CATEGORY_KEYS[catIndex];
  const articles = await fetchCategoryArticles(category);

  return articles.map((a) => ({
    url: `${SITE}/blog/${a.slug}`,
    lastModified: new Date(a.updated_at || a.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
}
