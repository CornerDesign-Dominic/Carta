# Stammdatenpanel für Dokumentgeneratoren

## Zielbild

Dokumentgeneratoren erhalten ein gemeinsames, rechtes Stammdatenpanel. Es ergänzt die bestehende linke Dokumentnavigation und den Editor beziehungsweise die Dokumentvorschau. Aktuell ist es für Rechnungen, Angebote, Lieferscheine, Gutschriften, Stornorechnungen, Rechnungskorrekturen, Mahnungen, Geschäftsbriefe, Eigenbelege und Quittungen angebunden:

```text
Dokumentnavigation | Dokumenteditor / Vorschau | Stammdatenpanel
```

Das Panel ist ein- und ausklappbar. Eingeklappt bleibt nur eine schmale, klar beschriftete Leiste sichtbar; aufgeklappt besitzt es eine begrenzte Desktopbreite, ohne eine DIN-A4-Vorschau unlesbar zu verkleinern. Die Implementierung verwendet Design-Tokens sowie bestehende Sidebar-, Panel- und Toolbar-Muster.

Die gemeinsame Komponente ist `src/components/masterDataPanel/MasterDataPanel.jsx`. Sie besitzt die Reiter **Eigene Daten**, **Partner** und **Leistungen**. Sichtbar sind nur die Reiter, die der Adapter des aktuellen Dokuments tatsächlich unterstützt. Reiter verwenden die technischen Werte `ownData`, `partners` und `catalogItems`, sind mit ARIA-Tabs und Tastatur bedienbar und halten nur einen aktiven Reiter im React-Sitzungszustand.

## Lokale Datenverarbeitung

Stammdaten werden ausschließlich aus Belege24-PDFs mit eingebettetem JSON geladen. Die Verarbeitung bleibt vollständig im Browser: keine Übertragung an Belege24, keinen Server, kein Nutzerkonto und keine dauerhafte Speicherung in Local Storage, Session Storage oder IndexedDB.

Jeder Reiter bietet Dateiauswahl und Drag-and-drop. Beim Laden wird eine PDF geprüft, ihr eingebetteter JSON-Anhang ausgelesen, das Belege24-Schema, der Stammdatentyp und die unterstützte Version ermittelt und anschließend mit dem bestehenden Vertrag für Eigene Daten, Partner oder Leistungen und Artikel validiert und normalisiert. Es werden keine parallelen Parser aufgebaut.

Eine gültige Datei im falschen Reiter wird dem passenden Reiter zugeordnet und aktiviert. Eine kompakte Statusmeldung erklärt die Zuordnung. Ungültige, fremde, beschädigte oder nicht unterstützte PDFs werden abgelehnt, ohne technische Stacktraces anzuzeigen.

Mehrere Dateien desselben Typs können pro Sitzung gleichzeitig geladen werden. Jeder normalisierte Datensatz trägt zusätzlich `sourceFileId` und `sourceFileName`. Die Herkunft wird in der Liste angezeigt. Exakt gleiche Dateien werden mit einer temporären Kennung aus Dateiname, Größe, Änderungszeit und eingebetteter `documentId` verhindert. Kollidieren Datensatz-IDs verschiedener Dateien desselben Typs, wird die gesamte betroffene Datei nicht übernommen und der Konflikt sichtbar gemeldet; IDs werden nie neu erzeugt. Das Entfernen einer Datei entfernt ausschließlich deren Datensätze aus dem Panel.

## Fachregeln für die spätere Übernahme

### Eigene Daten

- Ein Stammdatenblatt enthält genau ein Unternehmen.
- Geladene Dateien zeigen pro Unternehmen eine kompakte Zusammenfassung mit Unternehmensname, Ort, USt-IdNr. (falls vorhanden) und Herkunftsdatei.
- Genau ein Unternehmen kann ausgewählt werden.
- Nach einer späteren Übernahme bleiben die übernommenen eigenen Daten im Panel sichtbar.
- Vorhandene Absenderdaten werden künftig nur nach Bestätigung ersetzt.

### Partner

