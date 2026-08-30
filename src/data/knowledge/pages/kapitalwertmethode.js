import { defaultDisclaimer } from '../shared.js';

const kapitalwertmethode = {
  slug: 'kapitalwertmethode',
  category: 'Finanzierung & Investition',
  title: 'Kapitalwertmethode',
  description: 'Kapitalwertmethode einfach erklärt: Zahlungen abzinsen, Kapitalwert berechnen und Investitionsalternativen über mehrere Perioden vergleichen.',
  seo: {
    title: 'Kapitalwertmethode einfach erklärt | Belege24',
    description: 'Erfahre, wie du Ein- und Auszahlungen abzinst, den Kapitalwert einer Investition berechnest und positive oder negative Werte richtig einordnest.',
    canonicalPath: '/wissen/kapitalwertmethode',
  },
  article: {
    intro: 'Die Kapitalwertmethode bewertet eine Investition anhand ihrer Ein- und Auszahlungen über mehrere Zeitpunkte. Sie rechnet künftige Zahlungen mit einem Kalkulationszinssatz auf ihren heutigen Wert zurück und berücksichtigt damit den Zeitwert des Geldes.',
    sections: [
      {
        heading: 'Was ist der Kapitalwert?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'kapitalwert', text: 'Kapitalwert' },
            ' ist die Differenz zwischen der Anfangsinvestition und den auf heute abgezinsten künftigen Nettozahlungen einer Investition.',
          ],
          'Anders als statische Verfahren betrachtet die Kapitalwertmethode nicht nur Durchschnittswerte je Jahr. Sie berücksichtigt, wann Einzahlungen und Auszahlungen tatsächlich erwartet werden. Eine Zahlung heute und derselbe Betrag in drei Jahren haben daher nicht denselben Wert.',
        ],
      },
      {
        heading: 'Zeitwert des Geldes und Abzinsung',
        paragraphs: [
          'Geld, das heute verfügbar ist, kann angelegt werden, Zinsen erwirtschaften oder Finanzierungskosten vermeiden. Deshalb werden künftige Zahlungen auf einen heutigen Vergleichswert zurückgerechnet.',
          [
            'Dieser heutige Vergleichswert heißt ',
            { type: 'glossary', id: 'barwert', text: 'Barwert' },
            '. Die Rückrechnung wird ',
            { type: 'glossary', id: 'abzinsung', text: 'Abzinsung' },
            ' genannt. Die Grundlagen zu Zinsen und Zinseszins erklärt Belege24 auf den Seiten ',
            { type: 'link', href: '/wissen/zinsen', text: 'Zinsen' },
            ' und ',
            { type: 'link', href: '/wissen/zinseszins', text: 'Zinseszins' },
            '.',
          ],
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Barwert einer künftigen Zahlung',
            formula: 'Barwert = Zahlung ÷ (1 + i)^t',
            description: 'i ist der Kalkulationszinssatz als Dezimalzahl, t die Anzahl der Perioden bis zur Zahlung. Bei 8 % verwendest du für i den Wert 0,08.',
          },
        ],
      },
      {
        heading: 'Kalkulationszinssatz sorgfältig wählen',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'kalkulationszinssatz', text: 'Kalkulationszinssatz' },
            ' ist der Maßstab, mit dem du künftige Zahlungen abzinzt. Er kann sich zum Beispiel an Finanzierungskosten, einer Mindestverzinsung, Alternativanlagen und dem Risiko der Investition orientieren.',
          ],
          'Er ist keine beliebige Zahl: Ein höherer Zinssatz verringert den Barwert späterer Zahlungen und kann das Ergebnis deutlich verändern. Zahlungsannahmen und Zinssatz sollten deshalb nachvollziehbar begründet, zueinander passend und für alle Alternativen gleich angewendet werden.',
        ],
      },
      {
        heading: 'Kapitalwert über mehrere Perioden berechnen',
        paragraphs: [
          'Zunächst setzt du die Anfangsinvestition zum Zeitpunkt null an. Danach rechnest du die Nettozahlungen jeder künftigen Periode einzeln ab und addierst ihre Barwerte. Nettozahlung bedeutet hier: erwartete Einzahlungen minus erwartete Auszahlungen einer Periode.',
          [
            'Ein erwarteter ',
            { type: 'glossary', id: 'restwert', text: 'Restwert' },
            ' kann als zusätzliche Zahlung in der letzten Periode berücksichtigt werden. Er darf nicht zusätzlich angesetzt werden, wenn er bereits in der letzten Nettozahlung enthalten ist.',
          ],
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Kapitalwert über mehrere Perioden',
            formula: 'Kapitalwert = −Anfangsinvestition + Σ [Nettozahlungₜ ÷ (1 + i)^t]',
            description: 'Die Summe umfasst alle erwarteten Perioden. Einen Restwert addierst du nur dann als eigene abgezinste Zahlung, wenn er nicht bereits in der letzten Nettozahlung enthalten ist.',
          },
        ],
      },
      {
        heading: 'Beispiel: Investition über drei Jahre',
        paragraphs: [
          'Ein Unternehmen prüft eine Maschine mit einer Anfangsinvestition von 100.000 Euro. Es erwartet Nettozahlungen von 40.000 Euro im ersten, 45.000 Euro im zweiten und 50.000 Euro im dritten Jahr. Der Kalkulationszinssatz beträgt 8 Prozent. Ein Restwert ist in diesem Beispiel nicht angesetzt.',
        ],
        exampleCards: [
          {
            title: 'Zahlungen auf heute zurückrechnen',
            paragraphs: [
              'Barwert Jahr 1 = 40.000 Euro ÷ 1,08 = 37.037 Euro.',
              'Barwert Jahr 2 = 45.000 Euro ÷ 1,08² = 38.580 Euro. Barwert Jahr 3 = 50.000 Euro ÷ 1,08³ = 39.692 Euro.',
              'Kapitalwert = −100.000 Euro + 37.037 Euro + 38.580 Euro + 39.692 Euro = 15.309 Euro.',
              'Der Kapitalwert ist positiv. Nach den getroffenen Annahmen erzielt die Investition damit mehr als die mit 8 Prozent geforderte Verzinsung. Das Ergebnis hängt jedoch wesentlich von den Zahlungsprognosen und dem gewählten Zinssatz ab.',
            ],
            effects: [
              'Anfangsinvestition: 100.000 Euro',
              'Abgezinste Nettozahlungen: 115.309 Euro',
              'Kapitalwert: 15.309 Euro',
            ],
          },
        ],
      },
      {
        heading: 'Positiven, nullten und negativen Kapitalwert einordnen',
        paragraphs: [
          'Ein Kapitalwert über null bedeutet: Die abgezinsten erwarteten Nettozahlungen übersteigen die Anfangsinvestition. Nach dem verwendeten Kalkulationszinssatz erfüllt die Investition damit die angesetzte Mindestverzinsung und darüber hinaus einen Überschuss.',
          'Ein Kapitalwert von null bedeutet: Die Investition erreicht bei diesen Annahmen genau die geforderte Verzinsung. Ein negativer Kapitalwert bedeutet: Die abgezinsten Nettozahlungen reichen bei diesem Zinssatz nicht aus, um die Anfangsinvestition zu decken.',
          'Diese Aussagen gelten nur für die gewählten Zahlungsannahmen, Laufzeit, Restwert und den Kalkulationszinssatz. Sie sind keine Garantie für die tatsächliche wirtschaftliche Entwicklung.',
        ],
      },
      {
        heading: 'Mehrere Investitionen vergleichen',
        paragraphs: [
          'Bei sich ausschließenden Alternativen ist nach der Kapitalwertmethode grundsätzlich die Variante mit dem höheren Kapitalwert vorteilhaft – sofern Risiko, Laufzeit, Leistungsfähigkeit und Annahmen ausreichend vergleichbar sind.',
          'Unterschiedliche Größenordnungen, Kapitalbeschränkungen oder strategische Ziele können die Entscheidung verändern. Der höchste absolute Kapitalwert beantwortet nicht automatisch jede Frage zur Finanzierbarkeit, Auslastung oder Risikoverteilung.',
        ],
      },
      {
        heading: 'Grenzen und typische Fehler',
        paragraphs: [
          'Die Kapitalwertmethode ist nur so belastbar wie ihre Zahlungsprognosen, Laufzeitannahmen und der gewählte Zinssatz. Bei unsicheren Erlösen, Kosten oder Restwerten lohnt es sich, mehrere Szenarien zu rechnen.',
          'Typische Fehler sind ein nicht begründeter Zinssatz, das Vermischen nominaler und realer Werte, falsche Perioden oder das doppelte Erfassen des Restwerts. Auch Steuern, Finanzierung und Inflation müssen je nach Modell einheitlich berücksichtigt werden.',
          [
            'Die Kapitalwertmethode gehört zur ',
            { type: 'link', href: '/wissen/dynamische-investitionsrechnung', text: 'dynamischen Investitionsrechnung' },
            '. Weitere Verfahren wie die Annuitätenmethode werden dort ergänzt, sobald die jeweiligen Detailseiten verfügbar sind.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Kapitalwertmethode vergleicht Anfangsinvestition und abgezinste künftige Nettozahlungen.',
    'Sie berücksichtigt Zahlungszeitpunkte und damit den Zeitwert des Geldes.',
    'Der Kalkulationszinssatz beeinflusst den Kapitalwert wesentlich und braucht eine nachvollziehbare Grundlage.',
    'Ein positiver Kapitalwert erfüllt bei den Annahmen die geforderte Verzinsung und zeigt einen Überschuss.',
    'Restwerte dürfen nur einmal in der letzten Periode berücksichtigt werden.',
    'Für vergleichbare Alternativen ist grundsätzlich der höhere Kapitalwert vorteilhaft.',
  ],
  commonMistakes: [
    'den Kalkulationszinssatz ohne nachvollziehbare Grundlage wählen.',
    'Ein- und Auszahlungen aus falschen oder uneinheitlichen Perioden übernehmen.',
    'nominale Zahlungen mit einem realen Zinssatz oder umgekehrt kombinieren.',
    'den Restwert doppelt in der letzten Periode erfassen.',
    'einen positiven Kapitalwert als sichere Prognose verstehen.',
    'nur den Kapitalwert betrachten und Liquidität, Risiko oder strategische Anforderungen ausblenden.',
  ],
  faqs: [
    {
      question: 'Was ist der Kapitalwert einfach erklärt?',
      answer: 'Er zeigt die Differenz zwischen der Anfangsinvestition und den auf heute abgezinsten erwarteten Nettozahlungen einer Investition.',
    },
    {
      question: 'Was bedeutet ein positiver Kapitalwert?',
      answer: 'Bei den verwendeten Annahmen und dem Kalkulationszinssatz übersteigen die abgezinsten Nettozahlungen die Anfangsinvestition.',
    },
    {
      question: 'Warum wird bei der Kapitalwertmethode abgezinst?',
      answer: 'Weil eine Zahlung heute und dieselbe Zahlung in der Zukunft nicht denselben wirtschaftlichen Wert haben. Abzinsung macht sie zu einem heutigen Vergleichswert.',
    },
    {
      question: 'Wie wichtig ist der Kalkulationszinssatz?',
      answer: 'Sehr wichtig. Ein anderer Zinssatz kann den Kapitalwert deutlich verändern. Er sollte zur Finanzierung, Mindestverzinsung, Alternativen und zum Risiko passen.',
    },
    {
      question: 'Ist die Investition mit dem höchsten Kapitalwert immer die beste?',
      answer: 'Bei vergleichbaren, sich ausschließenden Alternativen ist sie nach dieser Methode grundsätzlich vorteilhaft. Liquidität, Risiko, Leistungsfähigkeit und strategische Ziele können trotzdem weitere Prüfungen erfordern.',
    },
  ],
  related: [
    'dynamische-investitionsrechnung',
    'zinsen',
    'zinseszins',
    'finanzierung-investition',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default kapitalwertmethode;
