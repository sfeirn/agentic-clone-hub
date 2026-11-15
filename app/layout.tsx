import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Clone Hub — Your Business. Your Brand. Amplified by AI.",
  description:
    "Done-for-you AI Agentic Clones that execute automated social media, blog, and video marketing for time-strapped professionals.",
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#F8FAFC]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Agentic Clone Hub logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold text-[#0F172A]">
            Agentic Clone Hub
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#475569] md:flex">
          <Link href="/" className="hover:text-[#2563EB] transition-colors">
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#2563EB] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="rounded-md bg-[#2563EB] px-4 py-2 text-white hover:bg-[#1d4ed8] transition-colors"
          >
            Platform Access
          </Link>
        </nav>

        {/* Mobile CTA */}
        <Link
          href="/login"
          className="rounded-md bg-[#2563EB] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1d4ed8] transition-colors md:hidden"
        >
          Login
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 bg-[#0F172A] text-[#94A3B8]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.png"
                alt="Agentic Clone Hub logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-white text-sm">
                Agentic Clone Hub
              </span>
            </Link>
            <p className="text-xs leading-relaxed">
              Your Business. Your Brand. Amplified by AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-white transition-colors"
                >
                  Platform Access
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-policy"
                  className="hover:text-white transition-colors"
                >
                  AI, Voice &amp; Likeness Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-6 space-y-2 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Agentic Clone Hub. All rights reserved.
            Agentic Clone Hub is a sole proprietorship registered in the
            Commonwealth of Puerto Rico. It is not a corporation or LLC.
          </p>
          <p>
            This site uses AI-generated content and may use cookies to enhance
            your experience. By using this site you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-slate-300">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8FAFC] text-[#475569]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}