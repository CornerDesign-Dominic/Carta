import { defaultDisclaimer } from '../shared.js';

const innenAussenfinanzierung = {
  slug: 'innen-aussenfinanzierung',
  category: 'Finanzierung & Investition',
  title: 'Innen- & Außenfinanzierung',
  description: 'Innen- und Außenfinanzierung einfach erklärt: Mittelherkunft verstehen, von Eigen- und Fremdfinanzierung unterscheiden und typische Kombinationen einordnen.',
  seo: {
    title: 'Innen- & Außenfinanzierung erklärt | Belege24',
    description: 'Verstehe den Unterschied zwischen Innen- und Außenfinanzierung, typische Formen und die Kombination mit Eigen- und Fremdfinanzierung.',
    canonicalPath: '/wissen/innen-aussenfinanzierung',
  },
  article: {
    intro: 'Innen- und Außenfinanzierung beschreiben, woher einem Unternehmen Finanzierungsmittel zufließen. Die Einteilung ergänzt die Frage, ob es sich um Eigen- oder Fremdkapital handelt: Beide Perspektiven lassen sich miteinander kombinieren.',
    sections: [
      {
        heading: 'Was ist Innenfinanzierung?',
        paragraphs: [
          'Innenfinanzierung entsteht aus dem Unternehmen selbst. Die Mittel werden nicht neu von außen zugeführt, sondern entstehen oder bleiben im betrieblichen Prozess verfügbar.',
          'Ein typisches Beispiel ist die Selbstfinanzierung: Gewinne werden nicht entnommen oder ausgeschüttet, sondern bleiben im Unternehmen. Auch Abschreibungsgegenwerte können im laufenden Geschäft zu verfügbaren Mitteln beitragen, wenn die entsprechenden Umsätze eingehen. Die Abschreibung selbst ist dabei kein zusätzlicher Geldeingang.',
          [
            'Rückstellungen können ebenfalls eine Form der Innenfinanzierung sein, weil Mittel bis zur tatsächlichen Erfüllung der Verpflichtung im Unternehmen verbleiben. Eine ',
            { type: 'glossary', id: 'rueckstellung', text: 'Rückstellung' },
            ' ist jedoch in erster Linie eine bilanzielle Abbildung ungewisser Verpflichtungen – nicht frei verfügbares Kapital.',
          ],
        ],
      },
      {
        heading: 'Was ist Außenfinanzierung?',
        paragraphs: [
          'Außenfinanzierung liegt vor, wenn Kapital von außen in das Unternehmen gelangt. Das kann durch Eigentümer, Gesellschafter, Banken, andere Kreditgeber oder weitere Kapitalgeber geschehen.',
          [
            'Eine ',
            { type: 'glossary', id: 'einlage', text: 'Einlage' },
            ' oder Beteiligungskapital kann Eigenkapital erhöhen. Kredite oder Darlehen bringen dagegen Fremdkapital von außen in das Unternehmen. Ob neue Gesellschafter Mitspracherechte erhalten oder welche Rückzahlungspflichten bestehen, hängt von Rechtsform und Vereinbarung ab.',
          ],
        ],
      },
      {
        heading: 'Mittelherkunft ist das entscheidende Kriterium',
        paragraphs: [
          'Die Begriffe Innen- und Außenfinanzierung beantworten eine andere Frage als Eigen- und Fremdfinanzierung. Innen oder außen beschreibt die Mittelherkunft. Eigen oder fremd beschreibt, wem das Kapital wirtschaftlich zugeordnet ist und ob grundsätzlich eine Rückzahlungsverpflichtung besteht.',
          'Deshalb ist Innenfinanzierung nicht automatisch Eigenfinanzierung und Außenfinanzierung nicht automatisch Fremdfinanzierung. Erst beide Einordnungen zusammen zeigen, wie eine Finanzierungsform einzuordnen ist.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Innen- und Außenfinanzierung mit Eigen- und Fremdkapital',
            formula: 'Innen + Eigen: Selbstfinanzierung durch im Unternehmen belassene Gewinne\nInnen + Fremd: Finanzierungseffekt aus Rückstellungen\nAußen + Eigen: Einlagen oder Beteiligungskapital\nAußen + Fremd: Kredite, Darlehen oder Lieferantenkredite',
            description: 'Die Einordnung ist eine vereinfachte Grundsystematik. Die konkrete Ausgestaltung hängt von Rechtsform, Vertrag und Geschäftsvorfall ab.',
          },
        ],
      },
      {
        heading: 'Typische Formen im Überblick',
        paragraphs: [
          'Bei der Selbstfinanzierung erhöhen einbehaltene Gewinne bei sonst gleichen Umständen das Eigenkapital. Bei der Finanzierung aus Abschreibungsgegenwerten steht im Vordergrund, dass über Umsätze Mittel zurückfließen können, während die Abschreibung den Werteverzehr periodengerecht abbildet.',
          [
            'Außenfinanzierung kann als Eigenfinanzierung durch Kapital von Gesellschaftern erfolgen oder als Fremdfinanzierung durch ',
            { type: 'glossary', id: 'fremdkapital', text: 'Fremdkapital' },
            ' wie Bankkredite. Ein Unternehmen kann mehrere Formen parallel einsetzen.',
          ],
        ],
      },
      {
        heading: 'Warum die Kombination wichtig ist',
        paragraphs: [
          'Eine Einlage von Gesellschaftern ist außen zugeführt und zugleich Eigenfinanzierung. Ein Bankdarlehen ist außen zugeführt und zugleich Fremdfinanzierung. Einbehaltene Gewinne sind innen entstanden und zugleich Eigenfinanzierung.',
          'Diese Unterscheidung hilft bei der Planung: Sie zeigt, ob Mittel durch das Unternehmen selbst entstehen oder von außen kommen und welche Folgen sich für Kapitalstruktur, Rückzahlung und Beteiligung ergeben können.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: zwei Wege zur Finanzierung einer Maschine',
            paragraphs: [
              'Bleibt ein erwirtschafteter Gewinn im Unternehmen und wird später für eine Maschine eingesetzt, handelt es sich grundsätzlich um Innen- und Eigenfinanzierung.',
              'Zahlt ein Gesellschafter zusätzliches Kapital ein, ist das Außen- und Eigenfinanzierung. Wird die Maschine über ein Bankdarlehen bezahlt, ist das Außen- und Fremdfinanzierung.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Missverständnisse',
        paragraphs: [
          'Eine Abschreibung schafft nicht automatisch neues Geld. Entscheidend für die Liquidität sind unter anderem Umsätze, Einzahlungen und Auszahlungen. Die Finanzierung aus Abschreibungsgegenwerten ist daher keine zusätzliche Auszahlung durch die Abschreibung selbst.',
          'Rückstellungen sind nicht frei verwendbar, nur weil die Zahlung später fällig werden kann. Sie stehen einer bestehenden oder erwarteten Verpflichtung gegenüber. Auch einbehaltene Gewinne bedeuten nicht automatisch, dass derselbe Betrag als Bankguthaben verfügbar ist.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Innen- und Außenfinanzierung unterscheiden nach der Herkunft der Mittel.',
    'Eigen- und Fremdfinanzierung unterscheiden nach Kapitalzuordnung und Rückzahlungsverpflichtung.',
    'Selbstfinanzierung durch einbehaltene Gewinne ist grundsätzlich Innen- und Eigenfinanzierung.',
    'Einlagen und Beteiligungskapital sind typische Außen- und Eigenfinanzierungen.',
    'Kredite und Darlehen sind typische Außen- und Fremdfinanzierungen.',
    'Rückstellungen können einen Finanzierungseffekt haben, bleiben aber Verpflichtungen.',
  ],
  commonMistakes: [
    'Innenfinanzierung mit Eigenfinanzierung gleichsetzen.',
    'Außenfinanzierung automatisch als Fremdfinanzierung einordnen.',
    'Abschreibungen wie einen zusätzlichen Geldeingang behandeln.',
    'Rückstellungen als frei verfügbares Kapital ansehen.',
    'einbehaltene Gewinne mit einem gleich hohen Bankguthaben verwechseln.',
    'die Auswirkungen von Einlagen, Krediten und Beteiligungen auf Kapitalstruktur und Liquidität nicht getrennt betrachten.',
  ],
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen Innen- und Außenfinanzierung?',
      answer: 'Innenfinanzierung entsteht aus dem Unternehmen selbst. Außenfinanzierung bedeutet, dass Kapital von außen zufließt, etwa von Gesellschaftern oder Kreditgebern.',
    },
    {
      question: 'Ist eine Einlage Innen- oder Außenfinanzierung?',
      answer: 'Eine Einlage kommt von außen und ist daher grundsätzlich Außenfinanzierung. Sie kann zugleich Eigenfinanzierung sein.',
    },
    {
      question: 'Ist ein Bankdarlehen Außenfinanzierung?',
      answer: 'Ja. Ein Bankdarlehen bringt Kapital von außen in das Unternehmen und ist zugleich grundsätzlich Fremdfinanzierung.',
    },
    {
      question: 'Was bedeutet Selbstfinanzierung?',
      answer: 'Selbstfinanzierung bedeutet grundsätzlich, dass erwirtschaftete Gewinne im Unternehmen bleiben und dadurch die Eigenkapitalbasis stärken können.',
    },
    {
      question: 'Ist Abschreibung eine Innenfinanzierung?',
      answer: 'Die Abschreibung selbst ist kein Geldeingang. Im Zusammenhang mit Umsätzen kann sie jedoch einen Finanzierungseffekt haben, weil Mittel im Unternehmen zurückfließen können.',
    },
  ],
  related: [
    'finanzierung-investition',
    'eigenfinanzierung',
    'fremdfinanzierung',
    'eigenkapital-fremdkapital',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default innenAussenfinanzierung;
