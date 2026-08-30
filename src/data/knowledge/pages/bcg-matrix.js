import { defaultDisclaimer } from '../shared.js';

const bcgMatrix = {
  slug: 'bcg-matrix',
  category: 'Unternehmensführung',
  title: 'BCG-Matrix',
  description: 'Die BCG-Matrix ordnet Produkte nach relativem Marktanteil und Marktwachstum und unterstützt die Analyse eines Produktportfolios.',
  seo: {
    title: 'BCG-Matrix einfach erklärt | Belege24',
    description: 'Question Marks, Stars, Cash Cows und Poor Dogs praxisnah verstehen – mit 2×2-Matrix, Portfolio-Beispiel und Grenzen des Modells.',
    canonicalPath: '/wissen/bcg-matrix',
  },
  article: {
    intro: 'Die BCG-Matrix ist ein Modell zur Analyse eines Produktportfolios. Sie ordnet Produkte oder Geschäftsfelder anhand von relativem Marktanteil und Marktwachstum in vier Felder ein, aus denen sich erste strategische Fragen ableiten lassen. Eine vollständige Strategie liefert die Matrix allein jedoch nicht.',
    sections: [
      {
        heading: 'Was ist die BCG-Matrix?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bcg-matrix', text: 'BCG-Matrix' },
            ' – auch Portfolio-Matrix genannt – stellt mehrere Produkte oder strategische Geschäftsfelder gemeinsam dar. Die vertikale Achse zeigt das Marktwachstum, die horizontale Achse typischerweise den relativen Marktanteil gegenüber dem stärksten Wettbewerber.',
          ],
          'Das Modell verbindet damit die Attraktivität eines wachsenden Marktes mit der Wettbewerbsposition des betrachteten Angebots. Die Trennlinien zwischen „hoch“ und „niedrig“ müssen für die Analyse nachvollziehbar festgelegt werden; sie sind keine allgemeingültigen Naturgrenzen.',
        ],
        matrixCards: [
          {
            title: 'BCG-Portfolio-Matrix',
            cells: [
              { code: '?', title: 'Question Marks', context: 'hohes Wachstum · niedriger Marktanteil', text: 'Chancen in einem wachsenden Markt, aber noch schwache Position. Prüfen, ob gezielte Investitionen einen tragfähigen Marktanteil aufbauen können.' },
              { code: '★', title: 'Stars', context: 'hohes Wachstum · hoher Marktanteil', text: 'Starke Position in einem wachsenden Markt. Wachstum absichern und Investitionsbedarf, Finanzierung sowie Ertragsperspektive beobachten.' },
              { code: '€', title: 'Cash Cows', context: 'niedriges Wachstum · hoher Marktanteil', text: 'Etablierte Position in einem langsam wachsenden Markt. Erträge und Zahlungsüberschüsse sichern, ohne notwendige Pflegeinvestitionen zu vernachlässigen.' },
              { code: 'D', title: 'Poor Dogs', context: 'niedriges Wachstum · niedriger Marktanteil', text: 'Schwache Position in einem wenig wachsenden Markt. Nischenpotenzial, Verbundwirkungen, Neupositionierung oder einen geordneten Rückzug prüfen.' },
            ],
          },
        ],
      },
      {
        heading: 'Marktanteil und Marktwachstum einordnen',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'relativer-marktanteil', text: 'relative Marktanteil' },
            ' vergleicht den eigenen Marktanteil meist mit dem des größten Wettbewerbers. Dafür müssen Markt, Region, Produktgruppe und Zeitraum einheitlich abgegrenzt sein. Ein hoher absoluter Absatz sagt wenig aus, wenn der relevante Markt falsch definiert wurde.',
          ],
          [
            { type: 'glossary', id: 'marktwachstum', text: 'Marktwachstum' },
            ' beschreibt, wie sich das Volumen oder der Wert des abgegrenzten Marktes in einem Zeitraum verändert. Nominale Preissteigerungen, Währungseffekte oder einmalige Sondereinflüsse können das Bild verzerren und sollten bei der Datenauswahl berücksichtigt werden.',
          ],
        ],
      },
      {
        heading: 'Question Marks',
        paragraphs: [
          'Question Marks befinden sich in wachsenden Märkten, haben aber eine vergleichsweise schwache Marktposition. Sie können erhebliche Mittel für Produktentwicklung, Bekanntheit, Vertrieb oder Kapazitäten benötigen, ohne dass ein späterer Erfolg sicher ist.',
          'Strategisch ist zu prüfen, bei welchen Angeboten ein überzeugender Kundennutzen und ein realistischer Weg zu einer stärkeren Position bestehen. Statt alle Question Marks gleichzeitig zu finanzieren, kann eine bewusste Auswahl oder ein früher Rückzug sinnvoll sein.',
        ],
      },
      {
        heading: 'Stars',
        paragraphs: [
          'Stars verbinden hohes Marktwachstum mit einer starken relativen Position. Sie können hohe Umsätze erzielen, benötigen wegen des Wachstums aber häufig weiterhin Investitionen in Personal, Produktion, Technik, Vertrieb oder Service.',
          'Eine typische Überlegung ist, die Position zu halten oder auszubauen und zugleich Finanzierung, Qualität und Wirtschaftlichkeit im Blick zu behalten. Ein Star ist nicht automatisch hochprofitabel und bleibt nicht zwangsläufig dauerhaft in diesem Feld.',
        ],
      },
      {
        heading: 'Cash Cows',
        paragraphs: [
          'Cash Cows haben eine starke Marktposition in einem Markt mit geringem Wachstum. Etablierte Abläufe und ein begrenzter zusätzlicher Investitionsbedarf können zu verfügbaren Mitteln beitragen, die auch andere Produkte finanzieren können.',
          'Das Modell legt nahe, Erträge und Position sorgfältig zu sichern. Zu starkes Kürzen bei Qualität, Service oder Weiterentwicklung kann die Kundenbasis jedoch beschädigen. Auch eine Cash Cow muss deshalb anhand ihrer tatsächlichen Zahlungsströme, Kosten und Zukunftsaussichten geprüft werden.',
        ],
      },
      {
        heading: 'Poor Dogs',
        paragraphs: [
          'Poor Dogs verbinden geringes Marktwachstum mit einer schwachen relativen Position. Als strategische Optionen kommen etwa Spezialisierung, Neupositionierung, Kooperation, Verkauf oder ein geordneter Rückzug infrage.',
          'Eine Beendigung ist dennoch keine automatische Folge. Ein Produkt kann einen profitablen Nischenmarkt bedienen, Kunden an andere Leistungen binden oder für ein vollständiges Sortiment wichtig sein. Solche Verbundwirkungen werden in der reinen Matrix nicht sichtbar.',
        ],
      },
      {
        heading: 'Beispiel: Portfolio eines fiktiven Herstellers',
        paragraphs: ['Ein Hersteller für Büroausstattung ordnet vier Produktlinien auf Basis einer klar abgegrenzten Marktanalyse ein. Die Einordnung dient als Ausgangspunkt für weitere Prüfungen und ist noch keine endgültige Investitionsentscheidung.'],
        exampleCards: [
          {
            title: 'Vier Produkte in der BCG-Matrix',
            paragraphs: ['Das Unternehmen betrachtet ergonomische Sensorstühle, höhenverstellbare Schreibtische, klassische Rollcontainer und ein älteres Ablagesystem. Für jedes Produkt werden relativer Marktanteil, Marktwachstum, Ergebnis, Zahlungsströme und strategische Bedeutung getrennt geprüft.'],
            effects: [
              'Question Mark: Sensorstuhl – wachsender Markt, bislang kleine Position; Pilotvertrieb und Kundennutzen prüfen',
              'Star: höhenverstellbarer Schreibtisch – wachsende Nachfrage und starke Position; Kapazität und Service kontrolliert ausbauen',
              'Cash Cow: Rollcontainer – stabiler Markt und starke Position; Ertrag sichern und notwendige Produktpflege fortsetzen',
              'Poor Dog: Ablagesystem – rückläufiger Markt und schwache Position; profitable Nische oder geordneten Ausstieg untersuchen',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Produktportfolio und Produktlebenszyklus',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'produktportfolio', text: 'Produktportfolio' },
            ' umfasst die Produkte oder Geschäftsfelder, die ein Unternehmen gemeinsam steuert. Die BCG-Matrix macht sichtbar, wie unterschiedlich ihre Marktpositionen und Wachstumsumfelder sein können. Dadurch unterstützt sie Fragen zur Verteilung knapper Mittel und zum Ausgleich von Chancen und Risiken.',
          ],
          [
            'Zwischen BCG-Matrix und ',
            { type: 'link', href: '/wissen/produktlebenszyklus', text: 'Produktlebenszyklus' },
            ' besteht eine häufig genannte Verbindung: Ein erfolgreiches Produkt kann sich idealtypisch vom Question Mark zum Star und später zur Cash Cow entwickeln. Dieser Weg ist weder zwingend noch sicher. Beide Modelle vereinfachen die Wirklichkeit aus unterschiedlichen Blickwinkeln.',
          ],
        ],
      },
      {
        heading: 'Warum zwei Größen keine vollständige Strategie ergeben',
        paragraphs: [
          [
            'Eine ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' muss mehr berücksichtigen als Marktanteil und Wachstum. Entscheidend sind unter anderem Profitabilität, Zahlungsströme, Investitionsbedarf, Kundenbindung, Fähigkeiten, Risiken, Synergien und die Frage, ob ein Produkt zur langfristigen Ausrichtung passt.',
          ],
          'Auch hoher Marktanteil führt nicht automatisch zu einem Kosten- oder Ertragsvorteil. Umgekehrt kann ein kleiner Marktanteil in einer gut gewählten Nische wirtschaftlich attraktiv sein. Die Matrix strukturiert eine Diskussion; sie ersetzt weder Marktanalyse noch Wirtschaftlichkeitsrechnung und Entscheidung.',
        ],
      },
      {
        heading: 'Grenzen des Modells',
        paragraphs: [
          'Die BCG-Matrix reduziert komplexe Märkte auf zwei Achsen. Marktgrenzen, Datenqualität und gewählte Schwellen beeinflussen das Ergebnis erheblich. Zudem unterstellt die klassische Logik Zusammenhänge zwischen Marktanteil, Erfahrung, Kosten und Mittelüberschüssen, die im konkreten Fall nicht bestehen müssen.',
          'Wechselwirkungen zwischen Produkten, neue Technologien, rechtliche Änderungen, Markteintrittsbarrieren und qualitative Vorteile erscheinen nicht oder nur indirekt. Die Matrix sollte deshalb mit weiteren Analysen und aktuellen Unternehmensdaten kombiniert und regelmäßig überprüft werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die BCG-Matrix ordnet Produkte nach relativem Marktanteil und Marktwachstum ein',
    'Die vier Felder heißen Question Marks, Stars, Cash Cows und Poor Dogs',
    'Jedes Feld regt strategische Prüfungen an, gibt aber keine automatische Entscheidung vor',
    'Markt, Zeitraum, Vergleichswettbewerber und Schwellenwerte müssen nachvollziehbar definiert sein',
    'Profitabilität, Zahlungsströme, Synergien und Risiken müssen zusätzlich untersucht werden',
  ],
  commonMistakes: [
    'Markt und Zeitraum unklar oder passend zum gewünschten Ergebnis abgrenzen',
    'absoluten und relativen Marktanteil verwechseln',
    'Umsatzwachstum eines Produkts ungeprüft als Wachstum des Gesamtmarktes verwenden',
    'Question Marks pauschal fördern oder Poor Dogs automatisch einstellen',
    'Stars automatisch für profitabel und Cash Cows für investitionsfrei halten',
    'Synergien, Kundenbindung und strategische Bedeutung einzelner Produkte übersehen',
    'aus der Position in der Matrix unmittelbar eine vollständige Strategie ableiten',
  ],
  faqs: [
    {
      question: 'Welche vier Felder hat die BCG-Matrix?',
      answer: 'Sie unterscheidet Question Marks, Stars, Cash Cows und Poor Dogs anhand von Marktwachstum und relativem Marktanteil.',
    },
    {
      question: 'Was bedeutet relativer Marktanteil?',
      answer: 'Er setzt den eigenen Marktanteil typischerweise ins Verhältnis zum Marktanteil des stärksten Wettbewerbers im klar abgegrenzten Markt.',
    },
    {
      question: 'Sollten Poor Dogs immer eingestellt werden?',
      answer: 'Nein. Profitabilität, Nischenpotenzial, Kundenbindung, Verbundwirkungen und Ausstiegskosten müssen zusätzlich geprüft werden.',
    },
    {
      question: 'Sind Stars automatisch besonders profitabel?',
      answer: 'Nein. Wachstum kann hohe Investitionen und laufende Ausgaben erfordern. Marktposition und Gewinn sind unterschiedliche Größen.',
    },
    {
      question: 'Was ist der Unterschied zum Produktlebenszyklus?',
      answer: 'Die BCG-Matrix vergleicht Portfolioelemente anhand zweier Marktgrößen. Der Produktlebenszyklus beschreibt dagegen einen möglichen zeitlichen Entwicklungsverlauf eines Produkts.',
    },
  ],
  related: ['produktlebenszyklus', 'unternehmensstrategie', 'marktanalyse'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bcgMatrix;
