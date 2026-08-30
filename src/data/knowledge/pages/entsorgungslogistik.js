import { defaultDisclaimer } from '../shared.js';

const entsorgungslogistik = {
  slug: 'entsorgungslogistik',
  category: 'Supply Chain & Logistik',
  title: 'Entsorgungslogistik',
  description: 'Entsorgungslogistik einfach erklärt: Rückläufe, Abfälle, Verpackungen und Altprodukte geordnet zurückführen, sortieren und weiterbehandeln.',
  seo: {
    title: 'Entsorgungslogistik einfach erklärt | Belege24',
    description: 'Erfahre, wie Entsorgungslogistik Rücknahme, Sortierung, Wiederverwendung, Verwertung und Entsorgung wirtschaftlich und ökologisch verbindet.',
    canonicalPath: '/wissen/entsorgungslogistik',
  },
  article: {
    intro: 'Entsorgungslogistik organisiert die Rückführung und Behandlung von Abfällen, Verpackungen, Reststoffen und Altprodukten. Sie schafft nachvollziehbare Wege für Rücknahme, Sortierung, Wiederverwendung, Verwertung oder Entsorgung.',
    sections: [
      {
        heading: 'Was ist Entsorgungslogistik?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'entsorgungslogistik', text: 'Entsorgungslogistik' },
            ' betrachtet Rückflüsse nach Nutzung oder nach einem Prozessschritt. Dazu können Produktionsreste, Verpackungen, Retouren, defekte Teile, Mehrwegbehälter oder ausgediente Produkte gehören.',
          ],
          [
            'Sie ist Teil der ',
            { type: 'glossary', id: 'reverse-logistics', text: 'Reverse Logistics' },
            '. Neben der Rückfahrt geht es um Erfassung, Sammlung, Sortierung, Prüfung, Dokumentation und die passende weitere Behandlung von Material.',
          ],
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Rückflüsse sinnvoll behandeln',
            formula: 'Rücknahme → Sortierung → Wiederverwendung / Verwertung / Entsorgung',
            description: 'Welche Behandlung passt, hängt von Zustand, Material, Sicherheit, wirtschaftlicher Möglichkeit und den jeweils geltenden Anforderungen ab.',
          },
        ],
      },
      {
        heading: 'Rücknahme und Sortierung',
        paragraphs: [
          'Rücknahmesysteme legen fest, wie Rückläufe erfasst, gesammelt und an einen geeigneten Ort gebracht werden. Das kann über Kunden, Handel, eigene Standorte, Dienstleister oder Sammelstellen geschehen.',
          'Eine frühe Sortierung verhindert, dass unterschiedliche Materialien, wiederverwendbare Teile, Verpackungen und Abfälle unnötig vermischt werden. Sie unterstützt sichere Behandlung, nachvollziehbare Mengen und passende weitere Wege.',
          'Mehrwegverpackungen und Ladungsträger wie Behälter, Paletten oder Kisten können in wiederkehrenden Kreisläufen zurückgeführt werden. Dafür sind Kennzeichnung, Rückgabeorte, Zuständigkeiten und Bestandsinformationen wichtig, damit Umläufe nicht verloren gehen.',
        ],
      },
      {
        heading: 'Wiederverwendung, Recycling, Verwertung und Entsorgung',
        paragraphs: [
          'Wiederverwendung nutzt einen Gegenstand nach Prüfung, Reinigung, Reparatur oder Aufbereitung erneut. Recycling gewinnt aus Abfällen Materialien zurück. Sonstige Verwertung kann beispielsweise energetische Verwertung umfassen; Beseitigung ist der verbleibende Weg, wenn andere Optionen nicht passen.',
          'Das Kreislaufwirtschaftsgesetz ordnet Maßnahmen grundsätzlich von Vermeidung über Vorbereitung zur Wiederverwendung, Recycling und sonstige Verwertung bis zur Beseitigung. Welche Maßnahme im konkreten Fall passt, hängt unter anderem von Material, Sicherheit, technischer Möglichkeit, wirtschaftlicher Zumutbarkeit und geltenden Vorgaben ab.',
        ],
      },
      {
        heading: 'Wirtschaftliche und ökologische Ziele',
        paragraphs: [
          'Geordnete Rückflüsse können Kosten für Entsorgung, Transport, Lagerung und Verlust verringern. Wiederverwendbare Ladungsträger oder aufbereitbare Komponenten können Beschaffungsbedarf senken, wenn ihr Zustand und Kreislauf zuverlässig steuerbar sind.',
          'Ökologische Ziele betreffen Ressourcenschonung, Abfallvermeidung, passende Verwertung und unnötige Transporte. Wirtschaftliche und ökologische Ziele stimmen nicht in jeder Situation automatisch überein; die gesamte Prozesskette muss betrachtet werden.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Mehrwegbehälter im Lieferkreislauf',
            paragraphs: [
              'Ein Lieferant liefert Bauteile in wiederverwendbaren Behältern. Nach der Entnahme werden sie gesammelt, geprüft und bei der nächsten Tour zurückgeführt. Beschädigte Behälter werden getrennt erfasst und je nach Zustand repariert, wiederverwendet oder anders behandelt.',
              'Damit der Kreislauf funktioniert, müssen Menge, Standort und Zustand sichtbar sein. Ohne Rückgaberegeln oder Kennzeichnung können Behälter verloren gehen und der erwartete Nutzen des Mehrwegsystems sinkt.',
            ],
            effects: [
              'Chance: Wiederverwendung kann Einwegmaterial und wiederholte Beschaffung verringern.',
              'Voraussetzung: Rückgabe, Sortierung, Zustand und Verantwortlichkeiten zuverlässig steuern.',
            ],
          },
        ],
      },
      {
        heading: 'Rechtliche Anforderungen nur grundsätzlich',
        paragraphs: [
          'Welche Pflichten gelten, hängt unter anderem von Material, Abfalleigenschaft, Menge, Gefährlichkeit, Verpackung, Rolle des Unternehmens und dem betroffenen Land ab. Neben allgemeinen abfallrechtlichen Regeln können produktspezifische Vorgaben etwa für Verpackungen, Batterien oder Elektrogeräte relevant sein.',
          'Unternehmen sollten aktuelle Vorschriften, erforderliche Nachweise, Rücknahmepflichten und die Eignung beauftragter Stellen für ihren konkreten Fall prüfen. Diese Übersicht ersetzt keine rechtliche oder fachliche Beratung und gibt keine Einzelfallanweisung.',
        ],
      },
      {
        heading: 'Schnittstellen und typische Fehler',
        paragraphs: [
          'Rückläufe müssen im Lager häufig getrennt von verkaufs- oder produktionsfähiger Ware gekennzeichnet und behandelt werden. Sonst können beschädigte, ungeprüfte oder falsch zugeordnete Mengen in den normalen Bestand gelangen.',
          [
            'Die ',
            { type: 'link', href: '/wissen/distributionslogistik', text: 'Distributionslogistik' },
            ' ordnet Retouren als Rückfluss im Kundenprozess ein. Die ',
            { type: 'link', href: '/wissen/lagerlogistik', text: 'Lagerlogistik' },
            ' erklärt Einlagerung, Kennzeichnung und Warenausgang als angrenzende Prozesse.',
          ],
          'Typische Fehler sind fehlende Sortierung und Kennzeichnung, unklare Zuständigkeiten für Mehrwegbehälter sowie die ungeprüfte Übernahme rechtlicher Anforderungen aus einem anderen Material, Land oder Prozess.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Entsorgungslogistik steuert Rückflüsse von Abfällen, Verpackungen, Reststoffen und Altprodukten.',
    'Rücknahme, Sortierung und klare Zuständigkeiten schaffen die Grundlage für Wiederverwendung, Verwertung oder Entsorgung.',
    'Mehrwegverpackungen und Ladungsträger brauchen transparente Rückgabe- und Bestandsprozesse.',
    'Wiederverwendung, Recycling, sonstige Verwertung und Beseitigung sind unterschiedliche Behandlungsmöglichkeiten.',
    'Rechtliche Anforderungen richten sich nach Material, Rolle, Menge und aktuellem Regelwerk und müssen im Einzelfall geprüft werden.',
  ],
  commonMistakes: [
    'Rückläufe, beschädigte Ware und Abfälle ohne Sortierung oder Kennzeichnung mit normalem Bestand vermischen',
    'Mehrwegverpackungen oder Ladungsträger ohne Rückgabe-, Standort- und Zuständigkeitsregel einsetzen',
    'Wiederverwendung, Recycling, Verwertung und Entsorgung als gleiche Behandlung behandeln',
    'Vorschriften aus einem anderen Material, Land oder Produktfall ungeprüft übernehmen',
  ],
  faqs: [
    { question: 'Was ist Entsorgungslogistik?', answer: 'Sie organisiert Rücknahme, Sammlung, Sortierung und die weitere Behandlung von Abfällen, Verpackungen, Reststoffen und Altprodukten.' },
    { question: 'Was ist Reverse Logistics?', answer: 'Reverse Logistics bezeichnet die Planung und Steuerung von Rückflüssen, etwa von Retouren, Verpackungen, Altprodukten oder Produktionsresten.' },
    { question: 'Was ist der Unterschied zwischen Wiederverwendung und Recycling?', answer: 'Wiederverwendung nutzt einen Gegenstand nach Prüfung oder Aufbereitung erneut. Recycling gewinnt Materialien für eine weitere Nutzung zurück.' },
    { question: 'Warum sind Mehrwegbehälter ein Logistikthema?', answer: 'Sie müssen zurückgeführt, erfasst, geprüft und erneut bereitgestellt werden. Ohne klare Umlaufsteuerung gehen sie verloren oder fehlen am Bedarfspunkt.' },
    { question: 'Welche rechtlichen Regeln gelten?', answer: 'Das hängt unter anderem von Material, Menge, Gefährlichkeit, Verpackung, Rolle und Land ab. Aktuelle Pflichten sollten für den konkreten Fall geprüft werden.' },
  ],
  related: ['distributionslogistik', 'lagerlogistik', 'grundlagen-logistik', 'supply-chain-risiken-resilienz'],
  sources: [
    { label: '§ 6 KrWG – Abfallhierarchie', url: 'https://www.gesetze-im-internet.de/krwg/__6.html' },
    { label: 'Kreislaufwirtschaftsgesetz (KrWG) – Gesamtausgabe', url: 'https://www.gesetze-im-internet.de/krwg/' },
    { label: 'Zentrale Stelle Verpackungsregister – Rollen & Pflichten', url: 'https://www.verpackungsregister.org/hilfe/rollen-pflichten' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default entsorgungslogistik;
