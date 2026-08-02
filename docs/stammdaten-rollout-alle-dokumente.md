# Stammdaten-Rollout für alle Dokumentgeneratoren

## Zweck und Geltung

Diese Datei ist der verbindliche Arbeitsplan für die Stammdatenintegration. Sie beschreibt Zielumfang, technische Schnittstellen, Reihenfolge und Abnahmekriterien. Sie ist **keine** Implementierungsanweisung für einzelne Felder ohne vorherige Prüfung des jeweiligen Dokumentmodells.

Die zentrale Basis bleibt `MasterDataPanel.jsx`: Stammdaten-PDFs werden ausschließlich lokal verarbeitet und nur im React-Sitzungszustand gehalten. Pro Dokumenteditor wird ein Adapter bereitgestellt; das Panel kennt weder Editor-State noch DOM-Struktur.

## Aktueller Stand

| Bereich | Aktueller Stand |
| --- | --- |
| Eigene Daten | vollständig angebunden: Absender, Kontakt, Footer, Steuer/Bank, Kleinunternehmerstatus |
| Partner | vollständig angebunden: Empfängeranschrift und Kundennummer |
| Leistungen und Artikel | vollständig angebunden: kompatible Einträge werden als neue Positionen angehängt |
| Lieferanschriften | ausschließlich für Lieferscheine vorgesehen; Rechnungen besitzen keinen Lieferanschriftenbereich |
| Angebot | vollständig angebunden: eigene Daten, Partner und kompatible Katalogpositionen |
| Lieferschein | vollständig angebunden: eigene Daten, Partner, Lieferanschriften und kompatible Katalogpositionen |
| Mahnung, Geschäftsbrief und Eigenbeleg | vollständig angebunden: eigene Daten und fachlich eindeutig zugeordnete Partner |
| Quittung | eigene Daten angebunden; Partner bewusst offen, da keine eindeutige Partnerrolle existiert |
| Weitere aktive Generatoren | keine vorhanden |

Bestehende Rechnungsvarianten sind Standard-, Waren-, Text-, Abschlags-, Teil- und Schlussrechnung. Die vorhandenen, testbaren Mapper sind `ownDataToInvoice.js`, `partnerToInvoice.js` und `catalogItemsToInvoice.js`.

## Konsolidierungsabnahme (2026-08-02)

- Der gemeinsame Adaptervertrag bleibt dokumentunabhängig: `applyOwnData` für eigene Daten, `applyPartner` für eine fachlich benannte Partnerrolle sowie `canAddCatalogItem`/`addCatalogItems` ausschließlich für Dokumente mit Positionsmodell. Das Panel leitet seine sichtbaren Reiter allein aus diesen Fähigkeiten ab.
- Die dokumentgebundenen Mapper für Mahnung, Geschäftsbrief und Eigenbeleg verwenden die bestehenden strukturkompatiblen Kernmapper wieder; Angebots- und Gutschriftspositionen verwenden einen gemeinsamen reinen Geldpositions-Mapper. Es gibt keine zusätzliche Berechnungs- oder Vorzeichenlogik außerhalb der Editoren.
- Regressionstests decken Rechnung, Angebot, Lieferschein, alle drei `CreditNoteDocumentEditor`-Varianten, Mahnung, Geschäftsbrief, Eigenbeleg und Quittung ab. Sie prüfen Übernahme, Ersetzen beziehungsweise Entfernen, geschützte Felder, kompatible Positionstypen sowie Quelllöschung. Panel-Capability-Tests sichern die sichtbaren Reiter je Adapter ab.
- PDF-/JSON-Importtests prüfen den eingebetteten Dokumentvertrag für Rechnung, Angebot, Lieferschein, Gutschrift, Mahnung, Geschäftsbrief, Eigenbeleg und Quittung. Die Panel-Herkunft bleibt absichtlich Sitzungszustand und verändert beim Entfernen einer Quelle keine bereits übernommenen Dokumentwerte.
- Offene fachliche Ausnahme: Die Quittung erhält bis zur Festlegung eines eindeutig verwendeten Partneradressbereichs keinen Partner-Reiter. Das ist keine technische Lücke, sondern eine absichtliche Schutzregel.

