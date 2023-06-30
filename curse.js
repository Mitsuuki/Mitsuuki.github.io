var textOutputModal = document.getElementById("text-output-modal");
var textOutput = document.getElementById("text-output");

var texts = [
    
    "Elem skill only vs Azhdaha - Karlpog1",
    "Aeonblight drake w/ no bow - yhericksome",
    "Amber charge atk vs hydro hypostasis - Yn_ayase",
    "Wenut vs Anemo - glyf57",
    "4star Cryo characters vs raiden (alloy is okay)- karlpog1",
    "Claymore vs thundering manifestation - yhericksone",
    "Maggu kenki vs lvl1 weapon 3star - whiterustedbow",
    "Anemo only vs Herald - yhericksone",
    "Pyro chars only vs apep - glyf57",
    "Flower & Feather only vs Wolflord - karlpog1",
    "Kids only vs Raiden - Yhericksone",
    "Travelers vs Maguu kenki - glyf57",
    "Wenut vs only Bow- yhericksone",
    "Barbara vs pyro hyphostasis - Yn_Ayase",
    "Azhdaha vs Shielders only- yhericksone",
    "Starter characters vs Herald - xsigmanationf2p",
    "4star bow character vs aeonblight drake- Yn_ayase",
    "Starter characters vs apep - karlpog1",
    "Lisa only vs Andrius - karlpog1",
    "Thunder Manifestation vs Physical bow only- fredo2337",
    "All collei vs dendro hypho- rarahour",
    "Gouba only vs maguu kenki - hirakoshinji",
    "Signora vs 3-star weapons - PercyIsNotHere",
    "Collei vs anemo hypo- YN_Ayase",
    "Kids vs Childe - iiamcherrie",
    "Barbara vs cryo hypo-fredo2337",
    "Cryo hypo vs 4s pyro character w/ 1 star weapon only - whiterustedbow",
    "Dendro traveler vs thunder manifestation - YN_Ayase",
    "Catalyst only Vs Geo cube- rarahour",
    "Electro traveler vs Andrius - Karlpog1",
    "Xiangling: Gouba only vs Cryo hypostasis - Euls",
    "Traveler (any element) vs Herald - winterhal0",
    "All dendro vs Apep - PercyIsNotHere",
    "Melee only vs Oceanid - RegS4n",
    "Circlet only vs Anemo Cube-rarahour",
    "Electro traveler vs Jadeplume- Yn_Ayase",
    "Geovishap vs Geo Traveler - winterhal0",
    "Geo chars only (No Zhongli) vs Jadeplume - iiamcherrie",
    "Hydro 4 star only vs ruin serpent",
    "Azhdaha vs characters with summons - PercyIsNotHere",
    "4s character w/ 3s weapon no healers vs Scara boss - hirakoshinji",
    "5s Standard char only vs Scara- rarahour",
    "Polearm 4 star character vs apep - karlpog1",
    "Starter characters only vs algorithm- Yn_Ayase",
    "Cryo characters only vs Raiden - MAJI011",
    "4 star character catalyst only vs Wolflord- karlpog1",
    "Cryo hypostasis vs Dori only - winterhal0",
    "Traveler (any) vs PMA -percyisnothere",
    "Razor vs thunder manifestation - hirakoshinji",
    "Surprise Blessing: Euls must participate in the teamfight + reroll for curse - <3"  
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