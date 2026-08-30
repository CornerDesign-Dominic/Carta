import { defaultDisclaimer } from '../shared.js';

const abcAnalyse = {
  slug: 'abc-analyse',
  category: 'Unternehmensführung',
  title: 'ABC- & XYZ-Analyse',
  description: 'Materialien und andere Objekte mit ABC- und XYZ-Analyse nach Wertbedeutung und Bedarfsregelmäßigkeit einteilen und gemeinsam steuern.',
  seo: {
    title: 'ABC- & XYZ-Analyse einfach erklärt | Belege24',
    description: 'ABC- und XYZ-Analyse getrennt verstehen und in einer 3×3-Matrix kombinieren – mit Formeln, Materialbeispiel und Grenzen.',
    canonicalPath: '/wissen/abc-analyse',
  },
  article: {
    intro: 'Die ABC-Analyse ordnet Objekte nach ihrer wertmäßigen Bedeutung, die XYZ-Analyse nach der Regelmäßigkeit und Planbarkeit ihres Bedarfs. Gemeinsam zeigen beide Verfahren, welche Materialien oder Artikel zugleich wichtig und gut oder schwer planbar sind. Klassengrenzen müssen zum Unternehmen, zur Datenlage und zum Analysezweck passen; starre allgemeingültige Schwellen gibt es nicht.',
    sections: [
      {
        heading: 'ABC- und XYZ-Analyse im Überblick',
        paragraphs: [
          'Beide Verfahren teilen dieselben Objekte aus unterschiedlichen Blickwinkeln ein. Die ABC-Analyse beantwortet: Wie wichtig beziehungsweise wertmäßig bedeutend ist ein Objekt? Die XYZ-Analyse beantwortet: Wie regelmäßig beziehungsweise planbar ist sein Bedarf?',
          'Die Kombination beantwortet damit eine dritte Frage: Wie wichtig und gleichzeitig wie planbar ist ein Objekt? Diese Information kann Einkauf, Lager und Materialwirtschaft bei Bestellrhythmus, Bestandskontrolle und Prognoseaufwand unterstützen.',
        ],
        formulaCards: [{ label: 'Schema', title: 'Zwei Perspektiven verbinden', formula: 'ABC: Wertbedeutung + XYZ: Planbarkeit → ABC-XYZ-Klasse', description: 'Die kombinierte Klasse ergänzt die Analyse. Sie gibt keine automatische Bestell- oder Bestandsentscheidung vor.' }],
      },
      {
        heading: 'ABC-Analyse: nach Wert und Bedeutung einteilen',
        paragraphs: [
          ['Die ', { type: 'glossary', id: 'abc-analyse', text: 'ABC-Analyse' }, ' sortiert Objekte nach einer festgelegten Wertgröße und bildet kumulierte Anteile. A-Objekte leisten den höchsten Beitrag zur gewählten Größe, B-Objekte einen mittleren und C-Objekte einen niedrigeren Beitrag.'],
          'Bei Materialien wird häufig der jährliche Verbrauchswert verwendet. Bei Kunden oder Produkten können Umsatz, Deckungsbeitrag oder eine andere klar definierte Größe sinnvoll sein. Die Klassifizierung sagt nur etwas über diese gewählte Größe aus und nicht automatisch über Risiko oder strategische Bedeutung.',
        ],
        formulaCards: [
          { label: 'Schema', title: 'Ablauf der ABC-Analyse', formula: 'Wert ermitteln → absteigend sortieren → Anteile kumulieren → A-, B- und C-Klassen bilden', description: 'Objekte, Wertgröße, Zeitraum und Klassengrenzen werden vor der Auswertung nachvollziehbar festgelegt.' },
          { label: 'Formel', title: 'Wertanteil eines Objekts', formula: 'Wertanteil = Einzelwert / Gesamtwert × 100', description: 'Einzelwert und Gesamtwert müssen dieselbe Definition und denselben Zeitraum verwenden.' },
        ],
      },
      {
        heading: 'A-, B- und C-Klassen verstehen',
        paragraphs: [
          'A-Objekte sind meist wenige Positionen mit hohem kumuliertem Wertanteil. Sie können eine engere Planung, Kontrolle und Lieferantenbeobachtung rechtfertigen. B-Objekte liegen im mittleren Bereich. C-Objekte sind häufig zahlreich, tragen einzeln aber weniger zum betrachteten Wert bei; hier können einfache, aufwandsarme Abläufe sinnvoll sein.',
          'Typische Prozentgrenzen sind nur Orientierung. Je nach Verteilung, Branche und geplanter Maßnahme können Unternehmen andere Grenzen wählen. Liegen mehrere Werte eng beieinander, sollte eine willkürliche Trennung keine künstliche Genauigkeit vortäuschen.',
        ],
      },
      {
        heading: 'ABC-Analyse Schritt für Schritt',
        paragraphs: ['Die Vorgehensweise bleibt kurz und nachvollziehbar:'],
        list: ['Analyseziel, Objekte, Wertgröße und Zeitraum festlegen', 'Wert je Objekt auf einheitlicher Basis ermitteln', 'Objekte absteigend nach Wert sortieren', 'Einzel- und kumulierte Wertanteile berechnen', 'begründete Grenzen für A, B und C festlegen', 'Klassen auswerten und regelmäßig aktualisieren'],
      },
      {
        heading: 'XYZ-Analyse: nach Regelmäßigkeit und Planbarkeit einteilen',
        paragraphs: [
          ['Die ', { type: 'glossary', id: 'xyz-analyse', text: 'XYZ-Analyse' }, ' untersucht die zeitliche Verteilung von Verbrauch oder Bedarf. Sie ordnet Objekte danach ein, wie regelmäßig sie benötigt werden und wie zuverlässig sich ihr zukünftiger Bedarf aus Vergangenheitsdaten prognostizieren lässt.'],
          ['Die ', { type: 'glossary', id: 'bedarfsregelmaessigkeit', text: 'Bedarfsregelmäßigkeit' }, ' wird anhand ausreichend vieler, vergleichbarer Perioden beurteilt. Neben statistischen Streuungsmaßen können Trend, Saison, einzelne Nullverbräuche und bekannte zukünftige Änderungen berücksichtigt werden. Die konkrete Methode muss dokumentiert sein.'],
        ],
        subsections: [
          { heading: 'X: gleichmäßig und gut planbar', paragraphs: ['X-Objekte weisen einen relativ gleichmäßigen Verbrauch auf. Abweichungen zwischen den Perioden sind im gewählten Betrachtungsrahmen gering, sodass Prognosen häufig vergleichsweise verlässlich sind. Auch hier können Lieferzeit und Ausfallfolgen zusätzliche Bestände erforderlich machen.'] },
          { heading: 'Y: schwankend, trend- oder saisonabhängig', paragraphs: ['Y-Objekte schwanken stärker oder folgen erkennbaren Trends beziehungsweise saisonalen Mustern. Sie können planbar sein, wenn das Muster verstanden und im Prognoseverfahren berücksichtigt wird. Ein einfacher Durchschnitt kann saisonale Spitzen verdecken.'] },
          { heading: 'Z: unregelmäßig und schwer planbar', paragraphs: ['Z-Objekte zeigen unregelmäßige, sporadische oder stark schwankende Bedarfe. Vergangenheitswerte liefern dann nur begrenzte Hinweise für den nächsten Zeitraum. Projektbedarfe, selten benötigte Ersatzteile oder einmalige Sondereffekte können in diese Gruppe fallen.'] },
        ],
      },
      {
        heading: 'XYZ-Klassen und Schwellen festlegen',
        paragraphs: [
          'Unternehmen können die Einteilung anhand fachlich begründeter Regeln, statistischer Kennzahlen oder einer Kombination vornehmen. Der Variationskoeffizient wird häufig als Verhältnis von Standardabweichung zu Mittelwert verwendet, ist bei sehr kleinen Mittelwerten, vielen Nullwerten, Trends oder saisonalen Mustern aber nur eingeschränkt aussagekräftig.',
          'Deshalb wird hier keine allgemeine Formelgrenze für X, Y oder Z vorgegeben. Schwellen unterscheiden sich je nach Datenrhythmus, Branche, Materialart und Prognoseverfahren. Sie sollten an historischen Daten getestet, dokumentiert und bei veränderten Bedingungen überprüft werden.',
        ],
      },
      {
        heading: 'Typische Einsatzbereiche der XYZ-Analyse',
        paragraphs: [
          'In Einkauf und Materialwirtschaft unterstützt die XYZ-Analyse die Auswahl geeigneter Bestell- und Prognoseverfahren. Regelmäßige X-Bedarfe lassen sich häufig anders planen als unregelmäßige Z-Bedarfe. Im Lager kann die Einteilung helfen, Prognoseaufwand, Sicherheitsbestand und Kontrollen gezielter zu prüfen.',
          'Die Klasse allein bestimmt jedoch weder Bestellmenge noch Sicherheitsbestand. Lieferzeit, Mindestbestellmenge, Haltbarkeit, Beschaffungsrisiko, Fehlmengenkosten und bekannte künftige Änderungen bleiben zusätzlich relevant.',
        ],
      },
      {
        heading: 'ABC-XYZ-Matrix',
        paragraphs: [
          ['Die ', { type: 'glossary', id: 'abc-xyz-matrix', text: 'ABC-XYZ-Matrix' }, ' kombiniert jede Wertklasse mit jeder Planbarkeitsklasse. So entstehen neun Felder von AX bis CZ. Die Buchstabenkombination beschreibt eine Position, aber noch keine feste Maßnahme.'],
          'AX bedeutet beispielsweise hoher Wert bei gut planbarem Bedarf. AZ verbindet hohen Wert mit schwer planbarem Bedarf und verlangt häufig besonders sorgfältige Beschaffungs- und Risikoprüfung. CX steht für einen geringeren Wertbeitrag bei regelmäßigem Bedarf und kann für vereinfachte Abläufe geeignet sein.',
        ],
        matrixCards: [{
          title: 'ABC-XYZ-Matrix', columns: 3,
          cells: [
            { code: 'AX', title: 'Hoher Wert · gut planbar', context: 'A + X', text: 'Wirtschaftlich bedeutend und regelmäßig. Präzise Planung sowie enge Wert- und Lieferkontrolle können sinnvoll sein.' },
            { code: 'AY', title: 'Hoher Wert · bedingt planbar', context: 'A + Y', text: 'Hoher Wert trifft auf Trend oder Saison. Muster, Prognose und Beschaffungszeit besonders sorgfältig abstimmen.' },
            { code: 'AZ', title: 'Hoher Wert · schwer planbar', context: 'A + Z', text: 'Wertmäßig bedeutend und unregelmäßig. Risiken, Alternativen, Lieferzeit und Kapitalbindung gemeinsam prüfen.' },
            { code: 'BX', title: 'Mittlerer Wert · gut planbar', context: 'B + X', text: 'Mittlere Wertbedeutung bei regelmäßigem Bedarf. Standardisierte Planung mit angemessener Kontrolle ist häufig möglich.' },
            { code: 'BY', title: 'Mittlerer Wert · bedingt planbar', context: 'B + Y', text: 'Mittlerer Wert und schwankendes Muster. Saison- oder Trendinformationen in die Planung einbeziehen.' },
            { code: 'BZ', title: 'Mittlerer Wert · schwer planbar', context: 'B + Z', text: 'Mittlere Bedeutung bei unregelmäßigem Bedarf. Bestellaufwand und Fehlmengenrisiko gegeneinander abwägen.' },
            { code: 'CX', title: 'Geringer Wert · gut planbar', context: 'C + X', text: 'Geringer Wertbeitrag und regelmäßiger Bedarf. Einfache, gebündelte oder automatisierte Abläufe können passen.' },
            { code: 'CY', title: 'Geringer Wert · bedingt planbar', context: 'C + Y', text: 'Geringer Wert mit saisonaler oder trendbedingter Schwankung. Vereinfachung darf Bedarfsspitzen nicht übersehen.' },
            { code: 'CZ', title: 'Geringer Wert · schwer planbar', context: 'C + Z', text: 'Geringer Wert und unregelmäßiger Bedarf. Prozesskosten, Verfügbarkeit und mögliche Ausfallfolgen getrennt prüfen.' },
          ],
        }],
      },
      {
        heading: 'Praxisbeispiel: Materialien eines Reparaturbetriebs',
        paragraphs: ['Ein Reparaturbetrieb wertet Jahresverbrauchswert und monatliche Bedarfsmuster aus. Die Klassengrenzen wurden intern anhand der eigenen Verteilung festgelegt und sind nicht auf andere Betriebe übertragbar.'],
        exampleCards: [{
          title: 'Vier Materialien in der ABC-XYZ-Matrix',
          paragraphs: ['Steuerungsmodule verursachen einen hohen Jahresverbrauchswert und werden unregelmäßig für größere Reparaturen benötigt. Standardschrauben sind günstig und werden jeden Monat ähnlich oft verbraucht. Spezialdichtungen liegen wertmäßig im Mittelfeld und zeigen saisonale Schwankungen. Ein häufig verbauter Motor ist teuer, sein Bedarf aber relativ stabil.'],
          effects: ['Steuerungsmodul → AZ: hoher Wert, schwer planbarer Bedarf; Lieferfähigkeit, Kapitalbindung und Alternativen eng prüfen', 'Standardschraube → CX: geringer Wert, gut planbarer Bedarf; einfache Sammelbestellungen oder Automatisierung prüfen', 'Spezialdichtung → BY: mittlerer Wert, saisonabhängiger Bedarf; Saisonmuster in der Planung berücksichtigen', 'Motor → AX: hoher Wert, relativ gleichmäßiger Bedarf; Verbrauch und Liefertermine präzise planen', 'Keine Klasse bestimmt allein den Bestand: Lieferzeiten, Ausfallfolgen und Mindestmengen bleiben zusätzlich relevant'],
        }],
      },
      {
        heading: 'Verbindung zu Pareto-Prinzip und Portfolioanalyse',
        paragraphs: [
          ['Das ', { type: 'link', href: '/wissen/pareto-prinzip', text: 'Pareto-Prinzip' }, ' beschreibt die mögliche Konzentration eines großen Wertanteils auf wenige Objekte. Die ABC-Analyse macht eine solche Verteilung durch Sortierung und kumulierte Anteile konkret, ohne ein exaktes 80/20-Verhältnis vorauszusetzen.'],
          ['Wie eine ', { type: 'link', href: '/wissen/portfolioanalyse', text: 'Portfolioanalyse' }, ' betrachtet die ABC-XYZ-Matrix mehrere Objekte anhand zweier Perspektiven. Sie ist jedoch speziell auf Wertbedeutung und Bedarfsregelmäßigkeit ausgerichtet. Grundlagen zu Einkauf und Lager ordnet der Hub ', { type: 'link', href: '/wissen/einkauf-verkauf', text: 'Einkauf & Verkauf' }, ' ein.'],
        ],
      },
      {
        heading: 'Vorteile und Grenzen',
        paragraphs: [
          'Die kombinierte Analyse schafft eine gut lesbare Übersicht und unterstützt eine differenzierte Behandlung von Materialien. Sie trennt wirtschaftliche Bedeutung von Planbarkeit und verhindert damit, dass ein hoher Verbrauchswert automatisch mit einem gleichmäßigen Bedarf verwechselt wird.',
          'Beide Klassifizierungen verdichten Daten und können wichtige Einzelheiten verdecken. Preise, Bedarfe, Lieferzeiten und Märkte verändern sich; Klassen sind deshalb regelmäßig zu aktualisieren. Neue Produkte ohne ausreichende Historie und bekannte künftige Änderungen brauchen eine zusätzliche fachliche Einschätzung.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: ['ABC ordnet nach Wertbedeutung, XYZ nach Bedarfsregelmäßigkeit und Planbarkeit', 'A-, B- und C-Klassen entstehen aus sortierten und kumulierten Wertanteilen', 'X steht für gleichmäßigen, Y für schwankenden oder saisonalen und Z für unregelmäßigen Bedarf', 'Die ABC-XYZ-Matrix kombiniert beide Sichtweisen zu neun Klassen von AX bis CZ', 'Klassengrenzen und daraus abgeleitete Maßnahmen müssen zum Unternehmen und zur Datenlage passen'],
  commonMistakes: ['ABC- und XYZ-Analyse als austauschbare Verfahren behandeln', 'typische Klassengrenzen als universell verbindlich übernehmen', 'ABC-Klassen ohne vorheriges Sortieren und Kumulieren bilden', 'bei der XYZ-Analyse zu wenige oder nicht vergleichbare Perioden verwenden', 'Trend, Saison, Nullverbräuche oder bekannte künftige Änderungen ignorieren', 'hohen Wert automatisch mit hohem Risiko oder regelmäßigem Bedarf gleichsetzen', 'aus einer ABC-XYZ-Klasse automatisch Bestellmenge oder Sicherheitsbestand ableiten', 'Klassen trotz veränderter Preise und Bedarfe nicht aktualisieren'],
  faqs: [
    { question: 'Was ist der Unterschied zwischen ABC- und XYZ-Analyse?', answer: 'ABC bewertet die wertmäßige Bedeutung eines Objekts. XYZ bewertet, wie regelmäßig und prognostizierbar sein Bedarf ist.' },
    { question: 'Was bedeuten X, Y und Z?', answer: 'X steht für gleichmäßigen und gut planbaren, Y für schwankenden, trend- oder saisonabhängigen und Z für unregelmäßigen, schwer planbaren Bedarf.' },
    { question: 'Was bedeutet die Klasse AZ?', answer: 'AZ bezeichnet ein Objekt mit hohem Wertbeitrag und schwer planbarem Bedarf. Beschaffungsrisiko, Lieferzeit und Kapitalbindung sollten besonders sorgfältig geprüft werden.' },
    { question: 'Gibt es feste Grenzen für die Klassen?', answer: 'Nein. Schwellen hängen von Daten, Branche, Analysezweck und verwendeter Methode ab und sollten intern begründet werden.' },
    { question: 'Bestimmt die ABC-XYZ-Klasse den Sicherheitsbestand?', answer: 'Nein. Zusätzlich sind unter anderem Lieferzeit, Serviceziel, Bedarfsverteilung, Fehlmengenkosten, Haltbarkeit und Beschaffungsrisiko zu berücksichtigen.' },
  ],
  related: ['pareto-prinzip', 'einkauf-verkauf', 'portfolioanalyse'],
  sources: [], updatedAt: '2026-08-30', reviewedAt: '2026-08-30', disclaimer: defaultDisclaimer,
};

export default abcAnalyse;
