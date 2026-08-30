import { defaultDisclaimer } from '../shared.js';

const deckungsbeitrag = {
  slug: 'deckungsbeitrag',
  category: 'Kostenrechnung & Controlling',
  title: 'Deckungsbeitrag',
  description: 'Deckungsbeitrag einfach erklärt: Stück- und Gesamtdeckungsbeitrag, Deckungsbeitragsquote, Fixkosten, Break-even und typische Fehler bei der Kalkulation.',
  seo: {
    title: 'Deckungsbeitrag berechnen und verstehen | Belege24',
    description: 'Erfahre, wie du Deckungsbeitrag, Stückdeckungsbeitrag und Deckungsbeitragsquote berechnest und wie sie mit Fixkosten und Break-even zusammenhängen.',
    canonicalPath: '/wissen/deckungsbeitrag',
  },
  article: {
    intro: 'Der Deckungsbeitrag zeigt, welcher Betrag nach Abzug der variablen Kosten von einem Erlös übrig bleibt. Er dient zunächst dazu, Fixkosten zu decken und ist deshalb eine wichtige Kennzahl für Preise, Mengen und kurzfristige Entscheidungen.',
    sections: [
      {
        heading: 'Was ist ein Deckungsbeitrag?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'deckungsbeitrag', text: 'Deckungsbeitrag' },
            ' ist der Unterschied zwischen Erlös und den variablen Kosten. Er zeigt nicht den Gewinn, sondern den Betrag, der nach den variablen Kosten zur Deckung der ',
            { type: 'glossary', id: 'fixkosten', text: 'Fixkosten' },
            ' zur Verfügung steht.',
          ],
          'Die Kennzahl kann sich auf eine einzelne Einheit, einen Auftrag, ein Produkt, eine Produktgruppe oder einen Zeitraum beziehen. Entscheidend ist, dass Erlöse und variable Kosten zur gleichen Bezugsgröße passen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Deckungsbeitrag',
            formula: 'Deckungsbeitrag = Erlös − variable Kosten',
            description: 'Der Erlös und die variablen Kosten müssen sich auf denselben Auftrag, dieselbe Menge oder denselben Zeitraum beziehen.',
          },
        ],
      },
      {
        heading: 'Umsatz, Deckungsbeitrag und Gewinn unterscheiden',
        paragraphs: [
          'Der Umsatz oder Erlös ist der Verkaufsertrag vor Abzug der Kosten. Ziehst du nur die variablen Kosten ab, erhältst du den Deckungsbeitrag. Erst wenn zusätzlich die Fixkosten und gegebenenfalls weitere Kosten gedeckt sind, kann ein Gewinn entstehen.',
          'Ein hoher Umsatz bedeutet daher nicht automatisch einen hohen Deckungsbeitrag. Ebenso ist ein positiver Deckungsbeitrag noch kein Gewinn, solange die gesamten Fixkosten nicht gedeckt sind.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Umsatz ist nicht Gewinn',
            paragraphs: [
              'Ein Produkt wird für 100 Euro verkauft. Variable Kosten für Material, Verpackung und Versand betragen 60 Euro.',
              'Der Umsatz beträgt 100 Euro, der Stückdeckungsbeitrag 40 Euro. Von diesen 40 Euro müssen noch anteilige Fixkosten wie Miete, Verwaltung oder feste Gehälter gedeckt werden.',
            ],
          },
        ],
      },
      {
        heading: 'Stückdeckungsbeitrag und Gesamtdeckungsbeitrag',
        paragraphs: [
          'Der Stückdeckungsbeitrag zeigt den Beitrag einer einzelnen Einheit. Der Gesamtdeckungsbeitrag ergibt sich aus der Summe aller Stückdeckungsbeiträge oder direkt aus gesamten Erlösen minus gesamten variablen Kosten.',
          'Der Stückwert eignet sich vor allem für Preis- und Mengenüberlegungen. Der Gesamtwert zeigt, wie viel ein Produkt, Auftrag oder Bereich insgesamt zur Deckung der Fixkosten beigetragen hat.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Stückdeckungsbeitrag',
            formula: 'Stückdeckungsbeitrag = Verkaufspreis je Stück − variable Kosten je Stück',
            description: 'Die Formel gilt für eine Einheit. Bei schwankenden Preisen oder variablen Stückkosten muss mit passenden Durchschnitts- oder Einzelwerten gerechnet werden.',
          },
          {
            label: 'Formel',
            title: 'Gesamtdeckungsbeitrag',
            formula: 'Gesamtdeckungsbeitrag = Stückdeckungsbeitrag × Menge',
            description: 'Alternativ: gesamte Erlöse − gesamte variable Kosten.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: 250 Verkäufe eines Produkts',
            paragraphs: [
              'Ein Produkt erzielt einen Stückdeckungsbeitrag von 40 Euro. Es werden 250 Stück verkauft.',
              'Der Gesamtdeckungsbeitrag beträgt 10.000 Euro: 40 Euro × 250 Stück. Dieser Betrag steht zur Deckung der Fixkosten des betrachteten Zeitraums zur Verfügung.',
            ],
          },
        ],
      },
      {
        heading: 'Deckungsbeitragsquote',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'deckungsbeitragsquote', text: 'Deckungsbeitragsquote' },
            ' setzt den Deckungsbeitrag ins Verhältnis zum Erlös. Sie zeigt, welcher Anteil eines Euro Umsatz nach den variablen Kosten übrig bleibt.',
          ],
          'Die Quote kann Produkte oder Aufträge vergleichbar machen. Ein Vergleich ist aber nur aussagekräftig, wenn die zugrunde liegenden Preise, Mengen und Kostenabgrenzungen vergleichbar sind.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Deckungsbeitragsquote',
            formula: 'Deckungsbeitragsquote = Deckungsbeitrag ÷ Erlös × 100',
            description: 'Die Quote wird meist in Prozent angegeben.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: 40 Prozent Deckungsbeitragsquote',
            paragraphs: [
              'Bei einem Verkaufspreis von 100 Euro und variablen Kosten von 60 Euro beträgt der Deckungsbeitrag 40 Euro.',
              '40 Euro ÷ 100 Euro × 100 ergibt eine Deckungsbeitragsquote von 40 Prozent.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Fixkosten und Break-even',
        paragraphs: [
          [
            'Fixkosten fallen innerhalb einer Kapazitätsstufe unabhängig von der Menge an. Wie sie sich von variablen Kosten unterscheiden, erklärt ',
            { type: 'link', href: '/wissen/fixe-variable-kosten', text: 'Fixe und variable Kosten' },
            '.',
          ],
          [
            'Der ',
            { type: 'link', href: '/wissen/break-even-point', text: 'Break-even-Point' },
            ' ist erreicht, wenn die Summe der Deckungsbeiträge die Fixkosten deckt. Bei einem positiven Stückdeckungsbeitrag senkt jede zusätzlich verkaufte Einheit – innerhalb der Annahmen – den noch ungedeckten Fixkostenbetrag.',
          ],
          'Ein negativer Deckungsbeitrag bedeutet, dass der Erlös die variablen Kosten nicht deckt. Dann erhöht jede zusätzliche Einheit in der vereinfachten Betrachtung den Verlust, bevor Fixkosten überhaupt berücksichtigt sind.',
        ],
      },
      {
        heading: 'Kurzfristige Entscheidungen nur als Orientierung',
        paragraphs: [
          'Für kurzfristige Entscheidungen kann ein positiver Deckungsbeitrag ein wichtiges Signal sein: Ein zusätzlicher Auftrag kann zur Fixkostendeckung beitragen, wenn freie Kapazität besteht und keine weiteren entscheidungsrelevanten Kosten übersehen werden.',
          'Die Kennzahl allein entscheidet jedoch nicht über die Sinnhaftigkeit eines Auftrags. Kapazitäten, Mindestpreise, Qualität, Risiken, Vertragsfolgen, Kundenbeziehungen und langfristige Kosten können ebenfalls entscheidend sein. Eine kurzfristige Preisentscheidung sollte daher nicht automatisch zur dauerhaften Preisstrategie werden.',
        ],
      },
      {
        heading: 'Mehrstufige Deckungsbeitragsrechnung als Ausblick',
        paragraphs: [
          'Bei mehreren Produkten oder Bereichen reicht ein einzelner Gesamtdeckungsbeitrag oft nicht aus. Eine mehrstufige Deckungsbeitragsrechnung zieht nach und nach Kosten ab, die einzelnen Produkten, Produktgruppen oder Bereichen direkt zugeordnet werden können.',
          'So lässt sich nachvollziehen, welche Stufe welchen Beitrag leistet. Die konkrete Struktur hängt vom Unternehmen und den verfügbaren Kostendaten ab und sollte nicht unnötig komplex aufgebaut werden.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle Deckungsbeitrag nicht mit Gewinn und ziehe Fixkosten nicht versehentlich schon bei der Berechnung der variablen Kosten ab. Prüfe außerdem, ob die Kosten tatsächlich durch die betrachtete Menge ausgelöst werden.',
          'Vergleiche keine Deckungsbeiträge mit unterschiedlichen Bezugsgrößen. Ein Stückdeckungsbeitrag, ein Gesamtdeckungsbeitrag und eine Quote beantworten unterschiedliche Fragen und sind nicht unmittelbar gegeneinander austauschbar.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Deckungsbeitrag = Erlös minus variable Kosten',
    'Der Deckungsbeitrag ist nicht gleich Umsatz und nicht gleich Gewinn',
    'Stückdeckungsbeitrag und Gesamtdeckungsbeitrag beantworten unterschiedliche Fragen',
    'Die Deckungsbeitragsquote zeigt den verbleibenden Anteil am Erlös in Prozent',
    'Fixkosten werden erst durch die Summe der Deckungsbeiträge gedeckt',
    'Ein negativer Deckungsbeitrag deckt nicht einmal die variablen Kosten',
    'Für kurzfristige Entscheidungen sind neben dem Deckungsbeitrag weitere Faktoren wichtig',
  ],
  commonMistakes: [
    'Umsatz, Deckungsbeitrag und Gewinn gleichsetzen',
    'Fixkosten als variable Kosten in die Deckungsbeitragsrechnung aufnehmen',
    'Stückdeckungsbeitrag und Gesamtdeckungsbeitrag verwechseln',
    'Deckungsbeiträge mit unterschiedlichen Mengen oder Zeiträumen direkt vergleichen',
    'einen positiven Deckungsbeitrag als ausreichenden Grund für jede Preis- oder Auftragsentscheidung sehen',
    'negative Deckungsbeiträge durch höhere Mengen ausgleichen wollen',
  ],
  faqs: [
    {
      question: 'Was ist ein Deckungsbeitrag einfach erklärt?',
      answer: 'Er zeigt, welcher Betrag nach Abzug der variablen Kosten von einem Erlös übrig bleibt. Dieser Betrag dient zunächst dazu, Fixkosten zu decken.',
    },
    {
      question: 'Ist der Deckungsbeitrag der Gewinn?',
      answer: 'Nein. Vom Deckungsbeitrag müssen in der Regel noch Fixkosten und weitere Kosten gedeckt werden. Erst danach kann ein Gewinn entstehen.',
    },
    {
      question: 'Was ist ein Stückdeckungsbeitrag?',
      answer: 'Das ist der Deckungsbeitrag einer einzelnen Einheit: Verkaufspreis je Stück minus variable Kosten je Stück.',
    },
    {
      question: 'Was bedeutet ein negativer Deckungsbeitrag?',
      answer: 'Der Erlös deckt nicht einmal die variablen Kosten. In der vereinfachten Betrachtung erhöht jede zusätzliche Einheit dann den Verlust.',
    },
    {
      question: 'Wie hängt der Deckungsbeitrag mit Break-even zusammen?',
      answer: 'Der Break-even ist erreicht, wenn die Summe der Deckungsbeiträge die Fixkosten deckt. Höhere Fixkosten oder ein niedrigerer Stückdeckungsbeitrag erhöhen grundsätzlich die notwendige Menge.',
    },
  ],
  related: [
    'kostenrechnung-controlling',
    'fixe-variable-kosten',
    'break-even-point',
    'kostenvergleichsrechnung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default deckungsbeitrag;
