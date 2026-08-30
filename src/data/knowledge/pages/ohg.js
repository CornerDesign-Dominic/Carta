import { defaultDisclaimer } from '../shared.js';

const ohg = {
  slug: 'ohg',
  category: 'Rechtsformen',
  title: 'OHG – Offene Handelsgesellschaft',
  description: 'OHG einfach erklärt: Gründung, persönliche Haftung, Geschäftsführung, HRA, Buchführung, Steuern und Unterschiede zu GbR und KG.',
  seo: {
    title: 'OHG einfach erklärt | Belege24',
    description: 'Erfahre, wie eine OHG funktioniert, wie Gesellschafter haften und was bei Handelsregister, Buchführung, Steuern sowie dem Unterschied zu GbR und KG wichtig ist.',
    canonicalPath: '/wissen/ohg',
  },
  article: {
    intro: 'Eine OHG ist eine Personengesellschaft, in der mindestens zwei Gesellschafter gemeinsam ein Unternehmen führen. Alle Gesellschafter haften grundsätzlich persönlich und unbeschränkt für die Verbindlichkeiten der Gesellschaft.',
    sections: [
      {
        heading: 'Was ist eine OHG?',
        paragraphs: [
          'Die offene Handelsgesellschaft (OHG) ist eine Personengesellschaft des Handelsrechts. Sie wird typischerweise für ein Handelsgewerbe unter gemeinschaftlicher Firma eingesetzt und ist im Handelsregister eingetragen.',
          'Auch eine kleingewerbliche, vermögensverwaltende oder freiberufliche Gesellschaft kann sich unter bestimmten Voraussetzungen als OHG eintragen lassen. Welche Rechtsform und Eintragung passen, hängt deshalb vom Zweck und der konkreten Organisation des Unternehmens ab.',
        ],
      },
      {
        heading: 'Voraussetzungen, Gründung und Gesellschafter',
        paragraphs: [
          'Eine OHG braucht mindestens zwei Gesellschafter. Das können natürliche Personen oder Gesellschaften sein. Ein gesetzliches Mindestkapital ist nicht vorgeschrieben.',
          'Der Gesellschaftsvertrag kann grundsätzlich formfrei geschlossen werden. Ein schriftlicher Vertrag ist jedoch wichtig, damit Beiträge, Zuständigkeiten, Gewinnverteilung, Vertretung und das Ausscheiden von Gesellschaftern klar geregelt sind.',
        ],
      },
      {
        heading: 'Persönliche und unbeschränkte Haftung',
        paragraphs: [
          [
            'Die Gesellschafter haften für Verbindlichkeiten der OHG ',
            { type: 'glossary', id: 'persoenliche-haftung', text: 'persönlich' },
            ', unbeschränkt und als Gesamtschuldner. Gläubiger können eine Forderung daher unter den gesetzlichen Voraussetzungen gegen die Gesellschaft und gegen jeden Gesellschafter geltend machen.',
          ],
          'Eine interne Vereinbarung, wonach nur ein Gesellschafter das wirtschaftliche Risiko tragen soll, gilt gegenüber Dritten nicht automatisch. Die persönliche Haftung ist der zentrale Unterschied zu Kapitalgesellschaften wie GmbH oder UG.',
        ],
      },
      {
        heading: 'Geschäftsführung und Vertretung',
        paragraphs: [
          'Ohne abweichende Vereinbarung sind alle Gesellschafter zur Geschäftsführung berechtigt und verpflichtet. Der Gesellschaftsvertrag kann einzelne Gesellschafter von der Geschäftsführung ausschließen oder besondere Zuständigkeiten festlegen.',
          'Nach außen ist grundsätzlich jeder Gesellschafter zur Vertretung der OHG berechtigt. Abweichende Vertretungsregeln können vereinbart und im Handelsregister eingetragen werden. Bei mehreren Beteiligten sollte der Vertrag klar zwischen interner Geschäftsführung und externer Vertretung unterscheiden.',
        ],
      },
      {
        heading: 'Handelsregister, HRA und Gewerbeanmeldung',
        paragraphs: [
          [
            'Die OHG ist beim Handelsregister anzumelden und wird in Abteilung A geführt. Die Eintragung erhält eine ',
            { type: 'glossary', id: 'hra', text: 'HRA-Nummer' },
            '. Dort sind unter anderem Firma, Sitz, Gesellschafter und Vertretungsregelungen öffentlich nachvollziehbar.',
          ],
          'Eine Handelsregistereintragung ersetzt die Gewerbeanmeldung nicht. Betreibt die OHG ein Gewerbe, ist dieses grundsätzlich bei der zuständigen Behörde anzumelden. Je nach Tätigkeit können außerdem steuerliche Erfassung und besondere Erlaubnisse erforderlich sein.',
        ],
      },
      {
        heading: 'Unterschied zwischen OHG und GbR',
        paragraphs: [
          'Die GbR ist die allgemeine Personengesellschaft für einen gemeinsamen Zweck. Die OHG ist die handelsrechtlich geprägte Gesellschaft, die typischerweise ein Handelsgewerbe betreibt und im Handelsregister steht.',
          'Eine GbR wird nicht allein durch Wachstum automatisch zur OHG. Entscheidend sind Zweck, Geschäftsbetrieb und gegebenenfalls die Eintragung. Für kleinere, freiberufliche oder vermögensverwaltende Gesellschaften kann eine freiwillige OHG-Eintragung unter besonderen gesetzlichen Voraussetzungen möglich sein.',
        ],
      },
      {
        heading: 'Buchführung und Jahresabschluss',
        paragraphs: [
          'Eine OHG unterliegt den handelsrechtlichen Pflichten eines Kaufmanns. Sie muss deshalb laufende Bücher führen und einen Jahresabschluss erstellen. Dazu gehören grundsätzlich Bilanz und Gewinn- und Verlustrechnung.',
          'Die Buchführung ist nicht nur für Steuern wichtig. Sie bildet auch die Grundlage, um Gewinnanteile, Entnahmen, Einlagen und die wirtschaftliche Lage der Gesellschaft nachvollziehbar zu bestimmen.',
        ],
      },
      {
        heading: 'Steuern: Einkommensteuer, Gewerbesteuer und Umsatzsteuer',
        paragraphs: [
          'Der Gewinn der OHG wird steuerlich grundsätzlich den Gesellschaftern zugerechnet. Bei natürlichen Personen unterliegt ihr Gewinnanteil regelmäßig der Einkommensteuer. Die OHG selbst ist davon steuerlich zu unterscheiden.',
          'Bei einem Gewerbebetrieb kann Gewerbesteuer anfallen. Umsatzsteuerlich kann die OHG selbst Unternehmerin sein; Umsatzsteuer richtet sich nach ihren Umsätzen und den jeweils geltenden Regeln. Die konkrete steuerliche Behandlung hängt unter anderem von Tätigkeit und Gesellschaftern ab.',
        ],
      },
      {
        heading: 'Gewinnverteilung und Entnahmen',
        paragraphs: [
          'Gewinn- und Verlustanteile werden auf Grundlage des Jahresabschlusses ermittelt. Wie sie verteilt werden, sollte im Gesellschaftsvertrag eindeutig festgelegt sein. Fehlt eine Regelung, gelten die gesetzlichen Vorschriften.',
          'Entnahmen sind keine Betriebsausgaben. Sie sollten von Mitteln für Steuern, laufende Verpflichtungen und Investitionen getrennt geplant werden. Gerade bei mehreren Gesellschaftern verhindert eine klare Entnahmeregel Konflikte und Liquiditätsprobleme.',
        ],
      },
      {
        heading: 'Eintritt und Ausscheiden von Gesellschaftern',
        paragraphs: [
          'Neue Gesellschafter können grundsätzlich durch Vereinbarung der Beteiligten aufgenommen werden. Beim Ausscheiden eines Gesellschafters sind Gesellschaftsvertrag, Abfindung, Fortsetzung der Gesellschaft und Registeranmeldung wichtige Themen.',
          'Ein ausgeschiedener Gesellschafter kann für bestimmte bereits bestehende Verbindlichkeiten unter gesetzlichen Voraussetzungen noch nachhaften. Änderungen bei Gesellschaftern oder Vertretung müssen daher rechtzeitig geprüft und zum Handelsregister angemeldet werden.',
        ],
      },
      {
        heading: 'Unterschied zur KG',
        paragraphs: [
          'Bei der OHG haften grundsätzlich alle Gesellschafter persönlich und unbeschränkt. Bei einer KG gibt es dagegen mindestens einen persönlich haftenden Komplementär und mindestens einen Kommanditisten, dessen Haftung nach den gesetzlichen Regeln begrenzt sein kann.',
          'Die KG kann deshalb passen, wenn sich aktive Unternehmensführung und Kapitalbeteiligung stärker voneinander trennen sollen. Sie bleibt aber ebenfalls eine Personengesellschaft mit handelsrechtlichen Pflichten.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und passende Situationen',
        paragraphs: [
          'Eine OHG kann für ein gemeinsames Handelsunternehmen passen, wenn alle Beteiligten aktiv mitwirken und bereit sind, Verantwortung und persönliche Haftung zu tragen. Sie braucht kein gesetzliches Mindestkapital und ermöglicht eine flexible vertragliche Gestaltung.',
          'Die persönliche Haftung, die gemeinsame Abstimmung und die kaufmännische Buchführung sind wesentliche Nachteile. Ein Wechsel zu einer KG oder Kapitalgesellschaft kann sinnvoll werden, wenn Haftungsrisiken, Finanzierung oder die Rollen der Beteiligten sich verändern.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Eine OHG ist nicht einfach eine GbR mit anderem Namen. Handelsregister, Buchführung und die handelsrechtliche Einordnung verändern die Anforderungen an die Gesellschaft.',
          'Persönliche Haftung lässt sich gegenüber Dritten nicht allein durch interne Absprachen ausschließen. Zudem bedeutet eine HRA-Eintragung nicht, dass Gewerbeanmeldung, steuerliche Erfassung oder erforderliche Erlaubnisse erledigt sind.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine OHG hat mindestens zwei Gesellschafter',
    'Ein gesetzliches Mindestkapital ist nicht vorgeschrieben',
    'Gesellschafter haften grundsätzlich persönlich, unbeschränkt und als Gesamtschuldner',
    'Ohne abweichende Regelung führen und vertreten die Gesellschafter die OHG grundsätzlich selbst',
    'Die OHG wird im Handelsregister Abteilung A (HRA) eingetragen',
    'Sie ist zur kaufmännischen Buchführung und zum Jahresabschluss verpflichtet',
    'Gewinnanteile können bei den Gesellschaftern einkommensteuerlich relevant sein; Gewerbe- und Umsatzsteuer folgen eigenen Regeln',
  ],
  commonMistakes: [
    'OHG und GbR ohne Prüfung gleichsetzen',
    'persönliche Haftung durch interne Vereinbarungen als vollständig ausgeschlossen ansehen',
    'Geschäftsführung und Vertretung nicht klar voneinander unterscheiden',
    'Handelsregisteranmeldung und Gewerbeanmeldung verwechseln',
    'Entnahmen wie Betriebsausgaben behandeln',
    'Eintritt oder Ausscheiden von Gesellschaftern ohne Vertrags- und Registerprüfung umsetzen',
  ],
  faqs: [
    {
      question: 'Was ist eine OHG einfach erklärt?',
      answer: 'Eine OHG ist eine Personengesellschaft mit mindestens zwei Gesellschaftern. Sie wird typischerweise für ein Handelsunternehmen genutzt, und alle Gesellschafter haften grundsätzlich persönlich.',
    },
    {
      question: 'Wie haften die Gesellschafter einer OHG?',
      answer: 'Sie haften grundsätzlich persönlich, unbeschränkt und als Gesamtschuldner für die Verbindlichkeiten der Gesellschaft.',
    },
    {
      question: 'Braucht eine OHG Mindestkapital?',
      answer: 'Nein. Für eine OHG ist kein gesetzliches Mindestkapital vorgeschrieben. Die Beteiligten sollten dennoch genügend Mittel für Betrieb, Steuern und Risiken einplanen.',
    },
    {
      question: 'Muss eine OHG ins Handelsregister?',
      answer: 'Ja. Die OHG ist zum Handelsregister anzumelden und wird in Abteilung A geführt.',
    },
    {
      question: 'Was ist der Unterschied zwischen OHG und GbR?',
      answer: 'Die OHG ist die handelsrechtlich geprägte Personengesellschaft und steht im Handelsregister. Die GbR ist die allgemeine Personengesellschaft für einen gemeinsamen Zweck.',
    },
    {
      question: 'Zahlt eine OHG Gewerbesteuer?',
      answer: 'Bei einem Gewerbebetrieb kann Gewerbesteuer anfallen. Die konkrete Behandlung hängt von der Tätigkeit und den gesetzlichen Voraussetzungen ab.',
    },
    {
      question: 'Was unterscheidet OHG und KG?',
      answer: 'In der OHG haften grundsätzlich alle Gesellschafter persönlich. In der KG gibt es zusätzlich Kommanditisten, deren Haftung nach den gesetzlichen Regeln begrenzt sein kann.',
    },
  ],
  related: [
    'rechtsformen',
    'gbr',
    'einkommensteuer',
    'gewerbesteuer',
    'umsatzsteuer',
  ],
  sources: [
    { label: '§ 105 HGB – Begriff der OHG', url: 'https://www.gesetze-im-internet.de/hgb/__105.html' },
    { label: '§ 106 HGB – Anmeldung zum Handelsregister', url: 'https://www.gesetze-im-internet.de/hgb/__106.html' },
    { label: '§ 107 HGB – OHG für weitere Gesellschaftszwecke', url: 'https://www.gesetze-im-internet.de/hgb/__107.html' },
    { label: '§ 3 HRV – Handelsregister Abteilung A', url: 'https://www.gesetze-im-internet.de/hdlregvfg/__3.html' },
    { label: '§ 116 HGB – Geschäftsführungsbefugnis', url: 'https://www.gesetze-im-internet.de/hgb/__116.html' },
    { label: '§ 120 HGB – Ermittlung von Gewinn- und Verlustanteilen', url: 'https://www.gesetze-im-internet.de/hgb/__120.html' },
    { label: '§ 124 HGB – Vertretung der Gesellschaft', url: 'https://www.gesetze-im-internet.de/hgb/__124.html' },
    { label: '§ 126 HGB – Persönliche Haftung der Gesellschafter', url: 'https://www.gesetze-im-internet.de/hgb/__126.html' },
    { label: '§ 130 HGB – Ausscheiden von Gesellschaftern', url: 'https://www.gesetze-im-internet.de/hgb/__130.html' },
    { label: '§ 137 HGB – Nachhaftung ausgeschiedener Gesellschafter', url: 'https://www.gesetze-im-internet.de/hgb/__137.html' },
    { label: '§ 238 HGB – Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/hgb/__238.html' },
    { label: '§ 242 HGB – Pflicht zur Aufstellung von Jahresabschluss und Bilanz', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
    { label: '§ 14 GewO – Anzeige eines Gewerbes', url: 'https://www.gesetze-im-internet.de/gewo/__14.html' },
    { label: '§ 4 EStG – Gewinnermittlung und Betriebsausgaben', url: 'https://www.gesetze-im-internet.de/estg/__4.html' },
    { label: '§ 15 EStG – Einkünfte aus Gewerbebetrieb', url: 'https://www.gesetze-im-internet.de/estg/__15.html' },
    { label: '§ 2 GewStG – Steuergegenstand der Gewerbesteuer', url: 'https://www.gesetze-im-internet.de/gewstg/__2.html' },
    { label: '§ 2 UStG – Unternehmer und Unternehmen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__2.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default ohg;
