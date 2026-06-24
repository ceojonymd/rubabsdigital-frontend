export const metadata = {
  title: "Refund Policy | Rubab's Digital",
  description: "Read the refund and payment policy for services provided by Rubab's Digital.",
};

const section = { padding: "6rem 1.5rem" } as React.CSSProperties;
const container = { maxWidth: "920px", margin: "0 auto" } as React.CSSProperties;
const card = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-xl)",
  padding: "2rem",
  marginBottom: "1.5rem",
} as React.CSSProperties;
const h1 = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.4rem, 1rem + 4vw, 4.75rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  marginBottom: "1rem",
} as React.CSSProperties;
const h2 = {
  fontFamily: "var(--font-display)",
  fontSize: "1.7rem",
  marginBottom: "0.9rem",
  lineHeight: 1.15,
} as React.CSSProperties;
const p = { color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" } as React.CSSProperties;
const li = { color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "0.65rem" } as React.CSSProperties;

export default function RefundPolicyPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ ...section, paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "820px", height: "420px", background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "999px", background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.22)", color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            💳 Refund Policy
          </div>
          <h1 style={h1}>Transparent Payments,<br /><span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Clear Expectations.</span></h1>
          <p style={{ ...p, maxWidth: "720px", fontSize: "1.08rem" }}>
            This Refund Policy explains how Rubab&apos;s Digital handles deposits, milestone payments, retainers, cancellations, and refund requests for digital services.
          </p>
          <p style={{ ...p, marginBottom: 0 }}>Effective date: June 24, 2026</p>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 6rem" }}>
        <div style={container}>
          <div style={card}>
            <h2 style={h2}>General policy</h2>
            <p style={{ ...p, marginBottom: 0 }}>Because our work involves time, strategy, creative effort, technical labor, and custom digital delivery, payments made for completed work, consumed time, or delivered milestones are generally non-refundable.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Deposits</h2>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={li}>Project deposits reserve scheduling, planning time, and delivery capacity.</li>
              <li style={li}>Deposits are generally non-refundable once project onboarding, strategy, design, research, setup, or production work has started.</li>
              <li style={li}>If a project is cancelled before meaningful work begins, a partial refund may be considered at our discretion after deducting administrative or transaction costs.</li>
            </ul>
          </div>

          <div style={card}>
            <h2 style={h2}>Milestone and completed work</h2>
            <p style={p}>Payments covering approved milestones, delivered files, development work, consultations, audits, automation builds, content work, or campaign setup are generally non-refundable once the relevant work has been performed.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Third-party costs</h2>
            <p style={{ ...p, marginBottom: 0 }}>Expenses paid to third-party platforms or vendors, including domains, hosting, paid software, API usage, ad spend, premium themes, stock assets, plugins, email services, and subscriptions, are non-refundable unless the third party itself issues a refund.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Retainers and recurring support</h2>
            <p style={p}>Monthly retainers or recurring support fees cover reserved capacity and ongoing service availability. They are usually non-refundable once the service period has started.</p>
            <p style={{ ...p, marginBottom: 0 }}>Cancellation rules for retainers may be specified separately in your proposal or service agreement.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Eligible refund situations</h2>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={li}>Duplicate payment made in error.</li>
              <li style={li}>Incorrect billing amount caused directly by our mistake.</li>
              <li style={li}>Project cancellation before meaningful work begins, subject to review.</li>
              <li style={li}>A refund explicitly promised in a written agreement or proposal.</li>
            </ul>
          </div>

          <div style={card}>
            <h2 style={h2}>How to request a refund</h2>
            <p style={p}>To request a refund, email <a href="mailto:mail@rubabsdigital.com" style={{ color: "var(--color-accent)" }}>mail@rubabsdigital.com</a> with your name, project details, payment date, payment proof, and the reason for the request.</p>
            <p style={{ ...p, marginBottom: 0 }}>If a refund is approved, processing time may vary based on the payment method, payment processor, and banking timelines.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
