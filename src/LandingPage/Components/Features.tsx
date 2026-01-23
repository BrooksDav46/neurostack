// src/LandingPage/Components/Features.tsx
// import React from "react";

const items = [
  {
    title: "Custom Web Development",
    desc: "Fast, modern builds with clean code, scalable structure, and conversion-first layouts.",
    bullets: ["React / Next-ready", "Clean architecture", "Built to scale"],
    tag: "Sky + Indie",
    bump: "lg:translate-y-8", // ✅ subtle stagger DOWN (no negatives)
  },
  {
    title: "Responsive Design",
    desc: "Pixel-perfect UI that feels premium on desktop, tablet, and mobile — no weird spacing.",
    bullets: ["Mobile-first", "Accessible UI", "Modern components"],
    tag: "Mobile-first",
    bump: "lg:translate-y-14", // ✅ featured sits lower (center focus)
    featured: true,
  },
  {
    title: "SEO + Performance",
    desc: "Technical SEO + speed improvements so you rank locally and turn traffic into leads.",
    bullets: ["Core Web Vitals", "Schema + headings", "On-page structure"],
    tag: "Growth-ready",
    bump: "lg:translate-y-10", // ✅ slightly lower than left
  },
];

function NeonCard({
  title,
  desc,
  bullets,
  tag,
  bump,
  featured,
}: {
  title: string;
  desc: string;
  bullets: string[];
  tag: string;
  bump?: string;
  featured?: boolean;
}) {
  // Cyan = primary neon. Purple = subtle atmosphere.
  const glow = featured
    ? {
        edge: "rgba(34,211,238,0.70)",
        haloCyan: "rgba(34,211,238,0.38)",
        haloPurple: "rgba(168,85,247,0.18)",
        wash: "rgba(168,85,247,0.08)",
      }
    : {
        edge: "rgba(34,211,238,0.42)",
        haloCyan: "rgba(34,211,238,0.20)",
        haloPurple: "rgba(168,85,247,0.10)",
        wash: "rgba(168,85,247,0.05)",
      };

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[28px]",
        "bg-slate-950/72 backdrop-blur-xl",
        "ring-1 ring-white/10",
        "transition-all duration-300",
        "hover:-translate-y-1",
        bump || "",
      ].join(" ")}
      style={{
        boxShadow: [
          `0 0 0 1px ${glow.edge}`,
          `0 0 28px ${glow.haloCyan}`,
          `0 0 90px ${glow.haloPurple}`,
          "0 30px 120px rgba(0,0,0,0.55)",
        ].join(", "),
      }}
    >
      {/* crisp outline trace */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px]">
        <div className="absolute inset-0 rounded-[28px] ring-1 ring-cyan-200/18" />
      </div>

      {/* hover boost */}
      <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 rounded-[28px] ring-1 ring-cyan-200/55"
          style={{ boxShadow: "0 0 38px rgba(34,211,238,0.26)" }}
        />
      </div>

      {/* inner lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-transparent" />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, rgba(34,211,238,0.00), ${glow.wash}, rgba(34,211,238,0.00))`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/6 to-indigo-400/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
      </div>

      <div className="relative p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex rounded-full bg-white/8 px-3 py-1 text-[11px] font-semibold text-white/85 ring-1 ring-white/10">
            {tag}
          </div>

          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/12 ring-1 ring-cyan-300/25 text-white shadow-[0_0_18px_rgba(34,211,238,0.18)]">
            ✦
          </div>
        </div>

        <h3 className="mt-6 text-xl font-extrabold tracking-tight text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/78">{desc}</p>

        <ul className="mt-6 space-y-3 text-sm text-white/82">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/14 ring-1 ring-cyan-300/25 shadow-[0_0_14px_rgba(34,211,238,0.16)]">
                ✓
              </span>
              <span className="min-w-0">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-3">
          <a
            href="#contact"
            className="
              inline-flex h-11 flex-1 items-center justify-center rounded-xl
              bg-blue-600 text-sm font-semibold text-white
              shadow-[0_18px_70px_rgba(37,99,235,0.42)]
              transition hover:bg-blue-500
            "
          >
            Get a Quote
          </a>

          <a
            href="#features"
            className="
              inline-flex h-11 items-center justify-center rounded-xl
              bg-white/8 px-4 text-sm font-semibold text-white/90
              ring-1 ring-white/10 backdrop-blur
              transition hover:bg-white/12
            "
          >
            Details →
          </a>
        </div>

        <div className="mt-5 text-[11px] text-white/45">Built with performance + UX best practices.</div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative">
      {/* ✅ moves the whole cluster DOWN on all screens, but keeps the stagger */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:items-start">
        {items.map((it) => (
          <NeonCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
