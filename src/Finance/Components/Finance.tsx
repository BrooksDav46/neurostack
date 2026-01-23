import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

function formatUSD(n: number) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `$${Math.round(n).toLocaleString()}`;
  }
}

type Tier = {
  name: string;
  price: string;
  tagline: string;
  includes: string[];
  highlight?: boolean;
};

function PackageCard({
  name,
  price,
  tagline,
  includes,
  badge,
  badgeStyle = "sky",
  featured = false,
}: {
  name: string;
  price: string;
  tagline: string;
  includes: string[];
  badge?: string;
  badgeStyle?: "sky" | "purple";
  featured?: boolean;
}) {
  const badgeClass =
    badgeStyle === "purple"
      ? "border-purple-300/25 bg-purple-500/10 text-purple-200"
      : "border-sky-300/30 bg-sky-500/10 text-sky-200";

  const ring =
    badgeStyle === "purple"
      ? "hover:border-purple-200/35 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.22),0_30px_80px_rgba(2,6,23,0.55)]"
      : "hover:border-sky-200/35 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.20),0_30px_80px_rgba(2,6,23,0.55)]";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border bg-white/5 p-5",
        "shadow-[0_18px_60px_rgba(2,6,23,0.35)] transition-all duration-300",
        "hover:-translate-y-1 hover:bg-white/8",
        ring,
        featured ? "lg:scale-[1.03] border-sky-300/35" : "border-white/10",
      ].join(" ")}
    >
      {/* Glow sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 right-6 h-56 w-56 rounded-full bg-purple-500/18 blur-[85px]" />
        <div className="absolute -bottom-24 left-6 h-56 w-56 rounded-full bg-sky-500/16 blur-[85px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      {/* Subtle sheen */}
      <div
        className="
          pointer-events-none absolute -inset-x-24 -top-24 h-40 rotate-12
          bg-gradient-to-r from-transparent via-white/12 to-transparent
          opacity-0 blur-md transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Featured wash */}
      {featured ? (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
        </div>
      ) : null}

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white/90">{name}</div>
            <div className="mt-1 text-2xl font-bold">{price}</div>
            <div className="mt-1 text-sm text-white/65">{tagline}</div>
          </div>

          {badge ? (
            <span className={`rounded-full border px-3 py-1 text-xs ${badgeClass}`}>
              {badge}
            </span>
          ) : null}
        </div>

        <ul className="mt-4 space-y-2 text-sm text-white/65">
          {includes.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/35" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <Link
            to="/contact"
            className={[
              "inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition",
              featured
                ? "bg-sky-500 text-white hover:bg-sky-600"
                : "bg-white text-blue-900 hover:bg-blue-50",
            ].join(" ")}
          >
            Choose {name}
          </Link>
        </div>

        {featured ? (
          <div className="mt-3 text-xs text-white/55">
            Recommended for most local service businesses.
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MiniField({
  label,
  value,
  onChange,
  right,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  right?: string;
  min?: number;
  max?: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-2.5">
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs text-white/60">{label}</label>
        {right ? <span className="text-[11px] text-white/45">{right}</span> : null}
      </div>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#020617]/60 px-3 py-2 text-sm text-white outline-none focus:border-sky-300/60"
      />
    </div>
  );
}

export default function Finance() {
  const [avgJobValue, setAvgJobValue] = useState(2500);
  const [closeRate, setCloseRate] = useState(30);
  const [leadsPerMonth, setLeadsPerMonth] = useState(20);

  const { estJobs, estRevenue } = useMemo(() => {
    const jobs = (Math.max(0, leadsPerMonth) * Math.max(0, closeRate)) / 100;
    const revenue = jobs * Math.max(0, avgJobValue);
    return { estJobs: jobs, estRevenue: revenue };
  }, [avgJobValue, closeRate, leadsPerMonth]);

  const buildTiers: Tier[] = [
    {
      name: "Starter Build",
      price: "From $1,500",
      tagline: "Clean, fast, credible — built to convert.",
      includes: [
        "1–3 core pages (Home + Services + Contact)",
        "Mobile-first layout + modern UI",
        "Basic local SEO structure (headings, internal layout)",
        "Lead capture (form + call CTAs)",
      ],
    },
    {
      name: "Growth Build",
      price: "From $3,500",
      tagline: "Built to rank locally and scale.",
      includes: [
        "Service page structure + stronger conversion flow",
        "Local SEO foundations (schema + on-page cleanup)",
        "Speed / Core Web Vitals pass",
        "Tracking-ready setup (events + analytics plan)",
      ],
      highlight: true,
    },
    {
      name: "Pro System",
      price: "From $6,500",
      tagline: "A real pipeline system, not a brochure.",
      includes: [
        "Service + location expansion structure",
        "Higher-trust design (proof, FAQs, before/after layout)",
        "Tracking + funnel visibility (events + goals)",
        "Automation-ready routing (CRM handoff planning)",
      ],
    },
    {
      name: "Enterprise",
      price: "$10,000+",
      tagline: "Multi-location, multi-service, high volume.",
      includes: [
        "Large site architecture + scaling roadmap",
        "Advanced local SEO structure across markets",
        "Performance tuning + technical cleanup",
        "Custom integrations / automation buildout",
      ],
    },
  ];

  const maintenanceTiers: Tier[] = [
    {
      name: "Care",
      price: "$149/mo",
      tagline: "Keep it healthy and current.",
      includes: [
        "Basic updates (text/images)",
        "Security + uptime checks",
        "Monthly performance check",
      ],
    },
    {
      name: "Growth Care",
      price: "$399/mo",
      tagline: "Ongoing improvements + SEO support.",
      includes: [
        "Monthly on-page improvements",
        "New section/page additions (light)",
        "Tracking review + iteration",
      ],
      highlight: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="relative overflow-hidden">
        {/* Premium background accents (no grid) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-[-180px] h-[620px] w-[620px] rounded-full bg-purple-500/18 blur-[130px]" />
          <div className="absolute top-0 right-[-220px] h-[640px] w-[640px] rounded-full bg-sky-500/16 blur-[130px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:34px_34px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 space-y-10">
          {/* Header */}
          <header className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.65)]" />
                Pricing + ROI clarity • Built for local growth
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Pricing that scales with your business.
              </h1>

              <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
                Our builds start at{" "}
                <span className="text-white/90 font-semibold">$1,500</span> and scale
                to <span className="text-white/90 font-semibold">$10,000+</span> for
                enterprise systems. Everything is scoped to what you actually need —
                no fluff, no bloat.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                  Get a quote
                </Link>

                <a
                  href="#packages"
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                >
                  View packages
                </a>

                <a
                  href="#roi"
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                >
                  Estimate ROI
                </a>
              </div>

              <p className="text-sm text-white/55">
                We’ll recommend the smallest package that wins — and tell you if it’s not worth it.
              </p>
            </div>

            {/* Finance Console */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_70px_rgba(2,6,23,0.45)]">
                <div className="pointer-events-none absolute -top-28 right-6 h-56 w-56 rounded-full bg-purple-500/16 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-28 left-6 h-56 w-56 rounded-full bg-sky-500/14 blur-[90px]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white/85">
                      What pricing depends on
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      Scope, pages, integrations, and scale.
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
                    Finance Console
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    ["Service + location needs", "How many services/areas"],
                    ["Conversion requirements", "Calls/forms/booking flow"],
                    ["Tracking + automation", "Pipeline visibility + routing"],
                    ["Performance needs", "Speed/CWV + clean build"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <div className="text-sm text-white/70">{k}</div>
                      <div className="text-sm font-semibold text-white/85">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-xs text-white/50">
                  You get a scoped plan with clear deliverables before we start.
                </div>
              </div>
            </div>
          </header>

          {/* PACKAGES */}
          <section id="packages" className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Build packages</h2>
                <p className="mt-1 text-white/65">
                  Simple tiers. Clean scope. Built for local service businesses.
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Pricing shown as “from” — final is scoped
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {buildTiers.map((t) => (
                <PackageCard
                  key={t.name}
                  name={t.name}
                  price={t.price}
                  tagline={t.tagline}
                  includes={t.includes}
                  badge={t.highlight ? "Best value" : undefined}
                  badgeStyle="sky"
                  featured={t.name === "Growth Build"}
                />
              ))}
            </div>
          </section>

          {/* FINANCING */}
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 left-10 h-56 w-56 rounded-full bg-sky-500/14 blur-[90px]" />
              <div className="absolute -bottom-28 right-10 h-56 w-56 rounded-full bg-purple-500/14 blur-[90px]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
            </div>

            <div className="relative p-7 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white/90">Financing available</h2>
                  <p className="mt-1 text-white/65">
                    Don’t delay a build that will pay for itself. We offer financing options so you can
                    move now and scale as leads come in.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                  Ask for terms
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["Fast approval", "Simple application, quick response."],
                  ["Flexible terms", "Choose a plan that fits cash flow."],
                  ["Build sooner", "Start generating leads while you pay."],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-sm font-semibold text-white/90">{k}</div>
                    <div className="mt-1 text-sm text-white/60">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                  Ask about financing
                </Link>
              </div>
            </div>
          </section>

          {/* MAINTENANCE */}
          <section className="space-y-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white/90">Maintenance (optional)</h2>
                <p className="mt-1 text-white/65">
                  For businesses that want updates, performance checks, and ongoing improvements.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {maintenanceTiers.map((t) => (
                <PackageCard
                  key={t.name}
                  name={t.name}
                  price={t.price}
                  tagline={t.tagline}
                  includes={t.includes}
                  badge={t.highlight ? "Most popular" : undefined}
                  badgeStyle="purple"
                  featured={t.name === "Growth Care"}
                />
              ))}
            </div>
          </section>

          {/* ROI */}
          <section
            id="roi"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/70 to-transparent" />
              <div className="absolute -top-24 left-12 h-56 w-56 rounded-full bg-purple-500/14 blur-[90px]" />
              <div className="absolute -bottom-24 right-12 h-56 w-56 rounded-full bg-sky-500/12 blur-[90px]" />
            </div>

            <div className="relative p-6 sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">ROI estimator</h2>
                  <p className="mt-1 max-w-3xl text-white/65">
                    Quick planning math. Not a promise — a clarity tool.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                  Local leads → booked work
                </span>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-12">
                <div className="lg:col-span-7 grid gap-3 sm:grid-cols-3">
                  <MiniField
                    label="Leads / month"
                    value={leadsPerMonth}
                    onChange={setLeadsPerMonth}
                    min={0}
                  />
                  <MiniField
                    label="Close rate (%)"
                    value={closeRate}
                    onChange={setCloseRate}
                    min={0}
                    max={100}
                    right="0–100"
                  />
                  <MiniField
                    label="Avg job value"
                    value={avgJobValue}
                    onChange={setAvgJobValue}
                    min={0}
                  />
                </div>

                <div className="lg:col-span-5">
                  <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/12 via-white/5 to-sky-500/12 p-5">
                    <div className="text-sm font-semibold text-white/85">
                      Estimated monthly impact
                    </div>

                    <div className="mt-4 grid gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="text-xs text-white/55">Jobs closed / month</div>
                        <div className="mt-1 text-2xl font-bold">{estJobs.toFixed(1)}</div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="text-xs text-white/55">Revenue / month</div>
                        <div className="mt-1 text-2xl font-bold">{formatUSD(estRevenue)}</div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                      >
                        Get a real estimate
                      </Link>
                      <span className="text-sm text-white/55">We’ll scope it honestly.</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                For local service businesses, ROI usually comes from better local visibility,
                stronger trust signals, and a conversion path that makes calling or requesting
                an estimate effortless. NeuroStack focuses on performance, structure, and clarity.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="text-2xl font-semibold">Want a scoped price?</h2>
            <p className="mt-2 text-white/70">
              Tell us your service + the areas you serve. We’ll recommend the smallest package that wins.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
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
