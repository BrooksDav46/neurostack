// src/LandingPage/Components/Built.tsx
// import React from "react";
import { useInView } from "../../hooks/useInView";
import { getRevealClasses } from "../../hooks/getRevealClasses";

// ✅ Vite asset imports (adjust names if yours differ)
import dentistPic from "../../assets/Dentist_pic.webp";
import plumbingWebsite from "../../assets/Plumbing_Website.webp";
import saasDashboard from "../../assets/saas_dashboard.webp";

export default function Built() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  // Built section: different vibe — gentle ZOOM entrance
  const motion = getRevealClasses("zoom");

  const projects = [
    {
      tag: "Project Preview",
      title: "Modern Service Website",
      desc: "Conversion-focused layout with clear CTAs, fast performance, and local SEO structure built in.",
      metrics: ["Core Web Vitals", "Local SEO", "Lead Capture"],
      href: "#contact",
      image: dentistPic,
      imageAlt: "Modern service website preview",
    },
    {
      tag: "Project Preview",
      title: "E-Commerce Redesign",
      desc: "Streamlined product pages, improved checkout flow, and technical SEO cleanup for growth.",
      metrics: ["UX", "Speed", "Technical SEO"],
      href: "#contact",
      image: plumbingWebsite,
      imageAlt: "E-commerce redesign preview",
    },
    {
      tag: "Project Preview",
      title: "SaaS Landing Page",
      desc: "High-converting marketing page designed to drive demo requests and reduce bounce rate.",
      metrics: ["Conversion", "Analytics", "A/B-ready"],
      href: "#contact",
      image: saasDashboard,
      imageAlt: "SaaS landing page preview",
    },
  ];

  return (
    <section
      id="built"
      className="
        relative w-full overflow-hidden
        bg-gradient-to-br from-slate-950 via-slate-900 to-black
        py-24 px-6
      "
    >
      {/* Premium ambient glow (cyan primary + purple atmosphere) */}
      <div className="pointer-events-none absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-cyan-400/14 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-44 h-[560px] w-[560px] rounded-full bg-indigo-500/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      {/* subtle wash to unify with the neon system */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/5 to-purple-500/0" />

      {/* fine grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION REVEAL (zoom) */}
        <div
          ref={ref}
          className={`${motion.base} ${
            inView ? motion.show : `${motion.hidden} !duration-0 !delay-0`
          }`}
        >
          <div className="text-center">
            <span
              className="
                inline-flex items-center gap-2 rounded-full
                bg-white/8 px-4 py-1.5 text-sm font-semibold
                text-cyan-200 ring-1 ring-white/12 backdrop-blur
              "
              style={{
                boxShadow:
                  "0 0 0 1px rgba(34,211,238,0.14), 0 0 28px rgba(168,85,247,0.08)",
              }}
            >
              Proof (Coming Soon)
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              What We’ve{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-purple-200 bg-clip-text text-transparent">
                Built
              </span>
            </h2>

            <p className="mt-3 text-base text-white/70">
             A curated selection of websites and digital products we’ve designed and built.
            </p>
          </div>

          {/* Cards stagger in */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                style={{ transitionDelay: inView ? `${i * 180}ms` : "0ms" }}
                className={[
                  // Stagger reveal
                  "transition-[opacity,transform] duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                  inView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-[0.985]",

                  // Premium dark-glass card
                  "group relative overflow-hidden rounded-2xl",
                  "bg-white/[0.045] backdrop-blur-xl",
                  "ring-1 ring-white/10",
                  "shadow-[0_24px_110px_rgba(0,0,0,0.60)]",
                  "transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/[0.06]",
                ].join(" ")}
              >
                {/* fluorescent edge brighten on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
                  <div
                    className="absolute inset-0 rounded-2xl ring-1"
                    style={{
                      borderColor: "rgba(34,211,238,0.32)",
                      boxShadow:
                        "0 0 0 1px rgba(34,211,238,0.18), 0 0 26px rgba(168,85,247,0.10)",
                    }}
                  />
                </div>

                {/* inner lighting */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/7 via-transparent to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-500/6 to-cyan-400/0" />
                </div>

                {/* Preview Area */}
                <div className="relative p-5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <span className="ml-auto rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/12 backdrop-blur">
                      {p.tag}
                    </span>
                  </div>

                  {/* image */}
                  <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/10 bg-black/30">
                    <div className="relative h-[170px] w-full">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />

                      {/* subtle overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* premium shine */}
                      <div className="pointer-events-none absolute -left-10 top-0 h-full w-28 rotate-12 bg-white/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-6 pb-6">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/12 backdrop-blur"
                        style={{
                          boxShadow: "0 0 18px rgba(168,85,247,0.06)",
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <a
                      href={p.href}
                      className="text-sm font-semibold text-cyan-200/90 transition hover:text-cyan-100"
                    >
                      View Details →
                    </a>

                    <a
                      href="#contact"
                      className="
                        inline-flex items-center justify-center rounded-xl
                        bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900
                        shadow-lg shadow-cyan-500/20
                        transition hover:bg-cyan-400 active:scale-[0.99]
                      "
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>

                {/* bottom accent */}
                <div className="relative h-px w-full bg-gradient-to-r from-cyan-300/50 via-sky-300/35 to-purple-300/35 opacity-70" />
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center rounded-xl
                bg-white/8 px-7 py-3 text-sm font-semibold text-white
                ring-1 ring-white/12 backdrop-blur
                transition hover:bg-white/12 active:scale-[0.99]
              "
              style={{
                boxShadow:
                  "0 0 0 1px rgba(34,211,238,0.10), 0 0 34px rgba(168,85,247,0.08)",
              }}
            >
              See what we can build for you →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
