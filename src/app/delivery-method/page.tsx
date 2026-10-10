import { deliveryPhilosophy, reportingLifecyclePhases } from "@/content/delivery";
import { selfServiceMaturity, selfServiceRequirements, aiBoundaries } from "@/content/self-service";
import { PageHero } from "@/components/layout/PageHero";
import { LifecycleStepper } from "@/components/home/LifecycleStepper";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delivery Method",
  description:
    "From business problem to trusted self-service reporting — a 20-phase reporting-product lifecycle with accountability boundaries.",
  path: "/delivery-method",
});

export default function DeliveryMethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery method"
        title="From business problem to trusted self-service reporting"
        lead="A practical lifecycle covering decisions, KPIs, lineage, reconciliation, UAT, adoption and BAU ownership — with clear specialist boundaries."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Delivery Method" },
        ]}
      />
      <LifecycleStepper />
      <div className="container-site space-y-10 pb-16">
        <section className="space-y-4">
          <h2 className="display-title text-3xl">Full reporting-product lifecycle</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {reportingLifecyclePhases.map((phase) => (
              <article key={phase.id} className="surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                  Phase {phase.order}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-navy-900">{phase.title}</h3>
                <dl className="mt-4 space-y-2 text-sm text-muted">
                  <div>
                    <dt className="font-semibold text-navy-900">Purpose</dt>
                    <dd>{phase.purpose}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">Sanjay’s responsibility</dt>
                    <dd>{phase.sanjay}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">Specialist contribution</dt>
                    <dd>{phase.specialist}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">Artefacts</dt>
                    <dd>{phase.artefacts.join("; ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">Controls</dt>
                    <dd>{phase.controls.join("; ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">Acceptance evidence</dt>
                    <dd>{phase.acceptance.join("; ")}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="surface p-6 md:p-8" id="self-service">
          <h2 className="text-2xl font-semibold text-navy-900">
            Controlled self-service, not uncontrolled data access
          </h2>
          <p className="mt-3 text-muted">
            Self-service means authorised users can answer approved business questions using governed
            definitions, reusable datasets and role-appropriate reporting views.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {selfServiceRequirements.map((item) => (
              <li key={item} className="rounded-2xl bg-paper-deep/70 px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <ol className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {selfServiceMaturity.map((level) => (
              <li key={level.level} className="rounded-2xl border border-line p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                  Level {level.level}
                </p>
                <h3 className="mt-2 font-semibold text-navy-900">{level.title}</h3>
                <p className="mt-2 text-sm text-muted">{level.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-coral-soft/60 p-4">
              <h3 className="font-semibold text-navy-900">AI must not replace</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {aiBoundaries.mustNotReplace.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-green-soft/70 p-4">
              <h3 className="font-semibold text-navy-900">Appropriate AI examples</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {aiBoundaries.appropriate.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          {deliveryPhilosophy.map((item) => (
            <article key={item.title} className="surface p-6">
              <h2 className="text-lg font-semibold text-navy-900">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <EvidenceNote>
          This method is synthesised from verified delivery patterns across the five reporting
          products. It is not an employer methodology document.
        </EvidenceNote>
      </div>
    </>
  );
}
