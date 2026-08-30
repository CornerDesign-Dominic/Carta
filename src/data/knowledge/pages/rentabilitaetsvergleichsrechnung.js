import { defaultDisclaimer } from '../shared.js';

const rentabilitaetsvergleichsrechnung = {
  slug: 'rentabilitaetsvergleichsrechnung',
  category: 'Finanzierung & Investition',
  title: 'Rentabilitätsvergleichsrechnung',
  description: 'Rentabilitätsvergleichsrechnung einfach erklärt: Gewinn und durchschnittlich gebundenes Kapital mehrerer Investitionen vergleichen und richtig einordnen.',
  seo: {
    title: 'Rentabilitätsvergleichsrechnung erklärt | Belege24',
    description: 'Erfahre, wie du die Rentabilität von Investitionsalternativen mit Gewinn, kalkulatorischen Zinsen und durchschnittlich gebundenem Kapital vergleichst.',
    canonicalPath: '/wissen/rentabilitaetsvergleichsrechnung',
  },
  article: {
    intro: 'Die Rentabilitätsvergleichsrechnung vergleicht Investitionsalternativen danach, wie viel Ergebnis sie im Verhältnis zum durchschnittlich gebundenen Kapital erwarten lassen. Sie ergänzt den Blick auf den absoluten Gewinn um die Frage, wie intensiv Kapital dafür eingesetzt wird.',
    sections: [
      {
        heading: 'Was ist eine Rentabilitätsvergleichsrechnung?',
        paragraphs: [
          [
            'Die Rentabilitätsvergleichsrechnung ist ein statisches Verfahren der Investitionsrechnung. Sie setzt den erwarteten ',
            { type: 'glossary', id: 'gewinn', text: 'Gewinn' },
            ' einer Investition in Beziehung zu dem Kapital, das dafür durchschnittlich gebunden ist.',
          ],
          [
            'Damit betrachtet sie nicht nur, welche Alternative den höheren Gewinn erwarten lässt. Sie zeigt auch, wie hoch die ',
            { type: 'glossary', id: 'rentabilitaet', text: 'Rentabilität' },
            ' des eingesetzten Kapitals bei der gewählten Berechnung ausfällt.',
          ],
        ],
      },
      {
        heading: 'Warum das eingesetzte Kapital wichtig ist',
        paragraphs: [
          'Zwei Investitionen können einen ähnlichen oder sogar denselben Gewinn erwarten lassen, aber unterschiedlich viel Kapital binden. Eine hohe absolute Gewinngröße sagt deshalb allein nicht, wie effizient das Kapital im Vergleich eingesetzt wird.',
          'Die Rentabilitätsvergleichsrechnung hilft besonders dann, wenn Alternativen unterschiedlich hohe Anschaffungen, Restwerte oder Kapitalbindungen haben. Gewinn, Kapital und Betrachtungszeitraum müssen dabei für alle Varianten nach derselben Logik abgegrenzt werden.',
        ],
      },
      {
        heading: 'Durchschnittlich gebundenes Kapital bestimmen',
        paragraphs: [
          'Bei statischen Verfahren wird häufig mit einem durchschnittlich gebundenen Kapital gearbeitet. In einer einfachen Rechnung wird dafür oft die Hälfte aus Anschaffungsauszahlung und Restwert angesetzt. Das passt nur, wenn der Kapitalabbau über die Nutzungsdauer vereinfacht betrachtet werden kann.',
          'Bei abweichenden Zahlungs-, Abschreibungs- oder Kapitalverläufen kann eine andere Durchschnittsbildung sinnvoller sein. Wichtig ist vor allem, die gewählte Methode für alle Alternativen einheitlich anzuwenden.',
        ],
        formulaCards: [
          {
            label: 'Grundlage',
            title: 'Durchschnittlich gebundenes Kapital',
            formula: 'Durchschnittlich gebundenes Kapital ≈ (Anschaffungsauszahlung + Restwert) ÷ 2',
            description: 'Diese vereinfachte Formel ist eine häufige Annahme statischer Verfahren. Sie ersetzt keine detaillierte Betrachtung tatsächlicher Zahlungszeitpunkte.',
          },
        ],
      },
      {
        heading: 'Rentabilität berechnen',
        paragraphs: [
          'Für diese Seite wird eine verbreitete Lehrbuchvariante verwendet: Der Gewinn wird um kalkulatorische Zinsen ergänzt und anschließend zum durchschnittlich gebundenen Kapital ins Verhältnis gesetzt. Die kalkulatorischen Zinsen werden ergänzt, wenn sie zuvor als Kosten im Gewinn enthalten waren.',
          'Andere Lehrbücher verwenden je nach Kosten- und Gewinnabgrenzung eine Formel ohne diesen Zuschlag oder setzen andere Ergebnisgrößen ein. Deshalb solltest du die Definition immer mit angeben und Ergebnisse nur bei gleicher Berechnung vergleichen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Rentabilitätsvergleich',
            formula: 'Rentabilität = (Gewinn + kalkulatorische Zinsen) ÷ durchschnittlich gebundenes Kapital × 100',
            description: 'Diese Variante nutzt den Gewinn nach kalkulatorischen Zinsen und rechnet sie für den Kapitalvergleich wieder hinzu. Gewinn, Zinsen und Kapital müssen dieselbe Periode und Abgrenzung betreffen.',
          },
        ],
      },
      {
        heading: 'Beispiel: zwei Maschinen mit unterschiedlicher Kapitalbindung',
        paragraphs: [
          'Maschine B verspricht einen höheren absoluten Gewinn als Maschine A. Sie bindet aber auch mehr Kapital. Für beide Alternativen werden die Werte auf ein Jahr bezogen und mit derselben Kalkulationslogik ermittelt.',
        ],
        exampleCards: [
          {
            title: 'Maschine A oder Maschine B?',
            paragraphs: [
              'Maschine A erzielt nach allen angesetzten Kosten einschließlich 7.500 Euro kalkulatorischer Zinsen einen Gewinn von 22.500 Euro. Ihr durchschnittlich gebundenes Kapital beträgt 150.000 Euro.',
              'Rentabilität A = (22.500 Euro + 7.500 Euro) ÷ 150.000 Euro × 100 = 20 Prozent.',
              'Maschine B erzielt nach allen angesetzten Kosten einschließlich 9.000 Euro kalkulatorischer Zinsen einen Gewinn von 30.000 Euro. Ihr durchschnittlich gebundenes Kapital beträgt 180.000 Euro.',
              'Rentabilität B = (30.000 Euro + 9.000 Euro) ÷ 180.000 Euro × 100 = 21,7 Prozent.',
              'Nach dieser Berechnung ist Maschine B sowohl beim Gewinn als auch bei der Rentabilität vorteilhaft. Dennoch sollten zum Beispiel Auslastung, Risiko, Zahlungszeitpunkte und strategische Anforderungen zusätzlich geprüft werden.',
            ],
            effects: [
              'Rentabilität Maschine A: 20 Prozent',
              'Rentabilität Maschine B: 21,7 Prozent',
              'Berechnung jeweils mit Gewinn und durchschnittlich gebundenem Kapital derselben Periode',
            ],
          },
        ],
      },
      {
        heading: 'Unterschied zur Gewinnvergleichsrechnung',
        paragraphs: [
          'Die Gewinnvergleichsrechnung vergleicht den erwarteten absoluten Gewinn. Sie ist hilfreich, wenn die Höhe des Ergebnisses im Mittelpunkt steht.',
          'Die Rentabilitätsvergleichsrechnung ergänzt diesen Vergleich um die Kapitalbindung. Eine Alternative mit geringerem absolutem Gewinn kann deshalb eine höhere Rentabilität erreichen, wenn sie deutlich weniger Kapital benötigt.',
        ],
      },
      {
        heading: 'Wann ist das Verfahren sinnvoll?',
        paragraphs: [
          'Das Verfahren eignet sich für eine erste Auswahl zwischen überschaubaren Investitionsalternativen, wenn Gewinnannahmen und Kapitalbindung ausreichend nachvollziehbar geschätzt werden können.',
          'Es kann etwa helfen, Maschinen, Anlagen oder Projekte mit unterschiedlich hohem Kapitaleinsatz zu vergleichen. Für langfristige oder stark schwankende Vorhaben sollte es durch dynamische Verfahren und eine Liquiditätsbetrachtung ergänzt werden.',
        ],
      },
      {
        heading: 'Grenzen und typische Fehler',
        paragraphs: [
          'Die Rentabilitätsvergleichsrechnung arbeitet meist mit Durchschnittswerten. Sie berücksichtigt Zahlungszeitpunkte, Zeitwert des Geldes, Risiken und unterschiedliche Nutzungsdauern nur eingeschränkt.',
          'Vermeide es, unterschiedliche Gewinnbegriffe, Kapitalwerte oder Zeiträume zu kombinieren. Rechne kalkulatorische Zinsen außerdem nicht doppelt: Ob sie im Gewinn enthalten und im Zähler wieder hinzugerechnet werden, hängt von der gewählten Formel ab.',
          'Eine höhere Rentabilität ist kein automatisches Gesamturteil. Absolute Gewinne, Liquidität, Kapazitäten, strategische Ziele und Risiken können die Entscheidung ebenfalls beeinflussen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Rentabilitätsvergleichsrechnung setzt erwarteten Gewinn ins Verhältnis zum durchschnittlich gebundenen Kapital.',
    'Sie ergänzt den Vergleich absoluter Gewinne um die Frage der Kapitalbindung.',
    'Gewinn, Kapital und Zeitraum müssen für alle Alternativen gleich abgegrenzt sein.',
    'Kalkulatorische Zinsen werden nur nach einer klar benannten Formel berücksichtigt.',
    'Das statische Verfahren arbeitet meist mit vereinfachten Durchschnittswerten.',
    'Zahlungszeitpunkte, Risiko und strategische Aspekte brauchen eine zusätzliche Prüfung.',
  ],
  commonMistakes: [
    'absolute Gewinne und Rentabilitätswerte gleichsetzen.',
    'Gewinn, Kapital oder Zeitraum je Alternative unterschiedlich abgrenzen.',
    'kalkulatorische Zinsen doppelt oder gar nicht berücksichtigen, obwohl die Formel etwas anderes voraussetzt.',
    'nur einen Kapitalwert am Stichtag verwenden, obwohl sich die Kapitalbindung stark verändert.',
    'eine höhere Rentabilität als automatische Gesamtentscheidung verstehen.',
    'Zahlungszeitpunkte, Risiko und Nutzungsdauer ausblenden.',
  ],
  faqs: [
    {
      question: 'Was ist eine Rentabilitätsvergleichsrechnung einfach erklärt?',
      answer: 'Sie vergleicht Investitionen danach, wie viel Ergebnis sie im Verhältnis zum durchschnittlich gebundenen Kapital erwarten lassen.',
    },
    {
      question: 'Was ist der Unterschied zur Gewinnvergleichsrechnung?',
      answer: 'Die Gewinnvergleichsrechnung vergleicht absolute Gewinne. Die Rentabilitätsvergleichsrechnung berücksichtigt zusätzlich, wie viel Kapital dafür gebunden ist.',
    },
    {
      question: 'Warum werden kalkulatorische Zinsen hinzugerechnet?',
      answer: 'In der hier verwendeten Formel werden sie zum Gewinn addiert, wenn sie zuvor als Kosten abgezogen wurden. Andere Berechnungsvarianten können anders aufgebaut sein.',
    },
    {
      question: 'Ist die Alternative mit der höheren Rentabilität immer besser?',
      answer: 'Nein. Auch absoluter Gewinn, Liquidität, Risiko, Nutzungsdauer und strategische Ziele gehören zur Entscheidung.',
    },
    {
      question: 'Ist die Rentabilitätsvergleichsrechnung ein dynamisches Verfahren?',
      answer: 'Nein. Sie gehört zu den statischen Verfahren und arbeitet meist mit durchschnittlichen Periodenwerten.',
    },
  ],
  related: [
    'statische-investitionsrechnung',
    'gewinnvergleichsrechnung',
    'kostenvergleichsrechnung',
    'wirtschaftlichkeit-rentabilitaet',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default rentabilitaetsvergleichsrechnung;
