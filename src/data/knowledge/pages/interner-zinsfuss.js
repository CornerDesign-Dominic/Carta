import { defaultDisclaimer } from '../shared.js';

const internerZinsfuss = {
  slug: 'interner-zinsfuss',
  category: 'Finanzierung & Investition',
  title: 'Interner Zinsfuß',
  description: 'Interner Zinsfuß einfach erklärt: Rendite einer Zahlungsreihe berechnen, mit dem Kalkulationszinssatz vergleichen und Grenzen richtig einordnen.',
  seo: {
    title: 'Interner Zinsfuß einfach erklärt | Belege24',
    description: 'Erfahre, was der interne Zinsfuß einer Investition aussagt, wie er mit dem Kapitalwert zusammenhängt und warum seine Berechnung nicht immer eindeutig ist.',
    canonicalPath: '/wissen/interner-zinsfuss',
  },
  article: {
    intro: 'Der interne Zinsfuß beschreibt die Rendite, die sich aus der gesamten erwarteten Zahlungsreihe einer Investition ergibt. Er ist genau der Zinssatz, bei dem der Kapitalwert dieser Zahlungsreihe null wird.',
    sections: [
      {
        heading: 'Was ist der interne Zinsfuß?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'interner-zinsfuss', text: 'interne Zinsfuß' },
            ' ist ein rechnerischer Zinssatz für eine Investition. Er fasst Anfangsauszahlung sowie alle erwarteten späteren Ein- und Auszahlungen zu einer Rendite der Zahlungsreihe zusammen.',
          ],
          'Er ist keine vertraglich zugesagte Verzinsung und keine sichere Prognose. Sein Wert hängt vollständig von den angesetzten Zahlungen, ihrer zeitlichen Verteilung und der Laufzeit ab.',
        ],
      },
      {
        heading: 'Zusammenhang mit dem Kapitalwert',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/kapitalwertmethode', text: 'Kapitalwertmethode' },
            ' berechnet den Wert einer Zahlungsreihe bei einem vorgegebenen Kalkulationszinssatz. Beim internen Zinsfuß wird dieser Zinssatz umgekehrt gesucht: Er ist genau dann erreicht, wenn der Kapitalwert null ist.',
          ],
          'Der interne Zinsfuß und der Kapitalwert nutzen damit dieselben Ein- und Auszahlungen. Sie beantworten aber unterschiedliche Fragen: Der Kapitalwert bewertet eine Investition bei einer vorgegebenen Mindestverzinsung; der interne Zinsfuß ermittelt die Rendite, die in der Zahlungsreihe steckt.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gesuchter Zinssatz beim internen Zinsfuß',
            formula: '0 = −Anfangsinvestition + Σ [Nettozahlungₜ ÷ (1 + r)^t]',
            description: 'r ist der gesuchte interne Zinsfuß. Gesucht ist der Zinssatz, bei dem die abgezinsten Nettozahlungen die Anfangsinvestition genau ausgleichen.',
          },
        ],
      },
      {
        heading: 'Mit dem Kalkulationszinssatz vergleichen',
        paragraphs: [
          [
            'Für die Entscheidung wird der interne Zinsfuß meist mit dem ',
            { type: 'glossary', id: 'kalkulationszinssatz', text: 'Kalkulationszinssatz' },
            ' verglichen. Liegt der interne Zinsfuß darüber, ist der Kapitalwert bei diesem Kalkulationszinssatz grundsätzlich positiv. Liegt er darunter, ist er grundsätzlich negativ.',
          ],
          'Das gilt für eine übliche Zahlungsreihe mit einer Anfangsauszahlung und späteren positiven Nettozahlungen. Bei ungewöhnlichen Zahlungsreihen kann die Beziehung komplizierter sein.',
        ],
      },
      {
        heading: 'Berechnung per Näherung oder Software',
        paragraphs: [
          'Bei wenigen, einfachen Zahlungen lässt sich der interne Zinsfuß näherungsweise ermitteln: Du rechnest den Kapitalwert mit verschiedenen Zinssätzen und suchst den Bereich, in dem er von positiv zu negativ wechselt. Anschließend verfeinerst du die Annäherung.',
          'In der Praxis übernehmen Tabellenkalkulationen, Finanzrechner oder spezialisierte Software diese Suche. Sie verwenden meist iterative Verfahren. Prüfe trotzdem, ob alle Zahlungen, Zeitpunkte, Restwerte und Vorzeichen korrekt erfasst sind.',
        ],
      },
      {
        heading: 'Beispiel: Rendite einer Zahlungsreihe',
        paragraphs: [
          'Eine Maschine kostet heute 100.000 Euro. Sie soll in den folgenden drei Jahren Nettozahlungen von 40.000 Euro, 45.000 Euro und 50.000 Euro liefern. Für diese Zahlungsreihe wird der Zinssatz gesucht, bei dem der Kapitalwert null ist.',
        ],
        exampleCards: [
          {
            title: 'Näherung über zwei Zinssätze',
            paragraphs: [
              'Bei 15 Prozent beträgt der Kapitalwert noch rund 1.684 Euro. Die abgezinsten Nettozahlungen liegen also noch über der Anfangsinvestition.',
              'Bei 16 Prozent liegt der Kapitalwert ungefähr bei null. Der interne Zinsfuß beträgt für diese vereinfachte Zahlungsreihe daher rund 16 Prozent.',
              'Beträgt der Kalkulationszinssatz zum Beispiel 8 Prozent, liegt der interne Zinsfuß darüber. Nach diesen Annahmen ist der Kapitalwert bei 8 Prozent positiv. Das Ergebnis ändert sich, sobald sich erwartete Zahlungen oder Zeitpunkte verändern.',
            ],
            effects: [
              'Anfangsinvestition: 100.000 Euro',
              'Nettozahlungen: 40.000, 45.000 und 50.000 Euro',
              'Interner Zinsfuß: rund 16 Prozent',
              'Beispielhafter Kalkulationszinssatz: 8 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Mehrere Investitionen vergleichen',
        paragraphs: [
          'Bei vergleichbaren Alternativen kann ein höherer interner Zinsfuß auf eine höhere Rendite der Zahlungsreihe hinweisen. Vergleiche aber nur Investitionen mit ähnlichem Risiko, vergleichbarer Aufgabe und konsistenten Annahmen.',
          'Bei unterschiedlich großen Investitionen oder sich gegenseitig ausschließenden Alternativen kann ein höherer interner Zinsfuß zu einer anderen Reihenfolge führen als ein höherer Kapitalwert. Dann solltest du beide Kennzahlen und die Kapitalbindung gemeinsam prüfen.',
        ],
      },
      {
        heading: 'Ungewöhnliche Zahlungsreihen und mehrere Lösungen',
        paragraphs: [
          'Üblich ist eine Zahlungsreihe mit einer negativen Anfangsinvestition und danach positiven Nettozahlungen. Wechseln die Vorzeichen später mehrfach – etwa durch hohe Nachinvestitionen oder Rückbaukosten –, kann es mehrere interne Zinsfüße oder keine sinnvoll interpretierbare Lösung geben.',
          'Eine Software kann dann unterschiedliche Ergebnisse liefern, je nach Startwert oder Berechnungsmethode. In solchen Fällen ist die Kapitalwertmethode mit einem klar begründeten Kalkulationszinssatz oft leichter nachzuvollziehen.',
        ],
      },
      {
        heading: 'Grenzen und typische Fehler',
        paragraphs: [
          'Der interne Zinsfuß berücksichtigt zwar Zahlungszeitpunkte, ersetzt aber keine Prüfung von Liquidität, Risiko, Kapazität oder strategischem Nutzen. Er kann außerdem bei unrealistischen Zahlungsprognosen eine scheinbare Genauigkeit erzeugen.',
          [
            'Vermeide es, ihn als automatisch beste Entscheidungsgröße zu behandeln. Prüfe Vorzeichen, Perioden, Restwerte und zusätzliche Investitionen sorgfältig. Für grundlegende Zinswirkungen hilft die Wissensseite ',
            { type: 'link', href: '/wissen/zinseszins', text: 'Zinseszins' },
            '. Der interne Zinsfuß gehört zur ',
            { type: 'link', href: '/wissen/dynamische-investitionsrechnung', text: 'dynamischen Investitionsrechnung' },
            '.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der interne Zinsfuß ist der Zinssatz, bei dem der Kapitalwert einer Zahlungsreihe null wird.',
    'Er beschreibt die rechnerische Rendite der erwarteten Zahlungsreihe.',
    'Der Vergleich mit dem Kalkulationszinssatz hilft bei der Einordnung.',
    'Die Berechnung erfolgt meist per Näherung oder mit Software.',
    'Mehrfache Vorzeichenwechsel können mehrere oder keine sinnvoll interpretierbare Lösung erzeugen.',
    'Interner Zinsfuß, Kapitalwert, Liquidität und Risiko sollten gemeinsam betrachtet werden.',
  ],
  commonMistakes: [
    'den internen Zinsfuß als garantierte Rendite verstehen.',
    'Zahlungen, Restwerte oder spätere Auszahlungen in der Zahlungsreihe vergessen.',
    'den internen Zinsfuß ohne Vergleich mit einem begründeten Kalkulationszinssatz bewerten.',
    'bei mehreren Vorzeichenwechseln eine Softwarelösung ungeprüft übernehmen.',
    'Investitionen unterschiedlicher Größe oder Risiken nur über den internen Zinsfuß vergleichen.',
    'Zahlungszeitpunkte und Periodenlängen nicht einheitlich erfassen.',
  ],
  faqs: [
    {
      question: 'Was ist der interne Zinsfuß einfach erklärt?',
      answer: 'Er ist der Zinssatz, bei dem die abgezinsten erwarteten Nettozahlungen einer Investition genau ihre Anfangsinvestition ausgleichen.',
    },
    {
      question: 'Was bedeutet ein hoher interner Zinsfuß?',
      answer: 'Er kann auf eine höhere rechnerische Rendite der Zahlungsreihe hindeuten. Aussagekräftig ist der Wert aber nur im Vergleich mit Kalkulationszinssatz, Risiko und vergleichbaren Alternativen.',
    },
    {
      question: 'Wie berechnet man den internen Zinsfuß?',
      answer: 'Meist durch schrittweise Annäherung oder mit einer Tabellenkalkulation beziehungsweise Software. Gesucht wird der Zinssatz, bei dem der Kapitalwert null ist.',
    },
    {
      question: 'Kann es mehrere interne Zinsfüße geben?',
      answer: 'Ja. Wenn die Zahlungsreihe mehrfach zwischen Ein- und Auszahlungen wechselt, sind mehrere oder keine sinnvoll interpretierbare Lösungen möglich.',
    },
    {
      question: 'Ist ein höherer interner Zinsfuß immer besser?',
      answer: 'Nicht automatisch. Bei unterschiedlich großen, riskanten oder sich ausschließenden Investitionen können Kapitalwert, Liquidität und strategische Ziele zu einer anderen Bewertung führen.',
    },
  ],
  related: [
    'dynamische-investitionsrechnung',
    'kapitalwertmethode',
    'annuitaetenmethode',
    'zinseszins',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default internerZinsfuss;
