import { PageHero } from "@/components/layout/PageHero";
import { SourceToDecision } from "@/components/home/SourceToDecision";
import { RiskKnowledge } from "@/components/home/RiskKnowledge";
import { ThreeQuestions } from "@/components/home/ThreeQuestions";
import { InvestigationLab } from "@/components/risk/InvestigationLab";
import { InterviewExplorer } from "@/components/risk/InterviewExplorer";
import { ReportingFailures } from "@/components/risk/ReportingFailures";
import { RiskDataNetwork } from "@/components/three/RiskDataNetwork";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Risk & Data Reporting",
  description:
    "Risk knowledge, source-to-decision lineage, reporting failure modes and a synthetic investigation lab for decision-ready reporting.",
  path: "/risk-data-reporting",
});

export default function RiskDataReportingPage() {
  return (
    <>
      <PageHero
        eyebrow="Risk & data"
        title="From fragmented information to decision-ready reporting"
        lead="Explore risk knowledge, lineage, common reporting failures and a synthetic discrepancy investigation — anchored in verified delivery experience."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Risk & Data" },
        ]}
      />
      <div className="container-site">
        <EvidenceNote title="Important distinction">
          <p>
            The UBS product is a consolidated risk, control and delivery-readiness reporting
            solution rather than a quantitative market-risk calculation platform.
          </p>
        </EvidenceNote>
      </div>
      <ThreeQuestions />
      <RiskKnowledge />
      <SourceToDecision />
      <RiskDataNetwork />
      <div className="container-site space-y-12 pb-16">
        <ReportingFailures />
        <InvestigationLab />
        <div id="questions">
          <h2 className="display-title mb-6 text-3xl">Questions this experience answers</h2>
          <InterviewExplorer />
        </div>
      </div>
    </>
  );
}
