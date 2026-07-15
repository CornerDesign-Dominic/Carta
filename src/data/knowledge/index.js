import { knowledgeCategories } from './categories.js';
import rechnung from './pages/rechnung.js';
import angebot from './pages/angebot.js';
import lieferschein from './pages/lieferschein.js';
import gutschrift from './pages/gutschrift.js';
import quittung from './pages/quittung.js';
import mahnverfahren from './pages/mahnverfahren.js';
import businessplan from './pages/businessplan.js';

export { knowledgeCategories } from './categories.js';
export { defaultDisclaimer } from './shared.js';

export const knowledgePages = {
  'rechnung': rechnung,
  'angebot': angebot,
  'lieferschein': lieferschein,
  'gutschrift': gutschrift,
  'quittung': quittung,
  'mahnverfahren': mahnverfahren,
  'businessplan': businessplan,
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
      title: 'Wissensseite | Carta',
      description: 'Wissensseite im Carta-Wissensbereich.',
      canonicalPath: `/wissen/${slug}`,
    };
  }

  return {
    title: page.seo?.title ?? `${page.title} | Carta`,
    description: page.seo?.description ?? page.description,
    canonicalPath: page.seo?.canonicalPath ?? `/wissen/${page.slug}`,
  };
}
