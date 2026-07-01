import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/categories", "/blog/category/", "/feed.xml"],
        disallow: ["/api/", "/enquiries", "/preferences/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
    ],
    sitemap: "https://rubabsdigital.com/sitemap.xml",
    host: "https://rubabsdigital.com",
  };
}
