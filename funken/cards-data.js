// Kartendaten als JSON
export const cards = [
  // Einfache Karten (E)
  {
    id: "E1",
    type: "easy",
    category: "Grundlagen",
    situation: 'Ein Besucher sucht den Stand "SCHÜTZENVEREIN UELZEN"',
    tasks: [
      "Frage T-Orga nach dem Standort",
      'Buchstabiere "SCHÜTZENVEREIN" (deutsches Alphabet)',
      "Notiere die Standortangabe",
    ],
  },
  {
    id: "E2",
    type: "easy",
    category: "Grundlagen",
    situation: "Ihr benötigt eine Ablösung",
    tasks: [
      "Meldet Ablösebedarf mit genauer Zeit",
      "Gebt aktuellen Status durch (fit/müde)",
      "Bestätigt Treffpunkt für Ablösung",
    ],
  },
  {
    id: "E3",
    type: "easy",
    category: "Grundlagen",
    situation:
      "Ihr wurdet auf einen Verletzten im VIP-Bereich aufmerksam gemacht, kennt aber den Weg nicht",
    tasks: [
      "Erfragt Weg von eurem Standort zum VIP-Bereich",
      "Lasst euch markante Punkte nennen",
      "Wiederholt Route zur Bestätigung",
    ],
  },
  // Mittlere Karten (M)
  {
    id: "M1",
    type: "medium",
    category: "Patientenmeldung",
    situation: "Kreislaufpatient",
    patient: {
      description: "Frau, 45 Jahre",
      symptoms: "Schwindel, blass, kalter Schweiß, Puls schnell",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "M2",
    type: "medium",
    category: "Patientenmeldung",
    situation: "Stark blutende Wunde",
    patient: {
      description: "Kind, 8 Jahre",
      symptoms: "5cm Schnittwunde Unterarm, starke Blutung",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "M3",
    type: "medium",
    category: "Patientenmeldung",
    situation: "Sturzverletzung",
    patient: {
      description: "Mann, 67 Jahre",
      symptoms: "Gestürzt, starke Hüftschmerzen, kann nicht gehen",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "M4",
    type: "medium",
    category: "Patientenmeldung",
    situation: "Alkoholintoxikation",
    patient: {
      description: "Jugendlicher, geschätzt 16 Jahre",
      symptoms: "Stark betrunken, noch ansprechbar, kooperativ",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "M5",
    type: "medium",
    category: "Patientenmeldung",
    situation: "Hyperventilation",
    patient: {
      description: "Frau, 28 Jahre",
      symptoms: "Schnelle Atmung, Kribbeln in Händen, panisch",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "M6",
    type: "medium",
    category: "Patientenmeldung",
    situation: "Unterzuckerung",
    patient: {
      description: "Mann, 52 Jahre",
      symptoms: "Diabetiker, verwirrt, zittrig, schwitzt",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  // Schwere Karten (S)
  {
    id: "S1",
    type: "hard",
    category: "Notfallmeldung",
    situation: "Bewusstloser Patient",
    urgent: "DRINGEND",
    patient: {
      description: "Mann, Alter unbekannt",
      symptoms: "Bewusstlos, atmet aber, Puls fühlbar",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "S2",
    type: "hard",
    category: "Notfallmeldung",
    situation: "Verdacht Herzinfarkt",
    urgent: "DRINGEND",
    patient: {
      description: "Mann, 55 Jahre",
      symptoms: "Starke Brustschmerzen, Ausstrahlung linker Arm",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "S3",
    type: "hard",
    category: "Notfallmeldung",
    situation: "Krampfanfall",
    patient: {
      description: "Jugendlicher, 14 Jahre",
      symptoms: "Krampft am ganzen Körper",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "S4",
    type: "hard",
    category: "Notfallmeldung",
    situation: "Schwere Atemnot",
    urgent: "DRINGEND",
    patient: {
      description: "Frau, 38 Jahre",
      symptoms: "Asthma, ringt nach Luft, blaue Lippen",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  {
    id: "S5",
    type: "hard",
    category: "Notfallmeldung",
    situation: "Allergische Reaktion",
    patient: {
      description: "Mann, 29 Jahre",
      symptoms: "Wespenstich, Schwellung im Gesicht, Ausschlag",
    },
    tasks: [
      "Melde den Patienten inkl. eures Standorts anhand von Bezugspunkten",
    ],
  },
  // Großlagen (G)
  {
    id: "G1",
    type: "hard",
    category: "Großlage",
    situation: "8 Personen nach Gedränge verletzt",
    patient: {
      description: "3 leicht, 4 mittel, 1 schwer verletzt",
    },
    tasks: [
      "Mehrere Verletzte melden",
      "Erste Einschätzung durchgeben",
      "Weitere Helfer anfordern",
      "Sammelplatz vorschlagen",
    ],
  },
  {
    id: "G2",
    type: "hard",
    category: "Großlage",
    situation: "5 gleichzeitige Patientenkontakte",
    patient: {
      description: "Verschiedene Verletzungen/Erkrankungen",
    },
    tasks: ["Überlastung melden", "Kurz alle 5 Patienten durchgeben"],
  },
  {
    id: "G3",
    type: "hard",
    category: "Großlage",
    situation: "Massenpanik nach Fehlalarm",
    patient: {
      description: "Ca. 15 Verletzte, davon 3 bewusstlos",
    },
    tasks: ["MANV melden", "Erste Sichtung durchführen und melden"],
  },
  // Funk-Technik (F)
  {
    id: "F1",
    type: "transport",
    category: "Funk-Technik | Transport-Orga",
    situation: "Wechsel auf anderen Kanal anordnen",
    tasks: [
      "Kanalwechsel auf [tbd] anordnen",
      "Auf neuem Kanal melden lassen inkl. Klärung der Verständigung",
    ],
  },
  {
    id: "F2",
    type: "transport",
    category: "Funk-Technik | Transport-Orga",
    situation: "T-Orga ruft alle Einheiten nacheinander",
    tasks: [
      "Fußstreifen einzeln anfunken (der Reihe nach)",
      "Status & Position erfragen",
    ],
  },
  {
    id: "F3",
    type: "transport",
    category: "Funk-Technik | Transport-Orga",
    situation: "Team im Nachbarsektor meldet sich nicht",
    tasks: [
      "Nachbarsektor kontaktieren",
      "Sichtkontakt herstellen lassen und melden",
    ],
  },
  // Transportorga (T)
  {
    id: "T1",
    type: "transport",
    category: "Transportorga",
    situation: "T-Orga braucht Statusbericht",
    tasks: [
      "Aktuelle Patientenzahl",
      "Materialstand (gut/knapp/leer)",
      "Teamzustand (fit/müde)",
      "Besonderheiten melden",
    ],
  },
  {
    id: "T2",
    type: "transport",
    category: "Transportorga",
    situation: "Patient wurde in San-Station an der Bühne gebracht",
    tasks: [
      "Übergabe an San-Zelt",
      "Meldung der Einsatzbereitschaft am ursprünglichen Standort",
    ],
  },
  // Training (TR)
  {
    id: "TR1",
    type: "tech",
    category: "Training",
    situation: "Buchstabiere mit dem Buchstabieralphabet:",
    patient: {
      description: "UELZEN | BEREITSCHAFT | NOTAUSGANG",
    },
    tasks: ["Jeden Begriff einzeln buchstabieren und auf Bestätigung warten"],
  },
  {
    id: "TR2",
    type: "tech",
    category: "Training",
    situation: "Übermittle folgende Zahlen klar:",
    patient: {
      description: "Hausnummer 15 | Uhrzeit 14:32 | Patientenzahl 2 | Sektor 5",
    },
    tasks: ["Alle Zahlen deutlich einzeln", "Keine Verwechslungen zulassen"],
  },
  {
    id: "TR3",
    type: "tech",
    category: "Training",
    situation: "Beschreibe euren Standort ohne Sektornummer",
    tasks: [
      "Nur mit sichtbaren Bezugspunkten",
      "T-Orga muss euch finden können",
      "Präzise Lagebeschreibung",
      "Entfernungen angeben",
    ],
  },
];

// Funktion zum Erstellen einer Karte
export function createCard(cardData) {
  const typeClass = `card-${cardData.type}`;
  const urgentMarker = cardData.urgent
    ? `<span class="urgent-marker">${cardData.urgent}</span>`
    : "";
  const patientInfo = cardData.patient
    ? `
        <div class="patient-info">
            ${cardData.patient.description ? `<strong>${cardData.patient.description}</strong>` : ""}
            ${cardData.patient.symptoms ? `<br>${cardData.patient.symptoms}` : ""}
        </div>
    `
    : "";

  const situationLabel =
    cardData.patient && !cardData.category.includes("Training")
      ? cardData.category === "Großlage"
        ? "Lage"
        : "Patient"
      : cardData.category === "Transportorga"
        ? "Anfrage"
        : cardData.category === "Funk-Technik"
          ? "Anweisung"
          : cardData.category === "Koordination"
            ? "Situation"
            : cardData.category === "Training"
              ? "Aufgabe"
              : "Situation";

  const tasksLabel =
    cardData.category === "Training" && cardData.id === "TR4"
      ? "Funktest"
      : cardData.category === "Training" && cardData.id === "TR5"
        ? "Aufgabe"
        : "Funkaufgabe";

  return `
        <div class="card ${typeClass}">
            <div class="header">
                <div class="card-type">${cardData.category}</div>
                <div class="card-id">${cardData.id}</div>
                <div class="difficulty">${cardData.id.charAt(0)}</div>
            </div>
            <div class="content">
                <div class="situation">
                    <div class="situation-label">${situationLabel}</div>
                    <div class="situation-text">
                        ${cardData.situation} ${urgentMarker}
                    </div>
                    ${patientInfo}
                </div>
                <div class="tasks">
                    <div class="tasks-label">${tasksLabel}</div>
                    <ul class="task-list">
                        ${cardData.tasks.map((task) => `<li>${task}</li>`).join("")}
                    </ul>
                </div>
            </div>
            <div class="footer">OpenR Uelzen - Funkübung</div>
        </div>
    `;
}

// Karten in Seiten aufteilen und rendern
export function renderCards() {
  const cardsPerPage = 8;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  for (let page = 0; page < totalPages; page++) {
    const pageDiv = document.createElement("div");
    pageDiv.className = "print-page";

    const startIdx = page * cardsPerPage;
    const endIdx = Math.min(startIdx + cardsPerPage, cards.length);

    for (let i = startIdx; i < endIdx; i++) {
      pageDiv.innerHTML += createCard(cards[i]);
    }

    // Leere Karten auffüllen
    const remainingSlots = cardsPerPage - (endIdx - startIdx);
    for (let i = 0; i < remainingSlots; i++) {
      pageDiv.innerHTML += '<div class="card empty"></div>';
    }

    document.body.appendChild(pageDiv);
  }
}
