import { defaultDisclaimer } from '../shared.js';

const verantwortlichkeitenZustaendigkeiten = {
  slug: 'verantwortlichkeiten-zustaendigkeiten',
  category: 'Unternehmensführung',
  title: 'Verantwortlichkeiten & Zuständigkeiten',
  description: 'Aufgaben, Zuständigkeiten, Verantwortung und Befugnisse klar unterscheiden, delegieren und mit Vertretungs- sowie Eskalationswegen verbinden.',
  seo: {
    title: 'Verantwortlichkeiten & Zuständigkeiten | Belege24',
    description: 'Erfahre, wie Aufgaben, Verantwortung und Befugnisse sinnvoll zugeordnet und mit Stellenbeschreibungen, Vertretungen und RACI geklärt werden.',
    canonicalPath: '/wissen/verantwortlichkeiten-zustaendigkeiten',
  },
  article: {
    intro: 'Klare Verantwortlichkeiten und Zuständigkeiten legen fest, wer eine Aufgabe bearbeitet, wer Entscheidungen treffen darf und wer für das Ergebnis einsteht. Sie verbinden organisatorische Rollen mit konkreten Arbeitsabläufen und verhindern, dass wichtige Vorgänge liegen bleiben oder mehrfach bearbeitet werden.',
    sections: [
      {
        heading: 'Aufgabe, Zuständigkeit, Verantwortung und Befugnis',
        paragraphs: ['Die vier Begriffe hängen zusammen, beantworten aber unterschiedliche Fragen. Werden sie vermischt, entsteht leicht der Eindruck, eine Person sei verantwortlich, obwohl sie weder entscheiden noch auf notwendige Informationen zugreifen darf.'],
        subsections: [
          {
            heading: 'Aufgabe: Was ist zu tun?',
            paragraphs: [
              [
                'Eine ',
                { type: 'glossary', id: 'aufgabe', text: 'Aufgabe' },
                ' beschreibt eine zu erledigende Tätigkeit oder ein erwartetes Arbeitsergebnis, etwa eine Rechnung sachlich prüfen oder einen Liefertermin bestätigen.',
              ],
            ],
          },
          {
            heading: 'Zuständigkeit: Wer ist dafür vorgesehen?',
            paragraphs: [
              [
                'Die ',
                { type: 'glossary', id: 'zustaendigkeit', text: 'Zuständigkeit' },
                ' ordnet eine Aufgabe, Entscheidung oder einen Themenbereich einer Stelle, Rolle oder Organisationseinheit zu.',
              ],
            ],
          },
          {
            heading: 'Verantwortung: Wer steht für das Ergebnis ein?',
            paragraphs: [
              [
                { type: 'glossary', id: 'verantwortung', text: 'Verantwortung' },
                ' bedeutet, für eine ordnungsgemäße Bearbeitung, Entscheidung oder ein Ergebnis einzustehen und bei Abweichungen zu reagieren.',
              ],
            ],
          },
          {
            heading: 'Befugnis: Was darf entschieden oder veranlasst werden?',
            paragraphs: [
              [
                'Eine ',
                { type: 'glossary', id: 'befugnis', text: 'Befugnis' },
                ' ist das eingeräumte Recht, Informationen zu erhalten, Ressourcen einzusetzen, Freigaben zu erteilen oder innerhalb festgelegter Grenzen zu entscheiden.',
              ],
            ],
          },
        ],
        formulaCards: [
          {
            label: 'Grundschema',
            title: 'Aufgabe + Befugnis + Verantwortung',
            formula: 'Aufgabe: Was ist zu tun?\nBefugnis: Was darf entschieden werden?\nVerantwortung: Wer steht für das Ergebnis ein?',
            description: 'Die Zuständigkeit ordnet dieses Paket einer Rolle oder Stelle zu. Ressourcen, Informationen und Vertretung müssen dazu passen.',
          },
        ],
      },
      {
        heading: 'Warum klare Zuständigkeiten wichtig sind',
        paragraphs: [
          'Klare Zuständigkeiten verkürzen Such- und Wartezeiten. Beschäftigte wissen, an wen sie einen Vorgang übergeben, wer eine Entscheidung trifft und wann eine Frage eskaliert werden muss. Kunden und Geschäftspartner erhalten verlässlichere Antworten.',
          'Rollenklarheit bedeutet nicht, jede Kleinigkeit starr vorzuschreiben. Sie schafft einen verlässlichen Rahmen, innerhalb dessen Teams selbstständig zusammenarbeiten können. Bei Veränderungen sollte nachvollziehbar sein, wer vorübergehend übernimmt und wer die dauerhafte Zuordnung aktualisiert.',
        ],
      },
      {
        heading: 'Fachliche, organisatorische und Entscheidungsverantwortung',
        subsections: [
          {
            heading: 'Fachliche Verantwortung',
            paragraphs: ['Sie betrifft die inhaltliche Richtigkeit und Qualität einer Aufgabe. Eine Fachperson prüft beispielsweise, ob eine technische Spezifikation oder steuerlich relevante Zuordnung plausibel ist.'],
          },
          {
            heading: 'Organisatorische Verantwortung',
            paragraphs: ['Sie betrifft geeignete Abläufe, Ressourcen, Informationen, Termine und Vertretungen. Eine Teamleitung kann den Rahmen organisieren, ohne jede Aufgabe selbst fachlich zu bearbeiten.'],
          },
          {
            heading: 'Entscheidungsverantwortung',
            paragraphs: ['Sie betrifft Auswahl und Freigabe innerhalb eines festgelegten Rahmens. Entscheidungskriterien, Wertgrenzen und Fälle für eine höhere Freigabe sollten erkennbar sein.'],
          },
        ],
        paragraphs: ['Die Verantwortungsarten können bei einer Person zusammenliegen oder auf mehrere Rollen verteilt sein. Dann muss klar sein, wie sie Informationen austauschen und wer bei unterschiedlichen Einschätzungen abschließend entscheidet.'],
      },
      {
        heading: 'Aufgaben delegieren',
        paragraphs: [
          [
            { type: 'glossary', id: 'delegation', text: 'Delegation' },
            ' bedeutet, Aufgaben und die dafür notwendigen Befugnisse einer anderen geeigneten Person oder Rolle zu übertragen. Eine gute Delegation beschreibt Ergebnis, Rahmen, Termin, verfügbare Mittel, Entscheidungsspielraum und erforderliche Rückmeldung.',
          ],
          'Die delegierende Person sollte Qualifikation und Kapazität berücksichtigen und sicherstellen, dass benötigte Informationen zugänglich sind. Mikromanagement nimmt den eingeräumten Spielraum wieder zurück; eine Übergabe ohne erreichbare Ansprechperson oder Kontrolle lässt dagegen Risiken ungesteuert.',
        ],
      },
      {
        heading: 'Verantwortung delegieren – aber nicht pauschal abgeben',
        paragraphs: [
          'Mit einer Aufgabe kann Verantwortung für die ordnungsgemäße Ausführung übertragen werden. Die delegierende Stelle behält je nach Rolle und Situation jedoch Auswahl-, Informations-, Koordinations- oder Überwachungsverantwortung. Bei erkennbaren Problemen muss sie gegebenenfalls eingreifen.',
          [
            'Rechtlich zugewiesene Organ-, Leitungs- oder Überwachungspflichten können durch eine interne Aufgabenverteilung nicht stets vollständig übertragen werden. Welche Verantwortung verbleibt, hängt von Rechtsform, Pflicht, Risiko und konkreter Organisation ab. Die Seite ',
            { type: 'link', href: '/wissen/geschaeftsfuehrung', text: 'Geschäftsführung' },
            ' ordnet diese Fragen auf Leitungsebene grundsätzlich ein.',
          ],
          'Dokumentiere daher nicht nur, wer eine Aufgabe ausführt, sondern auch, wer Ergebnisse prüft, Entscheidungen freigibt und bei Abweichungen informiert wird.',
        ],
      },
      {
        heading: 'Vertretungsregelungen für Abwesenheit und Ausfall',
        paragraphs: [
          'Eine Vertretungsregel bestimmt, wer bei Urlaub, Krankheit oder sonstigem Ausfall übernimmt. Sie sollte Aufgabenbereich, Dauer, Zugriffsrechte, Entscheidungsgrenzen und notwendige Übergaben enthalten. Eine namentliche Vertretung braucht außerdem eine Lösung für den Fall, dass beide Personen ausfallen.',
          'Interne Aufgabenvertretung und rechtsgeschäftliche Vertretungsmacht sind nicht dasselbe. Wer einen Vorgang fachlich übernimmt, darf nicht automatisch Verträge im Namen des Unternehmens schließen. Dafür müssen Organstellung oder Vollmachten wie Prokura und Handlungsvollmacht getrennt geprüft werden.',
          [
            'Die handelsrechtliche Außenvertretung erklären die Seiten ',
            { type: 'link', href: '/wissen/prokura', text: 'Prokura' },
            ' und Handlungsvollmacht im Detail.',
          ],
        ],
      },
      {
        heading: 'Eskalationswege festlegen',
        paragraphs: [
          'Ein Eskalationsweg legt fest, wann ein Problem an welche nächste Stelle weitergegeben wird. Mögliche Auslöser sind überschrittene Wertgrenzen, Termin- oder Qualitätsrisiken, fehlende Informationen, Interessenkonflikte oder Entscheidungen außerhalb der eigenen Befugnis.',
          'Eine Eskalation ist kein persönliches Scheitern, sondern ein geplanter Bestandteil der Organisation. Sie sollte früh genug erfolgen, damit noch gehandelt werden kann. Dringlichkeit, benötigte Entscheidung, bisherige Schritte und mögliche Folgen sollten knapp mitgeteilt werden.',
        ],
      },
      {
        heading: 'Schnittstellen zwischen Abteilungen',
        paragraphs: [
          'An Schnittstellen wechseln Vorgänge und Informationen zwischen Bereichen. Vertrieb, Einkauf, Leistungserstellung und Buchhaltung können jeweils andere Ziele und Daten benötigen. Unklarheit entsteht besonders dann, wenn niemand für Vollständigkeit der Übergabe verantwortlich ist.',
          [
            'Für jede wichtige Übergabe sollten Eingabe, Ergebnis, Format, Termin, sendende und empfangende Rolle festgelegt sein. Die ',
            { type: 'link', href: '/wissen/ablauforganisation', text: 'Ablauforganisation' },
            ' vertieft die Gestaltung solcher Arbeitsfolgen; die ',
            { type: 'link', href: '/wissen/aufbauorganisation', text: 'Aufbauorganisation' },
            ' erklärt Stellen und Leitungsbeziehungen.',
          ],
        ],
      },
      {
        heading: 'Stellenbeschreibungen aktuell und praktisch halten',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'stellenbeschreibung', text: 'Stellenbeschreibung' },
            ' dokumentiert Zweck, wesentliche Aufgaben, Verantwortung, Befugnisse, organisatorische Einordnung und Vertretung einer Stelle. Sie beschreibt die Stelle und nicht lediglich die aktuelle Person.',
          ],
          'Sie sollte verständlich und konkret genug für Einarbeitung und Abgrenzung sein, aber nicht jeden Handgriff festschreiben. Bei neuen Systemen, gewachsenen Aufgaben oder wiederkehrenden Konflikten ist zu prüfen, ob Beschreibung und tatsächliche Arbeit noch zusammenpassen.',
        ],
      },
      {
        heading: 'RACI-Matrix als mögliches Werkzeug',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'raci-matrix', text: 'RACI-Matrix' },
            ' ordnet Rollen für einzelne Aufgaben oder Ergebnisse: Responsible bearbeitet, Accountable trägt die abschließende Ergebnisverantwortung, Consulted wird fachlich einbezogen und Informed erhält Informationen.',
          ],
          'RACI kann bei bereichsübergreifenden Projekten und Prozessen Unklarheiten sichtbar machen. Für jede Aktivität sollte es möglichst eine klar erkennbare abschließend verantwortliche Rolle geben. Das Modell ersetzt jedoch keine Vollmacht, Stellenbeschreibung oder rechtliche Zuständigkeitsprüfung.',
          'Die englischen Begriffe werden in Unternehmen unterschiedlich übersetzt. Deshalb sollte die verwendete Bedeutung vor Erstellung der Matrix vereinbart und an einem konkreten Beispiel getestet werden.',
        ],
        formulaCards: [
          {
            label: 'RACI-Schema',
            title: 'Vier Rollen in der RACI-Matrix',
            formula: 'R – Responsible: bearbeitet\nA – Accountable: trägt die abschließende Ergebnisverantwortung\nC – Consulted: wird einbezogen\nI – Informed: wird informiert',
            description: 'RACI ordnet Rollen zu Aktivitäten oder Ergebnissen. Die Matrix sagt nicht automatisch aus, wer das Unternehmen rechtsgeschäftlich vertreten darf.',
          },
        ],
      },
      {
        heading: 'Vier-Augen-Prinzip kurz eingeordnet',
        paragraphs: [
          'Beim Vier-Augen-Prinzip prüfen oder genehmigen mindestens zwei geeignete Personen einen Vorgang. Das kann bei Zahlungen, Stammdatenänderungen oder wichtigen Verträgen Fehler und Missbrauch erschweren.',
          'Die zweite Prüfung sollte einen klaren Gegenstand haben und von einer Person mit ausreichender Information und Unabhängigkeit vorgenommen werden. Eine zusätzliche Unterschrift ohne echte Prüfung schafft nur scheinbare Sicherheit.',
        ],
      },
      {
        heading: 'Praxisbeispiel: Kundenauftrag mit klaren Rollen',
        paragraphs: ['Ein kleiner Produktionsbetrieb ordnet die Rollen vom Angebot bis zur Auslieferung, ohne jeden Arbeitsschritt in einer einzigen Stelle zu bündeln.'],
        exampleCards: [
          {
            title: 'Sonderauftrag eines Geschäftskunden',
            paragraphs: [
              'Der Vertrieb nimmt Anforderungen auf und ist für ein vollständiges Angebot verantwortlich. Die Produktionsplanung prüft Machbarkeit und Liefertermin. Preisnachlässe bis fünf Prozent darf die Vertriebsleitung entscheiden; höhere Nachlässe werden an die Geschäftsführung eskaliert. Nach Auftragseingang verantwortet die Produktion die fachgerechte Herstellung, während der Vertrieb den Kunden über Terminänderungen informiert. Bei Abwesenheit übernimmt jeweils eine dokumentierte Stellvertretung mit denselben internen Systemrechten innerhalb ihrer Freigabegrenzen.',
            ],
            effects: ['Aufgabe: Anforderungen aufnehmen, prüfen, herstellen und informieren', 'Befugnis: Preisnachlass bis zur festgelegten Grenze', 'Verantwortung: je Ergebnis einer klaren Rolle zugeordnet', 'Eskalation: höhere Nachlässe und gefährdete Termine', 'Vertretung: vorab benannt und technisch ermöglicht'],
          },
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Aufgabe, Zuständigkeit, Verantwortung und Befugnis beantworten unterschiedliche Fragen',
    'Verantwortung sollte mit ausreichenden Informationen, Ressourcen und Entscheidungsrechten verbunden sein',
    'Delegation braucht klare Ergebnisse, Grenzen, Rückmeldung und angemessene Überwachung',
    'Rechtlich zugewiesene Verantwortung kann intern nicht immer vollständig übertragen werden',
    'Vertretung, Eskalation und Schnittstellen gehören zur Zuständigkeitsklärung',
    'Stellenbeschreibung und RACI-Matrix sind ergänzende Werkzeuge, keine Vertretungsvollmachten',
  ],
  commonMistakes: [
    'Aufgabe, Zuständigkeit und Verantwortung synonym verwenden',
    'Ergebnisverantwortung ohne ausreichende Befugnisse oder Informationen übertragen',
    'mehrere Personen als gleichermaßen abschließend verantwortlich bezeichnen',
    'Aufgaben delegieren, ohne Rahmen, Termin und Rückmeldung festzulegen',
    'interne Aufgabenvertretung mit rechtsgeschäftlicher Vertretungsmacht verwechseln',
    'Eskalation erst vorsehen, wenn Frist oder Ziel bereits verfehlt ist',
    'Übergaben beschreiben, aber niemanden für ihre Vollständigkeit zuständig machen',
    'Stellenbeschreibungen an Personen statt an dauerhaften Rollen ausrichten',
    'eine RACI-Matrix erstellen, ohne die Begriffe gemeinsam zu definieren',
    'Vier-Augen-Freigaben ohne echte zweite Prüfung durchführen',
  ],
  faqs: [
    { question: 'Was ist der Unterschied zwischen Zuständigkeit und Verantwortung?', answer: 'Zuständigkeit ordnet eine Aufgabe oder Entscheidung einer Rolle zu. Verantwortung bedeutet, für ordnungsgemäße Bearbeitung oder das Ergebnis einzustehen.' },
    { question: 'Was ist eine Befugnis?', answer: 'Eine Befugnis ist das eingeräumte Recht, innerhalb festgelegter Grenzen Informationen zu erhalten, Ressourcen einzusetzen, freizugeben oder zu entscheiden.' },
    { question: 'Kann Verantwortung vollständig delegiert werden?', answer: 'Nicht immer. Ausführungs- und Ergebnisverantwortung können verteilt werden, während je nach Rolle rechtliche Leitungs-, Auswahl- oder Überwachungspflichten verbleiben.' },
    { question: 'Was bedeutet RACI?', answer: 'RACI steht für Responsible, Accountable, Consulted und Informed. Das Modell ordnet Bearbeitung, Ergebnisverantwortung, Beratung und Information einzelnen Rollen zu.' },
    { question: 'Ist eine Vertretungsregel automatisch eine Vollmacht?', answer: 'Nein. Eine interne Aufgabenvertretung erlaubt nicht automatisch rechtsgeschäftliches Handeln für das Unternehmen. Die notwendige Vertretungsmacht muss getrennt geprüft werden.' },
  ],
  related: ['aufbauorganisation', 'ablauforganisation', 'geschaeftsfuehrung', 'prokura', 'handlungsvollmacht'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default verantwortlichkeitenZustaendigkeiten;
