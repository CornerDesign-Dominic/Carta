# Belege24

Belege24 bündelt Belege, Werkzeuge und Wissen für geschäftliche Dokumente, Berechnungen und Nachweise.

Ziel ist eine schnelle, klare Nutzung direkt im Browser: ohne Login, ohne unnötige Datensammlung und ohne überladenes Design.

## Leitfäden

Diese Markdown-Dateien sind der Arbeitsstandard für die weitere Entwicklung:

- [Projektregeln](PROJECT_RULES.md)
- [Tools Guide](TOOLS_GUIDE.md)
- [Documents Guide](DOCUMENTS_GUIDE.md)
- [Knowledge Guide](KNOWLEDGE_GUIDE.md)

## Bereiche

- Belege: interaktive Dokumente erstellen, prüfen, drucken und als PDF speichern.
- Tools: Werte berechnen, Varianten vergleichen, Fristen prüfen und Nachweise vorbereiten.
- Wissen: praktische Erklärseiten zu Belegen, Tools und geschäftlichen Abläufen.

## PDF-Export

PDF läuft über die bestehende Projektlogik: Das Frontend sendet bereinigtes HTML an `/api/generate-pdf`; die API rendert daraus serverseitig ein PDF.

Lokal kann für Puppeteer ein eigener Chromium-Pfad über `PUPPETEER_EXECUTABLE_PATH` gesetzt werden.

## Technischer Hinweis

Der interne Projektname darf weiterhin `Carta` bleiben.
