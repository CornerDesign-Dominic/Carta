import { defaultDisclaimer } from '../shared.js';

const makeOrBuy = {
  slug: 'make-or-buy',
  category: 'Supply Chain & Logistik',
  title: 'Make-or-Buy',
  description: 'Make-or-Buy einfach erklärt: Eigenfertigung und Fremdbezug nach Kosten, Kapazität, Qualität, Know-how, Flexibilität und Risiken entscheiden.',
  seo: {
    title: 'Make-or-Buy einfach erklärt | Belege24',
    description: 'Verstehe die Entscheidung zwischen Eigenfertigung und Fremdbezug und welche Kosten, qualitativen und strategischen Kriterien dabei zählen.',
    canonicalPath: '/wissen/make-or-buy',
  },
  article: {
    intro: 'Make-or-Buy beantwortet die Frage, ob ein Unternehmen eine Leistung selbst erstellen oder extern beziehen soll. Eine gute Entscheidung vergleicht nicht nur Kosten, sondern auch Kapazität, Qualität, Know-how, Flexibilität und Abhängigkeiten.',
    sections: [
      {
        heading: 'Was bedeutet Make-or-Buy?',
        paragraphs: [
          [
            'Bei ',
            { type: 'glossary', id: 'make-or-buy', text: 'Make-or-Buy' },
            ' wird zwischen Eigenfertigung („Make“) und Fremdbezug („Buy“) entschieden. Die Frage kann sich auf ein Bauteil, ein Produkt, eine Dienstleistung, eine IT-Leistung oder einen ganzen Prozess beziehen.',
          ],
          'Eigenfertigung bedeutet, die Leistung mit eigenen Mitarbeitenden, Anlagen und Prozessen zu erstellen. Fremdbezug bedeutet, sie von einem Lieferanten oder Dienstleister einzukaufen. Beide Alternativen können je nach Situation sinnvoll sein.',
        ],
      },
      {
        heading: 'Kosten vergleichen – aber vergleichbar',
        paragraphs: [
          'Eine Kostenbetrachtung beginnt mit derselben Leistung und einem einheitlichen Zeitraum. Bei Eigenfertigung können etwa Material, Personal, Energie, Wartung, Ausschuss, Rüstzeiten und tatsächlich vermeidbare Fixkosten relevant sein. Beim Fremdbezug gehören neben dem Preis zum Beispiel Transport, Prüfung, Lagerung, Abstimmung und mögliche Folgekosten dazu.',
          'Nicht jede intern vorhandene Kostenposition verändert sich sofort, wenn weniger selbst gefertigt wird. Deshalb sollte unterschieden werden, welche Kosten kurzfristig tatsächlich wegfallen und welche Kapazitäten oder Fixkosten bestehen bleiben.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Vereinfachter Kostenvergleich',
            formula: 'Eigenfertigung = vermeidbare Fixkosten + variable Eigenkosten × Menge\nFremdbezug = Bezugspreis × Menge + Bezugskosten',
            description: 'Die Formel zeigt nur eine vergleichbare Kostensicht. Qualität, Kapazität, Risiken und strategische Auswirkungen müssen zusätzlich bewertet werden.',
          },
        ],
      },
      {
        heading: 'Beispiel: rechnerisch günstiger, aber nicht automatisch besser',
        paragraphs: [
          'Ein Unternehmen benötigt 4.000 Teile pro Jahr. Die vermeidbaren Fixkosten der Eigenfertigung betragen 20.000 Euro, die variablen Eigenkosten 18 Euro je Teil. Ein Lieferant bietet 23 Euro je Teil an; zusätzliche Bezugskosten liegen bei 2 Euro je Teil.',
        ],
        exampleCards: [
          {
            title: 'Kosten der zwei Alternativen vergleichen',
            paragraphs: [
              'Eigenfertigung: 20.000 Euro + 18 Euro × 4.000 Teile = 92.000 Euro.',
              'Fremdbezug: 23 Euro × 4.000 Teile + 2 Euro × 4.000 Teile = 100.000 Euro.',
              'Nach dieser vereinfachten Rechnung ist die Eigenfertigung um 8.000 Euro günstiger. Die Entscheidung ist trotzdem offen: Reichen Maschinen und Fachkräfte aus? Ist die Qualität intern sicher beherrschbar? Welche Folgen hätte eine Abhängigkeit vom Lieferanten oder der Verlust eigenen Know-hows?',
            ],
            effects: [
              'Kosten: Eigenfertigung ist unter diesen Annahmen günstiger.',
              'Entscheidung: Kapazität, Qualität, Risiko und strategische Bedeutung können das Ergebnis verändern.',
            ],
          },
        ],
      },
      {
        heading: 'Kapazität, Qualität und Know-how',
        paragraphs: [
          'Verfügbare Kapazitäten sind ein zentraler Punkt. Wenn Maschinen oder Teams bereits ausgelastet sind, kann Eigenfertigung andere Aufträge verzögern oder zusätzliche Investitionen erfordern. Freie Kapazität kann umgekehrt dafür sprechen, vorhandene Fähigkeiten sinnvoll zu nutzen.',
          'Qualität hängt nicht nur an der Spezifikation, sondern auch an Prozessen, Erfahrung, Prüfmethoden und Reaktionsfähigkeit bei Abweichungen. Ein externer Spezialist kann bessere Qualität liefern; in anderen Fällen ist die eigene Prozessbeherrschung ein wichtiger Vorteil.',
          'Know-how kann strategisch relevant sein. Wird eine Kernkompetenz vollständig ausgelagert, kann das Unternehmen langfristig Wissen, Entwicklungsmöglichkeiten oder Verhandlungsmacht verlieren. Nicht jede Leistung ist jedoch eine Kernkompetenz, die intern gehalten werden muss.',
        ],
      },
      {
        heading: 'Abhängigkeit, Flexibilität und Versorgungssicherheit',
        paragraphs: [
          'Fremdbezug kann Flexibilität schaffen, wenn Mengen schwanken oder Spezialwissen nur gelegentlich gebraucht wird. Gleichzeitig kann eine starke Abhängigkeit entstehen, wenn es wenige geeignete Lieferanten, lange Wechselzeiten oder schwer ersetzbares Wissen gibt.',
          'Eigenfertigung verringert nicht automatisch jedes Risiko. Sie kann ebenfalls von einzelnen Maschinen, Fachkräften, Materialien oder Energie abhängen. Entscheidend ist, welche Risiken unter beiden Alternativen bestehen und wie gut das Unternehmen darauf reagieren kann.',
        ],
      },
      {
        heading: 'Kurzfristige und langfristige Entscheidung unterscheiden',
        paragraphs: [
          'Kurzfristig steht oft die Frage im Vordergrund, wie eine vorhandene Kapazität genutzt oder ein Engpass überbrückt wird. Dabei sind vor allem vermeidbare Kosten, Liefertermine und aktuell verfügbare Ressourcen wichtig.',
          'Langfristig können Investitionen, Kompetenzaufbau, Lieferantenstruktur, Innovation und Marktposition entscheidend werden. Ein kurzfristig günstiger Fremdbezug kann langfristig unpassend sein, wenn er eine strategisch wichtige Fähigkeit schwächt. Ebenso kann externe Spezialisierung langfristig sinnvoll sein, wenn sie bessere Qualität und Skalierung ermöglicht.',
        ],
      },
      {
        heading: 'Qualitative und quantitative Kriterien gemeinsam bewerten',
        paragraphs: [
          [
            'Kosten, Mengen und Lieferzeiten sind quantitative Kriterien. Qualität, Schutz von Know-how, Innovationsfähigkeit, Steuerbarkeit oder die Folgen einer Abhängigkeit sind häufig qualitative Kriterien. Die ',
            { type: 'link', href: '/wissen/nutzwertanalyse', text: 'Nutzwertanalyse' },
            ' kann helfen, mehrere Kriterien transparent zu gewichten und Alternativen nachvollziehbar zu vergleichen.',
          ],
          [
            'Für eine vertiefte Kostensicht eignet sich die ',
            { type: 'link', href: '/wissen/kostenvergleichsrechnung', text: 'Kostenvergleichsrechnung' },
            '. Sie ersetzt jedoch keine Beurteilung der strategischen und qualitativen Faktoren.',
          ],
        ],
      },
      {
        heading: 'Zusammenhang mit Beschaffung und strategischem Einkauf',
        paragraphs: [
          [
            'Die Seite ',
            { type: 'link', href: '/wissen/beschaffung', text: 'Beschaffung' },
            ' erklärt den Weg vom Bedarf bis zur Lieferung. Make-or-Buy entscheidet dabei grundsätzlicher, ob eine Leistung intern entsteht oder über eine Bezugsquelle beschafft werden soll.',
          ],
          [
            'Der ',
            { type: 'link', href: '/wissen/strategischer-einkauf', text: 'strategische Einkauf' },
            ' betrachtet die langfristige Lieferanten-, Markt- und Risikoperspektive dieser Entscheidung.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, nur den internen Vollkostenpreis mit dem Angebotspreis zu vergleichen. Relevant sind die Kosten, die sich durch die Entscheidung tatsächlich verändern, sowie alle notwendigen Bezugskosten.',
          'Ebenso problematisch ist es, Qualität, Kapazität, Know-how oder Abhängigkeiten erst nach der Kostenrechnung zu betrachten. Diese Kriterien können die wirtschaftlich sinnvollere Alternative verändern.',
          'Eine Entscheidung sollte nicht dauerhaft unverändert bleiben. Mengen, Kosten, Technologien, Lieferfähigkeit und eigene Fähigkeiten können sich ändern und eine erneute Prüfung sinnvoll machen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Make-or-Buy vergleicht Eigenfertigung und Fremdbezug einer Leistung.',
    'Kosten müssen für dieselbe Leistung und mit tatsächlich beeinflussbaren Positionen verglichen werden.',
    'Kapazität, Qualität, Know-how, Flexibilität und Lieferantenabhängigkeit sind gleichwertige Entscheidungsfaktoren.',
    'Kurzfristige Engpassentscheidungen und langfristige Kompetenz- oder Investitionsfragen unterscheiden sich.',
    'Kostenvergleichsrechnung und Nutzwertanalyse können die Entscheidung strukturieren, aber nicht automatisieren.',
    'Make-or-Buy sollte regelmäßig überprüft werden, wenn sich Rahmenbedingungen verändern.',
  ],
  commonMistakes: [
    'internen Vollkostenpreis und Angebotspreis ohne vergleichbare Kostenbasis gegenüberstellen',
    'nur die Kosten und nicht Kapazität, Qualität, Know-how oder Risiko bewerten',
    'freie Kapazität mit dauerhaft wirtschaftlicher Eigenfertigung gleichsetzen',
    'Lieferantenabhängigkeit oder Wechselkosten bei Fremdbezug unterschätzen',
    'kurzfristige Notlösungen ohne erneute langfristige Prüfung fortschreiben',
  ],
  faqs: [
    {
      question: 'Was bedeutet Make-or-Buy?',
      answer: 'Es ist die Entscheidung, ob ein Unternehmen eine Leistung selbst erstellt oder von einem externen Anbieter bezieht.',
    },
    {
      question: 'Ist die günstigere Alternative automatisch die richtige?',
      answer: 'Nein. Qualität, Kapazität, Know-how, Flexibilität, Versorgungssicherheit und Abhängigkeiten können die Entscheidung wesentlich beeinflussen.',
    },
    {
      question: 'Welche Kosten sind bei Make-or-Buy relevant?',
      answer: 'Relevant sind die Kosten, die sich durch die Entscheidung tatsächlich verändern, sowie zum Beispiel Material, Personal, Transport, Prüfung, Lagerung und weitere Bezugskosten.',
    },
    {
      question: 'Wann kann Fremdbezug sinnvoll sein?',
      answer: 'Etwa wenn externe Spezialisten bessere Fähigkeiten oder Skalierung bieten, eigene Kapazitäten fehlen oder eine Leistung nicht zur strategischen Kernkompetenz gehört.',
    },
    {
      question: 'Wann kann Eigenfertigung sinnvoll sein?',
      answer: 'Zum Beispiel bei wichtiger Qualität oder Know-how, ausreichender Kapazität, hohen Abhängigkeiten beim Fremdbezug oder wenn die Leistung strategisch besonders relevant ist.',
    },
  ],
  related: [
    'kostenvergleichsrechnung',
    'nutzwertanalyse',
    'strategischer-einkauf',
    'beschaffung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default makeOrBuy;
