// src/LandingPage/Components/NavBar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import stratumLogo from "../../assets/Stratum_Logo_no_bg.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Finance", to: "/finance" },
    { label: "Contact", to: "/contact" },
  ];

  const goHomeTop = () => {
    setOpen(false);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="relative w-full bg-[#0B1220]/70 backdrop-blur-xl">

        {/* Glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-3 h-6 bg-gradient-to-b from-sky-400/25 to-transparent blur-2xl" />

        {/* Layout */}
        <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center px-6">

          {/* LEFT */}
          <div className="flex items-center justify-self-start">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Logo */}
            <Link
              to="/"
              onClick={goHomeTop}
              className="hidden md:flex items-center rounded-lg focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <div className="h-14 w-[300px] overflow-hidden">
                <img
                  src={stratumLogo}
                  alt="Stratum Marketing"
                  className="h-full w-full object-contain object-left select-none"
                  draggable={false}
                />
              </div>
            </Link>
          </div>

          {/* CENTER */}
          <div className="flex items-center justify-center">

            {/* Mobile Centered Logo */}
            <Link
              to="/"
              onClick={goHomeTop}
              className="md:hidden flex items-center justify-center"
            >
              <div className="h-10 w-[210px] overflow-hidden">
                <img
                  src={stratumLogo}
                  alt="Stratum Marketing"
                  className="h-full w-full object-contain object-center select-none"
                  draggable={false}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-base font-semibold text-white/90 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-self-end">

            {/* Mobile spacer (balances hamburger width) */}
            <div className="md:hidden w-10" />

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-base font-semibold text-blue-900 hover:bg-blue-50 transition"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className="text-white text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-900"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}