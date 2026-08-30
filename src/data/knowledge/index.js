import { knowledgeCategories } from './categories.js';
import rechnung from './pages/rechnung.js';
import angebot from './pages/angebot.js';
import lieferschein from './pages/lieferschein.js';
import gutschrift from './pages/gutschrift.js';
import quittung from './pages/quittung.js';
import eigenbeleg from './pages/eigenbeleg.js';
import mahnverfahren from './pages/mahnverfahren.js';
import businessplan from './pages/businessplan.js';
import umsatzsteuer from './pages/umsatzsteuer.js';

export { knowledgeCategories } from './categories.js';
export { defaultDisclaimer } from './shared.js';
export { findGlossaryEntry, glossaryEntries } from './glossary.js';

export const knowledgePages = {
  'rechnung': rechnung,
  'angebot': angebot,
  'lieferschein': lieferschein,
  'gutschrift': gutschrift,
  'quittung': quittung,
  'eigenbeleg': eigenbeleg,
  'mahnverfahren': mahnverfahren,
  'businessplan': businessplan,
  'umsatzsteuer': umsatzsteuer,
};

export function findKnowledgePage(slug) {
  return knowledgePages[slug] ?? null;
}

export function findKnowledgeNavigationItem(slug) {
  for (const category of knowledgeCategories) {
    const page = category.pages.find((item) => item.slug === slug);

    if (page) {
      return { category, page };
    }
  }

  return { category: null, page: null };
}

export function getKnowledgeTitle(slug) {
  return knowledgePages[slug]?.title ?? findKnowledgeNavigationItem(slug).page?.title ?? 'Wissensseite';
}

export function getKnowledgeSeo(slug) {
  const page = findKnowledgePage(slug);

  if (!page) {
    return {
      title: 'Wissensseite | Belege24',
      description: 'Wissensseite im Belege24-Wissensbereich.',
      canonicalPath: `/wissen/${slug}`,
    };
  }

  return {
    title: page.seo?.title ?? `${page.title} | Belege24`,
    description: page.seo?.description ?? page.description,
    canonicalPath: page.seo?.canonicalPath ?? `/wissen/${page.slug}`,
  };
}
