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
    visual: "Homepage architecture · Offer framing",
  },
  {
    title: "AI Workflow & Lead Automation",
    tag: "Automation",
    text: "Lead capture, follow-up, alerts, and workflow logic shaped into practical systems that save time and improve response speed.",
    visual: "Form routing · Follow-up sequence",
  },
  {
    title: "Custom AI Agent Experiences",
    tag: "AI Systems",
    text: "Tailored AI-driven interfaces and operational layers that help businesses support visitors, teams, and content workflows more efficiently.",
    visual: "Assistant flow · Guided response UX",
  },
  {
    title: "Growth-Focused Marketing Direction",
    tag: "Marketing",
    text: "A conversion-aware link between landing pages, audience intent, messaging, and business growth support.",
    visual: "Message hierarchy · CTA clarity",
  },
];

const worldCupConcepts = [
  { label: "WC01", brand: "Adidas", href: "https://ranch-drums-37308651.figma.site/" },
  { label: "WC02", brand: "Coca-Cola", href: "https://bony-khaki-28980549.figma.site/" },
  { label: "WC03", brand: "Hyundai–Kia", href: "https://khaki-spray-17520158.figma.site/" },
  { label: "WC04", brand: "Visa", href: "https://trill-name-39631032.figma.site/" },
  { label: "WC05", brand: "Qatar Airways", href: "https://cover-stamp-99875270.figma.site/" },
  { label: "WC06", brand: "Aramco", href: "https://shell-drawer-98082737.figma.site/" },
  { label: "WC07", brand: "Lenovo", href: "https://money-pacing-83147189.figma.site/" },
  { label: "WC08", brand: "AB InBev", href: "https://prior-tutor-97577445.figma.site/" },
  { label: "WC09", brand: "Bank of America", href: "https://sun-tusk-12908953.figma.site/" },
  { label: "WC10", brand: "Lay’s", href: "https://malt-shadow-95809262.figma.site/" },
  { label: "WC11", brand: "McDonald’s", href: "https://half-gentle-74967322.figma.site/" },
  { label: "WC12", brand: "Mondelēz", href: "https://epic-zippy-28751361.figma.site/" },
  { label: "WC13", brand: "Mengniu Dairy", href: "https://mood-hall-91339399.figma.site/" },
  { label: "WC14", brand: "Unilever Personal Care", href: "https://deep-pep-99990106.figma.site/" },
  { label: "WC15", brand: "Verizon", href: "https://effect-film-51249470.figma.site/" },
  { label: "WC16", brand: "DoorDash", href: "https://stable-reply-58119542.figma.site/" },
  { label: "WC17", brand: "Marriott Bonvoy", href: "https://crowd-self-73447767.figma.site/" },
  { label: "WC18", brand: "Rock-it Cargo", href: "https://opt-mount-52177957.figma.site/" },
  { label: "WC19", brand: "Valvoline", href: "https://dog-blast-71214759.figma.site/" },
  { label: "WC20", brand: "ADI Predictstreet", href: "https://ethics-tidy-84167911.figma.site/" },
  { label: "WC21", brand: "Fanatics", href: "https://cause-five-61027758.figma.site/" },
  { label: "WC22", brand: "Boggi Milano", href: "https://dew-cane-49830228.figma.site/" },
  { label: "WC23", brand: "American Airlines", href: "https://queue-nix-72603901.figma.site/" },
  { label: "WC24", brand: "Sailun Tire", href: "https://relax-genre-23000737.figma.site/" },
  { label: "WC25", brand: "Diageo", href: "https://bronze-pitch-64416473.figma.site/" },
  { label: "WC26", brand: "The Home Depot", href: "https://method-grab-21943836.figma.site/" },
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
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Growth-Focused Direction.</span>
          </h1>

          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", fontSize: "1.06rem" }}>
            This page brings together client-facing service direction, systems thinking, and creative concept work that reflects how Rubab&apos;s Digital approaches design, automation, and modern campaign storytelling.
          </p>
        </div>
      </section>

      <section id="featured-work" style={{ padding: "1rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>Featured Work</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 3rem)", lineHeight: 1.08 }}>
              Real directions we would confidently sell.
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
                    minHeight: "150px",
                    marginBottom: "1rem",
                    background:
                      "linear-gradient(180deg, rgba(0,229,160,0.12), rgba(0,229,160,0.03))",
                    border: "1px solid rgba(0,229,160,0.16)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem" }}>
                    Proof Snapshot
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      lineHeight: 1.08,
                      color: "var(--color-text)",
                    }}
                  >
                    {item.visual}
                  </div>
                  <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
                    Screenshot-style presentation block
                  </div>
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
              These concept links represent creative exploration and campaign-style page thinking across multiple World Cup themed brand directions. They work best here as portfolio proof with brand context.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem" }}>
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
                <div style={{ fontWeight: 700 }}>{item.brand}</div>
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
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>Looking for a business-ready version?</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)", lineHeight: 1.08, marginBottom: "0.8rem" }}>
            We can turn strong concept thinking into a real service-business asset.
          </h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "1.2rem" }}>
            If you need a cleaner website, a sharper landing page, or a more connected digital system, the next step is a focused consultation around your actual business goals.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
            <Link
              href="/pricing"
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
              View Pricing →
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
