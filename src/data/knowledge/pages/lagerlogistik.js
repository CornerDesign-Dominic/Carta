import { defaultDisclaimer } from '../shared.js';

const lagerlogistik = {
  slug: 'lagerlogistik',
  category: 'Supply Chain & Logistik',
  title: 'Lagerlogistik',
  description: 'Lagerlogistik einfach erklärt: Wareneingang, Einlagerung, Bestandsführung, Kommissionierung und Warenausgang zuverlässig organisieren.',
  seo: {
    title: 'Lagerlogistik einfach erklärt | Belege24',
    description: 'Erfahre, wie Lagerlogistik den Durchlauf von Wareneingang bis Warenausgang steuert, welche Lagerstrategien es gibt und wie Bestand, Service und Kosten zusammenhängen.',
    canonicalPath: '/wissen/lagerlogistik',
  },
  article: {
    intro: 'Lagerlogistik organisiert den Warenfluss im Lager: von Annahme und Einlagerung über Bestandsführung und Kommissionierung bis zu Auslagerung und Warenausgang. Sie soll Waren auffindbar, verfügbar und wirtschaftlich handhabbar machen.',
    sections: [
      {
        heading: 'Aufgabe der Lagerlogistik',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'lagerlogistik', text: 'Lagerlogistik' },
            ' gestaltet Lagerprozesse, Lagerplätze, Wege, Informationen und Übergaben. Sie sorgt dafür, dass Ware nach dem Wareneingang korrekt zugeordnet, gelagert, bei Bedarf gefunden und für Produktion oder Kundenaufträge bereitgestellt werden kann.',
          ],
          'Ein Lager ist dabei nicht nur ein Aufbewahrungsort. Es kann Liefer- und Bedarfsschwankungen abfedern, Aufträge bündeln, Waren prüfen und verfügbar halten. Gleichzeitig verursacht jeder Bestand Fläche, Kapitalbindung, Handhabung und je nach Artikel auch Verderbs- oder Veralterungsrisiken.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Lagerdurchlauf im Überblick',
            formula: 'Wareneingang → Prüfung → Einlagerung → Bestand/Kommissionierung → Auslagerung → Warenausgang',
            description: 'Je nach Geschäft können einzelne Schritte zusammenfallen oder durch zusätzliche Qualitäts-, Verpackungs- und Umschlagprozesse ergänzt werden.',
          },
        ],
      },
      {
        heading: 'Wareneingang, Einlagerung und Lagerplätze',
        paragraphs: [
          'Im Wareneingang werden Waren angenommen, identifiziert und je nach Prozess Mengen, Zustand, Dokumente oder Qualität geprüft. Erst danach werden sie einem Lagerplatz, einer Sperrzone, einem Bereitstellungsbereich oder direkt einem Folgeprozess zugeordnet.',
          'Lagerplätze brauchen eine nachvollziehbare Kennzeichnung und passende Regeln für Artikel, Mengen, Chargen oder Varianten. Feste Lagerplätze vereinfachen die Orientierung; chaotische Lagerung kann Fläche besser nutzen, setzt aber verlässliche Systemdaten und Kennzeichnung voraus.',
          'Wege und Flächennutzung beeinflussen Bearbeitungszeit und Fehleranfälligkeit. Häufig benötigte Artikel werden oft so platziert, dass Wege kurz bleiben. Dabei müssen Sicherheit, Zugänglichkeit, Gewicht, Lagerbedingungen und mögliche Verwechslungen berücksichtigt werden.',
        ],
      },
      {
        heading: 'Bestandsführung, Kommissionierung und Warenausgang',
        paragraphs: [
          'Bestandsführung hält fest, welche Ware in welcher Menge und an welchem Ort verfügbar, reserviert, gesperrt oder bereits verplant ist. Sie ist Grundlage für Nachschub, Auftragszusage und die Suche nach Abweichungen. Die fachliche Bestandsbewertung und Inventur werden auf eigenen Wissensseiten behandelt.',
          [
            'Bei der ',
            { type: 'glossary', id: 'kommissionierung', text: 'Kommissionierung' },
            ' werden Artikel und Mengen für einen Auftrag zusammengestellt. Anschließend folgen je nach Prozess Prüfung, Verpackung, Kennzeichnung und Übergabe an den Warenausgang. Für Kundenaufträge erklärt die ',
            { type: 'link', href: '/wissen/distributionslogistik', text: 'Distributionslogistik' },
            ' den weiteren Weg bis zum Empfänger.',
          ],
          'Auslagerung und Warenausgang müssen Bestand und Auftrag zeitnah zurückmelden. Werden Entnahmen verspätet oder falsch erfasst, sind angezeigte Bestände und tatsächliche Mengen nicht mehr verlässlich abgestimmt.',
        ],
      },
      {
        heading: 'Lagerarten und Lagerstrategien',
        paragraphs: [
          'Lager können grundsätzlich zentral oder dezentral organisiert sein, manuell oder stärker automatisiert arbeiten und unterschiedliche Funktionen übernehmen: Vorrat halten, Produktion versorgen, Aufträge kommissionieren oder Waren nur kurz umschlagen. Welche Lagerart passt, hängt von Sortiment, Mengen, Standorten, Lieferzeit und Prozess ab.',
          [
            { type: 'glossary', id: 'fifo', text: 'FIFO' },
            ' bedeutet, dass zuerst eingelagerte Einheiten zuerst entnommen werden. ',
            { type: 'glossary', id: 'fefo', text: 'FEFO' },
            ' priorisiert Einheiten mit dem frühesten Ablauf- oder Verfallsdatum. ',
            { type: 'glossary', id: 'lifo', text: 'LIFO' },
            ' entnimmt zuletzt eingelagerte Einheiten zuerst. Diese Strategien beschreiben hier die physische Entnahmereihenfolge; ihre Eignung hängt unter anderem von Artikel, Haltbarkeit und Lagertechnik ab.',
          ],
          'FIFO und FEFO können bei alterungs- oder haltbarkeitskritischen Waren wichtig sein. LIFO kann sich bei bestimmten Lagerstrukturen ergeben, ist aber für verderbliche oder datumsrelevante Artikel häufig nicht geeignet. Die verwendete Regel muss praktisch umsetzbar und in Lagerdaten erkennbar sein.',
        ],
      },
      {
        heading: 'Bestand, Service und Kosten abwägen',
        paragraphs: [
          'Höhere Bestände können die Lieferbereitschaft erhöhen und kurzfristige Schwankungen abfedern. Sie erhöhen zugleich Kapitalbindung, Lagerkosten, Flächenbedarf und bei manchen Artikeln das Risiko von Veralterung oder Schwund.',
          [
            'Die Seite ',
            { type: 'link', href: '/wissen/sicherheitsbestand-meldebestand-servicegrad', text: 'Sicherheitsbestand, Meldebestand & Servicegrad' },
            ' ordnet die Bestandsreserven und den Zusammenhang mit Lieferbereitschaft ein. Lagerlogistik setzt diese Regeln im täglichen Umgang mit Ware, Lagerplätzen und Aufträgen um.',
          ],
        ],
        exampleCards: [
          {
            title: 'Beispiel: Schnelldreher nahe am Packbereich',
            paragraphs: [
              'Ein Händler versendet einen kleinen Teil seines Sortiments besonders häufig. Diese Artikel liegen weit hinten im Lager, sodass bei jeder Kommissionierung lange Wege entstehen. Gleichzeitig werden ähnliche Varianten nebeneinander gelagert und gelegentlich verwechselt.',
              'Der Betrieb prüft Lagerplätze, Kennzeichnung und Wege. Häufig benötigte Artikel werden näher am Packbereich platziert und Varianten klarer getrennt. Das kann Kommissionierzeit und Fehler verringern, ohne pauschal den Gesamtbestand zu erhöhen.',
            ],
            effects: [
              'Mögliche Wirkung: kürzere Wege und schnellere Auftragsbearbeitung.',
              'Wichtig: Platzierung und Kennzeichnung müssen zu Menge, Varianten und sicheren Lagerregeln passen.',
            ],
          },
        ],
      },
      {
        heading: 'Automatisierung nur als Unterstützung',
        paragraphs: [
          'Lagerverwaltungssysteme, Scanner, Fördertechnik oder automatisierte Lager können Bestände, Wege und Übergaben transparenter machen. Sie ersetzen jedoch keine sauberen Stammdaten, eindeutigen Lagerplätze und durchdachten Prozesse.',
          'Ob Automatisierung sinnvoll ist, hängt von Auftragsvolumen, Artikelspektrum, Fehlerkosten, Fläche, Investitionsaufwand und Veränderlichkeit des Geschäfts ab. Ein einfacher, gut beherrschter Prozess kann passender sein als eine komplexe Technik ohne zuverlässige Datenbasis.',
        ],
      },
      {
        heading: 'Inventur und typische Fehler',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/inventur-inventar', text: 'Inventur und Inventar' },
            ' erläutert die Bestandsaufnahme und ihre Bedeutung für die Rechnungslegung. Lagerlogistik unterstützt sie durch geordnete Lagerplätze, eindeutige Kennzeichnung und aktuelle Bestandsdaten, ersetzt die Inventur aber nicht.',
          ],
          'Typische Fehler sind unklare Lagerplatzkennzeichnung, verspätete Buchungen, falsch behandelte Sperr- oder Retourenmengen, ungeprüfte Varianten und Entnahmeregeln, die nicht zum Artikel passen. Sie führen zu Suchaufwand, Fehlbeständen, Fehlkommissionierungen oder unnötigen Nachbestellungen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Lagerlogistik steuert Ware vom Wareneingang bis zum Warenausgang.',
    'Lagerplätze, Kennzeichnung und aktuelle Bestandsdaten machen Ware auffindbar und verfügbar.',
    'Kommissionierung stellt Artikel und Mengen für Aufträge zusammen und braucht klare Prüfungen.',
    'FIFO, LIFO und FEFO regeln die physische Entnahmereihenfolge und müssen zum Artikel sowie Lagerprozess passen.',
    'Bestände verbessern mögliche Verfügbarkeit, erhöhen aber Kapitalbindung, Fläche und Lageraufwand.',
    'Automatisierung unterstützt nur dann, wenn Daten, Lagerplätze und Prozesse zuverlässig gestaltet sind.',
  ],
  commonMistakes: [
    'Wareneingang, Reservierungen, Sperrbestände oder Entnahmen nicht zeitnah im Bestand abbilden',
    'ähnliche Artikel oder Varianten ohne ausreichende Kennzeichnung nebeneinander lagern',
    'FIFO, LIFO oder FEFO einsetzen, ohne Haltbarkeit, Lagertechnik und tatsächliche Umsetzbarkeit zu prüfen',
    'hohe Bestände als Ersatz für unklare Lagerprozesse und schlechte Daten verwenden',
    'Automatisierung einführen, ohne Stammdaten, Lagerplätze und Übergaben vorher zu klären',
  ],
  faqs: [
    {
      question: 'Was ist Lagerlogistik?',
      answer: 'Lagerlogistik organisiert Annahme, Einlagerung, Bestandsführung, Kommissionierung, Auslagerung und Warenausgang im Lager.',
    },
    {
      question: 'Was ist der Unterschied zwischen FIFO und FEFO?',
      answer: 'FIFO entnimmt zuerst eingelagerte Einheiten zuerst. FEFO priorisiert Einheiten mit dem frühesten Ablauf- oder Verfallsdatum.',
    },
    {
      question: 'Warum sind Lagerplätze wichtig?',
      answer: 'Eindeutige Lagerplätze helfen, Waren schnell zu finden, Bestände korrekt zu führen und Verwechslungen bei Einlagerung oder Kommissionierung zu vermeiden.',
    },
    {
      question: 'Gehört Kommissionierung zur Lagerlogistik?',
      answer: 'Ja. Sie stellt Artikel und Mengen für einen Auftrag zusammen und verbindet Lagerbestand mit dem nächsten Prozessschritt, etwa Versand oder Produktion.',
    },
    {
      question: 'Ersetzt Lagerlogistik die Inventur?',
      answer: 'Nein. Gute Lagerprozesse erleichtern die Bestandsaufnahme, die Inventur bleibt jedoch ein eigener Vorgang zur Erfassung und Prüfung von Beständen.',
    },
  ],
  related: [
    'distributionslogistik',
    'inventur-inventar',
    'sicherheitsbestand-meldebestand-servicegrad',
    'grundlagen-logistik',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lagerlogistik;
