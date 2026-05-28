import { useScroll, useTransform, useSpring } from "framer-motion";
import type { RefObject } from "react";

export function useSectionParallax(
  ref: RefObject<HTMLElement | null>,
  speed = 0.3,
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = 15 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);
  return useSpring(y, { stiffness: 60, damping: 20 });
}
