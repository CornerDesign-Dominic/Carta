import { defaultDisclaimer } from '../shared.js';

const gmbh = {
  slug: 'gmbh',
  category: 'Rechtsformen',
  title: 'GmbH – Gesellschaft mit beschränkter Haftung',
  description: 'GmbH einfach erklärt: Gründung, Stammkapital, Haftung, Geschäftsführung, Handelsregister, Steuern und Jahresabschluss.',
  seo: {
    title: 'GmbH einfach erklärt | Belege24',
    description: 'Erfahre, wie eine GmbH gegründet wird, wie Haftung, Stammkapital, Geschäftsführung, Steuern und Offenlegung grundsätzlich funktionieren.',
    canonicalPath: '/wissen/gmbh',
  },
  article: {
    intro: 'Eine GmbH ist eine Kapitalgesellschaft mit eigener Rechtspersönlichkeit. Sie kann Verträge schließen, Vermögen besitzen und Steuern zahlen; die Gesellschafter haften grundsätzlich nur mit dem Vermögen der Gesellschaft.',
    sections: [
      {
        heading: 'Was ist eine GmbH?',
        paragraphs: [
          'Die Gesellschaft mit beschränkter Haftung (GmbH) ist eine eigenständige juristische Person. Sie ist von ihren Gesellschaftern getrennt und bleibt auch dann bestehen, wenn sich die Gesellschafter ändern.',
          'Eine GmbH kann von einer oder mehreren Personen oder Gesellschaften gegründet werden. Sie eignet sich vor allem für Unternehmen, bei denen eine klare Trennung zwischen Gesellschaft und Beteiligten sowie eine formalisierte Organisation gewünscht ist.',
        ],
      },
      {
        heading: 'Gründung und Gesellschaftsvertrag',
        paragraphs: [
          'Für die Gründung ist ein notariell beurkundeter Gesellschaftsvertrag erforderlich. Er regelt unter anderem Firma, Sitz, Unternehmensgegenstand, Stammkapital und die Verteilung der Geschäftsanteile.',
          'Die GmbH entsteht als solche erst mit der Eintragung in das Handelsregister. Vorher handelt die Gesellschaft in Gründung; für die Zeit bis zur Eintragung gelten besondere Regeln, die bei Verträgen und Zahlungen berücksichtigt werden sollten.',
        ],
      },
      {
        heading: 'Stammkapital und Stammeinlagen',
        paragraphs: [
          [
            'Das gesetzliche ',
            { type: 'glossary', id: 'stammkapital', text: 'Stammkapital' },
            ' einer GmbH beträgt 25.000 Euro. Die Gesellschafter übernehmen Geschäftsanteile und leisten dafür ',
            { type: 'glossary', id: 'stammeinlage', text: 'Stammeinlagen' },
            ' in Geld oder – unter besonderen Anforderungen – als Sacheinlage.',
          ],
          'Bei Bargründung muss vor der Anmeldung zum Handelsregister grundsätzlich mindestens ein Viertel jeder Geldeinlage und insgesamt mindestens die Hälfte des gesetzlichen Mindeststammkapitals eingezahlt sein. Sacheinlagen müssen vor der Anmeldung vollständig zur freien Verfügung der Geschäftsführer stehen. Die genauen Gründungsunterlagen prüfst du am besten mit Notariat und fachlicher Beratung.',
        ],
      },
      {
        heading: 'Gesellschafter, Geschäftsführung und Vertretung',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'gesellschafter', text: 'Gesellschafter' },
            ' halten die Geschäftsanteile und treffen grundlegende Entscheidungen, zum Beispiel über den Jahresabschluss, Ausschüttungen oder die Bestellung von Geschäftsführern.',
          ],
          [
            'Die GmbH wird nach außen durch ihre ',
            { type: 'glossary', id: 'geschaeftsfuehrer', text: 'Geschäftsführer' },
            ' vertreten. Gesellschafter und Geschäftsführer können dieselben Personen sein, müssen es aber nicht. Wie mehrere Geschäftsführer zusammen vertreten, ergibt sich aus dem Gesellschaftsvertrag, Gesellschafterbeschlüssen und dem Handelsregister.',
          ],
        ],
      },
      {
        heading: 'Haftung: beschränkt, aber nicht absolut',
        paragraphs: [
          'Für Verbindlichkeiten der GmbH haftet grundsätzlich nur das Gesellschaftsvermögen. Das trennt das unternehmerische Risiko im Ausgangspunkt vom Privatvermögen der Gesellschafter.',
          'Die Haftungsbeschränkung ist jedoch kein vollständiger Schutz in jeder Situation. Persönliche Bürgschaften, Pflichtverletzungen von Geschäftsführern, nicht ordnungsgemäß geleistete Einlagen oder besondere gesetzliche Haftungsregeln können zu persönlicher Verantwortung führen.',
        ],
      },
      {
        heading: 'Handelsregister, HRB und Gewerbeanmeldung',
        paragraphs: [
          'Jede GmbH wird in das Handelsregister Abteilung B (HRB) eingetragen. Dort sind unter anderem Firma, Sitz, Stammkapital und die Vertretungsregelung öffentlich nachvollziehbar.',
          'Nimmt die GmbH ein Gewerbe auf, ist dieses grundsätzlich bei der zuständigen Behörde anzumelden. Daneben sind die steuerliche Erfassung und je nach Tätigkeit weitere Erlaubnisse oder Anzeigen zu beachten.',
        ],
      },
      {
        heading: 'Buchführung, Jahresabschluss und Offenlegung',
        paragraphs: [
          'Eine GmbH ist zur doppelten Buchführung verpflichtet und erstellt einen Jahresabschluss mit Bilanz und Gewinn- und Verlustrechnung. Abhängig von Größe und Rechtslage können weitere Bestandteile wie Anhang oder Lagebericht erforderlich sein.',
          'Kapitalgesellschaften müssen ihre Rechnungslegungsunterlagen grundsätzlich elektronisch beim Unternehmensregister einreichen. Für kleinere Gesellschaften gibt es Erleichterungen, die konkreten Offenlegungspflichten richten sich aber nach den gesetzlichen Größenklassen und dem Einzelfall.',
        ],
      },
      {
        heading: 'Steuern: Körperschaftsteuer, Gewerbesteuer, Umsatzsteuer und Soli',
        paragraphs: [
          'Die GmbH versteuert ihr eigenes Einkommen grundsätzlich mit Körperschaftsteuer. Als Kapitalgesellschaft gilt sie für die Gewerbesteuer stets als Gewerbebetrieb; deshalb kann zusätzlich Gewerbesteuer anfallen.',
          'Umsatzsteuerlich kann die GmbH Unternehmerin sein. Umsatzsteuer knüpft grundsätzlich an ihre Umsätze an und ist von den Ertragsteuern zu unterscheiden. Auf die Körperschaftsteuer kann außerdem Solidaritätszuschlag anfallen.',
        ],
      },
      {
        heading: 'Gewinnausschüttungen und Geschäftsführer-Gehalt',
        paragraphs: [
          'Gewinne gehören zunächst der GmbH. Eine Ausschüttung an Gesellschafter setzt grundsätzlich einen entsprechenden Beschluss und einen ausschüttungsfähigen Gewinn voraus. Bei den Gesellschaftern können daraus eigene steuerliche Folgen entstehen.',
          'Ein Geschäftsführer kann für seine Tätigkeit ein Gehalt erhalten. Ein Gehalt ist von einer Gewinnausschüttung zu unterscheiden. Bei geschäftsführenden Gesellschaftern müssen Verträge und Vergütung besonders klar vereinbart und steuerlich angemessen ausgestaltet sein.',
        ],
      },
      {
        heading: 'Unterschied zur UG sowie zu Einzelunternehmen und Personengesellschaften',
        paragraphs: [
          'Die Unternehmergesellschaft (UG) ist eine besondere Variante der GmbH mit geringerem Stammkapital. Sie muss das Stammkapital bei Gründung vollständig einzahlen und unterliegt besonderen Regeln zur Rücklagenbildung. Die GmbH startet dagegen mit dem gesetzlichen Stammkapital von 25.000 Euro.',
          'Im Unterschied zum Einzelunternehmen und zu Personengesellschaften ist die GmbH rechtlich und steuerlich von ihren Gesellschaftern getrennt. Das bringt mehr Formalitäten und laufenden Aufwand mit sich, kann aber bei Haftung, Beteiligungen und Unternehmensnachfolge Vorteile bieten.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und passende Situationen',
        paragraphs: [
          'Für eine GmbH sprechen die grundsätzlich auf das Gesellschaftsvermögen beschränkte Haftung, eine klare Beteiligungsstruktur und die Möglichkeit, mehrere Gesellschafter geordnet einzubinden. Sie kann sich für Unternehmen mit höherem wirtschaftlichem Risiko, Wachstumsplänen oder mehreren Beteiligten eignen.',
          'Dem stehen Notar- und Registerkosten, das Stammkapital, strengere Buchführungs- und Offenlegungspflichten sowie laufender Organisationsaufwand gegenüber. Ein Rechtsformwechsel kann sinnvoll werden, wenn sich Risiko, Finanzierung oder Beteiligungsverhältnisse wesentlich ändern; er sollte rechtlich und steuerlich vorbereitet werden.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Eine GmbH haftet nicht in jedem Fall „vollständig risikofrei“. Außerdem gehören Gesellschaftsvermögen und Privatvermögen der Gesellschafter nicht einfach zusammen; auch steuerlich werden GmbH und Gesellschafter grundsätzlich getrennt betrachtet.',
          'Verwechsle Stammkapital nicht mit dauerhaft verfügbarem Guthaben oder Gewinn. Das eingezahlte Kapital steht der GmbH nach der Gründung für ihren Geschäftsbetrieb zur Verfügung, muss aber ordnungsgemäß im Interesse der Gesellschaft verwendet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die GmbH ist eine eigenständige juristische Person',
    'Sie entsteht erst mit der Eintragung ins Handelsregister Abteilung B',
    'Das gesetzliche Stammkapital beträgt 25.000 Euro',
    'Gesellschafter haften grundsätzlich nur mit dem Gesellschaftsvermögen',
    'Die GmbH wird durch einen oder mehrere Geschäftsführer vertreten',
    'Sie ist zur doppelten Buchführung, zum Jahresabschluss und grundsätzlich zur Offenlegung verpflichtet',
    'Körperschaftsteuer, Gewerbesteuer, Umsatzsteuer und Solidaritätszuschlag können relevant sein',
  ],
  commonMistakes: [
    'Haftungsbeschränkung als vollständigen Ausschluss persönlicher Risiken verstehen',
    'Stammkapital mit Gewinn oder frei verfügbarem Privatvermögen verwechseln',
    'Gesellschafterrolle und Geschäftsführungsrolle gleichsetzen',
    'Handelsregister, Gewerbeanmeldung und steuerliche Erfassung als denselben Schritt behandeln',
    'Ausschüttung und Geschäftsführer-Gehalt steuerlich oder rechtlich gleich behandeln',
    'Buchführungs- und Offenlegungspflichten erst nach der Gründung organisieren',
  ],
  faqs: [
    {
      question: 'Was ist eine GmbH einfach erklärt?',
      answer: 'Eine GmbH ist eine eigenständige Kapitalgesellschaft. Sie besitzt eigenes Vermögen und haftet für ihre Verbindlichkeiten grundsätzlich selbst.',
    },
    {
      question: 'Wie viel Stammkapital braucht eine GmbH?',
      answer: 'Das gesetzliche Stammkapital beträgt 25.000 Euro. Für die Anmeldung gelten Regeln dazu, welcher Teil der Einlagen bereits eingezahlt sein muss.',
    },
    {
      question: 'Haften Gesellschafter einer GmbH mit ihrem Privatvermögen?',
      answer: 'Grundsätzlich haftet die GmbH mit ihrem Gesellschaftsvermögen. Persönliche Haftung kann aber etwa durch Bürgschaften, Pflichtverletzungen oder besondere gesetzliche Regeln entstehen.',
    },
    {
      question: 'Wer vertritt eine GmbH?',
      answer: 'Die GmbH wird durch ihre Geschäftsführer vertreten. Die konkrete Vertretungsregelung ist im Handelsregister einsehbar.',
    },
    {
      question: 'Zahlt eine GmbH Gewerbesteuer?',
      answer: 'Ja, eine GmbH gilt für die Gewerbesteuer stets als Gewerbebetrieb. Zusätzlich ist grundsätzlich Körperschaftsteuer auf ihr Einkommen relevant.',
    },
    {
      question: 'Was ist der Unterschied zwischen GmbH und UG?',
      answer: 'Die UG ist eine besondere Form der GmbH mit geringerem Stammkapital. Bei einer UG gelten dafür besondere Regeln, insbesondere zur vollständigen Einzahlung und Rücklagenbildung.',
    },
    {
      question: 'Kann ein Gesellschafter zugleich Geschäftsführer sein?',
      answer: 'Ja. Gesellschafter und Geschäftsführer können dieselbe Person sein, ihre Rollen und Aufgaben bleiben jedoch rechtlich zu unterscheiden.',
    },
  ],
  related: [
    'rechtsformen',
    'koerperschaftsteuer',
    'gewerbesteuer',
    'umsatzsteuer',
    'solidaritaetszuschlag',
  ],
  sources: [
    { label: '§ 1 GmbHG – Wesen der Gesellschaft', url: 'https://www.gesetze-im-internet.de/gmbhg/__1.html' },
    { label: '§ 2 GmbHG – Form des Gesellschaftsvertrags', url: 'https://www.gesetze-im-internet.de/gmbhg/__2.html' },
    { label: '§ 5 GmbHG – Stammkapital und Stammeinlagen', url: 'https://www.gesetze-im-internet.de/gmbhg/__5.html' },
    { label: '§ 5a GmbHG – Unternehmergesellschaft', url: 'https://www.gesetze-im-internet.de/gmbhg/__5a.html' },
    { label: '§ 7 GmbHG – Anmeldung der Gesellschaft', url: 'https://www.gesetze-im-internet.de/gmbhg/__7.html' },
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
    { label: '§ 20 EStG – Einkünfte aus Kapitalvermögen', url: 'https://www.gesetze-im-internet.de/estg/__20.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default gmbh;
