import PortfolioClient from "@/components/portfolio/PortfolioClient";

export const metadata = {
  title: "Portfolio",
  description: "Explore selected website, automation, AI, campaign, and growth-focused concept work from Rubab's Digital.",  alternates: {
    canonical: "https://rubabsdigital.com/portfolio",
  },
  openGraph: {
    title: "Portfolio — Rubab's Digital",
    description: "Explore selected website, automation, AI, campaign, and growth-focused concept work from Rubab's Digital.",
    url: "https://rubabsdigital.com/portfolio",
    type: "website",
  },

};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
