const advices = [
  "Die Anzahl der Außenseiter wurde (nicht) verändert.",
  "Die Fähigkeiten von mindestens [Zahl] Spielern haben letzte Nacht nicht richtig funktioniert.",
  "Ein Koch hätte letzte Nacht eine [Zahl] bekommen.",
  "Genau [Zahl] Bürger haben letzte Nacht <einen bösen Spieler/den Dämon> ausgewählt.",
  "Mindestens [Zahl] Spieler sind von Madness betroffen.",
  "Mindestens [Zahl] der toten Spieler sind böse.",
  "Mindestens [Zahl] einmal pro Spiel nutzbare Fähigkeiten wurden eingesetzt.",
  "Mindestens [Zahl] deiner (lebenden) Nachbarn sind betrunken oder vergiftet.",
  "[Charakter] und [Charakter] sitzen nebeneinander.",
  "[Charakter] ist im Spiel ODER [Charakter] ist im Spiel.",
  "[Dämon] ist nicht im Spiel.",
  "Eine einmal pro Spiel nutzbare Fähigkeit wurde (nicht) eingesetzt.",
  "Der Dämon sitzt neben einem <Schergen/Außenseiter>.",
  "Die längste zusammenhängende Kette von <guten/bösen> Spielern ist [Zahl].",
  "Du wurdest von der Witch verflucht.",
  "Der Snake Charmer hat letzte Nacht [Charakter/Rollentyp] gewählt.",
  "Der Dämon sitzt neben [Zahl] Bürgern.",
  "Alle Informationen, die die Bürger letzte Nacht erhalten haben, waren korrekt.",
  "Letzte Nacht sind gute Spieler aufgewacht.",
  "Ein Spieler hat letzte Nacht den Charakter gewechselt.",
  "Niemand ist heute von Madness betroffen.",
  "Ein <guter/böser> Spieler ist heute von Madness betroffen.",
  "Ein Spieler hat letzte Nacht das Team gewechselt.",
  "[Spieler] und [Spieler] sind im selben Team.",
  "Letzte Nacht hat ein Spieler abgelehnt, seine Fähigkeit zu benutzen.",
  "In diesem Spiel gibt es keine von mit Madness in Verbindung stehenden Charaktere.",
  "[Zahl] Spieler haben letzte Nacht eine Zahl erhalten.",
  "[Scherge] hat jede Nacht denselben Spieler gewählt.",
  "Es gibt jetzt <mehr/weniger> <Außenseiter/Bürger> als zu Beginn des Spiels.",
  "Deine (lebenden) Nachbarn sind im <selben/unterschiedlichen> Team.",
  "[Charakter] wurde gestern nominiert.",
  "Eine einmal pro Spiel nutzbare Fähigkeit hat falsche Informationen erhalten.",
  "Es ist unmöglich, dass der Dämon auf einem anderen Spieler übergeht.",
  "Letzte Nacht wurden keine neuen Charaktere erschaffen.",
  "[Zahl] deiner (lebenden) Nachbarn ist vergiftet.",
  "Alle bösen Spieler sind noch am Leben.",
  "[Charakter] wurde letzte Nacht von [Scherge] ausgewählt.",
  "[Zahl] deiner (lebenden) Nachbarn wurde von einem anderen Spieler ausgewählt.",
  "Mindestens ein Scherge wusste zu Beginn des Spiels nicht, wer der Dämon war.",
  "Ein nüchterner und gesunder Noble hätte [Spieler], [Spieler] und [Spieler] gesehen.",
  "Du hattet gestern eine private Unterhaltung mit einem bösen Spieler.",
  "[Charakter] hat <gestern/letzte Nacht> nüchternde, gesunde und wahre Informationen erhalten.",
  "[Charakter] ist ein Dämonenbluff.",
  "Ein <böser Spieler/Außenseiter> wurde gestern nominiert.",
  "[Spieler] ist in der Nacht gestorben, aber nicht durch den Dämon.",
  "[Charakter] war anfangs gut, ist aber jetzt böse.",
  "Die Zahl der Bürger-Paare ist [Zahl].",
  "[Charakter] ist nicht im Spiel.",
  "Ein vergifteter Bürger hat letzte Nacht wahre Informationen erhalten.",
  "Der Lunatic und der Dämon haben letzte Nacht unterschiedliche Ziele gewählt.",
  "[Zahl] Spieler kennen ihren wirklichen Charakter nicht.",
  "[Zahl] böse Spieler sind letzte Nacht aufgewacht.",
  "Ein böser Spieler hat sich letzte Nacht selbst gewählt.",
  "Zwei Personen, die behaupten der selbe Charakter zu sein, sind im selben Team.",
  "Einer deiner (lebenden) Nachbarn hat [Zahl] Erinnerungsplättchen im Grimoire.",
  "Der Dämon hat letzte Nacht einen toten Spieler gewählt.",
  "Zu Beginn des Spiels gab es keinen Dämon.",
  "Es gibt mindestens [Zahl] Rollen, die den Tod verhindern.",
  "Gestern haben keine Außenseiter abgestimmt.",
  "Die Tode der letzten Nacht sind nicht auf einen Dämon zurückzuführen."
]

function newAdvice() {
  const oldText = document.getElementById('advice').innerText;
  while (oldText == document.getElementById('advice').innerText) {
    document.getElementById('advice').innerText = advices[Math.floor(Math.random() * advices.length)];
  }
}

newAdvice();
document.getElementById('trigger').addEventListener('click', newAdvice);