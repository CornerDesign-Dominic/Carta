import { defaultDisclaimer } from '../shared.js';

const bestellrhythmusverfahren = {
  slug: 'bestellrhythmusverfahren',
  category: 'Supply Chain & Logistik',
  title: 'Bestellrhythmusverfahren',
  description: 'Bestellrhythmusverfahren einfach erklärt: Bestände zu festen Terminen prüfen, variable Bestellmengen bis zum Sollbestand ermitteln und Fehlmengenrisiken einordnen.',
  seo: {
    title: 'Bestellrhythmusverfahren einfach erklärt | Belege24',
    description: 'Erfahre, wie feste Prüftermine, Sollbestand, Sicherheitsbestand und Wiederbeschaffungszeit beim Bestellrhythmusverfahren zusammenwirken.',
    canonicalPath: '/wissen/bestellrhythmusverfahren',
  },
  article: {
    intro: 'Beim Bestellrhythmusverfahren werden Bestand und Bestellbedarf zu festen Zeitpunkten geprüft, etwa jeden Montag oder einmal im Monat. Bei der Prüfung wird meist eine variable Menge bestellt, damit die Bestandsposition wieder einen festgelegten Sollbestand erreicht.',
    sections: [
      {
        heading: 'Was ist das Bestellrhythmusverfahren?',
        paragraphs: [
          [
            'Beim ',
            { type: 'glossary', id: 'bestellrhythmusverfahren', text: 'Bestellrhythmusverfahren' },
            ' stehen die Prüftermine fest. Erst zu diesem Termin wird festgestellt, wie viel bestellt werden soll. Der Bestellrhythmus kann beispielsweise wöchentlich, zweiwöchentlich oder monatlich sein und richtet sich nach Artikel, Lieferprozess und organisatorischem Aufwand.',
          ],
          'Die Bestellung wird nicht schon bei einer bestimmten Bestandsgrenze ausgelöst. Deshalb muss der Sollbestand so bemessen sein, dass er den Verbrauch bis zum nächsten Prüftermin, die Wiederbeschaffungszeit und einen passenden Sicherheitsbestand berücksichtigen kann.',
        ],
      },
      {
        heading: 'Sollbestand und variable Bestellmenge',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'sollbestand', text: 'Sollbestand' },
            ' ist der Zielwert, bis zu dem die Bestandsposition nach einer Prüfung aufgefüllt werden soll. Je nach Unternehmen wird hierfür auch ein Höchstbestand oder eine andere Zielgröße verwendet. Entscheidend ist, dass die Bedeutung einheitlich festgelegt ist.',
          ],
          'Die Bestellmenge ist typischerweise variabel. Sie ergibt sich aus der Differenz zwischen Sollbestand und aktueller Bestandsposition. Zur Bestandsposition gehören je nach Regel frei verfügbare Mengen und bereits bestätigte offene Zugänge; Reservierungen und bereits verbindlich eingeplante Abgänge müssen ebenfalls korrekt berücksichtigt werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Einfache Auffüllmenge zum Sollbestand',
            formula: 'Bestellmenge = Sollbestand − Bestandsposition',
            description: 'Die Bestandsposition muss nach einer einheitlichen Regel berechnet werden, zum Beispiel aus frei verfügbarem Bestand plus gesicherten offenen Zugängen. Der Sollbestand sollte den Bedarf bis zur nächsten Prüfung und Wiederbeschaffung abdecken.',
          },
        ],
      },
      {
        heading: 'Verbrauch, Sicherheitsbestand und Wiederbeschaffungszeit',
        paragraphs: [
          'Zwischen zwei Prüfterminen sinkt der Bestand weiter, ohne dass das Verfahren automatisch eine Bestellung auslöst. Nach der Prüfung vergeht zusätzlich die Zeit bis zur Lieferung. Der Sollbestand muss deshalb den erwarteten Verbrauch während des Bestellrhythmus und der Wiederbeschaffungszeit berücksichtigen.',
          [
            'Der ',
            { type: 'glossary', id: 'sicherheitsbestand', text: 'Sicherheitsbestand' },
            ' soll Verbrauchs- und Lieferabweichungen abfedern. Ein längerer Bestellrhythmus oder eine unsichere ',
            { type: 'glossary', id: 'wiederbeschaffungszeit', text: 'Wiederbeschaffungszeit' },
            ' kann einen größeren Puffer nötig machen, wenn die gewünschte Lieferbereitschaft gleich bleiben soll.',
          ],
          [
            'Die Detailseite ',
            { type: 'link', href: '/wissen/sicherheitsbestand-meldebestand-servicegrad', text: 'Sicherheitsbestand, Meldebestand & Servicegrad' },
            ' erklärt die Bestandsreserven und ihre Abwägung mit Kapitalbindung ausführlicher.',
          ],
        ],
      },
      {
        heading: 'Bestellrhythmus und Bestellpunkt vergleichen',
        paragraphs: [
          [
            'Das ',
            { type: 'link', href: '/wissen/bestellpunktverfahren', text: 'Bestellpunktverfahren' },
            ' überwacht den Bestand laufend oder sehr häufig und löst beim Meldebestand aus. Das Bestellrhythmusverfahren prüft dagegen nur zu den festgelegten Terminen. Es ist damit organisatorisch einfacher zu bündeln, reagiert aber nicht unmittelbar auf einen unerwartet schnellen Verbrauch.',
          ],
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Bestellpunktverfahren vs. Bestellrhythmusverfahren',
            formula: 'Bestellpunkt: Bestand laufend prüfen → bei Meldebestand bestellen\nBestellrhythmus: Bestand zu festen Terminen prüfen → bis zum Sollbestand auffüllen',
            description: 'Beide Verfahren können mit unterschiedlichen Bestellmengen arbeiten. Der zentrale Unterschied liegt im Auslöser: Bestandsgrenze oder fester Zeitpunkt.',
          },
        ],
      },
      {
        heading: 'Praxisbeispiel: Wöchentliche Bestellung von Versandkartons',
        paragraphs: [
          'Ein Unternehmen prüft jeden Montag den Bestand an Versandkartons. Der durchschnittliche Verbrauch beträgt 20 Kartons pro Arbeitstag. Bis zur nächsten Prüfung vergehen fünf Arbeitstage, die Wiederbeschaffungszeit beträgt drei Arbeitstage und der Sicherheitsbestand soll 40 Kartons betragen.',
        ],
        exampleCards: [
          {
            title: 'Bestellmenge bis zum Sollbestand berechnen',
            paragraphs: [
              'Der Sollbestand soll den erwarteten Verbrauch für acht Arbeitstage abdecken: fünf Tage bis zur nächsten Prüfung plus drei Tage Wiederbeschaffungszeit. Daraus ergeben sich 20 × 8 = 160 Kartons. Mit 40 Kartons Sicherheitsbestand liegt der Sollbestand bei 200 Kartons.',
              'Am Montag sind 110 Kartons frei verfügbar. Zusätzlich ist ein gesicherter offener Zugang von 30 Kartons erfasst. Die Bestandsposition beträgt damit 140 Kartons. Die Bestellung lautet: 200 − 140 = 60 Kartons.',
            ],
            effects: [
              'Sollbestand: 160 Kartons erwarteter Verbrauch + 40 Kartons Sicherheitsbestand = 200 Kartons.',
              'Bestandsposition: 110 frei verfügbar + 30 offene Zugänge = 140 Kartons.',
              'Variable Bestellmenge: 200 − 140 = 60 Kartons.',
            ],
          },
        ],
      },
      {
        heading: 'Geeignete Einsatzbereiche',
        paragraphs: [
          'Das Verfahren eignet sich oft für planbare, regelmäßig benötigte Artikel, bei denen eine tägliche Bestandskontrolle nicht notwendig ist. Es kann beispielsweise Bestellungen nach Lieferant, Warengruppe oder Prüftag bündeln und damit die organisatorische Abwicklung vereinfachen.',
          'Je stabiler Verbrauch und Lieferzeit sind, desto leichter lassen sich Rhythmus und Sollbestand festlegen. Bei stark schwankenden oder besonders kritischen Artikeln kann eine häufigere Prüfung, ein kürzerer Rhythmus oder ein Bestellpunktverfahren sinnvoller sein.',
        ],
      },
      {
        heading: 'Vorteile und Nachteile',
        paragraphs: [
          'Feste Prüftermine schaffen einen klaren organisatorischen Rhythmus. Bestellungen können gebündelt, Zuständigkeiten geplant und Lieferantenkontakte strukturiert werden. Das kann Bearbeitungsaufwand reduzieren.',
          'Der Nachteil ist das Fehlmengenrisiko zwischen zwei Prüfterminen. Steigt der Verbrauch überraschend oder verzögert sich eine Lieferung, wird die Abweichung möglicherweise erst bei der nächsten Prüfung sichtbar. Um die gleiche Lieferbereitschaft wie bei enger Überwachung zu erreichen, sind häufig höhere Sicherheitsbestände oder kürzere Prüfabstände nötig.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, den Sollbestand nur aus dem Verbrauch bis zum nächsten Prüftermin abzuleiten. Auch die Wiederbeschaffungszeit nach der Bestellung muss berücksichtigt werden.',
          'Offene Bestellungen dürfen nur dann in die Bestandsposition einfließen, wenn ihre Menge und ihr Termin ausreichend gesichert sind. Andernfalls kann die errechnete Bestellmenge zu niedrig sein.',
          [
            'Die ',
            { type: 'link', href: '/wissen/optimale-bestellmenge', text: 'optimale Bestellmenge' },
            ' kann bei gleichmäßigem Bedarf als Orientierung für Mengen dienen. Sie entscheidet jedoch nicht, welches Prüfintervall, welcher Sollbestand oder welcher Sicherheitsbestand im konkreten Ablauf passt.',
          ],
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Beim Bestellrhythmusverfahren werden Bestände zu festen Zeitpunkten geprüft und Bestellungen vorbereitet.',
    'Die Bestellmenge ist häufig variabel und füllt die Bestandsposition bis zu einem Sollbestand auf.',
    'Der Sollbestand sollte Verbrauch bis zur nächsten Prüfung, Wiederbeschaffungszeit und Sicherheitsbestand berücksichtigen.',
    'Feste Prüftermine erleichtern die Organisation und Bündelung von Bestellungen.',
    'Zwischen zwei Prüfterminen kann ein unerwartet hoher Verbrauch zu Fehlmengen führen; ein passender Puffer oder kürzerer Rhythmus hilft dagegen.',
    'Im Unterschied zum Bestellpunktverfahren löst nicht eine Bestandsgrenze, sondern ein fester Zeitpunkt die Prüfung aus.',
  ],
  commonMistakes: [
    'Sollbestand nur für den Zeitraum bis zum nächsten Prüftermin und nicht auch für die Wiederbeschaffungszeit berechnen',
    'offene Bestellungen ohne Prüfung von Menge und Termin als sicheren Zugang einplanen',
    'Bestandsposition ohne Berücksichtigung von Reservierungen oder verbindlich geplanten Abgängen verwenden',
    'ein langes Prüfintervall trotz schwankendem oder kritischem Bedarf beibehalten',
    'Sicherheitsbestand pauschal erhöhen, statt Verbrauch, Lieferzeit und Prüfrhythmus zu prüfen',
  ],
  faqs: [
    {
      question: 'Was ist das Bestellrhythmusverfahren?',
      answer: 'Dabei werden Bestände zu festen Zeitpunkten geprüft. Anschließend wird meist eine variable Menge bestellt, damit die Bestandsposition wieder den Sollbestand erreicht.',
    },
    {
      question: 'Wie wird die Bestellmenge bestimmt?',
      answer: 'In einer einfachen Betrachtung ergibt sie sich aus Sollbestand minus Bestandsposition. Wie die Bestandsposition gebildet wird, muss im Unternehmen einheitlich festgelegt sein.',
    },
    {
      question: 'Warum ist die Wiederbeschaffungszeit wichtig?',
      answer: 'Nach der Prüfung und Bestellung wird Bestand weiter verbraucht, bis die Ware verfügbar ist. Der Sollbestand muss diese Zeit mit abdecken.',
    },
    {
      question: 'Was ist der Unterschied zum Bestellpunktverfahren?',
      answer: 'Das Bestellpunktverfahren löst beim Erreichen einer Bestandsgrenze aus. Beim Bestellrhythmusverfahren findet die Prüfung zu festen Zeitpunkten statt.',
    },
    {
      question: 'Wann ist das Bestellrhythmusverfahren sinnvoll?',
      answer: 'Es passt häufig zu regelmäßig benötigten, gut planbaren Artikeln, wenn feste Prüftermine und gebündelte Bestellungen organisatorisch vorteilhaft sind.',
    },
  ],
  related: [
    'bestellpunktverfahren',
    'sicherheitsbestand-meldebestand-servicegrad',
    'optimale-bestellmenge',
    'bestellverfahren',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bestellrhythmusverfahren;
