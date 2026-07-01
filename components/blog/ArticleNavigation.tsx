import Link from "next/link";

interface NavArticle {
  slug: string;
  title: string;
}

interface ArticleNavigationProps {
  prev: NavArticle | null;
  next: NavArticle | null;
}

export function ArticleNavigation({ prev, next }: ArticleNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      style={{
        display: "grid",
        gridTemplateColumns: prev && next ? "1fr 1fr" : "1fr",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      {prev && (
        <Link
          href={`/blog/${prev.slug}`}
          style={{
            textDecoration: "none",
            display: "block",
            padding: "1.25rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
            transition: "border-color 200ms, transform 200ms",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              color: "var(--color-muted)",
              marginBottom: "0.35rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            ← Previous
          </span>
          <span
            style={{
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "var(--color-accent)",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {prev.title}
          </span>
        </Link>
      )}
      {next && (
        <Link
          href={`/blog/${next.slug}`}
          style={{
            textDecoration: "none",
            display: "block",
            padding: "1.25rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
            textAlign: "right",
            transition: "border-color 200ms, transform 200ms",
            gridColumn: !prev ? "1" : "auto",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              color: "var(--color-muted)",
              marginBottom: "0.35rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Next →
          </span>
          <span
            style={{
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "var(--color-accent)",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}

