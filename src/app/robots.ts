import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  if (siteConfig.noIndex) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      sitemap: `${siteConfig.url}/sitemap.xml`,
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
