import React from "react";
import { useInView } from "../../hooks/useInView";
import { getRevealClasses } from "../../hooks/getRevealClasses";

export default function Process() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  const motion = getRevealClasses("fadeUp");

  const steps = [
    {
      step: "Step 1",
      title: "Consultation",
      desc: "Quick call to understand your goals, audience, and what’s currently holding your site back.",
    },
    {
      step: "Step 2",
      title: "Discovery",
      desc: "We map pages, scope, conversion flow, SEO priorities, and a simple timeline — no guessing.",
    },
    {
      step: "Step 3",
      title: "Design",
      desc: "Conversion-first layout + UI that matches your brand and guides visitors to take action.",
    },
    {
      step: "Step 4",
      title: "Build",
      desc: "Fast, clean code with mobile-first performance and technical SEO baked in from day one.",
    },
    {
      step: "Step 5",
      title: "Launch",
      desc: "QA, optimization, deployment, and handoff — plus support to keep things running smoothly.",
    },
  ];

  const chips = [
    "Typical timeline: 7–14 days",
    "Mobile-first builds",
    "SEO-ready structure",
    "Performance optimized",
    "Clear fixed scope",
  ];

  return (
    <section id="process" className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`${motion.base} ${
            inView ? motion.show : `${motion.hidden} !duration-0 !delay-0`
          }`}
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
              Delivery
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A clear workflow from first message to launch — designed for speed, clarity, and results.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-slate-200 lg:block" />

            <div className="grid gap-5 lg:grid-cols-5">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  style={{ transitionDelay: inView ? `${i * 140}ms` : "0ms" }}
                  className={[
                    "group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70",
                    // Slightly faster than before
                    "transition-[opacity,transform] duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    "hover:-translate-y-1 hover:shadow-xl",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
                      {s.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {s.title === "Launch" ? "Go Live" : "Next"}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                  <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-700 to-sky-400 opacity-80" />
                </div>
              ))}
            </div>
          </div>

          <div
            style={{ transitionDelay: inView ? "750ms" : "0ms" }}
            className={[
              "mt-8 flex flex-wrap items-center justify-center gap-2",
              // Also slightly faster
              "transition-[opacity,transform] duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8 flex justify-center">{/* CTA later if needed */}</div>
        </div>
      </div>
    </section>
  );
}
