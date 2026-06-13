import ConsultancyButton from "@/components/ConsultancyButton"
import DemoSection from "@/components/DemoSection"
import { SupportAgentDemo, SalesAgentDemo, KnowledgeAgentDemo } from "@/components/demos/AgentDemos"

export default function Page() {
  const features = [
    { icon: "💬", title: "Customer Support Agent", desc: "Handles FAQs, complaints, and inquiries with human-level accuracy — never sleeps, never complains." },
    { icon: "🎯", title: "Lead Qualification Bot", desc: "Engages website visitors, qualifies prospects, and books meetings directly into your calendar." },
    { icon: "📚", title: "Knowledge Base Agent", desc: "Trained on your docs, PDFs, and SOPs — answers internal team questions instantly." },
    { icon: "🛒", title: "Sales Assistant Agent", desc: "Recommends products, handles objections, and closes small deals autonomously." },
    { icon: "🔍", title: "Research Agent", desc: "Monitors competitors, scrapes data, and delivers daily intelligence reports to your inbox." },
    { icon: "🔧", title: "Custom Integrations", desc: "Deploy your agent on WhatsApp, Telegram, website chat, or internal Slack channels." }
  ]
  const steps = [
    { title: "Use Case Scoping", desc: "We define exactly what your agent will do, what data it needs, and how success is measured." },
    { title: "Data Preparation", desc: "We collect, clean and structure your business documents, FAQs, and knowledge base for training." },
    { title: "Agent Development", desc: "We build, fine-tune, and test your custom agent until it performs above your requirements." },
    { title: "Deploy & Iterate", desc: "Launch on your chosen channels, monitor real conversations, and improve continuously." }
  ]
  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "500px",
          background: "radial-gradient(ellipse, #00e5a022 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "color-mix(in srgb, #00e5a0 15%, transparent)",
            border: "1px solid #00e5a040",
            fontSize: "0.8rem", fontWeight: 600, color: "#00e5a0",
            marginBottom: "1.5rem"
          }}>🤖 Custom AI Agents
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem",
            letterSpacing: "-0.02em", whiteSpace: "pre-line"
          }}>Your Business Deserves
an AI That Actually
Knows It.</h1>
          <p style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)",
            color: "var(--color-text-muted)", maxWidth: "600px",
            lineHeight: 1.75, marginBottom: "2.5rem"
          }}>We build purpose-built AI agents trained on your business data — answering customer questions, qualifying leads, and handling support 24/7 with the accuracy of your best employee.</p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#00e5a0", fontWeight: 700, fontSize: "1.5rem", marginRight: "0.5rem" }}>24/7</span>
              your AI agent works without breaks
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
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#00e5a0" }}>{f.title}</h3>
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
                  background: "color-mix(in srgb, #00e5a0 15%, transparent)",
                  border: "1px solid #00e5a040",
                  borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, color: "#00e5a0", fontSize: "0.875rem"
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
            background: "color-mix(in srgb, #00e5a0 10%, var(--color-surface-offset))",
            border: "1px solid #00e5a030", textAlign: "center"
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
            id: "support-agent",
            title: "Support Agent",
            niche: "AI Support",
            challenge: "Customers needed instant answers at any hour.",
            solution: "Custom support bot with escalation flow.",
            result: "Faster support and reduced manual workload.",
            tags: ["Support", "Chatbot", "AI"],
            color: "#00e5a0",
            demoComponent: <SupportAgentDemo />
          },
          {
            id: "sales-agent",
            title: "Sales Qualification Agent",
            niche: "Lead Qualification",
            challenge: "Teams were wasting time on low-intent leads.",
            solution: "AI pre-qualifies visitors before handoff.",
            result: "Higher quality sales conversations.",
            tags: ["Sales", "Qualification", "Automation"],
            color: "#7c6fff",
            demoComponent: <SalesAgentDemo />
          },
          {
            id: "knowledge-agent",
            title: "Knowledge Agent",
            niche: "Internal Search",
            challenge: "Docs and answers were scattered.",
            solution: "One searchable AI knowledge layer.",
            result: "Quick answers from one place.",
            tags: ["Docs", "Search", "AI"],
            color: "#ffc857",
            demoComponent: <KnowledgeAgentDemo />
          }
        ]}
      />

</div>
  )
}
