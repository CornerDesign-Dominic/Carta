import { defaultDisclaimer } from '../shared.js';

const kanbanSteuerung = {
  slug: 'kanban-steuerung',
  category: 'Supply Chain & Logistik',
  title: 'Kanban-Steuerung',
  description: 'Kanban-Steuerung einfach erklärt: verbrauchsgesteuerte Nachversorgung mit Karten, digitalen Signalen und Behälterregelkreisen.',
  seo: {
    title: 'Kanban-Steuerung einfach erklärt | Belege24',
    description: 'Erfahre, wie Kanban Verbrauch in Nachschubsignale übersetzt, welche Voraussetzungen gelten und wo Grenzen bei schwankendem Bedarf liegen.',
    canonicalPath: '/wissen/kanban-steuerung',
  },
  article: {
    intro: 'Kanban ist eine einfache Form der verbrauchsgesteuerten Nachversorgung. Ein verbrauchter Behälter oder ein digitales Signal löst Nachschub aus, damit sich der Bestand innerhalb eines klaren Regelkreises wieder auffüllt.',
    sections: [
      {
        heading: 'Was ist Kanban?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'kanban', text: 'Kanban' },
            ' steuert Nachschub durch ein sichtbares Signal. Klassisch ist das eine Karte an einem Behälter; heute kann es auch ein Barcode-Scan, ein digitales Feld oder eine Systemmeldung sein.',
          ],
          'Das Signal steht nicht für eine allgemeine Bedarfsschätzung, sondern für einen konkret definierten Nachschubauftrag. Es legt fest, welches Material, welche Menge und welcher Regelkreis betroffen ist. Der Verbrauch löst die Wiederauffüllung aus.',
        ],
      },
      {
        heading: 'Pull-Prinzip und verbrauchsgesteuerte Nachversorgung',
        paragraphs: [
          [
            'Kanban folgt dem ',
            { type: 'glossary', id: 'pull-prinzip', text: 'Pull-Prinzip' },
            ': Nachschub wird durch tatsächlichen Verbrauch angefordert, nicht allein auf Vorrat in den Prozess gedrückt.',
          ],
          'Der Regelkreis verbindet einen Verbrauchsort, zum Beispiel einen Montageplatz, mit dem Ort der Nachversorgung, etwa Lager, Fertigung oder Lieferant. Für jede Bewegung müssen Menge, Behälter, Signalweg, Verantwortlichkeit und Wiederauffüllzeit eindeutig sein.',
          'Kanban ersetzt nicht jede Planung. Es funktioniert besonders gut für regelmäßig benötigte, gut definierte Materialien. Größere Schwankungen, Projektartikel oder lange, unsichere Lieferwege brauchen häufig zusätzliche Planungs- und Bestandsregeln.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Kanban-Regelkreis',
            formula: 'Verbrauch → Signal → Nachschub → Wiederauffüllung',
            description: 'Der Kreislauf funktioniert nur, wenn Signal, Menge, Wiederauffüllzeit und Verantwortlichkeiten klar definiert sowie Störungen sichtbar gemacht werden.',
          },
        ],
      },
      {
        heading: 'Karte, digitales Signal und Behälter',
        paragraphs: [
          'Eine Kanban-Karte oder ein digitales Signal enthält typischerweise eine eindeutige Material- und Behälterinformation. Es darf nicht unklar sein, welcher Artikel nachgeliefert wird und in welcher Menge.',
          'Behälter machen die Umlaufmenge sichtbar: Eine begrenzte Zahl von Behältern begrenzt gleichzeitig, wie viel Material im Regelkreis sein kann. Wird ein leerer Behälter als Signal zurückgegeben, startet der Nachschub für genau diese Einheit.',
          'Digitale Signale können das Scannen, Anzeigen und Nachverfolgen vereinfachen. Sie ändern jedoch nicht die Grundlogik: Ist Artikelstamm, Menge oder Wiederauffüllzeit falsch gepflegt, wird der digitale Prozess ebenfalls unpassend steuern.',
        ],
      },
      {
        heading: 'Zwei-Behälter-Prinzip',
        paragraphs: [
          'Das Zwei-Behälter-Prinzip ist eine einfache Kanban-Variante für überschaubare Verbrauchsartikel. Während ein Behälter verwendet wird, steht der zweite als Reserve bereit. Wird der zweite angebrochen, dient der leere erste Behälter als Nachschubsignal.',
          'Die Menge im Reservebehälter muss zur Wiederauffüllzeit und zum erwarteten Verbrauch passen. Bei starkem Verbrauchsanstieg oder verspäteter Lieferung kann auch dieses Prinzip zu wenig Puffer bieten.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Schrauben an einem Montageplatz',
            paragraphs: [
              'An einer Montagestation stehen zwei Behälter mit jeweils 200 Schrauben. Sobald der erste Behälter leer ist, wird seine Karte an das Lager weitergegeben. Die Montage arbeitet mit dem zweiten Behälter weiter.',
              'Das Lager füllt den leeren Behälter wieder mit 200 Schrauben und bringt ihn zurück. Die Behältermenge und die Zahl der Behälter sind so festgelegt, dass der zweite Behälter den üblichen Verbrauch während der Wiederauffüllzeit abdecken soll.',
            ],
            effects: [
              'Signal: leerer erster Behälter beziehungsweise seine Karte.',
              'Nachschub: genau ein Behälter mit 200 Schrauben.',
              'Grenze: Bei längerem Nachschub oder höherem Verbrauch reicht der zweite Behälter möglicherweise nicht aus.',
            ],
          },
        ],
      },
      {
        heading: 'Vorteile der Kanban-Steuerung',
        paragraphs: [
          'Kanban kann Nachschub sehr transparent machen. Wer einen leeren Behälter oder ein offenes Signal sieht, erkennt unmittelbar den Bedarf. Klare Standardmengen und Regelkreise vereinfachen die tägliche Steuerung.',
          'Die begrenzte Zahl von Behältern kann Umlaufbestände sichtbar begrenzen. Das hilft, unnötiges Material im Prozess zu erkennen und Bestände nicht unbemerkt anwachsen zu lassen.',
          'Die Vorteile entstehen nur, wenn der Regelkreis zuverlässig funktioniert. Kanban spart nicht automatisch Kosten und ist kein Ersatz für sinnvolle Mengen, Daten und Lieferfähigkeit.',
        ],
      },
      {
        heading: 'Voraussetzungen, Schwankungen und Störungen',
        paragraphs: [
          'Wichtige Voraussetzungen sind ein klarer Materialfluss, stabile Artikel- und Behälterinformationen, passende Wiederauffüllzeiten und eine verlässliche Ausführung des Nachschubs. Auch Qualität und Kennzeichnung müssen stimmen, damit ein zurückgebrachter Behälter tatsächlich verwendbares Material enthält.',
          'Schwankender Bedarf, Variantenwechsel, Lieferprobleme oder Produktionsstörungen können die ursprüngliche Behälterzahl unpassend machen. Dann sind Regelkreise, Mengen oder zusätzliche Reserven gezielt anzupassen, statt immer mehr Behälter ohne Analyse hinzuzufügen.',
          [
            'Die nötigen Reserven und Auslösewerte ordnet die Seite ',
            { type: 'link', href: '/wissen/sicherheitsbestand-meldebestand-servicegrad', text: 'Sicherheitsbestand, Meldebestand & Servicegrad' },
            ' ein. ',
            { type: 'link', href: '/wissen/bestellverfahren', text: 'Bestellverfahren' },
            ' beschreibt ergänzende Regeln für Bestandsüberwachung und Nachbestellung.',
          ],
        ],
      },
      {
        heading: 'Zusammenhang mit JIT und JIS',
        paragraphs: [
          [
            'Kanban kann interne oder externe Nachschubprozesse unterstützen und damit zu ',
            { type: 'link', href: '/wissen/just-in-time-sequence', text: 'Just-in-Time & Just-in-Sequence' },
            ' passen. Es ist aber nicht dasselbe: JIT und JIS beschreiben vor allem die zeit- und gegebenenfalls reihenfolgensynchrone Lieferung, Kanban die Signalsteuerung eines Regelkreises.',
          ],
          'Ob die Konzepte zusammen sinnvoll sind, hängt von Prozessstabilität, Lieferfrequenz, Informationsaustausch und Folgen einer Störung ab. Sie sollten nicht allein wegen niedriger Bestände eingeführt werden.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Karten oder digitale Signale einzuführen, ohne Material, Menge, Behälter und Verantwortlichkeit eindeutig festzulegen. Dann entstehen doppelte oder ausbleibende Nachschübe.',
          'Auch die Zahl und Größe der Behälter dürfen nicht dauerhaft unverändert bleiben. Bedarf, Wiederauffüllzeit, Qualität und Lieferfähigkeit verändern sich und müssen regelmäßig überprüft werden.',
          'Kanban für stark schwankende oder seltene Materialien einzusetzen kann mehr Aufwand als Nutzen erzeugen. Für solche Artikel sind andere Planungs- oder Bestellverfahren oft besser geeignet.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Kanban steuert Nachschub mit einem sichtbaren oder digitalen Signal nach tatsächlichem Verbrauch.',
    'Das Pull-Prinzip löst Nachschub aus, wenn Material verbraucht wurde.',
    'Karten, Signale und Behälter machen Material, Menge und Regelkreis eindeutig.',
    'Eine begrenzte Behälterzahl kann Umlaufbestände sichtbar begrenzen.',
    'Kanban braucht stabile Prozesse, passende Wiederauffüllzeiten, klare Verantwortung und aktuelle Daten.',
    'Bei Schwankungen und Störungen müssen Behältermenge, Regelkreis oder zusätzliche Planungsregeln angepasst werden.',
  ],
  commonMistakes: [
    'Kanban-Signale ohne eindeutige Material-, Mengen- und Verantwortlichkeitsregeln einsetzen',
    'Behälterzahl und -größe trotz verändertem Verbrauch oder Nachschubzeit nicht überprüfen',
    'Kanban bei seltenen oder stark schwankenden Artikeln ohne zusätzliche Planung verwenden',
    'leere Behälter oder digitale Signale nicht zeitnah in den Nachschubprozess überführen',
    'Kanban als automatische Lösung für Bestands- oder Lieferprobleme ansehen',
  ],
  faqs: [
    {
      question: 'Was ist Kanban?',
      answer: 'Kanban ist eine verbrauchsgesteuerte Nachschubsteuerung, bei der ein leerer Behälter, eine Karte oder ein digitales Signal die Wiederauffüllung auslöst.',
    },
    {
      question: 'Was bedeutet Pull-Prinzip?',
      answer: 'Nachschub wird durch tatsächlichen Verbrauch angefordert, statt Material allein nach einem allgemeinen Plan in den Prozess zu drücken.',
    },
    {
      question: 'Was ist das Zwei-Behälter-Prinzip?',
      answer: 'Während ein Behälter verwendet wird, dient der zweite als Reserve. Wird er angebrochen, löst der leere erste Behälter den Nachschub aus.',
    },
    {
      question: 'Braucht Kanban digitale Software?',
      answer: 'Nein. Karten und Behälter können genügen. Digitale Signale können die Nachverfolgung vereinfachen, ersetzen aber keine klaren Mengen- und Prozessregeln.',
    },
    {
      question: 'Wann ist Kanban weniger geeignet?',
      answer: 'Bei stark schwankendem, seltenem oder schwer planbarem Bedarf sowie bei langen oder unsicheren Wiederauffüllzeiten braucht es häufig zusätzliche oder andere Planungsregeln.',
    },
  ],
  related: [
    'just-in-time-sequence',
    'bestellverfahren',
    'sicherheitsbestand-meldebestand-servicegrad',
    'mrp-erp-disposition',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default kanbanSteuerung;
