export const featureDocuments = [
  {
    title: 'Angebote',
    text: 'Klar strukturierte Angebotsentwürfe mit sauberem Aufbau für Produkte, Leistungen und Konditionen.',
  },
  {
    title: 'Lieferscheine',
    text: 'Lieferscheine mit Positionen, Lieferdaten, Hinweisen, PDF und Druck direkt im Browser erstellen.',
  },
  {
    title: 'Rechnungen',
    text: 'Übersichtliche Rechnungen mit Formular, Positionen, Steuerangaben, PDF und Druck.',
  },
  {
    title: 'Gutschriften',
    text: 'Sauber aufgebaute Gutschriften mit Positionen, Summen, PDF und Druck direkt im Browser.',
  },
  {
    title: 'Mahnungen',
    text: 'Ruhig formulierte Erinnerungen mit dem passenden Rahmen für Fristen, Beträge und offene Belege.',
  },
  {
    title: 'Quittungen',
    text: 'Kompakte Quittungen im DIN-A5-Querformat mit Betrag, Leistung, Referenzen und Unterschriftbereich.',
  },
  {
    title: 'Geschäftsbriefe',
    text: 'Professionelle Geschäftsbriefe mit DIN-5008-orientiertem Aufbau, PDF und Druck.',
  },
];

