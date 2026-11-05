
"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#171719] px-5 sm:px-8 lg:px-12 shadow-md">
      <div className="flex h-20 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-sans text-xl font-bold tracking-[0.04em] text-[#F2EEE8] sm:text-2xl"
        >
          MOTOR<span className="text-[#B89B70]">/</span>ARCHIVE
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-[#92908D] transition-colors duration-200 hover:text-[#F2EEE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B89B70] focus-visible:outline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B89B70]"
        >
          <span
            className={`h-px w-6 bg-[#F2EEE8] transition-transform duration-200 ${
              menuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#F2EEE8] transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#F2EEE8] transition-transform duration-200 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#92908D]/20 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#92908D] transition-colors duration-200 hover:text-[#F2EEE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B89B70] focus-visible:outline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
