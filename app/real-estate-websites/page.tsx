import Link from "next/link";

export const metadata = {
  title: "Real Estate Websites",
  description: "Real estate websites built for stronger presentation, trust, and enquiry generation.",  alternates: {
    canonical: "https://rubabsdigital.com/real-estate-websites",
  },
  openGraph: {
    title: "Real Estate Website Design",
    description: "Property and lead-focused website layouts for real estate agents and agencies.",
    url: "https://rubabsdigital.com/real-estate-websites",
    type: "website",
  },

};

const trustPoints = [
  "Cleaner listing and offer presentation.",
  "Higher-trust framing for buyers and sellers.",
  "A more confident path from interest to enquiry.",
];

const improvements = [
  "Makes listings and services easier to understand quickly.",
  "Builds stronger buyer and seller confidence online.",
  "Supports clearer enquiries from higher-intent visitors.",
];

export default function RealEstateWebsitesPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>Real Estate Websites</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Real Estate Websites That
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Create More Enquiry Confidence.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "1.25rem" }}>
            We help real estate agents and property businesses build cleaner, higher-trust websites that support listings, lead capture, and better buyer confidence.
          </p>

          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                borderRadius: "calc(var(--radius-xl) - 0.35rem)",
                padding: "1rem",
                minHeight: "180px",
                background: "linear-gradient(180deg, rgba(0,229,160,0.12), rgba(0,229,160,0.03))",
                border: "1px solid rgba(0,229,160,0.16)",
                display: "grid",
                gap: "0.6rem",
                alignContent: "start",
              }}
            >
              <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem" }}>Proof Direction</div>
              {trustPoints.map((point) => (
                <div
                  key={point}
                  style={{
                    padding: "0.8rem 0.9rem",
                    borderRadius: "0.95rem",
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--color-text)",
                    fontWeight: 600,
                  }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>What this improves</div>
            <div style={{ display: "grid", gap: "0.7rem" }}>
              {improvements.map((item) => (
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

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", padding: "0.9rem 1.2rem", borderRadius: "var(--radius-lg)", background: "var(--color-accent)", color: "#09140f", fontWeight: 700, textDecoration: "none" }}>
              Request a Consultation →
            </Link>
            <Link href="/portfolio#case-studies" style={{ display: "inline-flex", padding: "0.9rem 1.2rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)", color: "var(--color-text)", fontWeight: 700, textDecoration: "none", background: "var(--color-surface)" }}>
              See Outcome Framing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
