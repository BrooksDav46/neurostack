// src/LandingPage/Components/NavBar.tsx
import { Link } from "react-router-dom";
import logoIcon from "../../assets/neurostack-icon.png";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Always the same look */}
      <div className="relative w-full bg-[#1E3A8A]/55 backdrop-blur-xl">
        {/* Neon bottom glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-3 h-6 bg-gradient-to-b from-sky-400/25 to-transparent blur-2xl" />

        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6">
          {/* BRAND / LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="NeuroStack"
              className="h-10 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
            />

            <span className="text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
              NeuroStack
            </span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden items-center gap-10 md:flex">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Finance", to: "/finance" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="
                  relative text-base font-semibold text-blue-100/90 transition
                  hover:text-white
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

          {/* CTA */}
          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-white px-7 py-3
              text-base font-semibold text-blue-900
              shadow-[0_18px_60px_rgba(2,6,23,0.30)]
              ring-1 ring-white/50
              hover:bg-blue-50 transition-all
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
