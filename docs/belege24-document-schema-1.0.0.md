# Belege24-Dokumentformat 1.0.0

## Zweck und Abgrenzung

Das Format beschreibt den abgeschlossenen Datenstand eines mit Belege24 erzeugten Dokuments. Version 1.0.0 arbeitet die Standardrechnung als Referenzmodell vollständig aus. Das Modell ist an die PDF-Erstellung und den lokalen PDF-Import der Standardrechnung angeschlossen, aber nicht Bestandteil eines separaten JSON-Download-Workflows.

Bei Standardrechnungen wird der Datensatz als PDF-Anhang `belege24-document.json` mit dem MIME-Type `application/json` gespeichert. Über „PDF laden“ kann dieser Datensatz lokal wiederhergestellt werden. Es gibt weiterhin keinen separaten JSON-Import oder JSON-Download.

## Grundstruktur

```json
{
  "format": "belege24-document",
  "schemaVersion": "1.0.0",
  "document": {},
  "sharedData": {},
  "documentData": {}
}
```

Alle fünf Eigenschaften sind Pflichtfelder. Zusätzliche Eigenschaften dürfen Leser tolerieren, solange die Bedeutung bestehender Eigenschaften unverändert bleibt.

## `document`

| Feld | Typ | Regel |
| --- | --- | --- |
| `documentType` | String | Einer der zentral definierten Dokumenttypen |
| `documentId` | UUID-String | Neue UUID für genau die erzeugte PDF |
| `createdAt` | ISO-8601-String | UTC-Zeitpunkt mit `Z`; kein `updatedAt` |
| `generatorVersion` | String | Version des erzeugenden Belege24-Generators |

Vorgesehene Dokumenttypen sind `invoice`, `offer`, `deliveryNote`, `creditNote`, `reminder`, `receipt` und `selfReceipt`. In Version 1.0.0 ist nur `invoice` fachlich vollständig modelliert.

## `sharedData`

`sharedData` enthält ausschließlich dokumentübergreifend wiederverwendbare Stammdaten.

- `sender.brandName` und `sender.senderLine` bleiben unabhängige Strings.
- `sender.address` enthält die vier tatsächlichen Generatorfelder `street`, `houseNumber`, `postalCode` und `city`. Diese Originalwerte sind beim Rückmapping maßgeblich; aus `senderLine` wird nichts abgeleitet.
- `sender.companyFooter.columns` enthält exakt drei Spalten.
- `sender.companyFooter.companyAddress` enthält die vier originalen, getrennten Generatorfelder der Firmenanschrift in der Fußzeile und ist beim Rückmapping maßgeblich.
- Jede Spalte enthält exakt vier Felder, auch wenn deren `value` leer ist.
- Jedes Feld besitzt mindestens `key` und `value`. Doppelte neutrale Keys wie `custom` sind erlaubt; Position und Reihenfolge sind maßgeblich.
- `recipient` enthält die heute sichtbaren fünf Anschriftenzeilen sowie `customerNumber`. `streetAndNumber` und `countryPostalCodeAndCity` sind unveränderte Darstellungswerte.
- `recipient.address` enthält zusätzlich die vier tatsächlichen Generatorfelder `street`, `houseNumber`, `postalCode` und `city`. Diese Originalwerte sind beim Rückmapping maßgeblich; die beiden Darstellungswerte werden niemals zerlegt.

Leere, aber vorhandene Eingabefelder werden als leerer String gespeichert und nicht weggelassen.

## `documentData` der Standardrechnung

`documentData` enthält den übrigen Generatorzustand:

- `invoiceVariant`: aktuell gewählte Rechnungsart.
- `labels`: sämtliche frei bearbeitbaren Dokument- und Tabellenbeschriftungen.
- `invoice`: Rechnungsnummer, Belegdatum, Leistungsdatum sowie interne und externe Referenz.
- `senderContact`: E-Mail, Telefon, Fax und Website des Absenders.
- `deliveryAddress`: der heute vorhandene Lieferadresszustand einschließlich leerer Werte.
- `project`: alle heute vorhandenen Projekt-, Abschlags- und Leistungszeitraumfelder.
- `positions`: geordnete Liste aller Rechnungspositionen.
- `previousPayments`: geordnete Liste der vorhandenen Abschlagszahlungen.
- `textBlocks`: Inhalt, editierbare Bezeichnung und Sichtbarkeit der Textblöcke.
- `smallBusinessRule.enabled`: Zustand der Kleinunternehmerregelung.
- `footerFieldLabels`: die separat editierbaren Präfixe für USt-IdNr., Steuernummer, IBAN und BIC.
- `fieldConfiguration`: Reihenfolge und ausgeblendete Felder aller konfigurierbaren Bereiche.
- `calculated`: eindeutig abgegrenzte Summen für Rechnung, Leistungen, berücksichtigte Zahlungen und Restbetrag.

