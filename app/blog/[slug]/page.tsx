import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchArticle, getCategoryInfo, formatDate } from "@/lib/blog-api";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

const R2_BASE = "https://pub-a73474e6018740cd9199660e9e4abb0e.r2.dev";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    const article = await fetchArticle(slug);
    const ogImage = article.featured_image || `${R2_BASE}/rd-articles/og/${slug}.png`;
    return {
      title: `${article.meta_title || article.title} | Rubab's Digital`,
      description: article.meta_description,
      openGraph: {
        title: article.meta_title || article.title,
        description: article.meta_description,
        type: "article",
        publishedTime: article.created_at,
        authors: ["Rubab's Digital"],
        images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: article.meta_title || article.title,
        description: article.meta_description,
        images: [ogImage],
      },
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  let article;
  try {
    article = await fetchArticle(slug);
  } catch {
    notFound();
  }

  const cat = getCategoryInfo(article.category);

  let content = article.content || "";
  if (content.startsWith("---")) {
    const end = content.indexOf("---", 3);
    if (end !== -1) content = content.slice(end + 3).trim();
  }

  return (
    <div className="container" style={{ maxWidth: "780px", paddingTop: "2rem", paddingBottom: "4rem" }}>
      {/* Breadcrumb */}
      <nav style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Home</Link>
        <span>›</span>
        <Link href="/blog" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Blog</Link>
        <span>›</span>
        <Link href={`/blog/category/${article.category}`} style={{ color: "var(--color-accent)", textDecoration: "none" }}>{cat.label}</Link>
      </nav>

      {/* Category badge */}
      <span
        style={{
          display: "inline-block", fontSize: "0.8rem", fontWeight: 600,
          padding: "5px 14px", borderRadius: "999px",
          background: `${cat.color}22`, color: cat.color,
          marginBottom: "1rem",
        }}
      >
        {cat.icon} {cat.label}
      </span>

      {/* Title */}
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.15, marginBottom: "1rem", fontFamily: "'Instrument Serif', serif" }}>
        {article.title}
      </h1>

      {/* Meta */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--color-border)" }}>
        <span>{formatDate(article.created_at)}</span>
        <span>·</span>
        <span>{article.reading_time} min read</span>
        <span>·</span>
        <span>{article.word_count} words</span>
        <span>·</span>
        <span style={{ textTransform: "capitalize", padding: "2px 8px", background: "var(--color-surface-2)", borderRadius: "6px" }}>{article.difficulty}</span>
      </div>

      {/* Content */}
      <div className="blog-content">
        <MarkdownRenderer content={content} />
      </div>

      {/* Bottom nav */}
      <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
        <Link href={`/blog/category/${article.category}`} style={{ color: "var(--color-accent)", textDecoration: "none", fontWeight: 600 }}>
          ← More in {cat.label}
        </Link>
      </div>
    </div>
  );
}
