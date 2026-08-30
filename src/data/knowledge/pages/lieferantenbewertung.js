import { defaultDisclaimer } from '../shared.js';

const lieferantenbewertung = {
  slug: 'lieferantenbewertung',
  category: 'Supply Chain & Logistik',
  title: 'Lieferantenbewertung',
  description: 'Lieferantenbewertung einfach erklärt: Lieferanten im laufenden Geschäft nach Qualität, Liefertreue, Kosten, Kommunikation und Risiko beurteilen.',
  seo: {
    title: 'Lieferantenbewertung einfach erklärt | Belege24',
    description: 'Erfahre, wie Unternehmen Lieferanten regelmäßig mit qualitativen und quantitativen Kriterien bewerten und die Ergebnisse sinnvoll nutzen.',
    canonicalPath: '/wissen/lieferantenbewertung',
  },
  article: {
    intro: 'Eine Lieferantenbewertung beurteilt, wie ein bestehender Lieferant im laufenden Geschäft tatsächlich leistet. Sie macht sichtbar, ob Qualität, Termine, Kommunikation und andere wichtige Kriterien dauerhaft zu den Anforderungen des Unternehmens passen.',
    sections: [
      {
        heading: 'Was ist eine Lieferantenbewertung?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'lieferantenbewertung', text: 'Lieferantenbewertung' },
            ' bewertet die Leistung von Lieferanten anhand festgelegter Kriterien. Grundlage können Messwerte aus Bestellungen und Wareneingängen, Reklamationen, Gespräche und Einschätzungen aus Einkauf, Qualitätssicherung oder Lager sein.',
          ],
          'Sie hilft, Stärken, wiederkehrende Abweichungen und mögliche Risiken früh zu erkennen. Das Ergebnis kann zum Beispiel Grundlage für Gespräche, Maßnahmen zur Verbesserung oder eine erneute Prüfung der Lieferantenstruktur sein.',
        ],
      },
      {
        heading: 'Unterschied zur Lieferantenauswahl',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/lieferantenauswahl', text: 'Lieferantenauswahl' },
            ' entscheidet vor Beginn oder bei Vergabe einer Lieferbeziehung, welcher Anbieter die Anforderungen voraussichtlich am besten erfüllt. Die Lieferantenbewertung prüft danach regelmäßig, ob sich diese Erwartung im Alltag bestätigt.',
          ],
          'Beide Themen greifen ineinander, haben aber unterschiedliche Zeitpunkte und Informationsgrundlagen: Auswahl arbeitet mit Angeboten, Marktinformationen und Vorprüfungen. Bewertung nutzt zusätzlich die tatsächliche Qualität, Liefertreue und Zusammenarbeit aus vergangenen Lieferungen.',
        ],
      },
      {
        heading: 'Typische Bewertungskriterien',
        paragraphs: [
          'Quantitative Kriterien lassen sich mit Zahlen messen. Dazu gehören etwa Preisentwicklung, vereinbarte und tatsächliche Lieferzeit, Liefertreue, Reklamationsquote oder Anzahl der Lieferungen mit Mengenabweichung. Wichtig ist eine klare Definition, zum Beispiel ab wann eine Lieferung als termingerecht gilt.',
          'Qualitative Kriterien werden anhand nachvollziehbarer Bewertungsstufen eingeschätzt. Beispiele sind Flexibilität bei Änderungen, Erreichbarkeit, Qualität der Kommunikation, technische Unterstützung oder Transparenz bei Problemen. Auch diese Kriterien brauchen eine verständliche Skala, damit verschiedene Personen möglichst gleich bewerten.',
          'Je nach Beschaffung können Qualität, Preis, Liefertreue, Lieferzeit, Reklamationsquote, Flexibilität, Kommunikation, Kapazität und Risiko unterschiedlich wichtig sein. Ein kritisches Produktionsteil braucht oft eine andere Gewichtung als ein leicht ersetzbares Verbrauchsmaterial.',
        ],
      },
      {
        heading: 'Gewichtung und Punktbewertung',
        paragraphs: [
          [
            'Mit einer ',
            { type: 'glossary', id: 'gewichtung', text: 'Gewichtung' },
            ' wird festgelegt, wie stark ein Kriterium in das Gesamtergebnis eingeht. Beispielsweise kann Qualität wichtiger sein als der Preis, wenn ein Fehler beim gelieferten Teil hohe Folgekosten verursachen würde.',
          ],
          'Für eine Punktbewertung erhalten Lieferanten bei jedem Kriterium Werte auf derselben Skala, etwa von 1 bis 5 Punkten. Die Bewertung wird mit der Gewichtung multipliziert. Die Summe der Teilwerte ergibt einen Gesamtwert, der eine Rangfolge und Veränderungen über die Zeit sichtbar machen kann.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gewichtete Lieferantenbewertung',
            formula: 'Gesamtwert = Summe aus Bewertung × Gewichtung',
            description: 'Die Gewichte werden zum Beispiel als Dezimalwerte verwendet und ergeben zusammen 1,00. Zwingende Mindestanforderungen und gravierende Risiken sollten nicht durch einen hohen Gesamtwert überdeckt werden.',
          },
        ],
      },
      {
        heading: 'Lieferantenklassen und regelmäßige Neubewertung',
        paragraphs: [
          'Unternehmen können Lieferanten anhand der Ergebnisse grundsätzlich in Klassen einteilen, etwa „bevorzugt“, „freigegeben mit Beobachtung“ oder „Verbesserung erforderlich“. Die Klassen müssen zu den eigenen Prozessen passen und sollten klare Konsequenzen haben, zum Beispiel ein Gespräch, eine Maßnahme oder eine erneute Prüfung.',
          'Die Bewertung wird sinnvollerweise in einem passenden Rhythmus wiederholt. Häufigkeit und Tiefe richten sich unter anderem nach Beschaffungsvolumen, Bedeutung des Lieferanten, Risikolage und Zahl der Lieferungen. Bei auffälligen Ereignissen kann eine Bewertung auch außerhalb des regulären Turnus notwendig sein.',
          'Ein einzelner schlechter Wert muss nicht sofort zu einem Lieferantenwechsel führen. Entscheidend sind Ursachen, Häufigkeit, Auswirkungen und die Möglichkeit, die Leistung zu verbessern.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Drei Lieferanten gewichtet vergleichen',
            paragraphs: [
              'Ein Unternehmen bewertet drei bestehende Lieferanten auf einer Skala von 1 bis 5 Punkten. Qualität zählt mit 50 Prozent, Liefertreue mit 30 Prozent und Kommunikation mit 20 Prozent. Lieferant A erhält 5, 3 und 3 Punkte; Lieferant B 4, 4 und 4 Punkte; Lieferant C 3, 5 und 4 Punkte.',
              'Die Gewichte werden als 0,50, 0,30 und 0,20 eingesetzt. Jeder Wert entsteht aus Bewertung mal Gewichtung. Die Teilwerte werden anschließend je Lieferant addiert.',
            ],
            effects: [
              'Lieferant A: 5 × 0,50 + 3 × 0,30 + 3 × 0,20 = 2,50 + 0,90 + 0,60 = 4,00',
              'Lieferant B: 4 × 0,50 + 4 × 0,30 + 4 × 0,20 = 2,00 + 1,20 + 0,80 = 4,00',
              'Lieferant C: 3 × 0,50 + 5 × 0,30 + 4 × 0,20 = 1,50 + 1,50 + 0,80 = 3,80',
              'Einordnung: A und B liegen nach dieser Gewichtung gleichauf. Bevorzugt wird nicht automatisch der höhere Wert, sondern die Ergebnisse werden zusammen mit Musskriterien, Risiken und Entwicklung betrachtet.',
            ],
          },
        ],
      },
      {
        heading: 'Ergebnisse sinnvoll nutzen',
        paragraphs: [
          'Die Bewertung ist kein Selbstzweck. Sie sollte in konkrete Entscheidungen oder Gespräche münden: gute Leistung anerkennen, Ursachen für Abweichungen klären, Erwartungen präzisieren oder Verbesserungsmaßnahmen vereinbaren.',
          [
            'Für Verbesserungen in der laufenden Zusammenarbeit bietet die ',
            { type: 'link', href: '/wissen/lieferantenentwicklung', text: 'Lieferantenentwicklung' },
            ' einen passenden Rahmen. Die grundsätzliche Methode, Kriterien zu gewichten und Alternativen vergleichbar zu machen, erklärt die ',
            { type: 'link', href: '/wissen/nutzwertanalyse', text: 'Nutzwertanalyse' },
            ' ausführlicher.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler sind unklare Kennzahlen. Wenn nicht festgelegt ist, wie Liefertreue oder Reklamationsquote berechnet werden, sind Ergebnisse zwischen Zeiträumen oder Lieferanten nicht verlässlich vergleichbar.',
          'Auch Gewichtungen sollten nicht nachträglich angepasst werden, um ein gewünschtes Ergebnis zu erzeugen. Kriterien, Skalen und Gewichte werden besser vor der Bewertung vereinbart und bei Änderungen transparent dokumentiert.',
          'Eine reine Punktzahl kann wichtige Einzelrisiken verdecken. Erfüllt ein Lieferant eine zwingende Anforderung nicht oder bestehen gravierende Risiken, reicht ein guter Gesamtwert allein nicht für eine positive Beurteilung.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Lieferantenbewertung beurteilt die tatsächliche Leistung bestehender Lieferanten im laufenden Geschäft.',
    'Sie unterscheidet sich von der Lieferantenauswahl, die vor Beginn oder bei Vergabe einer Lieferbeziehung stattfindet.',
    'Qualität, Preis, Liefertreue, Lieferzeit, Reklamationsquote, Flexibilität, Kommunikation und Risiko sind typische Kriterien.',
    'Quantitative Kennzahlen und qualitative Einschätzungen brauchen klare, nachvollziehbare Definitionen.',
    'Gewichtete Punktbewertungen können Unterschiede und Veränderungen sichtbar machen, ersetzen aber keine Mindestanforderungen und Risikoprüfung.',
    'Ergebnisse sollten zu Gesprächen, Verbesserungsmaßnahmen oder einer erneuten Prüfung führen.',
  ],
  commonMistakes: [
    'Kennzahlen wie Liefertreue oder Reklamationsquote ohne einheitliche Definition vergleichen',
    'Gewichtungen nachträglich an ein gewünschtes Ergebnis anpassen',
    'zwingende Anforderungen oder gravierende Risiken durch einen hohen Punktwert ausgleichen',
    'nur eine Momentaufnahme statt einen passenden regelmäßigen Bewertungsrhythmus nutzen',
    'Bewertungsergebnisse erfassen, ohne daraus Gespräche oder Maßnahmen abzuleiten',
  ],
  faqs: [
    {
      question: 'Was ist eine Lieferantenbewertung?',
      answer: 'Sie beurteilt die tatsächliche Leistung bestehender Lieferanten anhand festgelegter Kriterien wie Qualität, Liefertreue, Preis, Kommunikation und Risiko.',
    },
    {
      question: 'Was ist der Unterschied zwischen Auswahl und Bewertung?',
      answer: 'Die Auswahl entscheidet vor einer Lieferbeziehung oder Vergabe. Die Bewertung prüft im laufenden Geschäft, ob der Lieferant die Erwartungen tatsächlich erfüllt.',
    },
    {
      question: 'Welche Kriterien sind bei der Lieferantenbewertung wichtig?',
      answer: 'Typisch sind Qualität, Preis, Liefertreue, Lieferzeit, Reklamationsquote, Flexibilität, Kommunikation, Kapazität und Risiko. Die Auswahl richtet sich nach dem jeweiligen Bedarf.',
    },
    {
      question: 'Wie wird ein Gesamtwert berechnet?',
      answer: 'Jede Bewertung wird mit der Gewichtung des Kriteriums multipliziert. Die Teilwerte werden je Lieferant addiert.',
    },
    {
      question: 'Muss ein schlechter Wert sofort zum Lieferantenwechsel führen?',
      answer: 'Nicht unbedingt. Ursachen, Häufigkeit, Auswirkungen und mögliche Verbesserungen sollten geprüft werden. Bei zwingenden Anforderungen oder gravierenden Risiken kann jedoch schnelles Handeln erforderlich sein.',
    },
  ],
  related: [
    'lieferantenauswahl',
    'lieferantenentwicklung',
    'nutzwertanalyse',
    'beschaffungsmarktforschung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lieferantenbewertung;
