# Belege24 – Artikel-Queue

Diese Datei ist die zentrale Arbeitsliste für neue Wissensartikel. Codex arbeitet neue Artikel nach `docs/knowledge/ARTICLE_GUIDE.md` und prüft sie anschließend anhand von `docs/knowledge/ARTICLE_REVIEW.md`.

## Verwendung

Für jeden neuen Artikel reicht grundsätzlich ein Eintrag mit Titel. Zusätzliche Schwerpunkte nur ergänzen, wenn sie für das Thema wichtig sind.

Empfohlenes Format:

```md
### Titel des Artikels
Status: offen
Kategorie: <Kategorie>
Schwerpunkt:
- optionaler Punkt
- optionaler Punkt
Review-Grund: -
```

Mögliche Statuswerte:

- `offen`
- `in Arbeit`
- `Review`
- `fertig`

## Arbeitsregeln für Codex

1. Nur Einträge mit Status `offen` oder ausdrücklich ausgewählte Einträge bearbeiten.
2. Vor dem Schreiben bestehende Seiten, Glossarbegriffe und interne Verlinkungsmöglichkeiten prüfen.
3. Artikel vollständig technisch integrieren.
4. Review-Checkliste abarbeiten.
5. Status erst auf `fertig` setzen, wenn Inhalt, Verlinkungen und technische Prüfungen abgeschlossen sind.
6. Kann eine fachliche, quellenbezogene oder technische Unsicherheit nicht zuverlässig geklärt werden, den Status auf `Review` setzen und unter `Review-Grund` konkret dokumentieren, was geprüft werden muss.
7. Unsichere Inhalte nicht erfinden oder als gesichert darstellen.
8. Keine weiteren offenen Artikel eigenständig mitbearbeiten, wenn der Auftrag nur einen bestimmten Artikel nennt.

## Offene Artikel

### Incoterms
Status: offen
Kategorie: Recht & Verträge
Schwerpunkt:
- Zweck und Systematik der Incoterms 2020 verständlich erklären
- wichtige Klauseln kompakt einordnen, ohne jede Variante unnötig auszubreiten
- Kosten-, Risiko- und Transportverantwortung voneinander abgrenzen
- klarstellen, was Incoterms nicht regeln, insbesondere Eigentumsübergang und Zahlungsbedingungen
Review-Grund: -

### Gefahrenübergang
Status: offen
Kategorie: Recht & Verträge
Schwerpunkt:
- erklären, wann das Risiko für Verlust oder Beschädigung einer Ware übergeht
- Kaufvertrag, Versendungskauf und typische B2B-Situationen verständlich unterscheiden
- Zusammenhang und Abgrenzung zu Incoterms und Eigentumsübergang darstellen
Review-Grund: -

### Eigentumsvorbehalt
Status: offen
Kategorie: Recht & Verträge
Schwerpunkt:
- einfachen Eigentumsvorbehalt praxisnah erklären
- Besitz, Eigentum und Zahlung voneinander abgrenzen
- erweiterten und verlängerten Eigentumsvorbehalt nur kompakt einordnen
- Bedeutung für Verkäufer und Käufer darstellen
Review-Grund: -

### Allgemeine Geschäftsbedingungen (AGB)
Status: offen
Kategorie: Recht & Verträge
Schwerpunkt:
- Zweck und typische Inhalte von AGB erklären
- Einbeziehung in Verträge und Grenzen der Wirksamkeit verständlich darstellen
- Unterschiede zwischen B2B und B2C nur soweit für das Grundverständnis relevant behandeln
- keine vollständige juristische Detailprüfung einzelner Klauseln
Review-Grund: -

### ADSp
Status: offen
Kategorie: Recht & Verträge
Schwerpunkt:
- Zweck und Bedeutung der Allgemeinen Deutschen Spediteurbedingungen erklären
- Anwendungsbereich und Einbeziehung in Verträge darstellen
- Haftungsregelungen nur auf praxisrelevantem Grundniveau erläutern
- Abgrenzung zu Gesetz, individuellen Verträgen und AGB darstellen
Review-Grund: -

## Beispiel

<!--
### Optimale Bestellmenge
Status: offen
Kategorie: Beschaffung & Materialwirtschaft
Schwerpunkt:
- klassische Andler-Formel erklären
- Berechnung mit praxisnahem Beispiel
- Zusammenhang zwischen Bestellkosten und Lagerkosten zeigen
- Voraussetzungen und Grenzen der Formel nennen
Review-Grund: -
-->

## Review-Beispiel

<!--
### Beispielthema
Status: Review
Kategorie: Beispiel
Schwerpunkt:
- ...
Review-Grund: Aktueller fachlicher Stand konnte nicht eindeutig über eine geeignete Primärquelle bestätigt werden.
-->

## Erledigt

<!-- Fertige Einträge können hierhin verschoben oder in der Arbeitsliste auf `fertig` gesetzt werden. -->
