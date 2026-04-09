/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProgressPill } from "@/components/ProgressPill";
import { ScenarioCard } from "@/components/ScenarioCard";
import { SCENARIOS, type ScenarioChoice } from "@/lib/scenarios";

export default function ScenariosPage() {
  const router = useRouter();
  const scenarios = useMemo(() => SCENARIOS, []);
  const total = scenarios.length;

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const current = scenarios[index];
  const currentNumber = index + 1;
  const isLast = index === total - 1;

  function onSelectChoice(choice: ScenarioChoice) {
    if (showFeedback) return;
    setSelectedChoiceId(choice.id);
    setShowFeedback(true);
    if (choice.isCorrect) setScore((s) => s + 1);
  }

  function next() {
    if (!showFeedback) return;
    if (isLast) {
      router.push(`/results?score=${score}&total=${total}`);
      return;
    }
    setIndex((i) => i + 1);
    setSelectedChoiceId(null);
    setShowFeedback(false);
  }

  return (
    <main className="flex flex-1 flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <div className="text-sm text-muted">Digital Citizenship Challenge</div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Make your choice
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
            Score: <span className="font-semibold">{score}</span>/{total}
          </div>
          <Link
            href="/"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted transition hover:bg-white/10"
          >
            Home
          </Link>
        </div>
      </div>

      <ProgressPill current={currentNumber} total={total} />

      <ScenarioCard
        scenario={current}
        selectedChoiceId={selectedChoiceId}
        showFeedback={showFeedback}
        onSelectChoice={onSelectChoice}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          {showFeedback
            ? "Ready when you are."
            : "Choose an option to see feedback."}
        </div>
        <button
          type="button"
          onClick={next}
          disabled={!showFeedback}
          className={[
            "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/30",
            showFeedback
              ? "bg-accent text-white hover:brightness-110"
              : "cursor-not-allowed border border-white/10 bg-white/5 text-muted opacity-70",
          ].join(" ")}
        >
          {isLast ? "Finish" : "Next"}
        </button>
      </div>
    </main>
  );
}

