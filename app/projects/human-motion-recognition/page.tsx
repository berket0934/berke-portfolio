import Link from "next/link";

export default function HumanMotionRecognition() {
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
            Deep Learning · Sensor Analytics
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            Human Motion Recognition
            <span className="text-gray-600"> Using IMU Sensors</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            A deep learning-based human activity recognition system that
            classifies motion patterns from multichannel IMU sensor data using
            a 1D Convolutional Neural Network.
          </p>

          {/* Metrics */}
          <div className="mt-14 flex flex-wrap gap-12 border-t border-white/10 pt-10">
            <div>
              <p className="text-4xl font-semibold">96.74%</p>
              <p className="mt-2 text-sm text-gray-500">Test Accuracy</p>
            </div>

            <div>
              <p className="text-4xl font-semibold">0.92</p>
              <p className="mt-2 text-sm text-gray-500">Average F1 Score</p>
            </div>

            <div>
              <p className="text-4xl font-semibold">5</p>
              <p className="mt-2 text-sm text-gray-500">Activities</p>
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
              From raw sensor data to motion classification.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              The project uses acceleration data collected from IMU sensors
              positioned on the lower back and thigh.
            </p>

            <p>
              Raw time-series signals are segmented into overlapping windows,
              normalized and processed by a multi-layer 1D CNN to identify
              human activities.
            </p>
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
            How the system works
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "IMU Data", "Multichannel acceleration data from body-mounted sensors."],
              ["02", "Windowing", "500-sample sliding windows with 50% overlap."],
              ["03", "Normalization", "Z-score normalization applied to each window."],
              ["04", "1D CNN", "Feature extraction using convolutional neural network layers."],
              ["05", "Classification", "Softmax output predicts the human activity class."],
              ["06", "Evaluation", "Performance evaluated using accuracy and F1 score."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <p className="text-sm text-gray-600">{number}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Model Architecture
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Multi-layer 1D CNN
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            {[
              "Input",
              "Conv1D · 32",
              "Conv1D · 64",
              "Conv1D · 128",
              "Batch Normalization",
              "Max Pooling",
              "Dropout",
              "Global Average Pooling",
              "Softmax",
            ].map((layer) => (
              <span
                key={layer}
                className="rounded-full border border-white/10 px-4 py-2 text-gray-300"
              >
                {layer}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Results
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Strong performance across multiple activities.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Lying", "100%"],
              ["Sitting", "98.38%"],
              ["Standing", "93.75%"],
              ["Walking", "94.74%"],
              ["Running", "97.21%"],
            ].map(([activity, accuracy]) => (
              <div
                key={activity}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-2xl font-semibold">{accuracy}</p>
                <p className="mt-2 text-sm text-gray-500">{activity}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-8 text-gray-400">
            The main classification challenge occurred between walking and
            standing, while activities such as lying and running achieved
            particularly strong performance.
          </p>
        </div>
      </section>
{/* GitHub */}
<section className="relative z-10 px-6 py-12">
  <div className="mx-auto max-w-6xl">
    <a
      href="https://github.com/berket0934/human-motion-recognition-cnn"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:scale-105"
    >
      View Code on GitHub
      <span>↗</span>
    </a>
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
              "MATLAB",
              "Simulink",
              "Deep Learning",
              "1D CNN",
              "IMU Sensors",
              "Time-Series Analysis",
              "Signal Processing",
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

          <Link href="/" className="transition hover:text-white">
            Back to Portfolio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}