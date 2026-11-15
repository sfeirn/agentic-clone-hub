'use client'

import React from 'react'
// ... rest of your imports and component code

import Link from "next/link";

export const metadata = {
  title: "Platform Access | Agentic Clone Hub",
  description:
    "Log in to the Agentic Clone Hub execution platform to manage your AI Clone, campaigns, and automated marketing.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      {/* Platform Overview */}
      <div className="mx-auto w-full max-w-md text-center mb-10">
        <span className="inline-block mb-3 rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
          Execution Platform
        </span>
        <h1 className="text-3xl font-extrabold text-[#0F172A] mb-3">
          Platform Access
        </h1>
        <p className="text-[#475569] text-sm leading-relaxed">
          The Agentic Clone Hub platform is your command center for managing
          your AI Clone — from brand training and knowledge updates to
          automated social media scheduling, blog publishing, and 8K studio
          video delivery. Everything your marketing needs, running 24/7 without
          you lifting a finger.
        </p>
      </div>

      {/* Login Card */}
      <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-sm px-8 py-10">
        <h2 className="text-xl font-bold text-[#0F172A] mb-6">Sign In</h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#0F172A]"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-[#2563EB] hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#F97316] px-4 py-3 text-sm font-semibold text-white shadow hover:bg-[#ea6b0e] transition-colors"
          >
            Sign In to Platform
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-[#475569]">
          Don&apos;t have access yet?{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#2563EB] hover:underline"
          >
            Register for a live demo →
          </Link>
        </p>
      </div>

      {/* Platform not ready notice */}
      <p className="mt-6 text-center text-xs text-slate-400 max-w-sm">
        The Agentic Clone Hub platform is currently in early access. Register
        for a demo to get on the waitlist and be among the first to launch your
        AI Clone.
      </p>
    </div>
  );
}