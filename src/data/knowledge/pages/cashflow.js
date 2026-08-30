import { defaultDisclaimer } from '../shared.js';

const cashflow = {
  slug: 'cashflow',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Cashflow',
  description: 'Cashflow einfach erklärt: operative, investive und finanzierende Zahlungsströme unterscheiden und ihre Aussagekraft richtig einordnen.',
  seo: {
    title: 'Cashflow verstehen und einordnen | Belege24',
    description: 'Erfahre, wie operativer, Investitions- und Finanzierungs-Cashflow zusammenhängen und warum Cashflow weder Gewinn noch Kontostand ist.',
    canonicalPath: '/wissen/cashflow',
  },
  article: {
    intro: 'Cashflow beschreibt Mittelzuflüsse und Mittelabflüsse innerhalb eines festgelegten Zeitraums. Er macht sichtbar, woher Zahlungsmittel kommen und wofür sie verwendet werden, darf aber weder mit Gewinn noch mit dem Zahlungsmittelbestand an einem einzelnen Stichtag gleichgesetzt werden.',
    sections: [
      {
        heading: 'Was ist Cashflow?',
        paragraphs: [
          [
            { type: 'glossary', id: 'cashflow', text: 'Cashflow' },
            ' fasst zahlungswirksame Vorgänge eines Unternehmens zusammen. Ein Mittelzufluss erhöht, ein Mittelabfluss vermindert die betrachteten Zahlungsmittel.',
          ],
          'Für die Analyse werden Zahlungsströme typischerweise nach operativer Tätigkeit, Investitionstätigkeit und Finanzierungstätigkeit gegliedert. Erst ihr Zusammenspiel erklärt grundsätzlich, warum sich der Zahlungsmittelbestand im Zeitraum verändert hat.',
        ],
      },
      {
        heading: 'Cashflow, Gewinn und Liquidität unterscheiden',
        paragraphs: [
          [
            'Gewinn ist eine Erfolgsgröße aus Erträgen und Aufwendungen. Cashflow betrachtet dagegen Zahlungen. Ein Verkauf auf Rechnung kann bereits Ertrag und Gewinn beeinflussen, obwohl der Kunde noch nicht bezahlt hat. Eine Abschreibung mindert den Gewinn, löst im Abschreibungszeitpunkt aber keinen neuen Mittelabfluss aus.',
          ],
          [
            { type: 'glossary', id: 'liquiditaet', text: 'Liquidität' },
            ' beschreibt die Fähigkeit, fällige Zahlungen leisten zu können. Der Cashflow zeigt Bewegungen über einen Zeitraum; der Kontostand ist nur ein Bestand zu einem bestimmten Zeitpunkt. Ein positiver Cashflow bedeutet deshalb nicht automatisch, dass alle kurzfristigen Verpflichtungen rechtzeitig bezahlt werden können.',
          ],
        ],
        exampleCards: [
          {
            title: 'Gewinn ohne sofortigen Mittelzufluss',
            paragraphs: [
              'Ein Unternehmen verkauft eine Leistung für 20.000 Euro auf Rechnung. Der Umsatz kann das Ergebnis bereits beeinflussen, die Zahlung geht aber erst im Folgemonat ein.',
              'Zum Verkaufszeitpunkt entsteht aus der Kundenforderung noch kein Mittelzufluss. Gewinnwirkung und Cashflow fallen damit zeitlich auseinander.',
            ],
          },
        ],
      },
      {
        heading: 'Die drei Cashflow-Bereiche',
        paragraphs: [
          'Der operative Cashflow umfasst grundsätzlich Zahlungsströme aus dem laufenden Geschäft, etwa Einzahlungen von Kunden und Auszahlungen an Lieferanten oder Beschäftigte.',
          'Der Cashflow aus Investitionstätigkeit zeigt Zahlungen für den Erwerb und die Veräußerung langfristig genutzter Vermögenswerte oder anderer als Investition eingeordneter Positionen. Eine hohe Auszahlung kann auf Investitionen in künftige Leistungsfähigkeit zurückgehen und ist nicht automatisch negativ zu bewerten.',
          'Der Cashflow aus Finanzierungstätigkeit bildet Zahlungen zwischen dem Unternehmen und seinen Kapitalgebern ab, beispielsweise Darlehensaufnahmen, Tilgungen, Eigenkapitalzuführungen oder Ausschüttungen. Ein Mittelzufluss aus einem Kredit ist kein operativer Erfolg, sondern Finanzierung.',
        ],
        formulaCards: [
          {
            label: 'Schema',
            title: 'Veränderung der Zahlungsmittel',
            formula: 'Operativ + Investition + Finanzierung → Veränderung der Zahlungsmittel',
            description: 'Vereinfachtes Schema: In einer vollständigen Kapitalflussrechnung können zusätzliche Überleitungspositionen, etwa wechselkursbedingte Effekte, getrennt ausgewiesen werden.',
          },
        ],
        exampleCards: [
          {
            title: 'Operativer Cashflow',
            paragraphs: [
              'Im Geschäftsjahr gehen 500.000 Euro von Kunden ein. Für Lieferanten, Personal und weitere operative Zahlungen fließen 420.000 Euro ab.',
              'Der vereinfachte operative Cashflow beträgt +80.000 Euro: 500.000 Euro − 420.000 Euro.',
            ],
          },
          {
            title: 'Investitions-Cashflow',
            paragraphs: [
              'Das Unternehmen kauft eine Maschine und zahlt dafür 100.000 Euro. Weitere investive Ein- oder Auszahlungen fallen im Beispiel nicht an.',
              'Der Cashflow aus Investitionstätigkeit beträgt −100.000 Euro. Der negative Wert entsteht hier durch eine Investition und ist nicht automatisch ein schlechtes Signal.',
            ],
          },
          {
            title: 'Finanzierungs-Cashflow und Gesamtveränderung',
            paragraphs: [
              'Das Unternehmen erhält 60.000 Euro aus einem neuen Darlehen und tilgt 20.000 Euro eines bestehenden Kredits. Der Finanzierungs-Cashflow beträgt damit +40.000 Euro.',
              'Zusammen mit +80.000 Euro operativ und −100.000 Euro aus Investitionen ergibt sich eine vereinfachte Veränderung der Zahlungsmittel von +20.000 Euro: 80.000 Euro − 100.000 Euro + 40.000 Euro.',
            ],
            effects: [
              'Operativer Cashflow: +80.000 Euro',
              'Investitions-Cashflow: −100.000 Euro',
              'Finanzierungs-Cashflow: +40.000 Euro',
              'Vereinfachte Zahlungsmittelveränderung: +20.000 Euro',
            ],
          },
        ],
      },
      {
        heading: 'Direkter und indirekter operativer Cashflow',
        paragraphs: [
          'Die direkte Methode stellt operative Einzahlungen und Auszahlungen in wesentlichen Gruppen gegenüber, zum Beispiel Kundeneinzahlungen und Lieferantenauszahlungen. Dadurch bleiben die Zahlungsarten unmittelbar sichtbar.',
          'Die indirekte Methode beginnt mit einer klar benannten Ergebnisgröße und korrigiert sie unter anderem um nicht zahlungswirksame Aufwendungen und Erträge sowie zahlungswirksame Veränderungen betrieblicher Forderungen, Vorräte und Verbindlichkeiten. Welche Komponenten einbezogen und wie sie klassifiziert werden, hängt von der angewendeten Rechnungslegung und Definition ab.',
          'Eine verkürzte Formel ohne diese Abgrenzungen wäre missverständlich. Für Vergleiche muss deshalb offengelegt werden, welches Ausgangsergebnis, welche Korrekturen und welche Zuordnung von Zinsen, Steuern und weiteren Zahlungen verwendet wurden.',
        ],
      },
      {
        heading: 'Positiver und negativer Cashflow',
        paragraphs: [
          'Ein positiver operativer Cashflow zeigt grundsätzlich, dass das laufende Geschäft in der gewählten Abgrenzung mehr Mittel zugeführt als abgeführt hat. Ein negativer Wert kann auf operative Probleme hinweisen, aber auch vorübergehend durch Wachstum, Vorratsaufbau oder längere Kundenzahlungsziele entstehen.',
          'Bei Investitions- und Finanzierungs-Cashflows ist das Vorzeichen besonders kontextabhängig. Investitionsauszahlungen führen häufig zu einem negativen Investitions-Cashflow. Ein positiver Finanzierungs-Cashflow kann aus neuer Verschuldung stammen; ein negativer Wert etwa aus Tilgungen oder Ausschüttungen.',
          'Weder positiv noch negativ ist für sich allein gut oder schlecht. Aussagekräftig wird die Entwicklung erst zusammen mit Ursache, Nachhaltigkeit, Unternehmensphase und weiteren Kennzahlen.',
        ],
      },
      {
        heading: 'Zusammenhang mit der Kapitalflussrechnung',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'kapitalflussrechnung', text: 'Kapitalflussrechnung' },
            ' ordnet Zahlungsströme systematisch den Bereichen laufende Geschäftstätigkeit, Investition und Finanzierung zu und leitet zur Veränderung des Finanzmittelfonds über.',
          ],
          'Sie ergänzt Bilanz und Gewinn- und Verlustrechnung um eine zahlungsorientierte Sicht. Abgrenzung, Darstellung und Pflicht zur Aufstellung richten sich nach den jeweils maßgeblichen Rechnungslegungsregeln; eine interne Cashflow-Auswertung kann davon abweichen.',
        ],
      },
      {
        heading: 'Free Cashflow als kurze Erweiterung',
        paragraphs: [
          'Free Cashflow soll grundsätzlich zeigen, welcher Mittelüberschuss nach bestimmten notwendigen oder geplanten Investitionsauszahlungen verbleibt. Häufig wird dafür operativer Cashflow um Investitionen bereinigt.',
          'Es gibt jedoch unterschiedliche Definitionen, etwa vor oder nach Zinsen sowie bezogen auf Unternehmen oder Eigenkapitalgeber. Ein Free-Cashflow-Wert ist deshalb nur mit offengelegter Berechnung sinnvoll vergleichbar.',
        ],
      },
      {
        heading: 'Aussagekraft und Grenzen',
        paragraphs: [
          'Cashflow-Daten helfen, Ergebnisqualität, Innenfinanzierung, Investitionen und Finanzierungsbewegungen zu verstehen. Sie erlauben aber keine vollständige Aussage über Profitabilität, Vermögenswerte, künftige Zahlungen oder wirtschaftlichen Erfolg einzelner Projekte.',
          'Zahlungszeitpunkte können bewusst verschoben werden, etwa durch schnelleren Forderungseinzug oder spätere Lieferantenzahlungen. Ein einzelner Zeitraum kann dadurch ein untypisches Bild zeigen. Zusätzlich können unterschiedliche Definitionen und Klassifizierungen Vergleiche verzerren.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Cashflow beschreibt Mittelzuflüsse und Mittelabflüsse eines Zeitraums',
    'Cashflow ist weder Gewinn noch Kontostand oder automatisch verfügbare Liquidität',
    'Operative, investive und finanzierende Zahlungsströme beantworten unterschiedliche Fragen',
    'Direkte und indirekte Ermittlung müssen ihre Abgrenzungen klar ausweisen',
    'Positive und negative Werte sind nur zusammen mit ihrer Ursache sinnvoll zu bewerten',
    'Die Kapitalflussrechnung verbindet die drei Bereiche mit der Zahlungsmittelveränderung',
  ],
  commonMistakes: [
    'Cashflow mit Gewinn gleichsetzen',
    'Cashflow als Kontostand interpretieren',
    'einen positiven Finanzierungs-Cashflow als operativen Erfolg werten',
    'einen negativen Investitions-Cashflow automatisch als schlecht bewerten',
    'direkte und indirekte Berechnungen ohne gleiche Abgrenzung vergleichen',
    'nicht zahlungswirksame Positionen bei der indirekten Methode falsch behandeln',
    'Tilgungen mit Zinsaufwand verwechseln',
    'Free Cashflow ohne Definition der berücksichtigten Investitionen verwenden',
  ],
  faqs: [
    {
      question: 'Was ist Cashflow einfach erklärt?',
      answer: 'Cashflow zeigt, welche Zahlungsmittel einem Unternehmen in einem Zeitraum zufließen und welche abfließen.',
    },
    {
      question: 'Ist Cashflow dasselbe wie Gewinn?',
      answer: 'Nein. Gewinn basiert auf Erträgen und Aufwendungen, Cashflow auf Zahlungen. Beide Größen können zeitlich und inhaltlich voneinander abweichen.',
    },
    {
      question: 'Ist Cashflow der Kontostand?',
      answer: 'Nein. Cashflow beschreibt Veränderungen über einen Zeitraum; der Kontostand ist ein Bestand zu einem bestimmten Zeitpunkt.',
    },
    {
      question: 'Was ist der Unterschied zwischen direkter und indirekter Methode?',
      answer: 'Die direkte Methode zeigt Zahlungsgruppen. Die indirekte Methode leitet den operativen Cashflow aus einer Ergebnisgröße und nachvollziehbaren Korrekturen ab.',
    },
    {
      question: 'Ist ein negativer Cashflow immer schlecht?',
      answer: 'Nein. Ursache und Bereich sind entscheidend. Ein negativer Investitions-Cashflow kann beispielsweise durch sinnvolle Zukunftsinvestitionen entstehen.',
    },
  ],
  related: [
    'liquiditaet',
    'jahresabschluss',
    'free-cashflow',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default cashflow;
