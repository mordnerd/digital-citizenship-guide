type ProgressPillProps = {
  current: number;
  total: number;
};

export function ProgressPill({ current, total }: ProgressPillProps) {
  const pct = total <= 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center justify-between text-sm text-muted">
        <div>
          Scenario <span className="font-semibold text-ink">{current}</span> of{" "}
          <span className="font-semibold text-ink">{total}</span>
        </div>
        <div className="tabular-nums">{pct}%</div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

