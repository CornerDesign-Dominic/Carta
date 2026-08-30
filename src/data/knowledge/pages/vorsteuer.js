import { defaultDisclaimer } from '../shared.js';

const vorsteuer = {
  slug: 'vorsteuer',
  category: 'Steuern',
  title: 'Vorsteuer',
  description: 'Vorsteuer einfach erklärt: Voraussetzungen für den Vorsteuerabzug, Zusammenhang mit Umsatzsteuer und Zahllast sowie wichtige Ausschlüsse.',
  seo: {
    title: 'Vorsteuer und Vorsteuerabzug erklärt | Belege24',
    description: 'Erfahre, was Vorsteuer ist, wer sie abziehen kann und welche Rolle Rechnung, betriebliche Verwendung, Zahllast und Kleinunternehmer spielen.',
    canonicalPath: '/wissen/vorsteuer',
  },
  article: {
    intro: 'Vorsteuer ist die Umsatzsteuer, die dir andere Unternehmen für betriebliche Einkäufe berechnen. Wenn die gesetzlichen Voraussetzungen erfüllt sind, kannst du sie mit der Umsatzsteuer aus deinen eigenen Verkäufen verrechnen.',
    sections: [
      {
        heading: 'Was ist Vorsteuer?',
        paragraphs: [
          'Kaufst du für dein Unternehmen Waren oder Leistungen ein, enthält die Rechnung häufig Umsatzsteuer. Aus deiner Sicht wird dieser Steuerbetrag Vorsteuer genannt.',
          'Vorsteuer ist kein eigener Kostenersatz. Sie kann unter den gesetzlichen Voraussetzungen von der Umsatzsteuer abgezogen werden, die du selbst für steuerpflichtige Umsätze berechnest.',
        ],
      },
      {
        heading: 'Was bedeutet Vorsteuerabzug?',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'vorsteuerabzug', text: 'Vorsteuerabzug' },
            ' ziehst du die abziehbare Umsatzsteuer aus Eingangsleistungen von deiner eigenen Umsatzsteuer ab. Das senkt nicht den Nettopreis der Leistung, sondern die Umsatzsteuer, die du an das Finanzamt abführen musst.',
          ],
          'Grundsätzlich kommt der Abzug für Unternehmer in Betracht, die Leistungen für ihr Unternehmen beziehen. Ob alle Voraussetzungen erfüllt sind, richtet sich nach der konkreten Leistung, ihrer Verwendung und den umsatzsteuerlichen Regelungen.',
        ],
      },
      {
        heading: 'Warum ist eine ordnungsgemäße Rechnung wichtig?',
        paragraphs: [
          'Für den Vorsteuerabzug aus einer Lieferung oder sonstigen Leistung brauchst du regelmäßig eine Rechnung des leistenden Unternehmers mit den erforderlichen Angaben. Sie muss den Vorgang, den Aussteller und den gesondert ausgewiesenen Steuerbetrag nachvollziehbar machen.',
          'Prüfe Rechnungen deshalb zeitnah auf Name und Anschrift, Leistungsbeschreibung, Leistungsdatum, Entgelt, Steuersatz und Steuerbetrag. Fehlen wichtige Angaben, sollte der Aussteller die Rechnung berichtigen.',
        ],
      },
      {
        heading: 'Betriebliche Verwendung der Leistung',
        paragraphs: [
          'Die Eingangsleistung muss für dein Unternehmen bezogen werden. Private Ausgaben berechtigen nicht zum Vorsteuerabzug, auch wenn auf dem Beleg Umsatzsteuer ausgewiesen ist.',
          'Bei gemischt genutzten Leistungen kann nur der unternehmerisch veranlasste Anteil relevant sein. Die Zuordnung und die Aufteilung müssen nachvollziehbar sein; für einzelne Leistungen können zusätzliche Regeln gelten.',
        ],
      },
      {
        heading: 'Umsatzsteuer-Zahllast und Vorsteuerüberschuss',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'umsatzsteuer-zahllast', text: 'Umsatzsteuer-Zahllast' },
            ' ergibt sich vereinfacht aus Umsatzsteuer aus deinen Verkäufen minus abziehbarer Vorsteuer aus betrieblichen Einkäufen.',
          ],
          'Ist die Umsatzsteuer höher, zahlst du den Unterschied im Umsatzsteuerverfahren. Ist die abziehbare Vorsteuer höher, entsteht ein Vorsteuerüberschuss. Wie dieser im Einzelfall berücksichtigt oder erstattet wird, richtet sich nach dem jeweiligen Besteuerungs- und Anmeldungsverfahren.',
        ],
      },
      {
        heading: 'Wann ist der Vorsteuerabzug ausgeschlossen oder eingeschränkt?',
        paragraphs: [
          'Ein Vorsteuerabzug kann zum Beispiel ausgeschlossen sein, wenn die Leistung für steuerfreie Umsätze verwendet wird, für private Zwecke bestimmt ist oder die gesetzlich erforderlichen Nachweise fehlen. Auch für einzelne Aufwendungen gelten besondere Abzugsbeschränkungen.',
          'Ein ausgewiesener Steuerbetrag genügt daher nicht allein. Entscheidend sind immer der tatsächliche Leistungsbezug, die betriebliche Verwendung und die weiteren Voraussetzungen des Umsatzsteuergesetzes.',
        ],
      },
      {
        heading: 'Was gilt für Kleinunternehmer?',
        paragraphs: [
          'Wer die Kleinunternehmerregelung anwendet, weist für die betroffenen Umsätze grundsätzlich keine Umsatzsteuer aus. Im Gegenzug ist der Vorsteuerabzug für diese Umsätze grundsätzlich ausgeschlossen.',
          'Die Regelung kann sich auf die Wirtschaftlichkeit von Anschaffungen auswirken. Ob die Kleinunternehmerregelung anwendbar ist oder ein Wechsel sinnvoll ist, hängt von den gesetzlichen Voraussetzungen und deiner individuellen Situation ab.',
        ],
      },
      {
        heading: 'Warum reicht ein Eigenbeleg nicht für Vorsteuer?',
        paragraphs: [
          'Ein Eigenbeleg kann eine betriebliche Ausgabe dokumentieren, wenn ein Fremdbeleg nicht beschafft werden kann. Er ist jedoch keine Rechnung des leistenden Unternehmers.',
          'Aus einem selbst erstellten Eigenbeleg darfst du deshalb grundsätzlich keine Vorsteuer abziehen. Ein selbst geschätzter oder aufgeteilter Steuerbetrag ersetzt die erforderliche Rechnung nicht.',
        ],
      },
      {
        heading: 'Typische Fehler beim Vorsteuerabzug',
        paragraphs: [
          'Ziehe Vorsteuer nur aus nachvollziehbaren, betrieblich veranlassten Leistungen und mit den erforderlichen Unterlagen ab. Prüfe besonders bei gemischter Nutzung, steuerfreien Umsätzen, Kleinunternehmerregelung und unvollständigen Rechnungen sorgfältig, ob ein Abzug möglich ist.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Vorsteuer ist die Umsatzsteuer aus betrieblichen Eingangsleistungen',
    'Der Vorsteuerabzug setzt die gesetzlichen Voraussetzungen voraus',
    'Für Lieferungen und sonstige Leistungen ist regelmäßig eine ordnungsgemäße Rechnung nötig',
    'Private Ausgaben berechtigen nicht zum Vorsteuerabzug',
    'Die Zahllast ergibt sich vereinfacht aus Umsatzsteuer minus abziehbarer Vorsteuer',
    'Ein Vorsteuerüberschuss kann entstehen, wenn die abziehbare Vorsteuer höher ist',
    'Kleinunternehmer können für die betroffenen Umsätze grundsätzlich keine Vorsteuer abziehen',
    'Ein Eigenbeleg ersetzt die für den Vorsteuerabzug erforderliche Rechnung nicht',
  ],
  commonMistakes: [
    'Vorsteuer aus privaten oder nicht betrieblich verwendeten Leistungen abziehen',
    'unvollständige oder fehlerhafte Rechnungen ungeprüft übernehmen',
    'gemischte Nutzung nicht nachvollziehbar aufteilen',
    'einen ausgewiesenen Steuerbetrag automatisch für abziehbar halten',
    'Vorsteuer trotz Kleinunternehmerregelung abziehen',
    'aus einem Eigenbeleg oder einem geschätzten Steuerbetrag Vorsteuer ableiten',
    'Vorsteuerüberschuss mit einem betrieblichen Gewinn verwechseln',
  ],
  faqs: [
    { question: 'Was ist Vorsteuer einfach erklärt?', answer: 'Vorsteuer ist die Umsatzsteuer, die dir ein anderes Unternehmen für betriebliche Einkäufe berechnet. Unter den gesetzlichen Voraussetzungen kannst du sie von deiner eigenen Umsatzsteuer abziehen.' },
    { question: 'Wer darf Vorsteuer abziehen?', answer: 'Grundsätzlich kommt der Vorsteuerabzug für Unternehmer in Betracht, die Leistungen für ihr Unternehmen beziehen und die gesetzlichen Voraussetzungen erfüllen.' },
    { question: 'Brauche ich für den Vorsteuerabzug eine Rechnung?', answer: 'Für Lieferungen und sonstige Leistungen brauchst du regelmäßig eine ordnungsgemäße Rechnung des leistenden Unternehmers mit den erforderlichen Angaben.' },
    { question: 'Was passiert, wenn die Vorsteuer höher ist als die Umsatzsteuer?', answer: 'Dann entsteht ein Vorsteuerüberschuss. Wie er berücksichtigt oder erstattet wird, richtet sich nach dem jeweiligen Umsatzsteuerverfahren.' },
    { question: 'Können Kleinunternehmer Vorsteuer abziehen?', answer: 'Für Umsätze unter der Kleinunternehmerregelung ist der Vorsteuerabzug grundsätzlich ausgeschlossen. Entscheidend sind die gesetzlichen Voraussetzungen des Einzelfalls.' },
    { question: 'Kann ich aus einem Eigenbeleg Vorsteuer abziehen?', answer: 'Nein, grundsätzlich nicht. Ein Eigenbeleg ist keine Rechnung des leistenden Unternehmers und ersetzt diese für den Vorsteuerabzug nicht.' },
  ],
  related: ['steuern', 'umsatzsteuer', 'rechnung', 'eigenbeleg', 'kleinunternehmerregelung'],
  sources: [
    { label: '§ 14 UStG – Ausstellung von Rechnungen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14.html' },
    { label: '§ 15 UStG – Vorsteuerabzug', url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html' },
    { label: '§ 16 UStG – Steuerberechnung', url: 'https://www.gesetze-im-internet.de/ustg_1980/__16.html' },
    { label: '§ 19 UStG – Besteuerung der Kleinunternehmer', url: 'https://www.gesetze-im-internet.de/ustg_1980/__19.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default vorsteuer;
