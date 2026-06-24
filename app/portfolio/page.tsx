import Link from "next/link";

export const metadata = {
  title: "Portfolio | Rubab's Digital",
  description: "Explore selected website, automation, AI, campaign, and growth-focused concept work from Rubab's Digital.",
};

const featuredStudies = [
  {
    title: "Service Business Website Systems",
    tag: "Web Design",
    text: "Premium website direction for service businesses that need stronger first impressions, clearer positioning, and better enquiry flow.",
    bullets: ["Positioning-first layout", "Trust-led homepage blocks", "Cleaner enquiry journey"],
  },
  {
    title: "AI Workflow & Lead Automation",
    tag: "Automation",
    text: "Lead capture, follow-up, alerts, and workflow logic shaped into practical systems that save time and improve response speed.",
    bullets: ["Structured lead capture", "Follow-up readiness", "Operator-friendly workflow"],
  },
  {
    title: "Custom AI Agent Experiences",
    tag: "AI Systems",
    text: "Tailored AI-driven interfaces and operational layers that help businesses support visitors, teams, and content workflows more efficiently.",
    bullets: ["Guided UX flow", "Visitor assistance", "System thinking"],
  },
];

const caseRows = [
  {
    title: "Homepage Reframing",
    outcome: "Sharper first impression and clearer service narrative.",
    summary: "A consultative homepage structure designed to guide visitors from attention into trust and action.",
  },
  {
    title: "Contact Qualification Upgrade",
    outcome: "Cleaner lead summary and easier inbox review.",
    summary: "An operator-friendly contact direction with structured service and budget framing for better response handling.",
  },
  {
    title: "Portfolio Proof Layer",
    outcome: "Stronger credibility before the sales conversation.",
    summary: "A more intentional proof system using concept framing, trust blocks, and outcome-oriented presentation.",
  },
];

