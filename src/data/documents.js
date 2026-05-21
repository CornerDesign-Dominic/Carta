export const featureDocuments = [
  {
    title: 'Angebote',
    text: 'Klar strukturierte Angebotsentwuerfe mit sauberem Aufbau fuer Produkte, Leistungen und Konditionen.',
  },
  {
    title: 'Lieferscheine',
    text: 'Lieferscheine mit Positionen, Lieferdaten, Hinweisen, Vorlagen, PDF und Druck direkt im Browser erstellen.',
  },
  {
    title: 'Rechnungen',
    text: 'Uebersichtliche Rechnungen mit Formular, Positionen, Steuerangaben, Vorlagen, PDF und Druck.',
  },
  {
    title: 'Gutschriften',
    text: 'Sauber aufgebaute Gutschriften mit Positionen, Summen, Vorlagen, PDF und Druck direkt im Browser.',
  },
  {
    title: 'Mahnungen',
    text: 'Ruhig formulierte Erinnerungen mit dem passenden Rahmen fuer Fristen, Betraege und offene Belege.',
  },
  {
    title: 'Quittungen',
    text: 'Kompakte Quittungen im DIN-A5-Querformat mit Betrag, Leistung, Referenzen und Unterschriftbereich.',
  },
  {
    title: 'Eigenbelege',
    text: 'Eigenbelege fuer Ausgaben ohne vorhandenen Fremdbeleg mit Positionen, Summen, Vorlagen, PDF und Druck.',
  },
];

