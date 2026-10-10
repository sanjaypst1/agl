import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AccountabilityBand() {
  return (
    <section className="section-space bg-[rgba(255,255,255,0.35)]">
      <div className="container-site">
        <SectionHeading
          eyebrow="Accountability boundaries"
          title="Personal delivery versus specialist contribution"
        />
        <blockquote className="surface mt-8 max-w-4xl border-l-4 border-l-violet p-6 text-xl leading-relaxed text-navy-900 md:p-8">
          “{profile.boundaryStatement}”
        </blockquote>
        <p className="mt-6 max-w-4xl text-muted">{profile.firstLinePositioning}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "What Sanjay personally owned",
              items: [
                "Discovery and decision framing",
                "KPI and metric definition",
                "Source and owner identification",
                "Validation and discrepancy investigation",
                "UAT, readiness, adoption and BAU transition",
              ],
            },
            {
              title: "What specialists contributed",
              items: [
                "Quantitative methodology",
                "Data engineering and pipelines",
                "Advanced SQL / DAX / Spark",
                "Architecture approval",
                "Cybersecurity assessment",
              ],
            },
            {
              title: "What business owners retained",
              items: [
                "Product priorities",
                "Risk acceptance",
                "Trading and treasury decisions",
                "Policy ownership",
                "Operational ownership",
              ],
            },
          ].map((column) => (
            <article key={column.title} className="surface p-5">
              <h3 className="font-semibold text-navy-900">{column.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
