import Link from "next/link";

const proofItems = [
  {
    title: "Website Redesign & Landing Pages",
    text: "Sharper messaging, cleaner page flow, and stronger calls to action for service businesses that need more trust before the first enquiry.",
    lines: ["Hero → trust → offer", "Premium visual hierarchy", "CRO-minded structure"],
  },
  {
    title: "AI Chatbots & Automation",
    text: "Connected systems for enquiry capture, follow-up, response speed, and workflow support so your operation feels less fragmented.",
    lines: ["Lead routing logic", "Fast response systems", "Automation-ready journey"],
  },
  {
    title: "SEO, Ads & Growth Support",
    text: "Digital visibility and conversion support shaped to help your business move from clicks and visits into more meaningful leads.",
    lines: ["Traffic → enquiry path", "Offer clarity", "Growth-oriented planning"],
  },
];

const trustBullets = [
  "Built for modern service businesses, not generic templates.",
  "Designed to connect positioning, trust, and lead flow in one system.",
  "Structured for industries where credibility matters before contact.",
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
                  marginBottom: "1.75rem",
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
                  href="/portfolio#featured-work"
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
                  See Proof →
                </Link>
              </div>

              <div style={{ display: "grid", gap: "0.65rem" }}>
                {trustBullets.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "999px",
                        background: "var(--color-accent)",
                        marginTop: "0.45rem",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item}</div>
                  </div>
                ))}
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
                <div
                  style={{
                    display: "flex",
                    gap: "0.45rem",
                    padding: "0.8rem 1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#ff6b6b" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#f7b731" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#20bf6b" }} />
                </div>

                <div style={{ padding: "1.2rem" }}>
                  <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.8rem" }}>
                    Preview Frame
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.1fr 0.9fr",
                      gap: "0.8rem",
                      marginBottom: "0.9rem",
                    }}
                  >
                    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "1rem", minHeight: "170px", padding: "1rem" }}>
                      <div style={{ width: "48%", height: "10px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", marginBottom: "0.8rem" }} />
                      <div style={{ width: "82%", height: "18px", borderRadius: "999px", background: "rgba(255,255,255,0.22)", marginBottom: "0.55rem" }} />
                      <div style={{ width: "72%", height: "18px", borderRadius: "999px", background: "rgba(255,255,255,0.16)", marginBottom: "1rem" }} />
                      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                        <div style={{ width: "110px", height: "36px", borderRadius: "999px", background: "rgba(0,229,160,0.85)" }} />
                        <div style={{ width: "95px", height: "36px", borderRadius: "999px", background: "rgba(255,255,255,0.12)" }} />
                      </div>
                      <div style={{ display: "grid", gap: "0.45rem" }}>
                        <div style={{ width: "86%", height: "10px", borderRadius: "999px", background: "rgba(255,255,255,0.12)" }} />
                        <div style={{ width: "78%", height: "10px", borderRadius: "999px", background: "rgba(255,255,255,0.10)" }} />
                        <div style={{ width: "64%", height: "10px", borderRadius: "999px", background: "rgba(255,255,255,0.08)" }} />
                      </div>
                    </div>

                    <div style={{ display: "grid", gap: "0.8rem" }}>
                      <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "1rem", minHeight: "78px", padding: "0.9rem" }}>
                        <div style={{ width: "42%", height: "9px", borderRadius: "999px", background: "rgba(255,255,255,0.12)", marginBottom: "0.75rem" }} />
                        <div style={{ width: "76%", height: "14px", borderRadius: "999px", background: "rgba(255,255,255,0.20)", marginBottom: "0.45rem" }} />
                        <div style={{ width: "58%", height: "10px", borderRadius: "999px", background: "rgba(255,255,255,0.08)" }} />
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "1rem", minHeight: "78px", padding: "0.9rem" }}>
                        <div style={{ width: "42%", height: "9px", borderRadius: "999px", background: "rgba(255,255,255,0.12)", marginBottom: "0.75rem" }} />
                        <div style={{ width: "68%", height: "14px", borderRadius: "999px", background: "rgba(255,255,255,0.20)", marginBottom: "0.45rem" }} />
                        <div style={{ width: "60%", height: "10px", borderRadius: "999px", background: "rgba(255,255,255,0.08)" }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>
                    A presentation-style proof frame that helps visitors feel the level of structure, clarity, and polish before they even read the details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    borderRadius: "calc(var(--radius-xl) - 0.35rem)",
                    padding: "1rem",
                    minHeight: "165px",
                    marginBottom: "1rem",
                    background: "linear-gradient(180deg, rgba(0,229,160,0.12), rgba(0,229,160,0.03))",
                    border: "1px solid rgba(0,229,160,0.16)",
                    display: "grid",
                    gap: "0.55rem",
                    alignContent: "start",
                  }}
                >
                  <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem" }}>
                    Visual Snapshot
                  </div>
                  {item.lines.map((line) => (
                    <div
                      key={line}
                      style={{
                        padding: "0.7rem 0.8rem",
                        borderRadius: "0.9rem",
                        background: "rgba(255,255,255,0.05)",
                        color: "var(--color-text)",
                        fontWeight: 600,
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.6rem" }}>
                  {item.title}
                </div>
                <div style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.text}</div>
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
