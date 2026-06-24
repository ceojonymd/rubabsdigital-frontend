import Link from "next/link";

export const metadata = {
  title: "Contact | Rubab's Digital",
  description: "Get in touch with Rubab's Digital for websites, automation, AI workflows, and growth support.",
};

const bestFit = [
  "Service businesses that want a more credible and premium online presence.",
  "Teams that need clearer lead handling, enquiry flow, or conversion direction.",
  "Businesses looking to connect website, automation, and growth support more intelligently.",
];

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>Contact</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Talk About the
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Right Next Step.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
            Share your business, service needs, and budget direction so we can recommend a practical path forward.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1.2rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
              Best fit
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 1rem + 1.5vw, 2.4rem)", lineHeight: 1.1, marginBottom: "0.8rem" }}>
              This is usually a strong fit for:
            </h2>
            <div style={{ display: "grid", gap: "0.7rem" }}>
              {bestFit.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "0.85rem 0.95rem",
                    borderRadius: "0.95rem",
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            background: "linear-gradient(180deg, rgba(0,229,160,0.10), rgba(0,229,160,0.04))",
            border: "1px solid rgba(0,229,160,0.18)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
          }}
        >
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
            Clear next step
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)",
              lineHeight: 1.08,
              marginBottom: "0.8rem",
            }}
          >
            Tell us what you need, and we will shape the right direction.
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              maxWidth: "760px",
              marginBottom: "1.2rem",
            }}
          >
            The more clearly we understand your service, budget, and goals, the faster we can guide you toward a practical next step.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
            <Link
              href="/pricing"
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
              Review Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
