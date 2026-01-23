import React, { useState } from "react";
import { Link } from "react-router-dom";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Website build",
    budget: "$1,500–$3,500",
    message: "",
  });

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="relative overflow-hidden">
        {/* Brighter premium background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-[-180px] h-[640px] w-[640px] rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute top-0 right-[-220px] h-[680px] w-[680px] rounded-full bg-purple-500/22 blur-[140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:34px_34px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16">
          {/* Bright top panel */}
          <section className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-white/10 via-white/6 to-white/5 p-7 sm:p-10 shadow-[0_22px_90px_rgba(2,6,23,0.55)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 left-10 h-56 w-56 rounded-full bg-sky-400/20 blur-[100px]" />
              <div className="absolute -bottom-28 right-12 h-56 w-56 rounded-full bg-purple-400/20 blur-[100px]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm text-white/80">
                  <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.65)]" />
                  Contact NeuroStack
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Let’s talk about your project.
                </h1>

                <p className="mt-4 max-w-2xl text-lg text-white/75 leading-relaxed">
                  Tell us what you do and where you operate. We’ll reply with a clear plan
                  for your site structure, local SEO, and conversion flow.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    Start a request
                  </a>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-black/20 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                  >
                    View services
                  </Link>
                </div>

                <p className="mt-4 text-sm text-white/55">
                  You’ll hear back fast. If we’re not a fit, we’ll tell you directly.
                </p>
              </div>

              {/* Quick contact strip */}
              <div className="lg:col-span-5">
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <QuickCard
                    title="Email"
                    value="hello@neurostack.dev"
                    note="Best for scope + links"
                  />
                  <QuickCard
                    title="Phone"
                    value="(915) 555-0123"
                    note="Mon–Fri business hours"
                  />
                  <QuickCard
                    title="Location"
                    value="El Paso, TX"
                    note="Local-first builds"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-white/12 bg-black/20 p-4">
                  <div className="text-sm font-semibold text-white/90">
                    Financing available
                  </div>
                  <p className="mt-1 text-sm text-white/65">
                    If the right build will pay for itself, don’t delay it. Ask us about options.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Form area */}
          <section id="contact-form" className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/12 bg-white/7 p-6 sm:p-7 shadow-[0_18px_70px_rgba(2,6,23,0.45)]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold">Send us the details</h2>
                    <p className="mt-1 text-white/65">
                      The more context you share, the faster we can scope it.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs text-white/70">
                    2–3 minutes
                  </span>
                </div>

                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Submitted! Hook this up to your backend/CRM next.");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your name" value={form.name} onChange={(v) => set("name", v)} placeholder="Aaron" />
                    <Field label="Company" value={form.company} onChange={(v) => set("company", v)} placeholder="NeuroStack" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email" value={form.email} onChange={(v) => set("email", v)} placeholder="you@company.com" type="email" />
                    <Field label="Phone (optional)" value={form.phone} onChange={(v) => set("phone", v)} placeholder="(555) 123-4567" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <SelectField
                      label="What do you need?"
                      value={form.service}
                      onChange={(v) => set("service", v)}
                      options={[
                        "Website build",
                        "Local SEO foundation",
                        "Conversion redesign",
                        "Performance optimization",
                        "Automation + tracking",
                        "Not sure yet",
                      ]}
                    />
                    <SelectField
                      label="Budget range"
                      value={form.budget}
                      onChange={(v) => set("budget", v)}
                      options={[
                        "$1,500–$3,500",
                        "$3,500–$6,500",
                        "$6,500–$10,000",
                        "$10,000+",
                        "Not sure yet",
                      ]}
                    />
                  </div>

                  <TextAreaField
                    label="Tell us about your business + goals"
                    value={form.message}
                    onChange={(v) => set("message", v)}
                    placeholder="What do you do, what areas do you serve, and what should the site help you achieve?"
                  />

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
                    >
                      Send request
                    </button>

                    <p className="text-sm text-white/55">
                      Prefer financing? Mention it — we’ll include options.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right side: what happens next */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/12 bg-white/7 p-6 sm:p-7 shadow-[0_18px_70px_rgba(2,6,23,0.45)]">
                <h3 className="text-lg font-semibold">What happens next</h3>

                <div className="mt-4 grid gap-3">
                  {[
                    ["1) Quick review", "We review your service, market, and current presence."],
                    ["2) Scope + plan", "We map pages, SEO structure, and conversion flow."],
                    ["3) Quote", "Clear deliverables + timeline. No vague packages."],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/12 bg-black/20 p-4">
                      <div className="text-sm font-semibold text-white/90">{k}</div>
                      <div className="mt-1 text-sm text-white/65">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/12 bg-gradient-to-br from-purple-500/14 via-white/6 to-sky-500/14 p-5">
                  <div className="text-sm font-semibold text-white/90">
                    Built for local service businesses
                  </div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    We focus on local visibility, speed, trust signals, and a conversion path that
                    makes calling or requesting an estimate effortless.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Local SEO", "Speed", "Schema", "Trust signals", "Lead capture"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/finance"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/12 bg-black/20 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                  >
                    View pricing + ROI
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 text-center text-sm text-white/45">
            © {new Date().getFullYear()} NeuroStack — performance, local SEO, and conversion.
          </div>
        </div>
      </div>
    </main>
  );
}

function QuickCard({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-4 transition hover:bg-white/8">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-1 text-sm font-semibold text-white/90">{value}</div>
      <div className="mt-1 text-xs text-white/50">{note}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-3">
      <label className="text-xs text-white/60">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/12 bg-[#020617]/40 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-sky-300/60"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-3">
      <label className="text-xs text-white/60">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/12 bg-[#020617]/40 px-3 py-2 text-sm text-white outline-none focus:border-sky-300/60"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#020617]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-3">
      <label className="text-xs text-white/60">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className="mt-2 w-full resize-none rounded-xl border border-white/12 bg-[#020617]/40 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-sky-300/60"
      />
    </div>
  );
}
