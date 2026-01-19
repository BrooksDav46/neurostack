// import React from "react";
import { useInView } from "../../hooks/useInView";
import { getRevealClasses } from "../../hooks/getRevealClasses";

export default function Features() {
  // One-way reveal: once it shows, it stays shown (no reverse on scroll up)
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  const motion = getRevealClasses("fadeUp");

  const features = [
    {
      title: "Custom Web Development",
      desc: "Fast, modern builds with clean code, scalable structure, and conversion-first layouts.",
      icon: "💻",
      link: "#contact",
      bullets: ["React / Next-ready", "Clean architecture", "Built to scale"],
    },
    {
      title: "Responsive Design",
      desc: "Pixel-perfect UI that feels premium on desktop, tablet, and mobile — no weird spacing.",
      icon: "📱",
      link: "#contact",
      bullets: ["Mobile-first", "Accessible UI", "Modern components"],
    },
    {
      title: "SEO + Performance",
      desc: "Technical SEO + speed improvements so you rank locally and turn traffic into leads.",
      icon: "🚀",
      link: "#contact",
      bullets: ["Core Web Vitals", "Schema + headings", "On-page structure"],
    },
  ];

  return (
    <section id="features" className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section reveal */}
        <div ref={ref} className={`${motion.base} ${inView ? motion.show : motion.hidden}`}>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
              What We Do Best
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Services built to{" "}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                generate leads
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clean design, fast builds, and SEO structure that helps you win locally.
            </p>
          </div>

          {/* Cards (staggered) */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((item, index) => (
              <div
                key={index}
                style={{ transitionDelay: inView ? `${index * 160}ms` : "0ms" }}
                className={[
                  // stagger reveal motion (more visible)
                  "transition-[opacity,transform] duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",

                  // your existing hover styles
                  "group bg-white rounded-2xl p-7 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                ].join(" ")}
              >
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{item.icon}</div>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                    Included
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={item.link}
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 active:scale-[0.99]"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 transition hover:bg-blue-50 active:scale-[0.99]"
                  >
                    Details →
                  </a>
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <p className="mt-4 text-xs text-slate-500">
                  Built with performance + UX best practices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
