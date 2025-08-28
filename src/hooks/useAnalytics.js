export const useAnalytics = () => {
    const trackEvent = (action, category, label, value = 1) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        });
      }
    };
  
    const trackNavigation = (sectionName) => {
      trackEvent('navigation_click', 'Navigation', `Navigated to: ${sectionName}`);
    };
  
    const trackButtonClick = (buttonName) => {
      trackEvent('button_click', 'Engagement', `Clicked: ${buttonName}`);
    };
  
    return { trackEvent, trackNavigation, trackButtonClick };
  };