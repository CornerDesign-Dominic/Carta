import { defaultDisclaimer } from '../shared.js';

const abschreibung = {
  slug: 'abschreibung',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Abschreibung',
  description: 'Abschreibung einfach erklärt: lineare, degressive und leistungsabhängige AfA, Nutzungsdauer, Restbuchwert sowie die Unterschiede zwischen Handelsbilanz und Steuerrecht.',
  seo: {
    title: 'Abschreibung einfach erklärt | Belege24',
    description: 'Verstehe Abschreibungen, Nutzungsdauer, Restbuchwert sowie lineare, degressive und leistungsabhängige AfA – mit einfachen Beispielen.',
    canonicalPath: '/wissen/abschreibung',
  },
  article: {
    intro: 'Eine Abschreibung verteilt die Kosten eines abnutzbaren Anlageguts auf die Zeit, in der es dem Betrieb dient. Sie zeigt damit den Wertverzehr in Buchführung und Jahresabschluss – nicht einfach den Zeitpunkt, zu dem bezahlt wurde.',
    sections: [
      {
        heading: 'Was ist eine Abschreibung?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'abschreibung', text: 'Abschreibung' },
            ' erfasst, dass ein dauerhaft genutzter Vermögensgegenstand durch Gebrauch, Alter oder technischen Fortschritt an Wert verliert. Typische Beispiele sind Maschinen, Fahrzeuge oder Büroausstattung im ',
            { type: 'glossary', id: 'anlagevermoegen', text: 'Anlagevermögen' },
            '.',
          ],
          'Kauft ein Betrieb eine Maschine, fließt das Geld meist sofort ab. Der wirtschaftliche Nutzen der Maschine erstreckt sich aber über mehrere Jahre. Die planmäßige Abschreibung ordnet die Kosten deshalb diesen Nutzungsjahren zu. Steuerlich wird sie häufig als Absetzung für Abnutzung, kurz AfA, bezeichnet.',
          'Abschreibung ist nicht gleichbedeutend mit einer weiteren Zahlung. Die Zahlung ist beim Kauf erfolgt; die Abschreibung bildet anschließend den Wertverzehr und den Aufwand der jeweiligen Periode ab.',
        ],
      },
      {
        heading: 'Anschaffungs- oder Herstellungskosten, Nutzungsdauer und Restbuchwert',
        paragraphs: [
          'Ausgangspunkt sind die Anschaffungs- oder Herstellungskosten des Wirtschaftsguts. Über welche Zeit sie verteilt werden, bestimmt die erwartete Nutzungsdauer. Im Steuerrecht ist bei beweglichen Wirtschaftsgütern regelmäßig die betriebsgewöhnliche Nutzungsdauer maßgeblich.',
          [
            'Die amtlichen AfA-Tabellen des Bundesfinanzministeriums helfen, die Nutzungsdauer einzuschätzen. Sie sind jedoch keine starre Regel für jeden Einzelfall: Die tatsächlichen betrieblichen Verhältnisse bleiben wichtig. Nach jeder Abschreibung sinkt der ',
            { type: 'glossary', id: 'buchwert', text: 'Buchwert' },
            '; der verbleibende Betrag heißt ',
            { type: 'glossary', id: 'restbuchwert', text: 'Restbuchwert' },
            '.',
          ],
          'Für die Handelsbilanz und für steuerliche Zwecke können unterschiedliche Regeln gelten. Die steuerliche AfA darf daher nicht automatisch als Vorgabe für die Handelsbilanz übernommen werden.',
        ],
      },
      {
        heading: 'Lineare Abschreibung: jedes Jahr derselbe Betrag',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'linear', text: 'lineare Abschreibung' },
            ' verteilt die Kosten gleichmäßig über die Nutzungsdauer. Sie ist die leichteste Grundmethode und steuerlich nach § 7 Absatz 1 EStG der Regelfall für abnutzbare bewegliche Wirtschaftsgüter.',
          ],
        ],
        formulaCards: [
          {
            title: 'Lineare Abschreibung',
            formula: 'Jährliche Abschreibung = Anschaffungskosten / Nutzungsdauer',
            description: 'Das vereinfachte Schema setzt voraus, dass kein Restwert zu berücksichtigen ist. Im Jahr der Anschaffung ist steuerlich grundsätzlich zeitanteilig nach Monaten abzuschreiben.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Maschine linear abschreiben',
            paragraphs: [
              'Eine Maschine kostet 24.000 Euro und wird vereinfacht über vier Jahre genutzt.',
              '24.000 Euro geteilt durch vier Jahre ergeben 6.000 Euro Abschreibung pro vollem Jahr.',
              'Nach dem ersten Jahr stehen in der Bilanz noch 18.000 Euro als Buchwert. Gleichzeitig belasten 6.000 Euro als Aufwand die GuV.',
            ],
            effects: [
              'Bilanz: Buchwert der Maschine sinkt von 24.000 auf 18.000 Euro.',
              'GuV: Abschreibungsaufwand von 6.000 Euro mindert den Gewinn.',
            ],
          },
        ],
      },
      {
        heading: 'Degressive Abschreibung: höhere Beträge zu Beginn',
        paragraphs: [
          [
            'Bei der ',
            { type: 'glossary', id: 'degressiv', text: 'degressiven Abschreibung' },
            ' wird ein gleichbleibender Prozentsatz auf den jeweiligen Restbuchwert angewendet. Dadurch fällt der Abschreibungsbetrag am Anfang höher aus und sinkt in den Folgejahren.',
          ],
          'Im Steuerrecht gilt diese Methode derzeit nur befristet: Für bewegliche Wirtschaftsgüter des Anlagevermögens, die nach dem 30. Juni 2025 und vor dem 1. Januar 2028 angeschafft oder hergestellt werden, erlaubt § 7 Absatz 2 EStG höchstens das Dreifache des linearen Prozentsatzes, maximal 30 Prozent. Ein Wechsel von der degressiven zur linearen AfA ist steuerlich möglich; umgekehrt nicht.',
          'Diese steuerliche Sonderregel ist keine allgemeine Handelsbilanzregel. In der Handelsbilanz ist die planmäßige Abschreibung eigenständig nach der erwarteten Nutzungsdauer zu beurteilen.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Degressive AfA eines Geräts',
            paragraphs: [
              'Ein Gerät kostet 60.000 Euro und hat eine Nutzungsdauer von sechs Jahren. Der lineare Satz wäre 16,67 Prozent; das Dreifache läge über 30 Prozent. Im Beispiel wird deshalb der steuerliche Höchstsatz von 30 Prozent angesetzt. Die Voraussetzungen und der Anschaffungszeitraum seien erfüllt.',
              'Im ersten Jahr betragen 30 Prozent von 60.000 Euro = 18.000 Euro. Der Restbuchwert sinkt auf 42.000 Euro.',
              'Im zweiten Jahr werden 30 Prozent von 42.000 Euro = 12.600 Euro abgeschrieben. Der Abschreibungsbetrag sinkt also, weil er auf dem Restbuchwert basiert.',
            ],
            effects: [
              'Steuerliche AfA im ersten Jahr: 18.000 Euro.',
              'Restbuchwert nach dem zweiten Jahr: 29.400 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Leistungsabschreibung: nach tatsächlicher Nutzung',
        paragraphs: [
          'Bei der Leistungsabschreibung richtet sich der Betrag nicht primär nach Jahren, sondern nach der tatsächlich erbrachten Leistung. Das kann passend sein, wenn die Nutzung objektiv über Stückzahlen, Betriebsstunden oder Kilometer messbar ist.',
          'Steuerlich kommt sie für bewegliche Wirtschaftsgüter in Betracht, wenn sie wirtschaftlich begründet ist und die jährliche Leistung nachgewiesen wird. Ohne belastbare Leistungsdaten ist eine lineare Verteilung oft nachvollziehbarer.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Maschine nach Stückzahl abschreiben',
            paragraphs: [
              'Eine Produktionsmaschine kostet 50.000 Euro und soll insgesamt 100.000 Stück fertigen.',
              'Im ersten Jahr produziert sie nachweisbar 18.000 Stück. Auf jedes erwartete Stück entfallen 0,50 Euro Abschreibung.',
              'Für das erste Jahr ergeben sich damit 9.000 Euro Abschreibung: 18.000 Stück mal 0,50 Euro. In Jahren mit höherer Leistung wäre der Betrag entsprechend höher.',
            ],
            effects: [
              'GuV: 9.000 Euro Abschreibungsaufwand im ersten Jahr.',
              'Bilanz: Restbuchwert der Maschine nach dem ersten Jahr: 41.000 Euro.',
            ],
          },
        ],
      },
      {
        heading: 'Weitere wichtige Abgrenzungen',
        paragraphs: [
          'Bei einer Anschaffung während des Jahres ist die steuerliche lineare AfA grundsätzlich zeitanteilig zu berechnen: Für jeden vollen Monat vor dem Monat der Anschaffung oder Herstellung vermindert sich der Jahresbetrag um ein Zwölftel. Der Zeitpunkt, ab dem ein Gegenstand in der Handelsbilanz planmäßig abgeschrieben wird, ist gesondert nach seiner wirtschaftlichen Nutzung zu beurteilen.',
          'Geringwertige Wirtschaftsgüter können steuerlich besonderen Sofortabschreibungs- oder Poolregelungen unterliegen. Das sind Vereinfachungsregeln mit eigenen Voraussetzungen und keine weitere allgemeine Abschreibungsmethode.',
          'Eine außerplanmäßige Abschreibung kommt handelsrechtlich in Betracht, wenn bei einem Gegenstand des Anlagevermögens eine voraussichtlich dauernde Wertminderung vorliegt. Sie ist von der planmäßigen Verteilung des normalen Wertverzehrs zu unterscheiden.',
          'Eine Wertberichtigung betrifft typischerweise Forderungen, wenn deren Einbringlichkeit zweifelhaft ist. Abschreibungen beziehen sich dagegen hier vor allem auf den Wert eines Anlageguts. Beide können zwar Aufwand auslösen, sind aber unterschiedliche Sachverhalte.',
        ],
      },
      {
        heading: 'Wirkung auf Bilanz und GuV',
        paragraphs: [
          [
            'Die Abschreibung vermindert den Buchwert eines Gegenstands in der ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' und erscheint als Aufwand in der ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            '. Dadurch sinkt – bei sonst gleichen Umständen – der Gewinn und damit mittelbar das Eigenkapital.',
          ],
          'Die Abschreibung selbst führt nicht zu einem erneuten Abfluss von Geld. Sie trennt deshalb den Kaufvorgang von der periodengerechten Erfolgswirkung. Für den Jahresabschluss sind die zutreffende Nutzungsdauer, Methode und gegebenenfalls Wertminderung zu prüfen.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Häufig wird der gesamte Kaufpreis eines langlebigen Anlageguts sofort als Aufwand behandelt, obwohl er über die Nutzungsdauer zu verteilen ist. Ebenso problematisch sind unpassende Nutzungsdauern, fehlende Unterlagen zur Leistungsabschreibung oder die Übernahme steuerlicher Sonderregeln in die Handelsbilanz ohne eigene Prüfung.',
          'Auch der Restbuchwert sollte fortlaufend kontrolliert werden. Eine Abschreibung darf nicht dazu führen, dass ein Gegenstand ohne sachlichen Grund unter seinem maßgeblichen Wert fortgeschrieben wird. Bei Unsicherheiten zu Ansatz, Nutzungsdauer oder steuerlichen Wahlrechten ist fachlicher Rat sinnvoll.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Abschreibungen verteilen Anschaffungs- oder Herstellungskosten eines abnutzbaren Anlageguts über die Nutzungsdauer.',
    'Sie mindern als Aufwand die GuV und reduzieren den Buchwert in der Bilanz.',
    'Bei der linearen Methode ist der jährliche Betrag gleich hoch; bei der degressiven Methode sinkt er mit dem Restbuchwert.',
    'Die degressive steuerliche AfA ist für bestimmte bewegliche Anlagegüter aktuell bis Ende 2027 befristet zulässig.',
    'Leistungsabschreibung setzt eine wirtschaftliche Begründung und nachweisbare jährliche Leistung voraus.',
    'Handelsbilanz und Steuerrecht können unterschiedliche Regeln und Werte ergeben.',
  ],
  commonMistakes: [
    'den Kaufpreis eines langlebigen Anlageguts vollständig im Anschaffungsjahr als Aufwand behandeln',
    'AfA-Tabellen ohne Blick auf die tatsächlichen betrieblichen Verhältnisse als starre Vorgabe verwenden',
    'degressive AfA ohne Prüfung des Anschaffungszeitraums oder der weiteren Voraussetzungen anwenden',
    'degressive steuerliche AfA automatisch in die Handelsbilanz übernehmen',
    'Leistungsabschreibung ohne nachvollziehbare Leistungsdaten berechnen',
    'Abschreibung mit einer Wertberichtigung auf Forderungen verwechseln',
  ],
  faqs: [
    { question: 'Was bedeutet AfA?', answer: 'AfA steht für Absetzung für Abnutzung. Das ist die steuerliche Bezeichnung für die planmäßige Abschreibung abnutzbarer Wirtschaftsgüter.' },
    { question: 'Ist Abschreibung eine Zahlung?', answer: 'Nein. Die Zahlung erfolgt meist bei der Anschaffung. Die Abschreibung verteilt den Wertverzehr anschließend als Aufwand auf die Nutzungsjahre.' },
    { question: 'Welche Abschreibungsmethode ist der Regelfall?', answer: 'Für abnutzbare bewegliche Wirtschaftsgüter ist die lineare AfA steuerlich grundsätzlich der Regelfall. Andere Methoden setzen besondere Voraussetzungen voraus.' },
    { question: 'Wann ist degressive AfA aktuell möglich?', answer: 'Steuerlich für bestimmte bewegliche Anlagegüter, die nach dem 30. Juni 2025 und vor dem 1. Januar 2028 angeschafft oder hergestellt werden, sofern die weiteren Voraussetzungen erfüllt sind.' },
    { question: 'Was ist der Restbuchwert?', answer: 'Das ist der Buchwert, der nach den bereits gebuchten Abschreibungen noch verbleibt.' },
    { question: 'Wo stehen die Nutzungsdauern?', answer: 'BMF-AfA-Tabellen geben für viele Anlagegüter Anhaltspunkte. Sie ersetzen aber nicht die Prüfung der tatsächlichen betrieblichen Nutzung.' },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'bilanz',
    'guv',
    'jahresabschluss',
  ],
  sources: [
    { label: '§ 7 EStG – Absetzung für Abnutzung oder Substanzverringerung', url: 'https://www.gesetze-im-internet.de/estg/__7.html' },
    { label: '§ 6 EStG – Bewertung, auch geringwertige Wirtschaftsgüter', url: 'https://www.gesetze-im-internet.de/estg/__6.html' },
    { label: '§ 253 HGB – Folgebewertung und Abschreibungen', url: 'https://www.gesetze-im-internet.de/hgb/__253.html' },
    { label: '§ 255 HGB – Anschaffungs- und Herstellungskosten', url: 'https://www.gesetze-im-internet.de/hgb/__255.html' },
    { label: 'BMF – AfA-Tabellen', url: 'https://www.bundesfinanzministerium.de/Web/DE/Themen/Steuern/Steuerverwaltungu-Steuerrecht/Betriebspruefung/AfA_Tabellen/afa_tabellen.html?dk=1' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default abschreibung;
