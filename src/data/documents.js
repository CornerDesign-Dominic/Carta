export const featureDocuments = [
  {
    title: 'Angebote',
    text: 'Klar strukturierte AngebotsentwÃ¼rfe mit sauberem Aufbau fÃ¼r Produkte, Leistungen und Konditionen.',
  },
  {
    title: 'Lieferscheine',
    text: 'Lieferscheine mit Positionen, Lieferdaten, Hinweisen, Vorlagen, PDF und Druck direkt im Browser erstellen.',
  },
  {
    title: 'Rechnungen',
    text: 'Ãœbersichtliche Rechnungen mit Formular, Positionen, Steuerangaben, Vorlagen, PDF und Druck.',
  },
  {
    title: 'Gutschriften',
    text: 'Sauber aufgebaute Gutschriften mit Positionen, Summen, Vorlagen, PDF und Druck direkt im Browser.',
  },
  {
    title: 'Mahnungen',
    text: 'Ruhig formulierte Erinnerungen mit dem passenden Rahmen fÃ¼r Fristen, BetrÃ¤ge und offene Belege.',
  },
  {
    title: 'Quittungen',
    text: 'Kompakte Quittungen im DIN-A5-Querformat mit Betrag, Leistung, Referenzen und Unterschriftbereich.',
  },
];

