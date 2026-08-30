import { defaultDisclaimer } from '../shared.js';

const bestellverfahren = {
  slug: 'bestellverfahren',
  category: 'Supply Chain & Logistik',
  title: 'Bestellverfahren',
  description: 'Bestellverfahren einfach erklärt: Bestellpunkt-, Bestellrhythmus- und Min-Max-Verfahren für die praktische Lager- und Beschaffungssteuerung.',
  seo: {
    title: 'Bestellverfahren einfach erklärt | Belege24',
    description: 'Verstehe Bestellpunkt-, Bestellrhythmus- und Min-Max-Verfahren, Bestandsüberwachung sowie die Rolle von Melde-, Sicherheits- und Höchstbestand.',
    canonicalPath: '/wissen/bestellverfahren',
  },
  article: {
    intro: 'Bestellverfahren legen fest, wann eine Bestellung ausgelöst wird und wie ihre Menge bestimmt wird. Sie helfen, Versorgung und Bestände zu steuern, ohne bei jedem Artikel ständig neu entscheiden zu müssen.',
    sections: [
      {
        heading: 'Zweck von Bestellverfahren',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'bestellverfahren', text: 'Bestellverfahren' },
            ' verbindet Bedarf, Bestand und Lieferzeit mit einer festen Regel für Nachbestellungen. Ziel ist, Fehlmengen zu vermeiden und zugleich unnötig hohe Bestände zu begrenzen.',
          ],
          'Die passende Regel hängt vom Artikel ab: Wie regelmäßig ist der Verbrauch? Wie lang und unsicher ist die Lieferzeit? Wie kritisch wäre ein Ausfall? Welche Bestell- und Lagerkosten entstehen? Für alle Güter dieselbe Regel zu verwenden, ist selten sinnvoll.',
        ],
      },
      {
        heading: 'Wichtige Bestandsgrößen',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'meldebestand', text: 'Meldebestand' },
            ' ist die Bestandsgrenze, bei deren Erreichen eine Bestellung ausgelöst oder vorbereitet wird. Er soll den erwarteten Verbrauch bis zum Eintreffen der Lieferung abdecken.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'sicherheitsbestand', text: 'Sicherheitsbestand' },
            ' ist eine Reserve für unerwartete Verbrauchs- oder Lieferabweichungen. Er ist nicht frei für den normalen Bedarf eingeplant, sondern soll die Versorgung stabilisieren.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'hoechstbestand', text: 'Höchstbestand' },
            ' begrenzt den angestrebten Lagerbestand nach einer Auffüllung. Er kann helfen, Lagerplatz, Kapitalbindung oder Verderb im Blick zu behalten.',
          ],
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Vereinfachte Logik des Meldebestands',
            formula: 'Meldebestand = erwarteter Verbrauch während der Wiederbeschaffungszeit + Sicherheitsbestand',
            description: 'Die Formel setzt voraus, dass Verbrauch und Wiederbeschaffungszeit plausibel geschätzt werden können. Bei starken Schwankungen oder unzuverlässigen Lieferzeiten müssen Annahmen und Sicherheitsbestand regelmäßig überprüft werden.',
          },
        ],
      },
      {
        heading: 'Bestellpunktverfahren',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'bestellpunktverfahren', text: 'Bestellpunktverfahren' },
            ' wird der Bestand fortlaufend oder in kurzen Abständen überwacht. Sobald er den Meldebestand erreicht oder unterschreitet, wird eine Bestellung ausgelöst.',
          ],
          'Die Bestellmenge kann fest sein, etwa immer eine festgelegte Menge, oder variabel, etwa bis zu einem Zielbestand. Das Verfahren passt besonders zu wichtigen Artikeln mit schwankendem Verbrauch oder längerer Lieferzeit, wenn eine laufende Bestandsinformation verfügbar ist.',
          'Vorteil ist die schnelle Reaktion auf Verbrauch. Nachteil ist der Aufwand für eine verlässliche, kontinuierliche Bestandsüberwachung und gepflegte Daten.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Verpackungsmaterial nachbestellen',
            paragraphs: [
              'Ein Händler verbraucht im Durchschnitt 20 Kartons pro Arbeitstag. Die Lieferzeit beträgt fünf Arbeitstage, der Sicherheitsbestand liegt bei 30 Kartons. Der vereinfachte Meldebestand beträgt 20 × 5 + 30 = 130 Kartons.',
              'Sobald der verfügbare Bestand 130 Kartons erreicht, wird die Bestellung ausgelöst. Ob dann stets 500 Kartons bestellt oder nur bis zu einem Zielbestand aufgefüllt wird, legt die Bestellmengenregel fest.',
            ],
            effects: [
              'Überwachung: kontinuierlich oder sehr häufig.',
              'Bestellzeitpunkt: beim Erreichen des Meldebestands.',
            ],
          },
        ],
      },
      {
        heading: 'Bestellrhythmusverfahren',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'bestellrhythmusverfahren', text: 'Bestellrhythmusverfahren' },
            ' wird der Bestand zu festen Terminen geprüft, etwa jeden Montag oder einmal im Monat. Die Bestellung wird dann in diesem Rhythmus ausgelöst, häufig mit einer variablen Menge bis zu einem festgelegten Zielbestand.',
          ],
          'Das Verfahren vereinfacht Planung, Bündelung und Abstimmung mit Lieferanten. Zwischen zwei Prüfterminen kann der Bestand jedoch stärker sinken. Deshalb müssen Bestellintervall, Lieferzeit und Sicherheitsbestand zusammenpassen.',
          'Es eignet sich eher für regelmäßig benötigte, weniger kritische Artikel mit ausreichend planbarem Verbrauch. Bei sehr kritischen Artikeln kann ein langer Prüfzyklus riskant sein.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Bürobedarf einmal pro Woche prüfen',
            paragraphs: [
              'Ein kleines Unternehmen prüft jeden Freitag den Bestand an Standard-Büromaterial. Für Papier und Stifte wird die Menge ermittelt, die bis zum vereinbarten Zielbestand fehlt.',
              'Die Bestellung wird gebündelt ausgelöst. Steigt der Verbrauch unerwartet stark, kann der Bestand vor dem nächsten Freitag zu niedrig werden. Das Unternehmen passt dann Prüfintervall oder Sicherheitsbestand an.',
            ],
            effects: [
              'Überwachung: periodisch, zum Beispiel wöchentlich.',
              'Bestellmenge: oft variabel bis zu einem Zielbestand.',
            ],
          },
        ],
      },
      {
        heading: 'Min-Max-Verfahren',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'min-max-verfahren', text: 'Min-Max-Verfahren' },
            ' arbeitet mit einer unteren Bestandsgrenze und einem oberen Zielwert. Erreicht oder unterschreitet der Bestand den festgelegten Mindest- oder Meldewert, wird eine Menge bestellt, die den Bestand wieder bis zum Höchstbestand auffüllt.',
          ],
          'Die Bestellmenge ist damit variabel: Sie ergibt sich aus dem Unterschied zwischen aktuellem verfügbarem Bestand und dem Zielbestand, ergänzt um Regeln für offene Bestellungen und erwarteten Verbrauch. Das Verfahren verbindet einen klaren Auslöser mit einer Begrenzung des Bestands nach der Lieferung.',
          'Es ist übersichtlich, setzt aber gut gewählte Min- und Max-Werte voraus. Werden diese lange nicht überprüft, kann das Verfahren zu häufigen Bestellungen oder zu überhöhten Beständen führen.',
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: Reinigungsmittel bis zum Höchstbestand auffüllen',
            paragraphs: [
              'Für ein Reinigungsmittel liegt der Auslösewert bei 15 Kanistern, der Höchstbestand bei 50 Kanistern. Bei einer Prüfung sind noch 12 Kanister frei verfügbar und keine Zugänge offen.',
              'Das Verfahren löst eine Bestellung aus. Um bis zum Höchstbestand aufzufüllen, werden 50 − 12 = 38 Kanister bestellt. Lieferzeit und erwarteter Verbrauch müssen dabei zusätzlich berücksichtigt werden.',
            ],
            effects: [
              'Auslöser: Bestand liegt unter dem festgelegten Minimum.',
              'Bestellmenge: Differenz bis zum Höchstbestand, angepasst an offene Zugänge und Bedarf.',
            ],
          },
        ],
      },
      {
        heading: 'Verfahren vergleichen',
        paragraphs: [
          'Bestellpunkt und Min-Max reagieren auf eine Bestandsgrenze; der Bestellrhythmus folgt festen Prüfterminen. Bestellpunkt- und Bestellrhythmusverfahren können sowohl mit festen als auch mit variablen Mengen kombiniert werden. Min-Max ist ein praktischer Fall einer variablen Auffüllmenge.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Bestellpunkt vs. Bestellrhythmus vs. Min-Max',
            formula: 'Bestellpunkt: Bestand laufend prüfen → bei Meldebestand bestellen\nBestellrhythmus: Bestand zu festen Terminen prüfen → im Rhythmus bestellen\nMin-Max: bei unterem Wert auslösen → bis zum Höchstbestand auffüllen',
            description: 'Kontinuierliche Überwachung reagiert früher, benötigt aber bessere Bestandsdaten. Periodische Überwachung bündelt Prozesse, braucht jedoch ein passendes Intervall und ausreichend Reserve.',
          },
        ],
      },
      {
        heading: 'Zwei-Behälter-System kurz erklärt',
        paragraphs: [
          'Das Zwei-Behälter-System ist eine einfache visuelle Variante für kleinere, regelmäßig benötigte Verbrauchsartikel. Ein Behälter wird verbraucht; sobald der zweite angebrochen wird, dient der erste als Signal zur Nachbestellung.',
          'Es kann ohne komplexe Software funktionieren, eignet sich aber nur, wenn Mengen, Verbrauch und Lieferzeit ausreichend überschaubar sind. Auch hier muss die Reserve im zweiten Behälter zur tatsächlichen Wiederbeschaffungszeit passen.',
        ],
      },
      {
        heading: 'Zusammenhang mit Bedarf und Bestellmenge',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/bedarfsermittlung', text: 'Bedarfsermittlung' },
            ' liefert eine Grundlage für Verbrauch, Planmengen und Zielbestände. Die ',
            { type: 'link', href: '/wissen/optimale-bestellmenge', text: 'optimale Bestellmenge' },
            ' kann bei gleichmäßigem Bedarf eine rechnerische Orientierung für die Bestellgröße geben.',
          ],
          'Kanban ist ein weiterführender Ansatz zur verbrauchs- und signalgesteuerten Nachschubsteuerung. Unabhängig vom verwendeten Verfahren sind aktuelle Bestandsdaten, realistische Lieferzeiten und eine regelmäßige Überprüfung der Parameter entscheidend.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Melde-, Sicherheits- und Höchstbestand einmal festzulegen und dann nicht mehr anzupassen. Verbrauch, Lieferzeit, Risiko und Lagerkapazität verändern sich.',
          'Auch physischer Bestand ist nicht immer frei verfügbar. Reservierte, gesperrte, beschädigte oder bereits verplante Mengen dürfen nicht wie frei nutzbarer Bestand in die Regel eingehen.',
          'Eine fixe Bestellmenge oder ein langer Bestellrhythmus kann für einzelne Artikel praktisch sein, ist aber nicht automatisch wirtschaftlich oder versorgungssicher. Daten und Regeln sollten zur Bedeutung des Artikels passen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Bestellverfahren regeln, wann eine Bestellung ausgelöst und wie ihre Menge festgelegt wird.',
    'Bestellpunktverfahren überwachen Bestände laufend und lösen am Meldebestand aus.',
    'Bestellrhythmusverfahren prüfen Bestände in festen zeitlichen Abständen.',
    'Min-Max-Verfahren füllen bei einer Untergrenze bis zu einem Höchstbestand auf.',
    'Melde-, Sicherheits- und Höchstbestand müssen zu Verbrauch, Lieferzeit, Risiko und Lagerkapazität passen.',
    'Die passende Regel hängt vom Artikel ab und sollte regelmäßig überprüft werden.',
  ],
  commonMistakes: [
    'Bestandsgrenzen trotz veränderter Lieferzeit oder Verbrauch nicht aktualisieren',
    'physischen Bestand mit frei verfügbarem Bestand gleichsetzen',
    'Sicherheitsbestand als frei verfügbaren Normalbestand einplanen',
    'ein langes Prüfintervall für kritische Artikel ohne ausreichende Reserve verwenden',
    'fixe Bestellmengen ohne Prüfung von Bedarf, Lagerplatz und Lieferfähigkeit übernehmen',
  ],
  faqs: [
    {
      question: 'Was sind Bestellverfahren?',
      answer: 'Sie legen fest, wann Nachbestellungen ausgelöst und wie die jeweiligen Bestellmengen bestimmt werden.',
    },
    {
      question: 'Was ist der Unterschied zwischen Bestellpunkt und Bestellrhythmus?',
      answer: 'Beim Bestellpunktverfahren löst eine Bestandsgrenze die Bestellung aus. Beim Bestellrhythmusverfahren wird der Bestand zu festen Terminen geprüft und bestellt.',
    },
    {
      question: 'Was ist das Min-Max-Verfahren?',
      answer: 'Unterschreitet der Bestand einen unteren Wert, wird eine variable Menge bestellt, die den Bestand bis zu einem festgelegten Höchstbestand auffüllt.',
    },
    {
      question: 'Was ist ein Meldebestand?',
      answer: 'Er ist die Bestandsgrenze, bei deren Erreichen eine Bestellung ausgelöst oder vorbereitet wird, damit der Verbrauch bis zur Lieferung gedeckt bleibt.',
    },
    {
      question: 'Wann ist kontinuierliche Überwachung sinnvoll?',
      answer: 'Sie ist besonders für kritische oder stark schwankende Artikel sinnvoll, wenn aktuelle Bestandsdaten verfügbar sind und eine schnelle Reaktion wichtig ist.',
    },
  ],
  related: [
    'bedarfsermittlung',
    'methoden-bedarfsermittlung',
    'optimale-bestellmenge',
    'bestellkosten',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bestellverfahren;
