export const patchnotes = [
  {
    date: '2026-07-26',
    title: 'Projektangaben: einzeln ausblendbar',
    changes: [
      'Projekt-, Referenz- und Leistungsangaben lassen sich in Abschlags-, Teil- und Schlussrechnungen einzeln ein- und ausblenden.',
      'Die Sichtbarkeit wird in Vorlagen und eingebetteten PDF-Daten gespeichert.',
    ],
  },
  {
    date: '2026-07-26',
    title: 'Abschlagsrechnung: Projektbereich verdichtet',
    changes: [
      'Abschlag, Projekt, Referenznr. und Leistungsstand stehen jetzt untereinander.',
      'Die Darstellung ist im Editor und PDF einspaltig mit breiteren Eingabefeldern.',
    ],
  },
  {
    date: '2026-07-26',
    title: 'Teilrechnung: Projektbereich verdichtet',
    changes: [
      'Projekt, Referenznr., Leistung und Zeitraum stehen jetzt untereinander.',
      'Die einspaltige Darstellung erweitert die Eingabefelder im Editor und PDF.',
    ],
  },
  {
    date: '2026-07-25',
    title: 'Schlussrechnung: Abschlags-USt. als Betrag',
    changes: [
      'Abschlagsrechnungen erfassen die Umsatzsteuer jetzt direkt als Geldbetrag; Brutto wird automatisch berechnet.',
      'Bestehende Abschläge mit Steuersatz werden beim Import eindeutig in den USt.-Betrag überführt.',
    ],
  },
  {
    date: '2026-07-25',
    title: 'Schlussrechnung: Abschlagsbeträge im Editor formatiert',
    changes: [
      'Nettobeträge zeigen im Editor das deutsche Euroformat mit zwei Nachkommastellen.',
      'Der Entfernen-Button erscheint platzneutral links nur bei Zeilen-Hover oder Fokus.',
    ],
  },
  {
    date: '2026-07-24',
    title: 'Schlussrechnung: Abschlagsrechnungen übersichtlicher',
    changes: [
      'Die Tabelle zeigt Rechnungsnr., Datum, Netto, USt., USt.-Betrag und Brutto ohne Abschlagsbezeichnung.',
      'Spaltenbreiten und Druckdarstellung verhindern überlappende Überschriften.',
    ],
  },
  {
    date: '2026-07-24',
    title: 'Schlussrechnung: Projektbereich vereinheitlicht',
    changes: [
      'Projektangaben folgen im Editor und PDF jetzt direkt auf den Vorlauftext.',
      'Projekt, Referenznr. und Zeitraum ersetzen die bisherigen Bezeichnungen.',
    ],
  },
  {
    date: '2026-07-24',
    title: 'Schlussrechnung: Seitenumbruch abgesichert',
    changes: [
      'Projektbereich und frühere Abschläge werden mit ihrer tatsächlichen Höhe gemessen.',
      'Der komplette Summenblock wechselt bei Bedarf geschlossen auf die Folgeseite.',
    ],
  },
  {
    date: '2026-07-24',
    title: 'Standardrechnung: USt.-Satz vereinheitlicht',
    changes: [
      'Der USt.-Satz in Positionen wird nach dem Verlassen des Felds bereinigt formatiert.',
      'Druck und PDF zeigen jeden Satz einmalig, zum Beispiel 15 %.',
    ],
  },
  {
    date: '2026-07-24',
    title: 'PDF-Import für weitere Dokumente',
    changes: [
      'Angebot, Lieferschein und Quittung können ihren Generatorzustand aus einer Belege24-PDF wiederherstellen.',
      'Importierte Eingaben bleiben je Dokumenttyp getrennt erhalten.',
    ],
  },
].sort((first, second) => second.date.localeCompare(first.date));

export function filterPatchnotes(entries, query) {
  const normalizedQuery = String(query ?? '').trim().toLocaleLowerCase('de-DE');

  if (!normalizedQuery) {
    return entries;
  }

  return entries.filter((entry) => [entry.date, entry.title, ...entry.changes]
    .join(' ')
    .toLocaleLowerCase('de-DE')
    .includes(normalizedQuery));
}
