import { defaultDisclaimer } from '../shared.js';

const fuehrungskontinuum = {
  slug: 'fuehrungskontinuum',
  category: 'Unternehmensführung',
  title: 'Führungskontinuum nach Tannenbaum & Schmidt',
  description: 'Das Führungskontinuum von chefzentrierter Entscheidung bis zu großer Mitarbeiterbeteiligung verständlich und praxisnah erklärt.',
  seo: {
    title: 'Führungskontinuum nach Tannenbaum & Schmidt | Belege24',
    description: 'Verstehe die Beteiligungsgrade zwischen chefzentrierter und mitarbeiterzentrierter Führung mit Einflussfaktoren und Praxisbeispielen.',
    canonicalPath: '/wissen/fuehrungskontinuum',
  },
  article: {
    intro: 'Das Führungskontinuum nach Robert Tannenbaum und Warren H. Schmidt beschreibt Führungsverhalten als fließende Spannweite. Je weiter sich eine Entscheidung zur mitarbeiterzentrierten Seite bewegt, desto mehr Einfluss und Entscheidungsfreiheit erhalten Mitarbeitende.',
    sections: [
      {
        heading: 'Grundidee: Kontinuum statt fester Führungsstile',
        paragraphs: [
          'Tannenbaum und Schmidt veröffentlichten ihr Modell ursprünglich 1958 und überarbeiteten es später. Statt Führungskräfte dauerhaft einem festen Stil zuzuordnen, ordnet das Kontinuum unterschiedliche Verhaltensweisen entlang des Entscheidungsspielraums ein.',
          'Eine Führungskraft kann bei verschiedenen Entscheidungen unterschiedliche Punkte wählen. Das Modell fragt damit praktisch: Wer analysiert das Problem, wer entwickelt Alternativen, wer trifft die Entscheidung und welche Grenzen gelten?',
        ],
      },
      {
        heading: 'Chefzentrierte und mitarbeiterzentrierte Führung',
        paragraphs: [
          'Am chefzentrierten Ende nutzt die Führungskraft einen großen Teil ihrer formalen Entscheidungsbefugnis. Sie entscheidet und teilt das Ergebnis mit. Am mitarbeiterzentrierten Ende erhalten Mitarbeitende einen großen Freiheitsbereich, entscheiden aber weiterhin innerhalb eines von der Führung oder Organisation gesetzten Rahmens.',
          'Die beiden Seiten sind keine pauschale Rangfolge von schlecht nach gut. Bei unmittelbarer Gefahr kann eine schnelle chefzentrierte Entscheidung angemessen sein. Bei einer komplexen Verbesserung kann ein größerer Beteiligungsgrad wichtig sein, weil Wissen und Umsetzungserfahrung im Team verteilt sind.',
        ],
      },
      {
        heading: 'Zunehmende Grade der Mitarbeiterbeteiligung',
        paragraphs: [
          'Die Übergänge sind fließend. Die sieben verbreiteten Stufen helfen, den tatsächlichen Einfluss der Mitarbeitenden genauer zu benennen und Scheinbeteiligung zu vermeiden.',
        ],
        formulaCards: [
          {
            label: 'Horizontales Schema',
            title: 'Führungskraft entscheidet → zunehmende Beteiligung → Team entscheidet im Rahmen',
            formula: '1 Entscheiden & mitteilen\n→ 2 Entscheiden & begründen\n→ 3 Idee vorstellen & Fragen zulassen\n→ 4 vorläufige Entscheidung zur Diskussion stellen\n→ 5 Problem darstellen & Vorschläge einholen\n→ 6 Grenzen setzen & gemeinsam beziehungsweise im Team entscheiden\n→ 7 Team entscheidet innerhalb des vereinbarten Rahmens',
            description: 'Von links nach rechts sinkt der von der Führungskraft unmittelbar genutzte Entscheidungsraum, während der Freiheits- und Einflussbereich der Mitarbeitenden wächst.',
          },
        ],
      },
      {
        heading: 'Entscheiden, mitteilen und erklären',
        paragraphs: [
          'Auf der ersten Stufe trifft die Führungskraft die Entscheidung und gibt sie bekannt. Auf der zweiten Stufe bleibt die Entscheidung ebenfalls abgeschlossen, wird aber mit Hintergründen und Gründen erläutert. Mitarbeitende können dadurch die Umsetzung besser verstehen, haben die Entscheidung selbst jedoch nicht beeinflusst.',
          'Auf der nächsten Stufe stellt die Führungskraft ihre Idee vor und beantwortet Fragen. Das verbessert den Informationsaustausch, ist aber noch keine gemeinsame Entscheidung. Transparenz verlangt deshalb eine klare Aussage dazu, ob und was noch verändert werden kann.',
        ],
        exampleCards: [
          {
            title: 'Sofortige Sicherheitsentscheidung',
            paragraphs: ['Nach einer technischen Warnmeldung stoppt die Betriebsleitung eine Anlage und teilt die verbindlichen Sicherungsschritte mit. Nach der akuten Lage erklärt sie die Risikobewertung und wertet Verbesserungsvorschläge mit dem Team aus.'],
            effects: ['akute Entscheidung bleibt bei der Führung', 'Gründe und Grenzen werden erklärt', 'Beteiligung folgt bei der späteren Verbesserung'],
          },
          {
            title: 'Entscheidung mit Begründung',
            paragraphs: ['Die Geschäftsführung hat wegen einer vertraglichen Frist bereits einen Softwareanbieter ausgewählt. Sie legt Kriterien, Kosten und Risiken offen und beantwortet Fragen, behauptet aber nicht, die Auswahl stehe noch zur Abstimmung.'],
            effects: ['Entscheidungsspielraum wird ehrlich benannt', 'Nachvollziehbarkeit steigt', 'Fragen beeinflussen die Umsetzung, nicht rückwirkend die Auswahl'],
          },
        ],
      },
      {
        heading: 'Vorschläge zulassen und Entscheidungen teilen',
        paragraphs: [
          'In der Mitte des Kontinuums kann die Führungskraft eine vorläufige Entscheidung zur Diskussion stellen und bei guten Gründen ändern. Noch weiter rechts beschreibt sie nur Problem und Rahmen, sammelt Vorschläge und entscheidet danach. Der Einfluss der Mitarbeitenden steigt, auch wenn die abschließende Zuständigkeit zunächst bei der Führungskraft bleibt.',
          'Bei einer gemeinsamen Entscheidung werden Kriterien, Alternativen und Folgen zusammen bewertet. Vorab sollte geklärt sein, ob Konsens, Mehrheitsentscheidung oder eine andere Regel gilt und wie mit einem Patt umgegangen wird.',
        ],
        exampleCards: [
          {
            title: 'Dienstplan gemeinsam gestalten',
            paragraphs: ['Die Teamleitung gibt Öffnungszeiten, Mindestbesetzung und Arbeitszeitregeln vor. Das Team entwickelt und bewertet Dienstplanvarianten. Innerhalb dieses Rahmens trifft es eine gemeinsame Entscheidung und dokumentiert die Vertretungsregeln.'],
            effects: ['verbindliche Grenzen sind vorab bekannt', 'Erfahrungswissen fließt in die Lösung ein', 'Entscheidungsverfahren und Ergebnis werden festgehalten'],
          },
        ],
      },
      {
        heading: 'Größere Entscheidungsfreiheit delegieren',
        paragraphs: [
          [
            'Am mitarbeiterzentrierten Ende definiert die Führungskraft den zulässigen Rahmen und überträgt die Entscheidung an Mitarbeitende oder Team. Das ist eine Form der ',
            { type: 'glossary', id: 'delegation', text: 'Delegation' },
            ': Ziel, Befugnisse, Ressourcen, Grenzen und Rückmeldung müssen zusammenpassen.',
          ],
          [
            'Die Führungskraft verschwindet nicht aus der Verantwortung. Sie bleibt für erforderliche Informationen, Eskalationen und angemessene Kontrolle erreichbar. Die Seite ',
            { type: 'link', href: '/wissen/delegation', text: 'Delegation' },
            ' vertieft diese Voraussetzungen und Grenzen.',
          ],
        ],
        exampleCards: [
          {
            title: 'Team entscheidet innerhalb eines Budgets',
            paragraphs: ['Ein Serviceteam darf innerhalb eines Jahresbudgets von 8.000 Euro ein neues Ticketsystem auswählen. Datenschutz, Schnittstellen und Mindestfunktionen sind verbindlich. Das Team organisiert Tests, entscheidet anhand dokumentierter Kriterien und berichtet das Ergebnis.'],
            effects: ['klarer sachlicher und finanzieller Rahmen', 'echte Entscheidungsbefugnis beim Team', 'Ergebnis und Kriterien bleiben nachvollziehbar'],
          },
        ],
      },
      {
        heading: 'Einfluss von Führungskraft, Mitarbeitenden und Situation',
        paragraphs: [
          'Bei der Wahl eines Beteiligungsgrades betrachten Tannenbaum und Schmidt Kräfte in drei Bereichen. Bei der Führungskraft zählen etwa Werte, Vertrauen in das Team, Erfahrung mit Beteiligung und die eigene Sicherheit im Umgang mit offenen Ergebnissen.',
          'Bei den Mitarbeitenden sind unter anderem Fachwissen, Erfahrung, Interesse, Verantwortungsbereitschaft und Verständnis des Problems relevant. Diese Faktoren sollten aufgabenbezogen geprüft und nicht als feste Eigenschaften unterstellt werden.',
          [
            'Zur Situation gehören Zeitdruck, Risiko, Bedeutung der Entscheidung, verfügbare Informationen, rechtliche oder organisatorische Grenzen und die Frage, wie leicht ein Fehler korrigiert werden kann. Diese bewusste Anpassung ist ein Grundgedanke ',
            { type: 'glossary', id: 'situative-fuehrung', text: 'situativer Führung' },
            '.',
          ],
        ],
      },
      {
        heading: 'Praktische Einsatzmöglichkeiten',
        paragraphs: [
          'Das Kontinuum eignet sich zur Vorbereitung von Entscheidungen und Besprechungen. Formuliere vorab, welcher Teil bereits feststeht, worüber Rückmeldung erwünscht ist, wer entscheidet und welche Grenzen gelten. So wird Beteiligung konkret statt nur angekündigt.',
          'Auch im Rückblick hilft das Modell: War der Entscheidungsspielraum tatsächlich so groß wie kommuniziert? Hatte das Team die nötigen Informationen? Wurde eine gemeinsame Entscheidung später einseitig geändert? Solche Fragen verbessern Vertrauen und Entscheidungsprozesse.',
          [
            'Weitere Einteilungen und ihre Unterschiede ordnet die Seite ',
            { type: 'link', href: '/wissen/fuehrungsstile', text: 'Führungsstile' },
            ' ein.',
          ],
        ],
      },
      {
        heading: 'Grenzen des Modells',
        paragraphs: [
          'Das Kontinuum konzentriert sich stark auf Entscheidungsbeteiligung. Andere Aspekte wie Unterstützung, Macht, Konflikte, informelle Führung, Organisationskultur oder die Qualität der Kommunikation werden nur begrenzt abgebildet.',
          'Mehr Beteiligung führt nicht automatisch zu besseren oder akzeptierten Entscheidungen. Sie braucht Zeit, relevante Informationen und ein klares Verfahren. Umgekehrt darf Zeitdruck nicht routinemäßig als Begründung genutzt werden, um Wissen aus dem Team auszuschließen.',
          'Reale Führung verläuft außerdem nicht immer sauber von links nach rechts. Einzelne Teile einer Entscheidung können unterschiedlich verteilt sein. Das Modell ist deshalb eine Gesprächs- und Planungshilfe, kein Beweis für den einzig richtigen Beteiligungsgrad.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Das Modell beschreibt ein Kontinuum statt starrer Führungsstile',
    'Der Entscheidungsspielraum reicht von chefzentriert bis mitarbeiterzentriert',
    'Beteiligung wächst über mehrere Abstufungen von Information bis zur Entscheidung im gesetzten Rahmen',
    'Erklären und Fragen zulassen sind noch nicht automatisch Mitentscheidung',
    'Führungskraft, Mitarbeitende und Situation beeinflussen den passenden Beteiligungsgrad',
    'Delegierte Entscheidungen brauchen klare Ziele, Grenzen und Befugnisse',
    'Mehr Beteiligung ist nicht in jeder Lage automatisch die beste Lösung',
  ],
  commonMistakes: [
    'Information oder Begründung bereits als echte Beteiligung bezeichnen',
    'Vorschläge einholen, obwohl die Entscheidung unveränderlich feststeht',
    'unklar lassen, wer am Ende entscheidet',
    'eine Teamentscheidung ohne Kriterien oder Verfahren erwarten',
    'Entscheidungsfreiheit übertragen, aber notwendige Informationen und Befugnisse zurückhalten',
    'mehr Beteiligung unabhängig von Zeit, Risiko und Aufgabe immer als besser behandeln',
    'das Kontinuum als feste Persönlichkeitseinteilung von Führungskräften verwenden',
    'rechtliche oder organisatorische Entscheidungsgrenzen übersehen',
  ],
  faqs: [
    { question: 'Was zeigt das Führungskontinuum?', answer: 'Es zeigt unterschiedliche Grade der Entscheidungsbeteiligung zwischen einer Entscheidung durch die Führungskraft und einer Teamentscheidung innerhalb gesetzter Grenzen.' },
    { question: 'Ist eine erklärte Entscheidung bereits partizipativ?', answer: 'Sie ist transparenter, aber Mitarbeitende haben die Entscheidung nicht beeinflusst. Der tatsächliche Beteiligungsgrad sollte offen benannt werden.' },
    { question: 'Wie viele Stufen hat das Modell?', answer: 'Häufig werden sieben Verhaltensstufen dargestellt. Sie sind Orientierungspunkte auf einem fließenden Kontinuum und keine starren Schubladen.' },
    { question: 'Ist mitarbeiterzentrierte Führung immer besser?', answer: 'Nein. Aufgabe, Risiko, Zeitdruck, Wissen und Verantwortungsrahmen beeinflussen, welcher Beteiligungsgrad angemessen sein kann.' },
    { question: 'Was unterscheidet Beteiligung von Delegation?', answer: 'Beteiligung kann bei Beratung oder gemeinsamer Entscheidung beginnen. Bei Delegation wird eine Entscheidung innerhalb klarer Grenzen tatsächlich übertragen.' },
  ],
  related: ['delegation', 'fuehrungsstile'],
  sources: [
    { label: 'Tannenbaum & Schmidt (1973): How to Choose a Leadership Pattern', url: 'https://hbr.org/1973/05/how-to-choose-a-leadership-pattern' },
    { label: 'Tannenbaum & Schmidt (1958): bibliografischer Nachweis der Originalfassung', url: 'https://www.econbiz.de/10002912665' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default fuehrungskontinuum;
