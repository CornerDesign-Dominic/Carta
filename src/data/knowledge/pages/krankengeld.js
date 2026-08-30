import { defaultDisclaimer } from '../shared.js';

const krankengeld = {
  slug: 'krankengeld',
  category: 'Personal & Lohn',
  title: 'Krankengeld',
  description: 'Krankengeld einfach erklärt: Anspruch, Beginn nach Entgeltfortzahlung, Höhe, Dauer, Blockfrist und wichtige Unterschiede bei Arbeitslosigkeit, Minijob und privater Versicherung.',
  seo: {
    title: 'Krankengeld: Anspruch, Höhe und Dauer | Belege24',
    description: 'Erfahre, wann Krankengeld grundsätzlich beginnt, wie es berechnet wird, wie lange es gezahlt werden kann und worin es sich von der Entgeltfortzahlung unterscheidet.',
    canonicalPath: '/wissen/krankengeld',
  },
  article: {
    intro: 'Krankengeld ist eine Leistung der gesetzlichen Krankenversicherung bei längerer Arbeitsunfähigkeit. Es kann die Entgeltfortzahlung durch den Arbeitgeber ablösen, entsteht aber nicht automatisch in jedem Krankheitsfall.',
    sections: [
      {
        heading: 'Was ist Krankengeld?',
        paragraphs: [
          'Krankengeld ist eine Geldleistung der gesetzlichen Krankenkasse. Es soll das ausfallende Arbeitseinkommen teilweise absichern, wenn eine versicherte Person wegen Krankheit arbeitsunfähig ist oder stationär behandelt wird und die gesetzlichen Voraussetzungen erfüllt.',
          'Ob ein Anspruch besteht, richtet sich insbesondere nach dem Versicherungsstatus und der Art der Beschäftigung. Die gesetzlichen Regeln gelten daher nicht ohne Weiteres für privat Versicherte, familienversicherte Personen oder jede geringfügige Beschäftigung.',
        ],
      },
      {
        heading: 'Entgeltfortzahlung und Krankengeld unterscheiden',
        paragraphs: [
          [
            'Bei einer krankheitsbedingten Arbeitsunfähigkeit zahlt zunächst häufig der Arbeitgeber das regelmäßige Arbeitsentgelt weiter. Diese ',
            { type: 'link', href: '/wissen/entgeltfortzahlung', text: 'Entgeltfortzahlung' },
            ' ist ein arbeitsrechtlicher Anspruch und bei erfüllten Voraussetzungen grundsätzlich auf sechs Wochen begrenzt.',
          ],
          'Krankengeld ist davon getrennt: Es wird nicht vom Arbeitgeber, sondern von der gesetzlichen Krankenkasse gezahlt. Bei länger dauernder Arbeitsunfähigkeit kann es nach Ende der Entgeltfortzahlung einsetzen. Der konkrete Beginn hängt unter anderem davon ab, ob ein Krankengeldanspruch besteht und die Arbeitsunfähigkeit rechtzeitig ärztlich festgestellt ist.',
        ],
      },
      {
        heading: 'Wer kann Krankengeld erhalten?',
        paragraphs: [
          'Krankengeld kann vor allem für gesetzlich Krankenversicherte mit einem Krankengeldanspruch relevant sein. Bei Beschäftigten ist das häufig der Fall, wenn die Entgeltfortzahlung endet. Auch für andere Versicherte können besondere Regeln gelten, zum Beispiel bei freiwilliger Versicherung oder Selbstständigkeit.',
          'Nicht jede gesetzlich versicherte Person hat automatisch denselben Anspruch. Bei freiwillig Versicherten, Selbstständigen und besonderen Versicherungsverhältnissen ist entscheidend, ob Krankengeld in den Versicherungsschutz einbezogen wurde. Lass den Einzelfall bei Unsicherheit von der Krankenkasse prüfen.',
        ],
      },
      {
        heading: 'Wie hoch ist Krankengeld?',
        paragraphs: [
          'Die Höhe richtet sich grundsätzlich nach dem regelmäßig erzielten beitragspflichtigen Arbeitsentgelt. Gesetzlich beträgt Krankengeld 70 Prozent des regelmäßigen Arbeitsentgelts und Arbeitseinkommens, darf jedoch 90 Prozent des Nettoarbeitsentgelts nicht überschreiten.',
          'Für die Berechnung gelten außerdem gesetzliche Höchstgrenzen, weil nur Einkommen bis zur maßgeblichen Beitragsbemessungsgrenze berücksichtigt wird. Statt eines pauschalen Auszahlungsbetrags solltest du daher immer die individuelle Berechnung der Krankenkasse abwarten.',
        ],
      },
      {
        heading: 'Wie lange wird Krankengeld gezahlt?',
        paragraphs: [
          'Wegen derselben Krankheit ist Krankengeld grundsätzlich auf höchstens 78 Wochen innerhalb von drei Jahren begrenzt. In diesen Zeitraum wird die Zeit der Entgeltfortzahlung durch den Arbeitgeber einbezogen.',
          'Die dreijährige Blockfrist beginnt mit der ersten Arbeitsunfähigkeit wegen derselben Krankheit. Weitere Arbeitsunfähigkeitszeiten wegen dieser Krankheit können deshalb die verbleibende Dauer beeinflussen. Bei mehreren Erkrankungen oder Unterbrechungen ist die Einordnung oft nicht einfach.',
        ],
      },
      {
        heading: 'Arbeitslosigkeit, Minijob und private Versicherung',
        paragraphs: [
          'Bei Arbeitslosengeld kann bei Arbeitsunfähigkeit zunächst eine Leistungsfortzahlung von bis zu sechs Wochen gelten. Was anschließend möglich ist, hängt von den Voraussetzungen der gesetzlichen Krankenversicherung und dem jeweiligen Leistungsfall ab.',
          'Ein Minijob allein begründet in der Regel keine eigene gesetzliche Krankenversicherung mit Krankengeldanspruch. Besteht zusätzlich eine andere Versicherung oder Beschäftigung, kann deren Status maßgeblich sein. Privat Versicherte erhalten kein gesetzliches Krankengeld nach dem SGB V; ob ein Krankentagegeld gezahlt wird, ergibt sich aus dem privaten Vertrag.',
        ],
      },
      {
        heading: 'Was bedeutet Krankengeld für die Lohnabrechnung?',
        paragraphs: [
          'Während der Entgeltfortzahlung erscheint das fortgezahlte Arbeitsentgelt in der Lohnabrechnung. Nach deren Ende zahlt die Krankenkasse das Krankengeld grundsätzlich direkt an die versicherte Person. Zahlt der Arbeitgeber zusätzlich einen Zuschuss oder bestehen Sonderregelungen, kann dies weiter Auswirkungen auf die Abrechnung haben.',
          [
            'Für Arbeitgeber und Beschäftigte ist eine nachvollziehbare Abrechnung wichtig. Die Grundlagen zu Entgeltbestandteilen und Abzügen findest du unter ',
            { type: 'link', href: '/wissen/lohnabrechnung', text: 'Lohnabrechnung' },
            ' und ',
            { type: 'link', href: '/wissen/sozialversicherungsbeitraege', text: 'Sozialversicherungsbeiträge' },
            '.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Verwechsle Krankengeld nicht mit der sechs Wochen langen Arbeitgeberzahlung. Prüfe außerdem, ob der eigene Versicherungsstatus überhaupt einen Krankengeldanspruch umfasst und ob die Arbeitsunfähigkeit ohne Lücke ärztlich festgestellt wird.',
          'Bei wiederholter Arbeitsunfähigkeit solltest du nicht allein vom Rechnungs- oder Zahlungszeitraum ausgehen. Für die Dauer sind insbesondere dieselbe Krankheit und die gesetzliche Blockfrist wichtig.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Krankengeld ist eine Leistung der gesetzlichen Krankenkasse und keine Fortzahlung durch den Arbeitgeber',
    'Bei Beschäftigten kann es nach Ende der Entgeltfortzahlung relevant werden',
    'Der Anspruch hängt vom Versicherungsstatus und den gesetzlichen Voraussetzungen ab',
    'Die gesetzliche Berechnung orientiert sich an 70 Prozent des regelmäßigen Entgelts, höchstens an 90 Prozent des Nettoarbeitsentgelts',
    'Für dieselbe Krankheit gilt grundsätzlich eine Höchstdauer von 78 Wochen innerhalb von drei Jahren',
    'Minijob, Arbeitslosigkeit und private Krankenversicherung folgen nicht pauschal denselben Regeln',
  ],
  commonMistakes: [
    'Krankengeld und Entgeltfortzahlung gleichsetzen',
    'einen Anspruch unabhängig vom Versicherungsstatus annehmen',
    '70 Prozent des Bruttoentgelts als garantierten Auszahlungsbetrag verstehen',
    'die 78-Wochen-Grenze ohne Bezug zur selben Krankheit und Blockfrist berechnen',
    'bei einer erneuten Arbeitsunfähigkeit die bisherigen Zeiten wegen derselben Krankheit nicht berücksichtigen',
    'bei Minijob oder privater Krankenversicherung automatisch gesetzliches Krankengeld erwarten',
  ],
  faqs: [
    {
      question: 'Wann beginnt Krankengeld?',
      answer: 'Bei Beschäftigten kann es nach Ende der Entgeltfortzahlung beginnen, wenn ein gesetzlicher Krankengeldanspruch besteht und die weiteren Voraussetzungen erfüllt sind. Der genaue Beginn richtet sich nach dem konkreten Versicherungs- und Krankheitsfall.',
    },
    {
      question: 'Wie viel Krankengeld gibt es?',
      answer: 'Gesetzlich sind grundsätzlich 70 Prozent des regelmäßigen Arbeitsentgelts und Arbeitseinkommens vorgesehen, höchstens 90 Prozent des Nettoarbeitsentgelts. Beitragsbemessungsgrenzen und die persönliche Berechnung der Krankenkasse sind zu beachten.',
    },
    {
      question: 'Wie lange wird Krankengeld gezahlt?',
      answer: 'Wegen derselben Krankheit grundsätzlich höchstens 78 Wochen innerhalb von drei Jahren. Die Zeit der Entgeltfortzahlung wird dabei mitgerechnet.',
    },
    {
      question: 'Erhalte ich im Minijob Krankengeld?',
      answer: 'Ein Minijob allein begründet in der Regel keinen eigenen gesetzlichen Krankengeldanspruch. Ob eine andere Versicherung oder Beschäftigung einen Anspruch vermittelt, hängt vom Einzelfall ab.',
    },
    {
      question: 'Bekommen privat Versicherte Krankengeld?',
      answer: 'Das gesetzliche Krankengeld nach dem SGB V richtet sich an gesetzlich Versicherte. Bei privater Krankenversicherung kann ein Krankentagegeld nur bestehen, wenn es vertraglich vereinbart wurde.',
    },
  ],
  related: [
    'personal-lohn',
    'entgeltfortzahlung',
    'sozialversicherungsbeitraege',
    'lohnabrechnung',
  ],
  sources: [
    { label: '§ 44 SGB V – Krankengeld', url: 'https://www.gesetze-im-internet.de/sgb_5/__44.html' },
    { label: '§ 46 SGB V – Entstehen des Krankengeldanspruchs', url: 'https://www.gesetze-im-internet.de/sgb_5/__46.html' },
    { label: '§ 47 SGB V – Höhe und Berechnung des Krankengeldes', url: 'https://www.gesetze-im-internet.de/sgb_5/__47.html' },
    { label: '§ 48 SGB V – Dauer des Krankengeldes', url: 'https://www.gesetze-im-internet.de/sgb_5/__48.html' },
    { label: '§ 146 SGB III – Leistungsfortzahlung bei Arbeitsunfähigkeit', url: 'https://www.gesetze-im-internet.de/sgb_3/__146.html' },
    { label: 'Bundesministerium für Gesundheit – Krankengeld', url: 'https://www.bundesgesundheitsministerium.de/krankengeld/seite' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default krankengeld;
