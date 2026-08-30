import { defaultDisclaimer } from '../shared.js';

const bedarfsprognoseForecasting = {
  slug: 'bedarfsprognose-forecasting',
  category: 'Supply Chain & Logistik',
  title: 'Bedarfsprognose & Forecasting',
  description: 'Bedarfsprognose und Forecasting einfach erklärt: Verbrauchsdaten, Durchschnittswerte, exponentielle Glättung und Prognosegüte praxisnah einordnen.',
  seo: {
    title: 'Bedarfsprognose & Forecasting einfach erklärt | Belege24',
    description: 'Erfahre, wie Unternehmen künftigen Bedarf mit historischen Daten, gleitenden Durchschnitten und exponentieller Glättung schätzen und Prognosefehler einordnen.',
    canonicalPath: '/wissen/bedarfsprognose-forecasting',
  },
  article: {
    intro: 'Eine Bedarfsprognose schätzt, welche Mengen künftig benötigt werden. Sie unterstützt die Planung von Einkauf, Lager und Produktion, bleibt aber immer unsicher: Eine gute Prognose macht Annahmen sichtbar und wird regelmäßig mit der tatsächlichen Entwicklung verglichen.',
    sections: [
      {
        heading: 'Was ist eine Bedarfsprognose?',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'bedarfsprognose', text: 'Bedarfsprognose' },
            ' leitet aus verfügbaren Informationen eine Erwartung für zukünftigen Bedarf ab. Häufig bildet sie die Grundlage für Bestellmengen, Produktionsplanung, Kapazitätsplanung und Bestandsziele.',
          ],
          'Sie wird vor allem benötigt, wenn der Bedarf nicht schon vollständig aus bestätigten Kunden- oder Produktionsaufträgen hervorgeht. Historische Verbräuche, Verkäufe, Auftragslage, Trend, Saison und fachliche Einschätzungen können dabei zusammenwirken.',
          'Forecasting verspricht keine Sicherheit. Sein Nutzen liegt darin, Entscheidungen nicht allein aus Bauchgefühl zu treffen, Abweichungen früh zu erkennen und die Planung systematisch zu verbessern.',
        ],
      },
      {
        heading: 'Datenbasis: Vergangenheit, Trend und Saison',
        paragraphs: [
          'Historische Verbrauchs- oder Verkaufsdaten sind oft ein guter Ausgangspunkt. Sie müssen jedoch bereinigt und eingeordnet werden: Einmalige Großaufträge, Lieferausfälle, fehlende Artikel oder Sondereffekte können den Verlauf verzerren.',
          [
            'Ein Trend beschreibt eine längerfristige Steigung oder Senkung des Bedarfs. Saisonale Muster wiederholen sich in bestimmten Zeiträumen, etwa bei Sommerartikeln oder vor Jahresendgeschäft. Werden Trend oder Saison ignoriert, kann ein reiner Durchschnitt zu niedrig oder zu hoch liegen.',
          ],
          'Qualitative Prognosen ergänzen Daten durch Wissen aus Vertrieb, Einkauf, Produktion oder Marktbeobachtung. Sie sind besonders relevant bei neuen Produkten, geplanten Aktionen oder Veränderungen, die in historischen Zahlen noch nicht sichtbar sind. Annahmen sollten dabei dokumentiert und später überprüft werden.',
        ],
      },
      {
        heading: 'Gleitender Durchschnitt',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'gleitender-durchschnitt', text: 'gleitende Durchschnitt' },
            ' bildet den Mittelwert der letzten gleich langen Zeiträume. Bei jeder neuen Ist-Zahl fällt der älteste Wert aus dem Betrachtungsfenster heraus. Einzelne Schwankungen werden dadurch geglättet.',
          ],
          'Ein längerer Zeitraum glättet stärker, reagiert aber langsamer auf Veränderungen. Ein kurzer Zeitraum reagiert schneller, ist aber empfindlicher gegenüber Ausreißern. Die passende Länge hängt von Bedarfsmuster und Planungszweck ab.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gleitender Durchschnitt',
            formula: 'Prognose = Summe der Verbräuche der letzten n Perioden / n',
            description: 'n ist die Zahl der betrachteten Perioden. Alle Werte sollten dieselbe Zeiteinheit und dieselbe Definition des Verbrauchs verwenden.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Drei-Monats-Durchschnitt',
            paragraphs: [
              'Ein Artikel wurde in den letzten drei Monaten 80, 100 und 120 Mal verbraucht. Der gleitende Durchschnitt für den nächsten Monat lautet (80 + 100 + 120) / 3 = 100.',
              'Die Prognose beträgt 100 Stück. Der steigende Verlauf wird nur teilweise sichtbar; bei einem stabilen Aufwärtstrend kann ein zusätzlicher Trendfaktor oder ein kürzeres Fenster sinnvoll sein.',
            ],
            effects: [
              'Prognose: 100 Stück.',
              'Einordnung: Der Durchschnitt glättet die drei Werte, folgt einem Trend aber verzögert.',
            ],
          },
        ],
      },
      {
        heading: 'Gewichteter gleitender Durchschnitt',
        paragraphs: [
          'Beim gewichteten gleitenden Durchschnitt erhalten neuere oder besonders relevante Perioden ein höheres Gewicht. So kann die Prognose schneller auf aktuelle Veränderungen reagieren, ohne historische Werte ganz auszublenden.',
          'Die Gewichte müssen zusammen 1,00 beziehungsweise 100 Prozent ergeben. Ihre Wahl ist eine Annahme: Sie sollte zur Geschwindigkeit passen, mit der sich der Bedarf üblicherweise verändert, und nicht nachträglich auf ein gewünschtes Ergebnis zugeschnitten werden.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Gewichteter gleitender Durchschnitt',
            formula: 'Prognose = Summe aus Verbrauch × Gewichtung',
            description: 'Neuere Perioden können stärker gewichtet werden. Die Summe aller Gewichtungen beträgt 1,00 beziehungsweise 100 Prozent.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Aktuellen Monat stärker gewichten',
            paragraphs: [
              'Die letzten drei Monatsverbräuche betragen wieder 80, 100 und 120 Stück. Der älteste Monat erhält 20 Prozent, der mittlere 30 Prozent und der jüngste 50 Prozent Gewicht.',
              'Die Rechnung lautet 80 × 0,20 + 100 × 0,30 + 120 × 0,50 = 16 + 30 + 60 = 106. Der aktuelle Anstieg wirkt damit stärker auf die Prognose als beim einfachen Durchschnitt.',
            ],
            effects: [
              'Prognose: 106 Stück.',
              'Einordnung: Die höhere Gewichtung neuer Daten erhöht die Reaktionsgeschwindigkeit, kann aber auch Ausreißer stärker übernehmen.',
            ],
          },
        ],
      },
      {
        heading: 'Exponentielle Glättung',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'exponentielle-glaettung', text: 'exponentielle Glättung' },
            ' kombiniert die letzte Prognose mit dem aktuellsten tatsächlichen Verbrauch. Der Glättungsfaktor α bestimmt, wie stark die neue Ist-Zahl die nächste Prognose beeinflusst.',
          ],
          'Ein hoher α-Wert reagiert schneller auf Veränderungen, kann aber stärker schwanken. Ein niedriger α-Wert glättet stärker, reagiert bei echten Trends jedoch langsamer. Die Methode ist nur so passend wie ihr Faktor und die zugrunde liegenden Daten.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Einfache exponentielle Glättung',
            formula: 'Neue Prognose = α × letzter Ist-Verbrauch + (1 − α) × bisherige Prognose',
            description: 'α liegt zwischen 0 und 1. Die einfache Form eignet sich vor allem für Verläufe ohne ausgeprägten Trend oder Saison. Diese Muster brauchen zusätzliche Anpassungen oder andere Modelle.',
          },
        ],
        exampleCards: [
          {
            title: 'Beispiel: Neue Ist-Zahl einbeziehen',
            paragraphs: [
              'Die bisherige Prognose für einen Artikel lag bei 100 Stück. Tatsächlich wurden zuletzt 120 Stück verbraucht. Mit α = 0,30 lautet die neue Prognose: 0,30 × 120 + 0,70 × 100 = 36 + 70 = 106.',
              'Die Prognose steigt auf 106 Stück, folgt dem höheren Verbrauch aber nicht vollständig. Bei wiederholt steigenden Werten sollte geprüft werden, ob ein Trend berücksichtigt werden muss.',
            ],
            effects: [
              'Neue Prognose: 106 Stück.',
              'Einordnung: α steuert den Kompromiss zwischen schneller Anpassung und Glättung.',
            ],
          },
        ],
      },
      {
        heading: 'Prognosehorizont, Güte und Fehler',
        paragraphs: [
          'Der Prognosehorizont ist der Zeitraum, auf den sich eine Prognose bezieht: etwa die nächste Woche, den nächsten Monat oder das nächste Quartal. Je weiter der Blick in die Zukunft reicht, desto mehr Unsicherheit und mögliche Veränderungen müssen eingeplant werden.',
          [
            'Die ',
            { type: 'glossary', id: 'prognoseguete', text: 'Prognosegüte' },
            ' wird beurteilt, indem Prognosen mit den späteren Ist-Werten verglichen werden. Ein ',
            { type: 'glossary', id: 'prognosefehler', text: 'Prognosefehler' },
            ' zeigt die Abweichung zwischen geschätzter und tatsächlicher Menge.',
          ],
          'Nicht jede Abweichung ist ein Fehler der Methode. Ein unerwarteter Großauftrag oder ein Ereignis außerhalb der Datenbasis kann die Prognose überholen. Wichtig ist, wiederkehrende Über- oder Unterschätzungen zu erkennen und Daten, Parameter oder Methode zu prüfen.',
        ],
      },
      {
        heading: 'Zusammenhang mit Sicherheitsbestand und Disposition',
        paragraphs: [
          'Je unsicherer Bedarf und Lieferzeit sind, desto wichtiger wird eine passende Reserve. Ein Sicherheitsbestand kann Abweichungen zwischen Prognose und tatsächlichem Verbrauch abfedern, erhöht aber Lagerbestand und Kapitalbindung. Er ist kein Ersatz für eine bessere Datenbasis.',
          [
            'Die ',
            { type: 'link', href: '/wissen/methoden-bedarfsermittlung', text: 'Methoden der Bedarfsermittlung' },
            ' ordnet Forecasting neben auftrags- und verbrauchsorientierten Verfahren ein. ',
            { type: 'link', href: '/wissen/mrp-erp-disposition', text: 'MRP, ERP & systembasierte Disposition' },
            ' kann Forecasts zusammen mit Beständen, offenen Zugängen und Planungsparametern für Vorschläge verarbeiten.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler und Grenzen',
        paragraphs: [
          'Ein häufiger Fehler ist, eine Prognose als feststehenden Bedarf zu behandeln. Sie ist eine Erwartung und muss durch Bestandsregeln, Lieferzeit und regelmäßige Kontrolle ergänzt werden.',
          'Historische Daten dürfen nicht blind fortgeschrieben werden. Neue Produkte, Saison, Aktionen, Lieferengpässe oder Ausreißer können ihre Aussagekraft stark verändern.',
          'Komplexere Formeln erzeugen keine automatisch bessere Prognose. Wenn Daten unvollständig sind oder die Planung nicht regelmäßig überprüft wird, entsteht leicht Scheingenauigkeit.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Bedarfsprognosen schätzen künftige Mengen und bleiben grundsätzlich unsicher.',
    'Historische Daten, Trend, Saison und qualitative Informationen können die Prognosegrundlage bilden.',
    'Gleitende Durchschnitte glätten Schwankungen; Gewichtungen und α steuern die Reaktion auf neue Werte.',
    'Exponentielle Glättung verbindet die letzte Prognose mit dem aktuellen Ist-Verbrauch.',
    'Prognosegüte zeigt sich erst im Vergleich mit späteren Ist-Werten und wiederkehrenden Fehlern.',
    'Sicherheitsbestand und Disposition helfen, verbleibende Unsicherheit angemessen zu steuern.',
  ],
  commonMistakes: [
    'Prognosen als sichere Bestellvorgaben behandeln',
    'Ausreißer, Saison, Trend oder neue Produkte in historischen Daten nicht erkennen',
    'Gewichtungen oder Glättungsfaktoren ohne Prüfung der tatsächlichen Prognosegüte wählen',
    'Prognosefehler nur einmal statt über mehrere Perioden betrachten',
    'einen Sicherheitsbestand als Ersatz für Datenqualität und laufende Planung verwenden',
  ],
  faqs: [
    {
      question: 'Was ist eine Bedarfsprognose?',
      answer: 'Sie schätzt, welche Mengen künftig benötigt werden, und unterstützt damit die Planung von Einkauf, Lager und Produktion.',
    },
    {
      question: 'Was ist ein gleitender Durchschnitt?',
      answer: 'Er bildet den Mittelwert der letzten gleich langen Zeiträume. Mit jeder neuen Ist-Zahl fällt der älteste Wert aus dem Betrachtungsfenster heraus.',
    },
    {
      question: 'Was ist der Unterschied zum gewichteten Durchschnitt?',
      answer: 'Beim gewichteten Durchschnitt erhalten einzelne Perioden unterschiedliche Bedeutung. Häufig zählen neuere Werte stärker als ältere.',
    },
    {
      question: 'Was macht die exponentielle Glättung?',
      answer: 'Sie kombiniert die bisherige Prognose mit dem neuesten Ist-Verbrauch. Der Glättungsfaktor bestimmt, wie stark die neue Ist-Zahl wirkt.',
    },
    {
      question: 'Warum sind Prognosefehler wichtig?',
      answer: 'Sie zeigen, wie stark Prognose und tatsächlicher Bedarf voneinander abweichen. Wiederkehrende Abweichungen helfen, Daten, Parameter oder die Methode zu verbessern.',
    },
  ],
  related: [
    'methoden-bedarfsermittlung',
    'mrp-erp-disposition',
    'bedarfsermittlung',
    'bestellverfahren',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bedarfsprognoseForecasting;
