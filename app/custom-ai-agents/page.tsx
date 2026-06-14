import ConsultancyButton from "@/components/ConsultancyButton"
import DemoSection from "@/components/DemoSection"
import { CRMAutomationDemo, ReportBotDemo } from "@/components/demos/AIDemos"

export const metadata = {
  title: "Rubab's Digital — Web & Automation Studio",
  description: "Custom AI assistants for clinics, consultants, law firms, agencies, and service businesses that need better lead qualification, support, and follow-up.",
}

export default function Page() {
  const features = [
    { icon: "🤖", title: "Trained AI Assistants", desc: "Custom AI assistants trained on your business, offers, FAQs, tone, and lead flow — so responses feel useful, not generic." },
    { icon: "💬", title: "Lead Qualification Chat", desc: "Automatically ask the right pre-sales questions, filter weak enquiries, and capture stronger leads before your team steps in." },
    { icon: "📅", title: "Booking & Intake Flows", desc: "Guide visitors toward appointments, consultation requests, or intake forms without making them wait for a human reply." },
    { icon: "📚", title: "Knowledge-Based Answers", desc: "Answer service questions, pricing basics, process FAQs, and availability using business-specific knowledge instead of vague chatbot copy." },
    { icon: "🔗", title: "CRM & Workflow Handoffs", desc: "Push qualified leads into your CRM, trigger alerts, and hand off conversations to your team when real sales attention is needed." },
    { icon: "🌍", title: "24/7 Front Desk Support", desc: "Stay responsive after hours, on weekends, or during peak enquiry times without hiring extra staff just to answer repetitive questions." }
  ]

  const steps = [
    { title: "Business Intake", desc: "We study your offer, lead flow, objections, and customer questions so the assistant sounds useful and commercially aware." },
    { title: "AI Prompt & Logic Design", desc: "We design the response structure, qualification logic, escalation rules, and booking flow around your business goals." },
    { title: "Training & Integration", desc: "We connect your AI assistant with forms, calendars, CRMs, and internal workflows so it can do more than just chat." },
    { title: "Launch & Refinement", desc: "After launch, we review conversations, improve response quality, and refine the logic based on how real prospects behave." }
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
          }}>Train an AI Assistant
That Actually Helps You Sell.</h1>

          <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", margin: "1rem auto 0", lineHeight: 1.7 }}>
            Built for clinics, consultants, law firms, agencies, and local service businesses that need faster replies and better-qualified leads.
          </p>

          <p style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)",
            color: "var(--color-text-muted)", maxWidth: "620px",
            lineHeight: 1.75, marginBottom: "2.5rem"
          }}>
            We create custom AI assistants that answer questions, qualify prospects, guide bookings, and support your sales process without sounding like a generic chatbot.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
            <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#00e5a0", fontWeight: 700, fontSize: "1.5rem", marginRight: "0.5rem" }}>24/7</span>
              lead capture and response coverage
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "0.75rem" }}>What You Get</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem", maxWidth: "560px" }}>
            AI assistants designed to answer, qualify, route, and support real business conversations.
          </p>
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
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem" }}>Simple steps from business understanding to live deployment.</p>
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
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "1rem" }}>Ready to Launch Your AI Assistant?</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Book a free consultation and we’ll map out the right AI assistant flow for your business, offer, and customer journey.
            </p>
            <ConsultancyButton label="Book Free Consultation →" size="lg" />
          </div>
        </div>
      </section>

      <DemoSection
        accentColor="#00e5a0"
        cards={[
          {
            id: "faq-agent",
            title: "FAQ Sales Assistant",
            niche: "Custom AI Agent",
            challenge: "Visitors had questions but no one replied quickly enough to keep them engaged.",
            solution: "We built a business-trained assistant that answered FAQs, explained services, and pushed qualified visitors toward booking.",
            result: "Faster lead qualification and fewer missed conversations.",
            tags: ["AI Agent", "FAQ", "Booking"],
            color: "#00e5a0",
            demoComponent: <CRMAutomationDemo />
          },
          {
            id: "intake-agent",
            title: "Client Intake Agent",
            niche: "Lead Qualification",
            challenge: "Too many weak enquiries were consuming time before the team could reach serious prospects.",
            solution: "The assistant asked targeted intake questions and routed qualified leads into the next step automatically.",
            result: "Better conversations and cleaner lead pipelines.",
            tags: ["Intake", "CRM", "Lead Flow"],
            color: "#7c6fff",
            demoComponent: <ReportBotDemo />
          }
        ]}
      />
    </div>
  )
}
