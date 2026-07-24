const GA_SCRIPT_ID = 'belege24-ga-script';
const GA_INIT_FLAG = '__belege24GaInitialized';
const GA_CONSENT_FLAG = '__belege24GaConsentGranted';
const DEFAULT_MEASUREMENT_ID = 'G-7Q9VSC21C9';

function getMeasurementId() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const resolvedMeasurementId =
    typeof measurementId === 'string' && measurementId.trim()
      ? measurementId.trim()
      : DEFAULT_MEASUREMENT_ID;
  return resolvedMeasurementId;
}

export function syncAnalyticsConsent(enabled) {
  if (typeof window === 'undefined') {
    return;
  }

  const measurementId = getMeasurementId();
  if (!measurementId) {
    return;
  }

  window[`ga-disable-${measurementId}`] = enabled !== true;
  window[GA_CONSENT_FLAG] = enabled === true;

  if (!enabled || window[GA_INIT_FLAG]) {
    return;
  }

  const existingScript = document.getElementById(GA_SCRIPT_ID);
  if (!existingScript) {
    const script = document.createElement('script');
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    transport_type: 'beacon',
  });
  window[GA_INIT_FLAG] = true;
}

export function trackAnalyticsEvent(eventName, params = {}) {
  if (
    typeof window === 'undefined' ||
    window[GA_CONSENT_FLAG] !== true ||
    typeof window.gtag !== 'function'
  ) {
    return;
  }

  window.gtag('event', eventName, params);
}
