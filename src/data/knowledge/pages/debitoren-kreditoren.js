import { defaultDisclaimer } from '../shared.js';

const debitorenKreditoren = {
  slug: 'debitoren-kreditoren',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Debitoren und Kreditoren',
  description: 'Debitoren und Kreditoren einfach erklärt: offene Kundenforderungen, Lieferantenverbindlichkeiten sowie die Abläufe von Rechnung bis Zahlung.',
  seo: {
    title: 'Debitoren und Kreditoren einfach erklärt | Belege24',
    description: 'Verstehe Debitoren, Kreditoren, Forderungen, Verbindlichkeiten und offene Posten anhand typischer Rechnungs- und Zahlungsabläufe.',
    canonicalPath: '/wissen/debitoren-kreditoren',
  },
  article: {
    intro: 'Debitoren und Kreditoren helfen, offene Rechnungen getrennt zu verwalten. Debitoren stehen für Kunden, die noch zahlen müssen. Kreditoren stehen für Lieferanten oder Dienstleister, deren Rechnungen das Unternehmen noch bezahlen muss.',
    sections: [
      {
        heading: 'Was sind Debitoren und Kreditoren?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'debitor', text: 'Debitor' },
            ' ist ein Kunde mit einer offenen Zahlungspflicht gegenüber dem Unternehmen. Die offene Kundenzahlung ist eine ',
            { type: 'glossary', id: 'forderung', text: 'Forderung' },
            ' aus Lieferungen und Leistungen.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'kreditor', text: 'Kreditor' },
            ' ist ein Lieferant oder Dienstleister, dem das Unternehmen noch Geld schuldet. Diese offene Zahlung ist eine ',
            { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeit' },
            ' aus Lieferungen und Leistungen.',
          ],
          'Die Begriffe beschreiben damit die Perspektive des eigenen Unternehmens: Kunden sind Debitoren, wenn sie noch zahlen müssen. Lieferanten sind Kreditoren, wenn das Unternehmen noch zahlen muss.',
        ],
      },
      {
        heading: 'Ausgangsrechnungen, Eingangsrechnungen und offene Posten',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'ausgangsrechnung', text: 'Ausgangsrechnung' },
            ' geht an einen Kunden. Wird sie nicht sofort bezahlt, entsteht ein Debitorenposten und damit eine Forderung.',
          ],
          [
            'Eine ',
            { type: 'glossary', id: 'eingangsrechnung', text: 'Eingangsrechnung' },
            ' erhält das Unternehmen von einem Lieferanten oder Dienstleister. Bleibt sie zunächst unbezahlt, entsteht ein Kreditorenposten und damit eine Verbindlichkeit.',
          ],
          [
            'Beide Seiten werden als ',
            { type: 'glossary', id: 'offene-posten', text: 'offene Posten' },
            ' geführt, bis die Zahlung zugeordnet und der Betrag ausgeglichen ist. Eine klare offene-Posten-Übersicht zeigt, welche Kundenzahlungen erwartet werden und welche eigenen Rechnungen fällig sind.',
          ],
        ],
      },
      {
        heading: 'Debitoren- und Kreditorenbuchhaltung',
        paragraphs: [
          'Die Debitorenbuchhaltung verwaltet Kundenrechnungen, Zahlungseingänge, Gutschriften und offene Forderungen. Sie bildet die Grundlage, um ausbleibende Zahlungen rechtzeitig zu erkennen und bei Bedarf eine Zahlungserinnerung oder Mahnung zu versenden.',
          'Die Kreditorenbuchhaltung verwaltet Eingangsrechnungen, Zahlungsziele, Freigaben und eigene Überweisungen. Sie hilft dabei, Lieferantenrechnungen fristgerecht zu bezahlen und Zahlungen nachvollziehbar den passenden Rechnungen zuzuordnen.',
          'In kleineren Unternehmen können beide Bereiche in derselben Buchhaltungssoftware oder offenen-Posten-Liste zusammenlaufen. Entscheidend ist, Kundenforderungen und Lieferantenverbindlichkeiten nicht zu vermischen.',
        ],
      },
      {
        heading: 'Beispiele: Von der Rechnung bis zur Zahlung',
        paragraphs: [
          'Die Abläufe zeigen vereinfacht, wie eine offene Rechnung entsteht und mit der Zahlung wieder ausgeglichen wird. Die konkrete Kontierung und Umsatzsteuer können je nach Fall abweichen.',
        ],
        exampleCards: [
          {
            title: 'Verkauf auf Rechnung: Kunde wird Debitor',
            paragraphs: [
              'Das Unternehmen erbringt eine Leistung und stellt dem Kunden eine Ausgangsrechnung über 1.500 Euro mit Zahlungsziel.',
              'Schritt 1: Mit der Rechnung entsteht eine Forderung gegen den Kunden. Der Kunde wird als Debitor geführt, solange der Betrag offen ist.',
              'Schritt 2: Die Rechnung erscheint in der Debitorenbuchhaltung als offener Posten. Dort lassen sich Rechnungsnummer, Zahlungsziel und bereits eingegangene Teilzahlungen nachverfolgen.',
              'Schritt 3: Der Kunde überweist 1.500 Euro. Die Zahlung wird der Ausgangsrechnung zugeordnet; die Forderung und der offene Posten werden ausgeglichen.',
            ],
            effects: [
              'Vor der Zahlung: Forderung gegen den Debitor.',
              'Nach der Zahlung: Bankguthaben steigt, Forderung sinkt.',
              'Mahnwesen: Bleibt die Zahlung aus, kann der offene Debitorenposten weiterverfolgt werden.',
            ],
          },
          {
            title: 'Einkauf auf Rechnung: Lieferant wird Kreditor',
            paragraphs: [
              'Das Unternehmen erhält eine Eingangsrechnung eines Lieferanten über 900 Euro mit Zahlungsziel.',
              'Schritt 1: Mit der Rechnung entsteht eine Verbindlichkeit gegenüber dem Lieferanten. Der Lieferant wird als Kreditor geführt, solange der Betrag offen ist.',
              'Schritt 2: Die Rechnung erscheint in der Kreditorenbuchhaltung als offener Posten. Dort sind Rechnungsdatum, Zahlungsziel und gegebenenfalls Skonto- oder Freigabeinformationen dokumentiert.',
              'Schritt 3: Das Unternehmen überweist 900 Euro an den Lieferanten. Die Zahlung wird der Eingangsrechnung zugeordnet; die Verbindlichkeit und der offene Posten werden ausgeglichen.',
            ],
            effects: [
              'Vor der Zahlung: Verbindlichkeit gegenüber dem Kreditor.',
              'Nach der Zahlung: Bankguthaben sinkt, Verbindlichkeit sinkt.',
              'Planung: Offene Kreditorenposten zeigen, welche Zahlungen demnächst fällig werden.',
            ],
          },
        ],
      },
      {
        heading: 'Debitoren- und Kreditorennummern',
        paragraphs: [
          'Eine Debitoren- oder Kreditorennummer ist eine interne Kennung für einen Kunden oder Lieferanten. Sie erleichtert die eindeutige Zuordnung von Stammdaten, Rechnungen, Zahlungen und offenen Posten.',
          'Die Nummer ist nicht mit einer Rechnungsnummer gleichzusetzen: Eine Rechnungsnummer gehört zu einem einzelnen Beleg. Eine Debitoren- oder Kreditorennummer kann für mehrere Rechnungen derselben Person oder desselben Unternehmens verwendet werden.',
        ],
      },
      {
        heading: 'Typische Verwechslungen vermeiden',
        paragraphs: [
          'Debitor und Kreditor beschreiben nicht die Rolle einer Person für sich allein, sondern die jeweilige Beziehung zum eigenen Unternehmen. Derselbe Geschäftspartner kann je nach Vorgang Kunde und Lieferant sein und deshalb in beiden Rollen vorkommen.',
          'Eine offene Forderung ist kein Zahlungseingang und eine offene Verbindlichkeit keine bereits geleistete Zahlung. Erst die korrekt zugeordnete Zahlung gleicht den jeweiligen offenen Posten aus.',
          'Verwechsle außerdem nicht Ausgangs- und Eingangsrechnung: Eine Ausgangsrechnung schafft regelmäßig eine Forderung gegenüber einem Kunden; eine Eingangsrechnung regelmäßig eine Verbindlichkeit gegenüber einem Lieferanten.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Debitoren sind Kunden mit offenen Forderungen',
    'Kreditoren sind Lieferanten oder andere Gläubiger mit offenen Verbindlichkeiten',
    'Ausgangsrechnungen können Debitorenposten, Eingangsrechnungen Kreditorenposten auslösen',
    'offene Posten bleiben bestehen, bis eine Zahlung zugeordnet und der Betrag ausgeglichen ist',
    'Debitorenbuchhaltung unterstützt Forderungsmanagement und Mahnwesen',
    'Kreditorenbuchhaltung hilft, eigene Rechnungen und Zahlungsziele im Blick zu behalten',
  ],
  commonMistakes: [
    'Kunden und Lieferanten unabhängig von der eigenen Perspektive Debitor oder Kreditor nennen',
    'Ausgangsrechnung und Eingangsrechnung verwechseln',
    'eine Forderung mit einem bereits erfolgten Zahlungseingang verwechseln',
    'eine Verbindlichkeit mit einer bereits geleisteten Zahlung verwechseln',
    'Zahlungen nicht eindeutig der passenden Rechnung zuordnen',
    'Debitoren- oder Kreditorennummer mit einer Rechnungsnummer verwechseln',
  ],
  faqs: [
    {
      question: 'Was ist ein Debitor?',
      answer: 'Ein Debitor ist ein Kunde, der dem Unternehmen noch Geld schuldet. Seine offene Rechnung wird als Forderung geführt.',
    },
    {
      question: 'Was ist ein Kreditor?',
      answer: 'Ein Kreditor ist ein Lieferant oder anderer Gläubiger, dem das Unternehmen noch Geld schuldet. Seine offene Rechnung wird als Verbindlichkeit geführt.',
    },
    {
      question: 'Wann wird ein Debitorenposten ausgeglichen?',
      answer: 'Wenn die Kundenzahlung der passenden Ausgangsrechnung zugeordnet wurde. Dann sinkt die Forderung und der offene Posten wird geschlossen.',
    },
    {
      question: 'Wann wird ein Kreditorenposten ausgeglichen?',
      answer: 'Wenn das Unternehmen die passende Eingangsrechnung bezahlt und die Zahlung zugeordnet wurde. Dann sinkt die Verbindlichkeit und der offene Posten wird geschlossen.',
    },
    {
      question: 'Was ist eine offene-Posten-Liste?',
      answer: 'Sie zeigt noch nicht ausgeglichene Kundenforderungen und Lieferantenverbindlichkeiten, häufig mit Betrag, Rechnungsnummer, Zahlungsziel und Fälligkeit.',
    },
    {
      question: 'Warum braucht man Debitoren- und Kreditorennummern?',
      answer: 'Sie helfen, Kunden und Lieferanten in der Buchhaltung eindeutig zuzuordnen. Das erleichtert die Verwaltung mehrerer Rechnungen und Zahlungen je Geschäftspartner.',
    },
  ],
  related: [
    'geschaeftsvorfaelle',
    'konten',
    'rechnung',
    'mahnwesen',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default debitorenKreditoren;
