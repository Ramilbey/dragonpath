// src/animations/scrollEngine.js
/**
 * Animation helper to interface with GSAP and ScrollTrigger
 * Safe wrapper for browser SSR/React environments with CDNs
 */

export const getGSAP = () => {
  if (typeof window !== 'undefined' && window.gsap) {
    if (window.ScrollTrigger && !window.gsap.__scrollTriggerRegistered) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.__scrollTriggerRegistered = true;
    }
    return window.gsap;
  }
  return null;
};

export const getScrollTrigger = () => {
  if (typeof window !== 'undefined' && window.ScrollTrigger) {
    return window.ScrollTrigger;
  }
  return null;
};

/**
 * Utility to calculate linear interpolation between two values based on progress [0, 1]
 */
export const lerp = (start, end, progress) => {
  return start + (end - start) * Math.min(Math.max(progress, 0), 1);
};

/**
 * Utility for smooth scroll calculations when fallback mode is needed
 */
export const getElementScrollProgress = (element) => {
  if (!element || typeof window === 'undefined') return 0;
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const totalScroll = element.offsetHeight - windowHeight;
  if (totalScroll <= 0) return 0;
  const currentScroll = -rect.top;
  return Math.min(Math.max(currentScroll / totalScroll, 0), 1);
};
