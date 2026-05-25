import type { Variants } from "framer-motion";

export const PREMIUM_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const premiumReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, ease: PREMIUM_EASE },
} as const;

export const staggerParent = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
  variants: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
} as const;

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: PREMIUM_EASE } },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: PREMIUM_EASE },
} as const;
