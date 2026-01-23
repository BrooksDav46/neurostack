// src/Services Page Components/Services.tsx
import { Link } from "react-router-dom";

type Service = {
  title: string;
  blurb: string;
  bullets: string[];
  tag: string;
};

const SERVICES: Service[] = [
  {
    title: "Web Systems",
    blurb: "Fast, modern sites built like a product — clean UI, strong structure, built to scale.",
    bullets: ["React + Tailwind", "Mobile-first UX", "Speed + structure"],
    tag: "Build",
  },
  {
    title: "Local SEO Foundation",
    blurb: "We build the on-page structure that helps you show up for nearby searches.",
    bullets: ["Service + city pages", "Schema + headings", "Internal linking"],
    tag: "Rank",
  },
  {
    title: "Conversion Design",
    blurb: "Design that turns visitors into leads — clarity, proof, and frictionless CTAs.",
    bullets: ["Clear CTA flow", "Trust signals", "High-intent layouts"],
    tag: "Convert",
  },
  {
    title: "Automation + Tracking",
    blurb: "Connect your site to your pipeline so you can follow every lead end-to-end.",
    bullets: ["Lead routing", "CRM handoff", "Analytics events"],
    tag: "Systemize",
  },
  {
    title: "Performance Optimization",
    blurb: "Core Web Vitals improvements that boost UX and support SEO.",
    bullets: ["Image + asset tuning", "Code splitting", "CWV focus"],
    tag: "Speed",
  },
  {
    title: "Scalable Architecture",
    blurb: "A site you can grow into — add pages, offers, and locations without breaking it.",
    bullets: ["Modular sections", "Reusable components", "Future-proof structure"],
    tag: "Scale",
  },
];

function ServiceCard({ s }: { s: Service }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border border-white/10
        bg-white/5 p-6 transition
        hover:-translate-y-1 hover:bg-white/8
        shadow-[0_18px_60px_rgba(2,6,23,0.35)]
      "
    >
      {/* Neon glow accents */}
      <div className="pointer-events-none absolute -top-24 right-6 h-48 w-48 rounded-full bg-sky-500/10 blur-[70px] transition group-hover:bg-sky-500/18" />
      <div className="pointer-events-none absolute -bottom-24 left-6 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px] transition group-hover:bg-purple-500/18" />

      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
        <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.7)]" />
        {s.tag}
      </div>

      <h3 className="text-lg font-semibold">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{s.blurb}</p>

      <ul className="mt-4 space-y-2 text-sm text-white/60">
        {s.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-white/50">Built for local visibility</span>
        <Link
          to="/contact"
          className="text-sm font-semibold text-sky-300 transition hover:text-sky-200"
        >
          Get this →
        </Link>
      </div>
    </div>
  );
}

function ParallaxBlock({
  eyebrow,
  title,
  body,
  bullets,
  reverse,
  accent = "purple",
}: {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
  accent?: "purple" | "sky";
}) {
  const accentA =
    accent === "purple" ? "from-purple-500/25" : "from-sky-500/22";
  const accentB =
    accent === "purple" ? "to-sky-500/18" : "to-purple-500/18";
  const dot =
    accent === "purple" ? "bg-purple-300" : "bg-sky-300";

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      {/* HARD-VISIBLE background */}
      <div className="pointer-events-none absolute inset-0">
        {/* diagonal neon band */}
        <div
          className={`absolute -left-40 top-[-220px] h-[560px] w-[1200px] rotate-12 bg-gradient-to-r ${accentA} ${accentB} blur-[0px]`}
        />
        {/* grid texture */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
        {/* edge glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div
          className={`grid gap-8 lg:grid-cols-12 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* LEFT: STAT/PROOF STACK */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span
                  className={`h-2 w-2 rounded-full ${dot} shadow-[0_0_18px_rgba(192,132,252,0.55)]`}
                />
                {eyebrow}
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  ["Local Visibility", "Service + location structure"],
                  ["Conversion Path", "CTA flow + trust signals"],
                  ["Performance", "Speed + Core Web Vitals focus"],
                  ["Tracking Ready", "Events + lead routing"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold text-white">{k}</div>
                    <div className="text-sm text-white/60">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Local SEO", "Schema", "Speed", "Mobile UX", "Lead Capture"].map(
                  (p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
                    >
                      {p}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">{body}</p>

            <ul className="mt-6 space-y-3 text-sm text-white/65">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Get a build plan
              </Link>
              <span className="text-sm text-white/55">Tell us your service + area.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="relative overflow-hidden">
        {/* ✅ softer grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -top-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-purple-500/18 blur-[95px]" />
        <div className="pointer-events-none absolute top-10 right-[-160px] h-[520px] w-[520px] rounded-full bg-sky-500/16 blur-[95px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 space-y-14">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Services built for growth
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              NeuroStack builds high-performance websites and local growth systems
              for service businesses. Clean design, technical SEO, and conversion
              structure — built to scale.
            </p>
          </header>

          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="text-2xl font-semibold">Want a build plan?</h2>
            <p className="mt-2 text-white/70">
              Tell us what you do and where you operate — we’ll map the fastest path to a site that performs.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Contact NeuroStack
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
