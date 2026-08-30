import { defaultDisclaimer } from '../shared.js';

const kassenbuch = {
  slug: 'kassenbuch',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'Kassenbuch',
  description: 'Kassenbuch einfach erklärt: Kassenbestand, tägliche Erfassung, Kassensturzfähigkeit, offene Ladenkasse, GoBD und typische Fehler.',
  seo: {
    title: 'Kassenbuch richtig führen | Belege24',
    description: 'Erfahre, was ein Kassenbuch enthält, wann es relevant ist und wie Kassensturz, Einzelaufzeichnung, offene Ladenkasse und GoBD zusammenhängen.',
    canonicalPath: '/wissen/kassenbuch',
  },
  article: {
    intro: 'Ein Kassenbuch dokumentiert alle betrieblichen Bargeldbewegungen und den laufenden Kassenbestand. Es hilft nachzuvollziehen, wie viel Bargeld tatsächlich in der Kasse vorhanden sein muss – und ist bei Buchführungspflichtigen für Bargeldbewegungen regelmäßig erforderlich.',
    sections: [
      {
        heading: 'Was ist ein Kassenbuch?',
        paragraphs: [
          [
            'Ein ',
            { type: 'glossary', id: 'kassenbuch', text: 'Kassenbuch' },
            ' erfasst betriebliche Bareinnahmen und Barausgaben in zeitlicher Reihenfolge. Es verbindet den Anfangsbestand der Kasse mit den einzelnen Bargeldbewegungen und dem rechnerischen Endbestand.',
          ],
          'Ein Kassenbuch ist nicht einfach eine Liste einzelner Quittungen oder eine nachträglich zusammengestellte Ausgabenübersicht. Es soll den tatsächlichen Bargeldbestand nachvollziehbar machen. Wer kein Bargeld annimmt oder ausgibt, braucht dafür kein Kassenbuch.',
        ],
        formulaCards: [
          {
            title: 'Tägliche Kassenlogik',
            formula: 'Anfangsbestand + Einnahmen − Ausgaben = Kassenendbestand',
            description: 'Der rechnerische Kassenendbestand muss zum tatsächlich gezählten Bargeld passen.',
          },
        ],
      },
      {
        heading: 'Wann ist ein Kassenbuch relevant oder erforderlich?',
        paragraphs: [
          'Nicht jedes Unternehmen muss pauschal ein Kassenbuch führen. Entscheidend ist, ob betriebliche Bargeldbewegungen stattfinden und ob eine Buchführungs- oder Aufzeichnungspflicht besteht. Wer keine Barkasse führt, hat auch keinen Kassenbestand zu dokumentieren.',
          [
            'Für ',
            { type: 'glossary', id: 'buchfuehrung', text: 'buchführungspflichtige' },
            ' Steuerpflichtige nennt der aktuelle Anwendungserlass zur AO für Bargeldbewegungen ein Kassenbuch, gegebenenfalls in Form aneinandergereihter Kassenberichte. Auch freiwillig geführte steuerlich relevante Aufzeichnungen müssen die Ordnungsvorschriften der AO erfüllen.',
          ],
          'Im Kassenbuch stehen nur betriebliche Bargeldvorgänge. Banküberweisungen, Kartenzahlungen oder private Ausgaben gehören nicht als Barbewegung hinein, auch wenn sie für andere Aufzeichnungen relevant sein können.',
        ],
      },
      {
        heading: 'Kassenbuch und einfache Kassenaufzeichnung',
        paragraphs: [
          'Ein vollständiges Kassenbuch zeigt Anfangsbestand, einzelne Einnahmen und Ausgaben, Belege oder nachvollziehbare Belegverweise sowie den fortgeschriebenen oder zumindest täglich nachvollziehbaren Kassenbestand. Es dient besonders dazu, die Bargeldbewegungen in der Buchführung zu dokumentieren.',
          'Eine einfache Kassenaufzeichnung oder ein Kassenbericht kann je nach Situation die Tageslosung und den gezählten Bestand dokumentieren. Sie ist aber nicht automatisch ein vollständiges Kassenbuch. Bei einer offenen Ladenkasse kann der Kassenbericht Teil der erforderlichen Aufzeichnungen sein; welche Form ausreicht, hängt von Art der Kasse, Geschäftsvorfällen und Pflichten des Betriebs ab.',
          'Lose Notizen oder eine erst später aus Erinnerungen erstellte Liste reichen regelmäßig nicht, weil sie die tägliche Entstehung und Nachvollziehbarkeit der Bargeldbewegungen nicht belegen.',
        ],
      },
      {
        heading: 'Welche Angaben gehören typischerweise hinein?',
        paragraphs: [
          'Typisch sind Datum, Belegnummer oder Belegverweis, Beschreibung des Vorgangs, Betrag als Einnahme oder Ausgabe sowie der Kassenbestand. Der Anfangsbestand und der Endbestand müssen klar erkennbar sein.',
          [
            'Jeder Eintrag braucht eine nachvollziehbare Grundlage. Das ',
            { type: 'glossary', id: 'belegprinzip', text: 'Belegprinzip' },
            ' hilft dabei: Zum Beispiel können Kassenbons, Rechnungen, Quittungen oder bei Bedarf Eigenbelege Anlass, Zeitpunkt und Betrag eines Vorgangs belegen.',
          ],
          'Die Aufzeichnungen müssen vollständig, richtig, zeitgerecht und geordnet sein. Kasseneinnahmen und Kassenausgaben sind nach § 146 AO täglich festzuhalten.',
        ],
      },
      {
        heading: 'Kassensturzfähigkeit und negativer Kassenbestand',
        paragraphs: [
          [
            'Kassensturzfähigkeit bedeutet: Der rechnerische Bestand aus dem Kassenbuch muss sich jederzeit mit einem ',
            { type: 'glossary', id: 'kassensturz', text: 'Kassensturz' },
            ' prüfen lassen. Der gezählte Bargeldbestand und die Aufzeichnungen müssen zusammenpassen.',
          ],
          'Ein negativer Kassenbestand kann in einer tatsächlich vorhandenen Barkasse nicht vorkommen. Zeigt das Kassenbuch einen negativen Bestand, weist das auf fehlende, falsche oder zu spät erfasste Vorgänge hin. Die Ursache sollte anhand der Belege und tatsächlichen Bargeldbewegungen geklärt werden, nicht durch rückwirkend unnachvollziehbare Änderungen.',
        ],
      },
      {
        heading: 'Einzelaufzeichnung und zeitgerechte Erfassung',
        paragraphs: [
          [
            'Nach der AO besteht grundsätzlich eine ',
            { type: 'glossary', id: 'einzelaufzeichnung', text: 'Einzelaufzeichnungspflicht' },
            '. Geschäftsvorfälle müssen einzeln, vollständig, richtig, zeitgerecht und geordnet aufgezeichnet werden. Für Kasseneinnahmen und -ausgaben gilt die tägliche Festhaltung ausdrücklich.',
          ],
          'Bei Verkauf von Waren an eine Vielzahl nicht bekannter Personen gegen Barzahlung kann die Einzelaufzeichnung aus Zumutbarkeitsgründen entfallen, wenn keine elektronische Aufzeichnungskasse verwendet wird. Diese Ausnahme ist eng und entbindet nicht von nachvollziehbaren täglichen Kassenaufzeichnungen.',
          'Wer ein elektronisches Aufzeichnungssystem mit Kassenfunktion verwendet, muss die Geschäftsvorfälle grundsätzlich einzeln erfassen. Elektronische Systeme unterliegen zudem den besonderen Anforderungen des § 146a AO und – soweit das System erfasst ist – der KassenSichV.',
        ],
      },
      {
        heading: 'Offene Ladenkasse und elektronische Kassensysteme',
        paragraphs: [
          [
            'Eine ',
            { type: 'glossary', id: 'offene-ladenkasse', text: 'offene Ladenkasse' },
            ' arbeitet ohne elektronisches Aufzeichnungssystem. Ihre Nutzung ist nicht verboten, sie verlangt aber besonders sorgfältige manuelle Aufzeichnungen. Bei einer Erleichterung von der Einzelaufzeichnung müssen die Bareinnahmen mindestens über einen Kassenbericht nachgewiesen werden, der vom gezählten Kassenendbestand ausgeht.',
          ],
          'Elektronische oder computergestützte Kassensysteme und Registrierkassen können elektronische Aufzeichnungssysteme im Sinne der KassenSichV sein. Dann müssen sie die einzelnen Vorgänge ordnungsgemäß erfassen und – soweit § 146a AO anwendbar ist – durch eine zertifizierte technische Sicherheitseinrichtung geschützt werden. Ein reines elektronisches Buchhaltungsprogramm gilt nach § 1 KassenSichV nicht allein deshalb als elektronisches Aufzeichnungssystem.',
        ],
      },
      {
        heading: 'Handschriftlich oder digital führen?',
        paragraphs: [
          'Ein handschriftliches Kassenbuch oder ein Kassenbericht kann bei einer offenen Ladenkasse zulässig sein, wenn die Aufzeichnungen vollständig, richtig, zeitgerecht, geordnet und nachvollziehbar geführt werden. Korrekturen müssen so erfolgen, dass der ursprüngliche Inhalt erkennbar bleibt.',
          [
            'Digitale Aufzeichnungen müssen zusätzlich den Anforderungen der ',
            { type: 'glossary', id: 'gobd', text: 'GoBD' },
            ' entsprechen. Sie müssen insbesondere nachvollziehbar, vollständig und gegen nicht nachvollziehbare Änderungen geschützt sein. Eine frei veränderbare Tabelle ohne geeignete Verfahrens- und Änderungsnachweise erfüllt diese Anforderungen nicht automatisch.',
          ],
          'Welche technische Lösung geeignet ist, hängt von der Kassenart und dem Geschäftsmodell ab. Für eingesetzte Kassensysteme sind die jeweiligen gesetzlichen und technischen Anforderungen gesondert zu prüfen.',
        ],
      },
      {
        heading: 'Beispiel: Ein einfacher Tagesverlauf',
        paragraphs: [
          'Das Beispiel zeigt eine vereinfachte Barkasse ohne Umsatzsteuer und ohne Besonderheiten eines elektronischen Kassensystems.',
        ],
        exampleCards: [
          {
            title: 'Tageskasse eines kleinen Geschäfts',
            paragraphs: [
              'Zu Tagesbeginn befinden sich 120 Euro in der Kasse.',
              'Im Laufe des Tages nimmt das Geschäft 350 Euro bar ein. Für Büromaterial werden 45 Euro bar bezahlt; der Beleg wird dem Vorgang zugeordnet.',
              'Rechnung: 120 Euro Anfangsbestand plus 350 Euro Einnahmen minus 45 Euro Ausgaben ergeben 425 Euro Kassenendbestand.',
              'Beim Kassensturz am Abend werden 425 Euro gezählt. Der tatsächliche Bestand stimmt mit den Aufzeichnungen überein.',
            ],
            effects: [
              'Kassenendbestand: 425 Euro.',
              'Prüfung: Kassenbuch und gezähltes Bargeld sind kassensturzfähig abgestimmt.',
            ],
          },
        ],
      },
      {
        heading: 'Typische Fehler bei Betriebsprüfungen',
        paragraphs: [
          'Häufige Probleme sind fehlende tägliche Aufzeichnungen, nicht belegte Bareinlagen oder Privatentnahmen, negative Kassenbestände und nicht erklärbare Differenzen zwischen gezähltem und rechnerischem Bestand.',
          'Auch nachträglich veränderte oder lückenhafte digitale Daten können problematisch sein. Änderungen dürfen nicht dazu führen, dass der ursprüngliche Inhalt oder der Zeitpunkt der Änderung nicht mehr feststellbar ist.',
          'Ein Kassenbuch sollte daher zeitnah geführt, regelmäßig mit dem tatsächlichen Bargeld abgeglichen und zusammen mit den zugehörigen Belegen geordnet aufbewahrt werden.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'ein Kassenbuch dokumentiert betriebliche Bargeldbewegungen und den Kassenbestand',
    'bei Buchführungspflichtigen ist es für Bargeldbewegungen regelmäßig erforderlich; ohne Bargeld gibt es keine Barkasse',
    'Kasseneinnahmen und Kassenausgaben sind täglich festzuhalten',
    'der rechnerische Bestand muss beim Kassensturz zum tatsächlich gezählten Bargeld passen',
    'Kassenbestände können nicht negativ sein',
    'offene Ladenkasse und elektronisches Kassensystem unterliegen unterschiedlichen Anforderungen',
    'digitale Aufzeichnungen müssen nachvollziehbar und vor nicht nachvollziehbaren Änderungen geschützt sein',
  ],
  commonMistakes: [
    'Kassenbuch erst nach Tagen oder Wochen aus Erinnerungen nachtragen',
    'negative Kassenbestände im Kassenbuch stehen lassen',
    'Bareinlagen, Privatentnahmen oder Barausgaben ohne Beleg oder Erklärung erfassen',
    'offene Ladenkasse und elektronische Registrierkasse gleich behandeln',
    'eine frei veränderbare Datei ohne nachvollziehbare Änderungen als automatisch GoBD-konform ansehen',
    'Kassenbestand und tatsächliches Bargeld nicht regelmäßig abgleichen',
  ],
  faqs: [
    { question: 'Was ist ein Kassenbuch?', answer: 'Ein Kassenbuch dokumentiert alle betrieblichen Bareinnahmen und Barausgaben sowie den laufenden Kassenbestand.' },
    { question: 'Muss jedes Unternehmen ein Kassenbuch führen?', answer: 'Nein. Relevant ist es bei betrieblichen Bargeldbewegungen und den jeweiligen Buchführungs- oder Aufzeichnungspflichten. Ohne Barkasse gibt es keinen Kassenbestand zu führen.' },
    { question: 'Wie oft muss ein Kassenbuch geführt werden?', answer: 'Kasseneinnahmen und Kassenausgaben sind nach § 146 AO täglich festzuhalten.' },
    { question: 'Was bedeutet Kassensturzfähigkeit?', answer: 'Der rechnerische Bestand aus den Aufzeichnungen muss jederzeit mit dem tatsächlich gezählten Bargeld abgeglichen werden können.' },
    { question: 'Darf ein Kassenbestand negativ sein?', answer: 'Nein. Eine tatsächlich vorhandene Barkasse kann nicht negativ sein. Ein negativer Buchbestand weist auf Fehler oder fehlende Aufzeichnungen hin.' },
    { question: 'Ist ein Excel-Kassenbuch erlaubt?', answer: 'Eine frei veränderbare Tabelle erfüllt die Anforderungen an digitale Aufzeichnungen nicht automatisch. Entscheidend sind unter anderem Nachvollziehbarkeit, Vollständigkeit und die nachvollziehbare Behandlung von Änderungen.' },
  ],
  related: [
    'buchhaltung-rechnungswesen',
    'belege',
    'eigenbeleg',
  ],
  sources: [
    { label: '§ 146 AO – Ordnungsvorschriften für Buchführung und Aufzeichnungen', url: 'https://www.gesetze-im-internet.de/ao_1977/__146.html' },
    { label: '§ 146a AO – Elektronische Aufzeichnungssysteme', url: 'https://www.gesetze-im-internet.de/ao_1977/__146a.html' },
    { label: '§§ 1–2 KassenSichV – Kassensysteme und digitale Grundaufzeichnungen', url: 'https://www.gesetze-im-internet.de/kassensichv/__1.html' },
    { label: 'BMF, AEAO zu § 146 AO (2025) – Einzelaufzeichnung und offene Ladenkasse', url: 'https://ao.bundesfinanzministerium.de/ao/2025/Abgabenordnung/Vierter-Teil/Zweiter-Abschnitt/Erster-Unterabschnitt/Paragraf-146/ae-146.html' },
    { label: 'BMF – GoBD, zweite Änderung vom 14. Juli 2025', url: 'https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Weitere_Steuerthemen/Abgabenordnung/2025-07-14-GoBD-2-aenderung.pdf?__blob=publicationFile&v=2' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default kassenbuch;
