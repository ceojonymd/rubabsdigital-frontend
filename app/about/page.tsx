import Link from "next/link";

export const metadata = {
  title: "About | Rubab's Digital",
  description: "Learn more about the thinking behind Rubab's Digital.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>About</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Built Around Better
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Business Presentation.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "800px", marginBottom: "1.5rem" }}>
            Rubab&apos;s Digital exists to help modern service businesses present themselves more clearly, build trust faster, and connect websites with practical systems that support growth.
          </p>

          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1.3rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.6rem" }}>Founder note</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 1rem + 1.5vw, 2.6rem)", lineHeight: 1.1, marginBottom: "0.8rem" }}>
              We care about how a business is understood before it is contacted.
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.85, maxWidth: "860px" }}>
              That is why our work focuses on clearer messaging, stronger trust signals, and more connected systems. A better website should not only look refined; it should also support the way a business communicates, qualifies opportunities, and moves toward growth with less friction.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.9rem 1.2rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-accent)",
                color: "#09140f",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Explore Portfolio →
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.9rem 1.2rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                fontWeight: 700,
                textDecoration: "none",
                background: "var(--color-surface)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
