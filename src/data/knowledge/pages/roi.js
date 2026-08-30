import { defaultDisclaimer } from '../shared.js';

const roi = {
  slug: 'roi',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'ROI – Return on Investment',
  description: 'ROI einfach erklärt: Gewinn und eingesetztes Kapital ins Verhältnis setzen, berechnen und im richtigen Kontext interpretieren.',
  seo: {
    title: 'ROI berechnen und richtig einordnen | Belege24',
    description: 'Erfahre, was der Return on Investment aussagt, wie du den ROI berechnest und warum Vergleiche und Annahmen für die Interpretation wichtig sind.',
    canonicalPath: '/wissen/roi',
  },
  article: {
    intro: 'Der ROI, kurz für Return on Investment, setzt den Gewinn einer Investition oder eines betrachteten Unternehmensbereichs ins Verhältnis zum dafür eingesetzten Kapital. Die Kennzahl hilft, Ergebnisse vergleichbar einzuordnen, sollte aber nie ohne Zeitraum, Berechnungsgrundlage und weitere Kennzahlen beurteilt werden.',
    sections: [
      {
        heading: 'Was ist der ROI?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'roi', text: 'ROI' },
            ' zeigt, welchen rechnerischen Gewinn das ',
            { type: 'glossary', id: 'eingesetztes-kapital', text: 'eingesetzte Kapital' },
            ' in einem festgelegten Zeitraum erwirtschaftet hat. Das Ergebnis wird meist als Prozentsatz angegeben.',
          ],
          'Ein ROI von 12 Prozent bedeutet rechnerisch, dass der angesetzte Gewinn 12 Prozent des angesetzten Kapitals entspricht. Ob dieser Wert zufriedenstellend ist, lässt sich erst anhand des Ziels, des Risikos, des Zeitraums und geeigneter Vergleichswerte beurteilen.',
        ],
      },
      {
        heading: 'ROI berechnen',
        paragraphs: [
          'Für die Berechnung müssen Gewinn und Kapital sachlich zusammengehören und denselben Zeitraum betreffen. Bei einer einzelnen Investition sollte der Gewinn nur die ihr zurechenbaren Erträge und Aufwendungen umfassen. Für einen Unternehmensbereich müssen Abgrenzung und Kapitalbasis ebenfalls einheitlich festgelegt werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Return on Investment',
            formula: 'ROI = Gewinn / eingesetztes Kapital × 100',
            description: 'Der Gewinn steht im Zähler, das dafür eingesetzte Kapital im Nenner. Beide Größen müssen zur gleichen Investition oder Betrachtung und zum gleichen Zeitraum gehören.',
          },
        ],
        exampleCards: [
          {
            title: 'ROI einer betrieblichen Investition',
            paragraphs: [
              'Ein Unternehmen setzt für eine Investition 80.000 Euro Kapital ein. Im betrachteten Geschäftsjahr erzielt die Investition nach Abzug der ihr zurechenbaren Aufwendungen einen Gewinn von 8.000 Euro.',
              'ROI = 8.000 Euro / 80.000 Euro × 100 = 10 Prozent.',
              'Die Investition hat damit im betrachteten Jahr rechnerisch einen Gewinn in Höhe von 10 Prozent des eingesetzten Kapitals erwirtschaftet. Für die Bewertung sollte das Unternehmen den Wert beispielsweise mit Plan, Vorjahr, Risiko und realistischen Alternativen vergleichen.',
            ],
            effects: [
              'Gewinn: 8.000 Euro',
              'Eingesetztes Kapital: 80.000 Euro',
              'Vollständige Rechnung: 8.000 Euro / 80.000 Euro × 100 = 10 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Was sagt der ROI aus?',
        paragraphs: [
          'Der ROI verdichtet zwei Größen: das erzielte Ergebnis und das dafür gebundene Kapital. Dadurch lässt sich untersuchen, wie wirksam Kapital innerhalb der gewählten Abgrenzung eingesetzt wurde.',
          'Die Kennzahl erklärt jedoch nicht allein, wodurch der Wert entstanden ist. Ein höherer Gewinn, weniger gebundenes Kapital oder eine Kombination aus beidem kann den ROI erhöhen. Auch einmalige Effekte können das Ergebnis verändern.',
        ],
      },
      {
        heading: 'Typische Einsatzbereiche',
        paragraphs: [
          'Der ROI wird häufig genutzt, um Investitionen, Projekte, Produkte, Standorte oder Unternehmensbereiche zu beurteilen. Er kann außerdem Teil der Planung und des Controllings sein, wenn Ist-Werte mit einem Plan oder mit früheren Perioden verglichen werden.',
          'Vergleiche sind nur belastbar, wenn Gewinn, Kapital und Zeitraum nach denselben Regeln abgegrenzt wurden. Unterschiedliche Risiken, Laufzeiten oder strategische Ziele sollten zusätzlich berücksichtigt werden.',
        ],
      },
      {
        heading: 'ROI und Rentabilität: Was ist der Unterschied?',
        paragraphs: [
          [
            { type: 'glossary', id: 'rentabilitaet', text: 'Rentabilität' },
            ' ist der Oberbegriff für Kennzahlen, die ein Ergebnis zu einer Bezugsgröße ins Verhältnis setzen. Der ROI ist eine konkrete Rentabilitätskennzahl mit dem eingesetzten Kapital als Bezugsgröße.',
          ],
          'Andere Rentabilitätskennzahlen grenzen Ergebnis und Kapital anders ab. Die Eigenkapitalrentabilität bezieht sich auf das Eigenkapital; die Gesamtkapitalrentabilität betrachtet die gesamte Kapitalbasis. Deshalb dürfen Kennzahlen mit unterschiedlichen Zählern oder Nennern nicht direkt gleichgesetzt werden.',
        ],
      },
      {
        heading: 'Hohe und niedrige Werte richtig interpretieren',
        paragraphs: [
          'Ein höherer ROI zeigt innerhalb einer vergleichbaren Berechnung mehr Gewinn je Einheit des eingesetzten Kapitals. Ein niedrigerer oder negativer ROI kann auf geringe Erträge, hohe Aufwendungen, viel gebundenes Kapital oder einen Verlust hinweisen.',
          'Daraus folgt kein allgemeiner Zielwert. Branche, Geschäftsmodell, Investitionsphase, Risiko, Finanzierung und Betrachtungsdauer beeinflussen, welcher Wert realistisch oder angemessen ist. Ein junges Projekt kann zunächst einen niedrigen ROI haben, obwohl es langfristig sinnvoll ist.',
        ],
      },
      {
        heading: 'Mit Vorjahr, Planwert und Branche vergleichen',
        paragraphs: [
          'Ein Zeitvergleich zeigt, ob sich der ROI gegenüber dem Vorjahr oder über mehrere Perioden verändert. Der Plan-Ist-Vergleich macht sichtbar, ob die erwartete Kapitalwirkung erreicht wurde. Ein Branchenvergleich kann bei der Einordnung helfen, sofern Unternehmen, Geschäftsmodelle und Berechnungsmethoden ausreichend vergleichbar sind.',
          'Dokumentiere bei jedem Vergleich, welcher Gewinn, welches Kapital und welcher Zeitraum verwendet wurden. Sonst kann eine scheinbare Verbesserung lediglich auf einer geänderten Definition beruhen.',
        ],
      },
      {
        heading: 'Kurzer Ausblick: DuPont-Zerlegung',
        paragraphs: [
          'Im DuPont-Schema wird der ROI vereinfacht in Umsatzrentabilität und Kapitalumschlag zerlegt. Dadurch lässt sich untersuchen, ob der Wert eher durch die Marge oder durch die Nutzung des eingesetzten Kapitals geprägt wird.',
          'Die Zerlegung ist ein Analysewerkzeug und ändert nichts daran, dass Ausgangsdaten, Abgrenzung und Vergleichsmaßstab geprüft werden müssen.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Der ROI bildet nicht automatisch Zahlungszeitpunkte, Liquidität, Risiko, künftige Entwicklung oder qualitative Ziele ab. Unterschiedliche Bilanzierungs- und Bewertungsmethoden können Gewinn und Kapital verändern. Bei mehrjährigen Investitionen kann eine einfache Periodenbetrachtung außerdem den Zeitwert des Geldes vernachlässigen.',
          'Die Kennzahl sollte deshalb zusammen mit weiteren Erfolgs-, Liquiditäts- und Risikokennzahlen sowie den konkreten Annahmen der Entscheidung betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der ROI setzt Gewinn ins Verhältnis zum eingesetzten Kapital',
    'Gewinn, Kapital und Zeitraum müssen sachlich zusammenpassen',
    'Ein höherer oder niedrigerer Wert ist nur im passenden Vergleich aussagekräftig',
    'Vorjahr, Planwert oder Branche können als Vergleich dienen, wenn die Berechnung einheitlich ist',
    'Der ROI ersetzt keine Analyse von Liquidität, Risiko und künftiger Entwicklung',
  ],
  commonMistakes: [
    'Gewinn und Kapital aus unterschiedlichen Zeiträumen verwenden',
    'nicht zusammengehörige Ergebnis- und Kapitalgrößen kombinieren',
    'einmalige Erträge oder Aufwendungen ohne Einordnung übernehmen',
    'unterschiedliche Berechnungsmethoden direkt vergleichen',
    'einen hohen ROI ohne Betrachtung von Risiko und Zukunftsaussichten bewerten',
    'ROI mit Umsatz, Liquidität oder absolutem Gewinn gleichsetzen',
    'aus einem Branchenwert einen pauschalen Zielwert ableiten',
  ],
  faqs: [
    {
      question: 'Was bedeutet ROI einfach erklärt?',
      answer: 'Der ROI zeigt, wie viel Gewinn im Verhältnis zum eingesetzten Kapital in einem festgelegten Zeitraum erzielt wurde.',
    },
    {
      question: 'Wie wird der ROI berechnet?',
      answer: 'Die Grundformel lautet: Gewinn geteilt durch eingesetztes Kapital mal 100. Gewinn, Kapital und Zeitraum müssen dabei zusammenpassen.',
    },
    {
      question: 'Ist ein hoher ROI immer gut?',
      answer: 'Nein. Ein hoher Wert muss im Zusammenhang mit Risiko, Zeitraum, Berechnungsmethode, Branche und Zukunftsaussichten beurteilt werden.',
    },
    {
      question: 'Was ist der Unterschied zwischen ROI und Rentabilität?',
      answer: 'Rentabilität ist der Oberbegriff für Verhältniskennzahlen zum Erfolg. Der ROI ist eine konkrete Rentabilitätskennzahl, die Gewinn und eingesetztes Kapital verknüpft.',
    },
    {
      question: 'Kann der ROI negativ sein?',
      answer: 'Ja. Ein negativer ROI entsteht, wenn in der verwendeten Abgrenzung ein Verlust statt eines Gewinns vorliegt.',
    },
  ],
  related: [
    'eigenkapitalrentabilitaet',
    'gesamtkapitalrentabilitaet',
    'wirtschaftlichkeit',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default roi;
