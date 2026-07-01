import ContactClient from "@/components/contact/ContactClient";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Rubab's Digital for websites, automation, AI workflows, and growth support.",  alternates: {
    canonical: "https://rubabsdigital.com/contact",
  },
  openGraph: {
    title: "Contact Rubab's Digital",
    description: "Get in touch with Rubab's Digital for websites, automation, AI workflows, and growth support.",
    url: "https://rubabsdigital.com/contact",
    type: "website",
  },

};

export default function ContactPage() {
  return <ContactClient />;
}
