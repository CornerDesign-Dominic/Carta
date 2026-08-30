import { defaultDisclaimer } from '../shared.js';

const losgroessenverfahren = {
  slug: 'losgroessenverfahren',
  category: 'Supply Chain & Logistik',
  title: 'Losgrößenverfahren',
  description: 'Losgrößenverfahren einfach erklärt: Bestell- und Fertigungsmengen nach Bedarf, Kosten, Lagerbestand und Planungsaufwand sinnvoll festlegen.',
  seo: {
    title: 'Losgrößenverfahren einfach erklärt | Belege24',
    description: 'Verstehe Los-für-Los, feste Losgröße, Periodenbedarf, Andler sowie wichtige Heuristiken für die Planung von Bestell- und Fertigungsmengen.',
    canonicalPath: '/wissen/losgroessenverfahren',
  },
  article: {
    intro: 'Losgrößenverfahren legen fest, welche Menge ein Unternehmen auf einmal bestellt oder fertigt. Sie helfen, den Zielkonflikt zwischen häufigen Vorgängen mit Bestell- oder Rüstkosten und größeren Beständen mit Lagerkosten nachvollziehbar zu steuern.',
    sections: [
      {
        heading: 'Was ist eine Losgröße?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'losgroesse', text: 'Losgröße' },
            ' ist die Menge eines Materials, einer Ware oder eines Produkts, die in einem Vorgang bestellt oder gefertigt wird. Bei einer Bestellung spricht man häufig von Bestellmenge, in der Produktion von Fertigungs- oder Produktionslos.',
          ],
          'Kleine Lose können Bestand und Kapitalbindung senken, führen aber zu mehr Bestellungen, Rüstvorgängen oder administrativem Aufwand. Große Lose bündeln diese Vorgänge, erhöhen jedoch oft Bestand, Lagerkosten und das Risiko, auf unpassenden Mengen sitzen zu bleiben.',
        ],
      },
      {
        heading: 'Zielkonflikt: Vorgangskosten gegen Lagerkosten',
        paragraphs: [
          [
            'Bei Bestellungen entstehen beispielsweise ',
            { type: 'link', href: '/wissen/bestellkosten', text: 'Bestellkosten' },
            ' für Abstimmung, Bearbeitung, Wareneingang und Rechnungsprüfung. In der Produktion haben Rüstvorgänge eine ähnliche Wirkung: Häufige Wechsel können Zeit und Kapazität beanspruchen.',
          ],
          'Lagerkosten entstehen, weil Mengen vor ihrem Verbrauch oder Verkauf liegen bleiben. Dazu können Fläche, Kapitalbindung, Versicherung, Schwund, Verderb oder Wertverluste gehören. Die passende Losgröße muss deshalb zum Bedarf, zur Liefer- oder Produktionssituation und zur Lagerfähigkeit passen.',
        ],
      },
      {
        heading: 'Einfache Losgrößenverfahren',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'los-fuer-los-verfahren', text: 'Los-für-Los-Verfahren' },
            ' wird für jede Bedarfsperiode genau die benötigte Menge geplant. Dadurch entstehen kaum planmäßige Überbestände, aber bei vielen Perioden auch viele Bestell- oder Rüstvorgänge.',
          ],
          'Eine feste Bestell- oder Losgröße verwendet bei jeder Auslösung dieselbe Menge. Das vereinfacht Prozesse und passt zu Verpackungseinheiten, Mindestmengen oder stabilen Abläufen. Bei schwankendem Bedarf kann sie jedoch zu Über- oder Unterbeständen führen.',
          'Das Periodenbedarfsverfahren fasst den Bedarf mehrerer aufeinanderfolgender Perioden zu einem Los zusammen, etwa für einen Monat statt für jede Woche. Dadurch sinkt die Zahl der Vorgänge, während der durchschnittliche Bestand meist steigt.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Wichtige Losgrößenverfahren im Überblick',
            formula: 'Los-für-Los: Menge entspricht dem Bedarf je Periode\nFeste Losgröße: bei jeder Auslösung dieselbe Menge\nPeriodenbedarf: Bedarf mehrerer Perioden bündeln\nAndler/EOQ: bei gleichmäßigem Bedarf Kosten rechnerisch ausgleichen',
            description: 'Einfache Verfahren sind leicht zu verstehen und umzusetzen. Ihre Eignung hängt davon ab, wie regelmäßig Bedarf, Lieferzeit und Kosten tatsächlich sind.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Los-für-Los bei kundenspezifischem Material',
            paragraphs: [
              'Für drei Wochen liegen bestätigte Bedarfe von 40, 60 und 30 Stück eines kundenspezifischen Materials vor. Das Los-für-Los-Verfahren plant jeweils genau diese Mengen für die betreffende Woche.',
              'Der Bestand bleibt niedrig. Dafür können drei Beschaffungs- oder Fertigungsvorgänge entstehen, wenn keine Mengen gebündelt werden.',
            ],
            effects: [
              'Vorteil: geringe planmäßige Lagerhaltung.',
              'Nachteil: höhere Zahl von Vorgängen und größere Abhängigkeit von verlässlichen Terminen.',
            ],
          },
          {
            title: 'Beispiel: Feste Losgröße bei Standardware',
            paragraphs: [
              'Ein Betrieb bestellt einen häufig benötigten Artikel immer in Verpackungseinheiten von 500 Stück. Auch wenn in einer Woche nur 350 Stück benötigt werden, bleibt die Losgröße bei 500 Stück.',
              'Die Regel vereinfacht Bestellung und Wareneingang. Der Restbestand muss jedoch für die nächste Periode lagerfähig sein und darf keine unnötig hohe Kapitalbindung verursachen.',
            ],
            effects: [
              'Vorteil: einfache, wiederholbare Abwicklung.',
              'Nachteil: Bestand passt nicht immer genau zum periodischen Bedarf.',
            ],
          },
        ],
      },
      {
        heading: 'Optimale Bestellmenge als Spezialfall',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/optimale-bestellmenge', text: 'optimale Bestellmenge' },
            ' nach der klassischen Andler- oder EOQ-Logik ist ein Spezialfall der Losgrößenplanung. Sie sucht für einen bekannten, gleichmäßigen Jahresbedarf einen rechnerischen Ausgleich zwischen Bestellkosten und Lagerhaltungskosten.',
          ],
          'Das Modell ist hilfreich als Orientierung, setzt aber konstante Kosten, planbare Wiederbeschaffung und einen relativ gleichmäßigen Bedarf voraus. Bei periodisch schwankendem Bedarf oder wechselnden Lieferbedingungen reichen diese Annahmen häufig nicht aus.',
        ],
      },
      {
        heading: 'Heuristische Verfahren für wechselnden Bedarf',
        paragraphs: [
          'Heuristische Verfahren suchen bei zeitlich schwankendem Bedarf eine praktikable Losbildung, ohne alle denkbaren Kombinationen vollständig durchzurechnen. Sie liefern eine begründete Näherung, keine universell optimale Lösung.',
          'Die gleitende wirtschaftliche Losgröße prüft schrittweise, ob das Zusammenfassen weiterer Perioden den zusätzlichen Lageraufwand noch rechtfertigt. Sie bündelt so lange, wie die Kosteneffekte plausibel zueinander passen.',
          'Das Part-Period-Verfahren vergleicht vereinfacht den Lageraufwand für das Vorziehen von Mengen mit dem Aufwand eines zusätzlichen Vorgangs. Es sucht Periodenkombinationen, bei denen beide Kostenarten möglichst ausgewogen sind.',
          'Die Silver-Meal-Heuristik bewertet schrittweise die durchschnittlichen Kosten je abgedeckter Periode. Steigen sie beim Einbeziehen einer weiteren Periode, endet die Losbildung typischerweise an dieser Stelle.',
          'Diese Verfahren benötigen eine periodische Bedarfsplanung und Annahmen zu Vorgangs- und Lagerkosten. Sie sind sinnvoller, wenn die zusätzliche Analyse tatsächlich bessere Entscheidungen ermöglicht als eine einfache Regel.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Heuristiken ohne Rechentiefe',
            formula: 'Gleitende wirtschaftliche Losgröße: Perioden schrittweise bündeln\nPart-Period: Lageraufwand und zusätzlichen Vorgang ausgleichen\nSilver-Meal: durchschnittliche Kosten je Periode beobachten',
            description: 'Alle drei Ansätze reagieren auf wechselnden Periodenbedarf. Sie unterscheiden sich darin, wie sie das Bündeln zusätzlicher Perioden bewerten.',
          },
        ],
      },
      {
        heading: 'Wagner-Whitin als fortgeschrittenes Verfahren',
        paragraphs: [
          'Das Wagner-Whitin-Verfahren ist ein dynamischer Ansatz für zeitlich wechselnden Bedarf. Es betrachtet grundsätzlich verschiedene Loskombinationen über mehrere Perioden und sucht unter den Modellannahmen eine kostenminimale Lösung.',
          'Die Methode ist deutlich rechenintensiver und setzt saubere periodische Daten voraus. In der Praxis wird sie eher in Planungssystemen oder als Referenz für anspruchsvollere Situationen eingesetzt als für eine schnelle manuelle Entscheidung.',
        ],
      },
      {
        heading: 'Wann einfache oder komplexere Verfahren sinnvoll sind',
        paragraphs: [
          'Einfache Regeln wie Los-für-Los, feste Losgröße oder Periodenbedarf passen, wenn Prozesse transparent bleiben sollen, Daten begrenzt sind oder praktische Vorgaben wie Verpackungseinheiten eine große Rolle spielen.',
          'Komplexere Heuristiken können sich lohnen, wenn der Bedarf stark zwischen Perioden schwankt, Vorgangskosten und Lagerkosten relevant sind und belastbare Daten vorliegen. Der zusätzliche Planungsaufwand sollte aber in einem sinnvollen Verhältnis zum Nutzen stehen.',
          [
            { type: 'link', href: '/wissen/bedarfsprognose-forecasting', text: 'Forecasting' },
            ' kann periodische Bedarfswerte bereitstellen, wenn keine festen Aufträge vorliegen. Die Qualität jeder Losgrößenentscheidung bleibt von der Genauigkeit dieser Bedarfswerte, den Lieferzeiten und den hinterlegten Kostenannahmen abhängig.',
          ],
        ],
      },
      {
        heading: 'Grenzen in der Praxis',
        paragraphs: [
          'Mindestmengen, Verpackungseinheiten, Haltbarkeit, Lagerplatz, Kapazität, Rabatte und Lieferfähigkeit können eine rechnerisch günstige Losgröße unpraktisch machen. Auch Risiken und vorhandene Bestände müssen berücksichtigt werden.',
          'Kostenwerte sind oft nur Schätzungen. Werden Bestell- oder Rüstkosten zu hoch oder zu niedrig angesetzt, kann das Verfahren eine scheinbar präzise, aber unpassende Menge empfehlen.',
          'Losgrößenverfahren entscheiden vor allem über Mengen. Wann genau bestellt wird, regeln ergänzend Bestellverfahren. Beide Entscheidungen sollten auf derselben aktuellen Bedarfs- und Bestandsbasis beruhen.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, eine feste Losgröße beizubehalten, obwohl Bedarf, Verpackungseinheiten oder Lieferbedingungen sich deutlich geändert haben.',
          'Auch das aufwendigste Verfahren hilft nicht, wenn Bedarfsdaten, Bestände oder Lieferzeiten unzuverlässig sind. Datenqualität sollte vor mathematischer Verfeinerung stehen.',
          'Keine Methode macht große Lose automatisch wirtschaftlich. Kapitalbindung, Verderb, Veralterung, Lagerplatz und Versorgungsrisiko bleiben eigenständige Prüfungen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Losgrößenverfahren bestimmen, welche Menge in einem Bestell- oder Fertigungsvorgang geplant wird.',
    'Sie wägen Vorgangskosten wie Bestell- oder Rüstkosten gegen Lagerkosten und Bestandsrisiken ab.',
    'Los-für-Los, feste Losgröße und Periodenbedarf sind einfache, praxisnahe Verfahren.',
    'Die optimale Bestellmenge nach Andler ist ein Spezialfall für gleichmäßigen Bedarf und konstante Annahmen.',
    'Heuristiken wie gleitende wirtschaftliche Losgröße, Part-Period und Silver-Meal helfen bei wechselndem Periodenbedarf.',
    'Verfahren und Datenaufwand sollten zur Bedeutung, Schwankung und Planbarkeit des Artikels passen.',
  ],
  commonMistakes: [
    'feste Losgrößen trotz veränderter Nachfrage, Lieferbedingungen oder Verpackungseinheiten nicht überprüfen',
    'Bestell- oder Rüstkosten und Lagerkosten mit unpassenden oder uneinheitlichen Annahmen vergleichen',
    'ein komplexes Verfahren einsetzen, obwohl Datenqualität und Nutzen den Aufwand nicht rechtfertigen',
    'rechnerische Mengen ohne Prüfung von Mindestmengen, Lagerplatz, Haltbarkeit oder Lieferfähigkeit übernehmen',
    'Losgröße und Bestellzeitpunkt als dieselbe Entscheidung behandeln',
  ],
  faqs: [
    {
      question: 'Was ist eine Losgröße?',
      answer: 'Sie ist die Menge, die ein Unternehmen in einem Vorgang bestellt oder fertigt.',
    },
    {
      question: 'Was ist das Los-für-Los-Verfahren?',
      answer: 'Es plant für jede Bedarfsperiode genau die benötigte Menge. Das senkt planmäßige Bestände, kann aber mehr Bestell- oder Rüstvorgänge verursachen.',
    },
    {
      question: 'Was ist der Unterschied zwischen fester Losgröße und Periodenbedarf?',
      answer: 'Eine feste Losgröße bleibt bei jeder Auslösung gleich. Periodenbedarf bündelt die jeweils benötigten Mengen mehrerer Perioden zu einem Los.',
    },
    {
      question: 'Ist Andler ein Losgrößenverfahren?',
      answer: 'Ja. Die optimale Bestellmenge nach Andler ist ein vereinfachter Spezialfall für gleichmäßigen Bedarf, konstante Kosten und planbare Wiederbeschaffung.',
    },
    {
      question: 'Wann lohnen sich heuristische Verfahren?',
      answer: 'Sie können bei schwankendem Periodenbedarf sinnvoll sein, wenn Vorgangs- und Lagerkosten relevant sind und ausreichend belastbare Daten vorliegen.',
    },
  ],
  related: [
    'optimale-bestellmenge',
    'bestellkosten',
    'bestellverfahren',
    'mrp-erp-disposition',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default losgroessenverfahren;
