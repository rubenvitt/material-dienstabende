// Kartendaten als JSON
export const cards = [
    // Einfache Karten (E)
    {
        id: "E1",
        type: "easy",
        category: "Grundlagen",
        situation: "Ihr werdet in Sektor 5 benötigt.",
        tasks: [
            "Melde deinen aktuellen Standort",
            "Erfrage Freigabe für Sektorwechsel",
            "Bestätige Ankunft in Sektor 5",
        ],
    },
    {
        id: "E2",
        type: "easy",
        category: "Grundlagen",
        situation:
            'Ein Besucher sucht den Stand "SCHÜTZENVEREIN UELZEN"',
        tasks: [
            "Frage T-Orga nach dem Standort",
            'Buchstabiere "SCHÜTZENVEREIN" (deutsches Alphabet)',
            "Notiere die Standortangabe",
        ],
    },
    {
        id: "E3",
        type: "easy",
        category: "Grundlagen",
        situation: "Euch fehlen 2 Kühlpacks und Verbandmaterial",
        tasks: [
            "Melde konkreten Bedarf an T-Orga",
            "Erfrage wo ihr es abholen könnt",
            "Bestätige wenn ihr es habt",
        ],
    },
    {
        id: "E4",
        type: "easy",
        category: "Grundlagen",
        situation: "Eure Ablösung soll in 30 Minuten kommen",
        tasks: [
            "Meldet Ablösebedarf mit genauer Zeit",
            "Gebt aktuellen Status durch (fit/müde)",
            "Bestätigt Treffpunkt für Übergabe",
        ],
    },
    {
        id: "E5",
        type: "easy",
        category: "Grundlagen",
        situation: "Ihr müsst zum VIP-Bereich",
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
            symptoms:
                "Schwindel, blass, kalter Schweiß, Puls schnell",
        },
        tasks: [
            "Melde Patientenkontakt mit Symptomen",
            "Standort mit Bezugspunkt durchgeben",
            "Transport oder Versorgung vor Ort erfragen",
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
            "Melde dringenden Patienten",
            "Genauen Standort mit 2 Bezugspunkten",
            "RTW anfordern, Ankunftszeit erfragen",
        ],
    },
    {
        id: "M3",
        type: "medium",
        category: "Patientenmeldung",
        situation: "Sturzverletzung",
        patient: {
            description: "Mann, 67 Jahre",
            symptoms:
                "Gestürzt, starke Hüftschmerzen, kann nicht gehen",
        },
        tasks: [
            "Patientenmeldung mit Verletzung",
            "Lagerung auf Boden melden",
            "Trage für Transport anfordern",
        ],
    },
    {
        id: "M4",
        type: "medium",
        category: "Patientenmeldung",
        situation: "Alkoholintoxikation",
        patient: {
            description: "Jugendlicher, geschätzt 16 Jahre",
            symptoms:
                "Stark betrunken, noch ansprechbar, kooperativ",
        },
        tasks: [
            "Meldung betrunkener Jugendlicher",
            "Betreuung läuft, stabil",
            "Elternkontakt über T-Orga einleiten",
        ],
    },
    {
        id: "M5",
        type: "medium",
        category: "Patientenmeldung",
        situation: "Hyperventilation",
        patient: {
            description: "Frau, 28 Jahre",
            symptoms:
                "Schnelle Atmung, Kribbeln in Händen, panisch",
        },
        tasks: [
            "Hyperventilation melden",
            "Beruhigung läuft",
            "Transport ins San-Zelt wenn nötig",
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
            "Verdacht Unterzuckerung melden",
            "Traubenzucker gegeben",
            "Rückmeldung nach 10 Minuten ankündigen",
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
            "Bewusstlosen melden - DRINGEND",
            "Exakter Standort (Sektor + 2 Bezugspunkte)",
            "Sofortige Hilfe anfordern",
            "Bei Veränderung sofort melden",
        ],
    },
    {
        id: "S2",
        type: "hard",
        category: "Notfallmeldung",
        situation: "Verdacht Herzinfarkt",
        urgent: "NOTARZT",
        patient: {
            description: "Mann, 55 Jahre",
            symptoms:
                "Starke Brustschmerzen, Ausstrahlung linker Arm",
        },
        tasks: [
            "Verdacht Herzinfarkt durchgeben",
            "Notarzt explizit anfordern",
            "Patient bei Bewusstsein melden",
            "Ankunftszeit Notarzt erfragen",
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
            "Krampfanfall melden",
            "Dauer seit Beginn durchgeben",
            "RTW anfordern",
            "Nach Anfall: Zustand update",
        ],
    },
    {
        id: "S4",
        type: "hard",
        category: "Notfallmeldung",
        situation: "Schwere Atemnot",
        urgent: "SOFORT",
        patient: {
            description: "Frau, 38 Jahre",
            symptoms: "Asthma, ringt nach Luft, blaue Lippen",
        },
        tasks: [
            "Schwere Atemnot melden",
            "Sitzende Lagerung bestätigen",
            "RTW SOFORT anfordern",
            "Verschlechterung sofort melden",
        ],
    },
    {
        id: "S5",
        type: "hard",
        category: "Notfallmeldung",
        situation: "Allergische Reaktion",
        patient: {
            description: "Mann, 29 Jahre",
            symptoms:
                "Wespenstich, Schwellung im Gesicht, Ausschlag",
        },
        tasks: [
            "Allergische Reaktion nach Wespenstich",
            "Schwellung breitet sich aus",
            "RTW mit Notfallmedikation anfordern",
            "Atemwege noch frei melden",
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
        tasks: [
            "Überlastung melden",
            "Kurz alle 5 Patienten durchgeben",
            "Verstärkung dringend anfordern",
            "Prioritäten mit T-Orga klären",
        ],
    },
    {
        id: "G3",
        type: "hard",
        category: "Großlage",
        situation: "Kompletter Stromausfall euer Sektor",
        patient: {
            description: "Dunkelheit, Besucher orientierungslos",
        },
        tasks: [
            "Stromausfall Sektor melden",
            "Taschenlampen vorhanden bestätigen",
            "Ruhige Lage melden",
            "Techniker anfordern",
        ],
    },
    // Funk-Technik (F)
    {
        id: "F1",
        type: "tech",
        category: "Funk-Technik",
        situation: "T-Orga ordnet Wechsel auf anderen Kanal an",
        tasks: [
            "Kanalwechsel bestätigen",
            "Auf neuem Kanal melden",
            "Empfangsqualität durchgeben",
            "Andere Teams informieren",
        ],
    },
    {
        id: "F2",
        type: "tech",
        category: "Funk-Technik",
        situation: "T-Orga ruft alle Einheiten nacheinander",
        tasks: [
            "Auf Aufruf warten",
            "Kurz und knapp Status melden",
            "Position durchgeben",
            "Auf weitere Anweisungen warten",
        ],
    },
    {
        id: "F3",
        type: "tech",
        category: "Funk-Technik",
        situation: "Team im Nachbarsektor meldet sich nicht",
        tasks: [
            "T-Orga über Ausfall informieren",
            "Sichtkontakt versuchen und melden",
            "Bereitschaft zur Übernahme signalisieren",
            "Ergebnis der Nachschau funken",
        ],
    },
    // Koordination (K)
    {
        id: "K1",
        type: "tech",
        category: "Koordination",
        situation: "Ihr braucht dringend Kühlpacks",
        tasks: [
            'An alle: "Wer hat Kühlpacks übrig?"',
            "Übergabeort vereinbaren",
            "T-Orga über Lösung informieren",
            "Erhalt bestätigen",
        ],
    },
    {
        id: "K2",
        type: "tech",
        category: "Koordination",
        situation: "Patient genau zwischen Sektor 4 und 5",
        tasks: [
            "Situation an T-Orga melden",
            "Beide Sektoren sind wir",
            "Zuständigkeit erfragen",
            "Übernahme bestätigen",
        ],
    },
    {
        id: "K3",
        type: "tech",
        category: "Koordination",
        situation: "Hauptact beginnt in 15 Minuten",
        tasks: [
            "Bereitschaftsmeldung an T-Orga",
            "Besondere Anweisungen erfragen",
            "Position für Veranstaltung bestätigen",
            "Erhöhte Aufmerksamkeit melden",
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
        situation: "Patient wurde ins San-Zelt gebracht",
        tasks: [
            "Übergabe an San-Zelt melden",
            "Patientennummer durchgeben",
            "Kurze Übergabeinfo",
            "Wieder einsatzbereit melden",
        ],
    },
    {
        id: "T3",
        type: "transport",
        category: "Transportorga",
        situation: '"Habt ihr dringende Patienten?"',
        tasks: [
            "Aktuelle Patienten durchzählen",
            "Nach Dringlichkeit sortiert melden",
            'Keine dringenden: "Negativ"',
            "Wenn ja: Kurzbeschreibung",
        ],
    },
    {
        id: "T4",
        type: "transport",
        category: "Transportorga",
        situation: "T-Orga will Zahlen für Doku",
        tasks: [
            "Anzahl Patientenkontakte gesamt",
            "Davon zum RTW transportiert",
            "Davon vor Ort versorgt",
            "Auffälligkeiten melden",
        ],
    },
    {
        id: "T5",
        type: "transport",
        category: "Transportorga",
        situation: "Neue Sektoreinteilung ab sofort",
        tasks: [
            "Neue Sektornummer erfragen",
            "Grenzen klären lassen",
            "Verstanden melden",
            "In neuem Sektor eintreffen melden",
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
        tasks: [
            "Jeden Begriff einzeln durchgeben",
            "Deutsches Alphabet verwenden",
            'Nach jedem Wort "Kommen"',
        ],
    },
    {
        id: "TR2",
        type: "tech",
        category: "Training",
        situation: "Übermittle folgende Zahlen klar:",
        patient: {
            description:
                "Hausnummer | Uhrzeit | Patientenzahl | Sektor",
        },
        tasks: [
            "Alle Zahlen deutlich einzeln",
            "Keine Verwechslungen zulassen",
            "Bei Unklarheit wiederholen",
        ],
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
    {
        id: "TR4",
        type: "tech",
        category: "Training",
        situation: "T-Orga gibt euch 3 Aufträge durch",
        tasks: [
            "Alle 3 Aufträge aufnehmen",
            "Wiederholen zur Kontrolle",
            "Nach Erledigung einzeln abmelden",
            "Reihenfolge beachten",
        ],
    },
    {
        id: "TR5",
        type: "tech",
        category: "Training",
        situation: "Notruf-Übung: Komplette 5-W-Meldung",
        tasks: [
            "WO genau (Sektor + Bezugspunkte)",
            "WAS ist passiert (kurz und klar)",
            "WIE VIELE Verletzte",
            "WELCHE Verletzungen",
            "WARTEN auf Rückfragen",
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
            : cardData.category === "Training" &&
                cardData.id === "TR5"
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
        const endIdx = Math.min(
            startIdx + cardsPerPage,
            cards.length,
        );

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