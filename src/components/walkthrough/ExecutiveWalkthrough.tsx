"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { walkthroughSteps } from "@/content/walkthrough";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ExecutiveWalkthrough() {
  const [index, setIndex] = useState(0);
  const step = walkthroughSteps[index];
  const total = walkthroughSteps.length;

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(total - 1, next)));
    },
    [total],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
      if (event.key === "Home") go(0);
      if (event.key === "End") go(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  return (
    <div className="space-y-6">
      <div
        className="surface p-6 md:p-8"
        role="region"
        aria-label="Executive walkthrough"
        aria-live="polite"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-teal">
            Step {step.id} of {total}
          </p>
          <Link href="/" className="text-sm font-semibold text-muted hover:text-teal">
            Exit walkthrough
          </Link>
        </div>
        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-paper-deep"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={step.id}
          aria-label="Walkthrough progress"
        >
          <div
            className="h-full rounded-full bg-teal transition-[width] duration-300"
            style={{ width: `${(step.id / total) * 100}%` }}
          />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-navy-900">{step.title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">{step.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => go(index - 1)}
            disabled={index === 0}
          >
            Previous
          </Button>
          <Button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
          >
            Next
          </Button>
          <Button href={step.href} variant="ghost">
            Open related page
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted">
          Keyboard: Left / Right arrows. No automatic progression.
        </p>
      </div>

      <ol className="grid gap-2 md:grid-cols-2">
        {walkthroughSteps.map((item, itemIndex) => (
          <li key={item.id}>
            <button
              type="button"
              className={cn(
                "w-full rounded-2xl border px-4 py-3 text-left text-sm transition",
                itemIndex === index
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-line bg-white hover:border-teal",
              )}
              aria-current={itemIndex === index ? "step" : undefined}
              onClick={() => go(itemIndex)}
            >
              <span className="font-semibold">
                {item.id}. {item.title}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="surface p-5 print:block">
        <h3 className="font-semibold text-navy-900">Print-friendly summary</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
          {walkthroughSteps.map((item) => (
            <li key={item.id}>
              <strong className="text-navy-900">{item.title}:</strong> {item.body}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
