export const toolItems = [
  {
    id: 'zinsrechner',
    title: 'Zinsrechner',
    description: 'Berechne einfache Zinsen für Kapital, Zinssatz und Laufzeit.',
    path: '/tools/zinsrechner',
    seo: {
      title: 'Zinsrechner | Carta',
      description: 'Berechne einfache Zinsen aus Kapital, Zinssatz und Laufzeit.',
      canonicalPath: '/tools/zinsrechner',
    },
  },
  {
    id: 'zinseszins',
    title: 'Zinseszins',
    description: 'Berechne Zinseszins mit Anfangskapital, monatlicher Rate und Laufzeit.',
    path: '/tools/zinseszins',
    seo: {
      title: 'Zinseszins | Carta',
      description: 'Berechne Zinseszins aus Anfangskapital, Sparrate, Zinssatz und Laufzeit.',
      canonicalPath: '/tools/zinseszins',
    },
  },
  {
    id: 'umsatzsteuerrechner',
    title: 'Umsatzsteuer',
    description: 'Berechne Nettobetrag, Umsatzsteuerbetrag und Bruttobetrag.',
    path: '/tools/umsatzsteuerrechner',
    seo: {
      title: 'Umsatzsteuerrechner | Carta',
      description: 'Berechne Netto, Umsatzsteuer und Brutto mit 19 %, 7 %, 0 % oder eigenem Steuersatz.',
      canonicalPath: '/tools/umsatzsteuerrechner',
    },
  },
  {
    id: 'arbeitszeitrechner',
    title: 'Arbeitszeit',
    description: 'Berechne reine Arbeitszeit aus Beginn, Ende und Pause.',
    path: '/tools/arbeitszeitrechner',
    seo: {
      title: 'Arbeitszeitrechner | Carta',
      description: 'Berechne deine Arbeitszeit aus Arbeitsbeginn, Arbeitsende und Pausenzeit.',
      canonicalPath: '/tools/arbeitszeitrechner',
    },
  },
  {
    id: 'faelligkeitsrechner',
    title: 'Fälligkeit',
    description: 'Berechne das Fälligkeitsdatum aus Rechnungsdatum und Zahlungsziel.',
    path: '/tools/faelligkeitsrechner',
    seo: {
      title: 'Fälligkeitsrechner | Carta',
      description: 'Berechne das Fälligkeitsdatum aus Rechnungsdatum und Zahlungsziel.',
      canonicalPath: '/tools/faelligkeitsrechner',
    },
  },
  {
    id: 'verzugszinsenrechner',
    title: 'Verzugszinsen',
    description: 'Berechne Verzugstage, Verzugszinsen und Gesamtbetrag.',
    path: '/tools/verzugszinsenrechner',
    seo: {
      title: 'Verzugszinsenrechner | Carta',
      description: 'Berechne Verzugszinsen aus offenem Betrag, Zeitraum und Zinssatz.',
      canonicalPath: '/tools/verzugszinsenrechner',
    },
  },
  {
    id: 'stundenlohnrechner',
    title: 'Stundenlohn',
    description: 'Berechne deinen Stundenlohn aus Betrag und Arbeitszeit.',
    path: '/tools/stundenlohnrechner',
    seo: {
      title: 'Stundenlohnrechner | Carta',
      description: 'Berechne deinen Stundenlohn aus Betrag, Stunden und Minuten.',
      canonicalPath: '/tools/stundenlohnrechner',
    },
  },
  {
    id: 'break-even-rechner',
    title: 'Break-even',
    description: 'Berechne Absatzmenge, Umsatz und Zeit bis zum Break-even.',
    path: '/tools/break-even-rechner',
    seo: {
      title: 'Break-even-Rechner | Carta',
      description: 'Berechne Break-even-Menge, Deckungsbeitrag, Umsatz und Zeit bis zum Break-even.',
      canonicalPath: '/tools/break-even-rechner',
    },
  },
  {
    id: 'kostenvergleichsrechner',
    title: 'Kostenvergleich',
    description: 'Vergleiche mehrere Varianten nach Gesamtkosten und laufenden Kosten.',
    path: '/tools/kostenvergleichsrechner',
    seo: {
      title: 'Kostenvergleichsrechner | Carta',
      description: 'Vergleiche Anschaffungskosten, laufende Kosten, Laufzeit und Restwert mehrerer Varianten.',
      canonicalPath: '/tools/kostenvergleichsrechner',
    },
  },
];

export function findToolItem(toolId) {
  return toolItems.find((item) => item.id === toolId) ?? null;
}

export function findToolItemByPath(path) {
  return toolItems.find((item) => item.path === path) ?? null;
}
