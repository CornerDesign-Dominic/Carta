import { defaultDisclaimer } from '../shared.js';

const bestandskonten = {
  slug: 'bestandskonten',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Bestandskonten',
  description: 'Bestandskonten einfach erklärt: Aktiv- und Passivkonten, Anfangsbestand, Zugänge, Abgänge, Saldo sowie Eröffnung und Abschluss über die Bilanz.',
  seo: {
    title: 'Bestandskonten einfach erklärt | Belege24',
    description: 'Verstehe Aktiv- und Passivkonten, ihre Buchungsregeln in Soll und Haben sowie Anfangs- und Endbestand anhand einfacher Beispiele.',
    canonicalPath: '/wissen/bestandskonten',
  },
  article: {
    intro: 'Bestandskonten zeigen, welche Vermögenswerte, Schulden und welches Eigenkapital ein Unternehmen zu einem bestimmten Zeitpunkt hat. Sie bilden die einzelnen Positionen der Bilanz in der laufenden Buchführung ab.',
    sections: [
      {
        heading: 'Was sind Bestandskonten?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'bestandskonto', text: 'Bestandskonto' },
            ' erfasst einen Bestand: zum Beispiel Bankguthaben, Fahrzeuge, Darlehen oder offene Lieferantenrechnungen. Es macht sichtbar, wie sich dieser Bestand durch Zugänge und Abgänge verändert.',
          ],
          [
            'Bestandskonten stehen in engem Zusammenhang mit der ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            '. Die Aktivseite der Bilanz wird in Aktivkonten aufgeteilt; die Passivseite in Passivkonten. So lässt sich während des Jahres nachvollziehen, wie einzelne Bilanzpositionen entstehen und sich verändern.',
          ],
          'Es gibt zwei Grundarten: Aktivkonten für Vermögen sowie Passivkonten für Eigenkapital und Schulden.',
        ],
      },
      {
        heading: 'Anfangsbestand, Zugänge, Abgänge und Endbestand',
        paragraphs: [
          [
            'Ein Bestandskonto startet mit einem ',
            { type: 'glossary', id: 'anfangsbestand', text: 'Anfangsbestand' },
            '. Im Laufe des Jahres werden Zugänge und Abgänge gebucht. Aus diesen Bewegungen ergibt sich am Ende der ',
            { type: 'glossary', id: 'endbestand', text: 'Endbestand' },
            '.',
          ],
          [
            'Im T-Konto wird die Differenz zwischen Soll und Haben als ',
            { type: 'glossary', id: 'saldo', text: 'Saldo' },
            ' auf der betragsmäßig kleineren Seite ergänzt. Bei Bestandskonten entspricht dieser Saldo grundsätzlich dem Endbestand.',
          ],
          'Ein Zugang ist nicht immer im Soll und ein Abgang nicht immer im Haben. Die richtige Seite hängt davon ab, ob es sich um ein Aktiv- oder Passivkonto handelt.',
        ],
      },
      {
        heading: 'Aktivkonten: Vermögen des Unternehmens',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'aktivkonto', text: 'Aktivkonto' },
            ' zeigt Vermögenswerte wie Bank, Kasse, Forderungen, Fuhrpark oder Maschinen. Bei Aktivkonten stehen Anfangsbestand und Zugänge im Soll; Abgänge und Schlussbestand stehen im Haben.',
          ],
          'Wenn ein Kunde bezahlt, steigt das Bankguthaben. Der Zugang wird deshalb im Soll gebucht. Wird Geld überwiesen, sinkt das Bankguthaben; der Abgang steht im Haben.',
        ],
        formulaCards: [
          {
            title: 'Aktivkonto',
            formula: 'Soll: Anfangsbestand + Zugänge | Haben: Abgänge + Schlussbestand',
            description: 'Aktivkonten erfassen Vermögen. Der Schlussbestand gleicht das Konto aus und entspricht grundsätzlich dem Endbestand.',
          },
        ],
      },
      {
        heading: 'Passivkonten: Eigenkapital und Schulden',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'passivkonto', text: 'Passivkonto' },
            ' zeigt Eigenkapital oder Schulden. Typische Beispiele sind Darlehen und Verbindlichkeiten. Bei Passivkonten ist die Logik gegenüber Aktivkonten umgekehrt: Anfangsbestand und Zugänge stehen im Haben; Abgänge und Schlussbestand im Soll.',
          ],
          'Nimmt ein Unternehmen ein Darlehen auf, steigt seine Schuld. Dieser Zugang wird im Haben gebucht. Wird das Darlehen getilgt, sinkt die Schuld; der Abgang steht im Soll.',
        ],
        formulaCards: [
          {
            title: 'Passivkonto',
            formula: 'Soll: Abgänge + Schlussbestand | Haben: Anfangsbestand + Zugänge',
            description: 'Passivkonten erfassen Eigenkapital und Schulden. Der Schlussbestand wird auf der Sollseite ergänzt, damit beide Seiten gleich hoch sind.',
          },
        ],
      },
      {
        heading: 'Beispiele: Bestandskonten in der Praxis',
        paragraphs: [
          'Die Beispiele lassen Umsatzsteuer und weitere Kontierungsdetails bewusst außen vor. Sie zeigen nur, wie sich Bestände auf Aktiv- und Passivkonten verändern.',
        ],
        exampleCards: [
          {
            title: 'Bankkonto',
            paragraphs: [
              'Zu Beginn stehen 5.000 Euro auf dem Bankkonto. Als Aktivkonto steht dieser Anfangsbestand im Soll.',
              'Ein Kunde überweist 1.200 Euro. Das Bankguthaben nimmt zu; die 1.200 Euro werden im Soll gebucht.',
              'Das Unternehmen überweist 700 Euro an einen Lieferanten. Das Bankguthaben nimmt ab; die 700 Euro werden im Haben gebucht.',
              'Der Saldo beträgt 5.500 Euro und steht zum Ausgleich im Haben. Er ist zugleich der Endbestand des Bankkontos.',
            ],
            effects: [
              'Kontoart: Aktivkonto.',
              'Endbestand Bank: 5.500 Euro.',
            ],
          },
          {
            title: 'Fuhrpark',
            paragraphs: [
              'Ein Unternehmen kauft ein Fahrzeug für 28.000 Euro und bezahlt per Bank.',
              'Der Fuhrpark ist Vermögen. Sein Zugang von 28.000 Euro wird auf dem Aktivkonto Fuhrpark im Soll gebucht.',
              'Gleichzeitig sinkt das Bankguthaben. Der Abgang auf dem Aktivkonto Bank steht im Haben.',
              'Der Buchungssatz lautet vereinfacht: Fuhrpark an Bank 28.000 Euro.',
            ],
            effects: [
              'Vermögenstausch: Fuhrpark steigt, Bank sinkt.',
              'Der Vorgang verändert für sich genommen weder Ertrag noch Aufwand.',
            ],
          },
          {
            title: 'Darlehen',
            paragraphs: [
              'Ein Unternehmen nimmt ein Darlehen über 40.000 Euro auf. Das Darlehenskonto ist ein Passivkonto.',
              'Die Darlehensschuld nimmt zu. Der Zugang von 40.000 Euro wird im Haben des Darlehenskontos gebucht.',
              'Gleichzeitig steigt das Bankguthaben im Soll, weil das Geld eingeht.',
              'Der Buchungssatz lautet: Bank an Darlehen 40.000 Euro.',
            ],
            effects: [
              'Vermögen: Bank steigt um 40.000 Euro.',
              'Schulden: Darlehen steigt um 40.000 Euro.',
            ],
          },
          {
            title: 'Verbindlichkeiten gegenüber Lieferanten',
            paragraphs: [
              'Zu Beginn bestehen offene Lieferantenrechnungen von 3.000 Euro. Der Anfangsbestand des Passivkontos Verbindlichkeiten steht im Haben.',
              'Ein weiterer Einkauf auf Rechnung erhöht die Schuld um 900 Euro. Der Zugang wird ebenfalls im Haben gebucht.',
              'Das Unternehmen begleicht 1.100 Euro per Banküberweisung. Die Verbindlichkeit nimmt ab; der Betrag steht im Soll.',
              'Der verbleibende Saldo beträgt 2.800 Euro und wird zum Abschluss auf der Sollseite ergänzt.',
            ],
            effects: [
              'Kontoart: Passivkonto.',
              'Endbestand Verbindlichkeiten: 2.800 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Eröffnung und Abschluss über die Bilanz',
        paragraphs: [
          'Zu Beginn eines neuen Geschäftsjahrs werden Bestandskonten grundsätzlich über das Eröffnungsbilanzkonto eröffnet. Es überträgt die Werte aus der Eröffnungsbilanz auf die einzelnen Aktiv- und Passivkonten. Die genaue Buchungstechnik richtet sich nach Kontenplan und Buchhaltungssystem.',
          'Am Ende des Geschäftsjahrs werden Bestandskonten grundsätzlich über das Schlussbilanzkonto abgeschlossen. Die Endbestände fließen damit in die Schlussbilanz ein. Das Schlussbilanzkonto ist ein Hilfskonto, das die Verbindung von den laufenden Konten zur Bilanz herstellt.',
        ],
      },
      {
        heading: 'Unterschied zu Erfolgskonten',
        paragraphs: [
          'Bestandskonten zeigen Vermögen, Eigenkapital und Schulden zu einem Stichtag. Sie haben einen Anfangsbestand, werden über die Bilanz abgeschlossen und im nächsten Jahr fortgeführt.',
          'Erfolgskonten erfassen dagegen Aufwendungen und Erträge innerhalb eines Zeitraums. Sie haben keinen Anfangsbestand und werden über die GuV abgeschlossen. Beide Kontoarten folgen der Logik von Soll und Haben, aber mit unterschiedlichen Regeln für Zugänge und Abgänge.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein typischer Fehler ist, die Regel eines Aktivkontos auf ein Passivkonto zu übertragen. Merke dir: Aktivkonten nehmen im Soll zu, Passivkonten im Haben.',
          'Der Saldo ist kein zusätzlicher Geschäftsvorfall. Er dient nur dazu, ein Konto rechnerisch auszugleichen und den Endbestand sichtbar zu machen.',
          'Auch sollte ein Kauf von Anlagevermögen nicht automatisch als Aufwand behandelt werden. Zunächst verändert er meist Bestandskonten; die Erfolgswirkung entsteht bei abnutzbaren Gegenständen häufig erst später durch Abschreibungen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Bestandskonten erfassen Vermögen, Eigenkapital und Schulden.',
    'Aktivkonten beginnen und nehmen im Soll zu; Abgänge stehen im Haben.',
    'Passivkonten beginnen und nehmen im Haben zu; Abgänge stehen im Soll.',
    'Der Saldo eines Bestandskontos entspricht grundsätzlich dem Endbestand.',
    'Bestandskonten werden zu Beginn über das Eröffnungsbilanzkonto und am Ende über das Schlussbilanzkonto mit der Bilanz verbunden.',
    'Bestandskonten unterscheiden sich von Erfolgskonten durch ihren Stichtagsbezug und ihren Anfangsbestand.',
  ],
  commonMistakes: [
    'bei Passivkonten die Zugangsregel von Aktivkonten anwenden',
    'Soll und Haben pauschal mit Plus und Minus gleichsetzen',
    'Saldo als neuen Geschäftsvorfall statt als rechnerischen Ausgleich verstehen',
    'Anfangsbestand und Endbestand miteinander verwechseln',
    'eine Darlehensaufnahme als Ertrag behandeln',
    'den Kauf eines Anlageguts sofort vollständig als Aufwand erfassen',
  ],
  faqs: [
    { question: 'Was ist ein Bestandskonto?', answer: 'Ein Bestandskonto erfasst Vermögen, Eigenkapital oder Schulden eines Unternehmens und zeigt seinen Wert zu einem Stichtag.' },
    { question: 'Welche Konten sind Aktivkonten?', answer: 'Aktivkonten erfassen Vermögen, zum Beispiel Bank, Kasse, Forderungen, Fuhrpark oder Maschinen.' },
    { question: 'Welche Konten sind Passivkonten?', answer: 'Passivkonten erfassen Eigenkapital und Schulden, zum Beispiel Darlehen oder Verbindlichkeiten.' },
    { question: 'Wo steht der Anfangsbestand bei einem Aktivkonto?', answer: 'Bei einem Aktivkonto steht der Anfangsbestand im Soll. Auch Zugänge werden dort gebucht.' },
    { question: 'Was ist der Saldo eines Bestandskontos?', answer: 'Der Saldo gleicht Soll und Haben aus. Bei einem Bestandskonto entspricht er grundsätzlich dem Endbestand.' },
    { question: 'Wie unterscheiden sich Bestands- und Erfolgskonten?', answer: 'Bestandskonten zeigen Werte zu einem Stichtag und haben einen Anfangsbestand. Erfolgskonten erfassen Aufwendungen und Erträge eines Zeitraums und beginnen jedes Jahr neu.' },
  ],
  related: [
    'konten',
    'soll-und-haben',
    'bilanz',
    'erfolgskonten',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bestandskonten;
