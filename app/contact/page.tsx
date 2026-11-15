"use client";

 
  export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block mb-3 rounded-full bg-[#06B6D4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              Let&apos;s Connect
            </span>
            <h1 className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl mb-3">
              Contact &amp; Demo Registration
            </h1>
            <p className="text-[#475569] max-w-xl mx-auto text-sm leading-relaxed">
              Reserve your spot at a live Agentic Clone Hub platform demo, ask a
              question, or reach out for support. We&apos;ll get back to you
              within one business day.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* ── Left: Registration Form ── */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm px-8 py-10">
              <h2 className="text-xl font-bold text-[#0F172A] mb-1">
                Register for a Live Demo
              </h2>
              <p className="text-xs text-[#475569] mb-6">
                See how your AI Clone gets built, trained, and deployed — live.
              </p>
  
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[#0F172A] mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Jane"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[#0F172A] mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Smith"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition"
                    />
                  </div>
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0F172A] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#0F172A] mb-1"
                  >
                    Phone Number{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (787) 000-0000"
                    className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-[#0F172A] mb-1"
                  >
                    Your Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition"
                  >
                    <option value="" disabled>
                      Select your industry…
                    </option>
                    <option value="real_estate_agent">Real Estate Agent</option>
                    <option value="brokerage">Real Estate Brokerage</option>
                    <option value="mortgage">Mortgage Loan Originator</option>
                    <option value="small_business">Small Business Owner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0F172A] mb-1"
                  >
                    Message{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a little about your business or what you're hoping to automate…"
                    className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition resize-none"
                  />
                </div>
  
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#F97316] px-4 py-3 text-sm font-semibold text-white shadow hover:bg-[#ea6b0e] transition-colors"
                >
                  Reserve My Demo Spot →
                </button>
              </form>
            </div>
  
            {/* ── Right: Calendly + Contact Info ── */}
            <div className="flex flex-col gap-6">
              {/* Calendly Placeholder */}
              <div className="rounded-2xl border border-dashed border-[#2563EB]/40 bg-[#2563EB]/5 px-8 py-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                <span className="mb-3 text-3xl">📅</span>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  Book Directly on Our Calendar
                </h3>
                <p className="text-sm text-[#475569] mb-4">
                  Prefer to pick your own time? Use our Calendly booking link to
                  schedule a 30-minute live demo at your convenience.
                </p>
                {/* Replace href with your Calendly URL */}
                <a
                  href="https://calendly.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8] transition-colors"
                >
                  Open Calendly →
                </a>
                <p className="mt-4 text-xs text-slate-400">
                  {/* Swap this div for a Calendly inline embed widget when ready */}
                  Calendly inline embed will load here once configured.
                </p>
              </div>
  
              {/* Contact Details */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm px-8 py-8">
                <h3 className="text-lg font-bold text-[#0F172A] mb-5">
                  Direct Contact &amp; Support
                </h3>
  
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/10 text-[#06B6D4]">
                      ✉
                    </span>
                    <div>
                      <p className="font-medium text-[#0F172A]">Email Support</p>
                      <a
                        href="mailto:sfeirn@gmail.com"
                        className="text-[#2563EB] hover:underline"
                      >
                        sfeirn@gmail.com
                      </a>
                    </div>
                  </li>
  
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/10 text-[#06B6D4]">
                      🌎
                    </span>
                    <div>
                      <p className="font-medium text-[#0F172A]">Service Areas</p>
                      <p className="text-[#475569]">
                        USA · Puerto Rico · Brazil
                      </p>
                    </div>
                  </li>
  
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/10 text-[#06B6D4]">
                      ⏱
                    </span>
                    <div>
                      <p className="font-medium text-[#0F172A]">Response Time</p>
                      <p className="text-[#475569]">
                        Within 1 business day
                      </p>
                    </div>
                  </li>
                </ul>
  
                <div className="mt-6 rounded-lg bg-[#F8FAFC] border border-slate-200 px-4 py-3 text-xs text-[#475569] leading-relaxed">
                  <strong className="text-[#0F172A]">Disclosure:</strong>{" "}
                  Agentic Clone Hub is a sole proprietorship registered in the
                  Commonwealth of Puerto Rico. It is not a corporation or LLC.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }