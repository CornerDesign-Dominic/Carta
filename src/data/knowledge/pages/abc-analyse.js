import { defaultDisclaimer } from '../shared.js';

const abcAnalyse = {
  slug: 'abc-analyse',
  category: 'Unternehmensführung',
  title: 'ABC-Analyse',
  description: 'Objekte mit der ABC-Analyse nach ihrem Wertbeitrag priorisieren und Kunden, Produkte, Materialien oder Lagerbestände nachvollziehbar einteilen.',
  seo: {
    title: 'ABC-Analyse einfach erklärt | Belege24',
    description: 'ABC-Analyse Schritt für Schritt: Wertanteile berechnen, kumulieren, Klassen bilden und Ergebnisse richtig interpretieren.',
    canonicalPath: '/wissen/abc-analyse',
  },
  article: {
    intro: 'Die ABC-Analyse teilt Kunden, Produkte, Materialien oder andere Objekte nach ihrem Beitrag zu einer festgelegten Wertgröße in A-, B- und C-Klassen ein. So werden besonders bedeutende Positionen sichtbar und können gezielter gesteuert werden. Die Klassengrenzen hängen vom Zweck und von den Daten ab; feste Prozentwerte gelten nicht universell.',
    sections: [
      {
        heading: 'Was ist die ABC-Analyse?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'abc-analyse', text: 'ABC-Analyse' },
            ' ist ein Verfahren zur Priorisierung. Sie sortiert betrachtete Objekte nach einer klar definierten Wert- oder Bedeutungsgröße und fasst sie anschließend in drei Klassen zusammen.',
          ],
          'A-Objekte haben in der gewählten Auswertung den höchsten Wertbeitrag und verdienen meist besondere Aufmerksamkeit. B-Objekte bilden einen mittleren Bereich. C-Objekte tragen einzeln häufig wenig bei, können zusammen aber zahlreich sein und erheblichen Bearbeitungsaufwand verursachen.',
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Ablauf der ABC-Analyse',
            formula: 'Wert ermitteln → sortieren → kumulieren → Klassen bilden',
            description: 'Vor dem ersten Schritt müssen Analyseziel, betrachtete Objekte, Wertgröße und Zeitraum eindeutig feststehen.',
          },
        ],
      },
      {
        heading: 'Mengenanteil und Wertanteil unterscheiden',
        paragraphs: [
          'Der Mengenanteil zeigt, wie viele Objekte eine Position oder Klasse im Verhältnis zur Gesamtzahl umfasst. Der Wertanteil zeigt dagegen ihren Anteil an der gewählten Wertgröße, beispielsweise Umsatz, Deckungsbeitrag, Verbrauchswert oder Lagerwert.',
          'Eine kleine Zahl von Materialien kann einen großen Anteil am gesamten Verbrauchswert ausmachen. Umgekehrt können viele preisgünstige Teile zusammen nur einen kleinen Wertanteil haben. Genau diese mögliche Konzentration macht die ABC-Analyse sichtbar.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Wertanteil eines Objekts',
            formula: 'Wertanteil = Einzelwert / Gesamtwert × 100',
            description: 'Einzelwert und Gesamtwert müssen auf derselben Definition und demselben Zeitraum beruhen.',
          },
          {
            label: 'Formel',
            title: 'Mengenanteil einer Klasse',
            formula: 'Mengenanteil = Anzahl der Objekte in der Klasse / Gesamtzahl der Objekte × 100',
            description: 'Der Mengenanteil wird erst nach der Klasseneinteilung für A, B und C zusammengefasst.',
          },
        ],
      },
      {
        heading: 'Typische Anwendungsbereiche',
        paragraphs: [
          'Bei Kunden kann nach Umsatz, Deckungsbeitrag oder einem nachvollziehbar definierten Kundenwert sortiert werden. Bei Produkten sind Umsatz, Ergebnisbeitrag oder Absatz mögliche Größen. Welche Größe sinnvoll ist, hängt von der konkreten Entscheidung ab.',
          'In Einkauf und Lager werden Materialien häufig nach ihrem jährlichen Verbrauchswert betrachtet. Dafür kann die Verbrauchsmenge mit dem Einstandspreis multipliziert werden. A-Materialien können eine engere Planung und Kontrolle rechtfertigen, während bei C-Materialien einfache und aufwandsarme Verfahren wichtiger sein können.',
        ],
      },
      {
        heading: 'ABC-Analyse Schritt für Schritt',
        paragraphs: ['Eine nachvollziehbare ABC-Analyse folgt einem einheitlichen Ablauf. Die einzelnen Schritte sollten dokumentiert werden, damit die Einteilung später geprüft und mit einer neuen Periode verglichen werden kann.'],
        list: [
          'Analyseziel, Objekte, Wertgröße und Zeitraum festlegen',
          'Wert jedes Objekts auf einer einheitlichen Datenbasis ermitteln',
          'Gesamtwert bilden und den Wertanteil je Objekt berechnen',
          'Objekte absteigend nach ihrem Wert oder ihrer Bedeutung sortieren',
          'Wertanteile von oben nach unten kumulieren',
          'sachgerechte Grenzen für A-, B- und C-Klasse festlegen',
          'Mengen- und Wertanteile der Klassen auswerten',
          'Maßnahmen ableiten und Einteilung regelmäßig überprüfen',
        ],
      },
      {
        heading: 'Beispiel: fünf Kunden nach Umsatz einteilen',
        paragraphs: [
          'Ein kleiner Betrieb analysiert fünf Kunden anhand des Jahresumsatzes. Die Werte werden absteigend sortiert und die Anteile kumuliert. Für dieses Beispiel legt der Betrieb A bis einschließlich 60 Prozent, B bis einschließlich 90 Prozent und C für den Rest fest. Diese Grenzen dienen nur der nachvollziehbaren Beispielrechnung.',
        ],
        exampleCards: [
          {
            title: 'Kundenumsätze sortieren und kumulieren',
            paragraphs: [
              'Die Umsätze betragen: Kunde Nord 60.000 €, Kunde West 20.000 €, Kunde Süd 10.000 €, Kunde Ost 6.000 € und Kunde Mitte 4.000 €. Der Gesamtumsatz beträgt 100.000 €. Damit entsprechen die Einzelanteile direkt 60 %, 20 %, 10 %, 6 % und 4 %.',
            ],
            effects: [
              'Kunde Nord: 60.000 € = 60 %; kumuliert 60 % → A',
              'Kunde West: 20.000 € = 20 %; kumuliert 80 % → B',
              'Kunde Süd: 10.000 € = 10 %; kumuliert 90 % → B',
              'Kunde Ost: 6.000 € = 6 %; kumuliert 96 % → C',
              'Kunde Mitte: 4.000 € = 4 %; kumuliert 100 % → C',
              'Ergebnis: 1 A-Kunde, 2 B-Kunden und 2 C-Kunden nach der für dieses Beispiel gewählten Regel',
            ],
          },
        ],
      },
      {
        heading: 'Klassen und Grenzen festlegen',
        paragraphs: [
          'In Lehrbeispielen werden A-Objekte häufig als wenige Positionen mit hohem kumuliertem Wertanteil, B-Objekte als mittlerer Bereich und C-Objekte als viele Positionen mit niedrigerem Wertanteil beschrieben. Dafür finden sich unterschiedliche Orientierungswerte, etwa ungefähr 70 bis 80 Prozent kumulierter Wert für A und weitere 15 bis 20 Prozent für B.',
          'Solche Werte sind keine verbindlichen Grenzen. Sie sollten an Verteilung, Analysezweck, Branche und mögliche Maßnahmen angepasst werden. Liegen mehrere Objekte dicht beieinander, kann eine starre Trennung sogar eine Genauigkeit vortäuschen, die in den Daten nicht vorhanden ist.',
        ],
      },
      {
        heading: 'Zusammenhang mit dem Pareto-Prinzip',
        paragraphs: [
          [
            'Das ',
            { type: 'link', href: '/wissen/pareto-prinzip', text: 'Pareto-Prinzip' },
            ' beschreibt die mögliche Beobachtung, dass wenige Ursachen einen großen Teil der Wirkung erzeugen. Die ABC-Analyse greift diese Idee auf und übersetzt sie in ein systematisches Vorgehen aus Sortierung, Kumulierung und Klasseneinteilung.',
          ],
          'Eine ABC-Verteilung muss aber nicht exakt dem Verhältnis 80/20 entsprechen. Sind die Werte gleichmäßig verteilt, entstehen weniger deutliche Klassen. Auch dieses Ergebnis ist nützlich, weil es zeigt, dass eine starke Konzentration gerade nicht vorliegt.',
        ],
      },
      {
        heading: 'Vorteile der ABC-Analyse',
        paragraphs: [
          'Die Analyse ist leicht nachvollziehbar, mit überschaubaren Daten umsetzbar und auf viele Fragestellungen übertragbar. Sie kann helfen, Kontrollaufwand, Bestandsplanung, Lieferantenmanagement oder Kundenbetreuung stärker am wirtschaftlichen Beitrag auszurichten.',
          'Durch regelmäßige Wiederholung werden Verschiebungen sichtbar. Ein früheres C-Objekt kann an Bedeutung gewinnen, während ein A-Objekt zurückfällt. Die Klassen sind deshalb Momentaufnahmen für den gewählten Zeitraum und keine dauerhaften Eigenschaften.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Die ABC-Analyse betrachtet grundsätzlich nur die gewählte Wertgröße. Lieferzeiten, Ausfallrisiken, strategische Bedeutung, Qualität oder gesetzliche Anforderungen können unberücksichtigt bleiben. Ein günstiges C-Material kann beispielsweise eine gesamte Produktion stoppen, wenn es fehlt.',
          'Bei Kunden sagt hoher Umsatz allein nichts über Gewinn, Zahlungsrisiko oder Betreuungsaufwand aus. Bei Lagerbeständen können schwankende Preise und Verbräuche das Ergebnis verändern. Für wichtige Entscheidungen sind deshalb ergänzende Kriterien und aktuelle Daten erforderlich.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die ABC-Analyse priorisiert Objekte anhand einer vorab definierten Wert- oder Bedeutungsgröße',
    'Objekte werden absteigend sortiert, ihre Anteile kumuliert und anschließend Klassen zugeordnet',
    'Mengenanteil und Wertanteil beschreiben unterschiedliche Bezugsgrößen',
    'Grenzen zwischen A, B und C sind Orientierungen und müssen zum Analysezweck passen',
    'Risiken, Abhängigkeiten und qualitative Bedeutung benötigen zusätzliche Kriterien',
  ],
  commonMistakes: [
    'Wertgröße und Analyseziel nicht eindeutig festlegen',
    'Umsatz ungeprüft mit Gewinn, Kundenwert oder strategischer Bedeutung gleichsetzen',
    'Daten aus unterschiedlichen Zeiträumen oder Definitionen gemeinsam verwenden',
    'vor dem Kumulieren nicht absteigend nach Wert sortieren',
    'typische Prozentgrenzen als universell verbindlich behandeln',
    'C-Objekte pauschal für unwichtig halten und Risiken oder Abhängigkeiten übersehen',
    'Klassen dauerhaft beibehalten, obwohl sich Preise, Mengen oder Bedeutung geändert haben',
  ],
  faqs: [
    {
      question: 'Was ist das Ziel einer ABC-Analyse?',
      answer: 'Sie macht unterschiedliche Wertbeiträge sichtbar und hilft, Aufmerksamkeit und Steuerungsaufwand gezielt zu priorisieren.',
    },
    {
      question: 'Wie werden A-, B- und C-Objekte gebildet?',
      answer: 'Die Objekte werden nach ihrem Wertbeitrag sortiert, die Anteile kumuliert und anhand begründeter Grenzen den drei Klassen zugeordnet.',
    },
    {
      question: 'Gibt es feste Prozentgrenzen für die Klassen?',
      answer: 'Nein. Orientierungswerte sind verbreitet, die sinnvollen Grenzen hängen aber von Datenverteilung, Zweck und geplanten Maßnahmen ab.',
    },
    {
      question: 'Was ist der Unterschied zwischen Mengen- und Wertanteil?',
      answer: 'Der Mengenanteil bezieht sich auf die Anzahl der Objekte, der Wertanteil auf ihren Beitrag zur gewählten Größe wie Umsatz oder Verbrauchswert.',
    },
    {
      question: 'Ist ein C-Objekt unwichtig?',
      answer: 'Nicht automatisch. Es hat nur einen niedrigen Beitrag zur gewählten Wertgröße und kann trotzdem für Prozesse, Risiken oder Kunden wichtig sein.',
    },
  ],
  related: ['pareto-prinzip', 'einkauf-verkauf', 'kennzahlen'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default abcAnalyse;
