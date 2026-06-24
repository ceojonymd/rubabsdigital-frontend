"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const bestFit = [
  "Service businesses that want a more credible and premium online presence.",
  "Teams that need clearer lead handling, enquiry flow, or conversion direction.",
  "Businesses looking to connect website, automation, and growth support more intelligently.",
];

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
  const [service, setService] = useState("Website Redesign");
  const [pkg, setPkg] = useState("Growth System");
  const [budget, setBudget] = useState("$1,000–$3,000");
  const [timeline, setTimeline] = useState("Within 30 days");
  const [projectType, setProjectType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const qualificationPreview = useMemo(
    () => [
      `Service: ${service}`,
      `Package direction: ${pkg}`,
      `Budget range: ${budget}`,
      `Timeline: ${timeline}`,
    ],
    [service, pkg, budget, timeline]
  );

  function onStart() {
    trackEvent("rd_form_started", {
      form_name: "contact_project_form",
      page: "/contact",
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitState("loading");
    setMessage("");

    const payload = {
      source: "website_contact_form",
      page: "/contact",
      service,
      packageDirection: pkg,
      budget,
      timeline,
      projectType,
      businessName,
      email,
      details,
      submittedAt: new Date().toISOString(),
    };

    trackEvent("rd_form_submit_attempt", {
      form_name: "contact_project_form",
      service,
      package_direction: pkg,
      budget_range: budget,
      timeline,
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          typeof data?.error === "string" ? data.error : "Something went wrong while sending your enquiry."
        );
      }

      setSubmitState("success");
      setMessage(
        typeof data?.message === "string"
          ? data.message
          : "Your enquiry has been sent successfully. We will review it and get back to you."
      );

      trackEvent("rd_form_submit_success", {
        form_name: "contact_project_form",
        service,
        package_direction: pkg,
      });

      setProjectType("");
      setBusinessName("");
      setEmail("");
      setDetails("");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong while sending your enquiry.";

      setSubmitState("error");
      setMessage(errorMessage);

      trackEvent("rd_form_submit_error", {
        form_name: "contact_project_form",
        service,
        package_direction: pkg,
        error_message: errorMessage,
      });
    }
  }

  return (
    <main style={{ paddingTop: "80px", paddingBottom: "110px" }}>
      <section style={{ padding: "6rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>Contact</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Talk About the
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Right Next Step.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
            Share your business, service needs, and budget direction so we can recommend a practical path forward.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 1.25rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1.2rem",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
              Best fit
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 1rem + 1.5vw, 2.4rem)", lineHeight: 1.1, marginBottom: "0.8rem" }}>
              This is usually a strong fit for:
            </h2>
            <div style={{ display: "grid", gap: "0.7rem" }}>
              {bestFit.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "0.85rem 0.95rem",
                    borderRadius: "0.95rem",
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: "1rem",
            }}
          >
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.2rem",
              }}
            >
              <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
                Smart project form
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 1rem + 1.5vw, 2.5rem)", lineHeight: 1.1, marginBottom: "0.8rem" }}>
                Tell us what kind of project you are planning.
              </h2>

              <form style={{ display: "grid", gap: "0.9rem" }} onSubmit={handleSubmit}>
                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Service needed</label>
                  <select value={service} onChange={(e) => { setService(e.target.value); onStart(); }} style={fieldStyle}>
                    <option>Website Redesign</option>
                    <option>Landing Page CRO</option>
                    <option>AI Chatbot</option>
                    <option>Automation Setup</option>
                    <option>SEO Support</option>
                    <option>Ads Support</option>
                    <option>Full Growth System</option>
                  </select>
                </div>

                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Package direction</label>
                  <select value={pkg} onChange={(e) => { setPkg(e.target.value); onStart(); }} style={fieldStyle}>
                    <option>Starter Presence</option>
                    <option>Growth System</option>
                    <option>Enterprise Direction</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Estimated budget</label>
                  <select value={budget} onChange={(e) => { setBudget(e.target.value); onStart(); }} style={fieldStyle}>
                    <option>$500–$1,000</option>
                    <option>$1,000–$3,000</option>
                    <option>$3,000–$7,000</option>
                    <option>$7,000+</option>
                    <option>Need guidance first</option>
                  </select>
                </div>

                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Timeline</label>
                  <select value={timeline} onChange={(e) => { setTimeline(e.target.value); onStart(); }} style={fieldStyle}>
                    <option>ASAP</option>
                    <option>Within 30 days</option>
                    <option>Within 60 days</option>
                    <option>Exploring options</option>
                  </select>
                </div>

                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Project type</label>
                  <input value={projectType} onChange={(e) => { setProjectType(e.target.value); onStart(); }} placeholder="Example: law firm website refresh, local lead funnel, AI chatbot" style={fieldStyle} />
                </div>

                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Business name</label>
                  <input value={businessName} onChange={(e) => { setBusinessName(e.target.value); onStart(); }} placeholder="Your business or brand name" style={fieldStyle} />
                </div>

                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Email</label>
                  <input value={email} onChange={(e) => { setEmail(e.target.value); onStart(); }} type="email" placeholder="name@business.com" style={fieldStyle} />
                </div>

                <div style={{ display: "grid", gap: "0.45rem" }}>
                  <label style={{ fontWeight: 700, color: "var(--color-text)" }}>Project details</label>
                  <textarea value={details} onChange={(e) => { setDetails(e.target.value); onStart(); }} rows={5} placeholder="Share what is not working now, what you want improved, and what kind of result you are hoping for." style={{ ...fieldStyle, resize: "vertical" }} />
                </div>

                {submitState !== "idle" && (
                  <div
                    style={{
                      padding: "0.9rem 1rem",
                      borderRadius: "0.95rem",
                      border: submitState === "success" ? "1px solid rgba(0,229,160,0.24)" : submitState === "error" ? "1px solid rgba(255,107,107,0.28)" : "1px solid rgba(255,255,255,0.08)",
                      background: submitState === "success" ? "rgba(0,229,160,0.08)" : submitState === "error" ? "rgba(255,107,107,0.08)" : "rgba(255,255,255,0.03)",
                      color: "var(--color-text)",
                      lineHeight: 1.7,
                    }}
                  >
                    {submitState === "loading" ? "Sending your enquiry..." : message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.95rem 1.2rem",
                    borderRadius: "var(--radius-lg)",
                    background: submitState === "loading" ? "rgba(0,229,160,0.55)" : "var(--color-accent)",
                    color: "#09140f",
                    fontWeight: 700,
                    border: "none",
                    opacity: submitState === "loading" ? 0.9 : 1,
                  }}
                >
                  {submitState === "loading" ? "Sending..." : "Send Project Enquiry →"}
                </button>
              </form>
            </div>

            <div style={{ display: "grid", gap: "1rem" }}>
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1rem",
                }}
              >
                <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
                  Qualification preview
                </div>
                <div style={{ display: "grid", gap: "0.7rem" }}>
                  {qualificationPreview.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "0.8rem 0.9rem",
                        borderRadius: "0.95rem",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--color-text)",
                        lineHeight: 1.75,
                        border: "1px solid rgba(255,255,255,0.06)",
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(180deg, rgba(0,229,160,0.10), rgba(0,229,160,0.04))",
                  border: "1px solid rgba(0,229,160,0.18)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.2rem",
                }}
              >
                <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
                  Prefer to compare first?
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", lineHeight: 1.12, marginBottom: "0.7rem" }}>
                  Review proof and package direction before contacting us.
                </h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
                  If you are still deciding, you can review portfolio direction or compare packages before sending your enquiry.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  <Link href="/portfolio" style={secondaryBtn}>See Portfolio</Link>
                  <Link href="/pricing" style={secondaryBtn}>Review Packages</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.9rem 1rem",
  borderRadius: "0.95rem",
  border: "1px solid var(--color-border)",
  background: "rgba(255,255,255,0.03)",
  color: "var(--color-text)",
  outline: "none",
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "0.85rem 1.1rem",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text)",
  fontWeight: 700,
  textDecoration: "none",
  background: "var(--color-surface)",
};
