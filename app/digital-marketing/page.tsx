import ConsultancyButton from "@/components/ConsultancyButton"

export const metadata = {
  title: "Digital Marketing",
  description: "Digital marketing systems for clinics, consultants, law firms, real estate agents, and service businesses focused on leads, remarketing, reporting, and growth.",  alternates: {
    canonical: "https://rubabsdigital.com/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services",
    description: "Lead generation, paid traffic, remarketing, and funnel systems for service businesses.",
    url: "https://rubabsdigital.com/digital-marketing",
    type: "website",
  },

}

export default function Page() {
  const features = [
    { icon: "📣", title: "Paid Traffic Strategy", desc: "Campaign structures designed to generate attention from the right local or niche audience instead of wasting budget on broad clicks." },
    { icon: "🧲", title: "Lead Capture Funnels", desc: "Landing pages, offers, forms, and consultation flows that turn traffic into real enquiries and booked conversations." },
    { icon: "♻️", title: "Remarketing Systems", desc: "Bring back interested visitors with retargeting, reminder campaigns, and smart follow-up messaging across channels." },
    { icon: "📊", title: "Clear KPI Reporting", desc: "Track lead volume, cost per lead, conversion paths, and campaign performance without getting buried in useless metrics." },
    { icon: "💬", title: "Service-Business Messaging", desc: "We shape campaign hooks and page copy around trust, urgency, proof, and buyer objections for service offers." },
    { icon: "🔗", title: "Website + CRM Alignment", desc: "Marketing works better when ads, landing pages, forms, and follow-up systems are connected into one lead journey." }
  ]

  const steps = [
    { title: "Market & Offer Review", desc: "We review your service, audience, competition, and current offer to identify what should be promoted and why it should convert." },
    { title: "Campaign & Funnel Setup", desc: "We build the ad structure, landing flow, form logic, and core tracking needed to run a reliable lead-generation system." },
    { title: "Launch & Optimise", desc: "After launch, we monitor traffic quality, lead quality, spend efficiency, and page performance to improve outcomes over time." },
    { title: "Reporting & Iteration", desc: "You get practical reporting focused on leads, enquiries, bookings, and ROI — then we refine what is actually moving the business." }
  ]

  const channels = [
    { title: "Meta Ads", desc: "Strong for local demand capture, retargeting, and offer testing." },
    { title: "Google Search", desc: "Best when buyers already know what they need and are searching with intent." },
    { title: "Landing Pages", desc: "The bridge between clicks and enquiries — where most conversion gains are won or lost." },
    { title: "Follow-up Systems", desc: "Email, WhatsApp, CRM, and reminders that turn more leads into actual conversations." },
  ]

  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "500px",
          background: "radial-gradient(ellipse, #f472b622 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "color-mix(in srgb, #f472b6 15%, transparent)",
            border: "1px solid #f472b640",
            fontSize: "0.8rem", fontWeight: 600, color: "#f472b6",
            marginBottom: "1.5rem"
          }}>📈 Digital Marketing
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem",
            letterSpacing: "-0.02em", whiteSpace: "pre-line"
          }}>Marketing Systems
Built to Bring Leads, Not Just Clicks.</h1>

          <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", margin: "1rem auto 0", lineHeight: 1.7 }}>
            Built for clinics, consultants, law firms, real estate agents, and local service businesses that need a better way to turn attention into booked conversations.
          </p>

          <p style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)",
            color: "var(--color-text-muted)", maxWidth: "640px",
            lineHeight: 1.75, marginBottom: "2.5rem"
          }}>
            We build digital marketing systems around traffic, landing pages, remarketing, and follow-up — so your campaigns support real business growth instead of vanity metrics.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#f472b6", fontWeight: 700, fontSize: "1.5rem", marginRight: "0.5rem" }}>Lead-first</span>
              traffic and funnel strategy
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "0.75rem" }}>What You Get</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem", maxWidth: "560px" }}>
            A practical marketing engine designed around lead quality, conversion flow, and measurable outcomes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {features.map((f: {icon: string, title: string, desc: string}) => (
              <div key={f.title} style={{
                padding: "1.75rem", background: "var(--color-surface-offset)",
                border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)"
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#f472b6" }}>{f.title}</h3>
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
                  Funnel proof
                </div>
                <div style={{ fontSize: "1.15rem", fontWeight: 800, marginTop: "0.35rem" }}>
                  Traffic to Enquiry Flow
                </div>
              </div>
              <div style={{
                padding: "0.42rem 0.75rem",
                borderRadius: "999px",
                background: "rgba(244,114,182,0.12)",
                border: "1px solid rgba(244,114,182,0.24)",
                color: "#f472b6",
                fontSize: "0.82rem",
                fontWeight: 700
              }}>
                Lead Generation Focused
              </div>
            </div>

            <div style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#101521"
            }}>
              <img
                src="/proof/marketing-funnel-board.svg"
                alt="Digital marketing funnel diagram showing traffic, lead capture, remarketing, and reporting"
                width="1200"
                height="760"
                loading="lazy"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {channels.map((n, idx) => (
              <div key={idx} style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "1.2rem 1.15rem"
              }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "14px",
                  display: "grid", placeItems: "center",
                  background: "rgba(244,114,182,0.12)",
                  border: "1px solid rgba(244,114,182,0.22)",
                  color: "#f472b6",
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
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem" }}>Simple steps from offer review to growth iteration.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {steps.map((s: {title: string, desc: string}, i: number) => (
              <div key={i} style={{
                display: "flex", gap: "1.5rem", alignItems: "flex-start",
                padding: "1.75rem", background: "var(--color-surface)",
                border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)"
              }}>
                <div style={{
                  width: "40px", height: "40px", flexShrink: 0,
                  background: "color-mix(in srgb, #f472b6 15%, transparent)",
                  border: "1px solid #f472b640",
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, color: "#f472b6", fontSize: "0.875rem"
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
            background: "color-mix(in srgb, #f472b6 10%, var(--color-surface-offset))",
            border: "1px solid #f472b630", textAlign: "center"
          }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "1rem" }}>Need Marketing That Drives Real Enquiries?</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Book a free consultation and we’ll map out the best traffic, funnel, remarketing, and reporting setup for your business.
            </p>
            <ConsultancyButton label="Book Free Consultation →" size="lg" />
          </div>
        </div>
      </section>
    </div>
  )
}
