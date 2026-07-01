import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

/* ── Portfolio card data ─────────────────────────────────────────── */

type CardMeta = {
  title: string;
  subtitle: string;
  accent: string;
  icon: string;          // SVG path(s) for the icon
  bgGradient: string;    // CSS gradient
  category: string;
};

const SERVICE_CARDS: Record<string, CardMeta> = {
  "1": {
    title: "Service Website Systems",
    subtitle: "Premium Website Direction",
    accent: "#3b82f6",
    category: "Web Design",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    bgGradient: "linear-gradient(135deg, #0c1929 0%, #0f2847 50%, #0a1628 100%)",
  },
  "2": {
    title: "Lead Handling Workflow",
    subtitle: "Contact & Qualification Flow",
    accent: "#10b981",
    category: "Automation",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    bgGradient: "linear-gradient(135deg, #0a1f17 0%, #0d2e22 50%, #081a14 100%)",
  },
  "3": {
    title: "AI Visitor Guidance Layer",
    subtitle: "AI-Assisted Direction",
    accent: "#8b5cf6",
    category: "AI Systems",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    bgGradient: "linear-gradient(135deg, #13092e 0%, #1a0d42 50%, #0f0825 100%)",
  },
  "4": {
    title: "Growth Landing Flow",
    subtitle: "Landing Page Structure",
    accent: "#f59e0b",
    category: "Landing Pages",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    bgGradient: "linear-gradient(135deg, #1a1505 0%, #2a2008 50%, #151104 100%)",
  },
};

function getFifaCard(num: number): CardMeta {
  const hue = (num * 37 + 120) % 360;
  return {
    title: `FIFA World Cup`,
    subtitle: `Design ${String(num).padStart(2, "0")}`,
    accent: `hsl(${hue}, 72%, 55%)`,
    category: "Football / FIFA",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z",
    bgGradient: `linear-gradient(135deg, hsl(${hue}, 40%, 8%) 0%, hsl(${hue}, 50%, 14%) 50%, hsl(${hue}, 35%, 7%) 100%)`,
  };
}

/* ── GET handler ─────────────────────────────────────────────────── */

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const num = parseInt(id, 10);

  let card: CardMeta;
  if (num >= 1 && num <= 4 && SERVICE_CARDS[id]) {
    card = SERVICE_CARDS[id];
  } else if (num >= 5 && num <= 30) {
    card = getFifaCard(num - 4);
  } else {
    return new Response("Not found", { status: 404 });
  }

  const isFifa = card.category === "Football / FIFA";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: card.bgGradient,
          padding: "40px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${card.accent}15 0%, transparent 70%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${card.accent}10 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* Main card container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${card.accent}30`,
            borderRadius: "28px",
            padding: "44px 52px",
            width: "100%",
            height: "100%",
            background: `linear-gradient(180deg, ${card.accent}08 0%, transparent 40%)`,
            position: "relative",
          }}
        >
          {/* Top badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "3px",
                background: `${card.accent}60`,
                borderRadius: "2px",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: card.accent,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              {card.category}
            </div>
            <div
              style={{
                width: "40px",
                height: "3px",
                background: `${card.accent}60`,
                borderRadius: "2px",
                display: "flex",
              }}
            />
          </div>

          {/* Icon area */}
          <div
            style={{
              display: "flex",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: `${card.accent}18`,
              border: `1.5px solid ${card.accent}30`,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke={card.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={card.icon} />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: isFifa ? "46px" : "40px",
              fontWeight: 700,
              color: "#e2e8f0",
              textAlign: "center",
              lineHeight: 1.15,
              marginBottom: "8px",
              letterSpacing: "-0.5px",
            }}
          >
            {card.title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: isFifa ? "28px" : "20px",
              fontWeight: isFifa ? 700 : 500,
              color: isFifa ? card.accent : `${card.accent}cc`,
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {card.subtitle}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "1px",
              }}
            >
              RUBAB&apos;S DIGITAL
            </div>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: card.accent,
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: "14px",
                color: "#475569",
              }}
            >
              rubabsdigital.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 450,
    }
  );
}
