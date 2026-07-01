import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/categories", "/blog/category/"],
        disallow: ["/api/", "/enquiries", "/preferences/"],
      },
    ],
    sitemap: "https://rubabsdigital.com/sitemap.xml",
  };
}
