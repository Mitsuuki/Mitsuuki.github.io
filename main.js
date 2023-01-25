let coin = document.getElementById("coin");
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let flipButton = document.getElementById("flip-button");

let images = [
  "images/defaultcoin.png",
  "images/heads.jpg",
  "images/tails.jpg"
];

// setting default image when the page loads
heads.style.backgroundImage = "url(" + images[0] + ")";
tails.style.backgroundImage = "url(" + images[0] + ")";

flipButton.addEventListener("click", function() {
  coin.style.transform = "rotateY(0)";
  coin.classList.add("spin");
  
  setTimeout(function(){
    coin.classList.remove("spin");
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      heads.style.backgroundImage = "url(" + images[1] + ")";
      tails.style.backgroundImage = "url(" + images[2] + ")";
    } else {
      heads.style.backgroundImage = "url(" + images[2] + ")";
      tails.style.backgroundImage = "url(" + images[1] + ")";
    }
  }, 3000);
});

var video = document.querySelector(".video");
var playButton = document.getElementById("play-button");

playButton.addEventListener("click", function() {
    video.requestFullscreen();
    video.play();
});