Positionen und frühere Zahlungen besitzen jeweils kanonische Dezimalwerte, ein `generatorInput`-Objekt mit den unveränderten ursprünglichen Eingabestrings und ein separates `calculated`-Objekt. Beim Rückmapping ist `generatorInput` für die editierbaren Zahlenfelder maßgeblich; die kanonischen Werte und Berechnungsergebnisse dienen dem Austausch beziehungsweise der Prüfung. IDs und Listenreihenfolge werden erhalten.

Im aktuellen Standardrechnungsgenerator existieren keine getrennten Eingabefelder für Zahlungsfrist oder Zahlungsbedingungen. Der entsprechende Inhalt ist derzeit ausschließlich Bestandteil der frei editierbaren Textblöcke; deshalb wurden keine zusätzlichen Felder erfunden.

## Zahlen und Geldwerte

Alle Dezimal- und Geldwerte werden als JSON-Strings mit Punkt als Dezimaltrennzeichen gespeichert.

- Geldwerte: exakt zwei Nachkommastellen, beispielsweise `"125.50"`.
- Mengen und Steuersätze: normalisierte Dezimalstrings ohne unnötige Endnullen, beispielsweise `"2"` oder `"19.5"`.
- Berechnungen erfolgen beim Mapping anhand der aktuellen Generatorlogik; Geldresultate werden auf Cent gerundet.

Damit enthält das Austauschformat keine binären JavaScript-Gleitkommazahlen. Eine spätere Verarbeitung soll Dezimalarithmetik oder ganzzahlige Centwerte verwenden und gespeicherte berechnete Werte bei der Wiederherstellung als Prüfwerte behandeln.

## Pflichtfelder und leere Werte

Die TypeScript-Schnittstellen definieren alle in Version 1.0.0 bekannten Felder als Pflichtfelder. Fachlich optionale Eingaben werden nicht ausgelassen, sondern als `""`, `false` oder leere Liste gespeichert. `documentData` muss mindestens ein Objekt sein; dokumentartspezifische Detailvalidierung kann pro Dokumenttyp ergänzt werden.

## Schema-Erweiterungen

- Neue optionale Felder dürfen innerhalb derselben Minor-Version nur ergänzt werden, wenn alte Leser sie sicher ignorieren können.
- Umbenennungen, Typänderungen, Bedeutungsänderungen oder neue Pflichtfelder erfordern eine neue Schema-Version.
- Dokumentartspezifische Modelle werden ergänzt, ohne `sharedData` mit nur lokal relevanten Feldern zu erweitern.
- Leser wählen anhand von `format`, `schemaVersion` und `document.documentType` den passenden Parser.
- Migrationen erzeugen ein neues Objekt; ein abgeschlossener PDF-Stand erhält kein `updatedAt`.

## PDF-Erkennung und Auslesen

Die PDF erhält zusätzlich folgende Metadaten:

- Creator: `Belege24 <generatorVersion>`
- Subject: `Belege24-Dokument`
- Keywords: `belege24-document`, Schema-Version, Dokumenttyp und Dokument-ID

Die Metadaten dienen nur zur schnellen Erkennung. Maßgeblich bleibt der eingebettete und validierte JSON-Datensatz. Die interne Lesefunktion unterscheidet gültige Belege24-Daten, fehlende Daten, ungültiges JSON, nicht unterstützte Format-/Schema-Versionen, strukturell ungültige Dokumente und nicht lesbare PDFs.

## Interne Wiederherstellung der Standardrechnung

Die Rückmapping-Funktion `restoreStandardInvoiceState` überführt ein gelesenes Dokument intern in den Zustand des Standardrechnungsgenerators. Sie übernimmt ausschließlich Eingabewerte und Einstellungen. Technische PDF-Metadaten und gespeicherte `calculated`-Werte werden nicht als editierbarer Zustand übernommen; Summen entstehen nach der Wiederherstellung erneut aus Positionen, Abschlagszahlungen und der aktuellen Generatorlogik.

Dezimalwerte werden ohne Umwandlung in binäre Gleitkommazahlen als normalisierte Strings zurückgegeben. Die Funktion verändert das eingelesene Dokument nicht und unterscheidet falschen Dokumenttyp, nicht unterstützte Version, unvollständige Struktur und ungültige Feldwerte.

Anschriften werden beim Rückmapping ausschließlich aus den direkt gespeicherten Generatorfeldern übernommen. Weder kombinierte Anschriftenzeilen noch `senderLine` werden interpretiert, zerlegt oder normalisiert. Dadurch bleiben auch internationale Formate, Postfachangaben, leere Felder, Sonderzeichen und zusätzliche Leerzeichen in den tatsächlichen Generatorfeldern erhalten.
