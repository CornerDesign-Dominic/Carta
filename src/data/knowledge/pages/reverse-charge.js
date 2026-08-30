import { defaultDisclaimer } from '../shared.js';

const reverseCharge = {
  slug: 'reverse-charge',
  category: 'Steuern',
  title: 'Reverse Charge',
  description: 'Reverse Charge einfach erklärt: Umkehr der Steuerschuldnerschaft, typische Fälle, Rechnungsangaben und Vorsteuer beim Leistungsempfänger.',
  seo: {
    title: 'Reverse Charge einfach erklärt | Belege24',
    description: 'Erfahre, wann Reverse Charge gilt, wer die Umsatzsteuer schuldet und was bei Rechnung, Vorsteuer sowie grenzüberschreitenden Leistungen wichtig ist.',
    canonicalPath: '/wissen/reverse-charge',
  },
  article: {
    intro: 'Reverse Charge bedeutet „Umkehr der Steuerschuldnerschaft“. In den gesetzlich bestimmten Fällen schuldet nicht der leistende Unternehmer die Umsatzsteuer, sondern der Leistungsempfänger.',
    sections: [
      {
        heading: 'Was bedeutet Reverse Charge?',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'reverse-charge', text: 'Reverse-Charge-Verfahren' },
            ' wird die Umsatzsteuer nicht vom leistenden Unternehmer, sondern vom Leistungsempfänger geschuldet. Die Regelung ist in Deutschland vor allem in § 13b UStG verankert.',
          ],
          'Der leistende Unternehmer rechnet seine Leistung in diesen Fällen grundsätzlich ohne gesonderten deutschen Umsatzsteuerbetrag ab. Der Leistungsempfänger muss die Steuer nach den maßgeblichen Vorschriften selbst berechnen und im Umsatzsteuerverfahren erklären.',
        ],
      },
      {
        heading: 'Wer schuldet die Umsatzsteuer?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'leistungsempfaenger', text: 'Leistungsempfänger' },
            ' wird zum Steuerschuldner. Das ist häufig ein Unternehmer, der die Leistung für sein Unternehmen bezieht.',
          ],
          'Der leistende Unternehmer bleibt für die korrekte Rechnung und die Prüfung der Voraussetzungen verantwortlich. Reverse Charge verlagert die Steuerschuld, ersetzt aber keine sorgfältige Beleg- und Nachweisführung.',
        ],
      },
      {
        heading: 'Wann kann Reverse Charge relevant sein?',
        paragraphs: [
          'Reverse Charge gilt nicht bei jedem Geschäft zwischen Unternehmen. Es kommt nur in den gesetzlich geregelten Fällen in Betracht.',
          'Häufig relevant sind bestimmte grenzüberschreitende sonstige Leistungen an Unternehmer sowie einzelne, in § 13b UStG ausdrücklich genannte Inlandssachverhalte. Dazu können unter den jeweiligen Voraussetzungen zum Beispiel Bauleistungen oder Gebäudereinigungsleistungen gehören.',
          'Die konkrete Einordnung hängt unter anderem von Art und Ort der Leistung, dem Status der Beteiligten und möglichen Sonderregeln ab. Eine B2B-Rechnung allein reicht nicht aus, um Reverse Charge anzuwenden.',
        ],
      },
      {
        heading: 'Grenzüberschreitende Leistungen',
        paragraphs: [
          'Bei Dienstleistungen zwischen Unternehmern in verschiedenen Staaten kann der Leistungsort nach den besonderen Ortsregeln beim Leistungsempfänger liegen. Ist die Leistung dadurch in Deutschland steuerbar und ist der Leistende im Ausland ansässig, kann Reverse Charge nach § 13b UStG greifen.',
          'Bei grenzüberschreitenden Vorgängen sind Leistungsort, Umsatzsteuer-Identifikationsnummer, Rechnung und mögliche Meldepflichten besonders wichtig. Warenlieferungen und Dienstleistungen folgen nicht immer denselben Regeln.',
        ],
      },
      {
        heading: 'Was muss auf der Rechnung stehen?',
        paragraphs: [
          'Bei Reverse Charge weist der leistende Unternehmer grundsätzlich keine Umsatzsteuer gesondert aus. Die Rechnung muss stattdessen einen Hinweis auf die Steuerschuldnerschaft des Leistungsempfängers enthalten.',
          'Eine eindeutige Formulierung ist zum Beispiel „Steuerschuldnerschaft des Leistungsempfängers“ oder „Reverse Charge“. Welche weiteren Angaben nötig sind, richtet sich nach dem konkreten Umsatz und den Rechnungsvorschriften.',
        ],
      },
      {
        heading: 'Umsatzsteuer und Vorsteuer beim Leistungsempfänger',
        paragraphs: [
          'Der Leistungsempfänger berechnet die geschuldete Umsatzsteuer selbst und erklärt sie in seinem Umsatzsteuerverfahren. Er darf sie nicht einfach ignorieren, nur weil auf der Rechnung kein Steuerbetrag steht.',
          'Wird die Leistung für steuerpflichtige Unternehmensumsätze verwendet, kann die nach § 13b geschuldete Steuer unter den Voraussetzungen des § 15 UStG zugleich als Vorsteuer abziehbar sein. Ob sich die Beträge wirtschaftlich ausgleichen, hängt deshalb von der tatsächlichen Verwendung und dem Vorsteuerabzug ab.',
        ],
      },
      {
        heading: 'Reverse Charge ist nicht steuerfrei',
        paragraphs: [
          'Bei Reverse Charge ist die Leistung nicht allein deshalb steuerfrei. Die Steuer wird vielmehr dem Leistungsempfänger zugeordnet.',
          'Eine echte Steuerbefreiung richtet sich nach anderen Vorschriften, etwa § 4 UStG. Auch ein 0-%-Steuersatz und die Kleinunternehmerregelung sind vom Reverse-Charge-Verfahren zu unterscheiden.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Wende Reverse Charge nicht automatisch bei jeder Auslands- oder B2B-Rechnung an. Prüfe den Leistungsort, die Beteiligten und den konkreten gesetzlichen Tatbestand. Auf der Rechnung darf kein falscher Umsatzsteuerbetrag stehen, wenn die Steuerschuldnerschaft auf den Leistungsempfänger übergeht.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Reverse Charge ist die Umkehr der Steuerschuldnerschaft',
    'In den geregelten Fällen schuldet der Leistungsempfänger die Umsatzsteuer',
    'Das Verfahren gilt nicht automatisch bei jedem B2B- oder Auslandsgeschäft',
    '§ 13b UStG regelt wichtige Fälle der Umkehr der Steuerschuldnerschaft',
    'Bei Reverse Charge wird grundsätzlich keine Umsatzsteuer gesondert auf der Rechnung ausgewiesen',
    'Die Rechnung braucht einen Hinweis auf die Steuerschuldnerschaft des Leistungsempfängers',
    'Der Leistungsempfänger muss die Steuer im Umsatzsteuerverfahren berücksichtigen',
    'Ein Vorsteuerabzug kann unter den gesetzlichen Voraussetzungen möglich sein',
  ],
  commonMistakes: [
    'Reverse Charge bei jedem B2B-Geschäft anwenden',
    'grenzüberschreitende Warenlieferungen und Dienstleistungen gleich behandeln',
    'Leistungsort und Status des Leistungsempfängers nicht prüfen',
    'auf der Reverse-Charge-Rechnung Umsatzsteuer gesondert ausweisen',
    'den Hinweis auf die Steuerschuldnerschaft des Leistungsempfängers vergessen',
    'die geschuldete Umsatzsteuer beim Leistungsempfänger nicht erklären',
    'Reverse Charge mit Steuerfreiheit oder der Kleinunternehmerregelung verwechseln',
  ],
  faqs: [
    { question: 'Was bedeutet Reverse Charge einfach erklärt?', answer: 'Bei Reverse Charge schuldet nicht der leistende Unternehmer die Umsatzsteuer, sondern der Leistungsempfänger. Das gilt nur in gesetzlich bestimmten Fällen.' },
    { question: 'Gilt Reverse Charge bei jedem B2B-Geschäft?', answer: 'Nein. Eine Leistung zwischen Unternehmen genügt nicht. Entscheidend sind der konkrete gesetzliche Tatbestand, der Leistungsort und die Voraussetzungen des einzelnen Falls.' },
    { question: 'Muss auf einer Reverse-Charge-Rechnung Umsatzsteuer stehen?', answer: 'Grundsätzlich wird keine Umsatzsteuer gesondert ausgewiesen. Die Rechnung muss aber einen Hinweis auf die Steuerschuldnerschaft des Leistungsempfängers enthalten.' },
    { question: 'Wer zahlt die Umsatzsteuer bei Reverse Charge?', answer: 'Der Leistungsempfänger schuldet die Umsatzsteuer und muss sie im Umsatzsteuerverfahren berücksichtigen.' },
    { question: 'Kann der Leistungsempfänger bei Reverse Charge Vorsteuer abziehen?', answer: 'Die nach § 13b geschuldete Steuer kann unter den Voraussetzungen des § 15 UStG als Vorsteuer abziehbar sein. Das hängt insbesondere von der Verwendung der Leistung ab.' },
    { question: 'Ist Reverse Charge dasselbe wie steuerfrei?', answer: 'Nein. Bei Reverse Charge wird die Steuer auf den Leistungsempfänger verlagert. Bei einem steuerfreien Umsatz wird die Steuer aufgrund einer Befreiung nicht erhoben.' },
  ],
  related: ['steuern', 'umsatzsteuer', 'vorsteuer', 'steuerfreie-umsaetze', 'rechnung', 'innergemeinschaftliche-lieferung'],
  sources: [
    { label: '§ 3a UStG – Ort der sonstigen Leistung', url: 'https://www.gesetze-im-internet.de/ustg_1980/__3a.html' },
    { label: '§ 13b UStG – Leistungen, für die der Leistungsempfänger die Steuer schuldet', url: 'https://www.gesetze-im-internet.de/ustg_1980/__13b.html' },
    { label: '§ 14a UStG – Zusätzliche Pflichten bei der Rechnungsausstellung', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14a.html' },
    { label: '§ 15 UStG – Vorsteuerabzug', url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default reverseCharge;
