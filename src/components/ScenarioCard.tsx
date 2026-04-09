import type { Scenario, ScenarioChoice } from "@/lib/scenarios";

type ScenarioCardProps = {
  scenario: Scenario;
  selectedChoiceId: string | null;
  showFeedback: boolean;
  onSelectChoice: (choice: ScenarioChoice) => void;
};

function choiceStyles({
  selected,
  disabled,
  correct,
  reveal,
}: {
  selected: boolean;
  disabled: boolean;
  correct: boolean;
  reveal: boolean;
}) {
  const base =
    "w-full rounded-2xl border px-4 py-4 text-left text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/30 sm:px-5";

  if (!reveal) {
    return [
      base,
      "border-white/10 bg-white/5 hover:bg-white/10",
      selected ? "ring-2 ring-white/30" : "",
      disabled ? "opacity-80" : "",
    ].join(" ");
  }

  if (correct) {
    return [
      base,
      "border-success/40 bg-success-soft",
      selected ? "ring-2 ring-success/40" : "",
    ].join(" ");
  }

  if (selected && !correct) {
    return [
      base,
      "border-danger/40 bg-danger-soft ring-2 ring-danger/30",
    ].join(" ");
  }

  return [base, "border-white/10 bg-white/5 opacity-80"].join(" ");
}

export function ScenarioCard({
  scenario,
  selectedChoiceId,
  showFeedback,
  onSelectChoice,
}: ScenarioCardProps) {
  const selected = scenario.choices.find((c) => c.id === selectedChoiceId);

  return (
    <div className="animate-slide-up rounded-3xl border border-white/10 bg-surface-elevated p-6 shadow-2xl shadow-black/30 sm:p-8">
      <div className="space-y-2">
        <h2 className="text-balance text-2xl font-semibold tracking-tight">
          {scenario.title}
        </h2>
        <p className="text-pretty text-base leading-relaxed text-muted">
          {scenario.situation}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {scenario.choices.map((choice) => {
          const isSelected = selectedChoiceId === choice.id;
          return (
            <button
              key={choice.id}
              type="button"
              className={choiceStyles({
                selected: isSelected,
                disabled: showFeedback,
                correct: choice.isCorrect,
                reveal: showFeedback,
              })}
              onClick={() => onSelectChoice(choice)}
              disabled={showFeedback}
            >
              {choice.text}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {!showFeedback ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
            Pick the response you think is best.
          </div>
        ) : (
          <div className="space-y-3 animate-fade-in">
            <div
              className={[
                "rounded-2xl border p-4 text-sm",
                selected?.isCorrect
                  ? "border-success/40 bg-success-soft text-ink"
                  : "border-danger/40 bg-danger-soft text-ink",
              ].join(" ")}
            >
              <div className="font-semibold">
                {selected?.isCorrect ? "Good choice!" : "Not the best choice."}
              </div>
              <div className="mt-1 text-muted">{selected?.feedback}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
              <span className="font-semibold text-ink">Tip:</span> {scenario.tip}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

