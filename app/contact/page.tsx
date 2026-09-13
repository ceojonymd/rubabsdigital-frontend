import ContactClient from "@/components/contact/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send an enquiry to Rubab's Digital for websites, automation, AI workflows, and growth support.",
  alternates: {
    canonical: "https://rubabsdigital.com/contact",
  },
  openGraph: {
    title: "Contact Rubab's Digital",
    description:
      "Send an enquiry to Rubab's Digital for websites, automation, AI workflows, and growth support.",
    url: "https://rubabsdigital.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
