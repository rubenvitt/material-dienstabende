# Material für Dienstabende

Material für Dienstabende in der Bereitschaft des Deutschen Roten Kreuzes.

## Übersicht

Diese Sammlung enthält interaktive Materialien und Spiele für die Gestaltung von Dienstabenden:

- **Funken-Kartenspiel**: Ein interaktives Kartenspiel zum Erlernen und Üben des Funkens
- **Planspiel OpenR**: Ein Szenario-basiertes Planspiel für Einsatzübungen

## Installation

```bash
# Dependencies installieren
pnpm install

# oder mit npm
npm install
```

## Entwicklung

Zum Starten des lokalen Entwicklungsservers:

```bash
pnpm dev

# oder mit npm
npm run dev
```

Der Server startet auf Port 3000 und bietet automatisches Neuladen bei Änderungen.

## Struktur

```
dienstabend-material/
├── funken/              # Funken-Kartenspiel
│   ├── index.html      # Hauptseite des Kartenspiels
│   ├── cards-data.js   # Kartendaten und Spiellogik
│   └── styles.css      # Styling
├── index.html          # Hauptmenü
└── package.json        # Projektkonfiguration
```

## Verwendung

Nach dem Start des Entwicklungsservers können die Materialien über den Browser aufgerufen werden:

- Hauptmenü: http://localhost:3000
- Funken-Kartenspiel: http://localhost:3000/funken/
- Planspiel OpenR: http://localhost:3000/funken/planspiel-openr.html

## Autor

Rubeen

## Lizenz

Projektspezifische Lizenz - siehe Repository für Details.