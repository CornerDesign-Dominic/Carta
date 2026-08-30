import { defaultDisclaimer } from '../shared.js';

const rechnungsabgrenzung = {
  slug: 'rechnungsabgrenzung',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Rechnungsabgrenzung',
  description: 'Rechnungsabgrenzung einfach erklärt: ARAP, PRAP, periodengerechte Zuordnung sowie Beispiele für vorausbezahlte und voraus erhaltene Beträge.',
  seo: {
    title: 'Rechnungsabgrenzung erklärt: ARAP und PRAP | Belege24',
    description: 'Verstehe Rechnungsabgrenzung, aktive und passive Rechnungsabgrenzungsposten sowie die periodengerechte Zuordnung mit einfachen Beispielen.',
    canonicalPath: '/wissen/rechnungsabgrenzung',
  },
  article: {
    intro: 'Rechnungsabgrenzung sorgt dafür, dass Aufwendungen und Erträge in dem Geschäftsjahr erscheinen, zu dem sie wirtschaftlich gehören. Sie ist wichtig, wenn Geld vor dem Bilanzstichtag fließt, die Leistung oder Nutzung aber erst danach liegt.',
    sections: [
      {
        heading: 'Was bedeutet Rechnungsabgrenzung?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'rechnungsabgrenzung', text: 'Rechnungsabgrenzung' },
            ' ordnet Einnahmen und Ausgaben der richtigen ',
            { type: 'glossary', id: 'periode', text: 'Periode' },
            ' zu. Damit bildet der Jahresabschluss nicht nur den Zeitpunkt einer Zahlung ab, sondern auch, wann der damit verbundene Aufwand oder Ertrag wirtschaftlich entsteht.',
          ],
          'Nach § 250 HGB sind Ausgaben vor dem Abschlussstichtag als aktiver Rechnungsabgrenzungsposten auszuweisen, soweit sie Aufwand für eine bestimmte Zeit danach darstellen. Entsprechend sind Einnahmen vor dem Abschlussstichtag als passiver Rechnungsabgrenzungsposten auszuweisen, soweit sie Ertrag für eine bestimmte Zeit danach darstellen.',
        ],
        formulaCards: [
          {
            title: 'Grundlogik der Rechnungsabgrenzung',
            formula: 'Zahlung jetzt – wirtschaftliche Zugehörigkeit später',
            description: 'Die Zahlung ist bereits erfolgt, doch Aufwand oder Ertrag gehört ganz oder teilweise in eine spätere Periode.',
          },
        ],
      },
      {
        heading: 'Aktiver Rechnungsabgrenzungsposten (ARAP)',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'arap', text: 'aktiver Rechnungsabgrenzungsposten (ARAP)' },
            ' entsteht, wenn ein Unternehmen vor dem ',
            { type: 'glossary', id: 'bilanzstichtag', text: 'Bilanzstichtag' },
            ' zahlt, der Aufwand aber eine bestimmte Zeit danach betrifft. Der Betrag steht zunächst auf der Aktivseite der Bilanz.',
          ],
          'Typisch ist eine im Voraus bezahlte Versicherung. Die Zahlung mindert zwar sofort das Bankguthaben, der Aufwand soll jedoch erst in den Zeitraum fallen, in dem der Versicherungsschutz besteht. Im Folgejahr wird der ARAP planmäßig als Aufwand aufgelöst.',
        ],
      },
      {
        heading: 'Passiver Rechnungsabgrenzungsposten (PRAP)',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'prap', text: 'passiver Rechnungsabgrenzungsposten (PRAP)' },
            ' entsteht, wenn ein Unternehmen vor dem Bilanzstichtag Geld erhält, der Ertrag aber eine bestimmte Zeit danach betrifft. Der Betrag steht zunächst auf der Passivseite der Bilanz.',
          ],
          'Typisch ist eine im Voraus erhaltene Miete. Das Geld ist bereits eingegangen, wirtschaftlich gehört der Ertrag aber in den Zeitraum, für den die Räume überlassen werden. Im Folgejahr wird der PRAP als Ertrag aufgelöst.',
        ],
      },
      {
        heading: 'Beispiele: Vorauszahlung und Vorauszahlungseingang',
        paragraphs: [
          'Die Beispiele vereinfachen bewusst und lassen Umsatzsteuer sowie weitere Abschlussfragen außer Betracht. Sie zeigen nur die Grundlogik der periodengerechten Zuordnung.',
        ],
        exampleCards: [
          {
            title: 'Im Voraus bezahlte Versicherung: ARAP',
            paragraphs: [
              'Ein Unternehmen überweist am 1. Dezember 1.200 Euro für eine Versicherung, deren Schutz vom 1. Januar bis 31. Dezember des Folgejahrs gilt.',
              'Schritt 1: Die Zahlung erfolgt vor dem Bilanzstichtag am 31. Dezember. Das Bankguthaben sinkt sofort.',
              'Schritt 2: Der Versicherungsschutz betrifft vollständig das Folgejahr. Der Betrag wird zum Bilanzstichtag als ARAP auf der Aktivseite ausgewiesen.',
              'Schritt 3: Im Folgejahr wird der ARAP entsprechend dem Versicherungszeitraum als Versicherungsaufwand aufgelöst.',
            ],
            effects: [
              'Bilanz zum 31. Dezember: ARAP von 1.200 Euro auf der Aktivseite.',
              'GuV des Zahlungsjahrs: noch kein Versicherungsaufwand für den Schutz des Folgejahrs.',
            ],
          },
          {
            title: 'Im Voraus erhaltene Miete: PRAP',
            paragraphs: [
              'Ein Vermieter erhält am 20. Dezember 1.500 Euro Miete für Januar des Folgejahrs.',
              'Schritt 1: Das Geld geht noch vor dem Bilanzstichtag auf dem Bankkonto ein.',
              'Schritt 2: Die Raumüberlassung und damit der Ertrag betreffen Januar. Zum Bilanzstichtag wird der Betrag als PRAP auf der Passivseite ausgewiesen.',
              'Schritt 3: Im Januar des Folgejahrs wird der PRAP als Mietertrag aufgelöst.',
            ],
            effects: [
              'Bilanz zum 31. Dezember: PRAP von 1.500 Euro auf der Passivseite.',
              'GuV des Zahlungsjahrs: noch kein Mietertrag für Januar.',
            ],
          },
        ],
      },
      {
        heading: 'Abgrenzung zu Forderungen und Verbindlichkeiten',
        paragraphs: [
          'Ein Rechnungsabgrenzungsposten setzt voraus, dass die Zahlung bereits erfolgt ist und Aufwand oder Ertrag eine Zeit nach dem Bilanzstichtag betrifft.',
          'Eine Forderung liegt dagegen typischerweise vor, wenn ein Unternehmen bereits einen Anspruch auf Zahlung hat, das Geld aber noch nicht erhalten hat. Eine Verbindlichkeit besteht, wenn das Unternehmen noch zahlen muss. Forderungen und Verbindlichkeiten sind daher nicht dasselbe wie ARAP oder PRAP.',
          'Für die Einordnung zählt der konkrete wirtschaftliche Sachverhalt: Zahlungszeitpunkt, Leistungs- oder Nutzungszeitraum und bestehende Ansprüche oder Verpflichtungen müssen zusammen betrachtet werden.',
        ],
      },
      {
        heading: 'Zusammenhang mit Bilanz und GuV',
        paragraphs: [
          [
            'Rechnungsabgrenzungsposten stehen in der ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ': ARAP auf der Aktivseite, PRAP auf der Passivseite. Sie verhindern, dass die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' den Aufwand oder Ertrag im falschen Geschäftsjahr zeigt.',
          ],
          'Mit Beginn oder im Verlauf der Folgeperiode werden die Posten aufgelöst. Dadurch erscheint der Aufwand beziehungsweise Ertrag dort, wo er wirtschaftlich hingehört. Die genaue zeitliche Verteilung folgt dem jeweiligen Leistungs- oder Nutzungszeitraum.',
        ],
      },
      {
        heading: 'Handels- und steuerrechtliche Einordnung',
        paragraphs: [
          'Handelsrechtlich regelt § 250 HGB die aktiven und passiven Rechnungsabgrenzungsposten. Der Jahresabschluss muss Rechnungsabgrenzungsposten grundsätzlich vollständig enthalten, soweit gesetzlich nichts anderes bestimmt ist.',
          'Für bilanzierende Gewerbetreibende enthält § 5 Abs. 5 EStG entsprechende Grundregeln. Bei einzelnen geringen Ausgaben oder Einnahmen kann das Gesetz ein einheitlich auszuübendes Wahlrecht zum Unterlassen eines Rechnungsabgrenzungspostens vorsehen. Ob dieses Wahlrecht im konkreten Fall greift, sollte fachlich geprüft werden.',
          'Die Rechnungsabgrenzung ist ein Thema der Bilanzierung und des Jahresabschlusses. Sie ersetzt keine individuelle Bewertung oder steuerliche Beratung.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle ARAP und PRAP nicht: Vorausbezahlter Aufwand führt grundsätzlich zum ARAP, voraus erhaltener Ertrag grundsätzlich zum PRAP.',
          'Behandle nicht jede Zahlung rund um den Jahreswechsel als Rechnungsabgrenzung. Entscheidend ist, ob die Zahlung vor dem Stichtag erfolgt ist und Aufwand oder Ertrag eine bestimmte Zeit danach betrifft.',
          'Setze einen RAP nicht mit einer Forderung oder Verbindlichkeit gleich. Bei RAPs ist Geld bereits geflossen; bei Forderungen und Verbindlichkeiten steht die Zahlung typischerweise noch aus.',
          'Vergiss die Auflösung im Folgejahr nicht. Ein RAP darf nicht dauerhaft stehen bleiben, wenn der zugehörige Zeitraum bereits abgelaufen ist.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Rechnungsabgrenzung ordnet Aufwand und Ertrag der wirtschaftlich richtigen Periode zu',
    'ARAP: Zahlung vor dem Bilanzstichtag, Aufwand danach',
    'PRAP: Zahlungseingang vor dem Bilanzstichtag, Ertrag danach',
    'RAPs stehen in der Bilanz und beeinflussen, wann Aufwand oder Ertrag in der GuV erscheint',
    'Forderungen und Verbindlichkeiten unterscheiden sich von RAPs, weil die Zahlung dort typischerweise noch aussteht',
    'RAPs werden im Folgezeitraum entsprechend der wirtschaftlichen Zugehörigkeit aufgelöst',
  ],
  commonMistakes: [
    'ARAP und PRAP verwechseln',
    'Vorauszahlung ohne Blick auf den Leistungs- oder Nutzungszeitraum sofort vollständig als Aufwand oder Ertrag erfassen',
    'Rechnungsabgrenzungsposten mit Forderungen oder Verbindlichkeiten gleichsetzen',
    'RAP im Folgejahr nicht auflösen',
    'steuerliche Wahlrechte ohne Prüfung der Voraussetzungen anwenden',
  ],
  faqs: [
    { question: 'Was ist Rechnungsabgrenzung einfach erklärt?', answer: 'Rechnungsabgrenzung verschiebt Aufwand oder Ertrag in die Periode, zu der er wirtschaftlich gehört, wenn Geld bereits vorher geflossen ist.' },
    { question: 'Was ist ein ARAP?', answer: 'Ein ARAP entsteht bei einer Zahlung vor dem Bilanzstichtag, wenn der zugehörige Aufwand eine bestimmte Zeit danach betrifft. Er steht auf der Aktivseite der Bilanz.' },
    { question: 'Was ist ein PRAP?', answer: 'Ein PRAP entsteht bei einem Zahlungseingang vor dem Bilanzstichtag, wenn der zugehörige Ertrag eine bestimmte Zeit danach betrifft. Er steht auf der Passivseite der Bilanz.' },
    { question: 'Was ist der Unterschied zwischen RAP und Forderung?', answer: 'Bei einem RAP ist Geld bereits geflossen, die wirtschaftliche Zugehörigkeit liegt aber später. Bei einer Forderung steht die Zahlung grundsätzlich noch aus.' },
    { question: 'Warum werden RAPs aufgelöst?', answer: 'Bei der Auflösung wird der zuvor abgegrenzte Betrag als Aufwand oder Ertrag in der Periode erfasst, zu der er wirtschaftlich gehört.' },
    { question: 'Gilt Rechnungsabgrenzung auch steuerlich?', answer: 'Für bilanzierende Gewerbetreibende enthält § 5 Abs. 5 EStG entsprechende Regeln. Für geringe Einzelbeträge kann ein gesetzliches Wahlrecht gelten; die Voraussetzungen sollten fachlich geprüft werden.' },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'bilanz',
    'guv',
    'jahresabschluss',
  ],
  sources: [
    { label: '§ 242 HGB – Bilanz und GuV als Jahresabschluss', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
    { label: '§ 246 HGB – Vollständigkeit des Jahresabschlusses', url: 'https://www.gesetze-im-internet.de/hgb/__246.html' },
    { label: '§ 250 HGB – Rechnungsabgrenzungsposten', url: 'https://www.gesetze-im-internet.de/hgb/__250.html' },
    { label: '§ 5 EStG – Steuerliche Rechnungsabgrenzung', url: 'https://www.gesetze-im-internet.de/estg/__5.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default rechnungsabgrenzung;
