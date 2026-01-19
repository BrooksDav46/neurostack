import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & {
  replay?: boolean; // if true, it will re-trigger when you leave and re-enter
};

export function useInView<T extends HTMLElement>(options: Options = {}) {
  const {
    replay = true,
    root = null,
    rootMargin = "0px 0px -15% 0px",
    threshold = 0.2,
  } = options;

  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else if (replay) {
          // ✅ reset only when it's OUT of view (no reverse animation needed)
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [replay, root, rootMargin, threshold]);

  return { ref, inView };
}
