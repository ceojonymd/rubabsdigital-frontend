import DailyPresencePage from "@/components/social/DailyPresencePage";
import {
  COMPETITOR_RANGE,
  CORE_PROMISE,
  HERO_LINE,
  OFFER_NAME,
  OFFER_PRICE_LINE,
  OFFER_TRIAL,
  OFFER_VOLUME,
} from "@/lib/daily-presence";

export const metadata = {
  title: "Social Media Management — Daily Presence",
  description: `${HERO_LINE} ${CORE_PROMISE} ${OFFER_NAME} for cash-rich, time-poor owners — realtors, e-commerce, salons: ${OFFER_VOLUME}, ${OFFER_PRICE_LINE}, ${OFFER_TRIAL}. Page and group management. You approve before we publish. Typical USA retainers often run ${COMPETITOR_RANGE}.`,
  alternates: {
    canonical: "https://rubabsdigital.com/social-media",
  },
  openGraph: {
    title: "Daily Presence — We handle the page & group",
    description: `${CORE_PROMISE} ${OFFER_VOLUME}. ${OFFER_PRICE_LINE}. ${OFFER_TRIAL}.`,
    url: "https://rubabsdigital.com/social-media",
    type: "website",
  },
};

export default function SocialMediaPage() {
  return <DailyPresencePage />;
}
