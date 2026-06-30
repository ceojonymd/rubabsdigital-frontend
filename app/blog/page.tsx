import Link from "next/link";
import { fetchArticles, CATEGORIES } from "@/lib/blog-api";
import { ArticleCard } from "@/components/blog/ArticleCard";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Expert Tech Guides & Reviews | Rubab's Digital",
  description: "Expert articles on web hosting, AI tools, cloud, development, cybersecurity, SEO, and more. Written by industry professionals.",
};

export default async function BlogPage() {
  const { articles, pagination } = await fetchArticles(1, 12);

  return (
    <div className="container" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "0.75rem" }}>
          Tech Blog
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
          {pagination.total}+ expert articles on hosting, AI, dev, security, and more
        </p>
      </div>

      {/* Category strip */}
      <div
        style={{
          display: "flex", gap: "0.5rem", overflowX: "auto",
          paddingBottom: "0.75rem", marginBottom: "2.5rem",
          scrollbarWidth: "none",
        }}
      >
        <Link
          href="/blog"
          style={{
            padding: "0.5rem 1rem", borderRadius: "999px",
            background: "var(--color-accent)", color: "#0b1020",
            fontSize: "0.85rem", fontWeight: 600, whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          All
        </Link>
        {Object.entries(CATEGORIES).map(([key, cat]) => (
          <Link
            key={key}
            href={`/blog/category/${key}`}
            style={{
              padding: "0.5rem 1rem", borderRadius: "999px",
              background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
              color: "var(--color-text-soft)", fontSize: "0.85rem", fontWeight: 500,
              whiteSpace: "nowrap", textDecoration: "none",
            }}
          >
            {cat.icon} {cat.label}
          </Link>
        ))}
      </div>

      {/* Articles grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* View all categories */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link
          href="/blog/categories"
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Browse All Categories →
        </Link>
      </div>
    </div>
  );
}
