# Belege24-PDF-Format

## Zweck

Belege24-Rechnungs-, Gutschrift-, Mahnungs-, Angebots-, Lieferschein- und Quittungs-PDFs können eine lokale, maschinenlesbare Anlage `belege24-document.json` enthalten. Sie speichert den Generatorzustand zusätzlich zur sichtbaren PDF, damit „PDF laden“ Eingaben wiederherstellen kann. Die Anlage wird mit `application/json` eingebettet.

## Ablauf

1. Der jeweilige Dokumenteditor erstellt aus dem aktuellen Generatorzustand ein Belege24-Dokument.
2. `requestPdfDownload` übergibt es an `api/generate-pdf.ts`.
3. `embedBelege24DocumentInPdf` aus `src/documentModel/pdfAttachment.ts` hängt die JSON-Datei an die erzeugte PDF und setzt die Belege24-Metadaten.
4. Beim Laden liest `readBelege24DocumentFromPdf` die Anlage lokal, prüft Format und Schema und ruft `validateBelege24Document` auf.
5. Die variantenspezifische Importfunktion führt das Rückmapping aus. Nur ein vollständig gültiger Zielzustand wird anschließend im Editor gesetzt.

## Format und Metadaten

- Format: `belege24-document`
- Schema-Version: `1.0.0`
- Generator-Version: `0.1.0`
- Anlage: `belege24-document.json`
- Dokumenttyp für Rechnungen: `invoice`
- Dokumenttyp für Gutschriften: `creditNote`
- Dokumenttyp für Mahnungen: `reminder`
- Dokumenttyp für Angebote: `offer`
- Dokumenttyp für Lieferscheine: `deliveryNote`
- Dokumenttyp für Quittungen: `receipt`
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

## Gutschriftvarianten

Alle Gutschriften verwenden `documentType: "creditNote"` und werden als eingebettete `belege24-document.json` gespeichert sowie wieder geladen. Beim Import muss die gespeicherte Variante der im Editor geöffneten Variante entsprechen.

| Variante | Schlüssel | Pflichtfelder |
| --- | --- | --- |
| Gutschrift | `creditNote` | gemeinsame Gutschriftdaten |
| Stornorechnung | `cancellationInvoice` | `originalInvoiceNumber`, `cancellationReason` |
| Rechnungskorrektur | `invoiceCorrection` | `originalInvoiceNumber`, `correctionReason` |

## Mahnungen

Mahnungen verwenden `documentType: "reminder"` und werden als eingebettete `belege24-document.json` gespeichert sowie wieder geladen. Gespeichert werden die vollständigen Quelldaten des Editors: Beschriftungen, strukturierte Adress- und Fußzeilendaten, Mahnungsdetails, offene Posten, Gebühren, Textblöcke und Feldkonfiguration. Die berechneten Summen `invoiceSum` und `grandTotal` sind nicht Teil der Anlage; sie werden aus offenen Posten und Gebühren nach dem Import erneut berechnet.

## Angebote, Lieferscheine, Quittungen und Eigenbelege

Eigenbelege (`selfReceipt`) speichern die vollständigen Eingabedaten einschließlich Ausgabenpositionen, Textblöcken und Feldkonfiguration. Die sichtbaren Netto-, Steuer- und Bruttosummen werden nach dem Import aus den Positionsdaten erneut abgeleitet.

Angebote (`offer`), Lieferscheine (`deliveryNote`) und Quittungen (`receipt`) werden ebenfalls als eingebettete `belege24-document.json` gespeichert und wieder geladen. Der Vertrag enthält die vollständigen ursprünglichen Generatorwerte, einschließlich Beschriftungen, strukturierten Adress-, Referenz- und Fußzeilendaten, Positions- beziehungsweise Textdaten und Feldkonfigurationen. Bei Quittungen wird nur der gewählte Netto- oder Brutto-Ausgangsbetrag mitsamt Steuersatz gespeichert; Steuerbetrag und Gegenwert werden nach dem Import neu berechnet.

## Zentrale Dateien

