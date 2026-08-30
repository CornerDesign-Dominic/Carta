import { defaultDisclaimer } from '../shared.js';

const ag = {
  slug: 'ag',
  category: 'Rechtsformen',
  title: 'AG – Aktiengesellschaft',
  description: 'AG einfach erklärt: Gründung, Grundkapital, Aktien, Vorstand, Aufsichtsrat, Hauptversammlung, Haftung, Handelsregister und Steuern.',
  seo: {
    title: 'AG einfach erklärt | Belege24',
    description: 'Erfahre, wie eine Aktiengesellschaft aufgebaut ist und was bei Grundkapital, Organen, Haftung, Handelsregister, Jahresabschluss und Steuern wichtig ist.',
    canonicalPath: '/wissen/ag',
  },
  article: {
    intro: 'Eine AG ist eine Kapitalgesellschaft mit eigener Rechtspersönlichkeit. Ihr Kapital ist in Aktien aufgeteilt; Aktionäre beteiligen sich am Unternehmen, während der Vorstand die Geschäfte führt und der Aufsichtsrat ihn überwacht.',
    sections: [
      {
        heading: 'Was ist eine AG?',
        paragraphs: [
          'Die Aktiengesellschaft (AG) ist eine eigenständige juristische Person. Sie kann selbst Verträge schließen, Vermögen besitzen und für ihre Verbindlichkeiten einstehen.',
          [
            'Ihr ',
            { type: 'glossary', id: 'grundkapital', text: 'Grundkapital' },
            ' ist in ',
            { type: 'glossary', id: 'aktie', text: 'Aktien' },
            ' aufgeteilt. Wer Aktien hält, ist ',
            { type: 'glossary', id: 'aktionaer', text: 'Aktionär' },
            '. Eine AG muss nicht an der Börse notiert sein; auch nicht börsennotierte Unternehmen können diese Rechtsform nutzen.',
          ],
        ],
      },
      {
        heading: 'Gründung und Satzung',
        paragraphs: [
          'Für die Gründung einer AG ist eine notariell beurkundete Satzung erforderlich. Sie regelt unter anderem Firma, Sitz, Unternehmensgegenstand, Grundkapital, Aktien und die Zahl der Vorstandsmitglieder.',
          'Die Gründung ist formaler als bei vielen anderen Rechtsformen. Neben der Satzung, Kapitalaufbringung und Registeranmeldung werden die Organe der AG eingerichtet. Die AG entsteht als solche erst mit ihrer Eintragung in das Handelsregister.',
        ],
      },
      {
        heading: 'Grundkapital und Aktien',
        paragraphs: [
          'Das gesetzliche Mindestgrundkapital einer AG beträgt 50.000 Euro. Es ist der in der Satzung festgelegte Kapitalbetrag der Gesellschaft und wird in Aktien aufgeteilt.',
          'Grundkapital, Ausgabebetrag von Aktien und laufende Liquidität sind nicht dasselbe. Das Grundkapital beschreibt die Kapitalstruktur der AG; ob genügend Mittel für das operative Geschäft vorhanden sind, ist eine eigene Frage.',
        ],
      },
      {
        heading: 'Aktionäre und ihre Rolle',
        paragraphs: [
          'Aktionäre sind Anteilseigner der AG. Sie nehmen ihre grundlegenden Mitwirkungsrechte vor allem in der Hauptversammlung wahr, etwa bei den gesetzlich vorgesehenen Beschlüssen über Satzung, Gewinnverwendung oder die Wahl von Aufsichtsratsmitgliedern der Anteilseigner.',
          'Aktionäre führen nicht automatisch das Tagesgeschäft. Eine hohe Beteiligung kann Einfluss auf Beschlüsse geben, ersetzt aber nicht die gesetzlich getrennte Rolle von Vorstand und Aufsichtsrat.',
        ],
      },
      {
        heading: 'Vorstand, Aufsichtsrat und Hauptversammlung',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'vorstand', text: 'Vorstand' },
            ' leitet die AG unter eigener Verantwortung und vertritt sie nach außen. Der ',
            { type: 'glossary', id: 'aufsichtsrat', text: 'Aufsichtsrat' },
            ' überwacht die Geschäftsführung und bestellt den Vorstand. Die ',
            { type: 'glossary', id: 'hauptversammlung', text: 'Hauptversammlung' },
            ' ist das Treffen der Aktionäre, in dem sie über die ihr gesetzlich oder durch die Satzung zugewiesenen Angelegenheiten beschließen.',
          ],
          'Diese drei Organe haben unterschiedliche Aufgaben. Der Aufsichtsrat führt nicht das laufende Geschäft, und die Hauptversammlung greift nicht anstelle des Vorstands in jede operative Entscheidung ein. In größeren oder mitbestimmten Unternehmen können zusätzliche gesetzliche Vorgaben für die Zusammensetzung des Aufsichtsrats gelten.',
        ],
      },
      {
        heading: 'Haftung: beschränkt, aber nicht absolut',
        paragraphs: [
          'Für die Verbindlichkeiten der AG haftet grundsätzlich das Vermögen der Gesellschaft. Aktionäre tragen im Ausgangspunkt das Risiko ihrer Beteiligung, nicht aber automatisch die Schulden der AG mit ihrem Privatvermögen.',
          'Die Haftungsbegrenzung schließt persönliche Verantwortung nicht in jeder Situation aus. Zum Beispiel können persönliche Bürgschaften, Pflichtverletzungen von Organmitgliedern oder besondere gesetzliche Haftungsregeln relevant werden. Die konkrete Haftung sollte deshalb nicht pauschal beurteilt werden.',
        ],
      },
      {
        heading: 'Handelsregister, HRB und Gewerbeanmeldung',
        paragraphs: [
          [
            'Eine AG wird im Handelsregister Abteilung B geführt und erhält eine ',
            { type: 'glossary', id: 'hrb', text: 'HRB-Nummer' },
            '. Dort sind unter anderem Firma, Sitz, Grundkapital, Vorstand und Vertretungsregelung öffentlich nachvollziehbar.',
          ],
          'Betreibt die AG ein Gewerbe, ist dieses grundsätzlich bei der zuständigen Behörde anzumelden. Handelsregistereintragung, Gewerbeanmeldung, steuerliche Erfassung und gegebenenfalls fachliche Erlaubnisse sind getrennte Schritte.',
        ],
      },
      {
        heading: 'Buchführung, Jahresabschluss und Offenlegung',
        paragraphs: [
          'Eine AG ist zur doppelten Buchführung verpflichtet und erstellt einen Jahresabschluss. Je nach Größe und Situation gehören dazu insbesondere Bilanz, Gewinn- und Verlustrechnung, Anhang und gegebenenfalls ein Lagebericht.',
          'Die Rechnungslegungsunterlagen müssen grundsätzlich elektronisch beim Unternehmensregister eingereicht werden. Umfang und Erleichterungen richten sich unter anderem nach den gesetzlichen Größenklassen.',
        ],
      },
      {
        heading: 'Steuern: Körperschaftsteuer, Gewerbesteuer, Umsatzsteuer und Soli',
        paragraphs: [
          'Die AG versteuert ihr eigenes Einkommen grundsätzlich mit Körperschaftsteuer. Als Kapitalgesellschaft gilt sie für die Gewerbesteuer stets als Gewerbebetrieb; zusätzlich kann Gewerbesteuer anfallen.',
          'Umsatzsteuerlich kann die AG Unternehmerin sein. Umsatzsteuer richtet sich nach ihren Umsätzen und ist von den Ertragsteuern zu unterscheiden. Auf die Körperschaftsteuer kann außerdem Solidaritätszuschlag anfallen.',
        ],
      },
      {
        heading: 'Gewinnverwendung und Dividende',
        paragraphs: [
          'Ein Jahresüberschuss gehört zunächst der AG. Die Hauptversammlung entscheidet im Rahmen der gesetzlichen und satzungsmäßigen Vorgaben über die Verwendung des Bilanzgewinns; eine Auszahlung an Aktionäre wird meist als Dividende bezeichnet.',
          'Eine Dividende ist keine Vergütung für die Tätigkeit im Unternehmen. Bei Aktionären können daraus eigene steuerliche Folgen entstehen, die sich etwa danach unterscheiden, ob die Aktien privat oder im Betriebsvermögen gehalten werden.',
        ],
      },
      {
        heading: 'Unterschied zur GmbH',
        paragraphs: [
          'Auch die GmbH ist eine Kapitalgesellschaft mit grundsätzlich auf das Gesellschaftsvermögen beschränkter Haftung. Bei der AG sind die Rollen von Aktionären, Vorstand, Aufsichtsrat und Hauptversammlung jedoch gesetzlich stärker voneinander getrennt.',
          'Die GmbH wird durch Geschäftsführer geführt und kann in der Praxis flexibler organisiert werden. Eine AG braucht mindestens 50.000 Euro Grundkapital und einen Aufsichtsrat; sie eignet sich daher oft eher für größere, beteiligungsorientierte oder langfristig strukturierte Unternehmen.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und passende Situationen',
        paragraphs: [
          'Eine AG kann passend sein, wenn Beteiligungen klar in Aktien abgebildet, mehrere Kapitalgeber eingebunden oder eine formalisierte Unternehmensorganisation gewünscht werden. Die Rechtsform kann auch bei Wachstum, Nachfolge und größeren Finanzierungsstrukturen sinnvoll sein.',
          'Dem stehen ein höheres Mindestkapital, formale Gründungsschritte, feste Organstrukturen, mehr laufende Pflichten und meist höhere Kosten gegenüber. Für kleine, einfach organisierte Unternehmen ist eine GmbH oder UG häufig leichter zu verwalten.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Eine AG ist nicht automatisch börsennotiert. Außerdem entscheidet nicht jeder Aktionär über das Tagesgeschäft: Die operative Leitung liegt beim Vorstand, die Kontrolle beim Aufsichtsrat und die grundlegende Mitwirkung bei der Hauptversammlung.',
          'Verwechsle Grundkapital nicht mit verfügbarem Gewinn oder laufender Liquidität. Auch die Haftungsbeschränkung ersetzt keine sorgfältige Organisation, angemessene Kapitalausstattung und die Einhaltung der Pflichten von Vorstand und Aufsichtsrat.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die AG ist eine eigenständige Kapitalgesellschaft mit eigener Rechtspersönlichkeit',
    'Ihr gesetzliches Mindestgrundkapital beträgt 50.000 Euro und ist in Aktien aufgeteilt',
    'Aktionäre sind Anteilseigner, führen aber nicht automatisch das Tagesgeschäft',
    'Der Vorstand leitet und vertritt die AG; der Aufsichtsrat überwacht ihn',
    'Die Hauptversammlung beschließt über die ihr zugewiesenen grundlegenden Angelegenheiten',
    'Die AG wird im Handelsregister Abteilung B eingetragen und ist offenlegungspflichtig',
    'Körperschaftsteuer, Gewerbesteuer, Umsatzsteuer und Solidaritätszuschlag können relevant sein',
  ],
  commonMistakes: [
    'Grundkapital, Aktienwert und verfügbare Liquidität gleichsetzen',
    'Aktionäre mit Vorstand oder Geschäftsleitung verwechseln',
    'Aufsichtsrat und Hauptversammlung als Organe für das Tagesgeschäft ansehen',
    'AG automatisch mit einer börsennotierten Gesellschaft gleichsetzen',
    'Haftungsbeschränkung als vollständigen Ausschluss persönlicher Verantwortung verstehen',
    'Handelsregister, Gewerbeanmeldung und steuerliche Erfassung als denselben Schritt behandeln',
  ],
  faqs: [
    {
      question: 'Was ist eine AG einfach erklärt?',
      answer: 'Eine AG ist eine Kapitalgesellschaft, deren Grundkapital in Aktien aufgeteilt ist. Aktionäre sind daran beteiligt, während der Vorstand die Geschäfte führt.',
    },
    {
      question: 'Wie viel Grundkapital braucht eine AG?',
      answer: 'Das gesetzliche Mindestgrundkapital beträgt 50.000 Euro. Die genauen Regeln zur Aufbringung des Kapitals gehören zur formalen Gründung.',
    },
    {
      question: 'Wer führt eine AG?',
      answer: 'Der Vorstand leitet die AG unter eigener Verantwortung und vertritt sie nach außen. Der Aufsichtsrat überwacht den Vorstand.',
    },
    {
      question: 'Was macht die Hauptversammlung?',
      answer: 'In der Hauptversammlung beschließen die Aktionäre über die Angelegenheiten, die ihr gesetzlich oder durch die Satzung zugewiesen sind.',
    },
    {
      question: 'Haften Aktionäre mit ihrem Privatvermögen?',
      answer: 'Grundsätzlich haftet die AG mit ihrem Gesellschaftsvermögen. Persönliche Haftung kann in besonderen Konstellationen dennoch relevant sein.',
    },
    {
      question: 'Muss eine AG an der Börse sein?',
      answer: 'Nein. Eine Aktiengesellschaft kann auch ohne Börsennotierung gegründet und geführt werden.',
    },
    {
      question: 'Was ist der Unterschied zwischen AG und GmbH?',
      answer: 'Beide sind Kapitalgesellschaften. Die AG hat jedoch ein höheres Mindestkapital und eine gesetzlich stärker getrennte Organstruktur aus Vorstand, Aufsichtsrat und Hauptversammlung.',
    },
  ],
  related: [
    'rechtsformen',
    'gmbh',
    'koerperschaftsteuer',
    'gewerbesteuer',
    'umsatzsteuer',
    'kapitalertragsteuer',
  ],
  sources: [
    { label: '§ 1 AktG – Wesen der Aktiengesellschaft', url: 'https://www.gesetze-im-internet.de/aktg/__1.html' },
    { label: '§ 2 AktG – Gründer der AG', url: 'https://www.gesetze-im-internet.de/aktg/__2.html' },
    { label: '§ 7 AktG – Mindestgrundkapital', url: 'https://www.gesetze-im-internet.de/aktg/__7.html' },
    { label: '§ 23 AktG – Satzung der AG', url: 'https://www.gesetze-im-internet.de/aktg/__23.html' },
    { label: '§ 41 AktG – Entstehung der AG durch Eintragung', url: 'https://www.gesetze-im-internet.de/aktg/__41.html' },
    { label: '§ 76 AktG – Leitung durch den Vorstand', url: 'https://www.gesetze-im-internet.de/aktg/__76.html' },
    { label: '§ 78 AktG – Vertretung der AG', url: 'https://www.gesetze-im-internet.de/aktg/__78.html' },
    { label: '§ 95 AktG – Zusammensetzung des Aufsichtsrats', url: 'https://www.gesetze-im-internet.de/aktg/__95.html' },
    { label: '§ 111 AktG – Aufgaben des Aufsichtsrats', url: 'https://www.gesetze-im-internet.de/aktg/__111.html' },
    { label: '§ 118 AktG – Hauptversammlung', url: 'https://www.gesetze-im-internet.de/aktg/__118.html' },
    { label: '§ 119 AktG – Rechte der Hauptversammlung', url: 'https://www.gesetze-im-internet.de/aktg/__119.html' },
    { label: '§ 3 HRV – Handelsregister Abteilung B', url: 'https://www.gesetze-im-internet.de/hdlregvfg/__3.html' },
    { label: '§ 14 GewO – Anzeige eines Gewerbes', url: 'https://www.gesetze-im-internet.de/gewo/__14.html' },
    { label: '§ 264 HGB – Jahresabschluss der Kapitalgesellschaft', url: 'https://www.gesetze-im-internet.de/hgb/__264.html' },
    { label: '§ 325 HGB – Offenlegung der Rechnungslegungsunterlagen', url: 'https://www.gesetze-im-internet.de/hgb/__325.html' },
    { label: '§ 1 KStG – Körperschaftsteuerpflicht', url: 'https://www.gesetze-im-internet.de/kstg_1977/__1.html' },
    { label: '§ 2 GewStG – Gewerbesteuerpflicht', url: 'https://www.gesetze-im-internet.de/gewstg/__2.html' },
    { label: '§ 2 UStG – Unternehmer und Unternehmen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__2.html' },
    { label: '§ 3 SolzG 1995 – Solidaritätszuschlag', url: 'https://www.gesetze-im-internet.de/solzg_1995/__3.html' },
    { label: '§ 20 EStG – Einkünfte aus Kapitalvermögen', url: 'https://www.gesetze-im-internet.de/estg/__20.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default ag;
