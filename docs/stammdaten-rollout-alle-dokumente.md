# Stammdaten-Rollout für alle Dokumentgeneratoren

## Zweck und Geltung

Diese Datei ist der verbindliche Arbeitsplan für die Stammdatenintegration. Sie beschreibt Zielumfang, technische Schnittstellen, Reihenfolge und Abnahmekriterien. Sie ist **keine** Implementierungsanweisung für einzelne Felder ohne vorherige Prüfung des jeweiligen Dokumentmodells.

Die zentrale Basis bleibt `MasterDataPanel.jsx`: Stammdaten-PDFs werden ausschließlich lokal verarbeitet und nur im React-Sitzungszustand gehalten. Pro Dokumenteditor wird ein Adapter bereitgestellt; das Panel kennt weder Editor-State noch DOM-Struktur.

## Aktueller Stand

| Bereich | Rechnungen |
| --- | --- |
| Eigene Daten | vollständig angebunden: Absender, Kontakt, Footer, Steuer/Bank, Kleinunternehmerstatus |
| Partner | vollständig angebunden: Empfängeranschrift und Kundennummer |
| Leistungen und Artikel | vollständig angebunden: kompatible Einträge werden als neue Positionen angehängt |
| Lieferanschriften | offen; im Partnerzustand vorhanden, aber nicht angezeigt oder übernommen |
| Weitere Dokumenttypen | offen |

Bestehende Rechnungsvarianten sind Standard-, Waren-, Text-, Abschlags-, Teil- und Schlussrechnung. Die vorhandenen, testbaren Mapper sind `ownDataToInvoice.js`, `partnerToInvoice.js` und `catalogItemsToInvoice.js`.

## Verbindliche Kompatibilitätsmatrix

`Ja` bedeutet: als Zielumfang des Rollouts verbindlich vorgesehen. `Nein` bedeutet: nicht anbinden; nur bei einer späteren fachlichen Erweiterung neu entscheiden. „nicht vorhanden“ bedeutet, dass der Generator aktuell nicht im Repository aktiv ist und vor einer Umsetzung zuerst einen eigenen Editor benötigt.

| Dokumenttyp | Aktiver Editor | Eigene Daten | Partner | Leistungen/Artikel | Lieferanschrift | Besonderheiten |
| --- | --- | --- | --- | --- | --- | --- |
| Rechnung | `InvoiceDocumentEditor` | Ja, umgesetzt | Ja, umgesetzt | Ja, umgesetzt: Standard/Waren/Abschlag/Teil/Schluss `service`, `goods`; Textrechnung `textService` | Ja, offen (Phase 3B) | `deliveryItem` nie für Rechnungen; Positionen immer anhängen |
| Angebot | `OfferDocumentEditor` | Ja | Ja | Ja: `service`, `goods`; `textService` nur bei nachgewiesenem Textpositionsmodell | Nein | Angebotsnummer, Gültigkeit und Konditionen nie überschreiben |
| Lieferschein | `DeliveryNoteDocumentEditor` | Ja | Ja, als Auftraggeber/Empfänger | Ja: `goods`, `deliveryItem`; `service` nur ohne Preis-/Steuerfelder | Ja | Lieferanschrift ist der primäre Empfänger der Lieferung; keine Preis- oder Steuerfelder aus Katalog übernehmen |
| Gutschrift | `CreditNoteDocumentEditor` | Ja | Ja | Ja: `service`, `goods`; `textService` nur bei passendem Gesamtbetragsmodell | Nein | Vorzeichen, Referenz und Gutschriftssumme verbleiben beim Editor; Positionen nur anhängen |
| Stornorechnung | nicht vorhanden | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein | Vor Anlage fachlich klären: vollständige Kopie einer Rechnung oder eigenständiger Beleg? |
| Rechnungskorrektur | nicht vorhanden | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein | Vor Anlage fachlich klären: Differenzbeleg, Korrekturrechnung oder Gutschriftprozess |
| Mahnung | `ReminderDocumentEditor` | Ja | Ja | Nein | Nein | Offene Posten, Fristen, Gebühren und Beträge nie aus Katalogpositionen ersetzen |
| Geschäftsbrief | `BusinessLetterDocumentEditor` | Ja | Ja | Nein | Nein | Partner liefert nur Empfängeranschrift; Betreff, Brieftext, Zeichen und Anlagen bleiben unverändert |
| Eigenbeleg | `SelfReceiptDocumentEditor` | Ja, als ausstellendes Unternehmen | Ja, als Zahlungsempfänger/Lieferant nach eigener Rollenprüfung | Nein | Nein | Partnerrolle ist nicht Empfänger im Rechnungssinn; separater Mapper mit fachlich eindeutiger Beschriftung nötig |
| Quittung | `ReceiptDocumentEditor` | Ja, als Aussteller | Ja, als Zahlungspartner nach eigener Rollenprüfung | Nein | Nein | Keine Katalogpositionen, solange die Quittung nur einen Betrag und Zweck abbildet |
| Auftragsbestätigung | nicht vorhanden | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein | Bei künftiger Anlage wie Angebot behandeln; Lieferanschrift nur bei eigenem Lieferbereich |

