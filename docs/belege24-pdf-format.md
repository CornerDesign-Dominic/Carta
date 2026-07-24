# Belege24-PDF-Format

## Zweck

Belege24-Rechnungs-PDFs können eine lokale, maschinenlesbare Anlage `belege24-document.json` enthalten. Sie speichert den Generatorzustand zusätzlich zur sichtbaren PDF, damit „PDF laden“ Eingaben wiederherstellen kann. Die Anlage wird mit `application/json` eingebettet.

## Ablauf

1. `InvoiceDocumentEditor` erstellt aus dem aktuellen Generatorzustand ein Belege24-Dokument.
2. `requestPdfDownload` übergibt es an `api/generate-pdf.ts`.
3. `embedBelege24DocumentInPdf` aus `src/documentModel/pdfAttachment.ts` hängt die JSON-Datei an die erzeugte PDF und setzt die Belege24-Metadaten.
4. Beim Laden liest `readBelege24DocumentFromPdf` die Anlage lokal, prüft das Grundformat und ruft `validateBelege24Document` auf.
5. Die variantenspezifische Importfunktion führt das Rückmapping aus. Nur ein vollständig gültiger Zielzustand wird anschließend im Editor gesetzt.

## Format und Metadaten

- Format: `belege24-document`
- Schema-Version: `1.0.0`
- Generator-Version: `0.1.0`
- Anlage: `belege24-document.json`
- Dokumenttyp für Rechnungen: `invoice`
- PDF-Metadaten: Creator, Subject `Belege24-Dokument`, Format-, Schema-, Dokumenttyp- und Dokument-ID-Schlagwörter.

Das JSON besteht aus `format`, `schemaVersion`, `document`, `sharedData` und `documentData`. `document` enthält `documentType`, UUID `documentId`, ISO-8601-UTC `createdAt` und `generatorVersion`.

## Rechnungsvarianten

| Variante | Schlüssel |
| --- | --- |
| Standardrechnung | `standard` |
| Warenrechnung | `goods` |
| Textrechnung | `text` |
| Abschlagsrechnung | `progressInvoice` |
| Teilrechnung | `partialInvoice` |
| Schlussrechnung | `finalInvoice` |

## Zentrale Dateien

- `src/documentModel/types.ts`: Vertrags- und Rechnungsdatentypen.
- `src/documentModel/constants.ts`: Format-, Schema- und Generator-Konstanten.
- `src/documentModel/invoiceMapping.ts`: `mapStandardInvoiceToDocument` sowie Varianten-Mapper.
- `src/documentModel/invoiceRestore.ts`: validierendes Rückmapping je Variante.
- `src/documentModel/pdfAttachment.ts`: Einbettung und lokales Auslesen.
- `src/documentModel/validation.ts`: Validierung des Basisdokuments.
- `src/documentModel/invoicePdfImport.ts`: verständliche Importergebnisse und Überschreibvergleich.
- `src/components/InvoiceDocumentEditor.jsx`: PDF-Erzeugung, Datei-Auswahl und atomare React-State-Übernahme.

## Mapping und Rückmapping

`sharedData` speichert Absender, unveränderte Absenderzeile, strukturierte Adressen, Empfänger, Kundennummer und die drei Fußspalten mit je vier Feldern. `documentData` enthält Beschriftungen, Rechnungs-, Kontakt-, Liefer-, Projekt- und Textdaten, Positionen, frühere Abschläge, Kleinunternehmerstatus und Feldkonfiguration.

Positionen und frühere Abschläge enthalten neben normalisierten Darstellungs- und Berechnungswerten `generatorInput`. Rückmapping verwendet diese Originalstrings für Preis, Menge, Steuersatz und Abschlagsbeträge. Leere Werte, Reihenfolgen, Sonderzeichen und freie Texte werden kopiert; Adressen und Anzeigezeilen werden nicht heuristisch zerlegt. Berechnete Summen werden nach dem Import durch die bestehende Editorlogik neu berechnet.

## Prüfung, Varianten und Überschreiben

Die Validierung prüft Format, Schema, Metadaten, Adressen, Fußspalten und Grundstruktur. Das Rückmapping verlangt zusätzlich `documentType: "invoice"` und den exakten `invoiceVariant`; eine fremde Variante wird nicht übernommen. Lesefehler, fehlende Anlage, ungültiges JSON, nicht unterstützte Versionen und unvollständige oder ungültige Daten liefern verständliche Importergebnisse.

Der Editor übernimmt State erst nach erfolgreich abgeschlossenem Lesen, Validieren und Rückmapping. Der Überschreibschutz vergleicht den gesamten aktuellen Generatorzustand mit einem je Variante gespeicherten Initialzustand. Nach „Neu“ wird der Initialzustand dieser Variante neu erfasst; bei Änderungen erscheint eine Bestätigung.

## Weitere Belegtypen ergänzen

1. Den vorhandenen Generatorzustand und seinen kanonischen Variantenschlüssel feststellen.
2. Einen Mapper mit unveränderten Eingabestrings auf Basis der vorhandenen Rechnungsstruktur ergänzen.
3. Rückmapping mit exakter Variantenprüfung und vollständiger Strukturprüfung ergänzen.
4. Eine Importfunktion mit den bestehenden Lesefehlern und einer variantenspezifischen Ablehnung ergänzen.
5. PDF-Erzeugung und „PDF laden“ nur dann im Editor freischalten, wenn beide Wege vollständig vorhanden sind.
6. Roundtrip, falsche Variante, Überschreibschutz sowie Typecheck, Tests, Build und einen manuellen Browserlauf prüfen.

## Prüfungen

Automatisch: `npm run typecheck`, `npm test`, `npm run build`. Manuell: auffällige Eingaben, mehrere Positionen bzw. Abschläge, PDF-Erzeugung, Zurücksetzen, PDF-Import, Variantenablehnung, Überschreibdialog, Drucken und unveränderte sichtbare PDF-Ausgabe prüfen.
