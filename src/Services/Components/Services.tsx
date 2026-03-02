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
    title: "High-Conversion Websites",
    blurb:
      "Premium websites built to generate calls and form submissions — not just look good.",
    bullets: ["Conversion-first layout", "Mobile-first UX", "Fast load + trust signals"],
    tag: "Build",
  },
  {
    title: "Local SEO (El Paso)",
    blurb:
      "Technical + on-page structure that helps you show up in Google Search and Maps.",
    bullets: ["Service + city page system", "Schema + headings", "Internal linking + crawl clarity"],
    tag: "Rank",
  },
  {
    title: "Google Ads Management",
    blurb:
      "High-intent traffic with conversion tracking, landing pages, and lead quality focus.",
    bullets: ["Search campaigns", "Call + form tracking", "Negative keywords + optimization"],
    tag: "Scale",
  },
  {
    title: "Landing Pages + Funnels",
    blurb:
      "Purpose-built pages for ads and offers — tighter messaging, higher conversion rates.",
    bullets: ["Offer positioning", "A/B-ready layout", "Form + call CTAs"],
    tag: "Convert",
  },
  {
    title: "Tracking + Attribution",
    blurb:
      "Know what’s working. Track calls, forms, and booked jobs — not just clicks.",
    bullets: ["GA4 + events", "Call tracking setup", "Lead source clarity"],
    tag: "Measure",
  },
  {
    title: "Automations + CRM Handoff",
    blurb:
      "Route leads instantly, follow up faster, and keep your pipeline organized.",
    bullets: ["Zapier/CRM routing", "Auto follow-up", "Lead notifications + tagging"],
    tag: "Systemize",
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
      {/* glow */}
      <div className="pointer-events-none absolute -top-24 right-6 h-52 w-52 rounded-full bg-sky-500/10 blur-[70px] transition group-hover:bg-sky-500/18" />
      <div className="pointer-events-none absolute -bottom-24 left-6 h-52 w-52 rounded-full bg-purple-500/10 blur-[70px] transition group-hover:bg-purple-500/18" />

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
        <span className="text-xs text-white/50">Built for lead flow</span>
        <Link
          to="/contact"
          className="text-sm font-semibold text-sky-300 transition hover:text-sky-200"
        >
          Talk to us →
        </Link>
      </div>
    </div>
  );
}

function ProofRow() {
  const items = [
    ["Local visibility", "Service + city structure so Google understands you."],
    ["Conversion path", "CTA flow + proof so visitors take action."],
    ["Performance", "Fast load times that support rankings and UX."],
    ["Tracking", "Calls + forms tracked so you can scale confidently."],
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(([k, v]) => (
        <div
          key={k}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_rgba(2,6,23,0.25)]"
        >
          <div className="text-sm font-semibold text-white">{k}</div>
          <div className="mt-1 text-sm text-white/60">{v}</div>
        </div>
      ))}
    </div>
  );
}

function InevitableBlock() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="pointer-events-none absolute inset-0">
        {/* diagonal band */}
        <div className="absolute -left-48 top-[-240px] h-[560px] w-[1200px] rotate-12 bg-gradient-to-r from-purple-500/22 to-sky-500/18 blur-[0px]" />
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
        {/* edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.55)]" />
                Our approach
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  ["Local SEO foundation", "Structure + schema + internal links"],
                  ["Conversion-first design", "Clarity, proof, CTA flow"],
                  ["Google Ads ready", "Landing pages + tracking"],
                  ["Lead system", "Routing + reporting + follow-up"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-white">{k}</div>
                    <div className="text-sm text-white/60">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["El Paso SEO", "Google Ads", "Landing Pages", "Tracking", "Automation"].map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_14px_rgba(192,132,252,0.65)]" />
              Built to rank + convert
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Local-first marketing that becomes your{" "}
              <span className="bg-gradient-to-r from-sky-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                lead engine
              </span>
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Stratum Marketing builds the full growth system: a premium website, local SEO structure,
              and optional Google Ads — all tied together with tracking so you can scale what works.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/65">
              {[
                "Service + location structure that supports El Paso searches",
                "High-trust layouts that turn visits into calls",
                "Landing pages built specifically for ad traffic",
                "Tracking that connects leads back to source",
              ].map((b) => (
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
                Request a growth plan
              </Link>
              <span className="text-sm text-white/55">Tell us your service + area.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngagementPaths() {
  const paths = [
    {
      title: "Website Build (Lead-Gen)",
      desc: "Best if you need a premium site that converts and is built correctly from day one.",
      points: ["Homepage + core pages", "Conversion layout + proof", "Speed + technical SEO setup"],
    },
    {
      title: "Local SEO Foundation",
      desc: "Best if you want to show up in El Paso searches with a real structure Google understands.",
      points: ["Service + city page system", "On-page SEO + schema", "Internal links + index control"],
    },
    {
      title: "Google Ads + Landing Pages",
      desc: "Best if you want leads now while SEO builds — tracked and optimized for quality.",
      points: ["Search campaigns", "Landing pages built for ads", "Call/form conversion tracking"],
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">How clients work with us</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Clear options. No fluff. We’ll recommend the fastest path based on your goals.
          </p>
        </div>
        <div className="text-sm text-white/55">No long-term lock-in required.</div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {paths.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.28)]"
          >
            <div className="pointer-events-none absolute -top-24 right-6 h-48 w-48 rounded-full bg-sky-500/10 blur-[70px]" />
            <div className="pointer-events-none absolute -bottom-24 left-6 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px]" />

            <div className="text-lg font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-white/65 leading-relaxed">{p.desc}</div>

            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {p.points.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-semibold text-sky-300 transition hover:text-sky-200"
              >
                Ask about this →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LocalSEOBlock() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
      <h2 className="text-2xl font-semibold">El Paso digital marketing services</h2>
      <p className="mt-3 text-white/70 leading-relaxed">
        We serve businesses in El Paso, Texas with website design and development, local SEO strategy,
        Google Ads management, landing pages, and conversion tracking. If you want more calls, better
        visibility, and a site that actually performs, we’ll map a clean plan and build the system.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
        >
          Get a plan
        </Link>
        <span className="text-sm text-white/55">Quick reply.</span>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="relative overflow-hidden">
        {/* background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute -top-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-purple-500/18 blur-[95px]" />
        <div className="pointer-events-none absolute top-10 right-[-160px] h-[520px] w-[520px] rounded-full bg-sky-500/16 blur-[95px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-12">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.7)]" />
              Services
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Marketing services built for{" "}
              <span className="bg-gradient-to-r from-sky-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                real lead growth
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-white/70">
              Stratum Marketing builds websites, local SEO, and Google Ads systems that generate calls and
              form submissions — with tracking so you can scale confidently.
            </p>

            <ProofRow />
          </header>

          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </section>

          <InevitableBlock />

          <EngagementPaths />

          <LocalSEOBlock />

          <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="text-2xl font-semibold">Want a clear plan?</h2>
            <p className="mt-2 text-white/70">
              Tell us what you do and where you operate — we’ll recommend the fastest path to results.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Contact Stratum Marketing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}