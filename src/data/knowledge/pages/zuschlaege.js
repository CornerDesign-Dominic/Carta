import { defaultDisclaimer } from '../shared.js';

const zuschlaege = {
  slug: 'zuschlaege',
  category: 'Personal & Lohn',
  title: 'Zuschläge',
  description: 'Lohn- und Gehaltszuschläge einfach erklärt: Nacht-, Sonn- und Feiertagszuschläge, arbeitsrechtlicher Anspruch, Steuerfreiheit und Sozialversicherung.',
  seo: {
    title: 'Zuschläge: Nacht-, Sonn- und Feiertagsarbeit | Belege24',
    description: 'Erfahre, wann Zuschläge entstehen können, was für steuerfreie SFN-Zuschläge gilt und warum Arbeitsrecht, Steuer und Sozialversicherung getrennt zu prüfen sind.',
    canonicalPath: '/wissen/zuschlaege',
  },
  article: {
    intro: 'Zuschläge sind zusätzliche Vergütungsbestandteile für besondere Arbeitszeiten oder Arbeitsbedingungen. Ob ein Anspruch besteht und wie der Zuschlag abgerechnet wird, richtet sich nicht allein nach dem Einsatzzeitpunkt, sondern nach den anwendbaren arbeits-, steuer- und sozialversicherungsrechtlichen Regeln.',
    sections: [
      {
        heading: 'Was sind Lohn- und Gehaltszuschläge?',
        paragraphs: [
          'Zuschläge erhöhen die vereinbarte Grundvergütung. Sie können zum Beispiel für Nachtarbeit, Sonntagsarbeit, Feiertagsarbeit, Mehrarbeit oder besondere Belastungen gezahlt werden.',
          'Die Bezeichnung allein entscheidet nicht über einen Anspruch oder die Abrechnung. Wichtig sind der Anlass, die tatsächlich geleistete Arbeitszeit und die Regelung im Arbeitsvertrag, Tarifvertrag oder in einer Betriebsvereinbarung.',
        ],
      },
      {
        heading: 'Arbeitsrechtlicher Anspruch und Steuerfreiheit unterscheiden',
        paragraphs: [
          'Ein arbeitsrechtlicher Anspruch beantwortet die Frage, ob und in welcher Höhe ein Arbeitgeber einen Zuschlag oder anderen Ausgleich schuldet. Er kann sich aus Gesetz, Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag ergeben.',
          'Die Steuerfreiheit nach § 3b EStG beantwortet dagegen nur, ob ein bereits gezahlter Zuschlag innerhalb der gesetzlichen Grenzen steuerfrei bleiben kann. Sie schafft keinen Anspruch auf einen Zuschlag und macht einen arbeitsrechtlich geschuldeten Zuschlag nicht automatisch steuerfrei.',
        ],
      },
      {
        heading: 'Nacht-, Sonn- und Feiertagsarbeit',
        paragraphs: [
          'Das Arbeitszeitgesetz schützt Sonn- und Feiertage grundsätzlich als arbeitsfreie Zeit. Beschäftigung ist nur in den gesetzlichen Ausnahmen oder auf ihrer Grundlage zulässig; für zulässige Einsätze gelten unter anderem Regeln zum Ersatzruhetag.',
          'Für Nachtarbeitnehmer sieht § 6 Abs. 5 ArbZG, soweit keine tarifvertragliche Ausgleichsregelung besteht, bezahlte freie Tage oder einen angemessenen Zuschlag vor. Das Gesetz legt dabei keinen festen Prozentsatz fest. Für Sonn- oder Feiertagsarbeit enthält das Arbeitszeitgesetz dagegen keinen allgemeinen Zuschlagssatz.',
          'Daher führt weder ein Sonn- noch ein Feiertagseinsatz automatisch zu einem bestimmten Lohnzuschlag. Ob und in welcher Höhe gezahlt wird, muss anhand der jeweils anwendbaren Regelungen geprüft werden.',
        ],
      },
      {
        heading: 'Unterschiedliche Zeitbegriffe beachten',
        paragraphs: [
          'Die Begriffe sind je nach Regelwerk nicht deckungsgleich. Im Arbeitszeitgesetz liegt die Nachtzeit grundsätzlich zwischen 23 und 6 Uhr; für Bäckereien und Konditoreien gilt 22 bis 5 Uhr. Für die Steuerfreiheit nach § 3b EStG zählt Nachtarbeit dagegen grundsätzlich von 20 bis 6 Uhr.',
          'Auch bei Feiertagen kommt es auf die am Ort der Arbeitsstätte geltenden Vorschriften an. Für die Lohnabrechnung sollten die maßgebliche Tätigkeit, der genaue Zeitraum und der Arbeitsort nachvollziehbar dokumentiert sein.',
        ],
      },
      {
        heading: 'Steuerfreie Zuschläge nach § 3b EStG',
        paragraphs: [
          '§ 3b EStG begünstigt Zuschläge für tatsächlich geleistete Sonntags-, Feiertags- oder Nachtarbeit, wenn sie zusätzlich zum Grundlohn gezahlt werden. Die Steuerfreiheit gilt nur bis zu den gesetzlich festgelegten Prozentsätzen und ist keine allgemeine Steuerfreiheit für jede Zulage.',
          'Die Höchstgrenzen betragen grundsätzlich 25 Prozent für Nachtarbeit, 50 Prozent für Sonntagsarbeit, 125 Prozent für Arbeit an gesetzlichen Feiertagen sowie abweichend 150 Prozent für die gesetzlich besonders genannten Zeiten und Feiertage. Für Nachtarbeit von 0 bis 4 Uhr kann ein Satz von 40 Prozent gelten, wenn die Arbeit vor 0 Uhr begonnen wurde.',
          'Treffen die Voraussetzungen nicht vollständig zu, ist der Zuschlag nicht allein wegen seiner Bezeichnung steuerfrei. Das gilt zum Beispiel bei pauschalen Zahlungen ohne Bezug zu den tatsächlich geleisteten begünstigten Stunden.',
        ],
      },
      {
        heading: 'Grundlohn und tatsächlich geleistete Arbeit',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'grundlohn', text: 'Grundlohn' },
            ' ist für die steuerliche Berechnung in einen Stundenlohn umzurechnen und wird dabei höchstens mit 50 Euro pro Stunde angesetzt. Der Zuschlag muss neben diesem Grundlohn für die konkret geleisteten Zeiten gezahlt werden.',
          ],
          'Eine belastbare Arbeitszeiterfassung ist deshalb wichtig. Sie sollte Beginn, Ende, Pausen und die Zeiten für Nacht-, Sonn- oder Feiertagsarbeit erkennen lassen. Pauschale Zuschläge können nur unter engen Voraussetzungen als Abschlag oder Vorschuss auf eine spätere Einzelabrechnung begünstigt sein.',
        ],
      },
      {
        heading: 'Sozialversicherung grundsätzlich getrennt prüfen',
        paragraphs: [
          'Steuerfreiheit und Beitragsfreiheit sind nicht identisch. Steuerfreie Zuschläge für Sonntags-, Feiertags- und Nachtarbeit sind in der Sozialversicherung nur insoweit beitragsfrei, wie sie aus einem Grundlohn von höchstens 25 Euro je Stunde berechnet werden.',
          'Ein Zuschlag kann daher steuerfrei sein, aber ganz oder teilweise zum sozialversicherungspflichtigen Entgelt gehören. Die Lohnabrechnung muss die jeweiligen Grenzen und die konkrete Berechnungsgrundlage getrennt berücksichtigen.',
        ],
      },
      {
        heading: 'Mehrere Zuschläge und Mischzuschläge',
        paragraphs: [
          'Bei einer Arbeitsstunde können mehrere Merkmale zusammentreffen, etwa Nachtarbeit an einem Feiertag. Die steuerliche Begünstigung kann sich dann nach den gesetzlichen Regeln kombinieren, sofern die Voraussetzungen für die einzelnen Bestandteile erfüllt sind.',
          'Mischzuschläge oder zusätzlich gezahlte Mehrarbeitszuschläge brauchen eine nachvollziehbare Zuordnung. Ein Mehrarbeitszuschlag wird nicht automatisch zum steuerfreien Nacht-, Sonn- oder Feiertagszuschlag, nur weil die Stunde in eine dieser Zeiten fällt.',
        ],
      },
      {
        heading: 'Zuschläge richtig abrechnen',
        paragraphs: [
          'Halte die vertragliche oder tarifliche Grundlage, die geleisteten Zeiten, den Grundlohn und jeden Zuschlagsbestandteil getrennt fest. So lässt sich prüfen, welcher Betrag arbeitsrechtlich geschuldet sowie steuer- oder beitragspflichtig ist.',
          [
            'Bei zusätzlichen Stunden hilft die Seite ',
            { type: 'link', href: '/wissen/ueberstunden', text: 'Überstunden' },
            ' bei der arbeitsrechtlichen Einordnung. Der ',
            { type: 'link', href: '/tools/arbeitszeitrechner', text: 'Arbeitszeitrechner' },
            ' unterstützt bei der Erfassung der Arbeitszeit; die Positionen selbst sollten anschließend in der ',
            { type: 'link', href: '/wissen/lohnabrechnung', text: 'Lohnabrechnung' },
            ' nachvollziehbar ausgewiesen werden.',
          ],
        ],
      },
    ],
  },
  generator: {
    label: 'Arbeitszeit berechnen',
    href: '/tools/arbeitszeitrechner',
    text: 'Berechne Arbeitszeit aus Beginn, Ende und Pausen, damit Zuschläge für begünstigte Zeiten nachvollziehbar zugeordnet werden können.',
  },
  keyPoints: [
    'Ein Zuschlag ist ein zusätzlicher Vergütungsbestandteil und nicht allein wegen seiner Bezeichnung geschuldet',
    'Arbeitsrechtlicher Anspruch, Steuerfreiheit und Sozialversicherung folgen unterschiedlichen Regeln',
    'Für zulässige Sonn- oder Feiertagsarbeit besteht kein allgemeiner gesetzlicher Zuschlagssatz',
    '§ 3b EStG begünstigt nur Zuschläge für tatsächlich geleistete Nacht-, Sonn- oder Feiertagsarbeit neben dem Grundlohn',
    'Der steuerliche Grundlohn ist höchstens mit 50 Euro pro Stunde anzusetzen',
    'Für die Beitragsfreiheit in der Sozialversicherung gilt bei SFN-Zuschlägen eine Grenze von 25 Euro Grundlohn je Stunde',
    'Arbeitszeit und Zuschlagsbestandteile müssen nachvollziehbar dokumentiert und abgerechnet werden',
  ],
  commonMistakes: [
    'jeden Sonn- oder Feiertagseinsatz automatisch als zuschlagspflichtig behandeln',
    'einen arbeitsrechtlich geschuldeten Zuschlag automatisch als steuerfrei abrechnen',
    'Nachtzeit nach Arbeitszeitgesetz und nach § 3b EStG gleichsetzen',
    'Pauschalzahlungen ohne Bezug zu tatsächlich geleisteten begünstigten Stunden steuerfrei behandeln',
    'Grundlohn, Zuschlag und Mehrarbeitszuschlag nicht getrennt ausweisen',
    'bei der Sozialversicherung dieselbe Grenze wie bei der Steuerfreiheit anwenden',
    'Ersatzruhetage bei zulässiger Sonn- oder Feiertagsarbeit übersehen',
  ],
  faqs: [
    {
      question: 'Ist ein Zuschlag für Sonntagsarbeit immer Pflicht?',
      answer: 'Nein. Das Arbeitszeitgesetz enthält keinen allgemeinen Zuschlagssatz für Sonntagsarbeit. Ein Anspruch kann sich aber aus Tarifvertrag, Betriebsvereinbarung, Arbeitsvertrag oder besonderen Regelungen ergeben.',
    },
    {
      question: 'Wann sind Nacht-, Sonn- und Feiertagszuschläge steuerfrei?',
      answer: 'Wenn sie zusätzlich zum Grundlohn für tatsächlich geleistete begünstigte Arbeitszeiten gezahlt werden und die gesetzlichen Voraussetzungen sowie Höchstgrenzen des § 3b EStG eingehalten sind.',
    },
    {
      question: 'Was ist der Grundlohn bei steuerfreien Zuschlägen?',
      answer: 'Das ist der laufende Arbeitslohn für die regelmäßige Arbeitszeit, umgerechnet auf einen Stundenlohn. Für § 3b EStG wird er höchstens mit 50 Euro je Stunde angesetzt.',
    },
    {
      question: 'Sind steuerfreie Zuschläge auch sozialversicherungsfrei?',
      answer: 'Nicht automatisch in gleicher Höhe. Bei SFN-Zuschlägen ist die Beitragsfreiheit grundsätzlich auf den Teil begrenzt, der aus einem Grundlohn von höchstens 25 Euro je Stunde berechnet wird.',
    },
    {
      question: 'Gibt es für Nachtarbeit immer einen festen Zuschlag?',
      answer: 'Nein. Für Nachtarbeitnehmer sieht § 6 Abs. 5 ArbZG ohne tarifliche Ausgleichsregelung bezahlte freie Tage oder einen angemessenen Zuschlag vor. Ein fester Prozentsatz steht dort nicht.',
    },
    {
      question: 'Können Nacht- und Feiertagszuschlag zusammenkommen?',
      answer: 'Das kann unter den Voraussetzungen des § 3b EStG möglich sein. Die konkreten Zeiten, der Grundlohn und die einzelnen Zuschlagsbestandteile müssen dafür nachvollziehbar geprüft werden.',
    },
  ],
  related: [
    'personal-lohn',
    'ueberstunden',
    'lohnabrechnung',
    'verguetungsarten',
  ],
  sources: [
    { label: '§ 3b EStG – Steuerfreiheit von Zuschlägen für Sonntags-, Feiertags- oder Nachtarbeit', url: 'https://www.gesetze-im-internet.de/estg/__3b.html' },
    { label: '§ 1 SvEV – Sozialversicherungsrechtliche Behandlung von Zuschlägen', url: 'https://www.gesetze-im-internet.de/svev/__1.html' },
    { label: '§ 6 ArbZG – Nacht- und Schichtarbeit', url: 'https://www.gesetze-im-internet.de/arbzg/__6.html' },
    { label: '§§ 9 bis 11 ArbZG – Sonn- und Feiertagsruhe sowie Ausgleich', url: 'https://www.gesetze-im-internet.de/arbzg/BJNR117100994.html' },
    { label: 'BMF – Lohnsteuer-Hinweise 2026 zu § 3b EStG', url: 'https://lsth.bundesfinanzministerium.de/lsth/2026/A-Einkommensteuergesetz/II-Einkommen-2-24b/2-Steuerfreie-Einnahmen-3-3c/Paragraf-3b/inhalt.html' },
    { label: 'Deutsche Rentenversicherung – Steuerfreie SFN-Zuschläge', url: 'https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Arbeitgeber-und-Steuerberater/summa-summarum/Lexikon/S/steuerfreie_sfn_zuschlaege.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default zuschlaege;
