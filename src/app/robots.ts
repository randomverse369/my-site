import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Next's image optimizer endpoint is not content.
      disallow: "/_next/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
