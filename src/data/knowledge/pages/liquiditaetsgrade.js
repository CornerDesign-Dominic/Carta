import { defaultDisclaimer } from '../shared.js';

const liquiditaetsgrade = {
  slug: 'liquiditaetsgrade',
  category: 'Kennzahlen & Unternehmensanalyse',
  title: 'Liquiditätsgrade',
  description: 'Liquidität 1., 2. und 3. Grades gemeinsam erklärt: kurzfristige Deckung berechnen, Vermögenswerte unterscheiden und Grenzen einordnen.',
  seo: {
    title: 'Liquiditätsgrade 1, 2 und 3 berechnen | Belege24',
    description: 'Erfahre, wie sich Liquidität 1., 2. und 3. Grades unterscheiden und welchen Einfluss liquide Mittel, Forderungen und Vorräte haben.',
    canonicalPath: '/wissen/liquiditaetsgrade',
  },
  article: {
    intro: 'Liquiditätsgrade setzen unterschiedlich schnell verfügbare Teile des Umlaufvermögens ins Verhältnis zu kurzfristigen Verbindlichkeiten. Die drei Stufen geben Hinweise auf die kurzfristige Zahlungsfähigkeit, ersetzen aber keine Planung konkreter Ein- und Auszahlungen.',
    sections: [
      {
        heading: 'Was sind Liquiditätsgrade?',
        paragraphs: [
          [
            { type: 'glossary', id: 'liquiditaetsgrade', text: 'Liquiditätsgrade' },
            ' sind bilanzielle Verhältniskennzahlen. Sie untersuchen, in welchem Umfang kurzfristige Verpflichtungen rechnerisch durch ausgewählte kurzfristige Vermögenswerte gedeckt sind.',
          ],
          'Es gibt drei Stufen, weil Vermögenswerte unterschiedlich nah an verfügbaren Zahlungsmitteln liegen. Grad 1 berücksichtigt nur liquide Mittel, Grad 2 zusätzlich kurzfristige Forderungen und Grad 3 grundsätzlich das gesamte Umlaufvermögen einschließlich Vorräten.',
          'Alle Werte stammen typischerweise von einem Stichtag. Ob Zahlungen tatsächlich rechtzeitig geleistet werden können, hängt zusätzlich von Fälligkeiten, Zahlungseingängen, Finanzierungslinien und der Qualität der Vermögenswerte ab.',
        ],
      },
      {
        heading: 'Liquidität 1. Grades',
        paragraphs: [
          [
            'Die Liquidität 1. Grades setzt ',
            { type: 'glossary', id: 'liquide-mittel', text: 'liquide Mittel' },
            ' wie Kasse und Bankguthaben ins Verhältnis zu kurzfristigen Verbindlichkeiten. Sie ist die strengste Stufe, weil Forderungen und Vorräte noch nicht einbezogen werden.',
          ],
          'Die Kennzahl zeigt eine sehr enge Stichtagsdeckung. Sie sagt nicht, welche Kundenzahlungen kurz nach dem Stichtag eingehen oder welche Verpflichtungen erst später fällig werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Liquidität 1. Grades',
            formula: 'Liquide Mittel / kurzfristige Verbindlichkeiten × 100',
            description: 'Zähler und Nenner müssen aus derselben Abgrenzung und vom selben Stichtag stammen.',
          },
        ],
        exampleCards: [
          {
            title: 'Deckung nur mit liquiden Mitteln',
            paragraphs: [
              'Ein Unternehmen hat 20.000 Euro liquide Mittel und 100.000 Euro kurzfristige Verbindlichkeiten.',
              'Liquidität 1. Grades = 20.000 Euro / 100.000 Euro × 100 = 20 Prozent.',
              'Zum Stichtag entsprechen die liquiden Mittel rechnerisch 20 Prozent der kurzfristigen Verbindlichkeiten. Für eine Bewertung müssen insbesondere deren Fälligkeiten und erwartete Einzahlungen betrachtet werden.',
            ],
          },
        ],
      },
      {
        heading: 'Liquidität 2. Grades',
        paragraphs: [
          [
            'Die Liquidität 2. Grades ergänzt die liquiden Mittel um ',
            { type: 'glossary', id: 'kurzfristige-forderungen', text: 'kurzfristige Forderungen' },
            '. Sie berücksichtigt damit Beträge, die voraussichtlich zeitnah von Kunden oder anderen Schuldnern eingehen sollen.',
          ],
          'Forderungen sind noch kein verfügbares Geld. Zahlungsverspätungen, Ausfälle oder strittige Beträge können dazu führen, dass die tatsächliche Deckung schwächer ist als der rechnerische Wert.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Liquidität 2. Grades',
            formula: '(Liquide Mittel + kurzfristige Forderungen) / kurzfristige Verbindlichkeiten × 100',
            description: 'Kurzfristige Forderungen sollten nach Fälligkeit und Werthaltigkeit sachgerecht abgegrenzt sein.',
          },
        ],
        exampleCards: [
          {
            title: 'Forderungen zusätzlich einbeziehen',
            paragraphs: [
              'Zu den 20.000 Euro liquiden Mitteln kommen 80.000 Euro kurzfristige Forderungen. Die kurzfristigen Verbindlichkeiten betragen weiterhin 100.000 Euro.',
              'Liquidität 2. Grades = (20.000 Euro + 80.000 Euro) / 100.000 Euro × 100 = 100 Prozent.',
              'Liquide Mittel und kurzfristige Forderungen entsprechen zusammen rechnerisch den kurzfristigen Verbindlichkeiten. Ob Forderungen vor den Verpflichtungen bezahlt werden, bleibt gesondert zu prüfen.',
            ],
          },
        ],
      },
      {
        heading: 'Liquidität 3. Grades',
        paragraphs: [
          [
            'Die Liquidität 3. Grades setzt das gesamte ',
            { type: 'glossary', id: 'umlaufvermoegen', text: 'Umlaufvermögen' },
            ' ins Verhältnis zu den kurzfristigen Verbindlichkeiten. Neben liquiden Mitteln und Forderungen gehören damit grundsätzlich auch Vorräte und weitere kurzfristige Vermögenswerte in den Zähler.',
          ],
          'Vorräte müssen häufig erst verkauft und anschließend bezahlt werden, bevor Zahlungsmittel entstehen. Veraltete, beschädigte oder schwer verkäufliche Bestände können den bilanziellen Wert erhöhen, ohne kurzfristig zur Zahlungsfähigkeit beizutragen.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Liquidität 3. Grades',
            formula: 'Umlaufvermögen / kurzfristige Verbindlichkeiten × 100',
            description: 'Die Aussage hängt besonders von Zusammensetzung, Werthaltigkeit und Umschlag des Umlaufvermögens ab.',
          },
        ],
        exampleCards: [
          {
            title: 'Gesamtes Umlaufvermögen betrachten',
            paragraphs: [
              'Das Unternehmen hat 20.000 Euro liquide Mittel, 80.000 Euro kurzfristige Forderungen und 100.000 Euro Vorräte. Das Umlaufvermögen beträgt damit vereinfacht 200.000 Euro; kurzfristige Verbindlichkeiten betragen 100.000 Euro.',
              'Liquidität 3. Grades = 200.000 Euro / 100.000 Euro × 100 = 200 Prozent.',
              'Das Umlaufvermögen ist rechnerisch doppelt so hoch wie die kurzfristigen Verbindlichkeiten. Die tatsächliche Zahlungsnähe hängt aber stark von Forderungseingängen und Verkäuflichkeit der Vorräte ab.',
            ],
          },
        ],
      },
      {
        heading: 'Die drei Liquiditätsgrade direkt vergleichen',
        paragraphs: [
          'Die Stufen bauen aufeinander auf. Mit jeder Stufe kommen Vermögenswerte hinzu, die typischerweise mehr Zeit oder weitere Geschäftsschritte benötigen, bevor daraus verfügbare Zahlungsmittel werden.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Berücksichtigte Vermögenswerte',
            formula: 'Grad 1: liquide Mittel | Grad 2: + kurzfristige Forderungen | Grad 3: gesamtes Umlaufvermögen',
            description: 'Grad 1 ist am strengsten, weil er nur unmittelbar verfügbare Mittel berücksichtigt. Grad 3 ist am weitesten gefasst und deshalb besonders von Vorratsqualität und Umschlag abhängig.',
          },
        ],
        list: [
          'Grad 1: unmittelbare Zahlungsmittel im Verhältnis zu kurzfristigen Verbindlichkeiten',
          'Grad 2: zusätzlich kurzfristige Forderungen und damit erwartete zeitnahe Einzahlungen',
          'Grad 3: zusätzlich Vorräte und weitere Bestandteile des Umlaufvermögens',
        ],
      },
      {
        heading: 'Werte richtig interpretieren',
        paragraphs: [
          'Ein höherer Wert zeigt innerhalb derselben Definition grundsätzlich mehr einbezogene Vermögenswerte je Einheit kurzfristiger Verbindlichkeiten. Daraus folgt jedoch kein allgemeingültiger Idealwert. Ein sehr hoher Grad 3 kann beispielsweise durch langsame Forderungen oder überhöhte Vorräte entstehen.',
          'Ein niedriger Wert kann auf eine enge kurzfristige Deckung hinweisen, muss aber mit Zahlungsrhythmus und Geschäftsmodell beurteilt werden. Unternehmen mit schnellen Kundeneinzahlungen, geringen Vorräten und längeren Lieferantenzielen können andere Strukturen aufweisen als Unternehmen mit langen Produktions- und Zahlungszyklen.',
        ],
      },
      {
        heading: 'Forderungsqualität und Vorräte',
        paragraphs: [
          'Für Grad 2 ist entscheidend, ob Forderungen tatsächlich kurzfristig fällig, unstrittig und voraussichtlich einbringlich sind. Überfällige oder ausfallgefährdete Forderungen dürfen nicht unkritisch wie sichere zeitnahe Einzahlungen behandelt werden.',
          'Für Grad 3 sind Art, Alter, Umschlag und Verkäuflichkeit der Vorräte wichtig. Ein hoher Bestand kann Lieferfähigkeit sichern, zugleich aber Kapital binden oder Wertminderungsrisiken enthalten.',
        ],
      },
      {
        heading: 'Zeit- und Branchenvergleich',
        paragraphs: [
          'Ein Zeitvergleich zeigt, wie sich die kurzfristige Deckungsstruktur entwickelt. Veränderungen sollten mit Forderungen, Vorräten, Zahlungsmitteln, kurzfristiger Finanzierung und saisonalen Effekten erklärt werden.',
          'Branchenvergleiche sind nur bei ähnlichen Geschäftsmodellen, Zahlungszielen, Vorratsstrukturen und Bilanzierungsgrundlagen sinnvoll. Allgemeine Richtwerte können die konkrete Fälligkeits- und Zahlungsanalyse nicht ersetzen.',
        ],
      },
      {
        heading: 'Grenzen der Liquiditätsgrade',
        paragraphs: [
          'Liquiditätsgrade sind Stichtagskennzahlen. Sie zeigen nicht, ob eine Verpflichtung morgen fällig wird und eine Forderung erst in mehreren Wochen eingeht. Auch ungenutzte Kreditlinien, saisonale Schwankungen und außerbilanzielle Zahlungsverpflichtungen werden nicht automatisch berücksichtigt.',
          'Für die Steuerung der Zahlungsfähigkeit braucht es deshalb zusätzlich eine Liquiditätsplanung mit konkreten Terminen. Working Capital ergänzt die Analyse als absolute Differenz zwischen Umlaufvermögen und kurzfristigen Verbindlichkeiten.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Liquiditätsgrade messen die rechnerische kurzfristige Deckung in drei Stufen',
    'Grad 1 berücksichtigt nur liquide Mittel und ist damit am strengsten',
    'Grad 2 ergänzt kurzfristige Forderungen',
    'Grad 3 berücksichtigt grundsätzlich das gesamte Umlaufvermögen',
    'Forderungsqualität und Verkäuflichkeit der Vorräte beeinflussen die Aussage',
    'Die Kennzahlen ersetzen keine terminbezogene Liquiditätsplanung',
  ],
  commonMistakes: [
    'Werte aus unterschiedlichen Stichtagen kombinieren',
    'kurzfristige Verbindlichkeiten uneinheitlich abgrenzen',
    'überfällige oder zweifelhafte Forderungen unkritisch in Grad 2 übernehmen',
    'alle Vorräte als kurzfristig und vollständig verwertbar behandeln',
    'Grad 1, 2 und 3 wegen ihrer unterschiedlichen Zähler direkt gleichsetzen',
    'allgemeine Richtwerte als pauschale Idealwerte verwenden',
    'Liquiditätsgrade mit Kontostand oder konkreter Zahlungsplanung verwechseln',
  ],
  faqs: [
    { question: 'Was sind Liquiditätsgrade?', answer: 'Liquiditätsgrade setzen unterschiedlich schnell verfügbare kurzfristige Vermögenswerte ins Verhältnis zu kurzfristigen Verbindlichkeiten.' },
    { question: 'Warum gibt es drei Liquiditätsgrade?', answer: 'Die Stufen unterscheiden, wie nah die einbezogenen Vermögenswerte an verfügbaren Zahlungsmitteln liegen.' },
    { question: 'Welcher Liquiditätsgrad ist am strengsten?', answer: 'Grad 1, weil er nur liquide Mittel und keine Forderungen oder Vorräte berücksichtigt.' },
    { question: 'Ist ein hoher Liquiditätsgrad immer gut?', answer: 'Nein. Hohe Werte können etwa durch langsame Forderungen, überhöhte Vorräte oder unproduktiv gehaltene Mittel entstehen.' },
    { question: 'Ersetzen Liquiditätsgrade eine Liquiditätsplanung?', answer: 'Nein. Die Planung berücksichtigt konkrete Zahlungszeitpunkte; Liquiditätsgrade sind bilanzielle Stichtagskennzahlen.' },
  ],
  related: ['working-capital', 'liquiditaet-controlling', 'anlage-umlaufvermoegen'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default liquiditaetsgrade;
