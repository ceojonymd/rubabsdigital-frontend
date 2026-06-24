import Link from "next/link";

const footerLinkGroups = [
  {
    title: "Services",
    links: [
      { href: "/website-design", label: "Website Design" },
      { href: "/ai-automation", label: "AI Automation" },
      { href: "/custom-ai-agents", label: "Custom AI Agents" },
      { href: "/digital-marketing", label: "Digital Marketing" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/portfolio", label: "Portfolio" },
      { href: "/pricing", label: "Pricing" },
      { href: "/faq", label: "FAQ" },
      { href: "/dentist-websites", label: "Dentist Websites" },
      { href: "/law-firm-websites", label: "Law Firm Websites" },
      { href: "/salon-websites", label: "Salon Websites" },
      { href: "/real-estate-websites", label: "Real Estate Websites" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-conditions", label: "Terms & Conditions" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-bg)",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "3rem 1.5rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 2fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", marginBottom: "0.7rem" }}>
              Rubab&apos;s Digital
            </div>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "34ch", marginBottom: "1rem" }}>
              Premium websites, AI agents, automation workflows, and digital marketing systems for modern service businesses.
            </p>
            <div style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Jessore, Bangladesh
              <br />
              mail@rubabsdigital.com
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <div style={{ fontWeight: 700, marginBottom: "0.8rem", color: "var(--color-text)" }}>
                  {group.title}
                </div>
                <div style={{ display: "grid", gap: "0.6rem" }}>
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-text-muted)",
            fontSize: "0.92rem",
          }}
        >
          © 2026 Rubab&apos;s Digital. Built for modern service businesses.
        </div>
      </div>
    </footer>
  );
}
