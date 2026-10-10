import Link from "next/link";
import { roleAlignments } from "@/content/role-alignment";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewIds = [
  "solution-delivery",
  "product-partnership",
  "reporting-analytics",
  "vendor-management",
  "governance",
  "continuous-improvement",
];

export function RoleAlignmentPreview() {
  const items = roleAlignments.filter((item) => previewIds.includes(item.id));

  return (
    <section className="section-space section-muted">
      <div className="container-site">
        <SectionHeading
          eyebrow="Role alignment"
          title="Six capability areas that map to Senior Risk Solutions Lead expectations"
          lead="Evidence is paraphrased against role expectations without inventing a match percentage."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet">
                {item.level}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.evidence}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/role-alignment"
            className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
          >
            Explore the full role-alignment matrix
          </Link>
        </div>
      </div>
    </section>
  );
}
