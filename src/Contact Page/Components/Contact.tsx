import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const AGENCY_NAME = "Stratum Marketing";
const CITY = "El Paso, TX";

// TODO: change these to your real contact points
const EMAIL = "office@withstratum.com";
const PHONE_DISPLAY = "(915) 465-6056";
const PHONE_TEL = "+19154656056";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Local SEO",
    message: "",
  });

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const [state, handleSubmit] = useForm("xjgyojdp");

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-52 left-[-220px] h-[720px] w-[720px] rounded-full bg-sky-500/16 blur-[150px]" />
          <div className="absolute top-0 right-[-260px] h-[760px] w-[760px] rounded-full bg-purple-500/18 blur-[160px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute inset-0 opacity-[0.055] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:34px_34px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-14">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-white/10 via-white/6 to-white/5 p-7 sm:p-9 shadow-[0_24px_90px_rgba(2,6,23,0.55)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 left-10 h-56 w-56 rounded-full bg-sky-400/18 blur-[105px]" />
              <div className="absolute -bottom-28 right-12 h-56 w-56 rounded-full bg-purple-400/18 blur-[105px]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm text-white/80">
                  <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.65)]" />
                  {AGENCY_NAME} • {CITY}
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Get more calls from Google.
                  <span className="block bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                    SEO + Ads + LSA + a site that converts.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-lg text-white/75 leading-relaxed">
                  Tell us what you do and what part of {CITY} you serve. We’ll reply with a clear growth plan
                  (what to fix, what to run, and what will move the needle) — no fluff.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    Start a request
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-black/20 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                  >
                    Call now → {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Local SEO", "Google PPC", "Google LSA", "Websites", "Tracking"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-white/55">
                  Typical reply time: <span className="text-white/80 font-semibold">same day</span>. If we’re not a fit, we’ll say it.
                </p>
              </div>

              {/* Right side: contact + credibility */}
              <div className="lg:col-span-5">
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <QuickCard title="Call / Text" value={PHONE_DISPLAY} note="Fastest way to start" href={`tel:${PHONE_TEL}`} />
                  <QuickCard title="Email" value={EMAIL} note="Best for links + details" href={`mailto:${EMAIL}`} />
                  <QuickCard title="Service area" value="El Paso + surrounding" note="Local-first growth" />
                </div>

                <div className="mt-4 rounded-2xl border border-white/12 bg-black/20 p-4">
                  <div className="text-sm font-semibold text-white/90">What we actually do</div>
                  <p className="mt-1 text-sm text-white/65 leading-relaxed">
                    We build demand (Ads + LSA), capture it (high-converting pages), and keep it compounding (local SEO + tracking).
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                    {[
                      ["SEO that ranks", "Service + city pages, on-page, technical cleanup"],
                      ["Google PPC", "High-intent search ads optimized for cost/lead"],
                      ["Google LSA", "Profile + lead flow setup and optimization"],
                      ["Tracking", "Calls + forms tracked so you know what’s working"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-xl border border-white/12 bg-[#020617]/35 p-3">
                        <div className="text-sm font-semibold text-white/90">{k}</div>
                        <div className="mt-1 text-xs text-white/60">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FORM + NEXT STEPS */}
          <section id="contact-form" className="mt-8 grid gap-6 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/12 bg-white/7 p-6 sm:p-7 shadow-[0_18px_70px_rgba(2,6,23,0.45)]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold">Request a growth plan</h2>
                    <p className="mt-1 text-white/65">
                      Enough detail to scope it fast — no long questionnaire.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs text-white/70">
                    ~2 minutes
                  </span>
                </div>

                {state.succeeded ? (
                  <div className="mt-6 rounded-2xl border border-emerald-300/25 bg-emerald-500/10 p-5">
                    <div className="text-sm font-semibold text-emerald-200">
                      Sent — we’ll reply shortly.
                    </div>
                    <div className="mt-1 text-sm text-white/65">
                      If you want faster, call or text {PHONE_DISPLAY}.
                    </div>
                    <div className="mt-4">
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
                      >
                        Call now →
                      </a>
                    </div>
                  </div>
                ) : (
                  <form
                    className="mt-6 grid gap-4"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Your name"
                        name="name"
                        value={form.name}
                        onChange={(v) => set("name", v)}
                        placeholder="Aaron"
                        required
                      />
                      <Field
                        label="Business name"
                        name="company"
                        value={form.company}
                        onChange={(v) => set("company", v)}
                        placeholder="Your company"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={(v) => set("email", v)}
                        placeholder="you@company.com"
                        type="email"
                        required
                      />
                      <Field
                        label="Phone (recommended)"
                        name="phone"
                        value={form.phone}
                        onChange={(v) => set("phone", v)}
                        placeholder="(915) 555-1234"
                      />
                    </div>

                    <SelectField
                      label="What do you want help with?"
                      name="service"
                      value={form.service}
                      onChange={(v) => set("service", v)}
                      options={[
                        "Local SEO",
                        "Google PPC (Search Ads)",
                        "Google LSA",
                        "Website + Landing Pages",
                        "SEO + Ads (Full system)",
                        "Not sure yet",
                      ]}
                    />

                    <TextAreaField
                      label="What do you do + where do you serve?"
                      name="message"
                      value={form.message}
                      onChange={(v) => set("message", v)}
                      placeholder="Example: I’m a roofing company in El Paso. I want more calls in the West Side and Lower Valley. I’m running ads but leads are weak and my site feels slow..."
                      required
                      rows={4}
                    />

                    <div className="grid gap-2">
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600 disabled:opacity-60"
                      >
                        {state.submitting ? "Sending..." : "Send request"}
                      </button>

                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="text-sm font-semibold text-sky-200 hover:text-sky-100"
                      >
                        Or call now → {PHONE_DISPLAY}
                      </a>
                    </div>

                    <p className="text-xs text-white/50">
                      By submitting, you’re asking for a quick scope + next steps. No spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Next steps */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/12 bg-white/7 p-6 sm:p-7 shadow-[0_18px_70px_rgba(2,6,23,0.45)]">
                <h3 className="text-lg font-semibold">What happens next</h3>

                <div className="mt-4 grid gap-3">
                  {[
                    ["1) Quick review", "We look at your offer, market, and current Google presence."],
                    ["2) Plan", "We outline the fastest path: SEO, PPC, LSA, landing pages, tracking."],
                    ["3) Execution", "Clear deliverables + timeline. No vague “marketing”. Just output."],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/12 bg-black/20 p-4">
                      <div className="text-sm font-semibold text-white/90">{k}</div>
                      <div className="mt-1 text-sm text-white/65">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/12 bg-gradient-to-br from-purple-500/14 via-white/6 to-sky-500/14 p-5">
                  <div className="text-sm font-semibold text-white/90">Built for El Paso service businesses</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    Local markets reward speed, trust, and clarity. We build a system that gets you found and makes it easy to call.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Map visibility", "Lead quality", "Conversion", "Call tracking", "Follow-up"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    Call now →
                  </a>

                  <Link
                    to="/services"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/12 bg-black/20 px-7 py-3 font-semibold text-white/90 transition hover:bg-white/8"
                  >
                    View services
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Local SEO block (quiet, but strong) */}
          <div className="sr-only">
            <h2>Stratum Marketing — El Paso Digital Marketing Agency</h2>
            <p>
              Stratum Marketing helps El Paso service businesses generate more calls and leads with local SEO,
              Google PPC management, Google Local Services Ads (LSA), conversion-focused landing pages, and tracking.
            </p>
            <p>
              If you need an El Paso marketing agency for SEO services, Google Ads, or LSA optimization, contact Stratum Marketing.
            </p>
          </div>

          <footer className="mt-8 text-center text-xs text-white/45">
            © {new Date().getFullYear()} {AGENCY_NAME} — El Paso SEO • Google PPC • Google LSA • Websites
          </footer>
        </div>

        {/* Mobile sticky CTA */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#020617]/85 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-blue-900"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#contact-form"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white"
            >
              Request plan
            </a>
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
  href,
}: {
  title: string;
  value: string;
  note: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-1 text-sm font-semibold text-white/90">{value}</div>
      <div className="mt-1 text-xs text-white/50">{note}</div>
    </>
  );

  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-4 transition hover:bg-white/8">
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-3">
      <label className="text-xs text-white/60" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/12 bg-[#020617]/40 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-sky-300/60"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-3">
      <label className="text-xs text-white/60" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
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
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-3">
      <label className="text-xs text-white/60" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="mt-2 w-full resize-none rounded-xl border border-white/12 bg-[#020617]/40 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-sky-300/60"
      />
    </div>
  );
}