import { defaultDisclaimer } from '../shared.js';

const zielvereinbarungen = {
  slug: 'zielvereinbarungen',
  category: 'Unternehmensführung',
  title: 'Zielvereinbarungen',
  description: 'Zielvereinbarungen klar gestalten: Zielinhalt, Messung, Verantwortung, Zeitraum, Kontrollpunkte und Umgang mit Veränderungen.',
  seo: {
    title: 'Zielvereinbarungen verständlich erklärt | Belege24',
    description: 'Erfahre, wie klare Zielvereinbarungen formuliert, dokumentiert, überprüft und bei veränderten Rahmenbedingungen angepasst werden.',
    canonicalPath: '/wissen/zielvereinbarungen',
  },
  article: {
    intro: 'Eine Zielvereinbarung hält fest, welches Ergebnis Beteiligte in einem bestimmten Zeitraum erreichen wollen und wie die Zielerreichung beurteilt wird. Sie verbindet Zielinhalt, Verantwortung, Ressourcen, Messung und Kontrolltermine. Rechtliche oder vergütungsbezogene Wirkungen hängen von der konkreten Vereinbarung und ihrem betrieblichen sowie vertraglichen Rahmen ab.',
    sections: [
      {
        heading: 'Was ist eine Zielvereinbarung?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'zielvereinbarung', text: 'Zielvereinbarung' },
            ' ist eine abgestimmte Festlegung zu einem gewünschten Ergebnis. Sie sollte erkennen lassen, was erreicht werden soll, wer welchen Beitrag übernimmt, welche Bedingungen berücksichtigt werden und wann eine gemeinsame Bewertung stattfindet.',
          ],
          'Eine Zielvereinbarung ist mehr als eine Zahl in einem Formular. Ein nachvollziehbarer Austausch über Machbarkeit, Einflussmöglichkeiten, Qualität und Abhängigkeiten gehört dazu. Die Vereinbarung kann Teil eines Mitarbeitergesprächs, einer Projektplanung oder der Zusammenarbeit zwischen Bereichen sein.',
        ],
      },
      {
        heading: 'Unterschied zur einseitigen Zielvorgabe',
        paragraphs: [
          [
            'Bei einer ',
            { type: 'glossary', id: 'zielvorgabe', text: 'Zielvorgabe' },
            ' legt eine dafür befugte Stelle das Ziel einseitig fest. Bei einer Zielvereinbarung wird der Inhalt dagegen zwischen den Beteiligten abgestimmt. Ob im konkreten Arbeitsverhältnis tatsächlich eine Vereinbarung oder eine Vorgabe vorliegt, hängt nicht allein von der Überschrift ab.',
          ],
          'Auch eine Vorgabe sollte verständlich, erreichbar und mit notwendigen Ressourcen sowie Prioritäten verbunden sein. Bei einer Vereinbarung sollten Beschäftigte oder Teams tatsächlichen Einfluss auf Inhalt oder Ausgestaltung haben. Eine bereits endgültig beschlossene Zahl lediglich zur Unterschrift vorzulegen, ist keine echte Aushandlung.',
          'Welche arbeitsrechtlichen Grenzen für Vorgaben oder Vereinbarungen gelten, kann sich unter anderem aus Arbeitsvertrag, Tarifvertrag, Betriebsvereinbarung, Mitbestimmung und Einzelfall ergeben. Diese Seite ersetzt keine rechtliche Prüfung.',
        ],
      },
      {
        heading: 'Individuelle, Team- und Unternehmensziele verbinden',
        paragraphs: [
          'Individuelle Ziele beziehen sich auf den beeinflussbaren Beitrag einer Person. Teamziele bilden gemeinsame Ergebnisse ab, die mehrere Beteiligte nur zusammen erreichen. Unternehmensziele geben den übergeordneten Rahmen vor.',
          [
            'Die Zielarten und ihre Beziehungen erklärt die Seite ',
            { type: 'link', href: '/wissen/unternehmensziele', text: 'Unternehmensziele' },
            '. Eine Zielvereinbarung sollte den Beitrag zum übergeordneten Ziel sichtbar machen, ohne einer einzelnen Person Ergebnisse zuzurechnen, die sie kaum beeinflussen kann.',
          ],
          'Mehrere Ziele brauchen eine erkennbare Priorität. Individuelle Mengen-, Teamqualitäts- und Unternehmensziele dürfen nicht so gestaltet sein, dass ihre gleichzeitige Erfüllung praktisch widersprüchlich wird.',
        ],
      },
      {
        heading: 'Qualitative und quantitative Ziele',
        paragraphs: [
          'Quantitative Ziele verwenden Zahlen, etwa Absatz, Durchlaufzeit oder Fehlerquote. Sie sind leicht vergleichbar, können aber Fehlanreize setzen, wenn Qualität oder langfristige Wirkung fehlen. Eine hohe Zahl abgeschlossener Vorgänge sagt beispielsweise wenig aus, wenn viele später korrigiert werden müssen.',
          'Qualitative Ziele beschreiben eine gewünschte Qualität oder Wirkung, etwa bessere Übergaben, fachliche Entwicklung oder verständlichere Kundenkommunikation. Sie sollten anhand vorher vereinbarter Kriterien, Beispiele, Beobachtungen oder Befragungen überprüfbar sein. „Professioneller arbeiten“ ist ohne solche Kriterien zu unbestimmt.',
        ],
      },
      {
        heading: 'Zusammenhang mit SMART-Zielen',
        paragraphs: [
          [
            'Das ',
            { type: 'link', href: '/wissen/zielsysteme-smart-ziele', text: 'SMART-Prinzip' },
            ' hilft, Ziele spezifisch, messbar, akzeptiert beziehungsweise attraktiv, realistisch und terminiert zu formulieren. Für Zielvereinbarungen ist es eine hilfreiche Konkretisierungshilfe.',
          ],
          'SMART allein klärt jedoch nicht, ob ein Ziel strategisch sinnvoll, fair beeinflussbar oder mit anderen Zielen vereinbar ist. Ressourcen, Abhängigkeiten, Verantwortlichkeiten und mögliche Nebenwirkungen müssen zusätzlich besprochen werden.',
        ],
      },
      {
        heading: 'Messbarkeit nachvollziehbar festlegen',
        paragraphs: [
          'Eine gute Messregel benennt Ausgangswert, Zielwert oder Kriterien, Datenquelle, Berechnung und Bewertungszeitpunkt. Wenn mehrere Systeme unterschiedliche Werte liefern können, sollte feststehen, welche Quelle maßgeblich ist und wann der Datenstand eingefroren wird.',
          'Messbar bedeutet nicht zwingend eine einzelne Kennzahl. Bei qualitativen Zielen können mehrere vereinbarte Nachweise genutzt werden, etwa ein umgesetzter Standard, dokumentierte Stichproben und Rückmeldungen aus festgelegten Situationen.',
        ],
      },
      {
        heading: 'Verantwortlichkeiten und Einflussmöglichkeiten',
        paragraphs: [
          'Die Vereinbarung sollte festhalten, wer für welche Maßnahme und welches Ergebnis verantwortlich ist, wer unterstützt und wer Entscheidungen oder Ressourcen freigibt. Verantwortlichkeit muss mit ausreichenden Befugnissen und Informationen verbunden sein.',
          'Externe oder bereichsübergreifende Abhängigkeiten gehören ausdrücklich in die Vereinbarung. Wenn ein Ziel von Lieferfähigkeit, Systemeinführung oder Entscheidungen anderer Stellen abhängt, sollte geregelt sein, wie Verzögerungen gemeldet und bewertet werden.',
        ],
      },
      {
        heading: 'Zeitraum und Kontrollpunkte',
        paragraphs: [
          'Neben Beginn und Ende sind bei längeren Zeiträumen sinnvolle Kontrollpunkte hilfreich. Sie zeigen früh, ob Maßnahmen greifen, Ressourcen fehlen oder Annahmen nicht mehr stimmen. Kontrollpunkte dürfen nicht zu einer versteckten täglichen Detailkontrolle werden.',
          'Lege fest, wer den Zwischenstand vorbereitet, welche Informationen betrachtet werden und welche Entscheidungen möglich sind. Ein Kontrolltermin ohne verfügbare Daten oder Befugnis zur Anpassung schafft wenig Nutzen.',
        ],
      },
      {
        heading: 'Von einem vagen Ziel zur konkreten Vereinbarung',
        paragraphs: ['Die Formulierung sollte Ergebnis und Qualitätsanspruch verbinden und nur Faktoren zurechnen, die die verantwortliche Person oder das Team angemessen beeinflussen kann.'],
        exampleCards: [
          {
            title: 'Zu vages Ziel → konkrete Zielvereinbarung',
            paragraphs: [
              'Zu vage: „Die Übergaben an die Buchhaltung verbessern.“',
              'Konkrete Vereinbarung: „Das Vertriebsteam übergibt vom 1. Oktober bis 31. Dezember mindestens 95 Prozent der angenommenen Kundenaufträge innerhalb eines Arbeitstags mit vollständiger Bestellnummer, Leistungsbeschreibung und Ansprechpartner an die Buchhaltung. Gemessen wird monatlich anhand einer gemeinsam definierten Stichprobe von 20 Aufträgen. Vertrieb und Buchhaltung besprechen den Zwischenstand am Monatsende; verantwortlich für die Auswertung sind beide Teamleitungen.“',
            ],
            effects: ['Ergebnis und Qualitätskriterien sind benannt', 'Zeitraum, Datenquelle und Stichprobe sind vereinbart', 'beide Bereiche tragen Verantwortung an der Schnittstelle', 'monatliche Kontrollpunkte ermöglichen frühe Anpassung'],
          },
        ],
      },
      {
        heading: 'Kompakte Checkliste für gute Zielvereinbarungen',
        paragraphs: ['Vor Abschluss sollten die Beteiligten die folgenden Punkte gemeinsam prüfen:'],
        list: [
          'Ziel und gewünschte Wirkung sind eindeutig beschrieben',
          'Beitrag zu Team- oder Unternehmenszielen ist nachvollziehbar',
          'Messgröße oder qualitative Bewertungskriterien sind festgelegt',
          'Ausgangswert, Datenquelle und Berechnung sind geklärt',
          'Verantwortung, Befugnisse und Unterstützung passen zusammen',
          'Ressourcen, Abhängigkeiten und mögliche Zielkonflikte sind benannt',
          'Beginn, Ende und sinnvolle Kontrollpunkte stehen fest',
          'Vorgehen bei erheblich veränderten Rahmenbedingungen ist vereinbart',
          'Bewertung, Dokumentation und mögliche Folgen sind transparent',
        ],
      },
      {
        heading: 'Zielerreichung bewerten',
        paragraphs: [
          'Zum vereinbarten Termin werden Ergebnis und Kriterien mit dem tatsächlichen Stand verglichen. Neben dem Prozentwert sollten Ursachen, Qualität, Rahmenbedingungen und nicht beabsichtigte Nebenwirkungen betrachtet werden. Eine rechnerische Nichterreichung erklärt noch nicht, warum das Ergebnis abweicht.',
          'Teilziele und qualitative Ergebnisse sollten nach der vorher vereinbarten Methode bewertet werden. Eine nachträgliche Änderung der Bewertungsregel verzerrt die Beurteilung. Offene Daten- oder Zuordnungsfragen sollten dokumentiert und gemeinsam geklärt werden.',
        ],
      },
      {
        heading: 'Variable Vergütung nur mit klaren Regeln',
        paragraphs: [
          'Zielerreichung kann grundsätzlich mit variabler Vergütung verbunden sein. Dann sind Definition, Gewichtung, Berechnung, Datenquelle, Fälligkeit und Umgang mit Eintritt, Austritt, Abwesenheit oder Zieländerungen besonders sorgfältig zu regeln.',
          'Ob und wann ein Bonusanspruch entsteht, welche Ziele wirksam vereinbart oder vorgegeben wurden und welche Folgen unterlassene oder verspätete Zielsetzung hat, ist arbeitsrechtlich einzelfallabhängig. Aus einer allgemeinen Zielbesprechung folgt nicht automatisch eine bestimmte Bonuszahlung. Vor vergütungsrelevanten Regelungen ist fachliche Prüfung sinnvoll.',
          [
            'Der Gesprächsrahmen wird auf der Seite ',
            { type: 'link', href: '/wissen/mitarbeitergespraeche', text: 'Mitarbeitergespräche' },
            ' vertieft.',
          ],
        ],
      },
      {
        heading: 'Veränderte Rahmenbedingungen',
        paragraphs: [
          'Ändern sich Markt, Aufgaben, Ressourcen oder zentrale Abhängigkeiten wesentlich, sollte die Vereinbarung überprüft werden. Nicht jede Abweichung rechtfertigt eine Zieländerung; vorhersehbare Schwankungen können bereits in Bandbreiten oder Annahmen berücksichtigt werden.',
          'Änderungen sollten gemeinsam besprochen, sachlich begründet und mit Datum dokumentiert werden. Zielwert, Gewichtung oder Bewertungsmethode dürfen nicht unbemerkt rückwirkend verschoben werden. Bleibt keine Einigung möglich, sind vertragliche und betriebliche Regeln maßgeblich und gegebenenfalls rechtlich zu prüfen.',
        ],
      },
      {
        heading: 'Dokumentation und Nachhalten',
        paragraphs: [
          'Dokumentiere Ziel, Kriterien, Verantwortlichkeiten, Ressourcen, Zeitraum, Kontrollpunkte und Umgang mit Änderungen in verständlicher Form. Beide Seiten sollten wissen, welche Fassung gilt und wo sie zugänglich ist.',
          'Bei personenbezogenen Leistungsdaten sind Zweck, Zugriff, Aufbewahrung und Schutz angemessen zu organisieren. Die Dokumentation sollte erforderliche Fakten enthalten und keine unnötigen persönlichen Bewertungen sammeln.',
          [
            'Ziele können Orientierung und erlebte Wirksamkeit unterstützen, garantieren aber keine Motivation. Diesen Zusammenhang behandelt die Seite ',
            { type: 'link', href: '/wissen/mitarbeitermotivation', text: 'Mitarbeitermotivation' },
            ' gesondert.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine Zielvereinbarung wird abgestimmt; eine Zielvorgabe wird einseitig festgelegt',
    'Messung, Datenquelle, Verantwortung, Zeitraum und Kontrollpunkte gehören in die Vereinbarung',
    'Individuelle Ziele sollten einen beeinflussbaren Beitrag zu übergeordneten Zielen abbilden',
    'SMART konkretisiert Ziele, ersetzt aber keine Prüfung von Sinn, Fairness und Abhängigkeiten',
    'Bewertungsregeln sollten nicht nachträglich einseitig verändert werden',
    'Bonus- und arbeitsrechtliche Folgen hängen von der konkreten Regelung und dem Einzelfall ab',
  ],
  commonMistakes: [
    'eine einseitig festgelegte Zahl lediglich als Zielvereinbarung bezeichnen',
    'Ziele vereinbaren, die die verantwortliche Person kaum beeinflussen kann',
    'nur Mengen messen und Qualität oder Nebenwirkungen ausblenden',
    'Datenquelle, Berechnung oder Ausgangswert offenlassen',
    'Verantwortung ohne ausreichende Befugnisse und Ressourcen übertragen',
    'mehrere widersprüchliche Ziele ohne Priorität nebeneinanderstellen',
    'erst am Ende des Zeitraums über erkennbare Hindernisse sprechen',
    'Bewertungskriterien nachträglich verändern',
    'variable Vergütung ohne eindeutige Berechnungs- und Änderungsregeln verknüpfen',
    'Änderungen nur mündlich besprechen und die geltende Fassung nicht dokumentieren',
  ],
  faqs: [
    { question: 'Was ist eine Zielvereinbarung?', answer: 'Sie ist eine abgestimmte Festlegung darüber, welches Ergebnis in einem Zeitraum erreicht und nach welchen Kriterien die Zielerreichung beurteilt werden soll.' },
    { question: 'Was ist der Unterschied zu einer Zielvorgabe?', answer: 'Eine Zielvereinbarung wird zwischen Beteiligten abgestimmt. Eine Zielvorgabe legt eine dafür befugte Stelle einseitig fest.' },
    { question: 'Muss eine Zielvereinbarung immer eine Zahl enthalten?', answer: 'Nein. Qualitative Ziele können anhand vorher vereinbarter Kriterien, Beispiele oder Beobachtungen überprüft werden.' },
    { question: 'Kann eine Zielvereinbarung später geändert werden?', answer: 'Bei erheblich veränderten Rahmenbedingungen kann eine Überprüfung sinnvoll sein. Änderungen sollten begründet, abgestimmt und mit Datum dokumentiert werden.' },
    { question: 'Entsteht durch Zielerreichung automatisch ein Bonusanspruch?', answer: 'Nein, nicht automatisch. Ein möglicher Anspruch hängt von der konkreten Vergütungsregelung, ihrer wirksamen Ausgestaltung und dem Einzelfall ab.' },
  ],
  related: ['unternehmensziele', 'zielsysteme-smart-ziele', 'mitarbeitergespraeche', 'mitarbeitermotivation'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default zielvereinbarungen;
