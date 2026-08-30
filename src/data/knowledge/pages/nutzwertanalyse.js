import { defaultDisclaimer } from '../shared.js';

const nutzwertanalyse = {
  slug: 'nutzwertanalyse',
  category: 'Unternehmensführung',
  title: 'Nutzwertanalyse',
  description: 'Alternativen mit der Nutzwertanalyse anhand gewichteter qualitativer und quantitativer Kriterien nachvollziehbar vergleichen.',
  seo: {
    title: 'Nutzwertanalyse einfach erklärt | Belege24',
    description: 'Kriterien festlegen, gewichten und Alternativen bewerten – mit Formeln, vollständiger Beispielrechnung und Grenzen der Methode.',
    canonicalPath: '/wissen/nutzwertanalyse',
  },
  article: {
    intro: 'Eine Nutzwertanalyse vergleicht mehrere Alternativen anhand zuvor festgelegter und gewichteter Kriterien. Sie eignet sich besonders, wenn neben Kosten auch qualitative Aspekte wie Bedienbarkeit, Service oder Standortqualität berücksichtigt werden sollen. Das Ergebnis macht Annahmen nachvollziehbar, ist aber keine objektive Wahrheit: Kriterien, Gewichtungen und Bewertungen prägen die Rangfolge.',
    sections: [
      {
        heading: 'Was ist eine Nutzwertanalyse?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'nutzwertanalyse', text: 'Nutzwertanalyse' },
            ' ist ein Verfahren zur strukturierten Bewertung von Handlungsalternativen. Für jede Alternative werden mehrere Kriterien auf einer gemeinsamen Skala bewertet. Die Bewertungen werden mit der Bedeutung des jeweiligen Kriteriums gewichtet und zu einem Gesamtnutzwert zusammengeführt.',
          ],
          'Die Methode übersetzt unterschiedliche Eigenschaften in vergleichbare Punkte. Dadurch können qualitative Einschätzungen und quantitative Daten gemeinsam betrachtet werden. Die Umrechnung in Punkte beseitigt jedoch nicht die Unsicherheit oder Wertung, die in Auswahl, Skalierung und Gewichtung steckt.',
        ],
      },
      {
        heading: 'Wann ist die Methode sinnvoll?',
        paragraphs: [
          'Eine Nutzwertanalyse ist hilfreich, wenn mehrere grundsätzlich geeignete Alternativen anhand verschiedener Ziele verglichen werden sollen und eine reine Kostenbetrachtung zu kurz greift. Typische Anwendungen sind Lieferantenauswahl, Standortwahl, Softwareauswahl, Fahrzeugbeschaffung oder die Bewertung von Projektvarianten.',
          'Weniger geeignet ist sie, wenn eine zwingende Mindestanforderung nicht erfüllt wird. Solche Ausschlusskriterien sollten vor der Punktebewertung geprüft werden. Auch bei sehr unsicheren Informationen kann eine scheinbar genaue Rangfolge mehr Sicherheit vortäuschen, als tatsächlich vorhanden ist.',
        ],
      },
      {
        heading: 'Kriterien festlegen',
        paragraphs: [
          'Die Kriterien müssen zur konkreten Entscheidung passen und verständlich beschrieben sein. Bei einer Softwareauswahl können beispielsweise Funktionsumfang, Bedienbarkeit, Integrationsfähigkeit, Support und Gesamtkosten relevant sein. Zu viele Kriterien machen die Analyse unübersichtlich; zu wenige blenden wichtige Unterschiede aus.',
          'Kriterien sollten sich möglichst wenig überschneiden. Werden „Bedienbarkeit“, „Benutzerfreundlichkeit“ und „leichte Einarbeitung“ getrennt bewertet, kann derselbe Vorteil mehrfach in das Ergebnis eingehen. Muss eine Eigenschaft zwingend vorhanden sein, gehört sie eher in eine Vorprüfung als in die gewichtete Rangfolge.',
        ],
      },
      {
        heading: 'Qualitative und quantitative Kriterien',
        paragraphs: [
          'Quantitative Kriterien beruhen auf messbaren Größen, etwa Preis, Lieferzeit, Entfernung oder Energieverbrauch. Damit sie auf einer Punkteskala vergleichbar werden, braucht es vorab festgelegte Umrechnungsregeln. Dabei muss klar sein, ob ein hoher oder niedriger Messwert vorteilhaft ist.',
          'Qualitative Kriterien wie Bedienbarkeit, Designqualität oder Servicekompetenz werden anhand definierter Bewertungsstufen eingeschätzt. Eine Beschreibung der Skalenpunkte – etwa was genau 1, 3 oder 5 Punkte bedeuten – verbessert die Vergleichbarkeit zwischen bewertenden Personen.',
        ],
      },
      {
        heading: 'Kriterien gewichten',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'gewichtung', text: 'Gewichtung' },
            ' legt fest, wie stark ein Kriterium in den Gesamtnutzwert eingeht. Häufig werden Prozentanteile verwendet, die zusammen 100 Prozent ergeben. Alternativ können Gewichtungsfaktoren genutzt werden; wichtig ist eine konsistente Rechnung.',
          ],
          'Gewichtungen sollten aus den Zielen der Entscheidung abgeleitet und vor der Bewertung der Alternativen festgelegt werden. Werden sie nachträglich so verändert, dass eine bevorzugte Alternative gewinnt, verliert die Analyse ihre Nachvollziehbarkeit.',
        ],
      },
      {
        heading: 'Alternativen bewerten und Nutzwerte berechnen',
        paragraphs: [
          'Alle Alternativen werden anhand derselben Kriterien und Skala bewertet. Für jedes Kriterium entsteht durch Multiplikation von Bewertung und Gewichtung ein Teilnutzwert. Die Summe aller Teilnutzwerte ergibt den Gesamtnutzwert einer Alternative.',
          'Werden Gewichtungen als Dezimalzahlen verwendet, liegt der Gesamtnutzwert auf derselben Skala wie die Bewertungen. Bei einer Skala von 1 bis 5 und Gewichtungen von insgesamt 1,00 kann der Gesamtnutzwert somit zwischen 1 und 5 liegen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Teilnutzwert',
            formula: 'Teilnutzwert = Bewertung × Gewichtung',
            description: 'Bei Prozentgewichten wird für die Rechnung beispielsweise 50 % als 0,50 eingesetzt.',
          },
          {
            label: 'Formel',
            title: 'Gesamtnutzwert',
            formula: 'Gesamtnutzwert = Summe aller Teilnutzwerte',
            description: 'Die Summe wird für jede Alternative getrennt gebildet und dient anschließend zur Erstellung einer Rangfolge.',
          },
        ],
      },
      {
        heading: 'Vorgehensweise Schritt für Schritt',
        paragraphs: ['Eine saubere Dokumentation macht sichtbar, wie die Rangfolge entstanden ist und an welchen Stellen Beurteilungsspielraum besteht.'],
        list: [
          'Entscheidungsfrage und grundsätzlich geeignete Alternativen festlegen',
          'zwingende Mindestanforderungen vorab prüfen',
          'relevante, möglichst überschneidungsfreie Kriterien definieren',
          'Bewertungsskala und Regeln für jeden Skalenwert beschreiben',
          'Kriterien begründet gewichten und Gewichtssumme kontrollieren',
          'Daten sammeln und Alternativen nach denselben Regeln bewerten',
          'Teilnutzwerte und Gesamtnutzwert berechnen',
          'Rangfolge bilden und Ergebnis mit Annahmen und Risiken prüfen',
        ],
      },
      {
        heading: 'Beispiel: Auswahl einer Buchhaltungssoftware',
        paragraphs: [
          'Ein kleiner Betrieb vergleicht drei grundsätzlich geeignete Programme auf einer Skala von 1 Punkt (ungünstig) bis 5 Punkte (sehr günstig). Er gewichtet Funktionsumfang mit 50 Prozent, Bedienbarkeit mit 30 Prozent und laufende Kosten mit 20 Prozent. Bei den Kosten steht eine höhere Bewertung für niedrigere laufende Kosten.',
        ],
        exampleCards: [
          {
            title: 'Drei Softwarealternativen vollständig vergleichen',
            paragraphs: [
              'Software A erhält 4 Punkte für Funktionsumfang, 3 für Bedienbarkeit und 5 für Kosten. Software B erhält 3, 5 und 3 Punkte. Software C erhält 5, 2 und 2 Punkte. Die Gewichte werden als 0,50, 0,30 und 0,20 eingesetzt.',
            ],
            effects: [
              'Software A: 4 × 0,50 + 3 × 0,30 + 5 × 0,20 = 2,00 + 0,90 + 1,00 = 3,90',
              'Software B: 3 × 0,50 + 5 × 0,30 + 3 × 0,20 = 1,50 + 1,50 + 0,60 = 3,60',
              'Software C: 5 × 0,50 + 2 × 0,30 + 2 × 0,20 = 2,50 + 0,60 + 0,40 = 3,50',
              'Rangfolge nach Gesamtnutzwert: A vor B vor C',
              'Die Rangfolge gilt nur für diese Kriterien, Bewertungen und Gewichtungen und wird vor der Entscheidung auf Risiken und Mindestanforderungen geprüft',
            ],
          },
        ],
      },
      {
        heading: 'Rangfolge prüfen und Sensitivität betrachten',
        paragraphs: [
          'Der höchste Gesamtnutzwert zeigt die Alternative, die unter den verwendeten Annahmen am besten abschneidet. Er beweist nicht, dass sie in jeder Hinsicht überlegen ist. Kleine Punktunterschiede sollten nicht überinterpretiert werden, besonders wenn Bewertungen unsicher sind.',
          'Eine einfache Sensitivitätsprüfung verändert plausible Gewichtungen oder Bewertungen und berechnet die Rangfolge erneut. Bleibt das Ergebnis stabil, ist es gegenüber diesen Änderungen robust. Wechselt die Reihenfolge schnell, sollte die Entscheidung genauer untersucht oder zusätzliche Information beschafft werden.',
        ],
      },
      {
        heading: 'Vorteile der Nutzwertanalyse',
        paragraphs: [
          'Die Methode schafft eine einheitliche Struktur, macht Entscheidungskriterien sichtbar und dokumentiert, wie verschiedene Ziele berücksichtigt wurden. Sie kann Diskussionen im Team versachlichen, weil unterschiedliche Annahmen und Gewichtungen konkret benannt werden.',
          'Außerdem lassen sich monetäre und nicht monetäre Aspekte gemeinsam betrachten. Gerade bei Standort-, Lieferanten- oder Softwareentscheidungen verhindert dies, dass ein leicht messbares Einzelkriterium automatisch die gesamte Auswahl bestimmt.',
        ],
      },
      {
        heading: 'Grenzen der Methode',
        paragraphs: [
          'Kriterienauswahl, Gewichtung und Bewertung enthalten subjektive Entscheidungen. Auch eine korrekte Rechnung kann daher ein verzerrtes Ergebnis liefern. Datenqualität, Wechselwirkungen zwischen Kriterien und Unsicherheit zukünftiger Entwicklungen werden im einfachen Modell nur begrenzt abgebildet.',
          'Die Addition setzt zudem voraus, dass ein Vorteil bei einem Kriterium einen Nachteil bei einem anderen ausgleichen darf. Bei Sicherheitsanforderungen, gesetzlichen Vorgaben oder unverzichtbaren Funktionen ist das häufig nicht angemessen. Solche Punkte sollten als Mindestanforderungen oder gesonderte Risiken behandelt werden.',
        ],
      },
      {
        heading: 'Mit Kostenrechnung und Strategie verbinden',
        paragraphs: [
          [
            'Wenn Kosten der entscheidende und zuverlässig messbare Unterschied sind, kann eine ',
            { type: 'link', href: '/wissen/kostenvergleichsrechnung', text: 'Kostenvergleichsrechnung' },
            ' die monetären Folgen detaillierter untersuchen. Die Nutzwertanalyse kann diese Ergebnisse als ein Kriterium aufnehmen, sollte sie aber nicht durch eine frei vergebene Punktzahl ersetzen.',
          ],
          [
            'Bei größeren Entscheidungen sollte außerdem geprüft werden, wie die Alternativen zur ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' passen. Eine hohe Punktzahl bei operativen Kriterien genügt nicht, wenn eine Alternative die langfristige Ausrichtung oder wesentliche Risiken unzureichend berücksichtigt.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Nutzwertanalyse vergleicht mehrere Alternativen anhand gewichteter Kriterien',
    'Qualitative und quantitative Kriterien benötigen eine einheitliche, klar definierte Bewertungsskala',
    'Teilnutzwerte entstehen aus Bewertung mal Gewichtung und werden zum Gesamtnutzwert addiert',
    'Der Gesamtnutzwert führt zu einer Rangfolge unter den verwendeten Annahmen',
    'Kriterien, Gewichtungen und Bewertungen beeinflussen das Ergebnis und bleiben prüfbar zu dokumentieren',
  ],
  commonMistakes: [
    'Mindestanforderungen wie gewöhnliche ausgleichbare Kriterien behandeln',
    'überlappende Kriterien aufnehmen und denselben Vorteil mehrfach bewerten',
    'Bewertungsskalen verwenden, ohne die Bedeutung der Punkte festzulegen',
    'Gewichtungen erst nach Kenntnis der gewünschten Rangfolge anpassen',
    'bei quantitativen Kriterien die Bewertungsrichtung oder Umrechnungsregel offenlassen',
    'unsichere Schätzungen als exakte Messwerte darstellen',
    'kleine Unterschiede im Gesamtnutzwert überinterpretieren',
    'den höchsten Gesamtnutzwert als objektiv richtige Entscheidung verstehen',
  ],
  faqs: [
    {
      question: 'Was ist eine Nutzwertanalyse einfach erklärt?',
      answer: 'Sie bewertet mehrere Alternativen anhand gewichteter Kriterien und fasst die Teilbewertungen zu einer nachvollziehbaren Rangfolge zusammen.',
    },
    {
      question: 'Wie wird der Gesamtnutzwert berechnet?',
      answer: 'Jede Bewertung wird mit dem Gewicht des Kriteriums multipliziert. Die so entstehenden Teilnutzwerte werden je Alternative addiert.',
    },
    {
      question: 'Müssen die Gewichtungen zusammen 100 Prozent ergeben?',
      answer: 'Bei einer prozentualen Gewichtung ja. Alternativ sind konsistente Gewichtungsfaktoren möglich, deren Berechnung klar dokumentiert wird.',
    },
    {
      question: 'Ist die Alternative mit dem höchsten Nutzwert automatisch die beste?',
      answer: 'Nein. Sie liegt nur unter den verwendeten Kriterien, Gewichten und Bewertungen vorn. Risiken, Mindestanforderungen und Unsicherheiten sind zusätzlich zu prüfen.',
    },
    {
      question: 'Kann eine Nutzwertanalyse Kosten berücksichtigen?',
      answer: 'Ja. Kosten können nach einer transparenten Regel in Punkte übersetzt oder als Ergebnis einer separaten Kostenanalyse eingebunden werden.',
    },
  ],
  related: ['entscheidungsmatrix', 'kostenvergleichsrechnung', 'unternehmensstrategie'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default nutzwertanalyse;
