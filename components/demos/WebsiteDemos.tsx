"use client"

const shell = {
  page: {
    padding: "2rem",
    minHeight: "100%",
    fontFamily: "var(--font-body)",
    background: "var(--color-bg)",
    color: "var(--color-text)",
  } as const,
  wrap: {
    maxWidth: "1180px",
    margin: "0 auto",
  } as const,
  card: {
    padding: "1.25rem",
    borderRadius: "22px",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
  } as const,
}

function Badge({ text, tone }: { text: string; tone: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.35rem 0.75rem",
        borderRadius: "999px",
        fontSize: "0.76rem",
        fontWeight: 700,
        color: tone,
        background: `color-mix(in srgb, ${tone} 10%, transparent)`,
        border: `1px solid color-mix(in srgb, ${tone} 26%, transparent)`,
      }}
    >
      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: tone }} />
      {text}
    </div>
  )
}

function SitePreview({
  niche,
  title,
  tone,
  points,
}: {
  niche: string
  title: string
  tone: string
  points: string[]
}) {
  return (
    <div style={shell.card}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.9rem" }}>
        <Badge text={niche} tone={tone} />
        <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>Single-page demo</div>
      </div>

      <div
        style={{
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid var(--color-border)",
          background: "var(--color-surface-offset)",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            padding: "0.55rem 0.75rem",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff6b6b" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffd166" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#06d6a0" }} />
          <span style={{ marginLeft: "0.5rem", fontSize: "0.76rem", color: "var(--color-text-muted)" }}>
            Rubab&apos;s Digital demo preview
          </span>
        </div>

        <div style={{ padding: "1rem" }}>
          <div
            style={{
              padding: "1.2rem",
              borderRadius: "16px",
              background: `color-mix(in srgb, ${tone} 10%, var(--color-surface))`,
              marginBottom: "0.9rem",
            }}
          >
            <div style={{ fontSize: "0.76rem", color: tone, fontWeight: 700, marginBottom: "0.45rem" }}>Hero section</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>{title}</div>
            <div style={{ fontSize: "0.86rem", color: "var(--color-text-muted)", maxWidth: "34ch", lineHeight: 1.6 }}>
              Fast, affordable, trust-building website for local service businesses.
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem", marginBottom: "0.7rem" }}>
            <div style={{ padding: "0.8rem", borderRadius: "14px", background: "var(--color-surface)" }}>Services</div>
            <div style={{ padding: "0.8rem", borderRadius: "14px", background: "var(--color-surface)" }}>Reviews</div>
            <div style={{ padding: "0.8rem", borderRadius: "14px", background: "var(--color-surface)" }}>About</div>
            <div style={{ padding: "0.8rem", borderRadius: "14px", background: "var(--color-surface)" }}>Contact CTA</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gap: "0.55rem" }}>
        {points.map((point) => (
          <div key={point} style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
            • {point}
          </div>
        ))}
      </div>
    </div>
  )
}

export function BusinessWebsiteDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <Badge text="Affordable website direction" tone="#7c6fff" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
          Single-Page Website Demos
        </h2>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "760px", marginBottom: "1.5rem" }}>
          Designed for budget-conscious local businesses that need a fast, credible single-page website between $50 and $500.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          <SitePreview
            niche="Lawyer"
            title="Trusted Legal Help for Family & Property Matters"
            tone="#7c6fff"
            points={[
              "Hero + services + lawyer profile + reviews + contact form",
              "Good for solo lawyers and small chambers",
              "Built to generate direct calls and consultation requests",
            ]}
          />
          <SitePreview
            niche="Dentist"
            title="Modern Dental Care for the Whole Family"
            tone="#00b3ff"
            points={[
              "Services, before/after, location, appointment CTA",
              "Good for small clinics and chamber-based practice",
              "Mobile-friendly and trust-focused",
            ]}
          />
          <SitePreview
            niche="Salon"
            title="Beauty, Hair & Bridal Services That Feel Premium"
            tone="#ffc857"
            points={[
              "Visual hero, service pricing, team, WhatsApp booking",
              "Good for salons, spas, parlours",
              "Instagram-friendly layout",
            ]}
          />
          <SitePreview
            niche="Plumber"
            title="Fast Plumbing Service for Homes & Offices"
            tone="#00e5a0"
            points={[
              "Emergency CTA, service list, local trust, call button",
              "Good for service pros with low budget",
              "Built for fast local lead capture",
            ]}
          />
          <SitePreview
            niche="Consultant"
            title="Book a Strategy Session to Grow Smarter"
            tone="#ff7a59"
            points={[
              "Authority-focused hero, offer section, case proof, CTA",
              "Good for coaches and consultants",
              "Simple, clean, conversion-first layout",
            ]}
          />
          <SitePreview
            niche="Real Estate"
            title="Find Better Property Deals with a Trusted Local Agent"
            tone="#ff5fa2"
            points={[
              "Featured listings, agent intro, area focus, contact CTA",
              "Good for individual agents and small agencies",
              "Built to collect inquiry leads quickly",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export const LandingPageDemo = BusinessWebsiteDemo
export const PortfolioDemo = BusinessWebsiteDemo
