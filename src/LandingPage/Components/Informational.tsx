// src/LandingPage/Components/Informational.tsx
// import React from "react";
import bg from "../../assets/Section_Image.png";

export default function Informational() {
  const bullets = [
    "Fast, modern, conversion-first design",
    "SEO structure built into every page",
    "Lead capture + automation ready",
    "Clean code that scales long-term",
  ];

  return (
    <section id="info" className="relative w-full overflow-hidden px-6 py-24">
      {/* ===== Background (ONLY this section) ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* ===== Overlays (keep image visible) ===== */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-purple-500/18 via-transparent to-cyan-400/12" />

      {/* ===== Grain ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          {/* ================= LEFT: FULL-HEIGHT GLASS PANEL ================= */}
          <div className="relative">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -left-14 top-12 h-72 w-72 rounded-full bg-purple-500/22 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 right-8 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl" />

            {/* glass panel */}
            <div
              className="
                relative h-full min-h-[620px]
                overflow-hidden
                rounded-[30px]
                bg-white/[0.06]
                backdrop-blur-2xl
                ring-1 ring-white/12
                px-10 py-14
              "
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.10), 0 0 42px rgba(168,85,247,0.22), 0 0 100px rgba(56,189,248,0.16), 0 35px 140px rgba(0,0,0,0.55)",
              }}
            >
              {/* neon edge strip */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-purple-300 via-cyan-200 to-purple-300 opacity-80" />

              {/* soft internal lighting */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/12 via-transparent to-cyan-400/10" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />
              </div>

              {/* subtle diagonal shine */}
              <div className="pointer-events-none absolute -left-24 top-0 h-full w-48 rotate-12 bg-white/10 blur-2xl opacity-40" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur">
                  <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.55)]" />
                  Built for real businesses
                </div>

                <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-white">
                  More than design —{" "}
                  <span className="bg-gradient-to-r from-purple-300 via-cyan-200 to-white bg-clip-text text-transparent">
                    a growth system
                  </span>
                </h3>

                <p className="mt-4 text-white/75 leading-relaxed">
                  You’re not buying a “website.” You’re getting a conversion-focused system that
                  attracts visitors, captures leads, and makes follow-up easy.
                </p>

                <div className="mt-9 space-y-3">
                  {bullets.map((b) => (
                    <div key={b} className="flex gap-3">
                      <span
                        className="
                          mt-0.5 inline-flex h-6 w-6 items-center justify-center
                          rounded-full bg-white/8 ring-1 ring-white/15
                          text-white
                        "
                        style={{
                          boxShadow:
                            "0 0 18px rgba(168,85,247,0.18), 0 0 18px rgba(56,189,248,0.12)",
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-sm text-white/80 leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>

                {/* CTA row */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="
                      inline-flex items-center justify-center rounded-xl
                      bg-purple-500 px-6 py-3 text-sm font-semibold text-white
                      shadow-lg shadow-purple-500/30
                      transition hover:bg-purple-400 active:scale-[0.99]
                    "
                  >
                    Get a free strategy call →
                  </a>

                  <a
                    href="#features"
                    className="
                      inline-flex items-center justify-center rounded-xl
                      bg-white/10 px-6 py-3 text-sm font-semibold text-white
                      ring-1 ring-white/15 backdrop-blur
                      transition hover:bg-white/15 active:scale-[0.99]
                    "
                  >
                    See what’s included →
                  </a>
                </div>

                {/* trust chips */}
                <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/75">
                  {["Performance", "UX", "SEO", "Lead Capture", "Automations"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: SEO TEXT (premium, readable) ================= */}
          <div className="flex items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/85 ring-1 ring-white/15 backdrop-blur">
                How we build
              </div>

              <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-white">
                Websites built to{" "}
                <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  rank & convert
                </span>
              </h3>

              <p className="mt-4 text-white/70 leading-relaxed">
                Every project we take on is designed with performance, user experience, and business
                goals in mind. Modern web development is about more than visuals — it’s about
                creating a digital system that helps your company grow.
              </p>

              <p className="mt-4 text-white/70 leading-relaxed">
                From clean code and responsive layouts to advanced SEO strategies and lead generation
                tools, we combine development and marketing into one powerful solution.
              </p>

              <p className="mt-4 text-white/70 leading-relaxed">
                Whether you need a brand-new site, a redesign, or a full digital platform, our
                approach ensures your website becomes a real asset — not just an online brochure.
              </p>

              {/* mini highlight list */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Fast builds", "Clean code + speed"],
                  ["SEO ready", "Structure + metadata"],
                  ["Lead capture", "Forms + follow-up"],
                  ["Scales with you", "Easy to expand"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10 backdrop-blur"
                    style={{
                      boxShadow:
                        "0 0 24px rgba(56,189,248,0.08), 0 0 24px rgba(168,85,247,0.06)",
                    }}
                  >
                    <div className="text-sm font-semibold text-white">{t}</div>
                    <div className="mt-1 text-sm text-white/65">{d}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#contact"
                  className="
                    inline-flex items-center justify-center rounded-xl
                    bg-white/10 px-7 py-3 text-sm font-semibold text-white
                    ring-1 ring-white/15 backdrop-blur
                    transition hover:bg-white/15 active:scale-[0.99]
                  "
                >
                  Let’s talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
