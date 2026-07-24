const PATCHNOTES_DEV_HOSTNAME = 'dev.belege24.com';

export function isPatchnotesEnabledForEnvironment({
  isDev = false,
  enablePatchnotes = false,
  hostname = '',
} = {}) {
  return isDev === true
    || enablePatchnotes === true
    || hostname.toLowerCase() === PATCHNOTES_DEV_HOSTNAME;
}

const currentHostname = typeof window === 'undefined' ? '' : window.location.hostname;

export const isPatchnotesEnabled = isPatchnotesEnabledForEnvironment({
  isDev: import.meta.env.DEV,
  enablePatchnotes: import.meta.env.VITE_ENABLE_PATCHNOTES === 'true',
  hostname: currentHostname,
});
