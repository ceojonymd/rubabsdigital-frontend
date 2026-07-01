import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "50%",
          bottom: "18px",
          transform: "translateX(-50%)",
          width: "min(92%, 760px)",
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <div
          className="footer-cta-bar"
          style={{
            pointerEvents: "auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.8rem",
            padding: "0.85rem 1rem",
            borderRadius: "999px",
            border: "1px solid rgba(0,229,160,0.22)",
            background: "rgba(10,15,13,0.86)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
          }}
        >
          <div style={{ color: "var(--color-text)", fontWeight: 700 }}>
            Ready to turn traffic into better enquiries?
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.8rem 1rem",
                borderRadius: "999px",
                background: "var(--color-accent)",
                color: "#09140f",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Start Consultation →
            </Link>
            <Link
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.8rem 1rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--color-text)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>

      <footer
        style={{
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-bg)",
          padding: "2.5rem 1.5rem 8rem",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "1rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
            }}
          >
            <div>
              <div style={{ color: "var(--color-text)", fontWeight: 700, marginBottom: "0.35rem" }}>
                Rubab&apos;s Digital
              </div>
              <div>Premium websites, AI workflows, and practical automation systems.</div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
              <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Blog</Link>
              <Link href="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>Portfolio</Link>
              <Link href="/pricing" style={{ color: "inherit", textDecoration: "none" }}>Pricing</Link>
              <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem", fontSize: "0.85rem" }}>
              <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>Privacy</Link>
              <Link href="/terms-conditions" style={{ color: "inherit", textDecoration: "none" }}>Terms</Link>
              <Link href="/refund-policy" style={{ color: "inherit", textDecoration: "none" }}>Refund Policy</Link>
              <Link href="/faq" style={{ color: "inherit", textDecoration: "none" }}>FAQ</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
