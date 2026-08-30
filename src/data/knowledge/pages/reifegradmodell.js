import { defaultDisclaimer } from '../shared.js';

const reifegradmodell = {
  slug: 'reifegradmodell',
  category: 'Unternehmensführung',
  title: 'Reifegradmodell nach Hersey & Blanchard',
  description: 'Das Reifegradmodell der situativen Führung mit Kompetenz, Bereitschaft und vier passenden Führungsverhaltensweisen praxisnah erklärt.',
  seo: {
    title: 'Reifegradmodell nach Hersey & Blanchard | Belege24',
    description: 'Verstehe Entwicklungsstufen sowie direktives, coachendes, unterstützendes und delegierendes Führungsverhalten mit Praxisbeispielen.',
    canonicalPath: '/wissen/reifegradmodell',
  },
  article: {
    intro: 'Das Reifegradmodell nach Hersey und Blanchard richtet Führungsverhalten am Entwicklungsstand einer Person für eine konkrete Aufgabe aus. Je nach Kompetenz und Bereitschaft beziehungsweise Motivation können mehr Anleitung, mehr Unterstützung oder größere Selbstständigkeit sinnvoll sein.',
    sections: [
      {
        heading: 'Grundidee der situativen Führung',
        paragraphs: [
          [
            'Die Grundannahme lautet: Es gibt nicht ein Führungsverhalten, das für jede Person, Aufgabe und Situation gleichermaßen passt. ',
            { type: 'glossary', id: 'situative-fuehrung', text: 'Situative Führung' },
            ' versucht deshalb, Anleitung und Unterstützung an den konkreten Bedarf anzupassen.',
          ],
          'Die Betrachtung ist aufgabenbezogen. Eine erfahrene Buchhalterin kann bei Monatsabschlüssen weitgehend selbstständig arbeiten und bei einer neuen Konsolidierungssoftware zugleich intensive Anleitung benötigen. Das Modell sollte daher nicht dazu dienen, einen Menschen allgemein als „unreif“ oder „reif“ zu etikettieren.',
        ],
      },
      {
        heading: 'Entwicklungs- oder Reifegrad',
        paragraphs: [
          'Ältere Darstellungen sprechen häufig von Reifegrad, Maturity oder Readiness. Spätere Varianten verwenden eher Entwicklungsstand oder Performance Readiness. Auch die Kürzel M1 bis M4, R1 bis R4 oder D1 bis D4 sind je nach Modellfassung unterschiedlich.',
          'Belege24 verwendet im Folgenden neutral E1 bis E4 für vier aufgabenbezogene Entwicklungsstufen. Das ist eine verständliche Arbeitsdarstellung, keine weitere Originalfassung des Modells. Entscheidend ist der Inhalt der Stufe, nicht ihr Buchstabe.',
        ],
      },
      {
        heading: 'Kompetenz und Bereitschaft oder Motivation',
        paragraphs: [
          'Kompetenz umfasst das für die konkrete Aufgabe nötige Wissen, Können und die praktische Erfahrung. Bereitschaft beschreibt, ob eine Person Verantwortung übernehmen und die Aufgabe ausführen will. In späteren Darstellungen werden dafür auch Motivation, Engagement, Selbstvertrauen oder Commitment verwendet.',
          'Diese Merkmale sind nicht dauerhaft gleich. Kompetenz kann durch Übung wachsen; Motivation und Sicherheit können nach Fehlern, bei Überlastung oder unter veränderten Bedingungen schwanken. Eine Einschätzung sollte daher gemeinsam besprochen und anhand beobachtbarer Anforderungen überprüft werden.',
        ],
      },
      {
        heading: 'Vier Entwicklungsstufen und passende Führung',
        paragraphs: [
          'Die folgende Matrix zeigt eine verbreitete praktische Zuordnung. Einzelne Publikationen beschreiben Motivation oder Bereitschaft innerhalb der Stufen etwas anders. Die Führungsbegriffe variieren ebenfalls: anweisend wird etwa als directing oder telling, coachend als coaching oder selling und unterstützend als supporting oder participating bezeichnet.',
        ],
        matrixCards: [
          {
            title: 'Entwicklungsstufe und Führungsverhalten',
            cells: [
              { code: 'E1', title: 'Anweisend / direktiv', context: 'Kompetenz niedrig · Orientierungsbedarf hoch', text: 'Aufgabe, Vorgehen, Qualitätsmaßstab und Kontrollpunkte werden klar erklärt. Unterstützung konzentriert sich zunächst auf Sicherheit und Verständnis.' },
              { code: 'E2', title: 'Coachend / überzeugend', context: 'Kompetenz wächst · Motivation oder Sicherheit kann schwanken', text: 'Die Führungskraft gibt weiter Struktur, erklärt Hintergründe, hört Fragen an, gibt häufig Rückmeldung und fördert Lernen.' },
              { code: 'E3', title: 'Unterstützend / partizipativ', context: 'Kompetenz weitgehend vorhanden · Bereitschaft oder Selbstvertrauen variabel', text: 'Entscheidungen und Problemlösung werden stärker geteilt. Die Führungskraft unterstützt, hört zu und hilft bei Hindernissen, ohne jeden Schritt vorzugeben.' },
              { code: 'E4', title: 'Delegierend', context: 'Kompetenz hoch · Bereitschaft und Verlässlichkeit hoch', text: 'Ergebnis, Grenzen und Verantwortung werden geklärt; die Person entscheidet und arbeitet weitgehend selbstständig. Vereinbarte Rückmeldungen bleiben bestehen.' },
            ],
          },
        ],
      },
      {
        heading: 'Anweisend und coachend führen',
        paragraphs: [
          'Bei einer neuen oder risikoreichen Aufgabe beschreibt die Führungskraft Ergebnis und Arbeitsschritte, benennt Grenzen und prüft früh das Verständnis. Direktiv bedeutet nicht abwertend oder unnötig autoritär. Fragen und respektvolle Kommunikation bleiben wichtig.',
          'Beim coachenden Verhalten verbindet die Führungskraft weiterhin klare Struktur mit intensiver Unterstützung. Sie erklärt Zusammenhänge, übt schwierige Schritte, gibt konkrete Rückmeldung und beteiligt die Person zunehmend an Lösungen. „Überzeugend“ oder Selling ist eine ältere Bezeichnung und bedeutet nicht, Einwände zu überreden.',
        ],
      },
      {
        heading: 'Unterstützend und delegierend führen',
        paragraphs: [
          'Wenn die fachliche Kompetenz weitgehend vorhanden ist, kann die Führungskraft direkte Vorgaben reduzieren. Sie bespricht Entscheidungen, fragt nach Hindernissen und schafft Raum für eigene Lösungen. Unterstützung bedeutet nicht, die Aufgabe zurückzunehmen.',
          [
            'Bei hoher Kompetenz und verlässlicher Bereitschaft können Ergebnis und Vorgehen weitgehend übertragen werden. Die Führungskraft klärt Ziel, Befugnisse, Ressourcen, Grenzen und Rückmeldepunkte und bleibt für Eskalationen erreichbar. Wie diese Elemente zusammengehören, erklärt die Seite ',
            { type: 'link', href: '/wissen/delegation', text: 'Delegation' },
            '.',
          ],
        ],
      },
      {
        heading: 'Warum sich Führungsverhalten verändern kann',
        paragraphs: [
          'Mit wachsender Kompetenz kann die Führungskraft schrittweise weniger Vorgaben machen und mehr Entscheidungsraum übertragen. Entwicklung verläuft jedoch nicht immer geradlinig. Eine neue Software, eine veränderte Rolle, hoher Zeitdruck oder ein Fehler können vorübergehend mehr Orientierung oder Unterstützung erforderlich machen.',
          'Änderungen sollten erklärt und gemeinsam überprüft werden. Sonst kann engere Kontrolle wie Misstrauen wirken oder zu früher Freiraum als fehlende Unterstützung. Das Modell regt dazu an, den Bedarf regelmäßig statt nur einmal einzuschätzen.',
        ],
      },
      {
        heading: 'Praxisbeispiel: neuer und erfahrener Mitarbeiter',
        paragraphs: ['Zwei Personen sollen erstmals beziehungsweise regelmäßig Kundenreklamationen bearbeiten. Die Aufgabe ist gleich, der aufgabenbezogene Entwicklungsstand aber unterschiedlich.'],
        exampleCards: [
          {
            title: 'Neuer Mitarbeiter',
            paragraphs: ['Die Teamleitung erklärt den Ablauf, zeigt Antwortvorlagen, benennt Kulanzgrenzen und prüft die ersten Fälle vor dem Versand. Sie bespricht Rückfragen täglich und erläutert, warum einzelne Entscheidungen getroffen werden.'],
            effects: ['klare Anleitung und frühe Kontrollpunkte', 'Begründungen und Feedback bauen Kompetenz auf', 'Freiraum wächst mit sicherer Anwendung'],
          },
          {
            title: 'Erfahrene Mitarbeiterin',
            paragraphs: ['Die Mitarbeiterin bearbeitet Standardfälle selbstständig innerhalb vereinbarter Kulanzgrenzen. Die Teamleitung erhält eine monatliche Auswertung und wird nur bei rechtlich sensiblen, außergewöhnlich teuren oder wiederkehrenden Ursachen einbezogen.'],
            effects: ['Ergebnis und Grenzen sind geklärt', 'Entscheidungsbefugnis liegt weitgehend bei der Mitarbeiterin', 'Kontrolle erfolgt über Ergebnisse und Eskalationen'],
          },
        ],
      },
      {
        heading: 'Zusammenhang mit Reddins Modell',
        paragraphs: [
          [
            'Wie das ',
            { type: 'link', href: '/wissen/3d-fuehrungsmodell-reddin', text: '3D-Führungsmodell nach Reddin' },
            ' betont das Reifegradmodell die Bedeutung der Situation. Reddin betrachtet die Angemessenheit eines Grundstils breiter. Hersey und Blanchard richten die Zuordnung besonders auf den Entwicklungsstand für eine bestimmte Aufgabe.',
          ],
          [
            'Beide Ansätze vereinfachen komplexe Führung. Einen Überblick über weitere Modelle bietet die Seite ',
            { type: 'link', href: '/wissen/fuehrungsstile', text: 'Führungsstile' },
            '.',
          ],
        ],
      },
      {
        heading: 'Grenzen und Kritik am Modell',
        paragraphs: [
          'Das Modell ist leicht anwendbar, doch die empirische Unterstützung für seine genaue Zuordnung von Stufen und Führungsverhalten ist uneinheitlich. Verschiedene Fassungen unterscheiden sich in Begriffen und Vorhersagen. Eine scheinbar eindeutige Einstufung kann daher mehr Sicherheit vermitteln, als tatsächlich vorhanden ist.',
          'Kompetenz, Motivation und Selbstvertrauen lassen sich nicht immer sauber in vier Stufen einordnen. Organisation, Teamdynamik, Macht, Arbeitsbedingungen, Risiko und rechtliche Verantwortung beeinflussen Führung ebenfalls. Bewertungen dürfen nicht zu Etiketten, Benachteiligung oder selbsterfüllenden Erwartungen werden.',
          'Nutze das Modell deshalb als Gesprächs- und Reflexionshilfe: Kläre die konkrete Aufgabe, frage nach Unterstützungsbedarf, beobachte Ergebnisse und passe Vereinbarungen nachvollziehbar an. Es ersetzt weder Fachurteil noch direkte Kommunikation.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Der Entwicklungsstand wird für eine konkrete Aufgabe betrachtet, nicht als feste Eigenschaft einer Person',
    'Kompetenz und Bereitschaft beziehungsweise Motivation bilden zentrale Anhaltspunkte',
    'Vier Stufen werden mit anweisendem, coachendem, unterstützendem und delegierendem Verhalten verbunden',
    'Bezeichnungen und Kürzel unterscheiden sich zwischen älteren und späteren Modellfassungen',
    'Führungsverhalten kann sich mit wachsender Kompetenz oder veränderten Bedingungen ändern',
    'Delegation braucht klare Ergebnisse, Befugnisse, Grenzen und Rückmeldung',
    'Das Modell ist eine Reflexionshilfe und keine empirisch eindeutige Führungsformel',
  ],
  commonMistakes: [
    'Menschen allgemein als reif oder unreif etikettieren',
    'den Entwicklungsstand unabhängig von einer konkreten Aufgabe bewerten',
    'Kompetenz mit Motivation oder Selbstvertrauen gleichsetzen',
    'eine Bezeichnung oder Übersetzung als einzig richtige Modellfassung darstellen',
    'direktive Führung mit respektlosem oder unnötig autoritärem Verhalten verwechseln',
    'Delegation als vollständigen Rückzug der Führungskraft verstehen',
    'eine einmal festgelegte Stufe nie wieder überprüfen',
    'die Zuordnung als wissenschaftlich eindeutiges Erfolgsrezept behandeln',
  ],
  faqs: [
    { question: 'Was bedeutet Reifegrad im Modell von Hersey und Blanchard?', answer: 'Gemeint ist der aufgabenbezogene Entwicklungsstand aus Kompetenz und Bereitschaft beziehungsweise Motivation. Er ist keine allgemeine Bewertung der Person.' },
    { question: 'Welche vier Führungsverhaltensweisen unterscheidet das Modell?', answer: 'Häufig werden anweisend oder direktiv, coachend oder überzeugend, unterstützend oder partizipativ sowie delegierend unterschieden.' },
    { question: 'Warum heißen die Stufen in Quellen unterschiedlich?', answer: 'Das ursprüngliche gemeinsame Modell und spätere Weiterentwicklungen verwenden unterschiedliche Begriffe, Kürzel und Übersetzungen. Deshalb sollte stets die verwendete Fassung erklärt werden.' },
    { question: 'Muss eine Person alle Stufen nacheinander durchlaufen?', answer: 'Nicht zwingend. Vorwissen, Aufgabe und veränderte Bedingungen können zu einem anderen Ausgangspunkt oder wechselndem Unterstützungsbedarf führen.' },
    { question: 'Ist das Reifegradmodell wissenschaftlich eindeutig bestätigt?', answer: 'Nein. Die Grundidee ist anschaulich, aber die empirischen Ergebnisse zur genauen Zuordnung von Entwicklungsstufen und optimalem Führungsverhalten sind uneinheitlich.' },
  ],
  related: ['delegation', 'fuehrungsstile', '3d-fuehrungsmodell-reddin', 'kontingenzmodell-fiedler'],
  sources: [
    { label: 'Center for Leadership Studies: Situational Leadership – Ability and Willingness', url: 'https://situational.com/situational-leadership/' },
    { label: 'Thompson & Vecchio (2009): Situational leadership theory – A test of three versions', url: 'https://doi.org/10.1016/j.leaqua.2009.06.014' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default reifegradmodell;
