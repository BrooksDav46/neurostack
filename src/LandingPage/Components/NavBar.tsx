// src/LandingPage/Components/NavBar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// ✅ Make sure this matches your exact filename and casing in src/assets
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
        {/* Neon bottom glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-3 h-6 bg-gradient-to-b from-sky-400/25 to-transparent blur-2xl" />

        {/* ✅ 3-column grid: left (logo), center (nav), right (cta) */}
        <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center px-6">
          {/* LEFT: Mobile menu + Logo */}
          <div className="flex items-center gap-3 justify-self-start">
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* BRAND / LOGO */}
                <Link
                  to="/"
                  onClick={goHomeTop}
                  className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 translate-x-[20px] md:translate-x-0"
                  aria-label="Go to home"
                >
                  <div className="h-12 md:h-14 w-[240px] md:w-[300px] overflow-hidden translate-y-[2px] md:translate-y-[3px]">
                    <img
                      src={stratumLogo}
                      alt="Stratum Marketing logo"
                      className="h-full w-full object-cover object-left drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] select-none"
                      draggable={false}
                    />
                  </div>
                </Link>
            
              {/* Fixed logo box prevents layout shift
                <div className="h-12 md:h-14 w-[240px] md:w-[300px] overflow-hidden translate-y-[2px] md:translate-y-[3px]">
                <img
                  src={stratumLogo}
                  alt="Stratum Marketing logo"
                  className="h-full w-full object-cover object-left drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] select-none"
                  draggable={false}
                />
              </div> */}
            
          </div>

          {/* CENTER: Desktop nav (TRULY centered) */}
          <div className="hidden md:flex items-center gap-10 justify-self-center">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="
                  relative text-base font-semibold
                  text-white/90
                  transition
                  hover:text-white
                  focus-visible:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white/40
                  after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full
                  after:origin-left after:scale-x-0 after:rounded-full after:bg-sky-300/90
                  after:shadow-[0_0_18px_rgba(56,189,248,0.65)]
                  after:transition-transform hover:after:scale-x-100
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* RIGHT: Desktop CTA */}
          <div className="justify-self-end">
            <Link
              to="/contact"
              className="
                hidden md:inline-flex items-center justify-center
                rounded-xl bg-white px-7 py-3
                text-base font-semibold text-blue-900
                shadow-[0_18px_60px_rgba(2,6,23,0.30)]
                ring-1 ring-white/50
                hover:bg-blue-50 transition-all
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300
              "
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className="text-white/95 text-lg font-semibold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md px-1 py-1"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-lg ring-1 ring-white/50 hover:bg-blue-50 transition-all"
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