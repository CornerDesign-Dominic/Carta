import { defaultDisclaimer } from '../shared.js';

const mrpErpDisposition = {
  slug: 'mrp-erp-disposition',
  category: 'Supply Chain & Logistik',
  title: 'MRP, ERP & systembasierte Disposition',
  description: 'MRP, ERP und systembasierte Disposition einfach erklärt: Bedarf, Bestände und Zugänge zu nachvollziehbaren Bestell- und Fertigungsvorschlägen verbinden.',
  seo: {
    title: 'MRP, ERP & systembasierte Disposition | Belege24',
    description: 'Erfahre, wie MRP und ERP Bedarf, Stücklisten, Bestände, offene Bestellungen und Lieferzeiten für Bestell- und Fertigungsvorschläge nutzen.',
    canonicalPath: '/wissen/mrp-erp-disposition',
  },
  article: {
    intro: 'Systembasierte Disposition nutzt Plan-, Bestands- und Bewegungsdaten, um Materialbedarf rechtzeitig sichtbar zu machen. Sie kann Bestell- oder Fertigungsvorschläge erzeugen, ersetzt aber nicht die Prüfung von Daten, Kapazitäten und tatsächlicher Lieferfähigkeit.',
    sections: [
      {
        heading: 'Was bedeutet Disposition?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'disposition', text: 'Disposition' },
            ' plant und steuert, welche Materialien oder Waren in welcher Menge und zu welchem Zeitpunkt bereitstehen sollen. Sie verbindet Bedarf, verfügbaren Bestand, erwartete Zugänge, Lieferzeiten und Bestandsregeln.',
          ],
          'In kleinen Unternehmen kann das mit Listen, einfachen Bestandsregeln oder Erfahrung erfolgen. Mit wachsender Zahl von Artikeln, Aufträgen und Lieferanten unterstützen Systeme dabei, Daten zusammenzuführen und auf fehlende Mengen oder Termine hinzuweisen.',
        ],
      },
      {
        heading: 'MRP, MRP II und ERP kurz eingeordnet',
        paragraphs: [
          [
            { type: 'glossary', id: 'mrp', text: 'MRP' },
            ' steht für Material Requirements Planning. Im Kern leitet es Materialbedarf aus Plänen, Aufträgen und Stücklisten ab und gleicht ihn mit Beständen sowie erwarteten Zugängen ab.',
          ],
          'MRP II erweitert diese Grundidee grundsätzlich um weitere Planungsaspekte der Produktion, etwa Kapazitäten und Abläufe. Wie weit die Funktionen reichen, hängt vom verwendeten System und der eingerichteten Datenbasis ab.',
          [
            'Ein ',
            { type: 'glossary', id: 'erp', text: 'ERP-System' },
            ' kann Disposition mit weiteren Unternehmensdaten verbinden, zum Beispiel Einkauf, Lager, Produktion, Verkauf und Buchhaltung. Es ist kein eigenes Bestellverfahren: Es unterstützt Regeln und Planungslogiken, die das Unternehmen festlegt.',
          ],
        ],
      },
      {
        heading: 'Welche Daten verarbeitet die systembasierte Disposition?',
        paragraphs: [
          [
            'Bei auftrags- oder programmorientierter Disposition werden Kunden- und Produktionsaufträge mit ',
            { type: 'glossary', id: 'stueckliste', text: 'Stücklisten' },
            ' verknüpft. Daraus kann das System ableiten, welche Komponenten und Mengen für ein Produkt benötigt werden.',
          ],
          'Danach berücksichtigt das System verfügbare Bestände, Reservierungen, offene Bestellungen, geplante Fertigungsaufträge, Wiederbeschaffungszeiten und Sicherheitsbestände. Bei verbrauchsgesteuerter Disposition können zusätzlich vergangene Entnahmen, Forecasts oder Bestandsgrenzen als Auslöser dienen.',
          'Das Ergebnis hängt nicht allein vom Programm ab. Stücklisten, Artikelstammdaten, Lieferzeiten, Losgrößen, Bestände und Zugänge müssen zur tatsächlichen Situation passen.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Von der Planung zum Vorschlag',
            formula: 'Bedarf → Bestand prüfen → offene Zugänge → Nettobedarf → Bestell-/Fertigungsvorschlag',
            description: 'Der Vorschlag entsteht aus den hinterlegten Daten und Regeln. Vor einer Bestellung oder Fertigungsfreigabe sollten Menge, Termin, Lieferfähigkeit und Ausnahmen geprüft werden.',
          },
        ],
      },
      {
        heading: 'Auftragsbezogene und verbrauchsgesteuerte Disposition',
        paragraphs: [
          'Auftragsbezogene Disposition richtet sich nach konkreten Kundenaufträgen, Produktionsprogrammen oder Projekten. Sie ist besonders nützlich, wenn der Materialbedarf aus Aufträgen und Stücklisten nachvollziehbar abgeleitet werden kann.',
          'Verbrauchsgesteuerte Disposition reagiert auf Bestände, Verbrauchsverläufe oder festgelegte Bestandsgrenzen. Sie passt eher zu regelmäßig benötigten Artikeln, bei denen der genaue Bedarf nicht bereits aus einzelnen Aufträgen feststeht.',
          [
            'Die Datenbasis und Grenzen dieser Ansätze erläutert die Seite ',
            { type: 'link', href: '/wissen/methoden-bedarfsermittlung', text: 'Methoden der Bedarfsermittlung' },
            '. Die Entscheidung, wann eine Nachbestellung ausgelöst wird, behandelt die Seite ',
            { type: 'link', href: '/wissen/bestellverfahren', text: 'Bestellverfahren' },
            '.',
          ],
        ],
      },
      {
        heading: 'Bestell- und Fertigungsvorschläge richtig verstehen',
        paragraphs: [
          'Ein System kann aus dem Nettobedarf einen Vorschlag erzeugen: zum Beispiel eine Bestellung bei einem Lieferanten oder einen Fertigungsauftrag für eine Baugruppe. Der Vorschlag kann auf Losgrößen, Mindestmengen, Lieferzeiten, Kalendern oder bevorzugten Bezugsquellen beruhen.',
          'Automatisch bedeutet nicht fehlerfrei. Ein Vorschlag ist so gut wie die zugrunde liegenden Daten und Regeln. Bei stark schwankender Nachfrage, knappen Kapazitäten, Lieferstörungen oder einmaligen Projekten bleibt fachliche Prüfung besonders wichtig.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Nettobedarf erzeugt einen Bestellvorschlag',
            paragraphs: [
              'Für einen Produktionsauftrag werden 50 Geräte geplant. Jedes Gerät benötigt drei Schraubensätze, daher beträgt der Bruttobedarf 150 Sätze. Im System sind 40 Sätze frei verfügbar, 30 Sätze aus einer bestätigten Bestellung sind als Zugang hinterlegt und der Sicherheitsbestand beträgt 20 Sätze.',
              'Das System ermittelt: 150 + 20 − 40 − 30 = 100 Sätze Nettobedarf. Bei einer hinterlegten Mindestbestellmenge von 100 Sätzen kann daraus ein Bestellvorschlag über 100 Sätze entstehen. Vor der Freigabe werden Liefertermin, Lieferant und aktuelle Bestandssituation geprüft.',
            ],
            effects: [
              'Bedarf: Produktionsauftrag und Stückliste.',
              'Ergebnis: 100 Sätze noch beschaffen, sofern die Daten und Annahmen aktuell sind.',
            ],
          },
        ],
      },
      {
        heading: 'Stammdaten und Parameter entscheiden über die Qualität',
        paragraphs: [
          'Stammdaten beschreiben unter anderem Artikel, Einheiten, Stücklisten, Lieferzeiten, Mindestmengen, Losgrößen und Bezugsquellen. Parameter legen fest, wie das System plant, etwa Sicherheitsbestand, Dispositionsart oder Prüfintervall.',
          'Falsche oder veraltete Stammdaten führen zu falschen Vorschlägen: Eine zu kurze Lieferzeit kann Bestellungen zu spät auslösen, ein falscher Bestand kann Überbestände oder Fehlmengen verursachen, und eine veraltete Stückliste kann den Materialbedarf verfälschen.',
          'Datenpflege ist deshalb keine reine Systemaufgabe. Einkauf, Lager, Produktion und Fachbereiche müssen Änderungen an Materialien, Mengen, Lieferzeiten oder Stücklisten zuverlässig in den Prozess zurückmelden.',
        ],
      },
      {
        heading: 'Vorteile und Grenzen automatisierter Planung',
        paragraphs: [
          'Systeme können viele Artikel, Bestände und Termine schneller und konsistenter verarbeiten als eine manuelle Liste. Sie machen Ausnahmen sichtbar, reduzieren Routineaufwand und unterstützen eine nachvollziehbare Planung über Einkauf, Lager und Produktion hinweg.',
          'Sie kennen jedoch keine Realität außerhalb ihrer Daten. Unerwartete Lieferausfälle, Qualitätsprobleme, falsche Buchungen, nicht gemeldete Bestandsbewegungen oder unrealistische Parameter können zu unpassenden Vorschlägen führen. Automatisierung braucht deshalb klare Verantwortung, Datenqualität und regelmäßige Kontrolle.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Bestellvorschläge ungeprüft freizugeben. Besonders bei Ausnahmen, großen Mengen oder langen Lieferzeiten sollten Daten, Termine und Kapazitäten kontrolliert werden.',
          'Ebenso problematisch sind ungepflegte Stücklisten, Bestände oder Lieferzeiten. Das System kann dann korrekt rechnen und trotzdem ein falsches Ergebnis liefern.',
          'Auch zu viele Sonderregeln können die Disposition unübersichtlich machen. Regeln sollten dokumentiert, verständlich und regelmäßig darauf geprüft werden, ob sie noch zur tatsächlichen Beschaffung passen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Disposition stellt sicher, dass Materialien und Waren in passender Menge und Zeit bereitstehen.',
    'MRP leitet Materialbedarf aus Plänen, Aufträgen und Stücklisten ab.',
    'MRP II erweitert die Planung grundsätzlich um weitere Produktionsaspekte; ERP verbindet Disposition mit weiteren Unternehmensdaten.',
    'Systeme berücksichtigen Bedarf, Bestände, offene Zugänge, Lieferzeiten, Sicherheitsbestände und weitere Planungsparameter.',
    'Bestell- und Fertigungsvorschläge sind Ergebnisse hinterlegter Daten und Regeln und müssen bei Bedarf geprüft werden.',
    'Stammdatenqualität und klare Verantwortlichkeiten sind entscheidend für verlässliche Vorschläge.',
  ],
  commonMistakes: [
    'Bestell- oder Fertigungsvorschläge ohne Prüfung von Termin, Menge und Lieferfähigkeit freigeben',
    'veraltete Stücklisten, Lieferzeiten oder Bestandsdaten im System belassen',
    'Sicherheitsbestand, Mindestmenge oder Losgröße ohne regelmäßige Überprüfung übernehmen',
    'auftragsbezogene und verbrauchsgesteuerte Disposition für alle Artikel gleich anwenden',
    'Systemergebnisse für fehlerhaft halten, obwohl die zugrunde liegenden Stammdaten unpassend sind',
  ],
  faqs: [
    {
      question: 'Was bedeutet Disposition?',
      answer: 'Disposition plant und steuert, welche Materialien oder Waren in welcher Menge und zu welchem Zeitpunkt bereitstehen sollen.',
    },
    {
      question: 'Was ist MRP?',
      answer: 'MRP steht für Material Requirements Planning. Es leitet Materialbedarf aus Plänen, Aufträgen und Stücklisten ab und gleicht ihn mit Beständen und Zugängen ab.',
    },
    {
      question: 'Was ist der Unterschied zwischen MRP und ERP?',
      answer: 'MRP fokussiert die Materialbedarfsplanung. Ein ERP-System kann diese Planung mit Daten und Prozessen aus weiteren Unternehmensbereichen verbinden.',
    },
    {
      question: 'Warum führen falsche Stammdaten zu falschen Vorschlägen?',
      answer: 'Das System rechnet mit hinterlegten Beständen, Stücklisten, Lieferzeiten und Parametern. Sind diese falsch oder veraltet, kann der rechnerische Vorschlag unpassend sein.',
    },
    {
      question: 'Müssen automatische Bestellvorschläge geprüft werden?',
      answer: 'Ja, besonders bei Ausnahmen, großen Mengen oder unsicherer Lieferlage. Ein Vorschlag ersetzt nicht die Prüfung von Daten, Termin, Kapazität und Lieferfähigkeit.',
    },
  ],
  related: [
    'bedarfsermittlung',
    'methoden-bedarfsermittlung',
    'bestellverfahren',
    'optimale-bestellmenge',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default mrpErpDisposition;
