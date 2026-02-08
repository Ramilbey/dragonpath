// src/hooks/useScrollReveal.js
import { useEffect } from 'react';

/**
 * Custom hook that adds an intersection observer to elements 
 * with compatible selectors to trigger reveal animations.
 */
export const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Function to attach observer
        const startObserving = () => {
            const selectors = [
                '.reveal',
                '.service-card',
                '.university-card',
                '.testimonial-card',
                '.about-content',
                '.section-title'
            ];

            const elements = document.querySelectorAll(selectors.join(','));
            elements.forEach((el, index) => {
                observer.observe(el);
                // Add staggered delay automatically based on index overlap? 
                // Simple way: if siblings
                if (el.parentElement && el.parentElement.children.length > 1) {
                    const indexInParent = Array.from(el.parentElement.children).indexOf(el);
                    el.style.transitionDelay = `${indexInParent * 0.1}s`;
                }
            });
        };

        // Run initially
        startObserving();

        // Since we have lazy loading, we might want to re-run this occasionally 
        // or when the DOM mutates. A simple timeout after load helps.
        const timer = setTimeout(startObserving, 1000); // 1s delay for lazy chunks

        // Also re-run on scroll end occasionally? No, stick to initial + timeout for now.

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []); // Run once on mount (per component if used there, or global)
};
