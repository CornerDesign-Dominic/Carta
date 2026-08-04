import { defaultDisclaimer } from '../shared.js';

const eigenbeleg = {
  slug: 'eigenbeleg',
  category: 'Belege',
  title: 'Eigenbeleg',
  description: 'Ein Eigenbeleg ist ein selbst erstellter Ersatzbeleg, wenn für eine betriebliche Ausgabe kein ursprünglicher Beleg vorhanden ist.',
  seo: {
    title: 'Eigenbeleg erstellen und richtig verwenden | Belege24',
    description: 'Was ist ein Eigenbeleg, wann darf er verwendet werden und welche Angaben muss er enthalten? Voraussetzungen, Grenzen und Beispiele einfach erklärt.',
    canonicalPath: '/wissen/eigenbeleg',
  },
  article: {
    intro: 'Ein Eigenbeleg ist ein selbst erstellter Ersatzbeleg für eine tatsächlich entstandene betriebliche Ausgabe, wenn kein externer Beleg vorhanden ist. Er soll den Geschäftsvorfall nachvollziehbar dokumentieren, ersetzt aber nicht in jedem Fall eine Rechnung oder Quittung des ursprünglichen Ausstellers.',
    sections: [
      {
        heading: 'Was ist ein Eigenbeleg?',
        paragraphs: [
          'Ein Eigenbeleg wird vom Unternehmen oder von der Person erstellt, die die Ausgabe getragen hat. Er kommt zum Einsatz, wenn kein Fremdbeleg vorhanden ist, etwa keine Rechnung, Quittung, kein Kassenbon, Ticket oder Gebührenbescheid.',
          'Er dokumentiert den Geschäftsvorfall für Buchhaltung und Aufzeichnungen. Er ist kein nachträglich vom Lieferanten ausgestellter Originalbeleg. Ob das Finanzamt ihn anerkennt, wird immer im Einzelfall entschieden.',
        ],
      },
      {
        heading: 'Wann kann ein Eigenbeleg verwendet werden?',
        paragraphs: [
          'Zuerst sollte immer versucht werden, beim Verkäufer oder Leistungserbringer eine Rechnungskopie oder einen Ersatzbeleg zu erhalten. Ist das nicht möglich, kann ein Eigenbeleg ausnahmsweise helfen, die Ausgabe zu dokumentieren.',
        ],
        list: [
          'Ein Kassenbon oder eine Quittung wurde verloren und kann nicht erneut beschafft werden.',
          'Ein Parkautomat oder ein anderer Automat hat keinen Beleg ausgegeben.',
          'Eine kleinere betriebliche Ausgabe wurde an einer Stelle bezahlt, die keinen Beleg ausstellt.',
          'Eine betriebliche Zahlung an eine Privatperson wurde geleistet und es liegt kein anderer Beleg vor.',
          'Betriebliche Münz-, Porto-, Telefon- oder Nebenkosten lassen sich anderweitig nachvollziehbar belegen.',
          'Die tatsächliche Ausgabe lässt sich zusätzlich durch Kontoauszug, Kartenabrechnung, E-Mail, Bestellung oder andere Unterlagen nachweisen.',
        ],
      },
      {
        heading: 'Typische Beispiele',
        paragraphs: [
          'Denkbar sind ein verlorener Parkschein, eine kleinere Barausgabe für betriebliches Material, Porto oder Automatengebühren ohne Beleg, kleinere betriebliche Auslagen, eine Zahlung an eine Privatperson oder Trinkgeld im betrieblichen Zusammenhang.',
          'In jedem dieser Fälle unterstützt der Eigenbeleg nur den Nachweis. Die Ausgabe muss tatsächlich angefallen und betrieblich veranlasst sein. Zahlungsnachweise und weitere Unterlagen machen den Vorgang deutlich belastbarer.',
        ],
      },
      {
        heading: 'Wann reicht ein Eigenbeleg nicht aus?',
        paragraphs: [
          'Ein Eigenbeleg macht private Ausgaben nicht zu Betriebsausgaben. Er darf weder für erfundene, geschätzte oder tatsächlich nicht geleistete Zahlungen noch zum bewussten Umgehen einer Rechnung verwendet werden.',
          'Es gibt keine allgemeine gesetzliche Betragsgrenze für Eigenbelege. Bei hohen, ungewöhnlichen oder schwer nachvollziehbaren Beträgen sind jedoch besonders aussagekräftige Nachweise nötig und das Risiko einer Nichtanerkennung steigt. Regelmäßig fehlende Belege können die Glaubwürdigkeit der Buchführung beeinträchtigen.',
          'Für Bewirtungen in einer Gaststätte ist grundsätzlich die Rechnung der Gaststätte erforderlich; ein Eigenbeleg allein reicht regelmäßig nicht aus. Auch für Spenden gelten besondere Nachweispflichten. Ein Eigenbeleg ersetzt weder eine erforderliche Zuwendungsbestätigung noch einen vorgeschriebenen Zahlungsnachweis.',
          'Steuerlich nicht abzugsfähige Ausgaben werden durch einen Eigenbeleg nicht abzugsfähig. Geldbußen, Ordnungsgelder oder Verwarnungsgelder können nicht allein durch einen Eigenbeleg als Betriebsausgabe behandelt werden. Angaben zu Tatsachen, Beträgen, Empfängern oder Ausgabengründen dürfen niemals falsch dargestellt werden.',
        ],
      },
      {
        heading: 'Welche Angaben sollte ein Eigenbeleg enthalten?',
        paragraphs: [
          'Je vollständiger und konkreter der Eigenbeleg ist, desto besser lässt sich die Ausgabe später nachvollziehen.',
        ],
        list: [
          'eindeutiger Titel „Eigenbeleg“',
          'Name und Anschrift des Unternehmens oder Ausstellers',
          'Datum der Ausgabe und Datum der Erstellung des Eigenbelegs',
          'Name und möglichst Anschrift des Zahlungsempfängers',
          'genaue Beschreibung der Ware, Leistung oder Ausgabe',
          'betrieblicher Anlass oder Verwendungszweck',
          'Netto-, Steuer- und Bruttobetrag, soweit diese Werte bekannt und nachvollziehbar sind',
          'tatsächlich gezahlter Gesamtbetrag und Zahlungsart',
          'Grund, warum kein Originalbeleg vorhanden ist',
          'vorhandene ergänzende Nachweise',
          'Name des Erstellers und optional eine Unterschrift',
        ],
        subsections: [
          {
            heading: 'Unterschrift',
            paragraphs: [
              'Eine Unterschrift ist nicht in jedem Fall gesetzlich zwingend vorgeschrieben. Sie erhöht aber die Nachvollziehbarkeit und Beweiskraft, besonders bei einem manuell erstellten Eigenbeleg.',
            ],
          },
        ],
      },
      {
        heading: 'Eigenbeleg und Vorsteuerabzug',
        paragraphs: [
          'Ein Eigenbeleg kann gegebenenfalls helfen, eine betrieblich veranlasste Ausgabe als Betriebsausgabe zu dokumentieren. Für den Vorsteuerabzug ist grundsätzlich jedoch eine ordnungsgemäße Rechnung des leistenden Unternehmers erforderlich.',
          'Ein selbst erstellter Eigenbeleg ist keine solche Rechnung. Daher darf aus einem Eigenbeleg grundsätzlich keine Vorsteuer abgezogen werden. Wird die Betriebsausgabe anerkannt, wird enthaltene Umsatzsteuer regelmäßig als Teil des Gesamtaufwands behandelt.',
          'Die Netto-, Umsatzsteuer- und Bruttodarstellung im Belege24-Generator kann zur transparenten Dokumentation genutzt werden. Sie begründet aber keinen Vorsteuerabzug. Buche keine Vorsteuer allein anhand eigener Schätzungen oder eines selbst eingetragenen Steuersatzes.',
        ],
      },
      {
        heading: 'Wie verbessert man die Nachweisbarkeit?',
        list: [
          'Eigenbeleg möglichst zeitnah erstellen.',
          'Die Ausgabe konkret statt nur mit allgemeinen Begriffen beschreiben.',
          'Den Grund für den fehlenden Originalbeleg angeben.',
          'Kontoauszug oder Kartenabrechnung beifügen.',
          'Bestellung, E-Mail, Buchungsbestätigung oder Schriftverkehr ergänzen.',
          'Fotos, Preislisten oder andere sinnvolle Unterlagen beifügen.',
          'Bei Barzahlungen Empfänger oder anwesende Personen dokumentieren.',
          'Möglichst eine Ersatzrechnung oder Belegkopie anfordern.',
          'Eigenbelege nur ausnahmsweise und nicht regelmäßig verwenden.',
        ],
      },
      {
        heading: 'Aufbewahrung und Buchhaltung',
        paragraphs: [
          'Bewahre den Eigenbeleg zusammen mit allen ergänzenden Nachweisen auf. Die Buchung muss eindeutig mit dem Beleg verknüpft werden können.',
          'Elektronisch erstellte Eigenbelege sollten unverändert und nachvollziehbar archiviert werden. Nachträgliche Änderungen müssen erkennbar oder dokumentiert sein. Beachte außerdem die für Buchungsbelege geltenden gesetzlichen Aufbewahrungsfristen.',
        ],
      },
    ],
  },
  generator: {
    label: 'Eigenbeleg erstellen',
    href: '/dokumente/eigenbeleg',
    text: 'Nutze unseren kostenlosen Generator, um einen Eigenbeleg nachvollziehbar im Browser zu erstellen. Kein Login oder Abo nötig.',
  },
  keyPoints: [
    'wird erstellt, wenn kein Fremdbeleg vorhanden ist',
    'dokumentiert eine tatsächlich entstandene betriebliche Ausgabe',
    'sollte nur ausnahmsweise verwendet werden',
    'muss vollständig und nachvollziehbar ausgefüllt werden',
    'berechtigt grundsätzlich nicht zum Vorsteuerabzug',
    'garantiert keine Anerkennung durch das Finanzamt',
  ],
  commonMistakes: [
    'zu ungenaue Beschreibung der Ausgabe',
    'fehlender Grund für den nicht vorhandenen Originalbeleg',
    'keine ergänzenden Zahlungsnachweise',
    'Eigenbelege werden regelmäßig statt ausnahmsweise verwendet',
    'Vorsteuer wird ohne ordnungsgemäße Rechnung abgezogen',
    'private oder nicht abzugsfähige Ausgaben werden eingetragen',
    'Beträge oder Empfänger werden nur geschätzt',
  ],
  faqs: [
    {
      question: 'Ist ein Eigenbeleg steuerlich gültig?',
      answer: 'Ein Eigenbeleg kann als Nachweis einer betrieblich veranlassten Ausgabe anerkannt werden. Es besteht jedoch kein automatischer Anspruch auf Anerkennung. Entscheidend sind die tatsächliche Ausgabe, die betriebliche Veranlassung und eine plausible Dokumentation.',
    },
    {
      question: 'Gibt es eine Höchstgrenze für Eigenbelege?',
      answer: 'Es gibt keine allgemeine gesetzliche Betragsgrenze für Eigenbelege. Bei höheren oder ungewöhnlichen Beträgen werden jedoch regelmäßig besonders aussagekräftige Nachweise benötigt und das Risiko einer Nichtanerkennung steigt.',
    },
    {
      question: 'Kann ich mit einem Eigenbeleg Vorsteuer abziehen?',
      answer: 'Grundsätzlich nein. Für den Vorsteuerabzug ist regelmäßig eine ordnungsgemäße Rechnung des leistenden Unternehmers erforderlich. Ein selbst erstellter Eigenbeleg ersetzt diese Rechnung nicht.',
    },
    {
      question: 'Muss ein Eigenbeleg unterschrieben werden?',
      answer: 'Eine Unterschrift verbessert die Nachvollziehbarkeit und Beweiskraft. Sie sollte insbesondere bei manuell erstellten Eigenbelegen vorgesehen werden. Die steuerliche Anerkennung hängt jedoch nicht allein von der Unterschrift ab.',
    },
    {
      question: 'Darf ich einen Eigenbeleg für eine Bewirtung erstellen?',
      answer: 'Ein Eigenbeleg allein reicht bei einer geschäftlichen Bewirtung regelmäßig nicht aus. Bei einer Bewirtung in einer Gaststätte muss grundsätzlich die Gaststättenrechnung vorhanden sein und um die erforderlichen Angaben zum Anlass und zu den Teilnehmern ergänzt werden.',
    },
    {
      question: 'Was mache ich, wenn ich einen Kassenbon verloren habe?',
      answer: 'Zuerst sollte beim Verkäufer eine Rechnungskopie oder ein Ersatzbeleg angefordert werden. Ist das nicht möglich, kann ein zeitnah erstellter Eigenbeleg zusammen mit Zahlungsnachweisen und weiteren Unterlagen die Ausgabe dokumentieren.',
    },
    {
      question: 'Darf ich den Betrag schätzen?',
      answer: 'Nein. Es dürfen nur tatsächlich entstandene und möglichst genau nachweisbare Beträge eingetragen werden. Eine freie Schätzung oder das Erfinden eines Betrags ist unzulässig.',
    },
  ],
  related: [
    'rechnung',
    'quittung',
    'gutschrift',
  ],
  sources: [
    {
      label: '§ 4 EStG – Betriebsausgaben und Abzugsbeschränkungen',
      url: 'https://www.gesetze-im-internet.de/estg/__4.html',
    },
    {
      label: '§ 15 UStG – Vorsteuerabzug',
      url: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html',
    },
    {
      label: 'BMF: Änderung der GoBD vom 11. März 2024',
      url: 'https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Weitere_Steuerthemen/Abgabenordnung/AO-Anwendungserlass/2024-03-11-aenderung-gobd.pdf?__blob=publicationFile&v=3',
    },
  ],
  updatedAt: '2026-08-04',
  reviewedAt: '2026-08-04',
  disclaimer: defaultDisclaimer,
};

export default eigenbeleg;
