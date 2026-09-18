import Link from "next/link";

export default function HeartRiskAI() {
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
            Deep Learning · Healthcare Data
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            HeartRisk AI
            <span className="text-gray-600">
              {" "}Cardiovascular Risk Prediction
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            A deep neural network that analyzes structured clinical data to
            predict the presence of heart disease using preprocessing,
            feature transformation and binary classification.
          </p>

          {/* Metrics */}
          <div className="mt-14 flex flex-wrap gap-12 border-t border-white/10 pt-10">
            <div>
              <p className="text-4xl font-semibold">87%</p>
              <p className="mt-2 text-sm text-gray-500">Test Accuracy</p>
            </div>

            <div>
              <p className="text-4xl font-semibold">88%</p>
              <p className="mt-2 text-sm text-gray-500">Recall</p>
            </div>

            <div>
              <p className="text-4xl font-semibold">13</p>
              <p className="mt-2 text-sm text-gray-500">Clinical Features</p>
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
              From clinical data to risk prediction.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              The project uses the UCI Cleveland Heart Disease dataset,
              containing clinical features such as age, cholesterol,
              blood pressure and maximum heart rate.
            </p>

            <p>
              Numerical and categorical features are processed separately,
              combined into a single feature representation and passed into
              a fully connected deep neural network.
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
            How the model works
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "01",
                "Clinical Data",
                "Patient features are loaded from the Cleveland Heart Disease dataset.",
              ],
              [
                "02",
                "Data Cleaning",
                "Rows containing missing values are removed before training.",
              ],
              [
                "03",
                "Feature Processing",
                "Numerical variables are standardized and categorical variables are one-hot encoded.",
              ],
              [
                "04",
                "Train / Test Split",
                "The processed dataset is divided into training and testing subsets.",
              ],
              [
                "05",
                "Deep Neural Network",
                "Fully connected layers learn relationships between clinical features and risk.",
              ],
              [
                "06",
                "Evaluation",
                "Performance is measured using accuracy, precision, recall and classification metrics.",
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

      {/* Architecture */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Model Architecture
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Fully connected Deep Neural Network
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            {[
              "Input Features",
              "Dense · 64",
              "ReLU",
              "Dropout · 0.30",
              "Dense · 32",
              "ReLU",
              "Dropout · 0.20",
              "Sigmoid Output",
            ].map((layer, index) => (
  <span
    key={`${layer}-${index}`}
                className="rounded-full border border-white/10 px-4 py-2 text-gray-300"
              >
                {layer}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-500">Optimizer</p>
              <p className="mt-2 text-lg font-medium">Adam</p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-500">Loss Function</p>
              <p className="mt-2 text-lg font-medium">
                Binary Crossentropy
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-gray-500">Training</p>
              <p className="mt-2 text-lg font-medium">50 Epochs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            Results
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold">
            Reliable classification performance on unseen patient data.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">87%</p>
              <p className="mt-2 text-gray-500">Accuracy</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">88%</p>
              <p className="mt-2 text-gray-500">Recall</p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl leading-8 text-gray-400">
            The model achieved strong overall classification performance while
            maintaining high recall, an important metric for identifying
            positive cases within the dataset.
          </p>
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
              "TensorFlow",
              "Keras",
              "Scikit-learn",
              "Pandas",
              "NumPy",
              "Deep Learning",
              "Data Preprocessing",
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

      {/* Disclaimer */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-3xl text-sm leading-6 text-gray-600">
            This project was developed for educational and machine learning
            research purposes and is not intended to provide medical diagnosis
            or clinical advice.
          </p>
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