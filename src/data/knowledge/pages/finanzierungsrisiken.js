import { defaultDisclaimer } from '../shared.js';

const finanzierungsrisiken = {
  slug: 'finanzierungsrisiken',
  category: 'Finanzierung & Investition',
  title: 'Finanzierungsrisiken',
  description: 'Finanzierungsrisiken einfach erklärt: Zinsen, Laufzeiten, Tilgung, Liquidität, Sicherheiten, Covenants und die Planung von Gegenmaßnahmen.',
  seo: {
    title: 'Finanzierungsrisiken einfach erklärt | Belege24',
    description: 'Verstehe Zins-, Liquiditäts- und Refinanzierungsrisiken, Tilgung, Sicherheiten und wie Szenario- und Liquiditätsplanung Risiken sichtbar machen.',
    canonicalPath: '/wissen/finanzierungsrisiken',
  },
  article: {
    intro: 'Finanzierungsrisiken entstehen, wenn Zinsen, Tilgungen oder andere Verpflichtungen nicht mehr zu den verfügbaren Mitteln und erwarteten Zahlungsströmen passen. Sie betreffen nicht nur die Höhe eines Kredits, sondern auch Laufzeiten, Sicherheiten, Vertragsbedingungen und Abhängigkeiten.',
    sections: [
      {
        heading: 'Was sind Finanzierungsrisiken?',
        paragraphs: [
          'Finanzierungsrisiken sind mögliche Belastungen, die aus der Aufnahme, Verlängerung oder Rückzahlung von Kapital entstehen können. Sie können die Zahlungsfähigkeit einschränken, Kosten erhöhen oder Handlungsspielräume verringern.',
          'Entscheidend ist nicht nur, ob eine Finanzierung heute verfügbar ist. Auch Zinsbindung, Fälligkeiten, Tilgungsplan, erwartete Einzahlungen und verfügbare Reserven bestimmen, ob sie bei unterschiedlichen Entwicklungen tragfähig bleibt.',
        ],
      },
      {
        heading: 'Zinsänderungsrisiko',
        paragraphs: [
          'Bei variabel verzinsten Krediten können steigende Marktzinsen die Zinskosten erhöhen. Bei fest vereinbarten Zinsen besteht das Risiko vor allem bei einer späteren Anschlussfinanzierung, wenn dann höhere Konditionen gelten.',
          'Wie stark sich eine Zinsänderung auswirkt, hängt von Kreditvolumen, Zinssatz, Zinsbindung und Laufzeit ab. Plane nicht nur mit dem heutigen Zins, sondern prüfe auch, wie höhere Zinsen die laufenden Auszahlungen verändern würden.',
        ],
      },
      {
        heading: 'Laufzeit- und Refinanzierungsrisiko',
        paragraphs: [
          'Läuft eine Finanzierung aus, obwohl das finanzierte Vorhaben noch Kapital bindet, kann eine Anschlussfinanzierung erforderlich werden. Das ist ein Refinanzierungsrisiko: Neue Mittel müssen zu einem späteren Zeitpunkt verfügbar und bezahlbar sein.',
          'Besonders relevant sind hohe Restschulden, Schlussraten oder eine kurzfristige Finanzierung langfristig gebundener Mittel. Eine realistische Planung berücksichtigt deshalb, wann welche Beträge fällig werden und welche Alternativen dann tatsächlich bestehen.',
        ],
      },
      {
        heading: 'Liquiditätsrisiko und Tilgungsbelastung',
        paragraphs: [
          [
            'Zinsen und Tilgungen führen zu Auszahlungen. Werden Kundenforderungen später bezahlt, Umsätze schwächer als erwartet oder Kosten höher, kann die ',
            { type: 'glossary', id: 'liquiditaet', text: 'Liquidität' },
            ' unter Druck geraten – auch wenn ein Unternehmen rechnerisch Gewinne ausweist.',
          ],
          'Eine hohe Tilgungsbelastung kann die freie Liquidität besonders in den ersten Jahren einschränken. Deshalb sollten Tilgungsplan, saisonale Schwankungen und mögliche Verzögerungen von Einzahlungen zusammen betrachtet werden.',
        ],
      },
      {
        heading: 'Fremdwährungsrisiko nur grundsätzlich',
        paragraphs: [
          'Ist ein Kredit oder eine andere Finanzierung in einer Fremdwährung vereinbart, können Wechselkurse den Rückzahlungsbetrag in Euro verändern. Steigt die Fremdwährung gegenüber dem Euro, kann die Belastung in Euro höher ausfallen.',
          'Ob dieses Risiko relevant ist, hängt von Währung, Zahlungsströmen und Vertrag ab. Einnahmen in derselben Währung können das Risiko teilweise ausgleichen, beseitigen es aber nicht automatisch.',
        ],
      },
      {
        heading: 'Sicherheiten und Vertragsbedingungen',
        paragraphs: [
          'Sicherheiten können die Finanzierung ermöglichen oder Konditionen beeinflussen. Sie können aber auch wirtschaftliche Folgen haben, wenn Verpflichtungen nicht erfüllt werden. Welche Vermögenswerte, Bürgschaften oder Rechte betroffen sind, ergibt sich aus den jeweiligen Vereinbarungen.',
          [
            'Ein ',
            { type: 'glossary', id: 'covenant', text: 'Covenant' },
            ' ist eine vertragliche Vorgabe, etwa zu Kennzahlen, Informationen oder bestimmten Handlungen. Werden solche Vorgaben verletzt, können je nach Vertrag zusätzliche Pflichten, Verhandlungen oder andere Folgen eintreten.',
          ],
        ],
      },
      {
        heading: 'Abhängigkeit und Konzentrationsrisiken',
        paragraphs: [
          'Wenn ein Unternehmen für wesentliche Mittel nur von einer Bank oder einem Kapitalgeber abhängt, kann eine geänderte Kreditentscheidung den Handlungsspielraum begrenzen. Ähnlich kann eine Häufung von Fälligkeiten in einem kurzen Zeitraum das Risiko erhöhen.',
          'Konzentrationsrisiken entstehen auch, wenn hohe Forderungen von wenigen Kunden oder sehr schwankende Einzahlungen eine Finanzierung tragen sollen. Finanzierungs- und operative Risiken können sich dann gegenseitig verstärken.',
        ],
      },
      {
        heading: 'Verschuldung und Cashflow zusammen betrachten',
        paragraphs: [
          [
            'Der ',
            { type: 'link', href: '/wissen/verschuldungsgrad', text: 'Verschuldungsgrad' },
            ' zeigt das Verhältnis von Fremd- zu Eigenkapital. Er hilft bei der Einordnung, sagt allein aber noch nicht, ob Zinsen und Tilgungen tatsächlich zahlbar sind.',
          ],
          [
            'Dafür ist auch der ',
            { type: 'link', href: '/wissen/cashflow', text: 'Cashflow' },
            ' wichtig: Er zeigt, welche Mittel im Geschäft tatsächlich zufließen und wofür sie wieder abfließen. Die ',
            { type: 'link', href: '/wissen/finanzierungsstruktur', text: 'Finanzierungsstruktur' },
            ' verbindet diese Sicht mit Kapitalarten und Laufzeiten.',
          ],
        ],
      },
      {
        heading: 'Risiken mit Szenarien und Liquiditätsplanung sichtbar machen',
        paragraphs: [
          'Eine Szenarioplanung vergleicht nicht nur den erwarteten Verlauf, sondern auch weniger günstige Annahmen. Zum Beispiel: Was passiert bei späteren Kundenzahlungen, 1 oder 2 Prozentpunkten höheren Zinsen oder einer niedrigeren Auslastung?',
          [
            'Eine laufende ',
            { type: 'link', href: '/wissen/liquiditaet-controlling', text: 'Liquiditätsplanung' },
            ' ordnet Einzahlungen, Auszahlungen, Zinsen, Tilgungen und Fälligkeiten zeitlich ein. Sie kann früh zeigen, wann Reserven, Gespräche oder andere Maßnahmen erforderlich sein könnten.',
          ],
        ],
        formulaCards: [
          {
            label: 'Risikoübersicht',
            title: 'Risiko → mögliche Auswirkung → mögliche Gegenmaßnahme',
            formula: 'Zinsanstieg → höhere Zinsauszahlungen → Zinsbindung und Szenarien prüfen\nHohe Schlussrate → Refinanzierungsbedarf → Rückführung oder Anschlussfinanzierung früh planen\nSpäte Einzahlungen → Liquiditätslücke → Zahlungsziele und Reserven planen\nKonzentration bei Kapitalgebern → geringerer Handlungsspielraum → Alternativen und Fälligkeiten prüfen',
            description: 'Diese Beispiele sind allgemeine Prüfimpulse. Welche Maßnahme passt, hängt von Vertrag, Zahlungsströmen und Risikotragfähigkeit ab.',
          },
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Betrachte nicht nur die Kredithöhe oder den Zinssatz. Prüfe auch Laufzeit, Zinsbindung, Tilgungsprofil, Sicherheiten, Vertragsbedingungen und die zeitliche Verteilung aller Fälligkeiten.',
          [
            'Für die Grundlagen von Raten, Restschuld und Tilgung hilft die Seite ',
            { type: 'link', href: '/wissen/darlehen-kreditarten', text: 'Darlehen & Kreditarten' },
            '. Eine Finanzierung sollte zudem bei weniger günstigen Annahmen tragfähig bleiben, nicht nur im besten Planfall.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Finanzierungsrisiken betreffen Zinsen, Tilgungen, Fälligkeiten, Sicherheiten und Abhängigkeiten.',
    'Zinsänderungen und Anschlussfinanzierungen können die Finanzierungskosten erhöhen.',
    'Gewinne allein sichern keine Zahlungsfähigkeit; entscheidend sind fällige Ein- und Auszahlungen.',
    'Verschuldung und Cashflow müssen gemeinsam mit Laufzeiten und Reserven betrachtet werden.',
    'Szenario- und Liquiditätsplanung machen Belastungen frühzeitig sichtbar.',
  ],
  commonMistakes: [
    'nur mit dem besten Planfall und unveränderten Zinsen rechnen.',
    'Restschulden, Schlussraten oder Anschlussfinanzierungen zu spät planen.',
    'Gewinn mit ausreichender Liquidität gleichsetzen.',
    'Sicherheiten und Vertragsvorgaben nur als Formalität behandeln.',
    'Fälligkeiten und Kapitalgeberkonzentration nicht im Zusammenhang betrachten.',
  ],
  faqs: [
    {
      question: 'Was sind Finanzierungsrisiken?',
      answer: 'Finanzierungsrisiken sind mögliche Belastungen aus Zinsen, Tilgungen, Fälligkeiten, Vertragsbedingungen und der Verfügbarkeit von Kapital. Sie können Kosten, Liquidität und Handlungsspielraum beeinflussen.',
    },
    {
      question: 'Was ist ein Zinsänderungsrisiko?',
      answer: 'Es beschreibt das Risiko höherer Zinskosten bei variabler Verzinsung oder bei einer späteren Anschlussfinanzierung zu ungünstigeren Konditionen.',
    },
    {
      question: 'Warum sind Schlussraten riskant?',
      answer: 'Eine hohe Schlussrate führt zu einem großen Zahlungsbedarf an einem bestimmten Termin. Ist dann keine ausreichende Liquidität oder Anschlussfinanzierung verfügbar, kann die Rückzahlung schwierig werden.',
    },
    {
      question: 'Was ist ein Covenant?',
      answer: 'Ein Covenant ist eine vertragliche Vorgabe in einer Finanzierung. Er kann beispielsweise Kennzahlen, Informationspflichten oder bestimmte Handlungen betreffen.',
    },
    {
      question: 'Wie hilft eine Liquiditätsplanung?',
      answer: 'Sie zeigt erwartete Ein- und Auszahlungen nach Zeiträumen. So können Zinsen, Tilgungen und mögliche Zahlungslücken frühzeitig sichtbar werden.',
    },
  ],
  related: [
    'finanzierungsstruktur',
    'darlehen-kreditarten',
    'liquiditaet-controlling',
    'verschuldungsgrad',
    'cashflow',
    'leverage-effekt',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default finanzierungsrisiken;
