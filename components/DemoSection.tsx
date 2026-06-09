"use client"
import { useState } from "react"

export interface DemoCard {
  id: string
  title: string
  niche: string
  challenge: string
  solution: string
  result: string
  tags: string[]
  color: string
  demoComponent: React.ReactNode
}

interface Props {
  cards: DemoCard[]
  accentColor: string
}

export default function DemoSection({ cards, accentColor }: Props) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [demoOpen, setDemoOpen] = useState<string | null>(null)

  const demo = cards.find(c => c.id === demoOpen)

  return (
    <section style={{ padding: "5rem 1.5rem", background: "var(--color-surface)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.3rem 0.9rem", borderRadius: "999px",
            background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
            border: `1px solid color-mix(in srgb, ${accentColor} 30%, transparent)`,
            fontSize: "0.78rem", fontWeight: 600, color: accentColor, marginBottom: "1rem"
          }}>✦ Demo Proof</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)",
            marginBottom: "0.75rem"
          }}>See Real Demo Work</h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "580px" }}>
            Visual proof of how we build for real business use-cases. Open the live demo, or expand any card to see the challenge, solution, and expected outcome.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {cards.map(card => (
            <div
              key={card.id}
              style={{
                background: "var(--color-surface-offset)",
                border: `1px solid ${expandedCard === card.id ? accentColor + "66" : "var(--color-border)"}`,
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: expandedCard === card.id ? `0 0 24px ${accentColor}18` : "none"
              }}
            >
              <div style={{
                height: "140px",
                background: `linear-gradient(135deg, color-mix(in srgb, ${card.color} 18%, var(--color-surface-dynamic)), var(--color-surface-dynamic))`,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderBottom: "1px solid var(--color-border)"
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: card.color, marginBottom: "0.35rem" }}>{card.title}</div>
                  <div style={{
                    fontSize: "0.78rem",
                    color: "var(--color-text-muted)",
                    background: "rgba(0,0,0,0.28)",
                    padding: "0.2rem 0.75rem",
                    borderRadius: "999px"
                  }}>{card.niche}</div>
                </div>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {card.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: "0.72rem", fontWeight: 600,
                      padding: "0.22rem 0.65rem", borderRadius: "999px",
                      background: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
                      color: accentColor,
                      border: `1px solid color-mix(in srgb, ${accentColor} 25%, transparent)`
                    }}>{tag}</span>
                  ))}
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.12rem", marginBottom: "0.5rem" }}>{card.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                  {card.challenge}
                </p>

                {expandedCard === card.id && (
                  <div style={{
                    marginBottom: "1.2rem",
                    padding: "1rem",
                    background: "var(--color-surface)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)"
                  }}>
                    <div style={{ marginBottom: "0.75rem" }}>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>Solution</div>
                      <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>{card.solution}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#00e5a0", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>Result</div>
                      <p style={{ fontSize: "0.85rem", color: "var(--color-text)", lineHeight: 1.65 }}>{card.result}</p>
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button
                    onClick={() => setDemoOpen(card.id)}
                    style={{
                      flex: 1, padding: "0.7rem 1rem",
                      background: accentColor, color: "#0a1a12",
                      borderRadius: "var(--radius-md)", fontSize: "0.85rem", fontWeight: 700,
                      border: "none", cursor: "pointer"
                    }}
                  >▶ View Demo</button>

                  <button
                    onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                    style={{
                      padding: "0.7rem 1rem",
                      background: "transparent",
                      border: `1px solid ${expandedCard === card.id ? accentColor : "var(--color-border)"}`,
                      color: expandedCard === card.id ? accentColor : "var(--color-text-muted)",
                      borderRadius: "var(--radius-md)", fontSize: "0.85rem", fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >{expandedCard === card.id ? "▲ Less" : "▼ Details"}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {demoOpen && demo && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setDemoOpen(null) }}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(10px)",
            display: "flex", flexDirection: "column",
            padding: "1rem"
          }}
        >
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.75rem 1rem",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg) var(--radius-lg) 0 0"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "0.4rem" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
              </div>
              <div style={{
                padding: "0.3rem 1rem",
                background: "var(--color-surface-offset)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8rem",
                color: "var(--color-text-muted)"
              }}>demo.rubabsdigital.com / {demo.id}</div>
            </div>
            <button
              onClick={() => setDemoOpen(null)}
              style={{
                width: "34px", height: "34px",
                borderRadius: "var(--radius-md)",
                background: "var(--color-surface-offset)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
                cursor: "pointer"
              }}
            >✕</button>
          </div>

          <div style={{
            flex: 1, overflow: "auto",
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderTop: "none",
            borderRadius: "0 0 var(--radius-lg) var(--radius-lg)"
          }}>
            {demo.demoComponent}
          </div>
        </div>
      )}
    </section>
  )
}
