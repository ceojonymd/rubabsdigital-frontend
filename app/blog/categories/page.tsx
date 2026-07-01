import Link from "next/link";
import { CATEGORIES, fetchArticles } from "@/lib/blog-api";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "All Blog Categories",
  description: "Browse all blog categories including web hosting, AI tools, cloud, development, cybersecurity, and more.",
};

export default async function CategoriesPage() {
  return (
    <div className="container" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
      <nav style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Home</Link>
        <span>›</span>
        <Link href="/blog" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Blog</Link>
        <span>›</span>
        <span>Categories</span>
      </nav>

      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.75rem" }}>
        All Categories
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2.5rem" }}>
        Explore expert articles across 13 technology topics
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {Object.entries(CATEGORIES).map(([key, cat]) => (
          <Link
            key={key}
            href={`/blog/category/${key}`}
            style={{ textDecoration: "none" }}
          >
            <div
              className="card"
              style={{
                padding: "1.5rem",
                textAlign: "center",
                transition: "transform 200ms, border-color 200ms",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "56px", height: "56px", borderRadius: "16px",
                  background: `${cat.color}22`, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", margin: "0 auto 1rem",
                }}
              >
                {cat.icon}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem", fontFamily: "'Inter', sans-serif", color: "var(--color-text)" }}>
                {cat.label}
              </h3>
              <span style={{ fontSize: "0.85rem", color: cat.color, fontWeight: 500 }}>
                Browse articles →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
