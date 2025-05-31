# ManaForge - Magic Card Manager

ManaForge ist eine Webanwendung, die Spieler:innen von Magic: The Gathering bei der Erstellung und Verwaltung von Decks unterstützt.

## Live Demo

Die Anwendung ist verfügbar unter: https://mana-forge.netlify.app

## Technologien

- Frontend: SvelteKit (Svelte 5 Runes Mode)
- Backend: SvelteKit Server Actions  
- Datenbank: MongoDB Atlas
- Styling: Bootstrap 5 mit Bootstrap Icons
- Deployment: Netlify

## Funktionen

### Kartenverwaltung
- Alle Karten in einer Grid-Ansicht anzeigen
- Neue Karten über Formular hinzufügen
- Detailansicht einzelner Karten
- Kartenbilder über URLs einbinden

### Deck-Management
- Decks durch interaktives Hinzufügen von Karten erstellen
- Deck-Übersicht mit allen erstellten Decks
- Detailansicht von Decks mit Statistiken
- Automatische Berechnung von Deck-Metriken

### Benutzeroberfläche
- Responsive Design für Desktop und mobile Geräte
- Funktionierendes Burger-Menü für Navigation
- Dark Theme Design
- Bootstrap-Komponenten für konsistentes Design

## Projektstruktur

```
src/
├── routes/
│   ├── +page.svelte              # Startseite
│   ├── cards/                    # Kartenverwaltung
│   ├── add-card/                 # Karte hinzufügen
│   ├── decks/                    # Deck-Verwaltung
│   └── add-deck/                 # Deck erstellen
├── lib/server/
│   └── db.js                     # Datenbankfunktionen
└── app.html                      # HTML Template
```

## Datenbank Schema

### Cards Collection
```javascript
{
  name: String,           // Kartenname
  mana_cost: String,      // Mana-Kosten
  type_line: String,      // Kartentyp
  oracle_text: String,    // Kartenbeschreibung
  colors: Array,          // Farben
  image_url: String,      // Kartenbild URL
  angriff: Number,        // Angriffswert
  verteidigung: Number    // Verteidigungswert
}
```

### Decks Collection
```javascript
{
  name: String,           // Deckname
  description: String,    // Beschreibung
  cards: [{               // Karten im Deck
    card_id: String,      // Karten-Referenz
    count: Number         // Anzahl
  }]
}
```

## Installation

```bash
# Repository klonen
git clone https://github.com/NBogo/mana-forge.git

# Dependencies installieren
npm install

# Environment Variables in .env setzen:
# MONGODB_URI=mongodb+srv://...
# MONGODB_DB=manaforge

# Development Server starten
npm run dev
```

## Über das Projekt

Dieses Projekt wurde als Einzelarbeit im Modul Prototyping entwickelt. Es demonstriert die praktische Anwendung von HTML, CSS, JavaScript, SvelteKit und MongoDB zur Erstellung einer vollständigen Webanwendung.

Die Anwendung erfüllt alle geforderten Anforderungen und geht mit zusätzlichen Features wie interaktivem Deck-Building und responsivem Design über die Mindestanforderungen hinaus.