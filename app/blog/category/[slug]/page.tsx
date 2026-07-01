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
    title: `${cat.label} — Expert Guides & Reviews`,
    description: `Browse expert ${cat.label.toLowerCase()} articles, reviews, and tutorials at Rubab's Digital.`,
    alternates: {
      canonical: `${SITE}/blog/category/${slug}`,
    },
    openGraph: {
      title: `${cat.label} Articles`,
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

  // Get other categories for cross-linking
  const otherCategories = Object.entries(CATEGORIES).filter(([key]) => key !== slug);

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

  // BreadcrumbList for category page
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: cat.label,
        item: `${SITE}/blog/category/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        {/* Breadcrumb */}
        <nav
          style={{
            display: "flex",
            gap: "0.5rem",
            fontSize: "0.85rem",
            color: "var(--color-muted)",
            marginBottom: "1.5rem",
          }}
        >
          <Link
            href="/"
            style={{ color: "var(--color-accent)", textDecoration: "none" }}
          >
            Home
          </Link>
          <span>&rsaquo;</span>
          <Link
            href="/blog"
            style={{ color: "var(--color-accent)", textDecoration: "none" }}
          >
            Blog
          </Link>
          <span>&rsaquo;</span>
          <span>{cat.label}</span>
        </nav>

        {/* Category header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ fontSize: "2.5rem" }}>{cat.icon}</span>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {cat.label}
            </h1>
          </div>
          <p>{pagination.total} articles</p>
        </div>

        {/* Articles grid */}
        {articles.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {articles.map((article: any) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 0",
              color: "var(--color-muted)",
            }}
          >
            <p style={{ fontSize: "1.1rem" }}>
              No articles in this category yet.
            </p>
            <Link
              href="/blog"
              style={{
                color: "var(--color-accent)",
                textDecoration: "none",
                marginTop: "0.5rem",
                display: "inline-block",
              }}
            >
              Browse all articles
            </Link>
          </div>
        )}

        {/* Browse Other Categories */}
        <section
          style={{
            marginTop: "4rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "'Instrument Serif', serif",
              marginBottom: "1.25rem",
              color: "var(--color-text)",
            }}
          >
            Browse Other Categories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {otherCategories.map(([key, c]) => (
              <Link
                key={key}
                href={`/blog/category/${key}`}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.85rem 1.1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
                  transition: "border-color 200ms, transform 200ms",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{c.icon}</span>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: "var(--color-text)",
                  }}
                >
                  {c.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Back to all articles */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/blog"
              className="btn btn-secondary"
              style={{ textDecoration: "none", fontSize: "0.9rem" }}
            >
              View All Articles →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

