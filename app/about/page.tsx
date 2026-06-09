import ConsultancyButton from "@/components/ConsultancyButton"

export default function AboutPage() {
  const team = [
    { name: "Rubab", role: "Founder & AI Strategist", desc: "Visionary behind Rubab's Digital. Obsessed with using AI to unlock business potential.", emoji: "🧠" },
    { name: "Topu", role: "Lead Developer", desc: "Full-stack engineer specializing in Next.js, automation systems, and scalable backends.", emoji: "💻" },
    { name: "Jony", role: "Security & Backend", desc: "Bug bounty researcher and backend architect ensuring every system is secure and solid.", emoji: "🔐" },
  ]

  const values = [
    { icon: "🎯", title: "Results First", desc: "We only celebrate when your business numbers go up. Every decision we make is tied to your ROI." },
    { icon: "🤝", title: "Long-Term Partnership", desc: "We don't disappear after delivery. We grow with you, iterate, and stay accountable to your goals." },
    { icon: "🧪", title: "Always Experimenting", desc: "We stay on the bleeding edge of AI so you don't have to — bringing the best tools to your business." },
    { icon: "💬", title: "Radical Transparency", desc: "No jargon, no hidden fees. You always know what we're doing, why, and what it means for your business." },
  ]

  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse, rgba(124,111,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "var(--color-primary-highlight)", border: "1px solid rgba(124,111,255,0.25)",
            fontSize: "0.8rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "1.5rem"
          }}>🏢 About Us</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.02em"
          }}>We Exist to Make<br /><span style={{ color: "var(--color-primary)", fontStyle: "italic" }}>Your Business Unstoppable.</span></h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "640px", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Rubab&apos;s Digital was built on one belief: every serious business deserves AI-powered systems that work as hard as their founder. We&apos;re a small, focused team from Jashore, Bangladesh — and we punch well above our weight.
          </p>
          <ConsultancyButton label="Work With Us →" size="lg" />
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "3rem" }}>Our Values</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {values.map(v => (
              <div key={v.title} style={{ padding: "1.75rem", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "0.5rem", color: "var(--color-primary)" }}>{v.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "0.75rem" }}>Meet the Team</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem" }}>Small team. Big impact. Every person here is obsessed with your results.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {team.map(t => (
              <div key={t.name} style={{ padding: "2rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  background: "var(--color-primary-highlight)", border: "2px solid rgba(124,111,255,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", margin: "0 auto 1.25rem"
                }}>{t.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "0.25rem" }}>{t.name}</h3>
                <div style={{ fontSize: "0.8rem", color: "var(--color-primary)", fontWeight: 600, marginBottom: "0.75rem" }}>{t.role}</div>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ padding: "4rem 2rem", borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--color-primary-highlight), var(--color-surface-offset))", border: "1px solid rgba(124,111,255,0.2)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)", marginBottom: "1rem" }}>Let&apos;s Build Something Great</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Free consultation, honest advice, and a clear plan — no strings attached.
            </p>
            <ConsultancyButton label="Get Free Consultation →" size="lg" />
          </div>
        </div>
      </section>
    </div>
  )
}
