"use client"

const shell = {
  page: {
    padding: "2rem",
    minHeight: "100%",
    fontFamily: "var(--font-body)",
    background: "var(--color-bg)",
    color: "var(--color-text)",
  } as const,
  wrap: {
    maxWidth: "1180px",
    margin: "0 auto",
  } as const,
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    gap: "1rem",
    flexWrap: "wrap",
  } as const,
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
    marginBottom: "1.5rem",
  } as const,
  card: {
    padding: "1.25rem",
    borderRadius: "22px",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
  } as const,
  kpi: {
    padding: "1rem 1.1rem",
    borderRadius: "20px",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
  } as const,
}

function Metric({
  label,
  value,
  delta,
  tone = "#00e5a0",
}: {
  label: string
  value: string
  delta: string
  tone?: string
}) {
  return (
    <div style={shell.kpi}>
      <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.45rem" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", marginBottom: "0.35rem" }}>{value}</div>
      <div style={{ fontSize: "0.78rem", color: tone }}>{delta}</div>
    </div>
  )
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

export function AutomationWorkflowDemo() {
  const steps = [
    ["Meta Lead Form", "#7c6fff", "Incoming lead"],
    ["AI Validation", "#00e5a0", "Check phone + intent"],
    ["CRM Create Deal", "#00b3ff", "Create opportunity"],
    ["Personalized Email", "#ffc857", "Send follow-up"],
    ["Slack Alert", "#ff7a59", "Notify closer"],
  ] as const

  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <div style={shell.topbar}>
          <div>
            <Badge text="Live automation preview" tone="#7c6fff" />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
              Lead Capture to Client Booking
            </h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "720px" }}>
              A richer n8n workflow mockup showing how inquiries move from first contact to booking with automated validation, CRM sync, and team alerts.
            </p>
          </div>
          <div style={{ ...shell.card, minWidth: "250px" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.35rem" }}>Workflow health</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>99.2%</div>
            <div style={{ color: "#00e5a0", fontSize: "0.82rem" }}>stable runs</div>
          </div>
        </div>

        <div style={shell.kpiGrid}>
          <Metric label="Leads processed" value="1,284" delta="+18% this month" />
          <Metric label="Avg response time" value="42 sec" delta="-71% faster" tone="#7c6fff" />
          <Metric label="Booked calls" value="148" delta="+23 qualified" />
          <Metric label="Hours saved" value="312h" delta="manual work removed" tone="#ffc857" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 0.85fr", gap: "1rem" }}>
          <div style={{ ...shell.card, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div>
                <div style={{ fontWeight: 700 }}>Workflow canvas</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>Every stage is logged and monitored.</div>
              </div>
              <Badge text="n8n orchestration" tone="#7c6fff" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.9rem", alignItems: "center" }}>
              {steps.map(([title, tone, sub], i) => (
                <div key={title} style={{ position: "relative" }}>
                  <div
                    style={{
                      padding: "1rem 0.85rem",
                      minHeight: "130px",
                      borderRadius: "18px",
                      background: "var(--color-surface-offset)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "14px",
                        background: `color-mix(in srgb, ${tone} 18%, transparent)`,
                        color: tone,
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "0.8rem",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.35rem" }}>{title}</div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.78rem", lineHeight: 1.5 }}>{sub}</div>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ position: "absolute", right: "-0.6rem", top: "50%", width: "1.2rem", height: "2px", background: "var(--color-border)" }} />
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ padding: "1rem", borderRadius: "18px", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.75rem" }}>Recent activity</div>
                {[
                  "Lead #1842 validated and enriched in 1.8 sec",
                  "CRM deal created for Nadia Fashion House",
                  "Follow-up email opened after 4 minutes",
                  "Sales rep assigned automatically by territory",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.75rem", fontSize: "0.84rem" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: i % 2 === 0 ? "#00e5a0" : "#7c6fff", marginTop: "0.3rem", flex: "0 0 auto" }} />
                    <span style={{ lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: "1rem", borderRadius: "18px", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.75rem" }}>Business impact</div>
                <div style={{ display: "grid", gap: "0.7rem" }}>
                  {[
                    ["Lead leakage", "Down 64%"],
                    ["Follow-up speed", "42 sec avg"],
                    ["No-show reduction", "19% lower"],
                    ["Team visibility", "Real-time"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface)" }}>
                      <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                      <span style={{ fontWeight: 700 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>n8n workflow snapshot</div>
              <div style={{ padding: "1rem", borderRadius: "18px", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.6rem", alignItems: "center" }}>
                  {["Trigger", "Validate", "CRM", "Notify"].map((node, i) => (
                    <div key={node} style={{ position: "relative", padding: "0.85rem 0.7rem", borderRadius: "14px", background: "var(--color-surface)", textAlign: "center", fontSize: "0.8rem", fontWeight: 700 }}>
                      {node}
                      {i < 3 && <div style={{ position: "absolute", right: "-0.4rem", top: "50%", width: "0.8rem", height: "2px", background: "var(--color-border)" }} />}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "0.8rem", fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  Visual n8n-style flow for lead capture, qualification, CRM update, and instant team alerts.
                </div>
              </div>
            </div>
            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Trigger conditions</div>
              {["New lead in Meta form", "WhatsApp inquiry received", "Website form submitted"].map((t) => (
                <div key={t} style={{ padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem", color: "var(--color-text-muted)" }}>
                  {t}
                </div>
              ))}
            </div>

            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Connected stack</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {["n8n", "HubSpot", "Gmail", "Slack", "Google Sheets", "Webhook"].map((t, i) => {
                  const colors = ["#7c6fff", "#00e5a0", "#ffc857", "#00b3ff", "#ff7a59", "#4caf50"]
                  return (
                    <span key={t} style={{ padding: "0.45rem 0.75rem", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700, background: "var(--color-surface-offset)", border: "1px solid var(--color-border)", color: colors[i % colors.length] }}>
                      {t}
                    </span>
                  )
                })}
              </div>
            </div>

            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.65rem" }}>Conversion note</div>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.86rem", lineHeight: 1.7 }}>
                This feels like a real operational dashboard instead of a static placeholder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CRMAutomationDemo() {
  const lanes = [
    {
      title: "New",
      tone: "#7c6fff",
      cards: [
        ["Rubab Fashion", "$2,400", "Assigned 2m ago"],
        ["Aster Dental", "$1,100", "Needs callback"],
      ],
    },
    {
      title: "Contacted",
      tone: "#00b3ff",
      cards: [
        ["Urban Build", "$4,800", "Email opened"],
        ["Nova Travel", "$2,000", "WhatsApp replied"],
      ],
    },
    {
      title: "Proposal",
      tone: "#ffc857",
      cards: [
        ["Atlas School", "$6,200", "Proposal sent"],
        ["Green Cart", "$3,450", "Waiting approval"],
      ],
    },
    {
      title: "Closed",
      tone: "#00e5a0",
      cards: [
        ["Prime Med", "$5,900", "Won today"],
        ["Luma Style", "$2,750", "Payment received"],
      ],
    },
  ] as const

  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <div style={shell.topbar}>
          <div>
            <Badge text="CRM automation board" tone="#00b3ff" />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
              AI-Powered Deal Movement
            </h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "740px" }}>
              A realistic sales pipeline that auto-updates stage, owner, reminders, and internal alerts when buyer behavior changes.
            </p>
          </div>
          <div style={{ ...shell.card, minWidth: "250px" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.35rem" }}>Pipeline velocity</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>+27%</div>
            <div style={{ color: "#00e5a0", fontSize: "0.82rem" }}>faster deal progression</div>
          </div>
        </div>

        <div style={shell.kpiGrid}>
          <Metric label="Open deals" value="48" delta="+7 this week" tone="#7c6fff" />
          <Metric label="Qualified rate" value="62%" delta="+11% lift" />
          <Metric label="Avg stage time" value="2.9d" delta="-1.4 days" tone="#00b3ff" />
          <Metric label="Closed won" value="$18.4k" delta="this month" tone="#ffc857" />
        </div>

        <div style={{ ...shell.card, marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 700 }}>Pipeline board</div>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>Lead movement updates automatically from replies, calls, and proposal events.</div>
            </div>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <Badge text="HubSpot sync" tone="#ff7a59" />
              <Badge text="Slack alerts" tone="#00e5a0" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", alignItems: "start" }}>
            {lanes.map((lane) => (
              <div key={lane.title} style={{ padding: "0.8rem", borderRadius: "20px", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem", alignItems: "center" }}>
                  <div style={{ fontWeight: 700 }}>{lane.title}</div>
                  <span style={{ display: "inline-flex", padding: "0.18rem 0.6rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, color: lane.tone, background: `color-mix(in srgb, ${lane.tone} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${lane.tone} 25%, transparent)` }}>
                    {lane.cards.length} deals
                  </span>
                </div>

                {lane.cards.map(([company, value, note]) => (
                  <div key={company} style={{ padding: "0.95rem", borderRadius: "16px", background: "var(--color-surface)", border: "1px solid var(--color-border)", marginBottom: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "0.6rem", marginBottom: "0.5rem" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{company}</div>
                      <div style={{ color: lane.tone, fontWeight: 700, fontSize: "0.84rem" }}>{value}</div>
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.55rem" }}>{note}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.74rem", color: "var(--color-text-muted)" }}>
                      <span>Owner: Amina</span>
                      <span>AI priority: High</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Automation rules firing now</div>
            {[
              "Proposal viewed twice → moved to hot follow-up",
              "No response after 48h → reminder sent to rep",
              "Lead replied on WhatsApp → stage updated to Contacted",
              "Invoice paid → moved to Closed Won automatically",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.85rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: ["#00e5a0", "#7c6fff", "#00b3ff", "#ffc857"][i], marginTop: "0.3rem" }} />
                <span style={{ fontSize: "0.84rem", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Manager snapshot</div>
            <div style={{ display: "grid", gap: "0.7rem" }}>
              {[
                ["Top source", "Website inbound"],
                ["Best rep", "Nadia — 7 wins"],
                ["Next action", "4 proposals need follow-up"],
                ["Forecast", "$29k likely close"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0.9rem", borderRadius: "14px", background: "var(--color-surface-offset)" }}>
                  <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReportBotDemo() {
  return (
    <div style={shell.page}>
      <div style={shell.wrap}>
        <div style={shell.topbar}>
          <div>
            <Badge text="Executive summary bot" tone="#ffc857" />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginTop: "0.9rem", marginBottom: "0.45rem" }}>
              Daily KPI Digest
            </h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "700px" }}>
              A daily reporting assistant that pulls metrics from different sources and delivers a clear morning brief to leadership.
            </p>
          </div>
          <div style={{ ...shell.card, minWidth: "250px" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.35rem" }}>Delivery status</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>07:30 AM</div>
            <div style={{ color: "#00e5a0", fontSize: "0.82rem" }}>sent on schedule</div>
          </div>
        </div>

        <div style={shell.kpiGrid}>
          <Metric label="Revenue" value="$12,480" delta="+14% vs yesterday" />
          <Metric label="Orders" value="184" delta="+21 fulfilled" tone="#7c6fff" />
          <Metric label="Support load" value="29" delta="-8 tickets" tone="#00b3ff" />
          <Metric label="Ad spend" value="$1,920" delta="ROAS 4.8x" tone="#ffc857" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1rem" }}>
          <div style={shell.card}>
            <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Morning brief email</div>
            <div style={{ padding: "1rem", borderRadius: "18px", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)" }}>
              <div style={{ marginBottom: "0.8rem", fontSize: "0.82rem", color: "var(--color-text-muted)" }}>To: founder@company.com</div>
              <div style={{ fontWeight: 700, marginBottom: "0.9rem" }}>Subject: Daily business summary — 09 Jun</div>
              <div style={{ display: "grid", gap: "0.9rem", fontSize: "0.88rem", lineHeight: 1.7 }}>
                <div><strong>Revenue</strong> increased 14% day-over-day with strongest sales from returning customers.</div>
                <div><strong>Support queue</strong> decreased after AI routing handled routine ticket categories.</div>
                <div><strong>Ad performance</strong> held steady with best ROAS coming from remarketing campaigns.</div>
                <div><strong>Action needed:</strong> restock two fast-moving SKUs before tomorrow afternoon.</div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>n8n workflow snapshot</div>
              <div style={{ padding: "1rem", borderRadius: "18px", background: "var(--color-surface-offset)", border: "1px solid var(--color-border)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.6rem", alignItems: "center" }}>
                  {["Trigger", "Validate", "CRM", "Notify"].map((node, i) => (
                    <div key={node} style={{ position: "relative", padding: "0.85rem 0.7rem", borderRadius: "14px", background: "var(--color-surface)", textAlign: "center", fontSize: "0.8rem", fontWeight: 700 }}>
                      {node}
                      {i < 3 && <div style={{ position: "absolute", right: "-0.4rem", top: "50%", width: "0.8rem", height: "2px", background: "var(--color-border)" }} />}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "0.8rem", fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  Visual n8n-style flow for lead capture, qualification, CRM update, and instant team alerts.
                </div>
              </div>
            </div>
            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Data sources</div>
              {["Shopify sales", "Meta ads", "Support inbox", "Google Sheets finance"].map((s) => (
                <div key={s} style={{ padding: "0.85rem 0.95rem", borderRadius: "14px", background: "var(--color-surface-offset)", marginBottom: "0.7rem", color: "var(--color-text-muted)" }}>
                  {s}
                </div>
              ))}
            </div>

            <div style={shell.card}>
              <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Highlights</div>
              {[
                ["Top product", "Summer Glow Serum"],
                ["Best campaign", "Retargeting 14d"],
                ["At-risk metric", "Cart recovery rate"],
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
    </div>
  )
}
