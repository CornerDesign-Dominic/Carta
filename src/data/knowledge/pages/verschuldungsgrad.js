import { defaultDisclaimer } from '../shared.js';

const verschuldungsgrad = {
  slug: 'verschuldungsgrad',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Verschuldungsgrad',
  description: 'Verschuldungsgrad einfach erklärt: Fremdkapital und Eigenkapital ins Verhältnis setzen und Finanzierung sowie Risiko im Kontext beurteilen.',
  seo: {
    title: 'Verschuldungsgrad berechnen | Belege24',
    description: 'Erfahre, was der Verschuldungsgrad aussagt, wie du ihn berechnest und warum Finanzierung, Risiko und Branche für die Einordnung wichtig sind.',
    canonicalPath: '/wissen/verschuldungsgrad',
  },
  article: {
    intro: 'Der Verschuldungsgrad zeigt, wie viel Fremdkapital einem Euro Eigenkapital gegenübersteht. Die Kennzahl hilft dabei, Finanzierungsstruktur und finanzielles Risiko einzuordnen, darf aber nicht ohne Laufzeiten, Ertragskraft, Liquidität und Geschäftsmodell bewertet werden.',
    sections: [
      {
        heading: 'Was sagt der Verschuldungsgrad aus?',
        paragraphs: [
          [
            'Der Verschuldungsgrad setzt das ',
            { type: 'glossary', id: 'fremdkapital', text: 'Fremdkapital' },
            ' eines Unternehmens ins Verhältnis zu seinem ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            '. Er zeigt damit, in welchem Umfang die Finanzierung durch Gläubiger im Verhältnis zur bilanziellen Eigenkapitalbasis steht.',
          ],
          'Ein Verschuldungsgrad von 200 Prozent bedeutet rechnerisch, dass auf einen Euro Eigenkapital zwei Euro Fremdkapital entfallen. Daraus allein lässt sich noch nicht ableiten, ob die Finanzierung tragfähig oder wirtschaftlich sinnvoll ist.',
        ],
      },
      {
        heading: 'Verschuldungsgrad berechnen',
        paragraphs: [
          'Fremd- und Eigenkapital müssen aus derselben Bilanz und vom selben Stichtag stammen. Abweichende Definitionen, etwa bei nachrangigen Finanzierungen oder wirtschaftlichem Eigenkapital, müssen offengelegt und bei Vergleichen einheitlich behandelt werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Verschuldungsgrad',
            formula: 'Verschuldungsgrad = Fremdkapital / Eigenkapital × 100',
            description: 'Die Kennzahl bezieht Fremdkapital direkt auf Eigenkapital. Bei sehr kleinem, null oder negativem Eigenkapital ist das Ergebnis kaum oder nicht sinnvoll interpretierbar.',
          },
        ],
        exampleCards: [
          {
            title: 'Fremdkapital im Verhältnis zum Eigenkapital',
            paragraphs: [
              'Ein Unternehmen weist am Bilanzstichtag 600.000 Euro Fremdkapital und 300.000 Euro Eigenkapital aus.',
              'Verschuldungsgrad = 600.000 Euro / 300.000 Euro × 100 = 200 Prozent.',
              'Damit stehen jedem Euro Eigenkapital rechnerisch zwei Euro Fremdkapital gegenüber. Für die Beurteilung müssen unter anderem Zins- und Tilgungslast, Fälligkeiten, Cashflow, Vermögensqualität und Branche betrachtet werden.',
            ],
            effects: [
              'Fremdkapital: 600.000 Euro',
              'Eigenkapital: 300.000 Euro',
              'Vollständige Rechnung: 600.000 Euro / 300.000 Euro × 100 = 200 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Unterschied zur Fremdkapitalquote',
        paragraphs: [
          'Der Verschuldungsgrad teilt Fremdkapital durch Eigenkapital. Die Fremdkapitalquote teilt Fremdkapital dagegen durch das Gesamtkapital beziehungsweise die Bilanzsumme.',
          'Beide Kennzahlen beschreiben die Kapitalstruktur, verwenden aber unterschiedliche Nenner und liefern deshalb unterschiedliche Prozentwerte. Im Beispiel betragen das Gesamtkapital 900.000 Euro, die Fremdkapitalquote rund 66,7 Prozent und der Verschuldungsgrad 200 Prozent.',
        ],
      },
      {
        heading: 'Zusätzliche Finanzierung und weitere Veränderungen',
        paragraphs: [
          'Ein zusätzlich ausgezahltes Darlehen erhöht bei sonst gleichen Bedingungen das Fremdkapital, während das Eigenkapital zunächst unverändert bleibt. Der Verschuldungsgrad steigt. Eine Tilgung senkt grundsätzlich das Fremdkapital und damit meist den Verschuldungsgrad.',
          'Eine Eigenkapitaleinlage oder ein einbehaltener Gewinn erhöht die Eigenkapitalbasis und kann den Verschuldungsgrad senken. Verluste, Entnahmen oder Ausschüttungen können das Eigenkapital mindern und die Kennzahl erhöhen. Entscheidend ist stets die wirtschaftliche Ursache der Veränderung.',
        ],
      },
      {
        heading: 'Zusammenhang mit finanziellem Risiko',
        paragraphs: [
          'Mehr Fremdkapital kann feste Zins- und Tilgungsverpflichtungen erhöhen. Dadurch kann das Unternehmen empfindlicher auf sinkende Ergebnisse, steigende Zinsen oder verzögerte Zahlungseingänge reagieren. Laufzeit, Zinssatz, Währung, Sicherheiten und Kündigungsrechte bestimmen das Risiko mit.',
          'Ein niedrigerer Verschuldungsgrad kann grundsätzlich einen größeren bilanziellen Puffer anzeigen. Er garantiert jedoch weder ausreichende Liquidität noch ein profitables Geschäftsmodell. Auch Unternehmen mit wenig Fremdkapital können operative oder zahlungsbezogene Probleme haben.',
        ],
      },
      {
        heading: 'Warum Fremdkapital wirtschaftlich sinnvoll sein kann',
        paragraphs: [
          'Fremdkapital kann Investitionen ermöglichen, Kapazitäten erweitern oder vorübergehenden Finanzierungsbedarf decken. Wirtschaftlich sinnvoll kann es sein, wenn die erwarteten Erträge und Zahlungsströme die Finanzierungskosten und Risiken tragfähig abdecken.',
          [
            'Liegt die Rendite des zusätzlich eingesetzten Kapitals über den Fremdkapitalkosten, kann Fremdfinanzierung die Eigenkapitalrentabilität rechnerisch erhöhen. Dieser Leverage-Effekt wirkt bei ungünstiger Entwicklung jedoch auch belastend. Mehr dazu zeigt die Seite ',
            { type: 'link', href: '/wissen/eigenkapitalrentabilitaet', text: 'Eigenkapitalrentabilität' },
            '.',
          ],
        ],
      },
      {
        heading: 'Branchen- und Zeitvergleich',
        paragraphs: [
          'Im Zeitvergleich zeigt die Kennzahl, wie sich das Verhältnis von Fremd- und Eigenkapital verändert. Darlehen, Tilgungen, Kapitalmaßnahmen, Gewinne und Verluste sollten die Entwicklung erklären können.',
          'Branchen unterscheiden sich bei Kapitalbedarf, Vermögensstruktur, Stabilität der Zahlungsströme und Zugang zu Finanzierung. Vergleiche sind deshalb nur bei ausreichend ähnlichen Unternehmen und einheitlicher Berechnung sinnvoll. Eine pauschale Idealgröße gibt es nicht.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Der Verschuldungsgrad ist eine bilanzielle Stichtagskennzahl. Er zeigt weder die Fälligkeiten der Schulden noch die tatsächlich gezahlten Zinsen oder die Fähigkeit, Zahlungen aus dem laufenden Geschäft zu leisten. Außerbilanzielle Verpflichtungen können ebenfalls unberücksichtigt bleiben.',
          'Bei sehr niedrigem Eigenkapital kann der Wert stark ausschlagen; bei null Eigenkapital ist die Formel nicht definiert, bei negativem Eigenkapital ist der Prozentwert wirtschaftlich missverständlich. Ergänzend sollten Zinsdeckungsgrad, Cashflow, Liquidität, Fälligkeitsstruktur sowie Eigen- und Fremdkapitalquote geprüft werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der Verschuldungsgrad setzt Fremdkapital ins Verhältnis zum Eigenkapital',
    'Er unterscheidet sich durch seinen Nenner von der Fremdkapitalquote',
    'Darlehen, Tilgungen, Ergebnisse und Kapitalmaßnahmen verändern die Kennzahl',
    'Mehr Fremdkapital kann Risiko erhöhen, aber auch wirtschaftlich sinnvolle Investitionen ermöglichen',
    'Branchen- und Zeitvergleiche brauchen eine einheitliche Abgrenzung',
    'Bei sehr kleinem, null oder negativem Eigenkapital ist die Aussage stark begrenzt',
  ],
  commonMistakes: [
    'Verschuldungsgrad und Fremdkapitalquote gleichsetzen',
    'Fremd- und Eigenkapital aus unterschiedlichen Stichtagen verwenden',
    'Zinszahlungen mit Tilgungen verwechseln',
    'einen hohen Wert pauschal als schlecht bewerten',
    'einen niedrigen Wert automatisch mit guter Liquidität gleichsetzen',
    'Laufzeiten, Zinsen und Schuldentragfähigkeit ignorieren',
    'Branchen mit unterschiedlichen Kapitalstrukturen direkt vergleichen',
    'bei null oder negativem Eigenkapital einen normalen Prozentwert interpretieren',
  ],
  faqs: [
    {
      question: 'Was sagt der Verschuldungsgrad aus?',
      answer: 'Er zeigt, wie viel Fremdkapital einem Euro Eigenkapital rechnerisch gegenübersteht.',
    },
    {
      question: 'Wie wird der Verschuldungsgrad berechnet?',
      answer: 'Fremdkapital wird durch Eigenkapital geteilt und mit 100 multipliziert. Beide Werte müssen aus derselben Abgrenzung und demselben Stichtag stammen.',
    },
    {
      question: 'Was ist der Unterschied zur Fremdkapitalquote?',
      answer: 'Der Verschuldungsgrad bezieht Fremdkapital auf Eigenkapital. Die Fremdkapitalquote bezieht Fremdkapital auf das Gesamtkapital.',
    },
    {
      question: 'Ist ein hoher Verschuldungsgrad immer schlecht?',
      answer: 'Nein. Entscheidend sind unter anderem Ertragskraft, Zahlungsströme, Finanzierungskosten, Laufzeiten, Risiko und der wirtschaftliche Zweck der Finanzierung.',
    },
    {
      question: 'Kann der Verschuldungsgrad bei negativem Eigenkapital verwendet werden?',
      answer: 'Der rechnerische Prozentwert wäre wirtschaftlich missverständlich. Die Ursachen des negativen Eigenkapitals und die gesamte Finanzlage müssen gesondert analysiert werden.',
    },
  ],
  related: [
    'eigenkapitalquote',
    'fremdkapitalquote',
    'zinsdeckungsgrad',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default verschuldungsgrad;
