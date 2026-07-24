export const patchnotes = [
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
