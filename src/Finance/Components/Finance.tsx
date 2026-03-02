import { Link } from "react-router-dom";

type Tier = {
  name: string;
  priceLabel: string;
  tagline: string;
  includes: string[];
  highlight?: boolean;
};

function PackageCard({
  name,
  priceLabel,
  tagline,
  includes,
  badge,
  badgeStyle = "sky",
  featured = false,
}: {
  name: string;
  priceLabel: string;
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
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 right-6 h-56 w-56 rounded-full bg-purple-500/18 blur-[85px]" />
        <div className="absolute -bottom-24 left-6 h-56 w-56 rounded-full bg-sky-500/16 blur-[85px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      {/* Sheen */}
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
            <div className="mt-1 text-2xl font-bold">{priceLabel}</div>
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
            Get a quote →
          </Link>
        </div>

        {featured ? (
          <div className="mt-3 text-xs text-white/55">
            Best fit for most El Paso service businesses.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Packages() {
  const buildTiers: Tier[] = [
    {
      name: "Starter Package",
      priceLabel: "Starter",
      tagline: "Clean, credible, ready to market.",
      includes: [
        "Core pages (Home, Services, Contact)",
        "Mobile-first design with modern UI",
        "Local SEO-ready structure (headings + internal links)",
        "Lead capture (form + tap-to-call CTAs)",
      ],
    },
    {
      name: "Business Package",
      priceLabel: "Business",
      tagline: "Built to rank locally and grow month over month.",
      includes: [
        "Service page structure that supports SEO + conversions",
        "On-page SEO setup (titles, meta, internal linking, layout)",
        "Performance tuning (Core Web Vitals focus)",
        "Tracking setup (calls + forms measurable)",
      ],
      highlight: true,
    },
    {
      name: "Pro Package",
      priceLabel: "Pro",
      tagline: "Expanded SEO + trust + tracking for higher volume.",
      includes: [
        "Location/area expansion pages for El Paso visibility",
        "Trust upgrades (proof blocks, FAQs, before/after layout)",
        "Google Ads landing flow planning (PPC-ready structure)",
        "Conversion tracking + goal events for better decisions",
      ],
    },
    {
      name: "Enterprise Package",
      priceLabel: "Enterprise",
      tagline: "Multi-service growth stack with ads + scale in mind.",
      includes: [
        "Large site architecture + content roadmap",
        "Advanced local SEO structure for multiple services/areas",
        "Technical cleanup + performance hardening",
        "Custom integrations + automation buildout",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="relative overflow-hidden">
        {/* Background */}
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
                Stratum Marketing • El Paso • Websites • SEO • Google Ads • LSA
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Choose a package. Start getting leads.
              </h1>

              <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
                Pick the package that matches where your business is today.
                We’ll confirm scope, deliverables, and timeline before we start —
                so you get a clean build, local visibility, and ads-ready tracking.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                  Get a quote →
                </Link>

                <a
                  href="#packages"
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                >
                  View packages
                </a>
              </div>

              <p className="text-sm text-white/55">
                We’ll recommend the smallest package that wins — and tell you what to do next if you’re not ready yet.
              </p>
            </div>

            {/* Simple “What’s included” console (NO “vs”) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_70px_rgba(2,6,23,0.45)]">
                <div className="pointer-events-none absolute -top-28 right-6 h-56 w-56 rounded-full bg-purple-500/16 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-28 left-6 h-56 w-56 rounded-full bg-sky-500/14 blur-[90px]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white/85">
                      What we do (the stack)
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      The goal is simple: visibility + conversions + measurable results.
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
                    Included
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    ["Websites", "Fast, modern pages built to convert"],
                    ["Local SEO", "On-page structure for El Paso searches"],
                    ["Google PPC", "Ads-ready landing flow + tracking"],
                    ["Google LSA", "Lead handling + call tracking setup"],
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
                  Clear deliverables + timeline before we start.
                </div>
              </div>
            </div>
          </header>

          {/* Packages */}
          <section id="packages" className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Packages</h2>
                <p className="mt-1 text-white/65">
                  Choose the tier that matches where you are today.
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Final quote is based on scope
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {buildTiers.map((t) => (
                <PackageCard
                  key={t.name}
                  name={t.name}
                  priceLabel={t.priceLabel}
                  tagline={t.tagline}
                  includes={t.includes}
                  badge={t.highlight ? "Best value" : undefined}
                  badgeStyle="sky"
                  featured={t.name === "Business Package"}
                />
              ))}
            </div>

            {/* SEO authority block (hidden) */}
            <div className="sr-only">
              <h2>El Paso Web Design, SEO, Google Ads, and LSA Packages</h2>
              <p>
                Stratum Marketing provides website design, local SEO, Google PPC management, and Google Local Services Ads support for
                El Paso service businesses. Packages are structured around scope and growth goals so you get a clear plan to generate calls and leads.
              </p>
            </div>
          </section>

          {/* Financing */}
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
                    If financing helps you move now, ask and we’ll share options. The goal is to get you live, visible, and converting.
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
                  ["Move sooner", "Start marketing while you scale."],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-black/20 p-4">
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
                  Ask about financing →
                </Link>
              </div>

              <div className="mt-4 text-xs text-white/50">
                Stratum Marketing • El Paso • Websites • Local SEO • Google PPC • Google LSA
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}