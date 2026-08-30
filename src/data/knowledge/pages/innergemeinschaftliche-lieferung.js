import { defaultDisclaimer } from '../shared.js';

const innergemeinschaftlicheLieferung = {
  slug: 'innergemeinschaftliche-lieferung',
  category: 'Steuern',
  title: 'Innergemeinschaftliche Lieferung',
  description: 'Innergemeinschaftliche Lieferung einfach erklärt: Voraussetzungen, Umsatzsteuer-ID, Rechnung, Nachweise und Zusammenfassende Meldung bei Warenlieferungen in der EU.',
  seo: {
    title: 'Innergemeinschaftliche Lieferung erklärt | Belege24',
    description: 'Erfahre, wann eine innergemeinschaftliche Lieferung vorliegt und was du bei USt-IdNr., Rechnung, Warenbewegung und Zusammenfassender Meldung beachten musst.',
    canonicalPath: '/wissen/innergemeinschaftliche-lieferung',
  },
  article: {
    intro: 'Eine innergemeinschaftliche Lieferung ist eine Warenlieferung von Deutschland in einen anderen EU-Mitgliedstaat. Sie kann beim Lieferer steuerfrei sein, wenn die gesetzlichen Voraussetzungen, Nachweise und Meldepflichten erfüllt sind.',
    sections: [
      {
        heading: 'Was ist eine innergemeinschaftliche Lieferung?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'innergemeinschaftliche-lieferung', text: 'innergemeinschaftliche Lieferung' },
            ' liegt vor, wenn ein Unternehmer Ware aus Deutschland in einen anderen EU-Mitgliedstaat liefert und die Voraussetzungen des § 6a UStG erfüllt.',
          ],
          'Sie betrifft Waren, die tatsächlich befördert oder versendet werden. Reine Dienstleistungen sind keine innergemeinschaftlichen Lieferungen und folgen anderen umsatzsteuerlichen Regeln.',
        ],
      },
      {
        heading: 'Wann kann sie grundsätzlich vorliegen?',
        paragraphs: [
          'Die Ware muss durch dich, den Abnehmer oder einen beauftragten Dritten in einen anderen EU-Mitgliedstaat gelangen. Der Abnehmer ist in der Regel ein dort für Umsatzsteuerzwecke erfasster Unternehmer oder eine entsprechend erfasste juristische Person.',
          'Außerdem muss der Erwerb beim Abnehmer im anderen Mitgliedstaat der Umsatzbesteuerung unterliegen. Eine EU-Lieferung ist deshalb nicht automatisch steuerfrei; die Voraussetzungen müssen zusammen erfüllt und nachgewiesen sein.',
        ],
      },
      {
        heading: 'Unternehmerstatus und Umsatzsteuer-ID',
        paragraphs: [
          'Für die Regelbesteuerung ist die Verwendung einer gültigen Umsatzsteuer-Identifikationsnummer eines anderen Mitgliedstaats durch den Abnehmer ein wichtiger Bestandteil der Voraussetzungen. Prüfe die Nummer vor der Lieferung und dokumentiere die Prüfung.',
          [
            'Die ',
            { type: 'glossary', id: 'umsatzsteuer-id', text: 'Umsatzsteuer-ID' },
            ' des Lieferers und des Abnehmers gehört regelmäßig auch auf die Rechnung. Bei neuen Fahrzeugen oder besonderen Empfängern gelten abweichende Regeln, die diese Übersicht nicht vollständig behandelt.',
          ],
        ],
      },
      {
        heading: 'Warum kann die Lieferung steuerfrei sein?',
        paragraphs: [
          'Erfüllst du die Voraussetzungen, ist die Lieferung in Deutschland nach § 4 Nummer 1 Buchstabe b UStG steuerfrei. Die Besteuerung verlagert sich dabei nicht ins Leere: Beim Abnehmer kann im Bestimmungsland ein innergemeinschaftlicher Erwerb entstehen.',
          [
            'Der ',
            { type: 'glossary', id: 'innergemeinschaftlicher-erwerb', text: 'innergemeinschaftliche Erwerb' },
            ' wird beim Empfänger nach den Regeln des Bestimmungslands behandelt. Für den Lieferer ist es deshalb besonders wichtig, die Voraussetzungen der Steuerfreiheit korrekt zu belegen.',
          ],
        ],
      },
      {
        heading: 'Was gehört auf die Rechnung?',
        paragraphs: [
          'Bei einer steuerfreien innergemeinschaftlichen Lieferung weist du grundsätzlich keine deutsche Umsatzsteuer gesondert aus. Die Rechnung muss die Umsatzsteuer-Identifikationsnummern von Lieferer und Abnehmer enthalten.',
          'Nimm außerdem einen klaren Hinweis auf die Steuerfreiheit auf, zum Beispiel „Steuerfreie innergemeinschaftliche Lieferung gemäß § 4 Nr. 1b i. V. m. § 6a UStG“. Die Rechnung ist grundsätzlich bis zum 15. Tag des Folgemonats auszustellen.',
        ],
      },
      {
        heading: 'Nachweise über die Warenbewegung',
        paragraphs: [
          'Die Steuerfreiheit setzt voraus, dass du die Beförderung oder Versendung der Ware in den anderen Mitgliedstaat nachweisen kannst. Dafür kommen je nach Ablauf zum Beispiel Transport- oder Versendungsbelege, eine Gelangensbestätigung oder andere gesetzlich vorgesehene Belegkombinationen in Betracht.',
          'Bewahre die Nachweise zusammen mit Bestellung, Rechnung und Zahlungsunterlagen auf. Die Nachweise müssen zum konkreten Lieferfall passen und dürfen sich nicht widersprechen.',
        ],
      },
      {
        heading: 'Welche Rolle spielt die Zusammenfassende Meldung?',
        paragraphs: [
          [
            'Innergemeinschaftliche Lieferungen müssen grundsätzlich in der ',
            { type: 'glossary', id: 'zusammenfassende-meldung', text: 'Zusammenfassenden Meldung' },
            ' an das Bundeszentralamt für Steuern angegeben werden. Sie dient dem Abgleich der EU-weiten Umsatzsteuerdaten.',
          ],
          'Der Meldezeitraum und die Abgabefrist richten sich nach den gesetzlichen Vorgaben. Bei Warenlieferungen ist die Meldung grundsätzlich monatlich vorgesehen; unter bestimmten Voraussetzungen ist eine vierteljährliche Meldung möglich.',
        ],
      },
      {
        heading: 'Abgrenzung zu Reverse Charge und Ausfuhrlieferung',
        paragraphs: [
          'Eine innergemeinschaftliche Lieferung betrifft Waren innerhalb der EU. Reverse Charge betrifft dagegen die Steuerschuldnerschaft in bestimmten Umsätzen und ist häufig bei sonstigen Leistungen relevant, kann aber auch Inlandssachverhalte erfassen.',
          'Eine Ausfuhrlieferung liegt vor, wenn Ware die Europäische Union in ein Drittland verlässt. Sie kann ebenfalls steuerfrei sein, beruht aber auf anderen Voraussetzungen und Nachweisen.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Behandle nicht jede EU-Lieferung ohne Weiteres als steuerfrei. Prüfe insbesondere, ob tatsächlich eine Warenlieferung vorliegt, die USt-IdNr. gültig ist, der Erwerb im anderen Mitgliedstaat besteuert wird und die Warenbewegung ausreichend belegt ist.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine innergemeinschaftliche Lieferung betrifft Waren von Deutschland in einen anderen EU-Mitgliedstaat',
    'Die Lieferung kann beim Lieferer steuerfrei sein, wenn die gesetzlichen Voraussetzungen erfüllt sind',
    'Die Warenbewegung in den anderen Mitgliedstaat muss nachgewiesen werden',
    'Die gültige ausländische Umsatzsteuer-ID des Abnehmers ist regelmäßig erforderlich',
    'Beim Empfänger kann im Bestimmungsland ein innergemeinschaftlicher Erwerb entstehen',
    'Die Rechnung enthält grundsätzlich keine deutsche Umsatzsteuer, aber beide Umsatzsteuer-IDs und einen Hinweis auf die Steuerfreiheit',
    'Innergemeinschaftliche Lieferungen sind grundsätzlich in der Zusammenfassenden Meldung anzugeben',
    'Dienstleistungen, Reverse Charge und Ausfuhrlieferungen sind getrennt zu beurteilen',
  ],
  commonMistakes: [
    'jede EU-Lieferung automatisch als steuerfrei behandeln',
    'Warenlieferungen und sonstige Leistungen gleich behandeln',
    'die Umsatzsteuer-ID des Abnehmers nicht prüfen oder dokumentieren',
    'deutsche Umsatzsteuer auf der Rechnung ausweisen',
    'Hinweis auf die Steuerfreiheit oder Umsatzsteuer-IDs auf der Rechnung vergessen',
    'Nachweise über die Warenbewegung nicht vollständig aufbewahren',
    'Zusammenfassende Meldung nicht oder verspätet übermitteln',
    'innergemeinschaftliche Lieferung und Ausfuhrlieferung verwechseln',
  ],
  faqs: [
    { question: 'Was ist eine innergemeinschaftliche Lieferung?', answer: 'Sie ist eine Warenlieferung von Deutschland in einen anderen EU-Mitgliedstaat. Beim Lieferer kann sie unter den gesetzlichen Voraussetzungen steuerfrei sein.' },
    { question: 'Ist jede Lieferung in ein EU-Land steuerfrei?', answer: 'Nein. Es müssen insbesondere Voraussetzungen zum Abnehmer, zur Umsatzsteuer-ID, zur Besteuerung des Erwerbs und zur Warenbewegung erfüllt sein.' },
    { question: 'Welche Umsatzsteuer steht auf der Rechnung?', answer: 'Bei einer steuerfreien innergemeinschaftlichen Lieferung wird grundsätzlich keine deutsche Umsatzsteuer gesondert ausgewiesen. Die Rechnung braucht beide Umsatzsteuer-IDs und einen Hinweis auf die Steuerfreiheit.' },
    { question: 'Was ist der innergemeinschaftliche Erwerb?', answer: 'Das ist die umsatzsteuerliche Behandlung der Warenanschaffung beim Empfänger im anderen EU-Mitgliedstaat. Sie ist die Gegenregel zur steuerfreien Lieferung beim Lieferer.' },
    { question: 'Brauche ich einen Nachweis über den Transport?', answer: 'Ja. Für die Steuerfreiheit muss die Beförderung oder Versendung der Ware in den anderen Mitgliedstaat nachgewiesen werden.' },
    { question: 'Ist eine innergemeinschaftliche Lieferung Reverse Charge?', answer: 'Nein. Eine innergemeinschaftliche Lieferung betrifft Waren innerhalb der EU und den Erwerb beim Empfänger. Reverse Charge regelt die Steuerschuldnerschaft in anderen gesetzlich bestimmten Fällen.' },
  ],
  related: ['steuern', 'umsatzsteuer', 'vorsteuer', 'steuerfreie-umsaetze', 'reverse-charge', 'rechnung'],
  sources: [
    { label: '§ 1a UStG – Innergemeinschaftlicher Erwerb', url: 'https://www.gesetze-im-internet.de/ustg_1980/__1a.html' },
    { label: '§ 4 UStG – Steuerbefreiungen bei Lieferungen und sonstigen Leistungen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__4.html' },
    { label: '§ 6a UStG – Innergemeinschaftliche Lieferung', url: 'https://www.gesetze-im-internet.de/ustg_1980/__6a.html' },
    { label: '§ 14a UStG – Zusätzliche Pflichten bei der Rechnungsausstellung', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14a.html' },
    { label: '§ 18a UStG – Zusammenfassende Meldung', url: 'https://www.gesetze-im-internet.de/ustg_1980/__18a.html' },
    { label: '§ 17a UStDV – Gelangensvermutung bei innergemeinschaftlichen Lieferungen', url: 'https://www.gesetze-im-internet.de/ustdv_1980/__17a.html' },
    { label: '§ 17b UStDV – Nachweis bei innergemeinschaftlichen Lieferungen', url: 'https://www.gesetze-im-internet.de/ustdv_1980/__17b.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default innergemeinschaftlicheLieferung;