Weitere aktive Generatoren gibt es derzeit nicht. Bei jedem neuen `formType` ist diese Matrix vor einer Panel-Anbindung zu ergänzen.

## Gemeinsame Regeln

- Eigene Daten ersetzen vorhandene Absender-, Kontakt-, Footer-, Bank- und Steuerdaten erst nach Warnung und Bestätigung.
- Partner ersetzen vorhandene Empfängerdaten erst nach Warnung und Bestätigung. Bei Dokumenten mit anderer Partnerrolle ist ein eigener, eindeutig benannter Mapper erforderlich.
- Leistungen und Artikel werden ausschließlich als neue Positionen angehängt; bestehende Positionen werden nie überschrieben.
- Lieferanschriften dürfen nur bei einem echten, getrennten Lieferanschriftenbereich übernommen werden. Sie ersetzen weder Rechnungs- noch Briefempfänger.
- Entfernte Quelldateien ändern bereits übernommene Dokumentdaten niemals. Das Panel kennzeichnet lediglich die fehlende Quelle.
- Stammdaten, Auswahl und Herkunft leben nur im React-Sitzungszustand; keine dauerhafte Browser-Speicherung.
- Keine DOM-Manipulation, globalen Events oder parallelen Editor-Zustände. Gemeinsame Adapter, Contracts und Mapper werden erweitert oder wiederverwendet.
- Stammdaten-ID und Herkunft gehören nicht automatisch in das bestehende Dokument-PDF/JSON. Sie bleiben Panel-Metadaten, sofern ein Dokumentvertrag sie nicht explizit vorsieht.

## Umsetzungsreihenfolge

### Phase 5A – Angebot

- **Editor:** `OfferDocumentEditor`.
- **Adapter:** `applyOwnData`, `removeOwnData`, `hasOwnDocumentData`; `applyPartner`, `removePartner`, `hasRecipientData`; `canAddCatalogItem`, `addCatalogItems`.
- **Mapping:** Eigene Daten wie Rechnung, Partner in Angebotsadressfeld, Katalogpositionen mit Angebotsbeschreibung, Menge, Einheit, Preis und Steuer.
- **Verhalten:** Warnung beim Ersetzen von Absender/Empfänger; Katalog nur anhängen; Quelle entfernen ohne Dokumentänderung.
- **Abnahme:** Standardangebot mit allen drei Bereichen, mehrfaches Hinzufügen, Quelllöschung, PDF-/JSON-Ausgabe, Light/Dark Mode.

### Phase 5B – Lieferschein inklusive Lieferanschriften

- **Editor:** `DeliveryNoteDocumentEditor` sowie Phase 3B für die bereits in Partnerstammdaten vorhandenen Lieferanschriften.
- **Adapter:** Eigene Daten; Partner für Rechnungs-/Auftragsempfänger; `applyDeliveryAddress`, `removeDeliveryAddress`, `hasDeliveryAddress`; katalogspezifisches `addDeliveryItems`.
- **Mapping:** Lieferanschrift `companyName`, `attention`, `department`, Straße, Hausnummer, PLZ, Ort; `goods` und `deliveryItem` in Lieferscheinpositionen. Lieferhinweis nur in ein vorhandenes Hinweisfeld.
- **Verhalten:** Eigene Warnung beim Ersetzen der Lieferanschrift; Partner- und Lieferanschrift getrennt entfernen; keine Preis- oder Steuermapping-Logik in Lieferscheine.
- **Abnahme:** Partner mit mehreren Lieferanschriften, Auswahl/Wechsel/Entfernen, Positionsarten, PDF-/JSON-Ausgabe.

### Phase 5C – Gutschrift sowie künftige Stornorechnung und Rechnungskorrektur

- **Editor:** `CreditNoteDocumentEditor`; für Storno/Korrektur erst nach Anlage eines aktiven Editors.
- **Adapter:** wie Angebot, ergänzt um dokumenttypspezifische Positionskompatibilität.
- **Mapping:** Absender, Empfänger und reguläre Gutschriftspositionen; interne Nummern, Originalbelegreferenzen, Vorzeichen und Korrekturgrund bleiben unverändert.
- **Risiko:** Vorzeichen- und Steuerlogik darf nicht durch Stammdaten dupliziert werden. Storno- und Korrekturfachlichkeit vor Implementierung verbindlich festlegen.
- **Abnahme:** Gutschrift mit bestehenden Referenzen, Anhängen mehrerer Positionen, Korrekturszenarien nach Verfügbarkeit.

### Phase 5D – Mahnung

