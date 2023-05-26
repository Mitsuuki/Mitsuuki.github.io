var textOutputModal = document.getElementById("text-output-modal");
var textOutput = document.getElementById("text-output");

var texts = [
  "Azdaha with no shielder and healer.",
  "All pyro character + Bennett vs Apep (must burst bennett on 3rd phase)",
  "Dendro only vs dendro cube.",
  "Raiden vs Starter character.",
  "3 star lvl 1 weapon only.",
  "Healer only.",
  "Wolflord ban geo.",
  "Traveler only vs Thunder manifestation.",
  "Physical bow only vs Azhdaha.",
  "Charge atk only (No burst) vs geo cube.",
  "4 Star Nation characters vs Boss pick.",
  "Summoners only (Summon only no using normal/charge/ attacks.",
  "(Fischl / Xiangling / Yaoyao / Kokomi / Amber / Itto).",
  "Xiangling vs Kenki.",
  "Mono Element only.",
  "Any character but use Def main stats artifacts.",
  "Kaeya vs Hydro Cube.",
  "No pyro, No healer, No shield vs Cryo cube.",
];

function randomText() {
    var randomIndex = Math.floor(Math.random() * texts.length);
    var text = texts[randomIndex];
    var textLength = text.length;
    var currentIndex = 0;
    var intervalId;

    function updateText() {
        textOutput.innerHTML = text.substring(0, currentIndex);
        currentIndex++;
        if (currentIndex > textLength) {
            clearInterval(intervalId);
        }
    }

    textOutputModal.style.display = "block";
    intervalId = setInterval(updateText, 50);
}

textOutputModal.addEventListener("click", function(event) {
    if (event.target === textOutputModal) {
        textOutputModal.style.display = "none";
    }
});