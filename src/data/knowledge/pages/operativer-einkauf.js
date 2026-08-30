import { defaultDisclaimer } from '../shared.js';

const operativerEinkauf = {
  slug: 'operativer-einkauf',
  category: 'Supply Chain & Logistik',
  title: 'Operativer Einkauf',
  description: 'Operativer Einkauf einfach erklärt: Bedarf, Angebot, Bestellung, Terminüberwachung, Wareneingang und Rechnungsprüfung im Tagesgeschäft.',
  seo: {
    title: 'Operativer Einkauf einfach erklärt | Belege24',
    description: 'Erfahre, wie operativer Einkauf den täglichen Bedarf von der Bedarfsmeldung über Bestellung und Wareneingang bis zur Rechnungsprüfung abwickelt.',
    canonicalPath: '/wissen/operativer-einkauf',
  },
  article: {
    intro: 'Operativer Einkauf sorgt dafür, dass benötigte Waren, Materialien und Leistungen im Tagesgeschäft rechtzeitig verfügbar sind. Er setzt den konkreten Bedarf in Anfragen, Bestellungen, Terminüberwachung, Wareneingang und Rechnungsprüfung um.',
    sections: [
      {
        heading: 'Was ist operativer Einkauf?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'operativer-einkauf', text: 'operative Einkauf' },
            ' bearbeitet die laufende Bedarfsdeckung. Er arbeitet mit konkreten Mengen, Artikeln, Lieferterminen, Bestellinformationen und den vereinbarten Konditionen.',
          ],
          'Sein Ziel ist, dass das Unternehmen die richtige Ware oder Leistung in passender Menge, Qualität und Zeit erhält. Dafür braucht er aktuelle Informationen aus Bedarfsmeldungen, Lagerbeständen, Kundenaufträgen oder Produktionsplanung.',
        ],
      },
      {
        heading: 'Vom Bedarf bis zur Rechnungsprüfung',
        paragraphs: [
          'Der genaue Ablauf hängt vom Unternehmen und vom Beschaffungsgegenstand ab. Bei einfachen Wiederholbestellungen sind manche Schritte standardisiert; bei neuen oder kritischen Bedarfen können Anfrage, Vergleich und Freigabe umfangreicher sein.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Operativer Einkaufsprozess',
            formula: 'Bedarfsmeldung → Anfrage/Angebot → Bestellung → Auftragsbestätigung → Terminüberwachung → Wareneingang → Rechnungsprüfung',
            description: 'Die Schritte stellen sicher, dass Bedarf, Bestellung, Lieferung und Abrechnung nachvollziehbar zusammenpassen.',
          },
        ],
      },
      {
        heading: 'Bedarf, Anfrage und Angebot',
        paragraphs: [
          'Am Anfang steht eine Bedarfsmeldung oder ein anderer Auslöser, etwa ein unterschrittener Bestand, ein Kundenauftrag oder ein geplanter Verbrauch. Wichtig sind eine eindeutige Artikel- oder Leistungsbeschreibung, Menge, gewünschter Termin und gegebenenfalls Qualitätsanforderungen.',
          'Bei nicht standardisierten oder neuen Bedarfen kann der Einkauf eine Anfrage stellen und Angebote vergleichen. Dabei geht es nicht nur um den Preis: Lieferzeit, Mindestmenge, Verpackung, Transport, Zahlungs- und Lieferbedingungen sowie technische Anforderungen können ebenfalls entscheidend sein.',
          [
            'Das ',
            { type: 'link', href: '/wissen/angebot', text: 'Angebot' },
            ' hält eine mögliche Leistung und ihre Konditionen fest. Es ist nicht automatisch schon eine Bestellung.',
          ],
        ],
      },
      {
        heading: 'Bestellung, Auftragsbestätigung und Terminüberwachung',
        paragraphs: [
          'Die Bestellung sollte sich auf klare Bestellinformationen stützen: Artikel oder Leistung, Menge, Preis, Lieferort, Termin, Ansprechpartner, Liefer- und Zahlungsbedingungen sowie die passende Bestellnummer. Gepflegte Stammdaten zu Artikeln und Lieferanten helfen, Fehler bei Adresse, Einheit, Preis oder Lieferzeit zu vermeiden.',
          'Eine Auftragsbestätigung kann zeigen, ob der Lieferant die Bestellung zu den erwarteten Konditionen annimmt oder Abweichungen nennt. Werden Mengen, Termine oder Preise geändert, sollten die Auswirkungen vor der weiteren Bearbeitung geklärt werden.',
          'Bei kritischen oder termingebundenen Bestellungen überwacht der operative Einkauf den Liefertermin. Frühzeitige Rückfragen bei erkennbaren Verzögerungen können Lager, Produktion und Kundenservice Zeit für Alternativen geben.',
        ],
      },
      {
        heading: 'Wareneingang, Reklamation und Rechnungsprüfung',
        paragraphs: [
          [
            'Beim Wareneingang wird grundsätzlich geprüft, ob Lieferung, Menge, Zustand und gegebenenfalls Qualität zur Bestellung passen. Der ',
            { type: 'link', href: '/wissen/lieferschein', text: 'Lieferschein' },
            ' hilft, die tatsächliche Lieferung mit den vereinbarten Angaben abzugleichen.',
          ],
          'Abweichungen wie Fehlmengen, Beschädigungen oder falsche Artikel sollten zeitnah dokumentiert und mit dem Lieferanten geklärt werden. Ob und wie reklamiert wird, richtet sich nach dem konkreten Vorgang und den vereinbarten Bedingungen.',
          [
            'Bei der Rechnungsprüfung werden Rechnung, Bestellung und Wareneingang grundsätzlich miteinander abgeglichen. Die ',
            { type: 'link', href: '/wissen/rechnung', text: 'Rechnung' },
            ' sollte sich damit nachvollziehbar zuordnen lassen, bevor sie zur Zahlung freigegeben wird.',
          ],
        ],
      },
      {
        heading: 'Zusammenarbeit mit Lager und Buchhaltung',
        paragraphs: [
          'Lager und Wareneingang liefern Rückmeldungen über Bestände, tatsächlich eingetroffene Mengen und Abweichungen. Der operative Einkauf braucht diese Informationen, um Folgebestellungen, Termine oder Reklamationen richtig zu steuern.',
          'Die Buchhaltung benötigt passende Belege und Zuordnungen, damit Eingangsrechnungen geprüft, kontiert und bezahlt werden können. Unklare Bestellnummern, fehlende Wareneingänge oder nicht dokumentierte Preisabweichungen führen sonst leicht zu Rückfragen und Verzögerungen.',
        ],
      },
      {
        heading: 'Unterschied zum strategischen Einkauf',
        paragraphs: [
          [
            'Operativer Einkauf setzt den täglichen Beschaffungsbedarf um. Der ',
            { type: 'link', href: '/wissen/strategischer-einkauf', text: 'strategische Einkauf' },
            ' gestaltet dagegen langfristig Beschaffungsmärkte, Lieferantenstruktur, Risiken und Rahmenbedingungen.',
          ],
          'Beide Aufgaben beeinflussen einander: Operative Daten zu Terminen, Qualität und Abweichungen zeigen, ob langfristige Entscheidungen funktionieren. Strategische Vereinbarungen geben dem Tagesgeschäft den Rahmen für Lieferanten, Konditionen und Prozesse.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Unklare Bedarfsmeldungen oder unvollständige Bestellinformationen können falsche Mengen, falsche Artikel oder verspätete Lieferungen verursachen.',
          'Wer Angebote nur nach dem Preis vergleicht, übersieht möglicherweise Mindestmengen, Lieferzeit, Transportkosten oder Qualitätsanforderungen.',
          'Auch fehlende Terminüberwachung und ein unvollständiger Abgleich zwischen Bestellung, Wareneingang und Rechnung führen zu unnötigen Engpässen, Reklamationen oder Zahlungsrückfragen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Operativer Einkauf deckt den konkreten Bedarf im Tagesgeschäft.',
    'Er verarbeitet Bedarfsmeldungen, Anfragen, Angebote, Bestellungen, Termine und Wareneingänge.',
    'Klare Stammdaten und Bestellinformationen verhindern viele Abweichungen.',
    'Wareneingang und Rechnungsprüfung verbinden Bestellung, tatsächliche Lieferung und Abrechnung.',
    'Lager und Buchhaltung liefern wichtige Informationen für die laufende Abwicklung.',
    'Strategischer Einkauf setzt den langfristigen Rahmen und wird nicht durch den operativen Einkauf ersetzt.',
  ],
  commonMistakes: [
    'Bedarf, Artikelbeschreibung, Menge oder Termin nicht eindeutig festhalten',
    'Angebote allein nach dem Preis vergleichen',
    'abweichende Auftragsbestätigungen oder Liefertermine nicht prüfen',
    'Wareneingang, Bestellung und Rechnung nicht miteinander abgleichen',
    'Stammdaten und Bestellnummern unvollständig oder uneinheitlich pflegen',
    'wiederkehrende operative Probleme nicht an den strategischen Einkauf zurückmelden',
  ],
  faqs: [
    {
      question: 'Was macht der operative Einkauf?',
      answer: 'Er organisiert die tägliche Bedarfsdeckung – von Bedarfsmeldung und Bestellung bis zu Terminüberwachung, Wareneingang und Rechnungsprüfung.',
    },
    {
      question: 'Warum ist die Auftragsbestätigung wichtig?',
      answer: 'Sie kann zeigen, ob der Lieferant Menge, Preis, Termin und weitere Konditionen wie erwartet bestätigt oder Abweichungen nennt.',
    },
    {
      question: 'Was wird beim Wareneingang geprüft?',
      answer: 'Grundsätzlich werden Lieferung, Menge, Zustand und bei Bedarf Qualität mit Bestellung und Lieferschein abgeglichen.',
    },
    {
      question: 'Was gehört zur Rechnungsprüfung?',
      answer: 'Rechnung, Bestellung und Wareneingang werden grundsätzlich auf ihre Übereinstimmung geprüft, bevor die Rechnung zur Zahlung freigegeben wird.',
    },
    {
      question: 'Was ist der Unterschied zum strategischen Einkauf?',
      answer: 'Operativer Einkauf wickelt den laufenden Bedarf ab. Strategischer Einkauf gestaltet langfristig Märkte, Lieferanten, Risiken und Rahmenbedingungen.',
    },
  ],
  related: [
    'beschaffung',
    'strategischer-einkauf',
    'angebot',
    'lieferschein',
    'rechnung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default operativerEinkauf;
