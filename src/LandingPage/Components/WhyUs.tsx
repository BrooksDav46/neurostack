// src/LandingPage/Components/WhyUs.tsx
import { useEffect, useState } from "react";
import PlumbingWebsite from "../../assets/Plumbing_Website.webp";
import { useInView } from "../../hooks/useInView";
import { getRevealClasses } from "../../hooks/getRevealClasses";

export default function WhyUs() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  // One-way reveal (once shown, never hides again)
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (inView) setShown(true);
  }, [inView]);

  const motion = getRevealClasses("fadeLeft");

  const bullets = [
    "Strategy-first approach focused on conversions",
    "Fast, modern, mobile-optimized builds",
    "SEO structure built into every page (schema + headings + metadata)",
    "Automations that follow up (forms, booking, CRM/Zapier)",
    "Clean code that grows with your business",
  ];

  return (
    <div id="why-us" className="relative py-20">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={[
            "transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
            shown ? motion.show : "opacity-100 translate-x-0 translate-y-0",
          ].join(" ")}
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT IMAGE (glass + glow + purple atmosphere) */}
            <div className="relative">
              {/* cyan + purple ambient blobs */}
              <div className="pointer-events-none absolute -inset-14 -z-10 rounded-full bg-sky-500/14 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 top-10 -z-10 h-[260px] w-[260px] rounded-full bg-purple-500/12 blur-3xl" />

              <div
                className="
                  group relative overflow-hidden rounded-3xl
                  border border-white/10 bg-white/5
                  backdrop-blur
                  transition hover:-translate-y-1 hover:border-white/20
                "
                style={{
                  // crisp cyan edge + subtle purple halo (premium)
                  boxShadow:
                    "0 0 0 1px rgba(34,211,238,0.22), 0 0 26px rgba(34,211,238,0.14), 0 0 90px rgba(168,85,247,0.12), 0 20px 90px rgba(0,0,0,0.45)",
                }}
              >
                {/* top bar */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-auto text-xs font-semibold text-white/60">
                    Website + analytics preview
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <img
                    src={PlumbingWebsite}
                    alt="Client website preview and performance snapshot"
                    className="h-auto w-full rounded-2xl object-cover ring-1 ring-white/10"
                  />

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 ring-1 ring-white/15 backdrop-blur">
                    Built for speed &amp; conversions
                  </div>
                </div>

                {/* hover glow (cyan + purple) */}
                <div className="pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-300/18 via-purple-500/10 to-indigo-500/8" />

                {/* subtle interior wash so it feels intentional */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-black/20" />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur">
                Why Choose Us
              </span>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                More than a website —{" "}
                <span className="bg-gradient-to-r from-sky-300 via-purple-300 to-cyan-200 bg-clip-text text-transparent">
                  a growth system
                </span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/70">
                We don’t just design pages. We build high-performance websites that attract visitors,
                convert them into leads, and make it easy to follow up — so your business can scale.
              </p>

              {/* Bullets */}
              <ul className="mt-7 space-y-3 text-sm text-white/80 sm:text-base">
                {bullets.map((b, i) => (
                  <li
                    key={b}
                    style={{ transitionDelay: shown ? `${120 + i * 60}ms` : "0ms" }}
                    className={[
                      "flex gap-3",
                      "transition-[opacity,transform] duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                      shown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5",
                    ].join(" ")}
                  >
                    <span
                      className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-cyan-100 ring-1"
                      style={{
                        background: "rgba(34,211,238,0.12)",
                        borderColor: "rgba(34,211,238,0.25)",
                        boxShadow: "0 0 16px rgba(168,85,247,0.10)",
                      }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Quote card (cyan edge + purple aura) */}
              <div
                style={{
                  transitionDelay: shown ? "520ms" : "0ms",
                  boxShadow:
                    "0 0 0 1px rgba(34,211,238,0.18), 0 0 24px rgba(34,211,238,0.10), 0 0 70px rgba(168,85,247,0.12), 0 10px 60px rgba(0,0,0,0.35)",
                }}
                className={[
                  "mt-7 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur",
                  "transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                  shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                ].join(" ")}
              >
                <span className="text-white/60">“</span>
                Our goal is to turn your website into your most reliable salesperson.
                <span className="text-white/60">”</span>
              </div>

              {/* Buttons */}
              <div
                style={{ transitionDelay: shown ? "650ms" : "0ms" }}
                className={[
                  "mt-8 flex flex-wrap items-center gap-3",
                  "transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity",
                  shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-110 active:scale-[0.99]"
                >
                  Start Your Project →
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15 active:scale-[0.99]"
                >
                  See Services →
                </a>
              </div>

              {/* trust chips (add tiny purple halo) */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/75">
                {["Core Web Vitals", "SEO structure", "Lead capture", "Automations"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur"
                    style={{
                      boxShadow: "0 0 16px rgba(168,85,247,0.08)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
