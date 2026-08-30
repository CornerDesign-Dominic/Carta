import { defaultDisclaimer } from '../shared.js';

const einkommensteuer = {
  slug: 'einkommensteuer',
  category: 'Steuern',
  title: 'Einkommensteuer',
  description: 'Einkommensteuer einfach erklärt: Einkünfte, zu versteuerndes Einkommen, Steuertarif, Vorauszahlungen und Lohnsteuer.',
  seo: {
    title: 'Einkommensteuer einfach erklärt | Belege24',
    description: 'Erfahre, wer Einkommensteuer zahlt, wie das zu versteuernde Einkommen entsteht und was bei Selbstständigen, Lohnsteuer und Vorauszahlungen wichtig ist.',
    canonicalPath: '/wissen/einkommensteuer',
  },
  article: {
    intro: 'Die Einkommensteuer ist eine Steuer auf das Einkommen natürlicher Personen. Sie betrifft Beschäftigte, Selbstständige, Einzelunternehmer und weitere Personen mit einkommensteuerpflichtigen Einkünften – die konkrete Steuerpflicht hängt jedoch immer vom Einzelfall ab.',
    sections: [
      {
        heading: 'Was ist Einkommensteuer?',
        paragraphs: [
          'Die Einkommensteuer ist eine Jahressteuer. Sie wird grundsätzlich für die Einkünfte eines Kalenderjahres ermittelt und nach Ablauf des Jahres festgesetzt oder über Steuerabzugsverfahren erhoben.',
          'Sie betrifft natürliche Personen. Unternehmen in der Rechtsform einer Kapitalgesellschaft unterliegen dagegen grundsätzlich der Körperschaftsteuer; bei gewerblichen Tätigkeiten kann zusätzlich Gewerbesteuer relevant sein.',
        ],
      },
      {
        heading: 'Welche Einkünfte können einkommensteuerpflichtig sein?',
        paragraphs: [
          'Das Einkommensteuergesetz unterscheidet sieben Einkunftsarten. Ob Einkünfte tatsächlich steuerpflichtig sind und wie sie ermittelt werden, kann von weiteren gesetzlichen Voraussetzungen abhängen.',
        ],
        list: [
          'Einkünfte aus Land- und Forstwirtschaft',
          'Einkünfte aus Gewerbebetrieb',
          'Einkünfte aus selbständiger Arbeit',
          'Einkünfte aus nichtselbständiger Arbeit',
          'Einkünfte aus Kapitalvermögen',
          'Einkünfte aus Vermietung und Verpachtung',
          'sonstige Einkünfte im Sinne des Einkommensteuergesetzes',
        ],
      },
      {
        heading: 'Einnahmen, Einkünfte und zu versteuerndes Einkommen',
        paragraphs: [
          'Einnahmen sind zunächst die Geld- oder Sachzuflüsse aus einer Tätigkeit. Sie sind nicht automatisch der Betrag, auf den Einkommensteuer berechnet wird.',
          'Bei Einkünften aus Gewerbebetrieb und selbständiger Arbeit ist für die Einkommensteuer grundsätzlich der Gewinn maßgeblich. Bei vielen anderen Einkunftsarten werden die Einnahmen um Werbungskosten vermindert. Erst über weitere gesetzlich vorgesehene Schritte entsteht daraus das Einkommen und anschließend das zu versteuernde Einkommen.',
          [
            'Das ',
            { type: 'glossary', id: 'zu-versteuerndes-einkommen', text: 'zu versteuernde Einkommen' },
            ' ist vereinfacht die Bemessungsgrundlage für die tarifliche Einkommensteuer. Es unterscheidet sich daher häufig sowohl von den Einnahmen als auch vom Gewinn oder Bruttolohn.',
          ],
        ],
      },
      {
        heading: 'Wie wird die Einkommensteuer grundsätzlich berechnet?',
        paragraphs: [
          'Aus den einzelnen Einkunftsarten werden zunächst die Einkünfte ermittelt. Nach gesetzlich vorgesehenen Abzügen kann sich daraus das zu versteuernde Einkommen ergeben. Darauf wird der Einkommensteuertarif angewendet; Anrechnungen und weitere Besonderheiten können die spätere Festsetzung beeinflussen.',
          [
            'Der Einkommensteuertarif ist grundsätzlich progressiv: Mit steigendem zu versteuernden Einkommen kann ein höherer Teil des Einkommens mit einem höheren Steuersatz belastet werden. Der ',
            { type: 'glossary', id: 'grundfreibetrag', text: 'Grundfreibetrag' },
            ' sorgt im Tarif dafür, dass bis zu einer gesetzlich festgelegten Grenze keine tarifliche Einkommensteuer anfällt. Die konkrete Höhe und Tarifgrenzen können sich ändern.',
          ],
        ],
      },
      {
        heading: 'Betriebsausgaben und Werbungskosten',
        paragraphs: [
          [
            'Bei betrieblichen Einkünften mindern ',
            { type: 'glossary', id: 'betriebsausgabe', text: 'Betriebsausgaben' },
            ' grundsätzlich den Gewinn, wenn sie durch den Betrieb veranlasst sind und keine gesetzliche Einschränkung greift.',
          ],
          [
            'Bei anderen Einkunftsarten, zum Beispiel Arbeitslohn, können ',
            { type: 'glossary', id: 'werbungskosten', text: 'Werbungskosten' },
            ' relevant sein. Das sind Aufwendungen zur Erwerbung, Sicherung und Erhaltung von Einnahmen. Ob und in welchem Umfang ein konkreter Aufwand abziehbar ist, richtet sich nach den gesetzlichen Voraussetzungen.',
          ],
        ],
      },
      {
        heading: 'Einkommensteuer bei Selbstständigen und Einzelunternehmern',
        paragraphs: [
          'Selbstständige und Einzelunternehmer versteuern nicht den gesamten Umsatz, sondern grundsätzlich den Gewinn aus ihrer Tätigkeit. Dieser ergibt sich vereinfacht aus Betriebseinnahmen abzüglich Betriebsausgaben; je nach Fall erfolgt die Gewinnermittlung durch Einnahmenüberschussrechnung oder Bilanz.',
          'Für gewerbliche Einzelunternehmen kann neben der Einkommensteuer auch Gewerbesteuer anfallen. Die Umsatzsteuer ist davon getrennt: Sie knüpft grundsätzlich an Umsätze an und wird nicht auf den Gewinn berechnet.',
        ],
      },
      {
        heading: 'Was sind Einkommensteuer-Vorauszahlungen?',
        paragraphs: [
          [
            'Das Finanzamt kann ',
            { type: 'glossary', id: 'einkommensteuer-vorauszahlung', text: 'Einkommensteuer-Vorauszahlungen' },
            ' für das laufende Jahr festsetzen. Sie dienen dazu, die voraussichtliche Steuer nicht erst nach der Steuererklärung vollständig zu zahlen. Vorauszahlungen sind gesetzlich grundsätzlich zu vierteljährlichen Terminen vorgesehen und werden später auf die festgesetzte Einkommensteuer angerechnet.',
          ],
          'Wenn sich Gewinn oder Einkünfte deutlich verändern, kann eine Anpassung der Vorauszahlungen in Betracht kommen. Kläre die passende Vorgehensweise bei Unsicherheit mit dem Finanzamt oder fachlicher Beratung.',
        ],
      },
      {
        heading: 'Unterschied zu Lohnsteuer, Körperschaftsteuer und Gewerbesteuer',
        paragraphs: [
          'Lohnsteuer ist keine eigene Steuerart, sondern eine besondere Erhebungsform der Einkommensteuer bei Arbeitslohn. Der Arbeitgeber behält sie grundsätzlich ein und führt sie ab.',
          'Körperschaftsteuer betrifft grundsätzlich das Einkommen von Kapitalgesellschaften und anderen juristischen Personen. Gewerbesteuer knüpft an den Gewerbeertrag eines Gewerbebetriebs an. Bei einem gewerblichen Einzelunternehmen können Einkommensteuer und Gewerbesteuer deshalb nebeneinander relevant sein.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Setze Umsatz, Einnahmen, Gewinn und zu versteuerndes Einkommen nicht gleich. Bewahre Unterlagen zu betrieblichen oder beruflichen Aufwendungen nachvollziehbar auf und plane Vorauszahlungen frühzeitig in deiner Liquidität ein.',
          'Der persönliche Steuersatz lässt sich nicht allein aus dem Umsatz oder einer einzelnen Rechnung ableiten. Bei mehreren Einkunftsarten, Sonderfällen oder Unsicherheit zu abziehbaren Kosten ist eine individuelle Prüfung wichtig.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Einkommensteuer betrifft grundsätzlich die Einkünfte natürlicher Personen',
    'Das Einkommensteuergesetz unterscheidet sieben Einkunftsarten',
    'Einnahmen, Einkünfte, Gewinn und zu versteuerndes Einkommen sind unterschiedliche Größen',
    'Der Einkommensteuertarif ist grundsätzlich progressiv',
    'Der Grundfreibetrag ist Teil des Einkommensteuertarifs und kann sich ändern',
    'Selbstständige und Einzelunternehmer versteuern grundsätzlich ihren Gewinn, nicht den Umsatz',
    'Lohnsteuer ist eine besondere Erhebungsform der Einkommensteuer',
  ],
  commonMistakes: [
    'Umsatz, Einnahmen, Gewinn und zu versteuerndes Einkommen verwechseln',
    'Betriebsausgaben oder Werbungskosten ohne Prüfung als vollständig abziehbar behandeln',
    'Vorauszahlungen nicht in der Liquiditätsplanung berücksichtigen',
    'Lohnsteuer als zusätzliche eigene Steuer neben der Einkommensteuer verstehen',
    'Einkommensteuer und Umsatzsteuer gleichsetzen',
    'den persönlichen Steuersatz nur aus einer einzelnen Einnahme ableiten',
  ],
  faqs: [
    {
      question: 'Was ist Einkommensteuer einfach erklärt?',
      answer: 'Einkommensteuer ist eine Steuer auf die Einkünfte natürlicher Personen. Wie viel tatsächlich festgesetzt wird, hängt von den Einkünften, Abzügen und weiteren gesetzlichen Regeln ab.',
    },
    {
      question: 'Wer zahlt Einkommensteuer?',
      answer: 'Sie kann Beschäftigte, Selbstständige, Einzelunternehmer und weitere natürliche Personen mit einkommensteuerpflichtigen Einkünften betreffen. Die konkrete Steuerpflicht hängt vom Einzelfall ab.',
    },
    {
      question: 'Was ist der Unterschied zwischen Einnahmen und zu versteuerndem Einkommen?',
      answer: 'Einnahmen sind Zuflüsse aus einer Tätigkeit. Das zu versteuernde Einkommen entsteht erst nach den gesetzlich vorgesehenen Schritten zur Ermittlung der Einkünfte und Abzüge und ist Grundlage für den Tarif.',
    },
    {
      question: 'Was bedeutet progressiver Einkommensteuertarif?',
      answer: 'Mit steigendem zu versteuernden Einkommen kann ein höherer Teil des Einkommens einem höheren Steuersatz unterliegen. Das bedeutet nicht, dass der höhere Satz rückwirkend für das gesamte Einkommen gilt.',
    },
    {
      question: 'Was ist der Grundfreibetrag?',
      answer: 'Der Grundfreibetrag ist die im Einkommensteuertarif festgelegte Grenze, bis zu der keine tarifliche Einkommensteuer anfällt. Seine Höhe kann sich gesetzlich ändern.',
    },
    {
      question: 'Zahlen Selbstständige Einkommensteuer auf den Umsatz?',
      answer: 'Grundsätzlich ist nicht der Umsatz, sondern der Gewinn aus der Tätigkeit maßgeblich. Welche Einnahmen und Ausgaben dabei steuerlich zu berücksichtigen sind, hängt vom jeweiligen Fall ab.',
    },
    {
      question: 'Was sind Einkommensteuer-Vorauszahlungen?',
      answer: 'Das Finanzamt kann Vorauszahlungen auf die voraussichtliche Einkommensteuer des laufenden Jahres festsetzen. Sie werden später auf die festgesetzte Steuer angerechnet.',
    },
    {
      question: 'Ist Lohnsteuer etwas anderes als Einkommensteuer?',
      answer: 'Lohnsteuer ist eine besondere Erhebungsform der Einkommensteuer bei Arbeitslohn. Sie wird grundsätzlich vom Arbeitgeber einbehalten und abgeführt.',
    },
  ],
  related: [
    'steuern',
    'umsatzsteuer',
  ],
  sources: [
    {
      label: '§ 2 EStG – Umfang der Besteuerung und Begriffsbestimmungen',
      url: 'https://www.gesetze-im-internet.de/estg/__2.html',
    },
    {
      label: '§ 4 EStG – Gewinnbegriff und Betriebsausgaben',
      url: 'https://www.gesetze-im-internet.de/estg/__4.html',
    },
    {
      label: '§ 9 EStG – Werbungskosten',
      url: 'https://www.gesetze-im-internet.de/estg/__9.html',
    },
    {
      label: '§ 32a EStG – Einkommensteuertarif',
      url: 'https://www.gesetze-im-internet.de/estg/__32a.html',
    },
    {
      label: '§ 37 EStG – Einkommensteuer-Vorauszahlung',
      url: 'https://www.gesetze-im-internet.de/estg/__37.html',
    },
    {
      label: 'Bundesfinanzministerium – Lohnsteuer',
      url: 'https://www.bundesfinanzministerium.de/Content/DE/Glossareintraege/L/lohnsteuer.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default einkommensteuer;