- Alle Partner geladener Dateien werden gemeinsam mit Suche, Herkunft und genau einer Auswahl angezeigt.
- Lieferanschriften des gewählten Partners erscheinen im Lieferschein als auswählbare Liste und werden ausschließlich in dessen einzigen Empfängeradressblock übernommen.
- Nach einer späteren Partnerübernahme verschwindet die allgemeine Partnerliste; oben bleibt der übernommene Partner sichtbar, darunter dessen Lieferanschriften.
- Das Ersetzen einer vorhandenen Lieferanschrift löst im Lieferschein eine Warnung aus.
- Partnerauswahl und Lieferanschrift können im Lieferschein getrennt zurückgesetzt oder entfernt werden; das Entfernen der Lieferanschrift setzt die Hauptanschrift des Partners wieder ein.

### Leistungen und Artikel

- Alle Einträge geladener Dateien sind durchsuchbar; ein Typfilter ist optional.
- Mehrfachauswahl erfolgt über Checkboxen.
- Das Panel enthält keine Anzahl- oder Mengenbearbeitung.
- Ausgewählte Einträge werden künftig als neue Positionen angehängt; vorhandene Positionen werden nicht überschrieben.
- Die Liste bleibt nach einer späteren Übernahme sichtbar.

## Phase 1: Panel-Grundlage

Phase 1 integriert das Panel zunächst in die Rechnungsvarianten (Standard-, Waren-, Text-, Abschlags-, Teil- und Schlussrechnung). Sie umfasst:

- Desktoplayout mit rechter Panelspalte sowie ein- und ausklappbarem Panel.
- Gemeinsame Tabs, Dateiauswahl, Drag-and-drop, lokale Erkennung und automatische Reiterzuordnung.
- Mehrere Dateien, Herkunftsangaben, Entfernen einzelner Dateien, Duplikatschutz und ID-Konfliktschutz.
- Eigene-Daten-Einzelauswahl, Partnersuche mit Einzelauswahl sowie Leistungen-Suche mit Mehrfachauswahl.
- Kompakte `aria-live`-Statusmeldungen und die sichtbare Datenschutzinformation.
- Sichtbare Aktionsbuttons ohne Dokumentwirkung.

**Phase 1 übernahm ausdrücklich keine Daten in Dokumentgeneratoren.** Die noch offene Übernahme betrifft Lieferanschriften und weitere Dokumenttypen.

## Spätere Phasen

1. **Phase 2 – Eigene Daten:** abgeschlossen; die Auswahl wird in Rechnungen mit Ersetzungswarnung übernommen und kann wieder entfernt werden.
2. **Phase 3A – Partner → Empfänger:** abgeschlossen; Partnerdaten werden als Empfänger mit Ersetzungswarnung übernommen und können wieder entfernt werden. **Lieferanschriften** bleiben für den späteren Lieferschein-Rollout offen und sind kein Rechnungsbereich.
3. **Phase 4 – Leistungen und Artikel → Rechnungen:** abgeschlossen; kompatible Mehrfachauswahl wird als neue Positionen angehängt. Lieferanschriften bleiben offen.
4. **Phase 5A – Angebot:** abgeschlossen; eigene Daten, Partner und die Katalogtypen `service` und `goods` sind in Angebote integriert. **Phase 5B – Lieferschein:** abgeschlossen; eigene Daten, Partner, Lieferanschriften sowie `goods` und `deliveryItem` sind integriert. **Phase 5C – Gutschrift, Stornorechnung und Rechnungskorrektur:** abgeschlossen; eigene Daten, Partner und die Katalogtypen `service` und `goods` sind in allen drei Varianten integriert. **Phase 5D–F:** Mahnung, Geschäftsbrief und Eigenbeleg sind mit eigenen Daten und Partnern angebunden; die Quittung unterstützt aufgrund ihrer noch ungeklärten Partnerrolle ausschließlich eigene Daten. Weitere geeignete Generatoren bleiben offen.

## Phase 2: Eigene Daten → Rechnungen

Phase 2 ist umgesetzt. Ausschließlich der Reiter **Eigene Daten** kann in die sechs Rechnungsvarianten (Standard-, Waren-, Text-, Abschlags-, Teil- und Schlussrechnung) übernommen werden. Partner, Lieferanschriften sowie Leistungen und Artikel bleiben unverändert offen.

### Adapter-Schnittstelle

`DocumentsView` übergibt dem Panel einen `documentAdapter`, den `InvoiceDocumentEditor` bereitstellt. Der Adapter besitzt ausschließlich `applyOwnData(record)`, `hasOwnDocumentData()` und `removeOwnData()`. Das Panel kennt keine internen Rechnungszustände und verändert weder DOM noch Local Storage.

