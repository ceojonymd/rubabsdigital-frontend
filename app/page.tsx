import Link from "next/link";

const trustStrip = [
  "Consultative website direction",
  "AI and automation thinking",
  "Lead-flow-first structure",
  "Service-business positioning clarity",
];

const proofGallery = [
  {
    label: "Homepage direction",
    title: "Premium service-business landing structure",
    text: "A cleaner hero, trust framing, and CTA rhythm designed to move visitors from attention into action.",
  },
  {
    label: "Contact flow",
    title: "Enquiry-ready handoff experience",
    text: "A clearer qualification path that helps better-fit leads understand the next step faster.",
  },
  {
    label: "Automation layer",
    title: "Website and workflow thinking together",
    text: "Design direction that considers not just the front-end experience, but how the business handles leads after contact.",
  },
];

const objections = [
  "Will this just look better, or actually help enquiries?",
  "Can the website and automation direction work together?",
  "Is this a fit for service businesses that need stronger trust online?",
];

export default function HomePage() {
  return (
    <main style={{ paddingTop: "80px", paddingBottom: "110px" }}>
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
                We help clinics, consultants, law firms, real estate agents, salons, and local service brands create stronger first impressions, better lead handling, and more connected digital systems.
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
                  href="/portfolio"
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
                  Explore Proof →
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
                  padding: "1.2rem",
                }}
              >
                <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.8rem" }}>
                  Business-ready framing
                </div>
                <div style={{ display: "grid", gap: "0.65rem" }}>
                  {[
                    "Clearer positioning",
                    "Stronger trust signals",
                    "Better lead handoff",
                    "More structured next steps",
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
                  The goal is not only a better-looking website, but a clearer and more persuasive business presence.
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
              Real proof direction
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
                lineHeight: 1.08,
                marginBottom: "0.8rem",
              }}
            >
              Proof blocks that feel closer to real buying decisions.
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
              These proof-style cards are designed to show what visitors actually care about: clarity, trust, and what improves after the redesign or system direction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {proofGallery.map((item) => (
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
                    height: "210px",
                    borderRadius: "calc(var(--radius-xl) - 0.35rem)",
                    background: "linear-gradient(135deg, rgba(0,229,160,0.18), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(0,229,160,0.18)",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: "1rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "78%",
                      height: "72%",
                      borderRadius: "1rem",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(10,15,13,0.72)",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                      padding: "0.8rem",
                      display: "grid",
                      gap: "0.5rem",
                      alignContent: "start",
                    }}
                  >
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#ff6b6b" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#f7b731" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#20bf6b" }} />
                    </div>
                    <div style={{ height: "18px", width: "60%", borderRadius: "999px", background: "rgba(0,229,160,0.22)" }} />
                    <div style={{ height: "12px", width: "86%", borderRadius: "999px", background: "rgba(255,255,255,0.12)" }} />
                    <div style={{ height: "12px", width: "70%", borderRadius: "999px", background: "rgba(255,255,255,0.08)" }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "0.25rem" }}>
                      <div style={{ height: "62px", borderRadius: "0.8rem", background: "rgba(255,255,255,0.06)" }} />
                      <div style={{ height: "62px", borderRadius: "0.8rem", background: "rgba(255,255,255,0.06)" }} />
                    </div>
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
                    marginBottom: "0.8rem",
                  }}
                >
                  {item.label}
                </div>

                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", lineHeight: 1.12, marginBottom: "0.7rem" }}>
                  {item.title}
                </div>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 4.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.5rem" }}>
              Buyer objections
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
                lineHeight: 1.08,
                marginBottom: "0.8rem",
              }}
            >
              Questions serious buyers usually ask before they reach out.
            </h2>
          </div>

          <div style={{ display: "grid", gap: "0.8rem" }}>
            {objections.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1rem 1.1rem",
                  color: "var(--color-text)",
                  fontWeight: 600,
                }}
              >
                {item}
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
            Sales-ready next step
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
              lineHeight: 1.08,
              marginBottom: "0.8rem",
            }}
          >
            Let&apos;s shape a website and lead flow that feels more convincing.
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              maxWidth: "760px",
              marginBottom: "1.2rem",
            }}
          >
            If the current site does not reflect the quality of your service, we can help rebuild the message, trust, and next-step logic around it.
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
              See Pricing Options →
            </Link>
          </div>
        </div>
      </section>
    
      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
              Fast consultation path
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              <a href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 1.1rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-accent)",
                color: "#09140f",
                fontWeight: 700,
                textDecoration: "none"
              }}>Start Consultation →</a>
              <a href="/portfolio" style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85rem 1.1rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                fontWeight: 700,
                textDecoration: "none",
                background: "var(--color-surface)"
              }}>See Proof First</a>
            </div>
          </div>
        </div>
      </section>
    
      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
              Need help choosing?
            </div>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "0.85rem" }}>
              If you are somewhere between package levels, a short consultation will help identify the most practical fit.
            </p>
            <a href="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 1.1rem",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-accent)",
              color: "#09140f",
              fontWeight: 700,
              textDecoration: "none"
            }}>Get Package Guidance →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