## Verbindliche Kompatibilitätsmatrix

`Ja` bedeutet: als Zielumfang des Rollouts verbindlich vorgesehen. `Nein` bedeutet: nicht anbinden; nur bei einer späteren fachlichen Erweiterung neu entscheiden. „nicht vorhanden“ bedeutet, dass der Generator aktuell nicht im Repository aktiv ist und vor einer Umsetzung zuerst einen eigenen Editor benötigt.

| Dokumenttyp | Aktiver Editor | Eigene Daten | Partner | Leistungen/Artikel | Lieferanschrift | Besonderheiten |
| --- | --- | --- | --- | --- | --- | --- |
| Rechnung | `InvoiceDocumentEditor` | Ja, umgesetzt | Ja, umgesetzt | Ja, umgesetzt: Standard/Waren/Abschlag/Teil/Schluss `service`, `goods`; Textrechnung `textService` | Nein | `deliveryItem` nie für Rechnungen; Positionen immer anhängen |
| Angebot | `OfferDocumentEditor` | Ja, umgesetzt | Ja, umgesetzt | Ja, umgesetzt: ausschließlich `service`, `goods`; Nein: `textService`, `deliveryItem` | Nein | Angebotsnummer, Gültigkeit, Referenzen, Texte und Konditionen nie überschreiben; Positionen nur anhängen |
| Lieferschein | `DeliveryNoteDocumentEditor` | Ja, umgesetzt | Ja, umgesetzt | Ja, umgesetzt: ausschließlich `goods`, `deliveryItem`; Nein: `service`, `textService` | Ja, umgesetzt | Der Editor hat nur einen Empfängeradressblock. Die Hauptanschrift des Partners belegt ihn zunächst; eine Lieferanschrift desselben Partners ersetzt ihn. Nicht unterstützte Katalogtypen bleiben sichtbar, sind aber nicht auswählbar. |
| Gutschrift | `CreditNoteDocumentEditor` – Variante `creditNote` | Ja, umgesetzt | Ja, umgesetzt | Ja, umgesetzt: ausschließlich `service`, `goods`; Nein: `textService`, `deliveryItem` | Nein | Aktive Variante auf Route `/dokumente/gutschrift`; Vorzeichen, Referenzen und Gutschriftssumme verbleiben beim Editor; Positionen nur anhängen. |
| Stornorechnung | `CreditNoteDocumentEditor` – Variante `cancellationInvoice` | Ja, umgesetzt | Ja, umgesetzt | Ja, umgesetzt: wie Gutschrift | Nein | Aktive Variante auf Route `/dokumente/gutschrift`; `originalInvoiceNumber` und `cancellationReason` niemals überschreiben. |
| Rechnungskorrektur | `CreditNoteDocumentEditor` – Variante `invoiceCorrection` | Ja, umgesetzt | Ja, umgesetzt | Ja, umgesetzt: wie Gutschrift | Nein | Aktive Variante auf Route `/dokumente/gutschrift`; `originalInvoiceNumber` und `correctionReason` niemals überschreiben. |
| Mahnung | `ReminderDocumentEditor` | Ja, umgesetzt | Ja, umgesetzt: Empfänger | Nein | Nein | Offene Posten, Rechnungsbezug, Forderungsbetrag, Gebühren, Fristen, Mahnstufe und Texte bleiben unverändert |
| Geschäftsbrief | `BusinessLetterDocumentEditor` | Ja, umgesetzt | Ja, umgesetzt: Briefempfänger | Nein | Nein | Betreff, Anrede, Brieftext, Datum, Zeichen, Anlagen und individuelle Inhalte bleiben unverändert |
| Eigenbeleg | `SelfReceiptDocumentEditor` | Ja, umgesetzt: ausstellendes Unternehmen | Ja, umgesetzt: Zahlungsempfänger / Lieferant | Nein | Nein | Der bestehende, so beschriftete Adressblock bestimmt die Partnerrolle; Ausgaben-, Positions- und Berechnungsdaten bleiben unverändert |
| Quittung | `ReceiptDocumentEditor` | Ja, umgesetzt: Aussteller | Nein, Rolle nicht eindeutig | Nein | Nein | Das Modell hat keinen eindeutig verwendeten Partneradressbereich; „von“, Zweck, Beträge und Referenzen bleiben unverändert |
| Auftragsbestätigung | nicht vorhanden | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein, bis ein Editor existiert | Nein | Bei künftiger Anlage wie Angebot behandeln; Lieferanschrift nur bei eigenem Lieferbereich |

