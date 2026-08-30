import { defaultDisclaimer } from '../shared.js';

const mitarbeitergespraeche = {
  slug: 'mitarbeitergespraeche',
  category: 'Unternehmensführung',
  title: 'Mitarbeitergespräche',
  description: 'Mitarbeitergespräche gut vorbereiten, strukturiert führen, konkrete Vereinbarungen treffen und verlässlich nachhalten.',
  seo: {
    title: 'Mitarbeitergespräche richtig führen | Belege24',
    description: 'Erfahre, wie Entwicklungs-, Feedback-, Ziel- und Kritikgespräche vorbereitet, strukturiert und nachvollziehbar nachbereitet werden.',
    canonicalPath: '/wissen/mitarbeitergespraeche',
  },
  article: {
    intro: 'Ein Mitarbeitergespräch ist ein bewusst vorbereitetes Gespräch zwischen Führungskraft und Beschäftigtem zu Zusammenarbeit, Leistung, Entwicklung, Erwartungen oder konkreten Anliegen. Ein klarer Anlass, gegenseitiges Zuhören und nachvollziehbare Vereinbarungen machen es hilfreicher als ein einseitiger Vortrag.',
    sections: [
      {
        heading: 'Was ist ein Mitarbeitergespräch?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'mitarbeitergespraech', text: 'Mitarbeitergespräch' },
            ' schafft einen geplanten Rahmen für Themen, die im Tagesgeschäft leicht zu kurz kommen. Es kann regelmäßig stattfinden oder durch ein konkretes Ereignis ausgelöst werden.',
          ],
          'Nicht jedes kurze Abstimmungsgespräch ist ein formelles Mitarbeitergespräch. Entscheidend sind Zweck und notwendige Vorbereitung. Je sensibler das Thema und je größer mögliche Folgen, desto wichtiger sind ein geeigneter Rahmen, transparente Beteiligte und gegebenenfalls eine vorherige arbeitsrechtliche oder datenschutzrechtliche Prüfung.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Vom Anlass zur Umsetzung',
            formula: 'Vorbereiten → Gespräch führen → Vereinbaren → Nachhalten',
            description: 'Der Ablauf ist kein starres Skript. Er sorgt dafür, dass Anlass, Sichtweisen, nächste Schritte und spätere Überprüfung nicht verloren gehen.',
          },
        ],
      },
      {
        heading: 'Typische Anlässe',
        paragraphs: ['Mitarbeitergespräche können unterschiedliche Ziele haben. Anlass und gewünschtes Ergebnis sollten bereits in der Einladung erkennbar sein, damit beide Seiten sich angemessen vorbereiten können.'],
        list: [
          'regelmäßige Reflexion von Zusammenarbeit und Entwicklung',
          'Rückmeldung zu konkretem Verhalten oder Arbeitsergebnissen',
          'Vereinbarung und Überprüfung von Zielen',
          'Einarbeitung, Rollenwechsel oder Übernahme neuer Verantwortung',
          'wiederkehrende Schwierigkeiten, Pflichtverletzungen oder Konflikte',
          'Rückkehr nach längerer Abwesenheit, soweit ein Gespräch passend und zulässig ist',
          'Wünsche zu Qualifizierung, Arbeitsorganisation oder beruflicher Entwicklung',
        ],
      },
      {
        heading: 'Regelmäßiges Entwicklungsgespräch',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'entwicklungsgespraech', text: 'Entwicklungsgespräch' },
            ' richtet den Blick auf Fähigkeiten, Aufgaben, Lernfelder und mögliche nächste Schritte. Es sollte nicht nur Defizite behandeln, sondern auch vorhandene Stärken, Interessen und künftige Anforderungen.',
          ],
          'Mögliche Ergebnisse sind eine Weiterbildung, eine neue Aufgabe mit Begleitung, ein Erfahrungsaustausch oder ein klarer Lernschritt. Entwicklung bedeutet nicht automatisch Beförderung. Zusagen zu Rolle, Vergütung oder Termin sollten nur gemacht werden, wenn sie tatsächlich entschieden und umsetzbar sind.',
        ],
        exampleCards: [
          {
            title: 'Entwicklung konkret erfragen',
            paragraphs: ['„Welche Aufgaben gelingen dir inzwischen besonders sicher? Wo möchtest du in den kommenden sechs Monaten mehr Verantwortung übernehmen, und welche Unterstützung wäre dafür nötig?“'],
            effects: ['beginnt mit beobachtbaren Erfahrungen', 'fragt Interesse und Unterstützung gemeinsam ab', 'verspricht noch keine ungesicherte Beförderung'],
          },
        ],
      },
      {
        heading: 'Feedbackgespräch',
        paragraphs: [
          [
            'In einem ',
            { type: 'glossary', id: 'feedback', text: 'Feedback' },
            'gespräch werden konkrete Beobachtungen, ihre Wirkung und mögliche Verbesserungen besprochen. Rückmeldung kann Anerkennung, Orientierung oder einen Korrekturbedarf ausdrücken.',
          ],
          'Beschreibe beobachtbares Verhalten und eine konkrete Situation statt Charaktereigenschaften zu bewerten. Trenne Beobachtung, Wirkung und Wunsch. Gib der anderen Person Raum, ihre Sicht und bisher unbekannte Umstände zu erklären.',
        ],
        exampleCards: [
          {
            title: 'Beobachtung statt pauschales Urteil',
            paragraphs: ['Ungünstig: „Du bist unzuverlässig.“ Besser: „Die letzten beiden Wochenberichte kamen jeweils zwei Tage nach dem vereinbarten Termin. Dadurch konnte ich die Monatsübersicht nicht rechtzeitig abschließen. Was hat die Verzögerung verursacht, und wie können wir den nächsten Termin sichern?“'],
            effects: ['konkrete Situation statt Persönlichkeitsurteil', 'Auswirkung wird nachvollziehbar', 'die Sicht der anderen Person wird erfragt'],
          },
        ],
      },
      {
        heading: 'Zielgespräch',
        paragraphs: [
          'Ein Zielgespräch klärt, welches Ergebnis in welchem Zeitraum erwartet wird, woran Fortschritt erkennbar ist und welche Ressourcen oder Abhängigkeiten bestehen. Verantwortliche sollten verstehen, wie das Ziel zur Aufgabe und zu übergeordneten Prioritäten beiträgt.',
          [
            'Ob eine Zielvorgabe, eine Vereinbarung oder eine vergütungsrelevante Regelung vorliegt, kann arbeitsrechtlich einen Unterschied machen. Die Seite ',
            { type: 'link', href: '/wissen/zielvereinbarungen', text: 'Zielvereinbarungen' },
            ' vertieft das Thema. Vor verbindlichen oder vergütungsrelevanten Regelungen sollten Vertrag, betriebliche Regeln und rechtliche Anforderungen geprüft werden.',
          ],
        ],
        exampleCards: [
          {
            title: 'Ziel mit Voraussetzungen besprechen',
            paragraphs: ['„Das Ziel ist, die offenen Kundenanfragen bis zum 30. Juni von 80 auf höchstens 25 zu reduzieren, ohne Anfragen vorschnell zu schließen. Welche Kapazität und Informationen brauchst du dafür, und welche Abhängigkeiten können den Fortschritt blockieren?“'],
            effects: ['Zielwert und Termin sind benannt', 'Qualität wird nicht dem Mengenwert untergeordnet', 'Ressourcen und Hindernisse werden gemeinsam geprüft'],
          },
        ],
      },
      {
        heading: 'Kritik- oder Konfliktgespräch',
        paragraphs: [
          'Ein Kritikgespräch spricht eine konkrete Abweichung von Erwartung, Regel oder vereinbartem Verhalten an. Ein Konfliktgespräch behandelt unterschiedliche Interessen, Wahrnehmungen oder belastete Zusammenarbeit. Beide brauchen einen sachlichen Rahmen und klare Grenzen für respektvolles Verhalten.',
          'Kläre vorab, ob es um informelles Feedback, Konfliktklärung oder eine mögliche arbeitsrechtliche Maßnahme geht. Diese Gesprächsarten sollten nicht überraschend vermischt werden. Bei möglichen rechtlichen Folgen, Vorwürfen schwerer Pflichtverletzungen oder Beteiligungsrechten ist fachkundige Unterstützung sinnvoll.',
          [
            'Methoden zur Klärung unterschiedlicher Interessen behandelt die Seite ',
            { type: 'link', href: '/wissen/konfliktmanagement', text: 'Konfliktmanagement' },
            '.',
          ],
        ],
        exampleCards: [
          {
            title: 'Kritik klar und offen ansprechen',
            paragraphs: ['„Für Änderungen an freigegebenen Kundendaten gilt das Vier-Augen-Prinzip. Am Dienstag wurde die Bankverbindung ohne zweite Prüfung geändert. Bitte schildere mir, wie es dazu kam. Danach klären wir, welche Schritte jetzt notwendig sind und wie wir eine Wiederholung verhindern.“'],
            effects: ['Regel und konkreter Vorgang werden benannt', 'die Erklärung wird nicht vorweggenommen', 'Sofortmaßnahme und künftige Verbesserung werden getrennt betrachtet'],
          },
        ],
      },
      {
        heading: 'Das Gespräch vorbereiten',
        paragraphs: [
          'Definiere Anlass und gewünschtes Ergebnis. Sammle konkrete Beobachtungen, relevante Vereinbarungen und notwendige Daten. Prüfe zugleich, welche Punkte offen sind und welche Entscheidung du im Gespräch tatsächlich treffen darfst.',
          'Lade rechtzeitig ein und nenne Thema, ungefähre Dauer und mögliche Vorbereitung. Wähle einen ungestörten Raum und plane genügend Zeit. Bei sensiblen oder rechtlich relevanten Themen ist vorab zu klären, wer teilnehmen sollte oder darf und welche internen Beteiligungsregeln gelten.',
        ],
        list: [
          'Anlass, Ziel und Gesprächsart festlegen',
          'Fakten von Annahmen und Bewertungen trennen',
          'konkrete Situationen und frühere Vereinbarungen zusammentragen',
          'eigene Entscheidungs- und Zusagegrenzen klären',
          'Einladung und Vorbereitung transparent gestalten',
          'Zeit, ruhigen Ort und erforderliche Beteiligte organisieren',
        ],
      },
      {
        heading: 'Eine klare Gesprächsstruktur nutzen',
        paragraphs: [
          'Beginne mit Anlass, Ziel und verfügbarem Zeitrahmen. Beschreibe anschließend Beobachtungen und lade die andere Person zu ihrer Sicht ein. Klärt gemeinsam Ursachen, Erwartungen und realistische Optionen. Fasst am Ende Vereinbarungen, offene Punkte und nächste Termine zusammen.',
          'Bei mehreren Themen hilft eine kurze Priorisierung. Ein schwieriger Kernpunkt sollte nicht zwischen vielen Nebenthemen versteckt werden. Gleichzeitig sollte ausreichend Raum für Rückfragen und abweichende Wahrnehmungen bleiben.',
        ],
        formulaCards: [
          {
            label: 'Gesprächsstruktur',
            title: 'Vom Einstieg zur Vereinbarung',
            formula: 'Anlass klären → Sichtweisen anhören → Erwartungen abgleichen → Lösungen prüfen → Schritte festhalten',
            description: 'Bei rechtlich relevanten Maßnahmen kann eine gesonderte formale Vorgehensweise nötig sein. Die Struktur ersetzt keine Prüfung des Einzelfalls.',
          },
        ],
      },
      {
        heading: 'Erwartungen und Ziele klären',
        paragraphs: [
          'Erwartungen sollten auf Rolle, Aufgabe und vereinbarte Standards bezogen sein. Begriffe wie „mehr Einsatz“ oder „bessere Kommunikation“ bleiben ohne konkrete Situationen und gewünschtes Verhalten unklar.',
          'Prüfe, ob beide Seiten dasselbe Zielverständnis haben. Messgröße, Qualitätsanforderung, Termin, Zuständigkeit, Ressourcen und Fälle für Rückmeldung oder Eskalation gehören zusammen. Unrealistische oder widersprüchliche Erwartungen sollten im Gespräch sichtbar werden.',
        ],
      },
      {
        heading: 'Feedback geben und aufnehmen',
        paragraphs: [
          'Gutes Feedback ist konkret, zeitnah genug und für den Empfänger bearbeitbar. Frage nach der Sicht der anderen Person und höre die Antwort aus, bevor du bewertest. Verständnis bedeutet nicht automatisch Zustimmung, schafft aber eine bessere Entscheidungsgrundlage.',
          'Wer Feedback erhält, kann nach Situation, Wirkung und gewünschter Veränderung fragen. Eine Führungskraft sollte auch Rückmeldung zum eigenen Verhalten aufnehmen, ohne sofort Rechtfertigungen zu liefern. Nicht jede Rückmeldung muss sofort entschieden werden; ein verbindlicher Termin für die Antwort ist oft hilfreicher.',
          [
            'Führung kann Arbeitsbedingungen und Orientierung beeinflussen, Motivation aber nicht einfach verordnen. Die Seite ',
            { type: 'link', href: '/wissen/mitarbeitermotivation', text: 'Mitarbeitermotivation' },
            ' behandelt diesen Zusammenhang gesondert.',
          ],
        ],
      },
      {
        heading: 'Dokumentation mit Augenmaß',
        paragraphs: [
          'Dokumentiere vor allem Anlass, wesentliche Feststellungen, konkrete Vereinbarungen, Verantwortliche, Termine und offene Punkte. Bewertungen und sensible persönliche Angaben sollten nur aufgenommen werden, wenn sie für den zulässigen Zweck erforderlich sind.',
          'Wer Zugriff erhält, wie lange Unterlagen aufbewahrt werden und ob eine Bestätigung oder Unterschrift erforderlich ist, hängt von Zweck, Rechtsgrundlage und betrieblichen Regeln ab. Gesprächsnotizen sind nicht automatisch beliebig nutzbar. Datenschutz, Vertraulichkeit und gegebenenfalls Beteiligungsrechte sollten vorab geklärt werden.',
          'Eine Unterschrift kann je nach Formulierung lediglich den Erhalt oder auch eine inhaltliche Vereinbarung dokumentieren. Das muss aus dem Dokument eindeutig hervorgehen und darf nicht pauschal unterstellt werden.',
        ],
      },
      {
        heading: 'Nachbereitung und vereinbarte Maßnahmen',
        paragraphs: [
          'Sende oder übergebe die vereinbarte Zusammenfassung zeitnah im vorgesehenen vertraulichen Weg. Setze zugesagte Ressourcen, Freigaben oder Informationen um. Bleiben Punkte offen, sollten Zuständigkeit und Entscheidungstermin feststehen.',
          'Nachhalten bedeutet nicht ständige Kontrolle. Vereinbart passende Zwischenstände und prüft am Termin, was erreicht wurde, welche Hindernisse bestanden und ob Maßnahmen angepasst werden müssen. Anerkenne Fortschritt ebenso konkret wie verbleibenden Klärungsbedarf.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Anlass, Gesprächsart und gewünschtes Ergebnis sollten vorab klar sein',
    'Konkrete Beobachtungen sind hilfreicher als pauschale Persönlichkeitsurteile',
    'Beide Seiten brauchen Raum für Sichtweisen, Fragen und Rückmeldung',
    'Vereinbarungen benennen Maßnahme, Verantwortung, Termin und nächste Überprüfung',
    'Dokumentation sollte zweckbezogen, sachlich und vertraulich erfolgen',
    'Rechtlich relevante Personalmaßnahmen benötigen eine gesonderte Prüfung',
  ],
  commonMistakes: [
    'Anlass und mögliche Bedeutung des Gesprächs in der Einladung verschweigen',
    'unvorbereitet mit allgemeinen Bewertungen statt konkreten Beobachtungen arbeiten',
    'mehrere unterschiedliche Gesprächsarten überraschend vermischen',
    'das Gespräch als einseitigen Vortrag ohne Rückfragen führen',
    'Charaktereigenschaften bewerten statt Verhalten und Wirkung zu besprechen',
    'Ziele vereinbaren, ohne Ressourcen und Abhängigkeiten zu prüfen',
    'Zusagen machen, für die keine Entscheidungsbefugnis besteht',
    'sensible persönliche Informationen ohne klaren Zweck dokumentieren',
    'Maßnahmen festhalten, aber Verantwortung und Termin offenlassen',
    'vereinbarte Unterstützung oder Nachfolgetermine nicht umsetzen',
  ],
  faqs: [
    { question: 'Was ist ein Mitarbeitergespräch?', answer: 'Es ist ein bewusst vorbereitetes Gespräch zwischen Führungskraft und Beschäftigtem über Zusammenarbeit, Leistung, Entwicklung, Erwartungen oder konkrete Anliegen.' },
    { question: 'Wie bereite ich ein Mitarbeitergespräch vor?', answer: 'Kläre Anlass, Gesprächsart und Ziel, sammle konkrete Beobachtungen und Vereinbarungen und organisiere einen vertraulichen Rahmen mit ausreichend Zeit.' },
    { question: 'Wie formuliere ich Kritik sachlich?', answer: 'Beschreibe eine konkrete Situation und beobachtbares Verhalten, erkläre die Wirkung, höre die andere Sicht an und vereinbare den nächsten Schritt.' },
    { question: 'Muss jedes Mitarbeitergespräch dokumentiert werden?', answer: 'Das hängt von Anlass, Zweck und betrieblichen sowie rechtlichen Anforderungen ab. Dokumentiere nur erforderliche Inhalte sachlich und kläre Zugriff sowie Aufbewahrung.' },
    { question: 'Was gehört in die Nachbereitung?', answer: 'Vereinbarte Maßnahmen, Verantwortliche, Termine, zugesagte Unterstützung und ein geeigneter Zeitpunkt zur Überprüfung sollten verlässlich nachgehalten werden.' },
  ],
  related: ['zielvereinbarungen', 'mitarbeitermotivation', 'konfliktmanagement', 'fuehrungsstile', 'verantwortlichkeiten-zustaendigkeiten'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default mitarbeitergespraeche;
