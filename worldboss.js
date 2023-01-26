var images = [
    {
      url: "images/AeonB (2).png",
      text: "Aeonblight"
    },
    {
      url: "images/algo.png",
      text: "Algorithm"
    },
    {
      url: "images/AndriusIII.png",
      text: "Andrius"
    },
    {
        url: "images/azhdaha1.png",
        text: "Azdaha"
      },
      {
        url: "images/bathysmal (2).png",
        text: "Bathysmal"
      },
      {
        url: "images/aeon b and algo.png",
        text: "AeonB & Algorithm"
      },
      {
        url: "images/aeon b and magu.png",
        text: "AeonB & MaguKenki"
      },
      {
        url: "images/ruin serpent and aeon b.png",
        text: "Ruin Serpent & AeonB"
      },
      {
        url: "images/aeon b and wolflord.png",
        text: "AeonB & WolfLord"
      },
      {
        url: "images/PMA&ALGO.png",
        text: "PMA & Algorithm"
      },
      {
        url: "images/ANDRIUS&SIGNORA.png",
        text: "Andrius & Signora"
      },
      {
        url: "images/geo and algo.png",
        text: "Geo Hypotasis & Algorithm"
      },
      {
        url: "images/GEO&TERROR.png",
        text: "Geo Hypotasis & Terrorshroom"
      },
      {
        url: "images/geo vishop and scara.png",
        text: "Geovishop & Scara"
      },
      {
        url: "images/pyro and andrius.png",
        text: "Pyro Hypostasis & Andrius"
      },
      {
        url: "images/childe and signora.png",
        text: "Childe & Signora"
      },
      {
        url: "images/childe and magu.png",
        text: "Childe & MaguKenki"
      },
      {
        url: "images/tm and childe.png",
        text: "TM & Tartaglia"
      },
      {
        url: "images/tm and terrorshroom.png",
        text: "TM & Terrorshroom"
      },
      {
        url: "images/kenki.png",
        text: "Maguu"
      },
      {
        url: "images/pyro and magu.png",
        text: "Pyro Hypotasis & Maguu"
      },
      {
        url: "images/primogeovishop.png",
        text: "Primo Geovishop"
      },
      {
        url: "images/raiden shogun (2).png",
        text: "Raiden Shogun"
      },
      {
        url: "images/ruin serpent (2).png",
        text: "Ruin Serpent"
      },
      {
        url: "images/scara (2).png",
        text: "Scara"
      },
      {
        url: "images/signora (2).png",
        text: "Signora"
      },
      {
        url: "images/childe.png",
        text: "Tartaglia"
      },
      {
        url: "images/terrorshroom (2).png",
        text: "Terrorshroom"
      },
      {
        url: "images/TM.png",
        text: "Thunder Manifestation"
      },
      {
        url: "images/wolflord.png",
        text: "Wolf Lord"
      },
      {
        url: "images/ruin serpent and setekh.png",
        text: "Ruin Serpent & Setekh"
      },
      {
        url: "images/oceanid and pyro hypo.png",
        text: "Oceanid & Pyro"
      },
      {
        url: "images/Aeon b and setekh.png",
        text: "AeonB & Setekh"
      },
      {
        url: "images/Aeon b and setekh.png",
        text: "AeonB & Setekh"
      },
      {
        url: "images/raiden and signora.png",
        text: "Raiden & Signora"
      },
      {
        url: "images/terrorshroom geo hypo.png",
        text: "Terrorshroom & Geo Hypo"
      },
    // Add more image objects here
  ];
  
  var imageOutputModal = document.getElementById("image-output-modal");
  var imageOutput = document.getElementById("image-output");
  var imageText = document.getElementById("image-text");
  var intervalId;
  
  function randomImage() {
    clearInterval(intervalId); //clear any existing interval 
    intervalId = setInterval(function() {
        var randomIndex = Math.floor(Math.random() * images.length);
        imageOutput.src = images[randomIndex].url;
        imageText.innerHTML = images[randomIndex].text;
    }, 50);
    setTimeout(function() {
        clearInterval(intervalId);
    }, 1000);
    imageOutputModal.style.display = "block";
}
  
  imageOutputModal.addEventListener("click", function(event) {
      if (event.target === imageOutputModal) {
          imageOutputModal.style.display = "none";
      }
  });

  