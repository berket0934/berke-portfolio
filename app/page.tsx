import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background glow */}
      <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Navbar */}
      <nav className="fixed left-1/2 top-5 z-50 flex w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl">
        <div className="text-lg font-semibold tracking-tight">
          BT<span className="text-blue-500">.</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400 sm:gap-6">

  <a href="#projects" className="transition hover:text-white">
    Projects
  </a>

  <a href="#about" className="transition hover:text-white">
    About
  </a>

  <a href="#contact" className="transition hover:text-white">
    Contact
  </a>

  <div className="hidden h-5 w-px bg-white/10 sm:block" />

  <a
    href="https://github.com/berket0934"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="transition hover:text-white"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/berke-t%C3%BCylek-a2893a209/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="transition hover:text-white"
  >
    <FaLinkedin size={18} />
  </a>

</div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[85vh] items-center px-6">
        <div className="mx-auto w-full max-w-6xl">

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-blue-500">
            AI · Machine Learning · Data
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Building intelligent
            <br />
            systems with
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}data.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            I'm Berke Tüylek, an Electronics & Communication Engineering
            student focused on machine learning, deep learning and
            data-driven software.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-medium text-gray-300 transition duration-300 hover:border-white/50 hover:text-white"
            >
              Contact Me
            </a>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>
<div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
 {/* Project 01 */}
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]">

  <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
    <img
      src="/projects/human-motion.png"
      alt="Human Motion Recognition project"
      className="aspect-video w-full object-cover"
    />
  </div>

  <p className="text-sm text-gray-500">01</p>

  <h3 className="mt-5 text-3xl font-semibold">
    Human Motion Recognition
  </h3>

  <p className="mt-4 max-w-2xl leading-7 text-gray-400">
    Deep learning-based human activity recognition system using
    multichannel IMU sensor data and a 1D convolutional neural network.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      1D CNN
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      MATLAB
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      Simulink
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      IMU
    </span>
  </div>

  <div className="mt-10 flex gap-10">
    <div>
      <p className="text-3xl font-semibold">96.74%</p>
      <p className="mt-1 text-sm text-gray-500">Accuracy</p>
    </div>

    <div>
      <p className="text-3xl font-semibold">0.92</p>
      <p className="mt-1 text-sm text-gray-500">F1 Score</p>
    </div>
  </div>

  <a
    href="/projects/human-motion-recognition"
    className="mt-auto pt-10 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
  >
    View Case Study
    <span>→</span>
  </a>
</div>


{/* Project 02 */}
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]">

  <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
    <img
      src="/projects/heart-risk.png"
      alt="HeartRisk AI project"
      className="aspect-video w-full object-cover"
    />
  </div>

  <p className="text-sm text-gray-500">02</p>

  <h3 className="mt-5 text-3xl font-semibold">
    HeartRisk AI
  </h3>

  <p className="mt-4 max-w-2xl leading-7 text-gray-400">
    Deep neural network for heart disease risk prediction using
    clinical patient data and structured preprocessing techniques.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      TensorFlow
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      Keras
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      Scikit-learn
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      Python
    </span>
  </div>

  <div className="mt-10 flex gap-10">
    <div>
      <p className="text-3xl font-semibold">87%</p>
      <p className="mt-1 text-sm text-gray-500">Accuracy</p>
    </div>

    <div>
      <p className="text-3xl font-semibold">88%</p>
      <p className="mt-1 text-sm text-gray-500">Recall</p>
    </div>
  </div>

  <a
    href="/projects/heart-risk-ai"
    className="mt-auto pt-10 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
  >
    View Case Study
    <span>→</span>
  </a>
</div>


{/* Project 03 */}
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]">
<div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
  <img
    src="/projects/football-xg.png"
    alt="Football xG Analytics project"
    className="aspect-video w-full object-cover"
  />
</div>
  <p className="text-sm text-gray-500">03</p>

  <h3 className="mt-5 text-3xl font-semibold">
    Football xG Analytics
  </h3>

  <p className="mt-4 max-w-2xl leading-7 text-gray-400">
    Football analytics project using expected goals, rolling team performance
    and statistical filtering to identify high-scoring match candidates.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      Python
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      Pandas
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      Web Scraping
    </span>
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
      xG Analytics
    </span>
  </div>

  <div className="mt-10">
    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
      Statistical Modeling · Sports Analytics
    </p>
  </div>

  <a
    href="/projects/football-xg-analytics"
    className="mt-auto pt-10 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
  >
    View Case Study
    <span>→</span>
  </a>

