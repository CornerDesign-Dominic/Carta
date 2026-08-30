import { defaultDisclaimer } from '../shared.js';

const optimaleBestellmenge = {
  slug: 'optimale-bestellmenge',
  category: 'Supply Chain & Logistik',
  title: 'Optimale Bestellmenge',
  description: 'Optimale Bestellmenge einfach erklärt: Andler- bzw. EOQ-Formel, Zielkonflikt von Bestell- und Lagerhaltungskosten sowie Praxisgrenzen.',
  seo: {
    title: 'Optimale Bestellmenge berechnen | Belege24',
    description: 'Verstehe die klassische Andler- bzw. EOQ-Formel, ihre Variablen, ein Zahlenbeispiel und warum reale Risiken und Rabatte zusätzlich zählen.',
    canonicalPath: '/wissen/optimale-bestellmenge',
  },
  article: {
    intro: 'Die optimale Bestellmenge sucht einen rechnerischen Ausgleich zwischen Bestellkosten und Lagerhaltungskosten. Sie hilft dabei, für einen gleichmäßigen Bedarf eine sinnvolle Bestellgröße abzuschätzen – ersetzt aber keine Prüfung der realen Liefer- und Risikosituation.',
    sections: [
      {
        heading: 'Ziel der optimalen Bestellmenge',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'optimale-bestellmenge', text: 'optimale Bestellmenge' },
            ' soll die Summe aus Bestellkosten und Lagerhaltungskosten minimieren. Kleine Mengen führen zu vielen Bestellungen und damit meist höheren Bestellkosten. Große Mengen verringern die Zahl der Bestellungen, erhöhen aber durchschnittlichen Lagerbestand und Lagerhaltungskosten.',
          ],
          'Die klassische Andler- oder EOQ-Logik betrachtet diesen Zielkonflikt mit einem vereinfachten mathematischen Modell. Das Ergebnis ist eine Orientierungsgröße, keine automatisch richtige Bestellung für jede tatsächliche Situation.',
        ],
      },
      {
        heading: 'Benötigte Größen',
        paragraphs: [
          'Der Jahresbedarf ist die erwartete Menge eines Guts innerhalb eines Jahres. Die Bestellkosten je Bestellung erfassen den Aufwand eines Beschaffungsvorgangs. Die Lagerhaltungskosten je Stück und Jahr beschreiben die Kosten, die entstehen, weil eine Einheit durchschnittlich im Lager liegt.',
          'Alle Werte müssen dieselbe Einheit und denselben Zeitraum verwenden. Wird der Jahresbedarf in Stück angegeben, müssen Bestellkosten in Euro je Bestellung und Lagerhaltungskosten in Euro je Stück und Jahr vorliegen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Klassische Andler- bzw. EOQ-Formel',
            formula: 'Optimale Bestellmenge = √(2 × Jahresbedarf × Bestellkosten je Bestellung / Lagerhaltungskosten je Stück und Jahr)',
            description: 'Jahresbedarf ist die erwartete Jahresmenge. Bestellkosten je Bestellung sind die Kosten eines Vorgangs. Lagerhaltungskosten je Stück und Jahr sind die Kosten für das Lagern einer Einheit über ein Jahr.',
          },
        ],
      },
      {
        heading: 'Vollständiges Beispiel',
        paragraphs: [
          'Ein Unternehmen benötigt voraussichtlich 12.000 Stück eines Materials pro Jahr. Die Bestellkosten liegen bei 40 Euro je Bestellung. Die Lagerhaltungskosten werden mit 2 Euro je Stück und Jahr angesetzt.',
        ],
        exampleCards: [
          {
            title: 'Optimale Bestellmenge berechnen',
            paragraphs: [
              'Schritt 1: Werte einsetzen: √(2 × 12.000 Stück × 40 Euro / 2 Euro je Stück und Jahr).',
              'Schritt 2: Im Wurzelterm stehen 480.000. Die Quadratwurzel daraus beträgt rund 692,8.',
              'Schritt 3: Die rechnerische optimale Bestellmenge liegt bei rund 693 Stück. In der Praxis würde das Unternehmen eine handhabbare Menge wählen, etwa 690 oder 700 Stück, und zusätzlich Mindestmengen, Lieferzeit, Lagerplatz und Risiken prüfen.',
            ],
            effects: [
              'Jahresbedarf: 12.000 Stück.',
              'Bestellkosten: 40 Euro je Bestellung.',
              'Lagerhaltungskosten: 2 Euro je Stück und Jahr.',
              'Rechnerisches Ergebnis: rund 693 Stück je Bestellung.',
            ],
          },
        ],
      },
      {
        heading: 'Annahmen des klassischen Modells',
        paragraphs: [
          'Die klassische Formel unterstellt einen bekannten, gleichmäßigen Bedarf, konstante Bestell- und Lagerhaltungskosten sowie eine verlässliche und planbare Wiederbeschaffung. Sie betrachtet typischerweise nur einen Artikel und keine unsicheren Liefertermine oder unerwarteten Verbrauchsschwankungen.',
          'Diese Annahmen machen die Rechnung übersichtlich, entsprechen aber nicht immer dem Alltag. Das Ergebnis sollte deshalb als Ausgangspunkt für eine Entscheidung verstanden werden, nicht als starre Vorgabe.',
        ],
      },
      {
        heading: 'Grenzen in der Praxis',
        paragraphs: [
          'Mengenrabatte können größere Bestellmengen wirtschaftlich attraktiver machen, auch wenn sie die rechnerische EOQ-Menge überschreiten. Mindestmengen, Verpackungseinheiten oder begrenzter Lagerplatz können eine kleinere oder größere Bestellmenge erzwingen.',
          'Schwankender Bedarf, lange oder unsichere Lieferzeiten, Sicherheitsbestände und Versorgungsrisiken verändern die Ausgangslage ebenfalls. Bei verderblichen Gütern, hohen Preisrisiken oder begrenzten Kapazitäten sind zusätzliche Regeln und Abwägungen nötig.',
          'Eine Bestellmenge ist daher nicht allein deshalb optimal, weil sie mathematisch berechnet wurde. Reale Daten, Lieferfähigkeit, Liquidität, Qualität und betriebliche Kapazität müssen einbezogen werden.',
        ],
      },
      {
        heading: 'Zusammenhang mit Bedarf und Bestellverfahren',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/bedarfsermittlung', text: 'Bedarfsermittlung' },
            ' liefert eine wichtige Grundlage für den Jahresbedarf. Die Seite ',
            { type: 'link', href: '/wissen/bestellkosten', text: 'Bestellkosten' },
            ' erklärt den Aufwand je Beschaffungsvorgang.',
          ],
          'Bestellverfahren bestimmen zusätzlich, wann eine Bestellung ausgelöst wird. Lagerkosten und Bestellverfahren sind weiterführende Vertiefungsthemen; sie beeinflussen, ob die rechnerische Bestellmenge im konkreten Prozess auch umsetzbar ist.',
          [
            'Das ',
            { type: 'link', href: '/wissen/bestellpunktverfahren', text: 'Bestellpunktverfahren' },
            ' und das ',
            { type: 'link', href: '/wissen/bestellrhythmusverfahren', text: 'Bestellrhythmusverfahren' },
            ' regeln den Auslösezeitpunkt und die Bestandsprüfung. Sie ergänzen die Bestellmenge, ersetzen die Andler-Formel aber nicht durch dieselbe Entscheidung.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Lagerhaltungskosten nur mit Miete gleichzusetzen. Kapitalbindung, Schwund, Versicherung, Verwaltung oder Wertverlust können ebenfalls dazugehören.',
          'Auch Bestellkosten werden oft zu niedrig angesetzt, wenn interne Bearbeitung, Wareneingang und Rechnungsprüfung fehlen. Ungenaue Kostensätze erzeugen ein scheinbar genaues, aber wenig belastbares Ergebnis.',
          'Vermeide es, die Formel ohne Prüfung von Lieferzeit, Sicherheitsbestand, Mindestmenge, Mengenrabatt oder Lagerkapazität zu übernehmen. Diese Faktoren können die praktisch sinnvolle Menge verändern.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die optimale Bestellmenge gleicht in einem vereinfachten Modell Bestellkosten und Lagerhaltungskosten aus.',
    'Kleine Mengen erhöhen meist die Bestellhäufigkeit, große Mengen den durchschnittlichen Lagerbestand.',
    'Die klassische Formel benötigt Jahresbedarf, Bestellkosten je Bestellung und Lagerhaltungskosten je Stück und Jahr.',
    'Andler bzw. EOQ unterstellt planbaren Bedarf, konstante Kosten und verlässliche Wiederbeschaffung.',
    'Rabatte, Mindestmengen, Lieferzeit, Risiken, Kapazitäten und schwankender Bedarf können das Ergebnis verändern.',
    'Die Formel liefert eine Orientierung und keine automatisch optimale reale Bestellentscheidung.',
  ],
  commonMistakes: [
    'die Formel mit uneinheitlichen Mengen- oder Zeitangaben verwenden',
    'Lagerhaltungskosten zu eng erfassen oder Bestellkosten unvollständig schätzen',
    'das mathematische Ergebnis ohne Prüfung von Mindestmengen, Rabatten oder Lagerplatz übernehmen',
    'Sicherheitsbestand und unsichere Lieferzeiten bei der praktischen Umsetzung ignorieren',
    'gleichmäßigen Bedarf unterstellen, obwohl Verbrauch oder Nachfrage stark schwanken',
  ],
  faqs: [
    {
      question: 'Was ist die optimale Bestellmenge?',
      answer: 'Sie ist die rechnerische Bestellmenge, bei der sich Bestellkosten und Lagerhaltungskosten in einem vereinfachten Modell ausgleichen.',
    },
    {
      question: 'Welche Daten brauche ich für die Andler-Formel?',
      answer: 'Du brauchst Jahresbedarf, Bestellkosten je Bestellung und Lagerhaltungskosten je Stück und Jahr auf einer einheitlichen Datenbasis.',
    },
    {
      question: 'Warum sind kleine Bestellmengen nicht immer günstig?',
      answer: 'Sie senken zwar den Bestand, führen aber oft zu mehr Bestellungen und damit zu höheren gesamten Bestellkosten.',
    },
    {
      question: 'Warum sind große Bestellmengen nicht immer günstig?',
      answer: 'Sie verringern die Zahl der Bestellungen, erhöhen aber häufig durchschnittlichen Lagerbestand, Kapitalbindung und Lagerhaltungskosten.',
    },
    {
      question: 'Gilt die berechnete Bestellmenge immer?',
      answer: 'Nein. Mengenrabatte, Mindestmengen, Lieferzeiten, Sicherheitsbestände, Risiko, Kapazität und schwankender Bedarf müssen zusätzlich berücksichtigt werden.',
    },
  ],
  related: [
    'bestellkosten',
    'losgroessenverfahren',
    'bestellpunktverfahren',
    'bestellrhythmusverfahren',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default optimaleBestellmenge;
