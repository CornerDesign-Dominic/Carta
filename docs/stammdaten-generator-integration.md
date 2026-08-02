# Stammdatenpanel für Dokumentgeneratoren

## Zielbild

Dokumentgeneratoren erhalten ein gemeinsames, rechtes Stammdatenpanel. Es ergänzt die bestehende linke Dokumentnavigation und den Editor beziehungsweise die Dokumentvorschau:

```text
Dokumentnavigation | Dokumenteditor / Vorschau | Stammdatenpanel
```

Das Panel ist ein- und ausklappbar. Eingeklappt bleibt nur eine schmale, klar beschriftete Leiste sichtbar; aufgeklappt besitzt es eine begrenzte Desktopbreite, ohne eine DIN-A4-Vorschau unlesbar zu verkleinern. Die Implementierung verwendet Design-Tokens sowie bestehende Sidebar-, Panel- und Toolbar-Muster.

Die gemeinsame Komponente ist `src/components/masterDataPanel/MasterDataPanel.jsx`. Sie besitzt die sichtbaren Reiter **Eigene Daten**, **Partner** und **Leistungen**. Reiter verwenden die technischen Werte `ownData`, `partners` und `catalogItems`, sind mit ARIA-Tabs und Tastatur bedienbar und halten nur einen aktiven Reiter im React-Sitzungszustand.

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
- Lieferanschriften des gewählten Partners erscheinen als Anzahl oder kompakte Vorschau und werden künftig separat ausgewählt und übernommen.
- Nach einer späteren Partnerübernahme verschwindet die allgemeine Partnerliste; oben bleibt der übernommene Partner sichtbar, darunter dessen Lieferanschriften.
- Das Ersetzen einer vorhandenen Lieferanschrift löst künftig eine Warnung aus.
- Partnerauswahl und Lieferanschrift können künftig getrennt zurückgesetzt oder entfernt werden.

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

**Phase 1 übernahm ausdrücklich keine Daten in Dokumentgeneratoren.** Diese Einschränkung gilt weiterhin für Partner, Lieferanschriften sowie Leistungen und Artikel.

## Spätere Phasen

1. **Phase 2 – Eigene Daten:** abgeschlossen; die Auswahl wird in Rechnungen mit Ersetzungswarnung übernommen und kann wieder entfernt werden.
2. **Phase 3A – Partner → Empfänger:** abgeschlossen; Partnerdaten werden als Empfänger mit Ersetzungswarnung übernommen und können wieder entfernt werden. **Phase 3B – Lieferanschriften** bleibt offen.
3. **Phase 4 – Leistungen:** offen; Mehrfachauswahl als neue Positionen anhängen, ohne bestehende Positionen zu überschreiben.
4. **Phase 5 – Rollout:** offen; Panel auf Angebote, Lieferscheine und weitere geeignete Generatoren ausweiten; mobile Detailoptimierung und dokumenttypspezifische Abnahme ergänzen.

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

Die Übernahme gilt nur für Rechnungen und nur für die laufende Sitzung. Es gibt keine Live-Synchronisation und keine Stammdaten-ID im Rechnungs-PDF. Lieferanschriften und Leistungen sind weiterhin nicht implementiert.

## Phase 3A: Partner → Empfänger in Rechnungen

Phase 3A ist umgesetzt. Der Rechnungsadapter stellt zusätzlich `applyPartner(record)`, `hasRecipientData()` und `removePartner()` bereit. Das Panel übergibt ausschließlich den gewählten Partnerdatensatz; es kennt keine internen Rechnungszustände.

Der Mapper `src/components/masterDataPanel/mappings/partnerToInvoice.js` übernimmt Firmenname, Zusatz/zu Händen, Abteilung, Straße, Hausnummer, PLZ, Ort und Kundennummer. Fehlende Partnerwerte leeren die jeweiligen Zielwerte. Lieferantennummer, Kontakt-, Bank- und Steuerdaten, interne Notizen, Aktivstatus und Lieferanschriften werden nicht übernommen.

Vor dem vollständigen Ersetzen vorhandener Empfängerdaten erscheint eine Bestätigungsabfrage. Nach erfolgreicher Übernahme bleibt der verwendete Partner mit Herkunft sichtbar. Das Entfernen leert nur Empfänger und Kundennummer; Lieferanschrift, Absender, Positionen und weitere Rechnungsdaten bleiben erhalten. Wird die Quelldatei entfernt, bleiben die Empfängerdaten im Dokument, während der Panelstatus die fehlende Quelle anzeigt und erneutes Übernehmen deaktiviert.

Der Status bleibt bei allen Rechnungsvarianten der laufenden Sitzung erhalten. Lieferanschriften sind nur im angewendeten Partnerzustand vorhanden und werden in Phase 3A weder angezeigt noch in Rechnungen geschrieben. Phase 3B (Lieferanschriften) und Phase 4 (Leistungen) sind weiterhin offen.

## Abnahmekriterien

Phase 1 ist abgenommen, wenn alle Rechnungsvarianten das gleiche Panel mit bedienbaren Tabs zeigen, PDFs ausschließlich lokal erkannt werden, falsche Reiter korrekt zugeordnet werden, mehrere Dateien und deren Herkunft sichtbar bleiben, Entfernen sowie Konflikt- und Duplikatschutz funktionieren und die Aktionsbuttons keinen Generatorzustand ändern. Die DIN-A4-Vorschau bleibt auf Desktopbreiten nutzbar; Light Mode, Dark Mode, Ein-/Ausklappen und Tastaturbedienung sind geprüft.

Zu testen sind außerdem: Öffnen/Schließen des Panels, Tabwechsel, das Laden je eines Own-Data-, Partner- und Catalog-PDFs, automatische Zuordnung im falschen Reiter, mehrere Dateien, Entfernen, Suche, Einzelauswahl, Mehrfachauswahl, ungültige PDFs, doppelte Dateien, kollidierende IDs und die Unveränderlichkeit des Dokumentzustands bei allen Aktionsbuttons.
