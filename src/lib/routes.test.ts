import { describe, expect, it } from "vitest";
import { caseStudySlugs } from "@/content/case-studies";
import { primaryNav, secondaryNav } from "@/content/site";

const requiredRoutes = [
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

describe("route architecture", () => {
  it("includes all required primary information architecture routes", () => {
    const navHrefs = [...primaryNav, ...secondaryNav].map((item) => item.href);
    for (const route of requiredRoutes) {
      expect(navHrefs.includes(route) || route === "/").toBe(true);
    }
  });

  it("generates all case study slugs required by the brief", () => {
    expect(caseStudySlugs).toEqual(
      expect.arrayContaining([
        "nab",
        "ubs",
        "bank-of-america",
        "daimler",
        "merck",
      ]),
    );
  });
});
