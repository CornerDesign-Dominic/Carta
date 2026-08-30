# Belege24 – Review-Checkliste für Wissensartikel

Diese Checkliste wird nach Erstellung oder größerer Überarbeitung jeder Wissensseite abgearbeitet. Grundlage ist `docs/knowledge/ARTICLE_GUIDE.md`.

## 1. Inhalt und Umfang

- [ ] Hauptthema klar abgegrenzt
- [ ] alle wesentlichen Punkte abgedeckt
- [ ] so kurz wie möglich, so lang wie nötig
- [ ] keine künstliche Textverlängerung
- [ ] praxisnahes Fachniveau eingehalten
- [ ] Definition bzw. Grundprinzip fachlich korrekt
- [ ] praktische Bedeutung erklärt
- [ ] wichtige Zusammenhänge und Abgrenzungen enthalten
- [ ] Beispiele und Berechnungen geprüft
- [ ] Voraussetzungen oder Grenzen von Formeln/Modellen genannt, sofern relevant

## 2. Verständlichkeit und Stil

- [ ] Sprache klar, sachlich und natürlich
- [ ] neutraler Fachtext als Grundform
- [ ] Du-Ansprache nur dort genutzt, wo sie natürlich hilft
- [ ] keine Umgangs-, Werbe- oder Content-Marketing-Sprache
- [ ] Fachbegriffe nur sinnvoll eingesetzt
- [ ] schwierige Fachbegriffe erklärt oder passend mit dem Glossar verknüpft
- [ ] Absätze gut erfassbar
- [ ] Überschriften konkret und nicht redundant

## 3. Aufbau und Praxiselemente

- [ ] Titel und Einleitung kompakt und eindeutig
- [ ] Hauptteil passend zum Thema aufgebaut, nicht nach starrem Schema
- [ ] Beispiele, Formeln und Tabellen nur bei echtem Mehrwert
- [ ] zahlenlastige Themen enthalten nach Möglichkeit ein kompaktes Beispiel
- [ ] Fehler-/Hinweisabschnitte nur bei echtem Nutzen
- [ ] Praxisfälle auf gängige und relevante Situationen begrenzt

## 4. Glossar

- [ ] vorhandene Glossarbegriffe vor neuen Einträgen geprüft
- [ ] keine Doppelbegriffe oder unnötigen Synonyme angelegt
- [ ] neue Einträge nur bei echtem Erklärungsbedarf
- [ ] Glossarverlinkungen sparsam und sinnvoll gesetzt

## 5. Interne Links

- [ ] nur deutlich passende Wissensseiten verlinkt
- [ ] als Richtwert maximal etwa 5 Wissenslinks
- [ ] keine Links nur aus SEO-Gründen
- [ ] keine nicht existierenden Ziele verlinkt
- [ ] Related-Einträge fachlich sinnvoll
- [ ] passendes Tool oder Dokument verlinkt, wenn eine eindeutige direkte Passung besteht

## 6. SEO

- [ ] `title` gepflegt
- [ ] `description` gepflegt
- [ ] `seo.title` individuell gepflegt
- [ ] `seo.description` individuell gepflegt
- [ ] `seo.canonicalPath` korrekt
- [ ] Suchintention getroffen
- [ ] Hauptsuchbegriff natürlich verwendet
- [ ] sinnvolle Synonyme natürlich berücksichtigt
- [ ] keine künstlichen SEO-Abschnitte
- [ ] kein Keyword-Stuffing

## 7. FAQ

Falls sinnvoll:

- [ ] in der Regel 2 bis 5 echte Nutzerfragen
- [ ] Antworten kurz, direkt und eigenständig verständlich
- [ ] keine künstlichen SEO-Fragen
- [ ] keine bloße Wiederholung des Haupttexts

## 8. Aktualität und Quellen

Falls relevant:

- [ ] aktueller Stand geprüft
- [ ] veränderliche Werte, Fristen, Grenzbeträge und Zinssätze geprüft
- [ ] Primärquellen bevorzugt
- [ ] amtliche oder institutionelle Quellen genutzt, wenn verfügbar
- [ ] private Unternehmensseiten nicht als Standardquelle genutzt, wenn eine geeignete Primärquelle existiert
- [ ] Paragraphen und Grundlagen korrekt
- [ ] Disclaimer korrekt gesetzt
- [ ] `updatedAt` / `reviewedAt` sinnvoll aktualisiert
- [ ] keine unnötige Jahreszahl in Titel oder SEO-Titel
- [ ] Quellen stützen die relevanten Aussagen tatsächlich
- [ ] Links funktionieren

## 9. Technische Integration

- [ ] Seite in der bestehenden Knowledge-Struktur registriert
- [ ] Kategorie / Hub korrekt zugeordnet
- [ ] Sitemap aktualisiert, sofern nötig
- [ ] vorhandene Komponenten und Datenstrukturen wiederverwendet
- [ ] keine unnötige Sonderkomponente angelegt
- [ ] Slug und Canonical-Pfad stimmen überein
- [ ] keine Duplikate bei Slugs oder IDs

## 10. Abschlussprüfung

- [ ] fachliche Aussagen geprüft
- [ ] interne Links geprüft
- [ ] Glossarbegriffe geprüft
- [ ] Quellen geprüft
- [ ] SEO-Felder geprüft
- [ ] Kategorie / Hub / Registrierung geprüft
- [ ] relevante Tests ausgeführt
- [ ] Build erfolgreich
- [ ] keine neuen Lint-/Syntaxfehler
- [ ] Seite auf offensichtliche Darstellungsprobleme geprüft
- [ ] Artikel erfüllt den Standard aus `ARTICLE_GUIDE.md`

## Freigabe

Ein Queue-Eintrag darf erst auf `fertig` gesetzt werden, wenn alle für den Artikel relevanten Punkte geprüft wurden. Nicht relevante Punkte müssen nicht künstlich erfüllt werden.

Besteht nach der Prüfung noch eine fachliche, quellenbezogene oder technische Unsicherheit, wird der Eintrag auf `Review` gesetzt. Der konkrete Grund wird im Queue-Eintrag festgehalten. Unsichere Inhalte dürfen nicht erfunden oder als gesichert dargestellt werden.
