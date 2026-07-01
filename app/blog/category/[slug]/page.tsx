import Link from "next/link";
import { fetchArticles, getCategoryInfo, CATEGORIES } from "@/lib/blog-api";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600;

const SITE = "https://rubabsdigital.com";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const cat = getCategoryInfo(slug);
  return {
    title: `${cat.label} — Expert Guides & Reviews | Rubab's Digital`,
    description: `Browse expert ${cat.label.toLowerCase()} articles, reviews, and tutorials at Rubab's Digital.`,
    alternates: {
      canonical: `${SITE}/blog/category/${slug}`,
    },
    openGraph: {
      title: `${cat.label} Articles | Rubab's Digital`,
      description: `Expert ${cat.label.toLowerCase()} articles, reviews, and tutorials.`,
      type: "website",
      url: `${SITE}/blog/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = params;
  if (!CATEGORIES[slug]) notFound();

  const cat = getCategoryInfo(slug);
  const { articles, pagination } = await fetchArticles(1, 50, slug);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.label} Articles`,
    description: `Expert ${cat.label.toLowerCase()} articles, reviews, and tutorials.`,
    url: `${SITE}/blog/category/${slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: pagination.total,
      itemListElement: articles.slice(0, 10).map((a: any, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE}/blog/${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        <nav style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <Link href="/blog" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Blog</Link>
          <span>&rsaquo;</span>
          <span>{cat.label}</span>
        </nav>

        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "2.5rem" }}>{cat.icon}</span>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>{cat.label}</h1>
          </div>
          <p>{pagination.total} articles</p>
        </div>

        {articles.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {articles.map((article: any) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--color-muted)" }}>
            <p style={{ fontSize: "1.1rem" }}>No articles in this category yet.</p>
            <Link href="/blog" style={{ color: "var(--color-accent)", textDecoration: "none", marginTop: "0.5rem", display: "inline-block" }}>
              Browse all articles
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

