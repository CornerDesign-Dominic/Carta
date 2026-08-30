import { defaultDisclaimer } from '../shared.js';

const gobdBelegwesen = {
  slug: 'gobd-belegwesen',
  category: 'Buchhaltung & Rechnungswesen',
  title: 'GoBD & Belegwesen',
  description: 'GoBD und Belegwesen einfach erklärt: Belegprinzip, vollständige und unveränderbare Aufzeichnungen, digitale Belege, Korrekturen und Aufbewahrung.',
  seo: {
    title: 'GoBD & Belegwesen erklärt | Belege24',
    description: 'Verstehe die GoBD im Unternehmensalltag: Belege, Nachvollziehbarkeit, digitale Aufzeichnungen, Korrekturen, Aufbewahrung und Verfahrensdokumentation.',
    canonicalPath: '/wissen/gobd-belegwesen',
  },
  article: {
    intro: 'Die GoBD beschreiben, wie steuerlich relevante Bücher, Aufzeichnungen und Unterlagen nachvollziehbar geführt und aufbewahrt werden sollen. Im Alltag geht es vor allem darum, dass Belege, Buchungen und Änderungen vollständig, geordnet und prüfbar zusammenpassen.',
    sections: [
      {
        heading: 'Was sind die GoBD – und für wen sind sie relevant?',
        paragraphs: [
          [
            'Die ',
            { type: 'glossary', id: 'gobd', text: 'GoBD' },
            ' sind ein BMF-Schreiben zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff. Sie konkretisieren die Anforderungen, die für steuerlich relevante Aufzeichnungen gelten.',
          ],
          'Praktisch sind sie für Unternehmer relevant, die Geschäftsvorfälle dokumentieren, Belege aufbewahren oder digitale Buchhaltungs-, Kassen- und Vorsysteme einsetzen. Das gilt nicht nur für große Unternehmen: Auch kleine Betriebe sollten ihre steuerlich relevanten Unterlagen nachvollziehbar organisieren. Welche Pflichten im Einzelnen bestehen, hängt von Geschäftstätigkeit, Aufzeichnungspflichten und eingesetzten Systemen ab.',
          'Die aktuelle GoBD-Fassung vom 14. Juli 2025 gilt seit diesem Tag. Sie berücksichtigt unter anderem die seit 2025 eingeführte verpflichtende E-Rechnung für bestimmte Umsätze zwischen inländischen Unternehmern.',
        ],
      },
      {
        heading: 'Belegprinzip: Von der Unterlage zur Buchung',
        paragraphs: [
          [
            'Das ',
            { type: 'glossary', id: 'belegprinzip', text: 'Belegprinzip' },
            ' bedeutet: Eine Buchung soll auf einer nachvollziehbaren Unterlage beruhen. Das kann zum Beispiel eine Rechnung, Quittung, ein Kassenbon, Kontoauszug oder bei Bedarf ein Eigenbeleg sein.',
          ],
          'Ein Beleg macht verständlich, was passiert ist: Anlass, Datum, Betrag und Beteiligte. Die Buchung ordnet diesen Vorgang dann den passenden Konten zu. Beleg und Buchung müssen so verbunden sein, dass ein sachverständiger Dritter den Weg in beide Richtungen nachvollziehen kann.',
          'Nicht jede Unterlage ist automatisch ein Buchungsbeleg. Entscheidend ist, ob sie für die Besteuerung und die Erfassung eines Geschäftsvorfalls Bedeutung hat.',
        ],
      },
      {
        heading: 'Die wichtigsten Grundsätze im Alltag',
        paragraphs: [
          'Nachvollziehbarkeit und Nachprüfbarkeit bedeuten: Ein Dritter muss die Geschäftsvorfälle, Belege, Buchungen und Auswertungen in angemessener Zeit verstehen und prüfen können. Klare Belegnummern, verständliche Buchungstexte und eine geordnete Ablage helfen dabei.',
          'Vollständigkeit heißt, dass aufzeichnungspflichtige Vorgänge und die zugehörigen Unterlagen nicht willkürlich fehlen dürfen. Richtigkeit verlangt sachlich zutreffende, rechnerisch richtige und nachvollziehbar zugeordnete Angaben.',
          'Zeitgerechte Erfassung und Ordnung bedeuten, Vorgänge nicht erst lange nachträglich aus Erinnerungen zusammenzustellen, sondern sie passend zum Ablauf zu erfassen und geordnet abzulegen. § 146 AO verlangt, Buchungen und erforderliche Aufzeichnungen einzeln, vollständig, richtig, zeitgerecht und geordnet vorzunehmen; Kasseneinnahmen und Kassenausgaben sind täglich festzuhalten.',
          [
            'Die ',
            { type: 'glossary', id: 'unveraenderbarkeit', text: 'Unveränderbarkeit' },
            ' schützt die Nachvollziehbarkeit: Der ursprüngliche Inhalt einer Buchung oder Aufzeichnung darf nicht unkenntlich gemacht werden. Das bedeutet nicht, dass Fehler unkorrigierbar sind – die Korrektur muss nur nachvollziehbar bleiben.',
          ],
        ],
      },
      {
        heading: 'Papierbelege und digitale Belege',
        paragraphs: [
          'Papier- und digitale Belege können beide steuerlich relevant sein. Bei Papierbelegen ist eine lesbare, vollständige und geordnete Ablage wichtig. Werden Belege digitalisiert, muss das gewählte Verfahren sicherstellen, dass die Wiedergabe mit dem Original übereinstimmt und während der Aufbewahrungsfrist verfügbar und lesbar bleibt.',
          'Eingehende elektronische Handels- oder Geschäftsbriefe und Buchungsbelege sind grundsätzlich in dem Format aufzubewahren, in dem sie empfangen wurden. Eine bloße Auswertung oder ein Ausdruck ersetzt die elektronische Ursprungsdatei nicht automatisch.',
          'Bei E-Rechnungen reicht nach der GoBD-Fassung vom 14. Juli 2025 grundsätzlich die Aufbewahrung des strukturierten Teils aus, wenn die weiteren Anforderungen erfüllt sind. Enthält der menschenlesbare Teil einer hybriden E-Rechnung zusätzliche oder abweichende steuerlich relevante Informationen, muss auch dieser Teil aufbewahrt werden.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Rechnung per E-Mail',
            paragraphs: [
              'Ein Unternehmen erhält eine Lieferantenrechnung per E-Mail als PDF-Anhang.',
              'Schritt 1: Die Rechnung und der zugehörige elektronische Geschäftsbrief werden geordnet im empfangenen Format abgelegt, soweit sie aufbewahrungspflichtig sind.',
              'Schritt 2: Die Buchung verweist nachvollziehbar auf die Rechnung, etwa über Belegnummer, Datum oder einen Beleglink im Buchhaltungssystem.',
              'Schritt 3: Ein Ausdruck kann für die Arbeitsablage hilfreich sein, ersetzt die elektronische Aufbewahrung aber nicht automatisch.',
            ],
            effects: [
              'Belegwesen: Elektronischer Eingang und Buchung bleiben verbunden.',
              'Prüfbarkeit: Rechnung und Buchung können später wiedergefunden werden.',
            ],
          },
          {
            title: 'Beispiel: Fotografierter Kassenbon',
            paragraphs: [
              'Eine Mitarbeiterin fotografiert einen geschäftlichen Kassenbon direkt nach dem Kauf mit dem vorgesehenen Erfassungsweg.',
              'Schritt 1: Das Bild muss vollständig und lesbar sein; Betrag, Datum und Anlass müssen nachvollziehbar bleiben.',
              'Schritt 2: Der Beleg wird zeitnah dem passenden Geschäftsvorfall und der Buchung zugeordnet.',
              'Schritt 3: Ob und wann ein Papieroriginal zusätzlich aufbewahrt werden muss oder entbehrlich ist, hängt vom gewählten Verfahren und weiteren rechtlichen Anforderungen ab. Es sollte nicht ohne Prüfung entsorgt werden.',
            ],
            effects: [
              'Belegwesen: Die digitale Erfassung macht den Vorgang schneller verfügbar.',
              'Wichtig: Lesbarkeit, Vollständigkeit und ein nachvollziehbares Verfahren bleiben erforderlich.',
            ],
          },
        ],
      },
      {
        heading: 'Änderungen und Korrekturbuchungen',
        paragraphs: [
          'Fehler passieren. Eine Rechnung, ein Buchungstext oder eine Kontierung kann korrigiert werden. Die Korrektur darf aber nicht dazu führen, dass der ursprüngliche Inhalt oder der Zeitpunkt der Änderung nicht mehr festgestellt werden kann.',
          'In der Buchführung wird eine falsche Buchung häufig durch eine nachvollziehbare Storno- oder Korrekturbuchung berichtigt. Die konkrete Umsetzung hängt vom System und Fehler ab. Entscheidend ist, dass Ausgangsvorgang, Berichtigung und Begründung zusammen nachvollziehbar bleiben.',
        ],
        exampleCards: [
          {
            title: 'Beispiel: Nachträglich korrigierte Buchung',
            paragraphs: [
              'Eine Lieferantenrechnung wurde versehentlich auf ein unpassendes Aufwandskonto gebucht.',
              'Schritt 1: Der Fehler wird nicht durch ein unnachvollziehbares Überschreiben beseitigt.',
              'Schritt 2: Die Buchung wird mit der vorgesehenen Korrektur- oder Stornofunktion nachvollziehbar berichtigt und dem richtigen Konto zugeordnet.',
              'Schritt 3: Beleg, ursprüngliche Erfassung und Berichtigung bleiben im System prüfbar.',
            ],
            effects: [
              'Richtigkeit: Die Kontierung wird korrigiert.',
              'Unveränderbarkeit: Der Änderungsweg bleibt nachvollziehbar.',
            ],
          },
        ],
      },
      {
        heading: 'Aufbewahrung und Verfahrensdokumentation',
        paragraphs: [
          'Aufbewahrung bedeutet mehr als Dateien irgendwo zu speichern. Unterlagen müssen geordnet, während der Frist verfügbar, unverzüglich lesbar und – bei elektronischen Daten – grundsätzlich maschinell auswertbar sein. Die Aufbewahrungsfristen richten sich nach der Unterlagenart und können unterschiedlich lang sein.',
          'Nach § 147 AO sind Bücher, Aufzeichnungen und Jahresabschlüsse grundsätzlich zehn Jahre, Buchungsbelege grundsätzlich acht Jahre und andere dort genannte Unterlagen grundsätzlich sechs Jahre aufzubewahren. Für Rechnungen gilt nach § 14b UStG regelmäßig eine achtjährige Aufbewahrungspflicht; andere steuerliche Pflichten können zusätzlich relevant sein.',
          [
            'Eine ',
            { type: 'glossary', id: 'verfahrensdokumentation', text: 'Verfahrensdokumentation' },
            ' beschreibt die organisatorischen und technischen Abläufe: Wie kommen Belege ins Unternehmen? Wer prüft und bucht sie? Welche Systeme werden genutzt? Wie werden Korrekturen, Zugriffsrechte und Aufbewahrung gehandhabt? Sie muss nicht unnötig kompliziert sein, sollte die tatsächliche Arbeitsweise aber verständlich abbilden und bei Änderungen mitgepflegt werden.',
          ],
        ],
      },
      {
        heading: 'Typische Fehler im Alltag',
        paragraphs: [
          'Häufige Probleme sind eine verstreute Ablage in E-Mail-Postfächern, privaten Messenger-Chats und Ordnern ohne klare Zuordnung. Auch unvollständige Scans, fehlende Belegnummern oder nachträglich veränderte Dateien ohne Änderungsnachweis erschweren eine Prüfung.',
          'Eine frei veränderbare Tabelle oder ein Sammelordner ist nicht allein deshalb GoBD-konform, weil darin Belege liegen. Entscheidend sind das gesamte Verfahren, die Nachvollziehbarkeit, der Schutz vor nicht nachvollziehbaren Änderungen und die Verfügbarkeit der Daten.',
          'Ein praktikabler Alltag beginnt mit festen Zuständigkeiten und einem klaren Weg: Beleg erfassen, prüfen, zuordnen, buchen, geordnet aufbewahren und Korrekturen dokumentieren. Bei komplexen Systemen oder Unsicherheit zu Aufbewahrung und Digitalisierung ist fachlicher Rat sinnvoll.',
        ],
      },
    ],
  },
  generator: null,
  keyPoints: [
    'Die GoBD konkretisieren Anforderungen an steuerlich relevante Bücher, Aufzeichnungen und Unterlagen.',
    'Beleg und Buchung müssen in beide Richtungen nachvollziehbar verbunden sein.',
    'Aufzeichnungen müssen vollständig, richtig, zeitgerecht, geordnet und unveränderbar geführt werden.',
    'Elektronische Belege sind grundsätzlich im empfangenen Format aufzubewahren.',
    'Fehler dürfen korrigiert werden, der ursprüngliche Inhalt und der Korrekturweg müssen aber erkennbar bleiben.',
    'Eine Verfahrensdokumentation beschreibt die tatsächlich gelebten Abläufe und Systeme.',
  ],
  commonMistakes: [
    'E-Mail-Rechnungen nur ausdrucken und die elektronische Datei nicht geordnet aufbewahren',
    'Buchungen erst lange nachträglich aus Erinnerungen erfassen',
    'Belege ohne klare Verbindung zur Buchung ablegen',
    'Fehler durch unnachvollziehbares Überschreiben löschen',
    'unvollständige oder unlesbare Belegfotos verwenden',
    'eine frei veränderbare Datei ohne geprüftes Verfahren als automatisch GoBD-konform ansehen',
  ],
  faqs: [
    { question: 'Was sind die GoBD?', answer: 'Die GoBD sind Verwaltungsgrundsätze des Bundesfinanzministeriums für die ordnungsmäßige Führung und Aufbewahrung steuerlich relevanter Bücher, Aufzeichnungen und Unterlagen in elektronischer Form.' },
    { question: 'Muss eine Rechnung per E-Mail elektronisch aufbewahrt werden?', answer: 'Eingehende elektronische Handels- oder Geschäftsbriefe und Buchungsbelege sind grundsätzlich in dem Format aufzubewahren, in dem sie empfangen wurden.' },
    { question: 'Darf eine Buchung nachträglich korrigiert werden?', answer: 'Ja. Die Korrektur muss jedoch nachvollziehbar bleiben; der ursprüngliche Inhalt und der Korrekturweg dürfen nicht unkenntlich werden.' },
    { question: 'Reicht ein Foto eines Kassenbons?', answer: 'Ein Belegfoto muss vollständig und lesbar sein und in ein nachvollziehbares Verfahren eingebunden werden. Ob das Papieroriginal zusätzlich aufzubewahren ist, hängt von weiteren Voraussetzungen ab.' },
    { question: 'Was ist eine Verfahrensdokumentation?', answer: 'Sie beschreibt, wie Belege und Daten im Unternehmen erfasst, verarbeitet, aufbewahrt und abgesichert werden.' },
    { question: 'Wie lange müssen Buchungsbelege aufbewahrt werden?', answer: 'Nach § 147 AO sind Buchungsbelege grundsätzlich acht Jahre aufzubewahren. Je nach Unterlagenart und Sachverhalt können weitere oder längere Pflichten gelten.' },
  ],
  related: [
    'rechnung',
    'kassenbuch',
    'buchhaltung-rechnungswesen',
  ],
  sources: [
    { label: 'BMF – GoBD, zweite Änderung vom 14. Juli 2025', url: 'https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Weitere_Steuerthemen/Abgabenordnung/2025-07-14-GoBD-2-aenderung.html' },
    { label: '§ 146 AO – Ordnungsvorschriften für Buchführung und Aufzeichnungen', url: 'https://www.gesetze-im-internet.de/ao_1977/__146.html' },
    { label: '§ 147 AO – Aufbewahrung von Unterlagen', url: 'https://www.gesetze-im-internet.de/ao_1977/__147.html' },
    { label: '§ 14b UStG – Aufbewahrung von Rechnungen', url: 'https://www.gesetze-im-internet.de/ustg_1980/__14b.html' },
  ],
  updatedAt: '2026-08-30',
  reviewedAt: '2026-08-30',
  disclaimer: defaultDisclaimer,
};

export default gobdBelegwesen;
