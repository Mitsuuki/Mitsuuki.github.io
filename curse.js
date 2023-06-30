var textOutputModal = document.getElementById("text-output-modal");
var textOutput = document.getElementById("text-output");

var texts = [
    
    "Starter Character vs Bathysmal - LetmeSleep",
    "Regular Banning",
    "Lisa Vs Dendro Chicken -Fredo2337",
    "No Ban Free for all but 1 star weapon & Goblet + Circlet Only - Fredo2337",
    "4s Sumeru Characters only vs Thunder Manifestation - Fredo2337",
    "Regular Banning",
    "Amber Vs Oceanid - glyf57",
    "Amber vs Thunder Manifestation - glyf57",
    "Summoner vs herald - glyf57",
    "Reroll",
    "4s Char vs Azdaha - Erisse07",
    "Kaeya Vs Kenki - Erisse07",
    "Dendro traveler vs hydro hypostasis - Erisse07",
    "Reroll",
    "Healer only - lvl20apple",
    "1 star weapon no gob vs kenki - lvl20apple",
    "Regular Banning",
    "5s Standard Vs Raiden Flower, Goblet, Sands only- Mangkaknorrq",
    "Small kids vs Andrius - Mangkaknorrq",
    "Small kids vs Thunder Manifestation - Mangkaknorrq",
    "Regular Banning",
    "Pyro characters only vs Apep - Yhericksonne",
    "No same region characters vs Raiden - yhericksonne",
    "lvl1 2star weapon lvl0 arti any char vs azdaha- whiterustedbow",
    "Sumeru chars vs Abyss lector - lvl20apple",
    "Raiden boss , No electro characters - RegS4n",
    "Thunder Manifestation , Electro chars only- RegS4n",
    "Dendro character vs Dendro cube - argonautnana",
    "Collei vs oceanid - MagusChrono",
    "1star weapon All pyro char vs cryo hypostasis Goblet arti only - whiterustedbow",
    "Xiangling: Gouba only vs Cryo hypostasis - Euls",
    "Barbara vs Cryo hypostasis - Yhericksonne",
    "Melee only vs Oceanid - RegS4n",
    "Starter Characters + Bennett vs Apep - Letmesleep",
    "Starter Character vs Signora - Letmesleep"  
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