import { defaultDisclaimer } from '../shared.js';

const lieferantenkredit = {
  slug: 'lieferantenkredit',
  category: 'Finanzierung & Investition',
  title: 'Lieferantenkredit',
  description: 'Lieferantenkredit einfach erklärt: Zahlungsziel als Finanzierung, Skonto, implizite Kosten, Liquidität und der Unterschied zum Bankkredit.',
  seo: {
    title: 'Lieferantenkredit einfach erklärt | Belege24',
    description: 'Verstehe, wie ein Lieferantenkredit über das Zahlungsziel funktioniert, welche Rolle Skonto spielt und warum der Aufschub wirtschaftlich teuer sein kann.',
    canonicalPath: '/wissen/lieferantenkredit',
  },
  article: {
    intro: 'Ein Lieferantenkredit entsteht, wenn du eine Rechnung nicht sofort, sondern erst zum vereinbarten Zahlungsziel bezahlst. Er kann kurzfristig Liquidität sichern, hat aber je nach Skonto und Zahlungsbedingungen spürbare wirtschaftliche Kosten.',
    sections: [
      {
        heading: 'Was ist ein Lieferantenkredit?',
        paragraphs: [
          'Ein Lieferantenkredit ist eine kurzfristige Finanzierung durch den Lieferanten. Ware oder Leistung werden bereits geliefert, die Zahlung erfolgt aber erst später.',
          [
            'Bis zur Zahlung besteht aus Sicht des Kunden eine ',
            { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeit' },
            ' gegenüber dem Lieferanten. Das vereinbarte Zahlungsziel verschiebt den Zeitpunkt der Auszahlung und kann damit kurzfristig die Liquidität entlasten.',
          ],
        ],
      },
      {
        heading: 'Zahlungsziel als kurzfristige Finanzierung',
        paragraphs: [
          'Zahlungsziele sind im Geschäftsalltag üblich. Sie geben dem Kunden Zeit, die Rechnung zu prüfen, eigene Waren weiterzuverkaufen oder auf Kundenzahlungen zu warten. Wirtschaftlich nutzt der Kunde in dieser Zeit Kapital des Lieferanten.',
          'Der Lieferantenkredit ist meist nicht gesondert auszuzahlen oder zu beantragen. Seine Bedingungen stehen in der Rechnung, im Vertrag oder in den vereinbarten Zahlungsbedingungen.',
        ],
      },
      {
        heading: 'Zusammenhang mit Skonto',
        paragraphs: [
          'Skonto ist ein Preisnachlass, wenn eine Rechnung innerhalb einer kürzeren Frist bezahlt wird. Wer den Skontozeitraum nicht nutzt und erst später zahlt, behält zwar länger liquide Mittel, verzichtet aber auf den Nachlass.',
          'Das muss nicht immer falsch sein. Wenn Mittel knapp sind oder eine andere Zahlung wichtiger ist, kann das längere Zahlungsziel notwendig sein. Die Entscheidung sollte jedoch die tatsächlichen Finanzierungskosten, die Zahlungsfähigkeit und die Beziehung zum Lieferanten berücksichtigen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Skonto als vereinfachte Kreditkosten',
            formula: 'Kostensatz p.a. ≈ Skontosatz ÷ (100 − Skontosatz) × 360 ÷ Tage zwischen Skontofrist und Zahlungsziel × 100',
            description: 'Die Formel ist eine vereinfachte Annäherung mit 360 Tagen. Sie zeigt nur die Größenordnung der Kosten, wenn der Skonto nicht genutzt wird.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: 2 % Skonto bei 10 statt 30 Tagen',
            paragraphs: [
              'Eine Rechnung beträgt 10.000 Euro. Bei Zahlung innerhalb von 10 Tagen werden 2 % Skonto gewährt; ohne Skonto ist sie nach 30 Tagen fällig. Wer Skonto nutzt, zahlt 9.800 Euro. Wer erst nach 30 Tagen zahlt, verzichtet auf 200 Euro Nachlass.',
              'Für die zusätzlichen 20 Tage werden damit vereinfacht 200 Euro bezogen auf 9.800 Euro eingesetzt. Die Formel ergibt rund 36,7 % pro Jahr. Das ist kein verbindlicher Zinssatz, verdeutlicht aber, warum ein nicht genutzter Skonto wirtschaftlich teuer sein kann.',
            ],
          },
        ],
      },
      {
        heading: 'Lieferantenkredit und Bankkredit unterscheiden',
        paragraphs: [
          'Beim Lieferantenkredit entsteht der Aufschub direkt aus dem Einkauf und dem Zahlungsziel. Beim Bankkredit stellt ein Kreditinstitut Geld oder eine Kreditlinie bereit. Beide Formen können kurzfristige Finanzierung sein, unterscheiden sich aber bei Vertrag, Kosten, Flexibilität und Zahlungsablauf.',
          'Ein Bankkredit kann günstiger sein als der Verzicht auf einen hohen Skonto, muss aber beantragt werden und verursacht ebenfalls Zinsen oder Gebühren. Ein Vergleich sollte immer die konkreten Konditionen und die Dauer der Finanzierung einbeziehen.',
        ],
      },
      {
        heading: 'Vorteile und Nachteile',
        paragraphs: [
          'Der Lieferantenkredit ist unkompliziert und kann Zahlungszeitpunkte an den eigenen Geschäftsablauf anpassen. Er hilft besonders, wenn Einzahlungen und Auszahlungen zeitlich auseinanderfallen.',
          'Nachteilig ist, dass Skonto verloren gehen kann und der Aufschub dadurch teurer wird als andere Finanzierungsformen. Zudem belasten offene Rechnungen den Überblick über fällige Zahlungen und können die Zusammenarbeit mit Lieferanten beeinträchtigen, wenn Zahlungsziele wiederholt überschritten werden.',
        ],
      },
      {
        heading: 'Bedeutung für die Liquiditätsplanung',
        paragraphs: [
          [
            'Ein Zahlungsziel verändert den Zeitpunkt der Auszahlung, nicht die Höhe der Rechnung. Für die ',
            { type: 'glossary', id: 'liquiditaet', text: 'Liquidität' },
            ' musst du deshalb Skontofrist, reguläres Zahlungsziel und erwartete Kundenzahlungen im gleichen Plan berücksichtigen.',
          ],
          'So wird sichtbar, ob Skonto aus eigenen Mitteln bezahlt werden kann oder ob der spätere Zahlungstermin wirtschaftlich sinnvoller ist. Offene Lieferantenrechnungen sollten dabei nicht nur einzeln, sondern im Zusammenhang mit allen fälligen Verpflichtungen betrachtet werden.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Zahle Rechnungen nicht pauschal immer zum letzten Tag oder immer innerhalb der Skontofrist. Beide Entscheidungen brauchen einen Blick auf verfügbare Mittel, Kosten und die tatsächlichen Zahlungsbedingungen.',
          'Verwechsle Skonto nicht mit Rabatt: Skonto hängt an der Zahlungsfrist, Rabatt wird in der Regel bereits bei der Preisvereinbarung berücksichtigt. Dokumentiere außerdem Fälligkeiten und Skontofristen so, dass keine unnötigen Kosten oder Mahnungen entstehen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein Lieferantenkredit entsteht durch die spätere Zahlung einer erhaltenen Rechnung.',
    'Das Zahlungsziel verschiebt die Auszahlung und kann kurzfristig die Liquidität entlasten.',
    'Nicht genutzter Skonto kann wirtschaftlich hohe implizite Kreditkosten verursachen.',
    'Ob Skonto genutzt wird, hängt von Liquidität, Finanzierungskosten und Zahlungsbedingungen ab.',
    'Lieferantenkredit und Bankkredit unterscheiden sich bei Ablauf, Vertrag und Kosten.',
    'Skonto- und Zahlungsfristen gehören in die Liquiditätsplanung.',
  ],
  commonMistakes: [
    'Skonto automatisch immer oder nie nutzen.',
    'die Tage zwischen Skontofrist und regulärem Zahlungsziel nicht berücksichtigen.',
    'Skonto und Rabatt gleichsetzen.',
    'offene Lieferantenrechnungen nicht in die Liquiditätsplanung aufnehmen.',
    'nur auf den Rechnungsbetrag statt auf die Finanzierungskosten des Zahlungsaufschubs schauen.',
    'reguläres Zahlungsziel und Überschreitung des Zahlungsziels verwechseln.',
  ],
  faqs: [
    {
      question: 'Was ist ein Lieferantenkredit einfach erklärt?',
      answer: 'Du erhältst Ware oder Leistung sofort, bezahlst die Rechnung aber erst später innerhalb des vereinbarten Zahlungsziels. Der Lieferant überlässt dir damit kurzfristig Kapital.',
    },
    {
      question: 'Ist ein Zahlungsziel eine Finanzierung?',
      answer: 'Es kann wirtschaftlich wie eine kurzfristige Finanzierung wirken, weil die Auszahlung erst später erfolgt. Die Bedingungen ergeben sich aus Rechnung oder Vertrag.',
    },
    {
      question: 'Muss ich Skonto immer nutzen?',
      answer: 'Nein. Skonto kann wirtschaftlich attraktiv sein, aber die Entscheidung hängt auch von verfügbarer Liquidität und Alternativkosten der Finanzierung ab.',
    },
    {
      question: 'Warum kann nicht genutzter Skonto teuer sein?',
      answer: 'Du verzichtest auf einen Preisnachlass für einen meist kurzen zusätzlichen Zahlungsaufschub. Auf ein Jahr hochgerechnet kann daraus ein hoher vereinfachter Kostensatz entstehen.',
    },
    {
      question: 'Was ist der Unterschied zum Bankkredit?',
      answer: 'Der Lieferantenkredit entsteht über das Zahlungsziel einer Rechnung. Ein Bankkredit stellt Geld oder eine Kreditlinie durch ein Kreditinstitut bereit.',
    },
  ],
  related: [
    'finanzierung-investition',
    'fremdfinanzierung',
    'kontokorrentkredit',
    'liquiditaet-controlling',
    'einkauf-verkauf',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lieferantenkredit;
