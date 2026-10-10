import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function PositioningBand() {
  return (
    <section className="section-space">
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow="Professional positioning"
          title="Delivery leadership without overstating specialist ownership"
        />
        <div className="surface p-6 md:p-8">
          <p className="text-lg font-medium text-navy-900">{profile.boundaryStatement}</p>
          <p className="mt-4 text-sm text-muted">{profile.valueProposition}</p>
          <ul className="mt-6 space-y-2 text-sm text-navy-800">
            <li>Product Owners own product outcomes and priority.</li>
            <li>Architects own approved architecture direction.</li>
            <li>Quantitative specialists own risk methodology and model design.</li>
            <li>Data engineers build technical pipelines and transformations.</li>
            <li>
              Sanjay owns integrated delivery of the approved solution outcome — planning,
              dependencies, governance, testing, acceptance, implementation and transition.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
