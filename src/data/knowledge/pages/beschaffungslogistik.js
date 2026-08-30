import { defaultDisclaimer } from '../shared.js';

const beschaffungslogistik = {
  slug: 'beschaffungslogistik',
  category: 'Supply Chain & Logistik',
  title: 'Beschaffungslogistik',
  description: 'Beschaffungslogistik einfach erklärt: Waren vom Lieferanten bis zur Bereitstellung im Unternehmen zuverlässig, wirtschaftlich und termingerecht steuern.',
  seo: {
    title: 'Beschaffungslogistik einfach erklärt | Belege24',
    description: 'Erfahre, wie Beschaffungslogistik Abholung, Anlieferung, Transport, Wareneingang, Bestände und Lieferzeiten für eine sichere Versorgung verbindet.',
    canonicalPath: '/wissen/beschaffungslogistik',
  },
  article: {
    intro: 'Beschaffungslogistik organisiert den Warenfluss vom Lieferanten bis zur Bereitstellung im Unternehmen. Sie verbindet Transport, Liefertermine, Bestände, Wareneingang und Informationen, damit Material oder Waren zur benötigten Zeit verfügbar sind.',
    sections: [
      {
        heading: 'Aufgabe der Beschaffungslogistik',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'beschaffungslogistik', text: 'Beschaffungslogistik' },
            ' sorgt dafür, dass beschaffte Güter vom Lieferanten verlässlich bis zur eigenen Produktion, zum Lager oder an einen anderen Bedarfspunkt gelangen. Sie betrachtet dabei nicht nur die Beförderung, sondern auch Termine, Mengen, Übergaben, Informationen und die tatsächliche Verfügbarkeit nach dem Wareneingang.',
          ],
          [
            'Sie ergänzt die ',
            { type: 'link', href: '/wissen/beschaffung', text: 'Beschaffung' },
            ': Diese klärt unter anderem Bedarf, Quelle und Bestellung. Beschaffungslogistik gestaltet anschließend den physischen und informationellen Weg der Ware bis zur Bereitstellung.',
          ],
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Vom Lieferanten zur Bereitstellung',
            formula: 'Lieferant → Abholung/Anlieferung → Transport → Wareneingang → Prüfung → Lager/Produktion',
            description: 'Je nach Geschäftsmodell können Schritte zusammenfallen oder durch einen Dienstleister ausgeführt werden. Informationen zu Termin, Menge und Qualität begleiten den gesamten Ablauf.',
          },
        ],
      },
      {
        heading: 'Abholung, Anlieferung und Lieferfrequenz',
        paragraphs: [
          'Bei einer Anlieferung organisiert der Lieferant oder ein beauftragter Dienstleister den Transport bis zum Unternehmen. Bei einer Abholung steuert das Unternehmen den Transport selbst oder beauftragt dafür einen Partner. Die passende Variante hängt unter anderem von Mengen, Standorten, Kosten, Lieferbedingungen, Planbarkeit und vorhandenen Transportmöglichkeiten ab.',
          [
            'Die ',
            { type: 'glossary', id: 'lieferfrequenz', text: 'Lieferfrequenz' },
            ' beschreibt, wie oft ein Artikel oder eine Tour geliefert wird. Häufigere, kleinere Lieferungen können Bestände senken, erhöhen aber oft Koordinations- und Transportaufwand. Seltenere, größere Lieferungen bündeln Abläufe, können jedoch Lagerbestand und Kapitalbindung erhöhen.',
          ],
          [
            { type: 'glossary', id: 'transportbuendelung', text: 'Transportbündelung' },
            ' fasst Mengen, Lieferanten oder Empfänger in einer Tour oder Sendung zusammen. Das kann Auslastung und Kosten verbessern, darf aber nicht zu Zeitfenstern führen, die die Versorgung gefährden.',
          ],
        ],
      },
      {
        heading: 'Bestände und Wiederbeschaffungszeit',
        paragraphs: [
          'Die Wiederbeschaffungszeit endet nicht zwingend mit dem Eintreffen am Werkstor. Je nach Prozess gehören auch Entladung, Wareneingang, Mengen- und Qualitätsprüfung, Einlagerung oder Bereitstellung dazu. Erst wenn die Ware tatsächlich nutzbar ist, kann sie Bedarf decken.',
          'Lange oder schwankende Zeiten erhöhen den Bedarf an verlässlicher Planung und können Bestandsreserven erforderlich machen. Höhere Bestände können kurze Störungen abfedern, binden aber Kapital und Lagerfläche. Die Bestandsentscheidung muss daher zu Verbrauch, Lieferzeit, Fehlmengenfolgen und Kosten passen.',
        ],
      },
      {
        heading: 'Taktung, JIT/JIS und Milk Run',
        paragraphs: [
          [
            'Bei ',
            { type: 'link', href: '/wissen/just-in-time-sequence', text: 'Just-in-Time & Just-in-Sequence' },
            ' sind Liefermengen, Zeitfenster und teilweise die Reihenfolge eng auf den Bedarf abgestimmt. Das kann Bestände verringern, verlangt aber eine hohe Termin- und Informationssicherheit.',
          ],
          [
            'Ein ',
            { type: 'link', href: '/wissen/milk-run', text: 'Milk-Run-Konzept' },
            ' bündelt wiederkehrende Abholungen oder Zustellungen mehrerer Stationen auf einer festen Route. Es kann die Auslastung verbessern und Lieferungen takten, braucht aber belastbare Zeitfenster und klare Übergaben.',
          ],
          'Beide Konzepte sind keine allgemeine Lösung. Bei schwankendem Bedarf, langen Wegen oder instabilen Lieferketten können zusätzliche Puffer oder andere Transport- und Bestandsregeln sinnvoller sein.',
        ],
      },
      {
        heading: 'Wareneingang und Schnittstellen',
        paragraphs: [
          'Im Wareneingang werden je nach Prozess Menge, Artikel, Zustand, Dokumente und gegebenenfalls Qualität geprüft. Abweichungen müssen schnell an Einkauf, Lager, Produktion oder Lieferanten zurückgemeldet werden, damit die Ware nicht fälschlich als verfügbar geplant wird.',
          'Einkauf, Lager und Produktion brauchen eine gemeinsame Sicht auf Bedarf, offene Bestellungen, bestätigte Termine, verfügbare Mengen und Prioritäten. Der Einkauf stimmt Lieferbedingungen und Termine ab, das Lager organisiert Annahme und Bestand, die Produktion oder andere Bedarfsträger melden ihren tatsächlichen Bedarf. Unklare Übergaben führen leicht zu Wartezeiten, Fehlmengen oder unnötigen Eiltransporten.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Verspätete Anlieferung eines Produktionsmaterials',
            paragraphs: [
              'Ein Material soll am Vormittag geliefert und nach Wareneingangsprüfung direkt für die Produktion bereitgestellt werden. Der Transport verspätet sich um mehrere Stunden. Ohne aktuelle Rückmeldung plant die Produktion weiterhin mit dem ursprünglich bestätigten Termin.',
              'Eine funktionierende Beschaffungslogistik macht die Verzögerung früh sichtbar, prüft vorhandene Bestände und priorisiert bei Bedarf Material oder Auftrag neu. So lässt sich die Auswirkung begrenzen, auch wenn die Verspätung selbst nicht mehr vermeidbar ist.',
            ],
            effects: [
              'Risiko: Wartezeit oder Unterbrechung in der Produktion.',
              'Wichtige Reaktion: Terminabweichung, verfügbare Bestände und Prioritäten früh zwischen den beteiligten Bereichen abstimmen.',
            ],
          },
        ],
      },
      {
        heading: 'Kosten und Versorgungssicherheit abwägen',
        paragraphs: [
          'Beschaffungslogistik soll Transport-, Umschlag- und Lageraufwand wirtschaftlich gestalten. Die günstigste Einzellösung ist aber nicht immer die beste Gesamtlösung: Ein sehr günstiger, seltener Transport kann hohe Bestände erforderlich machen; eine häufige Anlieferung kann die Versorgung verbessern, aber Kosten und Koordination erhöhen.',
          [
            'Mögliche Störungen wie Lieferantenausfall, Kapazitätsengpass, Transportunterbrechung oder Informationsausfall ordnet die Seite ',
            { type: 'link', href: '/wissen/supply-chain-risiken-resilienz', text: 'Supply-Chain-Risiken & Resilienz' },
            ' ein. Geeignete Maßnahmen hängen von Kritikalität, Wiederbeschaffungszeit, Alternativen und Kosten ab.',
          ],
        ],
      },
      {
        heading: 'Typische Risiken und Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, nur die reine Transportzeit zu planen. Wareneingang, Prüfung, Einlagerung und interne Bereitstellung können die tatsächliche Verfügbarkeit ebenfalls verzögern.',
          'Auch eine hohe Lieferfrequenz schützt nicht automatisch vor Fehlmengen, wenn Daten, Zeitfenster oder Wareneingang nicht zuverlässig funktionieren. Umgekehrt lösen große Bestände keine Ursachen wie mangelhafte Kommunikation oder dauerhaft instabile Termine.',
          'Abholungen, Touren und Lieferbedingungen sollten nicht isoliert nach Frachtkosten entschieden werden. Auswirkungen auf Bestand, Lieferfähigkeit, Qualität, Personal und mögliche Störungen gehören in die Abwägung.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Beschaffungslogistik steuert Waren und Informationen vom Lieferanten bis zur nutzbaren Bereitstellung im Unternehmen.',
    'Sie verbindet Abholung oder Anlieferung, Transport, Wareneingang, Bestände, Termine und interne Übergaben.',
    'Lieferfrequenz und Transportbündelung beeinflussen Kosten, Bestände und Versorgungssicherheit.',
    'Wiederbeschaffungszeit umfasst je nach Prozess auch Wareneingang, Prüfung und Bereitstellung.',
    'JIT/JIS und Milk Run können Abläufe takten oder bündeln, brauchen aber verlässliche Daten und Termine.',
    'Beschaffungslogistik muss Kosten und Versorgungssicherheit gemeinsam abwägen.',
  ],
  commonMistakes: [
    'nur Transportzeit statt der tatsächlichen Verfügbarkeit nach Wareneingang und Bereitstellung betrachten',
    'Abholung oder Anlieferung allein anhand der Frachtkosten auswählen',
    'Lieferfrequenz erhöhen, ohne Zeitfenster, Wareneingang und Datenqualität abzusichern',
    'Bestandsreserven als Ersatz für unzuverlässige Termine oder mangelhafte Kommunikation verwenden',
    'Einkauf, Lager und Produktion mit unterschiedlichen Termin-, Bestands- oder Prioritätsdaten arbeiten lassen',
  ],
  faqs: [
    {
      question: 'Was ist Beschaffungslogistik?',
      answer: 'Sie organisiert den Waren- und Informationsfluss vom Lieferanten bis zur nutzbaren Bereitstellung im Unternehmen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Beschaffung und Beschaffungslogistik?',
      answer: 'Beschaffung befasst sich unter anderem mit Bedarf, Lieferanten und Bestellung. Beschaffungslogistik gestaltet den Weg der Ware und Informationen vom Lieferanten bis zum Bedarfspunkt.',
    },
    {
      question: 'Was gehört zur Wiederbeschaffungszeit?',
      answer: 'Je nach Prozess gehören dazu Bestellung, Lieferzeit, Transport, Wareneingang, Prüfung und Bereitstellung bis zur tatsächlichen Verfügbarkeit.',
    },
    {
      question: 'Wann ist ein Milk Run sinnvoll?',
      answer: 'Er kann bei wiederkehrenden Mengen, Stationen und Zeitfenstern helfen, Transporte zu bündeln. Voraussetzung sind zuverlässige Planung und klare Übergaben.',
    },
    {
      question: 'Warum ist der Wareneingang wichtig?',
      answer: 'Ware ist erst nach den notwendigen Prüfungen und der Bereitstellung verlässlich nutzbar. Abweichungen müssen deshalb zeitnah sichtbar und abgestimmt sein.',
    },
  ],
  related: [
    'beschaffung',
    'just-in-time-sequence',
    'milk-run',
    'supply-chain-risiken-resilienz',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default beschaffungslogistik;
