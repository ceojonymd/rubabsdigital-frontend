export const OFFER_LOCK = "2026-09-13-jony-topu";
export const OFFER_NAME = "Daily Presence";
export const OFFER_PRICE_FROM = "$29";
export const OFFER_PRICE_LINE = "starts from $29/month";
export const OFFER_TIER = "Starter";
export const OFFER_VOLUME = "4 posts + 4 stories every day";
export const OFFER_TRIAL = "3-day free trial";
export const COMPETITOR_RANGE = "$500–$2,000+/mo";
export const WHATSAPP_E164 = "8801707070835";
export const WHATSAPP_DISPLAY = "+880 1707-070835";
export const WHATSAPP_HREF = "https://wa.me/8801707070835";
export const CONTACT_EMAIL = "mail@rubabsdigital.com";

export const BUSINESS_TYPES = [
  "Realtor",
  "E-commerce",
  "Salon",
  "Clinic",
  "Restaurant",
  "Shop",
  "Gym",
  "Other",
] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];

export type DailyPresenceNiche = {
  slug: string;
  label: string;
  short: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  fear: string;
  examples: string[];
  objection: string;
  metaTitle: string;
  metaDescription: string;
};

export const NICHES: DailyPresenceNiche[] = [
  {
    slug: "realtors",
    label: "Realtors",
    short: "Realtor",
    eyebrow: "Social Media · Realtors",
    title: "You have the listings.",
    titleAccent: "We keep the page alive.",
    intro:
      "Realtors selling land and homes are cash-rich and time-poor. Daily Presence keeps your page visible between showings — you approve, we draft and post.",
    fear:
      "A quiet realtor page looks inactive. Buyers and landowners move on to the agent who still shows up.",
    examples: [
      "Listing spotlight from a real property you send us",
      "Neighborhood or land FAQ in plain language",
      "Process explainer: viewing, paperwork, next step",
      "Soft contact CTA — no fabricated sold counts",
    ],
    objection:
      "We will not invent sold counts, office rankings, or guaranteed closings. You approve every post before it publishes.",
    metaTitle: "Realtor Social Media — Daily Presence",
    metaDescription:
      "Daily Presence for realtors: 4 posts + 4 stories every day, from $29/month, with a 3-day free trial. You approve before we publish. No guaranteed sales.",
  },
  {
    slug: "ecommerce",
    label: "E-commerce",
    short: "E-commerce",
    eyebrow: "Social Media · E-commerce",
    title: "Your store can sell.",
    titleAccent: "The feed should not go quiet.",
    intro:
      "E-commerce sellers make money from products, not from sitting in Canva. Daily Presence keeps the shop visible while you pack, restock, and run ads.",
    fear:
      "A silent shop page looks closed. Buyers bounce to the store that still posts.",
    examples: [
      "Product spotlight from your real catalog",
      "How it is made, packed, or used (real photos only)",
      "Shipping and returns FAQ from your actual policy",
      "Soft shop CTA — no invented sales numbers",
    ],
    objection:
      "We will not invent stock levels, review scores, or sales figures. You approve every post before it publishes.",
    metaTitle: "E-commerce Social Media — Daily Presence",
    metaDescription:
      "Daily Presence for e-commerce sellers: 4 posts + 4 stories every day, from $29/month, with a 3-day free trial. Approval-first. No fake reviews or sales claims.",
  },
  {
    slug: "salons",
    label: "Salons",
    short: "Salon",
    eyebrow: "Social Media · Salon",
    title: "Your salon shouldn't look",
    titleAccent: "closed online.",
    intro:
      "Busy chairs, empty grids. Daily Presence keeps the salon looking open while you cut, color, and book — you approve before anything goes live.",
    fear:
      "Empty grids between busy weeks make new clients assume you are fully booked — or gone.",
    examples: [
      "Service spotlight: color, bridal, men's cut (real work)",
      "Aftercare tips from your actual process",
      "Behind the scenes: station prep (real photos only)",
      "FAQ without inventing reviews",
    ],
    objection:
      "“I don't have time.” You approve. We draft, schedule, and publish. No fabricated client results.",
    metaTitle: "Salon Social Media — Daily Presence",
    metaDescription:
      "Daily Presence for salons: 4 posts + 4 stories every day, from $29/month, with a 3-day free trial. You approve before we publish. No fake bookings.",
  },
  {
    slug: "clinics",
    label: "Clinics",
    short: "Clinic",
    eyebrow: "Social Media · Clinic",
    title: "Patients check your page",
    titleAccent: "before they book.",
    intro:
      "Clinics that make money still lose trust when the page goes silent. Daily Presence keeps a calm, accurate presence without living in Instagram.",
    fear: "Silence looks like neglect — even when the practice is excellent.",
    examples: [
      "Service explanations in plain language",
      "FAQ patients already ask",
      "Team or facility photos you actually own",
      "Soft booking CTA — no invented wait times",
    ],
    objection:
      "We will not invent patient reviews, wait times, or clinical outcomes. You approve every post before it publishes.",
    metaTitle: "Clinic Social Media — Daily Presence",
    metaDescription:
      "Daily Presence for clinics: 4 posts + 4 stories every day, from $29/month, with a 3-day free trial. Approval-first. No fabricated patient results.",
  },
  {
    slug: "restaurants",
    label: "Restaurants",
    short: "Restaurant",
    eyebrow: "Social Media · Restaurant",
    title: "Look open online —",
    titleAccent: "not abandoned.",
    intro:
      "People pick the place that looks alive. Daily Presence keeps a food-forward rhythm while you run the floor.",
    fear: "A quiet restaurant page reads as closed, inconsistent, or not worth the trip.",
    examples: [
      "Dish spotlight from today's real menu",
      "Behind the kitchen (real photos only)",
      "Hours or booking reminder",
      "Event or special — only if it is real",
    ],
    objection:
      "No fake engagement and no fabricated “most popular” claims. You approve before we publish.",
    metaTitle: "Restaurant Social Media — Daily Presence",
    metaDescription:
      "Daily Presence for restaurants: 4 posts + 4 stories every day, from $29/month, with a 3-day free trial. Approval-first. No fake engagement.",
  },
  {
    slug: "shops",
    label: "Shops",
    short: "Shop",
    eyebrow: "Social Media · Shop",
    title: "Products deserve a",
    titleAccent: "daily spotlight.",
    intro:
      "Local shops that sell well still lose walk-ins when the page looks abandoned. Daily Presence keeps the shelf visible.",
    fear: "Random dumps do not build trust. A quiet page looks like a closed shutter.",
    examples: [
      "Product feature from real stock",
      "How it is made or sourced (if true)",
      "FAQ on hours, pickup, or returns (real policy)",
      "Soft visit or shop CTA",
    ],
    objection:
      "No invented stock or sales numbers. You approve every post before it publishes.",
    metaTitle: "Shop Social Media — Daily Presence",
    metaDescription:
      "Daily Presence for local shops: 4 posts + 4 stories every day, from $29/month, with a 3-day free trial. Approval-first. No invented sales numbers.",
  },
  {
    slug: "gyms",
    label: "Gyms",
    short: "Gym",
    eyebrow: "Social Media · Gym",
    title: "People buy energy.",
    titleAccent: "Quiet pages kill momentum.",
    intro:
      "Gyms and studios stay busy on the floor and go quiet online. Daily Presence keeps training tips and real gym life on the page.",
    fear: "A silent gym page feels empty — even when classes are full.",
    examples: [
      "Workout tip from your real programming",
      "Member moment (only with permission)",
      "Class or schedule reminder",
      "Soft join CTA — no fake transformations",
    ],
    objection:
      "No fake transformation testimonials. You approve every post before it publishes.",
    metaTitle: "Gym Social Media — Daily Presence",
    metaDescription:
      "Daily Presence for gyms: 4 posts + 4 stories every day, from $29/month, with a 3-day free trial. Approval-first. No fake transformations.",
  },
];

