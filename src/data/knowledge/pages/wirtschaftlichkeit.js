import { defaultDisclaimer } from '../shared.js';

const wirtschaftlichkeit = {
  slug: 'wirtschaftlichkeit',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Wirtschaftlichkeit',
  description: 'Wirtschaftlichkeit als Kennzahl einfach erklärt: Leistung und Kosten ins Verhältnis setzen, vergleichen und mit ihren Grenzen einordnen.',
  seo: {
    title: 'Wirtschaftlichkeit berechnen | Belege24',
    description: 'Erfahre, wie du Wirtschaftlichkeit als Verhältnis von Leistung und Kosten berechnest und Werte über, gleich oder unter 1 richtig einordnest.',
    canonicalPath: '/wissen/wirtschaftlichkeit',
  },
  article: {
    intro: 'Die Kennzahl Wirtschaftlichkeit setzt eine bewertete Leistung ins Verhältnis zu den dafür angefallenen Kosten. Sie zeigt, ob und in welchem Verhältnis der betrachtete Mitteleinsatz durch die zugeordnete Leistung gedeckt wird.',
    sections: [
      {
        heading: 'Was misst Wirtschaftlichkeit?',
        paragraphs: [
          'Wirtschaftlichkeit vergleicht den Wert einer Leistung mit den Kosten, die für diese Leistung angesetzt werden. Betrachtet werden kann zum Beispiel ein Auftrag, ein Produkt, ein Verfahren oder ein festgelegter Zeitraum.',
          'Leistung und Kosten müssen in derselben Einheit bewertet, sachlich zugeordnet und auf denselben Zeitraum bezogen sein. Sonst entsteht zwar ein Rechenergebnis, aber keine belastbare Aussage.',
        ],
      },
      {
        heading: 'Wirtschaftlichkeit berechnen',
        paragraphs: [
          'Die Kennzahl ist eine Verhältniszahl und wird häufig als Dezimalwert angegeben. Für einen Vergleich muss klar dokumentiert sein, welche Leistungen und welche Kosten einbezogen wurden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Wirtschaftlichkeit',
            formula: 'Wirtschaftlichkeit = Leistung / Kosten',
            description: 'Leistung und Kosten müssen zur gleichen Betrachtung gehören und nach einer einheitlichen Methode bewertet sein.',
          },
        ],
        exampleCards: [
          {
            title: 'Wirtschaftlichkeit eines Auftrags',
            paragraphs: [
              'Ein Auftrag erbringt eine bewertete Leistung von 125.000 Euro. Ihm werden Kosten von insgesamt 100.000 Euro zugerechnet.',
              'Wirtschaftlichkeit = 125.000 Euro / 100.000 Euro = 1,25.',
              'Die angesetzte Leistung liegt damit im Beispiel um 25 Prozent über den angesetzten Kosten. Ob der Auftrag insgesamt vorteilhaft ist, hängt zusätzlich von der vollständigen Abgrenzung, dem Risiko, der Liquidität und möglichen Alternativen ab.',
            ],
            effects: [
              'Leistung: 125.000 Euro',
              'Kosten: 100.000 Euro',
              'Vollständige Rechnung: 125.000 Euro / 100.000 Euro = 1,25',
            ],
          },
        ],
      },
      {
        heading: 'Werte über, gleich oder unter 1 interpretieren',
        paragraphs: [
          'Ein Wert über 1 bedeutet grundsätzlich, dass die angesetzte Leistung höher ist als die angesetzten Kosten. Bei einem Wert von genau 1 sind beide Größen gleich hoch. Ein Wert unter 1 zeigt, dass die Kosten die bewertete Leistung übersteigen.',
          'Diese Einordnung gilt nur innerhalb der gewählten Abgrenzung. Fehlende Kosten, unrealistische Leistungswerte oder unterschiedliche Zeiträume können den Wert verzerren. Auch ein Wert über 1 ist deshalb kein automatischer Beleg für eine insgesamt gute Entscheidung.',
        ],
      },
      {
        heading: 'Unterschied zu Rentabilität',
        paragraphs: [
          [
            'Wirtschaftlichkeit setzt Leistung und Kosten ins Verhältnis. ',
            { type: 'glossary', id: 'rentabilitaet', text: 'Rentabilität' },
            ' setzt dagegen ein Ergebnis wie Gewinn zu einer Bezugsgröße wie Kapital oder Umsatz ins Verhältnis.',
          ],
          'Beide Kennzahlen können dieselbe Entscheidung aus unterschiedlichen Blickwinkeln beleuchten. Sie sind nicht austauschbar: Eine wirtschaftliche Leistungserstellung sagt allein noch nicht, wie rentabel das eingesetzte Kapital ist.',
        ],
      },
      {
        heading: 'Perioden und Alternativen vergleichen',
        paragraphs: [
          'Im Periodenvergleich lässt sich untersuchen, ob sich das Verhältnis von Leistung und Kosten gegenüber Vorjahr oder Plan verändert hat. Beim Alternativenvergleich können zum Beispiel zwei Produktionsverfahren oder Angebote mit derselben Aufgabe gegenübergestellt werden.',
          'Vergleichbar sind die Werte nur bei gleicher Leistungsdefinition, Kostenabgrenzung und Betrachtungsdauer. Eine Alternative mit anderer Qualität, Kapazität oder Risikostruktur darf nicht allein anhand des Quotienten beurteilt werden.',
        ],
      },
      {
        heading: 'Grenzen der Kennzahl',
        paragraphs: [
          'Wirtschaftlichkeit bildet qualitative Ziele, Zahlungszeitpunkte, Risiken und langfristige Wirkungen nicht automatisch ab. Auch die Bewertung nicht direkt am Markt verkaufter Leistungen kann Annahmen erfordern.',
          'Die Kennzahl zeigt zudem keine Kapitalrentabilität und keine sichere Liquidität. Für wichtige Entscheidungen sollte sie deshalb zusammen mit absoluten Ergebnisgrößen, Rentabilitäts-, Liquiditäts- und Risikokennzahlen betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Wirtschaftlichkeit setzt eine bewertete Leistung ins Verhältnis zu den zugehörigen Kosten',
    'Ein Wert über 1, gleich 1 oder unter 1 zeigt grundsätzlich das Verhältnis beider Größen',
    'Leistung, Kosten und Zeitraum müssen einheitlich abgegrenzt sein',
    'Wirtschaftlichkeit und Rentabilität beantworten unterschiedliche Fragen',
    'Perioden und Alternativen sind nur bei vergleichbarer Grundlage sinnvoll gegenüberzustellen',
  ],
  commonMistakes: [
    'Leistung und Kosten aus unterschiedlichen Zeiträumen verwenden',
    'nicht zugehörige Kosten aus der Berechnung auslassen',
    'Leistungen unterschiedlich bewerten und die Werte direkt vergleichen',
    'einen Wert über 1 automatisch als insgesamt gute Entscheidung ansehen',
    'Wirtschaftlichkeit mit Gewinn, Rentabilität oder Liquidität gleichsetzen',
    'Qualität, Kapazität, Risiko und langfristige Wirkungen ignorieren',
  ],
  faqs: [
    {
      question: 'Wie wird Wirtschaftlichkeit berechnet?',
      answer: 'Die Grundformel lautet: Leistung geteilt durch Kosten. Beide Größen müssen sachlich und zeitlich zusammengehören.',
    },
    {
      question: 'Was bedeutet eine Wirtschaftlichkeit über 1?',
      answer: 'Grundsätzlich ist die angesetzte Leistung höher als die angesetzten Kosten. Die Aussage gilt nur für die gewählte Abgrenzung und ersetzt keine Gesamtbewertung.',
    },
    {
      question: 'Was bedeutet eine Wirtschaftlichkeit von 1?',
      answer: 'Die bewertete Leistung und die angesetzten Kosten sind gleich hoch.',
    },
    {
      question: 'Was ist der Unterschied zwischen Wirtschaftlichkeit und Rentabilität?',
      answer: 'Wirtschaftlichkeit vergleicht Leistung mit Kosten. Rentabilität setzt ein Ergebnis zu einer Bezugsgröße wie Kapital oder Umsatz ins Verhältnis.',
    },
  ],
  related: [
    'roi',
    'umsatzrentabilitaet',
    'kostenvergleichsrechnung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default wirtschaftlichkeit;
