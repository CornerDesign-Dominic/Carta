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
        id: 'steuerarten',
        title: 'Steuerarten',
        topics: [
          { slug: 'einkommensteuer', title: 'Einkommensteuer', description: 'Steuer auf das Einkommen natürlicher Personen; die Wissensseite ist bereits verfügbar.' },
          { slug: 'lohnsteuer', title: 'Lohnsteuer', description: 'Erhebungsform der Einkommensteuer bei Arbeitslohn; die Wissensseite ist bereits verfügbar.' },
          { slug: 'koerperschaftsteuer', title: 'Körperschaftsteuer', description: 'Steuer auf das Einkommen bestimmter juristischer Personen.' },
          { slug: 'gewerbesteuer', title: 'Gewerbesteuer', description: 'Steuer auf den Gewerbeertrag eines Gewerbebetriebs.' },
          { slug: 'umsatzsteuer', title: 'Umsatzsteuer', description: 'Steuer auf viele Lieferungen und Leistungen; die Wissensseite ist bereits verfügbar.' },
          { slug: 'kapitalertragsteuer', title: 'Kapitalertragsteuer', description: 'Steuer auf bestimmte Erträge aus Kapitalvermögen.' },
          { slug: 'solidaritaetszuschlag', title: 'Solidaritätszuschlag', description: 'Zuschlag zur Einkommensteuer und Körperschaftsteuer in gesetzlich bestimmten Fällen.' },
          { slug: 'kirchensteuer', title: 'Kirchensteuer', description: 'Steuer für Mitglieder bestimmter Religionsgemeinschaften.' },
        ],
      },
      {
        id: 'steuerliche-grundlagen',
        title: 'Steuerliche Grundlagen',
        description: 'Hier können später eigenständige Grundlagen wie Vorsteuer, Kleinunternehmerregelung, Betriebsausgaben, Abschreibung, Vorauszahlungen und EÜR eingeordnet werden.',
        topics: [],
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
