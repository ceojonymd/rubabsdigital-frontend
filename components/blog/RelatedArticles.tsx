import Link from "next/link";
import Image from "next/image";
import { Article, getCategoryInfo, formatDate } from "@/lib/blog-api";

interface RelatedArticlesProps {
  articles: Article[];
  currentSlug: string;
}

export function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  const filtered = articles.filter((a) => a.slug !== currentSlug).slice(0, 4);
  if (filtered.length === 0) return null;

  return (
    <section style={{ marginTop: "3rem" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontFamily: "'Instrument Serif', serif",
          marginBottom: "1.25rem",
          color: "var(--color-text)",
        }}
      >
        Related Articles
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((article) => {
          const cat = getCategoryInfo(article.category);
          const ogImage = article.featured_image || `/api/og/${article.slug}`;
          return (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  borderRadius: "var(--radius-md)",
                  transition: "transform 200ms, border-color 200ms",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
                    sizes="(max-width: 780px) 50vw, 240px"
                    style={{ objectFit: "cover" }}
                    unoptimized={!article.featured_image}
                  />
                </div>
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: "0.5rem",
                      color: "var(--color-text)",
                      fontFamily: "'Inter', sans-serif",
                      flex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {article.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.72rem",
                      color: "var(--color-muted)",
                    }}
                  >
                    <span>{formatDate(article.created_at)}</span>
                    <span>{article.reading_time} min</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

