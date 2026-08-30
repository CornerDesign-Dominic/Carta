import { defaultDisclaimer } from '../shared.js';

const bab = {
  slug: 'bab',
  category: 'Kostenrechnung & Controlling',
  title: 'BAB – Betriebsabrechnungsbogen',
  description: 'Betriebsabrechnungsbogen einfach erklärt: Gemeinkosten auf Kostenstellen verteilen, Verteilungsschlüssel nutzen und Zuschlagssätze ermitteln.',
  seo: {
    title: 'BAB – Betriebsabrechnungsbogen einfach erklärt | Belege24',
    description: 'Erfahre, wie ein Betriebsabrechnungsbogen Gemeinkosten auf Kostenstellen verteilt und die Grundlage für Zuschlagssätze und Kalkulationen schafft.',
    canonicalPath: '/wissen/bab',
  },
  article: {
    intro: 'Ein Betriebsabrechnungsbogen, kurz BAB, verteilt Gemeinkosten nachvollziehbar auf Kostenstellen. So wird sichtbar, in welchen Bereichen Kosten entstehen und welche Grundlage sich daraus für Zuschlagssätze und Kalkulationen ergibt.',
    sections: [
      {
        heading: 'Was ist ein Betriebsabrechnungsbogen?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'betriebsabrechnungsbogen', text: 'Betriebsabrechnungsbogen' },
            ' ist ein Werkzeug der Kostenstellenrechnung. Er sammelt vor allem ',
            { type: 'glossary', id: 'gemeinkosten', text: 'Gemeinkosten' },
            ' und verteilt sie auf die Bereiche, in denen sie angefallen sind.',
          ],
          'Er ergänzt die Kostenartenrechnung: Diese zeigt, welche Kosten angefallen sind. Der BAB zeigt anschließend, welche Kostenstelle sie tragen soll. Das kann zum Beispiel Produktion, Verwaltung oder Vertrieb sein.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Vom Gemeinkostenblock zur Kalkulation',
            formula: 'Gemeinkosten erfassen → Kostenstellen zuordnen → Zuschlagssätze ermitteln',
            description: 'Der BAB schafft eine nachvollziehbare Zwischenstufe zwischen den erfassten Kosten und der späteren Kalkulation von Produkten oder Aufträgen.',
          },
        ],
      },
      {
        heading: 'Wozu wird ein BAB verwendet?',
        paragraphs: [
          'Ein BAB hilft dir, indirekte Kosten nicht pauschal auf alle Produkte oder Aufträge zu verteilen. Stattdessen ordnest du sie zunächst dem Bereich zu, der sie verursacht oder nutzt. Das macht Auswertungen und Kalkulationen aussagekräftiger.',
          'Besonders sinnvoll ist das, wenn ein Unternehmen mehrere Bereiche, Produkte oder Aufträge hat. Für sehr kleine Betriebe kann schon eine einfache Aufteilung mit wenigen Kostenstellen genügen.',
        ],
      },
      {
        heading: 'Gemeinkosten auf Kostenstellen verteilen',
        paragraphs: [
          [
            'Viele ',
            { type: 'glossary', id: 'gemeinkosten', text: 'Gemeinkosten' },
            ' lassen sich nicht unmittelbar einem einzelnen ',
            { type: 'glossary', id: 'kostentraeger', text: 'Kostenträger' },
            ' zuordnen. Dazu können etwa Miete, Energie, Verwaltungskosten oder die Gehälter übergreifender Bereiche gehören.',
          ],
          [
            'Im BAB werden diese Kosten auf ',
            { type: 'glossary', id: 'kostenstelle', text: 'Kostenstellen' },
            ' verteilt. Eine Kostenstelle ist ein abgegrenzter Bereich wie Werkstatt, Verwaltung oder Vertrieb. Die Verteilung soll möglichst den tatsächlichen Verbrauch oder Nutzen abbilden.',
          ],
        ],
      },
      {
        heading: 'Hilfs- und Hauptkostenstellen',
        paragraphs: [
          'Hauptkostenstellen stehen meist nah an den Leistungen für Kunden, zum Beispiel Fertigung, Vertrieb oder Verwaltung. Ihre Kosten können später über Zuschläge in die Produkt- oder Auftragskalkulation einfließen.',
          'Hilfskostenstellen erbringen interne Leistungen für andere Bereiche, etwa eine Werkstatt-Instandhaltung, IT oder Energieversorgung. Ihre Kosten werden in einer vereinfachten Betrachtung zunächst gesammelt und anschließend auf die nutzenden Hauptkostenstellen weiterverteilt.',
          'Wie detailliert diese innerbetriebliche Verrechnung sein sollte, hängt vom Unternehmen ab. Entscheidend ist, dass die Struktur verständlich bleibt und für Entscheidungen einen erkennbaren Nutzen hat.',
        ],
      },
      {
        heading: 'Verteilungsschlüssel: Kosten nachvollziehbar zuordnen',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'verteilungsschluessel', text: 'Verteilungsschlüssel' },
            ' legt fest, wie eine Kostenart auf mehrere Kostenstellen aufgeteilt wird. Geeignet sind Größen, die einen plausiblen Bezug zur Nutzung haben.',
          ],
          'Miete kann zum Beispiel nach Fläche verteilt werden, Strom nach Verbrauch oder Maschinenstunden und Verwaltungskosten nach Mitarbeiterzahl. Ein Schlüssel ist nicht allein deshalb gut, weil er leicht zu berechnen ist. Er sollte zur jeweiligen Kostenart passen und regelmäßig überprüft werden.',
        ],
      },
      {
        heading: 'Zuschlagssätze und Zuschlagskalkulation',
        paragraphs: [
          [
            'Nach der Verteilung zeigt der BAB, welche Gemeinkosten in den einzelnen Hauptkostenstellen angefallen sind. Daraus lassen sich ',
            { type: 'glossary', id: 'zuschlagssatz', text: 'Zuschlagssätze' },
            ' ableiten, um Gemeinkosten in einer Zuschlagskalkulation auf Produkte oder Aufträge zu verrechnen.',
          ],
          'Ein Zuschlagssatz setzt die Gemeinkosten einer Kostenstelle ins Verhältnis zu einer passenden Bezugsgröße, etwa Materialeinzelkosten oder Fertigungslöhnen. Welche Bezugsgröße sinnvoll ist, richtet sich nach dem Geschäftsmodell und der Kostenstruktur.',
          'Der BAB selbst bestimmt keinen "richtigen" Preis. Er liefert jedoch eine transparentere Grundlage, damit indirekte Kosten bei Kalkulationen nicht übersehen werden.',
        ],
      },
      {
        heading: 'Beispiel: Ein einfacher BAB mit drei Kostenstellen',
        paragraphs: [
          'Eine kleine Tischlerei führt die Kostenstellen Werkstatt, Verwaltung und Vertrieb. Miete, Strom und das Gehalt der Verwaltung fallen als Gemeinkosten an.',
        ],
        exampleCards: [
          {
            title: 'Miete und Strom verteilen',
            paragraphs: [
              'Die monatliche Miete von 2.000 Euro wird nach der genutzten Fläche verteilt. 70 Prozent entfallen auf die Werkstatt, 20 Prozent auf die Verwaltung und 10 Prozent auf den Vertrieb.',
              'Die Stromkosten von 600 Euro werden nach Verbrauch aufgeteilt. Weil die Maschinen in der Werkstatt den größten Teil nutzen, erhält diese Kostenstelle einen deutlich höheren Anteil als Verwaltung und Vertrieb.',
            ],
          },
          {
            title: 'Was das Ergebnis zeigt',
            paragraphs: [
              'Nach der Verteilung ist erkennbar, welche Gemeinkosten in jeder Kostenstelle anfallen. Die Werkstattkosten können später mit einer geeigneten Bezugsgröße in die Kalkulation der gefertigten Aufträge einfließen.',
              'Die Werte sind nur ein vereinfachtes Beispiel. In der Praxis sollten Kostenstellen und Schlüssel zum tatsächlichen Betrieb passen.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Struktur eines BAB',
        paragraphs: [
          'Ein einfacher BAB ist meist als Tabelle aufgebaut. In den Zeilen stehen die Gemeinkostenarten wie Miete, Energie oder Verwaltung. In den Spalten stehen die Kostenstellen. Zusätzliche Spalten können Verteilungsschlüssel, Summen und die spätere Weiterverrechnung von Hilfskostenstellen enthalten.',
          'Ein BAB muss keine vollständige Lehrbuchmatrix sein. Eine überschaubare Tabelle mit den wichtigsten Gemeinkosten und wenigen aussagekräftigen Kostenstellen ist oft hilfreicher als eine sehr komplexe Aufteilung ohne praktischen Nutzen.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Verteile Kosten nicht nach beliebigen Prozentsätzen, nur weil genaue Daten fehlen. Prüfe stattdessen, welcher Schlüssel die Nutzung am besten abbildet und ob sich ein zusätzlicher Erfassungsaufwand überhaupt lohnt.',
          'Außerdem sollten Einzelkosten nicht unnötig über den BAB laufen: Lassen sie sich einem Auftrag direkt zuordnen, ist eine direkte Zuordnung oft klarer. Aktualisiere Schlüssel und Zuschlagssätze, wenn sich Flächen, Prozesse, Mengen oder Kostenstrukturen wesentlich verändern.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der BAB verteilt Gemeinkosten auf Kostenstellen',
    'Kostenarten zeigen, welche Kosten anfallen; der BAB zeigt, wo sie entstehen',
    'Verteilungsschlüssel sollten zur tatsächlichen Nutzung oder Verursachung passen',
    'Hilfskostenstellen können ihre Kosten an Hauptkostenstellen weitergeben',
    'Aus den Kostenstellenkosten lassen sich Zuschlagssätze für Kalkulationen ableiten',
    'Eine einfache, nachvollziehbare Struktur ist oft nützlicher als eine überkomplexe Tabelle',
  ],
  commonMistakes: [
    'Gemeinkosten ohne nachvollziehbaren Schlüssel verteilen',
    'Einzelkosten unnötig über Kostenstellen und Zuschläge verrechnen',
    'Hilfskostenstellen und Hauptkostenstellen nicht voneinander unterscheiden',
    'veraltete Flächen, Verbrauchswerte oder andere Schlüssel verwenden',
    'Zuschlagssätze als dauerhaft unveränderliche Werte behandeln',
    'einen detaillierten BAB erstellen, ohne die Ergebnisse für Kalkulationen oder Entscheidungen zu nutzen',
  ],
  faqs: [
    {
      question: 'Was ist ein BAB einfach erklärt?',
      answer: 'Ein Betriebsabrechnungsbogen verteilt Gemeinkosten auf Kostenstellen wie Produktion, Verwaltung oder Vertrieb. So wird erkennbar, in welchem Bereich die indirekten Kosten entstehen.',
    },
    {
      question: 'Wofür braucht man einen Betriebsabrechnungsbogen?',
      answer: 'Er schafft eine Grundlage, um Gemeinkosten nachvollziehbar auszuwerten und bei einer Zuschlagskalkulation auf Produkte oder Aufträge zu verteilen.',
    },
    {
      question: 'Was sind Hilfskostenstellen?',
      answer: 'Hilfskostenstellen erbringen interne Leistungen für andere Bereiche, zum Beispiel IT, Instandhaltung oder Energieversorgung. Ihre Kosten werden grundsätzlich an die nutzenden Hauptkostenstellen weiterverrechnet.',
    },
    {
      question: 'Welche Verteilungsschlüssel sind sinnvoll?',
      answer: 'Der Schlüssel sollte einen plausiblen Bezug zur Kostenart haben, etwa Fläche für Miete oder Maschinenstunden für bestimmte Energiekosten. Welche Größe passt, hängt von den tatsächlichen Verhältnissen im Betrieb ab.',
    },
    {
      question: 'Ist ein BAB für jedes kleine Unternehmen nötig?',
      answer: 'Nicht zwingend in derselben Tiefe. Wenn mehrere Bereiche oder Produkte indirekte Kosten teilen, kann schon ein einfacher BAB mit wenigen Kostenstellen hilfreich sein.',
    },
  ],
  related: [
    'kostenrechnung-controlling',
    'kostenarten-kostenstellen-kostentraeger',
    'fixe-variable-kosten',
    'deckungsbeitrag',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bab;
