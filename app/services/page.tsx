import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Rubab's Digital services hub — websites, AI automation, custom AI agents, and digital marketing for service businesses.",
  alternates: {
    canonical: "https://rubabsdigital.com/services",
  },
  openGraph: {
    title: "Services | Rubab's Digital",
    description:
      "Rubab's Digital services hub — websites, AI automation, custom AI agents, and digital marketing for service businesses.",
    url: "https://rubabsdigital.com/services",
    type: "website",
  },
};

const offers = [
  {
    href: "/website-design",
    title: "Website Design",
    desc: "Premium service-business sites built for trust, offer clarity, and enquiry flow — not decoration.",
  },
  {
    href: "/ai-automation",
    title: "AI Automation",
    desc: "Practical workflows that capture leads, follow up, and keep operations moving after the first enquiry.",
  },
  {
    href: "/custom-ai-agents",
    title: "Custom AI Agents",
    desc: "Business-trained assistants that qualify visitors, answer FAQs, and hand off stronger leads to your team.",
  },
  {
    href: "/digital-marketing",
    title: "Digital Marketing",
    desc: "Traffic, landing pages, and remarketing systems aimed at booked conversations — not vanity clicks.",
  },
];

const industries = [
  { href: "/dentist-websites", title: "Dentists" },
  { href: "/law-firm-websites", title: "Law Firms" },
  { href: "/real-estate-websites", title: "Real Estate" },
  { href: "/salon-websites", title: "Salons" },
];

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "80px", paddingBottom: "110px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>
            Services
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Services
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
            Every business is different, so we shape websites, automation, and growth support around
            your offer and enquiry flow. Explore what each service includes, then send a short brief
            for a custom quote.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 1rem + 1.5vw, 2.4rem)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Featured offers
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {offers.map((offer) => (
              <Link
                key={offer.href}
                href={offer.href}
                style={{
                  display: "block",
                  padding: "1.25rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    marginBottom: "0.55rem",
                    color: "var(--color-accent)",
                  }}
                >
                  {offer.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                  {offer.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 1rem + 1.5vw, 2.4rem)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Industries we help
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {industries.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "inline-flex",
                  padding: "0.8rem 1.05rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  color: "var(--color-text)",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            background: "linear-gradient(180deg, rgba(0,229,160,0.10), rgba(0,229,160,0.04))",
            border: "1px solid rgba(0,229,160,0.18)",
            borderRadius: "var(--radius-xl)",
            padding: "1.4rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 1rem + 1.5vw, 2.4rem)",
              lineHeight: 1.12,
              marginBottom: "0.7rem",
            }}
          >
            Ready for a custom quote?
          </h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            Tell us the service you need, your timeline, and what is not working now. We will reply
            with a practical next step.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              padding: "0.9rem 1.2rem",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-accent)",
              color: "#09140f",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Contact us →
          </Link>
        </div>
      </section>
    </main>
  );
}
