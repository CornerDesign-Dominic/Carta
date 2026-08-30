import { defaultDisclaimer } from '../shared.js';

const distributionslogistik = {
  slug: 'distributionslogistik',
  category: 'Supply Chain & Logistik',
  title: 'Distributionslogistik',
  description: 'Distributionslogistik einfach erklärt: Aufträge bereitstellen, kommissionieren, versenden und Kunden zuverlässig sowie wirtschaftlich beliefern.',
  seo: {
    title: 'Distributionslogistik einfach erklärt | Belege24',
    description: 'Erfahre, wie Distributionslogistik Auftragsbereitstellung, Kommissionierung, Versand, Transport und Lieferperformance bis zum Kunden verbindet.',
    canonicalPath: '/wissen/distributionslogistik',
  },
  article: {
    intro: 'Distributionslogistik organisiert den Warenfluss vom Unternehmen zum Kunden. Sie verbindet Auftragsbereitstellung, Kommissionierung, Verpackung, Versand, Transport und Informationen, damit die richtige Ware zum vereinbarten Zeitpunkt beim Empfänger ankommt.',
    sections: [
      {
        heading: 'Was ist Distributionslogistik?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'distributionslogistik', text: 'Distributionslogistik' },
            ' beginnt, sobald ein Kundenauftrag erfüllt werden soll, und endet mit der Übergabe oder Zustellung der Ware. Sie umfasst dabei nicht nur den Transport, sondern auch die Vorbereitung des Auftrags, Bestände, Dokumente, Termine und Rückmeldungen.',
          ],
          'Der Prozess kann direkt aus einem Werk oder Lager zum Kunden führen. Er kann aber auch über Verteilzentren, Handelspartner oder mehrere Lagerstandorte laufen. Die passende Struktur richtet sich nach Produkt, Kundennetz, Mengen, Lieferzeit und Serviceanforderung.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Vom Kundenauftrag zur Zustellung',
            formula: 'Auftrag → Bereitstellung → Versand → Transport → Kunde',
            description: 'Je nach Produkt kommen Kommissionierung, Verpackung, Qualitätsprüfung, Umschlag oder weitere Übergaben hinzu. Informationen zu Auftrag und Termin begleiten die Ware.',
          },
        ],
      },
      {
        heading: 'Auftragsbereitstellung, Kommissionierung und Verpackung',
        paragraphs: [
          'Für die Auftragsbereitstellung muss klar sein, welche Artikel, Varianten, Mengen und Termine der Kunde benötigt. Bestände werden reserviert oder bereitgestellt, damit dieselbe Ware nicht mehrfach verplant wird.',
          [
            'Bei der ',
            { type: 'glossary', id: 'kommissionierung', text: 'Kommissionierung' },
            ' werden die zum Auftrag gehörenden Artikel zusammengestellt. Verpackung schützt die Ware, erleichtert die Identifikation und muss zur Ware, zum Transportweg und zu möglichen gesetzlichen oder vertraglichen Vorgaben passen.',
          ],
          'Fehler in Artikel, Menge, Adresse, Kennzeichnung oder Verpackung fallen oft erst beim Kunden auf und verursachen Rückfragen, Nachlieferungen oder Retouren. Klare Prüfungen vor dem Versand helfen, solche Abweichungen zu verringern.',
        ],
      },
      {
        heading: 'Direktbelieferung oder Verteilstruktur',
        paragraphs: [
          'Bei Direktbelieferung wird Ware unmittelbar vom Werk, Lager oder Lieferanten an den Kunden versandt. Das kann Übergaben und Liegezeiten reduzieren, passt aber nicht zu jeder Kundenstruktur oder Lieferfrequenz.',
          'Eine Verteilstruktur nutzt ein oder mehrere Lager, Umschlagpunkte oder regionale Standorte. Sie kann Kundennähe und kurze Reaktionszeiten verbessern, erhöht aber meist Bestands-, Flächen- und Koordinationsaufwand. Es gibt keine allgemein bessere Struktur; sie muss zu Liefergebiet, Aufträgen und Produkt passen.',
        ],
      },
      {
        heading: 'Transportplanung und Lieferzeit',
        paragraphs: [
          'Transportplanung stimmt Sendungen, Verkehrsträger, Touren, Zeitfenster und Kapazitäten aufeinander ab. Neben der reinen Fahrzeit zählen Abholung, Übergaben, Umschlag und Zustellung für die tatsächliche Lieferzeit.',
          'Kurze Lieferzeiten können den Kundenservice verbessern, benötigen aber häufig dichtere Lagerstrukturen, höhere Lieferfrequenzen oder mehr Transportkapazität. Längere Lieferzeiten können wirtschaftlicher sein, wenn sie transparent vereinbart und in Planung sowie Bestand berücksichtigt werden.',
        ],
      },
      {
        heading: 'Liefertermintreue, Servicegrad und Kosten',
        paragraphs: [
          'Liefertermintreue zeigt, ob Waren zum vereinbarten Termin oder Zeitfenster ankommen. Vollständigkeit und Qualität ergänzen diese Sicht: Eine pünktliche, aber unvollständige oder beschädigte Lieferung erfüllt den Auftrag nicht vollständig.',
          [
            'Der ',
            { type: 'glossary', id: 'servicegrad', text: 'Servicegrad' },
            ' beschreibt je nach Definition, mit welcher Wahrscheinlichkeit oder in welchem Umfang Bedarf ohne Fehlmenge bedient wird. Die Seite ',
            { type: 'link', href: '/wissen/liefertermintreue-servicegrad', text: 'Liefertermintreue & Servicegrad' },
            ' erklärt Termintreue, Mengen, OTIF und Servicelevel ausführlicher.',
          ],
          'Mehr Geschwindigkeit und Verfügbarkeit können höhere Bestände, zusätzliche Standorte oder mehr Transporte erfordern. Niedrigere Kosten durch Bündelung oder seltenere Lieferungen können dagegen Lieferzeit und Flexibilität beeinflussen. Diese Ziele müssen bewusst abgewogen werden.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Liefergeschwindigkeit und Bestand abwägen',
            paragraphs: [
              'Ein Onlinehändler kann Kunden aus einem zentralen Lager beliefern. Das hält Bestände an einem Ort, bedeutet für weiter entfernte Kunden aber eine längere Lieferzeit. Zusätzliche regionale Lager könnten den Versand beschleunigen, verteilen jedoch Bestand auf mehrere Standorte.',
              'Die Entscheidung berücksichtigt daher nicht nur die Transportkosten. Auch Bestandskosten, erwartete Lieferzeit, Auftragsvolumen, Fehlmengenrisiko und die tatsächlich zugesagte Leistung gehören dazu.',
            ],
            effects: [
              'Zentrales Lager: geringere Bestandsverteilung, aber je nach Entfernung längere Lieferzeit.',
              'Regionale Verteilung: schnellere Kundennähe möglich, aber mehr Bestands- und Koordinationsaufwand.',
            ],
          },
        ],
      },
      {
        heading: 'Retouren als Rückfluss',
        paragraphs: [
          'Retouren gehören als Rückfluss ebenfalls zur Betrachtung. Rücksendungen müssen angenommen, geprüft, zugeordnet und je nach Zustand wieder eingelagert, aufgearbeitet, entsorgt oder mit dem Kunden abgerechnet werden.',
          'Sie sind nicht nur ein Transportthema. Ursachen wie falsche Kommissionierung, beschädigte Verpackung, falsche Produktinformationen oder unklare Liefertermine können bereits im vorherigen Prozess liegen.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Lieferzeit nur als Fahrtzeit zu betrachten. Bereitstellung, Kommissionierung, Verpackung, Übergaben und Zustellung können den Termin ebenso beeinflussen.',
          'Auch ein hoher Serviceanspruch hilft nicht, wenn Artikelbestände, Auftragsdaten oder Lieferzusagen unzuverlässig sind. Kennzahlen und Zusagen sollten sich auf dieselben klaren Definitionen beziehen.',
          'Direktbelieferung oder regionale Lager sollten nicht allein nach Transportkosten entschieden werden. Bestandskosten, Liefergebiet, Mengen, Kundenanforderung und Risiko gehören in die Abwägung.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Distributionslogistik organisiert den Warenfluss vom Unternehmen zum Kunden.',
    'Sie umfasst Auftragsbereitstellung, Kommissionierung, Verpackung, Versand, Transport und Rückmeldungen.',
    'Direktbelieferung und Verteilstrukturen unterscheiden sich vor allem bei Beständen, Übergaben, Kosten und möglicher Lieferzeit.',
    'Liefertermintreue, Vollständigkeit, Qualität und Servicegrad machen die Leistung eines Lieferprozesses sichtbar.',
    'Kosten, Geschwindigkeit und Verfügbarkeit stehen häufig in einem Zielkonflikt.',
    'Retouren sind ein Rückfluss, dessen Ursachen oft schon in Bereitstellung, Kommissionierung oder Verpackung liegen.',
  ],
  commonMistakes: [
    'Lieferzeit nur als Fahrzeit und nicht als gesamten Prozess bis zur Zustellung betrachten',
    'Artikel, Mengen, Adressen oder Kennzeichnungen vor dem Versand nicht eindeutig prüfen',
    'Direktbelieferung oder Lagerstandorte allein nach Transportkosten bewerten',
    'Liefertermintreue ohne Vollständigkeit und Qualität als vollständige Lieferleistung behandeln',
    'Retouren nur als Rücktransport ansehen und Ursachen im vorherigen Prozess nicht prüfen',
  ],
  faqs: [
    {
      question: 'Was ist Distributionslogistik?',
      answer: 'Sie organisiert, wie Waren vom Unternehmen zum Kunden bereitgestellt, versendet, transportiert und mit den nötigen Informationen übergeben werden.',
    },
    {
      question: 'Was ist Kommissionierung?',
      answer: 'Kommissionierung ist das Zusammenstellen der Artikel und Mengen, die zu einem Kundenauftrag gehören.',
    },
    {
      question: 'Was ist der Unterschied zwischen Direktbelieferung und Verteilstruktur?',
      answer: 'Direktbelieferung führt Ware unmittelbar zum Kunden. Eine Verteilstruktur nutzt zusätzliche Lager oder Umschlagpunkte und kann Kundennähe verbessern, erhöht aber meist den Bestands- und Koordinationsaufwand.',
    },
    {
      question: 'Warum sind Liefertermintreue und Vollständigkeit beide wichtig?',
      answer: 'Ein Auftrag ist aus Kundensicht nicht vollständig erfüllt, wenn er zwar pünktlich, aber mit Fehlmengen oder falscher Ware ankommt.',
    },
    {
      question: 'Gehören Retouren zur Distributionslogistik?',
      answer: 'Ja. Sie sind ein Rückfluss, der angenommen, geprüft und je nach Zustand weiterbearbeitet werden muss.',
    },
  ],
  related: [
    'liefertermintreue-servicegrad',
    'grundlagen-logistik',
    'cross-docking',
    'supply-chain-risiken-resilienz',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default distributionslogistik;
