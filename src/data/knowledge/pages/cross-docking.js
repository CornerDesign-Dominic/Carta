import { defaultDisclaimer } from '../shared.js';

const crossDocking = {
  slug: 'cross-docking',
  category: 'Supply Chain & Logistik',
  title: 'Cross-Docking',
  description: 'Cross-Docking einfach erklärt: Waren am Umschlagpunkt sortieren, konsolidieren und mit sehr kurzer Einlagerung weitertransportieren.',
  seo: {
    title: 'Cross-Docking einfach erklärt | Belege24',
    description: 'Erfahre, wie Cross-Docking Anlieferung, Umschlag und Weitertransport verbindet, welche Vorteile es bietet und welche Daten- und Planungsanforderungen gelten.',
    canonicalPath: '/wissen/cross-docking',
  },
  article: {
    intro: 'Cross-Docking ist ein Umschlagkonzept, bei dem Waren nach der Anlieferung ohne oder mit nur sehr kurzer Einlagerung für den Weitertransport vorbereitet werden. Der Umschlagpunkt verbindet Wareneingang, Sortierung oder Konsolidierung und Warenausgang eng miteinander.',
    sections: [
      {
        heading: 'Was ist Cross-Docking?',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'cross-docking', text: 'Cross-Docking' },
            ' werden Waren nicht zuerst dauerhaft eingelagert und später wieder kommissioniert. Sie werden am Umschlagpunkt möglichst schnell einem Empfänger, einer Tour oder einem Folgeprozess zugeordnet und weitergeleitet.',
          ],
          'Die Waren können dabei bereits vorsortiert ankommen oder erst am Umschlagpunkt nach Empfänger, Route oder Auftrag konsolidiert werden. Das Ziel ist ein zügiger Durchfluss, nicht das Anlegen eines Vorratslagers.',
        ],
      },
      {
        heading: 'Vom Wareneingang zum Warenausgang',
        paragraphs: [
          'Im Wareneingang werden Mengen, Identifikation, Qualität und Zuordnung geprüft, soweit der Prozess dies vorsieht. Anschließend werden die Waren sortiert, zusammengeführt oder auf Ausgangstouren verteilt. Der Warenausgang übernimmt sie zeitnah für die Weiterbeförderung.',
          'Informationsfluss und physischer Warenfluss müssen eng abgestimmt sein. Das System oder der Prozess muss vor oder spätestens bei Anlieferung wissen, welche Mengen zu welchem Empfänger, Auftrag oder Transport gehören. Sonst entstehen Suchaufwand, Wartezeiten oder Fehlleitungen.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Cross-Docking im Überblick',
            formula: 'Anlieferung → Umschlag/Konsolidierung → Weitertransport',
            description: 'Die Ware bleibt am Umschlagpunkt nur so lange wie für Prüfung, Zuordnung und Vorbereitung des Folgeprozesses erforderlich. Zeitfenster und Informationen müssen dafür zusammenpassen.',
          },
        ],
      },
      {
        heading: 'Einstufiges und mehrstufiges Cross-Docking',
        paragraphs: [
          'Beim einstufigen Cross-Docking ist die Zuordnung häufig schon vor der Anlieferung klar. Ware kann dann vergleichsweise direkt von der Eingangsanlieferung auf eine Ausgangstour oder einen Empfänger übergehen.',
          'Mehrstufiges Cross-Docking umfasst zusätzliche Sortier-, Bündelungs- oder Kommissionierschritte. Beispielsweise werden Mengen verschiedener Lieferanten erst für eine Filiale oder Tour zusammengeführt. Dadurch wächst die Flexibilität, aber auch der Bedarf an Fläche, Daten und Steuerung am Umschlagpunkt.',
          'Die Begriffe werden in der Praxis unterschiedlich detailliert verwendet. Entscheidend ist, ob Waren nur durchgeleitet oder am Umschlagpunkt zusätzlich nach Aufträgen, Empfängern oder Touren zusammengeführt werden.',
        ],
      },
      {
        heading: 'Abgrenzung zu Lagerhaltung und Direktbelieferung',
        paragraphs: [
          'Klassische Lagerhaltung hält Waren über einen längeren Zeitraum vor und übernimmt Funktionen wie Bestandspuffer, Einlagerung, Kommissionierung und Verfügbarkeitsabsicherung. Cross-Docking reduziert die Liegezeit, ersetzt diese Funktionen aber nicht in jeder Situation.',
          'Direktbelieferung führt Ware ohne Umschlagpunkt unmittelbar vom Lieferanten zum Empfänger. Cross-Docking nutzt dagegen bewusst einen Knotenpunkt, um Waren umzuschlagen, zu bündeln oder auf mehrere Weitertransporte zu verteilen.',
          'Keines der Konzepte ist allgemein besser. Die passende Lösung hängt von Mengen, Empfängerstruktur, Zeitfenstern, Verlässlichkeit der Lieferungen und den benötigten Lagerfunktionen ab.',
        ],
      },
      {
        heading: 'Vorteile und geeignete Warenstrukturen',
        paragraphs: [
          'Bei gut abgestimmten Abläufen kann Cross-Docking Lagerhaltung und interne Wege reduzieren sowie Durchlaufzeiten verkürzen. Waren sind weniger lange am Umschlagpunkt gebunden und können schneller in die nächste Tour oder zum Empfänger gelangen.',
          'Geeignet sind häufig planbare, umschlagstarke Waren mit klaren Mengen, Einheiten und Empfängern. Standardisierte Verpackung, gute Kennzeichnung und verlässliche Zeitfenster erleichtern den Prozess. Auch wiederkehrende Touren und stabile Auftragsdaten können hilfreich sein.',
          'Für sehr unregelmäßige, schwer prüfbare, beschädigungsempfindliche oder häufig umzuplanende Waren kann der benötigte Steuerungsaufwand den Nutzen übersteigen. Dann kann eine andere Form von Lagerung oder Transport besser passen.',
        ],
      },
      {
        heading: 'Planung, Datenqualität und Risiken',
        paragraphs: [
          'Cross-Docking verlangt, dass Artikel, Mengen, Lieferanten, Empfänger, Zeitfenster und Touren rechtzeitig und eindeutig bekannt sind. Falsche Artikelnummern, fehlende Vorabinformationen oder unklare Empfängerzuordnungen führen besonders schnell zu Verzögerungen.',
          'Eine verspätete Eingangsanlieferung kann den geplanten Weitertransport gefährden. Fehlen einzelne Mengen für eine konsolidierte Sendung, muss geklärt werden, ob gewartet, umgeplant oder unvollständig weitertransportiert wird. Solche Entscheidungen brauchen klare Regeln und Verantwortlichkeiten.',
          [
            'Wiederkehrende, gebündelte Touren können durch ein ',
            { type: 'link', href: '/wissen/milk-run', text: 'Milk-Run-Konzept' },
            ' unterstützt werden. Für enge Zeitfenster und geringe Puffer sind außerdem die Voraussetzungen von ',
            { type: 'link', href: '/wissen/just-in-time-sequence', text: 'Just-in-Time & Just-in-Sequence' },
            ' relevant.',
          ],
        ],
      },
      {
        heading: 'Praxisbeispiel: Verteilzentrum für Filialen',
        paragraphs: [
          'Mehrere Lieferanten liefern am Morgen Waren für verschiedene Filialen an ein Verteilzentrum. Die Warenausgänge für die Filialtouren starten am Nachmittag.',
        ],
        exampleCards: [
          {
            title: 'Waren für eine Tour konsolidieren',
            paragraphs: [
              'Die eingehenden Paletten sind bereits mit Filial- und Tourinformationen gekennzeichnet. Im Verteilzentrum werden sie nur noch geprüft und den vorgesehenen Ausgangsflächen zugeordnet. Für jede Filialtour werden Waren mehrerer Lieferanten zusammengeführt.',
              'Trifft eine Palette verspätet oder mit falscher Kennzeichnung ein, kann sie die Konsolidierung und Abfahrt der Tour stören. Das Verteilzentrum braucht deshalb aktuelle Vorabinformationen und klare Regeln für Abweichungen.',
            ],
            effects: [
              'Chance: Waren werden ohne längere Einlagerung auf die passende Filialtour verteilt.',
              'Risiko: Fehler oder Verspätungen am Eingang wirken unmittelbar auf den Weitertransport.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Cross-Docking mit „Ware einfach schnell umsetzen“ gleichzusetzen. Ohne genaue Vorabinformationen, Kennzeichnung und Zeitfenster entsteht am Umschlagpunkt schnell ungeplante Zwischenlagerung.',
          'Auch geringe Lagerhaltung bedeutet nicht, dass keine Fläche oder Puffer nötig sind. Für Wartezeiten, Prüfungen, Konsolidierung und Störungen muss der Umschlagpunkt ausreichend organisiert sein.',
          'Ein Prozess sollte nicht allein wegen kurzer Durchlaufzeit eingeführt werden. Wenn Mengen, Liefertermine oder Daten unzuverlässig sind, können Fehlerkosten und Verspätungen höher sein als die eingesparte Lagerzeit.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Cross-Docking leitet Waren nach Anlieferung ohne oder mit sehr kurzer Einlagerung in den Weitertransport.',
    'Wareneingang, Sortierung oder Konsolidierung und Warenausgang müssen zeitlich und informationstechnisch abgestimmt sein.',
    'Einstufige Prozesse leiten klar zugeordnete Ware direkt weiter; mehrstufige Prozesse bündeln oder sortieren zusätzlich.',
    'Cross-Docking unterscheidet sich von klassischer Lagerhaltung und von Direktbelieferung.',
    'Planbare Waren, klare Kennzeichnung und zuverlässige Zeitfenster begünstigen das Konzept.',
    'Fehler in Daten, Zuordnung oder Terminen können den Weitertransport unmittelbar stören.',
  ],
  commonMistakes: [
    'Cross-Docking ohne eindeutige Vorabinformationen zu Artikel, Menge, Empfänger und Tour einführen',
    'Umschlagfläche, Prüfungen und Abweichungsbehandlung bei der Planung ausblenden',
    'Verspätete Eingangsanlieferungen nicht als Risiko für den Weitertransport berücksichtigen',
    'klassische Lagerhaltung, Direktbelieferung und Cross-Docking als gleiche Prozesse behandeln',
    'kurze Durchlaufzeit über Datenqualität, Kennzeichnung und Prozessstabilität stellen',
  ],
  faqs: [
    {
      question: 'Was ist Cross-Docking?',
      answer: 'Cross-Docking ist ein Umschlagkonzept, bei dem Waren nach der Anlieferung ohne oder mit nur sehr kurzer Einlagerung sortiert, konsolidiert und weitertransportiert werden.',
    },
    {
      question: 'Was ist der Unterschied zur Lagerhaltung?',
      answer: 'Lagerhaltung hält Waren als Bestand vor. Cross-Docking leitet Waren möglichst schnell durch einen Umschlagpunkt in den Weitertransport.',
    },
    {
      question: 'Was ist der Unterschied zur Direktbelieferung?',
      answer: 'Bei Direktbelieferung geht Ware unmittelbar vom Lieferanten zum Empfänger. Cross-Docking nutzt einen Umschlagpunkt zur Zuordnung, Bündelung oder Verteilung.',
    },
    {
      question: 'Welche Waren eignen sich für Cross-Docking?',
      answer: 'Häufig passen planbare, umschlagstarke Waren mit klaren Mengen, Empfängern, Verpackungen und Zeitfenstern. Die Eignung hängt vom konkreten Prozess ab.',
    },
    {
      question: 'Warum sind Daten bei Cross-Docking so wichtig?',
      answer: 'Der Umschlagpunkt muss rechtzeitig wissen, welche Ware wohin und mit welcher Tour weitergeht. Fehlerhafte Informationen verursachen schnell Wartezeit, Fehlleitungen und ungeplante Zwischenlagerung.',
    },
  ],
  related: [
    'milk-run',
    'just-in-time-sequence',
    'kanban-steuerung',
    'lieferantenrisiko',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default crossDocking;
