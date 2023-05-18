var textOutputModal = document.getElementById("text-output-modal");
var textOutput = document.getElementById("text-output");

var texts = [
  "No artifact challenge.",
  "Traveler only.",
  "2 star lvl 1 weapon only.",
  "Auto ban sword user character.",
  "3 star lvl 1 weapon only.",
  "No healer team.",
  "Reroll.",
  "Bow only.",
  "Claymore only.",
  "Catalyst only.",
  "Sword only.",
  "Polearm only.",
  "Healers only.",
  "Reroll.",
  "Goblet artifact only.",
  "Amber / Kaeya / Lisa vs Azhdaha.",
  "5 star standard character only.",
  "Small kids only.",
  "Mono element only pick one.",
  "Reroll.",
  "Apep boss with bennett on the team.",
  "Scaramouche boss bring 1 alloy on the team.",
  "Maguu Kenki w/ 4 Xianglings.",
  "Wolflord vs 4 Noelles.",
  "Kill pyro regisvine using barbara only.",
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