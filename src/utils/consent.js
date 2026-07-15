export const CONSENT_STORAGE_KEY = 'belege24-consent-v1';

export function createDefaultConsent() {
  return {
    necessary: true,
    analytics: false,
    decidedAt: null,
  };
}

export function normalizeConsent(value) {
  const defaults = createDefaultConsent();
  return {
    necessary: true,
    analytics: value?.analytics === true,
    decidedAt: typeof value?.decidedAt === 'string' ? value.decidedAt : defaults.decidedAt,
  };
}

export function readStoredConsent() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return normalizeConsent(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function writeStoredConsent(consent) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(normalizeConsent(consent)));
}
