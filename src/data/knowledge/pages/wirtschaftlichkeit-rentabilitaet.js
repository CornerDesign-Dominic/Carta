import { defaultDisclaimer } from '../shared.js';

const wirtschaftlichkeitRentabilitaet = {
  slug: 'wirtschaftlichkeit-rentabilitaet',
  category: 'Kostenrechnung & Controlling',
  title: 'Wirtschaftlichkeit & Rentabilität',
  description: 'Wirtschaftlichkeit und Rentabilität einfach erklärt: Leistung und Kosten von Gewinn, Umsatz und eingesetztem Kapital klar unterscheiden.',
  seo: {
    title: 'Wirtschaftlichkeit & Rentabilität erklärt | Belege24',
    description: 'Verstehe den Unterschied zwischen Wirtschaftlichkeit und Rentabilität sowie die wichtigsten Grundformeln für betriebliche Entscheidungen.',
    canonicalPath: '/wissen/wirtschaftlichkeit-rentabilitaet',
  },
  article: {
    intro: 'Wirtschaftlichkeit und Rentabilität helfen dir, betriebliche Entscheidungen einzuordnen. Wirtschaftlichkeit betrachtet das Verhältnis von Leistung und Kosten. Rentabilität zeigt dagegen, wie sich ein Ergebnis im Verhältnis zu Kapital oder Umsatz entwickelt.',
    sections: [
      {
        heading: 'Wirtschaftlichkeit: Leistung im Verhältnis zu Kosten',
        paragraphs: [
          [
            { type: 'glossary', id: 'wirtschaftlichkeit', text: 'Wirtschaftlichkeit' },
            ' beschreibt, ob der bewertete Nutzen oder die Leistung in einem angemessenen Verhältnis zu den eingesetzten Kosten steht. Sie beantwortet etwa die Frage, ob ein Prozess, eine Maschine oder eine Leistungserstellung mit vertretbarem Aufwand erfolgt.',
          ],
          'Leistung und Kosten sind Begriffe der internen Kostenrechnung. Sie dürfen nicht automatisch mit Ertrag und Aufwand aus der Buchführung gleichgesetzt werden. Für eine aussagekräftige Kennzahl müssen Leistung, Kosten und Zeitraum nach derselben Logik abgegrenzt sein.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Wirtschaftlichkeit',
            formula: 'Wirtschaftlichkeit = Leistung ÷ Kosten',
            description: 'Ein Wert über 1 bedeutet grundsätzlich, dass die angesetzte Leistung höher ist als die angesetzten Kosten. Der Wert gilt immer nur für die gewählte Abgrenzung.',
          },
        ],
      },
      {
        heading: 'Rentabilität: Gewinn im Verhältnis zu einer Bezugsgröße',
        paragraphs: [
          [
            { type: 'glossary', id: 'rentabilitaet', text: 'Rentabilität' },
            ' setzt ein Ergebnis wie Gewinn ins Verhältnis zu einer Bezugsgröße. Je nach Frage kann das eingesetzte Eigenkapital, das Gesamtkapital oder der Umsatz sein.',
          ],
          'Die Kennzahl wird meist in Prozent angegeben. Sie beantwortet nicht, ob ein einzelner Ablauf effizient ist, sondern wie stark sich ein Ergebnis im Verhältnis zur gewählten Basis entwickelt hat. Gewinn, Bezugsgröße und Zeitraum müssen dabei zusammenpassen.',
        ],
        formulaCards: [
          {
            label: 'Überblick',
            title: 'Typische Rentabilitätskennzahlen',
            formula: 'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100; Gesamtkapitalrentabilität = (Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100; Umsatzrentabilität = Gewinn ÷ Umsatz × 100',
            description: 'Die Formeln zeigen die Grundidee. Für belastbare Vergleiche müssen die verwendeten Ergebnis- und Kapitalgrößen einheitlich bestimmt werden.',
          },
        ],
      },
      {
        heading: 'Warum Wirtschaftlichkeit und Rentabilität nicht dasselbe sind',
        paragraphs: [
          'Wirtschaftlichkeit richtet den Blick vor allem auf Leistung und Kosten. Rentabilität betrachtet dagegen das Ergebnis im Verhältnis zu Kapital oder Umsatz. Beide Kennzahlen können sich positiv entwickeln, müssen es aber nicht gleichzeitig tun.',
          'Ein Prozess kann zum Beispiel sehr wirtschaftlich sein, weil er Material und Arbeitszeit spart. Wenn dafür jedoch viel Kapital in eine Maschine gebunden wird oder der Umsatz gering bleibt, kann die Kapital- oder Umsatzrentabilität trotzdem niedrig ausfallen.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Effiziente Produktion, aber hohe Kapitalbindung',
            paragraphs: [
              'Eine neue Maschine senkt die Kosten pro Stück deutlich. Die Leistung steigt bei gleichen Kosten – die Produktion wird wirtschaftlicher.',
              'Die Maschine bindet jedoch viel Kapital. Wenn der zusätzliche Gewinn im Verhältnis zum gesamten Kapitaleinsatz klein bleibt, kann die Gesamtkapitalrentabilität trotz der wirtschaftlicheren Produktion niedrig sein.',
            ],
          },
        ],
      },
      {
        heading: 'Leistung, Kosten, Ertrag, Aufwand und Gewinn unterscheiden',
        paragraphs: [
          'Leistung und Kosten werden vor allem für interne Kalkulationen und Steuerung verwendet. Ertrag und Aufwand gehören zur Erfolgsermittlung im Rechnungswesen. Sie können sich inhaltlich überschneiden, folgen aber nicht in jeder Situation derselben Abgrenzung.',
          'Gewinn entsteht grundsätzlich, wenn die maßgeblichen Erträge eines Zeitraums höher sind als die Aufwendungen. Für Rentabilitätskennzahlen ist deshalb wichtig, welche Gewinngröße verwendet wird und ob sie zur Kapital- oder Umsatzgröße passt.',
        ],
      },
      {
        heading: 'Wirtschaftlichkeit praktisch berechnen',
        paragraphs: [
          'Eine Abteilung bewertet ihre Leistung in einem Monat mit 54.000 Euro. Die dazugehörigen Kosten betragen 45.000 Euro.',
        ],
        exampleCards: [
          {
            title: 'Leistung und Kosten im gleichen Zeitraum',
            paragraphs: [
              'Wirtschaftlichkeit = 54.000 Euro ÷ 45.000 Euro = 1,20.',
              'Für jeden Euro angesetzter Kosten stehen rechnerisch 1,20 Euro Leistung gegenüber. Ob das gut genug ist, hängt etwa von Qualität, Kapazität, Risiko und möglichen Alternativen ab.',
            ],
          },
        ],
      },
      {
        heading: 'Rentabilität nur als Überblick',
        paragraphs: [
          'Die Eigenkapitalrentabilität zeigt Gewinn im Verhältnis zum Eigenkapital. Sie richtet sich vor allem an der Sicht der Eigentümer aus. Eine hohe Kennzahl kann aber auch durch eine niedrige Eigenkapitalbasis entstehen und sollte deshalb zusammen mit Verschuldung und Risiko gelesen werden.',
          'Die Gesamtkapitalrentabilität bezieht Eigen- und Fremdkapital gemeinsam ein. Sie hilft, die Ertragskraft des gesamten Kapitaleinsatzes zu betrachten. Die Umsatzrentabilität setzt Gewinn zum Umsatz in Beziehung und zeigt, welcher Ergebnisanteil bei der gewählten Abgrenzung vom Umsatz übrig bleibt.',
          'Diese drei Kennzahlen sind hier nur eine Einordnung. Für eine vertiefte Analyse brauchst du vergleichbare Daten, einen passenden Zeitraum und weitere Kennzahlen wie Liquidität oder Kapitalstruktur.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Gewinn im Verhältnis zum Umsatz',
            paragraphs: [
              'Ein Unternehmen erzielt 40.000 Euro Gewinn bei 500.000 Euro Umsatz. Die Umsatzrentabilität beträgt 8 Prozent.',
              'Die Kennzahl sagt nicht, ob die Produktion wirtschaftlich ist oder ob genügend Liquidität vorhanden ist. Sie zeigt lediglich, wie hoch der Gewinn in Relation zum Umsatz des betrachteten Zeitraums ausfällt.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Anwendungen',
        paragraphs: [
          'Wirtschaftlichkeit eignet sich zum Beispiel, um Verfahren, Kostenstellen oder Handlungsalternativen zu vergleichen. Rentabilitätskennzahlen helfen bei der Beurteilung von Ergebnisentwicklung, Kapitalbindung und Umsatzqualität über mehrere Zeiträume.',
          'Für eine Entscheidung reicht selten eine einzelne Kennzahl. Ergänze sie je nach Fragestellung durch absolute Kosten und Gewinne, Liquiditätsdaten, Kapazitäten, Qualitätsanforderungen und Risiken.',
        ],
      },
      {
        heading: 'Typische Missverständnisse',
        paragraphs: [
          'Ein Wert über 1 bei der Wirtschaftlichkeit bedeutet nicht automatisch, dass eine Entscheidung insgesamt sinnvoll oder ein Unternehmen rentabel ist. Umgekehrt kann eine niedrigere Rentabilität aus Investitionen, Wachstumsphasen oder einmaligen Effekten entstehen und braucht eine Einordnung.',
          'Vergleiche Kennzahlen nur, wenn Definition, Zeitraum und Bezugsgrößen zusammenpassen. Unterschiedliche Gewinnbegriffe, Kapitalstände oder Kostenabgrenzungen können Ergebnisse stark verändern.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Wirtschaftlichkeit setzt Leistung ins Verhältnis zu Kosten',
    'Rentabilität setzt ein Ergebnis wie Gewinn ins Verhältnis zu Kapital oder Umsatz',
    'Leistung und Kosten sind nicht automatisch mit Ertrag und Aufwand gleichzusetzen',
    'Eine hohe Wirtschaftlichkeit führt nicht zwangsläufig zu einer hohen Rentabilität',
    'Eigenkapital-, Gesamt- und Umsatzrentabilität beantworten unterschiedliche Fragen',
    'Kennzahlen sind nur bei gleicher Abgrenzung und im passenden Kontext vergleichbar',
  ],
  commonMistakes: [
    'Wirtschaftlichkeit, Gewinn und Rentabilität gleichsetzen',
    'Leistung und Kosten aus unterschiedlichen Zeiträumen vergleichen',
    'Ertrag und Aufwand ohne Prüfung mit Leistung und Kosten gleichsetzen',
    'Gewinn und Kapital aus unterschiedlichen Abgrenzungen in einer Rentabilitätsformel verwenden',
    'eine einzelne Kennzahl ohne Liquidität, Risiko oder Kapitalbindung beurteilen',
    'eine hohe Quote als allgemeingültiges Qualitätsurteil verstehen',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Wirtschaftlichkeit und Rentabilität?',
      answer: 'Wirtschaftlichkeit vergleicht Leistung mit Kosten. Rentabilität setzt ein Ergebnis wie Gewinn zu einer Bezugsgröße wie Kapital oder Umsatz ins Verhältnis.',
    },
    {
      question: 'Wie berechnet man Wirtschaftlichkeit?',
      answer: 'Die Grundformel lautet Leistung geteilt durch Kosten. Beide Größen müssen denselben Zeitraum und dieselbe sachliche Abgrenzung betreffen.',
    },
    {
      question: 'Was bedeutet eine Wirtschaftlichkeit über 1?',
      answer: 'Die angesetzte Leistung ist bei der gewählten Berechnung höher als die angesetzten Kosten. Daraus folgt aber nicht automatisch eine vollständige Bewertung der Entscheidung.',
    },
    {
      question: 'Was ist Umsatzrentabilität?',
      answer: 'Sie setzt Gewinn zum Umsatz ins Verhältnis. Sie zeigt, welcher Ergebnisanteil bei der gewählten Abgrenzung vom Umsatz eines Zeitraums übrig bleibt.',
    },
    {
      question: 'Kann ein Unternehmen wirtschaftlich, aber wenig rentabel sein?',
      answer: 'Ja. Effiziente Prozesse können mit hoher Kapitalbindung, geringem Umsatz oder einem niedrigen Ergebnis zusammentreffen. Deshalb beantworten beide Kennzahlen unterschiedliche Fragen.',
    },
  ],
  related: [
    'kostenrechnung-controlling',
    'kennzahlen',
    'eigenkapitalrentabilitaet',
    'gesamtkapitalrentabilitaet',
    'roi',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default wirtschaftlichkeitRentabilitaet;
