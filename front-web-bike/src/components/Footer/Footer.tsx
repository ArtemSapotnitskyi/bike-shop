import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#060507] border-t border-zinc-800/50 py-10 px-[5%] lg:px-[8%] z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
          <Link href="/" className="flex items-start group">
            <span className="text-2xl md:text-3xl font-black text-white tracking-[0.15em] uppercase">
              Montblanc
            </span>
            <span className="text-[10px] text-zinc-400 ml-1 mt-1 group-hover:text-white transition-colors">
              ®
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-bold text-zinc-400 tracking-widest uppercase">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/careers"
              className="hover:text-white transition-colors duration-300"
            >
              Careers
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-5 w-full lg:w-auto">
          <div className="flex items-center gap-6 text-orange-600">
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Custom LinkedIn Logo */}
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Custom YouTube Logo */}
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 7.1C2.5 7.1 2.5 5 4.5 4.5 5.5 4.2 12 4.2 12 4.2s6.5 0 7.5.3c2 .5 2 2.6 2 2.6s.3 2 .3 4.9c0 2.9-.3 4.9-.3 4.9s0 2.1-2 2.6c-1 .3-7.5.3-7.5.3s-6.5 0-7.5-.3c-2-.5-2-2.6-2-2.6S2.2 14.8 2.2 11.9c0-2.9.3-4.9.3-4.9z" />
                <path d="M9.8 15.5L15.5 12 9.8 8.5v7z" />
              </svg>
            </a>
          </div>

          <p className="text-[10px] text-zinc-500 tracking-widest uppercase font-medium">
            © 2077 Montblanc Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
