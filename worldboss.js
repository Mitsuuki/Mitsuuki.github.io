var images = [
    {
      url: "images/AeonB.webp",
      text: "Aeonblight"
    },
    {
      url: "images/algo.webp",
      text: "Algorithm"
    },
    {
      url: "images/andriusIII.webp",
      text: "Andrius"
    },
    {
        url: "images/azhdaha1.webp",
        text: "Azdaha"
      },
      {
        url: "images/bathysmal2.webp",
        text: "Bathysmal"
      },
      {
        url: "images/aeon b and algo.webp",
        text: "AeonB & Algorithm"
      },
      {
        url: "images/aeon b and magu.webp",
        text: "AeonB & MaguKenki"
      },
      {
        url: "images/ruin serpent and aeon b.webp",
        text: "Ruin Serpent & AeonB"
      },
      {
        url: "images/aeon b and wolflord.webp",
        text: "AeonB & WolfLord"
      },
      {
        url: "images/pma-algo.webp",
        text: "PMA & Algorithm"
      },
      {
        url: "images/andrius signora.webp",
        text: "Andrius & Signora"
      },
      {
        url: "images/geo-and-algo.webp",
        text: "Geo Hypotasis & Algorithm"
      },
      {
        url: "images/geoterror.webp",
        text: "Geo Hypotasis & Terrorshroom"
      },
      {
        url: "images/geo-vishop-and-scara.webp",
        text: "Geovishop & Scara"
      },
      {
        url: "images/pyro and andrius.webp",
        text: "Pyro Hypostasis & Andrius"
      },
      {
        url: "images/childe and signora.webp",
        text: "Childe & Signora"
      },
      {
        url: "images/childe and magu.webp",
        text: "Childe & MaguKenki"
      },
      {
        url: "images/tm-and-childe.webp",
        text: "TM & Tartaglia"
      },
      {
        url: "images/tm and terrorshroom.webp",
        text: "TM & Terrorshroom"
      },
      {
        url: "images/kenki.webp",
        text: "Maguu"
      },
      {
        url: "images/pyro and magu.webp",
        text: "Pyro Hypotasis & Maguu"
      },
      {
        url: "images/primogeovishop.webp",
        text: "Primo Geovishop"
      },
      {
        url: "images/raiden shogun2.webp",
        text: "Raiden Shogun"
      },
      {
        url: "images/ruin serpent.webp",
        text: "Ruin Serpent"
      },
      {
        url: "images/scara.webp",
        text: "Scara"
      },
      {
        url: "images/signora.webp",
        text: "Signora"
      },
      {
        url: "images/childe2.webp",
        text: "Tartaglia"
      },
      {
        url: "images/terrorshroom2.webp",
        text: "Terrorshroom"
      },
      {
        url: "images/TM2.webp",
        text: "Thunder Manifestation"
      },
      {
        url: "images/wolflord2.webp",
        text: "Wolf Lord"
      },
      {
        url: "images/ruin serpent and setekh.webp",
        text: "Ruin Serpent & Setekh"
      },
      {
        url: "images/oceanid-and-pyro-hypo.webp",
        text: "Oceanid & Pyro"
      },
      {
        url: "images/Aeon b and setekh.webp",
        text: "AeonB & Setekh"
      },
      {
        url: "images/raiden and signora.webp",
        text: "Raiden & Signora"
      },
      {
        url: "images/pma2.webp",
        text: "PMA"
      },
      {
        url: "images/setekh wenut.webp",
        text: "Setekh Wenut"
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
    }, 7500);
    imageOutputModal.style.display = "block";
}
  
  imageOutputModal.addEventListener("click", function(event) {
      if (event.target === imageOutputModal) {
          imageOutputModal.style.display = "none";
      }
  });

  