</div>
</div>

</div>
</section>
{/* About */}
<section id="about" className="relative z-10 px-6 py-32">
  <div className="mx-auto max-w-6xl">

    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
      About Me
    </p>

    <div className="grid gap-16 lg:grid-cols-2">

      {/* About text */}
      <div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Engineering mindset.
          <br />
          AI-driven curiosity.
        </h2>

        <p className="mt-8 text-lg leading-8 text-gray-400">
          I'm Berke Tüylek, an Electronics & Communication Engineering
          student at Istanbul Technical University with a growing focus on
          artificial intelligence, machine learning and data-driven software.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-400">
          I enjoy turning data into practical systems, experimenting with
          deep learning models and building projects across sensor analytics,
          healthcare data and sports analytics.
          </p>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
  <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
    Education
  </p>

  <h3 className="mt-4 text-xl font-semibold">
    Istanbul Technical University
  </h3>

  <p className="mt-2 text-gray-400">
    B.Sc. Electronics & Communication Engineering
  </p>

  <p className="mt-4 text-sm leading-6 text-gray-500">
    Focused on artificial intelligence, machine learning, signal processing,
    data analytics and software development.
  </p>
</div>
      </div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
  <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
    Experience
  </p>

  <div className="mt-5 space-y-6">

    <div>
      <h3 className="text-lg font-semibold">
        Garanti BBVA Technology
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        IT Operations · 1 Year
      </p>
      <p className="mt-3 leading-7 text-gray-400">
        Worked across IT operations, infrastructure, troubleshooting,
        collaboration tools and enterprise technology environments.
      </p>
    </div>

    <div className="border-t border-white/10 pt-6">
      <h3 className="text-lg font-semibold">
        Baykar Technology
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Technology Internship · 4 Months
      </p>
      <p className="mt-3 leading-7 text-gray-400">
        Gained hands-on experience in a technology-focused engineering
        environment while contributing to technical projects and workflows.
      </p>
    </div>

  </div>
</div>
      {/* Skills */}
<div>
  <p className="mb-6 text-sm uppercase tracking-[0.25em] text-gray-500">
    Technologies
  </p>

  <div className="flex flex-wrap gap-3">
    {[
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Deep Learning",
      "Machine Learning",
      "1D CNN",
      "MATLAB",
      "Simulink",
      "Data Analysis",
      "Next.js",
    ].map((skill) => (
      <span
        key={skill}
        className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition hover:border-blue-500/40 hover:text-white"
      >
        {skill}
      </span>
    ))}
  </div>

  {/* Currently Exploring */}
  <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
      Currently Exploring
    </p>

    <div className="mt-5 flex flex-wrap gap-3">
      {[
        "Deep Learning",
        "AI Systems",
        "Time-Series Modeling",
        "Data Engineering",
        "Applied Machine Learning",
      ].map((topic) => (
        <span
          key={topic}
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
        >
          {topic}
        </span>
      ))}
    </div>
  </div>
</div>

    </div>
  </div>
</section>
{/* Contact */}
<section id="contact" className="relative z-10 px-6 py-32">
  <div className="mx-auto max-w-6xl">

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 sm:p-14">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
        Contact
      </p>

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Let's build something interesting.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        I'm open to opportunities in artificial intelligence, machine learning,
        data and software development.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

  <a
    href="https://github.com/berket0934"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:scale-105"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/berke-t%C3%BCylek-a2893a209/"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/15 px-6 py-3 font-medium text-gray-300 transition duration-300 hover:border-blue-500/50 hover:text-white"
  >
    LinkedIn
  </a>

  <a
    href="mailto:berketuylek@gmail.com"
    className="rounded-full border border-white/15 px-6 py-3 font-medium text-gray-300 transition duration-300 hover:border-blue-500/50 hover:text-white"
  >
    Email
  </a>

</div>
    </div>

    <footer className="flex flex-col gap-3 py-10 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Berke Tüylek</p>
      <p>Built with Next.js & Tailwind CSS</p>
    </footer>

  </div>
</section>
    </main>
  );
}