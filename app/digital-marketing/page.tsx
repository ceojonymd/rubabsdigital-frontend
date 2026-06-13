import ConsultancyButton from "@/components/ConsultancyButton"
import DemoSection from "@/components/DemoSection"
import { CampaignDashboardDemo, FunnelDemo, SocialContentDemo } from "@/components/demos/MarketingDemos"

export default function Page() {
  const features = [
    { icon: "🔍", title: "SEO & Content Strategy", desc: "Rank for keywords your buyers actually search. Long-term organic traffic that compounds." },
    { icon: "📢", title: "Paid Ad Campaigns", desc: "Facebook, Google, and Instagram ads managed for maximum ROAS with A/B tested creatives." },
    { icon: "✍️", title: "Content Marketing", desc: "Blogs, case studies, and social content that positions you as the authority in your niche." },
    { icon: "📬", title: "Email Marketing", desc: "Automated sequences and broadcast campaigns that turn your list into a revenue machine." },
    { icon: "📊", title: "Analytics & Reporting", desc: "Weekly reports with real KPIs — traffic, leads, conversions, and revenue attribution." },
    { icon: "🌱", title: "Social Media Growth", desc: "Consistent presence, community management, and growth strategies across your channels." }
  ]
  const steps = [
    { title: "Audit & Strategy", desc: "We analyze your current digital presence and identify the fastest path to qualified leads." },
    { title: "Channel Selection", desc: "We recommend and focus on the 1-2 channels where your ideal qualified enquiries actually spend time." },
    { title: "Campaign Execution", desc: "Content creation, ad management, and SEO execution handled by our team end-to-end." },
    { title: "Optimize & Scale", desc: "Monthly reviews, performance optimization, and budget scaling based on what works." }
  ]
  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "500px",
          background: "radial-gradient(ellipse, #ff6b9d22 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "color-mix(in srgb, #ff6b9d 15%, transparent)",
            border: "1px solid #ff6b9d40",
            fontSize: "0.8rem", fontWeight: 600, color: "#ff6b9d",
            marginBottom: "1.5rem"
          }}>📈 Lead-Focused Digital Marketing
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem",
            letterSpacing: "-0.02em", whiteSpace: "pre-line"
          }}>Be Found. Be Chosen.
Be the Brand
Everyone Talks About.</h1>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", margin: "1rem auto 0", lineHeight: 1.7 }}>Built for clinics, consultants, law firms, real estate agents, and local service brands.</p>
          <p style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)",
            color: "var(--color-text-muted)", maxWidth: "600px",
            lineHeight: 1.75, marginBottom: "2.5rem"
          }}>Data-driven SEO, content strategy, and paid campaigns that bring qualified buyers to your business consistently — not just traffic, but people ready to spend.</p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#ff6b9d", fontWeight: 700, fontSize: "1.5rem", marginRight: "0.5rem" }}>10x</span>
              ROI achieved by our top clients
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "0.75rem" }}>What You Get</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem", maxWidth: "520px" }}>Every feature designed to deliver measurable business results.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {features.map((f: {icon: string, title: string, desc: string}) => (
              <div key={f.title} style={{
                padding: "1.75rem", background: "var(--color-surface-offset)",
                border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)"
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#ff6b9d" }}>{f.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "0.75rem" }}>How It Works</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem" }}>Simple steps from first call to final results.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {steps.map((s: {title: string, desc: string}, i: number) => (
              <div key={i} style={{
                display: "flex", gap: "1.5rem", alignItems: "flex-start",
                padding: "1.75rem", background: "var(--color-surface)",
                border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)"
              }}>
                <div style={{
                  width: "40px", height: "40px", flexShrink: 0,
                  background: "color-mix(in srgb, #ff6b9d 15%, transparent)",
                  border: "1px solid #ff6b9d40",
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, color: "#ff6b9d", fontSize: "0.875rem"
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
            background: "color-mix(in srgb, #ff6b9d 10%, var(--color-surface-offset))",
            border: "1px solid #ff6b9d30", textAlign: "center"
          }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "1rem" }}>Ready to Get Started?</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Book a free consultation today. No commitment, no contracts — just results.
            </p>
            <ConsultancyButton label="Book Free Consultation →" size="lg" />
          </div>
        </div>
      </section>
    
      <DemoSection
        accentColor="#00e5a0"
        cards={[
          {
            id: "campaign-dashboard",
            title: "Campaign Dashboard",
            niche: "Performance Marketing",
            challenge: "Clients lacked clear reporting visibility.",
            solution: "Unified campaign dashboard for key metrics.",
            result: "Easier performance tracking and better decisions.",
            tags: ["Ads", "Analytics", "Dashboard"],
            color: "#00e5a0",
            demoComponent: <CampaignDashboardDemo />
          },
          {
            id: "lead-funnel",
            title: "Lead Funnel",
            niche: "Funnel Optimization",
            challenge: "Traffic was leaking across the customer journey.",
            solution: "Mapped and optimized the lead funnel visually.",
            result: "Improved lead quality and conversion flow.",
            tags: ["Funnel", "Leads", "CRO"],
            color: "#7c6fff",
            demoComponent: <FunnelDemo />
          },
          {
            id: "content-planner",
            title: "Social Content Planner",
            niche: "Content Marketing",
            challenge: "Content posting was inconsistent and reactive.",
            solution: "Structured content planning with campaign alignment.",
            result: "More consistency and stronger social presence.",
            tags: ["Social", "Content", "Planning"],
            color: "#ffc857",
            demoComponent: <SocialContentDemo />
          }
        ]}
      />

</div>
  )
}
