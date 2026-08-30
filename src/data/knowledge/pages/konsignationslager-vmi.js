import { defaultDisclaimer } from '../shared.js';

const konsignationslagerVmi = {
  slug: 'konsignationslager-vmi',
  category: 'Supply Chain & Logistik',
  title: 'Konsignationslager & Vendor Managed Inventory (VMI)',
  description: 'Konsignationslager und VMI einfach erklärt: Eigentum, Lagerort und Bestandssteuerung sauber unterscheiden und sinnvoll kombinieren.',
  seo: {
    title: 'Konsignationslager & VMI einfach erklärt | Belege24',
    description: 'Erfahre, wie sich Konsignationslager und Vendor Managed Inventory unterscheiden, welche Daten und Regeln sie brauchen und wo Chancen sowie Risiken liegen.',
    canonicalPath: '/wissen/konsignationslager-vmi',
  },
  article: {
    intro: 'Konsignationslager und Vendor Managed Inventory können die Versorgung in Lieferbeziehungen vereinfachen, beschreiben aber unterschiedliche Dinge: Das Konsignationslager betrifft vor allem Lagerort und Eigentum, VMI die Verantwortung für die Bestandssteuerung.',
    sections: [
      {
        heading: 'Was ist ein Konsignationslager?',
        paragraphs: [
          [
            'In einem ',
            { type: 'glossary', id: 'konsignationslager', text: 'Konsignationslager' },
            ' befindet sich Ware beim Kunden oder in dessen Nähe, während das Eigentum grundsätzlich zunächst beim Lieferanten verbleibt. Erst die Entnahme oder ein anderer vertraglich festgelegter Vorgang wird für Eigentum, Abrechnung und Bestandsführung relevant.',
          ],
          'Das Lager kann beim Kunden, am Produktionsstandort oder an einem nahe gelegenen Logistikpunkt liegen. Der Kunde hat schnellen Zugriff auf die bereitgestellte Ware, ohne sie zwingend bereits vollständig erworben zu haben.',
          'Wie Eigentum, Risikoübergang, Inventur, Entnahmeerfassung, Preise, Rücknahmen und Abrechnung genau geregelt sind, hängt von der Vereinbarung und dem Einzelfall ab. Diese Seite ersetzt keine Vertrags-, Steuer- oder Rechtsberatung.',
        ],
      },
      {
        heading: 'Chancen und Risiken eines Konsignationslagers',
        paragraphs: [
          'Für den Kunden kann ein Konsignationslager die Verfügbarkeit verbessern und den eigenen Kapitalbedarf für noch nicht entnommene Ware verringern. Für den Lieferanten kann es die Bindung zum Kunden stärken und den Bedarf besser sichtbar machen.',
          'Der Lieferant hält die Ware jedoch zunächst in seinem Bestand und trägt damit häufig Kapitalbindung und das Risiko nicht oder verspätet entnommener Mengen. Der Kunde braucht klare Prozesse, damit Entnahmen, Rückgaben, Schäden und Bestände nachvollziehbar bleiben.',
          'Die tatsächlichen Vorteile hängen von Verbrauch, Lieferfähigkeit, Nähe, Datenqualität und den vereinbarten Verantwortlichkeiten ab. Ein gefülltes Lager ist keine automatische Lösung für unklare Planung oder schlechte Kommunikation.',
        ],
      },
      {
        heading: 'Was ist Vendor Managed Inventory?',
        paragraphs: [
          [
            'Bei ',
            { type: 'glossary', id: 'vendor-managed-inventory', text: 'Vendor Managed Inventory (VMI)' },
            ' übernimmt oder unterstützt der Lieferant die Bestandssteuerung beim Kunden. Grundlage sind vereinbarte Bestands-, Verbrauchs- oder Bedarfsdaten sowie klare Regeln für Nachversorgung.',
          ],
          'Der Lieferant kann zum Beispiel Mindest- und Höchstbestände überwachen, Bestellvorschläge auslösen oder automatisch nachversorgen. Der Kunde bleibt dafür verantwortlich, Daten, Änderungen und Abweichungen zuverlässig bereitzustellen und die vereinbarten Regeln zu prüfen.',
          'VMI sagt für sich genommen nichts darüber aus, wem die Ware gehört oder wo sie lagert. Es ist ein Steuerungsmodell, kein Eigentumsmodell.',
        ],
      },
      {
        heading: 'Konsignationslager und VMI vergleichen',
        paragraphs: [
          'Die Konzepte lassen sich kombinieren, sind aber nicht identisch. Ein Konsignationslager kann ohne VMI geführt werden, wenn der Kunde den Bestand selbst überwacht. VMI kann umgekehrt für Ware gelten, die bereits dem Kunden gehört oder an einem anderen Ort liegt.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Konsignationslager vs. VMI',
            formula: 'Konsignationslager: Wo liegt die Ware und wem gehört sie grundsätzlich?\nVMI: Wer steuert Bestand und Nachversorgung anhand welcher Daten?',
            description: 'Eine Kombination ist möglich: Der Lieferant hält Eigentum an einem kundennahem Bestand und steuert zugleich dessen Auffüllung. Eigentum, Bestandsverantwortung und Nachschubregeln bleiben getrennt festzulegen.',
          },
        ],
      },
      {
        heading: 'Daten, Transparenz und Nachversorgung',
        paragraphs: [
          'Für beide Konzepte braucht es aktuelle und eindeutig zuordenbare Daten. Dazu können Bestände, Entnahmen, offene Nachschübe, Verbrauch, Mindest- und Höchstwerte, Artikelnummern sowie Lieferzeiten gehören.',
          'Transparenz bedeutet nicht nur Datenzugriff. Beide Seiten müssen verstehen, welche Bestände als verfügbar gelten, wann ein Nachschub ausgelöst wird, wer Abweichungen meldet und wie fehlerhafte oder fehlende Daten behandelt werden.',
          [
            'Die Zusammenhänge von Reserve, Meldebestand und Lieferbereitschaft ordnet die Seite ',
            { type: 'link', href: '/wissen/sicherheitsbestand-meldebestand-servicegrad', text: 'Sicherheitsbestand, Meldebestand & Servicegrad' },
            ' ein. Eine verlässliche Entnahme- und Bestandsinformation ist dafür ebenso wichtig wie die Vereinbarung über die Nachversorgung.',
          ],
        ],
      },
      {
        heading: 'Kapitalbindung, Versorgung und Abhängigkeit',
        paragraphs: [
          'Konsignationslager können Kapitalbindung zwischen den Parteien anders verteilen, sie beseitigen sie nicht. VMI kann den Bestandsprozess effizienter steuern, wenn Daten und Regeln stimmen. Beide Konzepte können die Versorgungssicherheit unterstützen, erhöhen aber auch die Bedeutung der Lieferbeziehung und des Informationsaustauschs.',
          'Abhängigkeit entsteht insbesondere, wenn der Kunde sich auf einen Lieferanten, dessen Datenverarbeitung oder seine Wiederauffüllung verlässt und kurzfristige Alternativen fehlen. Lieferfähigkeit, Qualität, Wechselmöglichkeiten und Eskalationswege sollten daher realistisch geprüft werden.',
          [
            'Die Seite ',
            { type: 'link', href: '/wissen/lieferantenrisiko', text: 'Lieferantenrisiko' },
            ' hilft, diese Abhängigkeiten einzuordnen. Die laufende Leistung einer Lieferbeziehung kann mit der ',
            { type: 'link', href: '/wissen/lieferantenbewertung', text: 'Lieferantenbewertung' },
            ' beobachtet werden.',
          ],
        ],
      },
      {
        heading: 'Praxisbeispiel: Verbrauchsteile an einer Montagelinie',
        paragraphs: [
          'Ein Lieferant stellt häufig benötigte Verbrauchsteile in einem Bereich nahe der Montagelinie bereit. Die Ware bleibt nach der Vereinbarung zunächst Eigentum des Lieferanten. Die Entnahme wird digital erfasst.',
        ],
        exampleCards: [
          {
            title: 'Konsignationslager mit VMI kombinieren',
            paragraphs: [
              'Der Lieferant erhält regelmäßig Daten zu Bestand und Entnahmen. Fällt der verfügbare Bestand unter einen vereinbarten Wert, plant er die Auffüllung bis zu einem festgelegten Höchstbestand. Der Kunde prüft die Entnahmebuchungen und meldet Änderungen im Produktionsprogramm.',
              'Hier sind beide Konzepte kombiniert: Das Konsignationslager beschreibt den bereitgestellten Bestand und die grundsätzliche Eigentumslage; VMI beschreibt, dass der Lieferant die Nachversorgung anhand gemeinsamer Daten steuert.',
            ],
            effects: [
              'Chance: schnelle Verfügbarkeit und weniger manueller Bestellaufwand bei stabiler Datenlage.',
              'Risiko: Fehlerhafte Entnahmedaten oder verspätete Auffüllung können den Bestand und die Abrechnung beeinträchtigen.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Konsignationslager und VMI als dasselbe Konzept zu behandeln. Eigentum, Lagerort, Nachschubverantwortung und Datenzugriff sollten getrennt beschrieben werden.',
          'Auch automatisierte Nachversorgung braucht Kontrolle. Veraltete Mindest- und Höchstwerte, fehlende Entnahmebuchungen oder falsche Artikelstammdaten können zu Überbeständen oder Fehlmengen führen.',
          'Vertragliche, steuerliche und buchhalterische Folgen sollten nicht aus einem allgemeinen Ablauf abgeleitet werden. Sie hängen von der konkreten Gestaltung und den geltenden Regeln ab und sind bei Bedarf fachlich zu prüfen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Konsignationslager betreffen vor allem Lagerort und die grundsätzlich zunächst beim Lieferanten verbleibende Eigentumslage.',
    'VMI beschreibt, dass ein Lieferant Bestand und Nachversorgung anhand vereinbarter Daten unterstützt oder steuert.',
    'Beide Konzepte können kombiniert werden, bleiben aber getrennt zu regeln.',
    'Aktuelle Daten zu Bestand, Entnahme, Nachschub und Bestandsgrenzen sind entscheidend.',
    'Konsignationslager und VMI können Versorgung und Prozesse verbessern, verändern aber Kapitalbindung und Abhängigkeiten.',
    'Vertrags-, Steuer- und Buchhaltungsfolgen hängen von der konkreten Vereinbarung ab.',
  ],
  commonMistakes: [
    'Konsignationslager und VMI ohne Trennung von Eigentum, Lagerort und Bestandssteuerung erklären',
    'Entnahmen, Rückgaben, Schäden oder Bestandsdifferenzen nicht eindeutig erfassen',
    'Mindest- und Höchstwerte trotz verändertem Bedarf oder Lieferzeit nicht aktualisieren',
    'automatische Nachversorgung ohne Prüfung von Stammdaten und Abweichungen laufen lassen',
    'Vertrags- oder Steuerfolgen pauschal aus dem allgemeinen Konzept ableiten',
  ],
  faqs: [
    {
      question: 'Was ist ein Konsignationslager?',
      answer: 'Es ist ein Warenbestand beim Kunden oder in dessen Nähe, an dem das Eigentum grundsätzlich zunächst beim Lieferanten verbleibt. Die konkrete Vereinbarung regelt die Einzelheiten.',
    },
    {
      question: 'Was ist Vendor Managed Inventory?',
      answer: 'Bei VMI übernimmt oder unterstützt der Lieferant die Bestandssteuerung und Nachversorgung anhand vereinbarter Bestands- und Verbrauchsdaten.',
    },
    {
      question: 'Kann ein Konsignationslager mit VMI kombiniert werden?',
      answer: 'Ja. Der Lieferant kann einen kundennahem Bestand bereitstellen und zugleich dessen Auffüllung steuern. Beide Konzepte bleiben aber getrennt zu regeln.',
    },
    {
      question: 'Wem gehört die Ware im Konsignationslager?',
      answer: 'Grundsätzlich verbleibt das Eigentum zunächst beim Lieferanten. Der genaue Zeitpunkt und die weiteren Folgen hängen von der konkreten Vereinbarung ab.',
    },
    {
      question: 'Welche Daten braucht VMI?',
      answer: 'Typisch sind Bestände, Entnahmen, offene Nachschübe, Artikelinformationen, Bestandsgrenzen und Lieferzeiten. Welche Daten nötig sind, hängt vom vereinbarten Prozess ab.',
    },
  ],
  related: [
    'sicherheitsbestand-meldebestand-servicegrad',
    'lieferantenrisiko',
    'lieferantenbewertung',
    'just-in-time-sequence',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default konsignationslagerVmi;
