import { energyTransferability } from "@/content/technology";
import { closingNarrative } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TransferabilityBand() {
  return (
    <section className="section-space" id="transferability">
      <div className="container-site">
        <SectionHeading
          eyebrow="Transferable delivery pattern"
          title="Market, treasury and energy-market transferability"
          lead={energyTransferability.statement}
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="surface p-5">
            <h3 className="font-semibold text-navy-900">Banking / UBS reporting objects</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {energyTransferability.ubsObjects.map((item) => (
                <li key={item} className="rounded-full bg-paper-deep px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold text-navy-900">Banking trading objects</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {energyTransferability.banking.map((item) => (
                <li key={item} className="rounded-full bg-blue-soft px-3 py-1 text-sm text-blue">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="surface border-l-4 border-l-teal p-5">
            <h3 className="font-semibold text-navy-900">
              Energy Markets and Treasury Risk objects
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {energyTransferability.emtrObjects.map((item) => (
                <li key={item} className="rounded-full bg-teal-soft px-3 py-1 text-sm text-teal">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {energyTransferability.energyMarkets.map((item) => (
                <li key={item} className="rounded-full bg-violet-soft px-3 py-1 text-sm text-violet">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">{closingNarrative.transfer}</p>
          </article>
        </div>
        <p className="mt-6 max-w-4xl text-sm text-muted">{energyTransferability.boundary}</p>
      </div>
    </section>
  );
}
