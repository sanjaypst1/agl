import { caseStudies } from "./case-studies";

export const allOutcomes = caseStudies.flatMap((study) =>
  study.outcomes.map((outcome) => ({
    ...outcome,
    organisation: study.organisation,
    href: `/case-studies/${study.slug}`,
  })),
);

export const portfolioScaleNote = {
  id: "portfolio-scale",
  metric: "USD 500M+",
  label: "Technology and transformation portfolios directed",
  context:
    "Cross-portfolio figure spanning regulated and global environments. Not attributable to a single case study implementation.",
  status: "verified" as const,
};
