import { defaultDisclaimer } from '../shared.js';

const planungsverfahren = {
  slug: 'planungsverfahren',
  category: 'Unternehmensführung',
  title: 'Top-down, Bottom-up & Gegenstromverfahren',
  description: 'Top-down, Bottom-up und Gegenstromverfahren bei Zielbildung, Planung und Budgetierung praxisnah vergleichen.',
  seo: {
    title: 'Top-down, Bottom-up & Gegenstromverfahren | Belege24',
    description: 'Verstehe drei Planungsverfahren, ihre Unterschiede, Vor- und Nachteile sowie ihren Einsatz bei Zielen, Budgets und Unternehmensplanung.',
    canonicalPath: '/wissen/planungsverfahren',
  },
  article: {
    intro: 'Top-down, Bottom-up und Gegenstromverfahren beschreiben, wie Ziele, Pläne und Budgets zwischen Unternehmensleitung und nachgeordneten Bereichen entstehen. Sie unterscheiden sich vor allem darin, wo die Planung beginnt, wie Informationen einfließen und wer Entscheidungen abstimmt.',
    sections: [
      {
        heading: 'Was sind Planungsverfahren im Unternehmen?',
        paragraphs: [
          'Ein Planungsverfahren legt fest, in welcher Richtung Vorgaben, Annahmen und Teilpläne durch das Unternehmen laufen. Es kann für Jahresziele, Umsatzplanung, Personalbedarf, Investitionen oder Budgets genutzt werden.',
          'Das Verfahren ersetzt keine fachliche Planung. Es organisiert, wer Informationen liefert, wer Vorschläge prüft, wie Widersprüche geklärt werden und wer den Gesamtplan freigibt.',
        ],
      },
      {
        heading: 'Top-down: Planung von oben nach unten',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'top-down', text: 'Top-down-Verfahren' },
            ' legt die Unternehmensleitung zentrale Ziele, Eckwerte oder Budgets fest. Diese werden anschließend auf Bereiche, Teams oder Verantwortliche heruntergebrochen.',
          ],
          [
            'Eine ',
            { type: 'glossary', id: 'zielvorgabe', text: 'Zielvorgabe' },
            ' kann dadurch schnell und einheitlich gesetzt werden. Gleichzeitig besteht das Risiko, dass operative Informationen, regionale Unterschiede oder tatsächliche Kapazitäten zu wenig berücksichtigt werden.',
          ],
        ],
      },
      {
        heading: 'Bottom-up: Planung von unten nach oben',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'bottom-up', text: 'Bottom-up-Verfahren' },
            ' entwickeln operative Einheiten ihre Ziele, Maßnahmen, Bedarfe oder Budgets zunächst selbst. Die Teilpläne werden schrittweise zusammengeführt und auf höherer Ebene abgestimmt.',
          ],
          'Dadurch können Kundennähe, Fachwissen und konkrete Kapazitäten besser einfließen. Ohne gemeinsame Leitplanken können Teilpläne jedoch uneinheitlich sein, sich überschneiden oder in Summe nicht zu Strategie und verfügbaren Mitteln passen.',
        ],
      },
      {
        heading: 'Gegenstromverfahren: Planung in beide Richtungen',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'gegenstromverfahren', text: 'Gegenstromverfahren' },
            ' kombiniert Top-down und Bottom-up. Die Leitung gibt strategische Ziele und Rahmenbedingungen vor. Bereiche entwickeln darauf aufbauend Teilpläne und melden Chancen, Engpässe oder notwendige Anpassungen zurück.',
          ],
          'Rückmeldungen und Gesamtplan werden abgeglichen. Daraus können überarbeitete Vorgaben oder angepasste Bereichspläne entstehen. Der Plan bewegt sich damit in begrenzten Runden zwischen den Ebenen, bis ein konsistentes Ergebnis freigegeben wird.',
        ],
      },
      {
        heading: 'Top-down vs. Bottom-up vs. Gegenstromverfahren',
        paragraphs: ['Die drei Verfahren setzen unterschiedliche Schwerpunkte bei Geschwindigkeit, Beteiligung, Informationsfluss und Abstimmung.'],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Top-down vs. Bottom-up vs. Gegenstromverfahren',
            formula: 'Top-down: Leitung gibt vor → Bereiche konkretisieren\nBottom-up: Bereiche planen → Leitung bündelt und entscheidet\nGegenstrom: Leitung setzt Rahmen ↔ Bereiche planen und melden zurück ↔ Abstimmung',
            description: 'Top-down priorisiert Einheitlichkeit und Geschwindigkeit. Bottom-up nutzt dezentrales Wissen und Beteiligung. Das Gegenstromverfahren verbindet einen zentralen Rahmen mit Rückmeldung und Überarbeitung.',
          },
        ],
      },
      {
        heading: 'Zielbildung, Planung und Budgetierung',
        paragraphs: [
          [
            'Bei der Zielbildung legt Top-down etwa ein Gesamtumsatzziel fest, während Bottom-up erreichbare Beiträge aus Produkten, Regionen oder Teams sammelt. Im Gegenstrom werden strategischer Anspruch und operative Einschätzung abgeglichen. Grundlagen erklärt die Seite ',
            { type: 'link', href: '/wissen/unternehmensziele', text: 'Unternehmensziele' },
            '.',
          ],
          [
            'Bei der ',
            { type: 'glossary', id: 'budgetierung', text: 'Budgetierung' },
            ' kann die Leitung eine Kostengrenze vorgeben oder einzelne Bereiche können ihren Mittelbedarf begründen. Ein Gegenstrom gleicht verfügbare Mittel, geplante Maßnahmen und erwartete Ergebnisse ab.',
          ],
          [
            'Die ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' gibt den grundsätzlichen Weg vor. Das Planungsverfahren organisiert, wie daraus abgestimmte Ziele, Maßnahmen und Ressourcenzuteilungen entstehen.',
          ],
        ],
      },
      {
        heading: 'Geschwindigkeit, Beteiligung und Informationsqualität',
        paragraphs: [
          'Top-down kann schnell sein, wenn wenige Entscheidungsträger klare Eckwerte setzen. Fehlende Beteiligung kann jedoch unrealistische Annahmen oder geringe Umsetzungsbereitschaft verursachen. Bottom-up braucht mehr Koordination, schafft aber Raum für Fachwissen und lokale Informationen.',
          'Die Leitung kennt eher Strategie, Finanzierung und das Gesamtunternehmen. Operative Bereiche kennen häufig Kunden, Abläufe, Auslastung und lokale Risiken genauer. Das Gegenstromverfahren versucht, beide Perspektiven zu verbinden, ist dafür aber abstimmungsintensiver.',
          'Beteiligung kann Nachvollziehbarkeit und Akzeptanz erhöhen, garantiert sie aber nicht. Wer Vorschläge einholt und ohne Erklärung ignoriert, erzeugt Scheinbeteiligung. Umgekehrt dürfen notwendige Entscheidungen nicht nur zugunsten eines scheinbaren Konsenses vermieden werden.',
        ],
      },
      {
        heading: 'Praxisbeispiel: Jahresbudget und Umsatzziele',
        paragraphs: ['Ein mittelständischer Händler plant Umsatz, Personal und Marketingbudget für das nächste Jahr. Derselbe Anlass läuft je nach Verfahren unterschiedlich ab.'],
        exampleCards: [
          {
            title: 'Top-down-Jahresplanung',
            paragraphs: ['Die Geschäftsführung setzt ein Umsatzwachstum von acht Prozent und begrenzt die Marketingausgaben auf 300.000 Euro. Vertrieb und Marketing verteilen die Eckwerte auf Regionen, Kanäle und Monate.'],
            effects: ['schnelle und einheitliche Vorgabe', 'klare Verbindung zum Gesamtziel', 'Risiko unrealistischer Teilziele bei fehlender Rückmeldung'],
          },
          {
            title: 'Bottom-up-Jahresplanung',
            paragraphs: ['Vertriebsteams schätzen Potenziale nach Kunden und Regionen. Marketing plant Maßnahmen und Mittelbedarf. Die Leitung bündelt die Vorschläge und stellt fest, dass Gesamtbudget und erwarteter Umsatz noch nicht zusammenpassen.'],
            effects: ['operative Marktkenntnis fließt ein', 'Bedarfe werden konkret begründet', 'Zusammenführung erfordert Priorisierung'],
          },
          {
            title: 'Jahresplanung im Gegenstrom',
            paragraphs: ['Die Geschäftsführung gibt Wachstumsfelder und einen Budgetkorridor vor. Teams erstellen Teilpläne und melden einen Großkundenverlust sowie Potenzial in einem neuen Kanal. In zwei Abstimmungsrunden werden Ziele, Maßnahmen und Mittel angepasst.'],
            effects: ['strategischer Rahmen bleibt erhalten', 'operative Erkenntnisse verändern Teilziele', 'Freigabe folgt nach dokumentierter Abstimmung'],
          },
        ],
      },
      {
        heading: 'Typische Einsatzsituationen',
        paragraphs: [
          'Top-down eignet sich eher für verbindliche strategische Leitplanken, akute Sparvorgaben oder einheitliche Mindestziele. Bottom-up ist hilfreich, wenn Fachwissen stark verteilt ist, lokale Marktkenntnis zählt oder Maßnahmen aus Kapazitäten abgeleitet werden müssen.',
          'Das Gegenstromverfahren eignet sich besonders für Jahresplanung, Budgetrunden und größere Programme, bei denen Strategie und operative Machbarkeit gleichzeitig berücksichtigt werden sollen. Kleine Unternehmen können es pragmatisch mit wenigen klar terminierten Abstimmungsrunden anwenden.',
          [
            'Wo Ziele mit Beschäftigten abgestimmt werden, ist die Abgrenzung zu ',
            { type: 'link', href: '/wissen/zielvereinbarungen', text: 'Zielvereinbarungen' },
            ' wichtig. Ein Planungsverfahren entscheidet nicht automatisch über die arbeitsrechtliche Bedeutung eines individuellen Ziels.',
          ],
        ],
      },
      {
        heading: 'Plan kontrollieren und anpassen',
        paragraphs: [
          [
            'Der freigegebene Plan braucht klare Verantwortlichkeiten, Termine, Messgrößen und Annahmen. Der ',
            { type: 'link', href: '/wissen/plan-ist-vergleich', text: 'Plan-Ist-Vergleich' },
            ' zeigt später, wo tatsächliche Werte abweichen.',
          ],
          'Abweichungen machen das gewählte Verfahren nicht automatisch falsch. Entscheidend ist, Ursachen zu analysieren, Annahmen zu aktualisieren und Änderungen nachvollziehbar zu beschließen. Gegenstrom darf nicht zu endlosen Runden ohne Entscheidung werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Top-down beginnt mit Vorgaben der Unternehmensleitung',
    'Bottom-up beginnt mit Teilplänen der operativen Bereiche',
    'Das Gegenstromverfahren kombiniert zentralen Rahmen und dezentrale Rückmeldung',
    'Top-down ist häufig schneller, Bottom-up nutzt stärker verteiltes Fachwissen',
    'Beteiligung kann Akzeptanz fördern, garantiert aber keine gute Planung',
    'Gegenstrom gleicht Strategie, Machbarkeit und Ressourcen mehrfach ab',
    'Jeder freigegebene Plan braucht Verantwortlichkeiten, Messgrößen und Kontrolle',
  ],
  commonMistakes: [
    'Top-down-Ziele ohne Prüfung von Kapazitäten und Marktdaten herunterbrechen',
    'Bottom-up-Teilpläne ohne gemeinsame Annahmen oder Leitplanken sammeln',
    'Vorschläge einholen, obwohl Änderungen ausgeschlossen sind',
    'Budgetwünsche mit belastbaren Planwerten verwechseln',
    'Ziele absichtlich niedrig planen, um sie sicher zu erreichen',
    'im Gegenstrom neue Runden ohne Entscheidungsregeln und Termin beginnen',
    'unvereinbare Teilpläne addieren, statt Abhängigkeiten zu prüfen',
    'nach der Freigabe keine Plan-Ist-Kontrolle durchführen',
  ],
  faqs: [
    { question: 'Was bedeutet Top-down in der Planung?', answer: 'Die Unternehmensleitung gibt Ziele oder Eckwerte vor, die nachgeordnete Bereiche konkretisieren und auf Teilpläne herunterbrechen.' },
    { question: 'Was bedeutet Bottom-up in der Planung?', answer: 'Operative Bereiche erstellen zunächst Planvorschläge. Diese werden anschließend zusammengeführt, abgestimmt und auf höherer Ebene entschieden.' },
    { question: 'Was ist das Gegenstromverfahren?', answer: 'Es verbindet zentrale Vorgaben mit dezentraler Planung und Rückmeldung. Gesamt- und Teilpläne werden in Abstimmungsrunden angepasst.' },
    { question: 'Welches Planungsverfahren ist am besten?', answer: 'Keines ist allgemein das beste. Zeitdruck, Unternehmensgröße, Informationsverteilung, Strategie und notwendige Beteiligung beeinflussen die Wahl.' },
    { question: 'Warum dauert das Gegenstromverfahren häufig länger?', answer: 'Weil Vorgaben, Teilpläne und Rückmeldungen über mehrere Ebenen abgeglichen werden. Klare Termine und Entscheidungsregeln begrenzen den Aufwand.' },
  ],
  related: ['unternehmensziele', 'zielvereinbarungen', 'unternehmensstrategie', 'plan-ist-vergleich'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default planungsverfahren;