- **Editor:** `ReminderDocumentEditor`.
- **Adapter:** nur eigene Daten und Partnerempfänger; keine Katalog- oder Lieferanschriftfunktionen.
- **Mapping:** Eigene Daten in Absender/Footer; Partner in Mahnungsempfänger.
- **Verhalten:** Ersetzungswarnungen, gezieltes Entfernen; offene Forderungen, Zahlungsfrist, Gebühren und Mahnstufe bleiben stets unverändert.
- **Abnahme:** Empfängerwechsel mit offenen Posten, Quelldatei entfernen, Druck/PDF.

### Phase 5E – Geschäftsbrief

- **Editor:** `BusinessLetterDocumentEditor`.
- **Adapter:** nur eigene Daten und Partnerempfänger.
- **Mapping:** Eigene Daten in Briefkopf/Footer/Kontakt; Partner in Anschriftfeld. Keine Übernahme von Katalog oder Lieferanschrift.
- **Verhalten:** Betreff, Anrede, Text, Anlagen, Zeichen und Datum unverändert; Warnungen nur für die jeweils ersetzten Bereiche.
- **Abnahme:** DIN-5008-Vorschau, mehrseitiger Brief, PDF/Druck, Quelllöschung.

### Phase 5F – Eigenbeleg und Quittung

- **Editoren:** `SelfReceiptDocumentEditor`, `ReceiptDocumentEditor`.
- **Adapter:** eigene Daten; Partner erst nach Rollenklärung (`Zahlungsempfänger`, `Lieferant`, `Zahlungspartner`) mit eigenem Mapper.
- **Mapping:** keine Rechnungsmapping-Funktion wiederverwenden, wenn Rollen oder Feldbedeutung abweichen. Keine Katalogpositionen ohne eigenständiges, fachlich bestätigtes Positionsmodell.
- **Risiko:** Eigene Daten können bei Eigenbelegen Aussteller, beim Gegenüber aber auch Leistungsempfänger sein. Die sichtbaren Texte und Entfernen-Aktionen müssen diese Rolle ausdrücken.
- **Abnahme:** Betrags-/Zweckfelder bleiben unverändert, korrekte Partnerrolle, PDF/Druck.

### Phase 5G – Auftragsbestätigung und weitere aktive Generatoren

- **Voraussetzung:** aktiver Editor und dokumentierter Dokumentvertrag.
- **Grundsatz:** Auftragsbestätigung folgt dem Angebot; neue Generatoren erhalten vor Implementierung eine ergänzte Matrixzeile, einen Adapter und reine Mapper.
- **Abnahme:** gleiche Basisregeln, Varianten und Quelllöschung wie oben.

## Adapter- und Mappervertrag je Phase

Jede Phase dokumentiert und testet mindestens:

1. betroffene Editor(en) und Dokumentvarianten;
2. Adaptermethoden einschließlich Verfügbarkeits- und Ersetzungsprüfung;
3. exaktes Quell-/Zielfeldmapping mit Prioritäten und Fallbacks;
4. Warnung, Bestätigung, Entfernen, Wiederübernehmen und Auswahlwechsel;
5. unterstützte und blockierte Katalogtypen;
6. Verhalten bei Variantenwechsel und beim Entfernen der Quelldatei;
7. Unit-Tests für Mapper sowie Integrations-/UI-Tests für Panel und Editor;
8. PDF-/JSON-, Vorschau-, Druck-, Light- und Dark-Mode-Abnahme.

## Offene fachliche Fragen und Risiken

- Welche Positionstypen und Preis-/Steuerfelder unterstützen Angebot und Gutschrift exakt? Vor dem Mapper die jeweiligen Dokumentmodelle gegenprüfen.
- Soll eine Lieferanschrift beim Lieferschein den Hauptempfänger ersetzen oder zusätzlich angezeigt werden? Die Zielstruktur und Druckdarstellung müssen vor Phase 5B entschieden sein.
- Welche fachliche Semantik haben Stornorechnung und Rechnungskorrektur im Produkt? Ein neuer Editor darf erst nach dieser Entscheidung angebunden werden.
- Welche Partnerrolle soll bei Eigenbeleg und Quittung verwendet werden? „Empfänger“ ist dort nicht zwingend fachlich korrekt.
- Soll eine Textleistung im Angebot oder in der Gutschrift unterstützt werden? Nur mit einem vorhandenen Gesamtbetrags-/Textpositionsmodell freigeben.
- Die aktive Repository-Landschaft enthält derzeit keine Auftragsbestätigung. Ihre Matrixzeile bleibt bis zur Anlage des Editors bewusst gesperrt.

## Arbeitsweise

Dieser Plan ist zunächst ausschließlich Spezifikation. Jede Umsetzungsphase erfolgt in einem eigenen Auftrag, beginnt mit einer Prüfung des Zieleditors und aktualisiert danach diese Datei sowie `stammdaten-generator-integration.md`. Ohne bestätigte Feldsemantik, Adapter und Tests wird kein Stammdatentyp angebunden.
