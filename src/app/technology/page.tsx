import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import {
  capabilityLevelLegend,
  energyTransferability,
  technologyCapabilities,
} from "@/content/technology";
import { getCaseStudiesByIds } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technology and Domain Depth",
  description:
    "Transparent capability model for Power BI, SQL, Databricks, Azure platforms and market/treasury transferability.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology and domain depth"
        title="Transparent capability levels — not inflated technical claims"
        lead={energyTransferability.technicalCredibility}
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Technology" },
        ]}
      />
      <div className="container-site space-y-12 pb-16">
        <EvidenceNote title="Capability model">
          <ul className="space-y-2">
            {capabilityLevelLegend.map((item) => (
              <li key={item.level}>
                <strong>{item.level}:</strong> {item.meaning}
              </li>
            ))}
          </ul>
        </EvidenceNote>

        <div className="space-y-6">
          {technologyCapabilities.map((cap) => {
            const studies = getCaseStudiesByIds(cap.caseStudyIds);
            return (
              <article key={cap.id} className="surface p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-navy-900">{cap.name}</h2>
                  <Badge status="verified">{cap.level}</Badge>
                </div>
                <p className="mt-3 text-navy-800">{cap.positioning}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-green">What this includes</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                      {cap.does.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coral">Specialist support required</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                      {cap.doesNot.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {studies.map((study) => (
                    <Link
                      key={study.id}
                      href={`/case-studies/${study.slug}`}
                      className="font-semibold text-teal"
                    >
                      {study.organisation} →
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <section className="surface p-6 md:p-8" id="transferability" aria-labelledby="energy-transfer">
          <h2 id="energy-transfer" className="text-2xl font-semibold text-navy-900">
            {energyTransferability.title}
          </h2>
          <p className="mt-3 text-navy-800">{energyTransferability.statement}</p>
          <p className="mt-4 text-sm font-medium text-teal">{energyTransferability.boundary}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold">UBS / banking reporting objects</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {energyTransferability.ubsObjects.map((item) => (
                  <li key={item} className="rounded-full bg-paper-deep px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 font-semibold">Banking trading objects</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {energyTransferability.banking.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Energy Markets and Treasury Risk objects</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {energyTransferability.emtrObjects.map((item) => (
                  <li key={item} className="rounded-full bg-teal-soft px-3 py-1 text-sm text-teal">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 font-semibold">Energy-market context</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {energyTransferability.energyMarkets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="mt-8 font-semibold">Transferable disciplines</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {energyTransferability.transferableDisciplines.map((item) => (
              <li key={item} className="rounded-full bg-violet-soft px-3 py-1 text-sm text-violet">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
