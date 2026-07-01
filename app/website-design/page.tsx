import ConsultancyButton from "@/components/ConsultancyButton"

export const metadata = {
  title: "Website Design",
  description: "Premium service-business websites for clinics, consultants, law firms, real estate agents, salons, and local brands built to earn trust and drive enquiries.",  alternates: {
    canonical: "https://rubabsdigital.com/website-design",
  },
  openGraph: {
    title: "Website Design Services",
    description: "Premium website design for clinics, law firms, real estate, salons, and service businesses.",
    url: "https://rubabsdigital.com/website-design",
    type: "website",
  },

}

export default function Page() {
  const features = [
    { icon: "🎯", title: "Conversion-First Layouts", desc: "Every page is structured around trust, offer clarity, proof, and enquiry flow — not just decoration." },
    { icon: "📱", title: "Mobile-Ready Experience", desc: "Your site is designed to work smoothly on phones first, where most local service traffic actually lands." },
    { icon: "⚡", title: "Fast, Premium Build", desc: "Modern visual quality with clean performance so the site feels sharp, credible, and easy to use." },
    { icon: "🧩", title: "Service-Specific Sections", desc: "We tailor layouts for dentists, consultants, law firms, salons, real estate agents, and other service businesses." },
    { icon: "📝", title: "Lead Capture Built In", desc: "Contact forms, consultation prompts, service CTAs, and booking paths are placed where they actually help conversions." },
    { icon: "🔗", title: "Automation Ready", desc: "Your website can connect directly with lead routing, follow-up, CRM, and AI workflows from day one." }
  ]

  const steps = [
    { title: "Offer & Niche Review", desc: "We first clarify your niche, customer type, service offer, and what your website must make people do." },
    { title: "Structure & Copy Direction", desc: "We map the page flow around trust, objections, proof, FAQs, and enquiry actions so the content sells clearly." },
    { title: "Design & Build", desc: "We turn that structure into a premium, responsive website with strong hierarchy, visual polish, and faster UX." },
    { title: "Launch & Improve", desc: "Once live, your site is ready for ads, SEO, automation, and ongoing improvement based on how visitors behave." }
  ]

  const niches = [
    { title: "Dental Clinics", desc: "Trust-first websites that support appointment booking and service clarity." },
    { title: "Law Firms", desc: "High-credibility landing pages designed around consultation enquiries." },
    { title: "Real Estate", desc: "Property or lead-focused layouts that make visitors take the next step." },
    { title: "Consultants", desc: "Clear positioning pages that turn expertise into booked calls." },
  ]

  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "500px",
          background: "radial-gradient(ellipse, #ffc85722 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "color-mix(in srgb, #ffc857 15%, transparent)",
            border: "1px solid #ffc85740",
            fontSize: "0.8rem", fontWeight: 600, color: "#ffc857",
            marginBottom: "1.5rem"
          }}>🌐 Website Design
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem",
            letterSpacing: "-0.02em", whiteSpace: "pre-line"
          }}>Premium Websites
Built to Earn Trust and Bring Enquiries.</h1>

          <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", margin: "1rem auto 0", lineHeight: 1.7 }}>
            Built for dentists, law firms, consultants, salons, real estate agents, and local service brands that need better first impressions and stronger lead flow.
          </p>

          <p style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)",
            color: "var(--color-text-muted)", maxWidth: "620px",
            lineHeight: 1.75, marginBottom: "2.5rem"
          }}>
            We design service-business websites that look premium, communicate clearly, and guide visitors toward enquiries, bookings, and real business conversations.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#ffc857", fontWeight: 700, fontSize: "1.5rem", marginRight: "0.5rem" }}>1-page</span>
              premium builds for real service businesses
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "0.75rem" }}>What You Get</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem", maxWidth: "560px" }}>
            A website system designed for trust, positioning, and lead conversion — not just pretty visuals.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {features.map((f: {icon: string, title: string, desc: string}) => (
              <div key={f.title} style={{
                padding: "1.75rem", background: "var(--color-surface-offset)",
                border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)"
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#ffc857" }}>{f.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 4rem" }}>
        <div className="two-col-grid" style={{
          maxWidth: "1160px",
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
              display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "1rem",
              gap: "1rem", flexWrap: "wrap"
            }}>
              <div>
                <div style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)"
                }}>
                  Website proof
                </div>
                <div style={{ fontSize: "1.15rem", fontWeight: 800, marginTop: "0.35rem" }}>
                  Niche Demo Screens
                </div>
              </div>
              <div style={{
                padding: "0.42rem 0.75rem",
                borderRadius: "999px",
                background: "rgba(255,200,87,0.12)",
                border: "1px solid rgba(255,200,87,0.24)",
                color: "#ffc857",
                fontSize: "0.82rem",
                fontWeight: 700
              }}>
                Conversion Focused
              </div>
            </div>

            <div style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#101521"
            }}>
              <img
                src="/proof/website-showcase-board.svg"
                alt="Website demo screens for dental clinic, law firm, and real estate businesses"
                width="1200"
                height="760"
                loading="lazy"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {niches.map((n, idx) => (
              <div key={idx} style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "1.2rem 1.15rem"
              }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "14px",
                  display: "grid", placeItems: "center",
                  background: "rgba(255,200,87,0.12)",
                  border: "1px solid rgba(255,200,87,0.22)",
                  color: "#ffc857",
                  fontWeight: 800,
                  marginBottom: "0.9rem"
                }}>
                  {idx + 1}
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 800 }}>{n.title}</div>
                <div style={{ marginTop: "0.45rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>{n.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "0.75rem" }}>How It Works</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem" }}>Simple steps from page strategy to live launch.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {steps.map((s: {title: string, desc: string}, i: number) => (
              <div key={i} style={{
                display: "flex", gap: "1.5rem", alignItems: "flex-start",
                padding: "1.75rem", background: "var(--color-surface)",
                border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)"
              }}>
                <div style={{
                  width: "40px", height: "40px", flexShrink: 0,
                  background: "color-mix(in srgb, #ffc857 15%, transparent)",
                  border: "1px solid #ffc85740",
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, color: "#ffc857", fontSize: "0.875rem"
                }}>0{i + 1}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.4rem" }}>{s.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{
            padding: "4rem 2rem", borderRadius: "var(--radius-xl)",
            background: "color-mix(in srgb, #ffc857 10%, var(--color-surface-offset))",
            border: "1px solid #ffc85730", textAlign: "center"
          }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "1rem" }}>Need a Website That Feels Premium and Converts?</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Book a free consultation and we’ll map out the right page structure, proof, messaging, and conversion flow for your business.
            </p>
            <ConsultancyButton label="Book Free Consultation →" size="lg" />
          </div>
        </div>
      </section>
    </div>
  )
}
