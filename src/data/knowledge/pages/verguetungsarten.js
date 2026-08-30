import { defaultDisclaimer } from '../shared.js';

const verguetungsarten = {
  slug: 'verguetungsarten',
  category: 'Personal & Lohn',
  title: 'Vergütungsarten',
  description: 'Vergütungsarten einfach erklärt: Stundenlohn, Gehalt, Ausbildungsvergütung, Akkordlohn, Boni, Provisionen, Zuschläge und Sonderzahlungen.',
  seo: {
    title: 'Vergütungsarten einfach erklärt | Belege24',
    description: 'Erfahre, wie Stundenlohn, Gehalt, Ausbildungsvergütung, Akkordlohn, Boni, Provisionen, Zuschläge und Sonderzahlungen grundsätzlich funktionieren.',
    canonicalPath: '/wissen/verguetungsarten',
  },
  article: {
    intro: 'Vergütungsarten legen fest, wie Beschäftigte für ihre Arbeit bezahlt werden. Ob Stundenlohn, festes Gehalt oder variable Bestandteile: Entscheidend sind die arbeitsvertragliche Vereinbarung, die Leistung im Abrechnungszeitraum und die Regeln für Lohnsteuer und Sozialversicherung.',
    sections: [
      {
        heading: 'Was sind Vergütungsarten?',
        paragraphs: [
          'Vergütungsarten beschreiben, wie die Gegenleistung für Arbeit festgelegt und berechnet wird. Sie können sich nach Arbeitszeit, einem festen Zeitraum, Menge, Leistung, Umsatz oder einer Kombination dieser Kriterien richten.',
          [
            'Die arbeitsrechtlich vereinbarte Vergütung bildet die Grundlage. Für die Abrechnung ist daraus ',
            { type: 'glossary', id: 'arbeitsentgelt', text: 'Arbeitsentgelt' },
            ' zu ermitteln. Welche Bestandteile lohnsteuerlich oder sozialversicherungsrechtlich zu berücksichtigen sind, kann sich je nach Art und Anlass der Zahlung unterscheiden.',
          ],
        ],
      },
      {
        heading: 'Lohn, Gehalt und Arbeitsentgelt unterscheiden',
        paragraphs: [
          'Lohn wird im Alltag häufig für eine Vergütung verwendet, die sich an Arbeitsstunden, Schichten oder Leistungseinheiten orientiert. Gehalt meint meist einen festen Betrag pro Monat. Diese Begriffe beschreiben vor allem die Vergütungsvereinbarung und sind keine pauschalen Steuer- oder Sozialversicherungskategorien.',
          'Arbeitsentgelt ist der weiter gefasste sozialversicherungsrechtliche Begriff. Er kann laufende und einmalige Einnahmen aus einer Beschäftigung erfassen. Deshalb können neben Lohn oder Gehalt auch weitere Zahlungen für die Abrechnung relevant sein.',
        ],
      },
      {
        heading: 'Feste, variable, regelmäßige und einmalige Vergütung',
        paragraphs: [
          'Feste Vergütung ist vorab als Betrag oder Berechnungsregel vereinbart, zum Beispiel ein Monatsgehalt oder ein Stundenlohn. Variable Vergütung hängt zusätzlich von messbaren Faktoren wie Stückzahl, Zielerreichung, Umsatz oder Leistung ab.',
          'Regelmäßige Vergütung fällt wiederkehrend an. Einmalige Vergütung wird nur bei einem bestimmten Anlass oder zu einem bestimmten Zeitpunkt gezahlt, etwa eine Prämie oder Sonderzahlung. Die Einordnung im Arbeitsvertrag und in der Abrechnung sollte klar sein.',
        ],
      },
      {
        heading: 'Häufige Vergütungsarten',
        paragraphs: [
          'Die folgenden Formen können allein oder kombiniert vereinbart werden. Welche Regelung passt, hängt von Tätigkeit, Arbeitszeitmodell und vertraglicher Gestaltung ab.',
        ],
        subsections: [
          {
            heading: 'Stundenlohn',
            paragraphs: [
              'Beim Stundenlohn ergibt sich die Vergütung aus den vereinbarten Stunden und der im Abrechnungszeitraum berücksichtigten Arbeitszeit. Er ist besonders bei wechselnden Einsatzzeiten oder zeitabhängigen Tätigkeiten verbreitet.',
              'Für die Abrechnung sind eine verlässliche Zeiterfassung, vereinbarte Pausen sowie Regeln zu Mehrarbeit oder Zuschlägen wichtig. Nicht jede zusätzlich erfasste Stunde führt automatisch zu einer gleich behandelten Vergütung.',
            ],
          },
          {
            heading: 'Monatsgehalt',
            paragraphs: [
              'Ein Monatsgehalt ist ein regelmäßig vereinbarter Betrag für den Monat. Es ist häufig bei Tätigkeiten mit gleichbleibender Vergütung und fester vertraglicher Arbeitszeit üblich.',
              'Auch bei einem festen Gehalt können variable Bestandteile, Zuschläge oder Abzüge hinzukommen. Das Monatsgehalt allein erklärt deshalb nicht immer das Bruttoentgelt auf der Lohnabrechnung.',
            ],
          },
          {
            heading: 'Ausbildungsvergütung',
            paragraphs: [
              'Auszubildende erhalten eine angemessene Vergütung. Das Berufsbildungsgesetz enthält dafür eigene Vorgaben, einschließlich einer gesetzlichen Mindestvergütung, deren Höhe sich nach dem Beginn des Ausbildungsverhältnisses richten kann.',
              'Tarifvertragliche oder vertragliche Regelungen können zusätzlich maßgeblich sein. Für die Abrechnung gelten die jeweiligen Regeln zu Lohnsteuer und Sozialversicherung; eine Ausbildung ist nicht pauschal beitrags- oder steuerfrei.',
            ],
          },
          {
            heading: 'Akkordlohn',
            paragraphs: [
              [
                'Beim ',
                { type: 'glossary', id: 'akkordlohn', text: 'Akkordlohn' },
                ' hängt die Vergütung ganz oder teilweise von einer messbaren Leistung ab, zum Beispiel von bearbeiteten Stückzahlen. Er kommt eher bei Tätigkeiten mit klar erfassbaren Arbeitsergebnissen in Betracht.',
              ],
              'Die Berechnungsgrundlage, Qualitätsanforderungen, Arbeitszeit und Schutzvorschriften müssen klar geregelt sein. Eine leistungsabhängige Vergütung darf nicht dazu führen, dass andere arbeitsrechtliche Vorgaben unbeachtet bleiben.',
            ],
          },
          {
            heading: 'Prämien und Boni',
            paragraphs: [
              'Prämien und Boni sind zusätzliche Vergütungen, die etwa an Zielerreichung, Qualität, Unternehmenserfolg oder einen besonderen Anlass anknüpfen können. Sie können regelmäßig oder einmalig vereinbart sein.',
              'Wichtig sind klare Kriterien, Berechnungszeiträume und die Frage, ob ein verbindlicher Anspruch besteht. Ihre lohnsteuerliche und sozialversicherungsrechtliche Behandlung richtet sich nicht allein nach der Bezeichnung „Bonus“ oder „Prämie“.',
            ],
          },
          {
            heading: 'Provisionen',
            paragraphs: [
              [
                'Eine ',
                { type: 'glossary', id: 'provision', text: 'Provision' },
                ' knüpft häufig an Umsatz, Vertragsabschlüsse oder andere Vertriebskennzahlen an. Sie kann zusätzlich zu einer festen Vergütung oder als wesentlicher variabler Bestandteil vereinbart werden.',
              ],
              'Der Vertrag sollte festlegen, wann ein Anspruch entsteht, wie Stornierungen behandelt werden und welche Daten für die Berechnung maßgeblich sind. Bei Arbeitnehmern ist die Abrechnung von der Vergütung selbst zu unterscheiden.',
            ],
          },
          {
            heading: 'Zuschläge',
            paragraphs: [
              'Zuschläge erhöhen die Grundvergütung für bestimmte Arbeitsbedingungen oder Zeiten, zum Beispiel Nacht-, Sonn- oder Feiertagsarbeit. Ob ein Zuschlag geschuldet ist, ergibt sich aus Gesetz, Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag.',
              'Ein Zuschlag ist nicht allein wegen seines Namens steuer- oder beitragsfrei. Für einzelne Zuschläge gelten besondere Voraussetzungen, die im konkreten Fall geprüft werden müssen.',
            ],
          },
          {
            heading: 'Einmalzahlungen und Sonderzahlungen',
            paragraphs: [
              [
                'Einmalzahlungen oder ',
                { type: 'glossary', id: 'sonderzahlung', text: 'Sonderzahlungen' },
                ' können zum Beispiel Urlaubs- oder Weihnachtsgeld, eine Anerkennungsprämie oder eine erfolgsbezogene Zahlung sein. Sie sind von der laufenden Grundvergütung zu unterscheiden.',
              ],
              'Ob und wie sie abzurechnen sind, richtet sich nach Anlass, Anspruch, Zahlungszeitpunkt und den jeweils geltenden steuer- und sozialversicherungsrechtlichen Regeln. Die Bezeichnung allein entscheidet nicht über die Behandlung.',
            ],
          },
          {
            heading: 'Mischformen',
            paragraphs: [
              'In der Praxis sind Mischformen häufig: Ein festes Monatsgehalt kann mit Provisionen, Boni oder Zuschlägen kombiniert werden. Ein Stundenlohn kann neben einer regelmäßigen Zulage oder einer einmaligen Prämie bestehen.',
              'Für eine nachvollziehbare Lohnabrechnung sollten die einzelnen Bestandteile getrennt dokumentiert und nach ihrer jeweiligen Berechnungsregel abgerechnet werden.',
            ],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Bruttoentgelt und Lohnabrechnung',
        paragraphs: [
          'Die vereinbarten Vergütungsbestandteile werden in der Lohnabrechnung zum Bruttoentgelt zusammengeführt. Danach folgen – je nach Beschäftigung und Bestandteilen – steuerliche Abzüge, Sozialversicherungsbeiträge sowie mögliche Erstattungen oder weitere Positionen.',
          'Eine klare Bezeichnung jeder Vergütungsart hilft dabei, Bruttoentgelt, steuerpflichtigen Arbeitslohn und Auszahlungsbetrag voneinander zu unterscheiden. Das ist besonders wichtig bei variablen oder einmaligen Zahlungen.',
        ],
      },
      {
        heading: 'Steuer und Sozialversicherung nicht vermischen',
        paragraphs: [
          'Für Lohnsteuer und Sozialversicherung gelten unterschiedliche Gesetze und Prüfungen. Ein Vergütungsbestandteil kann deshalb steuerlich und sozialversicherungsrechtlich nicht zwingend gleich behandelt werden.',
          'Prüfe bei Sonderfällen insbesondere Beschäftigungsart, vertragliche Grundlage, Anlass, Höhe und Zahlungszeitpunkt. Pauschale Aussagen wie „Bonus ist steuerfrei“ oder „Zuschläge sind immer beitragsfrei“ sind ohne diese Prüfung nicht verlässlich.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Lohn, Gehalt und Arbeitsentgelt sind keine austauschbaren Begriffe. Auch feste und variable Vergütung können gleichzeitig vereinbart sein und müssen auf der Abrechnung nachvollziehbar getrennt werden.',
          'Eine Sonderzahlung, ein Sachbezug oder ein Zuschlag wird nicht allein durch die Bezeichnung steuerlich oder sozialversicherungsrechtlich eingeordnet. Grundlage sind immer die konkreten gesetzlichen Voraussetzungen und die tatsächliche Ausgestaltung.',
        ],
      },
    ],
  },
  generator: {
    label: 'Stundenlohn berechnen',
    href: '/tools/stundenlohnrechner',
    text: 'Berechne einen Stundenlohn aus Betrag, Stunden und Minuten, um eine zeitabhängige Vergütung besser einzuordnen.',
  },
  keyPoints: [
    'Vergütungsarten können zeit-, leistungs-, umsatz- oder erfolgsabhängig sein',
    'Lohn und Gehalt beschreiben vor allem die Vergütungsvereinbarung; Arbeitsentgelt ist ein weiter gefasster Begriff',
    'Feste, variable, regelmäßige und einmalige Bestandteile können kombiniert werden',
    'Ausbildungsvergütung folgt eigenen Vorgaben des Berufsbildungsgesetzes',
    'Boni, Provisionen, Zuschläge und Sonderzahlungen brauchen klare Berechnungsregeln',
    'Die Bezeichnung einer Zahlung entscheidet nicht allein über Lohnsteuer oder Sozialversicherung',
    'Vergütungsbestandteile sollten auf der Lohnabrechnung nachvollziehbar getrennt ausgewiesen werden',
  ],
  commonMistakes: [
    'Lohn, Gehalt und Arbeitsentgelt ohne Abgrenzung gleichsetzen',
    'variable Vergütung ohne klare Berechnungsgrundlage vereinbaren',
    'Prämien, Zuschläge oder Sonderzahlungen pauschal als steuer- oder beitragsfrei behandeln',
    'Arbeitszeit, Leistung und Vergütungsanspruch nicht nachvollziehbar dokumentieren',
    'Ausbildungsvergütung wie jede andere Vergütung ohne die Vorgaben des BBiG behandeln',
    'Bruttoentgelt und Auszahlungsbetrag ohne Blick auf die einzelnen Abrechnungsbestandteile vergleichen',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Lohn und Gehalt?',
      answer: 'Lohn orientiert sich häufig an Stunden oder Leistungseinheiten, Gehalt meist an einem festen Monatsbetrag. Entscheidend ist die konkrete arbeitsvertragliche Vereinbarung.',
    },
    {
      question: 'Was ist eine variable Vergütung?',
      answer: 'Variable Vergütung hängt zusätzlich von messbaren Faktoren wie Leistung, Umsatz, Zielerreichung oder Stückzahl ab. Die Berechnungsregeln sollten klar vereinbart sein.',
    },
    {
      question: 'Ist ein Bonus immer steuerpflichtig?',
      answer: 'Das hängt von Art, Anlass und den gesetzlichen Voraussetzungen ab. Die Bezeichnung „Bonus“ allein reicht für eine steuerliche oder sozialversicherungsrechtliche Einordnung nicht aus.',
    },
    {
      question: 'Ist Ausbildungsvergütung sozialversicherungsfrei?',
      answer: 'Nein, eine Ausbildung ist nicht pauschal steuer- oder beitragsfrei. Die Abrechnung folgt den jeweiligen Regeln für das konkrete Ausbildungsverhältnis.',
    },
    {
      question: 'Was ist Akkordlohn?',
      answer: 'Beim Akkordlohn hängt die Vergütung ganz oder teilweise von einer messbaren Leistung ab, etwa von der bearbeiteten Stückzahl.',
    },
    {
      question: 'Was ist eine Provision?',
      answer: 'Eine Provision ist eine leistungs- oder umsatzbezogene Vergütung, die häufig im Vertrieb eingesetzt wird. Wann sie entsteht und wie sie berechnet wird, sollte vertraglich festgelegt sein.',
    },
    {
      question: 'Kann eine Vergütung aus mehreren Bestandteilen bestehen?',
      answer: 'Ja. Häufig werden feste Grundvergütung und variable Bestandteile wie Provisionen, Boni oder Zuschläge kombiniert und getrennt abgerechnet.',
    },
  ],
  related: [
    'personal-lohn',
    'lohnabrechnung',
  ],
  sources: [
    { label: '§ 611a BGB – Arbeitsvertrag und Vergütung', url: 'https://www.gesetze-im-internet.de/bgb/__611a.html' },
    { label: '§ 17 BBiG – Vergütungsanspruch von Auszubildenden', url: 'https://www.gesetze-im-internet.de/bbig_2005/__17.html' },
    { label: '§ 14 SGB IV – Arbeitsentgelt', url: 'https://www.gesetze-im-internet.de/sgb_4/__14.html' },
    { label: '§ 38 EStG – Erhebung der Lohnsteuer', url: 'https://www.gesetze-im-internet.de/estg/__38.html' },
    { label: '§ 3b EStG – Steuerfreie Zuschläge für Sonntags-, Feiertags- oder Nachtarbeit', url: 'https://www.gesetze-im-internet.de/estg/__3b.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default verguetungsarten;
