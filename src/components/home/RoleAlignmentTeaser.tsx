import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { roleAlignments } from "@/content/role-alignment";

const teaserIds = [
  "solution-delivery",
  "product-partnership",
  "reporting-analytics",
  "vendor-management",
  "governance-assurance",
  "continuous-improvement",
];

export function RoleAlignmentTeaser() {
  const items = roleAlignments.filter((item) => teaserIds.includes(item.id));

  return (
    <section className="section-space">
      <div className="container-site">
        <SectionHeading
          eyebrow="Role alignment"
          title="Six capability areas senior risk-solutions leaders evaluate"
          lead="Mapped to verified experience without a fake match percentage."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="surface p-5">
              <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.requires}</p>
              <p className="mt-3 text-sm font-medium text-teal">{item.level}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/role-alignment">Explore full role alignment</Button>
          <Link href="/technology" className="self-center text-sm font-semibold text-teal">
            Technology and domain depth →
          </Link>
        </div>
      </div>
    </section>
  );
}