### Feldmapping

Der reine Mapper `src/components/masterDataPanel/mappings/ownDataToInvoice.js` übernimmt Unternehmens- und Dokumentkopfname, Anschrift und Rücksendezeile, E-Mail, Telefon, Fax, Website, Steuernummer, USt-IdNr., Handelsregister/Registerdaten, Geschäftsführer/Inhaber sowie Bankname, IBAN und BIC. Nicht vorhandene Werte leeren die unterstützten Zielwerte. Das Rechnungsmodell besitzt kein fachliches Zahlungsziel-Feld; daher wird das optionale Standard-Zahlungsziel nicht übertragen. Das Land und der Kontoinhaber haben ebenfalls kein Ziel im aktuellen Rechnungsmodell.

Der Kleinunternehmerstatus nutzt die bestehende Rechnungslogik und aktualisiert dadurch Berechnung, Vorschau, Druck und PDF-Mapping gemeinsam.

### Ersetzen und Entfernen

Bestehende eigene Daten lösen vor der Übernahme eine Bestätigungsabfrage aus. Das Entfernen wird ebenfalls bestätigt und leert nur Absender-, Kontakt-, Footer-, Bank- und Steuerwerte; Empfänger, Positionen, Rechnungsnummern und Texte bleiben unverändert. Der im Dokument verwendete Datensatz wird im Panel mit Herkunft angezeigt. Wird seine PDF-Datei entfernt, bleiben die Rechnungsdaten erhalten und der Status weist auf die nicht mehr geladene Quelle hin.

### Bekannte Grenzen

Die Übernahme gilt nur für Rechnungen und nur für die laufende Sitzung. Es gibt keine Live-Synchronisation und keine Stammdaten-ID im Rechnungs-PDF. Lieferanschriften sind weiterhin nicht implementiert.

## Phase 3A: Partner → Empfänger in Rechnungen

Phase 3A ist umgesetzt. Der Rechnungsadapter stellt zusätzlich `applyPartner(record)`, `hasRecipientData()` und `removePartner()` bereit. Das Panel übergibt ausschließlich den gewählten Partnerdatensatz; es kennt keine internen Rechnungszustände.

Der Mapper `src/components/masterDataPanel/mappings/partnerToInvoice.js` übernimmt Firmenname, Zusatz/zu Händen, Abteilung, Straße, Hausnummer, PLZ, Ort und Kundennummer. Fehlende Partnerwerte leeren die jeweiligen Zielwerte. Lieferantennummer, Kontakt-, Bank- und Steuerdaten, interne Notizen, Aktivstatus und Lieferanschriften werden nicht übernommen.

Vor dem vollständigen Ersetzen vorhandener Empfängerdaten erscheint eine Bestätigungsabfrage. Nach erfolgreicher Übernahme bleibt der verwendete Partner mit Herkunft sichtbar. Das Entfernen leert nur Empfänger und Kundennummer; Lieferanschrift, Absender, Positionen und weitere Rechnungsdaten bleiben erhalten. Wird die Quelldatei entfernt, bleiben die Empfängerdaten im Dokument, während der Panelstatus die fehlende Quelle anzeigt und erneutes Übernehmen deaktiviert.

Der Status bleibt bei allen Rechnungsvarianten der laufenden Sitzung erhalten. Lieferanschriften sind nur im angewendeten Partnerzustand vorhanden und werden weder angezeigt noch in Rechnungen geschrieben; sie sind ausschließlich für den späteren Lieferschein-Rollout vorgesehen. Phase 4 (Leistungen) ist umgesetzt.

## Phase 4: Leistungen und Artikel → Rechnungen

Phase 4 ist umgesetzt. Der Rechnungsadapter stellt `canAddCatalogItem(record)` und `addCatalogItems(records)` bereit. Der reine Mapper `src/components/masterDataPanel/mappings/catalogItemsToInvoice.js` erzeugt neue, unabhängige Positions-IDs und hängt Positionen ausschließlich am Ende der aktuellen Rechnung an.

