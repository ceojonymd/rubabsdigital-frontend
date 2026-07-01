import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px" }}>
        <div
          style={{
            fontSize: "clamp(5rem, 10vw, 8rem)",
            fontWeight: 800,
            lineHeight: 1,
            background: "linear-gradient(135deg, #00e5a0, #7c6fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 1rem + 2vw, 2.5rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          The page you are looking for does not exist or may have been moved.
          Let us help you find what you need.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              borderRadius: "var(--radius-md)",
              background: "#00e5a0",
              color: "#0a0f1a",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              borderRadius: "var(--radius-md)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
