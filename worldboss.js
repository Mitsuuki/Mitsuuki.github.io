var images = [
    {
      url: "images/AeonB.png",
      text: "Aeonblight"
    },
    {
      url: "images/Algorithm.webp",
      text: "Algorithm"
    },
    {
      url: "images/AndriusII.png",
      text: "Andrius"
    },
    {
        url: "images/Azdaha.png",
        text: "Azdaha"
      },
      {
        url: "images/Bathysmal.png",
        text: "Bathysmal"
      },
      {
        url: "images/Kill AeonB & Algorithm.webp",
        text: "AeonB & Algorithm"
      },
      {
        url: "images/Kill AeonB & Magukenki.webp",
        text: "AeonB & MaguKenki"
      },
      {
        url: "images/Kill AeonB & Ruin Serpent.webp",
        text: "AeonB & Ruin Serpent"
      },
      {
        url: "images/Kill AeonB & WolfLord.webp",
        text: "AeonB & WolfLord"
      },
      {
        url: "images/Kill Algorithm & Pma.webp",
        text: "Algorithm & Pma"
      },
      {
        url: "images/Kill Andrius & Signora.webp",
        text: "Andrius & Signora"
      },
      {
        url: "images/Kill Geo Hypostasis & Algorithm.webp",
        text: "Geo Hypotasis & Algorithm"
      },
      {
        url: "images/Kill Geo Hypotasis & Terrorshroom.webp",
        text: "Geo Hypotasis & Terrorshroom"
      },
      {
        url: "images/Kill Pma & Signora.webp",
        text: "Pma & Signora"
      },
      {
        url: "images/Kill Pyro Hypostasis & Andrius.webp",
        text: "Pyro Hypostasis & Andrius"
      },
      {
        url: "images/Kill Ruin Serpent & Tartaglia.webp",
        text: "Ruin Serpent & Tartaglia"
      },
      {
        url: "images/Kill Tartaglia & Magukenki.webp",
        text: "Ruin Serpent & MaguKenki"
      },
      {
        url: "images/Kill TM & Tartaglia.webp",
        text: "TM & Tartaglia"
      },
      {
        url: "images/KillTm&TerrorShroom.webp",
        text: "TM & Terrorshroom"
      },
      {
        url: "images/Maguu.png",
        text: "Maguu"
      },
      {
        url: "images/MaguuAndPyroHypotasis.webp",
        text: "Maguu & Pyro Hypostasis"
      },
      {
        url: "images/PGeovishop.png",
        text: "Primo Geovishop"
      },
      {
        url: "images/Raiden Shogun.png",
        text: "Raiden Shogun"
      },
      {
        url: "images/Ruin Serpent.png",
        text: "Ruin Serpent"
      },
      {
        url: "images/Scara.png",
        text: "Scara"
      },
      {
        url: "images/Signora.png",
        text: "Signora"
      },
      {
        url: "images/Tartaglia.png",
        text: "Tartaglia"
      },
      {
        url: "images/Terrorshroom.png",
        text: "Terrorshroom"
      },
      {
        url: "images/Thunder Manifestation.png",
        text: "Thunder Manifestation"
      },
      {
        url: "images/Wolf Lord.png",
        text: "Wolf Lord"
      },
    // Add more image objects here
  ];
  
  var imageOutputModal = document.getElementById("image-output-modal");
  var imageOutput = document.getElementById("image-output");
  var imageText = document.getElementById("image-text");
  var intervalId;

  function randomImage() {
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

  