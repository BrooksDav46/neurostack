export type RevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "zoom";

export function getRevealClasses(variant: RevealVariant) {
  const base =
    "transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity";

  const hiddenCommon = "opacity-0";
  const showCommon = "opacity-100";

  switch (variant) {
    case "fadeLeft":
      return { base, hidden: `${hiddenCommon} -translate-x-14`, show: `${showCommon} translate-x-0` };
    case "fadeRight":
      return { base, hidden: `${hiddenCommon} translate-x-14`, show: `${showCommon} translate-x-0` };
    case "zoom":
      return { base, hidden: `${hiddenCommon} scale-[0.94] translate-y-3`, show: `${showCommon} scale-100 translate-y-0` };
    default:
      return { base, hidden: `${hiddenCommon} translate-y-12`, show: `${showCommon} translate-y-0` };
  }
}
