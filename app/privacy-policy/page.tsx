export const metadata = {
  title: "Privacy Policy",
  description:
    "Read how Rubab's Digital collects, uses, stores, and protects your information across our website, contact forms, and digital services.",
};

const sectionStyle: React.CSSProperties = {
  padding: "6rem 1.5rem",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "920px",
  margin: "0 auto",
};

const cardStyle: React.CSSProperties = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-xl)",
  padding: "2rem",
  marginBottom: "1.5rem",
};

const h1Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.4rem, 1rem + 4vw, 4.75rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  marginBottom: "1rem",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.7rem",
  marginBottom: "0.9rem",
  lineHeight: 1.15,
};

const pStyle: React.CSSProperties = {
  color: "var(--color-text-muted)",
  fontSize: "1rem",
  lineHeight: 1.8,
  marginBottom: "1rem",
};

const liStyle: React.CSSProperties = {
  color: "var(--color-text-muted)",
  lineHeight: 1.8,
  marginBottom: "0.65rem",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ ...sectionStyle, paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "820px",
            height: "420px",
            background: "radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 72%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ ...containerStyle, position: "relative", zIndex: 1 }}>
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
            🔐 Privacy Policy
          </div>

          <h1 style={h1Style}>
            Your Data,
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Handled with Care.</span>
          </h1>

          <p style={{ ...pStyle, maxWidth: "720px", fontSize: "1.08rem" }}>
            This Privacy Policy explains how Rubab&apos;s Digital collects, uses, stores, and protects information when you visit our website,
            submit a contact request, or engage us for services such as website design, AI automation, custom AI systems, and digital marketing.
          </p>

          <p style={{ ...pStyle, marginBottom: 0 }}>
            Effective date: June 24, 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 6rem" }}>
        <div style={containerStyle}>
          <div style={cardStyle}>
            <h2 style={h2Style}>Who we are</h2>
            <p style={pStyle}>
              Rubab&apos;s Digital is a web and automation studio based in Jashore, Bangladesh. We help modern service businesses with premium
              websites, automation systems, AI-powered workflows, digital marketing support, and related consulting services.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Information we collect</h2>
            <p style={pStyle}>
              We may collect personal and technical information when you interact with our website or contact us.
            </p>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={liStyle}>Contact details such as your name, email address, phone number, company name, and service inquiry details.</li>
              <li style={liStyle}>Project-related information you voluntarily provide through forms, messages, or direct communication.</li>
              <li style={liStyle}>Basic technical data such as IP address, browser type, device information, referring pages, and approximate usage behavior.</li>
              <li style={liStyle}>Any files, notes, or business materials you choose to share with us during consultations or project discussions.</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>How we use your information</h2>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={liStyle}>To respond to inquiries, consultation requests, and support messages.</li>
              <li style={liStyle}>To evaluate project scope and prepare proposals, estimates, and service recommendations.</li>
              <li style={liStyle}>To deliver website, automation, AI, and marketing services requested by you or your business.</li>
              <li style={liStyle}>To improve website performance, user experience, service quality, and internal operations.</li>
              <li style={liStyle}>To maintain security, prevent abuse, detect fraud, and protect our systems, team, and clients.</li>
              <li style={liStyle}>To send relevant service-related follow-up communication when you have contacted us directly.</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Cookies and analytics</h2>
            <p style={pStyle}>
              Our website may use cookies, analytics tools, and similar technologies to understand traffic patterns, improve performance, and measure
              the effectiveness of our pages and campaigns. These tools may collect limited technical information such as page visits, browser details,
              and interaction patterns.
            </p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              You can control or disable cookies through your browser settings, although some parts of the site may not function as expected if certain
              cookies are blocked.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Payment processing</h2>
            <p style={pStyle}>
              We use third-party payment processors to handle transactions securely. We do not store your credit card details, bank account numbers,
              or other sensitive payment credentials on our servers.
            </p>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={liStyle}><strong>Stripe</strong> — Processes payments in GBP and other currencies. Stripe handles card data under PCI DSS Level 1 certification. See <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>Stripe&apos;s Privacy Policy</a>.</li>
              <li style={liStyle}><strong>Contra</strong> — Facilitates service contracts and payments in USD. Contra manages payment security independently. See <a href="https://contra.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>Contra&apos;s Privacy Policy</a>.</li>
              <li style={liStyle}>We receive only transaction confirmations, amounts, and payer identifiers necessary for invoicing and service delivery.</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>How we share information</h2>
            <p style={pStyle}>
              We do not sell your personal information. We may share limited data only when necessary to operate our business, deliver services, or comply
              with legal obligations.
            </p>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              <li style={liStyle}>With trusted service providers such as hosting, analytics, email, form processing, payment, or infrastructure platforms.</li>
              <li style={liStyle}>With project collaborators or subcontractors only when required to fulfill contracted work and subject to confidentiality expectations.</li>
              <li style={liStyle}>When disclosure is required by law, regulation, legal process, or to protect rights, safety, or security.</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Data retention</h2>
            <p style={pStyle}>
              We retain personal information only for as long as reasonably necessary to respond to inquiries, deliver services, maintain records, resolve
              disputes, enforce agreements, and meet legal, operational, or security requirements.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Data security</h2>
            <p style={pStyle}>
              We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, loss, alteration,
              or disclosure. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Your rights</h2>
            <p style={pStyle}>
              Depending on your location, you may have rights regarding your personal information, including the right to request access, correction,
              deletion, or restriction of certain processing activities.
            </p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              To make a privacy-related request, contact us using the details below. We may need to verify your identity before fulfilling certain requests.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Third-party links</h2>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              Our website may contain links to third-party websites or platforms. We are not responsible for the privacy practices, content, or policies of
              those external services, and we encourage you to review their policies separately.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Children&apos;s privacy</h2>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children. If you
              believe a child has submitted personal information to us, please contact us so we can take appropriate action.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Policy updates</h2>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              We may update this Privacy Policy from time to time to reflect changes in our services, website features, legal obligations, or operational
              practices. The updated version will be posted on this page with a revised effective date.
            </p>
          </div>

          <div
            style={{
              ...cardStyle,
              background: "linear-gradient(180deg, rgba(0,229,160,0.08), rgba(0,229,160,0.03))",
              border: "1px solid rgba(0,229,160,0.18)",
            }}
          >
            <h2 style={h2Style}>Contact us</h2>
            <p style={pStyle}>
              If you have questions about this Privacy Policy or how your information is handled, please contact us:
            </p>
            <div style={{ color: "var(--color-text)", lineHeight: 1.9 }}>
              <div>Rubab&apos;s Digital</div>
              <div>H# 859-17, Sohid Mosiur Rahman Sarak, Puraton Kashba, Jashore, Bangladesh</div>
              <div>
                Email:{" "}
                <a href="mailto:mail@rubabsdigital.com" style={{ color: "var(--color-accent)" }}>
                  mail@rubabsdigital.com
                </a>
              </div>
              <div>
                Website:{" "}
                <a href="https://rubabsdigital.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>
                  rubabsdigital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