Weitere aktive Generatoren gibt es derzeit nicht. Bei jedem neuen `formType` ist diese Matrix vor einer Panel-Anbindung zu ergänzen.

## Gemeinsame Regeln

- Eigene Daten ersetzen vorhandene Absender-, Kontakt-, Footer-, Bank- und Steuerdaten erst nach Warnung und Bestätigung.
- Partner ersetzen vorhandene Empfängerdaten erst nach Warnung und Bestätigung. Bei Dokumenten mit anderer Partnerrolle ist ein eigener, eindeutig benannter Mapper erforderlich.
- Leistungen und Artikel werden ausschließlich als neue Positionen angehängt; bestehende Positionen werden nie überschrieben.
- Lieferanschriften dürfen nur bei Dokumenten mit einem tatsächlichen Lieferanschriftenzweck übernommen werden. Rechnungen und Geschäftsbriefe erhalten keine Lieferanschrift. Hat ein Editor – wie der aktuelle Lieferschein – nur einen Empfängeradressblock, ersetzt die Lieferanschrift diesen Block, statt einen zweiten Adressblock zu erzeugen.
- Eine Lieferanschrift ist ausschließlich auswählbar, wenn sie dem aktuell gewählten Partner gehört. Beim Partnerwechsel wird eine bestehende Lieferanschriftauswahl verworfen; der Empfängeradressblock wird wieder mit der Hauptanschrift des neuen Partners belegt.
- Entfernte Quelldateien ändern bereits übernommene Dokumentdaten niemals. Das Panel kennzeichnet lediglich die fehlende Quelle.
- Stammdaten, Auswahl und Herkunft leben nur im React-Sitzungszustand; keine dauerhafte Browser-Speicherung.
- Keine DOM-Manipulation, globalen Events oder parallelen Editor-Zustände. Gemeinsame Adapter, Contracts und Mapper werden erweitert oder wiederverwendet.
- Das Panel zeigt pro Dokument ausschließlich die Reiter, für die dessen Adapter eine Übernahme anbietet.
- Stammdaten-ID und Herkunft gehören nicht automatisch in das bestehende Dokument-PDF/JSON. Sie bleiben Panel-Metadaten, sofern ein Dokumentvertrag sie nicht explizit vorsieht.

## Umsetzungsreihenfolge

### Phase 5A – Angebot (abgeschlossen)

