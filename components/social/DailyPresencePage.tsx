import Link from "next/link";
import TrialRequestForm from "@/components/social/TrialRequestForm";
import {
  COMPETITOR_RANGE,
  CONTACT_EMAIL,
  CORE_PROMISE,
  HARD_FILTER_YES,
  HERO_LINE,
  HOW_IT_WORKS,
  NICHES,
  OFFER_INCLUDES,
  OFFER_LOCK,
  OFFER_NAME,
  OFFER_PRICE_FROM,
  OFFER_PRICE_LINE,
  OFFER_TIER,
  OFFER_TRIAL,
  OFFER_VOLUME,
  WHATSAPP_DISPLAY,
  whatsappTrialHref,
  type DailyPresenceNiche,
} from "@/lib/daily-presence";

const primaryCta: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.9rem 1.2rem",
  borderRadius: "var(--radius-lg)",
  background: "var(--color-accent)",
  color: "#09140f",
  fontWeight: 700,
  textDecoration: "none",
};

const secondaryCta: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.9rem 1.2rem",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text)",
  fontWeight: 700,
  textDecoration: "none",
  background: "var(--color-surface)",
};

const card: React.CSSProperties = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-xl)",
  padding: "1.2rem",
};

type Props = {
  niche?: DailyPresenceNiche;
};

