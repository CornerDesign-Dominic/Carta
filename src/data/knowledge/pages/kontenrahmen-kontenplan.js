import { defaultDisclaimer } from '../shared.js';

const kontenrahmenKontenplan = {
  slug: 'kontenrahmen-kontenplan',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Kontenrahmen & Kontenplan',
  description: 'Kontenrahmen und Kontenplan einfach erklärt: Kontenklassen, SKR03, SKR04 und wie Unternehmen passende Konten für ihre Buchführung auswählen.',
  seo: {
    title: 'Kontenrahmen & Kontenplan erklärt | Belege24',
    description: 'Verstehe den Unterschied zwischen Kontenrahmen und Kontenplan, SKR03 und SKR04 sowie die praktische Auswahl passender Buchhaltungskonten.',
    canonicalPath: '/wissen/kontenrahmen-kontenplan',
  },
  article: {
    intro: 'Ein Kontenrahmen gibt der Buchführung eine einheitliche Ordnung. Der Kontenplan ist die daraus abgeleitete, konkrete Auswahl der Konten, die ein Unternehmen im Alltag tatsächlich braucht.',
    sections: [
      {
        heading: 'Was ist ein Kontenrahmen?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'kontenrahmen', text: 'Kontenrahmen' },
            ' ist eine systematische Vorlage mit möglichen Buchhaltungskonten. Er ordnet Konten nach einem festen Schema, damit ähnliche Geschäftsvorfälle einheitlich erfasst werden können.',
          ],
          'Er enthält mehr Konten, als ein einzelnes Unternehmen normalerweise benötigt. Die Vorlage kann allgemein oder auf eine bestimmte Branche zugeschnitten sein. Sie schafft eine gemeinsame Sprache für Buchhaltung, Steuerberatung und Software, ohne selbst schon die Buchungen eines bestimmten Betriebs festzulegen.',
        ],
      },
      {
        heading: 'Was ist ein Kontenplan?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'kontenplan', text: 'Kontenplan' },
            ' ist die unternehmensindividuelle Auswahl aus einem Kontenrahmen. Er enthält nur die Konten, die für die tatsächlichen Geschäftsvorfälle eines Betriebs sinnvoll sind.',
          ],
          'Ein kleines Dienstleistungsunternehmen braucht zum Beispiel meist andere Konten als ein Handelsbetrieb mit Lager oder ein produzierendes Unternehmen. Ein Kontenplan darf deshalb schlank bleiben. Nicht jedes im Kontenrahmen vorhandene Konto muss angelegt oder bebucht werden.',
        ],
        formulaCards: [
          {
            title: 'Vom Standard zur Praxis',
            formula: 'Kontenrahmen → Auswahl passender Konten → individueller Kontenplan',
            description: 'Der Kontenrahmen ist die Vorlage; der Kontenplan ist die konkrete Arbeitsliste des Unternehmens.',
          },
        ],
      },
      {
        heading: 'Kontenklassen und Kontengruppen',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'kontenklasse', text: 'Kontenklasse' },
            ' fasst einen großen Bereich von Konten zusammen. Innerhalb der Kontenklasse folgen Kontengruppen, Untergruppen und einzelne Konten. Dadurch lässt sich schon an der Nummer und Einordnung erkennen, zu welchem Bereich ein Konto gehört.',
          ],
          'Die DATEV-Standardkontenrahmen arbeiten mit zehn Kontenklassen von 0 bis 9. Bei den mindestens vierstelligen Kontonummern steht die erste Ziffer für die Kontenklasse; die weiteren Ziffern verfeinern die Zuordnung bis zum Einzelkonto. Für den Alltag ist wichtiger, ein passendes Konto auszuwählen, als Nummern auswendig zu lernen.',
        ],
      },
      {
        heading: 'SKR03 und SKR04: zwei verbreitete DATEV-Kontenrahmen',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'skr03', text: 'SKR03' },
            ' und der ',
            { type: 'glossary', id: 'skr04', text: 'SKR04' },
            ' sind verbreitete DATEV-Standardkontenrahmen. Sie sind keine fertigen individuellen Kontenpläne, sondern Vorlagen, aus denen Unternehmen oder Steuerkanzleien einen passenden Kontenplan ableiten.',
          ],
          'Der grundlegende Unterschied liegt im Aufbau: SKR03 ist nach Geschäftsprozessen gegliedert, also nach Abläufen wie Leistungserstellung und Leistungsverwertung. SKR04 orientiert sich an der Gliederung des Jahresabschlusses mit Bilanz und GuV.',
          'Beide können denselben Geschäftsvorfall sachlich richtig abbilden. Weil die Konten in den Rahmen unterschiedlich angeordnet sind, kann für denselben Sachverhalt eine andere Kontonummer verwendet werden. Entscheidend ist die passende Kontenbezeichnung und Zuordnung, nicht die Nummer für sich allein.',
        ],
      },
      {
        heading: 'Wie ein Unternehmen seinen Kontenplan auswählt',
        paragraphs: [
          'Bei der Einrichtung wird geprüft, welche Vorgänge im Betrieb regelmäßig vorkommen: zum Beispiel Bank und Kasse, Kunden- und Lieferantenrechnungen, Miete, Software, Fahrzeuge, Waren, Löhne oder Umsätze. Dafür werden passende Konten aus dem gewählten Rahmen in den Kontenplan übernommen.',
          'Neue Konten sind sinnvoll, wenn sie Auswertungen verbessern oder eine gesetzlich erforderliche Trennung ermöglichen. Zu viele fast gleiche Konten machen die Buchführung dagegen unübersichtlich und erhöhen das Risiko falscher Zuordnungen.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Schlanker Kontenplan eines Beratungsbüros',
            paragraphs: [
              'Ein kleines Beratungsbüro arbeitet ohne Warenlager und ohne eigene Produktion. Es wählt aus dem Kontenrahmen unter anderem Konten für Bank, Forderungen, Verbindlichkeiten, Büromaterial, Software, Miete, Umsatzerlöse und Umsatzsteuer aus.',
              'Ein Konto für Wareneingang oder fertige Erzeugnisse wird nicht übernommen, weil solche Vorgänge dort nicht vorkommen.',
              'Kauft das Büro später ein Fahrzeug oder beschäftigt Personal, kann der Kontenplan um passende Konten ergänzt werden. Der Kontenrahmen bleibt dabei die geordnete Grundlage.',
            ],
            effects: [
              'Übersicht: Nur tatsächlich benötigte Konten erscheinen im laufenden Buchungsalltag.',
              'Auswertung: Wiederkehrende Kosten und Erlöse bleiben getrennt und nachvollziehbar.',
            ],
          },
        ],
      },
      {
        heading: 'Der Kontenplan ist keine Buchungsanweisung',
        paragraphs: [
          'Der Kontenplan sagt, welche Konten zur Verfügung stehen. Er entscheidet aber nicht allein, wie ein konkreter Beleg zu buchen ist. Dafür müssen der wirtschaftliche Inhalt des Geschäftsvorfalls, die betroffenen Konten und die Buchungsseiten geprüft werden.',
          'Die Seite zu doppelter Buchführung und Buchungssätzen zeigt, wie aus einem Beleg ein Buchungssatz entsteht. Die Seite zu Konten erklärt die Kontoarten und ihre Grundlogik. Der Kontenplan liefert dafür die passende Struktur und Kontenauswahl.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'SKR03 und SKR04 sind nicht zwei verschiedene Buchführungsmethoden. Sie unterscheiden sich vor allem in der Gliederung der Konten. Der gleiche Vorgang bleibt wirtschaftlich derselbe, auch wenn die Kontonummer abweicht.',
          'Ein Kontenrahmen ist nicht mit dem eigenen Kontenplan gleichzusetzen. Wer alle möglichen Konten übernimmt, schafft nicht automatisch eine bessere Buchführung.',
          'Kontonummern sollten nicht ohne Blick auf Kontenbezeichnung, Sachverhalt und verwendeten Rahmen übernommen werden. Für branchenspezifische Konten, steuerliche Sonderfälle oder Umstellungen ist fachliche Unterstützung sinnvoll.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein Kontenrahmen ist eine allgemeine, systematisch gegliederte Vorlage für Buchhaltungskonten.',
    'Ein Kontenplan ist die individuelle Auswahl der tatsächlich benötigten Konten eines Unternehmens.',
    'Kontenklassen, Kontengruppen und Einzelkonten schaffen eine feste Ordnung.',
    'SKR03 ist prozessorientiert, SKR04 orientiert sich an Bilanz und GuV.',
    'Der gleiche Geschäftsvorfall kann in SKR03 und SKR04 unterschiedliche Kontonummern haben.',
    'Ein Kontenplan ist ein Strukturwerkzeug, keine fertige Buchungsanweisung.',
  ],
  commonMistakes: [
    'Kontenrahmen und Kontenplan gleichsetzen',
    'alle verfügbaren Konten übernehmen, obwohl sie im Betrieb nicht gebraucht werden',
    'die Kontonummer ohne Blick auf Kontenbezeichnung und gewählten Rahmen übernehmen',
    'SKR03 und SKR04 für unterschiedliche Buchführungsmethoden halten',
    'einen Kontenplan als automatische Buchungsanweisung verstehen',
    'bei neuen Geschäftsvorfällen ohne Prüfung ein ähnliches, aber unpassendes Konto verwenden',
  ],
  faqs: [
    { question: 'Was ist der Unterschied zwischen Kontenrahmen und Kontenplan?', answer: 'Der Kontenrahmen ist eine allgemeine Vorlage mit möglichen Konten. Der Kontenplan ist die daraus abgeleitete Auswahl, die ein Unternehmen tatsächlich nutzt.' },
    { question: 'Was sind Kontenklassen?', answer: 'Kontenklassen sind die obersten Gliederungsbereiche eines Kontenrahmens. Sie werden weiter in Kontengruppen und Einzelkonten unterteilt.' },
    { question: 'Was ist der Unterschied zwischen SKR03 und SKR04?', answer: 'SKR03 ist nach Geschäftsprozessen gegliedert. SKR04 orientiert sich an Bilanz und GuV. Beide können denselben Geschäftsvorfall abbilden.' },
    { question: 'Warum haben SKR03 und SKR04 unterschiedliche Kontonummern?', answer: 'Die Konten sind in den beiden Rahmen unterschiedlich angeordnet. Deshalb kann derselbe Sachverhalt auf verschiedenen Nummern stehen.' },
    { question: 'Muss ein Unternehmen jedes Konto im Kontenrahmen nutzen?', answer: 'Nein. Der Kontenplan soll nur die Konten enthalten, die für die tatsächlichen Geschäftsvorfälle und Auswertungen des Unternehmens sinnvoll sind.' },
    { question: 'Ist ein Kontenplan eine Buchungsanweisung?', answer: 'Nein. Er stellt Konten bereit. Für die konkrete Buchung müssen Sachverhalt, Kontoart und Buchungsseite geprüft werden.' },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'konten',
    'doppelte-buchfuehrung',
  ],
  sources: [
    { label: 'DATEV – Standard-Kontenrahmen SKR03 und SKR04', url: 'https://www.datev.de/web/de/berufsgruppenuebergreifend/ratgeber/rechnungswesen/datev-standard-kontenrahmen' },
    { label: 'DATEV – Kontenplan mit SKR03 und SKR04', url: 'https://www.datev.de/web/de/berufsgruppenuebergreifend/ratgeber/rechnungswesen/kontenplan-buchhaltung-mit-skr03-skr04' },
    { label: 'DATEV – Kontenrahmen 2026', url: 'https://www.datev.de/web/de/berufsgruppenuebergreifend/service-und-support/wichtige-informationen-zum-jahreswechsel/jahreswechsel-rechnungswesen/anpassungen-in-den-programmen/DATEV-Kontenrahmen' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default kontenrahmenKontenplan;
