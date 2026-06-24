export const metadata = {
  title: "Portfolio | Rubab's Digital",
  description: "Explore selected website, automation, AI, and digital growth work from Rubab's Digital.",
};

const section = { padding: "6rem 1.5rem" } as React.CSSProperties;
const container = { maxWidth: "1120px", margin: "0 auto" } as React.CSSProperties;
const card = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-xl)",
  padding: "1.75rem",
} as React.CSSProperties;
const h1 = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.4rem, 1rem + 4vw, 4.75rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  marginBottom: "1rem",
} as React.CSSProperties;
const h2 = {
  fontFamily: "var(--font-display)",
  fontSize: "1.45rem",
  marginBottom: "0.65rem",
  lineHeight: 1.15,
} as React.CSSProperties;
const p = { color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.75 } as React.CSSProperties;

const studies = [
  {
    title: "Service Business Website Systems",
    tag: "Web Design",
    text: "Premium website builds and landing page systems designed to help service businesses create stronger first impressions and convert more enquiries.",
  },
  {
    title: "AI Workflow & Lead Automation",
    tag: "Automation",
    text: "Custom workflow systems for lead handling, follow-up, internal alerts, and practical business automation using modern tools and logic-driven processes.",
  },
  {
    title: "Custom AI Agent Experiences",
    tag: "AI Agents",
    text: "Tailored AI-driven tools and assistant systems built around business workflows, content support, and smart operational efficiency.",
  },
  {
    title: "Growth-Focused Marketing Support",
    tag: "Digital Marketing",
    text: "Conversion-aware marketing support that connects ad intent, landing pages, follow-up systems, and business growth goals into one stack.",
  },
  {
    title: "Industry-Focused Demo Concepts",
    tag: "Niche Demos",
    text: "Single-page demonstration experiences for clinics, consultants, law firms, salons, and local service brands to show what a faster, better lead journey looks like.",
  },
  {
    title: "Automation-Ready Website Delivery",
    tag: "Systems Thinking",
    text: "Projects built with future growth in mind, so websites, chat, forms, and operations can evolve into a connected lead and workflow system.",
  },
];

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ ...section, paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "880px", height: "440px", background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "999px", background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.22)", color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            🗂 Portfolio
          </div>
          <h1 style={h1}>Selected Work,<br /><span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Built for Better Growth.</span></h1>
          <p style={{ ...p, maxWidth: "760px", fontSize: "1.08rem" }}>
            Rubab&apos;s Digital builds premium websites, automation systems, AI-powered workflows, and growth-focused digital experiences for modern service businesses.
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 6rem" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {studies.map((item) => (
            <div key={item.title} style={card}>
              <div style={{ display: "inline-flex", padding: "0.35rem 0.75rem", borderRadius: "999px", background: "var(--color-accent-dim)", color: "var(--color-accent)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "1rem" }}>
                {item.tag}
              </div>
              <h2 style={h2}>{item.title}</h2>
              <p style={p}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
