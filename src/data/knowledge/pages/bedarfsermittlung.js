import { defaultDisclaimer } from '../shared.js';

const bedarfsermittlung = {
  slug: 'bedarfsermittlung',
  category: 'Supply Chain & Logistik',
  title: 'Bedarfsermittlung',
  description: 'Bedarfsermittlung einfach erklärt: Bedarfsarten, Brutto- und Nettobedarf, Bestand, offene Bestellungen und Verfahren zur Beschaffungsplanung.',
  seo: {
    title: 'Bedarfsermittlung einfach erklärt | Belege24',
    description: 'Verstehe Primär-, Sekundär- und Tertiärbedarf, die Nettobedarfsrechnung sowie deterministische und verbrauchsorientierte Verfahren.',
    canonicalPath: '/wissen/bedarfsermittlung',
  },
  article: {
    intro: 'Bedarfsermittlung klärt, welche Güter und Mengen in einem Zeitraum benötigt werden. Sie verbindet Aufträge und Planung mit Lagerbestand, offenen Bestellungen und Sicherheitsbeständen, damit rechtzeitig und nicht unnötig beschafft wird.',
    sections: [
      {
        heading: 'Was ist Bedarfsermittlung?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'bedarfsermittlung', text: 'Bedarfsermittlung' },
            ' bestimmt, welche Materialien, Waren oder Leistungen ein Unternehmen voraussichtlich braucht. Sie ist eine Grundlage für Disposition, Bestellung und Lagersteuerung.',
          ],
          'Ihr Ziel ist, die Versorgung sicherzustellen, ohne unnötig hohe Bestände aufzubauen. Dafür müssen Bedarf, Verfügbarkeit, erwartete Zugänge und Lieferzeiten möglichst zuverlässig zusammengeführt werden.',
        ],
      },
      {
        heading: 'Primär-, Sekundär- und Tertiärbedarf',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'primaerbedarf', text: 'Primärbedarf' },
            ' umfasst die verkaufsfähigen Endprodukte oder direkt zu liefernden Leistungen. Er kann zum Beispiel aus Kundenaufträgen oder einer Absatzplanung entstehen.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'sekundaerbedarf', text: 'Sekundärbedarf' },
            ' umfasst Materialien und Bestandteile, die für diesen Primärbedarf benötigt werden. Stücklisten, Rezepturen oder Produktionspläne helfen, ihn abzuleiten.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'tertiaerbedarf', text: 'Tertiärbedarf' },
            ' betrifft Hilfs- und Betriebsstoffe, die für die Leistungserstellung erforderlich sind, aber nicht unmittelbar Bestandteil des Endprodukts werden.',
          ],
        ],
      },
      {
        heading: 'Bruttobedarf und Nettobedarf',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'bruttobedarf', text: 'Bruttobedarf' },
            ' beschreibt die gesamte benötigte Menge, bevor vorhandene Bestände und erwartete Zugänge abgezogen werden. Für eine Bestellung ist dagegen der ',
            { type: 'glossary', id: 'nettobedarf', text: 'Nettobedarf' },
            ' entscheidend: Er zeigt, was nach der Bestands- und Zugangsprüfung tatsächlich noch fehlt.',
          ],
          'Zum verfügbaren Bestand zählen nur Mengen, die tatsächlich nutzbar sind. Bereits fest eingeplante und verlässlich erwartete Zugänge, etwa offene Bestellungen, können den noch zu beschaffenden Bedarf mindern. Ein Sicherheitsbestand wird dagegen nicht als frei verfügbar behandelt, weil er für unvorhergesehene Schwankungen reserviert sein soll.',
        ],
        formulaCards: [
          {
            label: 'Formel',
            title: 'Einfache Nettobedarfsermittlung',
            formula: 'Nettobedarf = Bruttobedarf + Sicherheitsbestand − verfügbarer Lagerbestand − fest eingeplante Zugänge',
            description: 'Ergibt die Rechnung einen positiven Wert, muss diese Menge grundsätzlich noch bereitgestellt oder beschafft werden. Verwendet werden sollten nur aktuelle und verlässlich verfügbare Daten.',
          },
        ],
      },
      {
        heading: 'Vollständiges Beispiel',
        paragraphs: [
          'Ein Betrieb plant für den nächsten Zeitraum einen Bruttobedarf von 100 Stück eines Materials. Der Sicherheitsbestand soll 20 Stück betragen. Im Lager sind 35 Stück frei verfügbar, und aus einer bereits bestätigten offenen Bestellung werden 25 Stück erwartet.',
        ],
        exampleCards: [
          {
            title: 'Nettobedarf Schritt für Schritt ermitteln',
            paragraphs: [
              'Schritt 1: Bruttobedarf und Sicherheitsbestand ergeben 100 Stück + 20 Stück = 120 Stück erforderliche Menge.',
              'Schritt 2: Der verfügbare Lagerbestand von 35 Stück und der fest eingeplante Zugang von 25 Stück werden abgezogen: 120 − 35 − 25 = 60 Stück.',
              'Schritt 3: Der Nettobedarf beträgt 60 Stück. Diese Menge muss – vorbehaltlich Lieferzeit, Mindestmenge und weiterer Planungsregeln – noch bereitgestellt oder bestellt werden.',
            ],
            effects: [
              'Bruttobedarf: 100 Stück.',
              'Sicherheitsbestand: 20 Stück.',
              'Verfügbarer Bestand plus offene Bestellung: 60 Stück.',
              'Nettobedarf: 60 Stück.',
            ],
          },
        ],
      },
      {
        heading: 'Methoden der Bedarfsermittlung im Überblick',
        paragraphs: [
          'Je nach Datenlage wird der Bedarf aus konkreten Aufträgen und Stücklisten abgeleitet, anhand von Vergangenheitswerten geschätzt oder zunächst über Erfahrungswerte eingeordnet. Die Methode muss zum Gut und zur Planungssituation passen.',
          [
            'Die Unterschiede zwischen deterministischer, stochastischer und heuristischer Ermittlung sowie programm- und verbrauchsorientierter Planung erklärt die Vertiefungsseite ',
            { type: 'link', href: '/wissen/methoden-bedarfsermittlung', text: 'Methoden der Bedarfsermittlung' },
            '.',
          ],
        ],
      },
      {
        heading: 'Zusammenhang mit Einkauf und Lager',
        paragraphs: [
          'Die Bedarfsermittlung liefert dem operativen Einkauf Informationen darüber, was bis wann benötigt wird. Der Einkauf prüft anschließend zum Beispiel Bezugsquelle, Lieferzeit, Mindestmenge und Bestellung.',
          [
            'Die übergeordnete Logik vom Bedarf bis zur Kontrolle erklärt die Seite ',
            { type: 'link', href: '/wissen/beschaffung', text: 'Beschaffung' },
            '. Der ',
            { type: 'link', href: '/wissen/operativer-einkauf', text: 'operative Einkauf' },
            ' setzt die laufende Bedarfsdeckung anschließend im Tagesgeschäft um.',
          ],
          'Lagerbestand und Sicherheitsbestand sind dabei keine festen Zahlen für alle Zeiten. Bestandsqualität, Reservierungen, Schwund, Lieferzeit und Verbrauchsänderungen können die Planung verändern.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, physisch vorhandene Menge mit frei verfügbarem Bestand gleichzusetzen. Reservierte, gesperrte, beschädigte oder bereits verplante Mengen stehen nicht automatisch für neue Bedarfe zur Verfügung.',
          'Auch offene Bestellungen dürfen nur berücksichtigt werden, wenn Menge und Termin hinreichend verlässlich sind. Verspätete oder unbestätigte Lieferungen können die Nettobedarfsrechnung sonst zu optimistisch machen.',
          'Verbrauchsdaten sollten nicht ungeprüft fortgeschrieben werden. Ein neuer Kunde, geänderte Stücklisten, Saisonverlauf oder Ausreißer können den künftigen Bedarf deutlich verändern.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Bedarfsermittlung bestimmt benötigte Mengen und Zeitpunkte als Grundlage für Lager und Beschaffung.',
    'Primärbedarf betrifft Endprodukte oder Leistungen, Sekundärbedarf ihre Bestandteile und Tertiärbedarf Hilfs- und Betriebsstoffe.',
    'Nettobedarf berücksichtigt Bruttobedarf, Sicherheitsbestand, verfügbaren Lagerbestand und fest eingeplante Zugänge.',
    'Deterministische Verfahren nutzen konkrete Aufträge und Pläne; stochastische Verfahren arbeiten mit Prognosen und Vergangenheitsdaten.',
    'Verbrauchsorientierte Verfahren passen eher zu regelmäßigem, vergleichbarem Bedarf.',
    'Daten zu Bestand, Reservierungen und offenen Bestellungen müssen aktuell und verlässlich sein.',
  ],
  commonMistakes: [
    'physischen Bestand mit frei verfügbarem Bestand gleichsetzen',
    'unbestätigte oder verspätete offene Bestellungen vollständig als Zugang einplanen',
    'Sicherheitsbestand wie frei verwendbaren Lagerbestand behandeln',
    'Bedarfsprognosen ohne Prüfung von Saisonalität, Aufträgen oder Stücklisten fortschreiben',
    'Nettobedarf berechnen, ohne Lieferzeit und Mindestmengen anschließend zu berücksichtigen',
  ],
  faqs: [
    {
      question: 'Was ist Bedarfsermittlung?',
      answer: 'Bedarfsermittlung bestimmt, welche Güter oder Leistungen in welcher Menge und zu welchem Zeitpunkt benötigt werden.',
    },
    {
      question: 'Was ist der Unterschied zwischen Brutto- und Nettobedarf?',
      answer: 'Bruttobedarf ist die gesamte benötigte Menge. Nettobedarf zeigt, was nach Abzug von verfügbarem Bestand und fest eingeplanten Zugängen noch fehlt.',
    },
    {
      question: 'Was ist Primärbedarf?',
      answer: 'Primärbedarf ist der Bedarf an verkaufsfähigen Endprodukten oder direkt zu liefernden Leistungen, etwa aus Kundenaufträgen oder Absatzplanung.',
    },
    {
      question: 'Was ist Sekundärbedarf?',
      answer: 'Sekundärbedarf umfasst Materialien und Bestandteile, die zur Herstellung des Primärbedarfs benötigt werden.',
    },
    {
      question: 'Warum ist der Sicherheitsbestand bei der Nettobedarfsermittlung wichtig?',
      answer: 'Er soll Schwankungen und unvorhergesehene Störungen abfedern. Deshalb wird er nicht wie frei verfügbarer Bestand vom Bedarf abgezogen.',
    },
  ],
  related: [
    'beschaffung',
    'operativer-einkauf',
    'beschaffungsarten',
    'einkauf-verkauf',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default bedarfsermittlung;
