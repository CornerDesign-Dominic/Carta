import { defaultDisclaimer } from '../shared.js';

const methodenBedarfsermittlung = {
  slug: 'methoden-bedarfsermittlung',
  category: 'Supply Chain & Logistik',
  title: 'Methoden der Bedarfsermittlung',
  description: 'Methoden der Bedarfsermittlung einfach erklärt: deterministische, stochastische und heuristische Verfahren praxisnah vergleichen.',
  seo: {
    title: 'Methoden der Bedarfsermittlung | Belege24',
    description: 'Vergleiche deterministische, stochastische und heuristische Bedarfsermittlung nach Datenbasis, Genauigkeit, Planungsaufwand und passenden Einsatzsituationen.',
    canonicalPath: '/wissen/methoden-bedarfsermittlung',
  },
  article: {
    intro: 'Methoden der Bedarfsermittlung helfen, künftige Mengen möglichst passend zu planen. Welche Methode sinnvoll ist, hängt vor allem davon ab, ob der Bedarf aus konkreten Aufträgen und Stücklisten ableitbar ist oder ob nur Vergangenheitswerte und Erfahrungen vorliegen.',
    sections: [
      {
        heading: 'Bedarfsmethode passend zum Bedarf wählen',
        paragraphs: [
          [
            'Die ',
            { type: 'link', href: '/wissen/bedarfsermittlung', text: 'Bedarfsermittlung' },
            ' klärt, welche Menge bis wann benötigt wird. Die Methode beschreibt, auf welcher Datenbasis diese Menge hergeleitet oder geschätzt wird.',
          ],
          'Abhängiger Bedarf lässt sich aus einem übergeordneten Bedarf ableiten: Aus einem Produktionsauftrag für Fahrräder und einer Stückliste ergibt sich beispielsweise die benötigte Zahl von Rädern und Schrauben. Unabhängiger Bedarf entsteht dagegen direkt, etwa durch Kundennachfrage nach Handelsware oder den Verbrauch von Büroartikeln.',
          'Programmorientierte Verfahren leiten Mengen aus Produktionsprogramm, Kundenaufträgen und Stücklisten ab. Verbrauchsorientierte Verfahren nutzen vor allem vergangene Entnahmen, Bestellungen oder Verkaufsdaten. Beide Ansätze können nebeneinander vorkommen, wenn ein Unternehmen unterschiedliche Güter beschafft.',
        ],
      },
      {
        heading: 'Deterministische Bedarfsermittlung',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'deterministische-bedarfsermittlung', text: 'deterministische Bedarfsermittlung' },
            ' arbeitet mit konkreten Planinformationen. Aus bestätigten Aufträgen, Produktionsprogrammen, Rezepturen oder Stücklisten wird der Materialbedarf rechnerisch abgeleitet.',
          ],
          'Sie eignet sich besonders für abhängigen Bedarf in Produktion oder Projektgeschäft. Ihre Genauigkeit kann hoch sein, wenn Aufträge, Stücklisten, Ausschussannahmen, Bestände und Termine aktuell sind. Ändern sich Mengen oder Stücklisten, muss die Planung nachgezogen werden.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Produktionsauftrag mit Stückliste',
            paragraphs: [
              'Ein Betrieb plant 100 Tische. Laut Stückliste werden pro Tisch vier Tischbeine benötigt. Der Bruttobedarf an Tischbeinen beträgt damit 100 × 4 = 400 Stück.',
              'Vor einer Bestellung werden verfügbarer Bestand, bestätigte Zugänge, Sicherheitsbestand und mögliche Ausschussmengen berücksichtigt. Die Stückliste liefert die nachvollziehbare Grundlage für den Bedarf.',
            ],
            effects: [
              'Datenbasis: Produktionsauftrag und Stückliste.',
              'Passend für: planbare, abhängige Materialien.',
            ],
          },
        ],
      },
      {
        heading: 'Stochastische Bedarfsermittlung',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'stochastische-bedarfsermittlung', text: 'stochastische Bedarfsermittlung' },
            ' schätzt künftige Mengen anhand von Vergangenheitswerten, Verbrauchsverläufen und Wahrscheinlichkeiten. Sie ist sinnvoll, wenn kein konkreter Auftrag oder keine Stückliste den Bedarf eindeutig vorgibt.',
          ],
          'Für regelmäßig benötigte Verbrauchsgüter kann der bisherige Verbrauch ein nützlicher Anhaltspunkt sein. Saison, Aktionen, neue Kunden, Preisänderungen oder ungewöhnliche Ausreißer müssen jedoch berücksichtigt werden. Das Ergebnis ist eine Prognose, keine sichere Zusage.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Vergangenheitsverbrauch von Versandkartons',
            paragraphs: [
              'Ein Onlinehändler hat in den vergangenen sechs Monaten durchschnittlich 1.000 gleichartige Versandkartons pro Monat verbraucht. Für den kommenden Monat liegen noch keine konkreten Kundenaufträge vor.',
              'Der Durchschnitt kann als Ausgangswert für die Planung dienen. Der Händler prüft zusätzlich saisonale Aktionen, erwartete Auftragslage und vorhandenen Bestand, bevor er die Bestellmenge festlegt.',
            ],
            effects: [
              'Datenbasis: vergangene Entnahmen oder Verkäufe.',
              'Grenze: Eine außergewöhnliche Nachfrage kann den Durchschnitt schnell unpassend machen.',
            ],
          },
        ],
      },
      {
        heading: 'Heuristische Bedarfsermittlung',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'heuristische-bedarfsermittlung', text: 'heuristische Bedarfsermittlung' },
            ' nutzt Erfahrungswissen, vereinfachte Regeln oder fachliche Schätzungen. Sie kann helfen, wenn Daten lückenhaft sind, sich Rahmenbedingungen neu ändern oder eine schnelle erste Orientierung gebraucht wird.',
          ],
          'Sie sollte Annahmen transparent machen und nach Möglichkeit mit Daten abgeglichen werden. Je stärker eine Bestellung die Versorgung oder Kapitalbindung beeinflusst, desto weniger sollte eine reine Faustregel die einzige Grundlage sein.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Erfahrungsregel für Verbrauchsmaterial',
            paragraphs: [
              'Eine Werkstattleitung weiß aus Erfahrung, dass bei voller Auslastung pro Woche ungefähr zwei Kanister eines bestimmten Reinigungsmittels benötigt werden. Kurzfristig fehlen verlässliche Verbrauchsdaten, weil das Produkt neu eingeführt wurde.',
              'Die Leitung plant zunächst mit dieser Erfahrungsregel und beobachtet die tatsächlichen Entnahmen. Nach einigen Wochen kann die Regel durch belastbarere Verbrauchsdaten ersetzt oder angepasst werden.',
            ],
            effects: [
              'Datenbasis: Erfahrung und nachvollziehbare Annahmen.',
              'Grenze: Die Methode wird unsicherer, wenn sich Auslastung, Produkt oder Prozess stark ändern.',
            ],
          },
        ],
      },
      {
        heading: 'Die drei Methoden im Vergleich',
        paragraphs: [
          'Die Methoden unterscheiden sich nicht darin, ob sie „richtig“ oder „falsch“ sind. Entscheidend ist, ob die Datenbasis zum jeweiligen Gut und zur Planungssituation passt. In der Praxis werden sie häufig kombiniert.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Datenbasis, Genauigkeit und Aufwand',
            formula: 'Deterministisch: Aufträge und Stücklisten → bei aktuellen Plänen sehr genau\nStochastisch: Vergangenheitsverbrauch und Prognose → bei stabilem Verbrauch nützlich\nHeuristisch: Erfahrung und Faustregel → schnell, aber stärker von Annahmen abhängig',
            description: 'Deterministische Planung benötigt belastbare Plan- und Strukturdaten. Stochastische und heuristische Verfahren gewinnen an Qualität, wenn Annahmen regelmäßig gegen die tatsächliche Entwicklung geprüft werden.',
          },
        ],
      },
      {
        heading: 'Wann welche Methode sinnvoll ist',
        paragraphs: [
          'Deterministische Verfahren passen, wenn der Bedarf aus Aufträgen oder einer Produktion technisch ableitbar ist. Der Planungsaufwand liegt vor allem in der Pflege von Aufträgen, Stücklisten und Stammdaten.',
          'Stochastische Verfahren passen eher zu regelmäßigem, unabhängigen Bedarf mit ausreichender Datenhistorie. Ihre Genauigkeit hängt davon ab, ob der bisherige Verbrauch die Zukunft noch angemessen beschreibt.',
          'Heuristische Verfahren können bei neuen, seltenen oder schwer messbaren Bedarfen eine pragmatische Ergänzung sein. Sie sollten nicht den Eindruck mathematischer Genauigkeit erzeugen und mit zunehmender Datenbasis überprüft werden.',
          [
            { type: 'link', href: '/wissen/bedarfsprognose-forecasting', text: 'Forecasting' },
            ' und ',
            { type: 'link', href: '/wissen/mrp-erp-disposition', text: 'MRP, ERP & systembasierte Disposition' },
            ' können solche Verfahren unterstützen: Prognosen verdichten Daten zu erwarteten Mengen, während Systeme Plan-, Bestands- und Zugangsdatensätze verarbeiten. Die Qualität der Ergebnisse bleibt von den zugrunde liegenden Daten und Regeln abhängig.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler und Grenzen',
        paragraphs: [
          'Ein häufiger Fehler ist, eine Methode für alle Artikel gleich einzusetzen. Ein auftragsbezogenes Spezialteil, ein saisonales Handelsprodukt und ein regelmäßig verbrauchter Hilfsstoff benötigen oft unterschiedliche Daten und Regeln.',
          'Vergangenheitswerte sollten nicht ungeprüft fortgeschrieben werden. Ausreißer, neue Kunden, geänderte Produkte, Preisaktionen oder Lieferprobleme können historische Daten verzerren.',
          'Auch eine deterministische Rechnung bleibt nur so zuverlässig wie Auftrag, Stückliste, Bestand und Terminplanung. Methoden der Bedarfsermittlung ersetzen keine Prüfung der Datenqualität oder der realen Lieferfähigkeit.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Methoden der Bedarfsermittlung leiten oder schätzen künftige Mengen auf unterschiedlichen Datenbasen.',
    'Deterministische Verfahren nutzen Aufträge, Produktionsprogramme und Stücklisten.',
    'Stochastische Verfahren nutzen Vergangenheitsverbrauch und Prognosen.',
    'Heuristische Verfahren arbeiten mit Erfahrung und transparenten Faustregeln.',
    'Programmorientierte Planung passt vor allem zu ableitbarem, abhängigem Bedarf; verbrauchsorientierte Planung zu regelmäßigem, unabhängigem Bedarf.',
    'Genauigkeit und Planungsaufwand hängen von Datenqualität, Stabilität des Bedarfs und gewählter Methode ab.',
  ],
  commonMistakes: [
    'für alle Güter dieselbe Bedarfsmethode verwenden',
    'veraltete Stücklisten, Bestände oder offene Zugänge als belastbare Planungsdaten behandeln',
    'historischen Verbrauch trotz Saison, Ausreißern oder veränderter Nachfrage ungeprüft fortschreiben',
    'Faustregeln als exakte Prognosen behandeln',
    'Bedarfsmethode wählen, ohne Lieferzeit, Mindestmenge und reale Lieferfähigkeit anschließend zu prüfen',
  ],
  faqs: [
    {
      question: 'Was ist deterministische Bedarfsermittlung?',
      answer: 'Sie leitet Bedarf aus konkreten Planinformationen wie Kundenaufträgen, Produktionsprogrammen und Stücklisten ab.',
    },
    {
      question: 'Was ist stochastische Bedarfsermittlung?',
      answer: 'Sie schätzt künftigen Bedarf anhand von Vergangenheitswerten, Verbrauchsverläufen und Wahrscheinlichkeiten.',
    },
    {
      question: 'Was bedeutet heuristische Bedarfsermittlung?',
      answer: 'Sie nutzt Erfahrungswissen, vereinfachte Regeln oder fachliche Schätzungen, wenn Daten lückenhaft oder Situationen neu sind.',
    },
    {
      question: 'Was ist der Unterschied zwischen programm- und verbrauchsorientiert?',
      answer: 'Programmorientierte Verfahren leiten Bedarf aus Aufträgen und Plänen ab. Verbrauchsorientierte Verfahren nutzen vor allem vergangene Entnahmen, Verkäufe oder Verbrauchswerte.',
    },
    {
      question: 'Welche Methode ist am genauesten?',
      answer: 'Das hängt von der Situation ab. Bei aktuellen Aufträgen und Stücklisten kann die deterministische Methode sehr genau sein. Bei unabhängigem, regelmäßigem Bedarf können gut gepflegte Verbrauchsdaten hilfreicher sein.',
    },
  ],
  related: [
    'bedarfsermittlung',
    'beschaffung',
    'operativer-einkauf',
    'optimale-bestellmenge',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default methodenBedarfsermittlung;
