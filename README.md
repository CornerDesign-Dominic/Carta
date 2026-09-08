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

In Vercel wird `@sparticuz/chromium-min` eingesetzt, damit der Chromium-Browser nicht in jeder Function-Kopie gespeichert wird. Der versionsfixierte Browser-Pack liegt im öffentlichen Vercel Blob Store des Projekts und wird beim ersten Cold Start geladen. `CHROMIUM_REMOTE_PACK_URL` ist für Production, Preview und Development auf diese URL gesetzt; ohne diese Variable nutzt die Function denselben kontrollierten Fallback.

`npm run check:vercel-function-size` erstellt einen Vercel-Produktionsbuild und bricht bei einer Function ab, die größer als 10 MiB ist. Der GitHub-Workflow `.github/workflows/vercel-function-size.yml` führt dieselbe Prüfung bei Änderungen aus. Dafür muss einmalig das GitHub-Repository-Secret `VERCEL_TOKEN` hinterlegt werden; der Token wird nicht im Repository gespeichert.

## Technischer Hinweis

Der interne Projektname darf weiterhin `Carta` bleiben.
