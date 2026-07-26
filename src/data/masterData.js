export const masterDataItems = [
  {
    id: 'own-data',
    title: 'Eigene Daten',
    label: 'Eigene Daten',
    path: '/stammdaten/eigene-daten',
    description:
      'Verwalte eigene Unternehmens-, Kontakt-, Steuer-, Register- und Bankdaten in einer wiederverwendbaren Stammdatensammlung.',
    selectionDescription:
      'Unternehmens-, Kontakt-, Steuer-, Register- und Bankdaten für die Verwendung als Absender und Herausgeber deiner Dokumente.',
    actionLabel: 'Eigene Daten öffnen',
  },
  {
    id: 'partners',
    title: 'Partner und Empfänger',
    label: 'Partner und Empfänger',
    path: '/stammdaten/partner',
    description:
      'Hier werden künftig Kunden, Lieferanten, Ansprechpartner sowie Rechnungs- und Lieferanschriften in einer gemeinsamen Sammlung verwaltet.',
    selectionDescription:
      'Kunden, Lieferanten, Ansprechpartner, Rechnungsadressen und abweichende Lieferanschriften übersichtlich sammeln.',
    actionLabel: 'Partner verwalten',
  },
  {
    id: 'services',
    title: 'Leistungen und Artikel',
    label: 'Leistungen und Artikel',
    path: '/stammdaten/leistungen',
    description:
      'Hier werden künftig wiederkehrende Leistungen und Artikel mit Bezeichnung, Einheit, Preis und Umsatzsteuersatz verwaltet.',
    selectionDescription:
      'Wiederkehrende Leistungen und Artikel mit Bezeichnung, Einheit, Preis und Umsatzsteuersatz vorbereiten.',
    actionLabel: 'Leistungen verwalten',
  },
];

export function findMasterDataItem(itemId) {
  return masterDataItems.find((item) => item.id === itemId) ?? null;
}

export function findMasterDataItemByPath(pathname) {
  return masterDataItems.find((item) => item.path === pathname) ?? null;
}
