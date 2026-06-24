export const metadata = {
  title: "FAQ | Rubab's Digital",
  description: "Frequently asked questions about working with Rubab's Digital.",
};

const section = { padding: "6rem 1.5rem" } as React.CSSProperties;
const container = { maxWidth: "920px", margin: "0 auto" } as React.CSSProperties;
const card = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-xl)",
  padding: "1.75rem",
  marginBottom: "1rem",
} as React.CSSProperties;
const h1 = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.4rem, 1rem + 4vw, 4.75rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  marginBottom: "1rem",
} as React.CSSProperties;
const q = { fontFamily: "var(--font-display)", fontSize: "1.35rem", marginBottom: "0.65rem", lineHeight: 1.15 } as React.CSSProperties;
const p = { color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.75 } as React.CSSProperties;

const faqs = [
  ["What kind of businesses do you work with?", "We mainly focus on service businesses such as clinics, consultants, law firms, real estate agents, salons, and other modern local or professional brands."],
  ["Do you only build websites?", "No. We also help with AI automation, custom AI systems, lead handling workflows, landing pages, and growth support connected to the website."],
  ["Can you redesign an existing site?", "Yes. We can improve design, messaging, structure, speed, and conversion flow while keeping the parts of your business that already work."],
  ["Do you provide ongoing support?", "Yes. Depending on the engagement, we can offer support, improvements, updates, and growth-focused iteration after launch."],
  ["How do projects usually start?", "Most projects start with a consultation, then a proposal or scope outline, followed by onboarding, asset collection, and production."],
  ["Do you guarantee leads or rankings?", "No agency can honestly guarantee exact business outcomes. We focus on building strong systems, better conversion paths, and practical growth foundations."],
];

export default function FAQPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ ...section, paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "820px", height: "420px", background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "999px", background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.22)", color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            ❓ FAQ
          </div>
          <h1 style={h1}>Good Questions,<br /><span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Straight Answers.</span></h1>
          <p style={{ ...p, maxWidth: "720px", fontSize: "1.08rem" }}>
            A few common questions clients ask before starting a website, automation, or growth project with Rubab&apos;s Digital.
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 6rem" }}>
        <div style={container}>
          {faqs.map(([question, answer]) => (
            <div key={question} style={card}>
              <div style={q}>{question}</div>
              <p style={p}>{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
