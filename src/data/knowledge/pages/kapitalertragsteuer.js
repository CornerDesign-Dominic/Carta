import { defaultDisclaimer } from '../shared.js';

const kapitalertragsteuer = {
  slug: 'kapitalertragsteuer',
  category: 'Steuern',
  title: 'Kapitalertragsteuer',
  description: 'Kapitalertragsteuer einfach erklärt: Abgeltungsteuer, Zinsen, Dividenden, Sparer-Pauschbetrag, Freistellungsauftrag und Steuererklärung.',
  seo: {
    title: 'Kapitalertragsteuer einfach erklärt | Belege24',
    description: 'Erfahre, wann Kapitalertragsteuer anfällt, wie Abgeltungsteuer und Freistellungsauftrag funktionieren und was bei privaten oder betrieblichen Kapitalerträgen gilt.',
    canonicalPath: '/wissen/kapitalertragsteuer',
  },
  article: {
    intro: 'Die Kapitalertragsteuer ist eine Form des Steuerabzugs auf bestimmte Kapitalerträge. Bei privaten Kapitalanlagen wird sie häufig direkt von der auszahlenden Stelle einbehalten; je nach Fall können trotzdem weitere Angaben in der Steuererklärung nötig sein.',
    sections: [
      {
        heading: 'Was ist Kapitalertragsteuer?',
        paragraphs: [
          'Kapitalertragsteuer ist Einkommensteuer, die bei bestimmten Kapitalerträgen direkt an der Quelle einbehalten wird. Die Steuer entsteht grundsätzlich, wenn der Kapitalertrag dem Gläubiger zufließt.',
          'Sie betrifft vor allem private Kapitalerträge. Ob tatsächlich ein Steuerabzug vorgenommen wird und ob dieser die Steuer abschließend abgilt, hängt von Art des Ertrags, der auszahlenden Stelle und den persönlichen Verhältnissen ab.',
        ],
      },
      {
        heading: 'Welche Kapitalerträge können betroffen sein?',
        paragraphs: [
          [
            'Typische ',
            { type: 'glossary', id: 'kapitalertrag', text: 'Kapitalerträge' },
          ' sind Zinsen, ',
            { type: 'glossary', id: 'dividende', text: 'Dividenden' },
            ' und bestimmte Gewinne aus der Veräußerung von Kapitalanlagen. Das Gesetz enthält darüber hinaus weitere Arten von Kapitalerträgen.',
          ],
          'Nicht jeder Ertrag aus einer Geldanlage wird gleich behandelt. Entscheidend sind die konkrete Anlage, der Zeitpunkt, die Art der Auszahlung und weitere gesetzliche Voraussetzungen.',
        ],
      },
      {
        heading: 'Wie hängen Kapitalertragsteuer und Abgeltungsteuer zusammen?',
        paragraphs: [
          [
            'Bei privaten Kapitalerträgen wird häufig von ',
            { type: 'glossary', id: 'abgeltungsteuer', text: 'Abgeltungsteuer' },
            ' gesprochen. Gemeint ist der besondere Steuertarif von grundsätzlich 25 Prozent für Kapitalerträge, die nicht zu anderen Einkunftsarten gehören.',
          ],
          'Die Kapitalertragsteuer ist dabei das Verfahren, mit dem die Steuer häufig direkt einbehalten wird. Der einbehaltene Betrag kann die Einkommensteuer auf diese Erträge grundsätzlich abgelten, aber es gibt gesetzliche Ausnahmen und Möglichkeiten zur Veranlagung.',
        ],
      },
      {
        heading: 'Wer behält die Steuer ein und führt sie ab?',
        paragraphs: [
          'Bei vielen inländischen Kapitalerträgen übernimmt die auszahlende Stelle den Steuerabzug. Das ist häufig eine Bank, ein Finanzdienstleistungs- oder Wertpapierinstitut. Je nach Art des Kapitalertrags kann auch der Schuldner des Ertrags zum Abzug verpflichtet sein.',
          'Für dich erscheint der Abzug typischerweise in der Abrechnung oder Steuerbescheinigung. Bei ausländischen Banken oder anderen Erträgen ohne inländische auszahlende Stelle erfolgt ein solcher Abzug nicht zwingend.',
        ],
      },
      {
        heading: 'Sparer-Pauschbetrag und Freistellungsauftrag',
        paragraphs: [
          [
            'Bei privaten Einkünften aus Kapitalvermögen berücksichtigt das Gesetz einen ',
            { type: 'glossary', id: 'sparer-pauschbetrag', text: 'Sparer-Pauschbetrag' },
            ' von derzeit 1.000 Euro; bei zusammen veranlagten Ehegatten beträgt er 2.000 Euro. Tatsächliche Werbungskosten können daneben grundsätzlich nicht zusätzlich abgezogen werden.',
          ],
          [
            'Mit einem ',
            { type: 'glossary', id: 'freistellungsauftrag', text: 'Freistellungsauftrag' },
            ' teilst du der auszahlenden Stelle mit, in welcher Höhe sie den Pauschbetrag beim Steuerabzug berücksichtigen soll. Der Auftrag verhindert einen unnötigen Steuerabzug nur bis zur beantragten und verfügbaren Höhe.',
          ],
        ],
      },
      {
        heading: 'Was ist eine Nichtveranlagungs-Bescheinigung?',
        paragraphs: [
          'Eine Nichtveranlagungs-Bescheinigung wird vom zuständigen Wohnsitzfinanzamt ausgestellt, wenn die gesetzlichen Voraussetzungen vorliegen. Sie kann bei der auszahlenden Stelle vorgelegt werden, damit diese in den vorgesehenen Fällen keinen Steuerabzug vornimmt.',
          'Sie ist nicht dasselbe wie ein Freistellungsauftrag. Ob eine Nichtveranlagungs-Bescheinigung sinnvoll oder möglich ist, richtet sich nach deinen voraussichtlichen steuerlichen Verhältnissen.',
        ],
      },
      {
        heading: 'Solidaritätszuschlag und Kirchensteuer',
        paragraphs: [
          'Auf Kapitalertragsteuer kann zusätzlich Solidaritätszuschlag anfallen. Bei Kirchensteuerpflicht kann außerdem Kirchensteuer berücksichtigt werden. Die genaue Belastung hängt von den gesetzlichen Regeln und den persönlichen Merkmalen ab.',
          'Diese Zuschläge sind nicht Teil des Sparer-Pauschbetrags. Prüfe bei Bankabrechnungen deshalb getrennt, welcher Betrag auf Kapitalertragsteuer und welcher auf Zuschläge entfällt.',
        ],
      },
      {
        heading: 'Wann kann eine Steuererklärung trotzdem wichtig sein?',
        paragraphs: [
          'Eine Steuererklärung kann zum Beispiel relevant sein, wenn Kapitalerträge keinem inländischen Steuerabzug unterlagen, wenn du eine Erstattung beantragen möchtest oder wenn eine Günstigerprüfung in Betracht kommt.',
          'Auch bei mehreren Banken, Verlustverrechnungen, ausländischen Erträgen oder besonderen Beteiligungen können zusätzliche Angaben notwendig sein. Ob eine Erklärung erforderlich oder vorteilhaft ist, hängt vom Einzelfall ab.',
        ],
      },
      {
        heading: 'Kapitalerträge im Betriebsvermögen',
        paragraphs: [
          'Gehören Kapitalerträge zum Betriebsvermögen, werden sie steuerlich grundsätzlich den Einkünften des Betriebs zugeordnet. Für sie gilt das vereinfachte private Abgeltungsteuer-Verfahren in der Regel nicht.',
          'Die konkrete Behandlung kann je nach Rechtsform, Art der Beteiligung und Gewinnermittlung deutlich abweichen. Ein möglicher Steuerabzug kann dann unter Umständen auf die festzusetzende Einkommen- oder Körperschaftsteuer angerechnet werden.',
        ],
      },
      {
        heading: 'Typische Missverständnisse vermeiden',
        paragraphs: [
          'Verwechsle Kapitalertragsteuer nicht mit einer eigenständigen zusätzlichen Steuer neben der Einkommensteuer. Sie ist grundsätzlich ein Steuerabzug auf Kapitalerträge.',
          'Ein Freistellungsauftrag erhöht den Sparer-Pauschbetrag nicht und ersetzt keine Steuererklärung, wenn diese erforderlich ist. Behandle außerdem private Kapitalanlagen nicht automatisch wie Betriebsvermögen – und umgekehrt.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Kapitalertragsteuer ist ein Steuerabzug auf bestimmte Kapitalerträge',
    'Zinsen, Dividenden und bestimmte Veräußerungsgewinne können betroffen sein',
    'Bei privaten Kapitalerträgen gilt grundsätzlich ein besonderer Steuertarif von 25 Prozent',
    'Banken und andere auszahlende Stellen behalten die Steuer in vielen Fällen ein',
    'Der Sparer-Pauschbetrag beträgt derzeit 1.000 Euro, bei zusammen veranlagten Ehegatten 2.000 Euro',
    'Ein Freistellungsauftrag hilft, den Pauschbetrag bereits beim Steuerabzug zu berücksichtigen',
    'Solidaritätszuschlag und gegebenenfalls Kirchensteuer können zusätzlich anfallen',
    'Kapitalerträge im Betriebsvermögen werden grundsätzlich anders behandelt als private Kapitalerträge',
  ],
  commonMistakes: [
    'Kapitalertragsteuer mit einer zusätzlichen Steuer neben der Einkommensteuer verwechseln',
    'Freistellungsauftrag und Nichtveranlagungs-Bescheinigung gleichsetzen',
    'den Sparer-Pauschbetrag bei mehreren auszahlenden Stellen mehrfach vollständig einplanen',
    'einen Steuerabzug der Bank immer als endgültige Steuer behandeln',
    'ausländische Kapitalerträge ohne inländischen Steuerabzug nicht beachten',
    'private Kapitalerträge und Erträge im Betriebsvermögen gleich behandeln',
  ],
  faqs: [
    { question: 'Was ist Kapitalertragsteuer einfach erklärt?', answer: 'Kapitalertragsteuer ist Einkommensteuer, die bei bestimmten Kapitalerträgen direkt einbehalten wird. Das geschieht bei vielen inländischen Kapitalanlagen durch die auszahlende Stelle.' },
    { question: 'Wie hoch ist die Kapitalertragsteuer?', answer: 'Für viele private Kapitalerträge beträgt der Steuerabzug grundsätzlich 25 Prozent. Solidaritätszuschlag und gegebenenfalls Kirchensteuer können zusätzlich anfallen; gesetzliche Ausnahmen sind möglich.' },
    { question: 'Was ist der Unterschied zwischen Kapitalertragsteuer und Abgeltungsteuer?', answer: 'Kapitalertragsteuer bezeichnet den Steuerabzug an der Quelle. Abgeltungsteuer ist die übliche Bezeichnung für den besonderen Steuertarif auf viele private Kapitalerträge.' },
    { question: 'Was ist ein Freistellungsauftrag?', answer: 'Ein Freistellungsauftrag weist die Bank oder eine andere auszahlende Stelle an, den verfügbaren Sparer-Pauschbetrag beim Steuerabzug zu berücksichtigen.' },
    { question: 'Wann brauche ich eine Steuererklärung für Kapitalerträge?', answer: 'Sie kann zum Beispiel bei Erträgen ohne inländischen Steuerabzug, zur Erstattung oder für eine Günstigerprüfung relevant sein. Ob sie erforderlich ist, hängt von deinem Einzelfall ab.' },
    { question: 'Gilt die Abgeltungsteuer auch für Kapitalerträge im Betriebsvermögen?', answer: 'Kapitalerträge im Betriebsvermögen werden grundsätzlich den Einkünften des Betriebs zugeordnet. Deshalb gelten für sie regelmäßig andere Regeln als für private Kapitalerträge.' },
  ],
  related: ['steuern', 'einkommensteuer', 'solidaritaetszuschlag', 'kirchensteuer'],
  sources: [
    { label: '§ 20 EStG – Einkünfte aus Kapitalvermögen', url: 'https://www.gesetze-im-internet.de/estg/__20.html' },
    { label: '§ 32d EStG – Gesonderter Steuertarif für Einkünfte aus Kapitalvermögen', url: 'https://www.gesetze-im-internet.de/estg/__32d.html' },
    { label: '§ 43 EStG – Kapitalerträge mit Steuerabzug', url: 'https://www.gesetze-im-internet.de/estg/__43.html' },
    { label: '§ 44 EStG – Entrichtung der Kapitalertragsteuer', url: 'https://www.gesetze-im-internet.de/estg/__44.html' },
    { label: '§ 44a EStG – Abstandnahme vom Steuerabzug', url: 'https://www.gesetze-im-internet.de/estg/__44a.html' },
    { label: '§ 43a EStG – Bemessung der Kapitalertragsteuer', url: 'https://www.gesetze-im-internet.de/estg/__43a.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default kapitalertragsteuer;
