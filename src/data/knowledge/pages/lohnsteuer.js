import { defaultDisclaimer } from '../shared.js';

const lohnsteuer = {
  slug: 'lohnsteuer',
  category: 'Steuern',
  title: 'Lohnsteuer',
  description: 'Lohnsteuer einfach erklärt: Arbeitgeberpflichten, Steuerklassen, ELStAM, Freibeträge und der Zusammenhang mit der Einkommensteuer.',
  seo: {
    title: 'Lohnsteuer einfach erklärt | Belege24',
    description: 'Erfahre, wie der Lohnsteuerabzug funktioniert und welche Rolle Arbeitgeber, Steuerklassen, ELStAM, Freibeträge und weitere Arbeitsverhältnisse spielen.',
    canonicalPath: '/wissen/lohnsteuer',
  },
  article: {
    intro: 'Die Lohnsteuer ist die Einkommensteuer, die bei Arbeitslohn direkt über die Lohnabrechnung erhoben wird. Der Arbeitnehmer schuldet die Steuer; der Arbeitgeber berechnet sie, behält sie vom Arbeitslohn ein und führt sie an die Finanzverwaltung ab.',
    sections: [
      {
        heading: 'Was ist Lohnsteuer?',
        paragraphs: [
          'Lohnsteuer ist keine zusätzliche Steuer neben der Einkommensteuer. Sie ist eine besondere Erhebungsform der Einkommensteuer für Einkünfte aus nichtselbständiger Arbeit.',
          'Der laufende Abzug verteilt die Steuer grundsätzlich auf die Lohnzahlungen des Jahres. Ob die einbehaltene Lohnsteuer genau der späteren Einkommensteuer entspricht, kann erst die Jahresbetrachtung beziehungsweise eine Einkommensteuerveranlagung zeigen.',
        ],
      },
      {
        heading: 'Wer zahlt die Lohnsteuer und wer führt sie ab?',
        paragraphs: [
          'Steuerschuldner ist grundsätzlich der Arbeitnehmer. Der Arbeitgeber behält die Lohnsteuer bei der Lohnzahlung für Rechnung des Arbeitnehmers ein und führt sie an das zuständige Finanzamt ab.',
          'Für Beschäftigte erscheint die Lohnsteuer deshalb als Abzug auf der Lohnabrechnung. Arbeitgeber müssen den Abzug korrekt berechnen, anmelden und fristgerecht abführen sowie die erforderlichen Lohnsteuerdaten dokumentieren und übermitteln.',
        ],
      },
      {
        heading: 'Bruttolohn und steuerpflichtiger Arbeitslohn',
        paragraphs: [
          'Der Bruttolohn ist der Arbeitslohn vor Abzug von Steuern und Sozialversicherungsbeiträgen. Für die Lohnsteuer ist entscheidend, welcher Teil davon steuerpflichtiger Arbeitslohn ist.',
          'Nicht jede Zahlung oder jeder Vorteil wird steuerlich gleich behandelt. Steuerfreie oder pauschal besteuerte Bestandteile können den Lohnsteuerabzug anders beeinflussen als regulärer Arbeitslohn. Die konkrete Einordnung richtet sich nach den gesetzlichen Voraussetzungen.',
        ],
      },
      {
        heading: 'Welche Rolle spielen Steuerklassen?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'steuerklasse', text: 'Steuerklasse' },
            ' ist ein Lohnsteuerabzugsmerkmal. Sie hilft dem Arbeitgeber, bestimmte persönliche Verhältnisse beim laufenden Lohnsteuerabzug typisiert zu berücksichtigen.',
          ],
          'Die Steuerklasse bestimmt nicht allein die endgültige Einkommensteuer eines Jahres. Sie beeinflusst zunächst, wie viel Lohnsteuer während des Jahres einbehalten wird. Bei einer späteren Veranlagung werden die tatsächlich relevanten Jahreseinkünfte und Abzüge betrachtet.',
        ],
      },
      {
        heading: 'Freibeträge beim Lohnsteuerabzug',
        paragraphs: [
          'Ein vom Finanzamt gebildeter Freibetrag kann beim laufenden Lohnsteuerabzug berücksichtigt werden und dadurch den monatlichen Steuerabzug verändern. Er kann zum Beispiel auf Antrag für bestimmte voraussichtliche Aufwendungen eingetragen werden, wenn die gesetzlichen Voraussetzungen erfüllt sind.',
          'Ein Freibetrag ist keine pauschale Steuerbefreiung für den gesamten Arbeitslohn. Er gilt nur im vorgesehenen Umfang und Zeitraum; die zugrunde liegenden Angaben können bei einer späteren Steuerveranlagung erneut relevant sein.',
        ],
      },
      {
        heading: 'Was sind ELStAM?',
        paragraphs: [
          [
            { type: 'glossary', id: 'elstam', text: 'ELStAM' },
            ' sind die elektronischen Lohnsteuerabzugsmerkmale, die der Arbeitgeber für die Lohnabrechnung bei der Finanzverwaltung abruft. Dazu gehören insbesondere Steuerklasse, Kinderfreibeträge, Freibeträge und das Kirchensteuermerkmal.',
          ],
          'Beim Beginn eines Arbeitsverhältnisses benötigt der Arbeitgeber dafür regelmäßig die steuerliche Identifikationsnummer, das Geburtsdatum und die Angabe, ob es sich um das Haupt- oder ein weiteres Arbeitsverhältnis handelt. Änderungen werden grundsätzlich elektronisch bereitgestellt.',
        ],
      },
      {
        heading: 'Kirchensteuer und Solidaritätszuschlag',
        paragraphs: [
          'Kirchensteuer und Solidaritätszuschlag sind nicht Teil der Lohnsteuer, können aber im Zusammenhang mit der Lohnabrechnung zusätzlich einbehalten werden, wenn die jeweiligen gesetzlichen Voraussetzungen erfüllt sind.',
          'Das Kirchensteuermerkmal gehört zu den ELStAM. Ob Solidaritätszuschlag anfällt, richtet sich nach den gesetzlichen Berechnungsregeln und Grenzen. Deshalb lässt sich nicht allein aus dem Bruttolohn ableiten, ob beide Abzüge entstehen.',
        ],
      },
      {
        heading: 'Was gilt bei mehreren Arbeitgebern?',
        paragraphs: [
          'Beziehst du gleichzeitig Arbeitslohn von mehreren Arbeitgebern, wird ein Arbeitsverhältnis als Hauptarbeitsverhältnis geführt. Für den Arbeitslohn aus einem zweiten und weiteren Dienstverhältnis gilt beim individuellen Lohnsteuerabzug grundsätzlich Steuerklasse VI.',
          'Die Abzüge aus den einzelnen Arbeitsverhältnissen ergeben nicht zwingend bereits die endgültige Einkommensteuer. Bei mehreren Arbeitgebern kann eine Einkommensteuerveranlagung erforderlich sein; pauschal besteuerte Beschäftigungen können abweichend behandelt werden.',
        ],
      },
      {
        heading: 'Minijob und pauschale Besteuerung',
        paragraphs: [
          'Ein Minijob ist nicht automatisch steuerfrei. Unter den gesetzlichen Voraussetzungen kann der Arbeitgeber das Arbeitsentgelt pauschal besteuern. Alternativ kann die Besteuerung nach den individuellen Lohnsteuerabzugsmerkmalen erfolgen.',
          'Welche Variante angewendet wird und wer die pauschale Steuer wirtschaftlich trägt, sollte im konkreten Arbeitsverhältnis geklärt werden. Die steuerliche Behandlung ist außerdem von den Sozialversicherungsregeln zu trennen.',
        ],
      },
      {
        heading: 'Lohnsteuer und Sozialversicherung unterscheiden',
        paragraphs: [
          'Lohnsteuer ist eine Steuer. Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung sind dagegen Sozialversicherungsbeiträge. Beide können den Auszahlungsbetrag mindern, beruhen aber auf unterschiedlichen Regeln und werden getrennt berechnet.',
          'Für Arbeitgeber gehören beide Bereiche zur Lohnabrechnung. Für Beschäftigte erklärt erst die Aufteilung auf der Abrechnung, warum sich der Nettolohn vom Bruttolohn unterscheidet.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Verwechsle die Lohnsteuer nicht mit einer zusätzlichen Steuer neben der Einkommensteuer und die Steuerklasse nicht mit dem endgültigen persönlichen Steuersatz. Auch ein Minijob ist nicht automatisch steuerfrei.',
          'Arbeitgeber sollten ELStAM, Haupt- oder Nebenarbeitsverhältnis und mögliche Freibeträge korrekt berücksichtigen. Beschäftigte sollten ihre Abrechnung und die gespeicherten Merkmale prüfen, wenn persönliche Angaben oder Abzüge nicht plausibel erscheinen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Lohnsteuer ist eine Erhebungsform der Einkommensteuer bei Arbeitslohn',
    'Der Arbeitnehmer schuldet die Steuer, der Arbeitgeber behält sie ein und führt sie ab',
    'Steuerklassen beeinflussen den laufenden Abzug, nicht allein die endgültige Jahressteuer',
    'ELStAM stellen dem Arbeitgeber die relevanten Lohnsteuerabzugsmerkmale elektronisch bereit',
    'Freibeträge können den laufenden Lohnsteuerabzug verändern',
    'Weitere Arbeitsverhältnisse werden beim individuellen Abzug grundsätzlich mit Steuerklasse VI geführt',
    'Minijobs können pauschal oder nach individuellen Merkmalen besteuert werden',
    'Lohnsteuer und Sozialversicherungsbeiträge sind getrennte Abgaben',
  ],
  commonMistakes: [
    'Lohnsteuer als zusätzliche Steuer neben der Einkommensteuer verstehen',
    'Bruttolohn und steuerpflichtigen Arbeitslohn gleichsetzen',
    'Steuerklasse mit dem endgültigen persönlichen Steuersatz verwechseln',
    'veraltete oder unzutreffende ELStAM nicht prüfen',
    'ein weiteres Arbeitsverhältnis nicht korrekt einordnen',
    'einen Minijob automatisch als steuerfrei behandeln',
    'Lohnsteuer und Sozialversicherungsbeiträge vermischen',
  ],
  faqs: [
    {
      question: 'Was ist Lohnsteuer einfach erklärt?',
      answer: 'Lohnsteuer ist die Einkommensteuer, die bei Arbeitslohn direkt über die Lohnabrechnung erhoben wird. Der Arbeitgeber behält sie für Rechnung des Arbeitnehmers ein.',
    },
    {
      question: 'Wer zahlt die Lohnsteuer?',
      answer: 'Der Arbeitnehmer ist grundsätzlich Steuerschuldner. Der Arbeitgeber berechnet die Lohnsteuer, behält sie vom Arbeitslohn ein und führt sie an das Finanzamt ab.',
    },
    {
      question: 'Ist Lohnsteuer dasselbe wie Einkommensteuer?',
      answer: 'Lohnsteuer ist eine besondere Erhebungsform der Einkommensteuer bei Arbeitslohn. Die endgültige Einkommensteuer kann im Rahmen einer Veranlagung von den laufenden Abzügen abweichen.',
    },
    {
      question: 'Was bedeutet die Steuerklasse?',
      answer: 'Die Steuerklasse hilft bei der Berechnung des laufenden Lohnsteuerabzugs. Sie legt nicht allein fest, wie hoch die endgültige Einkommensteuer für das Jahr ist.',
    },
    {
      question: 'Was sind ELStAM?',
      answer: 'ELStAM sind elektronisch gespeicherte Lohnsteuerabzugsmerkmale wie Steuerklasse, Freibeträge, Kinderfreibeträge und Kirchensteuermerkmal.',
    },
    {
      question: 'Was passiert bei zwei Arbeitgebern?',
      answer: 'Ein Arbeitsverhältnis wird als Hauptarbeitsverhältnis geführt. Beim individuellen Abzug gilt für das zweite und weitere Dienstverhältnis grundsätzlich Steuerklasse VI.',
    },
    {
      question: 'Ist ein Minijob immer steuerfrei?',
      answer: 'Nein. Ein Minijob kann unter den gesetzlichen Voraussetzungen pauschal oder nach den individuellen Lohnsteuerabzugsmerkmalen besteuert werden.',
    },
    {
      question: 'Gehören Sozialversicherungsbeiträge zur Lohnsteuer?',
      answer: 'Nein. Lohnsteuer ist eine Steuer; Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung sind eigenständige Sozialversicherungsbeiträge.',
    },
  ],
  related: [
    'steuern',
    'einkommensteuer',
    'solidaritaetszuschlag',
    'kirchensteuer',
  ],
  sources: [
    {
      label: '§ 38 EStG – Erhebung der Lohnsteuer',
      url: 'https://www.gesetze-im-internet.de/estg/__38.html',
    },
    {
      label: '§ 38b EStG – Lohnsteuerklassen und Kinderfreibeträge',
      url: 'https://www.gesetze-im-internet.de/estg/__38b.html',
    },
    {
      label: '§ 39a EStG – Freibetrag und Hinzurechnungsbetrag',
      url: 'https://www.gesetze-im-internet.de/estg/__39a.html',
    },
    {
      label: '§ 39e EStG – Elektronische Lohnsteuerabzugsmerkmale',
      url: 'https://www.gesetze-im-internet.de/estg/__39e.html',
    },
    {
      label: '§ 40a EStG – Pauschalierung bei geringfügiger Beschäftigung',
      url: 'https://www.gesetze-im-internet.de/estg/__40a.html',
    },
    {
      label: 'ELSTER – ELStAM für Arbeitgeber',
      url: 'https://www.elster.de/elsterweb/infoseite/elstam_%28arbeitgeber%29',
    },
    {
      label: 'Solidaritätszuschlaggesetz 1995',
      url: 'https://www.gesetze-im-internet.de/solzg_1995/BJNR097500993.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default lohnsteuer;
