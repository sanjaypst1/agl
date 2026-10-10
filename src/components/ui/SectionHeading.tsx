import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <div className={cn("kicker-line mb-4", align === "center" && "mx-auto")} />
      <h2 className="display-title text-3xl md:text-4xl">{title}</h2>
      {lead ? <p className="lead mt-4">{lead}</p> : null}
    </div>
  );
}
