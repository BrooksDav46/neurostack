// import React from "react";
import PlumbingWebsite from "../../assets/Plumbing_Website.webp";
import { useInView } from "../../hooks/useInView";
import { getRevealClasses } from "../../hooks/getRevealClasses";

export default function WhyUs() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  // WhyUs: slide from LEFT (distinct)
  const motion = getRevealClasses("fadeLeft");

  const bullets = [
    "Strategy-first approach focused on conversions",
    "Fast, modern, mobile-optimized builds",
    "SEO structure built into every page (schema + headings + metadata)",
    "Automations that follow up (forms, booking, CRM/Zapier)",
    "Clean code that grows with your business",
  ];

  return (
    <section id="why-us" className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slightly snappier overall */}
        <div
          ref={ref}
          className={`transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity ${
            inView ? motion.show : `${motion.hidden} !duration-0 !delay-0`
          }`}
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/70">
                <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-auto text-xs font-semibold text-slate-500">
                    Website + analytics preview
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <img
                    src={PlumbingWebsite}
                    alt="Client website preview and performance snapshot"
                    className="w-full h-auto rounded-xl object-cover"
                  />

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    Built for speed & conversions
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                More than a website —{" "}
                <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                  a growth system
                </span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We don’t just design pages. We build high-performance websites that attract visitors,
                convert them into leads, and make it easy to follow up — so your business can scale.
              </p>

              {/* Bullets: finish faster (no waiting) */}
              <ul className="mt-6 space-y-3 text-sm text-slate-700 sm:text-base">
                {bullets.map((b, i) => (
                  <li
                    key={b}
                    style={{ transitionDelay: inView ? `${120 + i * 60}ms` : "0ms" }}
                    className={[
                      "flex gap-3",
                      "transition-[opacity,transform] duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                      inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5",
                    ].join(" ")}
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Quote sooner */}
              <div
                style={{ transitionDelay: inView ? "520ms" : "0ms" }}
                className={[
                  "mt-6 rounded-2xl border-l-4 border-blue-600 bg-white p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200/70",
                  "transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                ].join(" ")}
              >
                “Our goal is to turn your website into your most reliable salesperson.”
              </div>

              {/* Buttons sooner */}
              <div
                style={{ transitionDelay: inView ? "650ms" : "0ms" }}
                className={[
                  "mt-7 flex flex-wrap items-center gap-3",
                  "transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                >
                  Start Your Project →
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 transition hover:bg-blue-50 active:scale-[0.99]"
                >
                  See Services →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
