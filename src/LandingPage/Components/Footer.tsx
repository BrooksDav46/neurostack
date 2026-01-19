import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "What We Built", href: "#built" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND / ABOUT */}
          <div>
            <h3 className="text-xl font-bold text-white">NeuroStack</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              We build high-performance websites focused on conversions,
              speed, and long-term growth for service businesses and startups.
            </p>
          </div>

          {/* NAV LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Get In Touch
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Email: hello@neurostack.dev</li>
              <li>Response time: typically same day</li>
              <li>Available for new projects</li>
            </ul>

            <div className="mt-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.99]"
              >
                Start a Project →
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} NeuroStack. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Built with care</span>
            <span className="hidden md:block">•</span>
            <span>Performance-first</span>
            <span className="hidden md:block">•</span>
            <span>Conversion-focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
