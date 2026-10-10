import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { interviewQuestions } from "@/content/interview-questions";
import { threeQuestions } from "@/content/three-questions";
import { getCaseStudiesByIds } from "@/content/case-studies";
import type { CaseStudy } from "@/lib/types";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="text-2xl font-semibold text-navy-900">{title}</h2>
      <div className="mt-4 space-y-3 text-navy-800">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const related = getCaseStudiesByIds(study.relatedCaseStudies);
  const questions = [
    ...threeQuestions.filter((q) => study.relatedQuestions.includes(q.id)),
    ...interviewQuestions.filter((q) => study.relatedQuestions.includes(q.id)),
  ];

  return (
    <article>
      <PageHero
        eyebrow={`${study.organisation} · ${study.productType}`}
        title={study.title}
        lead={study.subtitle ?? study.summary}
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { href: "/case-studies", label: "Case Studies" },
          { label: study.organisation },
        ]}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge status={study.evidenceStatus} />
          {study.flagship ? <Badge status="verified">Flagship personal delivery</Badge> : null}
          <Badge status="sanitised">Reporting product</Badge>
        </div>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="font-medium">{study.role}</dd>
          </div>
          <div>
            <dt className="text-muted">Period</dt>
            <dd className="font-medium">{study.period}</dd>
          </div>
          <div>
            <dt className="text-muted">Industry</dt>
            <dd className="font-medium">{study.industry}</dd>
          </div>
          <div>
            <dt className="text-muted">Evidence status</dt>
            <dd className="font-medium capitalize">{study.evidenceStatus}</dd>
          </div>
        </dl>
      </PageHero>

      <div className="container-site pb-16">
        <Section title="Executive summary">
          <p>{study.summary}</p>
        </Section>
        <Section title="Business situation">
          <p>{study.situation}</p>
        </Section>
        <Section title="Reporting users">
          <BulletList items={study.reportingUsers} />
        </Section>
        <Section title="Business problem">
          <p>{study.problem}</p>
        </Section>
        <Section title="Risk context">
          <p>{study.riskContext}</p>
        </Section>
        <Section title="Source information">
          <BulletList items={study.sourceInformation} />
        </Section>
        <Section title="Core reporting views">
          <ul className="grid gap-3 md:grid-cols-2">
            {study.reportingViews.map((view) => (
              <li key={view.name} className="surface p-4">
                <div className="mb-2">
                  <Badge status={view.status} />
                </div>
                <p className="font-semibold text-navy-900">{view.name}</p>
                <p className="mt-2 text-sm text-muted">{view.detail}</p>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="KPI examples">
          <p className="text-sm text-muted">
            Representative KPI categories unless independently confirmed. Not presented as exact
            employer metrics.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.kpiExamples.map((kpi) => (
              <span key={kpi} className="rounded-full bg-paper-deep px-3 py-1 text-sm">
                {kpi}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Sanjay’s personal accountability">
          <BulletList items={study.accountability} />
        </Section>
        <Section title="Stakeholders">
          <ul className="grid gap-3 sm:grid-cols-2">
            {study.stakeholders.map((s) => (
              <li key={s.id} className="surface p-4">
                <p className="font-semibold text-navy-900">{s.name}</p>
                <p className="mt-1 text-sm text-muted">{s.role}</p>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Logical information model">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {study.informationModel.map((node, index) => (
              <li key={node} className="flex items-center gap-2">
                <span className="rounded-full bg-navy-900 px-3 py-1.5 text-white">{node}</span>
                {index < study.informationModel.length - 1 ? (
                  <span className="text-aqua" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Section>
        <Section title="Data-quality and reconciliation controls">
          <BulletList items={study.dataControls} />
        </Section>
        <Section title="Technology contribution">
          <BulletList items={study.technologyContribution} />
        </Section>
        <Section title="Testing and acceptance">
          <BulletList items={study.testing} />
        </Section>
        <Section title="Implementation and adoption">
          <BulletList items={[...study.implementation, ...study.adoption]} />
        </Section>
        <Section title="Self-service approach">
          <p>{study.selfService ?? "Governed views with role-appropriate access and drill-down."}</p>
        </Section>
        <Section title="Decisions supported">
          <BulletList items={study.decisionsSupported} />
        </Section>
        <Section title="Operational transition">
          <BulletList items={study.transition} />
        </Section>
        <Section title="Outcome">
          {study.outcomes.length === 0 ? (
            <p className="text-sm text-muted">
              Quantified CV outcomes are limited for this engagement. Product outcomes are framed
              from verified delivery responsibilities: governed views, reduced manual consolidation,
              clearer ownership and earlier escalation where evidenced in source material.
            </p>
          ) : (
            <ul className="grid gap-3 md:grid-cols-2">
              {study.outcomes.map((outcome) => (
                <li key={outcome.id} className="surface p-4">
                  <Badge status={outcome.status} />
                  <p className="mt-3 text-2xl font-semibold text-navy-900">{outcome.metric}</p>
                  <p className="mt-1 font-medium">{outcome.label}</p>
                  <p className="mt-2 text-sm text-muted">{outcome.context}</p>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <section className="border-t border-line py-8">
          <h2 className="text-2xl font-semibold text-navy-900">
            Personal accountability versus specialist contribution
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="surface border-l-4 border-l-teal p-5">
              <h3 className="font-semibold text-navy-900">What Sanjay personally owned</h3>
              <BulletList items={study.personalOwned} />
            </div>
            <div className="surface border-l-4 border-l-violet p-5">
              <h3 className="font-semibold text-navy-900">What specialists contributed</h3>
              <BulletList items={study.specialistContributions} />
            </div>
            <div className="surface border-l-4 border-l-amber p-5">
              <h3 className="font-semibold text-navy-900">What business owners retained</h3>
              <BulletList items={study.businessOwnersRetained} />
            </div>
          </div>
        </section>

        <Section title="Evidence classification">
          <Badge status={study.evidenceStatus} />
          <BulletList items={study.evidenceBoundaries} />
        </Section>
        <Section title="Confidentiality boundary">
          <p>{study.confidentialityBoundary}</p>
        </Section>
        <Section title="Transferability to Risk Architecture and Solutions">
          <p>{study.transferabilityRiskArchitecture}</p>
        </Section>
        <Section title="Transferability to Energy Markets and Treasury Risk">
          <p>{study.transferabilityEnergyMarkets}</p>
          <EvidenceNote className="mt-4" title="Transferable delivery pattern">
            This is not a claim of direct energy-trading or employer-specific delivery.
          </EvidenceNote>
        </Section>
        <Section title="Lessons learned">
          <BulletList items={study.lessons} />
        </Section>

        {questions.length > 0 ? (
          <Section title="Related questions this product answers">
            <ul className="space-y-3">
              {questions.map((q) => (
                <li key={q.id} className="surface p-4">
                  <p className="font-medium text-navy-900">{q.question}</p>
                  <p className="mt-2 text-sm text-muted">
                    {"shortAnswer" in q ? q.shortAnswer : q.evidenceSummary}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {related.length > 0 ? (
          <Section title="Related reporting products">
            <ul className="grid gap-3 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="surface block p-4 hover:border-teal"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
                      {item.organisation}
                    </p>
                    <p className="mt-2 font-medium text-navy-900">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}
      </div>
    </article>
  );
}
