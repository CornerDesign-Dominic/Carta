import { defaultDisclaimer } from '../shared.js';

const stueckgutTeilladungKomplettladung = {
  slug: 'stueckgut-teilladung-komplettladung',
  category: 'Supply Chain & Logistik',
  title: 'Stückgut, Teilladung & Komplettladung',
  description: 'Stückgut, Teilladung (LTL) und Komplettladung (FTL) verständlich vergleichen: Sendungsgröße, Umschlag, Laufzeit, Auslastung und typische Einsatzfälle.',
  seo: {
    title: 'Stückgut, LTL und FTL erklärt | Belege24',
    description: 'Erfahre, worin sich Stückgut, Teilladung und Komplettladung unterscheiden und wann welche Transportform zu Menge, Termin und Ablauf passt.',
    canonicalPath: '/wissen/stueckgut-teilladung-komplettladung',
  },
  article: {
    intro: 'Stückgut, Teilladung und Komplettladung beschreiben, wie viel Laderaum eine Sendung beansprucht und wie sie in einen Transportablauf passt. Die Begriffe helfen bei der Planung, sind aber keine starren gesetzlichen Kategorien: Speditionen und Transportnetzwerke verwenden sie je nach Produkt und Relation teilweise unterschiedlich.',
    sections: [
      {
        heading: 'Stückgut und Sammelgut',
        paragraphs: [
          [
            { type: 'glossary', id: 'stueckgut', text: 'Stückgut' },
            ' besteht aus einzelnen versandfähigen Einheiten, zum Beispiel Kartons, Paletten, Kisten oder Maschinen. Typisch ist, dass eine einzelne Sendung keinen Lkw ausfüllt und deshalb zusammen mit anderen Sendungen transportiert wird.',
          ],
          [
            'Werden Sendungen mehrerer Auftraggeber gebündelt, spricht man häufig von ',
            { type: 'glossary', id: 'sammelgut', text: 'Sammelgut' },
            '. Die Ware wird dabei in einem Netz abgeholt, an Umschlagpunkten sortiert oder konsolidiert und zu Zielregionen weiterbefördert. Das kann eine gute Auslastung ermöglichen, bringt aber zusätzliche Übergaben und damit mehr Abstimmung in den Ablauf.',
          ],
          [
            'Wie solche Transporte geplant und gesteuert werden, erklärt die ',
            { type: 'link', href: '/wissen/transportlogistik', text: 'Transportlogistik' },
            '. Für die Vertragsrollen bei der Organisation oder Durchführung des Transports hilft die Seite zu ',
            { type: 'link', href: '/wissen/spedition-frachtfuehrer', text: 'Spedition und Frachtführer' },
            '.',
          ],
        ],
      },
      {
        heading: 'Teilladung (LTL)',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'teilladung-ltl', text: 'Teilladung' },
            ' – oft als LTL für „Less Than Truckload“ bezeichnet – nutzt einen relevanten Teil der Fahrzeugkapazität, aber nicht den gesamten Laderaum. Sie kann mit anderen Sendungen kombiniert werden oder auf einer speziellen Relation laufen.',
          ],
          'Im Vergleich zu kleinteiligem Stückgut gibt es oft weniger einzelne Positionen und weniger komplexe Verteilung. Ob eine Sendung als LTL gilt, hängt in der Praxis etwa von Gewicht, Volumen, benötigten Stellplätzen, Laufweg und dem jeweiligen Dienstleister ab. Die Bezeichnung allein legt deshalb weder Preis noch Laufzeit fest.',
        ],
      },
      {
        heading: 'Komplettladung (FTL)',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'komplettladung-ftl', text: 'Komplettladung' },
            ' – häufig FTL für „Full Truckload“ – ist für einen Auftraggeber oder eine Sendung so geplant, dass ein Fahrzeug beziehungsweise dessen Ladefläche im Wesentlichen exklusiv genutzt wird. Sie kann auch sinnvoll sein, wenn ein Auftrag besondere Anforderungen an Termin, Sicherheit, Temperatur oder Ladungstrennung stellt.',
          ],
          [
            'Oft kann eine Komplettladung als ',
            { type: 'glossary', id: 'direktverkehr', text: 'Direktverkehr' },
            ' ohne planmäßige Umschläge zwischen Start und Ziel laufen. Das kann Übergaberisiken und Laufzeit verringern. Eine direkte Fahrt ist aber nicht automatisch eine FTL, und eine FTL kann je nach Tour oder Vertrag trotzdem zusätzliche Stopps enthalten.',
          ],
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Stückgut vs. LTL vs. FTL',
            formula: 'Stückgut: einzelne Einheiten, häufig Netz und Umschlag\nLTL: Teil der Fahrzeugkapazität, oft mit weiteren Sendungen kombiniert\nFTL: Fahrzeugkapazität im Wesentlichen exklusiv, häufig direkte Relation möglich',
            description: 'Laufzeit, Umschlag, Auslastung und Kostenlogik richten sich nach Sendung, Strecke, Transportnetz, Zeitfenster und konkreter Vereinbarung. Die Begriffe werden im Markt nicht überall exakt gleich abgegrenzt.',
          },
        ],
      },
      {
        heading: 'Sendungsgröße, Umschlag und Kostenlogik',
        paragraphs: [
          'Bei Stückgut verteilen sich Transportkapazitäten, Abholung und Zustellung auf mehrere Sendungen. Dafür sind häufig Sortierung und Umschlag in einem Netzwerk nötig. Je mehr Übergaben erforderlich sind, desto wichtiger werden korrekte Kennzeichnung, Dokumentation und Terminsteuerung.',
          'Eine Teilladung verbindet einen Teil der Fahrzeugkapazität mit der Möglichkeit, weitere Mengen auf derselben Relation mitzunehmen. Eine Komplettladung kann die Abwicklung vereinfachen, wenn die Menge oder Anforderungen ein Fahrzeug weitgehend auslasten. Sie kann jedoch bei einer kleinen Sendung eine geringe Auslastung bedeuten.',
          'Kosten sollten deshalb nicht nur als Preis je Palette oder je Kilometer betrachtet werden. Relevant sind unter anderem Abholung, Zustellung, Umschlag, Wartezeiten, benötigtes Fahrzeug, Zeitfenster und die Folgen einer späteren Lieferung. Welche Form wirtschaftlich passt, ist eine Einzelfallentscheidung der Transportplanung.',
        ],
      },
      {
        heading: 'Praxisbeispiele',
        paragraphs: [
          'Die passende Transportform ergibt sich aus Ware, Menge, Ziel, Termin und Transportnetz. Die folgenden Fälle zeigen typische Tendenzen, keine festen Zuordnungsregeln.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Zwei Paletten an einen Fachhändler',
            paragraphs: [
              'Ein Hersteller verschickt zwei Paletten zu einem Fachhändler in einer anderen Region. Die Menge füllt kein Fahrzeug. Sie wird zusammen mit anderen Sendungen abgeholt, über ein Umschlagterminal sortiert und in die Zielregion transportiert.',
              'Das ist ein typischer Stückgut- oder Sammelgutablauf. Der Versender plant zusätzliche Zeit für Abholung, Umschlag und Zustellung ein. Wichtig sind eindeutige Kennzeichnung und eine passende Verpackung für die Übergaben.',
            ],
            effects: [
              'Gute Bündelung mehrerer kleiner Sendungen möglich.',
              'Mehrere Übergaben können die Laufzeit und das Risiko von Informations- oder Handhabungsfehlern erhöhen.',
            ],
          },
          {
            title: 'Beispiel: Acht Paletten für einen regionalen Kunden',
            paragraphs: [
              'Ein Großhändler liefert acht Paletten an einen Kunden auf einer regelmäßig bedienten Relation. Die Menge belegt einen deutlichen Teil des Laderaums, lässt aber Platz für weitere passende Sendungen.',
              'Eine Teilladung kann geeignet sein, wenn Zeitfenster, Ladefähigkeit und Route mit weiteren Aufträgen vereinbar sind. Muss der Kunde kurzfristig und ohne zusätzliche Umschläge beliefert werden, kann trotz unvollständiger Auslastung eine direkte Fahrt sinnvoll sein.',
            ],
            effects: [
              'LTL kann Fahrzeugkapazität mit weiteren Sendungen nutzen.',
              'Direkte Beförderung kann bei kritischem Termin Übergaben reduzieren, muss aber gegenüber Auslastung und Gesamtprozess abgewogen werden.',
            ],
          },
          {
            title: 'Beispiel: Produktionsmaterial füllt einen Sattelzug',
            paragraphs: [
              'Ein Zulieferer sendet 33 Paletten Produktionsmaterial an ein Werk. Die Ware nutzt die verfügbare Ladefläche nahezu vollständig und soll am folgenden Morgen in einem festen Zeitfenster eintreffen.',
              'Eine Komplettladung kann den direkten Ablauf erleichtern. Dennoch müssen Ladezeit, mögliche Lenk- und Ruhezeiten, Zufahrt und das Entladefenster realistisch geplant werden; eine FTL ist keine Garantie für eine störungsfreie oder automatisch schnellste Lieferung.',
            ],
            effects: [
              'Hohe Auslastung und klare Zuordnung zu einem Auftrag möglich.',
              'Die Laufzeit hängt weiterhin von Strecke, Termin, Verkehr, Fahrzeugverfügbarkeit und Abwicklung ab.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Missverständnisse',
        paragraphs: [
          'Stückgut ist nicht gleichbedeutend mit einer bestimmten Gewichtsklasse. Entscheidend ist, wie eine Sendung verpackt, gehandhabt und in einem Netzwerk transportiert wird.',
          'LTL und FTL sind keine einheitlichen Grenzwerte. Ein Dienstleister kann eine Sendung nach Palettenstellplätzen einordnen, ein anderer nach Gewicht, Volumen, Fahrzeugtyp oder Relation.',
          'Auch eine Komplettladung ist nicht automatisch die günstigste oder schnellste Wahl. Eine geringe Auslastung, fehlende Fahrzeuge, lange Wartezeiten oder ein unpassendes Zeitfenster können den Vorteil einer direkten Fahrt aufheben.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Stückgut besteht aus einzelnen versandfähigen Einheiten wie Kartons, Kisten oder Paletten.',
    'Sammelgut bündelt Sendungen mehrerer Auftraggeber und nutzt dafür häufig Umschlagnetze.',
    'LTL beschreibt eine Teilladung; FTL eine im Wesentlichen exklusiv genutzte Fahrzeugkapazität.',
    'Direktverkehr kann bei FTL häufig vorkommen, ist aber nicht mit einer Komplettladung gleichzusetzen.',
    'Sendungsgröße, Umschlag, Auslastung, Strecke, Zeitfenster und Ware bestimmen die passende Transportform.',
    'Die Begriffe und ihre Grenzen können je nach Dienstleister und Markt unterschiedlich verwendet werden.',
  ],
  commonMistakes: [
    'Stückgut, LTL und FTL als einheitlich definierte Gewichtsklassen behandeln',
    'eine Komplettladung automatisch als günstigste oder schnellste Transportform ansehen',
    'Umschlag, Abholung, Zustellung und Wartezeiten bei der Laufzeitplanung ausblenden',
    'Auslastung ohne Blick auf Termin, Ware und notwendige Serviceleistung optimieren',
    'Direktverkehr und Komplettladung gleichsetzen',
  ],
  faqs: [
    { question: 'Was ist Stückgut?', answer: 'Stückgut sind einzelne versandfähige Einheiten wie Kartons, Kisten, Paletten oder Maschinen. Kleinere Sendungen werden häufig mit anderen Sendungen gebündelt.' },
    { question: 'Was ist der Unterschied zwischen LTL und FTL?', answer: 'LTL ist eine Teilladung, die nur einen Teil der Fahrzeugkapazität nutzt. FTL beschreibt eine für einen Auftrag weitgehend exklusiv geplante Fahrzeugkapazität.' },
    { question: 'Was bedeutet Sammelgut?', answer: 'Sammelgut bündelt Sendungen mehrerer Auftraggeber. Sie werden oft über Umschlagpunkte sortiert und in Zielregionen weiterbefördert.' },
    { question: 'Ist eine Komplettladung immer ein Direkttransport?', answer: 'Nicht zwingend. Sie läuft häufig direkt, kann aber je nach Tour, Vertrag oder Ablauf auch weitere Stopps oder Übergaben enthalten.' },
    { question: 'Wann ist Stückgut sinnvoll?', answer: 'Typisch ist Stückgut bei kleineren Sendungen, die kein Fahrzeug auslasten. Ob es passt, hängt zusätzlich von Termin, Ware, Transportnetz und Anforderungen ab.' },
  ],
  related: ['transportlogistik', 'spedition-frachtfuehrer', 'verkehrstraeger', 'milk-run'],
  sources: [],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default stueckgutTeilladungKomplettladung;
