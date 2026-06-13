import Link from "next/link"
import ConsultancyButton from "@/components/ConsultancyButton"

export const metadata = {
  title: "Rubab's Digital — Web & Automation Studio",
  description: "Premium websites, AI agents, automation workflows, and digital marketing systems for clinics, consultants, law firms, real estate agents, and modern service businesses.",
}

export default function HomePage() {
  const pillars = [
    {
      icon: "🌐",
      title: "Website Design",
      href: "/website-design",
      color: "#ffc857",
      desc: "Premium service-business websites built to earn trust, explain your offer clearly, and turn visitors into real enquiries."
    },
    {
      icon: "🤖",
      title: "Custom AI Agents",
      href: "/custom-ai-agents",
      color: "#00e5a0",
      desc: "Business-trained AI assistants that answer questions, qualify leads, guide bookings, and support your sales process."
    },
    {
      icon: "⚡",
      title: "AI Automation",
      href: "/ai-automation",
      color: "#7c6fff",
      desc: "n8n-powered workflow systems that automate repetitive work, reduce manual errors, and connect your tools."
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      href: "/digital-marketing",
      color: "#f472b6",
      desc: "Lead-first traffic, landing pages, remarketing, and reporting systems designed around enquiries and ROI."
    }
  ]

  const outcomes = [
    "Better first impressions.",
    "Faster lead response.",
    "Cleaner enquiry flow.",
    "Less repetitive manual work.",
    "More qualified conversations.",
    "Stronger conversion systems."
  ]

  const niches = [
    "Clinics & healthcare brands",
    "Consultants & coaches",
    "Law firms",
    "Real estate agents",
    "Salons & local service businesses",
    "Modern service brands"
  ]

  const steps = [
    {
      title: "Clarify the Offer",
      desc: "We start with your niche, your service offer, and what your website or system actually needs to achieve."
    },
    {
      title: "Build the Right System",
      desc: "Then we combine pages, automation, AI, and follow-up flows into a setup that matches your business model."
    },
    {
      title: "Launch and Improve",
      desc: "Once live, the system is ready to support enquiries, operations, and growth more reliably."
    }
  ]

  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-22%", left: "50%", transform: "translateX(-50%)",
          width: "1120px", height: "560px",
          background: "radial-gradient(ellipse, rgba(124,111,255,0.18) 0%, rgba(0,229,160,0.12) 32%, rgba(244,114,182,0.08) 56%, transparent 74%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "color-mix(in srgb, #7c6fff 15%, transparent)",
            border: "1px solid #7c6fff40",
            fontSize: "0.8rem", fontWeight: 600, color: "#b8abff",
            marginBottom: "1.5rem"
          }}>
            ✦ Web & Automation Studio
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.7rem, 1rem + 5vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.03,
            letterSpacing: "-0.03em",
            maxWidth: "980px",
            marginBottom: "1.25rem",
            whiteSpace: "pre-line"
          }}>
            Premium Websites, AI, and Automation
