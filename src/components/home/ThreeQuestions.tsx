import Link from "next/link";
import { threeQuestions } from "@/content/three-questions";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ThreeQuestions() {
  return (
    <section className="section-space pt-4" id="three-questions">
      <div className="container-site">
        <SectionHeading
          eyebrow="Evidence first"
          title="Three questions this portfolio answers"
          lead="Personal delivery, market-risk and treasury context, and transparent Power BI / SQL / Databricks boundaries."
        />
        <div className="mt-10 space-y-5">
          {threeQuestions.map((item) => (
            <article key={item.id} className="surface p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet">
                Question {item.number}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-navy-900">{item.question}</h3>
              <p className="mt-4 max-w-4xl text-muted">{item.shortAnswer}</p>
              {"boundary" in item && item.boundary ? (
                <p className="mt-3 rounded-2xl bg-amber-soft/80 px-4 py-3 text-sm text-amber">
                  {item.boundary}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                {item.evidenceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-line bg-white px-3 py-1.5 font-semibold text-teal hover:border-teal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
