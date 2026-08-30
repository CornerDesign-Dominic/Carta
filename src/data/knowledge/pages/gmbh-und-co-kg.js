import { defaultDisclaimer } from '../shared.js';

const gmbhUndCoKg = {
  slug: 'gmbh-und-co-kg',
  category: 'Rechtsformen',
  title: 'GmbH & Co. KG',
  description: 'GmbH & Co. KG einfach erklärt: Aufbau, Haftung, Komplementär-GmbH, Handelsregister, Buchführung, Offenlegung und Steuern.',
  seo: {
    title: 'GmbH & Co. KG einfach erklärt | Belege24',
    description: 'Erfahre, wie eine GmbH & Co. KG aufgebaut ist und was bei Haftung, Gründung, Handelsregister, Buchführung, Offenlegung und Steuern wichtig ist.',
    canonicalPath: '/wissen/gmbh-und-co-kg',
  },
  article: {
    intro: 'Eine GmbH & Co. KG ist eine Kommanditgesellschaft, bei der eine GmbH die Rolle der persönlich haftenden Gesellschafterin übernimmt. Die KG bleibt eine Personengesellschaft, verbindet diese Struktur aber mit der Haftungsordnung einer GmbH auf Ebene der Komplementärin.',
    sections: [
      {
        heading: 'Was ist eine GmbH & Co. KG?',
        paragraphs: [
          'Die GmbH & Co. KG ist eine besondere Form der Kommanditgesellschaft. Anders als bei einer klassischen KG ist nicht eine natürliche Person, sondern eine GmbH der persönlich haftende Gesellschafter.',
          'Damit bestehen mindestens zwei rechtlich getrennte Gesellschaften: die KG als operatives Unternehmen und die GmbH als Komplementärin. Die GmbH & Co. KG ist deshalb keine eigene Rechtsform neben KG und GmbH, sondern eine Verbindung aus beiden Strukturen.',
        ],
      },
      {
        heading: 'Aufbau: KG, Komplementär-GmbH und Kommanditisten',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'komplementaer-gmbh', text: 'Komplementär-GmbH' },
            ' übernimmt in der KG die Rolle des persönlich haftenden Gesellschafters. Die übrigen Beteiligten können als ',
            { type: 'glossary', id: 'kommanditist', text: 'Kommanditisten' },
            ' an der KG beteiligt sein. Dieselben Personen können zugleich Gesellschafter der GmbH und Kommanditisten der KG sein.',
          ],
          'Die GmbH und die KG haben jeweils eigenes Vermögen, eigene Verträge und eigene Pflichten. Rollen, Beteiligungen und Zahlungsströme sollten deshalb im Gesellschaftsvertrag der KG und in der Satzung der GmbH klar voneinander getrennt werden.',
        ],
      },
      {
        heading: 'Haftung: begrenzt, aber nicht risikofrei',
        paragraphs: [
          'Die Komplementär-GmbH haftet als persönlich haftende Gesellschafterin grundsätzlich mit ihrem Gesellschaftsvermögen. Kommanditisten haften gegenüber Gläubigern der KG nach den gesetzlichen Regeln bis zu ihrer im Handelsregister eingetragenen Haftsumme.',
          'Das bedeutet nicht, dass alle Beteiligten in jeder Situation vollständig von persönlicher Haftung ausgeschlossen sind. Persönliche Bürgschaften, Pflichtverletzungen, nicht ordnungsgemäß geleistete Einlagen oder besondere gesetzliche Haftungsregeln können zu eigener Verantwortung führen. Auch die Haftsumme und die tatsächlich geleistete Einlage eines Kommanditisten müssen getrennt betrachtet werden.',
        ],
      },
      {
        heading: 'Gründung und Kapitalbedarf',
        paragraphs: [
          'Für die KG selbst ist kein gesetzliches Mindestkapital vorgeschrieben. Die Komplementär-GmbH benötigt dagegen das gesetzliche Stammkapital einer GmbH. Bei einer Neugründung müssen daher die Gründung der GmbH, der KG-Gesellschaftsvertrag und die jeweiligen Registeranmeldungen aufeinander abgestimmt werden.',
          'Der tatsächliche Kapitalbedarf ist meist höher als die gesetzliche Mindestanforderung der GmbH. Plane Mittel für die Einlagen, den laufenden Betrieb, Steuern, Notar- und Registerkosten sowie für die Verwaltung von zwei Gesellschaften ein.',
        ],
      },
      {
        heading: 'Geschäftsführung und Vertretung',
        paragraphs: [
          'In der KG führt und vertritt grundsätzlich die Komplementärin das Unternehmen. Ist die Komplementärin eine GmbH, handelt diese wiederum durch ihre Geschäftsführer. Die Geschäftsführer vertreten also die GmbH, die ihrerseits als Komplementärin für die KG tätig wird.',
          'Kommanditisten sind grundsätzlich von Geschäftsführung und Vertretung der KG ausgeschlossen. Der Gesellschaftsvertrag kann Mitwirkungsrechte, Zustimmungen für wichtige Geschäfte oder Informationsrechte vorsehen. Interne Zuständigkeiten und die Vertretung nach außen solltest du klar auseinanderhalten.',
        ],
      },
      {
        heading: 'Handelsregister, HRA und HRB',
        paragraphs: [
          [
            'Beide Gesellschaften werden getrennt im Handelsregister geführt: Die KG in Abteilung A mit einer ',
            { type: 'glossary', id: 'hra', text: 'HRA-Nummer' },
            ', die GmbH in Abteilung B mit einer ',
            { type: 'glossary', id: 'hrb', text: 'HRB-Nummer' },
            '. Änderungen bei Firma, Sitz, Vertretung oder Beteiligten können deshalb für eine oder beide Gesellschaften eine Registeranmeldung auslösen.',
          ],
          'Die Registereintragungen ersetzen weder die steuerliche Erfassung noch weitere Anzeigen oder Erlaubnisse. Für Gewerbeanmeldung und laufende Pflichten ist wichtig, welche Gesellschaft welche Tätigkeit tatsächlich ausübt.',
        ],
      },
      {
        heading: 'Buchführung, Jahresabschluss und Offenlegung',
        paragraphs: [
          'Die KG und die GmbH führen jeweils eigene Bücher und erstellen eigene Abschlüsse. Die Buchführung der KG bildet ihre Gewinne, Einlagen, Entnahmen und Verbindlichkeiten ab; die GmbH hält ihre eigenen Geschäftsvorfälle davon getrennt fest.',
          'Bei einer typischen GmbH & Co. KG greifen für die KG zusätzlich besondere Vorschriften für Personenhandelsgesellschaften ohne persönlich haftende natürliche Person. Dadurch können Rechnungslegungs- und Offenlegungspflichten ähnlich wie bei Kapitalgesellschaften relevant werden. Die konkreten Pflichten hängen von Größe und Ausgestaltung der Gesellschaften ab.',
        ],
      },
      {
        heading: 'Gewerbeanmeldung und laufende Organisation',
        paragraphs: [
          'Betreibt die KG ein Gewerbe, ist dieses grundsätzlich anzumelden. Auch für die GmbH müssen ihre Tätigkeit, steuerliche Erfassung und gegebenenfalls eigene Anzeigen oder Erlaubnisse separat betrachtet werden.',
          'In der Praxis entstehen dadurch mehr organisatorische Aufgaben als bei einer einfachen KG oder GmbH. Getrennte Bankkonten, Verträge, Buchhaltungen, Beschlüsse und Fristen helfen, die beiden Gesellschaften sauber zu führen.',
        ],
      },
      {
        heading: 'Steuern: KG und GmbH getrennt betrachten',
        paragraphs: [
          'Der Gewinn der KG wird steuerlich grundsätzlich ihren Gesellschaftern zugerechnet. Bei natürlichen Personen kann der Gewinnanteil einkommensteuerlich relevant sein. Ist die Komplementärin am Gewinn beteiligt oder erhält sie Vergütungen, entstehen auch auf Ebene der GmbH eigene steuerliche Folgen.',
          'Die GmbH ist als Kapitalgesellschaft selbst körperschaftsteuerpflichtig. Bei gewerblicher Tätigkeit kann für die GmbH & Co. KG Gewerbesteuer relevant sein. Umsatzsteuerlich ist in vielen Fällen die KG die Unternehmerin und Rechnungsstellerin; entscheidend ist aber, welche Gesellschaft die konkrete Leistung erbringt.',
        ],
      },
      {
        heading: 'Gewinnverteilung und Entnahmen',
        paragraphs: [
          'Wie Gewinn und Verlust der KG verteilt werden, bestimmen vor allem Gesellschaftsvertrag und Beteiligungsverhältnisse. Die Gewinnanteile der Kommanditisten und der Komplementär-GmbH müssen nicht gleich ausgestaltet sein. Entnahmen aus der KG sind keine Betriebsausgaben und sollten Liquidität, Vertrag und Haftungsfolgen berücksichtigen.',
          'Der Gewinnanteil der GmbH gehört zunächst der GmbH. Er ist nicht automatisch eine private Entnahme ihrer Gesellschafter. Eine Auszahlung der GmbH an ihre Gesellschafter folgt eigenen gesellschafts- und steuerrechtlichen Regeln.',
        ],
      },
      {
        heading: 'Unterschied zur KG und zur GmbH',
        paragraphs: [
          'Bei einer klassischen KG haftet mindestens eine natürliche Person oder andere Gesellschaft als Komplementär persönlich. Bei der GmbH & Co. KG übernimmt diese Rolle die GmbH. Das kann die Haftungsstruktur verändern, führt aber zu zusätzlichen Gründungs-, Register- und Verwaltungspflichten.',
          'Im Unterschied zur reinen GmbH bleibt die GmbH & Co. KG eine Personengesellschaft. Die KG und die GmbH werden steuerlich und rechtlich getrennt behandelt; der Gewinn der KG wird grundsätzlich ihren Gesellschaftern zugerechnet, während die GmbH selbst Körperschaftsteuer zahlt.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und passende Situationen',
        paragraphs: [
          'Eine GmbH & Co. KG kann passen, wenn eine personengesellschaftliche Gewinn- und Beteiligungsstruktur gewünscht ist, die persönliche Haftung aber nicht bei einer natürlichen Person als Komplementär liegen soll. Sie kann außerdem flexible Rollen für operative Leitung und Kapitalbeteiligung ermöglichen.',
          'Dem stehen zwei Gesellschaften, mehr Verträge, getrennte Buchhaltungen, zusätzliche Kosten und laufende Abstimmung gegenüber. Ob die Struktur zu Finanzierung, Risiko, Beteiligten und Nachfolge passt, sollte vor der Gründung rechtlich und steuerlich geprüft werden.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Eine GmbH & Co. KG ist keine GmbH mit nur einem Handelsregistereintrag. KG und GmbH sind getrennte Gesellschaften und müssen jeweils organisiert, dokumentiert und steuerlich eingeordnet werden.',
          'Die GmbH als Komplementärin macht die Beteiligten nicht automatisch haftungsfrei. Besonders persönliche Sicherheiten, Geschäftsführerpflichten sowie Einlagen und Haftsumme der Kommanditisten solltest du nicht pauschal beurteilen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die GmbH & Co. KG ist eine KG mit einer GmbH als persönlich haftender Gesellschafterin',
    'KG und Komplementär-GmbH sind rechtlich und wirtschaftlich getrennte Gesellschaften',
    'Die GmbH haftet grundsätzlich mit ihrem Gesellschaftsvermögen; Kommanditisten nach den Regeln zu Haftsumme und Einlage',
    'Für die KG ist kein Mindestkapital vorgeschrieben, für die GmbH gilt das gesetzliche Stammkapital',
    'Die KG steht im Handelsregister Abteilung A, die GmbH in Abteilung B',
    'Beide Gesellschaften benötigen eine eigene Buchführung und einen eigenen Jahresabschluss',
    'Gewinnanteile der KG und die Besteuerung der GmbH müssen getrennt betrachtet werden',
  ],
  commonMistakes: [
    'GmbH & Co. KG mit einer einzelnen GmbH gleichsetzen',
    'Haftungsbeschränkung als vollständigen Ausschluss persönlicher Risiken verstehen',
    'Haftsumme und geleistete Einlage eines Kommanditisten gleichsetzen',
    'HRA und HRB oder die Pflichten von KG und GmbH vermischen',
    'Gewinnanteile der KG wie private Entnahmen aus der GmbH behandeln',
    'Buchführung, Jahresabschluss und Offenlegung erst nach der Gründung organisieren',
  ],
  faqs: [
    {
      question: 'Was ist eine GmbH & Co. KG einfach erklärt?',
      answer: 'Eine GmbH & Co. KG ist eine KG, bei der eine GmbH die persönlich haftende Gesellschafterin ist. Die KG und die GmbH bleiben zwei getrennte Gesellschaften.',
    },
    {
      question: 'Wer haftet bei einer GmbH & Co. KG?',
      answer: 'Die Komplementär-GmbH haftet grundsätzlich mit ihrem Gesellschaftsvermögen. Kommanditisten haften gegenüber Gläubigern nach den gesetzlichen Regeln bis zur Haftsumme; persönliche Risiken können in Sonderfällen trotzdem entstehen.',
    },
    {
      question: 'Braucht eine GmbH & Co. KG Mindestkapital?',
      answer: 'Für die KG selbst gibt es kein gesetzliches Mindestkapital. Die Komplementär-GmbH benötigt jedoch das gesetzliche Stammkapital einer GmbH.',
    },
    {
      question: 'Wer führt die Geschäfte einer GmbH & Co. KG?',
      answer: 'Grundsätzlich führt die Komplementärin die KG. Ist sie eine GmbH, handelt diese durch ihre Geschäftsführer.',
    },
    {
      question: 'Warum hat eine GmbH & Co. KG zwei Handelsregistereinträge?',
      answer: 'KG und GmbH sind eigenständige Gesellschaften. Die KG wird grundsätzlich in Abteilung A, die GmbH in Abteilung B des Handelsregisters geführt.',
    },
    {
      question: 'Zahlt eine GmbH & Co. KG Körperschaftsteuer?',
      answer: 'Der Gewinn der KG wird grundsätzlich ihren Gesellschaftern zugerechnet. Die Komplementär-GmbH ist jedoch selbst körperschaftsteuerpflichtig, soweit sie eigenes steuerpflichtiges Einkommen erzielt.',
    },
    {
      question: 'Was ist der Unterschied zwischen KG und GmbH & Co. KG?',
      answer: 'Bei einer klassischen KG ist mindestens ein Komplementär persönlich haftender Gesellschafter. Bei der GmbH & Co. KG übernimmt diese Rolle eine GmbH.',
    },
  ],
  related: [
    'rechtsformen',
    'kg',
    'gmbh',
    'einkommensteuer',
    'koerperschaftsteuer',
    'gewerbesteuer',
    'umsatzsteuer',
  ],
  sources: [
    { label: '§ 161 HGB – Begriff der KG', url: 'https://www.gesetze-im-internet.de/hgb/__161.html' },
    { label: '§ 162 HGB – Anmeldung der KG zum Handelsregister', url: 'https://www.gesetze-im-internet.de/hgb/__162.html' },
    { label: '§ 170 HGB – Vertretung der KG', url: 'https://www.gesetze-im-internet.de/hgb/__170.html' },
    { label: '§ 171 HGB – Haftung des Kommanditisten', url: 'https://www.gesetze-im-internet.de/hgb/__171.html' },
    { label: '§ 172 HGB – Haftsumme und Einlage', url: 'https://www.gesetze-im-internet.de/hgb/__172.html' },
    { label: '§ 1 GmbHG – Wesen der Gesellschaft', url: 'https://www.gesetze-im-internet.de/gmbhg/__1.html' },
    { label: '§ 2 GmbHG – Form des Gesellschaftsvertrags', url: 'https://www.gesetze-im-internet.de/gmbhg/__2.html' },
    { label: '§ 5 GmbHG – Stammkapital und Stammeinlagen', url: 'https://www.gesetze-im-internet.de/gmbhg/__5.html' },
    { label: '§ 13 GmbHG – Rechtsfähigkeit und Haftung', url: 'https://www.gesetze-im-internet.de/gmbhg/__13.html' },
    { label: '§ 35 GmbHG – Vertretung durch Geschäftsführer', url: 'https://www.gesetze-im-internet.de/gmbhg/__35.html' },
    { label: '§ 264a HGB – Rechnungslegung bestimmter Personenhandelsgesellschaften', url: 'https://www.gesetze-im-internet.de/hgb/__264a.html' },
    { label: '§ 325 HGB – Offenlegung der Rechnungslegungsunterlagen', url: 'https://www.gesetze-im-internet.de/hgb/__325.html' },
    { label: '§ 15 EStG – Einkünfte aus Gewerbebetrieb', url: 'https://www.gesetze-im-internet.de/estg/__15.html' },
    { label: '§ 1 KStG – Körperschaftsteuerpflicht', url: 'https://www.gesetze-im-internet.de/kstg_1977/__1.html' },
    { label: '§ 2 GewStG – Steuergegenstand der Gewerbesteuer', url: 'https://www.gesetze-im-internet.de/gewstg/__2.html' },
    { label: '§ 2 UStG – Unternehmer und Unternehmen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__2.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default gmbhUndCoKg;
