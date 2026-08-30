import { defaultDisclaimer } from '../shared.js';

const inventurInventar = {
  slug: 'inventur-inventar',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Inventur und Inventar',
  description: 'Inventur und Inventar einfach erklärt: Bestandsaufnahme, Inventurverfahren, Reinvermögen sowie der Zusammenhang zur Bilanz.',
  seo: {
    title: 'Inventur und Inventar erklärt | Belege24',
    description: 'Verstehe den Unterschied zwischen Inventur und Inventar, die wichtigsten Inventurverfahren und den Zusammenhang mit Bilanz und Reinvermögen.',
    canonicalPath: '/wissen/inventur-inventar',
  },
  article: {
    intro: 'Die Inventur erfasst, welche Vermögensgegenstände und Schulden ein Unternehmen tatsächlich hat. Das daraus entstehende Inventar führt diese Bestände detailliert auf und bildet eine wichtige Grundlage für die Bilanz.',
    sections: [
      {
        heading: 'Was ist eine Inventur – und was ist ein Inventar?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'inventur', text: 'Inventur' },
            ' ist der Vorgang der Bestandsaufnahme. Dabei wird festgestellt, welche Vermögensgegenstände und Schulden vorhanden sind und welchen Wert sie haben. Je nach Art der Position wird gezählt, gemessen, gewogen oder anhand von Unterlagen geprüft.',
          ],
          [
            'Das ',
            { type: 'glossary', id: 'inventar', text: 'Inventar' },
            ' ist das Ergebnis dieser Arbeit: ein geordnetes und detailliertes Verzeichnis der Bestände. Kurz gesagt: Die Inventur ist die Tätigkeit, das Inventar ist die Liste.',
          ],
          'Nach § 240 HGB müssen Kaufleute zu Beginn des Handelsgewerbes und zum Schluss jedes Geschäftsjahrs Vermögensgegenstände und Schulden genau verzeichnen und bewerten. Ob diese Pflicht im Einzelfall besteht, hängt unter anderem von Rechtsform, Tätigkeit und möglichen gesetzlichen Befreiungen ab.',
        ],
        formulaCards: [
          {
            title: 'Reinvermögen aus dem Inventar',
            formula: 'Reinvermögen = Vermögen − Schulden',
            description: 'Das Reinvermögen entspricht wirtschaftlich dem Eigenkapital. Es ist nicht mit Kassenbestand oder Bankguthaben gleichzusetzen.',
          },
        ],
      },
      {
        heading: 'Welche Bestände werden aufgenommen?',
        paragraphs: [
          'Die Inventur umfasst Vermögen und Schulden. Zum Vermögen können beispielsweise Waren, Maschinen, Büroausstattung, Bankguthaben und Forderungen gehören. Zu den Schulden zählen etwa Darlehen und offene Lieferantenrechnungen.',
          'Für körperlich vorhandene Gegenstände wie Waren oder Maschinen wird häufig eine körperliche Bestandsaufnahme durchgeführt. Nicht körperlich zählbare Werte wie Bankguthaben, Forderungen und Verbindlichkeiten werden anhand von Kontoauszügen, Verträgen, Rechnungen und anderen Unterlagen ermittelt.',
          'Entscheidend sind nicht nur Mengen. Das Inventar muss die einzelnen Bestände auch mit ihrem Wert ausweisen. Welche Bewertungsregeln gelten, richtet sich nach den jeweiligen handels- und steuerrechtlichen Vorschriften.',
        ],
      },
      {
        heading: 'Körperliche Inventur und Buchinventur',
        paragraphs: [
          'Bei der körperlichen Inventur werden vorhandene Gegenstände tatsächlich gezählt, gemessen oder gewogen. Sie ist zum Beispiel für Waren im Lager, Rohstoffe und Betriebs- oder Geschäftsausstattung relevant.',
          [
            'Die ',
            { type: 'glossary', id: 'buchinventur', text: 'Buchinventur' },
            ' stützt sich auf Bücher, Belege und sonstige Aufzeichnungen. Sie wird vor allem für Positionen genutzt, die nicht körperlich gezählt werden können, zum Beispiel Bankguthaben, ',
            { type: 'glossary', id: 'forderung', text: 'Forderungen' },
            ', Darlehen oder ',
            { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeiten' },
            '. ',
          ],
          'In einem vollständigen Inventar treffen beide Wege zusammen: Körperliche Bestände werden aufgenommen, buchmäßig nachweisbare Positionen werden aus zuverlässigen Unterlagen ergänzt.',
        ],
      },
      {
        heading: 'Inventurverfahren im Überblick',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'stichtagsinventur', text: 'Stichtagsinventur' },
            ' nimmt die Bestände genau zum Bilanzstichtag auf. Sie ist der grundlegende Ausgangspunkt für die Bestandsaufnahme zum Jahresende.',
          ],
          'Eine zeitnahe Inventur findet nicht genau am Bilanzstichtag statt, sondern in engem zeitlichem Zusammenhang. Nach der steuerlichen Verwaltungsauffassung sind regelmäßig zehn Tage vor oder nach dem Bilanzstichtag vorgesehen; Bestandsveränderungen bis zum Stichtag müssen anhand von Belegen oder Aufzeichnungen nachvollziehbar berücksichtigt werden.',
          'Bei der verlegten Inventur darf die Bestandsaufnahme nach § 241 Abs. 3 HGB innerhalb der letzten drei Monate vor oder der ersten beiden Monate nach dem Bilanzstichtag erfolgen. Der Bestand zum Bilanzstichtag muss dann durch Fortschreibung oder Rückrechnung ordnungsgemäß ermittelt und bewertet werden.',
          [
            'Bei der ',
            { type: 'glossary', id: 'permanente-inventur', text: 'permanenten Inventur' },
            ' werden Bestände und Bestandsbewegungen fortlaufend erfasst. Sie kann eine körperliche Aufnahme genau am Bilanzstichtag ersetzen, wenn ein ordnungsmäßiges Verfahren sicherstellt, dass Art, Menge und Wert der Bestände zu diesem Zeitpunkt festgestellt werden können. Eine körperliche Kontrolle der fortlaufend geführten Bestände bleibt erforderlich.',
          ],
          'Die Stichprobeninventur verwendet anerkannte mathematisch-statistische Verfahren. Sie ist nur zulässig, wenn sie den Grundsätzen ordnungsmäßiger Buchführung entspricht und ihr Aussagewert dem einer körperlichen Bestandsaufnahme gleichkommt. Welche Methode für einen Betrieb zulässig und geeignet ist, muss fachlich geprüft werden.',
        ],
      },
      {
        heading: 'Aufbau eines Inventars',
        paragraphs: [
          'Ein Inventar ordnet die Bestände üblicherweise nach Vermögen und Schulden. Auf der Vermögensseite können Anlage- und Umlaufvermögen getrennt aufgeführt werden; anschließend folgen die Schulden. Aus der Differenz ergibt sich das Reinvermögen.',
          [
            'Das ',
            { type: 'glossary', id: 'reinvermoegen', text: 'Reinvermögen' },
            ' ist wirtschaftlich das ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            '. Das Inventar zeigt diese Rechnung detailliert. Die Bilanz fasst die Einzelwerte anschließend in gesetzlich gegliederter Form zusammen.',
          ],
        ],
        exampleCards: [
          {
            title: 'Vereinfachtes Inventar zum Jahresende',
            paragraphs: [
              'Ein Unternehmen stellt zum Bilanzstichtag folgende Werte fest: Bankguthaben 15.000 Euro, Forderungen 6.000 Euro, Warenbestand 8.000 Euro und Maschine 12.000 Euro.',
              'Schritt 1: Das Vermögen beträgt insgesamt 41.000 Euro.',
              'Schritt 2: Dem stehen ein Bankdarlehen von 10.000 Euro und offene Lieferantenrechnungen von 7.000 Euro gegenüber. Die Schulden betragen insgesamt 17.000 Euro.',
              'Schritt 3: Das Reinvermögen beträgt 41.000 Euro minus 17.000 Euro, also 24.000 Euro.',
            ],
            effects: [
              'Inventar: zeigt die einzelnen Vermögenswerte und Schulden detailliert.',
              'Bilanzbezug: Vermögen 41.000 Euro; auf der Passivseite stehen Schulden von 17.000 Euro und Eigenkapital von 24.000 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Vom Inventar zur Bilanz',
        paragraphs: [
          [
            'Das Inventar ist ausführlicher als die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            '. Es nennt einzelne Vermögensgegenstände und Schulden nach Art, Menge und Wert. Die Bilanz fasst diese Werte zu Posten auf der Aktiv- und Passivseite zusammen.',
          ],
          'Die laufende Buchführung und ihre Konten dokumentieren Geschäftsvorfälle während des Jahres. Die Inventur prüft und ergänzt die tatsächlichen Bestände für den Abschluss. Dadurch sind Inventar, Konten, Bilanz und GuV miteinander verbunden, erfüllen aber unterschiedliche Aufgaben.',
        ],
      },
      {
        heading: 'Wann ist eine Inventur grundsätzlich erforderlich?',
        paragraphs: [
          'Für Kaufleute ist die Inventur als Grundlage des Inventars grundsätzlich zu Beginn des Handelsgewerbes und zum Schluss eines jeden Geschäftsjahrs relevant. § 240 HGB verlangt das genaue Verzeichnen und Bewerten der dort genannten Vermögensgegenstände und Schulden.',
          'Auch eine steuerliche Buchführungspflicht kann jährliche Bestandsaufnahmen auslösen. § 141 AO verweist für bestimmte gewerbliche Unternehmer sowie Land- und Forstwirte auf die entsprechenden Vorschriften des HGB. Für bestimmte Einzelkaufleute können handelsrechtliche Erleichterungen gelten.',
          'Die konkrete Pflicht, der passende Zeitpunkt und das zulässige Verfahren hängen vom Betrieb und der Art der Bestände ab. Diese Seite bietet deshalb nur allgemeine Orientierung und keine individuellen Bilanzierungsanweisungen.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle Inventur und Inventar nicht: Die Inventur ist die Bestandsaufnahme, das Inventar deren Ergebnis.',
          'Zähle nicht nur Waren. Ein vollständiges Inventar berücksichtigt auch nicht körperliche Werte und Schulden, soweit sie zum Unternehmen gehören.',
          'Nutze ein verlegtes, permanentes oder statistisches Verfahren nicht ohne die erforderlichen Aufzeichnungen und Voraussetzungen. Vereinfachungen müssen die Bestände zum Bilanzstichtag weiterhin zuverlässig abbilden.',
          'Verwechsle das Reinvermögen nicht mit verfügbarem Geld. Es ergibt sich aus allen Vermögenswerten abzüglich aller Schulden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'die Inventur ist die Bestandsaufnahme; das Inventar ist das daraus entstehende Verzeichnis',
    'Inventur und Inventar erfassen Vermögen und Schulden nach Art, Menge und Wert',
    'körperliche Inventur und Buchinventur ergänzen sich bei unterschiedlichen Bestandsarten',
    'Stichtags-, zeitnahe, verlegte, permanente und Stichprobeninventur haben unterschiedliche Voraussetzungen',
    'Reinvermögen ergibt sich aus Vermögen minus Schulden',
    'das Inventar ist detaillierter als die Bilanz und liefert eine Grundlage für sie',
  ],
  commonMistakes: [
    'Inventur und Inventar gleichsetzen',
    'nur körperliche Bestände statt auch Forderungen, Bankguthaben und Schulden erfassen',
    'Bestandsveränderungen bei einer zeitnahen oder verlegten Inventur nicht nachvollziehbar fortschreiben oder zurückrechnen',
    'permanente Inventur ohne verlässliche laufende Aufzeichnungen anwenden',
    'Reinvermögen mit Kassenbestand oder Bankguthaben verwechseln',
    'Inventar und Bilanz als identische Listen behandeln',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Inventur und Inventar?',
      answer: 'Die Inventur ist die Bestandsaufnahme. Das Inventar ist das detaillierte Verzeichnis, das daraus entsteht.',
    },
    {
      question: 'Was wird bei einer Inventur erfasst?',
      answer: 'Erfasst werden Vermögensgegenstände und Schulden nach Art, Menge und Wert. Dazu gehören je nach Betrieb zum Beispiel Waren, Maschinen, Bankguthaben, Forderungen, Darlehen und Verbindlichkeiten.',
    },
    {
      question: 'Was ist eine Buchinventur?',
      answer: 'Bei der Buchinventur werden nicht körperlich zählbare Bestände anhand von Büchern, Belegen und anderen Unterlagen ermittelt, etwa Forderungen, Bankguthaben oder Verbindlichkeiten.',
    },
    {
      question: 'Was ist eine permanente Inventur?',
      answer: 'Die permanente Inventur führt Bestände und Bestandsbewegungen laufend. Sie kann die Aufnahme genau am Bilanzstichtag ersetzen, wenn die Voraussetzungen für eine zuverlässige Bestandsfeststellung erfüllt sind.',
    },
    {
      question: 'Was ist eine verlegte Inventur?',
      answer: 'Bei der verlegten Inventur wird die Bestandsaufnahme innerhalb der gesetzlich vorgesehenen Zeit vor oder nach dem Bilanzstichtag durchgeführt. Der Bestand zum Stichtag muss dann ordnungsgemäß fortgeschrieben oder zurückgerechnet werden.',
    },
    {
      question: 'Was ist der Unterschied zwischen Inventar und Bilanz?',
      answer: 'Das Inventar zeigt die einzelnen Werte detailliert nach Art, Menge und Wert. Die Bilanz fasst diese Werte zu gegliederten Posten zusammen.',
    },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'bilanz',
    'konten',
    'guv',
  ],
  sources: [
    { label: '§ 240 HGB – Inventar', url: 'https://www.gesetze-im-internet.de/hgb/__240.html' },
    { label: '§ 241 HGB – Inventurvereinfachungsverfahren', url: 'https://www.gesetze-im-internet.de/hgb/__241.html' },
    { label: '§ 242 HGB – Bilanz und Jahresabschluss', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
    { label: '§ 140 AO – Buchführungs- und Aufzeichnungspflichten', url: 'https://www.gesetze-im-internet.de/ao_1977/__140.html' },
    { label: '§ 141 AO – Steuerliche Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/ao_1977/__141.html' },
    { label: 'BMF, EStH 2025 – Inventur und zeitnahe Inventur', url: 'https://amtliche-handbuecher.bundesfinanzministerium.de/esth/2025/A-Einkommensteuergesetz/II-Einkommen-2-24b/3-Gewinn-4-7i/Paragraf-5/r-5-3.html?nn=464286' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default inventurInventar;
