// src/LandingPage/Components/NavBar.tsx
import React from "react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#1E3A8A] border-b border-blue-800 shadow-md">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6">

        {/* BRAND / LOGO */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-white tracking-wide">
            NeuroStack
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#home"
            className="text-base font-semibold text-blue-100 hover:text-white transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-base font-semibold text-blue-100 hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-base font-semibold text-blue-100 hover:text-white transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-base font-semibold text-blue-100 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* CTA BUTTON */}
        <div>
          <a
            href="#contact"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-white px-7 py-3
              text-base font-semibold text-blue-900
              shadow hover:bg-blue-50 transition-all
            "
          >
            Get Started
          </a>
        </div>

      </div>
    </nav>
  );
}
