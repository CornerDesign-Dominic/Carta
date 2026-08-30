import { defaultDisclaimer } from '../shared.js';

const doppelteBuchfuehrung = {
  slug: 'doppelte-buchfuehrung',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Doppelte Buchführung & Buchungssätze',
  description: 'Doppelte Buchführung und Buchungssätze einfach erklärt: vom Beleg über Soll an Haben bis zu einfachen und zusammengesetzten Buchungen.',
  seo: {
    title: 'Doppelte Buchführung & Buchungssätze | Belege24',
    description: 'Verstehe die doppelte Buchführung praktisch: Gegenbuchung, Soll an Haben, einfache und zusammengesetzte Buchungssätze mit typischen Beispielen.',
    canonicalPath: '/wissen/doppelte-buchfuehrung',
  },
  article: {
    intro: 'Die doppelte Buchführung erfasst jeden Geschäftsvorfall auf mindestens zwei Konten. Ein Buchungssatz verbindet diese beiden Seiten so, dass nachvollziehbar bleibt, was sich verändert hat und wodurch die Veränderung entstanden ist.',
    sections: [
      {
        heading: 'Das Grundprinzip der doppelten Buchführung',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'geschaeftsvorfall', text: 'Geschäftsvorfall' },
            ' hat mindestens zwei Wirkungen. Kauft ein Unternehmen zum Beispiel eine Maschine und bezahlt per Bank, steigt der Maschinenbestand und das Bankguthaben sinkt. Die doppelte Buchführung hält beide Wirkungen in einer zusammenhängenden Buchung fest.',
          ],
          'So entsteht zu jeder Buchung eine Gegenbuchung. Die Summe der im Soll gebuchten Beträge ist immer genauso hoch wie die Summe der im Haben gebuchten Beträge. Dadurch lassen sich Veränderungen vollständig prüfen und die Buchführung bleibt mit Bilanz und GuV verbunden.',
          'Welche Kontoart wann im Soll oder Haben angesprochen wird, erklären die Seiten zu Soll und Haben sowie zu Konten. Hier geht es darum, diese Regeln auf konkrete Vorgänge anzuwenden.',
        ],
        formulaCards: [
          {
            title: 'Aufbau eines Buchungssatzes',
            formula: 'Sollkonto an Habenkonto',
            description: 'Das Konto vor „an“ wird im Soll gebucht, das Konto danach im Haben. Auf beiden Seiten steht derselbe Betrag.',
          },
        ],
      },
      {
        heading: 'Vom Beleg zum Buchungssatz',
        paragraphs: [
          [
            'Der Ausgangspunkt ist ein nachvollziehbarer ',
            { type: 'glossary', id: 'beleg', text: 'Beleg' },
            '. Das ',
            { type: 'glossary', id: 'belegprinzip', text: 'Belegprinzip' },
            ' hilft, Anlass, Datum, Betrag und Beteiligte einer Buchung nachzuweisen.',
          ],
          'Für den Buchungssatz gehst du praktisch in vier Schritten vor: Erstens: Was ist passiert? Zweitens: Welche Konten sind betroffen? Drittens: Nimmt jedes Konto zu oder ab? Viertens: Auf welcher Seite steht diese Veränderung nach der Kontenregel?',
          [
            'Erst danach wird der ',
            { type: 'glossary', id: 'buchungssatz', text: 'Buchungssatz' },
            ' formuliert. Er ist keine bloße Merkhilfe, sondern die Kurzform für die vollständige Zuordnung von Soll- und Haben-Seite.',
          ],
        ],
      },
      {
        heading: 'Einfache und zusammengesetzte Buchungssätze',
        paragraphs: [
          'Ein einfacher Buchungssatz betrifft genau ein Konto im Soll und ein Konto im Haben. Beispiel: Miete an Bank. Die beiden Konten bilden die vollständige Buchung ab.',
          'Ein zusammengesetzter Buchungssatz betrifft auf mindestens einer Seite mehrere Konten. Das ist zum Beispiel bei einer Kundenrechnung mit Umsatzsteuer üblich: Forderungen stehen im Soll; Umsatzerlöse und Umsatzsteuer stehen im Haben. Auch dann müssen Soll- und Habenbetrag insgesamt gleich sein.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Zusammengesetzter Buchungssatz einer Kundenrechnung',
            paragraphs: [
              'Ein Unternehmen stellt eine Rechnung über 1.190 Euro brutto aus. Darin enthalten sind 1.000 Euro netto und 190 Euro Umsatzsteuer.',
              'Schritt 1: Der Zahlungsanspruch gegen den Kunden entsteht. Forderungen nehmen als Aktivkonto im Soll um 1.190 Euro zu.',
              'Schritt 2: Die Umsatzerlöse erhöhen den Ertrag und stehen mit 1.000 Euro im Haben. Die geschuldete Umsatzsteuer steht mit 190 Euro ebenfalls im Haben.',
              'Der zusammengesetzte Buchungssatz lautet: Forderungen 1.190 Euro an Umsatzerlöse 1.000 Euro und Umsatzsteuer 190 Euro.',
            ],
            effects: [
              'Soll und Haben: Auf beiden Seiten stehen insgesamt 1.190 Euro.',
              'Erfolg: Umsatzerlöse erhöhen den Ertrag; die Umsatzsteuer ist kein eigener Ertrag.',
            ],
          },
        ],
      },
      {
        heading: 'Beispiele: Buchungssätze im Alltag bilden',
        paragraphs: [
          'Die Beispiele lassen Umsatzsteuer und besondere Kontierungsregeln weg, soweit sie für die Grundlogik nicht nötig sind. Entscheidend ist jeweils die Verbindung von Veränderung und Gegenbuchung.',
        ],
        exampleCards: [
          {
            title: 'Büromaterial per Bank bezahlen',
            paragraphs: [
              'Ein Unternehmen bezahlt Büromaterial für 120 Euro per Überweisung.',
              'Schritt 1: Büromaterial ist Aufwand. Der Aufwand nimmt im Soll zu.',
              'Schritt 2: Das Bankguthaben nimmt ab. Bank ist ein Aktivkonto; der Abgang steht im Haben.',
              'Der Buchungssatz lautet: Büromaterialaufwand an Bank 120 Euro.',
            ],
            effects: [
              'GuV: Der Aufwand mindert den Gewinn um 120 Euro.',
              'Bilanz: Das Bankguthaben sinkt um 120 Euro.',
            ],
          },
          {
            title: 'Ware auf Rechnung einkaufen',
            paragraphs: [
              'Ein Handelsunternehmen kauft Ware für 800 Euro auf Rechnung. Die Lieferantenrechnung wird erst später bezahlt.',
              'Schritt 1: Der Wareneingang wird im vereinfachten Beispiel als Aufwand im Soll erfasst.',
              'Schritt 2: Gleichzeitig entsteht eine Verbindlichkeit gegenüber dem Lieferanten. Als Passivkonto nimmt sie im Haben zu.',
              'Der Buchungssatz lautet: Wareneingang an Verbindlichkeiten 800 Euro.',
            ],
            effects: [
              'GuV: Der Wareneingang ist im vereinfachten Beispiel Aufwand.',
              'Bilanz: Eine Verbindlichkeit von 800 Euro entsteht.',
            ],
          },
          {
            title: 'Kundenrechnung wird bezahlt',
            paragraphs: [
              'Ein Kunde überweist 1.500 Euro auf eine bereits offene Rechnung.',
              'Schritt 1: Das Bankguthaben steigt. Bank nimmt als Aktivkonto im Soll zu.',
              'Schritt 2: Die Forderung gegen den Kunden erlischt. Forderungen nehmen als Aktivkonto im Haben ab.',
              'Der Buchungssatz lautet: Bank an Forderungen 1.500 Euro.',
            ],
            effects: [
              'Bilanz: Bank steigt, Forderungen sinken in gleicher Höhe.',
              'GuV: Die Zahlung selbst ist erfolgsneutral, weil der Ertrag bereits beim Verkauf entstanden ist.',
            ],
          },
          {
            title: 'Maschine per Bank kaufen',
            paragraphs: [
              'Ein Unternehmen kauft eine Maschine für 12.000 Euro und bezahlt sofort per Bank.',
              'Schritt 1: Die Maschine gehört zum Anlagevermögen. Ihr Zugang wird im Soll gebucht.',
              'Schritt 2: Das Bankguthaben nimmt ab und wird im Haben gebucht.',
              'Der Buchungssatz lautet: Maschinen an Bank 12.000 Euro.',
            ],
            effects: [
              'Bilanz: Maschine steigt, Bank sinkt in gleicher Höhe.',
              'GuV: Der Kauf ist zunächst erfolgsneutral; eine spätere Abschreibung kann Aufwand auslösen.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Bilanz und GuV',
        paragraphs: [
          [
            'Buchungen auf Bestandskonten verändern Vermögen, Schulden oder Eigenkapital und wirken damit auf die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            '. Buchungen auf Aufwands- und Ertragskonten erfassen dagegen den Erfolg einer Periode und fließen in die ',
            { type: 'glossary', id: 'guv', text: 'GuV' },
            ' ein.',
          ],
          'Ein Buchungssatz kann beide Bereiche verbinden. Bei einer Mietzahlung sinkt beispielsweise das Bankguthaben in der Bilanz und gleichzeitig steigt der Mietaufwand in der GuV. Bei einer reinen Umbuchung zwischen zwei Bestandskonten entsteht dagegen kein Aufwand oder Ertrag.',
        ],
      },
      {
        heading: 'Storno und Korrekturbuchungen',
        paragraphs: [
          'Ist eine Buchung falsch, sollte sie nachvollziehbar korrigiert werden. Bei einer Stornobuchung wird die ursprüngliche Buchung mit vertauschten Soll- und Haben-Seiten rückgängig gemacht. Danach kann der zutreffende Buchungssatz erfasst werden.',
          'Eine Korrektur sollte den ursprünglichen Vorgang und die Änderung erkennbar lassen. Gerade bei digitalen Aufzeichnungen dürfen Fehler nicht durch unnachvollziehbares Überschreiben verschwinden. Welche Korrekturmethode im Einzelfall passt, hängt von Buchhaltungssystem und Fehlerart ab.',
        ],
      },
      {
        heading: 'Typische Fehler beim Bilden von Buchungssätzen',
        paragraphs: [
          'Ein häufiger Fehler ist, nur den Zahlungsfluss zu betrachten. Bei einer Kundenzahlung ist nicht erneut Umsatz zu buchen, sondern die Forderung wird gegen Bank ausgeglichen.',
          'Prüfe immer zuerst die Kontoart und erst dann Soll oder Haben. Die Begriffe sind keine Abkürzung für Plus und Minus. Die detaillierten Regeln findest du bei Soll und Haben sowie bei Bestands- und Erfolgskonten.',
          'Bei zusammengesetzten Buchungssätzen müssen die Summen auf beiden Seiten übereinstimmen. Umsatzsteuer, Skonto oder mehrere Gegenkonten dürfen nicht dazu führen, dass eine Seite unvollständig bleibt.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Jeder Geschäftsvorfall berührt in der doppelten Buchführung mindestens zwei Konten.',
    'Soll- und Habenbeträge müssen in jeder Buchung insgesamt gleich hoch sein.',
    'Ein Buchungssatz fasst Sollkonto und Habenkonto in der Form „Soll an Haben“ zusammen.',
    'Einfache Buchungssätze haben je ein Konto im Soll und Haben; zusammengesetzte Sätze haben auf mindestens einer Seite mehrere Konten.',
    'Belege liefern die Grundlage, bevor Konten und Buchungsseiten bestimmt werden.',
    'Bestandskonten führen zur Bilanz, Erfolgskonten zur GuV.',
  ],
  commonMistakes: [
    'nur Bank oder Kasse betrachten und die Gegenbuchung vergessen',
    'Zahlungseingang auf eine offene Rechnung erneut als Umsatz buchen',
    'Soll und Haben mit Plus und Minus gleichsetzen',
    'bei zusammengesetzten Buchungssätzen unterschiedliche Summen auf beiden Seiten bilden',
    'Umsatzsteuer als eigenen Ertrag behandeln',
    'fehlerhafte Buchungen unnachvollziehbar überschreiben statt korrekt zu berichtigen',
  ],
  faqs: [
    { question: 'Was bedeutet doppelte Buchführung?', answer: 'Sie erfasst jeden Geschäftsvorfall auf mindestens zwei Konten: einer Sollseite und einer oder mehreren Habenseiten mit insgesamt gleichem Betrag.' },
    { question: 'Was ist eine Gegenbuchung?', answer: 'Die Gegenbuchung ist die zweite Seite eines Geschäftsvorfalls. Sie stellt sicher, dass eine Veränderung immer auch mit ihrer Ursache oder Gegenwirkung erfasst wird.' },
    { question: 'Wie ist ein Buchungssatz aufgebaut?', answer: 'Er nennt zuerst das Sollkonto, dann „an“ und anschließend das Habenkonto, zum Beispiel: Bank an Forderungen.' },
    { question: 'Was ist ein zusammengesetzter Buchungssatz?', answer: 'Er enthält auf mindestens einer Seite mehrere Konten, etwa bei einer Rechnung mit Umsatzerlösen und Umsatzsteuer.' },
    { question: 'Ist ein Maschinenkauf sofort Aufwand?', answer: 'In der Regel nicht. Der Kauf verändert zunächst Bestandskonten; Aufwand kann später durch die Abschreibung entstehen.' },
    { question: 'Wie wird eine falsche Buchung korrigiert?', answer: 'Sie sollte nachvollziehbar berichtigt werden, etwa durch Stornierung der falschen Buchung und anschließende Erfassung des richtigen Buchungssatzes.' },
  ],
  related: [
    'geschaeftsvorfaelle',
    'soll-und-haben',
    'konten',
    'bestandskonten',
    'erfolgskonten',
    'bilanz',
    'guv',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default doppelteBuchfuehrung;
