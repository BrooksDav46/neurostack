// src/LandingPage/Components/ContactUs.tsx
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mpqpllgj");

  // =========================
  // SUCCESS STATE
  // =========================
  if (state.succeeded) {
    return (
      <section id="contact" className="relative w-full bg-slate-950 text-white">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
        </div>

        {/* ↓ reduced section height */}
        <div className="relative mx-auto w-full max-w-screen-2xl px-6 py-16 sm:py-20">
          {/* ↓ slightly tighter card padding */}
          <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-white/5 p-8 sm:p-10 text-center ring-1 ring-white/10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <span className="text-2xl">✅</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Message received
            </h2>

            <p className="mt-3 text-base text-slate-200">
              We got your request — we’ll reply soon with next steps and a simple plan.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 active:scale-[0.99]"
              >
                Back to home →
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 active:scale-[0.99]"
              >
                View services
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =========================
  // DEFAULT FORM STATE
  // =========================
  return (
    <section id="contact" className="relative w-full bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
      </div>

      {/* ↓ reduced overall section height */}
      <div className="relative mx-auto w-full max-w-screen-2xl px-6 py-14 sm:py-16">
        {/* Top header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-sky-200 ring-1 ring-white/10">
            Let’s Build Something Real
          </span>

          {/* ↓ slightly smaller headline to reduce height */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              Stratum Marketing
            </span>
          </h2>

          {/* ↓ slightly tighter paragraph */}
          <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
            Tell us what you’re trying to achieve. We’ll reply with clear next steps to help you
            get more traffic, leads, and customers in El Paso.
          </p>
        </div>

        {/* Main grid */}
        {/* ↓ reduced top margin + reduced gap */}
        <div className="mt-9 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* Left: Value + details */}
          {/* ↓ reduced padding */}
          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

            <h3 className="text-xl font-bold sm:text-2xl">What you get</h3>

            <p className="mt-2 text-slate-200">
              A complete growth system — high-performance websites, local SEO, and Google Ads —
              designed to generate real leads (calls, forms, bookings), not just impressions.
            </p>

            {/* ↓ tighter spacing */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">Websites</div>
                <div className="mt-1 text-sm text-slate-200">
                  Conversion-focused pages built to turn visitors into customers
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">Local SEO</div>
                <div className="mt-1 text-sm text-slate-200">
                  Technical + on-page structure to rank in El Paso searches
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">Google Ads</div>
                <div className="mt-1 text-sm text-slate-200">
                  High-intent PPC campaigns tuned for cost per lead
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">Tracking</div>
                <div className="mt-1 text-sm text-slate-200">
                  Calls + forms tracked so you know what’s working
                </div>
              </div>
            </div>

            {/* ↓ tighter spacing */}
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-sky-500/10 to-transparent p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Good fit if you want:</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-sky-200">
                    ✓
                  </span>
                  A premium brand presence that builds trust immediately
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-sky-200">
                    ✓
                  </span>
                  Leads from Google (Maps + Search + Ads) — not random traffic
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-sky-200">
                    ✓
                  </span>
                  A system you can scale month over month with real reporting
                </li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Websites", "Local SEO", "Google Ads", "Lead Capture", "Tracking"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 text-xs text-slate-300">
              Response time: typically{" "}
              <span className="font-semibold text-white">within 24 hours</span>.
            </div>
          </div>

          {/* Right: Form (smaller + tighter) */}
          {/* ↓ smaller max width + smaller padding */}
          <div className="relative mx-auto w-full max-w-[600px] overflow-hidden rounded-3xl bg-white p-6 sm:p-7 text-slate-900 shadow-[0_30px_90px_rgba(2,6,23,0.45)] ring-1 ring-white/10">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto text-xs font-semibold text-slate-500">Project Intake</span>
            </div>

            {/* ↓ slightly smaller title + tighter spacing */}
            <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Start your growth plan <span className="font-semibold text-slate-400">(fast)</span>
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Share the basics and we’ll respond with next steps to improve your traffic, leads, and
              conversions in El Paso.
            </p>

            {/* ↓ tighter top margin + smaller spacing */}
            <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
              <input type="hidden" name="source" value="Stratum Marketing Website" />

              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-slate-600">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-slate-600">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-600">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    autoComplete="tel"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="text-xs font-semibold text-slate-600">
                    Current website (optional)
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://"
                    autoComplete="url"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="text-xs font-semibold text-slate-600">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue="Website + Local SEO"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                >
                  <option>Website + Local SEO</option>
                  <option>SEO Only</option>
                  <option>Google Ads / PPC</option>
                  <option>Website Redesign</option>
                  <option>Landing Page + Ads Funnel</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-semibold text-slate-600">
                  Project details (goal, timeline, what’s not working)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Example: I want to rank in El Paso and get more calls. I need a better website, local SEO pages, and Google Ads to drive leads..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
              >
                {state.submitting ? "Sending..." : "Send request →"}
              </button>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>No spam. Just a quick reply.</span>
                <a href="#home" className="font-semibold text-blue-700 hover:text-blue-800">
                  Back to top ↑
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* SEO Authority (hidden, helps local relevance) */}
        <div className="sr-only">
          <h2>El Paso Digital Marketing Agency</h2>
          <p>
            Stratum Marketing is a digital marketing agency in El Paso, Texas offering website
            development, local SEO, Google Ads management, PPC campaigns, and lead generation for
            service businesses. We help companies grow with conversion-focused websites, search
            engine optimization, and paid search advertising.
          </p>
          <p>
            If you’re looking for digital marketing in El Paso, TX including SEO services, Google
            Ads PPC, and modern web design, contact Stratum Marketing to request a strategy call.
          </p>
        </div>

        {/* Bottom strip */}
        {/* ↓ reduced top margin + tighter padding */}
        <div className="mt-7 rounded-3xl bg-white/5 px-6 py-4 ring-1 ring-white/10">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <div className="text-sm font-semibold text-white">Prefer a quick call?</div>
              <div className="mt-1 text-sm text-slate-200">
                Book a 15-minute strategy chat and we’ll map the fastest path to results.
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 active:scale-[0.99]"
            >
              Book a strategy call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}