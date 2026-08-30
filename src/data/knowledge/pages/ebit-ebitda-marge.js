import { defaultDisclaimer } from '../shared.js';

const ebitEbitdaMarge = {
  slug: 'ebit-ebitda-marge',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'EBIT- & EBITDA-Marge',
  description: 'EBIT- und EBITDA-Marge einfach erklärt: operative Ergebnisse zum Umsatz ins Verhältnis setzen und Abschreibungen richtig einordnen.',
  seo: {
    title: 'EBIT- & EBITDA-Marge berechnen | Belege24',
    description: 'Erfahre, wie sich EBIT und EBITDA unterscheiden, wie beide Margen berechnet werden und warum Abschreibungen, Branche und Definition wichtig sind.',
    canonicalPath: '/wissen/ebit-ebitda-marge',
  },
  article: {
    intro: 'EBIT- und EBITDA-Marge setzen unterschiedliche operative Ergebnisgrößen ins Verhältnis zum Umsatz. Beide helfen, die operative Ertragskraft zu vergleichen, unterscheiden sich aber vor allem darin, ob Abschreibungen das verwendete Ergebnis bereits mindern.',
    sections: [
      {
        heading: 'Was sind EBIT und EBITDA?',
        paragraphs: [
          [
            { type: 'glossary', id: 'ebit', text: 'EBIT' },
            ' steht für „Earnings Before Interest and Taxes“, also Ergebnis vor Zinsen und Steuern. Es berücksichtigt grundsätzlich die operativen Erträge und Aufwendungen einschließlich Abschreibungen, bevor Finanzierungsergebnis und Ertragsteuern einbezogen werden.',
          ],
          [
            { type: 'glossary', id: 'ebitda', text: 'EBITDA' },
            ' steht für „Earnings Before Interest, Taxes, Depreciation and Amortization“. Zusätzlich zu Zinsen und Steuern werden damit Abschreibungen auf Sachanlagen und immaterielle Vermögenswerte vor der Ergebnisgröße ausgeklammert.',
          ],
          'EBIT und EBITDA sind nicht in jeder Auswertung identisch definiert. Bereinigte Werte können außerdem außergewöhnliche oder als nicht operativ eingeordnete Effekte ausschließen. Jede Analyse sollte deshalb die Herleitung offenlegen.',
        ],
      },
      {
        heading: 'Der Unterschied: Abschreibungen',
        paragraphs: [
          'Das EBITDA betrachtet das operative Ergebnis vor Abschreibungen. Das EBIT zieht Abschreibungen dagegen grundsätzlich als Aufwand ab. Bei positiven Abschreibungen liegt das EBITDA deshalb regelmäßig über dem EBIT, sofern beide Werte aus derselben Abgrenzung stammen.',
          'Abschreibungen verteilen oder erfassen Wertverzehr von Vermögenswerten. Sie lösen in der betrachteten Periode meist keinen entsprechenden neuen Mittelabfluss aus, sind wirtschaftlich aber nicht bedeutungslos: Anlagen müssen erhalten, ersetzt oder technisch erneuert werden. Gerade bei kapitalintensiven Unternehmen kann der Abstand zwischen EBITDA und EBIT groß sein.',
        ],
      },
      {
        heading: 'EBIT-Marge berechnen',
        paragraphs: [
          [
            'Die EBIT-Marge setzt das EBIT ins Verhältnis zum ',
            { type: 'glossary', id: 'umsatz', text: 'Umsatz' },
            '. Sie zeigt, welcher Anteil eines Euro Umsatz nach den im EBIT berücksichtigten operativen Kosten einschließlich Abschreibungen verbleibt, bevor Zinsen und Ertragsteuern einbezogen werden.',
          ],
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'EBIT-Marge',
            formula: 'EBIT-Marge = EBIT / Umsatz × 100',
            description: 'EBIT und Umsatz müssen denselben Zeitraum und dieselbe Unternehmensabgrenzung betreffen.',
          },
        ],
      },
      {
        heading: 'EBITDA-Marge berechnen',
        paragraphs: [
          [
            'Die EBITDA-Marge setzt das EBITDA ins Verhältnis zum Umsatz. Sie zeigt den operativen Ergebnisanteil vor Zinsen, Steuern und Abschreibungen. Wie jede ',
            { type: 'glossary', id: 'marge', text: 'Marge' },
            ' ist sie nur bei einheitlicher Definition sinnvoll vergleichbar.',
          ],
          'Weil Abschreibungen im EBITDA noch nicht abgezogen sind, ist die EBITDA-Marge bei derselben Datenbasis grundsätzlich höher als die EBIT-Marge, sofern Abschreibungen anfallen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'EBITDA-Marge',
            formula: 'EBITDA-Marge = EBITDA / Umsatz × 100',
            description: 'EBITDA und Umsatz müssen aus derselben Abgrenzung stammen; Bereinigungen sind gesondert zu kennzeichnen.',
          },
        ],
      },
      {
        heading: 'Gemeinsames Beispiel aus denselben Unternehmenszahlen',
        paragraphs: [
          'Die gemeinsame Berechnung macht sichtbar, wie Abschreibungen den Abstand zwischen beiden Margen erzeugen.',
        ],
        exampleCards: [
          {
            title: 'EBIT- und EBITDA-Marge vergleichen',
            paragraphs: [
              'Ein Unternehmen erzielt 1.000.000 Euro Umsatz. Die operativen Aufwendungen ohne Abschreibungen betragen 780.000 Euro. Abschreibungen auf Maschinen und Software betragen 70.000 Euro.',
              'EBITDA = 1.000.000 Euro − 780.000 Euro = 220.000 Euro. EBITDA-Marge = 220.000 Euro / 1.000.000 Euro × 100 = 22 Prozent.',
              'EBIT = 220.000 Euro − 70.000 Euro = 150.000 Euro. EBIT-Marge = 150.000 Euro / 1.000.000 Euro × 100 = 15 Prozent.',
              'Die Differenz von 7 Prozentpunkten entsteht im vereinfachten Beispiel durch die Abschreibungen. Daraus folgt noch keine Bewertung, welche Marge für eine konkrete Entscheidung geeigneter ist.',
            ],
            effects: [
              'Umsatz: 1.000.000 Euro',
              'Operative Aufwendungen ohne Abschreibungen: 780.000 Euro',
              'Abschreibungen: 70.000 Euro',
              'EBITDA-Marge: 220.000 Euro / 1.000.000 Euro × 100 = 22 Prozent',
              'EBIT-Marge: 150.000 Euro / 1.000.000 Euro × 100 = 15 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Welche Kosten sind berücksichtigt?',
        paragraphs: [
          'Beim EBITDA mindern grundsätzlich operative Kosten wie Material, Personal, Miete und weitere laufende Aufwendungen das Ergebnis, während Abschreibungen, Zinsen und Ertragsteuern noch nicht abgezogen werden. Die genaue Zuordnung einzelner Positionen kann je nach Darstellung und Definition abweichen.',
          'Beim EBIT werden zusätzlich Abschreibungen berücksichtigt. Zinsen und Ertragsteuern bleiben weiterhin außerhalb der Größe. Werden Ergebnisse um Sondereffekte bereinigt, muss erklärt werden, welche Aufwendungen oder Erträge entfernt wurden und warum.',
        ],
      },
      {
        heading: 'Margen interpretieren und vergleichen',
        paragraphs: [
          'Eine höhere Marge zeigt bei vergleichbarer Berechnung, dass ein größerer Anteil des Umsatzes als die jeweilige operative Ergebnisgröße verbleibt. Veränderungen können durch Preise, Absatz, Produktmix, laufende Kosten, Auslastung oder Abschreibungen entstehen.',
          'Im Zeitvergleich muss die Definition über alle Perioden gleich bleiben. Beim Unternehmensvergleich sind Geschäftsmodell, Größe, Rechnungslegung, Leasing- und Investitionsstruktur sowie Bereinigungen zu beachten. Ein Wert ist nicht allein deshalb besser, weil er höher ist.',
        ],
      },
      {
        heading: 'Warum Branchenunterschiede wichtig sind',
        paragraphs: [
          'Kapitalintensive Branchen benötigen häufig viele Maschinen, Anlagen oder Infrastruktur und weisen entsprechend hohe Abschreibungen auf. Dort können EBIT- und EBITDA-Marge deutlich auseinanderliegen. Dienstleistungsmodelle mit wenig bilanziertem Anlagevermögen können einen kleineren Abstand zeigen.',
          'Auch Wettbewerbsintensität, Materialeinsatz, Personalbedarf und typische Vertragsmodelle beeinflussen die Margen. Branchenwerte sind deshalb keine allgemeingültigen Zielwerte und müssen auf ausreichend vergleichbaren Daten beruhen.',
        ],
      },
      {
        heading: 'EBITDA ist kein Cashflow',
        paragraphs: [
          'EBITDA ist eine Ergebnisgröße, keine Zahlungsstromrechnung. Es berücksichtigt beispielsweise nicht automatisch Veränderungen von Forderungen, Vorräten und Verbindlichkeiten. Auch Investitionsauszahlungen, Tilgungen, Zinszahlungen und Steuern fehlen oder werden anders behandelt.',
          'Ein hohes EBITDA kann daher gleichzeitig mit einem schwachen operativen Cashflow auftreten, etwa wenn Kunden spät zahlen oder Vorräte stark aufgebaut werden. Für die Zahlungsanalyse ist die Kapitalflussrechnung beziehungsweise eine sauber definierte Cashflow-Auswertung erforderlich.',
        ],
      },
      {
        heading: 'Grenzen von EBIT und EBITDA',
        paragraphs: [
          'Beide Kennzahlen können durch Bilanzierungsentscheidungen, Aktivierungen, Rückstellungen, Bereinigungen und die Abgrenzung operativer Positionen beeinflusst werden. Sie zeigen weder Kapitalbedarf noch Verschuldung, Liquidität oder Wertschaffung für Eigentümer vollständig.',
          'Das EBITDA blendet zusätzlich den Wertverzehr langfristiger Vermögenswerte aus. Das erleichtert bestimmte operative Vergleiche, kann aber den tatsächlichen Investitionsbedarf eines kapitalintensiven Geschäfts verdecken. Beide Margen sollten deshalb mit Cashflow, Investitionen, Kapitalstruktur und weiteren Ergebnisgrößen kombiniert werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'EBIT ist das Ergebnis vor Zinsen und Steuern einschließlich Abschreibungen',
    'EBITDA liegt vor Zinsen, Steuern und Abschreibungen',
    'Beide Margen setzen die jeweilige Ergebnisgröße ins Verhältnis zum Umsatz',
    'Abschreibungen erklären bei gleicher Abgrenzung den Unterschied zwischen EBIT und EBITDA',
    'Branche, Rechnungslegung und Bereinigungen bestimmen die Vergleichbarkeit',
    'EBITDA ist keine Cashflow-Größe',
  ],
  commonMistakes: [
    'EBIT und EBITDA verwechseln',
    'EBIT oder EBITDA mit Gewinn nach Steuern gleichsetzen',
    'EBITDA als Cashflow oder verfügbares Geld interpretieren',
    'Ergebnis und Umsatz aus unterschiedlichen Zeiträumen verwenden',
    'bereinigte und unbereinigte Werte direkt vergleichen',
    'unterschiedliche Leasing-, Bilanzierungs- oder Abschreibungsmethoden ignorieren',
    'Investitionsbedarf und Kapitalbindung beim EBITDA ausblenden',
    'Branchenwerte als pauschale Zielwerte behandeln',
  ],
  faqs: [
    { question: 'Was ist EBIT?', answer: 'EBIT ist das Ergebnis vor Zinsen und Steuern. Operative Abschreibungen mindern diese Ergebnisgröße grundsätzlich bereits.' },
    { question: 'Was ist EBITDA?', answer: 'EBITDA ist das Ergebnis vor Zinsen, Steuern und Abschreibungen auf Sachanlagen sowie immaterielle Vermögenswerte.' },
    { question: 'Was ist der Unterschied zwischen EBIT und EBITDA?', answer: 'Das EBITDA liegt vor Abschreibungen, das EBIT nach Abschreibungen. Bei gleicher Abgrenzung erklären Abschreibungen grundsätzlich die Differenz.' },
    { question: 'Wie wird die EBIT-Marge berechnet?', answer: 'EBIT wird durch den Umsatz desselben Zeitraums geteilt und mit 100 multipliziert.' },
    { question: 'Ist EBITDA dasselbe wie Cashflow?', answer: 'Nein. EBITDA berücksichtigt unter anderem Veränderungen im Working Capital, Investitionsauszahlungen, Tilgungen und weitere Zahlungsströme nicht vollständig.' },
  ],
  related: ['umsatzrentabilitaet', 'cashflow', 'zinsdeckungsgrad'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default ebitEbitdaMarge;
