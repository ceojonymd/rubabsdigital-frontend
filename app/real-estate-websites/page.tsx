import Link from "next/link";

export const metadata = {
  title: "Real Estate Websites | Rubab's Digital",
  description: "Real estate websites built for stronger presentation, trust, and enquiry generation.",
};

export default function RealEstateWebsitesPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>🏡 Real Estate Websites</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Real Estate Websites That
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Create More Enquiry Confidence.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "1.25rem" }}>
            We help real estate agents and property businesses build cleaner, higher-trust websites that support listings, lead capture, and better buyer confidence.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", padding: "0.9rem 1.2rem", borderRadius: "var(--radius-lg)", background: "var(--color-accent)", color: "#09140f", fontWeight: 700, textDecoration: "none" }}>
            Request a Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
