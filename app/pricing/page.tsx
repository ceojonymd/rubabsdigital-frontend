import Link from "next/link";

export const metadata = {
  title: "Pricing | Rubab's Digital",
  description: "Pricing packages for websites, automation, and growth support from Rubab's Digital.",
};

const packages = [
  {
    name: "Starter Presence",
    badge: "Best for early trust",
    price: "From $500",
    intro: "For businesses that need a cleaner digital presence and a more credible first impression.",
    items: [
      "Strategic website refresh or landing page direction",
      "Clearer offer presentation and CTA flow",
      "Trust-focused structure for service businesses",
      "Basic enquiry improvement recommendations",
    ],
    cta: "Best if you need a cleaner, more credible first step.",
    button: "Choose Starter Presence →",
  },
  {
    name: "Growth System",
    badge: "Most balanced",
    price: "From $1,200",
    intro: "For businesses that need design, enquiry flow, and practical system thinking to work together.",
    items: [
      "Website or landing page system with stronger narrative flow",
      "Contact journey and qualification improvements",
      "Automation planning for lead handling or follow-up",
      "Positioning support for clearer conversion paths",
    ],
    cta: "Best if you need stronger conversion thinking across the journey.",
    button: "Choose Growth System →",
  },
  {
    name: "Enterprise Direction",
    badge: "Best for operations",
    price: "Custom",
    intro: "For teams that need a more connected digital experience across website, automation, and internal handling.",
    items: [
      "Full consultative website and workflow direction",
      "AI or automation layer planning",
      "Lead management and response system thinking",
      "Priority attention for larger business needs",
    ],
    cta: "Best if your business needs deeper operational and strategic support.",
    button: "Choose Enterprise Direction →",
  },
];

export default function PricingPage() {
  return (
    <main style={{ paddingTop: "80px", paddingBottom: "110px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>Pricing</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Clearer Packages for
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Better-Fit Engagements.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
            These packages are designed to help businesses quickly understand what level of direction, support, and systems thinking fits their current stage.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.2rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "999px",
                  background: "var(--color-accent-dim)",
                  color: "var(--color-accent)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  marginBottom: "0.9rem",
                }}
              >
                {pkg.badge}
              </div>

              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", lineHeight: 1.12, marginBottom: "0.5rem" }}>
                {pkg.name}
              </div>
              <div style={{ color: "var(--color-text)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.8rem" }}>
                {pkg.price}
              </div>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>{pkg.intro}</p>

              <div style={{ display: "grid", gap: "0.7rem", marginBottom: "1.1rem" }}>
                {pkg.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "0.8rem 0.9rem",
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

              <div
                style={{
                  padding: "0.85rem 0.95rem",
                  borderRadius: "0.95rem",
                  background: "linear-gradient(180deg, rgba(0,229,160,0.10), rgba(0,229,160,0.03))",
                  border: "1px solid rgba(0,229,160,0.14)",
                  color: "var(--color-text)",
                  lineHeight: 1.7,
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {pkg.cta}
              </div>

              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.85rem 1.1rem",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--color-accent)",
                  color: "#09140f",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {pkg.button}
              </Link>
            </div>
          ))}
        </div>
      </section>
    
      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
              Fast consultation path
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              <a href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 1.1rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-accent)",
                color: "#09140f",
                fontWeight: 700,
                textDecoration: "none"
              }}>Start Consultation →</a>
              <a href="/portfolio" style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 1.1rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                fontWeight: 700,
                textDecoration: "none",
                background: "var(--color-surface)"
              }}>See Proof First</a>
            </div>
          </div>
        </div>
      </section>
    
      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
              Need help choosing?
            </div>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "0.85rem" }}>
              If you are somewhere between package levels, a short consultation will help identify the most practical fit.
            </p>
            <a href="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 1.1rem",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-accent)",
              color: "#09140f",
              fontWeight: 700,
              textDecoration: "none"
            }}>Get Package Guidance →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
