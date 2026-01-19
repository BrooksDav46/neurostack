// src/LandingPage/Components/Hero.tsx
// import React from "react";
import heroVideo from "../../assets/Hero.mp4";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Cohesive overlay (navy -> blue) */}
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/55 via-slate-950/35 to-blue-900/40" />

        {/* subtle blur haze at bottom for readability */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />

        {/* tiny grain */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto w-full max-w-screen-2xl px-6 sm:px-10">
        <div className="grid min-h-[700px] items-center gap-10 py-16 lg:grid-cols-[1.15fr_1fr]">
          {/* LEFT */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur">
              Conversion-first Web + SEO
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Websites that{" "}
              <span className="block text-blue-300">rank + convert</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              We build fast, modern websites that generate leads—clean code, mobile-first
              layouts, and technical SEO baked in from day one.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/85 sm:text-base">
              {[
                "Performance-focused builds (Core Web Vitals)",
                "SEO-ready structure + conversion-first UX",
                "Forms, booking, CRM + automations (Zapier/HubSpot)",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 ring-1 ring-blue-300/20">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                Get a Free Strategy Call
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                See Work + Services →
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
              {[
                "Typical launch: 7–14 days",
                "Mobile-first + SEO-ready",
                "Built to generate leads",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative w-full">
            <div className="pointer-events-none absolute -inset-20 -z-10 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="overflow-hidden rounded-[28px] bg-white/92 shadow-[0_30px_90px_rgba(2,6,23,0.35)] ring-1 ring-white/30 backdrop-blur">
              <div className="w-full bg-gradient-to-br from-white to-blue-50 p-8 sm:p-10">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-auto text-xs font-semibold text-slate-500">
                    Request a Quote
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Get a fast quote + plan
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Tell us what you need. We’ll reply within 24 hours with a clear plan.
                </p>

                <form className="mt-5 space-y-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Current Website (optional)"
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                  />

                  <select className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 outline-none transition focus:ring-2 focus:ring-blue-500">
                    <option>Website Build</option>
                    <option>Redesign</option>
                    <option>SEO Fixes</option>
                    <option>Lead Capture</option>
                    <option>Automations / Integrations</option>
                  </select>

                  <textarea
                    placeholder="Tell us about your project (goals, pages, timeline)…"
                    rows={4}
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                  >
                    Send Request →
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    No spam. Just a quick reply and a clear plan.
                  </p>
                </form>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
