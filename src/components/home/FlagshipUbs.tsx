import Link from "next/link";
import { getCaseStudy } from "@/content/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function FlagshipUbs() {
  const study = getCaseStudy("ubs");
  if (!study) return null;

  return (
    <section className="section-space">
      <div className="container-site">
        <SectionHeading
          eyebrow="Flagship personal delivery"
          title={study.title}
          lead={study.subtitle}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface space-y-4 p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              <Badge status="sanitised" />
              <Badge status="verified">Personally delivered</Badge>
            </div>
            <p className="rounded-2xl bg-amber-soft/70 px-4 py-3 text-sm text-amber">
              This was a consolidated risk, control and delivery-readiness reporting solution. It
              was not a quantitative market-risk calculation engine.
            </p>
            <p className="text-muted">{study.problem}</p>
            <h3 className="text-lg font-semibold text-navy-900">Representative reporting views</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {study.reportingViews.slice(0, 6).map((view) => (
                <li key={view.name} className="rounded-2xl bg-paper-deep/70 p-3 text-sm">
                  <p className="font-semibold text-navy-900">{view.name}</p>
                  <p className="mt-1 text-muted">{view.detail}</p>
                </li>
              ))}
            </ul>
            <Button href="/case-studies/ubs">Read the full UBS product story</Button>
          </div>
          <aside className="space-y-4">
            <div className="surface p-5">
              <h3 className="font-semibold text-navy-900">What I personally owned</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {study.personalOwned.slice(0, 6).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="surface p-5">
              <h3 className="font-semibold text-navy-900">Decisions supported</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {study.decisionsSupported.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <Link href="/case-studies?filter=ubs" className="text-sm font-semibold text-teal">
              Compare transferable delivery pattern →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
