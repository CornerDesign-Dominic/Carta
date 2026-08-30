import { defaultDisclaimer } from '../shared.js';

const gewinnvergleichsrechnung = {
  slug: 'gewinnvergleichsrechnung',
  category: 'Finanzierung & Investition',
  title: 'Gewinnvergleichsrechnung',
  description: 'Gewinnvergleichsrechnung einfach erklärt: Erlöse und Kosten mehrerer Investitionsalternativen vergleichen, Gewinn berechnen und Grenzen statischer Verfahren verstehen.',
  seo: {
    title: 'Gewinnvergleichsrechnung einfach erklärt | Belege24',
    description: 'Verstehe, wie du Erlöse und Kosten von Investitionsalternativen vergleichst, den Gewinn berechnest und die Grenzen der Gewinnvergleichsrechnung einordnest.',
    canonicalPath: '/wissen/gewinnvergleichsrechnung',
  },
  article: {
    intro: 'Die Gewinnvergleichsrechnung vergleicht Investitionsalternativen danach, welchen Gewinn sie in einer durchschnittlichen Periode erwarten lassen. Anders als die Kostenvergleichsrechnung berücksichtigt sie neben den Kosten auch die Erlöse.',
    sections: [
      {
        heading: 'Was ist eine Gewinnvergleichsrechnung?',
        paragraphs: [
          'Die Gewinnvergleichsrechnung ist ein statisches Verfahren der Investitionsrechnung. Für jede Alternative werden die erwarteten Erlöse und Kosten einer vergleichbaren Periode gegenübergestellt.',
          [
            'Die Alternative mit dem höheren erwarteten ',
            { type: 'glossary', id: 'gewinn', text: 'Gewinn' },
            ' ist nach dieser Rechnung vorteilhaft. Das Ergebnis gilt aber nur unter den angesetzten Annahmen zu Mengen, Preisen, Kosten und Zeitraum.',
          ],
        ],
      },
      {
        heading: 'Unterschied zur Kostenvergleichsrechnung',
        paragraphs: [
          'Die Kostenvergleichsrechnung stellt vor allem gegenüber, welche Alternative die niedrigeren Kosten verursacht. Sie passt besonders, wenn die Alternativen dieselbe Leistung oder denselben Erlös erwarten lassen.',
          'Die Gewinnvergleichsrechnung geht einen Schritt weiter: Sie bezieht unterschiedliche Erlöse ein. Das ist hilfreich, wenn eine Investition zwar höhere Kosten verursacht, aber auch mehr Umsatz oder höhere Verkaufspreise ermöglichen kann.',
        ],
      },
      {
        heading: 'Gewinn aus Erlösen und Kosten berechnen',
        paragraphs: [
          'Für jede Alternative werden Erlöse und Kosten auf dieselbe durchschnittliche Periode bezogen, zum Beispiel auf ein Jahr. Anschließend vergleichst du die errechneten Gewinne.',
          'Wichtig ist, dass Kosten und Erlöse vollständig, vergleichbar und realistisch angesetzt werden. Unterschiedliche Mengen, Kapazitäten oder Qualitätsniveaus sollten nicht nur in einer Zahl verschwinden, sondern ausdrücklich geprüft werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gewinnvergleich',
            formula: 'Gewinn = Erlöse − Kosten',
            description: 'Berechne den Gewinn für jede Investitionsalternative mit derselben Bezugsperiode und vergleiche anschließend die Ergebnisse.',
          },
        ],
      },
      {
        heading: 'Beispiel: zwei Maschinen vergleichen',
        paragraphs: [
          'Maschine A verursacht niedrigere jährliche Kosten, ermöglicht aber auch geringere Erlöse. Maschine B ist im Betrieb teurer, kann jedoch mehr Produkte mit einem höheren Jahreserlös herstellen.',
        ],
        exampleCards: [
          {
            title: 'Maschine A oder Maschine B?',
            paragraphs: [
              'Maschine A erzielt jährliche Erlöse von 80.000 Euro und verursacht jährliche Kosten von 60.000 Euro. Ihr erwarteter Gewinn beträgt 20.000 Euro.',
              'Maschine B erzielt jährliche Erlöse von 95.000 Euro und verursacht jährliche Kosten von 72.000 Euro. Ihr erwarteter Gewinn beträgt 23.000 Euro.',
              'Nach der Gewinnvergleichsrechnung ist Maschine B um 3.000 Euro vorteilhafter. Vor der Entscheidung sollten aber auch Kapitalbindung, Zahlungszeitpunkte, Auslastungsrisiko und die Annahmen zu den Erlösen geprüft werden.',
            ],
          },
        ],
      },
      {
        heading: 'Wann ist das Verfahren sinnvoll?',
        paragraphs: [
          'Die Gewinnvergleichsrechnung eignet sich für eine erste Entscheidung zwischen überschaubaren Alternativen, wenn Erlöse und Kosten ausreichend verlässlich geschätzt werden können. Sie ist besonders nützlich, wenn die Varianten nicht die gleiche Leistung oder den gleichen Umsatz erwarten lassen.',
          'Sie kann beispielsweise helfen, unterschiedliche Maschinen, Vertriebswege oder Produktionsverfahren zu vergleichen. Für langfristige oder komplexe Vorhaben reicht sie allein oft nicht aus.',
        ],
      },
      {
        heading: 'Durchschnittliche Periodenbetrachtung',
        paragraphs: [
          'Als statisches Verfahren arbeitet die Gewinnvergleichsrechnung meist mit durchschnittlichen Werten einer Periode. Schwankungen innerhalb der Laufzeit, saisonale Effekte oder unterschiedlich hohe Ein- und Auszahlungen werden dadurch nur vereinfacht abgebildet.',
          'Die Durchschnittsbetrachtung macht den Vergleich schnell und gut nachvollziehbar. Sie ersetzt aber keine Analyse der tatsächlichen Zahlungszeitpunkte oder einer möglichen Finanzierung.',
        ],
      },
      {
        heading: 'Grenzen der Gewinnvergleichsrechnung',
        paragraphs: [
          'Die Alternative mit dem höchsten erwarteten Gewinn ist nicht automatisch in jeder Hinsicht die beste. Sie kann mehr Kapital binden, ein höheres Risiko haben oder erst später zu Einzahlungen führen.',
          'Zahlungszeitpunkte, Zeitwert des Geldes, Unsicherheiten und unterschiedliche Nutzungsdauern berücksichtigt das Verfahren nur eingeschränkt. Für solche Fragen können dynamische Verfahren oder ergänzende Wirtschaftlichkeits- und Liquiditätsanalysen sinnvoll sein.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Vergleiche keine Gewinne aus unterschiedlichen Zeiträumen oder mit unterschiedlichen Mengenannahmen. Prüfe außerdem, ob alle entscheidungsrelevanten Kosten und realistische Erlöse erfasst sind.',
          'Verwechsle erwarteten Gewinn nicht mit Liquidität. Ein rechnerisch vorteilhaftes Projekt kann trotzdem zu Zahlungsengpässen führen, wenn Ausgaben früher fällig werden als Einzahlungen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Gewinnvergleichsrechnung vergleicht erwartete Gewinne mehrerer Investitionsalternativen.',
    'Gewinn ergibt sich aus Erlösen minus Kosten.',
    'Sie berücksichtigt im Unterschied zur Kostenvergleichsrechnung auch unterschiedliche Erlöse.',
    'Alle Werte müssen sich auf dieselbe Periode und vergleichbare Annahmen beziehen.',
    'Das Verfahren arbeitet meist mit durchschnittlichen Periodenwerten.',
    'Kapitalbindung, Risiko und Zahlungszeitpunkte werden nur eingeschränkt erfasst.',
  ],
  commonMistakes: [
    'Gewinne mit unterschiedlichen Zeiträumen oder Mengenannahmen vergleichen.',
    'höhere Erlöse ohne die dazugehörigen Kosten berücksichtigen.',
    'den erwarteten Gewinn mit Liquidität gleichsetzen.',
    'Kapitalbindung, Risiko oder Zahlungszeitpunkte ausblenden.',
    'die Alternative mit dem höchsten Gewinn automatisch als beste Gesamtentscheidung ansehen.',
    'unsichere Erlösannahmen als sichere Werte behandeln.',
  ],
  faqs: [
    {
      question: 'Was ist eine Gewinnvergleichsrechnung einfach erklärt?',
      answer: 'Sie vergleicht, welchen erwarteten Gewinn mehrere Investitionsalternativen in einer vergleichbaren Periode erzielen. Dafür werden Erlöse und Kosten gegenübergestellt.',
    },
    {
      question: 'Was ist der Unterschied zur Kostenvergleichsrechnung?',
      answer: 'Die Kostenvergleichsrechnung betrachtet vor allem Kosten. Die Gewinnvergleichsrechnung berücksichtigt zusätzlich unterschiedliche Erlöse.',
    },
    {
      question: 'Welche Alternative ist vorteilhaft?',
      answer: 'Nach dieser Rechnung die mit dem höheren erwarteten Gewinn. Für eine vollständige Entscheidung sollten aber auch Risiko, Kapitalbindung und Zahlungszeitpunkte betrachtet werden.',
    },
    {
      question: 'Ist die Gewinnvergleichsrechnung dynamisch?',
      answer: 'Nein. Sie ist ein statisches Verfahren und arbeitet meist mit durchschnittlichen Werten je Periode.',
    },
    {
      question: 'Berücksichtigt die Gewinnvergleichsrechnung die Liquidität?',
      answer: 'Nur eingeschränkt. Sie betrachtet Gewinne, nicht die genauen Zeitpunkte von Ein- und Auszahlungen.',
    },
  ],
  related: [
    'statische-investitionsrechnung',
    'kostenvergleichsrechnung',
    'wirtschaftlichkeit-rentabilitaet',
    'liquiditaet-controlling',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default gewinnvergleichsrechnung;
