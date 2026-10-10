import { describe, expect, it } from "vitest";
import { caseStudies, caseStudySlugs, getCaseStudy } from "./index";

describe("case studies", () => {
  it("includes the five required slugs", () => {
    expect(caseStudySlugs).toEqual(
      expect.arrayContaining([
        "nab",
        "ubs",
        "bank-of-america",
        "daimler",
        "merck",
      ]),
    );
    expect(caseStudies).toHaveLength(5);
  });

  it("resolves each study by slug", () => {
    for (const slug of caseStudySlugs) {
      expect(getCaseStudy(slug)?.slug).toBe(slug);
    }
  });
});
