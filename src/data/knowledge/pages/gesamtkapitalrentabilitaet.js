import { defaultDisclaimer } from '../shared.js';

const gesamtkapitalrentabilitaet = {
  slug: 'gesamtkapitalrentabilitaet',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Gesamtkapitalrentabilität',
  description: 'Gesamtkapitalrentabilität einfach erklärt: Gewinn, Fremdkapitalzinsen und Gesamtkapital passend abgrenzen, berechnen und vergleichen.',
  seo: {
    title: 'Gesamtkapitalrentabilität berechnen | Belege24',
    description: 'Erfahre, was die Gesamtkapitalrentabilität misst, warum Fremdkapitalzinsen berücksichtigt werden und wie du das Ergebnis richtig einordnest.',
    canonicalPath: '/wissen/gesamtkapitalrentabilitaet',
  },
  article: {
    intro: 'Die Gesamtkapitalrentabilität zeigt, welches Ergebnis ein Unternehmen mit seinem gesamten eingesetzten Kapital erzielt. Sie betrachtet Eigen- und Fremdkapital gemeinsam und macht damit die Ertragskraft grundsätzlich unabhängiger von der gewählten Finanzierung sichtbar.',
    sections: [
      {
        heading: 'Was misst die Gesamtkapitalrentabilität?',
        paragraphs: [
          [
            'Die Gesamtkapitalrentabilität ist eine ',
            { type: 'glossary', id: 'rentabilitaet', text: 'Rentabilitätskennzahl' },
            '. Sie setzt das Ergebnis, das den Kapitalgebern insgesamt zuzurechnen ist, ins Verhältnis zum gesamten Kapital des Unternehmens.',
          ],
          [
            'Zum Gesamtkapital gehören ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ' und ',
            { type: 'glossary', id: 'fremdkapital', text: 'Fremdkapital' },
            '. Beide Kapitalquellen finanzieren das Vermögen und werden deshalb für diese Kennzahl gemeinsam betrachtet.',
          ],
        ],
      },
      {
        heading: 'Gesamtkapitalrentabilität berechnen',
        paragraphs: [
          'Die typische Formel addiert die Fremdkapitalzinsen zum Gewinn. Der Gewinn ist bereits nach dem Zinsaufwand ermittelt und enthält damit nur den verbleibenden Erfolg für die Eigenkapitalgeber. Durch das Hinzurechnen der Fremdkapitalzinsen wird auch die Vergütung der Fremdkapitalgeber in den Zähler aufgenommen.',
          'Gewinn, Zinsen und Kapital müssen denselben Zeitraum und dieselbe Abgrenzung betreffen. Je nach Analyse können Ergebnisgrößen und steuerliche Effekte unterschiedlich behandelt werden. Die gewählte Methode sollte deshalb dokumentiert und bei Vergleichen beibehalten werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gesamtkapitalrentabilität',
            formula: 'Gesamtkapitalrentabilität = (Gewinn + Fremdkapitalzinsen) / Gesamtkapital × 100',
            description: 'Die Fremdkapitalzinsen werden hinzugerechnet, weil die Kennzahl die Verzinsung des von Eigen- und Fremdkapitalgebern bereitgestellten Kapitals gemeinsam betrachtet.',
          },
        ],
        exampleCards: [
          {
            title: 'Gesamtkapitalrentabilität eines Unternehmens',
            paragraphs: [
              'Ein Unternehmen erzielt in einem Geschäftsjahr einen Gewinn von 40.000 Euro. Im Gewinn wurden 10.000 Euro Fremdkapitalzinsen als Aufwand berücksichtigt. Das durchschnittliche Gesamtkapital beträgt 500.000 Euro.',
              'Gesamtkapitalrentabilität = (40.000 Euro + 10.000 Euro) / 500.000 Euro × 100 = 10 Prozent.',
              'Das gesamte eingesetzte Kapital hat im betrachteten Jahr damit rechnerisch eine Rendite von 10 Prozent erzielt. Ob der Wert angemessen ist, ergibt sich erst aus Zeit-, Plan- oder Branchenvergleichen und dem zugrunde liegenden Risiko.',
            ],
            effects: [
              'Gewinn: 40.000 Euro',
              'Fremdkapitalzinsen: 10.000 Euro',
              'Durchschnittliches Gesamtkapital: 500.000 Euro',
              'Vollständige Rechnung: (40.000 Euro + 10.000 Euro) / 500.000 Euro × 100 = 10 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Gesamtkapital und Bilanzsumme',
        paragraphs: [
          [
            'Das Gesamtkapital entspricht auf der Passivseite grundsätzlich der Summe aus Eigen- und Fremdkapital. Es entspricht damit auch der ',
            { type: 'glossary', id: 'bilanzsumme', text: 'Bilanzsumme' },
            '.',
          ],
          'Für eine Periodenkennzahl kann ein durchschnittliches Gesamtkapital aus Anfangs- und Endbestand aussagekräftiger sein als nur der Wert am Bilanzstichtag. Bei starken Veränderungen im Jahresverlauf können Monats- oder Quartalsdurchschnitte die Kapitalbasis genauer abbilden.',
        ],
      },
      {
        heading: 'Wie lässt sich der Wert interpretieren?',
        paragraphs: [
          'Ein höherer Wert zeigt bei vergleichbarer Berechnung mehr Ergebnis im Verhältnis zum gesamten Kapital. Ein niedriger oder negativer Wert kann aus schwachen Ergebnissen, hohen Kosten, viel gebundenem Kapital oder Verlusten entstehen.',
          'Daraus folgt kein allgemeiner Idealwert. Kapitalintensität, Geschäftsmodell, Risiko, Unternehmensphase und Branche beeinflussen die Kennzahl. Auch ein hoher Wert sollte auf Nachhaltigkeit und mögliche Sondereffekte geprüft werden.',
        ],
      },
      {
        heading: 'Unterschied zur Eigenkapitalrentabilität',
        paragraphs: [
          'Die Eigenkapitalrentabilität betrachtet nur den Gewinn im Verhältnis zum Eigenkapital. Sie richtet den Blick damit auf die rechnerische Verzinsung der Mittel der Eigentümer.',
          'Die Gesamtkapitalrentabilität bezieht zusätzlich Fremdkapital und dessen Zinsen ein. Sie eignet sich deshalb eher dazu, die Ertragskraft des gesamten Kapitaleinsatzes zu betrachten. Unterschiede zwischen beiden Kennzahlen können unter anderem durch die Finanzierungsstruktur und den Leverage-Effekt entstehen.',
        ],
      },
      {
        heading: 'Vergleich über Zeit und Branche',
        paragraphs: [
          'Im Zeitvergleich lässt sich erkennen, ob sich die Ertragskraft des Kapitaleinsatzes über mehrere Perioden verändert. Ein Plan-Ist-Vergleich zeigt Abweichungen von der erwarteten Entwicklung. Berechnungsmethode und Datenabgrenzung müssen dabei gleich bleiben.',
          'Branchenvergleiche sind nur sinnvoll, wenn Geschäftsmodelle, Kapitalintensität, Bilanzierungsgrundlagen und Zeiträume ausreichend vergleichbar sind. Ein Branchenwert ist keine pauschale Zielmarke für jedes Unternehmen.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Die Kennzahl zeigt weder die absolute Ergebnishöhe noch automatisch Liquidität, Risiko oder künftige Entwicklung. Bilanzierungs- und Bewertungsmethoden, einmalige Effekte sowie Veränderungen der Kapitalbasis können das Ergebnis beeinflussen.',
          'Außerdem können unterschiedliche Definitionen von Gewinn, Zinsen oder Gesamtkapital zu abweichenden Werten führen. Deshalb sollte die Gesamtkapitalrentabilität zusammen mit Eigenkapitalrentabilität, ROI, Kapitalstruktur und Liquiditätskennzahlen betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Gesamtkapitalrentabilität betrachtet Eigen- und Fremdkapital gemeinsam',
    'Fremdkapitalzinsen werden zum Gewinn addiert, um beide Kapitalgebergruppen einzubeziehen',
    'Das Gesamtkapital entspricht grundsätzlich der Bilanzsumme',
    'Ein durchschnittliches Gesamtkapital kann Veränderungen während des Zeitraums besser abbilden',
    'Zeit- und Branchenvergleiche brauchen eine einheitliche Berechnung',
    'Die Kennzahl ersetzt keine Analyse von Liquidität, Risiko und Kapitalstruktur',
  ],
  commonMistakes: [
    'Fremdkapitalzinsen nicht zum Gewinn hinzurechnen',
    'Gewinn, Zinsen und Kapital aus unterschiedlichen Zeiträumen kombinieren',
    'Stichtags- und Durchschnittskapital ohne Hinweis vergleichen',
    'Gesamtkapital mit Eigenkapital verwechseln',
    'Bilanzsumme mit Umsatz oder Gewinn gleichsetzen',
    'unterschiedliche Ergebnisdefinitionen direkt vergleichen',
    'einmalige Effekte und starke Kapitalveränderungen übersehen',
    'Branchenwerte als pauschale Idealwerte behandeln',
  ],
  faqs: [
    {
      question: 'Was sagt die Gesamtkapitalrentabilität aus?',
      answer: 'Sie zeigt, welches Ergebnis im Verhältnis zum gesamten von Eigen- und Fremdkapitalgebern bereitgestellten Kapital erzielt wurde.',
    },
    {
      question: 'Warum werden Fremdkapitalzinsen zum Gewinn addiert?',
      answer: 'Der Gewinn ist bereits nach Zinsaufwand ermittelt. Die Zinsen werden hinzugerechnet, damit auch die Vergütung der Fremdkapitalgeber im Ergebnis berücksichtigt wird.',
    },
    {
      question: 'Ist Gesamtkapital dasselbe wie Bilanzsumme?',
      answer: 'Grundsätzlich ja. Das Gesamtkapital aus Eigen- und Fremdkapital entspricht auf der Passivseite der Bilanzsumme.',
    },
    {
      question: 'Was ist der Unterschied zur Eigenkapitalrentabilität?',
      answer: 'Die Eigenkapitalrentabilität bezieht sich nur auf das Eigenkapital. Die Gesamtkapitalrentabilität betrachtet Eigen- und Fremdkapital gemeinsam.',
    },
    {
      question: 'Ist eine hohe Gesamtkapitalrentabilität immer gut?',
      answer: 'Nein. Der Wert muss im Zusammenhang mit Risiko, Kapitalintensität, Zeitraum, Branche und möglichen Sondereffekten beurteilt werden.',
    },
  ],
  related: [
    'eigenkapitalrentabilitaet',
    'roi',
    'eigenkapital-fremdkapital',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default gesamtkapitalrentabilitaet;
