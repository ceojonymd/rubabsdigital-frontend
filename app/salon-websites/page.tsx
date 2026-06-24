import Link from "next/link";

export const metadata = {
  title: "Salon Websites | Rubab's Digital",
  description: "Modern salon and beauty websites for better bookings, presentation, and client trust.",
};

export default function SalonWebsitesPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>✂️ Salon Websites</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Salon Websites That Feel
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Premium Before the Visit.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "1.25rem" }}>
            We design salon and beauty business websites that present services more clearly, improve booking confidence, and help local brands look more refined online.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", padding: "0.9rem 1.2rem", borderRadius: "var(--radius-lg)", background: "var(--color-accent)", color: "#09140f", fontWeight: 700, textDecoration: "none" }}>
            Request a Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
