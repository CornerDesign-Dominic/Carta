import { defaultDisclaimer } from '../shared.js';

const gbr = {
  slug: 'gbr',
  category: 'Rechtsformen',
  title: 'GbR – Gesellschaft bürgerlichen Rechts',
  description: 'GbR einfach erklärt: Gründung, Gesellschaftsvertrag, Haftung, eGbR, Steuern, Buchführung sowie Unterschiede zur OHG.',
  seo: {
    title: 'GbR einfach erklärt | Belege24',
    description: 'Erfahre, wie eine GbR gegründet wird, wie Gesellschafter haften, was die eGbR ist und wann Steuern, Gewerbe oder Handelsregister wichtig werden.',
    canonicalPath: '/wissen/gbr',
  },
  article: {
    intro: 'Eine GbR ist eine Personengesellschaft von mindestens zwei Gesellschaftern, die ein gemeinsames Ziel verfolgen. Sie lässt sich vergleichsweise einfach gründen, verbindet die Beteiligten aber grundsätzlich auch persönlich mit den Verbindlichkeiten der Gesellschaft.',
    sections: [
      {
        heading: 'Was ist eine GbR?',
        paragraphs: [
          'Die Gesellschaft bürgerlichen Rechts (GbR) entsteht durch einen Gesellschaftsvertrag, mit dem sich mindestens zwei Personen zur Förderung eines gemeinsamen Zwecks zusammenschließen. Sie kann zum Beispiel für ein gemeinsames Projekt, eine freiberufliche Zusammenarbeit oder ein Unternehmen genutzt werden.',
          'Eine GbR ist nicht automatisch ein Gewerbebetrieb. Ob sie gewerblich, freiberuflich oder vermögensverwaltend tätig ist, richtet sich nach dem gemeinsamen Zweck und der tatsächlichen Tätigkeit.',
        ],
      },
      {
        heading: 'Gesellschafter, Gründung und Gesellschaftsvertrag',
        paragraphs: [
          [
            'Eine GbR braucht mindestens zwei ',
            { type: 'glossary', id: 'gesellschafter', text: 'Gesellschafter' },
            '. Das Gesetz schreibt für den Gesellschaftsvertrag grundsätzlich keine bestimmte Form vor. Ein schriftlicher Vertrag ist trotzdem sehr sinnvoll, weil er Rollen, Beiträge, Gewinnverteilung, Entscheidungen und den Umgang mit Konflikten klar festhalten kann.',
          ],
          'Die Gründung erfolgt grundsätzlich mit der Vereinbarung der Beteiligten. Je nach Tätigkeit können daneben eine Gewerbeanmeldung, die steuerliche Erfassung oder besondere Erlaubnisse erforderlich sein. Wer Geld, Sachen oder Arbeitsleistung einbringt, sollte dies im Vertrag eindeutig regeln.',
        ],
      },
      {
        heading: 'Haftung der Gesellschafter',
        paragraphs: [
          'Für Verbindlichkeiten der GbR haften die Gesellschafter grundsätzlich persönlich und als Gesamtschuldner. Ein Gläubiger kann eine Forderung daher unter den gesetzlichen Voraussetzungen gegen die Gesellschaft und gegen die Gesellschafter geltend machen.',
          'Interne Absprachen zur Kosten- oder Risikoverteilung schützen gegenüber außenstehenden Gläubigern nicht automatisch. Gerade bei Verträgen mit größerem wirtschaftlichem Risiko sollte die Haftung vor der Gründung sorgfältig bedacht werden.',
        ],
      },
      {
        heading: 'Mindestkapital, Geschäftsführung und Vertretung',
        paragraphs: [
          'Ein gesetzliches Mindestkapital gibt es für die GbR nicht. Welche Beiträge die Gesellschafter leisten, legen sie im Gesellschaftsvertrag fest. Auch ohne hohe Anfangseinlage solltest du laufende Kosten, Steuern und mögliche Risiken realistisch planen.',
          'Ohne abweichende Vereinbarung führen die Gesellschafter die Geschäfte grundsätzlich gemeinsam und vertreten die GbR gemeinsam nach außen. Der Gesellschaftsvertrag kann andere Regeln vorsehen, etwa Zuständigkeiten für einzelne Bereiche oder eine Einzelvertretung.',
        ],
      },
      {
        heading: 'Gewerbeanmeldung',
        paragraphs: [
          'Betreibt die GbR ein Gewerbe, ist dieses grundsätzlich bei der zuständigen Behörde anzumelden. Die Gesellschafter sind dabei regelmäßig mit anzugeben. Bei freiberuflichen Tätigkeiten ist keine Gewerbeanmeldung erforderlich; die steuerliche Erfassung bleibt davon unberührt.',
          'Ob eine Tätigkeit als Gewerbe oder als freier Beruf einzuordnen ist, kann für Gewerbesteuer, Anmeldung und Buchführung relevant sein. Bei gemischten oder besonderen Tätigkeiten ist eine genaue Prüfung wichtig.',
        ],
      },
      {
        heading: 'Gesellschaftsregister und eGbR',
        paragraphs: [
          [
            'Seit der Reform des Personengesellschaftsrechts kann eine GbR in das Gesellschaftsregister eingetragen werden. Die eingetragene GbR führt den Zusatz ',
            { type: 'glossary', id: 'egbr', text: 'eGbR' },
            '. Die Eintragung ist nicht für jede GbR allgemein verpflichtend, kann aber für bestimmte Rechtsgeschäfte oder einen klaren Außenauftritt sinnvoll sein.',
          ],
          'Die eGbR ist keine neue Gesellschaftsform mit Haftungsbegrenzung. Sie bleibt eine GbR; die Eintragung macht ihre Registrierung nach außen nachvollziehbar. Ob eine Eintragung im konkreten Fall nötig oder sinnvoll ist, hängt von der geplanten Tätigkeit und den Geschäften der GbR ab.',
        ],
      },
      {
        heading: 'Unterschied zwischen GbR und OHG',
        paragraphs: [
          'Die GbR ist für gemeinsame Zwecke gedacht, die kein Handelsgewerbe im Sinne des Handelsgesetzbuchs voraussetzen. Dagegen ist die OHG die Personengesellschaft für ein Handelsgewerbe unter gemeinschaftlicher Firma.',
          'Wächst ein gemeinsames gewerbliches Unternehmen in eine kaufmännisch eingerichtete Struktur hinein, kann die OHG statt der GbR relevant werden. Die Einordnung hängt nicht allein von Umsatz oder Mitarbeiterzahl ab, sondern vom konkreten Geschäftsbetrieb.',
        ],
      },
      {
        heading: 'Buchführung und Jahresabschluss',
        paragraphs: [
          'Eine GbR muss nicht allein wegen ihrer Rechtsform kaufmännische Bücher führen. Je nach Tätigkeit, Größe und gesetzlichen Pflichten kann der Gewinn per Einnahmenüberschussrechnung ermittelt werden oder eine Buchführung mit Jahresabschluss erforderlich sein.',
          'Bei einem Handelsgewerbe gelten andere handelsrechtliche Anforderungen als bei einer kleineren oder freiberuflichen GbR. Kläre die passende Gewinnermittlung früh, damit Belege, Rechnungen und Aufzeichnungen von Beginn an vollständig organisiert sind.',
        ],
      },
      {
        heading: 'Steuern: Einkommensteuer, Gewerbesteuer und Umsatzsteuer',
        paragraphs: [
          'Der Gewinn einer GbR wird steuerlich grundsätzlich den Gesellschaftern zugerechnet. Bei natürlichen Personen unterliegt ihr Gewinnanteil regelmäßig der Einkommensteuer. Betriebsausgaben können den Gewinn unter den gesetzlichen Voraussetzungen mindern.',
          'Gewerbesteuer kann anfallen, wenn die GbR einen Gewerbebetrieb unterhält. Freiberufliche GbRs unterliegen regelmäßig nicht der Gewerbesteuer. Umsatzsteuerlich kann die GbR selbst Unternehmerin sein; die Umsatzsteuer richtet sich nach den Umsätzen und den jeweils geltenden Regeln.',
        ],
      },
      {
        heading: 'Gewinnverteilung und Entnahmen',
        paragraphs: [
          'Wie Gewinn und Verlust verteilt werden, sollte der Gesellschaftsvertrag eindeutig bestimmen. Fehlt eine Vereinbarung, greifen die gesetzlichen Regeln. Die Gewinnverteilung muss nicht automatisch den Köpfen oder den tatsächlich entnommenen Beträgen entsprechen.',
          'Private Entnahmen sind keine Betriebsausgaben. Sie sollten von Mitteln für Steuern, laufende Kosten und gemeinsame Investitionen getrennt geplant werden. Besonders wichtig ist eine transparente Vereinbarung, wenn Gesellschafter unterschiedlich viel Geld oder Arbeit einbringen.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und geeignete Situationen',
        paragraphs: [
          'Die GbR kann gut passen, wenn mehrere Personen unkompliziert zusammenarbeiten und die Abläufe überschaubar bleiben. Vorteile sind der flexible Start, kein gesetzliches Mindestkapital und ein Gesellschaftsvertrag, der sich an den gemeinsamen Zweck anpassen lässt.',
          'Dem stehen persönliche Haftung, gemeinsamer Abstimmungsbedarf und mögliche Konflikte über Beiträge oder Gewinn gegenüber. Ein Wechsel zu einer anderen Rechtsform kann sinnvoll werden, wenn Haftungsrisiken, Finanzierung, Wachstum oder eine kaufmännische Organisation deutlich zunehmen.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Eine GbR ist weder automatisch ein Gewerbebetrieb noch automatisch im Gesellschaftsregister eingetragen. Die eGbR ist die registrierte Variante, keine haftungsbeschränkte Gesellschaft.',
          'Verlasse dich nicht allein auf mündliche Absprachen. Ein klarer Gesellschaftsvertrag und eine nachvollziehbare Dokumentation von Entscheidungen, Einlagen, Gewinnanteilen und Entnahmen helfen, spätere Konflikte zu vermeiden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine GbR braucht mindestens zwei Gesellschafter und einen gemeinsamen Zweck',
    'Ein schriftlicher Gesellschaftsvertrag ist zwar grundsätzlich nicht vorgeschrieben, aber sehr sinnvoll',
    'Gesellschafter haften grundsätzlich persönlich und als Gesamtschuldner',
    'Ein gesetzliches Mindestkapital ist nicht vorgeschrieben',
    'Geschäftsführung und Vertretung erfolgen ohne abweichende Vereinbarung grundsätzlich gemeinsam',
    'Die Eintragung ins Gesellschaftsregister ist nicht für jede GbR allgemein verpflichtend; eine eingetragene GbR heißt eGbR',
    'Eine GbR ist nicht automatisch gewerbesteuerpflichtig oder buchführungspflichtig',
  ],
  commonMistakes: [
    'GbR, eGbR und OHG gleichsetzen',
    'eine GbR automatisch als Gewerbebetrieb behandeln',
    'persönliche Haftung durch einen Gesellschaftsvertrag als vollständig ausgeschlossen ansehen',
    'Gewinnverteilung, Vertretung und Entnahmen nicht schriftlich vereinbaren',
    'die Buchführungs- und Aufzeichnungspflichten erst nach Beginn der Tätigkeit prüfen',
    'eine Registereintragung mit einer Haftungsbeschränkung verwechseln',
  ],
  faqs: [
    {
      question: 'Was ist eine GbR einfach erklärt?',
      answer: 'Eine GbR ist eine Gesellschaft von mindestens zwei Personen, die ein gemeinsames Ziel verfolgen. Die Gesellschafter haften grundsätzlich persönlich für die Verbindlichkeiten der Gesellschaft.',
    },
    {
      question: 'Braucht eine GbR einen schriftlichen Vertrag?',
      answer: 'Ein schriftlicher Vertrag ist grundsätzlich nicht zwingend vorgeschrieben. Er ist aber sehr sinnvoll, um Beiträge, Zuständigkeiten, Gewinnverteilung und den Umgang mit Konflikten eindeutig festzulegen.',
    },
    {
      question: 'Was ist eine eGbR?',
      answer: 'Eine eGbR ist eine GbR, die in das Gesellschaftsregister eingetragen ist. Die Eintragung begrenzt die Haftung der Gesellschafter nicht.',
    },
    {
      question: 'Muss jede GbR ins Gesellschaftsregister?',
      answer: 'Nein. Die Eintragung ist nicht für jede GbR allgemein verpflichtend. Ob sie für konkrete Geschäfte erforderlich oder sinnvoll ist, hängt vom Einzelfall ab.',
    },
    {
      question: 'Zahlt eine GbR Gewerbesteuer?',
      answer: 'Nur wenn sie einen Gewerbebetrieb unterhält, kann Gewerbesteuer anfallen. Eine freiberufliche GbR unterliegt regelmäßig nicht der Gewerbesteuer.',
    },
    {
      question: 'Was ist der Unterschied zwischen GbR und OHG?',
      answer: 'Die OHG ist die Personengesellschaft für ein Handelsgewerbe. Die GbR ist dagegen für gemeinsame Zwecke gedacht, bei denen kein Handelsgewerbe vorausgesetzt wird.',
    },
    {
      question: 'Wie wird der Gewinn einer GbR versteuert?',
      answer: 'Der Gewinn wird grundsätzlich den Gesellschaftern zugerechnet. Bei natürlichen Personen unterliegt der jeweilige Gewinnanteil regelmäßig der Einkommensteuer.',
    },
  ],
  related: [
    'rechtsformen',
    'einzelunternehmen',
    'einkommensteuer',
    'gewerbesteuer',
    'umsatzsteuer',
  ],
  sources: [
    { label: '§ 705 BGB – Rechtsnatur der Gesellschaft', url: 'https://www.gesetze-im-internet.de/bgb/__705.html' },
    { label: '§ 707 BGB – Eintragung in das Gesellschaftsregister', url: 'https://www.gesetze-im-internet.de/bgb/__707.html' },
    { label: '§ 707a BGB – Namenszusatz der eingetragenen GbR', url: 'https://www.gesetze-im-internet.de/bgb/__707a.html' },
    { label: '§ 709 BGB – Gewinn- und Verlustverteilung', url: 'https://www.gesetze-im-internet.de/bgb/__709.html' },
    { label: '§ 715 BGB – Geschäftsführungsbefugnis', url: 'https://www.gesetze-im-internet.de/bgb/__715.html' },
    { label: '§ 720 BGB – Vertretung der Gesellschaft', url: 'https://www.gesetze-im-internet.de/bgb/__720.html' },
    { label: '§ 721 BGB – Persönliche Haftung der Gesellschafter', url: 'https://www.gesetze-im-internet.de/bgb/__721.html' },
    { label: '§ 105 HGB – Offene Handelsgesellschaft', url: 'https://www.gesetze-im-internet.de/hgb/__105.html' },
    { label: '§ 14 GewO – Anzeige eines Gewerbes', url: 'https://www.gesetze-im-internet.de/gewo/__14.html' },
    { label: '§ 4 EStG – Gewinnermittlung und Betriebsausgaben', url: 'https://www.gesetze-im-internet.de/estg/__4.html' },
    { label: '§ 141 AO – Buchführungspflicht bestimmter Steuerpflichtiger', url: 'https://www.gesetze-im-internet.de/ao_1977/__141.html' },
    { label: '§ 15 EStG – Einkünfte aus Gewerbebetrieb', url: 'https://www.gesetze-im-internet.de/estg/__15.html' },
    { label: '§ 2 GewStG – Steuergegenstand der Gewerbesteuer', url: 'https://www.gesetze-im-internet.de/gewstg/__2.html' },
    { label: '§ 2 UStG – Unternehmer und Unternehmen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__2.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default gbr;
