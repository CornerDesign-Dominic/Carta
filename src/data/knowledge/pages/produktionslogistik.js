import { defaultDisclaimer } from '../shared.js';

const produktionslogistik = {
  slug: 'produktionslogistik',
  category: 'Supply Chain & Logistik',
  title: 'Produktionslogistik',
  description: 'Produktionslogistik einfach erklärt: Material innerhalb der Fertigung bereitstellen, Flüsse steuern und Durchlaufzeiten sowie Bestände sinnvoll abwägen.',
  seo: {
    title: 'Produktionslogistik einfach erklärt | Belege24',
    description: 'Erfahre, wie Produktionslogistik Materialbereitstellung, innerbetrieblichen Transport, Puffer, Takt und Produktionsversorgung verbindet.',
    canonicalPath: '/wissen/produktionslogistik',
  },
  article: {
    intro: 'Produktionslogistik steuert den Materialfluss innerhalb der Fertigung. Sie sorgt dafür, dass Rohstoffe, Teile und Baugruppen in passender Menge, Reihenfolge und Zeit am benötigten Arbeitsplatz bereitstehen.',
    sections: [
      {
        heading: 'Was ist Produktionslogistik?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'produktionslogistik', text: 'Produktionslogistik' },
            ' verbindet Materialbereitstellung, innerbetrieblichen Transport, Zwischenlager und Rückmeldungen aus der Fertigung. Sie betrachtet den Weg vom bereitgestellten Ausgangsmaterial bis zum Fertigprodukt und die Übergaben zwischen einzelnen Produktionsschritten.',
          ],
          'Ihr Ziel ist nicht nur ein schneller Materialfluss. Material muss auch in passender Qualität, Menge und Reihenfolge verfügbar sein. Fehlende Teile, falsch bereitgestellte Varianten oder überfüllte Zwischenlager können die Produktion ebenso stören wie ein fehlender Transport.',
        ],
        formulaCards: [
          {
            label: 'Ablauf',
            title: 'Material durch die Produktion führen',
            formula: 'Materialbereitstellung → Fertigung → Zwischenstufen → Fertigprodukt',
            description: 'Informations- und Materialfluss müssen zusammenpassen. Je nach Produkt gibt es zusätzliche Prüf-, Lager-, Montage- oder Verpackungsschritte.',
          },
        ],
      },
      {
        heading: 'Materialbereitstellung und innerbetrieblicher Transport',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'materialfluss', text: 'Materialfluss' },
            ' umfasst die Bewegung von Rohstoffen, Teilen und Baugruppen zum Arbeitsplatz, zwischen Fertigungsstufen und in Richtung Fertigwarenbereich. Bereitstellung kann über Lagerpersonal, Routenzüge, Fördertechnik oder andere innerbetriebliche Transporte erfolgen.',
          ],
          'Wichtig sind klare Übergabepunkte, Kennzeichnung und Rückmeldung. Nur wenn sichtbar ist, welche Menge wo liegt, was bereits verbraucht wurde und was noch benötigt wird, kann die Versorgung zuverlässig nachgesteuert werden.',
        ],
      },
      {
        heading: 'Zwischenlager, Puffer und Umlaufbestände',
        paragraphs: [
          [
            { type: 'glossary', id: 'umlaufbestand', text: 'Umlaufbestände' },
            ' sind Materialien oder Baugruppen, die sich zwischen Prozessschritten befinden. Zwischenlager und Puffer können kurze Schwankungen abfedern und verhindern, dass eine Störung sofort alle nachfolgenden Schritte stoppt.',
          ],
          'Zu große Puffer erhöhen jedoch Kapitalbindung, Flächenbedarf und Suchaufwand. Sie können Probleme wie unklare Reihenfolgen, Qualitätsfehler oder Engpässe verdecken. Die passende Puffergröße hängt von Takt, Störanfälligkeit, Durchlaufzeit und Bedeutung der Teile ab.',
        ],
      },
      {
        heading: 'Reihenfolge, Takt und Produktionsversorgung',
        paragraphs: [
          'Bei getakteter Fertigung muss das richtige Material nicht nur irgendwann, sondern in der benötigten Reihenfolge eintreffen. Änderungen in Auftrag, Variante oder Priorität müssen deshalb schnell in die Materialversorgung übernommen werden.',
          [
            'Bei ',
            { type: 'link', href: '/wissen/just-in-time-sequence', text: 'Just-in-Time & Just-in-Sequence' },
            ' werden Mengen und Zeitfenster eng an den Bedarf gekoppelt. ',
            { type: 'link', href: '/wissen/kanban-steuerung', text: 'Kanban-Steuerung' },
            ' kann für wiederkehrende Materialien mit klaren Regelkreisen den Verbrauch als Nachschubsignal nutzen.',
          ],
          'Beide Konzepte brauchen stabile Abläufe, verlässliche Daten und klare Verantwortlichkeiten. Bei stark schwankendem Bedarf oder häufigen Störungen können zusätzliche Puffer oder andere Steuerungsregeln erforderlich sein.',
        ],
      },
      {
        heading: 'Durchlaufzeiten und Engpässe',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'durchlaufzeit', text: 'Durchlaufzeit' },
            ' umfasst nicht nur die Bearbeitung, sondern oft auch Warte-, Transport-, Liege- und Prüfzeiten. Lange Durchlaufzeiten können die Reaktionsfähigkeit verringern und Bestände zwischen den Schritten erhöhen.',
          ],
          'Ein Engpass entsteht, wenn ein Arbeitsplatz, Material, Transportmittel oder eine Prüfung den Gesamtfluss begrenzt. Mehr Material vor einem Engpass löst die Ursache nicht automatisch; es kann stattdessen Umlaufbestand und Wartezeit erhöhen. Ursachen, Kapazität und Reihenfolge sollten gemeinsam geprüft werden.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Fehlende Baugruppe am Montageplatz',
            paragraphs: [
              'Eine Montage benötigt alle 20 Minuten eine Baugruppe. Eine vorherige Fertigungsstufe liefert die Baugruppen verspätet, weil eine Rückmeldung über eine Prioritätsänderung nicht an die Materialversorgung weitergegeben wurde.',
              'Der Montageplatz wartet, obwohl an anderer Stelle Bestand vorhanden ist. Eine eindeutige Rückmeldung zu Priorität, Bestand und Übergabe ermöglicht, die Baugruppe gezielt bereitzustellen und die Ursache der Verzögerung zu prüfen.',
            ],
            effects: [
              'Folge: Wartezeit am Montageplatz und längere Durchlaufzeit.',
              'Ansatz: Informationsfluss und Materialbereitstellung an der Schnittstelle verbessern.',
            ],
          },
        ],
      },
      {
        heading: 'Schnittstelle zur Produktionsplanung',
        paragraphs: [
          [
            'Produktionsplanung gibt vor, welche Mengen und Termine benötigt werden. Die Produktionslogistik setzt diese Vorgaben in Materialbereitstellung, Transporte und Bestandsregeln um und meldet Abweichungen zurück. ',
            { type: 'link', href: '/wissen/mrp-erp-disposition', text: 'MRP, ERP & systembasierte Disposition' },
            ' erklärt, wie Systeme Bedarfe, Bestände, offene Zugänge und Stücklisten für Planungs- und Beschaffungsvorschläge verbinden.',
          ],
          'Stammdaten, Stücklisten, Rückmeldungen und Bestandsdaten müssen aktuell sein. Andernfalls können Systeme und Mitarbeitende Material am falschen Ort, zum falschen Termin oder in falscher Menge einplanen.',
        ],
      },
      {
        heading: 'Typische Fehler',
        paragraphs: [
          'Ein häufiger Fehler ist, Zwischenlager pauschal zu reduzieren, ohne Takt, Störungsrisiko und Wiederbeschaffungszeit zu prüfen. Zu kleine Puffer können Ausfälle weitergeben, zu große Puffer Probleme verdecken.',
          'Auch eine hohe Materialmenge am Arbeitsplatz ist nicht automatisch Versorgungssicherheit. Unklare Kennzeichnung, fehlende Varianten oder falsche Reihenfolge können trotz Bestand zu Stillstand führen.',
          'Produktionslogistik sollte nicht losgelöst von Planung, Qualität und Instandhaltung gesteuert werden. Engpässe und lange Durchlaufzeiten entstehen häufig an ihren Schnittstellen.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Produktionslogistik steuert Material und Informationen innerhalb der Fertigung.',
    'Rohstoffe, Teile und Baugruppen müssen in passender Menge, Reihenfolge und Zeit bereitstehen.',
    'Zwischenlager und Umlaufbestände können Störungen abfedern, erhöhen aber Kapitalbindung und Flächenbedarf.',
    'JIT/JIS und Kanban sind mögliche Konzepte für eine bedarfsgerechte Produktionsversorgung.',
    'Durchlaufzeiten enthalten neben Bearbeitung auch Warte-, Transport-, Liege- und Prüfzeiten.',
    'Aktuelle Planungs-, Bestands- und Rückmeldedaten sind Voraussetzung für eine zuverlässige Versorgung.',
  ],
  commonMistakes: [
    'Material nur in Menge und nicht auch nach Variante, Reihenfolge und Bereitstellungszeit planen',
    'Zwischenlager ohne Prüfung von Takt, Störungsrisiko und Durchlaufzeit pauschal erhöhen oder abbauen',
    'hohe Bestände am Arbeitsplatz mit einer funktionierenden Materialversorgung verwechseln',
    'Engpässe durch zusätzliches Material statt durch Ursachenanalyse behandeln',
    'Planungs-, Bestands- und Rückmeldedaten zwischen Produktion und Logistik nicht synchron halten',
  ],
  faqs: [
    {
      question: 'Was ist Produktionslogistik?',
      answer: 'Sie organisiert Material und Informationen innerhalb der Fertigung, damit Rohstoffe, Teile und Baugruppen rechtzeitig am benötigten Arbeitsplatz bereitstehen.',
    },
    {
      question: 'Was sind Umlaufbestände?',
      answer: 'Das sind Materialien oder Baugruppen, die sich zwischen einzelnen Prozessschritten befinden und noch nicht zum Fertigprodukt geworden sind.',
    },
    {
      question: 'Warum sind Zwischenlager nötig?',
      answer: 'Sie können kurze Schwankungen und Störungen abfedern. Zu große Bestände erhöhen jedoch Kapitalbindung, Flächenbedarf und Wartezeiten.',
    },
    {
      question: 'Welche Rolle spielt Kanban in der Produktion?',
      answer: 'Kanban kann bei wiederkehrenden Materialien den tatsächlichen Verbrauch als Signal für Nachschub nutzen. Es braucht klare Regelkreise und stabile Abläufe.',
    },
    {
      question: 'Was verursacht lange Durchlaufzeiten?',
      answer: 'Neben Bearbeitung können Wartezeiten, Transporte, Liegezeiten, Prüfungen, fehlendes Material oder Engpässe die Durchlaufzeit verlängern.',
    },
  ],
  related: [
    'kanban-steuerung',
    'just-in-time-sequence',
    'mrp-erp-disposition',
    'grundlagen-logistik',
  ],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default produktionslogistik;
