"use client"
import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const services = [
    "AI Automation (n8n)",
    "Custom AI Agent Building",
    "Website Design",
    "Digital Marketing",
    "Full Package (All Services)",
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputStyle = {
    width: "100%", padding: "0.85rem 1rem",
    background: "var(--color-surface-offset)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    color: "var(--color-text)",
    fontSize: "0.9rem", fontFamily: "var(--font-body)",
    outline: "none", transition: "border-color 180ms"
  }

  return (
    <div>
      <section style={{ padding: "6rem 1.5rem 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse, rgba(0,229,160,0.15) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "stretch", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.25)",
            fontSize: "0.8rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "1.5rem"
          }}>✉️ Contact Us</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
            fontWeight: 400, lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em"
          }}>Let&apos;s Talk About<br /><span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Your Growth.</span></h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
            "Fill in the form below and our team will respond with a clear, honest plan tailored to your business needs."
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: typeof window !== "undefined" && window.innerWidth < 900 ? "1fr" : "1fr 1.5fr", gap: "4rem" }}>

          {/* LEFT INFO */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "1.5rem" }}>Get in Touch</h2>
            {[
              { icon: "📍", title: "Our Office", val: "H# 859-17, Sohid Mosiur Rahman Sarak, Puraton Kashba, Jashore, Bangladesh" },
              { icon: "✉️", title: "Email", val: "mail@rubabsdigital.com", href: "mailto:mail@rubabsdigital.com" },
              {
                icon: "🕐",
                title: "Response Time",
                val: (
                  <div style={{ display: "grid", gap: "0.4rem" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "fit-content",
                        padding: "0.32rem 0.72rem",
                        borderRadius: "999px",
                        background: "rgba(0, 229, 160, 0.12)",
                        border: "1px solid rgba(0, 229, 160, 0.28)",
                        color: "var(--color-accent)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        boxShadow: "0 0 0 1px rgba(0, 229, 160, 0.04) inset",
                      }}
                    >
                      24/7
                    </div>

                    <div
                      style={{
                        color: "var(--color-text)",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      for enterprise clients
                    </div>

                    <div
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        maxWidth: "28ch",
                      }}
                    >
                      Priority support with dedicated attention for urgent business needs.
                    </div>
                  </div>
                ),
              },
            ].map(item => (
              <div key={item.title} style={{ marginBottom: "1.75rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "var(--radius-md)", flexShrink: 0,
                  background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.2)",
                  display: "flex", alignItems: "stretch", justifyContent: "center", fontSize: "1.1rem"
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.title}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: "var(--color-accent)", fontSize: "0.9rem" }}>{item.val}</a>
                    : <div style={{ color: "var(--color-text)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.val}</div>
                  }
                </div>
              </div>
            ))}

            <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Connect With Us</div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { label: "Facebook", href: "https://www.facebook.com/rubabsdigital", icon: "📘" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/rubab-digital/", icon: "💼" },
                  { label: "Twitter", href: "https://twitter.com/rubabsdigital", icon: "🐦" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    width: "40px", height: "40px", display: "flex", alignItems: "stretch", justifyContent: "center",
                    background: "var(--color-surface-offset)", border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)", fontSize: "1.1rem", transition: "all 180ms"
                  }}>{s.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div style={{ padding: "2.5rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Free Consultation Request</h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "2rem" }}>Tell us about your business and we will craft a custom plan.</p>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.75rem", color: "var(--color-accent)" }}>Message Received!</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>We&apos;ll review your request and respond with the right next steps for your business needs.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com" style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Phone Number</label>
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+880 1234 567890" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Service Needed *</label>
                  <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" }}>
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Your Message *</label>
                  <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your business, goals, and what you need help with..." rows={5}
                    style={{ ...inputStyle, resize: "vertical" }} />
                </div>

                {status === "error" && (
                  <div style={{ padding: "0.75rem 1rem", background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.3)", borderRadius: "var(--radius-md)", color: "var(--color-error)", fontSize: "0.875rem", marginBottom: "1rem" }}>
                    ⚠️ Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button type="submit" disabled={status === "loading"} style={{
                  width: "100%", padding: "1rem", fontSize: "1rem", fontWeight: 700,
                  background: status === "loading" ? "var(--color-border)" : "var(--color-accent)",
                  color: "#0a1a12", borderRadius: "var(--radius-lg)", border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "all 180ms", display: "flex", alignItems: "stretch", justifyContent: "center", gap: "0.5rem"
                }}>
                  {status === "loading" ? "Sending..." : "Send Free Consultation Request →"}
                </button>
                <p style={{ textAlign: "center", color: "var(--color-text-faint)", fontSize: "0.8rem", marginTop: "1rem" }}>
                  ✓ Free consultation &nbsp;·&nbsp; ✓ No contracts &nbsp;·&nbsp; ✓ Priority response for enterprise clients
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
