export const knowledgeCategories = [
  {
    id: 'belege',
    landingSlug: 'belege',
    title: 'Belege',
    description: 'Grundlagen zu Rechnungen, Angeboten, Lieferscheinen und weiteren kaufmännischen Belegen.',
    topicsTitle: 'Belegarten',
    pages: [
      { slug: 'belege', title: 'Belege' },
      { slug: 'rechnung', title: 'Rechnung' },
      { slug: 'angebot', title: 'Angebot' },
      { slug: 'lieferschein', title: 'Lieferschein' },
      { slug: 'gutschrift', title: 'Gutschrift' },
      { slug: 'quittung', title: 'Quittung' },
      { slug: 'eigenbeleg', title: 'Eigenbeleg' },
    ],
    topicGroups: [
      {
        id: 'verkauf-und-leistung',
        title: 'Verkaufs- und Leistungsbelege',
        topics: [
          { slug: 'rechnung', title: 'Rechnung' },
          { slug: 'angebot', title: 'Angebot' },
          { slug: 'lieferschein', title: 'Lieferschein' },
        ],
      },
      {
        id: 'korrektur-und-zahlungsnachweise',
        title: 'Korrektur und Zahlungsnachweise',
        topics: [
          { slug: 'gutschrift', title: 'Gutschrift' },
          { slug: 'quittung', title: 'Quittung' },
          { slug: 'eigenbeleg', title: 'Eigenbeleg' },
        ],
      },
    ],
  },
  {
    id: 'mahnwesen',
    landingSlug: 'mahnwesen',
    title: 'Mahnwesen',
    description: 'Wissen zu Zahlungserinnerungen, Mahnstufen, Verzug und offenen Forderungen.',
    topicsTitle: 'Themen im Mahnwesen',
    pages: [
      { slug: 'mahnwesen', title: 'Mahnwesen' },
      { slug: 'faelligkeit', title: 'Fälligkeit' },
      { slug: 'verzugszinsen', title: 'Verzugszinsen' },
      { slug: 'mahnverfahren', title: 'Mahnung' },
      { slug: 'gerichtliches-mahnverfahren', title: 'Gerichtliches Mahnverfahren' },
      { slug: 'mahnbescheid', title: 'Mahnbescheid' },
      { slug: 'vollstreckungsbescheid', title: 'Vollstreckungsbescheid' },
    ],
    topicGroups: [
      {
        id: 'offene-forderungen',
        title: 'Allgemeine Themen rund um Forderungen',
        topics: [
          { slug: 'faelligkeit', title: 'Fälligkeit' },
          { slug: 'zahlungsverzug', title: 'Zahlungsverzug' },
          { slug: 'mahnkosten', title: 'Mahnkosten' },
          { slug: 'verzugszinsen', title: 'Verzugszinsen' },
          { slug: 'verjaehrung-von-forderungen', title: 'Verjährung von Forderungen' },
        ],
      },
      {
        id: 'aussergerichtliches-mahnwesen',
        title: 'Außergerichtliches Mahnwesen',
        topics: [
          { slug: 'mahnverfahren', title: 'Mahnung' },
          { slug: 'zahlungserinnerung', title: 'Zahlungserinnerung' },
          { slug: 'inkasso', title: 'Inkasso' },
        ],
      },
      {
        id: 'gerichtliche-durchsetzung',
        title: 'Gerichtliche Durchsetzung',
        topics: [
          { slug: 'gerichtliches-mahnverfahren', title: 'Gerichtliches Mahnverfahren' },
          { slug: 'mahnbescheid', title: 'Mahnbescheid' },
          { slug: 'vollstreckungsbescheid', title: 'Vollstreckungsbescheid' },
        ],
      },
    ],
  },
  {
    id: 'bwl-rechnungswesen',
    title: 'BWL & Rechnungswesen',
    description: 'Grundlagen zu Steuern, Rechnungswesen und betriebswirtschaftlichen Zusammenhängen.',
    pages: [
      { slug: 'zinsen', title: 'Zinsen' },
      { slug: 'zinseszins', title: 'Zinseszins' },
      { slug: 'break-even-point', title: 'Break-even-Point' },
      { slug: 'kostenvergleichsrechnung', title: 'Kostenvergleichsrechnung' },
    ],
  },
  {
    id: 'steuern',
    landingSlug: 'steuern',
    title: 'Steuern',
    description: 'Steuerarten und steuerliche Grundlagen für den geschäftlichen Alltag.',
    topicsTitle: 'Steuerthemen',
    pages: [
      { slug: 'steuern', title: 'Steuern' },
      { slug: 'einkommensteuer', title: 'Einkommensteuer' },
      { slug: 'lohnsteuer', title: 'Lohnsteuer' },
      { slug: 'solidaritaetszuschlag', title: 'Solidaritätszuschlag' },
      { slug: 'kirchensteuer', title: 'Kirchensteuer' },
      { slug: 'koerperschaftsteuer', title: 'Körperschaftsteuer' },
      { slug: 'gewerbesteuer', title: 'Gewerbesteuer' },
      { slug: 'umsatzsteuer', title: 'Umsatzsteuer' },
      { slug: 'kapitalertragsteuer', title: 'Kapitalertragsteuer' },
      { slug: 'vorsteuer', title: 'Vorsteuer' },
      { slug: 'kleinunternehmerregelung', title: 'Kleinunternehmerregelung' },
      { slug: 'steuerfreie-umsaetze', title: 'Steuerfreie Umsätze' },
      { slug: 'reverse-charge', title: 'Reverse Charge' },
      { slug: 'innergemeinschaftliche-lieferung', title: 'Innergemeinschaftliche Lieferung' },
    ],
    topicGroups: [
      {
        id: 'einkommen-und-unternehmen',
        title: 'Steuern auf Einkommen und Unternehmen',
        topics: [
          { slug: 'einkommensteuer', title: 'Einkommensteuer' },
          { slug: 'koerperschaftsteuer', title: 'Körperschaftsteuer' },
          { slug: 'gewerbesteuer', title: 'Gewerbesteuer' },
        ],
      },
      {
        id: 'arbeitslohn',
        title: 'Steuern auf Arbeitslohn',
        topics: [
          { slug: 'lohnsteuer', title: 'Lohnsteuer' },
          { slug: 'solidaritaetszuschlag', title: 'Solidaritätszuschlag' },
          { slug: 'kirchensteuer', title: 'Kirchensteuer' },
        ],
      },
      {
        id: 'umsaetze-und-kapital',
        title: 'Steuern auf Umsätze und Kapital',
        topics: [
          { slug: 'umsatzsteuer', title: 'Umsatzsteuer' },
          { slug: 'kapitalertragsteuer', title: 'Kapitalertragsteuer' },
        ],
      },
      {
        id: 'steuerliche-grundlagen',
        title: 'Steuerliche Grundlagen',
        topics: [
          { slug: 'vorsteuer', title: 'Vorsteuer' },
          { slug: 'kleinunternehmerregelung', title: 'Kleinunternehmerregelung' },
          { slug: 'steuerfreie-umsaetze', title: 'Steuerfreie Umsätze' },
          { slug: 'reverse-charge', title: 'Reverse Charge' },
          { slug: 'innergemeinschaftliche-lieferung', title: 'Innergemeinschaftliche Lieferung' },
        ],
      },
    ],
  },
  {
    id: 'gruendung',
    title: 'Gründung',
    description: 'Grundlagen für Selbstständige, Gründer und kleine Unternehmen.',
    pages: [
      { slug: 'businessplan', title: 'Businessplan' },
    ],
  },
];
