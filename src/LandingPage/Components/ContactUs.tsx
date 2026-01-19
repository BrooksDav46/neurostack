// src/LandingPage/Components/ContactUs.tsx
import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        {/* glow blobs */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
      </div>

      <div className="relative mx-auto w-full max-w-screen-2xl px-6 py-20">
        {/* Top header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-sky-200 ring-1 ring-white/10">
            Let’s Build Something Real
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              NeuroStack
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
            Tell us what you’re trying to achieve and what’s not working today. We’ll reply with
            a clear plan, timeline, and pricing range — no fluff.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          {/* Left: Value + details */}
          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

            <h3 className="text-2xl font-bold">What you get</h3>
            <p className="mt-2 text-slate-200">
              A conversion-first build with technical SEO baked in — designed to look premium and
              generate leads.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">Fast launch</div>
                <div className="mt-1 text-sm text-slate-200">
                  Typical build: <span className="font-semibold text-white">7–14 days</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">Performance</div>
                <div className="mt-1 text-sm text-slate-200">
                  Core Web Vitals-focused: <span className="font-semibold text-white">speed + UX</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">SEO-ready</div>
                <div className="mt-1 text-sm text-slate-200">
                  Schema, structure, metadata, internal links
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-sky-200">Lead capture</div>
                <div className="mt-1 text-sm text-slate-200">
                  Forms, booking, CRM/Zapier automations
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-gradient-to-r from-blue-600/20 via-sky-500/10 to-transparent p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Good fit if you want:</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-sky-200">
                    ✓
                  </span>
                  A premium site that doesn’t feel “template”
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-sky-200">
                    ✓
                  </span>
                  A site built to generate calls + booked appointments
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-sky-200">
                    ✓
                  </span>
                  Clean code you can scale later (not a dead-end build)
                </li>
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Strategy first", "Mobile-first", "Clean UI", "SEO + speed", "Automations"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 text-xs text-slate-300">
              Response time: typically <span className="font-semibold text-white">within 24 hours</span>.
              No spam. No pressure.
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 text-slate-900 shadow-[0_30px_90px_rgba(2,6,23,0.45)] ring-1 ring-white/10">
            {/* faux window bar */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto text-xs font-semibold text-slate-500">Project Intake</span>
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight">
              Get a quote + plan{" "}
              <span className="text-slate-400 font-semibold">(fast)</span>
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share the basics and we’ll respond with a next step + clear options.
            </p>

            <form className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-600">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-600">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">Current website (optional)</label>
                  <input
                    type="text"
                    placeholder="https://"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-600">Service</label>
                  <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
                    <option>New Website Build</option>
                    <option>Redesign</option>
                    <option>SEO Fixes</option>
                    <option>Landing Page + Ads</option>
                    <option>Lead Capture + Automations</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">Budget range</label>
                  <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
                    <option>$1k – $3k</option>
                    <option>$3k – $7k</option>
                    <option>$7k – $15k</option>
                    <option>$15k+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Project details (goals, pages, timeline, what’s broken)
                </label>
                <textarea
                  rows={5}
                  placeholder="Example: I need a lead-gen site for my service business. I want a premium look, local SEO pages, and a quote form that routes to my CRM..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800 active:scale-[0.99]"
              >
                Send request →
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

        {/* Bottom strip */}
        <div className="mt-10 rounded-3xl bg-white/5 px-6 py-5 ring-1 ring-white/10">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <div className="text-sm font-semibold text-white">Prefer a quick call?</div>
              <div className="mt-1 text-sm text-slate-200">
                Book a 15-minute strategy chat and we’ll map the fastest path to results.
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 active:scale-[0.99]"
            >
              Book a strategy call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
