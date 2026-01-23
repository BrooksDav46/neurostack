// src/LandingPage/Components/GrowthSection.tsx
import Features from "./Features";
import WhyUs from "./WhyUs";
import Process from "./Process";

export default function GrowthSection() {
  return (
    <section
      id="growth"
      className="
        relative isolate w-full
        bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
        px-6 pt-16 pb-12
      "
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-sky-500/18 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-44 h-[560px] w-[560px] rounded-full bg-indigo-500/14 blur-3xl" />

      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="-mt-40 sm:-mt-52 lg:-mt-56 relative z-20">
        <div className="relative mx-auto max-w-7xl space-y-20">
          <Features />
          <WhyUs />
          <Process />
        </div>
      </div>
    </section>
  );
}
