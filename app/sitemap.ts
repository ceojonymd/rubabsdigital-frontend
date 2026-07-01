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
 * Fetch article slugs and check which ones have actual content.
 * Only articles with real content should be in the sitemap.
 * This prevents Google from flagging empty/doorway pages.
 */
async function fetchArticlesWithContent(): Promise<
  { slug: string; updated_at?: string; created_at: string }[]
> {
  const all: { slug: string; updated_at?: string; created_at: string; hasContent: boolean }[] = [];
  let page = 1;
  const limit = 100;

  while (true) {
    try {
      const res = await fetch(
        `${API_BASE}/api/articles?page=${page}&limit=${limit}`,
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
          hasContent: false, // Will check individually
        });
      }
      if (page >= (data.pagination?.pages || 1)) break;
      page++;
    } catch {
      break;
    }
  }

  // Check a sample to see if ANY articles have content via the API
  // If none do, exclude all blog articles from sitemap
  const sampleSlugs = all.slice(0, 5);
  let anyHasContent = false;
  for (const s of sampleSlugs) {
    try {
      const res = await fetch(`${API_BASE}/api/articles/${s.slug}`, {
        next: { revalidate: 3600 },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.content && data.content.trim().length > 50) {
          anyHasContent = true;
          break;
        }
      }
    } catch {}
  }

  // If no articles have content, return empty array to exclude all from sitemap
  if (!anyHasContent) return [];

  return all;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const now = new Date();

  // Static pages
  const entries: SitemapEntry[] = [
    { url: SITE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    {
      url: `${SITE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/website-design`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/ai-automation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/custom-ai-agents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/digital-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/dentist-websites`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/law-firm-websites`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/real-estate-websites`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/salon-websites`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE}/blog/categories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE}/terms-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE}/refund-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Category pages
  for (const key of Object.keys(CATEGORIES)) {
    entries.push({
      url: `${SITE}/blog/category/${key}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  // Only include articles that actually have content
  const articles = await fetchArticlesWithContent();
  for (const a of articles) {
    entries.push({
      url: `${SITE}/blog/${a.slug}`,
      lastModified: new Date(a.updated_at || a.created_at),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return entries;
}