export function getNiche(slug: string): DailyPresenceNiche | undefined {
  return NICHES.find((niche) => niche.slug === slug);
}

export function whatsappTrialHref(opts?: {
  businessName?: string;
  businessType?: string;
  services?: string;
  url?: string;
  niche?: string;
}): string {
  const lines = [
    `Hi — I want the 3-day free Daily Presence trial${opts?.niche ? ` for my ${opts.niche}` : " for my business"}.`,
  ];
  if (opts?.businessName?.trim()) lines.push(`Business: ${opts.businessName.trim()}`);
  if (opts?.businessType?.trim()) lines.push(`Type: ${opts.businessType.trim()}`);
  if (opts?.services?.trim()) lines.push(`Services: ${opts.services.trim()}`);
  if (opts?.url?.trim()) lines.push(`URL: ${opts.url.trim()}`);
  return `${WHATSAPP_HREF}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const OFFER_INCLUDES = [
  "4 branded posts every day",
  "4 stories every day",
  "Captions + hashtags",
  "Simple content calendar",
  "Brand-tailored creative",
  "You approve before anything publishes",
  "Monthly activity summary — no vanity guarantees",
];

export const HOW_IT_WORKS = [
  {
    title: "Start the 3-day free trial",
    desc: "Message us on WhatsApp. We learn the business, the pages, and what you are willing to show.",
  },
  {
    title: "We draft. You approve.",
    desc: "Nothing publishes until you say yes. Approval-first is the default, not an add-on.",
  },
  {
    title: "Daily Presence goes live",
    desc: "Starter is 4 posts + 4 stories every day from $29/month after the trial — if it is a fit.",
  },
  {
    title: "You run the business",
    desc: "We handle the page. You handle listings, clients, orders, and the floor.",
  },
];
