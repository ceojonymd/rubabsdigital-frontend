import Link from "next/link";
import Image from "next/image";
import { Article, getCategoryInfo, formatDate } from "@/lib/blog-api";

const R2_BASE = "https://pub-a73474e6018740cd9199660e9e4abb0e.r2.dev";

export function ArticleCard({ article }: { article: Article }) {
  const cat = getCategoryInfo(article.category);
  const ogImage = article.featured_image || `${R2_BASE}/rd-articles/og/${article.slug}.png`;

  return (
    <Link
      href={`/blog/${article.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="card"
        style={{
          transition: "transform 200ms, border-color 200ms",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: "var(--radius-md)",
        }}
      >
        {/* Thumbnail image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1200 / 630",
            overflow: "hidden",
            background: "var(--color-surface-2)",
            flexShrink: 0,
          }}
        >
          <Image
            src={ogImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: "cover" }}
          />
          {/* Category badge overlay */}
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontSize: "0.72rem",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: "999px",
              background: "rgba(14, 17, 23, 0.75)",
              backdropFilter: "blur(8px)",
              color: cat.color,
              border: `1px solid ${cat.color}44`,
            }}
          >
            {cat.icon} {cat.label}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Title */}
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              lineHeight: 1.4,
              marginBottom: "0.5rem",
              color: "var(--color-text)",
              fontFamily: "'Inter', sans-serif",
              flex: 1,
            }}
          >
            {article.title}
          </h3>

          {/* Meta description */}
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--color-muted)",
              lineHeight: 1.5,
              marginBottom: "1rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.meta_description}
          </p>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.75rem",
              color: "var(--color-muted)",
              borderTop: "1px solid var(--color-border)",
              paddingTop: "0.75rem",
            }}
          >
            <span>{formatDate(article.created_at)}</span>
            <span>{article.reading_time} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
