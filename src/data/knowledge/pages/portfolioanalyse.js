import { defaultDisclaimer } from '../shared.js';

const portfolioanalyse = {
  slug: 'portfolioanalyse',
  category: 'Unternehmensführung',
  title: 'Portfolioanalyse',
  description: 'Produkte, Geschäftsfelder, Märkte, Kunden oder Lieferanten mit einer Portfolioanalyse gemeinsam bewerten und strategische Maßnahmen ableiten.',
  seo: {
    title: 'Portfolioanalyse einfach erklärt | Belege24',
    description: 'Portfolioanalysen praxisnah verstehen: Dimensionen auswählen, Objekte in einer Matrix positionieren und Grenzen richtig einordnen.',
    canonicalPath: '/wissen/portfolioanalyse',
  },
  article: {
    intro: 'Eine Portfolioanalyse betrachtet mehrere Produkte, Geschäftsfelder, Märkte, Kunden oder Lieferanten gemeinsam. Sie ordnet die Objekte anhand ausgewählter Bewertungsdimensionen und macht Unterschiede, Abhängigkeiten sowie mögliche Schwerpunkte sichtbar. Die Matrix unterstützt strategische Entscheidungen, ersetzt aber keine detaillierte Einzelanalyse.',
    sections: [
      {
        heading: 'Was ist eine Portfolioanalyse?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'portfolioanalyse', text: 'Portfolioanalyse' },
            ' ist ein Verfahren, mit dem mehrere vergleichbare Objekte in einer gemeinsamen Übersicht bewertet werden. Statt jedes Produkt oder Geschäftsfeld isoliert zu betrachten, untersucht sie deren relative Position und Bedeutung innerhalb des gesamten Portfolios.',
          ],
          'Unternehmen können so erkennen, wo sich Chancen, Risiken oder Abhängigkeiten bündeln und wie knappe Mittel verteilt sind. Das ist besonders wichtig, wenn erfolgreiche Bereiche andere Vorhaben finanzieren, dieselben Kapazitäten beanspruchen oder gemeinsam zur strategischen Ausrichtung beitragen.',
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Von den Objekten zu strategischen Optionen',
            formula: 'Objekte festlegen → Dimensionen bewerten → positionieren → Portfolio vergleichen → Maßnahmen prüfen',
            description: 'Die Aussagekraft hängt davon ab, ob Objekte, Dimensionen, Datenbasis und Bewertungsregeln zur konkreten Entscheidung passen.',
          },
        ],
      },
      {
        heading: 'Warum mehrere Objekte gemeinsam betrachten?',
        paragraphs: [
          'Ein einzelnes Produkt kann wirtschaftlich attraktiv wirken, aber einen unverhältnismäßig großen Teil des Entwicklungsbudgets beanspruchen. Ein kleiner Kundenbereich kann wenig Umsatz erzeugen und zugleich Zugang zu einem strategisch wichtigen Markt schaffen. Solche Zusammenhänge werden erst im Vergleich mit anderen Portfolioelementen sichtbar.',
          'Die gemeinsame Betrachtung unterstützt Fragen nach Ausgewogenheit, Konzentration und Ressourceneinsatz. Sie kann beispielsweise zeigen, ob ein Unternehmen stark von wenigen Produkten abhängig ist, nur in stagnierenden Märkten tätig ist oder bei mehreren Lieferanten demselben Ausfallrisiko ausgesetzt bleibt.',
        ],
      },
      {
        heading: 'Bewertungsdimensionen auswählen',
        paragraphs: [
          'Eine Portfolioanalyse verwendet mindestens zwei Dimensionen. Je nach Fragestellung können dies Marktattraktivität und eigene Wettbewerbsstärke, wirtschaftlicher Beitrag und Entwicklungspotenzial oder Beschaffungsrisiko und Einkaufsvolumen sein. Komplexere Modelle ergänzen weitere Kriterien oder bilden sie zu Sammelwerten zusammen.',
          'Jede Dimension muss verständlich definiert und auf einer einheitlichen Skala bewertet werden. Werden mehrere Kriterien zu einer Dimension zusammengefasst, sollten Gewichtung, Datenquelle und Berechnung dokumentiert werden. Andernfalls ist die Position eines Objekts kaum nachvollziehbar.',
        ],
        matrixCards: [
          {
            title: 'Allgemeine Portfolio-Matrix',
            cells: [
              { code: 'I', title: 'Potenzial hoch · Beitrag stark', context: 'ausbauen oder absichern prüfen', text: 'Objekte können besondere Entwicklungschancen bieten und bereits gut zum betrachteten Ziel beitragen. Investitionsbedarf und Risiken bleiben gesondert zu prüfen.' },
              { code: 'II', title: 'Potenzial hoch · Beitrag schwach', context: 'selektiv entwickeln prüfen', text: 'Es besteht Entwicklungspotenzial, die heutige Position ist aber begrenzt. Ursachen, notwendige Fähigkeiten und realistischer Ressourceneinsatz entscheiden über weitere Schritte.' },
              { code: 'III', title: 'Potenzial niedrig · Beitrag stark', context: 'Position nutzen oder sichern prüfen', text: 'Ein starker gegenwärtiger Beitrag trifft auf begrenztes Entwicklungspotenzial. Erhaltungsaufwand, Zukunftsrisiken und mögliche Mittelverwendung sind abzuwägen.' },
              { code: 'IV', title: 'Potenzial niedrig · Beitrag schwach', context: 'neu ausrichten oder reduzieren prüfen', text: 'Eine schwache Position und geringe Perspektive können für Neupositionierung, Kooperation oder Rückzug sprechen. Verbundwirkungen dürfen nicht übersehen werden.' },
            ],
          },
        ],
      },
      {
        heading: 'Objekte in der Matrix positionieren',
        paragraphs: [
          'Für jedes Objekt werden die Werte der gewählten Dimensionen ermittelt und als Punkt oder Kreis in der Matrix eingetragen. Größe oder Farbe des Symbols können zusätzliche Informationen wie Umsatz, Ergebnisbeitrag, Risiko oder benötigte Ressourcen zeigen.',
          'Die grafische Position sollte aus dokumentierten Daten oder Bewertungsregeln entstehen und nicht nur aus einem Bauchgefühl. Bei unsicheren Werten können Bandbreiten oder mehrere Szenarien ehrlicher sein als ein scheinbar exakter Punkt.',
        ],
      },
      {
        heading: 'Typische Portfolioarten',
        paragraphs: ['Die Methode lässt sich auf unterschiedliche Objekte übertragen. Entscheidend ist, dass die Dimensionen zur jeweiligen Fragestellung passen.'],
        subsections: [
          {
            heading: 'Produktportfolio',
            paragraphs: [[
              'Ein ',
              { type: 'glossary', id: 'produktportfolio', text: 'Produktportfolio' },
              ' vergleicht Produkte oder Produktgruppen, beispielsweise nach wirtschaftlichem Beitrag und Entwicklungspotenzial. Es unterstützt Entscheidungen über Weiterentwicklung, Pflege, Bündelung oder Auslaufen von Angeboten.',
            ]],
          },
          {
            heading: 'Marktportfolio',
            paragraphs: ['Ein Marktportfolio stellt Regionen, Kundensegmente oder Anwendungsfelder gegenüber. Mögliche Dimensionen sind Marktattraktivität, Eintrittsbarrieren und die eigene Position. Es kann Schwerpunkte für Marktbearbeitung oder Markteintritt sichtbar machen.'],
          },
          {
            heading: 'Kundenportfolio',
            paragraphs: ['Ein Kundenportfolio kann aktuellen Ergebnisbeitrag, Entwicklungspotenzial, Betreuungsaufwand oder Risiko verbinden. Umsatz allein genügt nicht, weil hohe Erlöse mit hohen Kosten, langen Zahlungszielen oder starker Abhängigkeit verbunden sein können.'],
          },
          {
            heading: 'Lieferantenportfolio',
            paragraphs: ['Ein Lieferantenportfolio betrachtet etwa Einkaufsvolumen, Beschaffungsrisiko, Leistungsfähigkeit oder strategische Bedeutung. Daraus können unterschiedliche Formen der Zusammenarbeit, Absicherung oder Suche nach Alternativen geprüft werden.'],
          },
        ],
      },
      {
        heading: 'Praxisbeispiel: Produktportfolio einer kleinen Rösterei',
        paragraphs: ['Eine Rösterei bewertet vier Produktlinien nach Entwicklungspotenzial des Segments und eigenem wirtschaftlichem Beitrag. Beide Dimensionen werden anhand festgelegter Daten und Kriterien auf einer fünfstufigen Skala beurteilt.'],
        exampleCards: [
          {
            title: 'Vier Produktlinien gemeinsam betrachten',
            paragraphs: ['Abo-Kaffee erreicht bei Potenzial 5 und Beitrag 4 Punkte. Bürokaffee erhält 4 und 2 Punkte, die klassische Hausmischung 2 und 5 Punkte, Geschenksets 2 und 2 Punkte. Die Einordnung eröffnet eine Diskussion über Ressourcen, ist aber noch keine fertige Entscheidung.'],
            effects: [
              'Abo-Kaffee: Wachstumskapazität, Kundenbindung und Service absichern',
              'Bürokaffee: prüfen, ob Vertrieb und Logistik wirtschaftlich ausgebaut werden können',
              'Hausmischung: starken Beitrag pflegen und Veränderungen der Nachfrage beobachten',
              'Geschenksets: Saisonwirkung, Verbundkäufe und Alternativen vor einer Reduzierung untersuchen',
              'Gesamtportfolio: Abhängigkeiten, benötigte Investitionen und verfügbare Kapazität gemeinsam abgleichen',
            ],
          },
        ],
      },
      {
        heading: 'BCG-Matrix als eine mögliche Ausprägung',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/bcg-matrix', text: 'BCG-Matrix' },
            ' ist ein bekanntes Produktportfolio. Sie verwendet relatives Marktwachstum und relativen Marktanteil und ordnet die Objekte in Question Marks, Stars, Cash Cows und Poor Dogs ein.',
          ],
          'Portfolioanalyse und BCG-Matrix sind nicht gleichzusetzen. Die BCG-Matrix ist nur eine konkrete Methode mit festgelegten Achsen und einer eigenen Modelllogik. Andere Portfolioanalysen wählen andere Objekte, Dimensionen und Bewertungsverfahren.',
        ],
      },
      {
        heading: 'Marktattraktivitäts- und Wettbewerbsstärke-Portfolios',
        paragraphs: [
          'Mehrdimensionale Modelle fassen häufig mehrere Kriterien zu Marktattraktivität und Wettbewerbsstärke zusammen. Marktattraktivität kann beispielsweise Wachstum, Größe, Margenpotenzial und Risiken berücksichtigen. Wettbewerbsstärke kann Marktposition, Fähigkeiten, Kostenstruktur oder Kundenbindung verbinden.',
          'Solche Portfolios bilden mehr Faktoren ab als eine einfache Zweikriterien-Matrix, erhöhen aber den Bewertungsaufwand und den subjektiven Spielraum. Gewichtungen, Skalen und Datenquellen müssen deshalb besonders transparent sein.',
        ],
      },
      {
        heading: 'Strategische Maßnahmen ableiten',
        paragraphs: [
          [
            'Aus einer Position können Optionen wie investieren, selektiv entwickeln, absichern, neu positionieren, kooperieren oder zurückziehen entstehen. Welche Option zur ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' passt, hängt zusätzlich von Zielen, Ressourcen, Finanzierung, Risiken und Wechselwirkungen mit anderen Objekten ab.',
          ],
          'Eine Matrix sollte daher keine automatischen Befehle erzeugen. Sinnvoll ist, für wichtige Positionen mehrere Handlungsoptionen zu formulieren, ihre Voraussetzungen und Folgen zu prüfen und anschließend Verantwortlichkeiten sowie Prüftermine festzulegen.',
        ],
      },
      {
        heading: 'Verbindung zum Produktlebenszyklus',
        paragraphs: [
          [
            'Der ',
            { type: 'link', href: '/wissen/produktlebenszyklus', text: 'Produktlebenszyklus' },
            ' beschreibt einen möglichen zeitlichen Verlauf eines Produkts. Eine Portfolioanalyse vergleicht dagegen mehrere Objekte zu einem bestimmten Analysezeitpunkt oder über mehrere Zeitpunkte hinweg.',
          ],
          'Die Modelle können sich ergänzen: Die vermutete Lebenszyklusphase kann eine Information für die Bewertung sein. Sie sollte aber nicht ungeprüft die Position oder Maßnahme bestimmen, weil Produkte sehr unterschiedliche und nicht sicher vorhersehbare Verläufe haben.',
        ],
      },
      {
        heading: 'Vorteile und Grenzen',
        paragraphs: [
          'Portfolioanalysen schaffen Übersicht, erleichtern Vergleiche und machen die Verteilung von Chancen, Risiken und Ressourcen sichtbar. Die grafische Darstellung kann Diskussionen über Prioritäten strukturieren und Annahmen offenlegen.',
          'Gleichzeitig reduziert eine Matrix komplexe Situationen auf wenige Dimensionen. Unsichere Daten, subjektive Gewichtungen, falsch abgegrenzte Märkte und nicht dargestellte Wechselwirkungen können das Ergebnis verzerren. Eine klare Grafik ist deshalb nicht automatisch eine belastbare Analyse.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine Portfolioanalyse vergleicht mehrere Produkte, Geschäftsfelder oder andere Objekte gemeinsam',
    'Objekte werden anhand von mindestens zwei klar definierten Dimensionen positioniert',
    'Produkt-, Markt-, Kunden- und Lieferantenportfolios benötigen jeweils passende Kriterien',
    'Die BCG-Matrix ist eine konkrete Portfolio-Methode und nicht mit Portfolioanalyse gleichzusetzen',
    'Matrixpositionen eröffnen strategische Optionen, ersetzen aber keine Einzelprüfung und Entscheidung',
  ],
  commonMistakes: [
    'Portfolioanalyse und BCG-Matrix als identische Begriffe verwenden',
    'nicht vergleichbare Objekte in dieselbe Matrix einordnen',
    'Dimensionen unklar definieren oder doppelt wirkende Kriterien verwenden',
    'Positionen ohne nachvollziehbare Daten und Bewertungsregeln festlegen',
    'unsichere Einschätzungen als exakte Punkte darstellen',
    'aus einem Matrixfeld automatisch eine Maßnahme ableiten',
    'Synergien, Abhängigkeiten, Risiken oder Mindestanforderungen ausblenden',
    'die Analyse trotz veränderter Märkte und Unternehmensdaten nicht aktualisieren',
  ],
  faqs: [
    {
      question: 'Was ist eine Portfolioanalyse einfach erklärt?',
      answer: 'Sie stellt mehrere Produkte, Geschäftsfelder oder andere Objekte anhand ausgewählter Dimensionen gemeinsam dar und unterstützt ihren strategischen Vergleich.',
    },
    {
      question: 'Ist jede Portfolioanalyse eine BCG-Matrix?',
      answer: 'Nein. Die BCG-Matrix ist nur eine konkrete Ausprägung mit den Dimensionen relativem Marktanteil und Marktwachstum.',
    },
    {
      question: 'Welche Dimensionen kann eine Portfolioanalyse verwenden?',
      answer: 'Das hängt vom Zweck ab. Beispiele sind Marktattraktivität und Wettbewerbsstärke, Beitrag und Potenzial oder Einkaufsvolumen und Beschaffungsrisiko.',
    },
    {
      question: 'Welche Maßnahmen lassen sich aus einem Portfolio ableiten?',
      answer: 'Mögliche Optionen sind Ausbau, selektive Entwicklung, Absicherung, Neupositionierung, Kooperation oder Rückzug. Sie müssen zusätzlich geprüft werden.',
    },
    {
      question: 'Warum kann eine Portfolio-Matrix irreführen?',
      answer: 'Sie verdichtet komplexe Zusammenhänge auf wenige Dimensionen. Datenqualität, Gewichtungen, Marktgrenzen und ausgelassene Wechselwirkungen können die Position verzerren.',
    },
  ],
  related: ['bcg-matrix', 'produktlebenszyklus', 'unternehmensstrategie'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default portfolioanalyse;
