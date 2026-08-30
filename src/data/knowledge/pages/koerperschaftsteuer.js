import { defaultDisclaimer } from '../shared.js';

const koerperschaftsteuer = {
  slug: 'koerperschaftsteuer',
  category: 'Steuern',
  title: 'Körperschaftsteuer',
  description: 'Körperschaftsteuer einfach erklärt: Steuerpflicht von GmbH, UG und AG, zu versteuerndes Einkommen, Steuersatz und Gewinnausschüttung.',
  seo: {
    title: 'Körperschaftsteuer einfach erklärt | Belege24',
    description: 'Erfahre, welche Unternehmen Körperschaftsteuer zahlen, wie sie berechnet wird und wie sie sich von Einkommensteuer und Gewerbesteuer unterscheidet.',
    canonicalPath: '/wissen/koerperschaftsteuer',
  },
  article: {
    intro: 'Die Körperschaftsteuer ist eine Steuer auf das Einkommen bestimmter Körperschaften. Sie betrifft vor allem Kapitalgesellschaften wie GmbH, UG und AG und ist von der Einkommensteuer ihrer Gesellschafter zu unterscheiden.',
    sections: [
      {
        heading: 'Was ist Körperschaftsteuer?',
        paragraphs: [
          'Die Körperschaftsteuer ist eine Jahressteuer auf das Einkommen von Körperschaften, Personenvereinigungen und Vermögensmassen, soweit die gesetzlichen Voraussetzungen erfüllt sind.',
          [
            'Im Geschäftsalltag geht es meist um Kapitalgesellschaften. Eine ',
            { type: 'glossary', id: 'koerperschaft', text: 'Körperschaft' },
            ' ist rechtlich vom Gesellschafter getrennt. Deshalb wird ihr Einkommen grundsätzlich auf Ebene der Gesellschaft besteuert.',
          ],
        ],
      },
      {
        heading: 'Wer muss Körperschaftsteuer zahlen?',
        paragraphs: [
          'Bei Sitz oder Geschäftsleitung im Inland sind insbesondere GmbH, Unternehmergesellschaften (UG) und Aktiengesellschaften grundsätzlich unbeschränkt körperschaftsteuerpflichtig. Das Gesetz nennt außerdem weitere Körperschaften und Personenvereinigungen.',
          'Ob eine Körperschaft tatsächlich steuerpflichtig ist und in welchem Umfang, hängt unter anderem von Rechtsform, Sitz, Geschäftsleitung und möglichen gesetzlichen Ausnahmen ab.',
        ],
      },
      {
        heading: 'Was ist das zu versteuernde Einkommen einer Körperschaft?',
        paragraphs: [
          'Die Körperschaftsteuer wird auf das zu versteuernde Einkommen berechnet. Vereinfacht wird zunächst das Einkommen der Gesellschaft nach den Vorschriften des Einkommensteuer- und Körperschaftsteuerrechts ermittelt; gesetzlich vorgesehene Korrekturen und Freibeträge können anschließend relevant sein.',
          [
            'Das ',
            { type: 'glossary', id: 'zu-versteuerndes-einkommen', text: 'zu versteuernde Einkommen' },
            ' ist daher nicht einfach der Umsatz und auch nicht zwingend der handelsrechtliche Jahresüberschuss.',
          ],
        ],
      },
      {
        heading: 'Welche Rolle spielen Betriebsausgaben?',
        paragraphs: [
          [
            'Betrieblich veranlasste Aufwendungen können als ',
            { type: 'glossary', id: 'betriebsausgabe', text: 'Betriebsausgaben' },
            ' den Gewinn und damit grundsätzlich auch das steuerliche Einkommen mindern. Ob ein konkreter Aufwand abziehbar ist, richtet sich aber nach den gesetzlichen Voraussetzungen und möglichen Abzugsbeschränkungen.',
          ],
          'Für eine nachvollziehbare Steuerermittlung sollten Einnahmen, Aufwendungen und Belege sauber dokumentiert sein. Die Buchhaltung allein entscheidet jedoch nicht über jede steuerliche Einordnung.',
        ],
      },
      {
        heading: 'Wie wird die Körperschaftsteuer grundsätzlich berechnet?',
        paragraphs: [
          'Auf das zu versteuernde Einkommen wird der gesetzliche Körperschaftsteuersatz angewendet. Für die Veranlagungszeiträume bis einschließlich 2027 beträgt er nach § 23 KStG 15 Prozent; für spätere Jahre sind gesetzliche Änderungen vorgesehen.',
          'Zusätzlich kann Solidaritätszuschlag auf die Körperschaftsteuer anfallen. Er beträgt grundsätzlich 5,5 Prozent der Bemessungsgrundlage und ist nicht mit einem Zuschlag von 5,5 Prozent auf den Gewinn gleichzusetzen.',
        ],
      },
      {
        heading: 'Unterschied zu Einkommensteuer und Gewerbesteuer',
        paragraphs: [
          'Die Einkommensteuer betrifft grundsätzlich natürliche Personen, etwa Einzelunternehmer oder Gesellschafter mit eigenen Einkünften. Die Körperschaftsteuer betrifft dagegen das Einkommen der Kapitalgesellschaft selbst.',
          'Die Gewerbesteuer ist davon getrennt. Sie knüpft grundsätzlich an den Gewerbeertrag eines Gewerbebetriebs an und kann bei einer gewerblich tätigen Kapitalgesellschaft zusätzlich zur Körperschaftsteuer entstehen. Höhe und Hebesatz sind nicht einheitlich, sondern hängen auch von der Gemeinde ab.',
        ],
      },
      {
        heading: 'Was gilt bei Gewinnausschüttungen?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'gewinnausschuettung', text: 'Gewinnausschüttung' },
            ' verteilt Gewinn der Gesellschaft an Gesellschafter. Für die Ermittlung des körperschaftsteuerlichen Einkommens ist grundsätzlich unerheblich, ob Einkommen ausgeschüttet wird; Ausschüttungen mindern dieses Einkommen nicht.',
          ],
          'Bei den Gesellschaftern können eigene steuerliche Folgen entstehen. Diese hängen insbesondere von der Person des Gesellschafters und der Art der Beteiligung ab und sollten bei konkreten Entscheidungen individuell geprüft werden.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Verwechsle Körperschaftsteuer nicht mit Einkommensteuer oder Gewerbesteuer. Eine Kapitalgesellschaft und ihre Gesellschafter werden steuerlich grundsätzlich getrennt betrachtet.',
          'Setze außerdem Umsatz, Jahresüberschuss und zu versteuerndes Einkommen nicht gleich. Bei Ausschüttungen, besonderen Aufwendungen oder Verlusten ist eine fachliche Prüfung besonders wichtig.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Körperschaftsteuer betrifft vor allem Kapitalgesellschaften wie GmbH, UG und AG',
    'Sie wird auf das zu versteuernde Einkommen der Körperschaft berechnet',
    'Umsatz, Jahresüberschuss und zu versteuerndes Einkommen sind unterschiedliche Größen',
    'Betriebsausgaben können den steuerlichen Gewinn grundsätzlich mindern',
    'Für die Veranlagungszeiträume bis einschließlich 2027 beträgt der gesetzliche Satz 15 Prozent',
    'Solidaritätszuschlag kann zusätzlich auf die Körperschaftsteuer anfallen',
    'Gewerbesteuer kann neben der Körperschaftsteuer relevant sein',
    'Gewinnausschüttungen mindern das körperschaftsteuerliche Einkommen grundsätzlich nicht',
  ],
  commonMistakes: [
    'Körperschaftsteuer mit der Einkommensteuer der Gesellschafter verwechseln',
    'Umsatz oder Jahresüberschuss mit dem zu versteuernden Einkommen gleichsetzen',
    'Gewerbesteuer bei einer Kapitalgesellschaft nicht zusätzlich einplanen',
    'Gewinnausschüttungen wie gewöhnliche Betriebsausgaben behandeln',
    'den Solidaritätszuschlag als Prozentsatz des Gewinns verstehen',
    'steuerliche Folgen einer Ausschüttung ohne Einzelfallprüfung beurteilen',
  ],
  faqs: [
    {
      question: 'Was ist Körperschaftsteuer einfach erklärt?',
      answer: 'Körperschaftsteuer ist eine Steuer auf das Einkommen bestimmter Körperschaften. Im Geschäftsalltag betrifft sie vor allem Kapitalgesellschaften wie GmbH, UG und AG.',
    },
    {
      question: 'Zahlt eine GmbH Körperschaftsteuer?',
      answer: 'Eine GmbH mit Sitz oder Geschäftsleitung im Inland ist grundsätzlich körperschaftsteuerpflichtig. Die konkrete Steuerfestsetzung hängt vom ermittelten Einkommen und den gesetzlichen Regeln ab.',
    },
    {
      question: 'Wie hoch ist die Körperschaftsteuer?',
      answer: 'Für die Veranlagungszeiträume bis einschließlich 2027 beträgt der gesetzliche Körperschaftsteuersatz 15 Prozent des zu versteuernden Einkommens. Zusätzlich kann Solidaritätszuschlag anfallen.',
    },
    {
      question: 'Ist Körperschaftsteuer dasselbe wie Gewerbesteuer?',
      answer: 'Nein. Körperschaftsteuer und Gewerbesteuer sind getrennte Steuern. Bei gewerblich tätigen Kapitalgesellschaften können beide neben­einander relevant sein.',
    },
    {
      question: 'Zahlt eine UG Körperschaftsteuer?',
      answer: 'Eine Unternehmergesellschaft ist eine Form der GmbH und wird grundsätzlich wie eine Kapitalgesellschaft körperschaftsteuerlich behandelt. Entscheidend sind die konkreten gesetzlichen Voraussetzungen.',
    },
    {
      question: 'Mindert eine Gewinnausschüttung die Körperschaftsteuer?',
      answer: 'Eine Gewinnausschüttung mindert das körperschaftsteuerliche Einkommen grundsätzlich nicht. Für die Gesellschafter können jedoch eigene steuerliche Folgen entstehen.',
    },
  ],
  related: [
    'steuern',
    'einkommensteuer',
  ],
  sources: [
    {
      label: '§ 1 KStG – Unbeschränkte Steuerpflicht',
      url: 'https://www.gesetze-im-internet.de/kstg_1977/__1.html',
    },
    {
      label: '§ 7 KStG – Grundlagen der Besteuerung',
      url: 'https://www.gesetze-im-internet.de/kstg_1977/__7.html',
    },
    {
      label: '§ 8 KStG – Ermittlung des Einkommens',
      url: 'https://www.gesetze-im-internet.de/kstg_1977/__8.html',
    },
    {
      label: '§ 23 KStG – Steuersatz',
      url: 'https://www.gesetze-im-internet.de/kstg_1977/__23.html',
    },
    {
      label: '§ 4 SolzG 1995 – Zuschlagsatz',
      url: 'https://www.gesetze-im-internet.de/solzg_1995/__4.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default koerperschaftsteuer;
