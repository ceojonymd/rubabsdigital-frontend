import DailyPresencePage from "@/components/social/DailyPresencePage";
import {
  COMPETITOR_RANGE,
  OFFER_NAME,
  OFFER_PRICE_LINE,
  OFFER_TRIAL,
  OFFER_VOLUME,
} from "@/lib/daily-presence";

export const metadata = {
  title: "Social Media Management — Daily Presence",
  description: `You have the business. We handle the page. ${OFFER_NAME} for realtors, e-commerce, salons, and other busy businesses: ${OFFER_VOLUME}, ${OFFER_PRICE_LINE}, ${OFFER_TRIAL}. You approve before we publish. Typical USA retainers often run ${COMPETITOR_RANGE}. No guaranteed followers, leads, or sales.`,
  alternates: {
    canonical: "https://rubabsdigital.com/social-media",
  },
  openGraph: {
    title: "Daily Presence — Social Media for Busy Businesses",
    description: `${OFFER_VOLUME}. ${OFFER_PRICE_LINE}. ${OFFER_TRIAL}. Approval-first social for realtors, e-commerce, salons, and other time-poor businesses.`,
    url: "https://rubabsdigital.com/social-media",
    type: "website",
  },
};

export default function SocialMediaPage() {
  return <DailyPresencePage />;
}
