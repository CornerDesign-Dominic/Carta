import { defaultDisclaimer } from '../shared.js';

const breakEvenPoint = {
  slug: 'break-even-point',
  category: 'BWL & Rechnungswesen',
  title: 'Break-even-Point',
  description: 'Break-even-Point einfach erklärt: Gewinnschwelle, Deckungsbeitrag, Break-even-Menge, Umsatz und Zeitpunkt berechnen.',
  seo: {
    title: 'Break-even-Point berechnen und verstehen | Belege24',
    description: 'Erfahre, wie du Break-even-Menge, Break-even-Umsatz und den Zeitpunkt der Gewinnschwelle mit Fixkosten und Deckungsbeitrag berechnest.',
    canonicalPath: '/wissen/break-even-point',
  },
  article: {
    intro: 'Der Break-even-Point ist die Gewinnschwelle: der Punkt, an dem Erlöse und Gesamtkosten gleich hoch sind. Bis dahin entsteht rechnerisch ein Verlust, darüber ein Gewinn – sofern die zugrunde liegenden Annahmen stimmen.',
    sections: [
      {
        heading: 'Was ist der Break-even-Point?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'break-even-point', text: 'Break-even-Point' },
            ' zeigt, ab welcher Absatzmenge oder welchem Umsatz ein Angebot seine Kosten deckt. Er wird deshalb auch Gewinnschwelle genannt.',
          ],
          'Die Berechnung hilft dir, Preise, Kosten und Absatzplanung einzuordnen. Sie ist eine Planungsrechnung: Das Ergebnis hängt davon ab, wie realistisch deine Annahmen zu Kosten, Verkaufspreisen und Mengen sind.',
        ],
      },
      {
        heading: 'Fixkosten, variable Kosten und Deckungsbeitrag',
        paragraphs: [
          [
            { type: 'glossary', id: 'fixkosten', text: 'Fixkosten' },
            ' fallen innerhalb eines betrachteten Zeitraums unabhängig von der produzierten oder verkauften Menge an, zum Beispiel Miete oder feste Gehälter.',
          ],
          [
            { type: 'glossary', id: 'variable-kosten', text: 'Variable Kosten' },
            ' verändern sich mit der Menge, etwa Material, Verpackung oder provisionsabhängige Kosten pro Verkauf.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'deckungsbeitrag', text: 'Deckungsbeitrag' },
            ' je Einheit ist der Teil des Verkaufspreises, der nach Abzug der variablen Kosten übrig bleibt und zunächst zur Deckung der Fixkosten beiträgt. Er ist nicht mit dem Gewinn gleichzusetzen.',
          ],
        ],
        list: [
          'Stückdeckungsbeitrag = Verkaufspreis je Stück − variable Kosten je Stück',
          'Fixkosten werden erst gedeckt, wenn die Summe aller Stückdeckungsbeiträge hoch genug ist',
        ],
      },
      {
        heading: 'Break-even-Menge berechnen',
        paragraphs: [
          'Die Break-even-Menge ist die Absatzmenge, bei der Erlöse und Gesamtkosten gleich hoch sind. Für ein Produkt mit konstantem Preis und konstanten variablen Kosten gilt grundsätzlich: Break-even-Menge = Fixkosten ÷ Stückdeckungsbeitrag.',
          'Ergibt die Rechnung keine ganze Zahl, musst du in der Praxis auf die nächste ganze Einheit aufrunden. Erst dann sind die Fixkosten vollständig gedeckt.',
        ],
      },
      {
        heading: 'Praxisbeispiel: 250 Stück bis zur Gewinnschwelle',
        paragraphs: [
          'Ein Unternehmen hat Fixkosten von 10.000 Euro. Ein Produkt wird für 100 Euro verkauft; die variablen Kosten liegen bei 60 Euro je Stück. Damit beträgt der Stückdeckungsbeitrag 40 Euro.',
          'Die Rechnung lautet: 10.000 Euro ÷ 40 Euro = 250 Stück. Bei 250 verkauften Einheiten sind die Fixkosten gedeckt. Unterhalb dieser Menge reicht der Deckungsbeitrag noch nicht aus; oberhalb der Menge trägt jeder weitere Stückdeckungsbeitrag grundsätzlich zum Gewinn bei.',
        ],
        list: [
          'Fixkosten: 10.000 Euro',
          'Verkaufspreis je Stück: 100 Euro',
          'Variable Kosten je Stück: 60 Euro',
          'Stückdeckungsbeitrag: 100 Euro − 60 Euro = 40 Euro',
          'Break-even-Menge: 10.000 Euro ÷ 40 Euro = 250 Stück',
        ],
      },
      {
        heading: 'Break-even-Umsatz bestimmen',
        paragraphs: [
          'Der Break-even-Umsatz ist der Umsatz, der mindestens nötig ist, damit kein Verlust entsteht. Im Beispiel beträgt er 250 Stück × 100 Euro = 25.000 Euro.',
          'Bei einem einzelnen Produkt kannst du den Umsatz aus der Break-even-Menge und dem Verkaufspreis berechnen. Alternativ lässt er sich über die Deckungsbeitragsquote ermitteln: Break-even-Umsatz = Fixkosten ÷ Deckungsbeitragsquote. Die Deckungsbeitragsquote ist der Stückdeckungsbeitrag im Verhältnis zum Verkaufspreis.',
        ],
      },
      {
        heading: 'Wann ist der Break-even erreicht?',
        paragraphs: [
          'Der Break-even-Zeitpunkt beschreibt, wann die erforderliche Menge oder der notwendige Umsatz voraussichtlich erreicht wird. Dafür brauchst du zusätzlich eine realistische Absatz- oder Umsatzplanung pro Zeitraum.',
          'Wenn im Beispiel regelmäßig 50 Stück pro Monat verkauft werden, liegt die Gewinnschwelle rechnerisch nach fünf Monaten. Die Kostenbasis und die Absatzplanung müssen dabei denselben Zeitraum abdecken.',
        ],
      },
      {
        heading: 'Wie wirken sich Preis- und Kostenänderungen aus?',
        paragraphs: [
          'Sinkt der Verkaufspreis, wird der Stückdeckungsbeitrag kleiner, sofern die variablen Kosten gleich bleiben. Dann musst du mehr Einheiten verkaufen, um die Fixkosten zu decken. Steigen die variablen Kosten, hat das denselben Effekt.',
          'Steigende Fixkosten erhöhen ebenfalls die Break-even-Menge. Umgekehrt kann ein höherer Preis oder niedrigere variable Kosten die Gewinnschwelle senken – aber nur, wenn sich die geplante Absatzmenge dadurch nicht verändert.',
        ],
      },
      {
        heading: 'Mehrere Produkte und Grenzen der Berechnung',
        paragraphs: [
          'Die einfache Formel passt vor allem zu einem Produkt oder zu einem konstanten Produktmix. Bei mehreren Produkten mit unterschiedlichen Deckungsbeiträgen hängt der Break-even davon ab, wie sich der Absatz auf die Produkte verteilt. Ändert sich dieser Mix, kann sich auch die Gewinnschwelle verschieben.',
          'Die Analyse geht außerdem von vereinfachten, meist konstanten Preisen und Kosten aus. Einmalige Kosten, Rabattaktionen, Kapazitätsgrenzen, Steuern und Nachfrageänderungen können das Ergebnis verändern und sollten bei der Planung zusätzlich betrachtet werden.',
        ],
      },
      {
        heading: 'Break-even ist nicht gleich Liquidität',
        paragraphs: [
          'Der Break-even-Point ist eine Erfolgsrechnung. Er zeigt, ob Erlöse und Kosten rechnerisch ausgeglichen sind. Er sagt aber nicht automatisch, ob genug Geld auf dem Konto ist.',
          'Zahlungsziele, offene Forderungen, Investitionen, Tilgungen und der Zeitpunkt von Ausgaben können die Liquidität unabhängig von der Gewinnschwelle beeinflussen. Prüfe deshalb neben dem Break-even auch deine Liquiditätsplanung.',
        ],
      },
    ],
  },
  generator: {
    label: 'Break-even berechnen',
    href: '/tools/break-even-rechner',
    text: 'Berechne erforderliche Absatzmenge, Umsatz und bei geplanter Kapazität den Zeitpunkt der Gewinnschwelle.',
  },
  keyPoints: [
    'Der Break-even-Point ist die Gewinnschwelle zwischen Verlust und Gewinn',
    'Stückdeckungsbeitrag = Verkaufspreis je Stück − variable Kosten je Stück',
    'Break-even-Menge = Fixkosten ÷ Stückdeckungsbeitrag',
    'Der Break-even-Umsatz ergibt sich aus Menge × Verkaufspreis oder aus der Deckungsbeitragsquote',
    'Für den Break-even-Zeitpunkt brauchst du zusätzlich eine Absatz- oder Umsatzplanung',
    'Bei mehreren Produkten ist der Produktmix entscheidend',
    'Die Gewinnschwelle ersetzt keine Liquiditätsplanung',
  ],
  commonMistakes: [
    'Fixkosten und variable Kosten verwechseln',
    'variable Kosten je Einheit zu niedrig oder zu hoch ansetzen',
    'Deckungsbeitrag mit Gewinn verwechseln',
    'Umsatz mit Deckungsbeitrag gleichsetzen',
    'bei mehreren Produkten einen wechselnden Produktmix ignorieren',
    'einmalige Kosten oder Kapazitätsgrenzen nicht berücksichtigen',
    'Preise und Kosten als dauerhaft konstant annehmen',
    'Break-even automatisch mit ausreichender Liquidität gleichsetzen',
  ],
  faqs: [
    {
      question: 'Was ist der Break-even-Point einfach erklärt?',
      answer: 'Der Break-even-Point ist der Punkt, an dem Erlöse und Gesamtkosten gleich hoch sind. Ab dieser Gewinnschwelle entsteht bei gleichbleibenden Annahmen kein Verlust mehr.',
    },
    {
      question: 'Wie berechnet man die Gewinnschwelle?',
      answer: 'Für ein Produkt rechnest du grundsätzlich: Fixkosten ÷ Stückdeckungsbeitrag. Der Stückdeckungsbeitrag ist Verkaufspreis je Stück minus variable Kosten je Stück.',
    },
    {
      question: 'Was ist der Unterschied zwischen Break-even-Menge und Break-even-Umsatz?',
      answer: 'Die Break-even-Menge ist die erforderliche Stückzahl. Der Break-even-Umsatz ist der Umsatz, der mit dieser Stückzahl erzielt werden muss.',
    },
    {
      question: 'Was ist der Deckungsbeitrag?',
      answer: 'Der Deckungsbeitrag ist der Betrag, der nach Abzug der variablen Kosten vom Verkaufspreis übrig bleibt. Er dient zunächst dazu, Fixkosten zu decken.',
    },
    {
      question: 'Kann man Break-even für mehrere Produkte berechnen?',
      answer: 'Ja, aber die Berechnung hängt vom Produktmix ab. Die einfache Ein-Produkt-Formel reicht nur, wenn der Mix konstant geplant ist oder mit einem passenden Durchschnittsdeckungsbeitrag gerechnet wird.',
    },
    {
      question: 'Was passiert, wenn der Verkaufspreis sinkt?',
      answer: 'Bei gleichbleibenden variablen Kosten sinkt der Stückdeckungsbeitrag. Dann musst du mehr Einheiten verkaufen, um die Fixkosten zu decken.',
    },
    {
      question: 'Was passiert, wenn die Fixkosten steigen?',
      answer: 'Bei unverändertem Stückdeckungsbeitrag steigt die erforderliche Break-even-Menge. Es müssen mehr Einheiten verkauft werden, bis die höheren Fixkosten gedeckt sind.',
    },
    {
      question: 'Ist Break-even dasselbe wie Amortisation?',
      answer: 'Nein. Break-even betrachtet in einer Erfolgsrechnung den Ausgleich von Erlösen und Kosten. Amortisation beschreibt, wann sich eine Investition durch Rückflüsse rechnerisch bezahlt gemacht hat.',
    },
    {
      question: 'Bedeutet Break-even automatisch, dass genug Geld auf dem Konto ist?',
      answer: 'Nein. Die Gewinnschwelle sagt nichts darüber aus, wann Zahlungen tatsächlich eingehen oder fällig werden. Deshalb brauchst du zusätzlich eine Liquiditätsplanung.',
    },
  ],
  related: [
    'businessplan',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default breakEvenPoint;