const allDocumentSections = [
  {
    id: 'invoices',
    label: 'Rechnungen',
    title: 'Rechnungen',
    description:
      'Erstelle klare Rechnungsdokumente im Browser mit Formular, Positionen, Steuerangaben, PDF und Druck.',
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
          'Ein browserbasiertes Werkzeug kann helfen, Rechnungen ohne schwere Software vorzubereiten. Wiederkehrende Angaben und ein konsistentes Layout schaffen eine verlässliche Grundlage für einen schnellen Dokumentenprozess.',
        ],
      },
    ],
    children: [
      {
        id: 'write-invoice',
        label: 'Rechnung schreiben',
        title: 'Rechnung schreiben',
        path: '/dokumente/rechnung/standard',
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
        path: '/dokumente/angebot',
        formType: 'offer',
        description:
          'Erstelle Angebote mit Formular, direkter Dokumentbearbeitung, PDF und Druck.',
      },
    ],
  },
  {
    id: 'delivery-notes',
    label: 'Lieferscheine',
    title: 'Lieferscheine',
    description:
      'Erstelle Lieferscheine mit Formular, direkter Dokumentbearbeitung, Positionsliste, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist ein Lieferschein?',
        paragraphs: [
          'Ein Lieferschein dokumentiert, welche Waren oder Leistungen an den Empfänger übergeben wurden. Er begleitet die Lieferung und hilft beiden Seiten, Umfang und Zeitpunkt der Übergabe nachzuvollziehen.',
        ],
      },
      {
        heading: 'Welche Angaben sollten enthalten sein?',
        paragraphs: [
          'Typische Lieferscheine enthalten Absender, Empfänger, Lieferscheinnummer, Lieferdatum, Bestelldatum, Referenzen sowie die einzelnen Positionen mit Menge, Einheit, Lieferdatum und Hinweis.',
        ],
      },
      {
        heading: 'Warum ein klarer Aufbau wichtig ist',
        paragraphs: [
          'Eine gut strukturierte Lieferdokumentation reduziert Rückfragen im Wareneingang, erleichtert die Prüfung beim Kunden und schafft eine saubere Verbindung zwischen Bestellung, Lieferung und späterer Rechnung.',
        ],
      },
    ],
    children: [
      {
        id: 'write-delivery-note',
        label: 'Lieferschein schreiben',
        title: 'Lieferschein schreiben',
        path: '/dokumente/lieferschein',
        formType: 'deliveryNote',
        description:
          'Erstelle Lieferscheine mit Formular, direkter Dokumentbearbeitung, PDF und Druck.',
      },
    ],
  },
  {
    id: 'business-letters',
    label: 'Geschäftsbriefe',
    title: 'Geschäftsbriefe',
    description:
      'Erstelle professionelle Geschäftsbriefe mit direkter Dokumentbearbeitung, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was gehört in einen Geschäftsbrief?',
        paragraphs: [
          'Ein Geschäftsbrief verbindet eine klare Empfängeranschrift mit einem verständlichen Betreff, einer persönlichen Anrede und einem nachvollziehbaren Text. Ein einheitlicher Footer ergänzt die geschäftlichen Angaben.',
        ],
      },
      {
        heading: 'Übersichtlich und flexibel',
        paragraphs: [
          'Zeichen, Ansprechpartner und Anlagen können bei Bedarf eingeblendet werden. So bleibt der Brief aufgeräumt, ohne auf wichtige Angaben verzichten zu müssen.',
        ],
      },
    ],
    children: [
      {
        id: 'write-business-letter',
        label: 'Geschäftsbrief schreiben',
        title: 'Geschäftsbrief schreiben',
        path: '/dokumente/geschaeftsbrief',
        formType: 'businessLetter',
        description:
          'Erstelle Geschäftsbriefe mit DIN-5008-orientiertem Aufbau, editierbaren Texten, PDF und Druck.',
      },
    ],
  },
  {
    id: 'credit-notes',
    label: 'Gutschriften',
    title: 'Gutschriften',
    description:
      'Erstelle Gutschriften mit klarer Struktur für Leistungspositionen, Steuerangaben, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist eine Gutschrift?',
        paragraphs: [
          'Eine Gutschrift dokumentiert die Korrektur oder Rückvergütung einer bereits erfassten Leistung oder Lieferung. Sie schafft Klarheit über Positionen, Steuern und den gutgeschriebenen Betrag.',
        ],
      },
      {
        heading: 'Welche Angaben sollten enthalten sein?',
        paragraphs: [
          'Typische Gutschriften enthalten Absender, Empfänger, Gutschriftsnummer, Gutschriftsdatum, Leistungsdatum, Referenzen, Positionen, Steuersätze und die abschließende Gutschriftssumme.',
        ],
      },
      {
        heading: 'Warum ein sauberer Aufbau wichtig ist',
        paragraphs: [
          'Eine klar gegliederte Gutschrift reduziert Rückfragen und erleichtert die Prüfung in Buchhaltung und Kundenkommunikation. Deutliche Positionen und nachvollziehbare Summen helfen, den Vorgang schnell zuzuordnen.',
        ],
      },
    ],
    children: [
      {
        id: 'write-credit-note',
        label: 'Gutschrift schreiben',
        title: 'Gutschrift schreiben',
        path: '/dokumente/gutschrift',
        formType: 'creditNote',
        description:
          'Erstelle Gutschriften mit Formular, direkter Dokumentbearbeitung, PDF und Druck.',
      },
    ],
  },
  {
    id: 'reminders',
    label: 'Mahnungen',
    title: 'Mahnungen',
    description:
      'Erstelle klare Zahlungserinnerungen und Mahnungen mit Formular, direkter Dokumentbearbeitung, PDF und Druck.',
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
        path: '/dokumente/mahnung',
        formType: 'reminder',
        description:
          'Erstelle Mahnungen mit offenen Posten, Summen, direkter Dokumentbearbeitung, PDF und Druck.',
      },
    ],
  },
  {
    id: 'receipts',
    label: 'Quittungen',
    title: 'Quittungen',
    description:
      'Erstelle kompakte Quittungen im DIN-A5-Querformat mit Formular, direkter Dokumentbearbeitung, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist eine Quittung?',
        paragraphs: [
          'Eine Quittung bestätigt den Erhalt eines Betrags oder einer Leistung und dient als nachvollziehbarer Beleg für beide Seiten.',
        ],
      },
      {
        heading: 'Welche Angaben sind wichtig?',
        paragraphs: [
          'Typische Angaben sind Aussteller, Empfänger, Quittungskennung, Datum, Betrag, Steueranteil, Verwendungszweck, Ort und Unterschrift.',
        ],
      },
    ],
    children: [
      {
        id: 'write-receipt',
        label: 'Quittung schreiben',
        title: 'Quittung schreiben',
        path: '/dokumente/quittung',
        formType: 'receipt',
        description:
          'Erstelle eine Quittung im DIN-A5-Querformat mit Betragsdarstellung, Leistungstext, Referenzen, PDF und Druck.',
      },
    ],
  },
  {
    id: 'self-receipts',
    label: 'Eigenbelege',
    title: 'Eigenbelege',
    description:
      'Erstelle Eigenbelege für Ausgaben ohne vorhandenen Fremdbeleg mit Formular, direkter Dokumentbearbeitung, PDF und Druck. Wahlweise als einfacher Kurzbeleg im DIN-A5-Format oder als ausführlicher Eigenbeleg im DIN-A4-Format.',
    contentSections: [
      {
        heading: 'Was ist ein Eigenbeleg?',
        paragraphs: [
          'Ein Eigenbeleg dokumentiert eine betrieblich veranlasste Ausgabe, wenn kein externer Fremdbeleg vorliegt oder dieser nicht mehr beschaffbar ist.',
        ],
      },
      {
        heading: 'Welche Angaben sind wichtig?',
        paragraphs: [
          'Typische Angaben sind Absender, Zahlungsempfänger oder Lieferant, Belegkennung, Belegdatum, Ausgabendatum, Anlass, Begründung für den fehlenden Fremdbeleg, Positionen, Steuern und Summen.',
        ],
      },
    ],
    children: [
      {
        id: 'write-self-receipt',
        label: 'Eigenbeleg schreiben',
        title: 'Eigenbeleg schreiben',
        path: '/dokumente/eigenbeleg',
        formType: 'selfReceipt',
        description:
          'Erstelle Eigenbelege mit Formular, direkter Dokumentbearbeitung, eigener Ausgabentabelle, PDF und Druck.',
      },
    ],
  },
];

export const documentSections = allDocumentSections;

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
