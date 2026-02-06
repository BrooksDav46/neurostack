// src/LandingPage/Components/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";
import HeroVideo from "./HeroVideo";
import heroPoster from "../../assets/Hero-poster.webp";
import heroMp4 from "../../assets/Hero.mp4";

function CtaBox({
  title,
  subtitle,
  to,
  icon,
  variant = "primary",
}: {
  title: string;
  subtitle: string;
  to: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";

  return (
    <Link
      to={to}
      className="
        group relative w-full sm:w-[290px]
        overflow-hidden rounded-2xl
        bg-white/7 backdrop-blur-xl
        ring-1 ring-white/10
        px-6 py-5
        transition-all duration-300
        hover:-translate-y-1 hover:bg-white/10
        shadow-[0_18px_50px_rgba(0,0,0,0.45)]
      "
    >
      {/* glow edge */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
        <div
          className={[
            "absolute inset-0 rounded-2xl ring-1",
            isPrimary
              ? "ring-cyan-300/55 shadow-[0_0_26px_rgba(34,211,238,0.38)]"
              : "ring-white/30 shadow-[0_0_18px_rgba(255,255,255,0.14)]",
          ].join(" ")}
        />
      </div>

      {/* subtle wash */}
      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
          isPrimary
            ? "bg-gradient-to-br from-cyan-400/10 via-white/0 to-indigo-400/10"
            : "bg-gradient-to-br from-white/6 via-white/0 to-white/5",
        ].join(" ")}
      />

      <div className="relative flex items-start gap-3">
        {icon && (
          <div
            className={[
              "mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 text-white",
              isPrimary
                ? "bg-cyan-400/12 ring-cyan-300/20 shadow-[0_0_18px_rgba(34,211,238,0.18)]"
                : "bg-white/8 ring-white/15 shadow-[0_0_14px_rgba(255,255,255,0.10)]",
            ].join(" ")}
          >
            {icon}
          </div>
        )}

        <div className="min-w-0">
          <div className="text-sm font-semibold text-white">
            {title}{" "}
            <span className="inline-block translate-x-0 transition group-hover:translate-x-1">
              →
            </span>
          </div>
          <div className="mt-1 text-xs leading-relaxed text-white/80">
            {subtitle}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Hero() {
  return (
    // ✅ IMPORTANT: prevent sideways overflow on iOS
    <section id="home" className="relative z-0 w-full overflow-x-hidden">
      {/* video bg */}
      {/* ✅ IMPORTANT: keep bg from creating horizontal scroll */}
      <div className="absolute inset-0 -z-10 w-full overflow-hidden">
        <HeroVideo
          mp4={heroMp4}
          poster={heroPoster}
          mountDelayMs={60}
          fadeMs={520}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/38 to-black/82" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-6 sm:px-12">
        <div className="flex min-h-[86vh] flex-col items-center justify-center pt-28 pb-64 sm:pt-32 sm:pb-72 text-center">
          {/* pill */}
          <div className="inline-flex items-center rounded-full bg-black/30 px-4 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
            El Paso Web Design & SEO
          </div>

          {/* headline */}
          <h1 className="mt-7 w-full max-w-[1400px] text-[clamp(2.7rem,5.8vw,6rem)] font-extrabold leading-[0.93] tracking-[-0.02em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            Web Development Company in Texas Built to Drive Real Business Growth
          </h1>

          {/* sub */}
          <p className="mt-6 max-w-[820px] text-sm leading-relaxed text-white/85 sm:text-base">
            We build high-performance websites with local SEO, lead generation,
            and conversion strategy — all designed to grow your business.
          </p>

          {/* ctas */}
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaBox
              to="/contact"
              title="Get a Free Strategy Call"
              subtitle="Quick call → clear plan + next steps."
              icon={<span className="text-lg">⚡</span>}
              variant="primary"
            />
            <CtaBox
              to="/services"
              title="See Work + Services"
              subtitle="Examples, packages, and what we build."
              icon={<span className="text-lg">🧩</span>}
              variant="secondary"
            />
          </div>

          {/* chips */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs">
            {["Typical launch: 7–14 days", "Mobile-first", "SEO-ready"].map((t) => (
              <span
                key={t}
                className="
                  relative rounded-full px-3 py-1.5
                  bg-black/25 backdrop-blur
                  text-white/85
                  ring-1 ring-white/10
                  shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_0_18px_rgba(34,211,238,0.18)]
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
