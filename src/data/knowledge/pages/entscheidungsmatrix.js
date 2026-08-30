import { defaultDisclaimer } from '../shared.js';

const entscheidungsmatrix = {
  slug: 'entscheidungsmatrix',
  category: 'Unternehmensführung',
  title: 'Entscheidungsmatrix',
  description: 'Alternativen mit einer Entscheidungsmatrix anhand klarer Muss- und Wunschkriterien strukturiert und nachvollziehbar vergleichen.',
  seo: {
    title: 'Entscheidungsmatrix einfach erklärt | Belege24',
    description: 'Alternativen per Ja/Nein, Punkteskala oder Gewichtung vergleichen – mit Beispiel, Formel und Abgrenzung zur Nutzwertanalyse.',
    canonicalPath: '/wissen/entscheidungsmatrix',
  },
  article: {
    intro: 'Eine Entscheidungsmatrix stellt Alternativen und Entscheidungskriterien in einer übersichtlichen Tabelle gegenüber. Je nach Fragestellung reichen Ja/Nein-Angaben oder einfache Punkte; bei Bedarf können Kriterien zusätzlich gewichtet werden. Die Matrix macht Überlegungen transparent, verwandelt subjektive Einschätzungen aber nicht in objektive Gewissheit.',
    sections: [
      {
        heading: 'Was ist eine Entscheidungsmatrix?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'entscheidungsmatrix', text: 'Entscheidungsmatrix' },
            ' ordnet Alternativen in Zeilen und Kriterien in Spalten – oder umgekehrt. In den Schnittpunkten wird festgehalten, ob und wie gut eine Alternative das jeweilige Kriterium erfüllt. Dadurch werden Begründungen sichtbar, die sonst leicht nur im Kopf einzelner Beteiligter bleiben.',
          ],
          'Die Matrix ist kein einziges fest vorgeschriebenes Verfahren. Sie kann als einfache Checkliste, als Punktvergleich oder als gewichtete Bewertung aufgebaut sein. Der passende Detaillierungsgrad hängt von Bedeutung, Unsicherheit und Aufwand der Entscheidung ab.',
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Grundaufbau',
            formula: 'Alternativen × Kriterien → Bewertungen → Vergleich → begründete Entscheidung',
            description: 'Die Tabelle strukturiert Informationen. Die abschließende Entscheidung berücksichtigt zusätzlich Risiken, Mindestanforderungen und nicht abgebildete Folgen.',
          },
        ],
      },
      {
        heading: 'Wann ist eine Entscheidungsmatrix sinnvoll?',
        paragraphs: [
          'Sie hilft, wenn mehrere grundsätzlich denkbare Alternativen anhand mehrerer Kriterien verglichen werden sollen. Typische Anwendungen sind die Auswahl einer Software, eines Lieferanten, eines Standorts, einer Maschine, einer Bewerberin oder einer Projektvariante.',
          'Besonders nützlich ist die Matrix, wenn mehrere Personen an der Entscheidung beteiligt sind. Unterschiedliche Annahmen können konkret benannt und besprochen werden. Für eine triviale Entscheidung mit nur einem eindeutigen Kriterium wäre der zusätzliche Aufbau dagegen oft unnötig.',
        ],
      },
      {
        heading: 'Alternativen und Kriterien festlegen',
        paragraphs: [
          'Die Alternativen sollten realistisch, vergleichbar und ausreichend konkret sein. Bei einer Softwareauswahl können dies drei benannte Produkte in festgelegten Tarifvarianten sein. Werden unterschiedliche Leistungsumfänge oder Vertragslaufzeiten vermischt, ist die Bewertung nur schwer aussagekräftig.',
          'Kriterien werden aus Zielen, Anforderungen und möglichen Folgen der Entscheidung abgeleitet. Sie sollten eindeutig beschrieben sein und sich möglichst wenig überschneiden. Andernfalls kann derselbe Vorteil mehrfach in das Gesamtergebnis eingehen.',
        ],
      },
      {
        heading: 'Muss- und Wunschkriterien',
        paragraphs: [
          'Musskriterien sind zwingende Anforderungen. Erfüllt eine Alternative ein echtes Musskriterium nicht, wird sie normalerweise vor dem Punktevergleich ausgeschlossen. Beispiele können eine notwendige Schnittstelle, ein verbindlicher Liefertermin oder eine vorgeschriebene Zertifizierung sein.',
          'Wunschkriterien unterscheiden die verbleibenden Alternativen. Sie können unterschiedlich gut erfüllt werden und eignen sich daher für Ja/Nein-Angaben, Punkte oder Gewichtungen. Ein Kriterium sollte nicht als „Muss“ bezeichnet und anschließend doch durch hohe Punkte an anderer Stelle ausgeglichen werden.',
        ],
      },
      {
        heading: 'Einfache Ja/Nein- oder Punktbewertung',
        paragraphs: [
          'Bei klar prüfbaren Kriterien genügt häufig „erfüllt“ oder „nicht erfüllt“. Eine solche Matrix eignet sich für Vorprüfungen und überschaubare Entscheidungen. Sie zeigt allerdings nicht, wie stark sich zwei erfüllende Alternativen unterscheiden.',
          'Eine Punkteskala bildet Abstufungen ab, beispielsweise 1 bis 5 Punkte. Dafür muss vorab beschrieben werden, was die Skalenwerte bedeuten. Bei messbaren Größen wie Kosten oder Lieferzeit braucht es eine transparente Umrechnungsregel und eine eindeutige Bewertungsrichtung.',
        ],
      },
      {
        heading: 'Gewichtete Entscheidungsmatrix',
        paragraphs: [
          [
            'Nicht jedes Kriterium ist gleich wichtig. Eine ',
            { type: 'glossary', id: 'gewichtung', text: 'Gewichtung' },
            ' verstärkt oder vermindert deshalb den Einfluss eines Kriteriums auf das Ergebnis. Die Bewertung einer Alternative wird je Kriterium mit dem festgelegten Gewicht multipliziert.',
          ],
          'Werden Prozentgewichte verwendet, sollten sie zusammen 100 Prozent ergeben. Alternativ sind einfache Faktoren wie 1, 2 und 3 möglich. Skala und Gewichtssystem müssen für alle Alternativen identisch bleiben und vor der Bewertung dokumentiert werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gewichteter Punktwert',
            formula: 'Punktwert = Bewertung × Gewichtung',
            description: 'Die gewichteten Punktwerte werden je Alternative addiert. Das Ergebnis ist nur innerhalb derselben Matrix und ihrer Annahmen vergleichbar.',
          },
        ],
      },
      {
        heading: 'Beispiel: drei Softwarelösungen vergleichen',
        paragraphs: [
          'Ein Betrieb prüft zunächst das Musskriterium „Datenexport im benötigten Format“. Lösung C erfüllt es nicht und scheidet aus. Die Lösungen A und B werden anschließend bei Bedienbarkeit, Support und Kosten auf einer Skala von 1 bis 5 bewertet. Höhere Punkte bedeuten eine günstigere Bewertung.',
        ],
        exampleCards: [
          {
            title: 'Gewichteter Vergleich nach der Muss-Prüfung',
            paragraphs: ['Bedienbarkeit erhält 40 Prozent Gewicht, Support 35 Prozent und Kosten 25 Prozent. Lösung A wird mit 4, 3 und 5 Punkten bewertet; Lösung B mit 3, 5 und 3 Punkten. Die Gewichte werden als 0,40, 0,35 und 0,25 eingesetzt.'],
            effects: [
              'Lösung A: 4 × 0,40 + 3 × 0,35 + 5 × 0,25 = 1,60 + 1,05 + 1,25 = 3,90',
              'Lösung B: 3 × 0,40 + 5 × 0,35 + 3 × 0,25 = 1,20 + 1,75 + 0,75 = 3,70',
              'Lösung C: wegen des nicht erfüllten Musskriteriums nicht in der Punktwertung',
              'Vorläufiges Ergebnis: A liegt unter den verwendeten Annahmen knapp vor B',
              'Vor der Auswahl prüft der Betrieb Vertragsrisiken und verändert testweise unsichere Bewertungen',
            ],
          },
        ],
      },
      {
        heading: 'Gesamtergebnis einordnen',
        paragraphs: [
          'Bei einer gewichteten Matrix entsteht das Gesamtergebnis durch Addition der Punktwerte einer Alternative. Der höchste Wert zeigt, welche Alternative unter den festgelegten Kriterien, Bewertungen und Gewichten vorn liegt. Er ist kein Beweis für eine allgemein beste Lösung.',
          'Kleine Abstände sollten vorsichtig interpretiert werden. Eine Sensitivitätsprüfung kann zeigen, ob plausible Änderungen einzelner Bewertungen oder Gewichte die Rangfolge verändern. Ist das Ergebnis instabil, sind weitere Informationen oft wertvoller als zusätzliche Nachkommastellen.',
        ],
      },
      {
        heading: 'Unterschied zur Nutzwertanalyse',
        paragraphs: [
          [
            '„Entscheidungsmatrix“ ist ein weiter Begriff für tabellarische Vergleiche. Sie kann sehr einfach mit Ja/Nein-Angaben oder ungewichteten Punkten arbeiten. Die ',
            { type: 'link', href: '/wissen/nutzwertanalyse', text: 'Nutzwertanalyse' },
            ' ist eine stärker formalisierte, regelmäßig gewichtete Variante, bei der Teilnutzwerte und ein Gesamtnutzwert berechnet werden.',
          ],
          'In der Praxis werden die Begriffe teilweise überlappend verwendet. Entscheidend ist daher weniger die Bezeichnung als eine klare Dokumentation von Kriterien, Skala, Gewichtung, Berechnung und Grenzen. Inhalte der Nutzwertanalyse müssen nicht wiederholt werden, wenn ein einfacher Vergleich ausreicht.',
        ],
      },
      {
        heading: 'Qualitative Entscheidungen nachvollziehbar machen',
        paragraphs: [
          'Qualitative Aspekte wie Bedienbarkeit, Servicequalität oder kulturelle Passung können in einer Matrix sichtbar gemacht werden. Dazu sollten beobachtbare Merkmale oder beschriebene Bewertungsstufen verwendet werden. Mehrere Bewertende können ihre Einschätzungen zunächst getrennt abgeben und Unterschiede anschließend begründen.',
          'Die Umwandlung in Punkte macht eine Einschätzung nicht objektiv. Sie erleichtert lediglich den Vergleich und die Dokumentation. Quellen, Unsicherheiten und abweichende Meinungen sollten deshalb zusammen mit der Bewertung festgehalten werden.',
        ],
      },
      {
        heading: 'Vorteile und Grenzen',
        paragraphs: [
          'Eine Entscheidungsmatrix schafft Übersicht, zwingt zur Benennung relevanter Kriterien und macht die Logik einer Auswahl prüfbar. Sie kann Diskussionen strukturieren und verhindern, dass ein einzelner gut sichtbarer Vorteil unbemerkt alle anderen Aspekte verdrängt.',
          'Gleichzeitig vereinfacht sie komplexe Wirkungen. Kriterien können voneinander abhängig sein, zukünftige Entwicklungen bleiben unsicher und manche Folgen lassen sich nicht sinnvoll durch Punkte ausgleichen. Mindestanforderungen, Risiken und strategische Zusammenhänge benötigen daher eine gesonderte Betrachtung.',
        ],
      },
      {
        heading: 'Weitere Perspektiven für die Entscheidung',
        paragraphs: [
          [
            'Eine ',
            { type: 'link', href: '/wissen/swot-analyse', text: 'SWOT-Analyse' },
            ' kann ergänzend interne Stärken und Schwächen sowie externe Chancen und Risiken einer Alternative strukturieren. Sie berechnet keine Rangfolge, erweitert aber den Blick auf Umfeld und Umsetzbarkeit.',
          ],
          'Bei weitreichenden Entscheidungen sollten außerdem finanzielle Auswirkungen, Verantwortlichkeiten, Nebenfolgen und mögliche Rückwege betrachtet werden. Die Matrix ist ein Baustein der Entscheidungsfindung und nicht deren automatischer Ersatz.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine Entscheidungsmatrix stellt Alternativen und Kriterien übersichtlich gegenüber',
    'Einfache Varianten nutzen Ja/Nein-Angaben oder ungewichtete Punkte',
    'Musskriterien werden vor der ausgleichbaren Bewertung geprüft',
    'Bei einer gewichteten Matrix werden Bewertung und Gewichtung multipliziert',
    'Das Gesamtergebnis gilt nur unter den transparent dokumentierten Annahmen',
  ],
  commonMistakes: [
    'nicht vergleichbare Alternativen gegenüberstellen',
    'Musskriterien durch hohe Bewertungen bei Wunschkriterien ausgleichen',
    'Punkteskalen verwenden, ohne ihre Stufen zu beschreiben',
    'überlappende Kriterien aufnehmen und denselben Aspekt mehrfach zählen',
    'Gewichtungen nachträglich an ein gewünschtes Ergebnis anpassen',
    'subjektive Bewertungen als objektive Messwerte darstellen',
    'kleine Punktunterschiede oder Nachkommastellen überinterpretieren',
    'Risiken, Abhängigkeiten und nicht bewertbare Folgen ausblenden',
  ],
  faqs: [
    {
      question: 'Was ist eine Entscheidungsmatrix?',
      answer: 'Sie ist eine Tabelle, in der mehrere Alternativen anhand festgelegter Kriterien mit Ja/Nein-Angaben, Punkten oder gewichteten Bewertungen verglichen werden.',
    },
    {
      question: 'Was ist ein Musskriterium?',
      answer: 'Ein Musskriterium ist eine zwingende Anforderung. Eine Alternative, die es nicht erfüllt, wird grundsätzlich vor dem weiteren Punktevergleich ausgeschlossen.',
    },
    {
      question: 'Wie funktioniert eine gewichtete Entscheidungsmatrix?',
      answer: 'Jede Bewertung wird mit dem Gewicht des Kriteriums multipliziert. Die Punktwerte werden anschließend je Alternative addiert.',
    },
    {
      question: 'Was ist der Unterschied zur Nutzwertanalyse?',
      answer: 'Eine Entscheidungsmatrix kann ein sehr einfacher Vergleich sein. Die Nutzwertanalyse ist typischerweise stärker formalisiert und berechnet gewichtete Teil- und Gesamtnutzwerte.',
    },
    {
      question: 'Ist die Alternative mit den meisten Punkten automatisch richtig?',
      answer: 'Nein. Das Ergebnis hängt von Kriterien, Skala, Bewertungen und Gewichten ab und muss zusammen mit Risiken und Unsicherheiten beurteilt werden.',
    },
  ],
  related: ['nutzwertanalyse', 'swot-analyse', 'entscheidungsfindung'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default entscheidungsmatrix;
