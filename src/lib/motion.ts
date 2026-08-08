// Shared Framer Motion variants — used across all pages for a consistent,
// professional, "business not over-animated" feel.
// Easing curve and durations are the same everywhere so the whole site feels unified.

export const EASE = [0.22, 1, 0.36, 1] as const; // smooth, premium ease-out

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

// Stagger container — wrap a list of children with this, give each child a fade variant
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Viewport settings used everywhere for scroll-triggered animation
export const viewportOnce = { once: true, margin: "-80px" };

// Button micro-interaction (shine + press)
export const buttonTap = { scale: 0.97 };
