import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about websites, automation, pricing, and project fit.",  alternates: {
    canonical: "https://rubabsdigital.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions",
    description: "Answers to common questions about Rubab's Digital services, pricing, timelines, and delivery.",
    url: "https://rubabsdigital.com/faq",
    type: "website",
  },

};

const faqs = [
  {
    q: "Will a redesign only improve appearance, or can it improve lead quality too?",
    a: "A strong redesign should do more than improve aesthetics. It should make the offer clearer, strengthen trust, reduce friction, and guide better-fit visitors toward a more confident enquiry.",
  },
  {
    q: "Do you only design websites, or can you also help with automation and lead flow?",
    a: "Rubab's Digital is positioned around connected business direction. That means the website can be shaped alongside automation thinking, lead handling, contact flow, and practical growth support where needed.",
  },
  {
    q: "Who is this best for?",
    a: "The strongest fit is usually service businesses that need a more credible digital presence, clearer positioning, and a better path from website visit to real business conversation.",
  },
  {
    q: "What if I do not know which package is right for me?",
    a: "That is normal. The packages are there to help frame scope, but the final recommendation depends on your business goals, the quality of your current website, and how much operational support you need.",
  },
  {
    q: "Can this work for smaller teams, or only larger companies?",
    a: "It can work for both. Some businesses only need sharper messaging and a clearer website structure, while others need a broader system that connects design, automation, and lead handling.",
  },
  {
    q: "How do projects usually begin?",
    a: "Most projects begin with a short consultation where the current website, business goals, offer clarity, and likely next steps are reviewed first.",
  },
];

export default function FAQPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>FAQ</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Answers for Businesses
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Thinking Seriously About Improvement.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
            These questions are written to address the most common objections, uncertainties, and fit questions buyers often have before starting a conversation.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gap: "1rem" }}>
          {faqs.map((item) => (
            <div
              key={item.q}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.2rem",
              }}
            >
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", lineHeight: 1.18, marginBottom: "0.75rem" }}>
                {item.q}
              </h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "860px" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 6rem" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            background: "linear-gradient(180deg, rgba(0,229,160,0.10), rgba(0,229,160,0.04))",
            border: "1px solid rgba(0,229,160,0.18)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
          }}
        >
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
            Still deciding?
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 1rem + 2vw, 3rem)",
              lineHeight: 1.08,
              marginBottom: "0.8rem",
            }}
          >
            We can help you decide what makes the most sense for your business.
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              maxWidth: "760px",
              marginBottom: "1.2rem",
            }}
          >
            If you are comparing redesign, landing page improvement, automation, or a broader package, the right path usually becomes clear after a short consultation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.9rem 1.2rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-accent)",
                color: "#09140f",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Ask About Your Project →
            </Link>
            <Link
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.9rem 1.2rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                fontWeight: 700,
                textDecoration: "none",
                background: "var(--color-surface)",
              }}
            >
              Review Packages →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
