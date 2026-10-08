import Link from "next/link";

export default function LocalVerifiedRAG() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[160px]" />

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Link
          href="/"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <div className="text-lg font-semibold">
          BT<span className="text-amber-400">.</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-24 pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            RAG · Local LLM · Verification
          </p>

         <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
  <span className="text-amber-300">
    Local Verified RAG
  </span>
  <span className="text-gray-600">
    {" "}Grounded AI Answering System
  </span>
</h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            A fully local and open-source Retrieval-Augmented Generation
            pipeline designed to retrieve relevant knowledge, generate
            structured answers and verify factual claims before presenting
            them to the user.
          </p>

          {/* Metrics */}
          <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-4xl font-semibold">96.67%</p>
              <p className="mt-2 text-sm text-gray-500">
                Held-Out Accuracy
              </p>
            </div>

            <div>
              <p className="text-4xl font-semibold">96.77%</p>
              <p className="mt-2 text-sm text-gray-500">
                Held-Out F1 Score
              </p>
            </div>

            <div>
              <p className="text-4xl font-semibold">100%</p>
              <p className="mt-2 text-sm text-gray-500">
                Recall
              </p>
            </div>

            <div>
              <p className="text-4xl font-semibold">30</p>
              <p className="mt-2 text-sm text-gray-500">
                Held-Out Questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
              Project Overview
            </p>

            <h2 className="mt-5 text-4xl font-bold text-amber-100">
              Building a RAG system that verifies its own answers.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              The project started as a semantic retrieval experiment and
              evolved into a complete local RAG pipeline combining retrieval,
              structured generation, evidence filtering and Natural Language
              Inference based verification.
            </p>

            <p>
              Instead of accepting every generated answer, the system breaks
              responses into factual claims and verifies each claim against
              retrieved evidence before deciding whether the answer is safe
              enough to return.
            </p>

            <p>
              The complete system runs locally using open-source models,
              without depending on a paid LLM API.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            The Problem
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold text-amber-100">
            Semantic similarity alone does not mean a question is answerable.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm text-gray-500">
                Traditional Retrieval
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Relevant does not always mean supported.
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A question can be highly similar to a document while still
                asking for information that the document never provides.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm text-gray-500">
                Generation Risk
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                A fluent answer can still be incorrect.
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Local language models can produce plausible but unsupported
                information even when relevant context is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Pipeline
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            From user question to verified answer
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "01",
                "Semantic Retrieval",
                "The user question is embedded with all-MiniLM-L6-v2 and matched against document chunks using cosine similarity.",
              ],
              [
                "02",
                "Retrieval Gate",
                "Low-confidence retrieval results are rejected before the language model is allowed to generate an answer.",
              ],
              [
                "03",
                "Structured Generation",
                "Qwen2.5-0.5B-Instruct generates a user-facing answer together with standalone factual claims in JSON format.",
              ],
              [
                "04",
                "Evidence Relevance",
                "Candidate evidence is filtered using semantic similarity so unrelated text is not passed directly into the verifier.",
              ],
              [
                "05",
                "NLI Verification",
                "DeBERTa verifies whether each generated claim is entailed by the retrieved evidence.",
              ],
              [
                "06",
                "Claim-Level Decision",
                "Every factual claim must be individually supported before the complete response can be accepted.",
              ],
              [
                "07",
                "Repair Pass",
                "When verification fails, the model receives verifier feedback and gets one controlled opportunity to repair its answer.",
              ],
              [
                "08",
                "Deterministic Rescue",
                "Narrow deterministic rules handle selected reasoning cases such as return-window calculations and product-condition logic.",
              ],
              [
                "09",
                "Final Decision",
                "The system either returns the verified answer or refuses to answer when the available evidence is insufficient.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40"
              >
                <p className="text-sm text-gray-600">
                  {number}
                </p>

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

      {/* Architecture */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            System Architecture
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Retrieval, generation and verification working together.
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            {[
              "User Question",
              "Embedding",
              "Semantic Retrieval",
              "Top-K Context",
              "Qwen Generator",
              "Structured Claims",
              "Evidence Filter",
              "DeBERTa NLI",
              "Repair",
              "Deterministic Rescue",
              "Verified Answer",
            ].map((layer, index) => (
              <span
                key={`${layer}-${index}`}
                className="rounded-full border border-white/10 px-4 py-2 text-gray-300"
              >
                {layer}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-500">
                Retrieval Threshold
              </p>
              <p className="mt-2 text-lg font-medium">
                0.50
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-500">
                Evidence Threshold
              </p>
              <p className="mt-2 text-lg font-medium">
                0.35
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-500">
                Entailment Threshold
              </p>
              <p className="mt-2 text-lg font-medium">
                0.70
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-500">
                Retrieval
              </p>
              <p className="mt-2 text-lg font-medium">
                Top-3 Chunks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Evolution */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Engineering Process
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold">
            Improving the system through evaluation, failure analysis and
            regression testing.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "V1",
                "86.36%",
                "Initial full RAG pipeline with retrieval and claim verification.",
              ],
              [
                "V2",
                "90.91%",
                "Structured standalone claims improved verification reliability.",
              ],
              [
                "V3 / V4",
                "Regression",
                "More complex reasoning logic reduced recall and revealed the cost of overengineering.",
              ],
              [
                "Final",
                "100% Dev",
                "V2 was restored and selective deterministic rescue solved the remaining development failures.",
              ],
            ].map(([version, result, description]) => (
              <div
                key={version}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-amber-400">
                  {version}
                </p>

                <p className="mt-4 text-3xl font-semibold">
                  {result}
                </p>

                <p className="mt-4 leading-7 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Evaluation
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold">
            Tested beyond the development set.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            After the development pipeline reached 100% on its 22-question
            tuning set, a completely new 30-question held-out evaluation set
            was created and committed before running the final evaluation.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">
                96.67%
              </p>
              <p className="mt-2 text-gray-500">
                Accuracy
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">
                93.75%
              </p>
              <p className="mt-2 text-gray-500">
                Precision
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">
                100%
              </p>
              <p className="mt-2 text-gray-500">
                Recall
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">
                96.77%
              </p>
              <p className="mt-2 text-gray-500">
                F1 Score
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Held-Out Result
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-4">
              <div>
                <p className="text-3xl font-semibold">
                  15
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  True Positive
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold">
                  14
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  True Negative
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold">
                  1
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  False Positive
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold">
                  0
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  False Negative
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Failure Analysis */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
              Failure Analysis
            </p>

            <h2 className="mt-5 text-4xl font-bold">
              The remaining error revealed the next research problem.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              The single held-out false positive occurred when the user asked
              for the price of premium membership. The document did not contain
              pricing information.
            </p>

            <p>
              The model instead generated a fact about free standard shipping.
              That statement was correctly supported by the source, so the NLI
              verifier accepted it even though it did not answer the actual
              question.
            </p>

            <p>
              This identified question-to-answer relevance as a future
              improvement area while keeping the successful baseline frozen.
            </p>
          </div>
        </div>
      </section>

      {/* Key Learning */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Key Engineering Lesson
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold">
            A stronger system is not always a more complicated system.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            Several experimental versions introduced additional verification
            logic but caused measurable regressions. The final architecture
            returned to the strongest V2 baseline and added only narrow,
            isolated deterministic fallbacks. This preserved existing
            behavior while solving specific reasoning failures.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4">
          <a
            href="https://github.com/berket0934/ai-agent-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:scale-105"
          >
            View Code on GitHub
            <span>↗</span>
          </a>

          <a
            href="https://github.com/berket0934/ai-agent-project/blob/main/AI_Agent_Local_RAG_Teknik_Gelistirme_Raporu_Duzeltilmis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition duration-300 hover:border-amber-400/50 hover:bg-white/[0.05]"
          >
            Technical Report
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Technologies
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "PyTorch",
              "Hugging Face Transformers",
              "Sentence Transformers",
              "Qwen2.5",
              "DeBERTa",
              "Scikit-learn",
              "NumPy",
              "RAG",
              "Semantic Search",
              "Natural Language Inference",
              "Prompt Engineering",
              "Evaluation",
              "Git",
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl justify-between text-sm text-gray-600">
          <p>© 2026 Berke Tüylek</p>

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Back to Portfolio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}