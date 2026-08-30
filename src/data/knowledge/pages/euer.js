import { defaultDisclaimer } from '../shared.js';

const euer = {
  slug: 'euer',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Einnahmenüberschussrechnung (EÜR)',
  description: 'Einnahmenüberschussrechnung einfach erklärt: Voraussetzungen, Zufluss- und Abflussprinzip, Betriebseinnahmen, Betriebsausgaben und Abgrenzung zur Bilanz.',
  seo: {
    title: 'Einnahmenüberschussrechnung (EÜR) erklärt | Belege24',
    description: 'Erfahre, wie die EÜR funktioniert, wer sie nutzen kann und wie Einnahmen, Ausgaben, Abschreibungen, Umsatzsteuer und private Vorgänge erfasst werden.',
    canonicalPath: '/wissen/euer',
  },
  article: {
    intro: 'Die Einnahmenüberschussrechnung, kurz EÜR, ist eine steuerliche Methode zur Gewinnermittlung. Sie stellt betriebliche Einnahmen und Ausgaben gegenüber. Entscheidend ist dabei meist, wann Geld tatsächlich zufließt oder abfließt – nicht allein, wann eine Rechnung geschrieben wird.',
    sections: [
      {
        heading: 'Was ist die EÜR?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'euer', text: 'Einnahmenüberschussrechnung (EÜR)' },
            ' ermittelt den Gewinn als Überschuss der ',
            { type: 'glossary', id: 'betriebseinnahmen', text: 'Betriebseinnahmen' },
            ' über die ',
            { type: 'glossary', id: 'betriebsausgaben', text: 'Betriebsausgaben' },
            '. Sie ist eine steuerliche Gewinnermittlung nach § 4 Abs. 3 EStG und keine einfache private Einnahmen-Ausgaben-Liste.',
          ],
          [
            'Die EÜR ist keine doppelte ',
            { type: 'glossary', id: 'buchfuehrung', text: 'Buchführung' },
            ', verlangt aber nachvollziehbare Aufzeichnungen über betriebliche Vorgänge und geordnete Belege. Dazu gehören zum Beispiel Abschreibungen, private Entnahmen und Einlagen sowie Angaben zum Anlagevermögen.',
          ],
        ],
        formulaCards: [
          {
            title: 'Grundformel der EÜR',
            formula: 'Gewinn = Betriebseinnahmen − Betriebsausgaben',
            description: 'Der Gewinn ist nicht automatisch der Kontostand. Private Einlagen und Entnahmen, offene Rechnungen sowie Anschaffungen von Anlagegütern können die Betrachtung verändern.',
          },
        ],
      },
      {
        heading: 'Wer kann eine EÜR verwenden – und wer muss bilanzieren?',
        paragraphs: [
          'Eine EÜR können Steuerpflichtige grundsätzlich verwenden, wenn sie nicht gesetzlich verpflichtet sind, Bücher zu führen und regelmäßig Abschlüsse zu machen, und dies auch tatsächlich nicht tun. Sie ist deshalb häufig bei Freiberuflern, kleineren Gewerbebetrieben und anderen nicht bilanzierungspflichtigen Betrieben relevant.',
          'Wer handelsrechtlich oder steuerlich buchführungspflichtig ist, muss seinen Gewinn grundsätzlich durch Bilanzierung ermitteln. Nach dem HGB sind Kaufleute grundsätzlich zur Buchführung verpflichtet. Für bestimmte Einzelkaufleute gibt es bei dauerhaft niedrigen Umsatz- und Gewinngrenzen eine handelsrechtliche Befreiung; die Voraussetzungen müssen jeweils geprüft werden.',
          'Auch ohne handelsrechtliche Pflicht kann eine steuerliche Buchführungspflicht nach § 141 AO entstehen. Sie betrifft gewerbliche Unternehmer sowie Land- und Forstwirte, wenn die Finanzbehörde für den Betrieb mehr als 800.000 Euro Gesamtumsatz oder mehr als 80.000 Euro Gewinn feststellt. Die Pflicht beginnt grundsätzlich erst mit dem Wirtschaftsjahr nach Bekanntgabe der Mitteilung des Finanzamts.',
          [
            'Der Unterschied zur ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' ist grundlegend: Die Bilanz erfasst Vermögen und Schulden zu einem Stichtag und ordnet Erträge und Aufwendungen periodengerecht zu. Die EÜR folgt dagegen grundsätzlich den tatsächlichen Zahlungszeitpunkten.',
          ],
        ],
      },
      {
        heading: 'Zufluss und Abfluss: Wann gehört ein Betrag in die EÜR?',
        paragraphs: [
          [
            'Nach dem ',
            { type: 'glossary', id: 'zuflussprinzip', text: 'Zuflussprinzip' },
            ' gehören Betriebseinnahmen grundsätzlich in das Jahr, in dem sie tatsächlich eingehen. Nach dem ',
            { type: 'glossary', id: 'abflussprinzip', text: 'Abflussprinzip' },
            ' werden Betriebsausgaben grundsätzlich in dem Jahr berücksichtigt, in dem sie bezahlt werden.',
          ],
          'Eine Rechnung vom Dezember, die erst im Januar bezahlt wird, führt deshalb regelmäßig erst im Januar zu einer Einnahme oder Ausgabe. Allein die Rechnungsstellung oder der Leistungszeitpunkt entscheidet bei der EÜR meist nicht über das Jahr der Erfassung.',
          'Eine wichtige Ausnahme betrifft regelmäßig wiederkehrende Einnahmen und Ausgaben am Jahreswechsel. Sie können dem wirtschaftlich zugehörigen Jahr zugeordnet werden, wenn Zahlung oder Zufluss und Fälligkeit innerhalb des kurzen Zeitraums rund um den Jahreswechsel liegen. Als kurze Zeit gelten in der Regel zehn Tage. Bei längerfristigen Vorauszahlungen für Nutzungsüberlassungen gelten ebenfalls besondere gesetzliche Regeln.',
        ],
      },
      {
        heading: 'Betriebseinnahmen, Betriebsausgaben und private Vorgänge',
        paragraphs: [
          [
            'Zu den ',
            { type: 'glossary', id: 'betriebseinnahmen', text: 'Betriebseinnahmen' },
            ' gehören zum Beispiel Kundenzahlungen für betriebliche Leistungen oder Waren. Durchlaufende Posten, die im Namen und für Rechnung eines anderen vereinnahmt und ausgegeben werden, gehören nach § 4 Abs. 3 EStG nicht dazu.',
          ],
          [
            'Zu den ',
            { type: 'glossary', id: 'betriebsausgaben', text: 'Betriebsausgaben' },
            ' können etwa Miete für Geschäftsräume, Material, Software, betriebliche Versicherungen oder Beratungskosten gehören. Entscheidend ist jeweils die betriebliche Veranlassung; gemischte Ausgaben sind nur mit dem betrieblichen Anteil zu berücksichtigen.',
          ],
          [
            'Private ',
            { type: 'glossary', id: 'entnahme', text: 'Entnahmen' },
            ' sind keine Betriebsausgaben. Private ',
            { type: 'glossary', id: 'einlage', text: 'Einlagen' },
            ' sind keine Betriebseinnahmen. Beide können bei der EÜR trotzdem gesonderte Aufzeichnungen und eine passende Bewertung erfordern.',
          ],
        ],
      },
      {
        heading: 'Anlagevermögen und Abschreibungen',
        paragraphs: [
          [
            'Wirtschaftsgüter des ',
            { type: 'glossary', id: 'anlagevermoegen', text: 'Anlagevermögens' },
            ' dienen dem Betrieb dauerhaft, zum Beispiel Maschinen, Büroausstattung oder ein betrieblich genutztes Fahrzeug. Ihr Kaufpreis ist nicht immer sofort vollständig als Betriebsausgabe abzusetzen.',
          ],
          [
            'Bei abnutzbaren Wirtschaftsgütern verteilt die ',
            { type: 'glossary', id: 'abschreibung', text: 'Abschreibung' },
            ' den steuerlich berücksichtigten Wertverzehr über die Nutzungsdauer. Auch bei der EÜR sind die AfA-Regeln zu beachten; außerdem ist für Anlagegüter grundsätzlich ein laufendes Verzeichnis zu führen.',
          ],
          'Einige Wirtschaftsgüter und Sonderregeln behandeln Anschaffungs- oder Herstellungskosten abweichend. Für konkrete Grenzwerte, Nutzungsdauern und Sonderfälle ist eine individuelle steuerliche Prüfung sinnvoll.',
        ],
      },
      {
        heading: 'Umsatzsteuer und Vorsteuer in der EÜR',
        paragraphs: [
          [
            'Bei Regelbesteuerung gehört vereinnahmte ',
            { type: 'glossary', id: 'umsatzsteuer', text: 'Umsatzsteuer' },
            ' grundsätzlich zu den Betriebseinnahmen. Zahlungen an das Finanzamt, Umsatzsteuer-Erstattungen und gezahlte abziehbare ',
            { type: 'glossary', id: 'vorsteuer', text: 'Vorsteuer' },
            ' müssen ebenfalls im passenden Zeitpunkt erfasst werden.',
          ],
          'In der Anlage EÜR werden die meisten Betriebsausgaben bei möglichem Vorsteuerabzug grundsätzlich netto ausgewiesen; abziehbare Vorsteuerbeträge werden gesondert berücksichtigt. Kleinunternehmer tragen Betriebsausgaben regelmäßig mit dem Bruttobetrag ein, weil sie keinen Vorsteuerabzug haben.',
          'Die Umsatzsteuerbehandlung kann bei Anzahlungen, Privatnutzung, innergemeinschaftlichen Sachverhalten oder Reverse Charge komplexer sein. Diese Seite vermittelt nur die Grundlogik der EÜR und ersetzt keine Prüfung des Einzelfalls.',
        ],
      },
      {
        heading: 'Beispiele: So wirkt die EÜR in der Praxis',
        paragraphs: [
          'Die Beispiele vereinfachen bewusst. Sie zeigen die Grundlogik, ersetzen aber keine steuerliche Einordnung einzelner Belege oder Sonderfälle.',
        ],
        exampleCards: [
          {
            title: 'Einfaches Jahresbeispiel',
            paragraphs: [
              'Eine Kleinunternehmerin erhält im Jahr tatsächlich Kundenzahlungen von 36.000 Euro. Sie bezahlt im selben Jahr 7.200 Euro Miete, 5.000 Euro Material, 1.200 Euro Software und 600 Euro betriebliche Versicherung.',
              'Schritt 1: Betriebseinnahmen betragen 36.000 Euro.',
              'Schritt 2: Betriebsausgaben betragen 14.000 Euro.',
              'Schritt 3: Der vereinfachte Gewinn beträgt 36.000 Euro minus 14.000 Euro, also 22.000 Euro.',
            ],
            effects: [
              'Gewinn: 22.000 Euro vor weiteren steuerlichen Korrekturen oder Sonderfällen.',
              'Privatentnahmen oder private Einlagen sind in dieser Rechnung nicht als Einnahme oder Ausgabe enthalten.',
            ],
          },
          {
            title: 'Rechnung im Dezember, Zahlung im Januar',
            paragraphs: [
              'Ein Freiberufler schreibt im Dezember eine Rechnung über 2.000 Euro. Der Kunde bezahlt am 20. Januar des Folgejahres.',
              'Schritt 1: Die Rechnung allein führt noch nicht zum Zufluss.',
              'Schritt 2: Die Zahlung geht im Januar ein.',
              'Schritt 3: Die 2.000 Euro sind daher grundsätzlich Betriebseinnahmen des Folgejahres.',
            ],
            effects: [
              'Maßgeblich: tatsächlicher Zahlungseingang.',
              'Ausnahme: Regelmäßig wiederkehrende Beträge rund um den Jahreswechsel können anders zuzuordnen sein.',
            ],
          },
          {
            title: 'Regelmäßig wiederkehrende Ausgabe am Jahreswechsel',
            paragraphs: [
              'Die Miete für Dezember ist am 3. Januar fällig und wird am 5. Januar bezahlt. Miete fällt regelmäßig an und gehört wirtschaftlich zum Dezember.',
              'Schritt 1: Fälligkeit und Zahlung liegen innerhalb der ersten zehn Tage des Januars.',
              'Schritt 2: Die Voraussetzungen der Ausnahme für regelmäßig wiederkehrende Ausgaben können damit erfüllt sein.',
              'Schritt 3: Die Zahlung wird dann dem Vorjahr zugeordnet, obwohl sie erst im Januar abgeflossen ist.',
            ],
            effects: [
              'Prüfung: Regelmäßigkeit, wirtschaftliche Zugehörigkeit, Fälligkeit und Zahlung im kurzen Zeitraum müssen zusammenpassen.',
              'Bei abweichenden Zahlungs- oder Fälligkeitsterminen gilt regelmäßig wieder das Abflussprinzip.',
            ],
          },
          {
            title: 'Kauf eines Anlageguts',
            paragraphs: [
              'Ein Betrieb kauft eine Maschine, die mehrere Jahre genutzt werden soll. Der Betrag wird im Zahlungsjahr überwiesen.',
              'Schritt 1: Die Maschine gehört zum Anlagevermögen und wird in das Anlagenverzeichnis aufgenommen.',
              'Schritt 2: Bei einem abnutzbaren Anlagegut wird der Wertverzehr regelmäßig über Abschreibungen auf mehrere Jahre verteilt.',
              'Schritt 3: Der vollständige Kaufpreis mindert den Gewinn daher nicht automatisch sofort im Zahlungsjahr.',
            ],
            effects: [
              'Betriebsausgabe: regelmäßig die zulässige Abschreibung, nicht pauschal der volle Kaufpreis.',
              'Details: Nutzungsdauer, Anschaffungskosten und mögliche Sonderregeln sind im Einzelfall zu prüfen.',
            ],
          },
        ],
      },
      {
        heading: 'Anlage EÜR und elektronische Übermittlung',
        paragraphs: [
          'Die EÜR wird grundsätzlich mit der Anlage EÜR nach amtlich vorgeschriebenem Datensatz elektronisch an die Finanzverwaltung übermittelt. Für jeden Betrieb ist eine eigene Anlage EÜR vorgesehen; je nach Sachverhalt können weitere Anlagen, etwa ein Anlagenverzeichnis, dazugehören.',
          'Auf Antrag kann die Finanzbehörde zur Vermeidung unbilliger Härten auf die elektronische Übermittlung verzichten. Dann ist die Gewinnermittlung auf dem amtlichen Vordruck beizufügen.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle nicht Rechnungsdatum und Zahlungszeitpunkt. Für die EÜR ist der tatsächliche Zufluss oder Abfluss grundsätzlich entscheidend.',
          'Behandle private Einlagen und Entnahmen nicht wie Betriebseinnahmen oder Betriebsausgaben. Halte sie getrennt und nachvollziehbar fest.',
          'Setze Anschaffungen des Anlagevermögens nicht automatisch vollständig im Zahlungsjahr ab. Prüfe, ob eine Abschreibung und ein Anlagenverzeichnis erforderlich sind.',
          'Bei Umsatzsteuer und Vorsteuer reicht es nicht, nur Brutto- oder Nettobeträge zu addieren. Die Besteuerungsform und die tatsächlichen Zahlungs- oder Erstattungszeitpunkte sind mitentscheidend.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die EÜR ermittelt Gewinn als Betriebseinnahmen minus Betriebsausgaben',
    'sie setzt voraus, dass keine gesetzliche Buchführungs- und Abschlusspflicht besteht und tatsächlich keine Bilanz erstellt wird',
    'Einnahmen und Ausgaben werden grundsätzlich beim tatsächlichen Zufluss oder Abfluss erfasst',
    'regelmäßig wiederkehrende Beträge am Jahreswechsel können unter Voraussetzungen dem wirtschaftlich zugehörigen Jahr zugeordnet werden',
    'private Einlagen und Entnahmen sind keine Betriebseinnahmen oder Betriebsausgaben',
    'Anlagegüter und Abschreibungen müssen auch bei der EÜR gesondert beachtet werden',
    'die Anlage EÜR ist grundsätzlich elektronisch zu übermitteln',
  ],
  commonMistakes: [
    'Rechnungsdatum mit dem für die EÜR maßgeblichen Zahlungszeitpunkt verwechseln',
    'eine EÜR wie eine private Einnahmen-Ausgaben-Liste führen',
    'private Einlagen oder Entnahmen als Betriebseinnahme oder Betriebsausgabe erfassen',
    'den Kauf eines Anlageguts immer vollständig im Zahlungsjahr absetzen',
    'die Voraussetzungen der 10-Tage-Regel nicht vollständig prüfen',
    'Umsatzsteuer, Vorsteuer und Erstattungen ohne Blick auf die eigene Besteuerungsform erfassen',
    'bei bestehender Buchführungspflicht weiterhin eine EÜR verwenden',
  ],
  faqs: [
    {
      question: 'Was ist eine EÜR einfach erklärt?',
      answer: 'Die EÜR ermittelt den Gewinn aus der Differenz zwischen betrieblichen Einnahmen und Ausgaben. Maßgeblich ist meist, wann Geld tatsächlich eingeht oder bezahlt wird.',
    },
    {
      question: 'Wer darf eine EÜR machen?',
      answer: 'Grundsätzlich Steuerpflichtige, die nicht gesetzlich zur Buchführung und zu regelmäßigen Abschlüssen verpflichtet sind und auch tatsächlich keine Bücher führen und Abschlüsse machen. Die Voraussetzungen hängen vom konkreten Betrieb ab.',
    },
    {
      question: 'Was ist der Unterschied zwischen EÜR und Bilanz?',
      answer: 'Die EÜR orientiert sich grundsätzlich an Zahlungszeitpunkten. Die Bilanz zeigt Vermögen und Schulden zu einem Stichtag und grenzt Aufwendungen und Erträge periodengerecht ab.',
    },
    {
      question: 'Wann gilt die 10-Tage-Regel?',
      answer: 'Sie kann für regelmäßig wiederkehrende Einnahmen oder Ausgaben rund um den Jahreswechsel gelten. Neben der wirtschaftlichen Zugehörigkeit müssen insbesondere Zahlung oder Zufluss und Fälligkeit im kurzen Zeitraum liegen, der in der Regel zehn Tage umfasst.',
    },
    {
      question: 'Ist eine Privatentnahme eine Betriebsausgabe?',
      answer: 'Nein. Eine Privatentnahme ist keine Betriebsausgabe und mindert den Gewinn nicht unmittelbar. Sie kann aber gesonderte Aufzeichnungen und Bewertungen erfordern.',
    },
    {
      question: 'Muss ich die Anlage EÜR elektronisch übermitteln?',
      answer: 'Grundsätzlich ja. Die Anlage EÜR ist nach § 60 Abs. 4 EStDV elektronisch zu übermitteln. Das Finanzamt kann bei unbilliger Härte auf Antrag eine Ausnahme zulassen.',
    },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'umsatzsteuer',
    'vorsteuer',
  ],
  sources: [
    { label: '§ 4 EStG – Gewinnermittlung und Einnahmenüberschussrechnung', url: 'https://www.gesetze-im-internet.de/estg/__4.html' },
    { label: '§ 11 EStG – Zufluss und Abfluss', url: 'https://www.gesetze-im-internet.de/estg/__11.html' },
    { label: '§ 141 AO – Steuerliche Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/ao_1977/__141.html' },
    { label: '§ 238 HGB – Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/hgb/__238.html' },
    { label: '§ 241a HGB – Befreiung für Einzelkaufleute', url: 'https://www.gesetze-im-internet.de/hgb/__241a.html' },
    { label: '§ 60 Abs. 4 EStDV – Elektronische Übermittlung der EÜR', url: 'https://www.gesetze-im-internet.de/estdv_1955/__60.html' },
    { label: 'ELSTER – Anleitung zur Anlage EÜR', url: 'https://www.elster.de/elsterweb/helpGlobal?themaGlobal=help_euer_ufa_77_2025' },
    { label: 'BMF – Anlage EÜR 2025', url: 'https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Einkommensteuer/2025-08-29-anlage-EUER-2025.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default euer;
