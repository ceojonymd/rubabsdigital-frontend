import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchArticle, getCategoryInfo, formatDate } from "@/lib/blog-api";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

const WORKER_BASE = "https://rubabsdigital-api.rdceojony.workers.dev";
const SITE = "https://rubabsdigital.com";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    const article = await fetchArticle(slug);
    const hasContent = !!(article.content && article.content.trim().length > 50);
    const ogImage = article.featured_image || `${WORKER_BASE}/og/${slug}.jpg`;
    return {
      title: article.meta_title || article.title,
      description: article.meta_description || `Expert guide on ${article.title}. Read more at Rubab's Digital.`,
      alternates: {
        canonical: `${SITE}/blog/${slug}`,
      },
      // CRITICAL: noindex pages with no content to prevent Google deceptive pages flag
      robots: hasContent
        ? { index: true, follow: true }
        : { index: false, follow: false },
      openGraph: {
        title: article.meta_title || article.title,
        description: article.meta_description || `Expert guide on ${article.title}.`,
        type: "article",
        url: `${SITE}/blog/${slug}`,
        publishedTime: article.created_at,
        modifiedTime: article.updated_at || article.created_at,
        authors: ["Rubab's Digital"],
        images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: article.meta_title || article.title,
        description: article.meta_description || `Expert guide on ${article.title}.`,
        images: [ogImage],
      },
    };
  } catch {
    return { title: "Article Not Found", robots: { index: false, follow: false } };
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
  const ogImage = article.featured_image || `${WORKER_BASE}/og/${slug}.jpg`;

  let content = article.content || "";
  if (content.startsWith("---")) {
    const end = content.indexOf("---", 3);
    if (end !== -1) content = content.slice(end + 3).trim();
  }

  const hasContent = content.trim().length > 50;

  // Article structured data (JSON-LD) - only include if content exists
  const articleJsonLd = hasContent
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.meta_description,
        image: ogImage,
        datePublished: article.created_at,
        dateModified: article.updated_at || article.created_at,
        author: {
          "@type": "Organization",
          name: "Rubab's Digital",
          url: SITE,
        },
        publisher: {
          "@type": "Organization",
          name: "Rubab's Digital",
          logo: {
            "@type": "ImageObject",
            url: `${SITE}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE}/blog/${slug}`,
        },
        wordCount: article.word_count,
        articleSection: cat.label,
        keywords:
          typeof article.keywords === "string"
            ? JSON.parse(article.keywords).join(", ")
            : (article.keywords || []).join(", "),
      }
    : null;

  // BreadcrumbList structured data
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
        item: `${SITE}/blog/category/${article.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: `${SITE}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div
        className="container"
        style={{
          maxWidth: "780px",
          paddingTop: "2rem",
          paddingBottom: "4rem",
        }}
      >
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
          <Link
            href={`/blog/category/${article.category}`}
            style={{ color: "var(--color-accent)", textDecoration: "none" }}
          >
            {cat.label}
          </Link>
        </nav>

        {/* Category badge */}
        <span
          style={{
            display: "inline-block",
            fontSize: "0.8rem",
            fontWeight: 600,
            padding: "5px 14px",
            borderRadius: "999px",
            background: `${cat.color}22`,
            color: cat.color,
            marginBottom: "1rem",
          }}
        >
          {cat.icon} {cat.label}
        </span>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            lineHeight: 1.15,
            marginBottom: "1rem",
            fontFamily: "'Instrument Serif', serif",
          }}
        >
          {article.title}
        </h1>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--color-muted)",
            marginBottom: "1.5rem",
          }}
        >
          <span>{formatDate(article.created_at)}</span>
          <span>&middot;</span>
          <span>{article.reading_time} min read</span>
          <span>&middot;</span>
          <span>{article.word_count} words</span>
          <span>&middot;</span>
          <span
            style={{
              textTransform: "capitalize",
              padding: "2px 8px",
              background: "var(--color-surface-2)",
              borderRadius: "6px",
            }}
          >
            {article.difficulty}
          </span>
        </div>

        {/* Hero Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1200 / 630",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            marginBottom: "2rem",
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Image
            src={ogImage}
            alt={article.title}
            fill
            sizes="(max-width: 780px) 100vw, 780px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Content */}
        {hasContent ? (
          <div className="blog-content">
            <MarkdownRenderer content={content} />
          </div>
        ) : (
          <div
            style={{
              padding: "2rem",
              background: "var(--color-surface-2)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              textAlign: "center",
              color: "var(--color-muted)",
            }}
          >
            <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              This article is being updated.
            </p>
            <p>Please check back soon for the full content.</p>
          </div>
        )}

        {/* Bottom nav */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <Link
            href={`/blog/category/${article.category}`}
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            &larr; More in {cat.label}
          </Link>
        </div>
      </div>
    </>
  );
}