Unterstützt werden `service` und `goods` für Standard-, Waren-, Abschlags-, Teil- und Schlussrechnungen sowie `textService` für Textrechnungen. `deliveryItem` ist für Rechnungen nicht verfügbar; ebenso bleiben reguläre Leistungen und Artikel bei Textrechnungen deaktiviert. Nicht passende Einträge bleiben sichtbar, sind aber nicht auswählbar und werden bei einem Variantenwechsel aus der Auswahl entfernt.

Für reguläre Positionen wird die Standardbeschreibung vor dem Suchwort verwendet, fehlende Mengen erhalten den Fallback `1`, und Einzelpreis sowie Steuersatz werden direkt aus den Stammdaten übernommen. Warenrechnungen erhalten bei Artikeln zusätzlich die Artikelnummer. Textleistungen verwenden ihre Textrechnungsbeschreibung, freie Mengen-/Zeitangabe und den gespeicherten Netto-Positionsbetrag ohne zusätzliche Berechnung. Interne Notizen, Suchwörter, Aktivstatus, Herkunft und Stammdaten-IDs werden nicht übernommen.

Mehrfachauswahl wird atomar ergänzt; bei einem Fehler werden keine Positionen angehängt. Nach Erfolg wird nur die Auswahl geleert. Entfernte Quelldateien entfernen keine bereits eingefügten Rechnungspositionen. Lieferanschriften und weitere Dokumenttypen bleiben offen.

## Phase 5A: Stammdaten → Angebote

Phase 5A ist umgesetzt. `DocumentsView` verwendet denselben dokumentunabhängigen `MasterDataPanel`-Vertrag wie bei Rechnungen und übergibt den Adapter des `OfferDocumentEditor`. Eigene Daten und Partner verwenden die vorhandenen, strukturgleichen Absender- beziehungsweise Empfängermapper; die Angebotspositionen werden über `src/components/masterDataPanel/mappings/catalogItemsToOffer.js` gemappt.

Eigene Daten ersetzen nach Bestätigung ausschließlich Absender, Kontakt, Rücksendezeile sowie Firmen-, Steuer-/Register- und Bankfelder im Footer. Partner ersetzen nach Bestätigung ausschließlich Empfängeranschrift und Kundennummer. Angebotsnummer, Belegdatum, Gültigkeit, interne und externe Referenz, Einleitungs- und Schlusstexte, Feldkonfiguration und bestehende Positionen bleiben geschützt. Das Entfernen löscht nur die jeweils übernommenen Absender- oder Empfängerfelder; eine entfernte Quelldatei lässt bereits übernommene Daten unverändert und kennzeichnet nur deren Herkunft im Panel.

Der Angebotskatalog unterstützt ausschließlich `service` und `goods`. Diese werden mit Standardbeschreibung, Menge, Einheit, Netto-Einzelpreis und Umsatzsteuer als neue, unabhängige Dokumentpositionen angehängt. `textService` ist sichtbar, aber nicht auswählbar, weil der Angebotseditor kein eigenes fachlich passendes Textpositionsmodell besitzt; `deliveryItem` ist ebenfalls nicht auswählbar. Mehrfaches Hinzufügen desselben Stammdateneintrags ist erlaubt und erzeugt jeweils neue Positions-IDs. Summen und Steuern berechnet weiterhin allein der Angebotseditor.

Mapper-, Integrations- und Angebots-PDF-/JSON-Roundtrip-Tests sowie Typecheck und Produktions-Build sind erfolgreich. Die Paneldarstellung wurde in Light und Dark Mode geprüft.

## Phase 5B: Stammdaten → Lieferscheine inklusive Lieferanschriften

Phase 5B ist umgesetzt. `DeliveryNoteDocumentEditor` stellt über den gemeinsamen Panel-Adapter eigene Daten, Partner, Lieferanschriften und Katalogpositionen bereit. Eigene Daten verwenden die bereits vorhandenen, strukturgleichen Absender-/Footer-Mapper. Der Partner-Mapper ist lieferscheinspezifisch und schreibt nur den gemeinsamen Empfängeradressblock; Lieferscheinnummer, Daten, Referenzen, Texte und weitere Lieferscheinfelder bleiben unangetastet.

