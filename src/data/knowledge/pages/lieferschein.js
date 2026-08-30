import { defaultDisclaimer } from '../shared.js';

const lieferschein = {
  slug: 'lieferschein',
  category: 'Belege',
  title: 'Lieferschein',
  description: 'Ein Lieferschein dokumentiert, welche Waren geliefert wurden, und hilft bei Versand, Warenannahme und späterer Zuordnung.',
  seo: {
    title: 'Lieferschein einfach erklärt | Belege24',
    description: 'Was ein Lieferschein dokumentiert, welche Angaben sinnvoll sind und wie er sich von Angebot und Rechnung unterscheidet.',
    canonicalPath: '/wissen/lieferschein',
  },
  article: {
    intro: 'Ein Lieferschein begleitet eine Warenlieferung. Er zeigt, welche Artikel in welcher Menge geliefert wurden, und hilft Absender und Empfänger, die Lieferung mit Auftrag und Rechnung abzugleichen.',
    sections: [
      {
        heading: 'Was ist ein Lieferschein?',
        paragraphs: [
          'Ein Lieferschein ist ein Begleitdokument für Waren. Er dokumentiert die tatsächlich versendeten oder übergebenen Artikel und Mengen. Dadurch lassen sich Versand, Warenannahme und spätere Rückfragen nachvollziehen.',
          'Er ist keine Zahlungsaufforderung und ersetzt keine Rechnung. Eine Empfangsbestätigung auf dem Lieferschein kann zusätzlich helfen, die Übergabe zu dokumentieren.',
        ],
      },
      {
        heading: 'Wofür wird ein Lieferschein verwendet?',
        paragraphs: [
          'Ein Lieferschein ist vor allem praktisch, wenn Ware versendet, persönlich übergeben oder in mehreren Schritten geliefert wird. Er schafft eine gemeinsame Grundlage für Lager, Versand, Kunden und Buchhaltung.',
        ],
        list: [
          'Der Absender kann die gepackte Ware mit dem Auftrag vergleichen.',
          'Der Empfänger kann Menge, Artikel und Zustand bei der Warenannahme prüfen.',
          'Abweichungen, Rückstände oder Schäden lassen sich direkt festhalten.',
          'Die Rechnung kann später eindeutig der gelieferten Ware zugeordnet werden.',
        ],
      },
      {
        heading: 'Ist ein Lieferschein gesetzlich vorgeschrieben?',
        paragraphs: [
          'Für einen Lieferschein gibt es keine allgemeine Pflicht. Ob du ihn brauchst, kann sich aber aus Vereinbarungen mit Kunden, Branchenabläufen oder deinen eigenen Prozessen ergeben.',
          'Für die Rechnung gelten eigene umsatzsteuerliche Anforderungen. Der Lieferschein kann die Lieferung zwar nachvollziehbar machen, ersetzt aber keine erforderliche Rechnung.',
        ],
      },
      {
        heading: 'Welche Angaben sollte ein Lieferschein enthalten?',
        paragraphs: [
          'Es gibt keinen einheitlichen gesetzlichen Pflichtangabenkatalog für jeden Lieferschein. Diese Angaben sind in der Praxis sinnvoll, damit die Lieferung eindeutig zugeordnet und geprüft werden kann:',
        ],
        list: [
          'eindeutiger Titel „Lieferschein“',
          'Name und Anschrift von Absender und Empfänger',
          'Lieferscheinnummer und Ausstellungsdatum',
          'Lieferdatum oder Lieferzeitraum',
          'genaue Artikelbeschreibung und gelieferte Menge',
          'Bezug zu Angebot, Bestellung, Auftrag oder Rechnung',
          'Hinweise zu Rückständen, Schäden oder Teillieferungen',
          'bei Bedarf Name oder Unterschrift der empfangenden Person',
        ],
      },
      {
        heading: 'Lieferschein, Rechnung und Angebot: der Unterschied',
        paragraphs: [
          'Ein Angebot beschreibt vor einem Auftrag, was zu welchen Bedingungen angeboten wird. Eine Auftragsbestätigung hält anschließend den vereinbarten Auftrag fest. Der Lieferschein dokumentiert die tatsächliche Lieferung.',
          'Die Rechnung folgt je nach Ablauf mit oder nach der Lieferung und rechnet den Vorgang ab. Sie enthält die für die Abrechnung und gegebenenfalls Umsatzsteuer wichtigen Angaben. Auf dem Lieferschein stehen Preise daher meist nicht.',
        ],
      },
      {
        heading: 'Teillieferungen und Warenannahme dokumentieren',
        paragraphs: [
          [
            'Bei einer ',
            { type: 'glossary', id: 'teillieferung', text: 'Teillieferung' },
            ' sollte der Lieferschein klar zeigen, welche Positionen jetzt geliefert werden und welche noch offen sind. So lassen sich mehrere Lieferungen demselben Auftrag zuordnen und Fehlmengen später leichter klären.',
          ],
          'Prüfe bei der Warenannahme Artikel, Menge und erkennbare Schäden möglichst zeitnah. Notiere Abweichungen direkt auf dem Lieferschein oder in einem separaten Protokoll und informiere den Lieferanten. Bei Handelsgeschäften zwischen Kaufleuten können für die Untersuchung und Mängelanzeige besondere Regeln gelten.',
        ],
      },
      {
        heading: 'Aufbewahrung',
        paragraphs: [
          'Bewahre den Lieferschein zusammen mit Bestellung, Rechnung und gegebenenfalls einer Empfangsbestätigung auf. So bleibt der Vorgang auch später verständlich.',
          'Für eingehende Lieferscheine, die keine Buchungsbelege sind, endet die steuerliche Aufbewahrungspflicht grundsätzlich mit dem Erhalt der Rechnung. Für abgesandte Lieferscheine gilt dies grundsätzlich mit dem Versand der Rechnung. Dient ein Lieferschein als Buchungsbeleg oder ist er aus anderen Gründen steuerlich relevant, können abweichende Pflichten gelten.',
        ],
      },
    ],
  },
  generator: {
    label: 'Lieferschein erstellen',
    href: '/dokumente/lieferschein',
    text: 'Erstelle einen übersichtlichen Lieferschein für Versand, Übergabe oder Warenannahme direkt im Browser.',
  },
  keyPoints: [
    'dokumentiert gelieferte Waren, Mengen und Lieferzeitpunkt',
    'hilft beim Abgleich mit Auftrag, Bestellung und Rechnung',
    'ist keine Rechnung und fordert keine Zahlung',
    'Preise sind meist nicht erforderlich',
    'Teillieferungen, Rückstände und Abweichungen klar festhalten',
    'mit den zugehörigen Unterlagen geordnet aufbewahren',
  ],
  commonMistakes: [
    'unklare Artikelbeschreibung oder fehlende Mengen',
    'kein Bezug zu Auftrag, Bestellung oder Rechnung',
    'Teillieferungen und Rückstände nicht kennzeichnen',
    'Abweichungen bei der Warenannahme nicht dokumentieren',
    'Lieferschein und Rechnung verwechseln',
    'nicht mehr benötigte Lieferscheine ohne Prüfung der Aufbewahrungspflichten löschen',
  ],
  faqs: [
    {
      question: 'Muss ich einen Lieferschein ausstellen?',
      answer: 'Nein, es gibt keine allgemeine Pflicht für einen Lieferschein. Er ist aber sinnvoll, wenn du Waren versendest oder Übergaben, Mengen und Abweichungen nachvollziehbar dokumentieren möchtest.',
    },
    {
      question: 'Muss ein Lieferschein Preise enthalten?',
      answer: 'Nein. Preise stehen meist im Angebot oder auf der Rechnung. Auf dem Lieferschein reichen in der Regel die gelieferten Artikel und Mengen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Lieferschein und Rechnung?',
      answer: 'Der Lieferschein dokumentiert die Lieferung. Die Rechnung rechnet sie ab und fordert zur Zahlung auf. Deshalb enthält die Rechnung andere, insbesondere steuerliche Angaben.',
    },
    {
      question: 'Was ist der Unterschied zwischen Lieferschein und Angebot?',
      answer: 'Ein Angebot beschreibt vor einem Auftrag die möglichen Waren, Preise und Bedingungen. Ein Lieferschein dokumentiert erst, was tatsächlich geliefert wurde.',
    },
    {
      question: 'Wie dokumentiere ich eine Teillieferung?',
      answer: 'Nenne die gelieferte Teilmenge und halte offene Positionen oder Restmengen eindeutig fest. Ein Bezug zur Bestellung oder Auftragsnummer erleichtert die Zuordnung.',
    },
    {
      question: 'Muss der Empfänger den Lieferschein unterschreiben?',
      answer: 'Eine Unterschrift ist nicht für jeden Lieferschein erforderlich. Sie kann aber als Empfangsbestätigung sinnvoll sein, besonders bei persönlicher Übergabe oder wertvollen Waren.',
    },
    {
      question: 'Wie lange muss ich einen Lieferschein aufbewahren?',
      answer: 'Das hängt von seiner Funktion ab. Lieferscheine ohne Buchungsfunktion können unter den Voraussetzungen von § 147 AO mit Erhalt beziehungsweise Versand der Rechnung entfallen. Relevante Unterlagen solltest du zusammen mit der Rechnung geordnet aufbewahren.',
    },
  ],
  related: [
    'belege',
    'rechnung',
    'angebot',
    'gutschrift',
  ],
  sources: [
    {
      label: '§ 14 UStG – Ausstellung von Rechnungen',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__14.html',
    },
    {
      label: '§ 147 AO – Aufbewahrung von Unterlagen',
      url: 'https://www.gesetze-im-internet.de/ao_1977/__147.html',
    },
    {
      label: '§ 377 HGB – Untersuchung und Mängelanzeige bei Handelsgeschäften',
      url: 'https://www.gesetze-im-internet.de/hgb/__377.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lieferschein;
