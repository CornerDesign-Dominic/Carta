import { defaultDisclaimer } from '../shared.js';

const marktanalyse = {
  slug: 'marktanalyse',
  category: 'Marketing & Vertrieb',
  title: 'Marktanalyse',
  description: 'Eine Marktanalyse untersucht Marktgröße, Kunden, Wettbewerb und Entwicklungen als Grundlage für unternehmerische Entscheidungen.',
  seo: {
    title: 'Marktanalyse erstellen – einfach erklärt | Belege24',
    description: 'Zweck, Bestandteile und Vorgehen einer Marktanalyse verstehen sowie Primär- und Sekundärforschung sinnvoll unterscheiden.',
    canonicalPath: '/wissen/marktanalyse',
  },
  article: {
    intro: 'Eine Marktanalyse untersucht einen abgegrenzten Markt zu einer konkreten Fragestellung. Sie verbindet Daten zu Marktgröße, Kunden, Wettbewerb und Entwicklungen, damit Entscheidungen nicht allein auf Vermutungen beruhen.',
    sections: [
      {
        heading: 'Wozu dient eine Marktanalyse?',
        paragraphs: [
          'Eine Marktanalyse kann klären, ob ein neues Angebot auf ausreichenden Bedarf trifft, welche Kundengruppen erreichbar sind, welche Alternativen bereits bestehen und welche Veränderungen Chancen oder Risiken schaffen. Sie wird beispielsweise vor einer Gründung, einem Markteintritt, einer Investition oder einer Neupositionierung eingesetzt.',
          'Die Analyse liefert keine sichere Zukunftsprognose. Sie macht Annahmen, Datenlücken und Handlungsoptionen sichtbar und verbessert dadurch die Grundlage einer Entscheidung.',
        ],
      },
      {
        heading: 'Markt und Fragestellung abgrenzen',
        paragraphs: [
          'Vor der Datensuche muss feststehen, welcher Markt untersucht wird: Welche Leistung, welche Kundengruppe, welches geografische Gebiet und welcher Zeitraum gehören dazu? Ein deutschlandweiter Markt für Bürosoftware ist etwas anderes als der regionale Markt für IT-Betreuung kleiner Kanzleien.',
          'Formuliere eine konkrete Frage, etwa: „Ist in der Region genügend Nachfrage für einen mobilen Wartungsservice vorhanden?“ Eine zu breite Analyse sammelt viele Zahlen, beantwortet aber möglicherweise keine Entscheidung.',
        ],
      },
      {
        heading: 'Typische Bestandteile einer Marktanalyse',
        matrixCards: [
          {
            title: 'Vier Blickrichtungen',
            cells: [
              { code: 'Markt', title: 'Größe und Struktur', context: 'Volumen, Potenzial, Segmente, Region', text: 'Wie groß ist der abgegrenzte Markt heute und welcher grundsätzlich erreichbare Bedarf könnte bestehen?' },
              { code: 'Kunden', title: 'Bedarf und Kaufverhalten', context: 'Probleme, Kriterien, Rollen, Zahlungsbereitschaft', text: 'Wer entscheidet, welche Alternativen werden genutzt und was beeinflusst den Kauf?' },
              { code: 'Wettbewerb', title: 'Anbieter und Alternativen', context: 'Leistung, Preis, Kanal, Stärken, Lücken', text: 'Welche direkten und indirekten Lösungen konkurrieren um Bedarf und Budget?' },
              { code: 'Entwicklung', title: 'Veränderungen und Einflussfaktoren', context: 'Technik, Wirtschaft, Gesellschaft, Regeln', text: 'Welche Trends oder Rahmenbedingungen könnten Nachfrage und Wettbewerb verändern?' },
            ],
          },
        ],
      },
      {
        heading: 'Marktgröße, Marktvolumen und Marktpotenzial',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'marktvolumen', text: 'Marktvolumen' },
            ' bezeichnet den tatsächlich realisierten Absatz oder Umsatz in einem klar definierten Markt und Zeitraum. Das ',
            { type: 'glossary', id: 'marktpotenzial', text: 'Marktpotenzial' },
            ' schätzt dagegen den unter bestimmten Annahmen grundsätzlich möglichen Umfang.',
          ],
          'Beide Größen hängen vollständig von der Abgrenzung und Datenqualität ab. Branchenumsatz, Zahl möglicher Kunden und durchschnittlicher Bedarf können Anhaltspunkte liefern. Ein theoretisches Potenzial ist jedoch nicht mit dem tatsächlich erreichbaren Umsatz eines einzelnen Unternehmens gleichzusetzen.',
        ],
        exampleCards: [
          {
            title: 'Marktgröße nachvollziehbar schätzen',
            paragraphs: ['In einem Liefergebiet gibt es laut Branchenverzeichnis rund 600 passende Betriebe. Gespräche und vorhandene Daten deuten darauf hin, dass etwa ein Drittel jährlich eine externe Wartung einkauft. Bei durchschnittlich 1.500 Euro Jahresumsatz je kaufendem Betrieb ergibt sich eine grobe Arbeitsschätzung von 300.000 Euro Marktvolumen.'],
            effects: ['600 Betriebe × 33 Prozent × 1.500 Euro ≈ 300.000 Euro', 'Abgrenzung, Quote und Durchschnittswert werden dokumentiert', 'die Schätzung wird als Annahme und nicht als gesicherte Nachfrage behandelt'],
          },
        ],
      },
      {
        heading: 'Kunden und Zielgruppen untersuchen',
        paragraphs: [
          [
            'Die Analyse fragt nicht nur, wer theoretisch kaufen könnte. Sie untersucht Problem, Kaufanlass, Anforderungen, Entscheidungskriterien, genutzte Alternativen und erreichbare Kontaktpunkte. Die Seite ',
            { type: 'link', href: '/wissen/zielgruppe', text: 'Zielgruppe' },
            ' erklärt die Auswahl und Abgrenzung geeigneter Kundengruppen.',
          ],
          'Im B2B-Markt können Nutzer, Fachabteilung, Einkauf und Geschäftsleitung unterschiedliche Rollen haben. Aussagen aus wenigen Gesprächen sind wertvoll, aber nicht automatisch auf den gesamten Markt übertragbar.',
        ],
      },
      {
        heading: 'Wettbewerb und Alternativen betrachten',
        paragraphs: [
          'Zur Wettbewerbsanalyse gehören direkte Anbieter mit ähnlicher Leistung und indirekte Alternativen, mit denen Kunden dasselbe Problem anders lösen. Auch Eigenleistung, Nichtstun oder eine technisch andere Lösung können konkurrieren.',
          'Verglichen werden nur entscheidungsrelevante Merkmale, etwa Leistungsumfang, Preis, Verfügbarkeit, Vertriebsweg, Service und erkennbare Stärken. Öffentliche Informationen dürfen nicht mit gesicherten internen Kenntnissen über Kosten oder Strategie eines Wettbewerbers verwechselt werden.',
        ],
      },
      {
        heading: 'Entwicklungen und Rahmenbedingungen',
        paragraphs: [
          'Technologische Veränderungen, Konjunktur, Demografie, gesellschaftliche Erwartungen oder rechtliche Vorgaben können Nachfrage und Angebot beeinflussen. Relevant sind nur Faktoren mit nachvollziehbarem Bezug zur Fragestellung.',
          [
            'Eine ',
            { type: 'link', href: '/wissen/swot-analyse', text: 'SWOT-Analyse' },
            ' kann ausgewählte externe Chancen und Risiken später mit internen Stärken und Schwächen verbinden. Sie ersetzt die Datenerhebung der Marktanalyse nicht.',
          ],
        ],
      },
      {
        heading: 'Primär- und Sekundärforschung unterscheiden',
        paragraphs: [
          [
            'Bei der ',
            { type: 'glossary', id: 'sekundaerforschung', text: 'Sekundärforschung' },
            ' werden bereits vorhandene Daten ausgewertet, beispielsweise amtliche Statistiken, Verbandsinformationen, Studien, Geschäftsberichte oder eigene Verkaufsdaten. Sie ist häufig ein schneller Ausgangspunkt.',
          ],
          [
            'Die ',
            { type: 'glossary', id: 'primaerforschung', text: 'Primärforschung' },
            ' erhebt neue Daten für die konkrete Frage, etwa durch Interviews, Beobachtungen, Befragungen oder Tests. Sie kann Informationslücken schließen, benötigt aber eine passende Auswahl und saubere Fragen.',
          ],
        ],
        formulaCards: [
          {
            label: 'Abgrenzung',
            title: 'Sekundärforschung vs. Primärforschung',
            formula: 'Sekundärforschung: vorhandene Daten prüfen\nPrimärforschung: neue Daten gezielt erheben',
            description: 'In der Praxis ist eine Kombination sinnvoll: zuerst vorhandene Informationen auswerten, danach nur wichtige Lücken mit eigener Erhebung schließen.',
          },
        ],
      },
      {
        heading: 'Marktforschung als systematische Informationsgewinnung',
        paragraphs: [
          'Marktforschung bezeichnet die systematische Gewinnung, Aufbereitung und Auswertung von Informationen zu Märkten, Kunden und Wettbewerb. Eine Marktanalyse nutzt solche Informationen für eine konkrete Bestandsaufnahme und Entscheidungsfrage. Die Begriffe werden in der Praxis teilweise überlappend verwendet; Belege24 nutzt diese Arbeitsabgrenzung.',
          'Marktforschung kann einmalig für ein Vorhaben oder fortlaufend als Marktbeobachtung organisiert werden. Fragestellung, Auswahl, Methode und Auswertung werden dokumentiert, damit die Aussagekraft erkennbar bleibt.',
        ],
      },
      {
        heading: 'Qualitative und quantitative Ansätze',
        paragraphs: [
          'Qualitative Methoden wie leitfadengestützte Interviews oder Beobachtungen helfen, Motive, Sprache, Abläufe und bislang unbekannte Zusammenhänge zu verstehen. Sie liefern Tiefe, sind aber nicht ohne Weiteres auf den Gesamtmarkt übertragbar.',
          'Quantitative Methoden arbeiten mit standardisierten und zahlenmäßig auswertbaren Daten, etwa Befragungen, Transaktionsdaten oder Statistiken. Sie können Häufigkeiten und Unterschiede sichtbar machen; schlechte Fragen oder eine ungeeignete Stichprobe werden durch eine große Fallzahl nicht automatisch geheilt.',
          'Beide Ansätze lassen sich verbinden: qualitative Erkundung für relevante Fragen, quantitative Prüfung für Verteilung und Größenordnung und anschließende Vertiefung auffälliger Ergebnisse.',
        ],
      },
      {
        heading: 'Marktanalyse Schritt für Schritt erstellen',
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Von der Frage zur Entscheidung',
            formula: 'Entscheidungsfrage → Markt abgrenzen → Datenbedarf festlegen → Quellen prüfen und Daten erheben → Ergebnisse vergleichen → Annahmen und Grenzen dokumentieren → Entscheidung ableiten',
            description: 'Quellen, Bezugsjahre, Definitionen und Rechenannahmen werden mitgeführt, damit Ergebnisse später geprüft und aktualisiert werden können.',
          },
        ],
        paragraphs: [
          'Beginne nicht mit einer beliebigen Datensammlung. Lege fest, welche Information eine Entscheidung tatsächlich verändert. Prüfe danach Aktualität, räumliche und fachliche Abgrenzung sowie Erhebungsmethode jeder Quelle.',
          'Widersprüchliche Werte sind kein Grund, willkürlich einen auszuwählen. Unterschiede können durch andere Marktdefinitionen, Zeiträume oder Methoden entstehen und sollten erklärt werden.',
        ],
      },
      {
        heading: 'Ergebnisse für Entscheidungen nutzen',
        paragraphs: [
          'Die Schlussfolgerung verbindet Daten mit einer konkreten Option: Markt betreten, Angebot testen, Zielgruppe enger wählen, Preisannahmen überarbeiten oder Vorhaben zunächst nicht verfolgen. Wichtig ist, Beobachtung und Interpretation zu trennen.',
          [
            'Im ',
            { type: 'link', href: '/wissen/businessplan', text: 'Businessplan' },
            ' begründen Marktdaten Umsatzannahmen und die geplante Marktbearbeitung. Die ',
            { type: 'link', href: '/wissen/unternehmensstrategie', text: 'Unternehmensstrategie' },
            ' nutzt sie bei der Auswahl von Märkten, Zielgruppen und Wettbewerbsvorteilen.',
          ],
          'Bei hoher Unsicherheit kann ein begrenzter Pilot sinnvoller sein als eine scheinbar genaue Langfristprognose. Neue Verkaufs- und Nutzungsdaten fließen anschließend in die Aktualisierung ein.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eine Marktanalyse beantwortet eine konkrete Entscheidung zu einem klar abgegrenzten Markt',
    'Marktgröße, Kunden, Wettbewerb und Entwicklungen bilden typische Analysebereiche',
    'Marktvolumen und Marktpotenzial sind nicht mit dem erreichbaren Unternehmensumsatz gleichzusetzen',
    'Sekundärforschung nutzt vorhandene, Primärforschung neu erhobene Daten',
    'Quellen, Definitionen, Bezugsjahre und Annahmen müssen nachvollziehbar bleiben',
    'Ergebnisse führen zu Optionen und Tests, nicht zu sicheren Zukunftsprognosen',
  ],
  commonMistakes: [
    'Daten sammeln, ohne eine konkrete Entscheidungsfrage festzulegen',
    'den Markt räumlich, sachlich oder zeitlich nicht eindeutig abgrenzen',
    'Marktpotenzial mit sicherem Umsatz verwechseln',
    'direkte Wettbewerber betrachten und indirekte Alternativen übersehen',
    'Quellen mit unterschiedlichen Definitionen ungeprüft zusammenführen',
    'wenige Gespräche als repräsentativen Nachweis für den Gesamtmarkt behandeln',
  ],
  faqs: [
    { question: 'Was gehört in eine Marktanalyse?', answer: 'Typisch sind Marktdefinition und -größe, Kundengruppen und Bedarf, Wettbewerb, relevante Entwicklungen, Datenquellen, Annahmen und Schlussfolgerungen für die Entscheidung.' },
    { question: 'Was ist der Unterschied zwischen Marktvolumen und Marktpotenzial?', answer: 'Das Marktvolumen beschreibt den tatsächlich realisierten Umfang. Das Marktpotenzial schätzt den unter festgelegten Annahmen grundsätzlich möglichen Umfang.' },
    { question: 'Was ist besser: Primär- oder Sekundärforschung?', answer: 'Keine Methode ist allgemein besser. Meist werden zuerst vorhandene Daten geprüft und danach wichtige Informationslücken gezielt mit eigener Erhebung geschlossen.' },
    { question: 'Wie aktuell müssen Marktdaten sein?', answer: 'Das hängt von Veränderungsgeschwindigkeit und Entscheidung ab. Bezugsjahr und mögliche Veränderungen seit der Erhebung müssen immer erkennbar sein.' },
  ],
  related: ['zielgruppe', 'businessplan', 'swot-analyse', 'unternehmensstrategie'],
  sources: [
    { label: 'Statistisches Bundesamt: GENESIS-Online – amtliche Statistikdatenbank', url: 'https://genesis.destatis.de/datenbank/online/statistic/' },
    { label: 'Eurostat: European business statistics', url: 'https://ec.europa.eu/eurostat/web/european-business-statistics' },
  ],
  updatedAt: '2026-08-31',
  reviewedAt: '2026-08-31',
  disclaimer: defaultDisclaimer,
};

export default marktanalyse;
