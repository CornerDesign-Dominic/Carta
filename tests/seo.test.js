import { describe, expect, it } from 'vitest';
import { getSeoMeta } from '../src/data/seo.js';

describe('SEO indexing directives', () => {
  it('marks unknown routes as noindex, follow', () => {
    expect(getSeoMeta('/diese-seite-gibt-es-nicht').robots).toBe('noindex, follow');
  });

  it.each([
    '/',
    '/dokumente',
    '/dokumente/rechnung',
    '/dokumente/rechnung/standard',
    '/tools',
    '/wissen',
  ])('keeps the public route %s indexable', (pathname) => {
    expect(getSeoMeta(pathname).robots).toBeNull();
  });
});
