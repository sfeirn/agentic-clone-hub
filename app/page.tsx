import Link from "next/link";
import Image from "next/image";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Clone Your Brand",
    desc: "We capture your voice, face, expertise, and brand identity to build your personal AI Clone.",
  },
  {
    step: "02",
    title: "Train Your Knowledge",
    desc: "Your Clone learns your niche — real estate, mortgage, local market data, and your unique value proposition.",
  },
  {
    step: "03",
    title: "Deploy & Automate",
    desc: "Your Clone executes daily social media posts, blog articles, and 8K studio-quality video content — hands-free.",
  },
];

const WHO_FOR = [
  "Real Estate Agents & Brokerages",
  "Mortgage Loan Originators",
  "Small Business Owners",
  "Service Professionals (USA · Puerto Rico · Brazil)",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0F172A] px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* subtle radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[480px] w-[480px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <Image
            src="/logo.png"
            alt="Agentic Clone Hub"
            width={80}
            height={80}
            className="mx-auto mb-6 h-20 w-auto"
          />
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
            AI-Powered Marketing Automation
          </p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your Business.&nbsp;Your Brand.
            <br />
            <span className="text-[#F97316]">Amplified by AI.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#94A3B8]">
            Done-for-you AI Agentic Clones that execute automated social media,
            blog, and video marketing — so you close deals, not content
            calendars.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[#ea6b0e] transition-colors"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-slate-600 px-7 py-3.5 text-base font-semibold text-slate-200 hover:border-slate-400 hover:text-white transition-colors"
            >
              Platform Access →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#0F172A] sm:text-3xl">
            Built for Time-Strapped Professionals
          </h2>
          <p className="mb-10 text-[#475569]">
            If you're generating leads through reputation and relationships —
            your Clone works for you 24/7.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHO_FOR.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-left shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                  ✓
                </span>
                <span className="font-medium text-[#0F172A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#161E31] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {HOW_IT_WORKS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-700 bg-[#0F172A]/60 p-6"
              >
                <span className="mb-3 block text-3xl font-black text-[#06B6D4]">
                  {step}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-[#2563EB] px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            See Your Clone in Action
          </h2>
          <p className="mb-8 text-blue-100">
            Reserve your spot at our next live platform demo — free, no strings
            attached.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#F97316] px-8 py-4 text-base font-semibold text-white shadow-xl hover:bg-[#ea6b0e] transition-colors"
          >
            Register for the Demo →
          </Link>
        </div>
      </section>
    </>
  );
}