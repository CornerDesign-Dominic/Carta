import { defaultDisclaimer } from '../shared.js';

const einzelunternehmen = {
  slug: 'einzelunternehmen',
  category: 'Rechtsformen',
  title: 'Einzelunternehmen',
  description: 'Einzelunternehmen einfach erklärt: Gründung, persönliche Haftung, e. K., Steuern, Buchführung und die wichtigsten Vor- und Nachteile.',
  seo: {
    title: 'Einzelunternehmen einfach erklärt | Belege24',
    description: 'Erfahre, was ein Einzelunternehmen ist, wie Gründung, Haftung, Handelsregister, Buchführung und Steuern grundsätzlich funktionieren.',
    canonicalPath: '/wissen/einzelunternehmen',
  },
  article: {
    intro: 'Ein Einzelunternehmen ist ein Unternehmen mit genau einem Inhaber. Du triffst die Entscheidungen selbst und führst das Unternehmen im eigenen Namen – haftest dafür aber grundsätzlich auch persönlich.',
    sections: [
      {
        heading: 'Was ist ein Einzelunternehmen?',
        paragraphs: [
          'Ein Einzelunternehmen wird von einer natürlichen Person betrieben. Es ist keine von dir getrennte Gesellschaft wie eine GmbH: Rechte, Pflichten, Verträge und Schulden des Unternehmens sind grundsätzlich dir als Inhaber zuzuordnen.',
          'Beschäftigte können im Einzelunternehmen arbeiten, sind aber keine Mitinhaber. Ein Einzelunternehmen kann gewerblich oder freiberuflich tätig sein. Ob eine Tätigkeit steuerlich oder gewerberechtlich als Gewerbe gilt, hängt von ihrer konkreten Ausgestaltung ab.',
        ],
      },
      {
        heading: 'Gründung, Inhaber und Mindestkapital',
        paragraphs: [
          'Für ein Einzelunternehmen brauchst du genau einen Inhaber. Ein gesetzliches Mindestkapital ist nicht vorgeschrieben. Praktisch solltest du dennoch ausreichend finanzielle Mittel für Anschaffungen, laufende Kosten, Steuern und mögliche Zahlungsausfälle einplanen.',
          'Die Gründung ist im Vergleich zu einer Kapitalgesellschaft oft schlank. Bei einer gewerblichen Tätigkeit ist grundsätzlich eine Gewerbeanmeldung erforderlich. Freiberufliche Tätigkeiten sind davon regelmäßig ausgenommen; für erlaubnispflichtige Gewerbe können zusätzliche Anforderungen gelten.',
        ],
      },
      {
        heading: 'Persönliche Haftung',
        paragraphs: [
          'Als Inhaber haftest du grundsätzlich unbeschränkt. Reicht das betriebliche Vermögen für Verbindlichkeiten nicht aus, kann auch dein Privatvermögen betroffen sein. Verträge, Versicherungen und eine sorgfältige Liquiditätsplanung sind deshalb besonders wichtig.',
          'Eine Haftungsbegrenzung entsteht nicht schon durch die Bezeichnung „Einzelunternehmen“ oder durch eine Gewerbeanmeldung. Bei höherem wirtschaftlichem Risiko kann eine andere Rechtsform in Betracht kommen; das sollte rechtlich und steuerlich im Einzelfall geprüft werden.',
        ],
      },
      {
        heading: 'Geschäftsführung und Vertretung',
        paragraphs: [
          'Du führst dein Einzelunternehmen selbst und vertrittst es nach außen. Du kannst Beschäftigten oder anderen Personen Vollmachten erteilen, bleibst aber als Inhaber für die wesentlichen Entscheidungen und Verpflichtungen verantwortlich.',
          'Anders als bei einer GmbH gibt es keine gesetzlich getrennte Ebene aus Gesellschaftern und Geschäftsführung. Das vereinfacht Entscheidungen, bindet die Verantwortung aber direkt an dich.',
        ],
      },
      {
        heading: 'Handelsregister und Unterschied zum e. K.',
        paragraphs: [
          [
            'Wer ein Handelsgewerbe betreibt, ist ',
            { type: 'glossary', id: 'kaufmann', text: 'Kaufmann' },
            ' im Sinne des Handelsgesetzbuchs und muss die Firma zum Handelsregister anmelden. Ein kleineres Gewerbe kann sich freiwillig eintragen lassen. Mit der Eintragung tritt das Unternehmen als eingetragener Kaufmann beziehungsweise eingetragene Kauffrau (e. K.) auf.',
          ],
          [
            'Der e. K. ist daher kein vom Einzelunternehmen getrenntes Unternehmen mit eigener Haftungsbeschränkung. Er bleibt ein Einzelunternehmer, unterliegt aber als Kaufmann dem Handelsrecht und ist im ',
            { type: 'glossary', id: 'handelsregister', text: 'Handelsregister' },
            ' in Abteilung A eingetragen.',
          ],
        ],
      },
      {
        heading: 'Buchführung und Jahresabschluss',
        paragraphs: [
          'Einzelunternehmen können ihren Gewinn unter gesetzlichen Voraussetzungen mit einer Einnahmenüberschussrechnung ermitteln. Besteht eine handels- oder steuerrechtliche Buchführungspflicht, ist eine laufende Buchführung mit Bilanz und Gewinn- und Verlustrechnung erforderlich.',
          'Eingetragene Kaufleute sind grundsätzlich zur Buchführung verpflichtet. Für einzelne Kaufleute sieht das Handelsgesetzbuch unter bestimmten Voraussetzungen eine Befreiung vor. Welche Gewinnermittlung im konkreten Fall zulässig oder erforderlich ist, sollte früh geklärt werden.',
        ],
      },
      {
        heading: 'Steuern: Einkommensteuer, Gewerbesteuer und Umsatzsteuer',
        paragraphs: [
          'Der Gewinn eines Einzelunternehmens wird grundsätzlich dem Inhaber zugerechnet und unterliegt bei ihm der Einkommensteuer. Betriebsausgaben können den Gewinn unter den gesetzlichen Voraussetzungen mindern. Bei einem Gewerbebetrieb kann zusätzlich Gewerbesteuer anfallen.',
          'Die Umsatzsteuer ist davon getrennt. Sie knüpft grundsätzlich an Umsätze an, nicht an den Gewinn. Die Kleinunternehmerregelung kann unter ihren eigenen Voraussetzungen anwendbar sein, ist aber weder eine Rechtsform noch mit einem Kleingewerbe gleichzusetzen.',
        ],
      },
      {
        heading: 'Gewinnentnahmen und Sozialversicherung',
        paragraphs: [
          'Du kannst Geld oder andere Werte aus dem Unternehmen für private Zwecke entnehmen. Eine Entnahme ist keine Gehaltszahlung an dich selbst und mindert den Gewinn grundsätzlich nicht. Für die Planung solltest du private Entnahmen von den Mitteln für Steuern, laufende Kosten und Investitionen trennen.',
          'Als Inhaber bist du nicht automatisch Arbeitnehmer deines eigenen Unternehmens. Wie Kranken-, Pflege-, Renten- oder andere Versicherungen zu behandeln sind, hängt von deiner Tätigkeit und deiner persönlichen Situation ab. Das sollte bei der Gründung individuell geklärt werden.',
        ],
      },
      {
        heading: 'Vor- und Nachteile sowie passende Situationen',
        paragraphs: [
          'Vorteile sind der einfache Start, kein gesetzliches Mindestkapital und schnelle Entscheidungen. Ein Einzelunternehmen kann gut passen, wenn du allein startest, die Abläufe überschaubar sind und du das wirtschaftliche Risiko realistisch einschätzen kannst.',
          'Nachteile sind vor allem die persönliche Haftung und die enge Verbindung zwischen Unternehmens- und Inhaberpersönlichkeit. Ein Wechsel der Rechtsform kann sinnvoll werden, wenn Haftungsrisiken, Finanzierung, mehrere Beteiligte oder organisatorische Anforderungen deutlich wachsen. Er ist jedoch keine automatische Pflicht und sollte gut vorbereitet werden.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Ein Einzelunternehmen ist nicht automatisch ein Kleingewerbe und nicht automatisch Kleinunternehmer im Umsatzsteuerrecht. Diese Begriffe beschreiben unterschiedliche rechtliche oder steuerliche Zusammenhänge.',
          'Auch die Eintragung als e. K. ändert nichts daran, dass du grundsätzlich persönlich haftest. Prüfe außerdem früh, ob deine Tätigkeit gewerblich oder freiberuflich einzuordnen ist und welche Anmeldungen, Erlaubnisse und Aufzeichnungspflichten daraus folgen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein Einzelunternehmen hat genau einen Inhaber',
    'Ein gesetzliches Mindestkapital ist nicht vorgeschrieben',
    'Der Inhaber führt und vertritt das Unternehmen grundsätzlich selbst',
    'Für Verbindlichkeiten haftet der Inhaber grundsätzlich persönlich und unbeschränkt',
    'Ein Gewerbebetrieb muss grundsätzlich angemeldet werden; Freiberufler sind regelmäßig keine Gewerbetreibenden',
    'Ein e. K. bleibt ein Einzelunternehmen, ist aber im Handelsregister eingetragen',
    'Gewinn kann Einkommensteuer, Gewerbesteuer und Umsatzsteuer betreffen – jeweils nach eigenen Regeln',
  ],
  commonMistakes: [
    'Einzelunternehmen mit Kleingewerbe oder Kleinunternehmerregelung gleichsetzen',
    'persönliche Haftung und Haftungsbegrenzung durch einen e. K. verwechseln',
    'Umsatz, Gewinn und private Entnahmen gleich behandeln',
    'Gewerbeanmeldung, steuerliche Erfassung und erforderliche Erlaubnisse vermischen',
    'Buchführungs- und Aufzeichnungspflichten erst nach Beginn der Tätigkeit prüfen',
    'Steuern und private Entnahmen nicht in der Liquiditätsplanung berücksichtigen',
  ],
  faqs: [
    {
      question: 'Was ist ein Einzelunternehmen einfach erklärt?',
      answer: 'Ein Einzelunternehmen ist ein Unternehmen mit einem einzigen Inhaber. Dieser führt das Unternehmen im eigenen Namen und haftet grundsätzlich auch persönlich für seine Verbindlichkeiten.',
    },
    {
      question: 'Braucht ein Einzelunternehmen Mindestkapital?',
      answer: 'Nein. Für ein Einzelunternehmen ist kein gesetzliches Mindestkapital vorgeschrieben. Ausreichende Mittel für den tatsächlichen Start und laufende Kosten bleiben trotzdem wichtig.',
    },
    {
      question: 'Ist ein Einzelunternehmen automatisch ein Kleingewerbe?',
      answer: 'Nein. Ein Einzelunternehmen beschreibt die Rechtsform mit einem Inhaber. Kleingewerbe und Kleinunternehmerregelung betreffen andere gewerbliche oder steuerliche Fragen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Einzelunternehmen und e. K.?',
      answer: 'Ein e. K. ist ein Einzelunternehmer, der als Kaufmann im Handelsregister eingetragen ist. Die persönliche Haftung bleibt grundsätzlich bestehen.',
    },
    {
      question: 'Muss ein Einzelunternehmen ins Handelsregister?',
      answer: 'Das hängt davon ab, ob ein Handelsgewerbe betrieben wird. Kleinere Gewerbe können sich freiwillig eintragen lassen; die Einordnung hängt vom konkreten Betrieb ab.',
    },
    {
      question: 'Welche Steuern zahlt ein Einzelunternehmer?',
      answer: 'Der Gewinn unterliegt grundsätzlich der Einkommensteuer. Bei einem Gewerbebetrieb kann Gewerbesteuer hinzukommen; Umsatzsteuer richtet sich nach eigenen Regeln und den jeweiligen Umsätzen.',
    },
    {
      question: 'Kann ich mir als Einzelunternehmer ein Gehalt zahlen?',
      answer: 'Entnahmen für private Zwecke sind möglich, gelten aber nicht als Gehalt an dich selbst und mindern den Gewinn grundsätzlich nicht. Sie sollten bei der Liquiditätsplanung berücksichtigt werden.',
    },
  ],
  related: [
    'rechtsformen',
    'einkommensteuer',
    'gewerbesteuer',
    'umsatzsteuer',
  ],
  sources: [
    { label: '§ 1 HGB – Kaufmann', url: 'https://www.gesetze-im-internet.de/hgb/__1.html' },
    { label: '§ 2 HGB – Freiwillige Eintragung eines Kleingewerbes', url: 'https://www.gesetze-im-internet.de/hgb/__2.html' },
    { label: '§ 29 HGB – Handelsregisteranmeldung', url: 'https://www.gesetze-im-internet.de/hgb/__29.html' },
    { label: '§ 238 HGB – Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/hgb/__238.html' },
    { label: '§ 241a HGB – Befreiung einzelner Kaufleute', url: 'https://www.gesetze-im-internet.de/hgb/__241a.html' },
    { label: '§ 141 AO – Buchführungspflicht bestimmter Steuerpflichtiger', url: 'https://www.gesetze-im-internet.de/ao_1977/__141.html' },
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

export default einzelunternehmen;
