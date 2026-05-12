import { knowledgeCategories } from './categories.js';
import rechnung from './pages/rechnung.js';
import angebot from './pages/angebot.js';
import lieferschein from './pages/lieferschein.js';
import gutschrift from './pages/gutschrift.js';
import zahlungserinnerung from './pages/zahlungserinnerung.js';
import ersteMahnung from './pages/erste-mahnung.js';
import zweiteMahnung from './pages/zweite-mahnung.js';
import letzteMahnung from './pages/letzte-mahnung.js';

export { knowledgeCategories } from './categories.js';
export { defaultDisclaimer } from './shared.js';

export const knowledgePages = {
  'rechnung': rechnung,
  'angebot': angebot,
  'lieferschein': lieferschein,
  'gutschrift': gutschrift,
  'zahlungserinnerung': zahlungserinnerung,
  'erste-mahnung': ersteMahnung,
  'zweite-mahnung': zweiteMahnung,
  'letzte-mahnung': letzteMahnung,
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

export function getKnowledgeJsonLd(slug) {
  const page = findKnowledgePage(slug);

  if (!page) {
    return null;
  }

  const seo = getKnowledgeSeo(slug);
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${seo.canonicalPath}#webpage`,
      url: seo.canonicalPath,
      name: seo.title,
      description: seo.description,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Carta',
        url: '/',
      },
      dateModified: page.updatedAt,
      reviewedBy: page.reviewedAt
        ? {
            '@type': 'Organization',
            name: 'Carta',
          }
        : undefined,
    },
    {
      '@type': 'Article',
      '@id': `${seo.canonicalPath}#article`,
      headline: page.hero?.headline ?? page.title,
      description: seo.description,
      dateModified: page.updatedAt,
      datePublished: page.updatedAt,
      mainEntityOfPage: {
        '@id': `${seo.canonicalPath}#webpage`,
      },
      author: {
        '@type': 'Organization',
        name: 'Carta',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Carta',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Wissen',
          item: '/wissen',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.category,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: page.title,
          item: seo.canonicalPath,
        },
      ],
    },
  ];

  if (page.faqs?.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${seo.canonicalPath}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph.map((entry) => (
      Object.fromEntries(Object.entries(entry).filter(([, value]) => value !== undefined))
    )),
  };
}
