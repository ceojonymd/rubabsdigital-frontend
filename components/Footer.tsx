import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-bg)",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
            Stronger handoff
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.4rem)",
              lineHeight: 1.08,
              marginBottom: "0.75rem",
            }}
          >
            Need a more credible website and cleaner lead flow?
          </h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: "760px", marginBottom: "1rem" }}>
            We help service businesses improve presentation, trust, and digital next-step clarity with websites, automation, and practical growth support.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: "1rem" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 1.15rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-accent)",
                color: "#09140f",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Start a Consultation →
            </Link>
            <Link
              href="/portfolio#case-studies"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 1.15rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                fontWeight: 700,
                textDecoration: "none",
                background: "var(--color-surface)",
              }}
            >
              See Outcome Framing
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
          }}
        >
          <div>
            <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.35rem" }}>
              Rubab&apos;s Digital
            </div>
            <div>Premium websites, AI workflows, and practical automation systems.</div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <Link href="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>Portfolio</Link>
            <Link href="/pricing" style={{ color: "inherit", textDecoration: "none" }}>Pricing</Link>
            <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
