export const metadata = {
  title: "Terms & Conditions | Rubab's Digital",
  description: "Read the terms governing the use of Rubab's Digital website, services, proposals, and project delivery.",
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

export default function TermsConditionsPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ ...section, paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "820px", height: "420px", background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)", pointerEvents: "none" }} />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "999px", background: "var(--color-accent-dim)", border: "1px solid rgba(0,229,160,0.22)", color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            📘 Terms & Conditions
          </div>
          <h1 style={h1}>Clear Terms,<br /><span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Professional Delivery.</span></h1>
          <p style={{ ...p, maxWidth: "720px", fontSize: "1.08rem" }}>
            These Terms & Conditions govern your use of the Rubab&apos;s Digital website and any services, proposals, consultations, deliverables, or project work provided by our studio.
          </p>
          <p style={{ ...p, marginBottom: 0 }}>Effective date: June 24, 2026</p>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 6rem" }}>
        <div style={container}>
          <div style={card}>
            <h2 style={h2}>Acceptance of terms</h2>
            <p style={p}>By accessing our website, contacting us, or engaging our services, you agree to these Terms & Conditions. If you do not agree, please do not use the website or purchase our services.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Services</h2>
            <p style={p}>Rubab&apos;s Digital provides services including website design, landing pages, AI automation, custom AI agents, digital marketing support, lead systems, consulting, and related implementation work.</p>
            <p style={{ ...p, marginBottom: 0 }}>The exact scope, timeline, deliverables, and responsibilities for any paid engagement will be defined in a separate proposal, invoice, agreement, or written communication.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Client responsibilities</h2>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={li}>Provide accurate project requirements, feedback, approvals, and necessary business information.</li>
              <li style={li}>Supply access credentials, brand assets, text, media, and other required materials on time.</li>
              <li style={li}>Review deliverables promptly and communicate revision requests clearly.</li>
              <li style={li}>Ensure you have rights to any content, trademarks, images, or materials you ask us to use.</li>
            </ul>
          </div>

          <div style={card}>
            <h2 style={h2}>Payments</h2>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={li}>Projects may require an upfront deposit before work begins.</li>
              <li style={li}>Milestone payments, retainers, or full advance payments may apply depending on the engagement.</li>
              <li style={li}>Payments are processed securely via <strong>Stripe</strong> (GBP and international cards) or <strong>Contra</strong> (USD contracts and freelance payments). We do not store your card details.</li>
              <li style={li}>All prices are quoted exclusive of applicable taxes unless stated otherwise. Clients are responsible for any local taxes, import duties, or withholding requirements in their jurisdiction.</li>
              <li style={li}>Late payments may delay delivery, deployment, support, or revision cycles.</li>
              <li style={li}>Third-party costs such as hosting, domains, software licenses, paid tools, ad spend, APIs, or premium assets are normally billed separately unless explicitly included.</li>
            </ul>
          </div>

          <div style={card}>
            <h2 style={h2}>Revisions and scope changes</h2>
            <p style={p}>Reasonable revisions may be included where stated in a proposal or package. Requests beyond the agreed scope may require additional fees, timeline extensions, or a revised agreement.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Intellectual property</h2>
            <p style={p}>Upon full payment, final approved deliverables specifically created for your project may be transferred to you, unless otherwise stated in writing.</p>
            <p style={{ ...p, marginBottom: 0 }}>Rubab&apos;s Digital retains rights to pre-existing tools, internal systems, frameworks, reusable code, processes, concepts, templates, and know-how used in the course of delivering work.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Portfolio rights</h2>
            <p style={{ ...p, marginBottom: 0 }}>Unless restricted by a confidentiality agreement, we may display completed work, non-sensitive visuals, public launch assets, or project summaries in our portfolio, social media, case studies, or sales materials.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>No guarantee clause</h2>
            <p style={p}>We aim to deliver high-quality work and practical systems, but we do not guarantee specific business outcomes such as rankings, traffic volume, sales, conversion rates, ad approval, or revenue growth unless explicitly agreed in writing.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Limitation of liability</h2>
            <p style={{ ...p, marginBottom: 0 }}>To the maximum extent permitted by law, Rubab&apos;s Digital will not be liable for indirect, incidental, special, or consequential losses, including lost profits, lost opportunities, data loss, or business interruption arising from use of the website or services.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Termination</h2>
            <p style={{ ...p, marginBottom: 0 }}>We may suspend or terminate a project or website access if payments are not made, communication becomes abusive, legal or security risks arise, or the engagement can no longer reasonably continue. Work completed up to that point may remain billable.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Contact</h2>
            <p style={{ ...p, marginBottom: 0 }}>Questions about these terms can be sent to <a href="mailto:mail@rubabsdigital.com" style={{ color: "var(--color-accent)" }}>mail@rubabsdigital.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
