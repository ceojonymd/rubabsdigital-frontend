"use client"

const shell = {
  page: {
    padding: "2rem",
    minHeight: "100%",
    fontFamily: "var(--font-body)",
    background: "var(--color-bg)",
    color: "var(--color-text)",
  } as const,
  wrap: { maxWidth: "1180px", margin: "0 auto" } as const,
  card: {
    padding: "1.25rem",
    borderRadius: "22px",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
  } as const,
}

function Badge({ text, tone }: { text: string; tone: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.35rem 0.75rem",
        borderRadius: "999px",
        fontSize: "0.76rem",
        fontWeight: 700,
        color: tone,
        background: `color-mix(in srgb, ${tone} 10%, transparent)`,
        border: `1px solid color-mix(in srgb, ${tone} 26%, transparent)`,
      }}
    >
      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: tone }} />
      {text}
    </div>
  )
}

export function SupportAgentDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <Badge text="Customer support simulation" tone="#00e5a0" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
          AI Support Agent Demo
        </h2>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", marginBottom: "1.5rem" }}>
          This mockup feels like a real support system with live chat, confidence levels, escalation status, and knowledge-backed answers.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1rem" }}>
          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "1rem" }}>Live conversation</div>
            {[
              ["Customer", "Hi, do you offer WhatsApp integration?"],
              ["AI Agent", "Yes. We can deploy your agent on WhatsApp, website chat, and Telegram."],
              ["Customer", "Can it answer from our PDFs and SOPs?"],
              ["AI Agent", "Absolutely. We train it on your docs, FAQs, and internal knowledge base for accurate replies."],
            ].map(([who, text], i) => (
              <div key={i} style={{ marginBottom: "0.9rem", padding: "0.9rem 1rem", borderRadius: "16px", background: who === "Customer" ? "var(--color-surface-offset)" : "color-mix(in srgb, #00e5a0 8%, transparent)", border: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: who === "Customer" ? "var(--color-text-muted)" : "#00e5a0", marginBottom: "0.25rem" }}>{who}</div>
                <div style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{text}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.75rem" }}>Agent metrics</div>
              {[
                ["Response time", "< 3 sec"],
                ["Confidence score", "94%"],
                ["Escalation path", "Human fallback"],
                ["Coverage", "24/7 live"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem" }}>
                  <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.75rem" }}>Knowledge sources</div>
              {["FAQ database", "Internal SOP library", "Uploaded PDF policies", "Escalation decision tree"].map((s) => (
                <div key={s} style={{ padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem", color: "var(--color-text-muted)" }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SalesAgentDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <Badge text="Lead qualification flow" tone="#7c6fff" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
          Sales Qualification Agent Demo
        </h2>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", marginBottom: "1.5rem" }}>
          A smart lead qualification journey that filters low-intent traffic, scores intent, and routes high-value prospects to your sales team.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1rem" }}>
          {[
            ["Visitor lands", "#7c6fff"],
            ["AI asks 3 questions", "#00b3ff"],
            ["Intent is scored", "#ffc857"],
            ["Hot lead forwarded", "#00e5a0"],
          ].map(([title, tone], i) => (
            <div key={title} style={{ ...shell.card, textAlign: "center" }}>
              <div style={{ width: "42px", height: "42px", margin: "0 auto 0.8rem", borderRadius: "14px", background: `color-mix(in srgb, ${tone} 18%, transparent)`, color: tone, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{i + 1}</div>
              <div style={{ fontWeight: 700 }}>{title}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Qualification logic</div>
            {[
              "Budget threshold checked automatically",
              "Service match scored by answers",
              "Urgency detected from intent keywords",
              "High-intent leads pushed to closer queue",
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.75rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: ["#7c6fff", "#00b3ff", "#ffc857", "#00e5a0"][i], marginTop: "0.3rem" }} />
                <span style={{ fontSize: "0.86rem", lineHeight: 1.6 }}>{s}</span>
              </div>
            ))}
          </div>

          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Sample output</div>
            {[
              ["Lead score", "91 / 100"],
              ["Recommended action", "Book strategy call"],
              ["Detected need", "Custom AI agent + automation"],
              ["Assigned rep", "Nadia"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem" }}>
                <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                <span style={{ fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function KnowledgeAgentDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <Badge text="Internal search + knowledge layer" tone="#ffc857" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
          Knowledge Agent Demo
        </h2>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", marginBottom: "1.5rem" }}>
          A searchable AI layer trained on company documents, SOPs, internal FAQs, and PDF references, with answer confidence and cited sources.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1rem" }}>
          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "1rem" }}>Question and answer</div>
            <div style={{ padding: "0.9rem 1rem", borderRadius: "16px", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)", marginBottom: "1rem" }}>
              <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--color-text-muted)", marginBottom: "0.3rem" }}>User question</div>
              <div>What is our standard onboarding flow for new automation clients?</div>
            </div>
            <div style={{ padding: "0.9rem 1rem", borderRadius: "16px", background: "color-mix(in srgb, #ffc857 8%, transparent)", border: "1px solid var(--color-border)" }}>
              <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#ffc857", marginBottom: "0.3rem" }}>AI answer</div>
              <div style={{ lineHeight: 1.7 }}>
                Standard onboarding includes discovery call, process mapping, tool access, workflow design, testing, approval, and deployment.
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Answer quality</div>
              {[
                ["Confidence score", "96%"],
                ["Sources matched", "4 documents"],
                ["Last sync", "2 hours ago"],
                ["Search time", "1.2 sec"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem" }}>
                  <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Matched sources</div>
              {["PDF Docs", "SOP Library", "FAQ Search", "Onboarding Playbook"].map((s) => (
                <div key={s} style={{ padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem", color: "var(--color-text-muted)" }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
