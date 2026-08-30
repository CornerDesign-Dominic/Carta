import { defaultDisclaimer } from '../shared.js';

const dynamischeAmortisationsrechnung = {
  slug: 'dynamische-amortisationsrechnung',
  category: 'Finanzierung & Investition',
  title: 'Dynamische Amortisationsrechnung',
  description: 'Dynamische Amortisationsrechnung einfach erklärt: Rückflüsse abzinsen, Barwerte kumulieren und den Zeitpunkt der Kapitalrückzahlung bestimmen.',
  seo: {
    title: 'Dynamische Amortisationsrechnung erklärt | Belege24',
    description: 'Erfahre, wie du abgezinste Rückflüsse kumulierst, die dynamische Amortisationszeit bestimmst und sie richtig einordnest.',
    canonicalPath: '/wissen/dynamische-amortisationsrechnung',
  },
  article: {
    intro: 'Die dynamische Amortisationsrechnung zeigt, wann eine Anfangsinvestition durch abgezinste Rückflüsse rechnerisch gedeckt ist. Anders als die statische Methode berücksichtigt sie, dass spätere Zahlungen heute weniger wert sind als frühere.',
    sections: [
      {
        heading: 'Grundidee der dynamischen Amortisation',
        paragraphs: [
          [
            'Die dynamische Amortisationsrechnung fragt wie jede ',
            { type: 'glossary', id: 'amortisation', text: 'Amortisationsrechnung' },
            ', wann das eingesetzte Kapital zurückfließt. Sie rechnet künftige Rückflüsse jedoch zunächst auf ihren heutigen Wert zurück.',
          ],
          'Anschließend addierst du die abgezinsten Werte nacheinander. Der dynamische Amortisationszeitpunkt ist erreicht, sobald ihre Summe die Anfangsinvestition deckt.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Dynamische Amortisation bestimmen',
            formula: 'Rückflüsse abzinsen → Barwerte kumulieren → Amortisationszeitpunkt bestimmen',
            description: 'Alle Rückflüsse werden mit demselben Kalkulationszinssatz und den passenden Zeitpunkten auf heute zurückgerechnet.',
          },
        ],
      },
      {
        heading: 'Unterschied zur statischen Amortisationsrechnung',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/amortisationsrechnung', text: 'statische Amortisationsrechnung' },
            ' arbeitet meist mit durchschnittlichen, nicht abgezinsten Jahresrückflüssen. Sie ist schneller zu berechnen, behandelt aber eine Zahlung heute und eine Zahlung in einigen Jahren gleich.',
          ],
          'Die dynamische Variante berücksichtigt den Zeitwert des Geldes. Bei gleichem Rückfluss ist ihre Amortisationsdauer deshalb häufig länger als die statische, weil spätere Zahlungen einen niedrigeren heutigen Wert haben.',
        ],
      },
      {
        heading: 'Rückflüsse abzinsen und Barwerte kumulieren',
        paragraphs: [
          [
            'Jeder erwartete ',
            { type: 'glossary', id: 'rueckfluss', text: 'Rückfluss' },
            ' wird mit dem Kalkulationszinssatz abgezinst. Sein ',
            { type: 'glossary', id: 'barwert', text: 'Barwert' },
            ' zeigt, welchen Wert diese künftige Zahlung heute hat.',
          ],
          [
            'Die ',
            { type: 'glossary', id: 'abzinsung', text: 'Abzinsung' },
            ' erfolgt für jede Periode einzeln. Anschließend werden die Barwerte addiert, bis die Summe mindestens so hoch wie die Anfangsinvestition ist. Der Kalkulationszinssatz muss dabei nachvollziehbar gewählt und für alle Vergleichsalternativen gleich angewendet werden.',
          ],
        ],
      },
      {
        heading: 'Beispiel: Amortisation über mehrere Jahre',
        paragraphs: [
          'Eine Maschine benötigt heute eine Anfangsinvestition von 100.000 Euro. Sie erwartet Rückflüsse von 35.000 Euro im ersten, 40.000 Euro im zweiten und 45.000 Euro im dritten Jahr. Der Kalkulationszinssatz beträgt 8 Prozent.',
        ],
        exampleCards: [
          {
            title: 'Abgezinste Rückflüsse Schritt für Schritt',
            paragraphs: [
              'Jahr 1: 35.000 Euro ÷ 1,08 = 32.407 Euro. Kumuliert sind damit 32.407 Euro gedeckt.',
              'Jahr 2: 40.000 Euro ÷ 1,08² = 34.294 Euro. Kumuliert sind damit 66.701 Euro gedeckt.',
              'Jahr 3: 45.000 Euro ÷ 1,08³ = 35.722 Euro. Kumuliert ergeben sich 102.423 Euro.',
              'Die Anfangsinvestition ist damit im dritten Jahr gedeckt. Wenn sich der Rückfluss des dritten Jahres gleichmäßig verteilt, liegt der rechnerische Zeitpunkt bei etwa 2,93 Jahren. Fällt die Zahlung erst am Jahresende an, ist sie erst zum Ende des dritten Jahres gedeckt.',
            ],
            effects: [
              'Anfangsinvestition: 100.000 Euro',
              'Kumulierte Barwerte nach Jahr 2: 66.701 Euro',
              'Kumulierte Barwerte nach Jahr 3: 102.423 Euro',
              'Dynamische Amortisation: im dritten Jahr',
            ],
          },
        ],
      },
      {
        heading: 'Dynamische Amortisationszeit einordnen',
        paragraphs: [
          'Eine kürzere dynamische Amortisationszeit zeigt, dass das Kapital unter Berücksichtigung des Zeitwerts früher gedeckt wird. Das kann bei Unsicherheit und begrenzter Kapitalbindung ein hilfreicher Vergleichsaspekt sein.',
          'Eine längere Zeit ist jedoch kein automatisches Ausschlusskriterium. Eine Investition kann nach der Amortisation hohe Barwerte schaffen, strategisch wichtig sein oder eine bessere Qualität liefern. Eine pauschale Zielzeit gibt es nicht.',
        ],
      },
      {
        heading: 'Vergleich mit Kapitalwert und anderen Investitionen',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/kapitalwertmethode', text: 'Kapitalwertmethode' },
            ' nutzt dieselben abgezinsten Zahlungsreihen, berücksichtigt aber alle Zahlungen über die gesamte Laufzeit. Die dynamische Amortisation stoppt dagegen, sobald die Anfangsinvestition gedeckt ist.',
          ],
          'Bei vergleichbaren Alternativen kann die kürzere dynamische Amortisationszeit ein Vorteil sein. Sie sollte aber immer zusammen mit Kapitalwert, Liquidität, Risiko, Nutzungsdauer und strategischen Anforderungen bewertet werden.',
        ],
      },
      {
        heading: 'Grenzen und typische Fehler',
        paragraphs: [
          'Auch die dynamische Amortisationsrechnung ignoriert Rückflüsse nach dem Amortisationszeitpunkt. Sie kann damit langfristige Vorteile einer später stärker einzahlenden Investition unterschätzen.',
          'Typische Fehler sind ein nicht begründeter Kalkulationszinssatz, falsch zugeordnete Zahlungszeitpunkte, das Vermischen von Gewinn und Zahlung sowie die Annahme gleichmäßiger Rückflüsse ohne Grundlage. Bei unsicheren Zahlungsannahmen sind mehrere Szenarien sinnvoll.',
          [
            'Die Methode ist Teil der ',
            { type: 'link', href: '/wissen/dynamische-investitionsrechnung', text: 'dynamischen Investitionsrechnung' },
            '.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die dynamische Amortisation deckt die Anfangsinvestition mit abgezinsten Rückflüssen.',
    'Künftige Rückflüsse werden als Barwerte berechnet und kumuliert.',
    'Sie berücksichtigt den Zeitwert des Geldes, anders als die statische Amortisationsrechnung.',
    'Der Zeitpunkt ist erreicht, wenn kumulierte Barwerte die Anfangsinvestition decken.',
    'Eine kürzere dynamische Amortisationszeit ist ein Vergleichsaspekt, aber kein vollständiges Entscheidungsurteil.',
    'Rückflüsse nach dem Amortisationszeitpunkt bleiben auch hier unberücksichtigt.',
  ],
  commonMistakes: [
    'statische und dynamische Rückflüsse ohne Abzinsung vergleichen.',
    'einen nicht begründeten Kalkulationszinssatz verwenden.',
    'Gewinn, Abschreibung und tatsächliche Zahlungen ohne klare Abgrenzung vermischen.',
    'Zahlungszeitpunkte oder Restwerte falsch einer Periode zuordnen.',
    'Rückflüsse nach dem Amortisationszeitpunkt vollständig ausblenden.',
    'die kürzere Amortisationszeit automatisch als beste Gesamtentscheidung ansehen.',
  ],
  faqs: [
    {
      question: 'Was ist dynamische Amortisation einfach erklärt?',
      answer: 'Sie zeigt, wann eine Investition durch ihre auf heute abgezinsten Rückflüsse rechnerisch gedeckt ist.',
    },
    {
      question: 'Was ist der Unterschied zur statischen Amortisation?',
      answer: 'Die dynamische Methode berücksichtigt den Zeitwert des Geldes und rechnet künftige Rückflüsse zuerst ab. Die statische Methode arbeitet meist mit nicht abgezinsten Durchschnittswerten.',
    },
    {
      question: 'Wie bestimmt man den dynamischen Amortisationszeitpunkt?',
      answer: 'Du zinst die Rückflüsse jeder Periode ab und addierst ihre Barwerte, bis die Anfangsinvestition gedeckt ist.',
    },
    {
      question: 'Warum ist die dynamische Amortisationszeit häufig länger?',
      answer: 'Spätere Rückflüsse haben nach der Abzinsung einen geringeren heutigen Wert. Deshalb dauert es rechnerisch oft länger, bis die Anfangsinvestition gedeckt ist.',
    },
    {
      question: 'Ist die kürzere dynamische Amortisationszeit immer besser?',
      answer: 'Nein. Kapitalwert, Liquidität, Risiko, Nutzungsdauer und strategische Ziele können zu einer anderen Gesamtbewertung führen.',
    },
  ],
  related: [
    'dynamische-investitionsrechnung',
    'amortisationsrechnung',
    'kapitalwertmethode',
    'annuitaetenmethode',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default dynamischeAmortisationsrechnung;
