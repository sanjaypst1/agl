import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/content/case-studies";
import { siteConfig } from "@/content/site";

const staticPaths = [
  "/",
  "/experience",
  "/case-studies",
  "/delivery-method",
  "/risk-data-reporting",
  "/technology",
  "/role-alignment",
  "/walkthrough",
  "/evidence",
  "/about",
  "/project",
  "/contact",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${siteConfig.url}/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