export const documentSections = [
  {
    id: 'invoices',
    label: 'Rechnungen',
    title: 'Rechnungen',
    description:
      'Erstelle klare Rechnungsdokumente im Browser mit Formular, Positionen, Steuerangaben, Vorlagen, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist eine Rechnung?',
        paragraphs: [
          'Eine Rechnung dokumentiert eine erbrachte Leistung oder gelieferte Ware und fordert den offenen Betrag beim Kunden an. Sie ist damit nicht nur Zahlungsaufforderung, sondern auch ein wichtiger Nachweis fuer Buchhaltung und Steuerunterlagen.',
        ],
      },
      {
        heading: 'Welche Angaben gehoeren hinein?',
        paragraphs: [
          'Typische Rechnungen enthalten Absender, Empfaenger, Rechnungsnummer, Rechnungsdatum, Leistungszeitraum, Positionen, Betraege, Steuersaetze und Zahlungsinformationen. Je nach Unternehmen und Fall koennen zusaetzliche Hinweise oder Pflichtangaben erforderlich sein.',
        ],
      },
      {
        heading: 'Warum ist eine klare Struktur wichtig?',
        paragraphs: [
          'Eine uebersichtliche Rechnung reduziert Rueckfragen und erleichtert die interne Pruefung beim Kunden. Klare Positionen, verstaendliche Summen und ein ruhiger Aufbau sorgen dafuer, dass das Dokument professionell wirkt und schneller verarbeitet werden kann.',
        ],
      },
      {
        heading: 'Digitale Rechnungserstellung im Browser',
        paragraphs: [
          'Ein browserbasiertes Werkzeug kann helfen, Rechnungen ohne schwere Software vorzubereiten. Vorlagen, wiederkehrende Angaben und ein konsistentes Layout schaffen eine verlaessliche Grundlage fuer einen schnellen Dokumentenprozess.',
        ],
      },
    ],
    children: [
      {
        id: 'write-invoice',
        label: 'Rechnung schreiben',
        title: 'Rechnung schreiben',
        path: '/dokumente/rechnung',
        formType: 'invoice',
        description:
          'Erstelle eine Rechnung direkt im A4-Dokument mit Absender, Empfaenger, Positionen, Steuern und Fussdaten.',
      },
    ],
  },
  {
    id: 'offers',
    label: 'Angebote',
    title: 'Angebote',
    description:
      'Erstelle eine saubere Grundlage fuer Angebote mit Leistungen, Konditionen und einem professionellen Aufbau fuer Kundenkommunikation.',
    contentSections: [
      {
        heading: 'Was ist ein Angebot?',
        paragraphs: [
          'Ein Angebot beschreibt Leistungen, Produkte, Preise und Rahmenbedingungen, bevor ein Auftrag zustande kommt. Es schafft eine verbindliche Gespraechsgrundlage und hilft beiden Seiten, Umfang und Erwartungen klar zu verstehen.',
        ],
      },
      {
        heading: 'Welche Informationen sollten enthalten sein?',
        paragraphs: [
          'Zu einem professionellen Angebot gehoeren Kontaktdaten, Angebotsdatum, Leistungsbeschreibung, Einzelpreise, Gesamtsumme, moegliche Steuern, Gueltigkeit und Zahlungs- oder Lieferbedingungen. Je genauer diese Angaben sind, desto belastbarer ist die Entscheidung des Kunden.',
        ],
      },
      {
        heading: 'Warum professionelle Angebote wichtig sind',
        paragraphs: [
          'Ein gut strukturiertes Angebot vermittelt Verlaesslichkeit und erleichtert die Freigabe. Es zeigt, dass Leistungen nachvollziehbar kalkuliert wurden und schafft Vertrauen, bevor ein Projekt oder Auftrag beginnt.',
        ],
      },
      {
        heading: 'Angebote schnell vorbereiten',
        paragraphs: [
          'Mit einer digitalen Oberflaeche lassen sich Angebote wiederholbar und sauber aufbauen. Einheitliche Bausteine, klare Positionen und ein ruhiges Layout sparen Zeit und sorgen dafuer, dass auch einfache Angebote hochwertig wirken.',
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
          'Erstelle Angebote mit Formular, direkter Dokumentbearbeitung, JSON-Vorlagen, PDF und Druck.',
      },
    ],
  },
  {
    id: 'delivery-notes',
    label: 'Lieferscheine',
    title: 'Lieferscheine',
    description:
      'Erstelle Lieferscheine mit Formular, direkter Dokumentbearbeitung, Positionsliste, JSON-Vorlagen, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist ein Lieferschein?',
        paragraphs: [
          'Ein Lieferschein dokumentiert, welche Waren oder Leistungen an den Empfaenger uebergeben wurden. Er begleitet die Lieferung und hilft beiden Seiten, Umfang und Zeitpunkt der Uebergabe nachzuvollziehen.',
        ],
      },
      {
        heading: 'Welche Angaben sollten enthalten sein?',
        paragraphs: [
          'Typische Lieferscheine enthalten Absender, Empfaenger, Lieferscheinnummer, Lieferdatum, Bestelldatum, Referenzen sowie die einzelnen Positionen mit Menge, Einheit, Lieferdatum und Hinweis.',
        ],
      },
      {
        heading: 'Warum ein klarer Aufbau wichtig ist',
        paragraphs: [
          'Eine gut strukturierte Lieferdokumentation reduziert Rueckfragen im Wareneingang, erleichtert die Pruefung beim Kunden und schafft eine saubere Verbindung zwischen Bestellung, Lieferung und spaeterer Rechnung.',
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
          'Erstelle Lieferscheine mit Formular, direkter Dokumentbearbeitung, JSON-Vorlagen, PDF und Druck.',
      },
    ],
  },
  {
    id: 'credit-notes',
    label: 'Gutschriften',
    title: 'Gutschriften',
    description:
      'Erstelle Gutschriften mit klarer Struktur fuer Leistungspositionen, Steuerangaben, Vorlagen, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist eine Gutschrift?',
        paragraphs: [
          'Eine Gutschrift dokumentiert die Korrektur oder Rueckverguetung einer bereits erfassten Leistung oder Lieferung. Sie schafft Klarheit ueber Positionen, Steuern und den gutgeschriebenen Betrag.',
        ],
      },
      {
        heading: 'Welche Angaben sollten enthalten sein?',
        paragraphs: [
          'Typische Gutschriften enthalten Absender, Empfaenger, Gutschriftsnummer, Gutschriftsdatum, Leistungsdatum, Referenzen, Positionen, Steuersaetze und die abschliessende Gutschriftssumme.',
        ],
      },
      {
        heading: 'Warum ein sauberer Aufbau wichtig ist',
        paragraphs: [
          'Eine klar gegliederte Gutschrift reduziert Rueckfragen und erleichtert die Pruefung in Buchhaltung und Kundenkommunikation. Deutliche Positionen und nachvollziehbare Summen helfen, den Vorgang schnell zuzuordnen.',
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
          'Erstelle Gutschriften mit Formular, direkter Dokumentbearbeitung, JSON-Vorlagen, PDF und Druck.',
      },
    ],
  },
  {
    id: 'reminders',
    label: 'Mahnungen',
    title: 'Mahnungen',
    description:
      'Erstelle klare Zahlungserinnerungen und Mahnungen mit Formular, direkter Dokumentbearbeitung, Vorlagen, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist eine Mahnung?',
        paragraphs: [
          'Eine Mahnung erinnert an eine offene Forderung und stellt den Bezug zur urspruenglichen Rechnung her. Sie sollte sachlich, nachvollziehbar und mit klarer Zahlungsfrist formuliert sein.',
        ],
      },
      {
        heading: 'Welche Angaben sind wichtig?',
        paragraphs: [
          'Typische Angaben sind Absender, Empfaenger, Mahnungsnummer, Rechnungsnummer, Rechnungsdatum, Faelligkeit, offener Betrag, moegliche Mahngebuehren und ein eindeutiger Zahlungshinweis.',
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
          'Erstelle Mahnungen mit offenen Posten, Summen, direkter Dokumentbearbeitung, JSON-Vorlagen, PDF und Druck.',
      },
    ],
  },
  {
    id: 'receipts',
    label: 'Quittungen',
    title: 'Quittungen',
    description:
      'Erstelle kompakte Quittungen im DIN-A5-Querformat mit Formular, direkter Dokumentbearbeitung, Vorlagen, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist eine Quittung?',
        paragraphs: [
          'Eine Quittung bestaetigt den Erhalt eines Betrags oder einer Leistung und dient als nachvollziehbarer Beleg fuer beide Seiten.',
        ],
      },
      {
        heading: 'Welche Angaben sind wichtig?',
        paragraphs: [
          'Typische Angaben sind Aussteller, Empfaenger, Quittungskennung, Datum, Betrag, Steueranteil, Verwendungszweck, Ort und Unterschrift.',
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
          'Erstelle eine Quittung im DIN-A5-Querformat mit Betragsdarstellung, Leistungstext, Referenzen, JSON-Vorlagen, PDF und Druck.',
      },
    ],
  },
  {
    id: 'self-receipts',
    label: 'Eigenbelege',
    title: 'Eigenbelege',
    description:
      'Erstelle Eigenbelege fuer Ausgaben ohne vorhandenen Fremdbeleg mit Formular, direkter Dokumentbearbeitung, Vorlagen, PDF und Druck.',
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
          'Typische Angaben sind Absender, Zahlungsempfaenger oder Lieferant, Belegkennung, Belegdatum, Ausgabendatum, Anlass, Begruendung fuer den fehlenden Fremdbeleg, Positionen, Steuern und Summen.',
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
          'Erstelle Eigenbelege mit Formular, direkter Dokumentbearbeitung, eigener Ausgabentabelle, JSON-Vorlagen, PDF und Druck.',
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
