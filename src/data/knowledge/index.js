import { knowledgeCategories } from './categories.js';
import rechnung from './pages/rechnung.js';
import angebot from './pages/angebot.js';
import lieferschein from './pages/lieferschein.js';
import gutschrift from './pages/gutschrift.js';
import quittung from './pages/quittung.js';
import eigenbeleg from './pages/eigenbeleg.js';
import mahnverfahren from './pages/mahnverfahren.js';
import zahlungserinnerung from './pages/zahlungserinnerung.js';
import inkasso from './pages/inkasso.js';
import businessplan from './pages/businessplan.js';
import umsatzsteuer from './pages/umsatzsteuer.js';
import faelligkeit from './pages/faelligkeit.js';
import zahlungsverzug from './pages/zahlungsverzug.js';
import verzugszinsen from './pages/verzugszinsen.js';
import verjaehrungVonForderungen from './pages/verjaehrung-von-forderungen.js';
import zinsen from './pages/zinsen.js';
import zinseszins from './pages/zinseszins.js';
import breakEvenPoint from './pages/break-even-point.js';
import kostenvergleichsrechnung from './pages/kostenvergleichsrechnung.js';
import steuern from './pages/steuern.js';
import einkommensteuer from './pages/einkommensteuer.js';
import lohnsteuer from './pages/lohnsteuer.js';
import belege from './pages/belege.js';
import mahnwesen from './pages/mahnwesen.js';
import gerichtlichesMahnverfahren from './pages/gerichtliches-mahnverfahren.js';
import mahnbescheid from './pages/mahnbescheid.js';
import vollstreckungsbescheid from './pages/vollstreckungsbescheid.js';
import koerperschaftsteuer from './pages/koerperschaftsteuer.js';
import gewerbesteuer from './pages/gewerbesteuer.js';
import kapitalertragsteuer from './pages/kapitalertragsteuer.js';
import solidaritaetszuschlag from './pages/solidaritaetszuschlag.js';
import kirchensteuer from './pages/kirchensteuer.js';
import vorsteuer from './pages/vorsteuer.js';
import kleinunternehmerregelung from './pages/kleinunternehmerregelung.js';
import steuerfreieUmsaetze from './pages/steuerfreie-umsaetze.js';
import reverseCharge from './pages/reverse-charge.js';
import innergemeinschaftlicheLieferung from './pages/innergemeinschaftliche-lieferung.js';
import rechtsformen from './pages/rechtsformen.js';
import einzelunternehmen from './pages/einzelunternehmen.js';
import gbr from './pages/gbr.js';

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
  'zahlungserinnerung': zahlungserinnerung,
  'inkasso': inkasso,
  'businessplan': businessplan,
  'umsatzsteuer': umsatzsteuer,
  'faelligkeit': faelligkeit,
  'zahlungsverzug': zahlungsverzug,
  'verzugszinsen': verzugszinsen,
  'verjaehrung-von-forderungen': verjaehrungVonForderungen,
  'zinsen': zinsen,
  'zinseszins': zinseszins,
  'break-even-point': breakEvenPoint,
  'kostenvergleichsrechnung': kostenvergleichsrechnung,
  'steuern': steuern,
  'einkommensteuer': einkommensteuer,
  'lohnsteuer': lohnsteuer,
  'belege': belege,
  'mahnwesen': mahnwesen,
  'gerichtliches-mahnverfahren': gerichtlichesMahnverfahren,
  'mahnbescheid': mahnbescheid,
  'vollstreckungsbescheid': vollstreckungsbescheid,
  'koerperschaftsteuer': koerperschaftsteuer,
  'gewerbesteuer': gewerbesteuer,
  'kapitalertragsteuer': kapitalertragsteuer,
  'solidaritaetszuschlag': solidaritaetszuschlag,
  'kirchensteuer': kirchensteuer,
  'vorsteuer': vorsteuer,
  'kleinunternehmerregelung': kleinunternehmerregelung,
  'steuerfreie-umsaetze': steuerfreieUmsaetze,
  'reverse-charge': reverseCharge,
  'innergemeinschaftliche-lieferung': innergemeinschaftlicheLieferung,
  'rechtsformen': rechtsformen,
  'einzelunternehmen': einzelunternehmen,
  'gbr': gbr,
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
