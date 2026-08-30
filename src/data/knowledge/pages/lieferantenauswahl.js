import { defaultDisclaimer } from '../shared.js';

const lieferantenauswahl = {
  slug: 'lieferantenauswahl',
  category: 'Supply Chain & Logistik',
  title: 'Lieferantenauswahl',
  description: 'Lieferantenauswahl einfach erklärt: Anforderungen definieren, Anbieter vergleichen und einen passenden Lieferanten nachvollziehbar auswählen.',
  seo: {
    title: 'Lieferantenauswahl einfach erklärt | Belege24',
    description: 'Erfahre, wie Unternehmen Lieferanten nach Preis, Qualität, Lieferfähigkeit, Kapazität und Risiko auswählen und typische Fehler vermeiden.',
    canonicalPath: '/wissen/lieferantenauswahl',
  },
  article: {
    intro: 'Bei der Lieferantenauswahl wird entschieden, welcher Anbieter den Bedarf eines Unternehmens am besten erfüllen kann. Entscheidend ist nicht nur ein günstiger Preis: Qualität, Lieferfähigkeit, Kapazität und Risiko müssen zur konkreten Anforderung passen.',
    sections: [
      {
        heading: 'Ziel der Lieferantenauswahl',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'lieferantenauswahl', text: 'Lieferantenauswahl' },
            ' sucht aus mehreren potenziellen Anbietern die Bezugsquelle aus, die den Bedarf passend und verlässlich decken kann. Sie bildet die Grundlage für eine neue Lieferbeziehung oder für die Vergabe eines konkreten Auftrags.',
          ],
          'Das Ziel ist eine nachvollziehbare Entscheidung. Ein Lieferant muss die Anforderungen an Produkt oder Leistung erfüllen und zugleich zu Menge, Termin, Kosten und Risikosituation passen. Welche Kriterien besonders wichtig sind, hängt vom Gut und seiner Bedeutung für das Unternehmen ab.',
        ],
      },
      {
        heading: 'Bedarf und Anforderungen zuerst klären',
        paragraphs: [
          'Vor der Suche sollten Bedarf, Spezifikation, Menge, Termin, Qualitätsniveau und Einsatzbereich klar sein. Ohne diese Grundlage sind Angebote kaum vergleichbar: Ein Lieferant kann einen niedrigen Preis nennen, obwohl Menge, Material, Liefertermin oder Service nicht derselben Anforderung entsprechen.',
          'Hilfreich ist die Trennung zwischen Muss- und Wunschkriterien. Musskriterien sind zwingende Voraussetzungen, etwa eine erforderliche technische Eigenschaft, eine Freigabe oder ein spätester Liefertermin. Wer ein Musskriterium nicht erfüllt, scheidet unabhängig von einer späteren Punktebewertung aus.',
          'Wunschkriterien helfen danach bei der Auswahl zwischen grundsätzlich geeigneten Anbietern. Dazu können kürzere Lieferzeiten, besonders gute Zahlungsbedingungen, ein naher Standort oder zusätzlicher Service zählen.',
        ],
      },
      {
        heading: 'Potenzielle Lieferanten identifizieren und vorauswählen',
        paragraphs: [
          [
            'Mögliche Anbieter lassen sich mit der ',
            { type: 'link', href: '/wissen/beschaffungsmarktforschung', text: 'Beschaffungsmarktforschung' },
            ' identifizieren und einordnen. Sie liefert Marktinformationen zu Bezugsquellen, Verfügbarkeiten, Preisen, Kapazitäten und Rahmenbedingungen, ersetzt aber nicht die konkrete Prüfung gegen den eigenen Bedarf.',
          ],
          'In der Vorauswahl werden ungeeignete Anbieter anhand der Musskriterien ausgeschlossen. Das spart Aufwand bei Anfragen und Angebotsvergleich. Dabei sollte nachvollziehbar festgehalten werden, warum ein Lieferant einbezogen oder ausgeschlossen wurde.',
          'Bei kritischen Gütern können zusätzlich Standort, Transportweg, vorhandene Kapazität, finanzielle Stabilität oder Abhängigkeiten in der Lieferkette geprüft werden. Die Tiefe der Prüfung sollte zum möglichen Schaden eines Ausfalls passen.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Lieferantenauswahl in fünf Schritten',
            formula: 'Anforderungen → Lieferanten suchen → bewerten → vergleichen → auswählen',
            description: 'Musskriterien werden vor dem Vergleich geprüft. Erst danach werden die verbleibenden Anbieter anhand passender Kriterien bewertet.',
          },
        ],
      },
      {
        heading: 'Anbieter nach passenden Kriterien vergleichen',
        paragraphs: [
          'Ein Angebotsvergleich betrachtet den Preis nicht isoliert. Neben dem Stück- oder Gesamtpreis können Qualität, Lieferzeit, Lieferfähigkeit, Zuverlässigkeit, Zahlungsbedingungen, Standort, Kapazität und Risiko entscheidend sein. Auch Mindestmengen, Transportkosten, Service, Reklamationsprozess oder technische Unterstützung können je nach Bedarf wichtig werden.',
          'Die Kriterien sollten konkret beschrieben sein. „Gute Qualität“ ist etwa erst vergleichbar, wenn klar ist, welche Spezifikationen, Prüfungen oder Fehlertoleranzen gelten. Ebenso sollte „kurze Lieferzeit“ einen definierten Zeitraum oder einen vereinbarten Termin meinen.',
          'Eine Lieferantenauswahl ist eine Entscheidung vor Beginn oder bei Vergabe einer Lieferbeziehung. Die spätere laufende Beurteilung der tatsächlichen Leistung – etwa Qualität und Termintreue über mehrere Lieferungen – gehört zur Lieferantenbewertung.',
        ],
      },
      {
        heading: 'Nutzwertanalyse, Probebestellung und Audit',
        paragraphs: [
          [
            'Wenn mehrere geeignete Lieferanten nach verschiedenen Kriterien verglichen werden sollen, kann eine ',
            { type: 'link', href: '/wissen/nutzwertanalyse', text: 'Nutzwertanalyse' },
            ' die Entscheidung strukturieren. Sie gewichtet Kriterien und macht die Annahmen sichtbar. Die Methode ersetzt jedoch nicht die vorherige Prüfung von Musskriterien und keine fachliche Einschätzung der Risiken.',
          ],
          'Bei neuen oder besonders wichtigen Lieferanten können eine Probebestellung, Musterprüfung oder ein Audit zusätzliche Informationen liefern. Dabei wird grundsätzlich geprüft, ob Produkt, Prozess und Zusammenarbeit den Anforderungen entsprechen. Der Umfang sollte angemessen sein; nicht jede alltägliche Beschaffung braucht denselben Prüfaufwand.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Lieferant für ein wichtiges Verpackungsmaterial',
            paragraphs: [
              'Ein Onlinehändler benötigt eine bestimmte Verpackung regelmäßig. Die passende Materialqualität und eine Lieferzeit von höchstens zehn Arbeitstagen sind Musskriterien. Drei Anbieter bleiben nach der Vorauswahl übrig.',
              'Der Händler vergleicht Preis einschließlich Transport, bestätigte Kapazität, Zahlungsbedingungen, Lieferzeit und die Zuverlässigkeit aus Referenzen oder einer kleinen Probebestellung. Anbieter A ist etwas günstiger, kann den Termin aber nur unverbindlich nennen. Anbieter B ist teurer, erfüllt die Musskriterien nachweisbar und hält ausreichend Kapazität vor.',
            ],
            effects: [
              'Entscheidung: Anbieter B kann trotz höherem Preis besser passen, wenn eine verspätete Lieferung den Versand an Kunden gefährden würde.',
              'Wichtig: Die Gründe und zugrunde liegenden Annahmen werden festgehalten, damit die Entscheidung später nachvollziehbar bleibt.',
            ],
          },
        ],
      },
      {
        heading: 'Nach der Auswahl weiter beobachten',
        paragraphs: [
          'Mit der Auswahl ist die Arbeit nicht abgeschlossen. Die tatsächliche Leistung kann von Erwartungen abweichen. Qualität, Termin, Kommunikation und vereinbarte Konditionen sollten im laufenden Geschäft beobachtet werden.',
          [
            'Zeigen sich wiederkehrende Abweichungen, kann die Zusammenarbeit über ',
            { type: 'link', href: '/wissen/lieferantenentwicklung', text: 'Lieferantenentwicklung' },
            ' gezielt verbessert werden. Die gewählte Lieferantenstruktur sollte zudem zu den ',
            { type: 'link', href: '/wissen/beschaffungsprinzipien', text: 'Beschaffungsprinzipien und Sourcing-Strategien' },
            ' des Unternehmens passen.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, ausschließlich den niedrigsten Preis zu wählen. Dadurch können Lieferausfälle, Nacharbeit, hohe Mindestmengen oder zusätzliche Transport- und Abstimmungskosten übersehen werden.',
          'Ebenso problematisch sind unklare Anforderungen oder vermischte Muss- und Wunschkriterien. Dann können Anbieter mit unverzichtbaren Defiziten durch gute Punkte in anderen Bereichen unpassend weit vorn landen.',
          'Eine sehr aufwendige Analyse für jede Kleinbestellung bindet dagegen unnötig Zeit. Umfang und Dokumentation der Auswahl sollten zum Beschaffungsvolumen, zur Kritikalität und zum Risiko passen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Lieferantenauswahl bestimmt, welcher Anbieter einen konkreten Bedarf passend und verlässlich decken kann.',
    'Anforderungen, Menge, Termin und Qualitätsniveau müssen vor dem Vergleich klar definiert sein.',
    'Musskriterien entscheiden über die grundsätzliche Eignung; Wunschkriterien helfen bei der Rangfolge geeigneter Anbieter.',
    'Preis, Qualität, Lieferzeit, Lieferfähigkeit, Kapazität, Zahlungsbedingungen, Standort und Risiko sollten zusammen betrachtet werden.',
    'Eine Nutzwertanalyse kann den Vergleich strukturieren, ersetzt aber keine Musskriterien- und Risikoprüfung.',
    'Nach der Auswahl wird die tatsächliche Leistung im laufenden Geschäft weiter beobachtet.',
  ],
  commonMistakes: [
    'den niedrigsten Preis ohne Betrachtung von Qualität, Termin, Kapazität und Risiko wählen',
    'Anforderungen so unklar formulieren, dass Angebote nicht vergleichbar sind',
    'Musskriterien wie ausgleichbare Wunschkriterien behandeln',
    'für jeden Beschaffungsvorgang denselben unverhältnismäßigen Prüfaufwand anwenden',
    'die Auswahlentscheidung und ihre Annahmen nicht nachvollziehbar dokumentieren',
  ],
  faqs: [
    {
      question: 'Was ist Lieferantenauswahl?',
      answer: 'Sie bestimmt aus potenziellen Anbietern den Lieferanten, der die definierten Anforderungen an Leistung, Qualität, Menge, Termin, Kosten und Risiko am besten erfüllt.',
    },
    {
      question: 'Was sind Musskriterien?',
      answer: 'Musskriterien sind zwingende Voraussetzungen, etwa eine technische Spezifikation oder ein spätester Liefertermin. Anbieter, die sie nicht erfüllen, werden vor dem weiteren Vergleich ausgeschlossen.',
    },
    {
      question: 'Reicht der günstigste Preis für die Auswahl?',
      answer: 'Nein. Qualität, Lieferfähigkeit, Kapazität, Lieferzeit, Zahlungsbedingungen und Risiken können für die tatsächlichen Gesamtkosten und die Versorgung wichtiger sein.',
    },
    {
      question: 'Wann ist eine Nutzwertanalyse sinnvoll?',
      answer: 'Sie ist sinnvoll, wenn mehrere grundsätzlich geeignete Lieferanten nach unterschiedlichen qualitativen und quantitativen Kriterien nachvollziehbar verglichen werden sollen.',
    },
    {
      question: 'Was passiert nach der Lieferantenauswahl?',
      answer: 'Die tatsächliche Leistung wird im laufenden Geschäft beobachtet. Abweichungen bei Qualität, Termin oder Zusammenarbeit können Anlass für eine Lieferantenbewertung oder Entwicklungsmaßnahmen sein.',
    },
  ],
  related: [
    'beschaffungsmarktforschung',
    'nutzwertanalyse',
    'lieferantenentwicklung',
    'beschaffungsprinzipien',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lieferantenauswahl;