- **Editor:** `OfferDocumentEditor`.
- **Adapter:** `applyOwnData`, `removeOwnData`, `hasOwnDocumentData`; `applyPartner`, `removePartner`, `hasRecipientData`; `canAddCatalogItem`, `addCatalogItems`.
- **Mapping:** Eigene Daten übernehmen Absender, Kontakt, Rücksendezeile sowie Firmen-, Steuer-/Register- und Bankangaben im Footer. Partner übernehmen Firma, Zusatz/zu Händen, Abteilung, Anschrift und Kundennummer. Katalogpositionen übernehmen ausschließlich Standardbeschreibung, Menge, Einheit, Netto-Einzelpreis und Umsatzsteuer.
- **Katalogtypen:** `service` und `goods` sind unterstützt. `textService` besitzt im Angebotseditor kein fachlich passendes Textpositionsmodell; `textService` und `deliveryItem` bleiben sichtbar, sind aber nicht auswählbar und erhalten einen Hinweis. Jede Übernahme erzeugt neue Angebotspositions-IDs und hängt nur an.
- **Schutz und Verhalten:** Warnung beim Ersetzen von Absender/Empfänger; Quelle entfernen ohne Dokumentänderung. Angebotsnummer, Belegdatum, Gültigkeit, interne und externe Referenzen, Texte, Feldkonfiguration, vorhandene Positionen und die bestehende Berechnungslogik bleiben unverändert.
- **Abnahme:** Mapper- und Integrationsabdeckung, mehrfaches Hinzufügen, Quelllöschung, Angebot-PDF-/JSON-Roundtrip, Typecheck, vollständige Tests, Produktions-Build sowie Sichtprüfung in Light und Dark Mode erfolgreich.

### Phase 5B – Lieferschein inklusive Lieferanschriften (abgeschlossen)

- **Editor und Modell:** `DeliveryNoteDocumentEditor` verwendet aktuell einen einzigen Empfängeradressblock (`deliveryNoteData.recipient`) mit Firmenname, Zusatz/Ansprechpartner sowie Straße, Hausnummer, PLZ und Ort. Einen getrennten Auftraggeber-/Empfänger- und Lieferanschriftenblock gibt es nicht.
- **Adapter:** Eigene Daten; `applyPartner`, `removePartner`, `hasRecipientData`; `applyDeliveryAddress`, `removeDeliveryAddress`; `canAddCatalogItem`, `addCatalogItems`.
- **Verbindliches Zielmapping:** Die Hauptanschrift des gewählten Partners belegt zunächst `deliveryNoteData.recipient`. Wählt der Nutzer eine gespeicherte Lieferanschrift dieses Partners, ersetzt sie in diesem Block `companyName`, `attention`, `name` sowie `address.street`, `address.houseNumber`, `address.postalCode` und `address.city`. Dabei werden Zusatz/zu Händen nach `attention` und Abteilung nach `name` übernommen. Der aktuelle Empfängerblock besitzt kein Landfeld. Der ausgewählte Partner bleibt als zugehöriger Geschäftspartner erhalten. Weil der Editor nur diesen einen Adressblock besitzt, wird keine zusätzliche Lieferadresse gedruckt oder gespeichert.
- **Verhalten beim Übernehmen und Entfernen:**
  - `applyPartner` schreibt die Hauptanschrift des Partners in den Empfängerblock.
  - `applyDeliveryAddress` ersetzt diesen Block durch die ausgewählte Lieferanschrift desselben Partners. Eine andere Auswahl ersetzt die zuvor gewählte Lieferanschrift.
  - `removeDeliveryAddress` erhält den ausgewählten Partner und setzt den Empfängerblock auf dessen Hauptanschrift zurück; er leert den Empfängerblock nicht.
  - Beim Partnerwechsel wird die bisherige Lieferanschriftauswahl verworfen und die Hauptanschrift des neuen Partners in den Empfängerblock geschrieben.
  - `removePartner` entfernt den ausgewählten Partner und leert anschließend den gesamten Empfängerblock.
  - Lieferanschriften anderer Partner dürfen weder angeboten noch übernommen werden.
- **Katalogmapping und Abnahme:** Ausschließlich `goods` und `deliveryItem` werden in Lieferscheinpositionen übernommen. `service` und `textService` bleiben im Panel sichtbar, sind für den Lieferschein nicht auswählbar, erhalten einen klaren Hinweis und werden niemals automatisch in Lieferscheinpositionen umgewandelt. Preis-, Steuer- und Summenwerte werden nicht übertragen. Der aktuelle Editor besitzt kein passendes Lieferhinweisziel; ein Kataloghinweis wird deshalb nicht in den Lieferschein geschrieben. Mapper- und Integrationsabdeckung, Lieferanschriften-/Partnerwechsel und Rückfall zur Hauptanschrift, PDF-/JSON-Roundtrip, Typecheck, vollständige Tests, Produktions-Build sowie Light-/Dark-Mode-Sichtprüfung sind erfolgreich.

