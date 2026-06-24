import Link from "next/link";

const proofItems = [
  {
    title: "Service websites with business intent",
    text: "Built for clinics, consultants, law firms, real estate agents, salons, and modern local service brands.",
  },
  {
    title: "Automation-ready growth systems",
    text: "Websites, forms, lead capture, and follow-up logic designed to work together instead of staying disconnected.",
  },
  {
    title: "Campaign and concept exploration",
    text: "Creative direction, landing-page thinking, and branded concept work that strengthens proof and positioning.",
  },
];

const entryLinks = [
  {
    href: "/portfolio#featured-work",
    title: "See the Work",
    text: "Browse featured project directions, proof sections, and campaign-style creative exploration.",
  },
  {
    href: "/pricing",
    title: "Explore Pricing",
    text: "Understand how website, automation, and growth engagements are usually structured.",
  },
  {
    href: "/contact",
    title: "Start a Conversation",
    text: "Tell us what you need and we’ll recommend the cleanest way to move from idea to execution.",
  },
];

export default function HomePage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
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
            Rubab&apos;s Digital
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 1rem + 5vw, 5.8rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              maxWidth: "900px",
            }}
          >
            Premium Websites, AI, and Automation
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
              Built for Modern Service Businesses.
            </span>
          </h1>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.08rem",
              lineHeight: 1.85,
              maxWidth: "760px",
              marginBottom: "1.75rem",
            }}
          >
            We help clinics, consultants, law firms, real estate agents, salons, and local service brands
            create stronger first impressions, better lead handling, and more connected digital systems.
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
              Book a Consultation →
            </Link>
            <Link
              href="/portfolio#world-cup-concepts"
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
              View Creative Proof
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {proofItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.4rem",
                }}
              >
                <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.6rem" }}>
                  {item.title}
                </div>
                <div style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>
              Next Steps
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 1rem + 2vw, 3.1rem)",
                lineHeight: 1.08,
              }}
            >
              Move from interest to trust.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {entryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.4rem",
                  display: "block",
                }}
              >
                <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.6rem" }}>
                  {item.title}
                </div>
                <div style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.text}</div>
              </Link>
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
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
            Ready to build the right system?
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
              lineHeight: 1.08,
              marginBottom: "0.8rem",
            }}
          >
            Websites, automation, and growth support should feel connected.
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              maxWidth: "760px",
              marginBottom: "1.2rem",
            }}
          >
            If your current online presence feels scattered, slow, or too generic, we can help you shape a cleaner
            system with better design, better positioning, and better lead flow.
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
