import { defaultDisclaimer } from '../shared.js';

const rohertragsquote = {
  slug: 'rohertragsquote',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Rohertragsquote',
  description: 'Rohertragsquote einfach erklärt: Umsatz und Wareneinsatz zum Rohertrag verbinden und die Handelsspanne im Kontext beurteilen.',
  seo: {
    title: 'Rohertragsquote berechnen | Belege24',
    description: 'Erfahre, wie du Rohertrag und Rohertragsquote berechnest und wie Einkaufs-, Verkaufspreise und Wareneinsatz den Wert beeinflussen.',
    canonicalPath: '/wissen/rohertragsquote',
  },
  article: {
    intro: 'Die Rohertragsquote zeigt, welcher Anteil des Umsatzes nach Abzug des Wareneinsatzes als Rohertrag verbleibt. Sie ist besonders für Handelsunternehmen hilfreich, bildet aber weitere betriebliche Kosten und damit den endgültigen Gewinn noch nicht ab.',
    sections: [
      {
        heading: 'Was bedeutet Rohertrag?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'rohertrag', text: 'Rohertrag' },
            ' ist in einer vereinfachten Handelsbetrachtung die Differenz zwischen ',
            { type: 'glossary', id: 'umsatz', text: 'Umsatz' },
            ' und ',
            { type: 'glossary', id: 'wareneinsatz', text: 'Wareneinsatz' },
            '.',
          ],
          'Er zeigt, welcher Betrag nach den Anschaffungskosten der verkauften Waren verbleibt. Von diesem Betrag müssen anschließend unter anderem Personal-, Raum-, Vertriebs-, Verwaltungs- und Finanzierungskosten gedeckt werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Rohertrag',
            formula: 'Rohertrag = Umsatz − Wareneinsatz',
            description: 'Umsatz und Wareneinsatz müssen dieselben Waren, denselben Zeitraum und dieselbe Abgrenzung betreffen.',
          },
        ],
      },
      {
        heading: 'Was sagt die Rohertragsquote aus?',
        paragraphs: [
          'Die Rohertragsquote setzt den absoluten Rohertrag ins Verhältnis zum Umsatz. Sie zeigt, welcher Anteil eines Euro Umsatz nach Abzug des zugehörigen Wareneinsatzes verbleibt.',
          'Eine Quote von 35 Prozent bedeutet rechnerisch, dass von einem Euro Umsatz 35 Cent Rohertrag übrig bleiben. Ob dieser Anteil ausreicht, hängt von den weiteren Kosten, Absatzmengen, dem Geschäftsmodell und den wirtschaftlichen Zielen ab.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Rohertragsquote',
            formula: 'Rohertragsquote = Rohertrag / Umsatz × 100',
            description: 'Der Rohertrag ist noch kein Gewinn. Die Quote berücksichtigt die weiteren betrieblichen Aufwendungen nicht vollständig.',
          },
        ],
      },
      {
        heading: 'Gemeinsames Beispiel',
        paragraphs: [
          'Rohertrag und Quote lassen sich aus denselben Umsatz- und Wareneinsatzdaten ableiten.',
        ],
        exampleCards: [
          {
            title: 'Rohertrag und Rohertragsquote im Handel',
            paragraphs: [
              'Ein Handelsunternehmen erzielt mit verkauften Waren 200.000 Euro Umsatz. Der zugehörige Wareneinsatz beträgt 130.000 Euro.',
              'Rohertrag = 200.000 Euro − 130.000 Euro = 70.000 Euro.',
              'Rohertragsquote = 70.000 Euro / 200.000 Euro × 100 = 35 Prozent.',
              'Von jedem Euro Umsatz verbleiben rechnerisch 35 Cent Rohertrag. Daraus müssen noch die weiteren betrieblichen Kosten gedeckt werden.',
            ],
            effects: [
              'Umsatz: 200.000 Euro',
              'Wareneinsatz: 130.000 Euro',
              'Rohertrag: 70.000 Euro',
              'Vollständige Rechnung: 70.000 Euro / 200.000 Euro × 100 = 35 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Unterschied zu Gewinn und Umsatzrentabilität',
        paragraphs: [
          'Der Rohertrag zieht vom Umsatz zunächst nur den Wareneinsatz ab. Gewinn entsteht erst nach Berücksichtigung der weiteren maßgeblichen Erträge und Aufwendungen. Ein hoher Rohertrag kann daher trotzdem mit einem niedrigen oder negativen Gewinn verbunden sein.',
          'Die Umsatzrentabilität setzt eine definierte Gewinngröße ins Verhältnis zum Umsatz. Die Rohertragsquote setzt dagegen den Rohertrag vor vielen weiteren Kosten ins Verhältnis zum Umsatz. Beide Kennzahlen beantworten unterschiedliche Fragen und dürfen nicht gleichgesetzt werden.',
        ],
      },
      {
        heading: 'Einfluss von Einkaufs- und Verkaufspreisen',
        paragraphs: [
          'Steigen Einkaufspreise bei unveränderten Verkaufspreisen, erhöht sich grundsätzlich der Wareneinsatz und die Rohertragsquote sinkt. Ob und wann Einkaufspreisänderungen wirken, hängt auch davon ab, welche Bestände verkauft und wie sie bewertet werden.',
          'Höhere Verkaufspreise können die Quote verbessern, wenn Wareneinsatz, Absatzmenge, Rabatte und Produktmix nicht gegenläufig reagieren. Preissenkungen oder Verkaufsrabatte können den Umsatz je Einheit reduzieren und die Quote belasten.',
          'Einkaufsrabatte, Lieferantengutschriften, Bezugskosten, Retouren und Schwund beeinflussen die Anschaffungskosten der verkauften Waren. Die Abgrenzung sollte über alle Vergleichsperioden gleich bleiben.',
        ],
      },
      {
        heading: 'Zusammenhang mit der Wareneinsatzquote',
        paragraphs: [
          'Bei identischer Abgrenzung teilen Wareneinsatzquote und Rohertragsquote denselben Umsatz als Nenner. Weil Umsatz vereinfacht aus Wareneinsatz plus Rohertrag besteht, ergänzen sich beide Quoten grundsätzlich zu 100 Prozent.',
          'Im Beispiel beträgt die Wareneinsatzquote 65 Prozent und die Rohertragsquote 35 Prozent. Sobald Definitionen, Umsatzbasis oder einbezogene Kosten voneinander abweichen, gilt dieser direkte Zusammenhang nicht mehr zuverlässig.',
        ],
      },
      {
        heading: 'Werte richtig interpretieren',
        paragraphs: [
          'Eine höhere Rohertragsquote zeigt bei vergleichbarer Berechnung mehr Rohertrag je Euro Umsatz. Ursachen können bessere Einkaufskonditionen, höhere Verkaufspreise, weniger Rabatte oder ein margenstärkerer Produktmix sein.',
          'Eine niedrigere Quote kann durch höhere Einkaufskosten, Preissenkungen, Schwund oder einen anderen Sortimentsmix entstehen. Sie ist nicht automatisch schlecht, wenn beispielsweise große Absatzmengen zu einem höheren absoluten Rohertrag führen.',
          'Absolute Beträge, Absatz, weitere Kosten, Lagerumschlag und Kundenwirkung sollten deshalb gemeinsam mit der Quote betrachtet werden.',
        ],
      },
      {
        heading: 'Branchenvergleich',
        paragraphs: [
          'Sortiment, Umschlagshäufigkeit, Verderb, Wettbewerb, Vertriebsform und Serviceanteil unterscheiden sich zwischen Handelsbranchen erheblich. Selbst innerhalb einer Branche können Premium- und Discountmodelle unterschiedliche Rohertragsquoten haben.',
          'Vergleiche sind nur bei ähnlichem Geschäftsmodell, gleicher Umsatz- und Wareneinsatzdefinition sowie vergleichbaren Zeiträumen sinnvoll. Allgemeingültige Zielquoten gibt es nicht.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Die Rohertragsquote berücksichtigt weitere Betriebskosten, Investitionen, Finanzierung und Liquidität nicht vollständig. Sie sagt auch nicht, wie viel Rohertrag absolut erzielt oder welche Kapazität dafür benötigt wurde.',
          'Bestandsbewertung, Inventurdifferenzen, Retouren, Rabatte und Produktmix können den Wert beeinflussen. Eine Gesamtquote kann starke Unterschiede zwischen Warengruppen oder Standorten verdecken.',
          'Für eine vollständige Analyse sollten zusätzlich Wareneinsatzquote, Umsatzrentabilität, Deckungsbeitragsquote und absolute Ergebnisgrößen betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Rohertrag ist vereinfacht Umsatz minus Wareneinsatz',
    'Die Rohertragsquote setzt Rohertrag ins Verhältnis zum Umsatz',
    'Rohertrag und Rohertragsquote sind nicht mit Gewinn oder Umsatzrentabilität gleichzusetzen',
    'Einkaufs- und Verkaufspreise, Rabatte, Bestände und Produktmix beeinflussen den Wert',
    'Bei identischer Abgrenzung ergänzen sich Roh- und Wareneinsatzquote grundsätzlich zu 100 Prozent',
    'Branchenvergleiche brauchen ähnliche Geschäftsmodelle und Definitionen',
  ],
  commonMistakes: [
    'Rohertrag mit Gewinn gleichsetzen',
    'Rohertragsquote und Umsatzrentabilität verwechseln',
    'Umsatz und Wareneinsatz unterschiedlicher Zeiträume oder Warenbereiche verwenden',
    'Wareneinkäufe ungeprüft als Wareneinsatz ansetzen',
    'Bestandsveränderungen, Retouren oder Rabatte ignorieren',
    'Quoten mit unterschiedlichen Definitionen zu 100 Prozent ergänzen',
    'nur die Quote statt auch den absoluten Rohertrag betrachten',
    'pauschale Branchen-Zielwerte übernehmen',
  ],
  faqs: [
    { question: 'Was ist der Rohertrag?', answer: 'Der Rohertrag ist in der vereinfachten Handelsbetrachtung Umsatz minus Wareneinsatz.' },
    { question: 'Wie wird die Rohertragsquote berechnet?', answer: 'Der Rohertrag wird durch den zugehörigen Umsatz geteilt und mit 100 multipliziert.' },
    { question: 'Ist Rohertrag dasselbe wie Gewinn?', answer: 'Nein. Vom Rohertrag müssen noch weitere betriebliche Kosten abgezogen werden, bevor ein endgültiges Ergebnis entsteht.' },
    { question: 'Wie hängt die Rohertragsquote mit der Wareneinsatzquote zusammen?', answer: 'Bei identischer Abgrenzung ergänzen sich beide grundsätzlich zu 100 Prozent.' },
    { question: 'Ist eine hohe Rohertragsquote immer gut?', answer: 'Nein. Absatzmenge, absoluter Rohertrag, weitere Kosten, Produktmix und Geschäftsmodell müssen zusätzlich beurteilt werden.' },
  ],
  related: ['wareneinsatzquote', 'umsatzrentabilitaet', 'deckungsbeitragsquote'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default rohertragsquote;
