"use client";

import { useMemo, useState } from "react";

const filters = ["All", "Web Design", "Automation", "AI Systems", "Landing Pages", "Service Business", "Football / FIFA"];

type PortfolioItem = {
  id: number;
  title: string;
  type: string;
  niche: string;
  text: string;
  link?: string;
  figma?: string;
  image: string;
};

const items: PortfolioItem[] = [
  {
    id: 1,
    title: "Service Website Systems",
    type: "Web Design",
    niche: "Service Business",
    text: "Premium website direction for businesses that need stronger first impressions, clearer positioning, and better enquiry flow.",
    image: "/portfolio/1.png",
  },
  {
    id: 2,
    title: "Lead Handling Workflow Direction",
    type: "Automation",
    niche: "Service Business",
    text: "A contact and qualification flow shaped to make incoming leads easier to review, route, and act on.",
    image: "/portfolio/2.png",
  },
  {
    id: 3,
    title: "AI Visitor Guidance Layer",
    type: "AI Systems",
    niche: "Service Business",
    text: "AI-assisted visitor direction designed to support service discovery, trust-building, and clearer next steps.",
    image: "/portfolio/3.png",
  },
  {
    id: 4,
    title: "Growth Landing Flow",
    type: "Landing Pages",
    niche: "Service Business",
    text: "Landing page structure focused on message clarity, CTA rhythm, and stronger buyer confidence.",
    image: "/portfolio/4.png",
  },
  // FIFA World Cup Design Collection
  {
    id: 5,
    title: "FIFA World Cup — Design 01",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Creative football design concept for the FIFA World Cup series.",
    link: "https://ranch-drums-37308651.figma.site/",
    figma: "https://www.figma.com/community/file/1648673011851580004",
    image: "/portfolio/5.png",
  },
  {
    id: 6,
    title: "FIFA World Cup — Design 02",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "World Cup themed visual design and layout concept.",
    link: "https://bony-khaki-28980549.figma.site/",
    image: "/portfolio/6.png",
  },
  {
    id: 7,
    title: "FIFA World Cup — Design 03",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Football-inspired creative direction and visual storytelling.",
    link: "https://khaki-spray-17520158.figma.site/",
    image: "/portfolio/7.png",
  },
  {
    id: 8,
    title: "FIFA World Cup — Design 04",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Dynamic sports design concept with World Cup aesthetics.",
    link: "https://trill-name-39631032.figma.site/",
    image: "/portfolio/8.png",
  },
  {
    id: 9,
    title: "FIFA World Cup — Design 05",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Bold football visual identity and tournament branding concept.",
    link: "https://cover-stamp-99875270.figma.site/",
    image: "/portfolio/9.png",
  },
  {
    id: 10,
    title: "FIFA World Cup — Design 06",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Stadium-inspired design language for FIFA World Cup.",
    link: "https://shell-drawer-98082737.figma.site/",
    image: "/portfolio/10.png",
  },
  {
    id: 11,
    title: "FIFA World Cup — Design 07",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Energetic football design with modern visual elements.",
    link: "https://money-pacing-83147189.figma.site/",
    image: "/portfolio/11.png",
  },
  {
    id: 12,
    title: "FIFA World Cup — Design 08",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "World Cup creative concept with team-inspired color systems.",
    link: "https://prior-tutor-97577445.figma.site/",
    image: "/portfolio/12.png",
  },
  {
    id: 13,
    title: "FIFA World Cup — Design 09",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Football celebration design with dynamic composition.",
    link: "https://sun-tusk-12908953.figma.site/",
    image: "/portfolio/13.png",
  },
  {
    id: 14,
    title: "FIFA World Cup — Design 10",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Tournament-themed design with crowd energy aesthetic.",
    link: "https://malt-shadow-95809262.figma.site/",
    image: "/portfolio/14.png",
  },
  {
    id: 15,
    title: "FIFA World Cup — Design 11",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Goal-celebration inspired visual design concept.",
    link: "https://half-gentle-74967322.figma.site/",
    image: "/portfolio/15.png",
  },
  {
    id: 16,
    title: "FIFA World Cup — Design 12",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "FIFA-themed creative direction with pitch-level perspective.",
    link: "https://epic-zippy-28751361.figma.site/",
    image: "/portfolio/16.png",
  },
  {
    id: 17,
    title: "FIFA World Cup — Design 13",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "World Cup heritage design with modern typography.",
    link: "https://mood-hall-91339399.figma.site/",
    image: "/portfolio/17.png",
  },
  {
    id: 18,
    title: "FIFA World Cup — Design 14",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Football culture visual identity and poster design.",
    link: "https://deep-pep-99990106.figma.site/",
    image: "/portfolio/18.png",
  },
  {
    id: 19,
    title: "FIFA World Cup — Design 15",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Tournament bracket-inspired creative layout.",
    link: "https://effect-film-51249470.figma.site/",
    image: "/portfolio/19.png",
  },
  {
    id: 20,
    title: "FIFA World Cup — Design 16",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "National team colors palette design exploration.",
    link: "https://stable-reply-58119542.figma.site/",
    image: "/portfolio/20.png",
  },
  {
    id: 21,
    title: "FIFA World Cup — Design 17",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Football fan experience design concept.",
    link: "https://crowd-self-73447767.figma.site/",
    image: "/portfolio/21.png",
  },
  {
    id: 22,
    title: "FIFA World Cup — Design 18",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "World Cup trophy-inspired visual composition.",
    link: "https://opt-mount-52177957.figma.site/",
    image: "/portfolio/22.png",
  },
  {
    id: 23,
    title: "FIFA World Cup — Design 19",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Match-day atmosphere captured in design.",
    link: "https://dog-blast-71214759.figma.site/",
    image: "/portfolio/23.png",
  },
  {
    id: 24,
    title: "FIFA World Cup — Design 20",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Football movement and velocity design study.",
    link: "https://ethics-tidy-84167911.figma.site/",
    image: "/portfolio/24.png",
  },
  {
    id: 25,
    title: "FIFA World Cup — Design 21",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Stadium architecture-inspired layout concept.",
    link: "https://cause-five-61027758.figma.site/",
    image: "/portfolio/25.png",
  },
  {
    id: 26,
    title: "FIFA World Cup — Design 22",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "World Cup countdown visual design system.",
    link: "https://dew-cane-49830228.figma.site/",
    image: "/portfolio/26.png",
  },
  {
    id: 27,
    title: "FIFA World Cup — Design 23",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Football pitch geometry and pattern exploration.",
    link: "https://queue-nix-72603901.figma.site/",
    image: "/portfolio/27.png",
  },
  {
    id: 28,
    title: "FIFA World Cup — Design 24",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "FIFA heritage and legacy visual storytelling.",
    link: "https://relax-genre-23000737.figma.site/",
    image: "/portfolio/28.png",
  },
  {
    id: 29,
    title: "FIFA World Cup — Design 25",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Championship moment freeze-frame design concept.",
    link: "https://bronze-pitch-64416473.figma.site/",
    image: "/portfolio/29.png",
  },
  {
    id: 30,
    title: "FIFA World Cup — Design 26",
    type: "Football / FIFA",
    niche: "Football / FIFA",
    text: "Final whistle — culminating World Cup design series.",
    link: "https://method-grab-21943836.figma.site/",
    image: "/portfolio/30.png",
  },
];

