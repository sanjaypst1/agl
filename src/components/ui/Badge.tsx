import type { EvidenceStatus } from "@/lib/types";
import { cn, formatEvidenceStatus } from "@/lib/utils";

const statusClass: Record<EvidenceStatus, string> = {
  verified: "badge-verified",
  sanitised: "badge-sanitised",
  representative: "badge-representative",
  illustrative: "badge-illustrative",
  "to-be-confirmed": "badge-to-be-confirmed",
  "confidential-detail-omitted": "badge-confidential",
};

export function Badge({
  status,
  className,
  children,
}: {
  status?: EvidenceStatus;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "badge",
        status ? statusClass[status] : "badge-sanitised",
        className,
      )}
    >
      {children ?? (status ? formatEvidenceStatus(status) : null)}
    </span>
  );
}
