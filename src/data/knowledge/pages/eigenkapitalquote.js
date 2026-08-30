import { defaultDisclaimer } from '../shared.js';

const eigenkapitalquote = {
  slug: 'eigenkapitalquote',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Eigenkapitalquote',
  description: 'Eigenkapitalquote einfach erklärt: Eigenkapital und Gesamtkapital ins Verhältnis setzen und die Kapitalstruktur im Kontext beurteilen.',
  seo: {
    title: 'Eigenkapitalquote berechnen | Belege24',
    description: 'Erfahre, was die Eigenkapitalquote misst, wie du sie berechnest und warum Branche, Finanzierung und Bilanzstruktur für die Einordnung wichtig sind.',
    canonicalPath: '/wissen/eigenkapitalquote',
  },
  article: {
    intro: 'Die Eigenkapitalquote zeigt, welchen Anteil das Eigenkapital am Gesamtkapital eines Unternehmens hat. Sie hilft dabei, die Kapitalstruktur und den rechnerischen Risikopuffer einzuordnen, darf aber nicht losgelöst von Geschäftsmodell, Ertragslage und Liquidität bewertet werden.',
    sections: [
      {
        heading: 'Was misst die Eigenkapitalquote?',
        paragraphs: [
          [
            'Die Eigenkapitalquote setzt das in der Bilanz ausgewiesene ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ' ins Verhältnis zum gesamten Kapital. Sie zeigt damit, welcher Anteil der bilanzierten Vermögenswerte rechnerisch durch eigene Mittel finanziert ist.',
          ],
          'Die Kennzahl wird in Prozent angegeben und bezieht sich meist auf einen Bilanzstichtag. Sie beschreibt eine Struktur und sagt für sich allein weder, wie profitabel das Unternehmen arbeitet, noch wie viel Geld kurzfristig verfügbar ist.',
        ],
      },
      {
        heading: 'Eigenkapitalquote berechnen',
        paragraphs: [
          [
            'Das Gesamtkapital entspricht der Summe aus Eigen- und ',
            { type: 'glossary', id: 'fremdkapital', text: 'Fremdkapital' },
            '. Es entspricht damit grundsätzlich auch der ',
            { type: 'glossary', id: 'bilanzsumme', text: 'Bilanzsumme' },
            '.',
          ],
          'Eigenkapital und Gesamtkapital müssen aus derselben Bilanz und vom selben Stichtag stammen. Für Konzern-, Einzel- oder Sonderbilanzen können sich unterschiedliche Werte ergeben; die verwendete Datengrundlage sollte deshalb klar benannt werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Eigenkapitalquote',
            formula: 'Eigenkapitalquote = Eigenkapital / Gesamtkapital × 100',
            description: 'Als Gesamtkapital wird grundsätzlich die Bilanzsumme desselben Stichtags verwendet.',
          },
        ],
        exampleCards: [
          {
            title: 'Eigenkapitalanteil an der Bilanzsumme',
            paragraphs: [
              'Ein Unternehmen weist am Bilanzstichtag 300.000 Euro Eigenkapital und eine Bilanzsumme von 1.000.000 Euro aus.',
              'Eigenkapitalquote = 300.000 Euro / 1.000.000 Euro × 100 = 30 Prozent.',
              'Damit sind rechnerisch 30 Prozent des Gesamtkapitals Eigenkapital. Ob diese Struktur für das Unternehmen tragfähig ist, hängt unter anderem von Branche, Ertragskraft, Vermögensstruktur, Finanzierungskosten und Fälligkeiten ab.',
            ],
            effects: [
              'Eigenkapital: 300.000 Euro',
              'Gesamtkapital beziehungsweise Bilanzsumme: 1.000.000 Euro',
              'Vollständige Rechnung: 300.000 Euro / 1.000.000 Euro × 100 = 30 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Bedeutung für Kapitalstruktur und finanzielle Stabilität',
        paragraphs: [
          'Eigenkapital kann Verluste auffangen, bevor Gläubigerpositionen betroffen sind. Eine höhere Quote kann deshalb grundsätzlich einen größeren bilanziellen Risikopuffer und eine geringere Abhängigkeit von Fremdfinanzierung anzeigen.',
          'Finanzielle Stabilität hängt jedoch auch von Zahlungsströmen, Fälligkeiten, Ertragskraft, Vermögensqualität und Finanzierungsbedingungen ab. Eine hohe Quote verhindert keine Liquiditätsprobleme, und eine niedrigere Quote bedeutet nicht automatisch, dass ein Unternehmen zahlungsunfähig oder wirtschaftlich schwach ist.',
        ],
      },
      {
        heading: 'Wie Gewinne, Verluste, Einlagen und Finanzierung wirken',
        paragraphs: [
          'Einbehaltene Gewinne erhöhen grundsätzlich das Eigenkapital und können dadurch die Quote steigern. Verluste mindern das Eigenkapital und können die Quote senken. Ausschüttungen oder Entnahmen können ähnlich wirken, während Einlagen die Eigenkapitalbasis stärken können.',
          'Zusätzliches Fremdkapital erhöht bei sonst gleichen Bedingungen das Gesamtkapital, ohne das Eigenkapital unmittelbar zu erhöhen. Die Eigenkapitalquote sinkt dann rechnerisch. Wird Fremdkapital jedoch produktiv eingesetzt und entstehen daraus künftig einbehaltene Gewinne, kann sich die Quote später wieder verändern.',
          'Kapitalmaßnahmen beeinflussen oft mehrere Bilanzpositionen gleichzeitig. Deshalb sollte nicht nur die Veränderung der Quote, sondern auch deren wirtschaftliche Ursache betrachtet werden.',
        ],
      },
      {
        heading: 'Hohe und niedrige Werte interpretieren',
        paragraphs: [
          'Eine höhere Eigenkapitalquote kann auf mehr Unabhängigkeit von Gläubigern und größere Verlusttragfähigkeit hinweisen. Sie kann aber auch entstehen, wenn Investitionen unterbleiben oder Fremdfinanzierung trotz sinnvoller Möglichkeiten kaum genutzt wird.',
          'Eine niedrigere Quote kann mit höherem Finanzierungs- und Zinsrisiko verbunden sein. Sie kann zugleich zu einem kapitalintensiven Geschäftsmodell, einer Wachstumsphase oder einer bewusst gewählten Finanzierung passen. Entscheidend sind Schuldentragfähigkeit, Laufzeiten, Ertragsaussichten und die Qualität der finanzierten Vermögenswerte.',
          'Sehr kleine oder negative Eigenkapitalwerte erfordern eine gesonderte Analyse. Der Prozentwert allein erklärt weder Ursache noch konkrete wirtschaftliche oder rechtliche Folgen.',
        ],
      },
      {
        heading: 'Branchen- und Unternehmensunterschiede',
        paragraphs: [
          'Kapitalintensive Unternehmen mit großen Anlagen, Vorräten oder Immobilien haben häufig andere Finanzierungsstrukturen als dienstleistungs- oder softwareorientierte Unternehmen. Auch Unternehmensalter, Größe, Rechtsform, Wachstum und Zugang zu Kapital beeinflussen die Quote.',
          'Branchenvergleiche sind daher nur sinnvoll, wenn Geschäftsmodelle, Rechnungslegung, Stichtage und Unternehmensgrößen ausreichend vergleichbar sind. Aus einem Durchschnittswert lässt sich keine pauschale Idealquote ableiten.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Die Eigenkapitalquote ist eine bilanzielle Stichtagskennzahl. Bewertungsmethoden, stille Reserven oder Lasten sowie außergewöhnliche Vorgänge rund um den Stichtag können die Aussage beeinflussen. Sie zeigt außerdem nicht, wann Zahlungen fällig werden oder ob laufende Geschäfte genügend Mittel erwirtschaften.',
          'Für eine vollständige Analyse sollte die Quote gemeinsam mit Fremdkapitalquote, Verschuldungsgrad, Anlagendeckung, Rentabilität, Cashflow und Liquiditätskennzahlen betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Eigenkapitalquote zeigt den Anteil des Eigenkapitals am Gesamtkapital',
    'Das Gesamtkapital entspricht grundsätzlich der Bilanzsumme',
    'Gewinne, Verluste, Einlagen, Ausschüttungen und Finanzierungen können die Quote verändern',
    'Eine höhere Quote kann einen größeren bilanziellen Risikopuffer anzeigen',
    'Hohe und niedrige Werte sind nur im Unternehmens- und Branchenkontext sinnvoll einzuordnen',
    'Die Kennzahl ersetzt keine Analyse von Liquidität, Ertragskraft und Fälligkeiten',
  ],
  commonMistakes: [
    'Eigenkapital und Bilanzsumme aus unterschiedlichen Stichtagen verwenden',
    'Gesamtkapital mit Umsatz oder Gewinn verwechseln',
    'eine hohe Quote automatisch als gute Gesamtlage bewerten',
    'eine niedrige Quote ohne Blick auf Geschäftsmodell und Finanzierung beurteilen',
    'Veränderungen durch Einlagen, Entnahmen oder Ausschüttungen übersehen',
    'Bilanzierungs- und Bewertungsunterschiede bei Vergleichen ignorieren',
    'Unternehmen unterschiedlicher Branchen und Größen direkt vergleichen',
    'Eigenkapitalquote mit kurzfristig verfügbarer Liquidität gleichsetzen',
  ],
  faqs: [
    {
      question: 'Was sagt die Eigenkapitalquote aus?',
      answer: 'Sie zeigt, welcher Anteil des gesamten bilanzierten Kapitals auf Eigenkapital entfällt.',
    },
    {
      question: 'Wie wird die Eigenkapitalquote berechnet?',
      answer: 'Eigenkapital wird durch das Gesamtkapital beziehungsweise die Bilanzsumme desselben Stichtags geteilt und mit 100 multipliziert.',
    },
    {
      question: 'Ist eine hohe Eigenkapitalquote immer gut?',
      answer: 'Nein. Sie kann Stabilität anzeigen, muss aber zusammen mit Investitionen, Ertragskraft, Liquidität und Finanzierungsmöglichkeiten beurteilt werden.',
    },
    {
      question: 'Warum sinkt die Eigenkapitalquote bei neuen Krediten?',
      answer: 'Zusätzliches Fremdkapital erhöht bei sonst gleichen Bedingungen das Gesamtkapital, während das Eigenkapital zunächst unverändert bleibt.',
    },
    {
      question: 'Welche Eigenkapitalquote ist ideal?',
      answer: 'Eine allgemeingültige Idealquote gibt es nicht. Branche, Geschäftsmodell, Risiko, Unternehmensphase und Finanzierung bestimmen den passenden Vergleichsmaßstab.',
    },
  ],
  related: [
    'eigenkapital-fremdkapital',
    'fremdkapitalquote',
    'verschuldungsgrad',
    'anlagendeckungsgrad',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default eigenkapitalquote;
