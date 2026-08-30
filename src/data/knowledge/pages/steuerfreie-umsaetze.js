import { defaultDisclaimer } from '../shared.js';

const steuerfreieUmsaetze = {
  slug: 'steuerfreie-umsaetze',
  category: 'Steuern',
  title: 'Steuerfreie Umsätze',
  description: 'Steuerfreie Umsätze einfach erklärt: Unterschied zu nicht steuerbar und 0 % Umsatzsteuer, Rechnungsangaben und Auswirkungen auf den Vorsteuerabzug.',
  seo: {
    title: 'Steuerfreie Umsätze erklärt | Belege24',
    description: 'Erfahre, was ein steuerfreier Umsatz ist, wie er sich von 0 % Umsatzsteuer unterscheidet und was bei Rechnung und Vorsteuer gilt.',
    canonicalPath: '/wissen/steuerfreie-umsaetze',
  },
  article: {
    intro: 'Ein steuerfreier Umsatz fällt grundsätzlich unter die Umsatzsteuer, ist aber nach einer gesetzlichen Regelung von der Steuer befreit. Welche Folgen das für Rechnung und Vorsteuer hat, hängt von der jeweiligen Steuerbefreiung ab.',
    sections: [
      {
        heading: 'Was bedeutet steuerfreier Umsatz?',
        paragraphs: [
          [
            'Ein steuerfreier Umsatz ist ein Umsatz, für den eine gesetzliche ',
            { type: 'glossary', id: 'steuerbefreiung', text: 'Steuerbefreiung' },
            ' gilt. Bei einer inländischen Leistung ist dafür häufig § 4 UStG die zentrale Vorschrift.',
          ],
          'Ob eine Befreiung tatsächlich greift, richtet sich immer nach der konkreten Leistung und ihren Voraussetzungen. Die Bezeichnung auf einer Rechnung oder im Vertrag entscheidet darüber nicht allein.',
        ],
      },
      {
        heading: 'Steuerfrei, nicht steuerbar und 0 % unterscheiden',
        paragraphs: [
          'Steuerfrei bedeutet: Der Umsatz fällt grundsätzlich in den Anwendungsbereich der Umsatzsteuer, ist aber durch eine gesetzliche Ausnahme von der Steuer befreit.',
          [
            'Ein ',
            { type: 'glossary', id: 'nicht-steuerbar', text: 'nicht steuerbarer Umsatz' },
            ' fällt dagegen gar nicht unter den deutschen Umsatzsteuertatbestand. Das kann zum Beispiel bei einem Leistungsvorgang außerhalb des deutschen Steuergebiets der Fall sein.',
          ],
          'Ein Steuersatz von 0 % ist etwas anderes als Steuerfreiheit: Der Umsatz bleibt steuerbar, der gesetzlich vorgesehene Steuersatz beträgt aber null Prozent. Für Rechnung, Meldungen und Vorsteuer können deshalb andere Regeln gelten.',
        ],
      },
      {
        heading: 'Welche Umsätze können steuerfrei sein?',
        paragraphs: [
          '§ 4 UStG enthält viele unterschiedliche Befreiungen. Typische, für Unternehmen relevante Beispiele sind bestimmte Heilbehandlungen, langfristige Vermietungen, einzelne Finanz- und Versicherungsumsätze sowie Ausfuhrlieferungen.',
          'Diese Beispiele haben unterschiedliche Voraussetzungen. So ist nicht jede medizinische Leistung steuerfrei, nicht jede Vermietung gleich behandelt und eine Ausfuhrlieferung braucht regelmäßig passende Nachweise. Eine vollständige Liste würde ohne Einzelfallprüfung leicht in die Irre führen.',
        ],
      },
      {
        heading: 'Warum gibt es unterschiedliche Steuerbefreiungen?',
        paragraphs: [
          'Steuerbefreiungen verfolgen unterschiedliche Zwecke. Manche betreffen Leistungen der Daseinsvorsorge oder besondere wirtschaftliche Bereiche, andere vermeiden eine Besteuerung bei grenzüberschreitenden Lieferungen.',
          'Darum haben Steuerbefreiungen nicht automatisch dieselben Folgen. Besonders wichtig ist die Frage, ob trotz steuerfreier Umsätze ein Vorsteuerabzug erhalten bleibt.',
        ],
      },
      {
        heading: 'Mit oder ohne Vorsteuerabzug?',
        paragraphs: [
          'Bei vielen steuerfreien Umsätzen ist der Vorsteuerabzug für die dafür verwendeten Eingangsleistungen ausgeschlossen. Das betrifft zum Beispiel häufig bestimmte Vermietungs-, Heilbehandlungs- oder Finanzumsätze.',
          [
            'Für einige Steuerbefreiungen bleibt der ',
            { type: 'glossary', id: 'vorsteuerabzug', text: 'Vorsteuerabzug' },
            ' dagegen erhalten. Das kann insbesondere bei bestimmten Ausfuhrlieferungen und weiteren in § 15 Absatz 3 UStG genannten Umsätzen der Fall sein.',
          ],
          'Die Unterscheidung ist für Preise und Kalkulation wichtig. Kläre bei wiederkehrenden oder größeren Umsätzen, welche Befreiung genau einschlägig ist.',
        ],
      },
      {
        heading: 'Was gehört auf die Rechnung?',
        paragraphs: [
          'Bei einem steuerfreien Umsatz weist du grundsätzlich keine Umsatzsteuer gesondert aus. Die Rechnung braucht stattdessen einen Hinweis auf die Steuerbefreiung.',
          'Der Hinweis sollte den Grund nachvollziehbar machen, zum Beispiel durch die passende gesetzliche Vorschrift oder eine klare Bezeichnung der Befreiung. Ein unberechtigter oder falscher Steuerausweis kann selbst steuerliche Folgen auslösen.',
        ],
      },
      {
        heading: 'Unterschied zur Kleinunternehmerregelung',
        paragraphs: [
          'Die Kleinunternehmerregelung ist ebenfalls eine Umsatzsteuerbefreiung, knüpft aber an die Umsatzgrenzen eines Unternehmers an. Sie ist nicht dieselbe Befreiung wie etwa eine Steuerfreiheit nach § 4 UStG für eine bestimmte Leistung.',
          'Auch beim Vorsteuerabzug gibt es Unterschiede: Während der Anwendung der Kleinunternehmerregelung ist er grundsätzlich ausgeschlossen. Bei Steuerbefreiungen nach § 4 UStG hängt er von der jeweiligen Befreiung ab.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Setze einen Umsatz nicht nur deshalb als steuerfrei an, weil keine Umsatzsteuer berechnet werden soll. Prüfe ebenso, ob er nicht steuerbar ist oder ob ein 0-%-Steuersatz gilt. Vermeide außerdem einen gesonderten Steuerausweis, wenn die Voraussetzungen dafür nicht vorliegen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Steuerfreie Umsätze sind von der Umsatzsteuer befreite, grundsätzlich steuerbare Umsätze',
    'Die zentrale Vorschrift für viele Befreiungen ist § 4 UStG',
    'Steuerfrei, nicht steuerbar und 0 % Umsatzsteuer sind unterschiedliche Begriffe',
    'Die Voraussetzungen einer Befreiung hängen von der konkreten Leistung ab',
    'Bei steuerfreien Umsätzen wird grundsätzlich keine Umsatzsteuer gesondert ausgewiesen',
    'Die Rechnung braucht einen Hinweis auf die Steuerbefreiung',
    'Der Vorsteuerabzug kann je nach Art der Befreiung ausgeschlossen sein oder erhalten bleiben',
    'Die Kleinunternehmerregelung ist von leistungsbezogenen Steuerbefreiungen zu unterscheiden',
  ],
  commonMistakes: [
    'steuerfrei mit nicht steuerbar oder einem 0-%-Steuersatz verwechseln',
    'eine Steuerbefreiung ohne Prüfung der konkreten Voraussetzungen anwenden',
    'bei einem steuerfreien Umsatz Umsatzsteuer gesondert ausweisen',
    'den Hinweis auf die Steuerbefreiung auf der Rechnung vergessen',
    'den Vorsteuerabzug bei allen Steuerbefreiungen gleich behandeln',
    'Kleinunternehmerregelung und Steuerfreiheit nach § 4 UStG gleichsetzen',
    'Nachweise für eine Steuerbefreiung nicht ausreichend dokumentieren',
  ],
  faqs: [
    { question: 'Was ist ein steuerfreier Umsatz?', answer: 'Ein steuerfreier Umsatz fällt grundsätzlich unter die Umsatzsteuer, ist aber nach einer gesetzlichen Regelung von der Steuer befreit.' },
    { question: 'Ist steuerfrei dasselbe wie 0 % Umsatzsteuer?', answer: 'Nein. Bei 0 % bleibt der Umsatz steuerbar und der gesetzliche Steuersatz beträgt null Prozent. Steuerfreiheit beruht dagegen auf einer gesetzlichen Befreiung.' },
    { question: 'Was ist der Unterschied zwischen steuerfrei und nicht steuerbar?', answer: 'Ein steuerfreier Umsatz ist grundsätzlich steuerbar, aber von der Steuer befreit. Ein nicht steuerbarer Umsatz fällt nicht unter den deutschen Umsatzsteuertatbestand.' },
    { question: 'Darf ich bei steuerfreien Umsätzen Umsatzsteuer ausweisen?', answer: 'Grundsätzlich nicht. Die Rechnung soll stattdessen einen nachvollziehbaren Hinweis auf die Steuerbefreiung enthalten.' },
    { question: 'Kann ich bei steuerfreien Umsätzen Vorsteuer abziehen?', answer: 'Das hängt von der konkreten Steuerbefreiung ab. Bei vielen Befreiungen ist der Vorsteuerabzug ausgeschlossen, bei einigen bleibt er nach § 15 Absatz 3 UStG erhalten.' },
    { question: 'Ist die Kleinunternehmerregelung eine Steuerbefreiung?', answer: 'Ja, sie ist eine besondere Umsatzsteuerbefreiung nach § 19 UStG. Sie ist aber von leistungsbezogenen Befreiungen nach § 4 UStG zu unterscheiden.' },
  ],
  related: ['steuern', 'umsatzsteuer', 'vorsteuer', 'kleinunternehmerregelung', 'reverse-charge', 'innergemeinschaftliche-lieferung'],
  sources: [
    { label: '§ 1 UStG – Steuerbare Umsätze', url: 'https://www.gesetze-im-internet.de/ustg_1980/__1.html' },
    { label: '§ 4 UStG – Steuerbefreiungen bei Lieferungen und sonstigen Leistungen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__4.html' },
    { label: '§ 12 UStG – Steuersätze', url: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html' },
    { label: '§ 14 UStG – Ausstellung von Rechnungen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14.html' },
    { label: '§ 14c UStG – Unrichtiger oder unberechtigter Steuerausweis', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14c.html' },
    { label: '§ 15 UStG – Vorsteuerabzug', url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default steuerfreieUmsaetze;
