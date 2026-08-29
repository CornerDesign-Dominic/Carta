import { documentSections } from './documents.js';
import { findKnowledgeNavigationItem, knowledgePages } from './knowledgePages.js';
import { getSeoMeta } from './seo.js';
import { findToolItemByPath } from './tools.js';

const SITE_URL = 'https://belege24.com';
const HOME_BREADCRUMB = { name: 'Startseite', path: '/' };
const DOCUMENTS_BREADCRUMB = { name: 'Dokumente', path: '/dokumente' };
const TOOLS_BREADCRUMB = { name: 'Werkzeuge', path: '/tools' };
const KNOWLEDGE_BREADCRUMB = { name: 'Wissen', path: '/wissen' };

function canonicalPath(pathname) {
  return new URL(getSeoMeta(pathname).canonicalUrl).pathname;
}

function documentLabel(label) {
  return label.replace(/ schreiben$/, '');
}

function seoTitleLabel(pathname) {
  return getSeoMeta(pathname).title
    .replace(/ \| Belege24$/, '')
    .replace(/(?: kostenlos)? online erstellen$/, '');
}

function toolLabel(tool) {
  return tool.seo?.title?.replace(/ \| Belege24$/, '') ?? tool.title;
}

function getDocumentBreadcrumbs(pathname) {
  if (pathname === '/dokumente') {
    return [HOME_BREADCRUMB, DOCUMENTS_BREADCRUMB];
  }

  if (pathname === '/dokumente/rechnung') {
    return [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: 'Rechnungen', path: '/dokumente/rechnung' },
    ];
  }

  if (pathname.startsWith('/dokumente/rechnung/')) {
    const variantLabel = seoTitleLabel(pathname);
    const breadcrumbs = [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: 'Rechnungen', path: '/dokumente/rechnung' },
    ];

    breadcrumbs.push({ name: variantLabel, path: pathname });

    return breadcrumbs;
  }

  if (pathname === '/dokumente/gutschrift') {
    return [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: 'Gutschriften', path: '/dokumente/gutschrift' },
    ];
  }

  if (pathname.startsWith('/dokumente/gutschrift/')) {
    return [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: 'Gutschriften', path: '/dokumente/gutschrift' },
      { name: seoTitleLabel(pathname), path: pathname },
    ];
  }

  if (pathname === '/dokumente/mahnung') {
    return [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: 'Mahnungen', path: '/dokumente/mahnung' },
    ];
  }

  if (pathname.startsWith('/dokumente/mahnung/')) {
    return [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: 'Mahnungen', path: '/dokumente/mahnung' },
      { name: seoTitleLabel(pathname), path: pathname },
    ];
  }

  const document = documentSections
    .flatMap((section) => section.children ?? [])
    .find((item) => item.path === pathname);

  if (document) {
    return [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: documentLabel(document.label), path: pathname },
    ];
  }

  if (pathname.startsWith('/dokumente/')) {
    return [
      HOME_BREADCRUMB,
      DOCUMENTS_BREADCRUMB,
      { name: seoTitleLabel(pathname), path: pathname },
    ];
  }

  return null;
}

function getBreadcrumbs(pathname) {
  const resolvedPath = canonicalPath(pathname);

  if (resolvedPath === '/') {
    return null;
  }

  const documentBreadcrumbs = getDocumentBreadcrumbs(resolvedPath);

  if (documentBreadcrumbs) {
    return documentBreadcrumbs;
  }

  if (resolvedPath === '/tools') {
    return [HOME_BREADCRUMB, TOOLS_BREADCRUMB];
  }

  const tool = findToolItemByPath(resolvedPath);

  if (tool) {
    return [
      HOME_BREADCRUMB,
      TOOLS_BREADCRUMB,
      { name: toolLabel(tool), path: tool.path },
    ];
  }

  if (resolvedPath === '/wissen') {
    return [HOME_BREADCRUMB, KNOWLEDGE_BREADCRUMB];
  }

  if (resolvedPath.startsWith('/wissen/')) {
    const slug = resolvedPath.slice('/wissen/'.length);
    const { page: navigationItem } = findKnowledgeNavigationItem(slug);
    const page = knowledgePages[slug];

    if (page) {
      return [
        HOME_BREADCRUMB,
        KNOWLEDGE_BREADCRUMB,
        { name: navigationItem?.title ?? page.title, path: resolvedPath },
      ];
    }
  }

  if (resolvedPath === '/basiszinssatz-tabelle') {
    return [
      HOME_BREADCRUMB,
      { name: 'Basiszinssatz-Tabelle', path: resolvedPath },
    ];
  }

  return null;
}

function breadcrumbSchema(breadcrumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `${SITE_URL}${breadcrumb.path}`,
    })),
  };
}

export function getStructuredData(pathname) {
  const meta = getSeoMeta(pathname);
  const breadcrumbs = getBreadcrumbs(pathname);
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Belege24',
      url: `${SITE_URL}/`,
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Belege24',
      url: `${SITE_URL}/`,
    },
  ];

  if (breadcrumbs) {
    graph.push({
      '@id': `${meta.canonicalUrl}#breadcrumb`,
      ...breadcrumbSchema(breadcrumbs),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