### Phase 5C – Gutschrift, Stornorechnung und Rechnungskorrektur (abgeschlossen)

- **Editor und Varianten:** Ein aktiver `CreditNoteDocumentEditor` deckt auf der Route `/dokumente/gutschrift` die Varianten `creditNote` (Gutschrift), `cancellationInvoice` (Stornorechnung) und `invoiceCorrection` (Rechnungskorrektur) ab. Die Variantenwahl und deren Feldsichtbarkeit liegen im Editor.
- **Adapter:** Ein gemeinsamer Adapter des `CreditNoteDocumentEditor` stellt für alle drei Varianten `applyOwnData`, `removeOwnData`, `hasOwnDocumentData`, `applyPartner`, `removePartner`, `hasRecipientData`, `canAddCatalogItem` und `addCatalogItems` bereit. Das `MasterDataPanel` bleibt dokumentunabhängig.
- **Mapping und Schutzfelder:** Eigene Daten übernehmen nur Absender, Kontakt, Rücksendezeile sowie Firmen-, Steuer-/Register- und Bankfelder im Footer. Partner übernehmen nur die Empfängeranschrift (Firma, Zusatz/zu Händen, Abteilung, Straße, Hausnummer, PLZ, Ort); vorhandene Referenzen bleiben unverändert. Die Stammdatenübernahme verändert weder `originalInvoiceNumber` noch `cancellationReason`, `correctionReason`, Ursprungsrechnungsreferenzen, Dokumentvariante, Titel, Vorlauf-/Nachlauftexte oder sonstige Spezialfelder.
- **Katalogtypen:** Ausschließlich `service` und `goods` werden als neue unabhängige Positionen ergänzt. `textService` besitzt kein separates Gesamtbetrags-/Textpositionsmodell und `deliveryItem` ist fachlich nicht passend; beide bleiben sichtbar, sind aber nicht auswählbar. Wiederholtes Hinzufügen erzeugt jeweils neue Credit-Note-Positions-IDs.
- **Berechnungen und Herkunft:** Vorzeichen-, Summen-, Steuer- und sonstige Berechnungslogik bleibt ausschließlich im `CreditNoteDocumentEditor`. Mapper enthalten keine parallele Berechnungs- oder Vorzeichenlogik. Entfernte Quelldateien ändern bereits übernommene Daten nicht, markieren jedoch deren Quelle als nicht mehr verfügbar.
- **Abnahme:** Mapper- und Integrationsabdeckung für alle drei Varianten, Schutz von Referenz- und Grundfeldern, mehrfaches Anhängen, Credit-Note-PDF-/JSON-Roundtrip, Typecheck, vollständige Tests, Produktions-Build sowie Light-/Dark-Mode-Sichtprüfung sind erfolgreich.

### Phase 5D – Mahnung (abgeschlossen)

- **Editor:** `ReminderDocumentEditor`.
- **Adapter:** eigene Daten und Partnerempfänger; keine Katalog- oder Lieferanschriftfunktionen.
- **Mapping:** Eigene Daten übernehmen ausschließlich Absender, Kontakt, Rücksendezeile sowie Footer-, Bank- und Steuerdaten. Partner übernehmen ausschließlich Firma, Zusatz/zu Händen, Abteilung und Hauptanschrift in den Mahnungsempfänger.
- **Verhalten:** Ersetzungswarnungen, gezieltes Entfernen, Wiederübernehmen, Partnerwechsel und Quelldatei-Status entsprechen den bisherigen Integrationen. Offene Posten, Rechnungsbezug, Forderungsbetrag, Zinsen, Mahngebühren, Fristen, Mahnstufe, Texte und Mahnungslogik bleiben stets unverändert.
- **Abnahme:** Mapper- und Integrationsabdeckung, Empfängerwechsel mit offenen Posten, Quelllöschung, PDF-/JSON-Roundtrip, Typecheck, vollständige Tests, Produktions-Build sowie Light-/Dark-Mode-Sichtprüfung sind erfolgreich.

