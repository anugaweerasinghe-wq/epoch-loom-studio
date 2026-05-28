import type { Variants } from "framer-motion";

export const PREMIUM_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Apple/WWDC-style blur-in for text
export const textReveal = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 1.1, ease: EXPO_OUT },
} as const;

// For cards
export const cardReveal = {
  initial: { opacity: 0, y: 60, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: EXPO_OUT },
} as const;

// For lines / dividers
export const lineReveal = {
  initial: { scaleX: 0, opacity: 0 },
  whileInView: { scaleX: 1, opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1.2, ease: EXPO_OUT },
} as const;

// For numbers / stats
export const numberReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

// Legacy alias — keep existing imports working
export const premiumReveal = textReveal;

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
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EXPO_OUT },
  },
};

export const pageVariants = {
  initial: { opacity: 0, filter: "blur(12px)", scale: 0.99 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
  exit: { opacity: 0, filter: "blur(8px)", scale: 1.01 },
  transition: { duration: 0.5, ease: EXPO_OUT },
} as const;
