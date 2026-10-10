"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { caseStudies } from "@/content/case-studies";
import {
  interviewQuestionTags,
  interviewQuestions,
} from "@/content/interview-questions";

export function QuestionExplorer() {
  const [tag, setTag] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return interviewQuestions.filter((item) => {
      if (tag !== "all" && !item.tags.includes(tag)) return false;
      if (
        query &&
        !`${item.question} ${item.evidenceSummary}`.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [tag, query]);

  return (
    <div className="space-y-6" id="questions">
      <div className="surface p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_0.4fr]">
          <label className="text-sm font-medium">
            Search questions
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-white px-3 py-2"
              placeholder="e.g. Power BI, lineage, hypercare"
            />
          </label>
          <label className="text-sm font-medium">
            Capability filter
            <select
              className="mt-2 w-full rounded-xl border border-line bg-white px-3 py-2"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
            >
              <option value="all">All topics</option>
              {interviewQuestionTags.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((item) => {
          const studies = caseStudies.filter((study) =>
            item.caseStudyIds.includes(study.id),
          );
          return (
            <article key={item.id} className="surface p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tagName) => (
                  <span
                    key={tagName}
                    className="rounded-full bg-blue-soft px-2.5 py-1 text-xs font-semibold text-blue"
                  >
                    {tagName}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-navy-900">{item.question}</h3>
              <p className="mt-3 text-sm text-muted">{item.evidenceSummary}</p>
              <p className="mt-2 text-sm text-muted">{item.experienceNote}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {studies.map((study) => (
                  <Link
                    key={study.id}
                    href={`/case-studies/${study.slug}`}
                    className="font-semibold text-teal hover:underline"
                  >
                    {study.organisation} case study
                  </Link>
                ))}
              </div>
            </article>
          );
        })}
        {filtered.length === 0 ? (
          <p className="surface p-6 text-sm text-muted">No questions match the current filters.</p>
        ) : null}
      </div>
    </div>
  );
}
