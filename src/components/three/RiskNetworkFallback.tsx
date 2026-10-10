import { sourceToDecisionFlow } from "@/content/delivery";

export function RiskNetworkFallback() {
  return (
    <div className="surface p-6" role="img" aria-label="Accessible alternative to the Risk Data to Decision Network">
      <p className="text-sm font-semibold text-navy-900">Accessible network summary</p>
      <p className="mt-2 text-sm text-muted">
        Information moves from source systems through ingestion, transformation, control checks,
        analytics and reporting into decision forums, corrective actions and operational support.
      </p>
      <ol className="mt-4 space-y-2 text-sm text-muted">
        {sourceToDecisionFlow.map((item, index) => (
          <li key={item.id}>
            <span className="font-semibold text-navy-900">
              {index + 1}. {item.label}:
            </span>{" "}
            {item.detail}
          </li>
        ))}
      </ol>
    </div>
  );
}
