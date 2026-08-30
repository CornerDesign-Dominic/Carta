import { defaultDisclaimer } from '../shared.js';

const eigenkapitalFremdkapital = {
  slug: 'eigenkapital-fremdkapital',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Eigenkapital & Fremdkapital',
  description: 'Eigenkapital und Fremdkapital einfach erklärt: Kapitalherkunft, Darlehen, Verbindlichkeiten, Rückzahlung sowie die Eigenkapitalquote.',
  seo: {
    title: 'Eigenkapital & Fremdkapital erklärt | Belege24',
    description: 'Verstehe Eigen- und Fremdkapital, ihre Wirkung in der Bilanz und die Eigenkapitalquote mit einem einfachen Beispiel.',
    canonicalPath: '/wissen/eigenkapital-fremdkapital',
  },
  article: {
    intro: 'Eigenkapital und Fremdkapital zeigen, woher das Kapital eines Unternehmens stammt. Beide stehen auf der Passivseite der Bilanz, unterscheiden sich aber vor allem darin, wer das Kapital bereitstellt und ob eine Rückzahlungsverpflichtung besteht.',
    sections: [
      {
        heading: 'Was ist Eigenkapital?',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'eigenkapital', text: 'Eigenkapital' },
            ' ist der Teil des Vermögens, der wirtschaftlich den Eigentümern oder Gesellschaftern zugeordnet ist. Es kann aus Einlagen, einbehaltenen Gewinnen oder rechtsformspezifischen Kapitalbestandteilen entstehen.',
          ],
          'Eigenkapital ist nicht einfach ein separat vorhandener Geldbetrag auf dem Bankkonto. Es beschreibt die Finanzierung des Unternehmens nach Abzug der Schulden. Das Unternehmen kann mit Eigenkapital zum Beispiel Maschinen, Waren oder Bankguthaben finanzieren.',
          'Typische Beispiele sind die Einlage eines Einzelunternehmers, Kapital von Gesellschaftern oder Gewinne, die im Unternehmen bleiben statt ausgeschüttet oder entnommen zu werden.',
        ],
      },
      {
        heading: 'Was ist Fremdkapital?',
        paragraphs: [
          [
            'Zum ',
            { type: 'glossary', id: 'fremdkapital', text: 'Fremdkapital' },
            ' gehören Schulden gegenüber Dritten. Dazu zählen beispielsweise Bankdarlehen, offene Lieferantenrechnungen und andere ',
            { type: 'glossary', id: 'verbindlichkeit', text: 'Verbindlichkeiten' },
            '.',
          ],
          [
            'Ein ',
            { type: 'glossary', id: 'darlehen', text: 'Darlehen' },
            ' stellt Kapital bereit, das nach den vereinbarten Bedingungen grundsätzlich zurückzuzahlen ist. Häufig kommen Zinsen, Laufzeiten, Tilgungsraten oder Sicherheiten hinzu. Auch eine Lieferantenrechnung ist Fremdkapital, weil das Unternehmen den Betrag noch schuldet.',
          ],
          'Fremdkapital ist nicht automatisch problematisch. Es kann Investitionen oder den laufenden Betrieb ermöglichen. Wichtig sind unter anderem Zahlungsfähigkeit, Laufzeiten, Kosten und die Fähigkeit, die Verpflichtungen zu erfüllen.',
        ],
      },
      {
        heading: 'Eigenkapital vs. Fremdkapital',
        paragraphs: [
          'Beide Kapitalarten finanzieren die Vermögenswerte eines Unternehmens. Sie unterscheiden sich jedoch in Herkunft, rechtlicher Stellung und Rückzahlungsverpflichtung.',
        ],
        formulaCards: [
          {
            title: 'Eigenkapital vs. Fremdkapital',
            formula: 'Eigenkapital: Kapital der Eigentümer · keine typische feste Rückzahlungsverpflichtung\nFremdkapital: Kapital von Gläubigern · Rückzahlung nach den vereinbarten oder gesetzlichen Bedingungen',
            description: 'Die konkrete Ausgestaltung hängt von Rechtsform, Vertrag und Einzelfall ab.',
          },
        ],
      },
      {
        heading: 'Zusammenhang mit der Bilanz',
        paragraphs: [
          [
            'In der ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' stehen Eigenkapital und Fremdkapital auf der Passivseite. Sie erklären die Herkunft des Kapitals; die Aktivseite zeigt, wofür es eingesetzt wurde, etwa für Bankguthaben, Forderungen, Waren oder Maschinen.',
          ],
          'Nimmt ein Unternehmen ein Darlehen auf und erhält das Geld auf dem Bankkonto, steigen Bankguthaben und Fremdkapital gleichzeitig. Zahlt ein Gesellschafter Kapital ein, steigen Bankguthaben und Eigenkapital. Die Bilanz bleibt dabei ausgeglichen.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Darlehen finanziert eine Anschaffung',
            paragraphs: [
              'Ein Unternehmen nimmt ein Darlehen über 30.000 Euro auf. Das Geld geht auf dem Geschäftskonto ein.',
              'Schritt 1: Auf der Aktivseite steigt das Bankguthaben um 30.000 Euro.',
              'Schritt 2: Auf der Passivseite steigt das Fremdkapital in Form des Darlehens um 30.000 Euro.',
              'Schritt 3: Verwendet das Unternehmen das Geld später für eine Maschine, verändert sich zunächst nur die Zusammensetzung der Aktivseite. Die Darlehensschuld bleibt bestehen.',
            ],
            effects: [
              'Bilanz: Aktiv-Passiv-Mehrung bei Auszahlung des Darlehens.',
              'Erfolg: Die Darlehensauszahlung ist kein Ertrag.',
            ],
          },
          {
            title: 'Beispiel: Gewinn bleibt im Unternehmen',
            paragraphs: [
              'Ein Unternehmen erzielt einen Jahresüberschuss und verwendet ihn nicht für Entnahmen oder Ausschüttungen.',
              'Schritt 1: Der Gewinn erhöht im Grundsatz das Eigenkapital.',
              'Schritt 2: Die Mittel können im Unternehmen verbleiben, etwa als Bankguthaben oder zur Finanzierung künftiger Anschaffungen.',
              'Schritt 3: Ob tatsächlich ausreichend liquide Mittel vorhanden sind, zeigt der Gewinn allein nicht. Forderungen, Investitionen und andere Vorgänge können den Bankbestand beeinflussen.',
            ],
            effects: [
              'Eigenkapital: steigt durch den Jahresüberschuss bei sonst gleichen Umständen.',
              'Wichtig: Eigenkapital ist nicht gleichbedeutend mit verfügbarem Bargeld.',
            ],
          },
        ],
      },
      {
        heading: 'Gewinne, Verluste, Einlagen und Entnahmen',
        paragraphs: [
          'Gewinne erhöhen bei sonst gleichen Umständen das Eigenkapital, Verluste mindern es. Die genaue Darstellung kann nach Rechtsform und Ergebnisverwendung unterschiedlich sein; die Grundlogik bleibt: Der Erfolg einer Periode wirkt auf die Kapitalbasis des Unternehmens.',
          'Bei Einzelunternehmen und Personengesellschaften erhöhen Privateinlagen den Kapitalanteil, Privatentnahmen mindern ihn. Sie sind grundsätzlich nicht mit betrieblichem Ertrag oder Aufwand zu verwechseln. Kapitalgesellschaften behandeln Zahlungen an oder von Gesellschaftern nach anderen Regeln und führen keine Privatkonten wie ein Einzelunternehmen.',
          'Die Seiten zu Privatentnahmen und Privateinlagen sowie zu den jeweiligen Rechtsformen erklären diese Abgrenzungen weiterführend.',
        ],
      },
      {
        heading: 'Eigenkapitalquote als einfache Kennzahl',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'eigenkapitalquote', text: 'Eigenkapitalquote' },
            ' zeigt, welcher Anteil des Gesamtkapitals durch Eigenkapital finanziert ist. Sie ist eine Kennzahl zur Kapitalstruktur, aber kein vollständiges Urteil über die wirtschaftliche Lage.',
          ],
        ],
        formulaCards: [
          {
            title: 'Eigenkapitalquote',
            formula: 'Eigenkapitalquote = Eigenkapital / Gesamtkapital × 100',
            description: 'In einer Bilanz entspricht das Gesamtkapital der Bilanzsumme. Die Kennzahl sollte immer zusammen mit Branche, Geschäftsmodell und weiteren Daten betrachtet werden.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Eigenkapitalquote berechnen',
            paragraphs: [
              'Ein Unternehmen hat 40.000 Euro Eigenkapital und 100.000 Euro Gesamtkapital.',
              'Schritt 1: 40.000 Euro geteilt durch 100.000 Euro ergeben 0,40.',
              'Schritt 2: 0,40 mal 100 ergibt 40 Prozent.',
              'Die Eigenkapitalquote beträgt damit 40 Prozent.',
            ],
            effects: [
              'Kennzahl: 40 Prozent des Gesamtkapitals sind durch Eigenkapital finanziert.',
              'Einordnung: Ob dieser Wert passend ist, hängt vom Einzelfall ab.',
            ],
          },
        ],
      },
      {
        heading: 'Warum viel oder wenig Fremdkapital nicht allein entscheidet',
        paragraphs: [
          'Eine hohe Eigenkapitalquote kann ein Hinweis auf eine größere Unabhängigkeit von Gläubigern sein. Sie sagt aber nicht automatisch, dass ein Unternehmen liquide, profitabel oder risikarm ist. Auch das Kapital kann in schwer verkäuflichen Vermögenswerten gebunden sein.',
          'Fremdkapital kann sinnvoll sein, wenn es zu Investitionen, Zahlungsströmen und Rückzahlungsfähigkeit passt. Umgekehrt kann eine hohe Verschuldung belastend sein, wenn Zinsen oder Tilgungen die Zahlungsfähigkeit überfordern.',
          'Daher ist weder viel Fremdkapital pauschal schlecht noch viel Eigenkapital automatisch gut. Eine sinnvolle Finanzierung berücksichtigt unter anderem Branche, Planbarkeit der Einnahmen, Investitionen, Laufzeiten und Liquidität.',
        ],
      },
      {
        heading: 'Typische Missverständnisse',
        paragraphs: [
          'Eigenkapital ist kein Synonym für Kassenbestand oder Bankguthaben. Es ist eine Passivposition, die zeigt, welcher Teil des Vermögens nach Abzug der Schulden verbleibt.',
          'Eine Darlehensauszahlung ist keine Betriebseinnahme und kein Ertrag. Sie erhöht Bankguthaben und Fremdkapital gleichzeitig. Erst Zinsen können je nach Sachverhalt Aufwand auslösen.',
          'Eine offene Lieferantenrechnung ist ebenfalls Fremdkapital, auch wenn sie meist eine andere Laufzeit und Funktion hat als ein Bankdarlehen. Für die Beurteilung der Finanzierung sollten deshalb nicht nur langfristige Kredite betrachtet werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Eigenkapital und Fremdkapital stehen auf der Passivseite der Bilanz und zeigen die Kapitalherkunft.',
    'Eigenkapital ist wirtschaftlich den Eigentümern oder Gesellschaftern zugeordnet.',
    'Fremdkapital umfasst Schulden gegenüber Gläubigern, etwa Darlehen und Verbindlichkeiten.',
    'Gewinne und Einlagen können Eigenkapital erhöhen; Verluste und Entnahmen können es mindern.',
    'Die Eigenkapitalquote zeigt den Eigenkapitalanteil am Gesamtkapital.',
    'Eine sinnvolle Kapitalstruktur hängt von Branche, Geschäftsmodell, Liquidität und Rückzahlungsfähigkeit ab.',
  ],
  commonMistakes: [
    'Eigenkapital mit dem Bankguthaben oder Kassenbestand gleichsetzen',
    'Darlehensauszahlung als Betriebseinnahme oder Ertrag erfassen',
    'Lieferantenverbindlichkeiten nicht als Fremdkapital berücksichtigen',
    'Privatentnahmen als betriebliche Aufwendungen behandeln',
    'viel Fremdkapital pauschal als schlecht oder viel Eigenkapital pauschal als gut bewerten',
    'Eigenkapitalquote ohne Branche, Liquidität und weitere Kennzahlen beurteilen',
  ],
  faqs: [
    { question: 'Was ist Eigenkapital?', answer: 'Eigenkapital ist der Teil des Vermögens, der wirtschaftlich den Eigentümern oder Gesellschaftern zugeordnet ist und nach Abzug der Schulden verbleibt.' },
    { question: 'Was ist Fremdkapital?', answer: 'Fremdkapital umfasst Schulden gegenüber Dritten, zum Beispiel Darlehen, Lieferantenverbindlichkeiten oder andere Verpflichtungen.' },
    { question: 'Ist ein Darlehen Eigen- oder Fremdkapital?', answer: 'Ein Darlehen ist grundsätzlich Fremdkapital, weil es nach den vereinbarten Bedingungen zurückzuzahlen ist.' },
    { question: 'Wie verändern Gewinne das Eigenkapital?', answer: 'Ein Gewinn erhöht das Eigenkapital bei sonst gleichen Umständen, ein Verlust mindert es.' },
    { question: 'Was sagt die Eigenkapitalquote aus?', answer: 'Sie zeigt, welcher Anteil des Gesamtkapitals durch Eigenkapital finanziert ist. Für eine Bewertung müssen weitere Faktoren berücksichtigt werden.' },
    { question: 'Ist viel Fremdkapital immer schlecht?', answer: 'Nein. Fremdkapital kann sinnvoll sein, wenn Rückzahlung, Zinsen, Laufzeit und Zahlungsfähigkeit zum Unternehmen passen.' },
  ],
  related: [
    'bilanz',
    'privatentnahmen-privateinlagen',
    'finanzierung-investition',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default eigenkapitalFremdkapital;
