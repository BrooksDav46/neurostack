// src/LandingPage/Components/Process.tsx
import React from "react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Quick call to understand your goals, audience, and what’s currently holding your site back.",
    },
    {
      step: "02",
      title: "Discovery",
      desc: "We map pages, scope, conversion flow, SEO priorities, and a simple timeline — no guessing.",
    },
    {
      step: "03",
      title: "Design",
      desc: "Conversion-first UI that matches your brand and guides visitors to take action.",
    },
    {
      step: "04",
      title: "Build",
      desc: "Fast, clean code with mobile-first performance and technical SEO baked in.",
    },
    {
      step: "05",
      title: "Launch",
      desc: "QA, optimization, deployment, and handoff — plus support to keep things running smoothly.",
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-12">
      {/* premium atmosphere (subtle, not loud) */}
      <div className="pointer-events-none absolute -inset-x-10 -top-16 -z-10 h-[420px] opacity-70 blur-3xl">
        <div className="absolute left-6 top-10 h-[320px] w-[320px] rounded-full bg-cyan-400/10" />
        <div className="absolute right-10 top-20 h-[320px] w-[320px] rounded-full bg-purple-500/8" />
      </div>

      {/* fine grain */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* header */}
      <div className="mx-auto max-w-4xl text-center">
        <span
          className="
            inline-flex items-center rounded-full
            bg-white/6 px-4 py-1.5 text-xs font-semibold
            text-white/80 ring-1 ring-white/12 backdrop-blur
          "
          style={{
            boxShadow: "0 0 0 1px rgba(34,211,238,0.10), 0 0 24px rgba(168,85,247,0.06)",
          }}
        >
          Our Process
        </span>

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          From idea to{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-purple-200 bg-clip-text text-transparent">
            live product
          </span>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          A clear workflow designed for speed, clarity, and measurable results.
        </p>
      </div>

      {/* steps */}
      <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => {
          const stagger =
            i === 1 ? "lg:translate-y-4" : i === 3 ? "lg:-translate-y-4" : "";

          return (
            <div
              key={s.step}
              className={[
                "group relative overflow-hidden rounded-2xl",
                // cleaner glass surface
                "bg-white/[0.045] backdrop-blur-xl",
                // base border
                "ring-1 ring-white/10",
                // micro interaction (agency feel)
                "transition-all duration-300",
                "hover:-translate-y-[2px] hover:bg-white/[0.06]",
                stagger,
              ].join(" ")}
              style={{
                // subtle always-on edge + tiny aura
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.06), 0 0 18px rgba(34,211,238,0.08), 0 12px 60px rgba(0,0,0,0.45)",
              }}
            >
              {/* premium border brighten on hover (thin fluorescent line) */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
                <div
                  className="absolute inset-0 rounded-2xl ring-1"
                  style={{
                    borderColor: "rgba(34,211,238,0.35)",
                    boxShadow:
                      "0 0 0 1px rgba(34,211,238,0.22), 0 0 22px rgba(168,85,247,0.08)",
                  }}
                />
              </div>

              {/* subtle shine sweep (very light) */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -left-24 top-0 h-full w-28 rotate-12 bg-gradient-to-b from-white/0 via-white/10 to-white/0 blur-md" />
              </div>

              {/* inner lighting */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-500/5 to-cyan-400/0" />
              </div>

              <div className="relative px-6 py-6">
                {/* top row */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wide text-white/70">
                    STEP {s.step}
                  </span>

                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl ring-1 ring-white/10"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      boxShadow: "0 0 18px rgba(34,211,238,0.08)",
                    }}
                  >
                    <span className="text-white/85">✦</span>
                  </span>
                </div>

                <h3 className="mt-3 text-[15px] font-semibold text-white">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  {s.desc}
                </p>

                {/* small premium divider */}
                <div className="mt-4 h-px w-10 bg-gradient-to-r from-cyan-300/55 via-sky-300/35 to-purple-300/35 opacity-70 transition-all duration-300 group-hover:w-14 group-hover:opacity-90" />
              </div>
            </div>
          );
        })}
      </div>

      {/* chips */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
        {[
          "Typical timeline: 7–14 days",
          "Mobile-first builds",
          "SEO-ready structure",
          "Performance optimized",
          "Clear fixed scope",
        ].map((t) => (
          <span
            key={t}
            className="
              rounded-full bg-white/6 px-3 py-1.5
              ring-1 ring-white/10 backdrop-blur
              transition hover:bg-white/8
            "
            style={{
              boxShadow: "0 0 18px rgba(168,85,247,0.06)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
