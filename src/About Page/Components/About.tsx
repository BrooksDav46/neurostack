// src/About Page Components/About.tsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Ambient background */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {/* purple/blue neon blobs */}
          <div className="absolute -top-32 left-[-120px] h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[90px]" />
          <div className="absolute top-10 right-[-140px] h-[520px] w-[520px] rounded-full bg-sky-500/18 blur-[90px]" />
          <div className="absolute bottom-[-220px] left-[20%] h-[520px] w-[520px] rounded-full bg-indigo-500/16 blur-[110px]" />

          {/* faint grid */}
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:54px_54px]" />

          {/* subtle vignette so the grid feels intentional */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45" />
        </div>

        {/* ↓ reduced page padding so it’s not so tall */}
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          {/* Header */}
          <section className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.7)]" />
                <span className="text-sm text-white/75">
                  Local-first web systems • Built for performance
                </span>
              </div>

              {/* ↓ slightly smaller headline for better proportion */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Welcome to <span className="text-sky-300">Stratum Marketing</span>
              </h1>

              <p className="text-lg leading-relaxed text-white/70">
                We build modern websites and growth systems that help{" "}
                <span className="text-white">local service businesses</span>{" "}
                get found, earn trust, and turn traffic into booked jobs.
              </p>

              {/* tightened + less repetitive */}
              <p className="text-white/60 leading-relaxed">
                If you want a site that loads fast, ranks locally, and turns visits into real
                inquiries, we build the full path — clean design, technical SEO, and conversion
                structure that scales with you.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                  Talk to us
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                >
                  View services
                </Link>
              </div>
            </div>

            {/* Right-side “identity” cards */}
            <div className="lg:col-span-5">
              {/* ↓ tighter spacing + slightly smaller padding */}
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="mb-2 text-sm font-semibold text-white/80">Who we are</div>
                  <p className="text-white/65 leading-relaxed">
                    Stratum Marketing is a systems-first web studio. We engineer the full path from{" "}
                    <span className="text-white/80">search → trust → lead → booking</span>.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-2 text-sm font-semibold text-white/80">Who we build for</div>
                  <p className="text-white/65 leading-relaxed">
                    Contractors, home services, local pros, and growing teams who want a premium
                    brand presence and consistent lead flow.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/12 via-white/5 to-sky-500/12 p-5">
                  <div className="mb-3 text-sm font-semibold text-white/80">What we care about</div>

                  {/* ↓ more compact */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="font-semibold text-white">Speed</div>
                      <div className="text-white/60">Fast loads win.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="font-semibold text-white">Clarity</div>
                      <div className="text-white/60">No confusion.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="font-semibold text-white">SEO</div>
                      <div className="text-white/60">Local visibility.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="font-semibold text-white">Conversion</div>
                      <div className="text-white/60">Leads, not vibes.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Unique “Approach” layout */}
          {/* ↓ reduced top spacing */}
          <section className="mt-12 sm:mt-16">
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">Our approach to business growth</h2>
                <p className="max-w-2xl text-white/65">
                  A site should act like a revenue system. Here’s how we build it.
                </p>
              </div>

              <div className="hidden sm:block text-sm text-white/55">
                Built for local SEO + performance
              </div>
            </div>

            {/* ↓ slightly tighter spacing */}
            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {/* Box 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="pointer-events-none absolute -top-24 left-10 h-48 w-48 rounded-full bg-sky-500/15 blur-[70px] transition group-hover:bg-sky-500/22" />
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">
                    01
                  </span>
                  <h3 className="text-lg font-semibold">Local SEO foundation</h3>
                </div>
                <p className="text-white/65 leading-relaxed">
                  Proper headings, internal structure, service + location targeting, and clean
                  technical SEO so Google understands what you do and where you do it.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• City/service page structure</li>
                  <li>• Schema + performance basics</li>
                  <li>• Trust signals + UX flow</li>
                </ul>
              </div>

              {/* Box 2 (featured) */}
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-purple-500/14 via-white/5 to-sky-500/14 p-6">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
                <div className="pointer-events-none absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-purple-500/18 blur-[80px]" />

                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">
                    02
                  </span>
                  <h3 className="text-lg font-semibold">Conversion-first design</h3>
                </div>
                <p className="text-white/65 leading-relaxed">
                  Premium visuals are nice — but we design around what makes people act: clarity,
                  proof, and a frictionless path to contact.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                    <div className="font-semibold text-white">Clear CTA</div>
                    <div className="text-white/60">No guesswork.</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                    <div className="font-semibold text-white">Trust</div>
                    <div className="text-white/60">Proof wins.</div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="pointer-events-none absolute -top-24 right-10 h-48 w-48 rounded-full bg-purple-500/15 blur-[70px] transition group-hover:bg-purple-500/22" />
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">
                    03
                  </span>
                  <h3 className="text-lg font-semibold">Automation + tracking</h3>
                </div>
                <p className="text-white/65 leading-relaxed">
                  We connect the dots: form routing, CRM handoff, analytics, and pipeline visibility
                  so you know what’s working.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• Lead capture + routing</li>
                  <li>• Analytics + event tracking</li>
                  <li>• Simple systems that scale</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local SEO paragraph block */}
          {/* ↓ reduced spacing + slightly tighter padding */}
          <section className="mt-12 sm:mt-16 rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-8">
            <h2 className="text-2xl font-semibold">Built for local SEO and real growth</h2>
            <p className="mt-3 text-white/65 leading-relaxed">
              Stratum Marketing builds websites that support local discovery — the kind of structure that
              helps you show up when people search for your services nearby. We focus on fast load
              times, clear service pages, strong calls-to-action, and clean on-page SEO so your site
              becomes an asset that compounds over time.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Get a build plan
              </Link>
              <span className="text-sm text-white/55">Friendly, no-pressure conversation.</span>
            </div>
          </section>

          {/* Optional: tiny footer spacer so it doesn’t feel cut off */}
          <div className="mt-10 sm:mt-12" />
        </div>
      </div>
    </main>
  );
}