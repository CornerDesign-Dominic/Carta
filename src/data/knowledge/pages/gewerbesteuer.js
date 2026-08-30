import { defaultDisclaimer } from '../shared.js';

const gewerbesteuer = {
  slug: 'gewerbesteuer',
  category: 'Steuern',
  title: 'Gewerbesteuer',
  description: 'Gewerbesteuer einfach erklärt: Gewerbeertrag, Messbetrag, Hebesatz, Freibetrag und der Unterschied zu Einkommen- und Körperschaftsteuer.',
  seo: {
    title: 'Gewerbesteuer einfach erklärt | Belege24',
    description: 'Erfahre, wer Gewerbesteuer zahlt, wie Gewerbeertrag, Messbetrag und Hebesatz zusammenhängen und welche Rolle der Standort spielt.',
    canonicalPath: '/wissen/gewerbesteuer',
  },
  article: {
    intro: 'Die Gewerbesteuer ist eine Steuer auf Gewerbebetriebe. Sie kann für Einzelunternehmen, Personengesellschaften und Kapitalgesellschaften relevant sein; wie hoch sie ausfällt, hängt auch vom Standort des Betriebs ab.',
    sections: [
      {
        heading: 'Was ist Gewerbesteuer?',
        paragraphs: [
          'Der Gewerbesteuer unterliegt grundsätzlich jeder im Inland betriebene stehende Gewerbebetrieb. Sie ist von Einkommensteuer und Körperschaftsteuer getrennt und wird von der Gemeinde erhoben.',
          'Die tatsächliche Höhe ist nicht bundesweit einheitlich. Sie hängt neben dem Gewerbeertrag vor allem vom Hebesatz der zuständigen Gemeinde ab.',
        ],
      },
      {
        heading: 'Wer ist gewerbesteuerpflichtig?',
        paragraphs: [
          [
            'Gewerbesteuer kann Einzelunternehmen und Personengesellschaften treffen, wenn sie einen ',
            { type: 'glossary', id: 'gewerbebetrieb', text: 'Gewerbebetrieb' },
            ' führen. Bei Kapitalgesellschaften wie GmbH, UG und AG gilt ihre Tätigkeit gesetzlich stets und in vollem Umfang als Gewerbebetrieb.',
          ],
          'Ob im konkreten Fall ein Gewerbebetrieb vorliegt, richtet sich nach den steuerrechtlichen Voraussetzungen. Auch bei einer Tätigkeit mit geringem Umfang oder besonderen Strukturen ist eine genaue Einordnung wichtig.',
        ],
      },
      {
        heading: 'Gewerbebetrieb oder freiberufliche Tätigkeit?',
        paragraphs: [
          'Eine echte freiberufliche Tätigkeit zählt grundsätzlich nicht zu den Einkünften aus Gewerbebetrieb. Sie unterliegt deshalb regelmäßig nicht der Gewerbesteuer. Das Einkommensteuergesetz nennt dafür zum Beispiel bestimmte wissenschaftliche, künstlerische, schriftstellerische, unterrichtende und heilberufliche Tätigkeiten.',
          'Die Abgrenzung ist nicht allein eine Frage der Berufsbezeichnung. Entscheidend sind die konkrete Tätigkeit und die gesetzlichen Voraussetzungen. Bei Mischformen oder einer Veränderung der Tätigkeit kann eine fachliche Prüfung sinnvoll sein.',
        ],
      },
      {
        heading: 'Was ist der Gewerbeertrag?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'gewerbeertrag', text: 'Gewerbeertrag' },
            ' baut grundsätzlich auf dem Gewinn auf, der nach Einkommensteuer- oder Körperschaftsteuerrecht ermittelt wurde. Für die Gewerbesteuer kommen jedoch gesetzlich bestimmte Hinzurechnungen und Kürzungen hinzu.',
          ],
          'Der Gewerbeertrag ist deshalb nicht automatisch identisch mit Umsatz, Jahresüberschuss oder steuerlichem Gewinn. Für die Berechnung sind jeweils die Regeln des Gewerbesteuergesetzes maßgeblich.',
        ],
      },
      {
        heading: 'Messbetrag, Hebesatz und Berechnung',
        paragraphs: [
          [
            'Zuerst wird aus dem maßgeblichen Gewerbeertrag der ',
            { type: 'glossary', id: 'gewerbesteuer-messbetrag', text: 'Gewerbesteuer-Messbetrag' },
            ' ermittelt. Dafür wird der nach den gesetzlichen Regeln gekürzte und abgerundete Gewerbeertrag mit der Steuermesszahl von 3,5 Prozent multipliziert.',
          ],
          [
            'Danach wendet die Gemeinde ihren ',
            { type: 'glossary', id: 'hebesatz', text: 'Hebesatz' },
            ' auf den Messbetrag an. Vereinfacht gilt: Gewerbeertrag → Messbetrag → Gewerbesteuer. Die Gemeinde legt ihren Hebesatz fest; er beträgt mindestens 280 Prozent.',
          ],
        ],
      },
      {
        heading: 'Freibetrag für Einzelunternehmen und Personengesellschaften',
        paragraphs: [
          'Bei natürlichen Personen und Personengesellschaften wird der Gewerbeertrag vor der Messbetragsberechnung grundsätzlich um einen Freibetrag von 24.500 Euro gekürzt. Der verbleibende Gewerbeertrag wird dabei auf volle 100 Euro nach unten abgerundet.',
          'Für Kapitalgesellschaften wie GmbH, UG und AG gilt dieser Freibetrag nicht. Auch weitere gesetzliche Sonderfälle können abweichende Regeln vorsehen.',
        ],
      },
      {
        heading: 'Warum spielt der Standort eine Rolle?',
        paragraphs: [
          'Jede hebeberechtigte Gemeinde bestimmt ihren Hebesatz selbst. Deshalb kann bei gleichem Gewerbeertrag je nach Betriebsstätte eine unterschiedlich hohe Gewerbesteuer entstehen.',
          'Der Standort ist aber nur ein Faktor unter mehreren. Eine Verlagerung oder Gestaltung allein wegen des Hebesatzes kann weitere steuerliche, rechtliche und wirtschaftliche Folgen haben.',
        ],
      },
      {
        heading: 'Unterschied zu Einkommensteuer und Körperschaftsteuer',
        paragraphs: [
          'Einkommensteuer betrifft grundsätzlich natürliche Personen, etwa Einzelunternehmer oder Gesellschafter. Körperschaftsteuer betrifft vor allem Kapitalgesellschaften. Gewerbesteuer knüpft dagegen an den Gewerbebetrieb und seinen Gewerbeertrag an.',
          'Bei einem gewerblichen Einzelunternehmen können Einkommensteuer und Gewerbesteuer nebeneinander relevant sein. Bei einer gewerblich tätigen Kapitalgesellschaft können Körperschaftsteuer und Gewerbesteuer zusätzlich nebeneinander anfallen.',
        ],
      },
      {
        heading: 'Wie kann Gewerbesteuer bei der Einkommensteuer berücksichtigt werden?',
        paragraphs: [
          'Für natürliche Personen mit gewerblichen Einkünften und Mitunternehmer kann die tarifliche Einkommensteuer unter den Voraussetzungen des § 35 EStG ermäßigt werden. Ausgangspunkt ist dabei grundsätzlich das Vierfache des festgesetzten Gewerbesteuer-Messbetrags.',
          'Die Ermäßigung ist jedoch begrenzt: Sie darf insbesondere die tatsächlich zu zahlende Gewerbesteuer und den auf die gewerblichen Einkünfte entfallenden Teil der Einkommensteuer nicht überschreiten. Ob und in welcher Höhe eine Anrechnung möglich ist, hängt vom Einzelfall ab.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Verwechsle Gewerbeertrag nicht mit Umsatz oder Gewinn und den Messbetrag nicht mit der tatsächlich zu zahlenden Gewerbesteuer. Der Hebesatz wird erst im letzten Schritt auf den Messbetrag angewendet.',
          'Nicht jede selbständige Tätigkeit ist gewerbesteuerpflichtig. Umgekehrt ist eine Kapitalgesellschaft nicht deshalb von Gewerbesteuer ausgenommen, weil sie nur freiberuflich geprägte Leistungen erbringt.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Gewerbesteuer betrifft grundsätzlich Gewerbebetriebe im Inland',
    'Kapitalgesellschaften gelten gesetzlich stets als Gewerbebetrieb',
    'Echte freiberufliche Tätigkeiten unterliegen regelmäßig nicht der Gewerbesteuer',
    'Der Gewerbeertrag basiert auf dem Gewinn und wird gewerbesteuerlich angepasst',
    'Der Messbetrag entsteht mit einer Steuermesszahl von 3,5 Prozent',
    'Die Gemeinde bestimmt den Hebesatz; er beträgt mindestens 280 Prozent',
    'Für natürliche Personen und Personengesellschaften gilt grundsätzlich ein Freibetrag von 24.500 Euro',
    'Eine Einkommensteuerermäßigung nach § 35 EStG kann unter Voraussetzungen möglich sein',
  ],
  commonMistakes: [
    'Gewerbeertrag, Gewinn und Umsatz gleichsetzen',
    'den Messbetrag mit der endgültigen Gewerbesteuer verwechseln',
    'den kommunalen Hebesatz bei der Planung nicht berücksichtigen',
    'den Freibetrag auf Kapitalgesellschaften übertragen',
    'jede selbständige Tätigkeit automatisch als Gewerbebetrieb behandeln',
    'eine vollständige Anrechnung auf die Einkommensteuer ohne Einzelfallprüfung erwarten',
  ],
  faqs: [
    {
      question: 'Was ist Gewerbesteuer einfach erklärt?',
      answer: 'Gewerbesteuer ist eine Steuer auf Gewerbebetriebe. Ihre Höhe ergibt sich aus dem Gewerbeertrag, dem Messbetrag und dem Hebesatz der Gemeinde.',
    },
    {
      question: 'Wer muss Gewerbesteuer zahlen?',
      answer: 'Grundsätzlich Gewerbebetriebe im Inland. Kapitalgesellschaften wie GmbH, UG und AG gelten gesetzlich stets als Gewerbebetrieb; bei Einzelunternehmen und Personengesellschaften kommt es auf die konkrete Tätigkeit an.',
    },
    {
      question: 'Zahlen Freiberufler Gewerbesteuer?',
      answer: 'Eine echte freiberufliche Tätigkeit unterliegt regelmäßig nicht der Gewerbesteuer. Ob eine Tätigkeit freiberuflich oder gewerblich ist, richtet sich nach den gesetzlichen Voraussetzungen und dem konkreten Fall.',
    },
    {
      question: 'Was ist der Gewerbesteuer-Messbetrag?',
      answer: 'Der Messbetrag ist ein Zwischenschritt der Berechnung. Er entsteht aus dem maßgeblichen Gewerbeertrag und der Steuermesszahl von 3,5 Prozent.',
    },
    {
      question: 'Warum ist die Gewerbesteuer je nach Gemeinde unterschiedlich?',
      answer: 'Die Gemeinde legt den Hebesatz fest, mit dem der Messbetrag multipliziert wird. Deshalb kann die tatsächliche Gewerbesteuer je nach Standort unterschiedlich hoch sein.',
    },
    {
      question: 'Haben Einzelunternehmen einen Gewerbesteuer-Freibetrag?',
      answer: 'Für natürliche Personen und Personengesellschaften wird der Gewerbeertrag grundsätzlich um 24.500 Euro gekürzt. Für Kapitalgesellschaften gilt dieser Freibetrag nicht.',
    },
    {
      question: 'Kann Gewerbesteuer die Einkommensteuer mindern?',
      answer: 'Bei natürlichen Personen mit gewerblichen Einkünften kann eine Steuerermäßigung nach § 35 EStG möglich sein. Sie ist an Voraussetzungen und gesetzliche Höchstgrenzen gebunden.',
    },
  ],
  related: [
    'steuern',
    'einkommensteuer',
    'koerperschaftsteuer',
  ],
  sources: [
    {
      label: '§ 2 GewStG – Steuergegenstand',
      url: 'https://www.gesetze-im-internet.de/gewstg/__2.html',
    },
    {
      label: '§ 7 GewStG – Gewerbeertrag',
      url: 'https://www.gesetze-im-internet.de/gewstg/__7.html',
    },
    {
      label: '§ 11 GewStG – Steuermesszahl und Steuermessbetrag',
      url: 'https://www.gesetze-im-internet.de/gewstg/__11.html',
    },
    {
      label: '§ 16 GewStG – Hebesatz',
      url: 'https://www.gesetze-im-internet.de/gewstg/__16.html',
    },
    {
      label: '§ 18 EStG – Einkünfte aus selbständiger Arbeit',
      url: 'https://www.gesetze-im-internet.de/estg/__18.html',
    },
    {
      label: '§ 35 EStG – Steuerermäßigung bei gewerblichen Einkünften',
      url: 'https://www.gesetze-im-internet.de/estg/__35.html',
    },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default gewerbesteuer;
