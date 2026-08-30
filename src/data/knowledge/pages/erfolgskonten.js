import { defaultDisclaimer } from '../shared.js';

const erfolgskonten = {
  slug: 'erfolgskonten',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Erfolgskonten',
  description: 'Erfolgskonten einfach erklärt: Aufwands- und Ertragskonten, Soll und Haben, Abschluss über die GuV und Wirkung auf das Eigenkapital.',
  seo: {
    title: 'Erfolgskonten einfach erklärt | Belege24',
    description: 'Verstehe Aufwands- und Ertragskonten, ihre Buchungslogik in Soll und Haben sowie den Abschluss über die GuV anhand einfacher Beispiele.',
    canonicalPath: '/wissen/erfolgskonten',
  },
  article: {
    intro: 'Erfolgskonten erfassen, wodurch ein Unternehmen innerhalb eines Zeitraums Gewinn oder Verlust macht. Sie sammeln Aufwendungen und Erträge und führen diese zum Jahresende in die Gewinn- und Verlustrechnung zusammen.',
    sections: [
      {
        heading: 'Was sind Erfolgskonten?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'erfolgskonto', text: 'Erfolgskonto' },
            ' erfasst Veränderungen, die den Erfolg eines Unternehmens innerhalb eines Zeitraums beeinflussen. Es beantwortet also nicht die Frage, wie hoch ein Bestand am Stichtag ist, sondern wodurch Gewinn oder Verlust entsteht.',
          ],
          'Erfolgskonten dienen der laufenden Erfolgsermittlung. Sie halten zum Beispiel fest, wie viel Miete, Lohn oder Material verbraucht wurde und welche Umsätze oder Zinserträge entstanden sind. Am Ende des Geschäftsjahrs werden ihre Salden in der GuV gegenübergestellt.',
          'Es gibt zwei Grundarten: Aufwandskonten erfassen Werteverzehr, Ertragskonten erfassen Wertzuwächse.',
        ],
      },
      {
        heading: 'Aufwandskonten und Ertragskonten',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'aufwandskonto', text: 'Aufwandskonto' },
            ' sammelt ',
            { type: 'glossary', id: 'aufwand', text: 'Aufwendungen' },
            '. Typische Konten heißen etwa Mietaufwand, Lohnaufwand, Materialaufwand, Zinsaufwand oder Abschreibungen. Mehr Aufwand mindert bei sonst gleichen Umständen den Gewinn.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'ertragskonto', text: 'Ertragskonto' },
            ' sammelt ',
            { type: 'glossary', id: 'ertrag', text: 'Erträge' },
            '. Typisch sind Umsatzerlöse, Zinserträge oder sonstige betriebliche Erträge. Mehr Ertrag erhöht bei sonst gleichen Umständen den Gewinn.',
          ],
          'Ob eine Zahlung einen Aufwand oder Ertrag auslöst, hängt vom wirtschaftlichen Inhalt ab. Die Aufnahme eines Darlehens bringt zwar Geld auf das Bankkonto, ist aber kein Ertrag. Die Tilgung ist zwar eine Auszahlung, aber grundsätzlich kein Aufwand.',
        ],
        formulaCards: [
          {
            title: 'Aufwandskonto',
            formula: 'Aufwand → Soll',
            description: 'Nimmt der Aufwand zu, wird er auf dem Aufwandskonto im Soll gebucht.',
          },
          {
            title: 'Ertragskonto',
            formula: 'Ertrag → Haben',
            description: 'Nimmt der Ertrag zu, wird er auf dem Ertragskonto im Haben gebucht.',
          },
        ],
      },
      {
        heading: 'Warum Erfolgskonten keinen Anfangsbestand haben',
        paragraphs: [
          [
            'Erfolgskonten beginnen jedes Geschäftsjahr neu. Anders als ein ',
            { type: 'glossary', id: 'bestandskonto', text: 'Bestandskonto' },
            ' zeigen sie keinen vorhandenen Wert wie Bankguthaben, Maschinen oder Verbindlichkeiten. Sie erfassen nur die Aufwendungen und Erträge des gerade betrachteten Zeitraums.',
          ],
          'Der Saldo des Vorjahres wird nicht auf ein neues Aufwands- oder Ertragskonto vorgetragen. Er ist bereits über die GuV in das Ergebnis und damit mittelbar in das Eigenkapital eingegangen. Deshalb stehen Aufwands- und Ertragskonten zu Beginn eines neuen Jahres wieder bei null.',
        ],
      },
      {
        heading: 'Zusammenhang mit Soll und Haben',
        paragraphs: [
          [
            'Soll und Haben bezeichnen die linke und rechte Seite eines Kontos. Bei Erfolgskonten gilt eine feste Grundregel: Aufwand wird im Soll, Ertrag im Haben gebucht. Das bedeutet nicht, dass Soll schlecht und Haben gut ist; es ist nur die Buchungslogik der doppelten ',
            { type: 'glossary', id: 'buchfuehrung', text: 'Buchführung' },
            '.',
          ],
          'Jede Buchung betrifft mindestens zwei Konten. Wird beispielsweise Miete per Bank überwiesen, steigt der Mietaufwand im Soll und das Bankguthaben sinkt im Haben. Die Buchung lautet deshalb: Mietaufwand an Bank.',
        ],
      },
      {
        heading: 'Beispiele: einfache Buchungen auf Erfolgskonten',
        paragraphs: [
          'Die Beispiele sind vereinfacht und lassen Umsatzsteuer sowie weitere Kontierungsdetails außer Betracht. Sie zeigen die Grundlogik der Erfolgskonten.',
        ],
        exampleCards: [
          {
            title: 'Miete wird überwiesen',
            paragraphs: [
              'Ein Unternehmen überweist 800 Euro Monatsmiete.',
              'Schritt 1: Die Miete ist Aufwand. Das Konto Mietaufwand nimmt deshalb im Soll um 800 Euro zu.',
              'Schritt 2: Das Geld verlässt das Bankkonto. Bank ist ein Aktivkonto; der Abgang wird im Haben gebucht.',
              'Der Buchungssatz lautet: Mietaufwand an Bank 800 Euro.',
            ],
            effects: [
              'Aufwand: 800 Euro mindern den Gewinn.',
              'Bestand: Das Bankguthaben sinkt um 800 Euro.',
            ],
          },
          {
            title: 'Leistung wird auf Rechnung verkauft',
            paragraphs: [
              'Ein Unternehmen erbringt eine Leistung für 1.500 Euro auf Rechnung.',
              'Schritt 1: Die Umsatzerlöse sind Ertrag. Das Ertragskonto Umsatzerlöse nimmt im Haben um 1.500 Euro zu.',
              'Schritt 2: Da der Kunde noch nicht bezahlt hat, entsteht gleichzeitig eine Forderung. Forderungen sind ein Aktivkonto und nehmen im Soll zu.',
              'Der Buchungssatz lautet: Forderungen an Umsatzerlöse 1.500 Euro.',
            ],
            effects: [
              'Ertrag: 1.500 Euro erhöhen den Gewinn.',
              'Bestand: Eine Forderung von 1.500 Euro entsteht.',
            ],
          },
          {
            title: 'Abschreibung einer Maschine',
            paragraphs: [
              'Für eine Maschine werden am Jahresende 2.000 Euro planmäßige Abschreibung erfasst.',
              'Schritt 1: Die Abschreibung ist Aufwand und wird auf dem Aufwandskonto im Soll gebucht.',
              'Schritt 2: Der Buchwert der Maschine sinkt. Der Wertabgang wird auf der Habenseite des zugehörigen Anlagenkontos oder über ein Wertberichtigungskonto erfasst – abhängig vom verwendeten Kontenplan.',
              'Vereinfacht lautet der Buchungssatz: Abschreibungen an Maschinen 2.000 Euro.',
            ],
            effects: [
              'Aufwand: 2.000 Euro mindern das Ergebnis.',
              'Bestand: Der Buchwert der Maschine sinkt um 2.000 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Abschluss über die GuV und Wirkung auf das Eigenkapital',
        paragraphs: [
          [
            'Zum Periodenende werden Erfolgskonten über die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' abgeschlossen. Die GuV stellt die Erträge den Aufwendungen gegenüber und ermittelt daraus Jahresüberschuss oder Jahresfehlbetrag.',
          ],
          'Ein Jahresüberschuss erhöht bei sonst gleichen Umständen das Eigenkapital, ein Jahresfehlbetrag mindert es. Die Erfolgskonten selbst werden anschließend geschlossen und haben im neuen Geschäftsjahr wieder keinen Anfangsbestand.',
        ],
        formulaCards: [
          {
            title: 'Erfolgslogik',
            formula: 'Erträge − Aufwendungen = Jahresergebnis',
            description: 'Ein positives Ergebnis erhöht, ein negatives Ergebnis mindert grundsätzlich das Eigenkapital.',
          },
        ],
      },
      {
        heading: 'Unterschied zu Bestandskonten',
        paragraphs: [
          'Bestandskonten zeigen Vermögen, Eigenkapital und Schulden zu einem Stichtag. Sie haben einen Anfangsbestand, werden über die Bilanz abgeschlossen und im neuen Jahr mit einem Anfangsbestand fortgeführt.',
          'Erfolgskonten zeigen dagegen Aufwendungen und Erträge eines Zeitraums. Sie haben keinen Anfangsbestand und werden über die GuV abgeschlossen. Beide Kontoarten arbeiten mit Soll und Haben, folgen aber unterschiedlichen Buchungsregeln.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Aufwandskonten wie Aktivkonten zu behandeln oder Ertragskonten im Soll zu buchen. Merke dir: Aufwandszugänge stehen im Soll, Ertragszugänge im Haben.',
          'Auch sollte nicht jede Geldbewegung als Erfolg verstanden werden. Darlehensaufnahme, Tilgung oder der reine Tausch von Bankguthaben gegen Forderungen verändern zwar Bestandskonten, aber nicht automatisch Gewinn oder Verlust.',
          'Erfolgskonten dürfen nicht mit Vorjahreswerten weitergeführt werden. Der Vorjahreserfolg gehört nach dem Abschluss in die Ergebnis- und Eigenkapitalrechnung, nicht als Anfangsbestand auf ein Aufwands- oder Ertragskonto.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Erfolgskonten erfassen Aufwendungen und Erträge eines Zeitraums.',
    'Aufwandskonten nehmen im Soll zu, Ertragskonten im Haben.',
    'Erfolgskonten haben keinen Anfangsbestand und beginnen jedes Geschäftsjahr neu.',
    'Ihre Salden werden zum Periodenende über die GuV abgeschlossen.',
    'Der Jahresüberschuss oder Jahresfehlbetrag wirkt sich auf das Eigenkapital aus.',
    'Bestandskonten zeigen Werte zu einem Stichtag, Erfolgskonten den Erfolg innerhalb eines Zeitraums.',
  ],
  commonMistakes: [
    'Aufwandszugänge im Haben statt im Soll buchen',
    'Ertragszugänge im Soll statt im Haben buchen',
    'jede Einzahlung als Ertrag oder jede Auszahlung als Aufwand behandeln',
    'Erfolgskonten mit einem Anfangsbestand aus dem Vorjahr eröffnen',
    'Bestandskonten und Erfolgskonten nach denselben Zugangsregeln behandeln',
    'den Abschluss über die GuV mit einer normalen laufenden Buchung verwechseln',
  ],
  faqs: [
    { question: 'Was ist ein Erfolgskonto?', answer: 'Ein Erfolgskonto erfasst Aufwendungen oder Erträge eines Zeitraums und dient damit der Ermittlung von Gewinn oder Verlust.' },
    { question: 'Welche Konten sind Erfolgskonten?', answer: 'Aufwandskonten wie Miete oder Lohn und Ertragskonten wie Umsatzerlöse oder Zinserträge sind Erfolgskonten.' },
    { question: 'Warum haben Erfolgskonten keinen Anfangsbestand?', answer: 'Sie erfassen nur den Erfolg des laufenden Geschäftsjahrs. Der Saldo des Vorjahrs wurde bereits über die GuV abgeschlossen.' },
    { question: 'Wo wird Aufwand gebucht?', answer: 'Zugänge auf Aufwandskonten werden im Soll gebucht.' },
    { question: 'Wo wird Ertrag gebucht?', answer: 'Zugänge auf Ertragskonten werden im Haben gebucht.' },
    { question: 'Wie werden Erfolgskonten abgeschlossen?', answer: 'Zum Ende der Periode werden ihre Salden über die GuV abgeschlossen. Daraus ergibt sich Jahresüberschuss oder Jahresfehlbetrag.' },
  ],
  related: [
    'soll-und-haben',
    'konten',
    'guv',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default erfolgskonten;
