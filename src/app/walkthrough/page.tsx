import { PageHero } from "@/components/layout/PageHero";
import { ExecutiveWalkthrough } from "@/components/walkthrough/ExecutiveWalkthrough";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Executive Walkthrough",
  description:
    "A 10-minute keyboard-accessible walkthrough of Sanjay Singh Rawat’s reporting-product portfolio.",
  path: "/walkthrough",
});

export default function WalkthroughPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive walkthrough"
        title="A 10-minute path through the evidence"
        lead="Use previous and next controls — or arrow keys — to move through positioning, products, risk knowledge, technology boundaries and transferability. Nothing essential exists only in this mode."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Executive Walkthrough" },
        ]}
      />
      <div className="container-site pb-16">
        <EvidenceNote>
          This walkthrough is an independent professional navigation aid. It is not affiliated with
          or endorsed by any employer.
        </EvidenceNote>
        <div className="mt-8">
          <ExecutiveWalkthrough />
        </div>
      </div>
    </>
  );
}
