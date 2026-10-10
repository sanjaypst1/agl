import type { CaseStudy } from "@/lib/types";
import { bankOfAmericaCaseStudy } from "./bank-of-america";
import { daimlerCaseStudy } from "./daimler";
import { merckCaseStudy } from "./merck";
import { nabCaseStudy } from "./nab";
import { ubsCaseStudy } from "./ubs";

export const caseStudies: CaseStudy[] = [
  nabCaseStudy,
  ubsCaseStudy,
  bankOfAmericaCaseStudy,
  daimlerCaseStudy,
  merckCaseStudy,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}

export function getCaseStudiesByIds(ids: string[]): CaseStudy[] {
  return ids
    .map((id) => caseStudies.find((study) => study.id === id))
    .filter((study): study is CaseStudy => Boolean(study));
}

export const caseStudySlugs = caseStudies.map((study) => study.slug);
