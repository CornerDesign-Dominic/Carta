import { defaultDisclaimer } from '../shared.js';

const bezugskalkulation = {
  slug: 'bezugskalkulation',
  category: 'Supply Chain & Logistik',
  title: 'Bezugskalkulation',
  description: 'Bezugskalkulation einfach erklärt: Listeneinkaufspreis, Rabatt, Skonto, Bezugskosten und Bezugspreis mit vollständigem Zahlenbeispiel.',
  seo: {
    title: 'Bezugskalkulation einfach erklärt | Belege24',
    description: 'Erfahre, wie du aus Listenpreis, Rabatt, Skonto und Bezugskosten den Bezugspreis berechnest und Angebote richtig vergleichst.',
    canonicalPath: '/wissen/bezugskalkulation',
  },
  article: {
    intro: 'Die Bezugskalkulation ermittelt, was ein eingekauftes Gut bis zum Eintreffen im Unternehmen tatsächlich kostet. Sie berücksichtigt nicht nur den Listenpreis, sondern auch Rabatt, Skonto und zusätzliche Bezugskosten.',
    sections: [
      {
        heading: 'Wozu dient die Bezugskalkulation?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bezugskalkulation', text: 'Bezugskalkulation' },
            ' macht Angebote vergleichbar. Ein niedriger Listeneinkaufspreis kann durch geringeren Rabatt, fehlendes Skonto oder höhere Transportkosten weniger vorteilhaft sein als ein auf den ersten Blick teureres Angebot.',
          ],
          'Sie ist besonders hilfreich, wenn mehrere Lieferanten unterschiedliche Preis- und Lieferbedingungen anbieten. Die Kalkulation betrachtet den Preis des Guts bis zum Bezug; weitergehende Kosten wie Lagerung, Qualitätsfolgen oder Ausfallrisiken können für eine Entscheidung zusätzlich wichtig sein.',
        ],
      },
      {
        heading: 'Die Preisstufen der Bezugskalkulation',
        paragraphs: [
          [
            'Ausgangspunkt ist der ',
            { type: 'glossary', id: 'listeneinkaufspreis', text: 'Listeneinkaufspreis' },
            '. Davon wird zunächst der Liefererrabatt abgezogen. Das Ergebnis ist der ',
            { type: 'glossary', id: 'zieleinkaufspreis', text: 'Zieleinkaufspreis' },
            '.',
          ],
          [
            'Wird ein vereinbartes Liefererskonto fristgerecht genutzt, wird es vom Zieleinkaufspreis berechnet und abgezogen. Daraus entsteht der ',
            { type: 'glossary', id: 'bareinkaufspreis', text: 'Bareinkaufspreis' },
            '. Anschließend werden die Bezugskosten hinzugerechnet. Das Ergebnis ist der ',
            { type: 'glossary', id: 'bezugspreis', text: 'Bezugspreis (Einstandspreis)' },
            '.',
          ],
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Kalkulationsschema der Bezugskalkulation',
            formula: 'Listeneinkaufspreis\n− Liefererrabatt\n= Zieleinkaufspreis\n− Liefererskonto\n= Bareinkaufspreis\n+ Bezugskosten\n= Bezugspreis',
            description: 'Rabatt wird vom Listeneinkaufspreis berechnet. Skonto wird anschließend vom Zieleinkaufspreis berechnet, nicht erneut vom Listenpreis.',
          },
        ],
      },
      {
        heading: 'Vollständiges Zahlenbeispiel',
        paragraphs: [
          'Ein Lieferant nennt für eine Maschine einen Listeneinkaufspreis von 1.000 Euro. Er gewährt 20 Prozent Rabatt und bei fristgerechter Zahlung 2 Prozent Skonto. Für Transport und Verpackung fallen insgesamt 36 Euro Bezugskosten an.',
        ],
        exampleCards: [
          {
            title: 'Vom Listenpreis zum Bezugspreis',
            paragraphs: [
              'Schritt 1 – Rabatt: 20 Prozent von 1.000 Euro sind 200 Euro. Der Zieleinkaufspreis beträgt daher 1.000 Euro − 200 Euro = 800 Euro.',
              'Schritt 2 – Skonto: 2 Prozent werden vom Zieleinkaufspreis von 800 Euro berechnet. Das Skonto beträgt 16 Euro. Der Bareinkaufspreis liegt damit bei 800 Euro − 16 Euro = 784 Euro.',
              'Schritt 3 – Bezugskosten: 36 Euro werden hinzugerechnet. Der Bezugspreis beträgt 784 Euro + 36 Euro = 820 Euro.',
            ],
            effects: [
              'Listeneinkaufspreis: 1.000 Euro.',
              'Zieleinkaufspreis nach Rabatt: 800 Euro.',
              'Bareinkaufspreis nach Skonto: 784 Euro.',
              'Bezugspreis einschließlich Bezugskosten: 820 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Bezugskosten',
        paragraphs: [
          'Bezugskosten können zum Beispiel Fracht, Transportversicherung, Verpackung, Zölle, Vermittlungsprovisionen oder Kosten der Anlieferung umfassen. Ob eine Position in die Bezugskalkulation gehört, hängt davon ab, ob sie direkt durch den Bezug des konkreten Guts entsteht.',
          'Nicht jede denkbare Folgekostenposition gehört automatisch in diese Rechenkette. Lagerkosten, Ausschuss, Qualitätsprüfungen oder Finanzierungskosten können für einen umfassenden Angebotsvergleich relevant sein, werden aber häufig getrennt betrachtet.',
        ],
      },
      {
        heading: 'Warum Angebote nicht nur nach Listenpreis vergleichen?',
        paragraphs: [
          'Zwei Angebote können denselben Listenpreis haben, aber unterschiedliche Rabatte, Skontofristen, Transportkosten oder Mindestmengen. Der Bezugspreis zeigt diese Unterschiede klarer als ein reiner Blick auf die erste Preiszeile.',
          'Umgekehrt ist auch der niedrigere Bezugspreis nicht immer automatisch die beste Wahl. Lieferzeit, Qualität, Kapazität, Service und Abhängigkeit vom Lieferanten können zusätzliche Auswirkungen haben. Bei wichtigen Entscheidungen sollten diese Kriterien neben der Kalkulation bewertet werden.',
        ],
      },
      {
        heading: 'Zusammenhang mit operativem Einkauf',
        paragraphs: [
          [
            'Der ',
            { type: 'link', href: '/wissen/operativer-einkauf', text: 'operative Einkauf' },
            ' nutzt Angebote, Bestellinformationen und Lieferbedingungen im Tagesgeschäft. Die Bezugskalkulation hilft ihm, Preise und Bezugskosten nachvollziehbar gegenüberzustellen.',
          ],
          'Lieferantenauswahl und Skonto sind weiterführende Themen. Sie betreffen unter anderem die Auswahl geeigneter Bezugsquellen und die Bedingungen, unter denen ein Preisnachlass tatsächlich genutzt werden kann.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Skonto vom Listeneinkaufspreis statt vom Zieleinkaufspreis zu berechnen. Die Reihenfolge der Kalkulation muss eingehalten werden.',
          'Auch Bezugskosten werden manchmal vergessen oder pauschal auf alle Güter verteilt, obwohl sie nur ein bestimmtes Gut betreffen. Dadurch werden Angebote nicht vergleichbar.',
          'Nutze einen Skontoabzug nur, wenn die Zahlungsfrist und die Liquidität tatsächlich eine fristgerechte Zahlung ermöglichen. Ein rechnerisch möglicher Preisnachlass ist nicht automatisch verfügbar.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Bezugskalkulation ermittelt den Bezugspreis eines Guts bis zum Eintreffen im Unternehmen.',
    'Rabatt wird vom Listeneinkaufspreis abgezogen, Skonto anschließend vom Zieleinkaufspreis.',
    'Der Bezugspreis entsteht aus Bareinkaufspreis plus Bezugskosten.',
    'Transport, Verpackung, Versicherung oder Zölle können typische Bezugskosten sein.',
    'Angebote sollten nicht nur nach Listenpreis, sondern mindestens nach Bezugspreis verglichen werden.',
    'Qualität, Lieferzeit, Service und Risiken können zusätzlich zur Kalkulation entscheidend sein.',
  ],
  commonMistakes: [
    'Skonto vom Listeneinkaufspreis statt vom Zieleinkaufspreis berechnen',
    'Rabatt, Skonto oder Bezugskosten beim Angebotsvergleich übersehen',
    'Bezugskosten ohne Bezug zum konkreten Gut pauschal hinzurechnen',
    'einen Skontoabzug einplanen, obwohl die Zahlungsfrist nicht eingehalten werden kann',
    'den Bezugspreis mit einer vollständigen Bewertung von Qualität, Lieferzeit und Risiko verwechseln',
  ],
  faqs: [
    {
      question: 'Was ist Bezugskalkulation?',
      answer: 'Sie ermittelt aus Listenpreis, Rabatt, Skonto und Bezugskosten den tatsächlichen Bezugspreis eines eingekauften Guts.',
    },
    {
      question: 'Was ist der Zieleinkaufspreis?',
      answer: 'Der Zieleinkaufspreis ist der Listeneinkaufspreis nach Abzug des Liefererrabatts.',
    },
    {
      question: 'Wovon wird Skonto berechnet?',
      answer: 'Liefererskonto wird in der Bezugskalkulation vom Zieleinkaufspreis berechnet.',
    },
    {
      question: 'Was sind Bezugskosten?',
      answer: 'Das sind Kosten, die direkt durch den Bezug eines Guts entstehen können, etwa Fracht, Verpackung, Transportversicherung oder Zölle.',
    },
    {
      question: 'Warum reicht der Listenpreis nicht für den Angebotsvergleich?',
      answer: 'Rabatte, Skonto und Bezugskosten können den tatsächlichen Bezugspreis deutlich verändern. Auch Qualität, Lieferzeit und Risiko können zusätzlich wichtig sein.',
    },
  ],
  related: [
    'operativer-einkauf',
    'beschaffung',
    'strategischer-einkauf',
    'angebot',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bezugskalkulation;
