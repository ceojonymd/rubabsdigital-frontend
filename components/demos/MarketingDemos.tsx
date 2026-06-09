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

export function CampaignDashboardDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <Badge text="Performance dashboard" tone="#00e5a0" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
          Campaign Dashboard Demo
        </h2>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", marginBottom: "1.5rem" }}>
          A fuller marketing reporting experience with campaign KPIs, channel comparison, and manager-level decision signals.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1rem" }}>
          {[
            ["Reach", "284k", "#00e5a0"],
            ["Leads", "1,482", "#7c6fff"],
            ["CTR", "3.8%", "#00b3ff"],
            ["ROAS", "4.6x", "#ffc857"],
          ].map(([k, v, c]) => (
            <div key={k} style={shell.card}>
              <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.35rem" }}>{k}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: c }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1rem" }}>
          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Channel performance</div>
            {[
              ["Meta Ads", "ROAS 5.1x"],
              ["Google Search", "CPL down 18%"],
              ["Retargeting", "Best close rate"],
              ["Organic", "Highest time-on-site"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.85rem 0.95rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem" }}>
                <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                <span style={{ fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Manager summary</div>
            {[
              "Lead quality improved after copy refresh",
              "Retargeting segment produced best ROAS",
              "Top campaign should receive budget increase",
              "Creative fatigue detected in two ad sets",
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.75rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: ["#00e5a0", "#7c6fff", "#00b3ff", "#ffc857"][i], marginTop: "0.3rem" }} />
                <span style={{ fontSize: "0.86rem", lineHeight: 1.6 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FunnelDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <Badge text="Funnel optimization" tone="#7c6fff" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
          Lead Funnel Demo
        </h2>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", marginBottom: "1.5rem" }}>
          A richer funnel view showing traffic flow, qualification drop-off, conversion checkpoints, and optimization insight.
        </p>

        <div style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
          {[
            ["Traffic", "24,500 visitors", "#7c6fff"],
            ["Leads", "1,940 captured", "#00b3ff"],
            ["Qualified", "612 passed to sales", "#ffc857"],
            ["Sales", "94 deals closed", "#00e5a0"],
          ].map(([title, sub, tone]) => (
            <div key={title} style={{ ...shell.card, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700 }}>{title}</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.84rem" }}>{sub}</div>
              </div>
              <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: `color-mix(in srgb, ${tone} 18%, transparent)`, color: tone, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                ✓
              </div>
            </div>
          ))}
        </div>

        <div style={shell.card}>
          <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Optimization notes</div>
          {[
            "Traffic quality is strong but landing page CTA can improve conversion.",
            "Qualified lead rate suggests stronger pre-filtering is working.",
            "Sales stage performs better when WhatsApp follow-up is immediate.",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: ["#7c6fff", "#00b3ff", "#00e5a0"][i], marginTop: "0.3rem" }} />
              <span style={{ fontSize: "0.86rem", lineHeight: 1.6 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SocialContentDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <Badge text="Content planning system" tone="#ffc857" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
          Social Content Planner Demo
        </h2>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", marginBottom: "1.5rem" }}>
          A stronger content planning mockup with weekly schedule, campaign alignment, and execution visibility.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1rem" }}>
          {[
            ["Monday Post", "Authority-building carousel"],
            ["Wednesday Reel", "Behind-the-scenes clip"],
            ["Friday Offer", "Lead capture promotion"],
          ].map(([title, sub]) => (
            <div key={title} style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.45rem" }}>{title}</div>
              <div style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Content goals</div>
            {[
              ["Awareness", "Top-of-funnel reach"],
              ["Trust", "Case study proof"],
              ["Conversion", "Free consultation CTA"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem" }}>
                <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                <span style={{ fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Execution signals</div>
            {[
              "Reel format currently outperforming static posts",
              "CTA posts generate strongest consultation clicks",
              "Brand consistency score improved this week",
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.75rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: ["#ffc857", "#00e5a0", "#7c6fff"][i], marginTop: "0.3rem" }} />
                <span style={{ fontSize: "0.86rem", lineHeight: 1.6 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