export default function DailyPresencePage({ niche }: Props) {
  const isHub = !niche;
  const trialHref = whatsappTrialHref({ niche: niche?.short.toLowerCase() });

  return (
    <div data-offer-lock={OFFER_LOCK} data-offer="daily-presence-29-4x4-3day" data-icp="cash-rich-time-poor-page-group">
      <section style={{ padding: "4.5rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.1rem",
            }}
          >
            <img
              src="/logo.png"
              alt="Rubab's Digital logo"
              width={44}
              height={44}
              style={{
                width: "44px",
                height: "44px",
                objectFit: "contain",
                borderRadius: "10px",
                background: "#fff",
                padding: "4px",
              }}
            />
            <div>
              <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.82rem" }}>
                {niche?.eyebrow || "Rubab's Digital · Daily Presence"}
              </div>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                Facebook & Instagram page and group — for owners with money, not time
              </div>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 1rem + 4vw, 5rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
              maxWidth: "920px",
            }}
          >
            {isHub ? (
              <>
                You make money.
                <br />
                <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
                  We handle the page & group.
                </span>
              </>
            ) : (
              <>
                {niche.title}
                <br />
                <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
                  {niche.titleAccent}
                </span>
              </>
            )}
          </h1>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.08rem",
              lineHeight: 1.8,
              maxWidth: "760px",
              marginBottom: "1.1rem",
            }}
          >
            {isHub ? CORE_PROMISE : (
              <>
                {niche.intro} {CORE_PROMISE}
              </>
            )}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <a href="#start-trial" style={primaryCta}>
              Start my 3-day free trial →
            </a>
            <a href={trialHref} target="_blank" rel="noopener noreferrer" style={secondaryCta}>
              Chat on WhatsApp
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "0.75rem",
              maxWidth: "860px",
            }}
          >
            {[
              { k: "Trial", v: OFFER_TRIAL },
              { k: `${OFFER_TIER} from`, v: `${OFFER_PRICE_FROM}/mo` },
              { k: "Volume", v: OFFER_VOLUME },
              { k: "Publish rule", v: "You approve first" },
            ].map((item) => (
              <div key={item.k} style={{ ...card, padding: "0.95rem 1rem" }}>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.78rem", fontWeight: 700 }}>
                  {item.k}
                </div>
                <div style={{ fontWeight: 800, marginTop: "0.25rem" }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              ...card,
              background: "linear-gradient(180deg, rgba(0,229,160,0.10), rgba(0,229,160,0.03))",
              border: "1px solid rgba(0,229,160,0.18)",
            }}
          >
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.4rem" }}>
              Hard filter — yes
            </div>
            <p style={{ color: "var(--color-text)", fontWeight: 700, lineHeight: 1.7, margin: "0 0 0.55rem" }}>
              {HARD_FILTER_YES}
            </p>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, margin: 0 }}>
              {CORE_PROMISE} This is page and group management — not a pile of leftover posts.
              If you have time to run Facebook and Instagram yourself, this is not for you.
            </p>
          </div>
        </div>
      </section>

      {isHub ? (
        <section style={{ padding: "0 1.5rem 2.5rem" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)",
                marginBottom: "0.7rem",
              }}
            >
              Cash-rich. Time-poor. Page and group go quiet.
            </h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              {HERO_LINE} Quiet pages and groups lose deals and bookings. We run Facebook and Instagram so you can stay in the business.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {NICHES.slice(0, 3).map((item) => (
                <Link key={item.slug} href={`/social-media/${item.slug}`} style={{ ...card, textDecoration: "none" }}>
                  <div style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.8rem", marginBottom: "0.4rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", lineHeight: 1.15, marginBottom: "0.55rem" }}>
                    {item.title} {item.titleAccent}
                  </div>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>{item.fear}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section style={{ padding: "0 1.5rem 2.5rem" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={card}>
              <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.55rem" }}>
                The fear
              </div>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0 }}>{niche.fear}</p>
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "0 1.5rem 2.5rem" }}>
        <div className="two-col-grid" style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "1rem" }}>
          <div style={card}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.4rem" }}>
              {OFFER_NAME} — {OFFER_TIER}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", lineHeight: 1.05, marginBottom: "0.35rem" }}>
              {OFFER_PRICE_FROM}
              <span style={{ fontSize: "1.1rem" }}>/mo from</span>
            </div>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              {OFFER_PRICE_LINE}. Typical USA social-media retainers often run {COMPETITOR_RANGE}.
              This is the ignore-proof starter: page + group management, daily volume, approval-first, no fake growth promises.
            </p>
            <div style={{ display: "grid", gap: "0.55rem" }}>
              {OFFER_INCLUDES.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "0.75rem 0.85rem",
                    borderRadius: "0.95rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "var(--color-text)",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={card}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", marginBottom: "0.7rem" }}>
              How it works
            </h2>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.title} style={{ display: "flex", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                      borderRadius: "var(--radius-md)",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--color-accent-dim)",
                      color: "var(--color-accent)",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, marginBottom: "0.2rem" }}>{step.title}</div>
                    <div style={{ color: "var(--color-text-muted)", lineHeight: 1.65 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: 1.7, margin: "1rem 0 0" }}>
              Honest claims only. We do not promise followers, leads, sales, or viral posts.
            </p>
          </div>
        </div>
      </section>

      {!isHub ? (
        <section style={{ padding: "0 1.5rem 2.5rem" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.6rem)", marginBottom: "0.85rem" }}>
              Content examples (ideas — not fabricated results)
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "0.8rem" }}>
              {niche.examples.map((example) => (
                <div key={example} style={{ ...card, padding: "1rem" }}>
                  {example}
                </div>
              ))}
            </div>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginTop: "1rem" }}>
              {niche.objection}
            </p>
          </div>
        </section>
      ) : null}

      <section style={{ padding: "0 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 1rem + 2vw, 2.6rem)", marginBottom: "0.6rem" }}>
            Niches we already write for
          </h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: "720px", lineHeight: 1.75, marginBottom: "1rem" }}>
            Realtors (land and homes), e-commerce, and salons first. Other busy owners next. If you have money but no time for the page and the group, this is the offer.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {NICHES.map((item) => (
              <Link
                key={item.slug}
                href={`/social-media/${item.slug}`}
                style={{
                  ...secondaryCta,
                  padding: "0.7rem 0.95rem",
                  borderColor: niche?.slug === item.slug ? "var(--color-accent)" : "var(--color-border)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="start-trial" style={{ padding: "0 1.5rem 4rem" }}>
        <div className="two-col-grid" style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "1rem" }}>
          <div style={card}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "0.6rem" }}>
              Start the {OFFER_TRIAL}
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Low-friction WhatsApp start. We draft from what you share. Nothing publishes until you approve.
            </p>
            <div style={{ display: "grid", gap: "0.65rem", marginBottom: "1rem" }}>
              <a href={trialHref} target="_blank" rel="noopener noreferrer" style={primaryCta}>
                Chat on WhatsApp →
              </a>
              <a href={`tel:+${WHATSAPP_DISPLAY.replace(/\D/g, "")}`} style={secondaryCta}>
                {WHATSAPP_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} style={secondaryCta}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
              After the trial, Starter {OFFER_PRICE_LINE} for {OFFER_VOLUME}. No guaranteed followers, leads, sales, or viral reach.
            </p>
          </div>

          <div style={card}>
            <TrialRequestForm defaultType={niche?.short || "Other"} nicheLabel={niche?.short} />
          </div>
        </div>

        <div style={{ maxWidth: "1120px", margin: "1rem auto 0", color: "var(--color-text-muted)" }}>
          <Link href="/social-media" style={{ color: "inherit" }}>
            ← Social Media
          </Link>
          {" · "}
          <Link href="/website-design" style={{ color: "inherit" }}>
            Website Design
          </Link>
          {" · "}
          <Link href="/digital-marketing" style={{ color: "inherit" }}>
            Digital Marketing
          </Link>
        </div>
      </section>
    </div>
  );
}
