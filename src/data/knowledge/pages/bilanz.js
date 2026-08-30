import { defaultDisclaimer } from '../shared.js';

const bilanz = {
  slug: 'bilanz',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Bilanz',
  description: 'Bilanz einfach erklärt: Aktiva und Passiva, Bilanzstichtag, Bilanzgleichgewicht, Bilanzveränderungen sowie der Unterschied zur GuV.',
  seo: {
    title: 'Bilanz einfach erklärt | Belege24',
    description: 'Verstehe Aufbau und Aussage einer Bilanz: Aktiva, Passiva, Vermögen, Kapital, Bilanzsumme und typische Bilanzveränderungen mit Beispielen.',
    canonicalPath: '/wissen/bilanz',
  },
  article: {
    intro: 'Eine Bilanz zeigt, welche Vermögenswerte ein Unternehmen zu einem bestimmten Stichtag besitzt und wie diese finanziert sind. Sie stellt die Aktivseite und die Passivseite gegenüber und ist ein zentraler Bestandteil des Jahresabschlusses.',
    sections: [
      {
        heading: 'Was ist eine Bilanz?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' ist eine geordnete Gegenüberstellung von Vermögen, Eigenkapital und Schulden zu einem bestimmten Tag. Sie beantwortet zwei Fragen: Welche Werte sind im Unternehmen vorhanden – und woher stammt das dafür eingesetzte Kapital?',
          ],
          'Sie ist keine Liste aller Einnahmen und Ausgaben eines Jahres. Stattdessen hält sie Bestände fest: zum Beispiel den Bankbestand, offene Forderungen, Maschinen, Darlehen und offene Lieferantenrechnungen. Nach § 242 HGB stellt ein Kaufmann eine Eröffnungsbilanz zu Beginn des Handelsgewerbes und eine Bilanz zum Schluss jedes Geschäftsjahrs auf.',
        ],
        formulaCards: [
          {
            title: 'Bilanzgleichgewicht',
            formula: 'Aktiva = Passiva',
            description: 'Die Summe des Vermögens entspricht immer der Summe aus Eigenkapital und Schulden. Beide Seiten beschreiben dieselbe wirtschaftliche Lage aus unterschiedlicher Sicht.',
          },
        ],
      },
      {
        heading: 'Stichtagsprinzip und Bilanzstichtag',
        paragraphs: [
          [
            'Eine Bilanz ist eine Aufnahme zum ',
            { type: 'glossary', id: 'bilanzstichtag', text: 'Bilanzstichtag' },
            '. Sie zeigt also nicht den Verlauf des Jahres, sondern die Werte genau an diesem Tag. Bei einem kalenderjahrgleichen Geschäftsjahr ist das häufig der 31. Dezember.',
          ],
          'Ein Geschäftsvorfall vor dem Stichtag kann die Bilanz verändern, ein Vorgang danach gehört grundsätzlich in den nächsten Abschluss. Welche Werte anzusetzen und wie sie zu bewerten sind, richtet sich nach den jeweiligen handels- und steuerrechtlichen Vorgaben. Deshalb ist die Bilanz kein beliebiger Überblick, sondern Teil einer geordneten Rechnungslegung.',
        ],
      },
      {
        heading: 'Aktiva: das Vermögen des Unternehmens',
        paragraphs: [
          [
            'Auf der Aktivseite stehen die ',
            { type: 'glossary', id: 'aktiva', text: 'Aktiva' },
            '. Sie zeigen, wofür das Unternehmen sein Kapital verwendet hat: etwa für Maschinen, Waren, Forderungen, Bankguthaben oder Kassenbestand.',
          ],
          [
            'Zum ',
            { type: 'glossary', id: 'anlagevermoegen', text: 'Anlagevermögen' },
            ' gehören Werte, die dem Betrieb dauerhaft dienen sollen, zum Beispiel Maschinen, Büroausstattung oder ein Fahrzeug. Zum ',
            { type: 'glossary', id: 'umlaufvermoegen', text: 'Umlaufvermögen' },
            ' gehören Werte, die im normalen Geschäftsablauf typischerweise verkauft, verbraucht oder in Geld umgewandelt werden, etwa Vorräte, Bankguthaben und ',
            { type: 'glossary', id: 'forderung', text: 'Forderungen' },
            '. ',
          ],
          'Die gesetzliche Gliederung kann je nach Rechtsform und Größe des Unternehmens detaillierter ausfallen. Für das Grundverständnis ist wichtig: Die Aktivseite beschreibt die Zusammensetzung des Vermögens, nicht seine Finanzierung.',
        ],
      },
      {
        heading: 'Passiva: Eigenkapital und Fremdkapital',
        paragraphs: [
          [
            'Auf der Passivseite stehen die ',
            { type: 'glossary', id: 'passiva', text: 'Passiva' },
            '. Sie zeigen, woher das Kapital stammt. Das ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ' stammt wirtschaftlich von den Eigentümern oder aus im Unternehmen belassenen Gewinnen.',
          ],
          [
            'Das ',
            { type: 'glossary', id: 'fremdkapital', text: 'Fremdkapital' },
            ' umfasst Verpflichtungen gegenüber Dritten, zum Beispiel Bankdarlehen, Lieferantenrechnungen oder andere ',
            { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeiten' },
            '. Eine Verbindlichkeit ist nicht einfach eine Ausgabe: Sie zeigt zunächst, dass eine Zahlung noch geschuldet wird.',
          ],
          'Eigenkapital ist rechnerisch der Teil des Vermögens, der nach Abzug der Schulden verbleibt. Es kann durch Gewinn oder Einlagen steigen und durch Verlust oder Entnahmen sinken.',
        ],
      },
      {
        heading: 'Inventar, Konten und Bilanz',
        paragraphs: [
          'Das Inventar ist ein detailliertes Verzeichnis der einzelnen Vermögensgegenstände und Schulden. Die Inventur liefert dafür die tatsächlichen Bestände. Die Bilanz fasst diese Werte anschließend in einer verdichteten, gegliederten Form zusammen. Nach § 240 HGB sind insbesondere Vermögensgegenstände und Schulden zu erfassen und zu bewerten.',
          [
            'Die laufende ',
            { type: 'glossary', id: 'buchfuehrung', text: 'Buchführung' },
            ' erfasst Geschäftsvorfälle über ',
            { type: 'glossary', id: 'konto', text: 'Konten' },
            '. Aktiv- und Passivkonten sammeln die Veränderungen der Bilanzposten. Zum Abschluss werden ihre Bestände in die Schlussbilanz übernommen; die Eröffnungsbilanz des Folgejahrs knüpft grundsätzlich daran an.',
          ],
        ],
      },
      {
        heading: 'Bilanzsumme und Bilanzgleichgewicht',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bilanzsumme', text: 'Bilanzsumme' },
            ' ist die Summe aller Aktiva und zugleich die Summe aller Passiva. Dass beide Seiten gleich hoch sind, ist kein Zufall: Jeder Vermögenswert ist durch Eigenkapital, Fremdkapital oder eine Kombination daraus finanziert.',
          ],
          'Die Bilanzsumme sagt allein noch nicht, ob ein Unternehmen erfolgreich oder liquide ist. Ein höherer Betrag kann zum Beispiel durch ein zusätzliches Darlehen und den damit gestiegenen Bankbestand entstehen, ohne dass sich der Gewinn verändert.',
        ],
      },
      {
        heading: 'Wie Geschäftsvorfälle die Bilanz verändern',
        paragraphs: [
          'Viele Geschäftsvorfälle verändern die Bilanz, ohne sofort Gewinn oder Verlust auszulösen. Für die Grundlogik werden vier typische Formen unterschieden. Die Beispiele lassen Umsatzsteuer, Nebenkosten und Sonderfälle bewusst außer Betracht.',
        ],
        exampleCards: [
          {
            title: 'Aktivtausch: Maschine wird per Bank bezahlt',
            paragraphs: [
              'Ein Unternehmen kauft eine Maschine für 10.000 Euro und bezahlt sofort vom Bankkonto.',
              'Schritt 1: Das Anlagevermögen steigt um 10.000 Euro, weil eine Maschine hinzukommt.',
              'Schritt 2: Das Bankguthaben im Umlaufvermögen sinkt um 10.000 Euro.',
              'Schritt 3: Die Aktivseite verändert sich nur in ihrer Zusammensetzung. Die Bilanzsumme und die Passivseite bleiben gleich.',
            ],
            effects: [
              'Bilanzveränderung: Aktivtausch.',
              'Wirkung: Vermögen wird umgeschichtet; der Kauf ist zunächst erfolgsneutral.',
            ],
          },
          {
            title: 'Passivtausch: Lieferantenschuld wird durch Darlehen ersetzt',
            paragraphs: [
              'Eine offene Lieferantenrechnung von 5.000 Euro wird durch ein Bankdarlehen abgelöst.',
              'Schritt 1: Die Verbindlichkeit gegenüber dem Lieferanten sinkt um 5.000 Euro.',
              'Schritt 2: Die Darlehensverbindlichkeit gegenüber der Bank steigt um 5.000 Euro.',
              'Schritt 3: Die Passivseite verändert sich nur in ihrer Zusammensetzung. Die Bilanzsumme bleibt gleich.',
            ],
            effects: [
              'Bilanzveränderung: Passivtausch.',
              'Wirkung: Eine Schuld wird durch eine andere Schuld ersetzt; die Zahlungspflicht verschwindet nicht, ihr Gläubiger ändert sich.',
            ],
          },
          {
            title: 'Aktiv-Passiv-Mehrung: Darlehen wird ausgezahlt',
            paragraphs: [
              'Die Bank zahlt ein neues Darlehen von 20.000 Euro auf das Geschäftskonto aus.',
              'Schritt 1: Das Bankguthaben auf der Aktivseite steigt um 20.000 Euro.',
              'Schritt 2: Die Darlehensverbindlichkeit auf der Passivseite steigt ebenfalls um 20.000 Euro.',
              'Schritt 3: Beide Seiten der Bilanz werden um denselben Betrag größer.',
            ],
            effects: [
              'Bilanzveränderung: Aktiv-Passiv-Mehrung.',
              'Wirkung: Die Bilanzsumme steigt um 20.000 Euro; die Auszahlung ist noch kein Ertrag.',
            ],
          },
          {
            title: 'Aktiv-Passiv-Minderung: Lieferantenrechnung wird bezahlt',
            paragraphs: [
              'Das Unternehmen überweist 2.000 Euro zur Begleichung einer offenen Lieferantenrechnung.',
              'Schritt 1: Das Bankguthaben auf der Aktivseite sinkt um 2.000 Euro.',
              'Schritt 2: Die Verbindlichkeit auf der Passivseite sinkt ebenfalls um 2.000 Euro.',
              'Schritt 3: Beide Seiten der Bilanz werden um denselben Betrag kleiner.',
            ],
            effects: [
              'Bilanzveränderung: Aktiv-Passiv-Minderung.',
              'Wirkung: Die Zahlung selbst ist erfolgsneutral, wenn der Aufwand bereits mit dem ursprünglichen Einkauf erfasst wurde.',
            ],
          },
        ],
      },
      {
        heading: 'Bilanz und GuV: Was ist der Unterschied?',
        paragraphs: [
          [
            'Die Bilanz zeigt Bestände zu einem Stichtag. Die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' zeigt dagegen ',
            { type: 'glossary', id: 'aufwand', text: 'Aufwendungen' },
            ' und ',
            { type: 'glossary', id: 'ertrag', text: 'Erträge' },
            ' eines Zeitraums und damit Gewinn oder Verlust. Beide gehören bei bilanzierenden Kaufleuten grundsätzlich zum Jahresabschluss.',
          ],
          'Ein Verkauf auf Rechnung kann zum Beispiel gleichzeitig eine Forderung in der Bilanz und einen Ertrag in der GuV auslösen. Die spätere Zahlung tauscht dann die Forderung gegen Bankguthaben; sie verändert den Ertrag aus dem Verkauf nicht erneut.',
        ],
      },
      {
        heading: 'Wer muss grundsätzlich bilanzieren?',
        paragraphs: [
          'Kaufleute sind nach § 238 HGB grundsätzlich buchführungspflichtig. Nach § 242 HGB umfasst der Jahresabschluss grundsätzlich Bilanz und GuV. Für bestimmte Einzelkaufleute kann bei Einhaltung der gesetzlichen Grenzen eine handelsrechtliche Befreiung nach § 241a HGB greifen.',
          'Eine steuerliche Buchführungspflicht kann zudem nach § 141 AO entstehen. Sie betrifft gewerbliche Unternehmer sowie Land- und Forstwirte, wenn die Finanzbehörde für den einzelnen Betrieb mehr als 800.000 Euro Gesamtumsatz oder mehr als 80.000 Euro Gewinn feststellt. Die Pflicht beginnt grundsätzlich mit dem Wirtschaftsjahr nach der entsprechenden Mitteilung des Finanzamts.',
          'Ob eine Bilanzierungspflicht besteht, hängt unter anderem von Rechtsform, Tätigkeit, Umsatz, Gewinn und konkreten Umständen ab. Diese Seite gibt Orientierung und ersetzt keine rechtliche oder steuerliche Prüfung des Einzelfalls.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Verwechsle die Aktivseite nicht mit „gut“ und die Passivseite nicht mit „schlecht“. Beide Seiten sind notwendig und müssen immer gleich hoch sein.',
          'Setze Bilanzsumme, Gewinn und Kontostand nicht gleich. Die Bilanzsumme enthält viele Positionen; ein hoher Bankbestand kann zum Beispiel durch ein Darlehen entstanden sein.',
          'Eine Bilanz ersetzt weder die Inventur noch die laufende Buchführung. Sie fasst deren Ergebnisse zu einem Stichtag zusammen.',
          'Nicht jede Zahlung verändert den Gewinn. Die Bezahlung einer bereits gebuchten Lieferantenrechnung senkt Bank und Verbindlichkeit, ist aber nicht automatisch ein neuer Aufwand.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'die Bilanz zeigt Vermögen, Eigenkapital und Schulden zu einem Stichtag',
    'Aktiva beschreiben die Verwendung des Kapitals, Passiva seine Herkunft',
    'Anlagevermögen dient dauerhaft; Umlaufvermögen verändert sich im normalen Geschäftsablauf',
    'Aktiva und Passiva sind immer gleich hoch; ihre Summe ist die Bilanzsumme',
    'Bilanzveränderungen können erfolgsneutral sein und dennoch Bestände verändern',
    'Bilanz und GuV bilden bei bilanzierenden Kaufleuten grundsätzlich den Jahresabschluss',
  ],
  commonMistakes: [
    'Aktivseite und Passivseite mit gut und schlecht verwechseln',
    'Bilanzsumme, Gewinn und Kontostand gleichsetzen',
    'jede Bankzahlung automatisch als Aufwand behandeln',
    'Forderungen und Verbindlichkeiten bei der Bilanz übersehen',
    'Inventar mit Bilanz verwechseln',
    'eine Bilanzierungspflicht nur nach Umsatz beurteilen',
  ],
  faqs: [
    {
      question: 'Was zeigt eine Bilanz?',
      answer: 'Eine Bilanz zeigt Vermögen, Eigenkapital und Schulden eines Unternehmens zu einem bestimmten Stichtag.',
    },
    {
      question: 'Warum sind Aktiva und Passiva gleich hoch?',
      answer: 'Jeder Vermögenswert ist durch Eigenkapital, Schulden oder beides finanziert. Daher stimmen die Summen auf beiden Seiten immer überein.',
    },
    {
      question: 'Was ist der Unterschied zwischen Bilanz und GuV?',
      answer: 'Die Bilanz zeigt Bestände zu einem Stichtag. Die GuV zeigt Aufwendungen und Erträge eines Zeitraums und damit Gewinn oder Verlust.',
    },
    {
      question: 'Was ist die Bilanzsumme?',
      answer: 'Die Bilanzsumme ist die Summe aller Aktiva und zugleich aller Passiva. Sie ist nicht mit Gewinn, Umsatz oder Kontostand gleichzusetzen.',
    },
    {
      question: 'Was bedeutet Aktivtausch?',
      answer: 'Beim Aktivtausch verändert sich nur die Zusammensetzung des Vermögens, zum Beispiel wenn eine Maschine per Banküberweisung gekauft wird.',
    },
    {
      question: 'Muss jedes Unternehmen bilanzieren?',
      answer: 'Nein. Die Pflicht hängt unter anderem von Rechtsform, Tätigkeit und gesetzlichen Voraussetzungen ab. Bestimmte Einzelkaufleute können handelsrechtlich befreit sein; auch eine steuerliche Buchführungspflicht kann entstehen.',
    },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'konten',
    'geschaeftsvorfaelle',
    'euer',
  ],
  sources: [
    { label: '§ 238 HGB – Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/hgb/__238.html' },
    { label: '§ 240 HGB – Inventar', url: 'https://www.gesetze-im-internet.de/hgb/__240.html' },
    { label: '§ 242 HGB – Pflicht zur Aufstellung von Bilanz und GuV', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
    { label: '§ 241a HGB – Befreiung für Einzelkaufleute', url: 'https://www.gesetze-im-internet.de/hgb/__241a.html' },
    { label: '§ 246 HGB – Vollständigkeit und Verrechnungsverbot', url: 'https://www.gesetze-im-internet.de/hgb/__246.html' },
    { label: '§ 266 HGB – Gliederung der Bilanz', url: 'https://www.gesetze-im-internet.de/hgb/__266.html' },
    { label: '§ 5 EStG – Gewinn bei Kaufleuten und bestimmten Gewerbetreibenden', url: 'https://www.gesetze-im-internet.de/estg/__5.html' },
    { label: '§ 141 AO – Steuerliche Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/ao_1977/__141.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bilanz;
