import { defaultDisclaimer } from '../shared.js';

const konten = {
  slug: 'konten',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Konten',
  description: 'Konten in der Buchführung einfach erklärt: T-Konto, Bestands- und Erfolgskonten, Saldo sowie der Zusammenhang mit Bilanz und GuV.',
  seo: {
    title: 'Konten in der Buchführung erklärt | Belege24',
    description: 'Verstehe Konten, T-Konten, Soll und Haben, Bestands- und Erfolgskonten sowie Abschluss und Saldo anhand einfacher Beispiele.',
    canonicalPath: '/wissen/konten',
  },
  article: {
    intro: 'Konten ordnen Geschäftsvorfälle nach ihrem wirtschaftlichen Inhalt. Statt alle Vorgänge nur in einer Liste zu sammeln, zeigt ein Konto zum Beispiel getrennt, wie sich Bankguthaben, Verbindlichkeiten, Miete oder Umsatzerlöse verändern.',
    sections: [
      {
        heading: 'Was ist ein Konto in der Buchführung?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'konto', text: 'Konto' },
            ' bündelt gleichartige Buchungen. Es macht sichtbar, welche Änderungen zu einem bestimmten Bereich gehören und wie hoch dessen Bestand oder Erfolg im betrachteten Zeitraum ist.',
          ],
          'Konten werden benötigt, damit die Buchführung nachvollziehbar bleibt. Ohne sie wäre schwer zu erkennen, wie viel Geld auf der Bank liegt, welche Rechnungen noch offen sind oder wie hoch die Mietaufwendungen eines Monats waren.',
          'Bei jedem Geschäftsvorfall werden die betroffenen Konten angesprochen. So verbindet die Buchführung einen einzelnen Vorgang mit der laufenden Übersicht über Vermögen, Schulden, Aufwendungen und Erträge.',
        ],
      },
      {
        heading: 'Aufbau eines T-Kontos',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 't-konto', text: 'T-Konto' },
            ' stellt ein Konto vereinfacht wie den Buchstaben T dar: links steht ',
            { type: 'glossary', id: 'soll', text: 'Soll' },
            ', rechts ',
            { type: 'glossary', id: 'haben', text: 'Haben' },
            '. Auf beiden Seiten werden Beträge erfasst.',
          ],
          'Bei Bestandskonten werden Anfangsbestand, Zugänge und Abgänge eingetragen. Zum Abschluss wird die Differenz beider Seiten als Saldo ergänzt, damit Soll und Haben gleich hoch sind. Dieser Saldo ist der Endbestand.',
        ],
        formulaCards: [
          {
            title: 'Grundaufbau eines T-Kontos',
            formula: 'Soll  |  Konto  |  Haben',
            description: 'Soll steht links, Haben rechts. Die Kontoart entscheidet, auf welcher Seite Anfangsbestand, Zugänge und Abgänge stehen.',
          },
          {
            title: 'Aktives Bestandskonto',
            formula: 'AB + Zugänge im Soll · Abgänge im Haben',
            description: 'Beispiele sind Bank, Kasse, Forderungen oder Maschinen.',
          },
          {
            title: 'Passives Bestandskonto',
            formula: 'AB + Zugänge im Haben · Abgänge im Soll',
            description: 'Beispiele sind Darlehen, Verbindlichkeiten und Eigenkapital.',
          },
        ],
      },
      {
        heading: 'Bestandskonten und Erfolgskonten',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'bestandskonto', text: 'Bestandskonto' },
            ' zeigt Werte, die zu einem Stichtag vorhanden sind. Dazu gehören ',
            { type: 'glossary', id: 'aktivkonto', text: 'Aktivkonten' },
            ' für Vermögen und ',
            { type: 'glossary', id: 'passivkonto', text: 'Passivkonten' },
            ' für Eigenkapital und Schulden.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'erfolgskonto', text: 'Erfolgskonto' },
            ' zeigt Veränderungen innerhalb eines Zeitraums. ',
            { type: 'glossary', id: 'aufwandskonto', text: 'Aufwandskonten' },
            ' erfassen Werteverzehr wie Miete oder Materialverbrauch im Soll. ',
            { type: 'glossary', id: 'ertragskonto', text: 'Ertragskonten' },
            ' erfassen Wertzuwächse wie Umsatzerlöse im Haben.',
          ],
          [
            'Bestandskonten werden über die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' abgeschlossen. Erfolgskonten werden über die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' abgeschlossen. So verbinden Konten die laufende Buchführung mit dem Jahresabschluss.',
          ],
        ],
      },
      {
        heading: 'Beispiele: Vier Konten im Einsatz',
        paragraphs: [
          'Die Beispiele zeigen vereinfacht, wie verschiedene Kontoarten Bestandsveränderungen und Erfolg erfassen. Beträge, Umsatzsteuer und konkrete Kontierung können in der Praxis abweichen.',
        ],
        exampleCards: [
          {
            title: 'Bankkonto',
            paragraphs: [
              'Das Bankkonto ist ein Aktivkonto. Zu Beginn stehen 4.000 Euro auf dem Konto; der Anfangsbestand steht im Soll.',
              'Ein Kunde überweist 1.200 Euro. Das Bankguthaben steigt, deshalb wird der Zugang im Soll eingetragen.',
              'Das Unternehmen bezahlt eine Rechnung über 700 Euro. Das Bankguthaben sinkt, deshalb steht der Abgang im Haben.',
              'Die Sollseite beträgt 5.200 Euro, die Habenseite zunächst 700 Euro. Der Saldo von 4.500 Euro wird im Haben ergänzt; er ist zugleich der Endbestand des Bankkontos.',
            ],
            effects: [
              'Kontoart: Aktivkonto.',
              'Regel: Zugänge im Soll, Abgänge im Haben.',
            ],
          },
          {
            title: 'Verbindlichkeiten',
            paragraphs: [
              'Das Konto Verbindlichkeiten ist ein Passivkonto. Zu Beginn bestehen offene Lieferantenrechnungen von 3.000 Euro; der Anfangsbestand steht im Haben.',
              'Ein Einkauf auf Rechnung erhöht die Schuld um 900 Euro. Als Zugang auf einem Passivkonto steht der Betrag im Haben.',
              'Eine Überweisung an einen Lieferanten von 1.100 Euro reduziert die Schuld. Der Abgang steht im Soll.',
              'Der verbleibende Endbestand beträgt 2.800 Euro und wird beim Abschluss als Saldo auf der Sollseite ergänzt.',
            ],
            effects: [
              'Kontoart: Passivkonto.',
              'Regel: Zugänge im Haben, Abgänge im Soll.',
            ],
          },
          {
            title: 'Mietaufwand',
            paragraphs: [
              'Das Unternehmen bezahlt Monatsmiete von 700 Euro. Miete ist ein Aufwandskonto und hat keinen Anfangsbestand wie ein Bankkonto.',
              'Der Mietaufwand nimmt zu. Zugänge auf Aufwandskonten stehen im Soll.',
              'Die Gegenbuchung betrifft das Bankkonto im Haben, weil dort Geld abgeht. Der Buchungssatz lautet: Miete an Bank.',
              'Zum Periodenende wird der Saldo des Mietkontos über die GuV abgeschlossen.',
            ],
            effects: [
              'Kontoart: Aufwandskonto.',
              'Wirkung: Der Aufwand mindert den Gewinn.',
            ],
          },
          {
            title: 'Umsatzerlöse',
            paragraphs: [
              'Das Unternehmen verkauft eine Leistung für 1.500 Euro auf Rechnung. Umsatzerlöse sind ein Ertragskonto.',
              'Der Ertrag nimmt zu. Zugänge auf Ertragskonten stehen im Haben.',
              'Die Gegenbuchung betrifft die Forderung im Soll, weil ein Zahlungsanspruch gegen den Kunden entsteht. Der Buchungssatz lautet: Forderungen an Umsatzerlöse.',
              'Zum Periodenende wird der Saldo des Ertragskontos über die GuV abgeschlossen.',
            ],
            effects: [
              'Kontoart: Ertragskonto.',
              'Wirkung: Der Ertrag erhöht den Gewinn.',
            ],
          },
        ],
      },
      {
        heading: 'Saldo und Abschluss eines Kontos',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'saldo', text: 'Saldo' },
            ' gleicht die beiden Seiten eines Kontos aus. Er wird auf der kleineren Seite eingetragen, damit Soll und Haben denselben Gesamtbetrag ergeben.',
          ],
          'Bei einem Bestandskonto entspricht der Saldo grundsätzlich dem Endbestand. Aktivkonten werden zum Abschluss auf die Habenseite ausgeglichen und Passivkonten auf die Sollseite. Erfolgskonten werden über die GuV abgeschlossen; daraus ergibt sich, ob sie den Gewinn mindern oder erhöhen.',
        ],
      },
      {
        heading: 'Kontenrahmen und Kontenplan',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'kontenrahmen', text: 'Kontenrahmen' },
            ' ist eine strukturierte Vorlage mit möglichen Konten. Er schafft eine einheitliche Ordnung, etwa für eine Branche oder Unternehmensgruppe.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'kontenplan', text: 'Kontenplan' },
            ' ist die konkrete Auswahl daraus, die ein Unternehmen tatsächlich nutzt. Für den Einstieg reicht es, die Kontoarten und ihre Grundlogik zu verstehen; die genaue Nummerierung hängt vom verwendeten Kontenrahmen ab.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle nicht Kontoart und Buchungsseite. Ein Zugang steht nicht immer im Soll: Bei Passiv- und Ertragskonten werden Zugänge im Haben gebucht.',
          'Ein Saldo ist kein zusätzlicher Geschäftsvorfall. Er macht nur sichtbar, welche Seite nach den bereits erfassten Buchungen noch fehlt, damit das Konto ausgeglichen ist.',
          'Behandle Bestands- und Erfolgskonten nicht gleich. Bestandskonten zeigen Werte zu einem Stichtag, Erfolgskonten Veränderungen innerhalb eines Zeitraums.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Konten bündeln gleichartige Buchungen und machen Veränderungen nachvollziehbar',
    'das T-Konto hat Soll links und Haben rechts',
    'Bestandskonten zeigen Vermögen, Eigenkapital und Schulden',
    'Erfolgskonten zeigen Aufwendungen und Erträge eines Zeitraums',
    'der Saldo gleicht Soll und Haben aus und zeigt bei Bestandskonten den Endbestand',
    'Kontenrahmen und Kontenplan geben der Buchführung eine einheitliche Struktur',
  ],
  commonMistakes: [
    'Soll und Haben mit Plus und Minus gleichsetzen',
    'bei Passivkonten die Regeln von Aktivkonten anwenden',
    'Saldo als neue Buchung statt als rechnerischen Ausgleich verstehen',
    'Bestandskonten und Erfolgskonten vermischen',
    'Anfangsbestand, Zugänge und Abgänge nicht getrennt betrachten',
    'Kontenrahmen und individuellen Kontenplan gleichsetzen',
  ],
  faqs: [
    {
      question: 'Was ist ein Konto in der Buchführung?',
      answer: 'Ein Konto bündelt gleichartige Buchungen, zum Beispiel alle Veränderungen des Bankguthabens, der Verbindlichkeiten oder des Mietaufwands.',
    },
    {
      question: 'Was zeigt ein T-Konto?',
      answer: 'Ein T-Konto zeigt Soll auf der linken und Haben auf der rechten Seite. Dort werden Anfangsbestand, Zugänge, Abgänge und der Saldo übersichtlich erfasst.',
    },
    {
      question: 'Was ist der Unterschied zwischen Bestands- und Erfolgskonto?',
      answer: 'Bestandskonten zeigen Vermögen, Eigenkapital oder Schulden zu einem Stichtag. Erfolgskonten zeigen Aufwendungen und Erträge innerhalb eines Zeitraums.',
    },
    {
      question: 'Was ist ein Saldo?',
      answer: 'Der Saldo ist die Differenz zwischen Soll und Haben. Bei einem Bestandskonto entspricht er grundsätzlich dem Endbestand.',
    },
    {
      question: 'Was ist der Unterschied zwischen Kontenrahmen und Kontenplan?',
      answer: 'Ein Kontenrahmen ist eine allgemeine Struktur mit möglichen Konten. Der Kontenplan enthält die konkrete Auswahl, die ein Unternehmen verwendet.',
    },
    {
      question: 'Warum werden Konten abgeschlossen?',
      answer: 'Der Abschluss überträgt Bestandskonten in die Bilanz und Erfolgskonten in die GuV. Dadurch entstehen geordnete Werte für den Jahresabschluss.',
    },
  ],
  related: [
    'soll-und-haben',
    'geschaeftsvorfaelle',
    'buchhaltung-rechnungswesen',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default konten;
