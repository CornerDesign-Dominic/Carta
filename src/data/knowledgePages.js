export const knowledgeCategories = [
  {
    id: 'belege',
    title: 'Belege',
    description: 'Grundlagen zu Rechnungen, Angeboten, Lieferscheinen und weiteren kaufmaennischen Belegen.',
    pages: [
      { slug: 'rechnung', title: 'Rechnung' },
      { slug: 'angebot', title: 'Angebot' },
      { slug: 'lieferschein', title: 'Lieferschein' },
      { slug: 'gutschrift', title: 'Gutschrift' },
    ],
  },
  {
    id: 'mahnwesen',
    title: 'Mahnwesen',
    description: 'Wissen zu Zahlungserinnerungen, Mahnstufen, Verzug und offenen Forderungen.',
    pages: [
      { slug: 'zahlungserinnerung', title: 'Zahlungserinnerung' },
      { slug: 'erste-mahnung', title: '1. Mahnung' },
      { slug: 'zweite-mahnung', title: '2. Mahnung' },
      { slug: 'letzte-mahnung', title: 'Letzte Mahnung' },
    ],
  },
  {
    id: 'geschaeftliche-schreiben',
    title: 'Geschaeftliche Schreiben',
    description: 'Erklaerungen zu klassischen Schreiben fuer Kommunikation, Anfragen und Vereinbarungen.',
    pages: [
      { slug: 'geschaeftsbrief', title: 'Geschaeftsbrief' },
      { slug: 'kuendigung', title: 'Kuendigung' },
      { slug: 'anfrage', title: 'Anfrage' },
    ],
  },
  {
    id: 'bwl-rechnungswesen',
    title: 'BWL & Rechnungswesen',
    description: 'Kaufmaennische Grundlagen und spaetere Werkzeuge fuer Berechnungen und Auswertungen.',
    pages: [
      { slug: 'abschreibung', title: 'Abschreibung' },
      { slug: 'zinseszins', title: 'Zinseszins' },
      { slug: 'bab', title: 'BAB' },
      { slug: 'investitionsrechnung', title: 'Investitionsrechnung' },
    ],
  },
];

export const knowledgePages = {
  rechnung: {
    slug: 'rechnung',
    category: 'Belege',
    title: 'Rechnung',
    description: 'Eine Rechnung dokumentiert eine Lieferung oder Leistung und fordert den Empfaenger zur Zahlung auf.',
    intro:
      'Eine Rechnung ist ein geschaeftliches Dokument, mit dem eine erbrachte Leistung oder Lieferung abgerechnet wird. Sie enthaelt die wichtigsten Angaben zu Anbieter, Kunde, Leistung, Betrag, Umsatzsteuer und Zahlungsziel.',
    keyPoints: [
      'vollstaendiger Name und Anschrift von Anbieter und Kunde',
      'Rechnungsdatum',
      'fortlaufende Rechnungsnummer',
      'Leistungsdatum oder Leistungszeitraum',
      'Beschreibung der Leistung oder Lieferung',
      'Netto-Betrag, Umsatzsteuer und Brutto-Betrag',
      'Steuernummer oder USt-ID',
      'Zahlungsziel und Bankverbindung',
    ],
    typicalUse:
      'Eine Rechnung wird meist erstellt, nachdem eine Leistung erbracht oder eine Ware geliefert wurde. Sie dient als Zahlungsaufforderung und als Beleg fuer die Buchhaltung.',
    commonMistakes: [
      'fehlende oder doppelte Rechnungsnummer',
      'fehlendes Leistungsdatum',
      'unklare Leistungsbeschreibung',
      'falscher Umsatzsteuersatz',
      'fehlende Angaben zur Kleinunternehmerregelung',
      'keine klare Zahlungsfrist',
    ],
    toolLink: '/dokumente/rechnung',
    toolLabel: 'Rechnung erstellen',
    faqs: [
      {
        question: 'Was muss in eine Rechnung?',
        answer:
          'Eine Rechnung sollte alle wichtigen Angaben enthalten, damit sie eindeutig, nachvollziehbar und buchhalterisch nutzbar ist. Dazu gehoeren unter anderem Name und Anschrift von Anbieter und Kunde, Rechnungsdatum, Rechnungsnummer, Leistungsdatum, Beschreibung der Leistung, Betrag, Umsatzsteuer und Zahlungsinformationen.',
      },
      {
        question: 'Wann muss ich eine Rechnung schreiben?',
        answer:
          'Eine Rechnung wird in der Regel erstellt, wenn eine Lieferung oder Leistung gegenueber einem Kunden abgerechnet werden soll. Besonders im geschaeftlichen Bereich ist sie wichtig fuer Zahlung, Buchhaltung und Nachweis.',
      },
      {
        question: 'Was ist eine Rechnungsnummer?',
        answer:
          'Die Rechnungsnummer ist eine eindeutige Nummer, mit der eine Rechnung identifiziert werden kann. Sie sollte fortlaufend und nachvollziehbar vergeben werden.',
      },
      {
        question: 'Was ist das Leistungsdatum?',
        answer:
          'Das Leistungsdatum gibt an, wann eine Leistung erbracht oder eine Ware geliefert wurde. Es kann vom Rechnungsdatum abweichen.',
      },
      {
        question: 'Was ist ein Zahlungsziel?',
        answer:
          'Das Zahlungsziel gibt an, bis wann die Rechnung bezahlt werden soll. Haeufige Formulierungen sind zum Beispiel "zahlbar innerhalb von 14 Tagen" oder ein konkretes Faelligkeitsdatum.',
      },
      {
        question: 'Was ist eine Kleinunternehmerrechnung?',
        answer:
          'Bei einer Kleinunternehmerrechnung wird keine Umsatzsteuer ausgewiesen. Stattdessen enthaelt die Rechnung einen Hinweis auf die Anwendung der Kleinunternehmerregelung.',
      },
      {
        question: 'Was ist das Reverse-Charge-Verfahren?',
        answer:
          'Beim Reverse-Charge-Verfahren schuldet nicht der leistende Unternehmer die Umsatzsteuer, sondern der Leistungsempfaenger. Das betrifft vor allem bestimmte grenzueberschreitende oder besondere geschaeftliche Leistungen.',
      },
      {
        question: 'Was passiert, wenn eine Rechnung nicht bezahlt wird?',
        answer:
          'Wird eine Rechnung nicht bezahlt, kann zunaechst eine Zahlungserinnerung oder Mahnung versendet werden. Danach koennen weitere Schritte wie Verzugszinsen, Inkasso oder ein gerichtliches Mahnverfahren folgen.',
      },
    ],
    related: ['angebot', 'lieferschein', 'gutschrift', 'zahlungserinnerung', 'erste-mahnung'],
    disclaimer:
      'Diese Informationen dienen der allgemeinen Orientierung und ersetzen keine rechtliche oder steuerliche Beratung.',
  },
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
