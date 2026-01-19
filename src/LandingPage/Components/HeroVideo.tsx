// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
type Props = {
  srcMp4: string;
  poster: string;
  className?: string;
};

export default function HeroVideo({ srcMp4, poster, className }: Props) {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setLoadVideo(true))
      : window.setTimeout(() => setLoadVideo(true), 1200);

    return () => {
      if (typeof id === "number") window.clearTimeout(id);
      else window.cancelIdleCallback?.(id as any);
    };
  }, []);

  return (
    <div className={["relative overflow-hidden", className].join(" ")}>
      {/* Poster shows immediately (fast) */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Video loads later */}
      {loadVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
        >
          <source src={srcMp4} type="video/mp4" />
        </video>
      )}

      {/* Optional: overlay for brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/10 to-slate-950/40" />
    </div>
  );
}
