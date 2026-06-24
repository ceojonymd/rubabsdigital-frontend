import Link from "next/link";

const trustStrip = [
  "Consultative website direction",
  "AI and automation thinking",
  "Lead-flow-first structure",
  "Service-business positioning clarity",
];

const caseStudies = [
  {
    title: "Service Website Restructure",
    outcome: "Clearer offer hierarchy and stronger contact intent.",
    detail: "A homepage reframed around trust, service clarity, and better CTA positioning for service-led businesses.",
  },
  {
    title: "Lead Handling System Direction",
    outcome: "Faster internal response and cleaner enquiry qualification.",
    detail: "A contact and workflow direction shaped to make incoming leads easier to review, sort, and act on.",
  },
  {
    title: "Growth-Focused Landing Flow",
    outcome: "More persuasive first impressions for higher-intent visitors.",
    detail: "A conversion-aware structure connecting message clarity, page rhythm, and next-step confidence.",
  },
];

const testimonialCards = [
  {
    line: "The direction feels much more premium and much easier to trust than a typical agency landing page.",
    who: "Positioning-focused service business perspective",
  },
  {
    line: "What stands out is the thinking behind the journey, not just the visuals.",
    who: "Consultative buyer perspective",
  },
  {
    line: "The site feels more prepared for real enquiries, not just admiration.",
    who: "Lead-quality focused business perspective",
  },
];

export default function HomePage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <div>
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
                  marginBottom: "1.6rem",
                }}
              >
                We help clinics, consultants, law firms, real estate agents, salons, and local service brands
                create stronger first impressions, better lead handling, and more connected digital systems.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginBottom: "1.2rem" }}>
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
                  Review Packages →
                </Link>
              </div>
            </div>

            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1rem",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div
                style={{
                  borderRadius: "calc(var(--radius-xl) - 0.35rem)",
                  overflow: "hidden",
                  border: "1px solid rgba(0,229,160,0.16)",
                  background: "linear-gradient(180deg, rgba(0,229,160,0.12), rgba(0,229,160,0.04))",
                }}
              >
                <div style={{ padding: "1.2rem" }}>
                  <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.8rem" }}>
                    Founder-led direction
                  </div>
                  <div style={{ display: "grid", gap: "0.65rem" }}>
                    {[
                      "Positioning before decoration",
                      "Trust before traffic waste",
                      "Systems before scattered tools",
                      "Clear next steps before confusion",
                    ].map((line) => (
                      <div
                        key={line}
                        style={{
                          padding: "0.85rem 0.95rem",
                          borderRadius: "0.95rem",
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--color-text)",
                          fontWeight: 600,
                        }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                  <div style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginTop: "0.9rem" }}>
                    A business-first view of websites, automation, and growth support shaped to help service brands look clearer and operate better.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.85rem",
            }}
          >
            {trustStrip.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "0.95rem 1rem",
                  color: "var(--color-text)",
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>
              Founder note
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
                lineHeight: 1.08,
                marginBottom: "0.8rem",
              }}
            >
              We believe a modern service business needs more than a nice-looking site.
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "860px" }}>
              It needs message clarity, trust, speed, and a cleaner path from attention into action. Rubab&apos;s Digital is built around that belief: the website should support how the business is seen, how enquiries are handled, and how growth systems work together.
            </p>
          </div>
        </div>
      </section>

      <section id="case-studies" style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>
              Mini case studies
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
                lineHeight: 1.08,
                marginBottom: "0.8rem",
              }}
            >
              We do not just design pages.
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
              We help shape how a service business presents itself, guides attention, earns trust, and turns interest into a cleaner next step.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {caseStudies.map((item) => (
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
                  Outcome-led case
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    lineHeight: 1.12,
                    marginBottom: "0.7rem",
                  }}
                >
                  {item.title}
                </div>
                <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.7rem" }}>
                  {item.outcome}
                </div>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 4.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>
              Trust perspective
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
                lineHeight: 1.08,
                marginBottom: "0.8rem",
              }}
            >
              The kind of reactions this direction is built to create.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {testimonialCards.map((item) => (
              <div
                key={item.line}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.1rem",
                }}
              >
                <div style={{ color: "var(--color-text)", lineHeight: 1.8, marginBottom: "1rem", fontWeight: 600 }}>
                  “{item.line}”
                </div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>{item.who}</div>
              </div>
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
            Ready for the next step?
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
              lineHeight: 1.08,
              marginBottom: "0.8rem",
            }}
          >
            Let&apos;s turn your website into a more credible business asset.
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              maxWidth: "760px",
              marginBottom: "1.2rem",
            }}
          >
            If your current site feels too generic, too unclear, or disconnected from how leads actually move, we can help shape a better system.
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
              Start Your Project →
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
