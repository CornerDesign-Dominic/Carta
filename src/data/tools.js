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
];

export function findToolItem(toolId) {
  return toolItems.find((item) => item.id === toolId) ?? null;
}

export function findToolItemByPath(path) {
  return toolItems.find((item) => item.path === path) ?? null;
}
