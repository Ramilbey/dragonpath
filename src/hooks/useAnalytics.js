// src/hooks/useAnalytics.js
import { useCallback } from 'react';

export const useAnalytics = () => {
  const trackEvent = useCallback((action, category, label, value = 1) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
      
      // Also log to console for debugging
      console.log(`GA Event: ${category} - ${action} - ${label}`);
    }
  }, []);

  const trackButtonClick = useCallback((buttonName) => {
    trackEvent('button_click', 'Engagement', `Clicked: ${buttonName}`);
  }, [trackEvent]);

  return { trackEvent, trackButtonClick };
};

export default useAnalytics;