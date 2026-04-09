import Link from "next/link";

type ResultsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function firstString(v: string | string[] | undefined): string | undefined {
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return v[0];
  return undefined;
}

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const sp = (await searchParams) ?? {};
  const score = Number(firstString(sp.score) ?? "0");
  const total = Number(firstString(sp.total) ?? "4");

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const message =
    pct >= 100
      ? "Perfect score. You're ready to be a positive force online."
      : pct >= 75
        ? "Nice work. Keep practicing kindness, safety, and critical thinking online."
        : pct >= 50
          ? "Good start. Review the tips and try again—you've got this."
          : "Everyone learns. Use the tips to level up your digital citizenship.";

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="w-full animate-slide-up rounded-3xl border border-white/10 bg-surface-elevated p-6 shadow-2xl shadow-black/30 sm:p-10">
        <div className="space-y-4">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted">
            Results
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Your score: {score}/{total}
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {message}
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between text-sm text-muted">
              <div>Progress</div>
              <div className="tabular-nums">{pct}%</div>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/scenarios"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Restart
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-ink transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Back to Home
            </Link>
          </div>

          <div className="text-sm text-muted">
            Remember: what you do online affects real people. Be kind, be safe,
            and think before you share.
          </div>
        </div>
      </div>
    </main>
  );
}

