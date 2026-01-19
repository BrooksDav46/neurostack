import { useEffect, useRef, useState } from "react";
 
type HeroVideoProps = {
  mp4: string;
  poster: string;
  className?: string;
  mountDelayMs?: number; // delay before mounting video element
  fadeMs?: number; // fade duration
};

export default function HeroVideo({
  mp4,
  poster,
  className,
  mountDelayMs = 60,
  fadeMs = 520,
}: HeroVideoProps) {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  // Mount the video shortly after first paint (poster shows instantly)
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), mountDelayMs);
    return () => window.clearTimeout(id);
  }, [mountDelayMs]);

  // When mounted, try to play (some browsers need a nudge even if muted)
  useEffect(() => {
    if (!mounted) return;
    const v = vidRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // ignore: browser will still show poster, and video will play when allowed
      }
    };
    tryPlay();
  }, [mounted]);

  return (
    <div className={["absolute inset-0 overflow-hidden", className].join(" ")}>
      {/* Poster = instant, prevents "pop" */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Video fades in when it can play */}
      {mounted && (
        <video
          ref={vidRef}
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
    </div>
  );
}
