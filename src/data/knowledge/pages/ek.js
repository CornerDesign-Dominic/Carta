import { defaultDisclaimer } from '../shared.js';

const ek = {
  slug: 'ek',
  category: 'Rechtsformen',
  title: 'e. K. – eingetragener Kaufmann / eingetragene Kauffrau',
  description: 'e. K. einfach erklärt: Handelsregister, Firma, persönliche Haftung, Buchführung, Steuern und der Unterschied zum Einzelunternehmen.',
  seo: {
    title: 'e. K. einfach erklärt | Belege24',
    description: 'Erfahre, was ein e. K. ist, wann die Handelsregistereintragung nötig oder möglich ist und was bei Haftung, Buchführung und Steuern wichtig ist.',
    canonicalPath: '/wissen/ek',
  },
  article: {
    intro: 'Ein e. K. ist ein Einzelunternehmer, der als Kaufmann im Handelsregister eingetragen ist. Er bleibt keine eigene Gesellschaft und keine Kapitalgesellschaft: Der Inhaber führt das Unternehmen im eigenen Namen und haftet grundsätzlich persönlich.',
    sections: [
      {
        heading: 'Was bedeutet e. K.?',
        paragraphs: [
          'e. K. steht für eingetragener Kaufmann oder eingetragene Kauffrau. Die Abkürzung zeigt nach außen, dass ein Einzelunternehmen im Handelsregister eingetragen ist und dem Handelsrecht unterliegt.',
          'Der e. K. ist keine von seinem Inhaber getrennte Gesellschaft. Rechte, Pflichten, Verträge und Schulden des Unternehmens sind grundsätzlich weiterhin dem einzelnen Inhaber zuzuordnen.',
        ],
      },
      {
        heading: 'Verhältnis zum Einzelunternehmen',
        paragraphs: [
          'Jeder e. K. ist ein Einzelunternehmen mit genau einem Inhaber. Die Eintragung schafft aber keine neue Haftungsbeschränkung und auch keine zweite juristische Person.',
          'Der wesentliche Unterschied liegt in der kaufmännischen Einordnung: Ein e. K. ist Kaufmann nach dem Handelsgesetzbuch. Dadurch gelten insbesondere die Regeln zu Firma, Handelsregister und Buchführung.',
        ],
      },
      {
        heading: 'Wann gilt jemand als Kaufmann?',
        paragraphs: [
          [
            'Wer ein Handelsgewerbe betreibt, ist ',
            { type: 'glossary', id: 'kaufmann', text: 'Kaufmann' },
            ' im Sinne des Handelsgesetzbuchs. Ob ein Gewerbe einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert, hängt von Art und Umfang des einzelnen Betriebs ab – zum Beispiel von Umsatz, Sortiment, Organisation, Personal, Finanzierung und Geschäftsbeziehungen.',
          ],
          'Ein kleineres Gewerbe ist nicht allein wegen einer bestimmten Umsatzgrenze automatisch ein Handelsgewerbe. Die Einordnung richtet sich immer nach dem Gesamtbild. Freiberufliche Tätigkeiten sind grundsätzlich kein Handelsgewerbe.',
        ],
      },
      {
        heading: 'Pflichteintragung und freiwillige Eintragung',
        paragraphs: [
          'Betreibt jemand ein Handelsgewerbe, muss die Firma zum Handelsregister angemeldet werden. Der Inhaber tritt dann als e. K. auf. Diese Eintragung wird häufig als Pflichteintragung eines Kaufmanns beschrieben.',
          'Betreibt jemand ein kleineres Gewerbe, kann die Eintragung auf eigenen Antrag freiwillig erfolgen. Mit der Eintragung gilt der Betrieb als Handelsgewerbe. Ob dieser Schritt sinnvoll ist, hängt vor allem vom Geschäftsmodell, der Außenwirkung und den zusätzlichen kaufmännischen Pflichten ab.',
        ],
      },
      {
        heading: 'Firmenname und Firmierung',
        paragraphs: [
          [
            'Ein e. K. kann unter einer ',
            { type: 'glossary', id: 'firmierung', text: 'Firma' },
            ' auftreten. Der Name muss sich zur Kennzeichnung des Unternehmens eignen und darf keine irreführenden Angaben enthalten. Außerdem braucht die Firma den gesetzlich vorgeschriebenen Rechtsformzusatz, zum Beispiel „e. K.“.',
          ],
          'Prüfe einen gewünschten Namen vor der Anmeldung sorgfältig. Registergericht, Industrie- und Handelskammer und gegebenenfalls Markenrechte können dabei eine Rolle spielen. Eine gute Idee für einen Namen ersetzt keine rechtliche Prüfung.',
        ],
      },
      {
        heading: 'Handelsregister, HRA und Gewerbeanmeldung',
        paragraphs: [
          [
            'Der e. K. wird im ',
            { type: 'glossary', id: 'handelsregister', text: 'Handelsregister' },
            ' Abteilung A geführt und erhält eine ',
            { type: 'glossary', id: 'hra', text: 'HRA-Nummer' },
            '. Dort sind unter anderem Firma, Sitz, Inhaber und Vertretungsregelungen öffentlich nachvollziehbar.',
          ],
          'Die Handelsregistereintragung ersetzt die Gewerbeanmeldung nicht. Betreibst du ein Gewerbe, ist dieses grundsätzlich bei der zuständigen Behörde anzumelden. Steuerliche Erfassung, erforderliche Erlaubnisse und Registeranmeldung sind getrennte Schritte.',
        ],
      },
      {
        heading: 'Haftung, Geschäftsführung und Vertretung',
        paragraphs: [
          'Als Inhaber führst und vertrittst du den e. K. grundsätzlich selbst. Du kannst anderen Personen Vollmachten erteilen, bleibst aber für die wesentlichen Verpflichtungen und die Organisation des Unternehmens verantwortlich.',
          'Für Verbindlichkeiten des e. K. haftest du grundsätzlich persönlich und unbeschränkt. Reicht das betriebliche Vermögen nicht aus, kann auch dein Privatvermögen betroffen sein. Die Eintragung als e. K. begrenzt dieses Risiko nicht.',
        ],
      },
      {
        heading: 'Mindestkapital, Buchführung und Jahresabschluss',
        paragraphs: [
          'Für den e. K. gibt es kein gesetzliches Mindestkapital. Ausreichende Mittel für Betrieb, Steuern und mögliche Risiken bleiben trotzdem wichtig.',
          'Als Kaufmann besteht grundsätzlich eine handelsrechtliche Buchführungspflicht mit Jahresabschluss. Für einzelne Kaufleute kann es unter gesetzlichen Voraussetzungen eine Befreiung geben. Prüfe die Buchführungs- und Aufzeichnungspflichten deshalb frühzeitig und nicht erst zum Jahresende.',
        ],
      },
      {
        heading: 'Steuern: Einkommensteuer, Gewerbesteuer und Umsatzsteuer',
        paragraphs: [
          'Der Gewinn des e. K. wird grundsätzlich dem Inhaber zugerechnet und ist bei ihm einkommensteuerlich relevant. Betriebsausgaben können den Gewinn unter den gesetzlichen Voraussetzungen mindern.',
          'Bei einem Gewerbebetrieb kann zusätzlich Gewerbesteuer anfallen. Umsatzsteuer folgt eigenen Regeln und knüpft grundsätzlich an die Umsätze des Unternehmens an, nicht an den Gewinn. Die steuerliche Erfassung ändert sich nicht allein, weil ein Einzelunternehmen ins Handelsregister eingetragen wird.',
        ],
      },
      {
        heading: 'Gewinnentnahmen',
        paragraphs: [
          'Als Inhaber kannst du Werte für private Zwecke aus dem Unternehmen entnehmen. Eine Entnahme ist kein Gehalt an dich selbst und mindert den Gewinn grundsätzlich nicht.',
          'Trenne Entnahmen in deiner Planung von Geld für laufende Kosten, Steuern und Investitionen. Die Buchführung sollte Entnahmen nachvollziehbar erfassen, damit die wirtschaftliche Lage des Unternehmens klar bleibt.',
        ],
      },
      {
        heading: 'Vor- und Nachteile und passende Situationen',
        paragraphs: [
          'Ein e. K. kann passend sein, wenn ein Einzelunternehmen kaufmännisch organisiert ist oder eine Eintragung mit Firma und Registereintrag zur Geschäftstätigkeit passt. Vorteile können eine klare kaufmännische Außenwirkung und die Nutzung einer Firma sein.',
          'Dem stehen persönliche Haftung, Handelsregisterpflichten und in der Regel mehr Aufwand für Buchführung und Abschluss gegenüber. Wenn Haftungsrisiken oder mehrere Beteiligte wichtiger werden, kann eine andere Rechtsform in Betracht kommen.',
        ],
      },
      {
        heading: 'Unterschied zwischen Einzelunternehmen und e. K.',
        paragraphs: [
          'Das einfache Einzelunternehmen wird von einer Person betrieben und ist nicht zwingend im Handelsregister eingetragen. Ein e. K. ist ebenfalls ein Einzelunternehmen, aber als Kaufmann im Handelsregister registriert.',
          'Die Eintragung schafft keine Kapitalgesellschaft und keine Haftungsbegrenzung. Sie verändert vor allem die handelsrechtliche Einordnung, die Firmierung und die kaufmännischen Pflichten des Betriebs.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Ein e. K. ist nicht dasselbe wie eine GmbH und keine eigene Gesellschaft. Er ist auch nicht automatisch besser geeignet als ein nicht eingetragenes Einzelunternehmen; die passende Einordnung hängt von Art und Umfang des Gewerbes ab.',
          'Verwechsle Handelsregistereintragung, Gewerbeanmeldung und steuerliche Erfassung nicht miteinander. Auch die Abkürzung e. K. schützt nicht vor persönlicher Haftung oder ersetzt eine ausreichende Liquiditätsplanung.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein e. K. ist ein im Handelsregister eingetragenes Einzelunternehmen',
    'Er ist keine eigene Gesellschaft und keine Kapitalgesellschaft',
    'Wer ein Handelsgewerbe betreibt, muss die Firma zum Handelsregister anmelden',
    'Kleinere Gewerbe können sich freiwillig als e. K. eintragen lassen',
    'Ein e. K. haftet grundsätzlich persönlich und unbeschränkt',
    'Die Eintragung erfolgt im Handelsregister Abteilung A (HRA)',
    'Buchführung, Einkommensteuer, Gewerbesteuer und Umsatzsteuer folgen eigenen gesetzlichen Regeln',
  ],
  commonMistakes: [
    'e. K. mit einer Kapitalgesellschaft oder einer eigenen Gesellschaft verwechseln',
    'Handelsregistereintragung als Haftungsbegrenzung verstehen',
    'Pflichteintragung und freiwillige Eintragung ohne Blick auf das konkrete Gewerbe gleich behandeln',
    'Firmenname, Gewerbeanmeldung und Handelsregisteranmeldung vermischen',
    'Entnahmen wie Betriebsausgaben oder eigenes Gehalt behandeln',
    'Buchführungs- und Jahresabschlusspflichten erst spät organisieren',
  ],
  faqs: [
    {
      question: 'Was ist ein e. K. einfach erklärt?',
      answer: 'Ein e. K. ist ein Einzelunternehmer, der als Kaufmann im Handelsregister eingetragen ist. Er bleibt persönlich für sein Unternehmen verantwortlich.',
    },
    {
      question: 'Ist ein e. K. eine eigene Gesellschaft?',
      answer: 'Nein. Ein e. K. ist keine eigene Gesellschaft, sondern ein Einzelunternehmen mit Handelsregistereintragung.',
    },
    {
      question: 'Wann muss ich mich als e. K. eintragen lassen?',
      answer: 'Wenn dein Gewerbe einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert, ist eine Handelsregisteranmeldung grundsätzlich nötig. Kleinere Gewerbe können sich freiwillig eintragen lassen.',
    },
    {
      question: 'Haftet ein e. K. persönlich?',
      answer: 'Ja. Der Inhaber haftet grundsätzlich persönlich und unbeschränkt für die Verbindlichkeiten des Unternehmens.',
    },
    {
      question: 'Braucht ein e. K. Mindestkapital?',
      answer: 'Nein. Gesetzliches Mindestkapital ist nicht vorgeschrieben. Der tatsächliche Kapitalbedarf für das Geschäft bleibt davon unabhängig.',
    },
    {
      question: 'Welche Steuern zahlt ein e. K.?',
      answer: 'Der Gewinn ist beim Inhaber grundsätzlich einkommensteuerlich relevant. Bei einem Gewerbebetrieb kann Gewerbesteuer anfallen; Umsatzsteuer richtet sich nach den Umsätzen und eigenen Regeln.',
    },
    {
      question: 'Was ist der Unterschied zwischen Einzelunternehmen und e. K.?',
      answer: 'Ein e. K. ist ein Einzelunternehmen, das als Kaufmann im Handelsregister eingetragen ist. Die persönliche Haftung bleibt grundsätzlich bestehen.',
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
    { label: '§ 1 HGB – Kaufmann und Handelsgewerbe', url: 'https://www.gesetze-im-internet.de/hgb/__1.html' },
    { label: '§ 2 HGB – Freiwillige Eintragung eines Kleingewerbes', url: 'https://www.gesetze-im-internet.de/hgb/__2.html' },
    { label: '§ 17 HGB – Begriff der Firma', url: 'https://www.gesetze-im-internet.de/hgb/__17.html' },
    { label: '§ 18 HGB – Firmenwahrheit und Unterscheidbarkeit', url: 'https://www.gesetze-im-internet.de/hgb/__18.html' },
    { label: '§ 19 HGB – Rechtsformzusatz des Einzelkaufmanns', url: 'https://www.gesetze-im-internet.de/hgb/__19.html' },
    { label: '§ 29 HGB – Handelsregisteranmeldung', url: 'https://www.gesetze-im-internet.de/hgb/__29.html' },
    { label: '§ 3 HRV – Handelsregister Abteilung A', url: 'https://www.gesetze-im-internet.de/hdlregvfg/__3.html' },
    { label: '§ 238 HGB – Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/hgb/__238.html' },
    { label: '§ 241a HGB – Befreiung einzelner Kaufleute', url: 'https://www.gesetze-im-internet.de/hgb/__241a.html' },
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

export default ek;
