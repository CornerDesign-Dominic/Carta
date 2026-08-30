import { defaultDisclaimer } from '../shared.js';

const angebot = {
  slug: 'angebot',
  category: 'Belege',
  title: 'Angebot',
  description: 'Ein Angebot beschreibt Waren oder Leistungen, Preise und Bedingungen, bevor ein Auftrag erteilt wird.',
  seo: {
    title: 'Angebot einfach erklärt | Belege24',
    description: 'Was ein Angebot enthält, wann es verbindlich sein kann und wie es sich von Kostenvoranschlag, Auftragsbestätigung und Rechnung unterscheidet.',
    canonicalPath: '/wissen/angebot',
  },
  article: {
    intro: 'Ein Angebot beschreibt, welche Waren oder Leistungen du zu welchen Preisen und Bedingungen anbietest. Es schafft vor einem Auftrag Klarheit über Umfang, Kosten, Termine und weitere Vereinbarungen.',
    sections: [
      {
        heading: 'Was ist ein Angebot?',
        paragraphs: [
          'Ein Angebot ist ein Vorschlag zum Abschluss eines Vertrags. Es richtet sich an einen bestimmten Kunden oder an einen klar bestimmbaren Kreis und beschreibt, was du liefern oder leisten möchtest.',
          'Im Geschäftsalltag hilft ein Angebot beiden Seiten, Leistungen, Mengen, Preise und Bedingungen vor der Beauftragung abzustimmen. Es ist keine Rechnung und fordert noch keine Zahlung.',
        ],
      },
      {
        heading: 'Wann wird ein Angebot verwendet?',
        paragraphs: [
          'Du erstellst ein Angebot, wenn ein Kunde vor einer Bestellung oder Beauftragung eine konkrete Übersicht braucht. Das ist besonders sinnvoll bei individuellen Leistungen, mehreren Positionen, größeren Warenmengen oder wenn Liefer- und Zahlungsbedingungen festgehalten werden sollen.',
          'Nach der Annahme kann das Angebot als Grundlage für eine Auftragsbestätigung, einen Lieferschein und später die Rechnung dienen.',
        ],
      },
      {
        heading: 'Welche Angaben sollte ein Angebot enthalten?',
        paragraphs: [
          'Es gibt keinen einheitlichen Pflichtangabenkatalog für jedes Angebot. Diese Angaben machen es in der Praxis jedoch eindeutig und gut vergleichbar:',
        ],
        list: [
          'Name und Anschrift von Anbieter und Kunde',
          'Angebotsnummer und Ausstellungsdatum',
          'klare Beschreibung der Ware oder Leistung',
          'Menge, Einheit und Einzelpreise',
          'Netto-, Steuer- und Gesamtbetrag oder ein passender Hinweis zur Steuer',
          'Liefer- oder Leistungszeitraum',
          'Zahlungsbedingungen und mögliche Zusatzkosten',
          'Gültigkeitsdauer, Einschränkungen oder Voraussetzungen',
        ],
      },
      {
        heading: 'Preis, Leistungsbeschreibung und Bedingungen',
        paragraphs: [
          'Beschreibe die Leistung so konkret, dass beide Seiten später denselben Umfang verstehen. Bei Waren helfen Artikelbezeichnung, Menge und Einheit. Bei Dienstleistungen sind Umfang, Ergebnis, Einsatzort oder Zeitrahmen oft wichtiger als eine allgemeine Bezeichnung.',
          'Preise, Rabatte, Nebenkosten, Lieferzeit und Zahlungsbedingungen sollten klar erkennbar sein. Unklare Zusatzkosten oder fehlende Voraussetzungen führen häufig zu Rückfragen und späteren Abweichungen.',
        ],
      },
      {
        heading: 'Ist ein Angebot verbindlich?',
        paragraphs: [
          'Ein Angebot kann verbindlich sein. Wer den Abschluss eines Vertrags anbietet, ist daran grundsätzlich gebunden, sofern die Bindung nicht ausgeschlossen wurde. Ob ein konkretes Angebot bindend ist, hängt aber von Wortlaut, Inhalt und Umständen ab.',
          [
            'Mit einer ',
            { type: 'glossary', id: 'bindefrist', text: 'Bindefrist' },
            ' legst du fest, bis wann dein Kunde das Angebot annehmen kann. Begriffe wie „freibleibend“ oder „unverbindlich“ können darauf hinweisen, dass du keine Bindung eingehen möchtest. Ihre Wirkung sollte bei wichtigen Vorgängen rechtlich geprüft werden.',
          ],
        ],
      },
      {
        heading: 'Wie entsteht ein Vertrag?',
        paragraphs: [
          'Ein Vertrag kommt in der Regel zustande, wenn ein Angebot rechtzeitig und ohne Änderungen angenommen wird. Eine Annahme kann ausdrücklich erfolgen, etwa per E-Mail oder Unterschrift, oder sich je nach Vereinbarung aus dem Verhalten der Beteiligten ergeben.',
          'Ändert der Kunde Preis, Menge, Leistungsumfang oder Bedingungen, ist das rechtlich regelmäßig keine unveränderte Annahme. Kläre solche Änderungen schriftlich, bevor du mit der Lieferung oder Leistung beginnst.',
        ],
      },
      {
        heading: 'Unterschied zu Kostenvoranschlag, Auftragsbestätigung und Rechnung',
        paragraphs: [
          'Ein Kostenvoranschlag schätzt voraussichtliche Kosten und ist nicht automatisch ein Angebot. Eine Auftragsbestätigung dokumentiert meist, dass ein Auftrag angenommen wurde und mit welchen Daten er ausgeführt werden soll. Welche rechtliche Wirkung diese Dokumente haben, hängt von ihrer Formulierung und dem Ablauf ab.',
          'Die Rechnung wird nach einer Lieferung oder Leistung zur Abrechnung erstellt. Sie fordert zur Zahlung auf und enthält dafür andere, insbesondere steuerliche Angaben.',
        ],
      },
      {
        heading: 'Änderungen und Nachträge',
        paragraphs: [
          'Ändern sich Menge, Leistungsumfang, Preis, Termin oder Bedingungen, halte die Abweichung nachvollziehbar fest. Ein Nachtrag sollte klar zeigen, auf welches Angebot er sich bezieht und was genau neu vereinbart wird.',
          'Lass Änderungen möglichst bestätigen und gleiche Angebot, Auftragsbestätigung, Lieferschein und Rechnung anschließend miteinander ab. So vermeidest du, dass unterschiedliche Versionen im Umlauf sind.',
        ],
      },
    ],
  },
  generator: {
    label: 'Angebot erstellen',
    href: '/dokumente/angebot',
    text: 'Erstelle ein übersichtliches Angebot mit Leistungen, Preisen und Bedingungen direkt im Browser.',
  },
  keyPoints: [
    'beschreibt Waren oder Leistungen vor der Beauftragung',
    'macht Preis, Menge, Umfang und Bedingungen nachvollziehbar',
    'kann je nach Wortlaut und Umständen verbindlich sein',
    'eine Bindefrist grenzt den Zeitraum für die Annahme ein',
    'Änderungen und Nachträge schriftlich dokumentieren',
    'dient oft als Grundlage für Auftragsbestätigung, Lieferschein und Rechnung',
  ],
  commonMistakes: [
    'unklare Leistungsbeschreibung oder fehlende Mengen',
    'Zusatzkosten, Lieferzeit oder Zahlungsbedingungen nicht nennen',
    'keine klare Gültigkeits- oder Bindefrist angeben',
    '„freibleibend“ verwenden, ohne die Wirkung der Formulierung zu prüfen',
    'Änderungen des Kunden nicht schriftlich bestätigen',
    'abweichende Angaben in Angebot, Auftragsbestätigung und Rechnung',
  ],
  faqs: [
    {
      question: 'Ist ein Angebot verbindlich?',
      answer: 'Ein Angebot kann verbindlich sein. Ob das der Fall ist, hängt vor allem von seinem Inhalt, der Formulierung und den Umständen ab. Bei wichtigen oder komplexen Vorgängen solltest du die Wirkung fachlich prüfen lassen.',
    },
    {
      question: 'Was ist eine Angebotsfrist oder Bindefrist?',
      answer: 'Sie legt fest, bis wann ein Angebot angenommen werden kann. Danach solltest du vor einer Beauftragung prüfen, ob Preis, Leistung und Bedingungen noch gelten.',
    },
    {
      question: 'Was bedeutet „freibleibend“?',
      answer: 'Die Formulierung soll meist zeigen, dass das Angebot unverbindlich sein soll. Ob die Bindung damit tatsächlich ausgeschlossen ist, hängt vom konkreten Wortlaut und den Umständen ab.',
    },
    {
      question: 'Wie wird aus einem Angebot ein Vertrag?',
      answer: 'In der Regel durch eine rechtzeitige Annahme ohne Änderungen. Werden Preis, Menge oder Bedingungen geändert, sollte der Vorgang erneut klar abgestimmt und dokumentiert werden.',
    },
    {
      question: 'Was ist der Unterschied zwischen Angebot und Kostenvoranschlag?',
      answer: 'Ein Angebot beschreibt eine konkrete Leistung zu bestimmten Bedingungen. Ein Kostenvoranschlag schätzt voraussichtliche Kosten. Welche Wirkung ein Dokument hat, ergibt sich aus Inhalt und Formulierung.',
    },
    {
      question: 'Was ist der Unterschied zwischen Angebot und Auftragsbestätigung?',
      answer: 'Das Angebot steht vor der Beauftragung. Die Auftragsbestätigung hält meist fest, dass ein Auftrag angenommen wurde und wie er ausgeführt werden soll.',
    },
    {
      question: 'Was ist der Unterschied zwischen Angebot und Rechnung?',
      answer: 'Ein Angebot beschreibt eine mögliche Beauftragung vor der Lieferung oder Leistung. Eine Rechnung rechnet den tatsächlichen Vorgang ab und fordert zur Zahlung auf.',
    },
  ],
  related: [
    'rechnung',
    'lieferschein',
    'gutschrift',
  ],
  sources: [
    {
      label: '§ 145 BGB – Bindung an den Antrag',
      url: 'https://www.gesetze-im-internet.de/bgb/__145.html',
    },
    {
      label: '§ 146 BGB – Erlöschen des Antrags',
      url: 'https://www.gesetze-im-internet.de/bgb/__146.html',
    },
    {
      label: '§ 147 BGB – Annahmefrist',
      url: 'https://www.gesetze-im-internet.de/bgb/__147.html',
    },
    {
      label: '§ 148 BGB – Bestimmung einer Annahmefrist',
      url: 'https://www.gesetze-im-internet.de/bgb/__148.html',
    },
    {
      label: '§ 150 BGB – Verspätete und abändernde Annahme',
      url: 'https://www.gesetze-im-internet.de/bgb/__150.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default angebot;
