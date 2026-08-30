import { defaultDisclaimer } from '../shared.js';

const ug = {
  slug: 'ug',
  category: 'Rechtsformen',
  title: 'UG (haftungsbeschränkt)',
  description: 'UG (haftungsbeschränkt) einfach erklärt: Gründung, Mindestkapital, Rücklagenpflicht, Haftung, Steuern und Unterschiede zur GmbH.',
  seo: {
    title: 'UG (haftungsbeschränkt) einfach erklärt | Belege24',
    description: 'Erfahre, wie eine UG gegründet wird, welche Rücklagenpflicht gilt und wie sie sich bei Haftung, Kapital, Steuern und Aufwand von der GmbH unterscheidet.',
    canonicalPath: '/wissen/ug',
  },
  article: {
    intro: 'Die UG (haftungsbeschränkt) ist eine besondere Variante der GmbH mit geringerem Stammkapital. Sie ist eine eigenständige Kapitalgesellschaft, muss ihr Anfangskapital aber vollständig in Geld einzahlen und einen Teil späterer Gewinne gesetzlich zurücklegen.',
    sections: [
      {
        heading: 'Was ist eine UG (haftungsbeschränkt)?',
        paragraphs: [
          'Die Unternehmergesellschaft (haftungsbeschränkt), kurz UG, ist keine eigene Rechtsform neben der GmbH, sondern eine besondere GmbH-Variante. Für sie gelten grundsätzlich die Regeln des GmbH-Gesetzes, ergänzt um spezielle Vorgaben zum Kapital und zur Rücklagenbildung.',
          'Wie eine GmbH ist die UG rechtlich von ihren Gesellschaftern getrennt. Sie kann Verträge schließen, eigenes Vermögen halten und selbst Steuern zahlen. Die gesetzlich vorgeschriebene Bezeichnung „UG (haftungsbeschränkt)“ muss in der Firma geführt werden.',
        ],
      },
      {
        heading: 'Gründung und Gesellschaftsvertrag',
        paragraphs: [
          'Für die Gründung brauchst du einen notariell beurkundeten Gesellschaftsvertrag. Darin werden unter anderem Firma, Sitz, Unternehmensgegenstand, Stammkapital und Geschäftsanteile festgelegt.',
          'Die UG entsteht erst mit der Eintragung in das Handelsregister. Bis dahin handelt sie als Gesellschaft in Gründung. Verträge und Zahlungen in dieser Phase sollten daher besonders sorgfältig vorbereitet werden.',
        ],
      },
      {
        heading: 'Mindestkapital, Bareinlagen und Sacheinlagen',
        paragraphs: [
          'Das Stammkapital einer UG kann ab einem Euro festgelegt werden. Das ist eine gesetzliche Untergrenze, kein sinnvoller allgemeiner Finanzierungsrahmen: Notar-, Register-, Gründungs- und laufende Betriebskosten müssen trotzdem gedeckt werden können.',
          [
            'Bei der Gründung sind nur ',
            { type: 'glossary', id: 'bareinlage', text: 'Bareinlagen' },
            ' zulässig. Das gesamte Stammkapital muss vor der Anmeldung zum Handelsregister vollständig eingezahlt sein. Sacheinlagen sind bei der Gründung einer UG nicht erlaubt.',
          ],
        ],
      },
      {
        heading: 'Gesellschafter, Geschäftsführung und Vertretung',
        paragraphs: [
          'Eine UG kann von einer oder mehreren Personen oder Gesellschaften gegründet werden. Die Gesellschafter halten die Geschäftsanteile und treffen grundlegende Entscheidungen, etwa über die Bestellung von Geschäftsführern oder die Verwendung des Jahresergebnisses.',
          [
            'Nach außen wird die UG durch ihre ',
            { type: 'glossary', id: 'geschaeftsfuehrer', text: 'Geschäftsführer' },
            ' vertreten. Gesellschafter und Geschäftsführer können dieselben Personen sein, ihre Rollen bleiben jedoch rechtlich getrennt. Bei mehreren Geschäftsführern ergibt sich die konkrete Vertretungsregelung aus den Eintragungen und Vereinbarungen.',
          ],
        ],
      },
      {
        heading: 'Haftung: beschränkt, aber nicht absolut',
        paragraphs: [
          'Für Verbindlichkeiten der UG haftet grundsätzlich das Vermögen der Gesellschaft. Das Privatvermögen der Gesellschafter ist im Ausgangspunkt getrennt.',
          'Die Haftungsbeschränkung schützt jedoch nicht in jeder denkbaren Situation. Persönliche Bürgschaften, Pflichtverletzungen von Geschäftsführern, nicht ordnungsgemäß geleistete Einlagen oder besondere gesetzliche Haftungsregeln können zu persönlicher Verantwortung führen.',
        ],
      },
      {
        heading: 'Handelsregister, HRB und Gewerbeanmeldung',
        paragraphs: [
          'Die UG wird in das Handelsregister Abteilung B (HRB) eingetragen. Dort sind unter anderem Firma, Sitz, Stammkapital, Geschäftsführer und die Vertretungsregelung öffentlich nachvollziehbar.',
          'Nimmt die UG ein Gewerbe auf, ist dieses grundsätzlich bei der zuständigen Behörde anzumelden. Daneben gehören steuerliche Erfassung und – je nach Tätigkeit – mögliche Erlaubnisse oder weitere Anzeigen zum Gründungsprozess.',
        ],
      },
      {
        heading: 'Buchführung, Jahresabschluss und Offenlegung',
        paragraphs: [
          'Eine UG ist zur doppelten Buchführung verpflichtet und erstellt einen Jahresabschluss mit Bilanz und Gewinn- und Verlustrechnung. Je nach Größe können weitere Bestandteile wie Anhang oder Lagebericht erforderlich sein.',
          'Kapitalgesellschaften müssen ihre Rechnungslegungsunterlagen grundsätzlich elektronisch beim Unternehmensregister einreichen. Für kleinere Gesellschaften bestehen Erleichterungen; welche Unterlagen offengelegt werden müssen, richtet sich nach den gesetzlichen Größenklassen.',
        ],
      },
      {
        heading: 'Steuern: Körperschaftsteuer, Gewerbesteuer, Umsatzsteuer und Soli',
        paragraphs: [
          'Die UG versteuert ihr eigenes Einkommen grundsätzlich mit Körperschaftsteuer. Sie gilt für die Gewerbesteuer stets als Gewerbebetrieb, sodass zusätzlich Gewerbesteuer anfallen kann.',
          'Umsatzsteuerlich kann die UG Unternehmerin sein. Umsatzsteuer knüpft grundsätzlich an ihre Umsätze an und ist von Körperschaft- und Gewerbesteuer getrennt. Auf die Körperschaftsteuer kann außerdem Solidaritätszuschlag anfallen.',
        ],
      },
      {
        heading: 'Gesetzliche Rücklagenbildung',
        paragraphs: [
          [
            'Die UG muss eine ',
            { type: 'glossary', id: 'gesetzliche-ruecklage', text: 'gesetzliche Rücklage' },
            ' bilden. Dafür ist ein Viertel des um einen Verlustvortrag geminderten Jahresüberschusses einzustellen. Diese Pflicht gilt, solange das Stammkapital unter 25.000 Euro liegt.',
          ],
          'Die Rücklage darf nicht beliebig ausgeschüttet werden. Sie kann unter den gesetzlichen Voraussetzungen insbesondere zur Kapitalerhöhung aus Gesellschaftsmitteln, zum Ausgleich eines Jahresfehlbetrags oder eines Verlustvortrags verwendet werden.',
        ],
      },
      {
        heading: 'Spätere GmbH: möglich, aber nicht automatisch',
        paragraphs: [
          'Erreicht das Kapital der UG 25.000 Euro oder mehr, wird sie nicht automatisch zur GmbH. Die Gesellschafter müssen die Umstellung beschließen, den Gesellschaftsvertrag anpassen und die Änderung zum Handelsregister anmelden.',
          'Ob eine Kapitalerhöhung und der Wechsel zur GmbH sinnvoll sind, hängt unter anderem von Finanzierung, Außenwirkung, Risiko und der weiteren Unternehmensplanung ab.',
        ],
      },
      {
        heading: 'Unterschiede zur GmbH und zum Einzelunternehmen',
        paragraphs: [
          'Der wichtigste Unterschied zur GmbH liegt im geringeren Startkapital sowie in der Pflicht zur Rücklagenbildung. Die UG hat dafür denselben grundsätzlichen Organisations-, Buchführungs- und Offenlegungsaufwand wie eine GmbH.',
          'Im Unterschied zum Einzelunternehmen ist die UG rechtlich und steuerlich von ihrem Inhaber getrennt. Das kann die Haftung und Beteiligung strukturieren, bringt aber mehr Formalitäten, laufende Kosten und Pflichten mit sich.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und passende Situationen',
        paragraphs: [
          'Eine UG kann für Gründer passen, die eine Kapitalgesellschaft mit begrenztem Startkapital benötigen und die laufenden Pflichten bewusst einplanen. Sie ermöglicht auch mehrere Gesellschafter und eine klare Verteilung von Geschäftsanteilen.',
          'Gegen eine UG können die geringe Kapitalausstattung, die Rücklagenpflicht, der Organisationsaufwand und mögliche Herausforderungen bei Finanzierung oder Außenwirkung sprechen. Entscheidend ist nicht nur die Höhe des Startkapitals, sondern ob die Gesellschaft von Beginn an ausreichend finanziert ist.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Eine UG mit einem Euro Stammkapital ist rechtlich möglich, aber nicht automatisch wirtschaftlich sinnvoll. Das Stammkapital sollte zu den tatsächlichen Gründungs- und Betriebskosten passen.',
          'Die UG ist keine „kleine GmbH ohne Pflichten“. Sie unterliegt grundsätzlich denselben Regeln zu Geschäftsführung, Buchführung, Jahresabschluss und Offenlegung wie eine GmbH – ergänzt um die spezielle Rücklagenpflicht.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die UG ist eine besondere Variante der GmbH',
    'Sie kann ab einem Euro Stammkapital gegründet werden, benötigt aber eine realistische Finanzierung',
    'Das Stammkapital muss bei Gründung vollständig als Bareinlage eingezahlt werden',
    'Sacheinlagen sind bei der Gründung einer UG nicht zulässig',
    'Die UG haftet grundsätzlich mit dem Gesellschaftsvermögen',
    'Sie ist im Handelsregister Abteilung B eingetragen und unterliegt den GmbH-Pflichten',
    'Ein Viertel des bereinigten Jahresüberschusses ist grundsätzlich in die gesetzliche Rücklage einzustellen',
  ],
  commonMistakes: [
    'ein Stammkapital von einem Euro als ausreichende Finanzierung ansehen',
    'UG und GmbH als vollständig unterschiedliche Rechtsformen behandeln',
    'die volle Einzahlung der Bareinlagen bei Gründung übersehen',
    'Sacheinlagen bei der Gründung einplanen',
    'die gesetzliche Rücklage mit frei ausschüttbarem Gewinn verwechseln',
    'Haftungsbeschränkung als vollständigen Ausschluss persönlicher Risiken verstehen',
    'Buchführungs- und Offenlegungspflichten unterschätzen',
  ],
  faqs: [
    {
      question: 'Was ist eine UG einfach erklärt?',
      answer: 'Eine UG (haftungsbeschränkt) ist eine besondere Variante der GmbH. Sie ist eine eigene Kapitalgesellschaft und kann mit geringerem Stammkapital gegründet werden.',
    },
    {
      question: 'Kann ich eine UG wirklich mit einem Euro gründen?',
      answer: 'Ein Euro ist die gesetzliche Untergrenze für das Stammkapital. Ob das für Notar-, Register- und laufende Kosten ausreicht, ist eine separate wirtschaftliche Frage und in der Praxis oft nicht der Fall.',
    },
    {
      question: 'Sind Sacheinlagen bei einer UG möglich?',
      answer: 'Bei der Gründung einer UG sind Sacheinlagen nicht zulässig. Das Stammkapital muss vollständig als Bareinlage eingezahlt werden.',
    },
    {
      question: 'Was ist die gesetzliche Rücklage einer UG?',
      answer: 'Die UG muss grundsätzlich ein Viertel ihres um einen Verlustvortrag geminderten Jahresüberschusses in eine gesetzliche Rücklage einstellen, solange ihr Stammkapital unter 25.000 Euro liegt.',
    },
    {
      question: 'Wird eine UG automatisch zur GmbH?',
      answer: 'Nein. Bei ausreichend Kapital kann eine Umstellung auf die GmbH beschlossen und im Handelsregister eingetragen werden. Sie erfolgt nicht automatisch.',
    },
    {
      question: 'Zahlt eine UG Körperschaftsteuer und Gewerbesteuer?',
      answer: 'Die UG ist grundsätzlich körperschaftsteuerpflichtig und gilt für die Gewerbesteuer stets als Gewerbebetrieb. Umsatzsteuer richtet sich nach ihren Umsätzen und den geltenden Regeln.',
    },
    {
      question: 'Was ist der Unterschied zwischen UG und Einzelunternehmen?',
      answer: 'Die UG ist rechtlich vom Inhaber getrennt und haftet grundsätzlich mit ihrem Gesellschaftsvermögen. Ein Einzelunternehmen wird unmittelbar vom Inhaber geführt, der grundsätzlich persönlich haftet.',
    },
  ],
  related: [
    'rechtsformen',
    'gmbh',
    'koerperschaftsteuer',
    'gewerbesteuer',
    'umsatzsteuer',
  ],
  sources: [
    { label: '§ 2 GmbHG – Form des Gesellschaftsvertrags', url: 'https://www.gesetze-im-internet.de/gmbhg/__2.html' },
    { label: '§ 5a GmbHG – Unternehmergesellschaft', url: 'https://www.gesetze-im-internet.de/gmbhg/__5a.html' },
    { label: '§ 11 GmbHG – Rechtszustand vor Eintragung', url: 'https://www.gesetze-im-internet.de/gmbhg/__11.html' },
    { label: '§ 13 GmbHG – Rechtsfähigkeit und Haftung', url: 'https://www.gesetze-im-internet.de/gmbhg/__13.html' },
    { label: '§ 35 GmbHG – Vertretung durch Geschäftsführer', url: 'https://www.gesetze-im-internet.de/gmbhg/__35.html' },
    { label: '§ 3 HRV – Handelsregister Abteilung B', url: 'https://www.gesetze-im-internet.de/hdlregvfg/__3.html' },
    { label: '§ 14 GewO – Anzeige eines Gewerbes', url: 'https://www.gesetze-im-internet.de/gewo/__14.html' },
    { label: '§ 238 HGB – Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/hgb/__238.html' },
    { label: '§ 264 HGB – Jahresabschluss der Kapitalgesellschaft', url: 'https://www.gesetze-im-internet.de/hgb/__264.html' },
    { label: '§ 325 HGB – Offenlegung der Rechnungslegungsunterlagen', url: 'https://www.gesetze-im-internet.de/hgb/__325.html' },
    { label: '§ 1 KStG – Körperschaftsteuerpflicht', url: 'https://www.gesetze-im-internet.de/kstg_1977/__1.html' },
    { label: '§ 2 GewStG – Gewerbesteuerpflicht', url: 'https://www.gesetze-im-internet.de/gewstg/__2.html' },
    { label: '§ 2 UStG – Unternehmer und Unternehmen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__2.html' },
    { label: '§ 3 SolzG 1995 – Solidaritätszuschlag', url: 'https://www.gesetze-im-internet.de/solzg_1995/__3.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default ug;
