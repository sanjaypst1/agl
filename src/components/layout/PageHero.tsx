import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: { href?: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <header className="section-space pb-10 pt-12">
      <div className="container-site">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <div className="kicker-line mb-4" />
        <h1 className="display-title max-w-4xl text-4xl md:text-5xl">{title}</h1>
        {lead ? <p className="lead mt-5">{lead}</p> : null}
        {children}
      </div>
    </header>
  );
}