const allDocumentSections = [
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
          'Eine Rechnung dokumentiert eine erbrachte Leistung oder gelieferte Ware und fordert den offenen Betrag beim Kunden an. Sie ist damit nicht nur Zahlungsaufforderung, sondern auch ein wichtiger Nachweis fÃ¼r Buchhaltung und Steuerunterlagen.',
        ],
      },
      {
        heading: 'Welche Angaben gehÃ¶ren hinein?',
        paragraphs: [
          'Typische Rechnungen enthalten Absender, EmpfÃ¤nger, Rechnungsnummer, Rechnungsdatum, Leistungszeitraum, Positionen, BetrÃ¤ge, SteuersÃ¤tze und Zahlungsinformationen. Je nach Unternehmen und Fall kÃ¶nnen zusÃ¤tzliche Hinweise oder Pflichtangaben erforderlich sein.',
        ],
      },
      {
        heading: 'Warum ist eine klare Struktur wichtig?',
        paragraphs: [
          'Eine Ãœbersichtliche Rechnung reduziert RÃ¼ckfragen und erleichtert die interne PrÃ¼fung beim Kunden. Klare Positionen, verstÃ¤ndliche Summen und ein ruhiger Aufbau sorgen dafÃ¼r, dass das Dokument professionell wirkt und schneller verarbeitet werden kann.',
        ],
      },
      {
        heading: 'Digitale Rechnungserstellung im Browser',
        paragraphs: [
          'Ein browserbasiertes Werkzeug kann helfen, Rechnungen ohne schwere Software vorzubereiten. Vorlagen, wiederkehrende Angaben und ein konsistentes Layout schaffen eine verlÃ¤ssliche Grundlage fÃ¼r einen schnellen Dokumentenprozess.',
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
          'Erstelle eine Rechnung direkt im A4-Dokument mit Absender, EmpfÃ¤nger, Positionen, Steuern und FuÃŸdaten.',
      },
    ],
  },
  {
    id: 'offers',
    label: 'Angebote',
    title: 'Angebote',
    description:
      'Erstelle eine saubere Grundlage fÃ¼r Angebote mit Leistungen, Konditionen und einem professionellen Aufbau fÃ¼r Kundenkommunikation.',
    contentSections: [
      {
        heading: 'Was ist ein Angebot?',
        paragraphs: [
          'Ein Angebot beschreibt Leistungen, Produkte, Preise und Rahmenbedingungen, bevor ein Auftrag zustande kommt. Es schafft eine verbindliche GesprÃ¤chsgrundlage und hilft beiden Seiten, Umfang und Erwartungen klar zu verstehen.',
        ],
      },
      {
        heading: 'Welche Informationen sollten enthalten sein?',
        paragraphs: [
          'Zu einem professionellen Angebot gehÃ¶ren Kontaktdaten, Angebotsdatum, Leistungsbeschreibung, Einzelpreise, Gesamtsumme, mÃ¶gliche Steuern, GÃ¼ltigkeit und Zahlungs- oder Lieferbedingungen. Je genauer diese Angaben sind, desto belastbarer ist die Entscheidung des Kunden.',
        ],
      },
      {
        heading: 'Warum professionelle Angebote wichtig sind',
        paragraphs: [
          'Ein gut strukturiertes Angebot vermittelt VerlÃ¤sslichkeit und erleichtert die Freigabe. Es zeigt, dass Leistungen nachvollziehbar kalkuliert wurden und schafft Vertrauen, bevor ein Projekt oder Auftrag beginnt.',
        ],
      },
      {
        heading: 'Angebote schnell vorbereiten',
        paragraphs: [
          'Mit einer digitalen OberflÃ¤che lassen sich Angebote wiederholbar und sauber aufbauen. Einheitliche Bausteine, klare Positionen und ein ruhiges Layout sparen Zeit und sorgen dafÃ¼r, dass auch einfache Angebote hochwertig wirken.',
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
          'Ein Lieferschein dokumentiert, welche Waren oder Leistungen an den EmpfÃ¤nger Ã¼bergeben wurden. Er begleitet die Lieferung und hilft beiden Seiten, Umfang und Zeitpunkt der Ãœbergabe nachzuvollziehen.',
        ],
      },
      {
        heading: 'Welche Angaben sollten enthalten sein?',
        paragraphs: [
          'Typische Lieferscheine enthalten Absender, EmpfÃ¤nger, Lieferscheinnummer, Lieferdatum, Bestelldatum, Referenzen sowie die einzelnen Positionen mit Menge, Einheit, Lieferdatum und Hinweis.',
        ],
      },
      {
        heading: 'Warum ein klarer Aufbau wichtig ist',
        paragraphs: [
          'Eine gut strukturierte Lieferdokumentation reduziert RÃ¼ckfragen im Wareneingang, erleichtert die PrÃ¼fung beim Kunden und schafft eine saubere Verbindung zwischen Bestellung, Lieferung und spÃ¤terer Rechnung.',
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
      'Erstelle Gutschriften mit klarer Struktur fÃ¼r Leistungspositionen, Steuerangaben, Vorlagen, PDF und Druck.',
    contentSections: [
      {
        heading: 'Was ist eine Gutschrift?',
        paragraphs: [
          'Eine Gutschrift dokumentiert die Korrektur oder RÃ¼ckvergÃ¼tung einer bereits erfassten Leistung oder Lieferung. Sie schafft Klarheit Ã¼ber Positionen, Steuern und den gutgeschriebenen Betrag.',
        ],
      },
      {
        heading: 'Welche Angaben sollten enthalten sein?',
        paragraphs: [
          'Typische Gutschriften enthalten Absender, EmpfÃ¤nger, Gutschriftsnummer, Gutschriftsdatum, Leistungsdatum, Referenzen, Positionen, SteuersÃ¤tze und die abschlieÃŸende Gutschriftssumme.',
        ],
      },
      {
        heading: 'Warum ein sauberer Aufbau wichtig ist',
        paragraphs: [
          'Eine klar gegliederte Gutschrift reduziert RÃ¼ckfragen und erleichtert die PrÃ¼fung in Buchhaltung und Kundenkommunikation. Deutliche Positionen und nachvollziehbare Summen helfen, den Vorgang schnell zuzuordnen.',
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
          'Eine Mahnung erinnert an eine offene Forderung und stellt den Bezug zur ursprÃ¼nglichen Rechnung her. Sie sollte sachlich, nachvollziehbar und mit klarer Zahlungsfrist formuliert sein.',
        ],
      },
      {
        heading: 'Welche Angaben sind wichtig?',
        paragraphs: [
          'Typische Angaben sind Absender, EmpfÃ¤nger, Mahnungsnummer, Rechnungsnummer, Rechnungsdatum, FÃ¤lligkeit, offener Betrag, mÃ¶gliche MahngebÃ¼hren und ein eindeutiger Zahlungshinweis.',
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
          'Eine Quittung bestÃ¤tigt den Erhalt eines Betrags oder einer Leistung und dient als nachvollziehbarer Beleg fÃ¼r beide Seiten.',
        ],
      },
      {
        heading: 'Welche Angaben sind wichtig?',
        paragraphs: [
          'Typische Angaben sind Aussteller, EmpfÃ¤nger, Quittungskennung, Datum, Betrag, Steueranteil, Verwendungszweck, Ort und Unterschrift.',
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
      'Erstelle Eigenbelege fÃ¼r Ausgaben ohne vorhandenen Fremdbeleg mit Formular, direkter Dokumentbearbeitung, Vorlagen, PDF und Druck.',
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
          'Typische Angaben sind Absender, ZahlungsempfÃ¤nger oder Lieferant, Belegkennung, Belegdatum, Ausgabendatum, Anlass, BegrÃ¼ndung fÃ¼r den fehlenden Fremdbeleg, Positionen, Steuern und Summen.',
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

export const documentSections = allDocumentSections.filter(
  (section) => section.id !== 'self-receipts',
);

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
