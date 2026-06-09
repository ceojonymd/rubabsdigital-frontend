"use client"
import Link from "next/link"

export default function ConsultancyButton({ label = "Get Free Consultation →", size = "lg" }: { label?: string, size?: "sm" | "lg" }) {
  const isLg = size === "lg"
  return (
    <Link href="/contact" style={{
      display: "inline-flex", alignItems: "center", gap: "0.5rem",
      padding: isLg ? "0.9rem 2rem" : "0.55rem 1.25rem",
      fontSize: isLg ? "1rem" : "0.875rem",
      fontWeight: 700, fontFamily: "var(--font-body)",
      background: "var(--color-accent)", color: "#0a1a12",
      borderRadius: "var(--radius-lg)",
      boxShadow: "0 0 32px rgba(0,229,160,0.22)",
      transition: "background 180ms, box-shadow 180ms, transform 180ms",
      textDecoration: "none"
    }}>{label}</Link>
  )
}
