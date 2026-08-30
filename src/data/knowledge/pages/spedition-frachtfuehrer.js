import { defaultDisclaimer } from '../shared.js';

const speditionFrachtfuehrer = {
  slug: 'spedition-frachtfuehrer',
  category: 'Supply Chain & Logistik',
  title: 'Spedition & Frachtführer – Unterschiede',
  description: 'Spediteur und Frachtführer einfach erklärt: Transport organisieren oder durchführen, Vertragsarten und gesetzliche Sonderfälle grundlegend unterscheiden.',
  seo: {
    title: 'Spediteur und Frachtführer: Unterschiede | Belege24',
    description: 'Erfahre, worin sich Spediteur und Frachtführer unterscheiden, was Speditions- und Frachtvertrag regeln und welche Sonderfälle das HGB kennt.',
    canonicalPath: '/wissen/spedition-frachtfuehrer',
  },
  article: {
    intro: 'Spediteur und Frachtführer übernehmen unterschiedliche Aufgaben im Transportgeschäft. Vereinfacht organisiert ein Spediteur die Versendung, während ein Frachtführer die Beförderung des Guts zum Bestimmungsort und die Ablieferung übernimmt.',
    sections: [
      {
        heading: 'Spediteur und Frachtführer unterscheiden',
        paragraphs: [
          [
            'Durch den ',
            { type: 'glossary', id: 'speditionsvertrag', text: 'Speditionsvertrag' },
            ' verpflichtet sich der ',
            { type: 'glossary', id: 'spediteur', text: 'Spediteur' },
            ', die Versendung eines Guts zu besorgen. Dazu kann gehören, einen passenden Frachtführer auszuwählen, den Transportweg abzustimmen, Übergaben zu organisieren und notwendige Informationen zu koordinieren.',
          ],
          [
            'Durch den ',
            { type: 'glossary', id: 'frachtvertrag', text: 'Frachtvertrag' },
            ' verpflichtet sich der ',
            { type: 'glossary', id: 'frachtfuehrer', text: 'Frachtführer' },
            ', das Gut zum Bestimmungsort zu befördern und dort abzuliefern. Die Rollen können in einer Lieferkette zusammenwirken, sind rechtlich aber nicht automatisch identisch.',
          ],
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Spediteur vs. Frachtführer',
            formula: 'Spediteur: Versendung besorgen und organisieren\nFrachtführer: Gut befördern und abliefern',
            description: 'Die konkrete Vertragsgestaltung und die tatsächlich übernommene Funktion sind entscheidend. Ein Unternehmen kann in bestimmten Fällen mehr als eine Rolle übernehmen.',
          },
        ],
      },
      {
        heading: 'Organisation und Durchführung des Transports',
        paragraphs: [
          'Ein Spediteur muss keinen eigenen Fuhrpark besitzen. Er kann die Beförderung durch andere Frachtführer organisieren und mit ihnen Verträge schließen. Seine Leistung liegt dann vor allem in Auswahl, Planung, Koordination und Organisation der Versendung.',
          'Ein Frachtführer kann den Transport mit eigenem Fuhrpark oder auf andere zulässige Weise durchführen. Für die Abgrenzung zählt nicht allein die Unternehmensbezeichnung, sondern welche Verpflichtung im konkreten Vertrag übernommen wird.',
          [
            'Die operative Planung von Strecken, Umschlag und Terminen ordnet die ',
            { type: 'link', href: '/wissen/transportlogistik', text: 'Transportlogistik' },
            ' ein. Sie erklärt Prozesse, nicht die rechtliche Vertragsrolle im Einzelfall.',
          ],
        ],
      },
      {
        heading: 'Selbsteintritt und Spedition zu festen Kosten',
        paragraphs: [
          'Ein Spediteur darf nach § 458 HGB die Beförderung durch Selbsteintritt selbst ausführen. Für die Beförderung hat er dann die Rechte und Pflichten eines Frachtführers oder Verfrachters. Die Rolle kann sich also für diesen Abschnitt verändern.',
          'Bei einer Spedition zu festen Kosten ist ein bestimmter Vergütungsbetrag vereinbart, der die Beförderungskosten einschließt. Nach § 459 HGB hat der Spediteur hinsichtlich der Beförderung ebenfalls die Rechte und Pflichten eines Frachtführers oder Verfrachters. Die genaue Einordnung hängt vom Vertrag ab.',
        ],
      },
      {
        heading: 'Haftung nur im Grundsatz',
        paragraphs: [
          'Haftungsfragen richten sich nach der jeweils übernommenen Rolle, dem Vertrag, den gesetzlichen Regeln und dem konkreten Schadensfall. Für den Frachtvertrag enthält das HGB Regelungen zur Beförderung und Ablieferung; bei Selbsteintritt oder festen Kosten gelten für die Beförderung besondere gesetzliche Folgen für den Spediteur.',
          'Ob und in welchem Umfang eine Haftung besteht, kann unter anderem von Schaden, Ursache, Güterart, Vereinbarungen, anwendbarem Recht und möglichen Haftungsbegrenzungen abhängen. Diese Seite erklärt deshalb keine Einzelfallhaftung und ersetzt keine rechtliche Beratung.',
        ],
      },
      {
        heading: 'Praxisbeispiele',
        paragraphs: [
          'Ein Unternehmen beauftragt eine Spedition, eine Palettensendung von Deutschland nach Italien zu versenden. Die Spedition plant Abholung, Hauptlauf, mögliche Umschläge und Zustellung und beauftragt für die einzelnen Abschnitte Frachtführer. Ihre Kernleistung ist die Besorgung der Versendung.',
        ],
        exampleCards: [
          {
            title: 'Frachtführer übernimmt die Beförderung',
            paragraphs: [
              'Ein Transportunternehmen übernimmt eine Sendung am Werk, fährt sie direkt zum Empfänger und liefert sie dort ab. Im Verhältnis zu diesem Transport ist es Frachtführer, weil es die Beförderung und Ablieferung übernommen hat.',
              'Führt eine Spedition denselben Transport im Selbsteintritt selbst durch, bleibt sie nicht nur bei der Organisation. Für die Beförderung gelten dann nach § 458 HGB die Rechte und Pflichten eines Frachtführers oder Verfrachters.',
            ],
            effects: [
              'Spedition ohne Selbsteintritt: Organisation der Versendung steht im Vordergrund.',
              'Frachtführer oder Spediteur im Selbsteintritt: Beförderung und Ablieferung stehen im Vordergrund.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Verwechslungen',
        paragraphs: [
          '„Spedition“ ist keine sichere Aussage darüber, ob ein Unternehmen den konkreten Transport selbst fährt. Eine Spedition kann ohne eigenen Fuhrpark organisieren oder in bestimmten Fällen selbst befördern.',
          'Auch ein fester Preis bedeutet nicht, dass alle Fragen pauschal beantwortet sind. Für die rechtliche Einordnung sind Vertragsinhalt und übernommene Funktionen wichtig.',
          'Bei Schäden oder Verzögerungen sollte nicht allein auf die Bezeichnung in einer E-Mail oder Rechnung abgestellt werden. Für die konkrete Bewertung sind Vertrag, Abläufe und anwendbare Vorschriften maßgeblich.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Ein Spediteur besorgt die Versendung; ein Frachtführer befördert das Gut und liefert es ab.',
    'Eine Spedition braucht keinen eigenen Fuhrpark, um Versendungen zu organisieren.',
    'Speditionsvertrag und Frachtvertrag sind unterschiedliche gesetzliche Vertragstypen.',
    'Beim Selbsteintritt führt der Spediteur die Beförderung selbst aus und hat dafür gesetzlich die Rechte und Pflichten eines Frachtführers oder Verfrachters.',
    'Bei Spedition zu festen Kosten gelten für die Beförderung ebenfalls gesetzliche Folgen nach § 459 HGB.',
    'Haftung hängt vom Vertrag, der Rolle und dem Einzelfall ab und sollte bei konkreten Streitfällen fachlich geprüft werden.',
  ],
  commonMistakes: [
    'Spedition und Frachtführer allein wegen der Unternehmensbezeichnung gleichsetzen',
    'annehmen, dass eine Spedition zwingend einen eigenen Fuhrpark braucht',
    'Selbsteintritt oder feste Kosten ohne Prüfung des Vertrags als normale Organisationsleistung behandeln',
    'Haftungsfragen ohne Blick auf Vertrag, Schaden, Rolle und anwendbares Recht pauschal beantworten',
  ],
  faqs: [
    { question: 'Was macht ein Spediteur?', answer: 'Ein Spediteur verpflichtet sich im Speditionsvertrag, die Versendung eines Guts zu besorgen, etwa durch Planung, Auswahl und Koordination der Beförderung.' },
    { question: 'Was macht ein Frachtführer?', answer: 'Ein Frachtführer verpflichtet sich im Frachtvertrag, das Gut zum Bestimmungsort zu befördern und dort abzuliefern.' },
    { question: 'Braucht eine Spedition einen eigenen Fuhrpark?', answer: 'Nein. Sie kann die Versendung durch andere Frachtführer organisieren. Ob sie selbst befördert, richtet sich nach dem konkreten Fall.' },
    { question: 'Was ist Selbsteintritt?', answer: 'Beim Selbsteintritt führt der Spediteur die Beförderung selbst aus. Für diese Beförderung hat er nach § 458 HGB die Rechte und Pflichten eines Frachtführers oder Verfrachters.' },
    { question: 'Was ist eine Fixkostenspedition?', answer: 'Bei einer Spedition zu festen Kosten ist ein bestimmter Betrag vereinbart, der Beförderungskosten einschließt. § 459 HGB regelt dafür besondere Folgen hinsichtlich der Beförderung.' },
  ],
  related: ['transportlogistik', 'beschaffungslogistik', 'distributionslogistik', 'grundlagen-logistik'],
  sources: [
    { label: '§ 407 HGB – Frachtvertrag', url: 'https://www.gesetze-im-internet.de/hgb/__407.html' },
    { label: '§ 453 HGB – Speditionsvertrag', url: 'https://www.gesetze-im-internet.de/hgb/__453.html' },
    { label: '§ 458 HGB – Selbsteintritt', url: 'https://www.gesetze-im-internet.de/hgb/__458.html' },
    { label: '§ 459 HGB – Spedition zu festen Kosten', url: 'https://www.gesetze-im-internet.de/hgb/__459.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default speditionFrachtfuehrer;
