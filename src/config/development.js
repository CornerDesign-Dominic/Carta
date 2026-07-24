export function isDevelopmentOnly(isDev) {
  return isDev === true;
}

export const isPatchnotesEnabled = isDevelopmentOnly(import.meta.env.DEV);
