import { defaultDisclaimer } from '../shared.js';

const lieferantenrisiko = {
  slug: 'lieferantenrisiko',
  category: 'Supply Chain & Logistik',
  title: 'Lieferantenrisiko',
  description: 'Lieferantenrisiken einfach erklärt: Ausfälle, Qualitätsprobleme, Engpässe und Abhängigkeiten früh erkennen und angemessen absichern.',
  seo: {
    title: 'Lieferantenrisiko einfach erklärt | Belege24',
    description: 'Erfahre, welche Risiken in Lieferbeziehungen entstehen können, wie Frühwarnindikatoren helfen und welche Maßnahmen Versorgung und Qualität absichern.',
    canonicalPath: '/wissen/lieferantenrisiko',
  },
  article: {
    intro: 'Lieferantenrisiko beschreibt die Möglichkeit, dass ein Lieferant oder seine Lieferkette den Bedarf nicht wie vereinbart decken kann. Folgen können fehlende Materialien, verspätete Lieferungen, Qualitätsprobleme oder zusätzliche Kosten sein.',
    sections: [
      {
        heading: 'Was ist Lieferantenrisiko?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'lieferantenrisiko', text: 'Lieferantenrisiko' },
            ' entsteht, wenn die Leistung eines Lieferanten unsicher ist oder sich verschlechtern kann. Nicht jeder Lieferant trägt dasselbe Risiko: Entscheidend sind unter anderem die Bedeutung des beschafften Guts, Wechselmöglichkeiten, Lieferzeit, vorhandene Bestände und die Folgen eines Ausfalls.',
          ],
          'Ziel ist nicht, jedes Risiko vollständig auszuschließen. Unternehmen sollen wichtige Risiken erkennen, ihre mögliche Auswirkung einschätzen und passende, wirtschaftlich vertretbare Maßnahmen wählen.',
        ],
      },
      {
        heading: 'Typische Risiken in Lieferbeziehungen',
        paragraphs: [
          'Ein Ausfallrisiko besteht, wenn ein Lieferant zeitweise oder dauerhaft nicht liefern kann. Ursachen können etwa ein Produktionsstopp, fehlende Vorprodukte, ein Brand, IT-Störungen oder personelle Probleme sein. Besonders kritisch ist dies bei schwer ersetzbaren Teilen.',
          'Qualitätsrisiken zeigen sich durch fehlerhafte Ware, unzureichende Spezifikationen oder schwankende Prozessqualität. Sie können Nacharbeit, Reklamationen, Ausschuss, Verzögerungen oder Probleme bei eigenen Kunden auslösen.',
          'Lieferverzug und Kapazitätsengpässe treten auf, wenn bestätigte Termine nicht gehalten werden oder Mengen nicht verfügbar sind. Bei hoher Nachfrage oder knappen Rohstoffen kann die Kapazität eines Lieferanten schnell zum Engpass werden.',
          'Auch die finanzielle Stabilität eines Lieferanten, seine Abhängigkeit von einzelnen Kunden oder Vorlieferanten sowie organisatorische Veränderungen können die Lieferfähigkeit beeinflussen. Bei internationalen Bezugsquellen kommen geografische und politische Risiken, Transportstörungen, Zoll oder regulatorische Änderungen hinzu. Währungsrisiken können außerdem Kosten und Kalkulation verändern, wenn Preise in einer Fremdwährung vereinbart sind.',
        ],
      },
      {
        heading: 'Abhängigkeit und Single-Source-Risiko',
        paragraphs: [
          'Abhängigkeit entsteht nicht nur bei formellem Single Sourcing. Sie kann auch bestehen, wenn zwar mehrere Lieferanten vorhanden sind, diese aber dieselben Vorlieferanten, Regionen oder Transportwege nutzen. Eine zweite Bezugsquelle hilft nur, wenn sie im Störfall tatsächlich liefern kann.',
          'Single Sourcing kann für komplexe, qualitätskritische oder eng abgestimmte Leistungen sinnvoll sein. Das Single-Source-Risiko steigt jedoch, wenn Alternativen nicht freigegeben sind, Wechsel lange dauert oder kein ausreichender Bestand vorhanden ist. Die Entscheidung sollte deshalb Nutzen der Bündelung und mögliche Folgen eines Ausfalls gemeinsam abwägen.',
          [
            'Die strukturelle Gestaltung der Bezugsquellen erklärt die Seite ',
            { type: 'link', href: '/wissen/sourcing-strategien', text: 'Sourcing-Strategien' },
            '. Sie ordnet Single, Dual und Multiple Sourcing sowie weitere Optionen nach Kosten, Abhängigkeit und Koordinationsaufwand ein.',
          ],
        ],
      },
      {
        heading: 'Frühwarnindikatoren und Risikoanalyse',
        paragraphs: [
          'Frühwarnindikatoren sind Beobachtungen, die auf eine mögliche Verschlechterung hinweisen können. Dazu gehören wiederholte Terminverschiebungen, steigende Reklamationen, ungewöhnlich lange Reaktionszeiten, häufige Wechsel von Ansprechpartnern, gekürzte Mengenbestätigungen oder auffällige Preissprünge.',
          'Eine Risikoanalyse beginnt mit der Frage, welche Lieferbeziehungen besonders kritisch sind. Danach werden Eintrittswahrscheinlichkeit und mögliche Auswirkung eingeschätzt. Für ein kleines, aber unverzichtbares Teil kann die Auswirkung hoch sein, obwohl sein Einkaufsvolumen gering ist.',
          'Die Einschätzung sollte regelmäßig aktualisiert werden. Markt, Nachfrage, Lieferfähigkeit und geopolitische Rahmenbedingungen können sich ändern. Daten aus Wareneingang, Reklamationen, Terminen und Gesprächen helfen, Risiken nicht nur aus dem Bauchgefühl zu bewerten.',
        ],
        formulaCards: [
          {
            label: 'Risiko',
            title: 'Risiken in Maßnahmen übersetzen',
            formula: 'Risiko → mögliche Auswirkung → Gegenmaßnahme',
            description: 'Die Maßnahme richtet sich nach Ursache, Bedeutung und Kosten des Risikos. Eine pauschale Lösung passt selten für alle Lieferbeziehungen.',
          },
        ],
        exampleCards: [
          {
            title: 'Praxisbeispiel: wiederholt verspätete Lieferungen',
            paragraphs: [
              'Ein Lieferant bestätigt Termine zunächst pünktlich, verschiebt sie aber in drei aufeinanderfolgenden Monaten. Dadurch sinkt der verfügbare Bestand eines wichtigen Materials.',
              'Das Unternehmen prüft Ursache, verbleibende Reichweite, Alternativen und vereinbarte Termine. Abhängig von der Kritikalität kann es zusätzliche Mengen absichern, eine zweite Quelle qualifizieren oder mit dem Lieferanten einen konkreten Verbesserungsplan vereinbaren.',
            ],
            effects: [
              'Risiko: Produktions- oder Lieferausfall bei weiterem Verzug.',
              'Gegenmaßnahme: Terminlage beobachten und Versorgung gezielt absichern, statt erst bei leerem Lager zu reagieren.',
            ],
          },
        ],
      },
      {
        heading: 'Mögliche Gegenmaßnahmen',
        paragraphs: [
          'Alternativlieferanten können Abhängigkeit reduzieren, wenn sie technisch und organisatorisch tatsächlich freigegeben sind. Je nach Produkt braucht dies Zeit für Muster, Qualifizierung, Verträge oder Anpassungen. Eine bloße Liste möglicher Anbieter ist noch keine einsatzfähige Alternative.',
          'Ein Sicherheitsbestand kann kurze Unterbrechungen überbrücken. Er bindet jedoch Kapital und verursacht Lageraufwand. Seine Höhe sollte zur Lieferzeit, Schwankung und Bedeutung des Guts passen, nicht pauschal für alle Artikel gleich sein.',
          'Dual oder Multiple Sourcing kann die direkte Abhängigkeit von einer Bezugsquelle senken. Die Strategie erhöht zugleich Koordination, Qualitätssicherung und möglicherweise Stückkosten. Verträge, klare Qualitäts- und Liefervereinbarungen sowie passende Eskalationswege können weitere Risiken begrenzen.',
          [
            'Zeigt ein bestehender Lieferant konkrete Leistungsschwächen, kann ',
            { type: 'link', href: '/wissen/lieferantenentwicklung', text: 'Lieferantenentwicklung' },
            ' ein sinnvoller Ansatz sein. Die ',
            { type: 'link', href: '/wissen/lieferantenbewertung', text: 'Lieferantenbewertung' },
            ' liefert dafür wiederkehrende Informationen zu Qualität, Terminen, Kommunikation und anderen Kriterien.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, nur große Einkaufsvolumina als kritisch einzustufen. Kleine, nicht kurzfristig ersetzbare Teile können eine Produktion oder Dienstleistung ebenso blockieren.',
          'Auch mehrere Lieferanten sind keine automatische Absicherung. Gemeinsame Vorlieferanten, gleiche Regionen oder fehlende technische Freigaben können dazu führen, dass alle Quellen zugleich ausfallen.',
          'Zu hohe Sicherheitsbestände lösen nicht jedes Problem und können Kapital binden oder veralten. Maßnahmen sollten zur tatsächlichen Ursache, Lieferzeit und Auswirkung eines Risikos passen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Lieferantenrisiken können Lieferfähigkeit, Qualität, Kosten und Termine beeinträchtigen.',
    'Typische Risiken sind Ausfälle, Qualitätsprobleme, Lieferverzug, Kapazitätsengpässe, finanzielle Instabilität und geografische Abhängigkeiten.',
    'Single Sourcing kann sinnvoll sein, erhöht aber ohne wirksame Alternativen das Abhängigkeitsrisiko.',
    'Frühwarnindikatoren wie Terminverschiebungen, Reklamationen oder gekürzte Mengenbestätigungen helfen, Risiken früher zu erkennen.',
    'Gegenmaßnahmen reichen von Alternativlieferanten und Sicherheitsbestand bis zu Sourcing, Vertragsgestaltung und Lieferantenentwicklung.',
    'Die passende Maßnahme hängt von Ursache, Bedeutung, Risiko und Kosten ab.',
  ],
  commonMistakes: [
    'nur hohe Einkaufsvolumina statt auch kleine, unverzichtbare Teile als kritisch betrachten',
    'mehrere Lieferanten ohne Prüfung gemeinsamer Abhängigkeiten als ausreichende Absicherung ansehen',
    'Alternativlieferanten ohne technische oder organisatorische Freigabe als sofort verfügbar bewerten',
    'Sicherheitsbestände pauschal erhöhen, ohne Ursache und Kosten des Risikos zu prüfen',
    'Warnsignale aus Terminen, Reklamationen oder Kommunikation nicht systematisch auswerten',
  ],
  faqs: [
    {
      question: 'Was ist Lieferantenrisiko?',
      answer: 'Es beschreibt die Möglichkeit, dass ein Lieferant oder seine Lieferkette den Bedarf nicht wie vereinbart in Qualität, Menge oder Termin decken kann.',
    },
    {
      question: 'Was ist ein Single-Source-Risiko?',
      answer: 'Es entsteht, wenn ein Unternehmen für ein Gut im Wesentlichen von einer Bezugsquelle abhängig ist und eine Störung nicht kurzfristig ausgleichen kann.',
    },
    {
      question: 'Welche Frühwarnindikatoren gibt es?',
      answer: 'Beispiele sind wiederholte Terminverschiebungen, steigende Reklamationen, lange Reaktionszeiten, gekürzte Mengenbestätigungen oder ungewöhnliche Preissprünge.',
    },
    {
      question: 'Hilft ein Sicherheitsbestand immer?',
      answer: 'Er kann kurze Unterbrechungen abfedern, bindet aber Kapital und kann nicht jede Ursache lösen. Seine Höhe sollte zur Lieferzeit, Schwankung und Bedeutung des Guts passen.',
    },
    {
      question: 'Sind mehrere Lieferanten automatisch sicherer?',
      answer: 'Nicht automatisch. Sie können gemeinsame Vorlieferanten, Regionen oder Transportwege haben. Außerdem müssen sie im Störfall technisch und kapazitativ tatsächlich liefern können.',
    },
  ],
  related: [
    'sourcing-strategien',
    'lieferantenbewertung',
    'lieferantenentwicklung',
    'lieferantenportfolio',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lieferantenrisiko;
