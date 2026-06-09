import ConsultancyButton from "@/components/ConsultancyButton"
import DemoSection from "@/components/DemoSection"
import { BusinessWebsiteDemo, LandingPageDemo, PortfolioDemo } from "@/components/demos/WebsiteDemos"

export default function Page() {
  const features = [
    { icon: "🎨", title: "Custom UI/UX Design", desc: "Every pixel crafted for your brand — no templates, no generic layouts, just distinctive design." },
    { icon: "⚡", title: "Performance Optimized", desc: "99+ Lighthouse scores, sub-2s load times, and Core Web Vitals that Google rewards." },
    { icon: "📱", title: "Fully Responsive", desc: "Flawless on every device — mobile, tablet, desktop — without compromise." },
    { icon: "🔍", title: "SEO Foundation", desc: "Built-in technical SEO, structured data, and meta optimization from day one." },
    { icon: "🛒", title: "Conversion Focused", desc: "Strategic CTA placement, trust signals, and user flows designed to convert visitors to leads." },
    { icon: "🔒", title: "Secure & Maintained", desc: "SSL, regular updates, uptime monitoring, and a dedicated support line included." }
  ]
  const steps = [
    { title: "Strategy & Discovery", desc: "We learn your business, audience, and goals to create a design brief that actually converts." },
    { title: "Design Mockups", desc: "Full Figma mockups delivered for your review and feedback before a single line of code." },
    { title: "Development", desc: "Built with Next.js for speed and SEO — with CMS integration if you need to edit content." },
    { title: "Launch & Handover", desc: "Full deployment, domain setup, training, and 30 days of post-launch support." }
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
          }}>Websites That Turn
Visitors Into
Paying Customers.</h1>
          <p style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)",
            color: "var(--color-text-muted)", maxWidth: "600px",
            lineHeight: 1.75, marginBottom: "2.5rem"
          }}>We design and build high-converting, blazing-fast websites that make your brand unforgettable — and your sales predictable. From landing pages to full business platforms.</p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#ffc857", fontWeight: 700, fontSize: "1.5rem", marginRight: "0.5rem" }}>3x</span>
              average conversion rate improvement
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
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#ffc857" }}>{f.title}</h3>
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
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "1rem" }}>Ready to Get Started?</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Book a free consultation today. No commitment, no contracts — just results.
            </p>
            <ConsultancyButton label="Book Free Consultation →" size="lg" />
          </div>
        </div>
      </section>
    
      <DemoSection
        accentColor="#7c6fff"
        cards={[
          {
            id: "business-site",
            title: "Business Website",
            niche: "Corporate Web Design",
            challenge: "The old site looked outdated and low-trust.",
            solution: "We redesigned the website with modern UI and better conversion flow.",
            result: "Stronger brand trust and more inquiries.",
            tags: ["UI", "UX", "Conversion"],
            color: "#7c6fff",
            demoComponent: <BusinessWebsiteDemo />
          },
          {
            id: "landing-page",
            title: "Landing Page",
            niche: "Lead Generation",
            challenge: "Traffic came in but leads did not convert.",
            solution: "Focused layout with strong CTA hierarchy.",
            result: "Better conversion intent and cleaner UX.",
            tags: ["Landing", "CTA", "Design"],
            color: "#00e5a0",
            demoComponent: <LandingPageDemo />
          },
          {
            id: "portfolio-site",
            title: "Portfolio Experience",
            niche: "Creative Brand",
            challenge: "The brand lacked premium visual presence.",
            solution: "Built a polished visual showcase experience.",
            result: "Higher perceived value and better presentation.",
            tags: ["Portfolio", "Brand", "Visual"],
            color: "#ffc857",
            demoComponent: <PortfolioDemo />
          }
        ]}
      />

</div>
  )
}
