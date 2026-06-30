import Link from "next/link";
import { Article, getCategoryInfo, formatDate } from "@/lib/blog-api";

export function ArticleCard({ article }: { article: Article }) {
  const cat = getCategoryInfo(article.category);

  return (
    <Link
      href={`/blog/${article.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="card"
        style={{
          padding: "1.25rem",
          transition: "transform 200ms, border-color 200ms",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Category-colored gradient header */}
        <div
          style={{
            height: "8px",
            borderRadius: "4px",
            background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
            marginBottom: "1rem",
          }}
        />

        {/* Category badge */}
        <span
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: "999px",
            background: `${cat.color}22`,
            color: cat.color,
            marginBottom: "0.75rem",
            width: "fit-content",
          }}
        >
          {cat.icon} {cat.label}
        </span>

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
    </Link>
  );
}
