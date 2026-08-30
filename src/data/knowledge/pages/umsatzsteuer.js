import { defaultDisclaimer } from '../shared.js';

const umsatzsteuer = {
  slug: 'umsatzsteuer',
  category: 'Steuern',
  title: 'Umsatzsteuer',
  description: 'Umsatzsteuer einfach erklärt: Steuersätze, Netto und Brutto, Vorsteuer, Zahllast und wichtige Angaben auf Rechnungen.',
  seo: {
    title: 'Umsatzsteuer einfach erklärt | Belege24',
    description: 'Was Umsatzsteuer bedeutet, wie Netto und Brutto zusammenhängen und was du zu Vorsteuer, Zahllast und Kleinunternehmern wissen solltest.',
    canonicalPath: '/wissen/umsatzsteuer',
  },
  article: {
    intro: 'Umsatzsteuer ist die Steuer, die Unternehmen bei vielen Verkäufen und Leistungen berechnen und an das Finanzamt abführen. Für Kunden ist sie meist Teil des Bruttopreises. Unternehmen verrechnen sie in der Regel mit der Vorsteuer aus eigenen betrieblichen Einkäufen.',
    sections: [
      {
        heading: 'Was ist Umsatzsteuer?',
        paragraphs: [
          'Umsatzsteuer fällt grundsätzlich auf steuerpflichtige Lieferungen und Leistungen an. Umgangssprachlich wird oft von Mehrwertsteuer gesprochen. Im Alltag ist damit meist dieselbe Steuer gemeint; im Gesetz heißt sie Umsatzsteuer.',
          'Du berechnest sie auf den Nettobetrag und weist sie – sofern keine Ausnahme gilt – auf der Rechnung aus. Den Steuerbetrag vereinnahmst du nicht als eigenen Ertrag, sondern führst ihn im Rahmen deiner Umsatzsteuererklärung an das Finanzamt ab.',
        ],
      },
      {
        heading: 'Netto, Umsatzsteuer und Brutto',
        paragraphs: [
          'Der Nettobetrag ist der Preis ohne Umsatzsteuer. Die Umsatzsteuer wird darauf berechnet. Der Bruttobetrag ist die Summe aus Netto und Umsatzsteuer und damit der Betrag, den der Kunde zahlt.',
          'Beispiel: Bei 100 Euro netto und 19 % Umsatzsteuer beträgt die Steuer 19 Euro. Der Bruttobetrag liegt bei 119 Euro.',
        ],
        list: [
          'Netto × Steuersatz = Umsatzsteuer',
          'Netto + Umsatzsteuer = Brutto',
        ],
      },
      {
        heading: 'Welche Steuersätze gibt es?',
        paragraphs: [
          'Der reguläre Steuersatz beträgt in Deutschland 19 %. Für bestimmte, im Gesetz genannte Umsätze gilt der ermäßigte Steuersatz von 7 %. Dazu gehören je nach Voraussetzungen zum Beispiel viele Lebensmittel, Bücher oder bestimmte Beförderungsleistungen.',
          'Welcher Steuersatz im Einzelfall gilt, richtet sich nicht allein nach der Bezeichnung einer Ware oder Leistung. Prüfe deshalb bei Zweifeln die gesetzliche Regelung oder lass dich fachlich beraten.',
        ],
      },
      {
        heading: '0 % ist nicht automatisch steuerfrei',
        paragraphs: [
          'Ein Steuersatz von 0 % ist nur für bestimmte gesetzlich geregelte Umsätze vorgesehen. Der Umsatz bleibt dabei grundsätzlich steuerbar, die Steuer beträgt aber null Prozent.',
          'Steuerfrei bedeutet etwas anderes: Das Gesetz nimmt den Umsatz unter bestimmten Voraussetzungen von der Umsatzsteuer aus. Auch bei steuerfreien Umsätzen oder 0 %-Umsätzen können zusätzliche Hinweise und Nachweise erforderlich sein.',
        ],
      },
      {
        heading: 'Vorsteuer und Umsatzsteuer-Zahllast',
        paragraphs: [
          [
            'Als ',
            { type: 'glossary', id: 'vorsteuer', text: 'Vorsteuer' },
            ' bezeichnet man die Umsatzsteuer, die dir andere Unternehmen für betriebliche Einkäufe berechnen. Unter den gesetzlichen Voraussetzungen kannst du sie als Vorsteuer abziehen. Dafür brauchst du regelmäßig eine ordnungsgemäße Rechnung.',
          ],
          [
            'Die ',
            { type: 'glossary', id: 'umsatzsteuer-zahllast', text: 'Umsatzsteuer-Zahllast' },
            ' ergibt sich vereinfacht aus deiner Umsatzsteuer aus Verkäufen abzüglich abziehbarer Vorsteuer aus Einkäufen. Ist die Umsatzsteuer höher, zahlst du den Unterschied. Ist die abziehbare Vorsteuer höher, kann sich ein Vorsteuerüberschuss ergeben.',
          ],
        ],
      },
      {
        heading: 'Umsatzsteuer auf Rechnungen',
        paragraphs: [
          'Eine Rechnung muss die umsatzsteuerlichen Pflichtangaben enthalten, wenn sie für einen steuerpflichtigen Umsatz ausgestellt wird. Dazu gehören je nach Fall unter anderem Nettobetrag, Steuersatz, Steuerbetrag und Bruttobetrag.',
          'Verwende nur den Steuersatz, der für die konkrete Leistung oder Lieferung gilt. Bei steuerfreien Umsätzen, der Kleinunternehmerregelung oder anderen Sonderfällen gelten abweichende Angaben. Ein unberechtigter oder falscher Steuerausweis kann steuerliche Folgen haben.',
        ],
      },
      {
        heading: 'Was gilt für Kleinunternehmer?',
        paragraphs: [
          'Für Kleinunternehmer kann die Umsatzsteuerbefreiung nach § 19 UStG gelten, wenn die gesetzlichen Voraussetzungen erfüllt sind. Dann wird für die betroffenen Umsätze keine Umsatzsteuer erhoben und auf der Rechnung keine Umsatzsteuer ausgewiesen.',
          'Die Kleinunternehmerregelung ist nicht mit einem 0 %-Steuersatz gleichzusetzen. Sie hat außerdem Auswirkungen auf den Vorsteuerabzug. Prüfe die Voraussetzungen und die passende Rechnungsangabe sorgfältig, besonders bei einem Wechsel der Regelung.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Lege vor dem Schreiben einer Rechnung fest, welcher Steuersatz oder welche Ausnahme tatsächlich gilt. Rechne Netto, Steuer und Brutto nachvollziehbar und dokumentiere Sonderfälle klar. Bei grenzüberschreitenden Leistungen, Reverse Charge oder Steuerbefreiungen gelten weitere Regeln, die diese Übersicht nicht vollständig abdeckt.',
        ],
      },
    ],
  },
  generator: {
    label: 'Umsatzsteuer berechnen',
    href: '/tools/umsatzsteuerrechner',
    text: 'Berechne Netto, Umsatzsteuer und Brutto für einen Betrag direkt im Umsatzsteuerrechner.',
  },
  keyPoints: [
    'Umsatzsteuer und Mehrwertsteuer meinen im Alltag meist dasselbe',
    'Brutto setzt sich aus Nettobetrag und Umsatzsteuer zusammen',
    'der reguläre Steuersatz beträgt 19 %, der ermäßigte 7 % für bestimmte Umsätze',
    '0 % und steuerfrei sind unterschiedliche umsatzsteuerliche Regelungen',
    'Vorsteuer ist unter gesetzlichen Voraussetzungen abziehbar',
    'die Zahllast ergibt sich vereinfacht aus Umsatzsteuer minus abziehbarer Vorsteuer',
    'Kleinunternehmer weisen für ihre befreiten Umsätze keine Umsatzsteuer aus',
  ],
  commonMistakes: [
    'Netto- und Bruttobetrag verwechseln',
    'einen falschen Steuersatz verwenden',
    '0 % mit einer Steuerbefreiung gleichsetzen',
    'Vorsteuer ohne die notwendigen Voraussetzungen abziehen',
    'Umsatzsteuer trotz Kleinunternehmerregelung ausweisen',
    'Steuerbetrag und Rechnungsangaben nicht rechnerisch abgleichen',
  ],
  faqs: [
    {
      question: 'Ist Umsatzsteuer dasselbe wie Mehrwertsteuer?',
      answer: 'Im allgemeinen Sprachgebrauch ja. Das Gesetz verwendet den Begriff Umsatzsteuer; „Mehrwertsteuer“ ist die übliche Alltagsbezeichnung.',
    },
    {
      question: 'Wie rechne ich von netto auf brutto?',
      answer: 'Multipliziere den Nettobetrag mit dem passenden Steuersatz und addiere den Steuerbetrag zum Netto. Bei 100 Euro netto und 19 % ergibt das 119 Euro brutto.',
    },
    {
      question: 'Wann gelten 7 % Umsatzsteuer?',
      answer: 'Der ermäßigte Steuersatz gilt nur für die im Gesetz genannten Umsätze und unter den jeweiligen Voraussetzungen. Häufige Beispiele sind viele Lebensmittel und Bücher; bei einzelnen Waren und Leistungen können Ausnahmen gelten.',
    },
    {
      question: 'Was ist Vorsteuer?',
      answer: 'Vorsteuer ist die Umsatzsteuer aus betrieblichen Eingangsrechnungen. Sie kann unter den gesetzlichen Voraussetzungen von der eigenen Umsatzsteuer abgezogen werden.',
    },
    {
      question: 'Was bedeutet Umsatzsteuer-Zahllast?',
      answer: 'Die Zahllast ist vereinfacht der Betrag, der nach Verrechnung deiner Umsatzsteuer aus Verkäufen mit abziehbarer Vorsteuer an das Finanzamt zu zahlen ist.',
    },
    {
      question: 'Müssen Kleinunternehmer Umsatzsteuer ausweisen?',
      answer: 'Für Umsätze, die unter die Kleinunternehmerregelung fallen, wird keine Umsatzsteuer ausgewiesen. Ob die Regelung anwendbar ist, hängt von den gesetzlichen Voraussetzungen ab.',
    },
  ],
  related: [
    'steuern',
    'rechnung',
    'gutschrift',
    'quittung',
    'eigenbeleg',
    'vorsteuer',
    'kleinunternehmerregelung',
    'steuerfreie-umsaetze',
    'reverse-charge',
  ],
  sources: [
    {
      label: '§ 4 UStG – Steuerbefreiungen bei Lieferungen und sonstigen Leistungen',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__4.html',
    },
    {
      label: '§ 12 UStG – Steuersätze',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html',
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
      label: '§ 16 UStG – Steuerberechnung',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__16.html',
    },
    {
      label: '§ 19 UStG – Besteuerung der Kleinunternehmer',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__19.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default umsatzsteuer;
