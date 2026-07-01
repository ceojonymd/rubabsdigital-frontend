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
    "Rubab's Digital",
    "Bangladesh web agency",
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
    images: [
      {
        url: "https://rubabsdigital.com/logo.png",
        width: 512,
        height: 512,
        alt: "Rubab's Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubab's Digital",
    description:
      "Premium websites, AI workflows, and automation for modern service businesses.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rubab's Digital",
  url: "https://rubabsdigital.com",
  logo: "https://rubabsdigital.com/logo.png",
  image: "https://rubabsdigital.com/logo.png",
  description:
    "Premium websites, AI workflows, and practical automation systems for growing businesses.",
  telephone: "+880-1707-070835",
  email: "hello@rubabsdigital.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H# 859-17, Sohid Mosiur Rahman Sarak, Puraton Kashba",
    addressLocality: "Jashore",
    addressCountry: "BD",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@rubabsdigital.com",
    telephone: "+880-1707-070835",
    contactType: "customer service",
    availableLanguage: ["English", "Bengali"],
  },
  sameAs: [
    "https://www.facebook.com/rubabsdigital",
    "https://twitter.com/rubabsdigital",
    "https://www.linkedin.com/company/rubab-digital/",
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website Design & Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom AI Agents" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Digital Marketing & SEO" },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rubab's Digital",
  url: "https://rubabsdigital.com",
  description: "Premium websites, AI workflows, and automation for modern service businesses.",
  publisher: {
    "@type": "Organization",
    name: "Rubab's Digital",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://rubabsdigital.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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

