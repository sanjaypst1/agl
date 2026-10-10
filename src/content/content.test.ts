import { describe, expect, it } from "vitest";
import {
  caseStudies,
  caseStudySlugs,
  getDiscussionReadyCaseStudies,
} from "./case-studies";
import { interviewQuestions } from "./interview-questions";
import { planPhases } from "./plan-306090";
import { roleAlignments } from "./role-alignment";
import { technologyCapabilities } from "./technology";
import { syntheticExceptions } from "./investigation-lab";

describe("content integrity", () => {
  it("exposes five case studies with unique slugs", () => {
    expect(caseStudies).toHaveLength(5);
    expect(new Set(caseStudySlugs).size).toBe(5);
  });

  it("keeps outcomes associated with their own case study id", () => {
    for (const study of caseStudies) {
      for (const outcome of study.outcomes) {
        expect(outcome.caseStudyId).toBe(study.id);
      }
    }
  });

  it("links interview questions to known case studies", () => {
    const ids = new Set(caseStudies.map((study) => study.id));
    for (const question of interviewQuestions) {
      expect(question.caseStudyIds.length).toBeGreaterThan(0);
      for (const id of question.caseStudyIds) {
        expect(ids.has(id)).toBe(true);
      }
    }
  });

  it("maps role alignments to known case studies", () => {
    const ids = new Set(caseStudies.map((study) => study.id));
    for (const item of roleAlignments) {
      expect(ids.has(item.bestCaseStudyId)).toBe(true);
    }
  });

  it("labels synthetic investigation records", () => {
    expect(syntheticExceptions.length).toBeGreaterThan(5);
    for (const item of syntheticExceptions) {
      expect(item.id.startsWith("SX-")).toBe(true);
      expect(item.transactionRef.startsWith("SYN-")).toBe(true);
    }
  });

  it("keeps technology capability boundaries explicit", () => {
    for (const capability of technologyCapabilities) {
      expect(capability.does.length).toBeGreaterThan(0);
      expect(capability.doesNot.length).toBeGreaterThan(0);
    }
  });

  it("frames each case study as a reporting product with accountability boundaries", () => {
    for (const study of caseStudies) {
      expect(study.productType.length).toBeGreaterThan(0);
      expect(study.reportingViews.length).toBeGreaterThan(0);
      expect(study.personalOwned.length).toBeGreaterThan(0);
      expect(study.specialistContributions.length).toBeGreaterThan(0);
      expect(study.businessOwnersRetained.length).toBeGreaterThan(0);
      expect(study.flagship === true ? study.id === "ubs" : true).toBe(true);
    }
    expect(caseStudies.some((study) => study.flagship)).toBe(true);
  });

  it("keeps three discussion-ready products covering market, credit and operational risk", () => {
    const ready = getDiscussionReadyCaseStudies();
    expect(ready).toHaveLength(3);
    expect(ready.map((study) => study.id)).toEqual([
      "ubs",
      "nab",
      "bank-of-america",
    ]);
    for (const study of ready) {
      expect(study.discussionTalkTrack).toMatch(/\bI\b/);
      expect(study.reportTypeLabel?.length).toBeGreaterThan(0);
      expect(study.domainCoverage?.length).toBeGreaterThan(0);
    }
    const joined = ready
      .flatMap((study) => study.domainCoverage ?? [])
      .join(" ")
      .toLowerCase();
    expect(joined).toContain("operational risk");
    expect(joined).toContain("credit risk");
    expect(joined).toContain("market risk");
    expect(joined).toMatch(/trading|treasury/);
  });

  it("exposes a three-phase 30-60-90 plan", () => {
    expect(planPhases).toHaveLength(3);
    expect(planPhases.map((phase) => phase.id)).toEqual(["30", "60", "90"]);
  });
});
