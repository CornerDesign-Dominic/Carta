import { documentSections } from './documents.js';
import { getKnowledgeSeo, knowledgePages } from './knowledgePages.js';
import { findMasterDataItemByPath } from './masterData.js';
import { findToolItemByPath, toolItems } from './tools.js';

const SITE_URL = 'https://belege24.com';
const DEFAULT_TITLE = 'Belege24 | Geschäftsdokumente im Browser erstellen';
const DEFAULT_DESCRIPTION =
  'Mit Belege24 erstellst du Quittungen, Rechnungen und weitere Belege ohne Anmeldung, kostenlos direkt im Browser.';

const staticSeo = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/dokumente': {
    title: 'Dokumente kostenlos online erstellen | Belege24',
    description:
      'Erstelle Rechnungen, Angebote, Lieferscheine, Gutschriften, Mahnungen, Quittungen, Eigenbelege und Geschäftsbriefe direkt im Browser.',
  },
  '/tools': {
    title: 'Online-Werkzeuge für kaufmännische Berechnungen | Belege24',
    description:
      'Nutze Belege24 Werkzeuge für Zinsen, Umsatzsteuer, Fälligkeiten, Arbeitszeit, Stundenlohn, Break-even und Kostenvergleiche.',
  },
  '/wissen': {
    title: 'Wissen zu Belegen und kaufmännischen Grundlagen | Belege24',
    description:
      'Lies Grundlagen zu Rechnungen, Angeboten, Lieferscheinen, Gutschriften, Quittungen, Mahnwesen und Gründungsthemen.',
  },
  '/basiszinssatz-tabelle': {
    title: 'Basiszinssatz-Tabelle und Verzugszinssätze | Belege24',
    description:
      'Aktuelle und historische Basiszinssätze nach § 247 BGB sowie daraus abgeleitete gesetzliche Verzugszinssätze im Überblick.',
  },
  '/impressum': {
    title: 'Impressum | Belege24',
    description: 'Impressum von Belege24.',
  },
  '/datenschutz': {
    title: 'Datenschutz | Belege24',
    description: 'Datenschutzhinweise von Belege24.',
  },
  '/agb': {
    title: 'AGB | Belege24',
    description: 'Allgemeine Geschäftsbedingungen von Belege24.',
  },
};

const invoiceVariantSeo = {
  '/dokumente/rechnung': {
    title: 'Rechnung kostenlos online erstellen | Belege24',
    description:
      'Erstelle eine Rechnung kostenlos online mit Positionen, Steuerangaben, PDF und Druck direkt im Browser.',
    canonicalPath: '/dokumente/rechnung/standard',
  },
  '/dokumente/rechnung/standard': {
    title: 'Rechnung kostenlos online erstellen | Belege24',
    description:
      'Erstelle eine Rechnung kostenlos online mit Positionen, Steuerangaben, PDF und Druck direkt im Browser.',
  },
  '/dokumente/rechnung/kleinunternehmer': {
    title: 'Kleinunternehmer-Rechnung online erstellen | Belege24',
    description:
      'Erstelle eine Rechnung für Kleinunternehmer online mit passendem Hinweis, Positionen, PDF und Druck.',
    canonicalPath: '/dokumente/rechnung/standard',
  },
  '/dokumente/rechnung/text': {
    title: 'Textrechnung online erstellen | Belege24',
    description:
      'Erstelle eine Textrechnung online mit freier Leistungsbeschreibung, Steuerangaben, PDF und Druck.',
  },
  '/dokumente/rechnung/waren': {
    title: 'Warenrechnung online erstellen | Belege24',
    description:
      'Erstelle eine Warenrechnung online mit Mengen, Einzelpreisen, Steuerangaben, PDF und Druck.',
  },
  '/dokumente/rechnung/abschlag': {
    title: 'Abschlagsrechnung online erstellen | Belege24',
    description:
      'Erstelle eine Abschlagsrechnung online mit Positionen, Steuerangaben, PDF und Druck direkt im Browser.',
  },
  '/dokumente/rechnung/teilrechnung': {
    title: 'Teilrechnung online erstellen | Belege24',
    description:
      'Erstelle eine Teilrechnung online mit Positionen, Steuerangaben, PDF und Druck direkt im Browser.',
  },
  '/dokumente/rechnung/schlussrechnung': {
    title: 'Schlussrechnung online erstellen | Belege24',
    description:
      'Erstelle eine Schlussrechnung online mit Positionen, Steuerangaben, PDF und Druck direkt im Browser.',
  },
};