- `src/documentModel/types.ts`: Vertrags- und Rechnungsdatentypen.
- `src/documentModel/constants.ts`: Format-, Schema- und Generator-Konstanten.
- `src/documentModel/invoiceMapping.ts`: `mapStandardInvoiceToDocument` sowie Varianten-Mapper.
- `src/documentModel/invoiceRestore.ts`: validierendes Rückmapping je Variante.
- `src/documentModel/pdfAttachment.ts`: Einbettung und lokales Auslesen.
- `src/documentModel/validation.ts`: Validierung des Basisdokuments.
- `src/documentModel/invoicePdfImport.ts`: verständliche Importergebnisse und Überschreibvergleich.
- `src/documentModel/creditNoteMapping.ts` und `src/documentModel/creditNoteRestore.ts`: Mapping und validierendes Rückmapping der unterstützten Gutschrift.
- `src/documentModel/creditNotePdfImport.ts`: Gutschriftimport und Überschreibvergleich.
- `src/documentModel/reminderMapping.ts` und `src/documentModel/reminderRestore.ts`: Mapping und validierendes Rückmapping der Mahnung.
- `src/documentModel/reminderPdfImport.ts`: Mahnungsimport und Überschreibvergleich.
- `src/documentModel/additionalDocumentModel.ts`: Verträge, Mapping, striktes Rückmapping, Validierung und Import für Angebot, Lieferschein und Quittung.
- `src/components/InvoiceDocumentEditor.jsx`: PDF-Erzeugung, Datei-Auswahl und atomare React-State-Übernahme.
- `src/components/CreditNoteDocumentEditor.jsx`: PDF-Erzeugung und -Import für die aktive Gutschriftvariante.
- `src/components/ReminderDocumentEditor.jsx`: PDF-Erzeugung und -Import der Mahnung.
- `src/components/OfferDocumentEditor.jsx`, `DeliveryNoteDocumentEditor.jsx` und `ReceiptDocumentEditor.jsx`: PDF-Erzeugung und -Import für Angebot, Lieferschein und Quittung.

## Mapping und Rückmapping

`sharedData` speichert Absender, unveränderte Absenderzeile, strukturierte Adressen, Empfänger, Kundennummer und die drei Fußspalten mit je vier Feldern. `documentData` enthält je nach Dokumenttyp Beschriftungen, Rechnungs-, Gutschrift-, Mahnungs-, Angebots-, Lieferschein- oder Quittungsdaten, Kontakt-, Liefer-, Referenz-, Korrektur-, Projekt- und Textdaten, Positionen beziehungsweise offene Posten, frühere Abschläge, Kleinunternehmerstatus und Feldkonfiguration.

Positionen und frühere Abschläge enthalten neben normalisierten Darstellungs- und Berechnungswerten `generatorInput`. Rückmapping verwendet diese Originalstrings für Preis, Menge, Steuersatz und Abschlagsbeträge. Leere Werte, Reihenfolgen, Sonderzeichen und freie Texte werden kopiert; Adressen und Anzeigezeilen werden nicht heuristisch zerlegt. Berechnete Summen werden nach dem Import durch die bestehende Editorlogik neu berechnet.

## Prüfung, Varianten und Überschreiben

Die Validierung prüft Dokumenttyp, Schema und vollständige Datenstruktur. Rechnungen werden über ihre Rechnungsvalidierung geprüft; Gutschriften verlangen `documentType: "creditNote"`, einen bekannten Variantenschlüssel und die jeweiligen variantenspezifischen Pflichtfelder. Eine fremde Variante oder eine Variante, die nicht zum geöffneten Editor passt, wird nicht übernommen. Lesefehler, fehlende Anlage, ungültiges JSON, nicht unterstützte Versionen und unvollständige oder ungültige Daten liefern verständliche Importergebnisse.

Der Editor übernimmt State erst nach erfolgreich abgeschlossenem Lesen, Validieren und Rückmapping. Der Überschreibschutz vergleicht den gesamten aktuellen Generatorzustand mit einem je Variante beziehungsweise Dokument gespeicherten Initialzustand. Nach „Neu“ und nach jedem erfolgreichen Import werden die Initialzustände neu erfasst; bei Änderungen erscheint eine Bestätigung.

## Weitere Belegtypen ergänzen

1. Den vorhandenen Generatorzustand und seinen kanonischen Variantenschlüssel feststellen.
2. Einen Mapper mit unveränderten Eingabestrings auf Basis der vorhandenen Rechnungsstruktur ergänzen.
3. Rückmapping mit exakter Variantenprüfung und vollständiger Strukturprüfung ergänzen.
4. Eine Importfunktion mit den bestehenden Lesefehlern und einer variantenspezifischen Ablehnung ergänzen.
5. PDF-Erzeugung und „PDF laden“ nur dann im Editor freischalten, wenn beide Wege vollständig vorhanden sind.
6. Roundtrip, falsche Variante, Überschreibschutz sowie Typecheck, Tests, Build und einen manuellen Browserlauf prüfen.

## Prüfungen

Automatisch: `npm run typecheck`, `npm test`, `npm run build`. Manuell: auffällige Eingaben, mehrere Positionen bzw. Abschläge, PDF-Erzeugung, Zurücksetzen, PDF-Import, Variantenablehnung, Überschreibdialog, Drucken und unveränderte sichtbare PDF-Ausgabe prüfen.
