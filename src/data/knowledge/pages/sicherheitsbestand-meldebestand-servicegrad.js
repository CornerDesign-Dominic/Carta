import { defaultDisclaimer } from '../shared.js';

const sicherheitsbestandMeldebestandServicegrad = {
  slug: 'sicherheitsbestand-meldebestand-servicegrad',
  category: 'Supply Chain & Logistik',
  title: 'Sicherheitsbestand, Meldebestand & Servicegrad',
  description: 'Sicherheitsbestand, Meldebestand und Servicegrad einfach erklärt: Bestände gegen Unsicherheit absichern und Kapitalbindung bewusst abwägen.',
  seo: {
    title: 'Sicherheitsbestand, Meldebestand & Servicegrad | Belege24',
    description: 'Erfahre, wie Sicherheitsbestand, Meldebestand, Wiederbeschaffungszeit und Servicegrad zusammenwirken und Fehlmengenrisiken begrenzen.',
    canonicalPath: '/wissen/sicherheitsbestand-meldebestand-servicegrad',
  },
  article: {
    intro: 'Sicherheitsbestand und Meldebestand helfen, Liefer- und Verbrauchsschwankungen abzufedern. Sie erhöhen die Lieferbereitschaft, binden aber Kapital und Lagerfläche – deshalb müssen sie zum tatsächlichen Risiko und Bedarf passen.',
    sections: [
      {
        heading: 'Meldebestand, Sicherheitsbestand und eiserne Reserve unterscheiden',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'sicherheitsbestand', text: 'Sicherheitsbestand' },
            ' ist eine geplante Reserve für unerwartete Schwankungen. Er soll zum Beispiel helfen, wenn der Verbrauch höher ist als erwartet oder eine Lieferung später eintrifft.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'meldebestand', text: 'Meldebestand' },
            ' ist die Bestandsgrenze, bei deren Erreichen eine Bestellung ausgelöst oder vorbereitet wird. Er berücksichtigt den erwarteten Verbrauch während der Wiederbeschaffungszeit und häufig zusätzlich eine Reserve.',
          ],
          [
            'Als ',
            { type: 'glossary', id: 'eiserne-reserve', text: 'eiserne Reserve' },
            ' wird in der Praxis häufig ein Bestandspuffer bezeichnet, der nicht für den normalen Verbrauch eingeplant ist. Auf dieser Seite wird er als Sicherheitsbestand verstanden; die betriebliche Definition sollte immer transparent sein.',
          ],
          'Die Begriffe werden in Unternehmen nicht immer gleich verwendet. Sicherheitsbestand und Mindestbestand sollten deshalb nicht pauschal gleichgesetzt werden. Auf dieser Seite bezeichnet Sicherheitsbestand die Reserve gegen Unsicherheit; die konkret hinterlegten Bestandsgrenzen und Regeln müssen im jeweiligen Prozess transparent sein.',
        ],
      },
      {
        heading: 'Wiederbeschaffungszeit und durchschnittlicher Verbrauch',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'wiederbeschaffungszeit', text: 'Wiederbeschaffungszeit' },
            ' ist die Zeit von der Auslösung einer Bestellung bis zur tatsächlichen Verfügbarkeit der Ware. Sie kann Lieferzeit, Bearbeitung, Transport, Wareneingang und Prüfung umfassen.',
          ],
          'Der durchschnittliche Verbrauch beschreibt, wie viel eines Artikels in einem Zeitraum üblicherweise benötigt wird. Er ist eine Planungsgröße, keine Zusage. Trend, Saison, Sonderaufträge und Ausreißer können ihn unpassend machen.',
          'Je länger oder unsicherer die Wiederbeschaffungszeit ist, desto stärker wirken sich Prognose- und Lieferabweichungen auf den benötigten Puffer aus. Ein Artikel mit kurzer, verlässlicher Lieferzeit braucht unter sonst gleichen Bedingungen oft weniger Reserve als ein schwer ersetzbarer Artikel mit langen Lieferwegen.',
        ],
      },
      {
        heading: 'Einfache Meldebestandslogik',
        paragraphs: [
          'Eine einfache Betrachtung setzt den Meldebestand aus dem erwarteten Verbrauch während der Wiederbeschaffungszeit und dem Sicherheitsbestand zusammen. Sie ist eine Orientierung und setzt voraus, dass Verbrauch und Lieferzeit plausibel geschätzt werden können.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Einfache Meldebestandsbetrachtung',
            formula: 'Meldebestand = Verbrauch während der Wiederbeschaffungszeit + Sicherheitsbestand',
            description: 'Der Verbrauch während der Wiederbeschaffungszeit ergibt sich aus durchschnittlichem Verbrauch und der erwarteten Zeit bis zur Verfügbarkeit. Bei starken Schwankungen braucht es passendere Daten, Szenarien oder zusätzliche Regeln.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Verpackungsmaterial rechtzeitig nachbestellen',
            paragraphs: [
              'Ein Händler verbraucht durchschnittlich 20 Kartons pro Arbeitstag. Die Wiederbeschaffungszeit beträgt fünf Arbeitstage. Als eiserne Reserve beziehungsweise Sicherheitsbestand sind 30 Kartons vorgesehen.',
              'Während der Wiederbeschaffungszeit werden voraussichtlich 20 × 5 = 100 Kartons benötigt. Zusammen mit 30 Kartons eiserner Reserve ergibt sich ein Meldebestand von 130 Kartons. Beim Erreichen dieses Werts wird die Bestellung ausgelöst oder vorbereitet.',
            ],
            effects: [
              'Erwarteter Verbrauch bis zur Lieferung: 100 Kartons.',
              'Sicherheitsbestand: 30 Kartons.',
              'Meldebestand: 130 Kartons.',
            ],
          },
        ],
      },
      {
        heading: 'Servicegrad, Lieferbereitschaft und Fehlmengenrisiko',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'servicegrad', text: 'Servicegrad' },
            ' beschreibt vereinfacht, mit welcher Wahrscheinlichkeit oder in welchem Umfang ein Bedarf ohne Fehlmenge bedient werden soll. Die genaue Berechnung und Definition kann je nach Unternehmen und Artikel variieren.',
          ],
          'Ein höherer angestrebter Servicegrad bedeutet in der Regel: Fehlmengen sollen seltener auftreten. Bei gleicher Unsicherheit erfordert das meist einen höheren Sicherheitsbestand oder andere Maßnahmen wie kürzere Lieferzeiten, verlässliche Alternativquellen oder schnellere Reaktion.',
          'Der Servicegrad ist kein Selbstzweck. Für ein kritisches Ersatzteil kann eine hohe Lieferbereitschaft wichtiger sein als bei einem leicht ersetzbaren Verbrauchsartikel. Die Zielwerte sollten daher die Folgen einer Fehlmenge, Kosten und Kundenanforderungen berücksichtigen.',
        ],
      },
      {
        heading: 'Bestandssicherheit und Kapitalbindung abwägen',
        paragraphs: [
          'Mehr Sicherheitsbestand kann Versorgung stabilisieren, erhöht aber durchschnittlichen Lagerbestand, Kapitalbindung, Lagerkosten und bei manchen Artikeln das Risiko von Verderb oder Veralterung. Ein hoher Puffer löst außerdem keine grundlegenden Probleme wie schlechte Daten oder dauerhaft unzuverlässige Lieferanten.',
          'Nicht nur der Bestand kann die Sicherheit verbessern. Kürzere und verlässlichere Wiederbeschaffungszeiten, klarere Planungsdaten, passende Bestellverfahren oder zusätzliche Bezugsquellen können den notwendigen Puffer senken. Welche Maßnahme sinnvoll ist, hängt von Ursache und Kosten der Unsicherheit ab.',
          [
            'Die Seite ',
            { type: 'link', href: '/wissen/bedarfsprognose-forecasting', text: 'Bedarfsprognose & Forecasting' },
            ' erklärt, wie Prognosen und deren Fehler eingeordnet werden. ',
            { type: 'link', href: '/wissen/bestellpunktverfahren', text: 'Bestellpunktverfahren' },
            ' und ',
            { type: 'link', href: '/wissen/bestellrhythmusverfahren', text: 'Bestellrhythmusverfahren' },
            ' zeigen, wie Bestandsgrenzen beziehungsweise feste Prüfrhythmen Bestellungen auslösen.',
          ],
        ],
      },
      {
        heading: 'Daten und regelmäßige Überprüfung',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/bedarfsermittlung', text: 'Bedarfsermittlung' },
            ' liefert die Grundlage für erwartete Mengen. Für Bestandsgrenzen sind zusätzlich verlässliche Daten zu frei verfügbarem Bestand, offenen Zugängen, Lieferzeiten und Reservierungen nötig.',
          ],
          'Sicherheits- und Meldebestände sollten regelmäßig überprüft werden, besonders bei veränderten Lieferzeiten, Saison, neuen Produkten, anderen Mindestmengen oder wiederkehrenden Fehlmengen. Eine Grenze, die früher gepasst hat, kann bei einer neuen Versorgungslage zu hoch oder zu niedrig sein.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Sicherheitsbestand und Mindestbestand ohne klare Definition gleich zu verwenden. Die Regel sollte festhalten, welche Menge wofür reserviert ist und wann eine Bestellung ausgelöst wird.',
          'Auch ein hoher Sicherheitsbestand ist kein Ersatz für aktuelle Daten. Falsche Bestände, unrealistische Lieferzeiten oder unberücksichtigte Reservierungen können trotz großer Puffer zu Fehlmengen führen.',
          'Servicegrade sollten nicht pauschal für alle Artikel gleich gewählt werden. Die Folgen einer Fehlmenge, Lieferfähigkeit, Kapitalbindung und Lagerfähigkeit unterscheiden sich erheblich.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Sicherheitsbestand ist eine Reserve gegen unerwartete Verbrauchs- und Lieferabweichungen.',
    'Meldebestand löst eine Bestellung aus und deckt erwarteten Verbrauch während der Wiederbeschaffungszeit plus Reserve ab.',
    'Längere oder unsicherere Wiederbeschaffungszeiten erhöhen unter sonst gleichen Bedingungen den notwendigen Puffer.',
    'Ein höherer Servicegrad reduziert in der Regel Fehlmengenrisiken, erfordert aber häufig höhere Bestände oder andere Absicherungen.',
    'Mehr Bestand erhöht auch Kapitalbindung, Lagerkosten und bei manchen Artikeln Veralterungsrisiken.',
    'Definitionen, Daten und Bestandsgrenzen sollten zum Unternehmen transparent festgelegt und regelmäßig überprüft werden.',
  ],
  commonMistakes: [
    'Sicherheitsbestand und Mindestbestand ohne klare betriebliche Definition gleichsetzen',
    'Meldebestände trotz veränderter Lieferzeit, Verbrauch oder Reservierungen nicht aktualisieren',
    'physischen Bestand statt frei verfügbarer Menge für die Planung verwenden',
    'hohen Sicherheitsbestand als Ersatz für schlechte Daten oder unzuverlässige Lieferprozesse einsetzen',
    'für alle Artikel denselben Servicegrad unabhängig von Fehlmengenfolgen und Kapitalbindung festlegen',
  ],
  faqs: [
    {
      question: 'Was ist Sicherheitsbestand?',
      answer: 'Er ist eine geplante Reserve, die Verbrauchs- oder Lieferabweichungen abfedern soll.',
    },
    {
      question: 'Was ist der Unterschied zwischen Sicherheits- und Meldebestand?',
      answer: 'Sicherheitsbestand ist die Reserve gegen Unsicherheit. Meldebestand ist die Grenze, bei der eine Bestellung ausgelöst wird, damit Verbrauch und Reserve bis zur Lieferung gedeckt sind.',
    },
    {
      question: 'Was bedeutet Wiederbeschaffungszeit?',
      answer: 'Sie beschreibt die Zeit von der Auslösung einer Bestellung bis zur tatsächlichen Verfügbarkeit der Ware.',
    },
    {
      question: 'Warum erfordert ein höherer Servicegrad meist mehr Bestand?',
      answer: 'Damit Fehlmengen trotz unsicherem Bedarf oder Lieferzeit seltener auftreten, wird häufig ein größerer Puffer benötigt. Alternativ können Unsicherheiten durch andere Maßnahmen reduziert werden.',
    },
    {
      question: 'Ist Sicherheitsbestand dasselbe wie Mindestbestand?',
      answer: 'Nicht zwingend. Begriffe und Bestandsregeln werden je nach Unternehmen unterschiedlich verwendet. Deshalb sollte die verwendete Definition im jeweiligen Prozess klar sein.',
    },
  ],
  related: [
    'bestellverfahren',
    'bestellpunktverfahren',
    'bestellrhythmusverfahren',
    'bedarfsprognose-forecasting',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default sicherheitsbestandMeldebestandServicegrad;
