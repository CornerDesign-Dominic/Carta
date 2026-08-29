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
    '/dokumente/gutschrift',
    '/dokumente/gutschrift/standard',
    '/dokumente/gutschrift/stornorechnung',
    '/dokumente/gutschrift/rechnungskorrektur',
    '/dokumente/mahnung',
    '/dokumente/mahnung/zahlungserinnerung',
    '/dokumente/mahnung/erste-mahnung',
    '/dokumente/mahnung/zweite-mahnung',
    '/dokumente/mahnung/letzte-mahnung',
    '/tools',
    '/wissen',
  ])('keeps the public route %s indexable', (pathname) => {
    expect(getSeoMeta(pathname).robots).toBeNull();
  });

  it.each([
    '/dokumente/gutschrift',
    '/dokumente/gutschrift/standard',
    '/dokumente/gutschrift/stornorechnung',
    '/dokumente/gutschrift/rechnungskorrektur',
  ])('uses a self-referencing canonical for %s', (pathname) => {
    expect(getSeoMeta(pathname).canonicalUrl).toBe(`https://belege24.com${pathname}`);
  });

  it.each([
    '/dokumente/mahnung',
    '/dokumente/mahnung/zahlungserinnerung',
    '/dokumente/mahnung/erste-mahnung',
    '/dokumente/mahnung/zweite-mahnung',
    '/dokumente/mahnung/letzte-mahnung',
  ])('uses a self-referencing canonical for %s', (pathname) => {
    expect(getSeoMeta(pathname).canonicalUrl).toBe(`https://belege24.com${pathname}`);
  });
});
