import { defaultDisclaimer } from '../shared.js';

const eigenkapitalrentabilitaet = {
  slug: 'eigenkapitalrentabilitaet',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Eigenkapitalrentabilität',
  description: 'Eigenkapitalrentabilität einfach erklärt: Gewinn und Eigenkapital passend abgrenzen, berechnen und im Kontext interpretieren.',
  seo: {
    title: 'Eigenkapitalrentabilität berechnen | Belege24',
    description: 'Erfahre, was die Eigenkapitalrentabilität misst, wie du sie berechnest und warum Finanzierung, Zeitraum und Vergleichsmaßstab wichtig sind.',
    canonicalPath: '/wissen/eigenkapitalrentabilitaet',
  },
  article: {
    intro: 'Die Eigenkapitalrentabilität zeigt, welcher Gewinn im Verhältnis zum eingesetzten Eigenkapital erzielt wurde. Sie hilft Eigentümern und Unternehmen, die Verzinsung des Eigenkapitals einzuordnen, ist aber nur bei klarer Abgrenzung und im passenden Vergleich aussagekräftig.',
    sections: [
      {
        heading: 'Was misst die Eigenkapitalrentabilität?',
        paragraphs: [
          [
            'Die Eigenkapitalrentabilität ist eine ',
            { type: 'glossary', id: 'rentabilitaet', text: 'Rentabilitätskennzahl' },
            '. Sie setzt den Gewinn eines Zeitraums ins Verhältnis zum ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ', das für diesen Gewinn eingesetzt wurde.',
          ],
          'Das Ergebnis wird meist in Prozent angegeben. Es zeigt rechnerisch, wie viel Gewinn je 100 Euro Eigenkapital entstanden ist. Ob der Wert positiv zu beurteilen ist, hängt unter anderem von Risiko, Branche, Unternehmensphase, Zeitraum und Vergleichsmaßstab ab.',
        ],
      },
      {
        heading: 'Eigenkapitalrentabilität berechnen',
        paragraphs: [
          'Zähler und Nenner müssen sachlich und zeitlich zusammenpassen. Für eine Jahresanalyse wird häufig ein Jahresergebnis nach Steuern verwendet. Je nach Zweck kann stattdessen ein bereinigtes Ergebnis oder eine andere klar definierte Gewinngröße sinnvoll sein.',
          'Beim Eigenkapital kann der Stand am Periodenende verwendet werden. Aussagekräftiger kann ein durchschnittliches Eigenkapital aus Periodenanfang und Periodenende sein, besonders wenn sich das Kapital im Jahresverlauf deutlich verändert hat. Entscheidend ist, die gewählte Methode offenzulegen und bei Vergleichen beizubehalten.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Eigenkapitalrentabilität',
            formula: 'Eigenkapitalrentabilität = Gewinn / Eigenkapital × 100',
            description: 'Je nach Analyse werden eine passend definierte Gewinngröße und das Eigenkapital am Stichtag oder das durchschnittliche Eigenkapital des Zeitraums verwendet.',
          },
        ],
        exampleCards: [
          {
            title: 'Eigenkapitalrentabilität eines Geschäftsjahrs',
            paragraphs: [
              'Ein Unternehmen erzielt im Geschäftsjahr einen Gewinn von 30.000 Euro. Das durchschnittliche Eigenkapital beträgt 200.000 Euro. Beide Werte beziehen sich auf dasselbe Geschäftsjahr und dieselbe Abgrenzung.',
              'Eigenkapitalrentabilität = 30.000 Euro / 200.000 Euro × 100 = 15 Prozent.',
              'Rechnerisch wurden damit je 100 Euro durchschnittlichem Eigenkapital 15 Euro Gewinn erzielt. Ob das Ergebnis angemessen ist, lässt sich erst durch Vergleiche und unter Berücksichtigung des eingegangenen Risikos beurteilen.',
            ],
            effects: [
              'Gewinn: 30.000 Euro',
              'Durchschnittliches Eigenkapital: 200.000 Euro',
              'Vollständige Rechnung: 30.000 Euro / 200.000 Euro × 100 = 15 Prozent',
            ],
          },
        ],
      },
      {
        heading: 'Welche Gewinn- und Eigenkapitalgröße passt?',
        paragraphs: [
          'Die passende Gewinngröße richtet sich nach der Fragestellung. Für Eigentümer kann das Ergebnis nach Zinsen und Steuern relevant sein. Für einen internen Vergleich können bereinigte Ergebnisse helfen, außergewöhnliche oder einmalige Einflüsse getrennt sichtbar zu machen. Bereinigungen müssen nachvollziehbar begründet werden.',
          'Auch die Kapitalbasis beeinflusst das Ergebnis. Ein Stichtagswert ist leicht verfügbar, kann aber durch eine kurz vor dem Stichtag erfolgte Einlage oder Entnahme verzerrt sein. Ein Durchschnitt aus Anfangs- und Endbestand glättet solche Veränderungen nur vereinfacht; bei starken Schwankungen können genauere Monats- oder Quartalsdurchschnitte sinnvoll sein.',
        ],
      },
      {
        heading: 'Hohe und niedrige Werte interpretieren',
        paragraphs: [
          'Ein höherer Wert bedeutet innerhalb einer vergleichbaren Berechnung mehr Gewinn im Verhältnis zum Eigenkapital. Ein niedriger oder negativer Wert kann durch einen geringen Gewinn, einen Verlust oder eine im Verhältnis große Eigenkapitalbasis entstehen.',
          'Eine sehr hohe Eigenkapitalrentabilität ist nicht automatisch positiv. Sie kann zwar auf einen hohen Gewinn hindeuten, aber auch durch sehr wenig Eigenkapital entstehen. Dann können Verschuldung und finanzielles Risiko erhöht sein. Deshalb sollte die Kennzahl gemeinsam mit Kapitalstruktur, Liquidität und Ergebnisentwicklung gelesen werden.',
        ],
      },
      {
        heading: 'Fremdfinanzierung und Leverage',
        paragraphs: [
          [
            'Zusätzliches ',
            { type: 'glossary', id: 'fremdkapital', text: 'Fremdkapital' },
            ' kann die Eigenkapitalrentabilität unter bestimmten Bedingungen erhöhen: Erzielt das damit finanzierte Kapital eine höhere Rendite als die Fremdkapitalkosten, wirkt die Finanzierung rechnerisch zugunsten der Eigenkapitalrentabilität. Dieser Zusammenhang wird grundsätzlich als Leverage-Effekt bezeichnet.',
          ],
          'Der Effekt wirkt nicht nur in eine Richtung. Fallen Ergebnisse niedriger aus oder steigen Finanzierungskosten, kann die Belastung für das Eigenkapital zunehmen. Fremdfinanzierung erhöht zudem feste Zahlungsverpflichtungen und kann das Risiko verschärfen.',
        ],
      },
      {
        heading: 'Vergleich über Zeit und Branche',
        paragraphs: [
          'Ein Zeitvergleich zeigt, wie sich die Eigenkapitalrentabilität über mehrere Perioden entwickelt. Ein Plan-Ist-Vergleich kann Abweichungen von der erwarteten Entwicklung sichtbar machen. Für beide Vergleiche sollten Gewinn und Eigenkapital nach derselben Methode abgegrenzt sein.',
          'Ein Branchenvergleich kann zusätzliche Orientierung geben, wenn Geschäftsmodell, Kapitalbedarf, Risiko und Rechnungslegung ausreichend ähnlich sind. Einzelne Branchenwerte sind keine allgemeinen Zielvorgaben und ersetzen nicht die Analyse des konkreten Unternehmens.',
        ],
      },
      {
        heading: 'Grenzen der Aussagekraft',
        paragraphs: [
          'Die Eigenkapitalrentabilität zeigt weder die absolute Höhe des Gewinns noch automatisch die Liquidität oder finanzielle Stabilität. Bilanzierungsentscheidungen, Einlagen, Entnahmen, Ausschüttungen und einmalige Ergebniseffekte können die Kennzahl verändern.',
          'Bei einem sehr kleinen oder negativen Eigenkapital verliert der Prozentwert an Aussagekraft oder kann missverständlich werden. Ergänzend sollten unter anderem Gesamtkapitalrentabilität, Verschuldung, Liquidität und die nachhaltige Ergebnisentwicklung betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die Eigenkapitalrentabilität setzt Gewinn ins Verhältnis zum eingesetzten Eigenkapital',
    'Gewinn, Eigenkapital und Zeitraum müssen zueinander passen',
    'Die gewählte Gewinn- und Kapitalgröße muss bei Vergleichen einheitlich bleiben',
    'Sehr hohe Werte können auch durch eine geringe Eigenkapitalbasis und höhere Verschuldung entstehen',
    'Zeit-, Plan- und Branchenvergleiche brauchen vergleichbare Grundlagen',
    'Die Kennzahl sollte zusammen mit Risiko-, Liquiditäts- und Kapitalstrukturkennzahlen betrachtet werden',
  ],
  commonMistakes: [
    'Gewinn und Eigenkapital aus unterschiedlichen Zeiträumen kombinieren',
    'Stichtags- und Durchschnittskapital ohne Hinweis miteinander vergleichen',
    'einmalige Ergebniseffekte bei der Interpretation übersehen',
    'Einlagen, Entnahmen oder Ausschüttungen in der Kapitalentwicklung ignorieren',
    'eine hohe Eigenkapitalrentabilität automatisch als geringe Verschuldung deuten',
    'bei sehr kleinem oder negativem Eigenkapital den Prozentwert unkritisch verwenden',
    'Branchenwerte als pauschale Idealwerte behandeln',
  ],
  faqs: [
    {
      question: 'Was sagt die Eigenkapitalrentabilität aus?',
      answer: 'Sie zeigt, welcher Gewinn im Verhältnis zum eingesetzten Eigenkapital in einem bestimmten Zeitraum erzielt wurde.',
    },
    {
      question: 'Wie wird die Eigenkapitalrentabilität berechnet?',
      answer: 'Die Grundformel lautet: Gewinn geteilt durch Eigenkapital mal 100. Die verwendeten Größen müssen sachlich und zeitlich zusammenpassen.',
    },
    {
      question: 'Sollte das Eigenkapital am Jahresende oder im Durchschnitt verwendet werden?',
      answer: 'Das hängt vom Analysezweck ab. Ein Durchschnitt kann Veränderungen während des Jahres besser berücksichtigen. Wichtig sind eine nachvollziehbare Methode und eine einheitliche Anwendung.',
    },
    {
      question: 'Ist eine hohe Eigenkapitalrentabilität immer gut?',
      answer: 'Nein. Sie kann auch durch eine sehr kleine Eigenkapitalbasis und hohe Verschuldung entstehen. Risiko, Kapitalstruktur und Nachhaltigkeit müssen zusätzlich geprüft werden.',
    },
    {
      question: 'Was passiert bei negativem Eigenkapital?',
      answer: 'Dann ist die übliche Prozentkennzahl regelmäßig nicht sinnvoll interpretierbar. Die wirtschaftliche Lage und die Ursachen des negativen Eigenkapitals müssen gesondert analysiert werden.',
    },
  ],
  related: [
    'eigenkapital-fremdkapital',
    'gesamtkapitalrentabilitaet',
    'roi',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default eigenkapitalrentabilitaet;
