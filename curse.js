var textOutputModal = document.getElementById("text-output-modal");
var textOutput = document.getElementById("text-output");

var texts = [
  "Amber vs Oceanid -Erisse07",
  "Starter characters only vs Apep -LetmeSleep",
  "Small character only vs Thunder Manifestation- -karlpog1",
  "Kill boss under 1 min vs Wolflord -aymemawii",
  "Healer only -lvl20apple",
  "Bow physical only vs Thunder Manifestation-Fredo2337",
  "Small character only vs Maguu Kenki - Fredo2337",
  "All bow vs Geo Hypostasis - Nanaguimarie",
  "Flower and Feather only - Letmesleep",
  "Mono Element only vs Scara boss - nanaguimarie",
  "Anemo char only vs Geo Hypostasis - tepphen",
  "All hp artifact only - Letmesleep",
  "Apep vs Mono pyro (must bring bennett) - lvl20apple",
  "Flower and circlet artifact only - Fredo2337",
  "All anemo traveler only vs anemo hypostasis - aymemawii",
  "1 star weapon & remove goblet vs Raiden boss without electro chars - lucky_ttko",
  "Goblet and sands artifact only vs scara boss - Letmesleep",
  "Traveler only vs Maguu kenki - Fredo2337",
  "Barbara vs Pyrocube - Letmesleep",
  "Dendro character vs anemo hypostasis- tepphen",
  "Noelle only vs Thunder Manifestation - karlpog1",
  "Lisa Vs Andrius - Fredo2337",
  "Dull Blade Sword users only - Erisse07",
  "All Kaeya vs Hydro hypostasis - nanaguimarie",
  "Gouba only vs Cryo hystasis - Fredo2337",
  "Bennett only vs dendro chicken - nanaguimarie",
  "Lisa vs Dendro chicken - tepphen",
  "Amber vs dendro chicken - Erisse07",
  "Xingqui vs Pyro cube - Fredo2337 / AmamiyaVA",
  "Starter character vs Bathysmal - Letmesleep",
  "Any characters But No NRE , No healer U can food buff - aymemawii",
  "Lisa vs Bathysmal - karlpog1",
  "Amber vs Oceanid- Fredo2337",
  "Noelle vs Wolflord- tepphen",
  "Standard 5 star character vs scara boss - Letmesleep",
  "1 star weapon & no goblet artifact using traveler vs Maguu kenki - lvl20apple",
  "Mono element vs Aeon Blight- AmamiyaVA",
  "Surprise blessing: Euls must participate in the fight + reroll for curse. - <3"
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