Built for Modern Service Businesses.
          </h1>

          <p style={{
            fontSize: "clamp(1.05rem, 0.92rem + 0.45vw, 1.25rem)",
            color: "var(--color-text-muted)",
            maxWidth: "760px",
            lineHeight: 1.8,
            marginBottom: "1.15rem"
          }}>
            We help clinics, consultants, law firms, real estate agents, and local service brands build better first impressions, faster lead handling, and smarter business systems.
          </p>

          <p style={{
            color: "var(--color-text-muted)",
            maxWidth: "680px",
            lineHeight: 1.75,
            marginBottom: "2.3rem"
          }}>
            Instead of selling disconnected services, we connect websites, AI agents, automation workflows, and digital marketing into one practical growth setup.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginBottom: "2rem" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <Link
              href="/website-design"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "52px",
                padding: "0 1.1rem",
                borderRadius: "999px",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                textDecoration: "none",
                background: "var(--color-surface)"
              }}
            >
              Explore Services
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.85rem",
            maxWidth: "980px"
          }}>
            {outcomes.map((item) => (
              <div
                key={item}
                style={{
                  padding: "0.9rem 1rem",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--color-text-muted)"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ maxWidth: "720px", marginBottom: "2.25rem" }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
              marginBottom: "0.8rem"
            }}>
              Services That Work Better Together
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>
              Each service can stand alone, but the real advantage comes when your website, lead handling, automation, and marketing all work as one system.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
            {pillars.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "1.5rem",
                  borderRadius: "24px",
                  background: "var(--color-surface-offset)",
                  border: "1px solid var(--color-border)",
                  display: "block"
                }}
              >
                <div style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                  color: item.color
                }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 4rem" }}>
        <div style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "1.5rem",
          alignItems: "stretch"
        }}>
          <div style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "1.35rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)"
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem",
              gap: "1rem", flexWrap: "wrap"
            }}>
              <div>
                <div style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)"
                }}>
                  System proof
                </div>
                <div style={{ fontSize: "1.15rem", fontWeight: 800, marginTop: "0.35rem" }}>
                  One Connected Growth Stack
                </div>
              </div>
              <div style={{
                padding: "0.42rem 0.75rem",
                borderRadius: "999px",
                background: "rgba(124,111,255,0.12)",
                border: "1px solid rgba(124,111,255,0.24)",
                color: "#b8abff",
                fontSize: "0.82rem",
                fontWeight: 700
              }}>
                Conversion System Focused
              </div>
            </div>

            <div style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#101521"
            }}>
              <img
                src="/proof/home-system-board.svg"
                alt="Diagram showing website design, AI agents, automation, and marketing connected as one growth system"
                width="1400"
                height="820"
                loading="lazy"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {niches.map((item, idx) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "1.15rem 1.1rem"
                }}
              >
                <div style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "14px",
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(0,229,160,0.12)",
                  border: "1px solid rgba(0,229,160,0.22)",
                  color: "#00e5a0",
                  fontWeight: 800,
                  marginBottom: "0.85rem"
                }}>
                  {idx + 1}
                </div>
                <div style={{ fontSize: "1.04rem", fontWeight: 800 }}>{item}</div>
                <div style={{ marginTop: "0.45rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                  A strong fit when trust, enquiries, and operations all need to improve together.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ maxWidth: "720px", marginBottom: "2.5rem" }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
              marginBottom: "0.8rem"
            }}>
              How We Approach It
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}>
              We keep the process simple: understand the business, build the right setup, and make the system easier to use and easier to grow.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {steps.map((step, index) => (
              <div
                key={step.title}
                style={{
                  padding: "1.5rem",
                  borderRadius: "24px",
                  background: "var(--color-surface-offset)",
                  border: "1px solid var(--color-border)"
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: "1rem",
                  background: "rgba(255,200,87,0.12)",
                  border: "1px solid rgba(255,200,87,0.22)",
                  color: "#ffc857",
                  fontWeight: 800
                }}>
                  0{index + 1}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  marginBottom: "0.55rem"
                }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem 5rem" }}>
        <div style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "4rem 2rem",
          borderRadius: "28px",
          background: "color-mix(in srgb, #7c6fff 8%, var(--color-surface-offset))",
          border: "1px solid rgba(124,111,255,0.18)",
          textAlign: "center"
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 1rem + 2vw, 3rem)",
            marginBottom: "1rem"
          }}>
            Need a Better Website, Better Lead Flow, or Better Systems?
          </h2>
          <p style={{
            color: "var(--color-text-muted)",
            maxWidth: "620px",
            margin: "0 auto 2rem",
            lineHeight: 1.75
          }}>
            Book a free consultation and we’ll help you identify the right mix of design, AI, automation, and marketing for your business.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <ConsultancyButton label="Book Free Consultation →" size="lg" />
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "52px",
                padding: "0 1.1rem",
                borderRadius: "999px",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                textDecoration: "none",
                background: "var(--color-surface)"
              }}
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
