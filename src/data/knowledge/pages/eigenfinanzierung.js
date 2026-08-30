import { defaultDisclaimer } from '../shared.js';

const eigenfinanzierung = {
  slug: 'eigenfinanzierung',
  category: 'Finanzierung & Investition',
  title: 'Eigenfinanzierung',
  description: 'Eigenfinanzierung einfach erklärt: Eigenkapital einsetzen, Einlagen und einbehaltene Gewinne verstehen sowie von Fremdfinanzierung unterscheiden.',
  seo: {
    title: 'Eigenfinanzierung einfach erklärt | Belege24',
    description: 'Erfahre, was Eigenfinanzierung ist, wie Einlagen und einbehaltene Gewinne wirken und wie sie sich von einem Bankdarlehen unterscheidet.',
    canonicalPath: '/wissen/eigenfinanzierung',
  },
  article: {
    intro: 'Bei der Eigenfinanzierung stellt das Unternehmen Kapital bereit, das wirtschaftlich den Eigentümern oder Gesellschaftern zugeordnet ist. Sie kann die Kapitalbasis stärken, ersetzt aber nicht die Prüfung, ob die verfügbaren Mittel für das Vorhaben ausreichen.',
    sections: [
      {
        heading: 'Was ist Eigenfinanzierung?',
        paragraphs: [
          [
            'Eigenfinanzierung bedeutet, dass ein Unternehmen mit ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ' finanziert wird. Das Kapital stammt nicht von einem Gläubiger, der eine feste Rückzahlung erwartet, sondern von den Eigentümern, Gesellschaftern oder aus im Unternehmen belassenen Gewinnen.',
          ],
          'Eigenfinanzierung beschreibt damit die Herkunft und Zuordnung des Kapitals. Sie ist nicht gleichbedeutend mit einem bestimmten Kontostand: Das Kapital kann zum Beispiel bereits in Maschinen, Waren oder Forderungen gebunden sein.',
        ],
      },
      {
        heading: 'Woher kann Eigenkapital kommen?',
        paragraphs: [
          'Bei der Außenfinanzierung kann Eigenkapital durch Einlagen der bisherigen Eigentümer oder durch Beteiligungskapital neuer Gesellschafter entstehen. Ob und welche Mitspracherechte damit verbunden sind, hängt von Rechtsform und Vereinbarung ab.',
          'Innenfinanzierung kann entstehen, wenn erwirtschaftete Gewinne im Unternehmen bleiben. Diese Selbstfinanzierung erhöht bei sonst gleichen Umständen die Eigenkapitalbasis, ohne dass neues Kapital von außen zugeführt wird.',
          'Die konkrete buchhalterische und rechtliche Behandlung von Einlagen, Beteiligungen und Gewinnverwendung richtet sich nach Rechtsform und Einzelfall. Für die Grundabgrenzung hilft die Seite zu Eigenkapital und Fremdkapital.',
        ],
      },
      {
        heading: 'Eigenfinanzierung und Fremdfinanzierung unterscheiden',
        paragraphs: [
          'Bei der Fremdfinanzierung stellt ein Gläubiger Kapital bereit, zum Beispiel über ein Darlehen. In der Regel bestehen dafür vereinbarte Rückzahlungs-, Zins- oder Tilgungspflichten. Eigenfinanzierung hat typischerweise keine vergleichbare feste Rückzahlung an einen Gläubiger.',
          'Das bedeutet nicht, dass Eigenfinanzierung kostenlos oder immer vorteilhaft ist. Eigentümer binden eigenes Kapital im Unternehmen und erwarten häufig eine angemessene Entwicklung ihrer Beteiligung. Welche Finanzierungsform passt, hängt unter anderem von Investition, Liquidität, Risiko und Gestaltungsmöglichkeiten ab.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Gesellschaftereinlage oder Bankdarlehen',
            paragraphs: [
              'Für eine neue Maschine werden 30.000 Euro benötigt. Bei einer Gesellschaftereinlage steigt grundsätzlich das Eigenkapital; eine feste Tilgungsrate gegenüber einer Bank entsteht dadurch nicht.',
              'Bei einem Bankdarlehen steigt dagegen das Fremdkapital. Zinsen und Tilgungen müssen nach der Vereinbarung in die Liquiditätsplanung einbezogen werden. Beide Varianten können sinnvoll sein, haben aber unterschiedliche Folgen für Kapitalstruktur und Zahlungsströme.',
            ],
            effects: [
              'Einlage: stärkt bei sonst gleichen Umständen die Eigenkapitalbasis.',
              'Darlehen: schafft zusätzliches Kapital, aber auch Rückzahlungs- und häufig Zinsverpflichtungen.',
            ],
          },
        ],
      },
      {
        heading: 'Vorteile und Grenzen',
        paragraphs: [
          'Eigenfinanzierung kann die Unabhängigkeit von Gläubigern erhöhen, weil keine feste Tilgung gegenüber einer Bank vereinbart wird. Eine stärkere Eigenkapitalbasis kann außerdem die finanzielle Stabilität und den Spielraum für spätere Finanzierungen verbessern.',
          'Gleichzeitig ist Eigenkapital nicht unbegrenzt verfügbar. Eigentümer müssen Mittel bereitstellen oder Gewinne im Unternehmen lassen. Kommen neue Gesellschafter hinzu, können Beteiligungs- und Mitspracherechte entstehen. Diese Folgen sollten vor einer Entscheidung klar geregelt sein.',
        ],
      },
      {
        heading: 'Wirkung auf Eigenkapitalquote und Finanzierungsspielraum',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'eigenkapitalquote', text: 'Eigenkapitalquote' },
            ' zeigt, welcher Anteil des Gesamtkapitals durch Eigenkapital finanziert ist. Erhöht sich das Eigenkapital bei sonst gleichen Umständen, kann die Quote steigen.',
          ],
          'Die Kennzahl allein sagt jedoch nicht, ob ein Unternehmen ausreichend liquide oder dauerhaft gut finanziert ist. Für den Finanzierungsspielraum sind auch Ertragskraft, Sicherheiten, bestehende Verpflichtungen, Zahlungsströme und das konkrete Vorhaben wichtig.',
        ],
      },
      {
        heading: 'Wann wird Eigenfinanzierung genutzt?',
        paragraphs: [
          'Typische Situationen sind die Gründung eines Unternehmens, eine Kapitalerhöhung durch Gesellschafter, die Finanzierung eines Wachstumsprojekts oder das bewusste Einbehalten von Gewinnen für künftige Anschaffungen.',
          'In der Praxis werden Eigen- und Fremdfinanzierung häufig kombiniert. Eine passende Mischung hängt davon ab, wie planbar Einnahmen sind, wie hoch das Risiko des Vorhabens ist und welche Zahlungsbelastungen das Unternehmen tragen kann.',
        ],
      },
      {
        heading: 'Typische Missverständnisse',
        paragraphs: [
          'Eigenfinanzierung bedeutet nicht automatisch, dass das Unternehmen sofort mehr frei verfügbares Geld auf dem Konto hat. Entscheidend ist, wann das Kapital zufließt und wofür es verwendet wird.',
          'Auch eine hohe Eigenkapitalquote ist kein pauschaler Beweis für eine gute Finanzierung. Sie sollte immer zusammen mit Liquidität, Rentabilität und den konkreten Anforderungen des Unternehmens betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eigenfinanzierung nutzt Kapital, das wirtschaftlich den Eigentümern oder Gesellschaftern zugeordnet ist.',
    'Eigenkapital kann durch Einlagen, Beteiligungskapital oder im Unternehmen belassene Gewinne entstehen.',
    'Eine feste Rückzahlung an einen Gläubiger ist bei Eigenfinanzierung typischerweise nicht vorgesehen.',
    'Neue Gesellschafter können je nach Rechtsform und Vereinbarung Mitspracherechte erhalten.',
    'Mehr Eigenkapital kann bei sonst gleichen Umständen die Eigenkapitalquote erhöhen.',
    'Für die Entscheidung sind zusätzlich Liquidität, Risiko, Zahlungsströme und Finanzierungsspielraum wichtig.',
  ],
  commonMistakes: [
    'Eigenkapital mit frei verfügbarem Bankguthaben gleichsetzen.',
    'eine Gesellschaftereinlage wie einen Ertrag behandeln.',
    'Eigenfinanzierung pauschal als kostenlos ansehen.',
    'Mitspracherechte oder Beteiligungsverhältnisse neuer Gesellschafter nicht vorab regeln.',
    'Eigenkapitalquote ohne Liquidität und bestehende Verpflichtungen bewerten.',
    'Eigen- und Fremdfinanzierung als zwingende Gegensätze statt als mögliche Kombination betrachten.',
  ],
  faqs: [
    {
      question: 'Was ist Eigenfinanzierung einfach erklärt?',
      answer: 'Bei der Eigenfinanzierung wird ein Unternehmen mit Kapital der Eigentümer, Gesellschafter oder mit im Unternehmen belassenen Gewinnen finanziert.',
    },
    {
      question: 'Ist eine Gesellschaftereinlage Eigenfinanzierung?',
      answer: 'Grundsätzlich ja. Eine Einlage kann das Eigenkapital erhöhen. Die genaue Ausgestaltung hängt von Rechtsform und Vereinbarung ab.',
    },
    {
      question: 'Ist ein Bankdarlehen Eigenfinanzierung?',
      answer: 'Nein. Ein Bankdarlehen ist grundsätzlich Fremdfinanzierung, weil das Kapital nach den vereinbarten Bedingungen zurückzuzahlen ist.',
    },
    {
      question: 'Was ist Selbstfinanzierung?',
      answer: 'Selbstfinanzierung bedeutet grundsätzlich, dass erwirtschaftete Gewinne im Unternehmen bleiben und dadurch die Eigenkapitalbasis stärken können.',
    },
    {
      question: 'Verbessert Eigenfinanzierung immer den Finanzierungsspielraum?',
      answer: 'Sie kann die Kapitalbasis stärken. Ob sich der Finanzierungsspielraum tatsächlich verbessert, hängt aber auch von Liquidität, Ertragskraft, Sicherheiten und dem jeweiligen Vorhaben ab.',
    },
  ],
  related: [
    'finanzierung-investition',
    'eigenkapital-fremdkapital',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default eigenfinanzierung;
