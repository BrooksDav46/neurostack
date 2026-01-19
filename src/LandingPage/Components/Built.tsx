
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

  // Built section: different vibe — gentle ZOOM entrance (not the same as WhyUs/Features/Process)
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
    <section id="built" className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* SECTION REVEAL (zoom) */}
        <div
          ref={ref}
          className={`${motion.base} ${
            inView ? motion.show : `${motion.hidden} !duration-0 !delay-0`
          }`}
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
              Proof (Coming Soon)
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What We’ve{" "}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                Built
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-600">
              These are example deliverables — swap the placeholder previews with real screenshots as you
              complete projects.
            </p>
          </div>

          {/* Cards stagger in (different feel than other sections) */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                style={{ transitionDelay: inView ? `${i * 180}ms` : "0ms" }}
                className={[
                  // Stagger reveal
                  "transition-[opacity,transform] duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                  inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.985]",

                  // Your existing styling
                  "group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                ].join(" ")}
              >
                {/* Preview Area */}
                <div className="relative p-5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-auto rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      {p.tag}
                    </span>
                  </div>

                  {/* ✅ Real image inside the box */}
                  <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200 bg-slate-50">
                    <div className="relative h-[170px] w-full">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />

                      {/* subtle overlay so text/cards always match your brand */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* small “shine” */}
                      <div className="pointer-events-none absolute -left-10 top-0 h-full w-28 rotate-12 bg-white/25 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <a href={p.href} className="text-sm font-semibold text-blue-700 hover:text-blue-800">
                      View Details →
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800 active:scale-[0.99]"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>

                {/* bottom accent */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-sky-500 to-blue-600 opacity-70" />
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800 active:scale-[0.99]"
            >
              See what we can build for you →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
