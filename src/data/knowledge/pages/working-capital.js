import { defaultDisclaimer } from '../shared.js';

const workingCapital = {
  slug: 'working-capital',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Working Capital',
  description: 'Working Capital einfach erklärt: Umlaufvermögen und kurzfristige Verbindlichkeiten gegenüberstellen und im Liquiditätskontext einordnen.',
  seo: {
    title: 'Working Capital berechnen und verstehen | Belege24',
    description: 'Erfahre, was Working Capital aussagt, wie du es berechnest und welchen Einfluss Forderungen, Vorräte und kurzfristige Verbindlichkeiten haben.',
    canonicalPath: '/wissen/working-capital',
  },
  article: {
    intro: 'Working Capital zeigt die Differenz zwischen Umlaufvermögen und kurzfristigen Verbindlichkeiten. Die Kennzahl hilft dabei, die kurzfristige Finanzierung eines Unternehmens einzuordnen, ist aber weder für sich allein ein Beleg für gute noch für schlechte Liquidität.',
    sections: [
      {
        heading: 'Was ist Working Capital?',
        paragraphs: [
          [
            { type: 'glossary', id: 'working-capital', text: 'Working Capital' },
            ' stellt kurzfristig gebundene oder verfügbare Vermögenswerte den kurzfristig fälligen Verpflichtungen gegenüber. Es wird als absoluter Geldbetrag und nicht als Prozentsatz ausgewiesen.',
          ],
          'Die Kennzahl zeigt damit, welcher Teil des Umlaufvermögens nach rechnerischem Abzug der kurzfristigen Verbindlichkeiten verbleibt oder welcher Fehlbetrag entsteht. Für die Beurteilung sind Zusammensetzung, Fälligkeiten und Geschäftsmodell entscheidend.',
        ],
      },
      {
        heading: 'Umlaufvermögen und kurzfristige Verbindlichkeiten',
        paragraphs: [
          [
            'Zum ',
            { type: 'glossary', id: 'umlaufvermoegen', text: 'Umlaufvermögen' },
            ' gehören typischerweise Vorräte, ',
            { type: 'glossary', id: 'forderung', text: 'Forderungen' },
            ', Bankguthaben und Kassenbestand. Diese Positionen sind unterschiedlich schnell und sicher in Zahlungsmittel umwandelbar.',
          ],
          [
            { type: 'glossary', id: 'kurzfristige-verbindlichkeiten', text: 'Kurzfristige Verbindlichkeiten' },
            ' sind Verpflichtungen, die innerhalb des für die Analyse festgelegten kurzfristigen Zeitraums fällig werden. Dazu können Lieferantenverbindlichkeiten, kurzfristige Kredite oder andere zeitnah zu zahlende Beträge gehören.',
          ],
        ],
      },
      {
        heading: 'Working Capital berechnen',
        paragraphs: [
          'Beide Größen sollten zum selben Stichtag und nach einer einheitlichen Fristendefinition ermittelt werden. Für Vergleiche muss insbesondere klar sein, welche Verbindlichkeiten als kurzfristig gelten.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Working Capital',
            formula: 'Working Capital = Umlaufvermögen − kurzfristige Verbindlichkeiten',
            description: 'Die Formel liefert einen absoluten Betrag. Seine Aussage hängt von Zusammensetzung und Verfügbarkeit des Umlaufvermögens sowie den tatsächlichen Fälligkeiten ab.',
          },
        ],
        exampleCards: [
          {
            title: 'Working Capital zum Bilanzstichtag',
            paragraphs: [
              'Ein Unternehmen weist 180.000 Euro Umlaufvermögen aus. Die kurzfristigen Verbindlichkeiten betragen zum selben Stichtag 130.000 Euro.',
              'Working Capital = 180.000 Euro − 130.000 Euro = 50.000 Euro.',
              'Das Working Capital ist positiv. Für die Einordnung muss dennoch geprüft werden, ob Forderungen rechtzeitig eingehen, Vorräte verwertbar sind und wann die Verbindlichkeiten tatsächlich bezahlt werden müssen.',
            ],
            effects: [
              'Umlaufvermögen: 180.000 Euro',
              'Kurzfristige Verbindlichkeiten: 130.000 Euro',
              'Vollständige Rechnung: 180.000 Euro − 130.000 Euro = 50.000 Euro',
            ],
          },
        ],
      },
      {
        heading: 'Positives, negatives und sehr hohes Working Capital',
        paragraphs: [
          'Positives Working Capital bedeutet, dass das Umlaufvermögen die kurzfristigen Verbindlichkeiten rechnerisch übersteigt. Das kann einen Finanzierungspuffer anzeigen, ist aber nicht automatisch gut: Hohe überfällige Forderungen oder schwer verkäufliche Vorräte können den Betrag erhöhen, ohne kurzfristig Geld bereitzustellen.',
          'Negatives Working Capital bedeutet, dass die kurzfristigen Verbindlichkeiten höher sind als das Umlaufvermögen. Das kann auf Finanzierungsdruck hindeuten, ist aber nicht automatisch schlecht. Geschäftsmodelle mit schnellen Kundenzahlungen, geringem Vorratsbestand und längeren Lieferantenzielen können dauerhaft anders strukturiert sein.',
          'Sehr hohes Working Capital kann Sicherheit bieten, zugleich aber auf unnötig gebundenes Kapital hinweisen. Überhöhte Lagerbestände, langsame Forderungseingänge oder ungenutzte Zahlungsmittel können die Kapitalnutzung belasten.',
        ],
      },
      {
        heading: 'Zusammenhang mit kurzfristiger Finanzierung und Liquidität',
        paragraphs: [
          'Working Capital zeigt, in welchem Umfang kurzfristiges Vermögen rechnerisch nach Abzug kurzfristiger Verpflichtungen verbleibt. Es kann Hinweise darauf geben, ob langfristige Mittel einen Teil des Umlaufvermögens finanzieren oder ob kurzfristige Verpflichtungen darüber hinausreichen.',
          'Die Kennzahl ist dennoch keine Zahlungsplanung. Eine Forderung kann erst nach einer fälligen Lieferantenrechnung eingehen, und ein Vorrat muss möglicherweise zunächst verkauft werden. Für die tatsächliche Liquidität sind Beträge und Zahlungszeitpunkte gemeinsam entscheidend.',
        ],
      },
      {
        heading: 'Einfluss von Forderungen, Vorräten und Verbindlichkeiten',
        paragraphs: [
          'Steigende Forderungen erhöhen rechnerisch das Working Capital. Gleichzeitig kann eine langsame Zahlung der Kunden Liquidität binden. Ein konsequentes Forderungsmanagement kann deshalb wichtiger sein als der reine Bilanzwert.',
          'Mehr Vorräte erhöhen ebenfalls das Umlaufvermögen. Ob das sinnvoll ist, hängt von Lieferfähigkeit, Umschlag, Verderb, Wertminderung und Lagerkosten ab. Ein hoher Bestand ist nicht automatisch kurzfristig zu Geld zu machen.',
          'Höhere kurzfristige Verbindlichkeiten senken das Working Capital. Längere Zahlungsziele können vorübergehend Finanzierungsspielraum schaffen, dürfen aber nicht zu verspäteten Zahlungen oder einer dauerhaften Abhängigkeit von Lieferantenfinanzierung führen.',
        ],
      },
      {
        heading: 'Unterschied zu Liquiditätsgraden',
        paragraphs: [
          'Working Capital ist eine absolute Differenz. Liquiditätsgrade setzen ausgewählte Bestandteile des Umlaufvermögens ins Verhältnis zu kurzfristigen Verbindlichkeiten und ergeben eine Quote.',
          'Die Liquidität 1. Grades betrachtet vor allem Zahlungsmittel, der 2. Grad bezieht zusätzlich kurzfristige Forderungen ein und der 3. Grad grundsätzlich das gesamte Umlaufvermögen. Die Kennzahlen gewichten die Nähe zu verfügbaren Zahlungsmitteln damit unterschiedlich und ergänzen die Working-Capital-Betrachtung.',
        ],
      },
      {
        heading: 'Working Capital Management',
        paragraphs: [
          'Working Capital Management steuert grundsätzlich Forderungen, Vorräte, Zahlungsmittel und kurzfristige Verbindlichkeiten. Ziel ist ein tragfähiges Gleichgewicht zwischen Zahlungsfähigkeit, Lieferbereitschaft, Kundenbeziehungen und effizienter Kapitalbindung.',
          'Maßnahmen sollten nicht isoliert optimiert werden. Sehr niedrige Vorräte können Lieferprobleme auslösen, sehr kurze Kundenziele den Vertrieb belasten und ein spätes Bezahlen von Lieferanten Beziehungen oder Konditionen verschlechtern.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Working Capital ist meist eine Stichtagsgröße und kann saisonale Schwankungen verdecken. Bilanzpositionen zeigen außerdem nicht automatisch, wann Geld tatsächlich ein- oder ausgeht oder wie sicher Forderungen und Vorräte realisierbar sind.',
          'Unternehmensgröße und Geschäftsmodell begrenzen auch den direkten Vergleich absoluter Beträge. Ergänzend sollten Liquiditätsplanung, Liquiditätsgrade, Fälligkeitsstruktur, Forderungsalter und Lagerumschlag betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Working Capital ist Umlaufvermögen minus kurzfristige Verbindlichkeiten',
    'Die Kennzahl wird als absoluter Geldbetrag ausgewiesen',
    'Positives Working Capital ist nicht automatisch gut und negatives nicht automatisch schlecht',
    'Forderungen und Vorräte können Kapital binden, obwohl sie das Working Capital erhöhen',
    'Working Capital ersetzt keine Liquiditäts- und Zahlungsplanung',
    'Liquiditätsgrade sind Quoten und betrachten die kurzfristige Deckung differenzierter',
  ],
  commonMistakes: [
    'Positionen von unterschiedlichen Stichtagen verwenden',
    'kurzfristige Verbindlichkeiten uneinheitlich abgrenzen',
    'alle Forderungen als rechtzeitig einbringlich behandeln',
    'Vorräte unabhängig von Verkäuflichkeit und Wertminderung ansetzen',
    'positives Working Capital automatisch als gut bewerten',
    'negatives Working Capital ohne Betrachtung des Geschäftsmodells als schlecht bewerten',
    'Working Capital mit Kontostand oder verfügbarer Liquidität gleichsetzen',
    'absolute Beträge unterschiedlich großer Unternehmen direkt vergleichen',
  ],
  faqs: [
    {
      question: 'Was ist Working Capital einfach erklärt?',
      answer: 'Working Capital ist die Differenz zwischen Umlaufvermögen und kurzfristigen Verbindlichkeiten eines Unternehmens.',
    },
    {
      question: 'Wie wird Working Capital berechnet?',
      answer: 'Du ziehst die kurzfristigen Verbindlichkeiten vom Umlaufvermögen ab. Beide Größen müssen zum selben Stichtag gehören.',
    },
    {
      question: 'Ist positives Working Capital immer gut?',
      answer: 'Nein. Der Betrag kann durch langsame Forderungen oder schwer verkäufliche Vorräte erhöht sein und trotzdem wenig kurzfristig verfügbare Liquidität enthalten.',
    },
    {
      question: 'Ist negatives Working Capital immer schlecht?',
      answer: 'Nein. Die Bedeutung hängt von Geschäftsmodell, Zahlungsströmen und Fälligkeiten ab. Es kann aber auch auf kurzfristigen Finanzierungsdruck hinweisen.',
    },
    {
      question: 'Was ist der Unterschied zu Liquiditätsgraden?',
      answer: 'Working Capital ist eine absolute Differenz. Liquiditätsgrade sind Quoten, die unterschiedliche Bestandteile des Umlaufvermögens zu kurzfristigen Verbindlichkeiten ins Verhältnis setzen.',
    },
  ],
  related: [
    'liquiditaetsgrade',
    'anlage-umlaufvermoegen',
    'debitoren-kreditoren',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default workingCapital;
