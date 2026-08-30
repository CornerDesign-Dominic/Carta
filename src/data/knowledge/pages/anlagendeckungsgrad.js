import { defaultDisclaimer } from '../shared.js';

const anlagendeckungsgrad = {
  slug: 'anlagendeckungsgrad',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Anlagendeckungsgrad I & II',
  description: 'Anlagendeckungsgrad I und II einfach erklärt: Anlagevermögen, Eigenkapital und langfristiges Fremdkapital passend gegenüberstellen.',
  seo: {
    title: 'Anlagendeckungsgrad I & II berechnen | Belege24',
    description: 'Erfahre, wie Anlagendeckungsgrad I und II langfristige Finanzierung und Anlagevermögen verbinden und wie du beide Kennzahlen einordnest.',
    canonicalPath: '/wissen/anlagendeckungsgrad',
  },
  article: {
    intro: 'Die Anlagendeckungsgrade vergleichen das langfristig gebundene Anlagevermögen mit Kapital, das dem Unternehmen langfristig zur Verfügung steht. Grad I betrachtet nur Eigenkapital, Grad II zusätzlich langfristiges Fremdkapital; beide Kennzahlen müssen im Zusammenhang mit Geschäftsmodell, Laufzeiten und Liquidität gelesen werden.',
    sections: [
      {
        heading: 'Was bedeutet Anlagendeckung?',
        paragraphs: [
          [
            'Zum ',
            { type: 'glossary', id: 'anlagevermoegen', text: 'Anlagevermögen' },
            ' gehören Vermögenswerte, die dem Unternehmen dauerhaft dienen sollen, etwa Maschinen, Betriebsgebäude oder bestimmte immaterielle Vermögenswerte. Sie binden Kapital typischerweise über einen längeren Zeitraum.',
          ],
          'Anlagendeckung untersucht, in welchem Umfang dieses langfristig gebundene Vermögen durch langfristig verfügbares Kapital finanziert ist. Die Kennzahlen geben damit Hinweise auf die Fristenstruktur der Finanzierung, zeigen aber keine Zahlungsströme und keine sichere künftige Zahlungsfähigkeit.',
        ],
      },
      {
        heading: 'Anlagendeckungsgrad I',
        paragraphs: [
          [
            'Der Anlagendeckungsgrad I setzt das ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ' ins Verhältnis zum Anlagevermögen. Er zeigt, welcher Anteil des Anlagevermögens rechnerisch allein durch Eigenkapital gedeckt ist.',
          ],
          'Der Grad I ist eine enge Betrachtung. Ein Wert unter 100 Prozent bedeutet nicht automatisch eine problematische Finanzierung, weil langfristiges Fremdkapital ebenfalls fristgerecht zur Finanzierung von Anlagevermögen eingesetzt werden kann.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Anlagendeckungsgrad I',
            formula: 'Anlagendeckungsgrad I = Eigenkapital / Anlagevermögen × 100',
            description: 'Eigenkapital und Anlagevermögen müssen aus derselben Bilanz und vom selben Stichtag stammen.',
          },
        ],
      },
      {
        heading: 'Anlagendeckungsgrad II',
        paragraphs: [
          [
            'Der Anlagendeckungsgrad II erweitert den Zähler um ',
            { type: 'glossary', id: 'langfristiges-fremdkapital', text: 'langfristiges Fremdkapital' },
            '. Er vergleicht damit die Summe aus Eigenkapital und langfristig bereitgestellten Schulden mit dem Anlagevermögen.',
          ],
          'Welche Schulden als langfristig gelten, muss für die Analyse eindeutig festgelegt werden. Maßgeblich sind nicht nur die ursprüngliche Vertragsdauer, sondern insbesondere die verbleibenden Fälligkeiten zum betrachteten Stichtag. Kurzfristig fällige Teile langfristiger Darlehen sollten nicht ohne Prüfung vollständig dem langfristigen Kapital zugerechnet werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Anlagendeckungsgrad II',
            formula: 'Anlagendeckungsgrad II = (Eigenkapital + langfristiges Fremdkapital) / Anlagevermögen × 100',
            description: 'Die Fristigkeit des Fremdkapitals muss zum Stichtag nachvollziehbar und bei Vergleichen einheitlich abgegrenzt sein.',
          },
        ],
      },
      {
        heading: 'Gemeinsames Beispiel aus einer Bilanz',
        paragraphs: [
          'Die beiden Grade verwenden dasselbe Anlagevermögen, berücksichtigen im Zähler aber unterschiedliche Kapitalbestandteile.',
        ],
        exampleCards: [
          {
            title: 'Anlagendeckungsgrad I und II gemeinsam berechnen',
            paragraphs: [
              'Ein Unternehmen weist am Bilanzstichtag 800.000 Euro Anlagevermögen, 300.000 Euro Eigenkapital und 550.000 Euro langfristiges Fremdkapital aus. Die Fristigkeit der Schulden wurde anhand der verbleibenden Laufzeiten abgegrenzt.',
              'Anlagendeckungsgrad I = 300.000 Euro / 800.000 Euro × 100 = 37,5 Prozent.',
              'Anlagendeckungsgrad II = (300.000 Euro + 550.000 Euro) / 800.000 Euro × 100 = 106,25 Prozent.',
              'Im Grad I sind 37,5 Prozent des Anlagevermögens rechnerisch durch Eigenkapital gedeckt. Im Grad II übersteigt das langfristige Kapital das Anlagevermögen um 50.000 Euro. Ob die Finanzierung insgesamt tragfähig ist, hängt zusätzlich von Fälligkeiten, Zinslast, Cashflow, Liquidität und Vermögensqualität ab.',
            ],
            effects: [
              'Anlagevermögen: 800.000 Euro',
              'Eigenkapital: 300.000 Euro',
              'Langfristiges Fremdkapital: 550.000 Euro',
              'Grad I: 300.000 Euro / 800.000 Euro × 100 = 37,5 Prozent',
              'Grad II: (300.000 Euro + 550.000 Euro) / 800.000 Euro × 100 = 106,25 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Unterschied zwischen Grad I und Grad II',
        paragraphs: [
          'Grad I beantwortet, welcher Anteil des Anlagevermögens durch Eigenkapital gedeckt ist. Grad II beantwortet, welcher Anteil durch die breitere langfristige Kapitalbasis aus Eigenkapital und langfristigem Fremdkapital gedeckt ist.',
          'Grad II ist deshalb regelmäßig höher als Grad I, sofern langfristiges Fremdkapital vorhanden ist. Die Differenz zeigt rechnerisch den Beitrag dieser langfristigen Fremdfinanzierung zur Anlagendeckung.',
        ],
      },
      {
        heading: 'Goldene Bilanzregel als Grundgedanke',
        paragraphs: [
          'Die goldene Bilanzregel beschreibt grundsätzlich eine Fristenkongruenz: Langfristig gebundenes Vermögen soll mit langfristig verfügbarem Kapital finanziert werden. So sollen Rückzahlungen nicht fällig werden, bevor die finanzierten Vermögenswerte ihre Mittel erwirtschaften oder wieder freisetzen können.',
          'Der Anlagendeckungsgrad II wird häufig genutzt, um diesen Gedanken vereinfacht zu prüfen. Daraus folgt jedoch kein allgemeingültiger Idealwert. Zahlungsströme, Nutzungsdauer, Refinanzierung, saisonale Effekte und das konkrete Geschäftsmodell können die sinnvolle Struktur verändern.',
        ],
      },
      {
        heading: 'Werte richtig interpretieren',
        paragraphs: [
          'Ein höherer Grad I zeigt mehr Eigenkapitaldeckung des Anlagevermögens. Ein höherer Grad II zeigt mehr langfristiges Kapital im Verhältnis zum Anlagevermögen. Werte oberhalb von 100 Prozent beim Grad II bedeuten rechnerisch, dass langfristiges Kapital zusätzlich einen Teil des Umlaufvermögens finanziert.',
          'Ein Wert unter 100 Prozent beim Grad II kann darauf hinweisen, dass ein Teil des Anlagevermögens kurzfristig finanziert ist. Das kann Refinanzierungs- und Liquiditätsrisiken erhöhen, muss aber anhand tatsächlicher Laufzeiten, Zahlungsströme und vertraglicher Bedingungen geprüft werden.',
          'Sehr hohe Werte sind ebenfalls nicht automatisch optimal. Sie können eine konservative Finanzierung anzeigen, aber auch mit ungenutztem Kapital, hohen Finanzierungskosten oder einer besonderen Bilanzstruktur zusammenhängen.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Beide Anlagendeckungsgrade sind bilanzielle Stichtagskennzahlen. Sie berücksichtigen nicht automatisch stille Reserven oder Lasten, künftige Investitionen, tatsächliche Zahlungszeitpunkte, Kreditbedingungen oder die Ertragskraft des Anlagevermögens.',
          'Die Abgrenzung langfristigen Fremdkapitals kann zwischen Auswertungen variieren. Für belastbare Vergleiche müssen Definition, Bilanzierungsbasis und Stichtag gleich bleiben. Ergänzend sollten Liquidität, Cashflow, Verschuldung, Zinsdeckung und Fälligkeitsstruktur betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Anlagendeckung vergleicht langfristig gebundenes Vermögen mit langfristig verfügbarem Kapital',
    'Grad I berücksichtigt nur Eigenkapital',
    'Grad II berücksichtigt Eigenkapital und langfristiges Fremdkapital',
    'Langfristiges Fremdkapital muss anhand der verbleibenden Fälligkeit sauber abgegrenzt werden',
    'Die goldene Bilanzregel beschreibt grundsätzlich die Abstimmung von Kapital- und Vermögensfristen',
    'Pauschale Idealwerte ersetzen keine Analyse von Zahlungsströmen und Geschäftsmodell',
  ],
  commonMistakes: [
    'Eigenkapital, Fremdkapital und Anlagevermögen aus unterschiedlichen Stichtagen verwenden',
    'gesamtes Fremdkapital statt nur langfristigem Fremdkapital in Grad II einsetzen',
    'ursprüngliche Vertragslaufzeit statt verbleibender Fälligkeit betrachten',
    'Anlagevermögen mit Gesamtvermögen oder Bilanzsumme verwechseln',
    'Grad I und Grad II gleichsetzen',
    'einen Wert über 100 Prozent automatisch als optimal bewerten',
    'einen Wert unter 100 Prozent ohne Prüfung der Zahlungsströme als zwingend problematisch einstufen',
    'Anlagendeckung mit Rentabilität oder Liquidität gleichsetzen',
  ],
  faqs: [
    { question: 'Was ist der Anlagendeckungsgrad I?', answer: 'Er zeigt, welcher Anteil des Anlagevermögens rechnerisch durch Eigenkapital gedeckt ist.' },
    { question: 'Was ist der Anlagendeckungsgrad II?', answer: 'Er setzt Eigenkapital plus langfristiges Fremdkapital ins Verhältnis zum Anlagevermögen.' },
    { question: 'Was zählt als langfristiges Fremdkapital?', answer: 'Das hängt von der festgelegten Fristabgrenzung und den verbleibenden Fälligkeiten am Stichtag ab. Die Definition muss nachvollziehbar und bei Vergleichen einheitlich sein.' },
    { question: 'Was ist die goldene Bilanzregel?', answer: 'Sie beschreibt den Grundgedanken, langfristig gebundenes Vermögen mit langfristig verfügbarem Kapital zu finanzieren.' },
    { question: 'Muss der Anlagendeckungsgrad II immer über 100 Prozent liegen?', answer: 'Ein allgemeingültiger Idealwert lässt sich daraus nicht ableiten. Der Wert muss mit Laufzeiten, Zahlungsströmen, Geschäftsmodell und weiteren Kennzahlen beurteilt werden.' },
  ],
  related: ['anlage-umlaufvermoegen', 'eigenkapital-fremdkapital', 'eigenkapitalquote'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default anlagendeckungsgrad;
