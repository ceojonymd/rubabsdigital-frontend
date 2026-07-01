import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const CATEGORY_COLORS: Record<string, string> = {
  web_hosting: "#3b82f6",
  ai_tools: "#8b5cf6",
  web_development: "#06b6d4",
  cybersecurity: "#ef4444",
  digital_marketing: "#f59e0b",
  saas_tools: "#10b981",
  video_editing: "#ec4899",
  cloud_computing: "#6366f1",
  ecommerce: "#f97316",
  freelancing: "#14b8a6",
  seo: "#84cc16",
  productivity: "#0ea5e9",
  email_marketing: "#a855f7",
};

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Try to detect category from slug
  let accentColor = "#0ea5e9";
  for (const [cat, color] of Object.entries(CATEGORY_COLORS)) {
    if (slug.includes(cat.replace("_", "-"))) {
      accentColor = color;
      break;
    }
  }

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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #334155",
            borderRadius: "24px",
            padding: "50px 60px",
            width: "100%",
            height: "100%",
            background: "rgba(15, 23, 42, 0.6)",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: accentColor,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "30px",
            }}
          >
            RUBAB&apos;S DIGITAL
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? "36px" : "44px",
              fontWeight: 700,
              color: "#e2e8f0",
              textAlign: "center",
              lineHeight: 1.3,
              maxWidth: "900px",
            }}
          >
            {title.length > 80 ? title.slice(0, 77) + "..." : title}
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#64748b",
              marginTop: "30px",
            }}
          >
            rubabsdigital.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
