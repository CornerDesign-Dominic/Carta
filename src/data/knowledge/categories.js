export const knowledgeCategories = [
  {
    id: 'belege',
    title: 'Belege',
    description: 'Grundlagen zu Rechnungen, Angeboten, Lieferscheinen und weiteren kaufmännischen Belegen.',
    pages: [
      { slug: 'rechnung', title: 'Rechnung' },
      { slug: 'angebot', title: 'Angebot' },
      { slug: 'lieferschein', title: 'Lieferschein' },
      { slug: 'gutschrift', title: 'Gutschrift' },
      { slug: 'quittung', title: 'Quittung' },
      { slug: 'eigenbeleg', title: 'Eigenbeleg' },
    ],
  },
  {
    id: 'mahnwesen',
    title: 'Mahnwesen',
    description: 'Wissen zu Zahlungserinnerungen, Mahnstufen, Verzug und offenen Forderungen.',
    pages: [
      { slug: 'faelligkeit', title: 'Fälligkeit' },
      { slug: 'verzugszinsen', title: 'Verzugszinsen' },
      { slug: 'mahnverfahren', title: 'Mahnverfahren' },
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
    pages: [
      { slug: 'steuern', title: 'Steuern' },
      { slug: 'einkommensteuer', title: 'Einkommensteuer' },
      { slug: 'lohnsteuer', title: 'Lohnsteuer' },
      { slug: 'umsatzsteuer', title: 'Umsatzsteuer' },
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
