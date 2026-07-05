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
];

export function findToolItem(toolId) {
  return toolItems.find((item) => item.id === toolId) ?? null;
}

export function findToolItemByPath(path) {
  return toolItems.find((item) => item.path === path) ?? null;
}
