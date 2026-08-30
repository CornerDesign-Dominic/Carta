import { defaultDisclaimer } from '../shared.js';

const geschaeftsvorfaelle = {
  slug: 'geschaeftsvorfaelle',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Geschäftsvorfälle',
  description: 'Geschäftsvorfälle einfach erklärt: Was buchhalterisch relevant ist, welche Konten betroffen sind und wie sich Vorgänge auf Vermögen, Schulden, Aufwand und Ertrag auswirken.',
  seo: {
    title: 'Geschäftsvorfälle einfach erklärt | Belege24',
    description: 'Erfahre, was ein Geschäftsvorfall ist, wann er buchhalterisch relevant wird und wie Einkäufe, Verkäufe, Zahlungen und Darlehen die Buchführung verändern.',
    canonicalPath: '/wissen/geschaeftsvorfaelle',
  },
  article: {
    intro: 'Ein Geschäftsvorfall ist ein Ereignis, das die wirtschaftliche Lage eines Unternehmens verändert. Dazu gehören zum Beispiel ein Einkauf, ein Verkauf oder eine Zahlung. Die Buchführung hält diese Veränderungen nachvollziehbar fest.',
    sections: [
      {
        heading: 'Was ist ein Geschäftsvorfall?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'geschaeftsvorfall', text: 'Geschäftsvorfall' },
            ' liegt vor, wenn sich mindestens eine wirtschaftlich relevante Größe des Unternehmens verändert: Vermögen, Schulden, Eigenkapital, ',
            { type: 'glossary', id: 'aufwand', text: 'Aufwand' },
            ' oder ',
            { type: 'glossary', id: 'ertrag', text: 'Ertrag' },
            '.',
          ],
          'Buchhalterisch relevant wird ein Vorgang, wenn er dem Unternehmen zugeordnet werden kann und seine wirtschaftliche Wirkung feststeht oder nachvollziehbar dokumentiert werden kann. Eine private Ausgabe der Inhaberin oder des Inhabers ist deshalb nicht automatisch ein betrieblicher Aufwand; sie kann aber als Privatentnahme die Buchführung betreffen.',
          'Jeder erfasste Geschäftsvorfall verändert die Buchführung, weil mindestens ein Konto einen neuen Stand erhält. In der doppelten Buchführung sind in der Regel mindestens zwei Konten beteiligt. So bleibt erkennbar, woher eine Veränderung kommt und wodurch sie ausgeglichen wird.',
        ],
      },
      {
        heading: 'Externe und interne Geschäftsvorfälle',
        subsections: [
          {
            heading: 'Externe Geschäftsvorfälle',
            paragraphs: [
              'Externe Geschäftsvorfälle entstehen im Kontakt mit Personen oder Unternehmen außerhalb des eigenen Betriebs. Dazu gehören der Einkauf bei einem Lieferanten, der Verkauf an einen Kunden, eine Banküberweisung oder die Aufnahme eines Darlehens.',
              'Sie lassen sich häufig direkt durch Rechnungen, Kontoauszüge, Verträge oder Quittungen belegen.',
            ],
          },
          {
            heading: 'Interne Geschäftsvorfälle',
            paragraphs: [
              'Interne Geschäftsvorfälle spielen sich innerhalb des Unternehmens ab. Ein Beispiel ist die planmäßige Abschreibung einer bereits vorhandenen Maschine: Ihr Wert wird über die Nutzungsdauer verteilt, ohne dass zu diesem Zeitpunkt erneut Geld an eine andere Person fließt.',
              'Auch interne Vorgänge müssen nachvollziehbar dokumentiert und den passenden Konten zugeordnet werden.',
            ],
          },
        ],
      },
      {
        heading: 'Erfolgswirksam oder erfolgsneutral?',
        paragraphs: [
          [
            'Ein Geschäftsvorfall ist erfolgswirksam, wenn er ',
            { type: 'glossary', id: 'aufwand', text: 'Aufwand' },
            ' oder ',
            { type: 'glossary', id: 'ertrag', text: 'Ertrag' },
            ' auslöst und damit Gewinn oder Verlust verändert. Ein Warenverkauf führt zum Beispiel zu Ertrag; die laufende Miete ist Aufwand.',
          ],
          'Erfolgsneutral ist ein Vorgang, wenn sich nur Bestände verändern, ohne dass in diesem Moment Aufwand oder Ertrag entsteht. Dazu zählen etwa die Aufnahme eines Darlehens, die Bezahlung einer offenen Kundenrechnung oder der Kauf einer Maschine gegen Bankzahlung.',
          'Erfolgsneutral bedeutet nicht bedeutungslos: Solche Vorgänge können Liquidität, Schulden oder die Zusammensetzung des Vermögens deutlich verändern.',
        ],
      },
      {
        heading: 'Belege, Konten und Soll und Haben',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'belegprinzip', text: 'Belegprinzip' },
            ' sorgt dafür, dass Buchungen auf nachvollziehbaren Unterlagen beruhen. Eine Rechnung, Quittung, ein Kontoauszug oder – wenn kein Fremdbeleg verfügbar ist – ein Eigenbeleg dokumentiert, was passiert ist.',
          ],
          [
            'Für die Erfassung werden passende ',
            { type: 'glossary', id: 'konto', text: 'Konten' },
            ' verwendet. Je nach Vorgang können zum Beispiel Bank, Kasse, Warenbestand, Maschine, ',
            { type: 'glossary', id: 'forderung', text: 'Forderung' },
            ', ',
            { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeit' },
            ', Aufwand oder Ertrag betroffen sein.',
          ],
          [
            'In der doppelten ',
            { type: 'glossary', id: 'buchfuehrung', text: 'Buchführung' },
            ' wird die Veränderung auf den Seiten ',
            { type: 'glossary', id: 'soll-und-haben', text: 'Soll und Haben' },
            ' festgehalten. Welche Seite angesprochen wird, richtet sich nach der Kontoart und der Veränderung – Soll ist also nicht einfach „plus“ und Haben nicht einfach „minus“.',
          ],
          [
            'Bei offenen Kunden- und Lieferantenrechnungen hilft außerdem die Unterscheidung zwischen ',
            { type: 'glossary', id: 'debitoren-kreditoren', text: 'Debitoren und Kreditoren' },
            ': Sie trennt offene Kundenforderungen von eigenen Verbindlichkeiten gegenüber Lieferanten.',
          ],
        ],
      },
      {
        heading: 'Beispiele: Was verändert sich?',
        paragraphs: [
          'Die folgenden Beispiele zeigen jeweils die wirtschaftliche Wirkung. Die konkrete Kontierung, insbesondere bei Umsatzsteuer, Kostenarten oder Rechtsform, kann im Einzelfall abweichen.',
        ],
        exampleCards: [
          {
            title: 'Wareneinkauf auf Rechnung',
            paragraphs: ['Ein Handelsunternehmen kauft Ware für 1.000 Euro und bezahlt später. Der Einkauf ist ein externer Geschäftsvorfall.'],
            effects: [
              'Vermögen: Der Warenbestand nimmt zu.',
              ['Schulden: Eine ', { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeit' }, ' gegenüber dem Lieferanten entsteht.'],
              'Erfolg: Der bloße Zugang von Handelsware ist zunächst erfolgsneutral; der Aufwand entsteht regelmäßig erst beim Verbrauch oder Verkauf der Ware.',
            ],
          },
          {
            title: 'Verkauf auf Rechnung',
            paragraphs: ['Ein Unternehmen verkauft eine Leistung für 1.500 Euro mit Zahlungsziel. Die Kundin oder der Kunde zahlt noch nicht sofort.'],
            effects: [
              ['Vermögen: Eine ', { type: 'glossary', id: 'forderung', text: 'Forderung' }, ' gegen den Kunden entsteht.'],
              ['Erfolg: Es entsteht ', { type: 'glossary', id: 'ertrag', text: 'Ertrag' }, ', der den Gewinn erhöht.'],
            ],
          },
          {
            title: 'Zahlung einer Kundenrechnung',
            paragraphs: ['Der Kunde überweist die zuvor offene Rechnung auf das Bankkonto des Unternehmens.'],
            effects: [
              'Vermögen: Das Bankguthaben steigt.',
              ['Vermögen: Die ', { type: 'glossary', id: 'forderung', text: 'Forderung' }, ' sinkt in gleicher Höhe.'],
              'Erfolg: Die Zahlung selbst ist erfolgsneutral, weil der Ertrag bereits beim Verkauf erfasst wurde.',
            ],
          },
          {
            title: 'Aufnahme eines Darlehens',
            paragraphs: ['Eine Bank zahlt dem Unternehmen ein Darlehen von 20.000 Euro auf das Geschäftskonto aus.'],
            effects: [
              'Vermögen: Das Bankguthaben steigt.',
              'Schulden: Die Darlehensverbindlichkeit steigt.',
              'Erfolg: Die Auszahlung ist erfolgsneutral; Zinsen können später Aufwand sein.',
            ],
          },
          {
            title: 'Kauf einer Maschine per Banküberweisung',
            paragraphs: ['Das Unternehmen kauft eine Maschine und bezahlt sie sofort vom Geschäftskonto.'],
            effects: [
              'Vermögen: Die Maschine als Anlagevermögen nimmt zu.',
              'Vermögen: Das Bankguthaben nimmt ab.',
              'Erfolg: Der Kauf ist zunächst erfolgsneutral. Ein Aufwand kann später durch die Abschreibung entstehen.',
            ],
          },
          {
            title: 'Barentnahme durch den Inhaber',
            paragraphs: ['In einem Einzelunternehmen entnimmt der Inhaber Geld aus der Geschäftskasse für private Zwecke.'],
            effects: [
              'Vermögen: Der Kassenbestand sinkt.',
              'Eigenkapital: Die Privatentnahme mindert das Eigenkapital.',
              'Erfolg: Eine Privatentnahme ist kein betrieblicher Aufwand und verändert den Gewinn nicht unmittelbar.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Nicht jede Zahlung ist Aufwand und nicht jede Einzahlung ist Ertrag. Prüfe deshalb immer, ob ein Vorgang nur Vermögen oder Schulden umschichtet oder den Erfolg tatsächlich verändert.',
          'Ordne Belege zeitnah zu und halte den Anlass des Vorgangs verständlich fest. Bei unklaren oder gemischten privaten und betrieblichen Vorgängen ist eine fachliche Einordnung sinnvoll.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Geschäftsvorfälle verändern Vermögen, Schulden, Eigenkapital, Aufwand oder Ertrag',
    'externe Vorgänge betreffen Dritte; interne Vorgänge finden innerhalb des Unternehmens statt',
    'erfolgswirksame Vorgänge verändern Gewinn oder Verlust, erfolgsneutrale Vorgänge Bestände',
    'Belege machen den Anlass und die Wirkung einer Buchung nachvollziehbar',
    'in der doppelten Buchführung werden Geschäftsvorfälle über mindestens zwei Konten erfasst',
  ],
  commonMistakes: [
    'jede Auszahlung automatisch als Aufwand behandeln',
    'jede Einzahlung automatisch als Ertrag behandeln',
    'Forderungen und Verbindlichkeiten mit bereits erfolgten Zahlungen verwechseln',
    'private Entnahmen als betriebliche Ausgabe erfassen',
    'Belege nicht zeitnah oder nicht nachvollziehbar zuordnen',
    'Soll und Haben pauschal mit Plus und Minus gleichsetzen',
  ],
  faqs: [
    {
      question: 'Was ist ein Geschäftsvorfall einfach erklärt?',
      answer: 'Ein Geschäftsvorfall ist ein Ereignis, das die wirtschaftliche Lage eines Unternehmens verändert, zum Beispiel ein Einkauf, Verkauf, eine Zahlung oder ein Darlehen.',
    },
    {
      question: 'Wann ist ein Vorgang buchhalterisch relevant?',
      answer: 'Wenn er dem Unternehmen zugeordnet werden kann und Vermögen, Schulden, Eigenkapital, Aufwand oder Ertrag verändert. Seine Grundlage sollte nachvollziehbar dokumentiert sein.',
    },
    {
      question: 'Was ist der Unterschied zwischen erfolgswirksam und erfolgsneutral?',
      answer: 'Erfolgswirksame Vorgänge erzeugen Aufwand oder Ertrag und verändern damit Gewinn oder Verlust. Erfolgsneutrale Vorgänge verändern nur Bestände, etwa Bank und Forderung oder Bank und Darlehen.',
    },
    {
      question: 'Warum sind bei einem Geschäftsvorfall mehrere Konten betroffen?',
      answer: 'Ein Vorgang hat mindestens zwei Seiten: Beim Bezahlen einer Rechnung steigt zum Beispiel das Bankguthaben und die Forderung sinkt. Die doppelte Buchführung erfasst diese Zusammenhänge auf den beteiligten Konten.',
    },
    {
      question: 'Ist eine Privatentnahme ein Aufwand?',
      answer: 'Nein. Bei einem Einzelunternehmen mindert eine Privatentnahme zwar Kasse oder Bank und das Eigenkapital, sie ist aber kein betrieblicher Aufwand und verändert den Gewinn nicht unmittelbar.',
    },
    {
      question: 'Welche Belege braucht man für Geschäftsvorfälle?',
      answer: 'Je nach Vorgang sind zum Beispiel Rechnungen, Quittungen, Kontoauszüge, Verträge oder Eigenbelege hilfreich. Sie sollten Anlass, Betrag, Zeitpunkt und Beteiligte nachvollziehbar machen.',
    },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'belege',
    'eigenbeleg',
    'rechnung',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default geschaeftsvorfaelle;
