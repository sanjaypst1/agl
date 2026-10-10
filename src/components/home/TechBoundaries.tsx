import Link from "next/link";
import { energyTransferability, technologyCapabilities } from "@/content/technology";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechBoundaries() {
  const focus = technologyCapabilities.filter((item) =>
    ["power-bi", "sql", "databricks"].includes(item.id),
  );

  return (
    <section className="section-space bg-[rgba(255,255,255,0.35)]">
      <div className="container-site">
        <SectionHeading
          eyebrow="Technology capability boundaries"
          title="Power BI, SQL and Databricks — without inflated craft claims"
          lead={energyTransferability.technicalCredibility}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {focus.map((item) => (
            <article key={item.id} className="surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                {item.level}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-navy-900">{item.name}</h3>
              <p className="mt-3 text-sm text-muted">{item.positioning}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-green">
                Includes
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.does.slice(0, 5).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-amber">
                Specialist support
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.doesNot.slice(0, 4).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link href="/technology" className="font-semibold text-teal">
            Open the full technology and transferability page →
          </Link>
        </p>
      </div>
    </section>
  );
}
