// Motion Choreography System for Simhapuri Family Dhaba

const smoothTransition = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for silky smooth deceleration
};

export const fromTop = {
  hidden: { opacity: 0, y: -45 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...smoothTransition, delay: customDelay }
  })
};

export const fromBottom = {
  hidden: { opacity: 0, y: 55 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...smoothTransition, delay: customDelay }
  })
};

export const fromLeft = {
  hidden: { opacity: 0, x: -65 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...smoothTransition, delay: customDelay }
  })
};

export const fromRight = {
  hidden: { opacity: 0, x: 65 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...smoothTransition, delay: customDelay }
  })
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...smoothTransition, delay: customDelay }
  })
};

export const maskRevealLeft = {
  hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 },
  visible: (customDelay = 0) => ({
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: customDelay }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1
    }
  }
};
