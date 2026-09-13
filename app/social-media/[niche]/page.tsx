import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DailyPresencePage from "@/components/social/DailyPresencePage";
import { NICHES, getNiche } from "@/lib/daily-presence";

export function generateStaticParams() {
  return NICHES.map((niche) => ({ niche: niche.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { niche: string };
}): Metadata {
  const niche = getNiche(params.niche);
  if (!niche) {
    return { title: "Daily Presence" };
  }
  return {
    title: niche.metaTitle,
    description: niche.metaDescription,
    alternates: {
      canonical: `https://rubabsdigital.com/social-media/${niche.slug}`,
    },
    openGraph: {
      title: niche.metaTitle,
      description: niche.metaDescription,
      url: `https://rubabsdigital.com/social-media/${niche.slug}`,
      type: "website",
    },
  };
}

export default function SocialMediaNichePage({
  params,
}: {
  params: { niche: string };
}) {
  const niche = getNiche(params.niche);
  if (!niche) notFound();
  return <DailyPresencePage niche={niche} />;
}
