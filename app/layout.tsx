import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rubab's Digital — Premium Websites, AI & Automation Studio",
    template: "%s | Rubab's Digital",
  },
  description:
    "Premium websites, AI workflows, and practical automation systems for clinics, consultants, law firms, real estate agents, and local service businesses. Expert tech reviews, tutorials & guides.",
  keywords: [
    "web design agency",
    "AI automation",
    "custom AI agents",
    "digital marketing",
    "website design",
    "tech reviews",
    "web hosting",
  ],
  authors: [{ name: "Rubab's Digital" }],
  metadataBase: new URL("https://rubabsdigital.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rubabsdigital.com",
    siteName: "Rubab's Digital",
    title: "Rubab's Digital — Premium Websites, AI & Automation Studio",
    description:
      "Premium websites, AI workflows, and automation for modern service businesses. Plus expert tech reviews and guides.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubab's Digital",
    description:
      "Premium websites, AI workflows, and automation for modern service businesses.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rubab's Digital",
  url: "https://rubabsdigital.com",
  logo: "https://rubabsdigital.com/logo.png",
  description:
    "Premium websites, AI workflows, and practical automation systems for growing businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@rubabsdigital.com",
    telephone: "+880-1707-070835",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="site-body">
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
