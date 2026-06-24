export const metadata = {
  title: "Pricing | Rubab's Digital",
  description: "Explore pricing guidance and engagement models for websites, automation, AI agents, and digital growth systems.",
};

const section = { padding: "6rem 1.5rem" } as React.CSSProperties;
const container = { maxWidth: "1120px", margin: "0 auto" } as React.CSSProperties;
const card = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-xl)",
  padding: "1.9rem",
} as React.CSSProperties;
const h1 = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.4rem, 1rem + 4vw, 4.75rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  marginBottom: "1rem",
} as React.CSSProperties;
const h2 = { fontFamily: "var(--font-display)", fontSize: "1.45rem", marginBottom: "0.65rem", lineHeight: 1.15 } as React.CSSProperties;
const p = { color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.75 } as React.CSSProperties;

const plans = [
  {
    name: "Starter",
    price: "Custom quote",
    text: "For businesses that need a clean, conversion-aware online presence with fast setup and practical execution.",
    bullets: ["Single-page or focused website build", "Core brand messaging", "Mobile-ready layout", "Contact or lead capture setup"],
  },
  {
    name: "Growth",
    price: "Custom quote",
    text: "For service businesses that need website polish, stronger lead handling, and better operational flow.",
    bullets: ["Multi-section website", "Lead flow improvement", "Automation-ready forms", "Strategy and iteration support"],
  },
  {
    name: "System",
    price: "Custom quote",
    text: "For brands that want websites, automation, AI support, and business logic working together as one system.",
    bullets: ["Website + automation integration", "Custom workflow logic", "AI support layer", "Ongoing optimization options"],
  },
];

export default function PricingPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ ...section, paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "880px", height: "440px", background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "999px", background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.22)", color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            💼 Pricing
          </div>
          <h1 style={h1}>Flexible Engagements,<br /><span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Built Around Real Needs.</span></h1>
          <p style={{ ...p, maxWidth: "760px", fontSize: "1.08rem" }}>
            Every project is scoped around your goals, complexity, timeline, and business stage. These engagement models are here to help you understand how we typically structure work.
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 6rem" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {plans.map((plan) => (
            <div key={plan.name} style={card}>
              <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {plan.name}
              </div>
              <h2 style={h2}>{plan.price}</h2>
              <p style={{ ...p, marginBottom: "1rem" }}>{plan.text}</p>
              <ul style={{ paddingLeft: "1.1rem", margin: 0, color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                {plan.bullets.map((b) => <li key={b} style={{ marginBottom: "0.5rem" }}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
