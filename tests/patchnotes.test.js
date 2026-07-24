import { describe, expect, it } from 'vitest';
import { isDevelopmentOnly } from '../src/config/development.js';
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

  it('enables the internal page only for development builds', () => {
    expect(isDevelopmentOnly(true)).toBe(true);
    expect(isDevelopmentOnly(false)).toBe(false);
    expect(isDevelopmentOnly(undefined)).toBe(false);
  });
});