const worldCupConcepts = [
  { label: "WC01", brand: "Adidas", href: "https://ranch-drums-37308651.figma.site/", note: "Sportswear / match ball" },
  { label: "WC02", brand: "Coca-Cola", href: "https://bony-khaki-28980549.figma.site/", note: "Beverage / fan emotion" },
  { label: "WC03", brand: "Hyundai–Kia", href: "https://khaki-spray-17520158.figma.site/", note: "Mobility / tournament movement" },
  { label: "WC04", brand: "Visa", href: "https://trill-name-39631032.figma.site/", note: "Payments / access systems" },
  { label: "WC05", brand: "Qatar Airways", href: "https://cover-stamp-99875270.figma.site/", note: "Airline / travel prestige" },
  { label: "WC06", brand: "Aramco", href: "https://shell-drawer-98082737.figma.site/", note: "Energy / infrastructure tone" },
  { label: "WC07", brand: "Lenovo", href: "https://money-pacing-83147189.figma.site/", note: "Technology / connected fan systems" },
  { label: "WC08", brand: "AB InBev", href: "https://prior-tutor-97577445.figma.site/", note: "Beer / social gathering energy" },
  { label: "WC09", brand: "Bank of America", href: "https://sun-tusk-12908953.figma.site/", note: "Banking / trust and access" },
  { label: "WC10", brand: "Lay’s", href: "https://malt-shadow-95809262.figma.site/", note: "Snack food / shareable campaign tone" },
  { label: "WC11", brand: "McDonald’s", href: "https://half-gentle-74967322.figma.site/", note: "Food / mass fan participation" },
  { label: "WC12", brand: "Mondelēz", href: "https://epic-zippy-28751361.figma.site/", note: "Snacking / global brand layer" },
  { label: "WC13", brand: "Mengniu Dairy", href: "https://mood-hall-91339399.figma.site/", note: "Dairy / sponsor identity" },
  { label: "WC14", brand: "Unilever Personal Care", href: "https://deep-pep-99990106.figma.site/", note: "Personal care / lifestyle storytelling" },
  { label: "WC15", brand: "Verizon", href: "https://effect-film-51249470.figma.site/", note: "Telecommunications / network power" },
  { label: "WC16", brand: "DoorDash", href: "https://stable-reply-58119542.figma.site/", note: "Delivery / local fan routine" },
  { label: "WC17", brand: "Marriott Bonvoy", href: "https://crowd-self-73447767.figma.site/", note: "Hospitality / stay near the match" },
  { label: "WC18", brand: "Rock-it Cargo", href: "https://opt-mount-52177957.figma.site/", note: "Logistics / behind-the-scenes movement" },
  { label: "WC19", brand: "Valvoline", href: "https://dog-blast-71214759.figma.site/", note: "Automotive services / road-to-match" },
  { label: "WC20", brand: "ADI Predictstreet", href: "https://ethics-tidy-84167911.figma.site/", note: "Prediction / fan engagement" },
  { label: "WC21", brand: "Fanatics", href: "https://cause-five-61027758.figma.site/", note: "Retail / merchandise ecosystem" },
  { label: "WC22", brand: "Boggi Milano", href: "https://dew-cane-49830228.figma.site/", note: "Formalwear / style and prestige" },
  { label: "WC23", brand: "American Airlines", href: "https://queue-nix-72603901.figma.site/", note: "Airline supplier / travel movement" },
  { label: "WC24", brand: "Sailun Tire", href: "https://relax-genre-23000737.figma.site/", note: "Mobility support / road confidence" },
  { label: "WC25", brand: "Diageo", href: "https://bronze-pitch-64416473.figma.site/", note: "Spirits / celebration storytelling" },
  { label: "WC26", brand: "The Home Depot", href: "https://method-grab-21943836.figma.site/", note: "Retail supporter / host-at-home energy" },
];

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "880px",
            height: "440px",
            background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              background: "var(--color-accent-dim)",
              border: "1px solid rgba(0,229,160,0.22)",
              color: "var(--color-accent)",
              fontWeight: 700,
              fontSize: "0.82rem",
              marginBottom: "1.25rem",
            }}
          >
            Portfolio
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Proof, Concepts, and
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Outcome-Aware Direction.</span>
          </h1>

          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", fontSize: "1.06rem" }}>
            This portfolio combines strategic website thinking, operational improvements, and campaign-style concept presentation to show how Rubab&apos;s Digital approaches growth-minded work.
          </p>
        </div>
      </section>

      <section id="featured-work" style={{ padding: "1rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>Featured Direction</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 3rem)", lineHeight: 1.08 }}>
              Strategy that feels business-ready.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {featuredStudies.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    borderRadius: "calc(var(--radius-xl) - 0.35rem)",
                    padding: "1rem",
                    minHeight: "170px",
                    marginBottom: "1rem",
                    background: "linear-gradient(180deg, rgba(0,229,160,0.12), rgba(0,229,160,0.03))",
                    border: "1px solid rgba(0,229,160,0.16)",
                    display: "grid",
                    gap: "0.55rem",
                    alignContent: "start",
                  }}
                >
                  <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem" }}>
                    Strategic Snapshot
                  </div>
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      style={{
                        padding: "0.7rem 0.8rem",
                        borderRadius: "0.9rem",
                        background: "rgba(255,255,255,0.05)",
                        color: "var(--color-text)",
                        fontWeight: 600,
                      }}
                    >
                      {bullet}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "999px",
                    background: "var(--color-accent-dim)",
                    color: "var(--color-accent)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {item.tag}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", marginBottom: "0.7rem", lineHeight: 1.12 }}>
                  {item.title}
                </div>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>
              Mini case studies
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 3rem)", lineHeight: 1.08, marginBottom: "0.8rem" }}>
              Outcome framing before the first call.
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
              These short case-style blocks help visitors understand not just what was built, but what improved because of the direction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {caseRows.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.1rem",
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
                  Consultative outcome
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", lineHeight: 1.12, marginBottom: "0.7rem" }}>
                  {item.title}
                </div>
                <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.65rem" }}>
                  {item.outcome}
                </div>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="world-cup-concepts" style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>
              World Cup Campaign Concepts
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 3rem)", lineHeight: 1.08, marginBottom: "0.8rem" }}>
              A curated concept library for brand storytelling.
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
              These concept links represent campaign exploration across global brands, framed here as creative proof with clearer context and positioning.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.85rem" }}>
            {worldCupConcepts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1rem",
                  color: "var(--color-text)",
                  display: "block",
                }}
              >
                <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.35rem" }}>
                  {item.label}
                </div>
                <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>{item.brand}</div>
                <div style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: "0.94rem" }}>{item.note}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 6rem" }}>
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
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>Need a business-ready version?</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)", lineHeight: 1.08, marginBottom: "0.8rem" }}>
            Let&apos;s shape a more credible website and lead system for your business.
          </h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "1.2rem" }}>
            If you want design, automation, and message clarity to work together, the next step is a focused consultation around your actual offer and goals.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
            <Link
              href="/contact"
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
              Start a Consultation →
            </Link>
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
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
