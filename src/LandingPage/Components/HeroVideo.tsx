import { useEffect, useState } from "react";

type HeroVideoProps = {
  mp4: string;
  poster: string;
  className?: string;
  /** how long to wait before mounting video (ms) */
  mountDelayMs?: number;
  /** fade-in time (ms) */
  fadeMs?: number;
};

export default function HeroVideo({
  mp4,
  poster,
  className,
  mountDelayMs = 120,
  fadeMs = 650,
}: HeroVideoProps) {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  // 1) show poster instantly
  // 2) mount video shortly after first paint
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), mountDelayMs);
    return () => window.clearTimeout(id);
  }, [mountDelayMs]);

  return (
    <div className={["absolute inset-0 overflow-hidden", className].join(" ")}>
      {/* Poster = instant paint, keeps Lighthouse happy */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Video fades in when the browser can play */}
      {mounted && (
        <video
          className={[
            "absolute inset-0 h-full w-full object-cover",
            "transition-opacity ease-out",
            ready ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ transitionDuration: `${fadeMs}ms` }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onCanPlay={() => setReady(true)}
        >
          <source src={mp4} type="video/mp4" />
        </video>
      )}

      {/* Optional tint overlay to match your theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/10 to-slate-950/45" />
    </div>
  );
}
