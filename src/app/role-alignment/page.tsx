import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { roleAlignments, roleBoundaryNotes } from "@/content/role-alignment";
import { getCaseStudy } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Role Alignment",
  description:
    "How verified experience maps to Senior Risk Solutions Lead capabilities across delivery, data, vendors, governance and transition.",
  path: "/role-alignment",
});

export default function RoleAlignmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Role alignment"
        title="Capability mapping without a fake match score"
        lead="Each capability shows what the role typically requires, Sanjay’s verified evidence, a best case-study example, outcome and capability level."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Role Alignment" },
        ]}
      />
      <div className="container-site pb-16 space-y-8">
        <EvidenceNote title="Role boundaries">
          <ul className="space-y-1">
            {roleBoundaryNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </EvidenceNote>

        <div className="overflow-x-auto surface">
          <table className="min-w-full text-left text-sm">
            <caption className="sr-only">
              Role alignment matrix mapping capabilities to verified evidence
            </caption>
            <thead className="border-b border-line bg-paper-deep">
              <tr>
                <th scope="col" className="px-4 py-3">Capability</th>
                <th scope="col" className="px-4 py-3">Requires</th>
                <th scope="col" className="px-4 py-3">Evidence</th>
                <th scope="col" className="px-4 py-3">Best example</th>
                <th scope="col" className="px-4 py-3">Level</th>
              </tr>
            </thead>
            <tbody>
              {roleAlignments.map((item) => {
                const study = getCaseStudy(
                  item.bestCaseStudyId === "bank-of-america"
                    ? "bank-of-america"
                    : item.bestCaseStudyId,
                );
                // getCaseStudy uses slug; bank-of-america slug matches id for most
                const hrefStudy =
                  study ??
                  getCaseStudy(
                    ["nab", "ubs", "bank-of-america", "daimler", "merck"].includes(
                      item.bestCaseStudyId,
                    )
                      ? item.bestCaseStudyId
                      : "ubs",
                  );
                return (
                  <tr key={item.id} className="border-b border-line align-top">
                    <th scope="row" className="px-4 py-4 font-semibold text-navy-900">
                      {item.title}
                    </th>
                    <td className="px-4 py-4 text-muted">{item.requires}</td>
                    <td className="px-4 py-4">
                      <p>{item.evidence}</p>
                      <p className="mt-2 text-navy-800">{item.outcome}</p>
                      {item.limitation ? (
                        <p className="mt-2 text-xs text-amber">Limitation: {item.limitation}</p>
                      ) : null}
                    </td>
                    <td className="px-4 py-4">
                      {hrefStudy ? (
                        <Link
                          href={`/case-studies/${hrefStudy.slug}`}
                          className="font-semibold text-teal"
                        >
                          {hrefStudy.organisation}
                        </Link>
                      ) : (
                        item.bestCaseStudyId
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <Badge status="verified">{item.level}</Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roleAlignments.map((item) => (
            <article key={`card-${item.id}`} className="surface p-5 md:hidden">
              <h2 className="text-lg font-semibold text-navy-900">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.requires}</p>
              <p className="mt-3 text-sm">{item.evidence}</p>
              <p className="mt-2 text-sm font-medium text-teal">{item.outcome}</p>
              {item.limitation ? (
                <p className="mt-2 text-xs text-amber">Limitation: {item.limitation}</p>
              ) : null}
              <div className="mt-3">
                <Badge status="verified">{item.level}</Badge>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