### Phase 5E – Geschäftsbrief (abgeschlossen)

- **Editor:** `BusinessLetterDocumentEditor`.
- **Adapter:** eigene Daten und Partner als Briefempfänger; keine Katalog- oder Lieferanschriftfunktionen.
- **Mapping:** Eigene Daten in Briefkopf, Kontakt und Footer; Partner nur in das Anschriftfeld. Keine Übernahme von Katalog oder Lieferanschrift.
- **Verhalten:** Betreff, Anrede, Brieftext, Datum, Zeichen, Anlagen und individuelle Briefinhalte bleiben unverändert; Warnungen betreffen ausschließlich Absender oder Briefempfänger.
- **Abnahme:** Mapper- und Integrationsabdeckung, Quelllöschung, Geschäftsbrief-PDF-/JSON-Roundtrip, Typecheck, vollständige Tests, Produktions-Build sowie Light-/Dark-Mode-Sichtprüfung sind erfolgreich.

### Phase 5F – Eigenbeleg und Quittung (teilweise abgeschlossen)

- **Editoren:** `SelfReceiptDocumentEditor`, `ReceiptDocumentEditor`.
- **Eigenbeleg – Adapter und Rolle:** Eigene Daten und Partner sind umgesetzt. Eigene Daten füllen das ausstellende Unternehmen. Der vorhandene Empfängeradressblock ist ausdrücklich als „Zahlungsempfänger / Lieferant“ beschriftet; deshalb übernimmt ein Partner ausschließlich in diese Rolle. Das Panel verwendet dieselbe fachliche Bezeichnung für Übernehmen-, Ersetzen- und Entfernen-Aktionen.
- **Quittung – Adapter und Rolle:** Eigene Daten sind als Aussteller umgesetzt. Partner sind bewusst nicht angebunden: Das Modell besitzt keinen sichtbar genutzten Partneradressblock; der freie Wert „von“ reicht nicht für eine sichere Adress- oder Rollenübernahme aus. Es wird keine Feldstruktur erfunden.
- **Mapping und Schutz:** Keine Katalogpositionen oder Lieferanschriften. Beim Eigenbeleg bleiben Belegdaten, Referenzen, Ausgabeninformationen, vorhandene Positionen, Steuer- und Summenberechnung unverändert. Bei der Quittung bleiben Zahlungspartner („von“), Zweck, Nummern, Daten, Referenzen, Beträge, Zahlungsart und Berechnung unverändert.
- **Abnahme:** Mapper- und Integrationsabdeckung, PDF-/JSON-Roundtrip für Eigenbeleg und Quittung, Typecheck, vollständige Tests, Produktions-Build sowie Light-/Dark-Mode-Sichtprüfung sind erfolgreich. Die Partnerintegration der Quittung bleibt fachlich offen.

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

- Welche fachlich eindeutige Partnerrolle und welcher sichtbar verwendete Adressbereich sollen für die Quittung vorgesehen werden? Bis dahin bleibt nur der Reiter „Eigene Daten“ verfügbar.
- Die aktive Repository-Landschaft enthält derzeit keine Auftragsbestätigung. Ihre Matrixzeile bleibt bis zur Anlage des Editors bewusst gesperrt.

## Arbeitsweise

Dieser Plan ist zunächst ausschließlich Spezifikation. Jede Umsetzungsphase erfolgt in einem eigenen Auftrag, beginnt mit einer Prüfung des Zieleditors und aktualisiert danach diese Datei sowie `stammdaten-generator-integration.md`. Ohne bestätigte Feldsemantik, Adapter und Tests wird kein Stammdatentyp angebunden.
