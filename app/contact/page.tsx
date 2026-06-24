"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      business: String(formData.get("business") || ""),
      service: String(formData.get("service") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again or email us directly.");
      }

      setSubmitState("success");
      setMessage("Message received. We’ll review your request and reply with the clearest next step.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 4rem" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                background: "var(--color-accent-dim)",
                border: "1px solid rgba(0,229,160,0.22)",
                color: "var(--color-accent)",
                fontWeight: 700,
                fontSize: "0.82rem",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.3rem, 1rem + 4vw, 4.5rem)",
                lineHeight: 1.05,
                marginBottom: "1rem",
              }}
            >
              Let&apos;s Talk About
              <br />
              <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>What Your Business Needs.</span>
            </h1>

            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.85, maxWidth: "58ch", marginBottom: "1.4rem" }}>
              Tell us where your current website, lead flow, or automation setup feels weak. We’ll review your request and recommend the most practical next step.
            </p>

            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.2rem",
                marginBottom: "1rem",
              }}
            >
              <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.4rem" }}>Response Time</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", lineHeight: 1.05, marginBottom: "0.35rem" }}>
                24/7 for enterprise clients
              </div>
              <div style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                Priority support with dedicated attention for urgent business needs.
              </div>
            </div>

            <div style={{ color: "var(--color-text-muted)", lineHeight: 1.85 }}>
              Jessore, Bangladesh
              <br />
              mail@rubabsdigital.com
            </div>
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1.25rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.3rem", color: "var(--color-text)" }}>
              Free Consultation Request
            </div>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              The more clearly you describe your business and current problem, the better we can guide you.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.95rem" }}>
              <label style={{ display: "grid", gap: "0.45rem" }}>
                <span style={{ fontWeight: 600 }}>Your Name</span>
                <input
                  name="name"
                  required
                  placeholder="Enter your name"
                  style={fieldStyle}
                />
              </label>

              <label style={{ display: "grid", gap: "0.45rem" }}>
                <span style={{ fontWeight: 600 }}>Email Address</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@business.com"
                  style={fieldStyle}
                />
              </label>

              <label style={{ display: "grid", gap: "0.45rem" }}>
                <span style={{ fontWeight: 600 }}>Business Name</span>
                <input
                  name="business"
                  placeholder="Your company or brand"
                  style={fieldStyle}
                />
              </label>

              <label style={{ display: "grid", gap: "0.45rem" }}>
                <span style={{ fontWeight: 600 }}>What do you need?</span>
                <select name="service" defaultValue="" style={fieldStyle} required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Landing Page CRO">Landing Page CRO</option>
                  <option value="AI Chatbot">AI Chatbot</option>
                  <option value="Automation Workflow">Automation Workflow</option>
                  <option value="Full Lead System">Full Lead System</option>
                  <option value="SEO Support">SEO Support</option>
                  <option value="Ads Support">Ads Support</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label style={{ display: "grid", gap: "0.45rem" }}>
                <span style={{ fontWeight: 600 }}>Estimated Budget</span>
                <select name="budget" defaultValue="" style={fieldStyle} required>
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                  <option value="Need guidance first">Need guidance first</option>
                </select>
              </label>

              <label style={{ display: "grid", gap: "0.45rem" }}>
                <span style={{ fontWeight: 600 }}>Project Details</span>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your business, current website, goals, and what is not working well."
                  rows={6}
                  style={{ ...fieldStyle, resize: "vertical", minHeight: "160px" }}
                />
              </label>

              <button
                type="submit"
                disabled={submitState === "loading"}
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.95rem 1.2rem",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--color-accent)",
                  color: "#09140f",
                  fontWeight: 800,
                  border: "none",
                  cursor: submitState === "loading" ? "wait" : "pointer",
                }}
              >
                {submitState === "loading" ? "Sending..." : "Send Free Consultation Request →"}
              </button>

              {message ? (
                <div
                  style={{
                    borderRadius: "var(--radius-lg)",
                    padding: "0.9rem 1rem",
                    background:
                      submitState === "success"
                        ? "rgba(0,229,160,0.08)"
                        : "rgba(255,100,100,0.08)",
                    border:
                      submitState === "success"
                        ? "1px solid rgba(0,229,160,0.16)"
                        : "1px solid rgba(255,100,100,0.18)",
                    color: "var(--color-text)",
                    lineHeight: 1.7,
                  }}
                >
                  {message}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.9rem 1rem",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--color-border)",
  background: "var(--color-bg)",
  color: "var(--color-text)",
  outline: "none",
};
