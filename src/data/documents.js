export const featureDocuments = [
  {
    title: 'Angebote',
    text: 'Klar strukturierte Angebotsentwürfe mit sauberem Aufbau für Produkte, Leistungen und Konditionen.',
  },
  {
    title: 'Rechnungen',
    text: 'Übersichtliche Rechnungsgrundlagen, die sich später um Nummernkreise, Positionen und Steuern erweitern lassen.',
  },
  {
    title: 'Mahnungen',
    text: 'Ruhig formulierte Erinnerungen mit dem passenden Rahmen für Fristen, Beträge und offene Belege.',
  },
];

export const documentSections = [
  {
    id: 'invoices',
    label: 'Rechnungen',
    title: 'Rechnungen',
    description:
      'Bereite klare Rechnungsdokumente im Browser vor. Später finden hier Positionen, Nummernkreise, Steuerangaben und Exportoptionen ihren Platz.',
    contentSections: [
      {
        heading: 'Was ist eine Rechnung?',
        paragraphs: [
          'Eine Rechnung dokumentiert eine erbrachte Leistung oder gelieferte Ware und fordert den offenen Betrag beim Kunden an. Sie ist damit nicht nur Zahlungsaufforderung, sondern auch ein wichtiger Nachweis für Buchhaltung und Steuerunterlagen.',
        ],
      },
      {
        heading: 'Welche Angaben gehören hinein?',
        paragraphs: [
          'Typische Rechnungen enthalten Absender, Empfänger, Rechnungsnummer, Rechnungsdatum, Leistungszeitraum, Positionen, Beträge, Steuersätze und Zahlungsinformationen. Je nach Unternehmen und Fall können zusätzliche Hinweise oder Pflichtangaben erforderlich sein.',
        ],
      },
      {
        heading: 'Warum ist eine klare Struktur wichtig?',
        paragraphs: [
          'Eine übersichtliche Rechnung reduziert Rückfragen und erleichtert die interne Prüfung beim Kunden. Klare Positionen, verständliche Summen und ein ruhiger Aufbau sorgen dafür, dass das Dokument professionell wirkt und schneller verarbeitet werden kann.',
        ],
      },
      {
        heading: 'Digitale Rechnungserstellung im Browser',
        paragraphs: [
          'Ein browserbasiertes Werkzeug kann helfen, Rechnungen ohne schwere Software vorzubereiten. Vorlagen, wiederkehrende Angaben und ein konsistentes Layout schaffen eine verlässliche Grundlage für einen schnellen Dokumentenprozess.',
        ],
      },
    ],
    children: [
      {
        id: 'write-invoice',
        label: 'Rechnung schreiben',
        title: 'Rechnung schreiben',
        formType: 'invoice',
        description:
          'Erstelle eine Rechnung direkt im A4-Dokument mit Absender, Empfänger, Positionen, Steuern und Fußdaten.',
      },
    ],
  },
  {
    id: 'offers',
    label: 'Angebote',
    title: 'Angebote',
    description:
      'Erstelle eine saubere Grundlage für Angebote mit Leistungen, Konditionen und einem professionellen Aufbau für Kundenkommunikation.',
    contentSections: [
      {
        heading: 'Was ist ein Angebot?',
        paragraphs: [
          'Ein Angebot beschreibt Leistungen, Produkte, Preise und Rahmenbedingungen, bevor ein Auftrag zustande kommt. Es schafft eine verbindliche Gesprächsgrundlage und hilft beiden Seiten, Umfang und Erwartungen klar zu verstehen.',
        ],
      },
      {
        heading: 'Welche Informationen sollten enthalten sein?',
        paragraphs: [
          'Zu einem professionellen Angebot gehören Kontaktdaten, Angebotsdatum, Leistungsbeschreibung, Einzelpreise, Gesamtsumme, mögliche Steuern, Gültigkeit und Zahlungs- oder Lieferbedingungen. Je genauer diese Angaben sind, desto belastbarer ist die Entscheidung des Kunden.',
        ],
      },
      {
        heading: 'Warum professionelle Angebote wichtig sind',
        paragraphs: [
          'Ein gut strukturiertes Angebot vermittelt Verlässlichkeit und erleichtert die Freigabe. Es zeigt, dass Leistungen nachvollziehbar kalkuliert wurden und schafft Vertrauen, bevor ein Projekt oder Auftrag beginnt.',
        ],
      },
      {
        heading: 'Angebote schnell vorbereiten',
        paragraphs: [
          'Mit einer digitalen Oberfläche lassen sich Angebote wiederholbar und sauber aufbauen. Einheitliche Bausteine, klare Positionen und ein ruhiges Layout sparen Zeit und sorgen dafür, dass auch einfache Angebote hochwertig wirken.',
        ],
      },
    ],
    children: [
      {
        id: 'write-offer',
        label: 'Angebot schreiben',
        title: 'Angebot schreiben',
        formType: 'offer',
        description:
          'Diese Ansicht bereitet später die Erstellung eines neuen Angebots mit Leistungen, Preisen und gültigen Konditionen vor.',
      },
    ],
  },
  {
    id: 'reminders',
    label: 'Mahnungen',
    title: 'Mahnungen',
    description:
      'Bereite klare Zahlungserinnerungen und Mahnungen mit Bezug zur Rechnung, Fristen und offenen Beträgen im Browser vor.',
    contentSections: [
      {
        heading: 'Was ist eine Mahnung?',
        paragraphs: [
          'Eine Mahnung erinnert an eine offene Forderung und stellt den Bezug zur ursprünglichen Rechnung her. Sie sollte sachlich, nachvollziehbar und mit klarer Zahlungsfrist formuliert sein.',
        ],
      },
      {
        heading: 'Welche Angaben sind wichtig?',
        paragraphs: [
          'Typische Angaben sind Absender, Empfänger, Mahnungsnummer, Rechnungsnummer, Rechnungsdatum, Fälligkeit, offener Betrag, mögliche Mahngebühren und ein eindeutiger Zahlungshinweis.',
        ],
      },
    ],
    children: [
      {
        id: 'write-reminder',
        label: 'Mahnung schreiben',
        title: 'Mahnung schreiben',
        formType: 'reminder',
        description: '',
      },
    ],
  },
];

export function findDocumentItem(activeId) {
  if (activeId === 'overview') {
    return { item: null, parentId: null };
  }

  for (const section of documentSections) {
    if (section.id === activeId) {
      return { item: section, parentId: section.id };
    }

    const child = section.children?.find((entry) => entry.id === activeId);

    if (child) {
      return { item: child, parentId: section.id };
    }
  }

  return { item: documentSections[0], parentId: documentSections[0].id };
}
