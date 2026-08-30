import { defaultDisclaimer } from '../shared.js';

const lieferantenportfolio = {
  slug: 'lieferantenportfolio',
  category: 'Supply Chain & Logistik',
  title: 'Lieferantenportfolio',
  description: 'Lieferantenportfolio einfach erklärt: Lieferanten nach Bedeutung, Risiko und Leistungsfähigkeit segmentieren und passende Strategien ableiten.',
  seo: {
    title: 'Lieferantenportfolio einfach erklärt | Belege24',
    description: 'Erfahre, wie Unternehmen Lieferanten nach Beschaffungsvolumen, strategischer Bedeutung, Risiko und Leistungsfähigkeit segmentieren und daraus Maßnahmen ableiten.',
    canonicalPath: '/wissen/lieferantenportfolio',
  },
  article: {
    intro: 'Ein Lieferantenportfolio ordnet bestehende oder potenzielle Lieferanten in übersichtliche Gruppen ein. Es hilft, Lieferbeziehungen nicht alle gleich zu behandeln, sondern Aufwand, Zusammenarbeit und Absicherung an ihrer Bedeutung und ihrem Risiko auszurichten.',
    sections: [
      {
        heading: 'Was ist ein Lieferantenportfolio?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'lieferantenportfolio', text: 'Lieferantenportfolio' },
            ' ist eine strukturierte Übersicht über Lieferanten oder Lieferbeziehungen. Dafür werden sie anhand ausgewählter Dimensionen, beispielsweise Beschaffungsvolumen, strategischer Bedeutung, Risiko oder Leistungsfähigkeit, in einer Matrix positioniert.',
          ],
          'Die Einordnung soll Unterschiede sichtbar machen: Ein Lieferant für ein leicht ersetzbares Standardmaterial braucht meist eine andere Betreuung als ein Partner für ein kritisches Bauteil. Eine Matrix ist dabei ein Hilfsmittel für Gespräche und Prioritäten, keine automatische Entscheidung.',
        ],
      },
      {
        heading: 'Zweck der Segmentierung',
        paragraphs: [
          'Segmentierung hilft, knappe Zeit und Aufmerksamkeit gezielt einzusetzen. Bei strategisch wichtigen oder risikoreichen Lieferbeziehungen können engere Abstimmung, Entwicklung, Notfallplanung oder zusätzliche Bezugsquellen sinnvoll sein. Bei wenig kritischen Standardlieferungen stehen dagegen häufig effiziente Prozesse und verlässliche Konditionen im Vordergrund.',
          'Welche Dimensionen geeignet sind, richtet sich nach der Fragestellung. Beschaffungsvolumen zeigt etwa die wirtschaftliche Relevanz, strategische Bedeutung die Wirkung auf Produkte oder Kunden, Risiko die mögliche Störung der Versorgung und Leistungsfähigkeit die Fähigkeit des Lieferanten, Anforderungen dauerhaft zu erfüllen.',
          'Die Dimensionen müssen für alle verglichenen Lieferanten verständlich definiert sein. Werden beispielsweise Risiken bewertet, sollte klar sein, ob damit Lieferfähigkeit, Wechselmöglichkeiten, Standort, Vorlieferanten oder mehrere dieser Aspekte gemeint sind.',
        ],
      },
      {
        heading: 'Eine mögliche 2x2-Matrix',
        paragraphs: [
          'Es gibt nicht die eine richtige Lieferantenportfolio-Matrix. Manche Unternehmen kombinieren Beschaffungsvolumen und Risiko, andere strategische Bedeutung und Leistungsfähigkeit. Die folgende Matrix ist nur ein einfaches Beispiel mit den Achsen strategische Bedeutung und Versorgungsrisiko.',
        ],
        matrixCards: [
          {
            title: 'Beispiel: strategische Bedeutung und Versorgungsrisiko',
            cells: [
              { code: 'I', title: 'Bedeutung hoch · Risiko hoch', context: 'strategisch absichern', text: 'Kritische Lieferbeziehungen brauchen meist enge Zusammenarbeit, transparente Informationen, Entwicklungsmaßnahmen und geprüfte Handlungsoptionen für Störungen.' },
              { code: 'II', title: 'Bedeutung hoch · Risiko niedrig', context: 'Leistung sichern und entwickeln', text: 'Die Beziehung ist wichtig, die Versorgung aber derzeit stabil. Leistungsfähigkeit, gemeinsame Planung und langfristige Zusammenarbeit können im Vordergrund stehen.' },
              { code: 'III', title: 'Bedeutung niedrig · Risiko hoch', context: 'Risiko gezielt reduzieren', text: 'Auch bei geringem Volumen kann eine Unterbrechung schwer ersetzbar sein. Spezifikation, Alternativen, Bestände oder Bezugsquellen sollten geprüft werden.' },
              { code: 'IV', title: 'Bedeutung niedrig · Risiko niedrig', context: 'effizient steuern', text: 'Für gut verfügbare Standardleistungen können einfache, wirtschaftliche Prozesse und ein angemessener Betreuungsaufwand passend sein.' },
            ],
          },
        ],
      },
      {
        heading: 'Typische Lieferantengruppen und Strategien',
        paragraphs: [
          'Strategisch wichtige, risikoreiche Lieferanten werden häufig enger eingebunden. Mögliche Strategien sind gemeinsame Planung, klare Eskalationswege, Kapazitätsabstimmung, Qualifizierung zusätzlicher Quellen oder eine gezielte Entwicklung der Zusammenarbeit.',
          'Bei wichtigen, aber stabil verfügbaren Leistungen kann es sinnvoll sein, Qualität, Innovation, Termine und langfristige Leistungsfähigkeit gemeinsam weiterzuentwickeln. Das bedeutet nicht, dass ein Lieferant automatisch bevorzugt wird; Abhängigkeit und Wechselmöglichkeiten bleiben zu prüfen.',
          'Risikoreiche Lieferbeziehungen mit geringerem Volumen können besonders leicht übersehen werden. Auch ein kleines Spezialteil kann eine Produktion oder Dienstleistung blockieren. Hier steht meist die Verringerung der Verwundbarkeit im Vordergrund, nicht die größtmögliche Verhandlung über den Preis.',
          'Unkritische Standardlieferungen lassen sich oft stärker standardisieren. Das kann die Bestellung und Administration vereinfachen. Qualität, Mindestanforderungen und Veränderungen im Markt müssen trotzdem beobachtet werden.',
        ],
      },
      {
        heading: 'Datenbasis und regelmäßige Überprüfung',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/lieferantenbewertung', text: 'Lieferantenbewertung' },
            ' liefert wichtige Informationen für ein Portfolio, etwa zur Qualität, Liefertreue, Kommunikation und Leistungsfähigkeit. Marktveränderungen, Volumenverschiebungen oder neue Risiken können die Position eines Lieferanten aber ebenfalls verändern.',
          ],
          'Deshalb sollte ein Lieferantenportfolio regelmäßig aktualisiert werden. Die passende Häufigkeit hängt von Branche, Beschaffungsvolumen, Kritikalität und Veränderungstempo ab. Bei einer Störung oder einem starken Nachfragewechsel kann eine außerplanmäßige Überprüfung sinnvoll sein.',
        ],
      },
      {
        heading: 'Zusammenhang mit Entwicklung und Sourcing',
        paragraphs: [
          [
            'Zeigt das Portfolio bei einer wichtigen Beziehung Verbesserungsbedarf, kann ',
            { type: 'link', href: '/wissen/lieferantenentwicklung', text: 'Lieferantenentwicklung' },
            ' ein geeigneter nächster Schritt sein. Sie konzentriert sich darauf, Leistung, Prozesse oder Zusammenarbeit mit bestehenden Lieferanten gezielt zu verbessern.',
          ],
          [
            'Für die Frage, wie viele und welche Bezugsquellen ein Unternehmen grundsätzlich nutzen möchte, bieten ',
            { type: 'link', href: '/wissen/beschaffungsprinzipien', text: 'Beschaffungsprinzipien und Sourcing-Strategien' },
            ' die passende Einordnung. Ein Portfolio kann Hinweise für diese Entscheidungen geben, ersetzt aber nicht die Prüfung von Kosten, Kapazitäten und tatsächlicher Unabhängigkeit.',
          ],
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Kleines Teil mit großer Wirkung',
            paragraphs: [
              'Ein Hersteller kauft ein spezielles Dichtungsteil mit geringem jährlichem Einkaufsvolumen. Es ist nur von wenigen Anbietern verfügbar, und ohne das Teil kann das Endprodukt nicht ausgeliefert werden.',
              'Im Portfolio liegt der Lieferant deshalb trotz geringem Volumen im Feld „Bedeutung niedrig · Risiko hoch“. Das Unternehmen prüft technische Alternativen, mögliche Zweitquellen und eine passende Abstimmung über Lieferfähigkeit.',
            ],
            effects: [
              'Erkenntnis: Geringes Einkaufsvolumen bedeutet nicht automatisch geringe Bedeutung für die Versorgung.',
              'Mögliche Strategie: Risiko verringern, statt die Beziehung ausschließlich über den Preis zu steuern.',
            ],
          },
        ],
      },
      {
        heading: 'Vorteile und Grenzen',
        paragraphs: [
          'Ein Lieferantenportfolio schafft Übersicht und hilft, unterschiedliche Lieferbeziehungen nachvollziehbar zu priorisieren. Es verbindet Daten und Einschätzungen zu einem gemeinsamen Bild und kann Gespräche zwischen Einkauf, Fachbereichen und Management strukturieren.',
          'Gleichzeitig vereinfacht jede Matrix die Wirklichkeit. Die Wahl der Achsen, Bewertungsskalen und Grenzwerte beeinflusst die Einordnung. Gemeinsame Vorlieferanten, Vertragsdetails oder technische Abhängigkeiten passen nicht immer in zwei Dimensionen und müssen zusätzlich geprüft werden.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Beschaffungsvolumen mit strategischer Bedeutung gleichzusetzen. Ein kostengünstiges oder selten benötigtes Teil kann bei Ausfall trotzdem große Folgen haben.',
          'Auch eine einmal erstellte Matrix verliert schnell an Aussagekraft, wenn Volumen, Lieferfähigkeit oder Märkte sich verändern. Kriterien, Datenquellen und Aktualisierungszeitpunkt sollten deshalb dokumentiert werden.',
          'Aus einem Matrixfeld folgt keine automatische Maßnahme. Vor einer Entscheidung sind konkrete Anforderungen, Kosten, Alternativen, Verträge und Risiken der einzelnen Lieferbeziehung zu prüfen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein Lieferantenportfolio segmentiert Lieferanten oder Lieferbeziehungen anhand passender Dimensionen.',
    'Typische Dimensionen sind Beschaffungsvolumen, strategische Bedeutung, Risiko und Leistungsfähigkeit.',
    'Eine 2x2-Matrix ist ein Hilfsmittel; die geeigneten Achsen hängen von der konkreten Fragestellung ab.',
    'Unterschiedliche Lieferantengruppen können unterschiedliche Strategien für Zusammenarbeit, Absicherung und Steuerung erfordern.',
    'Lieferantenbewertung liefert wichtige Daten, während Markt- und Risikoveränderungen die Position mitbestimmen.',
    'Ein Portfolio schafft Orientierung, ersetzt aber keine Prüfung der einzelnen Lieferbeziehung.',
  ],
  commonMistakes: [
    'Beschaffungsvolumen automatisch mit strategischer Bedeutung gleichsetzen',
    'eine vorgegebene Matrix als einzig richtiges Modell behandeln',
    'Achsen, Skalen und Datenquellen nicht eindeutig definieren',
    'die Einordnung trotz veränderter Mengen, Märkte oder Risiken nicht aktualisieren',
    'aus einem Matrixfeld automatisch eine Maßnahme ableiten',
  ],
  faqs: [
    {
      question: 'Was ist ein Lieferantenportfolio?',
      answer: 'Es ist eine Übersicht, die Lieferanten oder Lieferbeziehungen anhand ausgewählter Dimensionen wie Bedeutung, Risiko oder Leistungsfähigkeit segmentiert.',
    },
    {
      question: 'Welche Dimensionen eignen sich für ein Lieferantenportfolio?',
      answer: 'Das hängt vom Ziel ab. Häufig werden Beschaffungsvolumen, strategische Bedeutung, Versorgungsrisiko und Leistungsfähigkeit verwendet.',
    },
    {
      question: 'Gibt es eine feste Lieferantenportfolio-Matrix?',
      answer: 'Nein. Die Achsen und Lieferantengruppen sollten zur eigenen Beschaffungssituation und den Entscheidungen passen, die vorbereitet werden sollen.',
    },
    {
      question: 'Warum kann ein Lieferant mit geringem Volumen wichtig sein?',
      answer: 'Ein kleines, schwer ersetzbares Teil kann bei Ausfall die Produktion oder Leistungserbringung blockieren. Volumen und Versorgungsrisiko sind daher getrennt zu betrachten.',
    },
    {
      question: 'Wie hängt ein Portfolio mit der Lieferantenbewertung zusammen?',
      answer: 'Die Lieferantenbewertung liefert Daten zur tatsächlichen Leistung. Das Portfolio nutzt diese Daten zusammen mit Bedeutung und Risiko, um Lieferbeziehungen zu segmentieren.',
    },
  ],
  related: [
    'lieferantenbewertung',
    'lieferantenentwicklung',
    'beschaffungsprinzipien',
    'lieferantenauswahl',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lieferantenportfolio;
