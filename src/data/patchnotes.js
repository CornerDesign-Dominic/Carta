export const patchnotes = [
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
