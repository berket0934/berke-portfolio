import Link from "next/link";

export default function FootballXGAnalytics() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Link
          href="/"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <div className="text-lg font-semibold">
          BT<span className="text-blue-500">.</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-24 pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Sports Analytics · Statistical Modeling
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            Football xG Analytics
            <span className="text-gray-600"> Double Pressure Model</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            A football analytics system that collects match data, analyzes
            expected goals and recent team performance, and applies a
            rule-based statistical model to identify high-scoring match
            candidates.
          </p>

          {/* Metrics */}
          <div className="mt-14 flex flex-wrap gap-12 border-t border-white/10 pt-10">
            <div>
              <p className="text-4xl font-semibold">5</p>
              <p className="mt-2 text-sm text-gray-500">European Leagues</p>
            </div>

            <div>
              <p className="text-4xl font-semibold">4</p>
              <p className="mt-2 text-sm text-gray-500">
                Match Rolling Window
              </p>
            </div>

            <div>
              <p className="text-4xl font-semibold">xG</p>
              <p className="mt-2 text-sm text-gray-500">
                Core Performance Metric
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
              Project Overview
            </p>

            <h2 className="mt-5 text-4xl font-bold">
              Turning football data into measurable signals.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              The project collects historical football match data from
              Understat, including goals and expected goals (xG) for both
              teams.
            </p>

            <p>
              Team-level rolling statistics are calculated from previous
              matches to identify situations where both teams show strong
              attacking production and a meaningful difference between
              expected and actual goals.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Dataset
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Five major European leagues.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Premier League",
              "La Liga",
              "Bundesliga",
              "Serie A",
              "Ligue 1",
            ].map((league) => (
              <div
                key={league}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="font-medium">{league}</p>
                <p className="mt-2 text-sm text-gray-500">2023 Season</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Pipeline
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            How the analysis works
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "01",
                "Data Collection",
                "Match results and expected goals are collected from Understat.",
              ],
              [
                "02",
                "Match Processing",
                "Home and away goals, xG and total match statistics are structured with Pandas.",
              ],
              [
                "03",
                "Team Transformation",
                "Match-level data is converted into individual team performance records.",
              ],
              [
                "04",
                "Rolling Metrics",
                "Previous four matches are used to calculate rolling xG, goals and xG-goal difference.",
              ],
              [
                "05",
                "Double Pressure Filter",
                "Both teams must satisfy the predefined attacking production and performance thresholds.",
              ],
              [
                "06",
                "Outcome Evaluation",
                "Filtered matches are evaluated against the Over 2.5 goals outcome.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <p className="text-sm text-gray-600">{number}</p>

                <h3 className="mt-4 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Logic */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Model Logic
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Double Pressure Filter
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A match is selected only when both teams independently meet the
            defined rolling-performance conditions based on their previous
            four matches.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                xG − Goals Difference
              </p>

              <p className="mt-4 text-4xl font-semibold">
                ≥ 3.5
              </p>

              <p className="mt-3 leading-7 text-gray-400">
                Required for both the home and away team across their
                previous four matches.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Rolling xG Production
              </p>

              <p className="mt-4 text-4xl font-semibold">
                ≥ 10.0
              </p>

              <p className="mt-3 leading-7 text-gray-400">
                Each team must generate at least 10 expected goals across its
                previous four matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important implementation detail */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
              Feature Engineering
            </p>

            <h2 className="mt-5 text-4xl font-bold">
              Preventing future-data leakage.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-400">
              Rolling statistics are shifted by one match before being merged
              back into the dataset. This ensures that the current match does
              not contribute to the features used to evaluate that same match.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Technologies
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "BeautifulSoup",
              "Requests",
              "Web Scraping",
              "Data Analysis",
              "Feature Engineering",
              "Sports Analytics",
              "xG Analytics",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm leading-7 text-gray-500">
              This project is a rule-based statistical analytics model rather
              than a machine learning prediction model. Its focus is data
              collection, feature engineering, rolling statistical analysis
              and rule-based filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl justify-between text-sm text-gray-600">
          <p>© 2026 Berke Tüylek</p>

          <Link href="/" className="transition hover:text-white">
            Back to Portfolio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}