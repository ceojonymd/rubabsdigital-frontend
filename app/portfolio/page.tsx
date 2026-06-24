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
  },
  {
    title: "AI Workflow & Lead Automation",
    tag: "Automation",
    text: "Lead capture, follow-up, alerts, and workflow logic shaped into practical systems that save time and improve response speed.",
  },
  {
    title: "Custom AI Agent Experiences",
    tag: "AI Systems",
    text: "Tailored AI-driven interfaces and operational layers that help businesses support visitors, teams, and content workflows more efficiently.",
  },
  {
    title: "Growth-Focused Marketing Direction",
    tag: "Marketing",
    text: "A conversion-aware link between landing pages, audience intent, messaging, and business growth support.",
  },
];

const worldCupConcepts = [
  ["WC01", "https://ranch-drums-37308651.figma.site/"],
  ["WC02", "https://bony-khaki-28980549.figma.site/"],
  ["WC02-B", "https://khaki-spray-17520158.figma.site/"],
  ["WC04", "https://trill-name-39631032.figma.site/"],
  ["WC05", "https://cover-stamp-99875270.figma.site/"],
  ["WC06", "https://shell-drawer-98082737.figma.site/"],
  ["WC07", "https://money-pacing-83147189.figma.site/"],
  ["WC08", "https://prior-tutor-97577445.figma.site/"],
  ["WC09", "https://sun-tusk-12908953.figma.site/"],
  ["WC10", "https://malt-shadow-95809262.figma.site/"],
  ["WC11", "https://half-gentle-74967322.figma.site/"],
  ["WC12", "https://epic-zippy-28751361.figma.site/"],
  ["WC13", "https://mood-hall-91339399.figma.site/"],
  ["WC14", "https://deep-pep-99990106.figma.site/"],
  ["WC15", "https://effect-film-51249470.figma.site/"],
  ["WC16", "https://stable-reply-58119542.figma.site/"],
  ["WC17", "https://crowd-self-73447767.figma.site/"],
  ["WC18", "https://opt-mount-52177957.figma.site/"],
  ["WC19", "https://dog-blast-71214759.figma.site/"],
  ["WC20", "https://ethics-tidy-84167911.figma.site/"],
  ["WC21", "https://cause-five-61027758.figma.site/"],
  ["WC22", "https://dew-cane-49830228.figma.site/"],
  ["WC23", "https://queue-nix-72603901.figma.site/"],
  ["WC24", "https://relax-genre-23000737.figma.site/"],
  ["WC25", "https://bronze-pitch-64416473.figma.site/"],
  ["WC26", "https://method-grab-21943836.figma.site/"],
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
            🗂 Portfolio
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
                  padding: "1.5rem",
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
              These concept links represent creative exploration and campaign-style page thinking across multiple World Cup themed brand directions. They sit best as portfolio proof, not as primary service navigation.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.85rem" }}>
            {worldCupConcepts.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1rem",
                  color: "var(--color-text)",
                  fontWeight: 700,
                }}
              >
                {label} →
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
