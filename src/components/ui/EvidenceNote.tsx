import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function EvidenceNote({
  children,
  className,
  title = "Evidence note",
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <aside
      className={cn(
        "surface flex gap-3 border-l-4 border-l-teal p-4 text-sm text-muted",
        className,
      )}
      aria-label={title}
    >
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
      <div>
        <p className="mb-1 font-semibold text-navy-900">{title}</p>
        <div className="prose-site text-sm">{children}</div>
      </div>
    </aside>
  );
}