export default function PortfolioClient() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.type === active || item.niche === active);
  }, [active]);

  return (
    <main style={{ paddingTop: "80px", paddingBottom: "110px" }}>
      <section style={{ padding: "6rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.7rem" }}>Portfolio</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 1rem + 4vw, 4.8rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Proof, Direction, and
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Conversion-Aware Presentation.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
            Browse selected categories of work to quickly understand the kind of website, automation, and conversion thinking Rubab&apos;s Digital brings to service businesses.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                style={{
                  padding: "0.78rem 1rem",
                  borderRadius: "999px",
                  border: active === filter ? "1px solid rgba(0,229,160,0.35)" : "1px solid var(--color-border)",
                  background: active === filter ? "var(--color-accent-dim)" : "var(--color-surface)",
                  color: active === filter ? "var(--color-accent)" : "var(--color-text)",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {filtered.map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1rem",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {/* Portfolio card image */}
              <div
                style={{
                  height: "220px",
                  borderRadius: "calc(var(--radius-xl) - 0.35rem)",
                  overflow: "hidden",
                  marginBottom: "1rem",
                  position: "relative",
                  background: item.type === "Football / FIFA"
                    ? "linear-gradient(135deg, rgba(34,197,94,0.22), rgba(255,215,0,0.12))"
                    : "linear-gradient(135deg, rgba(0,229,160,0.18), rgba(255,255,255,0.03))",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                <span style={tagStyle}>{item.type}</span>
                {item.niche !== item.type && <span style={tagStyle}>{item.niche}</span>}
              </div>

              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", lineHeight: 1.12, marginBottom: "0.7rem" }}>
                {item.title}
              </div>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>{item.text}</p>

              {item.link ? (
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: "0.8rem 0.9rem",
                      borderRadius: "0.95rem",
                      background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2, #b79cff))",
                      color: "#0b1020",
                      textAlign: "center",
                      fontWeight: 700,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    View Live →
                  </a>
                  {item.figma && (
                    <a
                      href={item.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.8rem 0.9rem",
                        borderRadius: "0.95rem",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "var(--color-text)",
                        textAlign: "center",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                    >
                      Figma
                    </a>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    padding: "0.8rem 0.9rem",
                    borderRadius: "0.95rem",
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.7,
                    border: "1px solid rgba(255,255,255,0.06)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  Concept direction — full case study coming soon.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const tagStyle: React.CSSProperties = {
  display: "inline-flex",
  padding: "0.35rem 0.75rem",
  borderRadius: "999px",
  background: "var(--color-accent-dim)",
  color: "var(--color-accent)",
  fontSize: "0.78rem",
  fontWeight: 700,
};
