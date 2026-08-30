import { defaultDisclaimer } from '../shared.js';

const jahresabschluss = {
  slug: 'jahresabschluss',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Jahresabschluss',
  description: 'Jahresabschluss einfach erklärt: Bestandteile, Ablauf, Bilanz, GuV, Inventur, Anhang, Lagebericht und Abgrenzung zur EÜR.',
  seo: {
    title: 'Jahresabschluss einfach erklärt | Belege24',
    description: 'Verstehe, was ein Jahresabschluss ist, wer ihn grundsätzlich erstellt, welche Bestandteile dazugehören und wie er mit Bilanz, GuV und EÜR zusammenhängt.',
    canonicalPath: '/wissen/jahresabschluss',
  },
  article: {
    intro: 'Der Jahresabschluss fasst die wirtschaftliche Lage und den Erfolg eines Unternehmens am Ende eines Geschäftsjahrs zusammen. Er baut auf der laufenden Buchführung auf und bildet für bilanzierende Unternehmen die Grundlage für Bilanz, GuV und weitere Abschlussangaben.',
    sections: [
      {
        heading: 'Was ist ein Jahresabschluss?',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'jahresabschluss', text: 'Jahresabschluss' },
            ' ist die geordnete Zusammenfassung der wirtschaftlichen Vorgänge eines Geschäftsjahrs. Er zeigt einerseits Vermögen, Eigenkapital und Schulden zu einem Stichtag und andererseits, ob im Geschäftsjahr Gewinn oder Verlust entstanden ist.',
          ],
          'Für bilanzierende Kaufleute bestehen die Grundbestandteile nach § 242 HGB aus Bilanz und Gewinn- und Verlustrechnung. Je nach Rechtsform, Größe und besonderen gesetzlichen Anforderungen kommen weitere Bestandteile hinzu. Der Jahresabschluss ist deshalb mehr als eine Steuererklärung und auch mehr als ein einfacher Überblick über Kontobewegungen.',
        ],
      },
      {
        heading: 'Welche Funktionen hat der Jahresabschluss?',
        paragraphs: [
          'Der Jahresabschluss dokumentiert die Vermögens-, Finanz- und Ertragslage zum Ende des Geschäftsjahrs. Er schafft eine nachvollziehbare Grundlage für Eigentümer, Geschäftsführung, Gläubiger, Banken, Finanzverwaltung und – soweit gesetzlich vorgesehen – die Öffentlichkeit.',
          'Er macht sichtbar, welche Vermögenswerte und Schulden bestehen, wie sich der Erfolg entwickelt hat und ob ein Jahresüberschuss oder Jahresfehlbetrag vorliegt. Außerdem dient er häufig als Ausgangspunkt für die steuerliche Gewinnermittlung und für Steuererklärungen; zusätzliche steuerliche Angaben oder Korrekturen können trotzdem erforderlich sein.',
        ],
      },
      {
        heading: 'Bilanz, GuV, Anhang und Lagebericht',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bilanz', text: 'Bilanz' },
            ' zeigt Vermögen, Eigenkapital und Schulden zu einem Stichtag. Die ',
            { type: 'glossary', id: 'guv', text: 'Gewinn- und Verlustrechnung (GuV)' },
            ' zeigt Aufwendungen und Erträge des Geschäftsjahrs und damit den Erfolg des Zeitraums.',
          ],
          [
            'Bei Kapitalgesellschaften erweitert der ',
            { type: 'glossary', id: 'anhang', text: 'Anhang' },
            ' Bilanz und GuV um Erläuterungen und vorgeschriebene Angaben. Der ',
            { type: 'glossary', id: 'lagebericht', text: 'Lagebericht' },
            ' erläutert den Geschäftsverlauf und die Lage des Unternehmens. Er ist nur für bestimmte Unternehmen relevant; kleine Kapitalgesellschaften müssen ihn grundsätzlich nicht aufstellen.',
          ],
          'Welche Unterlagen im konkreten Fall dazugehören, richtet sich insbesondere nach Rechtsform, Größe und Kapitalmarktorientierung. Diese Übersicht ersetzt keine Einzelfallprüfung.',
        ],
      },
      {
        heading: 'Wer muss grundsätzlich einen Jahresabschluss erstellen?',
        paragraphs: [
          'Kaufleute sind nach dem HGB grundsätzlich buchführungspflichtig und haben zum Ende eines Geschäftsjahrs Bilanz und GuV aufzustellen. Für bestimmte Einzelkaufleute kann eine handelsrechtliche Befreiung gelten, wenn die gesetzlichen Voraussetzungen erfüllt sind.',
          'Eine steuerliche Buchführungspflicht kann auch nach § 141 AO entstehen. Sie betrifft gewerbliche Unternehmer sowie Land- und Forstwirte, wenn die Finanzbehörde für den einzelnen Betrieb mehr als 800.000 Euro Gesamtumsatz oder mehr als 80.000 Euro Gewinn feststellt. Die Pflicht beginnt grundsätzlich mit dem Wirtschaftsjahr nach der entsprechenden Mitteilung des Finanzamts.',
          'Kapitalgesellschaften wie GmbH, UG und AG unterliegen zusätzlichen HGB-Vorschriften. Ob ein Betrieb einen Jahresabschluss erstellen muss oder eine EÜR verwenden kann, hängt daher nicht allein von seiner Größe, sondern auch von Rechtsform und konkreter Buchführungspflicht ab.',
        ],
      },
      {
        heading: 'Unterschied zwischen Jahresabschluss und EÜR',
        paragraphs: [
          'Die Einnahmenüberschussrechnung (EÜR) ist eine vereinfachte steuerliche Gewinnermittlung für Steuerpflichtige, die nicht gesetzlich zur Buchführung und zu regelmäßigen Abschlüssen verpflichtet sind und auch tatsächlich keine Bücher führen und Abschlüsse machen. Sie stellt Betriebseinnahmen und Betriebsausgaben grundsätzlich nach Zahlungszeitpunkten gegenüber.',
          'Der Jahresabschluss bei Bilanzierung arbeitet dagegen mit Beständen und periodengerechter Abgrenzung. Forderungen, Verbindlichkeiten, Abschreibungen, Rückstellungen und Rechnungsabgrenzungen können berücksichtigt werden, auch wenn die Zahlung nicht im selben Jahr erfolgt. Deshalb ersetzen sich EÜR und Jahresabschluss nicht gegenseitig.',
        ],
      },
      {
        heading: 'Inventur und Abschlussarbeiten als Grundlage',
        paragraphs: [
          'Die Inventur stellt fest, welche Vermögensgegenstände und Schulden zum Abschlussstichtag vorhanden sind. Das daraus entstehende Inventar liefert eine wichtige Grundlage für die Werte in der Bilanz. Es hilft insbesondere dabei, Lagerbestände, Forderungen, Verbindlichkeiten und Anlagegüter nachvollziehbar zu erfassen.',
          'Danach werden die Konten abgestimmt und Abschlussbuchungen vorbereitet. Dazu können beispielsweise die Erfassung von Abschreibungen, die Bewertung offener Forderungen und Verbindlichkeiten sowie die Prüfung von Abgrenzungen gehören. Die konkrete Umsetzung richtet sich nach den gesetzlichen Vorgaben und den Verhältnissen des Unternehmens.',
        ],
        exampleCards: [
          {
            title: 'Vereinfachter Ablauf zum Jahresabschluss',
            paragraphs: [
              'Schritt 1: Inventur – vorhandene Vermögenswerte und Schulden werden aufgenommen und das Inventar wird erstellt.',
              'Schritt 2: Abschlussbuchungen – Konten werden abgestimmt; notwendige Wertansätze und periodengerechte Zuordnungen werden geprüft.',
              'Schritt 3: Bilanz + GuV – Bestandskonten fließen in die Bilanz, Erfolgskonten in die GuV ein.',
              'Schritt 4: Jahresabschluss – Bilanz und GuV bilden zusammen den Jahresabschluss; je nach Unternehmen kommen Anhang, Lagebericht oder weitere Schritte hinzu.',
            ],
            effects: [
              'Ablauf: Inventur → Abschlussbuchungen → Bilanz + GuV → Jahresabschluss.',
              'Ziel: Die wirtschaftliche Lage und der Erfolg des abgelaufenen Geschäftsjahrs werden nachvollziehbar dargestellt.',
            ],
          },
        ],
      },
      {
        heading: 'Abschreibungen, Rückstellungen und Abgrenzungen',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'abschreibung', text: 'Abschreibung' },
            ' verteilt bei zeitlich begrenzt nutzbaren Anlagegütern den Wertverzehr grundsätzlich über die Nutzungsdauer. Sie beeinflusst die GuV und den Wert des Vermögens in der Bilanz.',
          ],
          [
            'Eine ',
            { type: 'glossary', id: 'rueckstellung', text: 'Rückstellung' },
            ' berücksichtigt bestimmte ungewisse Verpflichtungen oder drohende Verluste, soweit die gesetzlichen Voraussetzungen vorliegen. Die ',
            { type: 'glossary', id: 'rechnungsabgrenzung', text: 'Rechnungsabgrenzung' },
            ' ordnet Einnahmen und Ausgaben dem wirtschaftlich passenden Zeitraum zu.',
          ],
          'Diese Themen können den Abschluss erheblich beeinflussen. Für konkrete Bewertungen, Fristen und Sonderfälle ist fachliche Unterstützung sinnvoll; diese Überblicksseite vertieft die Einzelregeln bewusst nicht.',
        ],
      },
      {
        heading: 'Forderungen, Verbindlichkeiten und Ergebnis zum Jahresende',
        paragraphs: [
          'Offene Forderungen und Verbindlichkeiten müssen zum Abschlussstichtag inhaltlich geprüft und den richtigen Bilanzposten zugeordnet werden. Eine offene Kundenrechnung ist beispielsweise nicht erst dann relevant, wenn sie bezahlt wird; sie kann bereits als Forderung in der Bilanz stehen und mit dem zugehörigen Ertrag in der GuV verbunden sein.',
          [
            'Die GuV ergibt am Ende einen ',
            { type: 'glossary', id: 'jahresueberschuss', text: 'Jahresüberschuss' },
            ' oder einen Jahresfehlbetrag. Dieses Ergebnis wirkt sich grundsätzlich auf das Eigenkapital aus, ist aber nicht mit dem Bankguthaben oder frei verfügbarem Geld gleichzusetzen.',
          ],
        ],
      },
      {
        heading: 'Aufstellung, Feststellung und Offenlegung',
        paragraphs: [
          'Die Aufstellung bedeutet, den Jahresabschluss innerhalb der einschlägigen Fristen zu erstellen. Bei Kapitalgesellschaften sind die gesetzlichen Vertreter dafür verantwortlich; für kleine Kapitalgesellschaften bestehen unter bestimmten Voraussetzungen Erleichterungen bei Bestandteilen und Aufstellungszeit.',
          'Die Feststellung ist die rechtlich vorgesehene Billigung des Jahresabschlusses durch das jeweils zuständige Organ oder die Gesellschafter. Wer zuständig ist und welche Fristen gelten, hängt von der Rechtsform und den jeweiligen gesellschaftsrechtlichen Regeln ab.',
          'Offenlegungspflichten betreffen insbesondere Kapitalgesellschaften und bestimmte Personenhandelsgesellschaften. Die Unterlagen werden, soweit erforderlich, elektronisch an das Unternehmensregister übermittelt. Umfang, Fristen und mögliche Erleichterungen richten sich nach Rechtsform, Unternehmensgröße und weiteren gesetzlichen Voraussetzungen.',
        ],
      },
      {
        heading: 'Typische Fehler und Missverständnisse',
        paragraphs: [
          'Verwechsle Jahresabschluss, Steuererklärung und EÜR nicht. Sie können miteinander zusammenhängen, erfüllen aber unterschiedliche Zwecke und folgen teilweise unterschiedlichen Regeln.',
          'Ein Jahresüberschuss ist nicht automatisch der Kontostand. Forderungen, Verbindlichkeiten, Abschreibungen, Rückstellungen und Abgrenzungen können Ergebnis und Liquidität auseinanderfallen lassen.',
          'Behandle die Inventur nicht als reine Warenzählung. Auch Schulden und nicht körperlich zählbare Werte sind für den Abschluss relevant.',
          'Lass Aufstellung, Feststellung und Offenlegung nicht ineinanderfallen. Welche Schritte notwendig sind, hängt von Rechtsform und Größe des Unternehmens ab.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'der Jahresabschluss fasst wirtschaftliche Lage und Erfolg am Ende des Geschäftsjahrs zusammen',
    'bei bilanzierenden Kaufleuten bilden Bilanz und GuV grundsätzlich den Jahresabschluss',
    'Kapitalgesellschaften ergänzen ihn regelmäßig um Anhang und je nach Größe um einen Lagebericht',
    'Inventur, abgestimmte Konten und Abschlussbuchungen sind wichtige Grundlagen',
    'Forderungen, Verbindlichkeiten, Abschreibungen, Rückstellungen und Abgrenzungen können das Ergebnis beeinflussen',
    'Aufstellung, Feststellung und Offenlegung hängen von Rechtsform, Größe und gesetzlichen Voraussetzungen ab',
  ],
  commonMistakes: [
    'Jahresabschluss, EÜR und Steuererklärung gleichsetzen',
    'Gewinn mit Bankguthaben oder verfügbarer Liquidität verwechseln',
    'Inventur nur als Warenzählung verstehen',
    'offene Forderungen und Verbindlichkeiten zum Jahresende übersehen',
    'Abschreibungen, Rückstellungen oder Abgrenzungen pauschal statt nach den geltenden Voraussetzungen behandeln',
    'Offenlegungspflichten ohne Prüfung von Rechtsform und Größe beurteilen',
  ],
  faqs: [
    {
      question: 'Was gehört zum Jahresabschluss?',
      answer: 'Bei bilanzierenden Kaufleuten gehören grundsätzlich Bilanz und GuV dazu. Je nach Rechtsform und Größe können etwa Anhang, Lagebericht oder weitere Angaben erforderlich sein.',
    },
    {
      question: 'Was ist der Unterschied zwischen Jahresabschluss und EÜR?',
      answer: 'Die EÜR ermittelt den Gewinn grundsätzlich nach Einnahmen und Ausgaben zu Zahlungszeitpunkten. Der Jahresabschluss bei Bilanzierung erfasst zusätzlich Bestände und periodengerechte Abgrenzungen.',
    },
    {
      question: 'Muss jedes Unternehmen einen Jahresabschluss erstellen?',
      answer: 'Nein. Die Pflicht hängt unter anderem von Rechtsform, Tätigkeit und gesetzlicher Buchführungspflicht ab. Wer nicht bilanzierungspflichtig ist, kann unter Voraussetzungen eine EÜR nutzen.',
    },
    {
      question: 'Warum ist die Inventur für den Jahresabschluss wichtig?',
      answer: 'Die Inventur ermittelt Vermögen und Schulden zum Abschlussstichtag. Das daraus entstehende Inventar liefert wichtige Werte für die Bilanz.',
    },
    {
      question: 'Was ist der Unterschied zwischen Aufstellung und Feststellung?',
      answer: 'Bei der Aufstellung wird der Jahresabschluss erstellt. Die Feststellung ist die rechtlich vorgesehene Billigung durch das zuständige Organ oder die Gesellschafter.',
    },
    {
      question: 'Muss ein Jahresabschluss offengelegt werden?',
      answer: 'Das betrifft insbesondere Kapitalgesellschaften und bestimmte Personenhandelsgesellschaften. Umfang, Fristen und Erleichterungen hängen von den gesetzlichen Voraussetzungen ab.',
    },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'bilanz',
    'guv',
    'inventur-inventar',
    'euer',
    'konten',
  ],
  sources: [
    { label: '§ 242 HGB – Pflicht zur Aufstellung von Bilanz und GuV', url: 'https://www.gesetze-im-internet.de/hgb/__242.html' },
    { label: '§ 249 HGB – Rückstellungen', url: 'https://www.gesetze-im-internet.de/hgb/__249.html' },
    { label: '§ 250 HGB – Rechnungsabgrenzungsposten', url: 'https://www.gesetze-im-internet.de/hgb/__250.html' },
    { label: '§ 253 HGB – Bewertung und Abschreibungen', url: 'https://www.gesetze-im-internet.de/hgb/__253.html' },
    { label: '§ 264 HGB – Bestandteile und Erleichterungen bei Kapitalgesellschaften', url: 'https://www.gesetze-im-internet.de/hgb/__264.html' },
    { label: '§ 325 HGB – Offenlegung über das Unternehmensregister', url: 'https://www.gesetze-im-internet.de/hgb/__325.html' },
    { label: '§ 5 EStG – Gewinn bei Kaufleuten und bestimmten Gewerbetreibenden', url: 'https://www.gesetze-im-internet.de/estg/__5.html' },
    { label: '§ 141 AO – Steuerliche Buchführungspflicht', url: 'https://www.gesetze-im-internet.de/ao_1977/__141.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default jahresabschluss;