Nach der Partnerübernahme steht dessen Hauptanschrift im Empfängerblock. Nur Lieferanschriften dieses Partners werden angezeigt. Ihre Auswahl ersetzt den Empfängerblock; die Auswahl einer anderen Lieferanschrift ersetzt die vorherige. Das Entfernen einer Lieferanschrift erhält den Partner und stellt dessen Hauptanschrift wieder her. Ein Partnerwechsel verwirft die Lieferanschriftauswahl und übernimmt die neue Hauptanschrift. Erst das Entfernen des Partners leert den Empfängerblock vollständig. Entfernte Quelldateien lassen bereits übernommene Werte unverändert und deaktivieren erneutes Übernehmen aus dieser Quelle.

`goods` und `deliveryItem` werden mit Menge, Einheit und Lieferbeschreibung als neue Positionen angehängt; jede Position erhält eine neue Dokument-ID. `service` und `textService` bleiben sichtbar, sind jedoch nicht auswählbar und werden nicht automatisch umgewandelt. Preis-, Steuer- und Summenwerte werden nie in den Lieferschein übertragen. Der aktuelle Lieferschein besitzt kein eigenes Ziel für einen Katalog-Lieferhinweis, daher wird dieser nicht gemappt. Mapper-, Integrations- und Lieferanschriftenwechseltests sowie Lieferschein-PDF-/JSON-Roundtrip, Typecheck, vollständige Tests, Produktions-Build und Light-/Dark-Mode-Sichtprüfung sind erfolgreich.

## Phase 5C: Stammdaten → Gutschriften, Stornorechnungen und Rechnungskorrekturen

Phase 5C ist umgesetzt. `DocumentsView` bindet den gemeinsamen Adapter des `CreditNoteDocumentEditor` an das unveränderte `MasterDataPanel` an. Er gilt einheitlich für die Varianten `creditNote` (Gutschrift), `cancellationInvoice` (Stornorechnung) und `invoiceCorrection` (Rechnungskorrektur).

Eigene Daten ersetzen nach Bestätigung nur Absender, Kontakt, Rücksendezeile sowie Firmen-, Steuer-/Register- und Bankdaten im Footer. Der Kleinunternehmerstatus wird an die bestehende Berechnungslogik des Editors übergeben. Partner ersetzen nach Bestätigung ausschließlich die Empfängeranschrift mit Firma, Zusatz/zu Händen, Abteilung, Straße, Hausnummer, PLZ und Ort. Referenzen bleiben unverändert. Entfernen löscht nur den jeweils übernommenen Absender- oder Empfängerbereich; entfernte Quelldateien lassen bereits übernommene Dokumentwerte unverändert und kennzeichnen deren Herkunft im Panel.

`service` und `goods` werden mit Standardbeschreibung, Menge, Einheit, Netto-Einzelpreis und Umsatzsteuer ausschließlich als neue, unabhängige Positionen angehängt. `textService` bleibt sichtbar, aber nicht auswählbar, weil der Editor kein fachlich passendes Textpositionsmodell besitzt; `deliveryItem` ist ebenfalls nicht auswählbar. Jede Übernahme erzeugt neue Positions-IDs, auch beim mehrfachen Hinzufügen desselben Katalogeintrags. Der Mapper enthält keine Berechnungs- oder Vorzeichenlogik: Vorzeichen, Steuer, Summen und Variantenverhalten verbleiben ausschließlich im Editor.

Angebots-/Gutschriftsnummern, Beleg- und Leistungsdatum, `originalInvoiceNumber`, `cancellationReason`, `correctionReason`, interne, externe und Kundenreferenzen, Variantenwahl, Titel, Vorlauf-/Nachlauftexte, Feldkonfiguration und vorhandene Positionen bleiben geschützt. Mapper- und Integrationsabdeckung für alle Varianten sowie Credit-Note-PDF-/JSON-Roundtrip, Typecheck, vollständige Tests, Produktions-Build und Light-/Dark-Mode-Sichtprüfung sind erfolgreich.

## Phase 5D–F: Stammdaten → Mahnung, Geschäftsbrief, Eigenbeleg und Quittung

Phase 5D–F ist umgesetzt, soweit die Dokumentmodelle eine fachlich eindeutige Rolle bereitstellen. Mahnung und Geschäftsbrief erhalten jeweils eigene Daten für Absender, Kontakt, Rücksendezeile sowie Footer-/Bank-/Steuerangaben. Partner ersetzen dort ausschließlich die Empfängeranschrift. Katalogpositionen und Lieferanschriften werden nicht angeboten. Offene Posten, Rechnungsbezug, Forderungen, Gebühren, Fristen, Mahnstufe und Texte der Mahnung sowie Betreff, Anrede, Brieftext, Datum, Zeichen, Anlagen und individuelle Inhalte des Geschäftsbriefs bleiben unverändert.

