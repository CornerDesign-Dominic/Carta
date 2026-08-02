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

**Phase 1 übernimmt ausdrücklich keine Daten in Dokumentgeneratoren.** Sie verändert weder Absender- noch Empfänger- oder Lieferanschriftfelder und fügt keine Positionen hinzu. Die Aktionsbuttons geben ausschließlich die neutrale Meldung aus, dass die Übernahme in einer folgenden Phase ergänzt wird.

## Spätere Phasen

1. **Phase 2 – Eigene Daten:** Auswahl in Absender, Rücksendezeile, Fußbereich und Vorschau übernehmen; Ersetzungswarnung und Rücksetzen ergänzen.
2. **Phase 3 – Partner:** Partner- und Lieferanschrift getrennt in Empfänger- beziehungsweise Lieferfelder übernehmen; Warnungen und den Übernahmezustand des Panels ergänzen.
3. **Phase 4 – Leistungen:** Mehrfach ausgewählte Einträge als neue Positionen anhängen, ohne bestehende Positionen zu überschreiben.
4. **Phase 5 – Rollout:** Panel auf Angebote, Lieferscheine und weitere geeignete Generatoren ausweiten; mobile Detailoptimierung und dokumenttypspezifische Abnahme ergänzen.

## Abnahmekriterien

Phase 1 ist abgenommen, wenn alle Rechnungsvarianten das gleiche Panel mit bedienbaren Tabs zeigen, PDFs ausschließlich lokal erkannt werden, falsche Reiter korrekt zugeordnet werden, mehrere Dateien und deren Herkunft sichtbar bleiben, Entfernen sowie Konflikt- und Duplikatschutz funktionieren und die Aktionsbuttons keinen Generatorzustand ändern. Die DIN-A4-Vorschau bleibt auf Desktopbreiten nutzbar; Light Mode, Dark Mode, Ein-/Ausklappen und Tastaturbedienung sind geprüft.

Zu testen sind außerdem: Öffnen/Schließen des Panels, Tabwechsel, das Laden je eines Own-Data-, Partner- und Catalog-PDFs, automatische Zuordnung im falschen Reiter, mehrere Dateien, Entfernen, Suche, Einzelauswahl, Mehrfachauswahl, ungültige PDFs, doppelte Dateien, kollidierende IDs und die Unveränderlichkeit des Dokumentzustands bei allen Aktionsbuttons.
