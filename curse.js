var textOutputModal = document.getElementById("text-output-modal");
var textOutput = document.getElementById("text-output");

var texts = [
  "Auto ban dendro and electro character.",
  "Ban electro character.",
  "Auto ban 5 star catalyst weapon.",
  "Auto ban sword user character.",
  "4 star character with 4 star weapon only.",
  "Ban geo character.",
  "Ban 5 star weapon.",
  "No Banning.",
  "Auto ban anemo and electro.",
  "Ban cryo character.",
  "Ban pyro character.",
  "Auto ban geo and pyro.",
  "No banning use catalyst and bow character only.",
  "Bawal mag pass sa boss na napili.",
  "Auto ban claymore user character.",
  "Auto ban 5 star character.",
  "Auto ban 5 star polearm weapon.",
  "Speed Tech kill Raiden and Scara. (For 3v3 only)",
  "Auto ban 5 star bow weapon.",
  "Ang player or team ang mamimili ng boss na papatayin ng kalaban nila.. Via Heads or Tails.",
  "Speed Tech kill Ruin Serpent/Scara and Signora.",
  "Ban 5 Star Sword weapon.",
  "Auto ban anemo and cryo character.",
  "Auto ban hydro and cryo.",
  "Speed Tech kill Signora and Azdaha.",
  "Kill pyro regisvine using barbara only.",
  "4 Star Character only.",
  "No character banning but no potions/revive/nre.",
  "Speed Tech kill Signora and Raiden.",
  "Auto ban pyro and hydro character.",
  "Bawal mag pass sa boss na napili.",
  "Ban hydro character.",
  "Auto ban polearm user character.",
  "Auto ban catalyst character.",
  "Auto ban bow user character.",
  "Auto ban catalyst character.",
  "Ban dendro character.",
  "Speed Tech Kill Pyro hypotasis/geo hypostasis/oceanid kill boss using mondstadt character only no banning of character.",
  "Speed Tech kill Scara and Azdaha (3v3 only)",
  "Speed Tech kill Dendro hypostasis/Geo Hypostasis/Pyro hypostasis",
  "Speed Tech kill TM/Setekh Wenut/Oceanid"
];

function randomText() {
    var randomIndex = Math.floor(Math.random() * texts.length);
    textOutput.innerHTML = texts[randomIndex];
    textOutputModal.style.display = "block";
}

textOutputModal.addEventListener("click", function(event) {
    if (event.target === textOutputModal) {
        textOutputModal.style.display = "none";
    }
});