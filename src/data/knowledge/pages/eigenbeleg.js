import { defaultDisclaimer } from '../shared.js';

const eigenbeleg = {
  slug: 'eigenbeleg',
  category: 'Belege',
  title: 'Eigenbeleg',
  description: 'Ein Eigenbeleg dokumentiert eine betriebliche Ausgabe, wenn der ursprüngliche Beleg fehlt und kein Ersatz beschafft werden kann.',
  seo: {
    title: 'Eigenbeleg erstellen und verwenden | Belege24',
    description: 'Wann ein Eigenbeleg infrage kommt, welche Angaben und Nachweise wichtig sind und was beim Vorsteuerabzug zu beachten ist.',
    canonicalPath: '/wissen/eigenbeleg',
  },
  article: {
    intro: 'Ein Eigenbeleg ist ein selbst erstellter Ersatzbeleg für eine tatsächlich entstandene betriebliche Ausgabe. Er kommt ausnahmsweise infrage, wenn der ursprüngliche Beleg fehlt und keine Kopie oder Ersatzrechnung beschafft werden kann.',
    sections: [
      {
        heading: 'Was ist ein Eigenbeleg?',
        paragraphs: [
          [
            'Mit einem Eigenbeleg hältst du einen Geschäftsvorfall für deine Buchhaltung fest, zu dem kein ',
            { type: 'glossary', id: 'fremdbeleg', text: 'Fremdbeleg' },
            ' wie eine Rechnung, Quittung oder ein Kassenbon vorliegt. Du erstellst den Beleg selbst und beschreibst die Ausgabe so, dass sie später nachvollziehbar bleibt.',
          ],
          'Ein Eigenbeleg ist kein gleichwertiger Ersatz für jeden fehlenden Originalbeleg. Ob die Ausgabe steuerlich anerkannt wird, hängt von den Umständen und den vorhandenen Nachweisen ab.',
        ],
      },
      {
        heading: 'Wann kann ein Eigenbeleg verwendet werden?',
        paragraphs: [
          'Bitte zuerst den Verkäufer oder Leistungserbringer um eine Belegkopie oder Ersatzrechnung. Ist das nicht möglich, kann ein Eigenbeleg insbesondere bei einzelnen, plausiblen Vorgängen helfen.',
        ],
        list: [
          'Ein Kassenbon oder eine Quittung ist verloren gegangen und kann nicht ersetzt werden.',
          'Ein Park-, Porto- oder anderer Automat hat keinen Beleg ausgegeben.',
          'Für eine kleinere betriebliche Barausgabe wurde kein Beleg ausgestellt.',
          'Eine betriebliche Zahlung an eine Privatperson lässt sich nicht durch einen anderen Beleg dokumentieren.',
          'Zusätzliche Unterlagen belegen Zahlung, Empfänger und betrieblichen Anlass.',
        ],
      },
      {
        heading: 'Wann reicht ein Eigenbeleg nicht aus?',
        paragraphs: [
          [
            'Ein Eigenbeleg macht private oder steuerlich nicht abziehbare Ausgaben nicht zu ',
            { type: 'glossary', id: 'betriebsausgabe', text: 'Betriebsausgaben' },
            '. Er darf auch nicht für erfundene, frei geschätzte oder tatsächlich nicht gezahlte Beträge verwendet werden.',
          ],
          'Nutze ihn nicht, um eine erhältliche Rechnung bewusst zu ersetzen. Für Vorgänge mit besonderen Nachweispflichten, etwa eine Bewirtung in einer Gaststätte oder eine Spende, reicht ein Eigenbeleg allein regelmäßig nicht aus.',
          'Eine feste Höchstgrenze für Eigenbelege ist gesetzlich nicht vorgegeben. Mit steigendem oder ungewöhnlichem Betrag werden eine genaue Begründung und aussagekräftige Nachweise jedoch wichtiger. Häufige Eigenbelege können zudem Zweifel an der ordnungsgemäßen Belegführung wecken.',
        ],
      },
      {
        heading: 'Welche Angaben sollte ein Eigenbeleg enthalten?',
        paragraphs: [
          'Beschreibe den Vorgang konkret und vollständig. So können Buchung, Zahlung und betrieblicher Anlass eindeutig zugeordnet werden.',
        ],
        list: [
          'Titel „Eigenbeleg“',
          'Name und Anschrift des Unternehmens oder Ausstellers',
          'Datum der Ausgabe und Erstellungsdatum des Eigenbelegs',
          'Name und möglichst Anschrift des Zahlungsempfängers',
          'genaue Beschreibung der Ware, Leistung oder Ausgabe',
          'betrieblicher Anlass oder Verwendungszweck',
          'tatsächlich gezahlter Gesamtbetrag und Zahlungsart',
          'Grund für den fehlenden Originalbeleg',
          'Verweis auf ergänzende Nachweise',
          'Name des Erstellers und möglichst eine Unterschrift',
        ],
      },
      {
        heading: 'Eigenbeleg und Vorsteuerabzug',
        paragraphs: [
          [
            'Ein Eigenbeleg kann die betriebliche Ausgabe dokumentieren. Für den ',
            { type: 'glossary', id: 'vorsteuerabzug', text: 'Vorsteuerabzug' },
            ' ist grundsätzlich eine nach den umsatzsteuerlichen Vorgaben ausgestellte Rechnung erforderlich. Ein selbst erstellter Eigenbeleg erfüllt diese Voraussetzung regelmäßig nicht.',
          ],
          'Ziehe deshalb keine Vorsteuer allein aus einem Eigenbeleg oder aus einem selbst geschätzten Steuerbetrag ab. Wird die Ausgabe anerkannt, kann der tatsächlich gezahlte Gesamtbetrag je nach Einzelfall als Aufwand berücksichtigt werden.',
        ],
      },
      {
        heading: 'Welche Nachweise helfen?',
        paragraphs: [
          'Erstelle den Eigenbeleg möglichst zeitnah und bewahre ihn zusammen mit allen Unterlagen auf, die den Vorgang stützen.',
        ],
        list: [
          'Kontoauszug oder Kartenabrechnung',
          'Bestellung, Buchungsbestätigung oder E-Mail',
          'Schriftverkehr mit Verkäufer oder Leistungserbringer',
          'Preislisten, Fotos oder andere Unterlagen zum Vorgang',
          'bei Barzahlungen Angaben zum Empfänger oder zu anwesenden Personen',
        ],
      },
      {
        heading: 'Aufbewahrung und Buchhaltung',
        paragraphs: [
          'Ordne den Eigenbeleg eindeutig der Buchung zu und archiviere ihn gemeinsam mit den ergänzenden Nachweisen. Buchungsbelege sind grundsätzlich acht Jahre aufzubewahren; die Frist beginnt mit dem Schluss des Kalenderjahres, in dem der Beleg entstanden ist.',
          'Bei einer digitalen Ablage muss der Beleg während der Aufbewahrungszeit verfügbar und lesbar bleiben. Änderungen dürfen den ursprünglichen Inhalt nicht unkenntlich machen. Welche Pflichten im Einzelfall gelten, solltest du bei Unsicherheit steuerlich klären lassen.',
        ],
      },
    ],
  },
  generator: {
    label: 'Eigenbeleg erstellen',
    href: '/dokumente/eigenbeleg',
    text: 'Erstelle einen übersichtlichen Eigenbeleg direkt im Browser und ergänze ihn um deine vorhandenen Nachweise.',
  },
  keyPoints: [
    'nur für eine tatsächlich entstandene betriebliche Ausgabe verwenden',
    'zuerst Belegkopie oder Ersatzrechnung anfordern',
    'Grund für den fehlenden Originalbeleg genau angeben',
    'Zahlung und betrieblichen Anlass zusätzlich nachweisen',
    'keine Vorsteuer allein aus dem Eigenbeleg abziehen',
    'Eigenbeleg und ergänzende Unterlagen gemeinsam aufbewahren',
  ],
  commonMistakes: [
    'unklare Beschreibung oder fehlender betrieblicher Anlass',
    'kein Grund für den fehlenden Originalbeleg',
    'keine ergänzenden Zahlungsnachweise',
    'freie Schätzung von Betrag, Empfänger oder Steuer',
    'regelmäßige Verwendung statt einer Ausnahme',
    'Vorsteuerabzug ohne ordnungsgemäße Rechnung',
    'Verwendung für private oder nicht abziehbare Ausgaben',
  ],
  faqs: [
    {
      question: 'Wird ein Eigenbeleg steuerlich anerkannt?',
      answer: 'Ein Eigenbeleg kann eine betriebliche Ausgabe dokumentieren, garantiert aber keine steuerliche Anerkennung. Entscheidend sind ein plausibler Geschäftsvorfall, vollständige Angaben und passende Nachweise.',
    },
    {
      question: 'Gibt es eine Höchstgrenze für Eigenbelege?',
      answer: 'Eine feste gesetzliche Höchstgrenze ist nicht vorgegeben. Bei höheren oder ungewöhnlichen Beträgen steigen jedoch die Anforderungen an Begründung und Nachweise.',
    },
    {
      question: 'Kann ich mit einem Eigenbeleg Vorsteuer abziehen?',
      answer: 'Grundsätzlich nicht allein auf Basis des Eigenbelegs. Für den Vorsteuerabzug ist regelmäßig eine ordnungsgemäße Rechnung des leistenden Unternehmers erforderlich.',
    },
    {
      question: 'Muss ein Eigenbeleg unterschrieben werden?',
      answer: 'Die Unterschrift ist nicht das einzige Kriterium für die Anerkennung, verbessert aber die Zuordnung und Nachvollziehbarkeit. Sie sollte deshalb möglichst ergänzt werden.',
    },
    {
      question: 'Was mache ich bei einem verlorenen Kassenbon?',
      answer: 'Fordere zuerst eine Kopie oder einen Ersatzbeleg an. Ist das nicht möglich, dokumentiere den Vorgang zeitnah und füge vorhandene Zahlungs- und Bestellnachweise bei.',
    },
    {
      question: 'Darf ich den Betrag schätzen?',
      answer: 'Trage den tatsächlich gezahlten und nachvollziehbaren Betrag ein. Eine freie Schätzung genügt nicht als verlässlicher Nachweis.',
    },
  ],
  related: [
    'belege',
    'rechnung',
    'quittung',
    'gutschrift',
  ],
  sources: [
    {
      label: '§ 4 EStG – Betriebsausgaben und Abzugsbeschränkungen',
      url: 'https://www.gesetze-im-internet.de/estg/__4.html',
    },
    {
      label: '§ 14 UStG – Ausstellung von Rechnungen',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__14.html',
    },
    {
      label: '§ 15 UStG – Vorsteuerabzug',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html',
    },
    {
      label: '§ 146 AO – Ordnungsvorschriften für die Buchführung und Aufzeichnungen',
      url: 'https://www.gesetze-im-internet.de/ao_1977/__146.html',
    },
    {
      label: '§ 147 AO – Aufbewahrung von Unterlagen',
      url: 'https://www.gesetze-im-internet.de/ao_1977/__147.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default eigenbeleg;
