import { defaultDisclaimer } from '../shared.js';

const bestellpunktverfahren = {
  slug: 'bestellpunktverfahren',
  category: 'Supply Chain & Logistik',
  title: 'Bestellpunktverfahren',
  description: 'Bestellpunktverfahren einfach erklärt: Bestände laufend überwachen, am Meldebestand bestellen und Lieferzeiten sowie Sicherheitsbestand passend berücksichtigen.',
  seo: {
    title: 'Bestellpunktverfahren einfach erklärt | Belege24',
    description: 'Erfahre, wie das Bestellpunktverfahren mit Meldebestand, Sicherheitsbestand, Wiederbeschaffungszeit und passenden Bestellmengen funktioniert.',
    canonicalPath: '/wissen/bestellpunktverfahren',
  },
  article: {
    intro: 'Beim Bestellpunktverfahren wird eine Bestellung ausgelöst, sobald der verfügbare Bestand einen festgelegten Meldebestand erreicht oder unterschreitet. Der Meldebestand soll den erwarteten Verbrauch bis zur Wiederbeschaffung abdecken und enthält häufig zusätzlich eine Reserve für Unsicherheit.',
    sections: [
      {
        heading: 'Was ist das Bestellpunktverfahren?',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'bestellpunktverfahren', text: 'Bestellpunktverfahren' },
            ' überwacht den Bestand eines Artikels laufend oder sehr häufig. Anders als beim Bestellrhythmus wird nicht erst an einem festen Kalendertag geprüft: Der Bestand selbst ist der Auslöser für die Bestellung.',
          ],
          'Erreicht der frei verfügbare Bestand den Meldebestand, wird die Bestellung ausgelöst oder vorbereitet. Bis die Ware verfügbar ist, wird der Bestand weiter verbraucht. Die Bestandsgrenze muss deshalb zu Verbrauch, Wiederbeschaffungszeit und Risiko passen.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Bestellung am Bestellpunkt auslösen',
            formula: 'Bestand sinkt → Meldebestand erreicht → Bestellung → Wiederbeschaffung',
            description: 'Während der Wiederbeschaffungszeit wird der vorhandene Bestand weiter benötigt. Deshalb darf der Meldebestand nicht mit der tatsächlich gewünschten Reserve verwechselt werden.',
          },
        ],
      },
      {
        heading: 'Meldebestand, Sicherheitsbestand und eiserne Reserve',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'meldebestand', text: 'Meldebestand' },
            ' ist die Bestandsgrenze für die Auslösung. Der ',
            { type: 'glossary', id: 'sicherheitsbestand', text: 'Sicherheitsbestand' },
            ' ist dagegen eine Reserve für unerwartet hohen Verbrauch oder verspätete Lieferungen. In manchen Unternehmen wird für eine solche Reserve auch der Begriff ',
            { type: 'glossary', id: 'eiserne-reserve', text: 'eiserne Reserve' },
            ' verwendet; die betriebliche Definition sollte immer klar festgelegt sein.',
          ],
          [
            'Eine einfache Meldebestandsformel verbindet erwarteten Verbrauch und Reserve. Die vollständige Einordnung von Meldebestand, Sicherheitsbestand und Servicegrad erklärt die Detailseite ',
            { type: 'link', href: '/wissen/sicherheitsbestand-meldebestand-servicegrad', text: 'Sicherheitsbestand, Meldebestand & Servicegrad' },
            '.',
          ],
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Einfache Meldebestandslogik',
            formula: 'Meldebestand = durchschnittlicher Verbrauch × Wiederbeschaffungszeit + Sicherheitsbestand',
            description: 'Die Formel ist eine vereinfachte Orientierung. Sie setzt eine passende Zeiteinheit voraus, etwa Stück pro Arbeitstag und Wiederbeschaffungszeit in Arbeitstagen.',
          },
        ],
      },
      {
        heading: 'Wiederbeschaffungszeit und laufende Bestandsüberwachung',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'wiederbeschaffungszeit', text: 'Wiederbeschaffungszeit' },
            ' umfasst die Zeit von der Bestellung bis zur tatsächlichen Verfügbarkeit. Dazu können Bearbeitung, Lieferzeit, Transport, Wareneingang und Prüfung gehören. Je länger oder unsicherer diese Zeit ist, desto früher muss bei sonst gleichem Verbrauch bestellt werden.',
          ],
          'Das Verfahren braucht aktuelle Bestandsinformationen. Für die Auslösung zählt in der Regel nicht nur der physische Bestand, sondern der frei verfügbare Bestand. Reservierte, gesperrte, beschädigte oder bereits fest verplante Mengen dürfen nicht als frei nutzbarer Vorrat behandelt werden.',
          'Eine kontinuierliche Überwachung kann über ein Warenwirtschafts- oder ERP-System erfolgen. Bei überschaubaren, regelmäßig benötigten Artikeln können auch einfache visuelle Regeln funktionieren. Entscheidend ist, dass Verbrauch und Zugänge rechtzeitig sichtbar werden.',
        ],
      },
      {
        heading: 'Feste oder variable Bestellmenge',
        paragraphs: [
          'Der Bestellpunkt entscheidet vor allem, wann bestellt wird. Die Menge kann davon getrennt fest oder variabel geregelt sein. Bei einer festen Bestellmenge wird zum Beispiel bei jedem Erreichen des Meldebestands dieselbe Verpackungs- oder Losgröße bestellt.',
          'Bei einer variablen Bestellmenge wird bis zu einem festgelegten Zielbestand aufgefüllt oder der erwartete Bedarf für einen definierten Zeitraum berücksichtigt. Offene Bestellungen, bereits erwartete Zugänge und aktuelle Bedarfe müssen dabei einheitlich berücksichtigt werden.',
          'Das Bestellpunkt-Losgrößenverfahren verbindet damit einen bestandsabhängigen Auslöser mit einer festgelegten Bestell- oder Losgröße. Welche Menge wirtschaftlich und praktisch passt, hängt unter anderem von Bestellkosten, Lagerkosten, Mindestmengen, Lieferfähigkeit und Lagerkapazität ab.',
        ],
      },
      {
        heading: 'Praxisbeispiel: Verpackungsmaterial nachbestellen',
        paragraphs: [
          'Ein Unternehmen verbraucht durchschnittlich 15 Versandkartons pro Arbeitstag. Die Wiederbeschaffungszeit beträgt vier Arbeitstage. Als Sicherheitsbestand sind 25 Kartons vorgesehen.',
        ],
        exampleCards: [
          {
            title: 'Bestellung beim Erreichen von 85 Kartons',
            paragraphs: [
              'Der erwartete Verbrauch während der Wiederbeschaffungszeit beträgt 15 × 4 = 60 Kartons. Zusammen mit 25 Kartons Sicherheitsbestand liegt der Meldebestand bei 85 Kartons.',
              'Sobald der frei verfügbare Bestand 85 Kartons erreicht, löst das System eine Bestellung über die festgelegte Menge von 120 Kartons aus. Bei einem Verbrauch wie geplant bleiben bis zur Ankunft 25 Kartons als Reserve. Steigt der Verbrauch oder verspätet sich die Lieferung, kann diese Reserve früher benötigt werden.',
            ],
            effects: [
              'Meldebestand: 60 Kartons erwarteter Verbrauch + 25 Kartons Reserve = 85 Kartons.',
              'Bestellmenge: feste Menge von 120 Kartons; sie ist vom Auslösezeitpunkt getrennt festgelegt.',
            ],
          },
        ],
      },
      {
        heading: 'Wann ist das Verfahren sinnvoll?',
        paragraphs: [
          'Das Bestellpunktverfahren passt oft zu Artikeln mit regelmäßigem Verbrauch, ausreichender Bestandsdatenqualität und einer bekannten oder gut schätzbaren Wiederbeschaffungszeit. Es ist besonders nützlich, wenn eine Unterdeckung schnell stören würde und Bestände deshalb nicht nur zu festen Terminen geprüft werden sollen.',
          'Es kann auch bei unregelmäßigerem Bedarf funktionieren, wenn Verbrauch, Lieferzeit und Sicherheitsbestand regelmäßig aktualisiert werden. Bei sehr seltenen, projektbezogenen oder schwer prognostizierbaren Bedarfen können andere Beschaffungs- oder Planungsregeln besser passen.',
        ],
      },
      {
        heading: 'Vorteile, Grenzen und Abgrenzung',
        paragraphs: [
          'Ein Vorteil ist die schnelle Reaktion auf den tatsächlichen Bestandsverlauf. Kritische Artikel können nachbestellt werden, sobald der festgelegte Auslösewert erreicht ist. Der Ablauf bleibt für wiederkehrende Materialien nachvollziehbar und kann automatisiert werden.',
          'Dem steht der Aufwand für zuverlässige Bestandsdaten und geeignete Parameter gegenüber. Bei stark schwankendem Bedarf, ungeplanten Großaufträgen oder instabilen Lieferzeiten kann ein einmal berechneter Meldebestand zu niedrig oder zu hoch sein.',
          [
            'Beim ',
            { type: 'glossary', id: 'bestellrhythmusverfahren', text: 'Bestellrhythmusverfahren' },
            ' wird der Bestand dagegen zu festen Zeitpunkten geprüft und bestellt. Die Übersicht zu ',
            { type: 'link', href: '/wissen/bestellverfahren', text: 'Bestellverfahren' },
            ' ordnet beide Ansätze sowie das Min-Max-Verfahren ein.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Meldebestand und Sicherheitsbestand nach veränderten Lieferzeiten, Verbrauchsmustern oder Mindestmengen nicht anzupassen. Eine früher passende Grenze kann dann Fehlmengen oder unnötig hohe Bestände verursachen.',
          'Auch eine Bestellung beim richtigen Meldebestand hilft nicht, wenn offene Bestellungen, Reservierungen oder tatsächliche Ankunftstermine im System fehlen oder falsch sind.',
          [
            'Die ',
            { type: 'link', href: '/wissen/optimale-bestellmenge', text: 'optimale Bestellmenge' },
            ' kann unter vereinfachten Annahmen Orientierung für eine feste Bestellmenge geben. Sie ersetzt aber nicht die Prüfung von Lieferzeit, Lagerplatz, Risiko und realen Mindestmengen.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Beim Bestellpunktverfahren löst das Erreichen des Meldebestands eine Bestellung aus.',
    'Das Verfahren überwacht Bestände laufend oder sehr häufig und benötigt aktuelle Daten zum frei verfügbaren Bestand.',
    'Der Meldebestand berücksichtigt erwarteten Verbrauch während der Wiederbeschaffungszeit und häufig zusätzlich einen Sicherheitsbestand.',
    'Der Auslösezeitpunkt und die Bestellmenge sind getrennte Entscheidungen; Mengen können fest oder variabel sein.',
    'Lange oder schwankende Lieferzeiten und stark veränderter Bedarf machen eine regelmäßige Anpassung der Parameter notwendig.',
    'Das Verfahren unterscheidet sich vom Bestellrhythmusverfahren, das Bestände zu festen Terminen prüft.',
  ],
  commonMistakes: [
    'physischen Bestand statt frei verfügbarem Bestand für den Meldebestand verwenden',
    'Lieferzeit, Verbrauch oder Sicherheitsbestand trotz veränderter Rahmenbedingungen nicht aktualisieren',
    'offene Bestellungen, Reservierungen oder tatsächliche Ankunftstermine im Bestandssystem nicht berücksichtigen',
    'Meldebestand und Sicherheitsbestand ohne klare betriebliche Definition gleichsetzen',
    'eine rechnerische Bestellmenge ohne Prüfung von Mindestmengen, Lagerplatz und Lieferfähigkeit übernehmen',
  ],
  faqs: [
    {
      question: 'Was löst beim Bestellpunktverfahren eine Bestellung aus?',
      answer: 'Die Bestellung wird ausgelöst oder vorbereitet, wenn der frei verfügbare Bestand den festgelegten Meldebestand erreicht oder unterschreitet.',
    },
    {
      question: 'Was ist der Unterschied zwischen Meldebestand und Sicherheitsbestand?',
      answer: 'Der Meldebestand ist die Auslösegrenze für die Bestellung. Der Sicherheitsbestand ist eine Reserve für unerwarteten Mehrverbrauch oder Lieferverzug.',
    },
    {
      question: 'Kann die Bestellmenge beim Bestellpunktverfahren variieren?',
      answer: 'Ja. Der Bestellpunkt legt den Zeitpunkt fest. Die Menge kann fest vorgegeben sein oder sich aus einem Zielbestand, offenen Zugängen und aktuellem Bedarf ergeben.',
    },
    {
      question: 'Wann ist das Bestellpunktverfahren sinnvoll?',
      answer: 'Es passt häufig zu Artikeln mit wiederkehrendem Bedarf, aktuellen Bestandsdaten und einer bekannten oder gut schätzbaren Wiederbeschaffungszeit.',
    },
    {
      question: 'Was unterscheidet Bestellpunkt- und Bestellrhythmusverfahren?',
      answer: 'Beim Bestellpunktverfahren löst eine Bestandsgrenze aus. Beim Bestellrhythmusverfahren wird der Bestand zu vorher festgelegten Zeitpunkten geprüft und bestellt.',
    },
  ],
  related: [
    'bestellverfahren',
    'sicherheitsbestand-meldebestand-servicegrad',
    'optimale-bestellmenge',
    'losgroessenverfahren',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bestellpunktverfahren;
