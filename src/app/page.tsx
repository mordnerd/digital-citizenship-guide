import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <div className="w-full animate-slide-up">
        <div className="rounded-3xl border border-white/10 bg-surface-elevated p-6 shadow-2xl shadow-black/30 sm:p-10">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Digital Citizenship Interactive Guide
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Practice making smart, kind, and responsible choices online.
                You’ll read real-life situations and pick what you think is the
                best response—then get quick feedback and a helpful tip.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/scenarios"
                className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Start
              </Link>
              <div className="text-sm text-muted">
                4 scenarios • instant feedback • score + progress
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Be respectful</div>
                <div className="mt-1 text-sm text-muted">
                  Communicate with empathy—even when you disagree.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Be critical</div>
                <div className="mt-1 text-sm text-muted">
                  Check sources and pause before you share.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Be safe</div>
                <div className="mt-1 text-sm text-muted">
                  Protect personal information and your future self.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

