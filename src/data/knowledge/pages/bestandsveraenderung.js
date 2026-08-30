import { defaultDisclaimer } from '../shared.js';

const bestandsveraenderung = {
  slug: 'bestandsveraenderung',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Bestandsveränderung bei fertigen und unfertigen Erzeugnissen',
  description: 'Bestandsveränderung einfach erklärt: Anfangs- und Endbestand, Bestandsmehrung, Bestandsminderung sowie die Wirkung auf Bilanz und GuV.',
  seo: {
    title: 'Bestandsveränderung einfach erklärt | Belege24',
    description: 'Verstehe Bestandsmehrung und Bestandsminderung bei fertigen und unfertigen Erzeugnissen mit Formel, Beispielen und GuV-Wirkung.',
    canonicalPath: '/wissen/bestandsveraenderung',
  },
  article: {
    intro: 'Eine Bestandsveränderung zeigt, ob der Wert selbst hergestellter fertiger oder unfertiger Erzeugnisse am Ende einer Periode höher oder niedriger ist als zu Beginn. Sie sorgt dafür, dass Produktion und Erfolg in der GuV periodengerecht zusammenpassen.',
    sections: [
      {
        heading: 'Was bedeutet Bestandsveränderung?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'bestandsveraenderung', text: 'Bestandsveränderung' },
            ' vergleicht den Wert der selbst hergestellten Vorräte am Periodenende mit dem Wert zu Periodenbeginn. Gemeint sind dabei insbesondere ',
            { type: 'glossary', id: 'fertige-erzeugnisse', text: 'fertige Erzeugnisse' },
            ' und ',
            { type: 'glossary', id: 'unfertige-erzeugnisse', text: 'unfertige Erzeugnisse' },
            '.',
          ],
          'Sie ist vor allem für produzierende Unternehmen relevant. Während einer Periode können Kosten für Material, Löhne und Produktion anfallen, obwohl ein Teil der hergestellten Produkte noch nicht verkauft oder sogar noch nicht fertiggestellt ist. Dieser Teil bleibt als Bestand im Unternehmen und wird deshalb zum Periodenende berücksichtigt.',
          'Eine Bestandsveränderung ist kein Zahlungsstrom. Ein höherer Bestand bedeutet nicht automatisch, dass Geld zugeflossen ist. Er zeigt zunächst, dass mehr Wert in selbst hergestellten Vorräten gebunden ist.',
        ],
      },
      {
        heading: 'Anfangsbestand und Endbestand vergleichen',
        paragraphs: [
          'Der Anfangsbestand ist der Wert der fertigen und unfertigen Erzeugnisse zu Beginn der Periode. Der Endbestand ist ihr Wert am Bilanzstichtag. Die Differenz zeigt, ob die Bestände zu- oder abgenommen haben.',
        ],
        formulaCards: [
          {
            title: 'Bestandsveränderung berechnen',
            formula: 'Bestandsveränderung = Endbestand − Anfangsbestand',
            description: 'Ein positives Ergebnis ist eine Bestandsmehrung. Ein negatives Ergebnis ist eine Bestandsminderung.',
          },
          {
            title: 'Vorzeichen richtig lesen',
            formula: 'positiv → Bestandsmehrung | negativ → Bestandsminderung',
            description: 'Die Rechnung bezieht sich auf den Wert der fertigen und unfertigen Erzeugnisse, nicht auf Bankguthaben oder Umsatzerlöse.',
          },
        ],
      },
      {
        heading: 'Bestandsmehrung: Der Endbestand ist höher',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'bestandsmehrung', text: 'Bestandsmehrung' },
            ' liegt vor, wenn der Endbestand höher ist als der Anfangsbestand. Das kann passieren, wenn ein Unternehmen im Zeitraum mehr produziert als verkauft oder mehr unfertige Arbeiten zum Stichtag vorhanden sind als zu Beginn.',
          ],
          'Im Gesamtkostenverfahren wird die Bestandsmehrung in der GuV als eigene Position berücksichtigt. Damit stehen den Produktionsaufwendungen auch die noch nicht verkauften, aber hergestellten Werte gegenüber. Es handelt sich nicht um einen Umsatz und nicht um eine Zahlung.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Mehr fertige Produkte im Lager',
            paragraphs: [
              'Zu Beginn des Jahres beträgt der Wert fertiger Erzeugnisse 10.000 Euro. Zum Jahresende sind fertige, noch nicht verkaufte Produkte im Wert von 16.000 Euro vorhanden.',
              'Schritt 1: 16.000 Euro Endbestand minus 10.000 Euro Anfangsbestand ergeben 6.000 Euro.',
              'Schritt 2: Das Ergebnis ist positiv. Es liegt eine Bestandsmehrung von 6.000 Euro vor.',
              'Schritt 3: Im Gesamtkostenverfahren erhöht diese Position das Ergebnis der GuV um 6.000 Euro gegenüber einer Darstellung ohne diese Bestandsveränderung. Zugleich ist der höhere Vorratsbestand in der Bilanz sichtbar.',
            ],
            effects: [
              'GuV: Bestandsmehrung von 6.000 Euro wird als eigene Position berücksichtigt.',
              'Bilanz: Vorräte aus fertigen Erzeugnissen sind um 6.000 Euro höher.',
              'Liquidität: Daraus folgt kein automatischer Geldzufluss.',
            ],
          },
        ],
      },
      {
        heading: 'Bestandsminderung: Der Endbestand ist niedriger',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'bestandsminderung', text: 'Bestandsminderung' },
            ' liegt vor, wenn der Endbestand niedriger ist als der Anfangsbestand. Das kann zum Beispiel passieren, wenn Produkte aus dem Lager verkauft werden und weniger neu hergestellt wird.',
          ],
          'Im Gesamtkostenverfahren vermindert die Bestandsminderung das Ergebnis der GuV. Sie macht sichtbar, dass im Zeitraum nicht nur neu produzierte Werte verkauft oder verbraucht wurden, sondern auch Bestand aus einer früheren Periode.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Lagerbestand wird abgebaut',
            paragraphs: [
              'Zu Jahresbeginn stehen fertige Erzeugnisse mit 20.000 Euro in den Büchern. Zum Jahresende beträgt ihr Wert nur noch 13.000 Euro.',
              'Schritt 1: 13.000 Euro Endbestand minus 20.000 Euro Anfangsbestand ergeben minus 7.000 Euro.',
              'Schritt 2: Das negative Ergebnis zeigt eine Bestandsminderung von 7.000 Euro.',
              'Schritt 3: Im Gesamtkostenverfahren wirkt die Bestandsminderung mit 7.000 Euro ergebnisverringernd. Der niedrigere Vorratsbestand ist zugleich in der Bilanz abgebildet.',
            ],
            effects: [
              'GuV: Bestandsminderung von 7.000 Euro vermindert das Ergebnis.',
              'Bilanz: Vorräte aus fertigen Erzeugnissen sinken um 7.000 Euro.',
              'Die Bestandsminderung ist nicht mit einem Geldabfluss gleichzusetzen.',
            ],
          },
        ],
      },
      {
        heading: 'Unfertige Erzeugnisse: Produktion am Bilanzstichtag',
        paragraphs: [
          'Unfertige Erzeugnisse sind Produkte, deren Herstellung am Bilanzstichtag noch nicht abgeschlossen ist. Sie können etwa bei Maschinen, Möbeln oder kundenspezifischen Produkten entstehen, wenn bereits Material und Arbeitsleistung eingesetzt wurden, aber das Produkt noch nicht fertig ist.',
          'Auch diese bis zum Stichtag entstandenen Werte gehören zum Vorratsvermögen. Deshalb kann eine Bestandsveränderung entstehen, obwohl noch kein fertiges Produkt verkauft wurde.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Unfertige Produktion zum Jahresende',
            paragraphs: [
              'Zu Beginn des Jahres gibt es keine unfertigen Erzeugnisse. Zum Bilanzstichtag befinden sich drei noch nicht fertiggestellte Anlagen in Produktion; ihr nach den maßgeblichen Bewertungsregeln ermittelter Wert beträgt zusammen 9.000 Euro.',
              'Schritt 1: 9.000 Euro Endbestand minus 0 Euro Anfangsbestand ergeben 9.000 Euro.',
              'Schritt 2: Es liegt eine Bestandsmehrung bei unfertigen Erzeugnissen vor.',
              'Schritt 3: Die Bestandsmehrung wird im Gesamtkostenverfahren in der GuV berücksichtigt. Der Wert der unfertigen Erzeugnisse erscheint außerdem im Vorratsvermögen der Bilanz.',
            ],
            effects: [
              'GuV: Bestandsmehrung von 9.000 Euro.',
              'Bilanz: Unfertige Erzeugnisse von 9.000 Euro im Vorratsvermögen.',
              'Es liegt weder ein Umsatz noch zwingend ein Zahlungseingang vor.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Produktion und GuV',
        paragraphs: [
          [
            'Im ',
            { type: 'glossary', id: 'guv', text: 'Gesamtkostenverfahren der GuV' },
            ' werden Umsatzerlöse, Aufwendungen und die Erhöhung oder Verminderung des Bestands an fertigen und unfertigen Erzeugnissen gegenübergestellt. § 275 HGB sieht diese Bestandsveränderung dort als eigenen Posten vor.',
          ],
          'Die Position verhindert, dass die gesamte Produktion eines Jahres als Aufwand wirkt, obwohl ein Teil davon erst in einer späteren Periode verkauft werden soll. Umgekehrt berücksichtigt sie, wenn im laufenden Jahr Bestände aus einer früheren Periode abgebaut wurden.',
          'Beim Umsatzkostenverfahren werden die Herstellungskosten den erzielten Umsätzen funktional zugeordnet. Die Bestandsveränderung erscheint dort nicht als gleich bezeichnete gesonderte Position. Beide Verfahren können bei gleicher Bewertung zum selben Jahresergebnis führen.',
        ],
      },
      {
        heading: 'Abgrenzung zu Waren und Handelswaren',
        paragraphs: [
          'Fertige und unfertige Erzeugnisse werden vom Unternehmen selbst hergestellt. Waren oder Handelswaren werden dagegen eingekauft, um sie ohne eigene Herstellung weiterzuverkaufen.',
          'Auch Warenbestände sind bei Inventur und Bilanz wichtig. Die hier erklärte Bestandsveränderung als GuV-Posten im Gesamtkostenverfahren betrifft aber ausdrücklich fertige und unfertige Erzeugnisse, nicht jede Veränderung eines Warenlagers.',
        ],
      },
      {
        heading: 'Bewertung nur im Grundsatz',
        paragraphs: [
          'Für die Bilanz müssen die Bestände zum Stichtag bewertet werden. Handelsrechtlich sind dabei insbesondere die Regeln zu Anschaffungs- und Herstellungskosten sowie zur Folgebewertung zu beachten. Bei selbst hergestellten Erzeugnissen geht es nicht einfach um einen frei wählbaren Verkaufspreis.',
          'Für die steuerliche Gewinnermittlung sind die handelsrechtlichen Grundsätze grundsätzlich maßgeblich, soweit steuerliche Vorschriften oder Wahlrechte nichts Abweichendes vorsehen. Die konkrete Bewertung kann je nach Erzeugnis, Kostenstruktur und Rechnungslegungspflicht anspruchsvoll sein und gehört in fachkundige Prüfung.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Eine Bestandsmehrung ist weder ein Umsatz noch ein automatischer Zahlungsmittelzufluss. Sie zeigt einen höheren Wert im Vorratsvermögen, der durch die Produktion und Bewertung zum Stichtag entstanden ist.',
          'Verwechsle fertige Erzeugnisse nicht mit zugekauften Handelswaren. Entscheidend ist, ob das Unternehmen die Produkte selbst hergestellt hat.',
          'Vergleiche Anfangs- und Endbestand immer mit derselben Bewertungsgrundlage. Unterschiedliche oder nicht belegte Bewertungen können die Bestandsveränderung und damit das Ergebnis verzerren.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Bestandsveränderung ist die Differenz zwischen Endbestand und Anfangsbestand fertiger oder unfertiger Erzeugnisse.',
    'Ein positives Ergebnis bedeutet Bestandsmehrung, ein negatives Ergebnis Bestandsminderung.',
    'Im Gesamtkostenverfahren wird die Bestandsveränderung in der GuV gesondert berücksichtigt.',
    'Fertige und unfertige Erzeugnisse gehören zum Vorratsvermögen und werden in der Bilanz ausgewiesen.',
    'Eine Bestandsmehrung ist kein Umsatz und kein automatischer Geldzufluss.',
    'Warenbestände aus Handelswaren sind von selbst hergestellten Erzeugnissen zu unterscheiden.',
  ],
  commonMistakes: [
    'Bestandsmehrung als sofortigen Geldzufluss oder Umsatz verstehen',
    'Bestandsminderung mit einem automatischen Geldabfluss gleichsetzen',
    'fertige und unfertige Erzeugnisse mit Handelswaren verwechseln',
    'Anfangs- und Endbestand mit unterschiedlichen Bewertungsgrundlagen vergleichen',
    'unfertige Produktion zum Bilanzstichtag nicht erfassen',
    'Bestandsveränderung im Gesamtkostenverfahren und Umsatzkostenverfahren gleich darstellen',
  ],
  faqs: [
    { question: 'Was ist eine Bestandsveränderung?', answer: 'Sie ist die Differenz zwischen Endbestand und Anfangsbestand fertiger oder unfertiger Erzeugnisse.' },
    { question: 'Wann liegt eine Bestandsmehrung vor?', answer: 'Wenn der Endbestand höher ist als der Anfangsbestand. Die Rechnung ergibt dann einen positiven Betrag.' },
    { question: 'Wann liegt eine Bestandsminderung vor?', answer: 'Wenn der Endbestand niedriger ist als der Anfangsbestand. Die Rechnung ergibt dann einen negativen Betrag.' },
    { question: 'Ist eine Bestandsmehrung ein Umsatz?', answer: 'Nein. Sie zeigt einen höheren Wert selbst hergestellter Vorräte und ist kein automatischer Umsatz oder Geldzufluss.' },
    { question: 'Was sind unfertige Erzeugnisse?', answer: 'Das sind selbst hergestellte Produkte, deren Herstellung am Bilanzstichtag noch nicht abgeschlossen ist.' },
    { question: 'Wo erscheint die Bestandsveränderung in der GuV?', answer: 'Im Gesamtkostenverfahren wird die Erhöhung oder Verminderung des Bestands an fertigen und unfertigen Erzeugnissen als eigener Posten ausgewiesen.' },
  ],
  related: [
    'guv',
    'inventur-inventar',
    'bilanz',
    'erfolgskonten',
  ],
  sources: [
    { label: '§ 266 HGB – Gliederung der Bilanz und Vorräte', url: 'https://www.gesetze-im-internet.de/hgb/__266.html' },
    { label: '§ 275 HGB – Gliederung der Gewinn- und Verlustrechnung', url: 'https://www.gesetze-im-internet.de/hgb/__275.html' },
    { label: '§ 255 HGB – Anschaffungs- und Herstellungskosten', url: 'https://www.gesetze-im-internet.de/hgb/__255.html' },
    { label: '§ 5 EStG – Gewinn bei Kaufleuten und bestimmten anderen Gewerbetreibenden', url: 'https://www.gesetze-im-internet.de/estg/__5.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bestandsveraenderung;
