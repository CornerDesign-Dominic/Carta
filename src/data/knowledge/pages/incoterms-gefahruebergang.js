import { defaultDisclaimer } from '../shared.js';

const incotermsGefahruebergang = {
  slug: 'incoterms-gefahruebergang',
  category: 'Supply Chain & Logistik',
  title: 'Incoterms & Gefahrübergang',
  description: 'Incoterms® 2020 einfach erklärt: Kosten, Risiko, Pflichten, Lieferort und Gefahrübergang bei internationalen Warenlieferungen richtig einordnen.',
  seo: {
    title: 'Incoterms & Gefahrübergang erklärt | Belege24',
    description: 'Erfahre, was Incoterms® 2020 regeln, wie Risiko und Kosten verteilt werden und warum Eigentumsübergang, Lieferort und Klauselwahl getrennt zu prüfen sind.',
    canonicalPath: '/wissen/incoterms-gefahruebergang',
  },
  article: {
    intro: 'Incoterms® sind von der Internationalen Handelskammer (ICC) entwickelte Handelsklauseln für Warenkaufverträge. Sie helfen dabei, Lieferort, Kosten, Pflichten und Risiko zwischen Verkäufer und Käufer klar zuzuordnen. Die aktuelle Fassung ist Incoterms® 2020; sie sollte im Vertrag mit Klausel, benanntem Ort oder Hafen und der Jahresangabe eindeutig vereinbart werden.',
    sections: [
      {
        heading: 'Was Incoterms® regeln – und was nicht',
        paragraphs: [
          [
            { type: 'glossary', id: 'incoterms', text: 'Incoterms®' },
            ' verteilen in einem Warenkaufgeschäft insbesondere Aufgaben rund um Lieferung, Transport, Kosten, Risiko, Export- und Importabwicklung sowie gegebenenfalls Versicherung. Sie sind kein Gesetz, sondern werden wirksam, wenn die Parteien sie vereinbaren, zum Beispiel „FCA Hamburg, Incoterms® 2020“. Der genaue benannte Ort oder Hafen ist dabei entscheidend.',
          ],
          'Incoterms® ersetzen keinen vollständigen Kauf-, Transport- oder Versicherungsvertrag. Sie regeln insbesondere nicht den Kaufpreis, Zahlungsbedingungen, Eigentumsübergang, Folgen einer Vertragsverletzung, Gewährleistung oder die konkrete Haftung. Diese Punkte gehören in den Vertrag und richten sich gegebenenfalls nach anwendbarem Recht.',
          [
            'Die operative Umsetzung von Abholung, Hauptlauf, Umschlag und Zustellung beschreibt die ',
            { type: 'link', href: '/wissen/transportlogistik', text: 'Transportlogistik' },
            '. Welche Rolle eine Spedition oder ein Frachtführer dabei übernimmt, erklärt die Seite zu ',
            { type: 'link', href: '/wissen/spedition-frachtfuehrer', text: 'Spedition und Frachtführer' },
            '.',
          ],
        ],
      },
      {
        heading: 'Gefahrübergang ist nicht Eigentumsübergang',
        paragraphs: [
          [
            'Der ',
            { type: 'glossary', id: 'gefahruebergang', text: 'Gefahrübergang' },
            ' bestimmt vereinfacht, ab welchem Punkt der Käufer das Risiko eines zufälligen Untergangs oder einer zufälligen Beschädigung der Ware trägt. Incoterms® legen diesen Punkt für die jeweilige Klausel fest. Kosten- und Risikoübergang können dabei an unterschiedlichen Stellen liegen.',
          ],
          [
            'Der ',
            { type: 'glossary', id: 'eigentumsuebergang', text: 'Eigentumsübergang' },
            ' ist davon getrennt zu beurteilen. Er kann vertraglich oder nach dem anwendbaren Recht anders geregelt sein, etwa durch einen Eigentumsvorbehalt. Aus einer Incoterms®-Klausel allein lässt sich deshalb nicht ableiten, wann Eigentum übergeht.',
          ],
          'Das deutsche Kaufrecht enthält eigene Regeln zum Gefahrübergang, etwa bei Übergabe und in bestimmten Fällen beim Versendungskauf. Ob und wie diese im Einzelfall neben einer vereinbarten Incoterms®-Klausel greifen, hängt von Vertrag, Parteien und anwendbarem Recht ab.',
        ],
        formulaCards: [
          {
            label: 'Grundsatz',
            title: 'Klausel, Ort und Fassung vollständig vereinbaren',
            formula: 'Klausel + genauer benannter Ort/Hafen + „Incoterms® 2020“',
            description: 'Beispiel: „FCA [genauer Ort], Incoterms® 2020“. Ohne präzise Ortsangabe bleibt unklarer, wo Lieferung, Risiko und einzelne Kosten genau zugeordnet werden.',
          },
        ],
      },
      {
        heading: 'Klauseln für jeden Verkehrsträger',
        paragraphs: [
          'EXW, FCA, CPT, CIP, DAP, DPU und DDP können für jeden Verkehrsträger und auch für multimodale Transporte verwendet werden. Sie passen daher häufig zu Containertransporten oder Kombinationen aus Straße, Schiene, Luft- und Seetransport. Die Wahl sollte zur tatsächlichen Lieferkette passen, nicht nur zur vertrauten Abkürzung.',
          'EXW (Ex Works) ordnet die Lieferung grundsätzlich zu, wenn der Verkäufer die Ware am benannten Ort zur Verfügung stellt. FCA (Free Carrier) sieht die Übergabe an den vom Käufer benannten Frachtführer oder eine andere benannte Person am vereinbarten Ort vor; FCA kann insbesondere bei Übergaben an einen Carrier praktikabler sein.',
          'Bei CPT (Carriage Paid To) und CIP (Carriage and Insurance Paid To) organisiert und bezahlt der Verkäufer die Beförderung bis zum benannten Bestimmungsort. Das Risiko geht jedoch grundsätzlich bereits bei Übergabe an den ersten Frachtführer über. Bei CIP besteht zusätzlich eine Versicherungspflicht des Verkäufers nach der Klausel; Umfang und Voraussetzungen sollten im Vertrag geprüft werden.',
          'DAP (Delivered at Place) ordnet die Lieferung am benannten Bestimmungsort zu, wenn die Ware auf dem ankommenden Transportmittel zur Entladung bereitgestellt wird. Bei DPU (Delivered at Place Unloaded) gehört auch das Entladen am benannten Ort zur Verkäuferpflicht. DDP (Delivered Duty Paid) weist dem Verkäufer im Verhältnis der Incoterms® weitreichende Pflichten bis zum benannten Bestimmungsort einschließlich der vereinbarten Importabwicklung zu. Gerade DDP verlangt eine sorgfältige Prüfung, ob der Verkäufer die Importformalitäten im Zielland tatsächlich erfüllen kann.',
        ],
      },
      {
        heading: 'Klauseln für See- und Binnenschifffahrt',
        paragraphs: [
          'FAS, FOB, CFR und CIF sind für See- und Binnenschifffahrt vorgesehen. Sie beziehen sich auf Lieferung an oder auf ein Schiff und passen nicht automatisch zu jedem Container- oder multimodalen Ablauf. Für Containertransporte, die vor dem Laden an einen Carrier oder ein Terminal übergeben werden, kann eine Klausel für jeden Verkehrsträger wie FCA, CPT oder CIP besser passen.',
          'Bei FAS (Free Alongside Ship) liefert der Verkäufer die Ware längsseits des vom Käufer benannten Schiffs im vereinbarten Verschiffungshafen. Bei FOB (Free On Board) erfolgt Lieferung und Risikoübergang, wenn die Ware im Verschiffungshafen an Bord des Schiffs ist.',
          'Bei CFR (Cost and Freight) bezahlt der Verkäufer die Seefracht bis zum benannten Bestimmungshafen, während das Risiko bei Lieferung an Bord im Verschiffungshafen übergeht. CIF (Cost Insurance and Freight) ergänzt CFR um eine Versicherungspflicht des Verkäufers nach der Klausel. Auch hier müssen Vertragsinhalt, Versicherungsumfang und benannte Häfen zueinander passen.',
        ],
        formulaCards: [
          {
            label: 'Vergleich',
            title: 'Incoterms® 2020 im Überblick',
            formula: 'EXW – jeder Verkehrsträger – Risiko bei Bereitstellung – Käufer organisiert Haupttransport – keine Standard-Versicherungspflicht\nFCA – jeder Verkehrsträger – Risiko bei Übergabe am benannten Ort – Käufer organisiert Haupttransport – keine Standard-Versicherungspflicht\nCPT/CIP – jeder Verkehrsträger – Risiko bei Übergabe an ersten Frachtführer – Verkäufer bezahlt Transport bis Ziel – Versicherung bei CIP\nDAP/DPU/DDP – jeder Verkehrsträger – Risiko am Zielort (DPU nach Entladung) – Verkäufer organisiert bis Ziel – keine Standard-Versicherungspflicht\nFAS/FOB – See/Binnen – Risiko am Schiff bzw. an Bord im Abgangshafen – Käufer organisiert Haupttransport – keine Standard-Versicherungspflicht\nCFR/CIF – See/Binnen – Risiko an Bord im Abgangshafen – Verkäufer bezahlt Seefracht bis Zielhafen – Versicherung bei CIF',
            description: 'Die Card vereinfacht die Grundlogik. „Transport“ und „Kosten“ beziehen sich vor allem auf die Hauptbeförderung; Nebenkosten, Formalitäten und genaue Übergabepunkte ergeben sich aus der jeweiligen Klausel, dem benannten Ort/Hafen und dem Vertrag.',
          },
        ],
      },
      {
        heading: 'E-, F-, C- und D-Gruppen richtig einordnen',
        paragraphs: [
          'Die traditionelle Gruppierung kann als Merkhilfe dienen: E steht für EXW mit Bereitstellung beim Verkäufer. F-Klauseln wie FCA, FAS und FOB sehen vor, dass der Käufer den Haupttransport organisiert. Bei C-Klauseln wie CPT, CIP, CFR und CIF bezahlt der Verkäufer den Haupttransport, obwohl das Risiko häufig schon früher übergeht. D-Klauseln wie DAP, DPU und DDP verlagern Lieferung und Risiko weiter Richtung Bestimmungsort.',
          'Die Gruppen ersetzen keine Prüfung der einzelnen Klausel. Besonders bei C-Klauseln ist es ein typischer Denkfehler, Kostenübernahme bis zum Ziel mit Risikotragung bis zum Ziel gleichzusetzen.',
        ],
      },
      {
        heading: 'Praxisbeispiele',
        paragraphs: [
          'Eine passende Klausel wird immer mit Ware, Transportweg, Vertragsrollen, Export- und Importfähigkeit sowie dem gewünschten Lieferort abgestimmt. Die Beispiele zeigen nur die Grundlogik der Klauseln.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: CPT mit Risiko vor dem Bestimmungsort',
            paragraphs: [
              'Ein Verkäufer vereinbart „CPT Kundenlager, Incoterms® 2020“ und beauftragt den Transport bis zum Kundenlager. Er trägt nach der Klausel die Kosten der Beförderung bis zum benannten Ort.',
              'Das Risiko geht trotzdem grundsätzlich schon über, wenn der Verkäufer die Ware dem ersten Frachtführer übergibt. Kosten bis zum Ziel und Risiko bis zum Ziel sind bei CPT daher nicht dasselbe. Die Parteien sollten den Übergabeort und eine gewünschte Versicherung eindeutig regeln.',
            ],
            effects: [
              'Transportkosten bis zum benannten Bestimmungsort: Verkäufer nach der Klausel.',
              'Risiko während des Haupttransports: grundsätzlich Käufer ab Übergabe an den ersten Frachtführer.',
            ],
          },
          {
            title: 'Beispiel: DPU am benannten Terminal',
            paragraphs: [
              'Bei „DPU Terminal X, Incoterms® 2020“ organisiert der Verkäufer die Lieferung bis zum benannten Terminal und muss die Ware dort nach der Klausel entladen. Erst nach dem Entladen ist die Lieferung im Sinne der DPU-Klausel erfolgt.',
              'Der genaue Terminal und eine realistische Entlademöglichkeit müssen feststehen. Ist der Ort unpräzise oder kann der Verkäufer dort nicht verlässlich entladen, kann eine andere Klausel besser passen.',
            ],
            effects: [
              'Entladen am benannten Ort: Verkäuferpflicht nach DPU.',
              'Risiko: grundsätzlich bis zur Lieferung nach Entladung beim Verkäufer.',
            ],
          },
          {
            title: 'Beispiel: FOB für eine Verschiffung',
            paragraphs: [
              'Ein Verkäufer liefert Ware unter „FOB Verschiffungshafen, Incoterms® 2020“. Die Klausel ist auf See- oder Binnenschifffahrt zugeschnitten. Lieferung und Risikoübergang erfolgen, wenn die Ware im Verschiffungshafen an Bord des Schiffs ist.',
              'Bei einem Container, der bereits vorher an ein Terminal oder einen Frachtführer übergeben wird, sollte geprüft werden, ob FCA den tatsächlichen Übergabepunkt besser abbildet. Die Klausel muss zum realen Ablauf passen.',
            ],
            effects: [
              'FOB: See- oder Binnenschifffahrtsklausel.',
              'Bei vorgezogener Übergabe an Carrier oder Terminal kann eine multimodale Klausel geeigneter sein.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler bei der Klauselwahl',
        paragraphs: [
          'Eine Klausel ohne exakten Ort oder Hafen zu verwenden, ist riskant. „FCA Deutschland“ oder „DAP Kunde“ lässt offen, wo Übergabe, Risiko und Kosten genau liegen. Der Ort sollte so genau benannt werden, dass Beteiligte ihn operativ umsetzen können.',
          'Ebenso problematisch ist es, eine Seehandelsklausel wie FOB nur wegen ihrer Bekanntheit für einen Container- oder Multimodaltransport zu verwenden. Ausschlaggebend ist, wo die Ware tatsächlich an wen übergeben wird.',
          'Incoterms® regeln nicht automatisch Eigentum, Zahlung, Haftung oder Versicherungsdeckung. Gerade bei grenzüberschreitenden Geschäften sollten diese Punkte zusätzlich eindeutig vereinbart und bei Unsicherheit fachlich geprüft werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Incoterms® 2020 verteilen bei vereinbarter Anwendung Aufgaben, Kosten und Risiko im Warenkaufgeschäft.',
    'Klausel, genauer benannter Ort oder Hafen und die Fassung „Incoterms® 2020“ sollten vollständig vereinbart werden.',
    'Gefahrübergang und Eigentumsübergang sind unterschiedliche Fragen.',
    'EXW, FCA, CPT, CIP, DAP, DPU und DDP gelten für jeden Verkehrsträger; FAS, FOB, CFR und CIF für See- und Binnenschifffahrt.',
    'Bei CPT, CIP, CFR und CIF kann der Verkäufer den Haupttransport bezahlen, obwohl das Risiko früher übergeht.',
    'Incoterms® ersetzen keine vollständigen Kauf-, Transport- oder Versicherungsverträge.',
  ],
  commonMistakes: [
    'Klausel ohne genauen Ort oder Hafen und ohne die Fassung Incoterms® 2020 vereinbaren',
    'Kostenübernahme bis zum Ziel mit Risikotragung bis zum Ziel gleichsetzen',
    'Eigentumsübergang aus einer Incoterms®-Klausel ableiten',
    'FOB, CFR oder CIF für einen Ablauf verwenden, bei dem die Ware vor der Verladung an einen Carrier oder ein Terminal übergeben wird',
    'Import- und Exportpflichten, Versicherungsumfang, Zahlung und Haftung nicht zusätzlich im Vertrag regeln',
  ],
  faqs: [
    { question: 'Was sind Incoterms®?', answer: 'Incoterms® sind ICC-Handelsklauseln, die bei ihrer Vereinbarung Aufgaben, Kosten und Risiko zwischen Verkäufer und Käufer im Warenkaufgeschäft zuordnen.' },
    { question: 'Welche Incoterms®-Fassung ist aktuell?', answer: 'Die aktuelle Fassung ist Incoterms® 2020. Im Vertrag sollten Klausel, genauer benannter Ort oder Hafen und „Incoterms® 2020“ genannt werden.' },
    { question: 'Regeln Incoterms® den Eigentumsübergang?', answer: 'Nein. Incoterms® ordnen Lieferung, Kosten, Risiko und Pflichten zu. Der Eigentumsübergang muss gesondert vertraglich und nach dem anwendbaren Recht beurteilt werden.' },
    { question: 'Was ist der Unterschied zwischen DAP und DPU?', answer: 'Bei DAP wird die Ware am benannten Ort auf dem ankommenden Transportmittel zur Entladung bereitgestellt. Bei DPU gehört das Entladen am benannten Ort zur Verkäuferpflicht.' },
    { question: 'Wann sind FOB, CFR und CIF passend?', answer: 'Diese Klauseln sind für See- und Binnenschifffahrt vorgesehen. Bei Container- oder Multimodaltransporten sollte geprüft werden, ob eine Klausel für jeden Verkehrsträger den tatsächlichen Übergabepunkt besser abbildet.' },
  ],
  related: ['transportlogistik', 'spedition-frachtfuehrer', 'frachtkosten', 'verkehrstraeger'],
  sources: [
    { label: 'ICC – Incoterms® 2020', url: 'https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/' },
    { label: 'ICC – Regeln für jeden Verkehrsträger und See-/Binnenschifffahrt', url: 'https://library.iccwbo.org/content/tfb/BOOKS/BK_0049/BK_0049_04_RulesAny.htm' },
    { label: '§ 446 BGB – Gefahr- und Lastenübergang', url: 'https://www.gesetze-im-internet.de/bgb/__446.html' },
    { label: '§ 447 BGB – Gefahrübergang beim Versendungskauf', url: 'https://www.gesetze-im-internet.de/bgb/__447.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default incotermsGefahruebergang;
