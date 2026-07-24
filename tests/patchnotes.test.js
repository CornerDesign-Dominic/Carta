import { describe, expect, it } from 'vitest';
import { isPatchnotesEnabledForEnvironment } from '../src/config/development.js';
import { filterPatchnotes, patchnotes } from '../src/data/patchnotes.js';

describe('patchnotes', () => {
  it('keeps entries ordered newest first', () => {
    expect(patchnotes.map((entry) => entry.date)).toEqual([...patchnotes]
      .map((entry) => entry.date)
      .sort((first, second) => second.localeCompare(first)));
  });

  it('filters titles and change items case-insensitively', () => {
    expect(filterPatchnotes(patchnotes, 'USt.-Satz')).toHaveLength(1);
    expect(filterPatchnotes(patchnotes, 'FolgeSeite')[0]?.title).toContain('Seitenumbruch');
    expect(filterPatchnotes(patchnotes, 'nicht vorhanden')).toEqual([]);
  });

  it('enables patchnotes locally, for the exact dev hostname, or through the deployment variable', () => {
    expect(isPatchnotesEnabledForEnvironment({ isDev: true, hostname: 'localhost' })).toBe(true);
    expect(isPatchnotesEnabledForEnvironment({ hostname: 'dev.belege24.com' })).toBe(true);
    expect(isPatchnotesEnabledForEnvironment({ enablePatchnotes: true, hostname: 'belege24.com' })).toBe(true);
  });

  it('keeps patchnotes unavailable for production and non-exact hostnames', () => {
    expect(isPatchnotesEnabledForEnvironment({ hostname: 'belege24.com' })).toBe(false);
    expect(isPatchnotesEnabledForEnvironment({ hostname: 'preview.belege24.com' })).toBe(false);
    expect(isPatchnotesEnabledForEnvironment({ hostname: 'dev.belege24.com.example.org' })).toBe(false);
    expect(isPatchnotesEnabledForEnvironment()).toBe(false);
  });
});