Der Eigenbeleg verwendet eigene Daten als ausstellendes Unternehmen. Sein vorhandener Empfängeradressblock heißt ausdrücklich „Zahlungsempfänger / Lieferant“; Partner werden daher nur mit dieser Rolle übernommen. Belegdaten, Referenzen, Ausgabeninformationen, vorhandene Positionen und Berechnungen bleiben geschützt. Die Quittung verwendet eigene Daten als Aussteller über den quittungsspezifischen Mapper. Eine Partnerintegration ist dort bewusst nicht vorhanden: Der freie Wert „von“ bildet keine sichere Partneradresse oder eindeutige Rolle ab. Zahlungspartner, Zweck, Nummern, Daten, Referenzen, Beträge, Zahlungsart und Berechnung bleiben unverändert.

Das Panel verwendet bei diesen Dokumenten nur unterstützte Reiter und führt Übernehmen, Ersetzen, Wiederübernehmen, Wechseln, Entfernen und Herkunftsstatus ausschließlich im React-Sitzungszustand. Mapper- und Integrationstests sowie Mahnungs-, Geschäftsbrief-, Eigenbeleg- und Quittungs-PDF-/JSON-Roundtrips, Typecheck, vollständige Tests, Produktions-Build und Light-/Dark-Mode-Sichtprüfung sind erfolgreich.

## Konsolidierungsabnahme (2026-08-02)

Die gemeinsame Abnahme bestätigt die einheitliche Capability-Schnittstelle und die Feldschutzgrenzen für Rechnungen, Angebote, Lieferscheine, Gutschriften, Stornorechnungen, Rechnungskorrekturen, Mahnungen, Geschäftsbriefe, Eigenbelege und Quittungen. Eigene Daten und Partner werden nur nach Ersetzungswarnung übernommen; Positionen werden ausschließlich angehängt. Beim Lieferschein setzt das Entfernen einer Lieferanschrift die Hauptanschrift des weiterhin gewählten Partners wieder ein. Das Entfernen einer Quell-PDF ändert keine bereits übernommenen Dokumentwerte. Die Quittung bleibt bewusst auf den Reiter Eigene Daten beschränkt, bis eine fachlich eindeutige Partnerrolle und ein verwendeter Partneradressblock bestimmt sind.

Die Regressionstests sichern die Reiter-Capabilities je Adapter sowie die dokumentgebundenen Mapper für Mahnung, Geschäftsbrief und Eigenbeleg. Sie ergänzen die bereits vorhandene Testabdeckung für Rechnungen, Angebote, Lieferscheine und die drei Varianten des `CreditNoteDocumentEditor`. PDF-/JSON-Roundtrips, Panel ein-/ausklappen sowie die Light-/Dark-Mode-Sichtprüfung wurden für alle angebundenen Dokumenttypen erneut geprüft.

## Abnahmekriterien

Phase 1 ist abgenommen, wenn alle Rechnungsvarianten das gleiche Panel mit bedienbaren Tabs zeigen, PDFs ausschließlich lokal erkannt werden, falsche Reiter korrekt zugeordnet werden, mehrere Dateien und deren Herkunft sichtbar bleiben, Entfernen sowie Konflikt- und Duplikatschutz funktionieren und die Aktionsbuttons keinen Generatorzustand ändern. Die DIN-A4-Vorschau bleibt auf Desktopbreiten nutzbar; Light Mode, Dark Mode, Ein-/Ausklappen und Tastaturbedienung sind geprüft.

Zu testen sind außerdem: Öffnen/Schließen des Panels, Tabwechsel, das Laden je eines Own-Data-, Partner- und Catalog-PDFs, automatische Zuordnung im falschen Reiter, mehrere Dateien, Entfernen, Suche, Einzelauswahl, Mehrfachauswahl, ungültige PDFs, doppelte Dateien, kollidierende IDs und die Unveränderlichkeit des Dokumentzustands bei allen Aktionsbuttons.
