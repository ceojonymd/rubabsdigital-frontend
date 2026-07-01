export const metadata = {
  title: "Dentist Websites | Rubab's Digital",
  description: "Premium dental clinic websites, booking flows, and automation-ready lead systems for modern practices.",
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
const h2 = { fontFamily: "var(--font-display)", fontSize: "1.35rem", marginBottom: "0.65rem", lineHeight: 1.15 } as React.CSSProperties;
const p = { color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.75 } as React.CSSProperties;

const points = [
  "Trust-building design for clinics and dental practices.",
  "Mobile-first pages that help patients call, message, and book faster.",
  "Service sections for treatments, pricing guidance, and clinic credibility.",
  "Lead and inquiry flows ready for follow-up automation.",
  "A cleaner first impression for local growth and better patient confidence.",
];

export default function DentistWebsitesPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ ...section, paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "880px", height: "440px", background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "999px", background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.22)", color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            🦷 Dental Landing Page
          </div>
          <h1 style={h1}>Dental Websites That Build Trust<br /><span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Before the First Visit.</span></h1>
          <p style={{ ...p, maxWidth: "760px", fontSize: "1.08rem" }}>
            We help dental clinics and practices present a cleaner, more modern online presence with stronger patient confidence, better booking journeys, and automation-ready enquiry flow.
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 6rem" }}>
        <div className="two-col-grid" style={{ ...container, display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "1.25rem" }}>
          <div style={card}>
            <h2 style={h2}>What this page is for</h2>
            <p style={{ ...p, marginBottom: "1rem" }}>
              This is a niche example of how Rubab&apos;s Digital can position websites for dentists and clinics that need more credibility, better user experience, and improved lead capture.
            </p>
            <ul style={{ paddingLeft: "1.1rem", margin: 0, color: "var(--color-text-muted)", lineHeight: 1.8 }}>
              {points.map((point) => <li key={point} style={{ marginBottom: "0.5rem" }}>{point}</li>)}
            </ul>
          </div>

          <div style={card}>
            <h2 style={h2}>Ideal for</h2>
            <p style={p}>Dental clinics, cosmetic dental brands, specialist practices, and local healthcare businesses that want a premium first impression without a bloated website build.</p>
            <a href="/contact" style={{ display: "inline-flex", marginTop: "1rem", padding: "0.85rem 1.1rem", borderRadius: "var(--radius-lg)", background: "var(--color-accent)", color: "#0a1a12", fontWeight: 700 }}>
              Request a Consultation →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
