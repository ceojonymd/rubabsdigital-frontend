import ConsultancyButton from "@/components/ConsultancyButton"
import DemoSection from "@/components/DemoSection"
import { AutomationWorkflowDemo, CRMAutomationDemo, ReportBotDemo } from "@/components/demos/AIDemos"

export default function Page() {
  const features = [
    { icon: "🔄", title: "n8n Workflow Automation", desc: "Custom multi-step workflows connecting your tools — CRM, email, Slack, databases — all automated." },
    { icon: "📧", title: "Email & Lead Automation", desc: "Auto-capture leads, send follow-ups, and nurture prospects without lifting a finger." },
    { icon: "📊", title: "Data Pipeline Automation", desc: "Automatically collect, clean, and report business data from any source into dashboards." },
    { icon: "🔗", title: "500+ App Integrations", desc: "Connect Notion, Shopify, WhatsApp, Google Workspace and hundreds more seamlessly." },
    { icon: "🤝", title: "CRM Automation", desc: "Auto-assign leads, update deal stages, and alert your team at exactly the right moment." },
    { icon: "⏰", title: "Scheduled Tasks", desc: "Reports, backups, invoices, and reminders — all triggered on your schedule, automatically." }
  ]
  const steps = [
    { title: "Discovery Call", desc: "We audit your current workflow to find the highest-ROI automation opportunities for your business." },
    { title: "Workflow Design", desc: "Our team maps out the full automation architecture tailored to your tools and processes." },
    { title: "Build & Test", desc: "We build your n8n workflows, test every branch and edge case, and document everything thoroughly." },
    { title: "Deploy & Support", desc: "Go live with full monitoring, alerts, and a 30-day support window included at no extra cost." }
  ]
  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "500px",
          background: "radial-gradient(ellipse, #7c6fff22 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "color-mix(in srgb, #7c6fff 15%, transparent)",
            border: "1px solid #7c6fff40",
            fontSize: "0.8rem", fontWeight: 600, color: "#7c6fff",
            marginBottom: "1.5rem"
          }}>⚡ AI Workflow Automation
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem",
            letterSpacing: "-0.02em", whiteSpace: "pre-line"
          }}>Let Machines Do the Work.
You Collect the Profit.</h1>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", margin: "1rem auto 0", lineHeight: 1.7 }}>Built for clinics, consultants, law firms, real estate agents, and local service brands.</p>
          <p style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)",
            color: "var(--color-text-muted)", maxWidth: "600px",
            lineHeight: 1.75, marginBottom: "2.5rem"
          }}>We build intelligent n8n automation workflows that eliminate repetitive tasks, reduce human error, and run your operations around the clock — so you focus on growth.</p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#7c6fff", fontWeight: 700, fontSize: "1.5rem", marginRight: "0.5rem" }}>300+</span>
              hours saved per client per month
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
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#7c6fff" }}>{f.title}</h3>
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
                  background: "color-mix(in srgb, #7c6fff 15%, transparent)",
                  border: "1px solid #7c6fff40",
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, color: "#7c6fff", fontSize: "0.875rem"
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
            background: "color-mix(in srgb, #7c6fff 10%, var(--color-surface-offset))",
            border: "1px solid #7c6fff30", textAlign: "center"
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
            id: "autoflow",
            title: "AutoFlow Pipeline",
            niche: "AI Workflow Automation",
            challenge: "Leads were being collected manually and follow-ups were delayed.",
            solution: "We automated lead capture, validation, notification, and reporting.",
            result: "Faster response time and zero manual lead handling.",
            tags: ["n8n", "CRM", "Automation"],
            color: "#7c6fff",
            demoComponent: <AutomationWorkflowDemo />
          },
          {
            id: "crm-auto",
            title: "CRM Auto Pipeline",
            niche: "Sales Automation",
            challenge: "Sales teams lost track of deal movement.",
            solution: "AI-based stage movement and automatic follow-up logic.",
            result: "A cleaner pipeline with less human error.",
            tags: ["CRM", "AI", "Pipeline"],
            color: "#00e5a0",
            demoComponent: <CRMAutomationDemo />
          },
          {
            id: "reportbot",
            title: "Daily Report Bot",
            niche: "Reporting Automation",
            challenge: "Business reports took too much manual effort.",
            solution: "Automated KPI digest sent every morning.",
            result: "Clear visibility without manual report creation.",
            tags: ["Reports", "Email", "KPI"],
            color: "#ffc857",
            demoComponent: <ReportBotDemo />
          }
        ]}
      />

</div>
  )
}
