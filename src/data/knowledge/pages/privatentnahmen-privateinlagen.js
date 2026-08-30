import { defaultDisclaimer } from '../shared.js';

const privatentnahmenPrivateinlagen = {
  slug: 'privatentnahmen-privateinlagen',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Privatentnahmen und Privateinlagen',
  description: 'Privatentnahmen und Privateinlagen einfach erklärt: Geld, Waren, Privatkonto, Eigenkapital sowie die Abgrenzung zu Gehalt und Gewinnausschüttung.',
  seo: {
    title: 'Privatentnahmen und Privateinlagen erklärt | Belege24',
    description: 'Verstehe Geld- und Sachentnahmen, Einlagen, Privatkonto und Eigenkapital – mit klarer Abgrenzung zu Aufwand, Ertrag, Gehalt und Gewinnausschüttung.',
    canonicalPath: '/wissen/privatentnahmen-privateinlagen',
  },
  article: {
    intro: 'Privatentnahmen und Privateinlagen trennen private und betriebliche Werte bei Einzelunternehmen und Personengesellschaften. Sie verändern das Eigenkapital, sind aber grundsätzlich weder betrieblicher Aufwand noch betrieblicher Ertrag.',
    sections: [
      {
        heading: 'Was ist eine Privatentnahme?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'privatentnahme', text: 'Privatentnahme' },
            ' liegt vor, wenn der Unternehmer Geld, Waren oder andere Werte aus dem Betrieb für private Zwecke verwendet. Das kann eine Überweisung vom Geschäftskonto, die Mitnahme von Waren für den eigenen Haushalt oder die private Nutzung eines betrieblichen Gegenstands sein.',
          ],
          'Privatentnahmen sind typischerweise bei Einzelunternehmen und Personengesellschaften wie der GbR relevant. Dort sind Unternehmen und Inhaber oder Gesellschafter steuerlich nicht so voneinander getrennt wie bei einer Kapitalgesellschaft.',
          'Eine Entnahme ist keine betriebliche Ausgabe. Sie mindert daher den Gewinn grundsätzlich nicht, sondern verringert den Kapitalanteil des entnehmenden Unternehmers oder Gesellschafters.',
        ],
      },
      {
        heading: 'Was ist eine Privateinlage?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'privateinlage', text: 'Privateinlage' },
            ' liegt vor, wenn privates Geld oder ein privates Wirtschaftsgut dem Betrieb zugeführt wird. Das kann helfen, betriebliche Rechnungen zu bezahlen, Anschaffungen zu finanzieren oder einen vorübergehenden Liquiditätsbedarf zu decken.',
          ],
          'Eine Einlage ist keine betriebliche Einnahme. Sie erhöht deshalb nicht unmittelbar den Gewinn, sondern den Kapitalanteil des Unternehmers oder Gesellschafters.',
          'Bei einer Sacheinlage – zum Beispiel wenn ein privat gehaltenes Gerät künftig betrieblich genutzt wird – sind die steuerlichen und buchhalterischen Bewertungsregeln zu beachten. Der Wert ist nicht frei wählbar.',
        ],
        formulaCards: [
          {
            title: 'Wirkung auf das Eigenkapital',
            formula: 'Privatentnahme → Eigenkapital sinkt\nPrivateinlage → Eigenkapital steigt',
            description: 'Beide Vorgänge verändern grundsätzlich das Kapital, nicht den laufenden betrieblichen Erfolg.',
          },
        ],
      },
      {
        heading: 'Geldentnahmen und Geldeinlagen',
        paragraphs: [
          'Bei einer Geldentnahme wird betriebliches Bargeld oder Bankguthaben privat verwendet. Das Geld ist dann nicht mehr im Betrieb verfügbar; der Gewinn bleibt durch die Entnahme selbst grundsätzlich unverändert.',
          'Bei einer Geldeinlage fließt privates Geld in den Betrieb. Das stärkt die verfügbare Liquidität, ist aber keine Vergütung für eine betriebliche Leistung und deshalb grundsätzlich kein Ertrag.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Geld vom Geschäftskonto entnehmen',
            paragraphs: [
              'Die Inhaberin eines Einzelunternehmens überweist 1.000 Euro vom Geschäftskonto auf ihr Privatkonto.',
              'Schritt 1: Das Bankguthaben des Unternehmens sinkt um 1.000 Euro.',
              'Schritt 2: Der Betrag wird als Privatentnahme auf dem Privatkonto erfasst.',
              'Schritt 3: Die Entnahme wird zum Abschluss dem Eigenkapital zugeordnet. Sie ist keine Betriebsausgabe und mindert den Gewinn nicht.',
            ],
            effects: [
              'Liquidität: Bankguthaben im Betrieb sinkt um 1.000 Euro.',
              'Eigenkapital: sinkt um 1.000 Euro.',
              'GuV: keine unmittelbare Aufwandswirkung.',
            ],
          },
          {
            title: 'Beispiel: Privates Geld in den Betrieb einzahlen',
            paragraphs: [
              'Ein Einzelunternehmer überweist 2.500 Euro aus seinem Privatvermögen auf das Geschäftskonto, damit eine betriebliche Rechnung bezahlt werden kann.',
              'Schritt 1: Das Bankguthaben des Betriebs steigt um 2.500 Euro.',
              'Schritt 2: Der Betrag wird als Privateinlage auf dem Privatkonto erfasst.',
              'Schritt 3: Beim Abschluss wird die Einlage dem Eigenkapital zugeordnet. Sie ist keine Betriebseinnahme und erhöht den Gewinn nicht.',
            ],
            effects: [
              'Liquidität: Bankguthaben im Betrieb steigt um 2.500 Euro.',
              'Eigenkapital: steigt um 2.500 Euro.',
              'GuV: keine unmittelbare Ertragswirkung.',
            ],
          },
        ],
      },
      {
        heading: 'Sachentnahmen und Nutzungsentnahmen',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'sachentnahme', text: 'Sachentnahme' },
            ' liegt vor, wenn ein betriebliches Wirtschaftsgut privat verwendet oder in den Privatbereich überführt wird. Dazu können Waren, selbst hergestellte Erzeugnisse oder andere betriebliche Gegenstände gehören.',
          ],
          'Eine Nutzungsentnahme betrifft die private Nutzung eines weiterhin zum Betrieb gehörenden Gegenstands oder einer Leistung, etwa die private Nutzung eines betrieblichen Fahrzeugs. Sie wird nur grundsätzlich erwähnt, weil die steuerliche Behandlung stark vom Gegenstand und der Nutzungsform abhängt.',
          'Für die Einkommensteuer sind Entnahmen zu bewerten; für Sachentnahmen enthält § 6 EStG dafür Regelungen. Umsatzsteuer kann bei der Entnahme eines Gegenstands hinzukommen, wenn dieser oder seine Bestandteile zum vollen oder teilweisen Vorsteuerabzug berechtigt haben. Die genaue Behandlung hängt vom Einzelfall ab.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Ware wird privat entnommen',
            paragraphs: [
              'Ein Händler nimmt Ware aus seinem Lager für den privaten Haushalt mit.',
              'Schritt 1: Die Ware verlässt das betriebliche Vorratsvermögen und wird als Sachentnahme erfasst.',
              'Schritt 2: Die Entnahme mindert das Eigenkapital, ist aber keine Betriebsausgabe.',
              'Schritt 3: Für die steuerliche Bewertung und eine mögliche Umsatzsteuer ist entscheidend, um welche Ware es geht und ob beim Erwerb Vorsteuer abziehbar war.',
            ],
            effects: [
              'Bestand: Das betriebliche Vorratsvermögen sinkt.',
              'Eigenkapital: sinkt um den maßgeblichen Entnahmewert.',
              'Steuern: Bewertung und Umsatzsteuer sind gesondert zu prüfen.',
            ],
          },
        ],
      },
      {
        heading: 'Privatkonto und Eigenkapital',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'privatkonto', text: 'Privatkonto' },
            ' sammelt private Entnahmen und Einlagen während des Jahres getrennt von betrieblichen Konten. Dadurch bleibt sichtbar, welche Buchungen das Unternehmen betreffen und welche zum privaten Bereich des Inhabers oder eines Gesellschafters gehören.',
          ],
          [
            'Zum Jahresabschluss wird der Saldo des Privatkontos in das ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ' oder bei Personengesellschaften in das jeweilige Kapitalkonto überführt. Mehr Entnahmen als Einlagen mindern den Kapitalanteil; mehr Einlagen als Entnahmen erhöhen ihn.',
          ],
          'Die genaue Kontierung richtet sich nach dem verwendeten Kontenrahmen und bei mehreren Gesellschaftern nach der gesellschaftsvertraglichen und buchhalterischen Struktur.',
        ],
      },
      {
        heading: 'Abgrenzung zu Gehalt, Gewinnausschüttung und Gesellschafterzahlungen',
        paragraphs: [
          'Ein Einzelunternehmer erhält kein Gehalt von sich selbst. Geld für den privaten Lebensunterhalt ist bei ihm regelmäßig eine Privatentnahme. Gehälter an Beschäftigte sind dagegen betriebliche Personalaufwendungen; bei Gesellschaftern können sie je nach Rechtsform und Vereinbarung anders einzuordnen sein.',
          'Eine Gewinnausschüttung betrifft regelmäßig Anteilseigner einer Kapitalgesellschaft, etwa einer GmbH oder AG. Sie folgt eigenen gesellschafts- und steuerrechtlichen Regeln und ist keine Privatentnahme.',
          'Bei Kapitalgesellschaften gibt es keine Privatkonten wie beim Einzelunternehmen. Zahlungen zwischen Gesellschaft und Gesellschafter müssen nach ihrem Rechtsgrund getrennt erfasst werden, zum Beispiel als Vergütung, Darlehen, Auslagenersatz oder Gewinnausschüttung. Unklare Privatveranlassung sollte dort nicht über ein Privatkonto gebucht werden.',
        ],
      },
      {
        heading: 'Zusammenhang mit Bilanz und Gewinnermittlung',
        paragraphs: [
          [
            'In der ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' wirken sich Entnahmen und Einlagen auf Eigenkapital und die betroffenen Vermögenswerte aus. Sie sind von Geschäftsvorfällen zu unterscheiden, die über ',
            { type: 'glossary', id: 'erfolgskonto', text: 'Erfolgskonten' },
            ' Gewinn oder Verlust verändern.',
          ],
          'Auch bei der Einnahmenüberschussrechnung bleiben private Vorgänge grundsätzlich außerhalb der Betriebseinnahmen und Betriebsausgaben. Sie können jedoch für Aufzeichnungen, Entnahmewerte und bei Überentnahmen steuerlich bedeutsam sein.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Private Überweisungen sollten nicht als betriebliche Kosten gebucht werden. Sonst wird der Gewinn falsch dargestellt und die Trennung von Betrieb und Privatbereich geht verloren.',
          'Umgekehrt ist privates Geld auf dem Geschäftskonto nicht automatisch Umsatz oder Ertrag. Es muss als Einlage oder – bei einer Kapitalgesellschaft – nach dem tatsächlichen Rechtsgrund erfasst werden.',
          'Bei Waren und anderen Sachentnahmen reichen pauschale Annahmen oft nicht aus. Die Bewertung, Umsatzsteuer und Dokumentation können besondere Anforderungen auslösen. Bei Unsicherheit ist fachliche Beratung sinnvoll.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Privatentnahmen und Privateinlagen sind vor allem bei Einzelunternehmen und Personengesellschaften relevant.',
    'Eine Privatentnahme mindert grundsätzlich das Eigenkapital, ist aber keine Betriebsausgabe.',
    'Eine Privateinlage erhöht grundsätzlich das Eigenkapital, ist aber keine Betriebseinnahme.',
    'Ein Privatkonto hält private Bewegungen getrennt von betrieblichen Geschäftsvorfällen fest.',
    'Sach- und Nutzungsentnahmen können besondere einkommen- und umsatzsteuerliche Folgen haben.',
    'Kapitalgesellschaften führen keine Privatkonten wie Einzelunternehmen; Gesellschafterzahlungen brauchen einen klaren Rechtsgrund.',
  ],
  commonMistakes: [
    'private Überweisungen als Betriebsausgabe buchen',
    'private Einzahlungen auf dem Geschäftskonto als Betriebseinnahme erfassen',
    'Privatentnahme mit Gehalt oder Gewinnausschüttung verwechseln',
    'bei einer GmbH oder UG ein Privatkonto für Gesellschafterzahlungen verwenden',
    'Sachentnahmen ohne Bewertung oder Dokumentation behandeln',
    'eine Bestandsminderung durch private Warenentnahme als betrieblichen Aufwand verstehen',
  ],
  faqs: [
    { question: 'Was ist eine Privatentnahme?', answer: 'Eine Privatentnahme ist die Verwendung von Geld, Waren oder anderen betrieblichen Werten für private Zwecke durch einen Unternehmer oder Gesellschafter.' },
    { question: 'Was ist eine Privateinlage?', answer: 'Eine Privateinlage ist die Zuführung von privatem Geld oder privaten Wirtschaftsgütern in den Betrieb.' },
    { question: 'Mindert eine Privatentnahme den Gewinn?', answer: 'Grundsätzlich nein. Sie mindert das Eigenkapital, ist aber keine Betriebsausgabe.' },
    { question: 'Erhöht eine Privateinlage den Gewinn?', answer: 'Grundsätzlich nein. Sie erhöht das Eigenkapital, ist aber keine Betriebseinnahme.' },
    { question: 'Gibt es Privatkonten bei einer GmbH?', answer: 'Nein, nicht wie beim Einzelunternehmen. Zahlungen zwischen GmbH und Gesellschafter müssen nach ihrem tatsächlichen Rechtsgrund getrennt erfasst werden.' },
    { question: 'Kann eine Warenentnahme Umsatzsteuer auslösen?', answer: 'Das kann der Fall sein, wenn die gesetzlichen Voraussetzungen erfüllt sind, insbesondere wenn der Gegenstand oder seine Bestandteile zum Vorsteuerabzug berechtigt haben.' },
  ],
  related: [
    'bilanz',
    'konten',
    'einzelunternehmen',
    'gbr',
  ],
  sources: [
    { label: '§ 4 EStG – Gewinnbegriff, Entnahmen und Einlagen', url: 'https://www.gesetze-im-internet.de/estg/__4.html' },
    { label: '§ 6 EStG – Bewertung von Entnahmen und Einlagen', url: 'https://www.gesetze-im-internet.de/estg/__6.html' },
    { label: '§ 3 UStG – Entnahme von Gegenständen und unentgeltliche Wertabgaben', url: 'https://www.gesetze-im-internet.de/ustg_1980/__3.html' },
    { label: '§ 242 HGB – Bilanz und Jahresabschluss', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default privatentnahmenPrivateinlagen;