const documentPathSeo = Object.fromEntries(
  documentSections.flatMap((section) =>
    (section.children ?? [])
      .filter((child) => child.path)
      .map((child) => [
        child.path,
        {
          title: `${child.label.replace(' schreiben', '')} online erstellen | Belege24`,
          description: child.description,
        },
      ]),
  ),
);

const documentSeo = {
  ...documentPathSeo,
  ...invoiceVariantSeo,
  '/dokumente/eigenbeleg/a4': {
    title: 'Eigenbeleg A4 online erstellen | Belege24',
    description:
      'Erstelle einen ausführlichen Eigenbeleg im DIN-A4-Format mit Formular, Ausgabentabelle, PDF und Druck.',
  },
  '/dokumente/eigenbeleg/a5': {
    title: 'Eigenbeleg A5 online erstellen | Belege24',
    description:
      'Erstelle einen kompakten Eigenbeleg im DIN-A5-Format mit Formular, PDF und Druck direkt im Browser.',
    canonicalPath: '/dokumente/eigenbeleg',
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/+$/, '') || '/';
}

function canonicalUrl(pathname) {
  return `${SITE_URL}${pathname}`;
}

function withDefaults(seo, pathname) {
  const canonicalPath = normalizePath(seo.canonicalPath ?? pathname);
  const title = seo.title ?? DEFAULT_TITLE;
  const description = seo.description ?? DEFAULT_DESCRIPTION;

  return {
    title,
    description,
    canonicalUrl: canonicalUrl(canonicalPath),
    openGraph: {
      title,
      description,
      url: canonicalUrl(canonicalPath),
    },
  };
}

function toolSeo(pathname) {
  const tool = findToolItemByPath(pathname);

  if (!tool) {
    return null;
  }

  return tool.seo ?? {
    title: `${tool.title} | Belege24`,
    description: tool.description,
    canonicalPath: tool.path,
  };
}

function knowledgeSeo(pathname) {
  const slug = pathname.slice('/wissen/'.length);

  if (!slug || !knowledgePages[slug]) {
    return null;
  }

  return getKnowledgeSeo(slug);
}

function masterDataSeo(pathname) {
  const item = findMasterDataItemByPath(pathname);

  if (!item) {
    return null;
  }

  return {
    title: `${item.title} | Stammdaten | Belege24`,
    description: item.description,
    canonicalPath: item.path,
  };
}

export function getSeoMeta(pathname) {
  const normalizedPath = normalizePath(pathname);
  const seo =
    staticSeo[normalizedPath]
    ?? documentSeo[normalizedPath]
    ?? toolSeo(normalizedPath)
    ?? knowledgeSeo(normalizedPath)
    ?? masterDataSeo(normalizedPath)
    ?? {
      title: 'Seite nicht gefunden | Belege24',
      description: 'Die angeforderte Seite wurde nicht gefunden.',
      canonicalPath: normalizedPath,
    };

  return withDefaults(seo, normalizedPath);
}

export const coveredSeoRoutes = [
  ...Object.keys(staticSeo),
  ...Object.keys(documentSeo),
  ...toolItems.map((item) => item.path),
  ...Object.keys(knowledgePages).map((slug) => `/wissen/${slug}`),
];
