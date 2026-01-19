import { useMemo, useRef } from "react";

type VariantName = "up" | "left" | "right" | "zoom" | "tilt";

const VARIANTS: VariantName[] = ["up", "left", "right", "zoom", "tilt"];

export function useRevealVariant(inView: boolean) {
  const current = useRef<VariantName>("up");
  const wasInView = useRef(false);

  // Pick a new variant only when it ENTERS view (prevents jitter)
  if (inView && !wasInView.current) {
    current.current = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
  }
  wasInView.current = inView;

  const classes = useMemo(() => {
    // ✅ Slower + premium easing
    const base =
      "transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity";

    const hiddenCommon = "opacity-0";
    const showCommon = "opacity-100";

    // ✅ Slightly bigger distances so it feels more intentional
    const hiddenByVariant: Record<VariantName, string> = {
      up: `${hiddenCommon} translate-y-10`,
      left: `${hiddenCommon} translate-x-10`,
      right: `${hiddenCommon} -translate-x-10`,
      zoom: `${hiddenCommon} scale-[0.955]`,
      tilt: `${hiddenCommon} translate-y-8 rotate-[-1.25deg] scale-[0.985]`,
    };

    const showByVariant: Record<VariantName, string> = {
      up: `${showCommon} translate-y-0`,
      left: `${showCommon} translate-x-0`,
      right: `${showCommon} translate-x-0`,
      zoom: `${showCommon} scale-100`,
      tilt: `${showCommon} translate-y-0 rotate-0 scale-100`,
    };

    return {
      base,
      hidden: hiddenByVariant[current.current],
      show: showByVariant[current.current],
      variant: current.current,
    };
  }, []);

  return classes;
}
