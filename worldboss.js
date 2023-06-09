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
        url: "images/kenki.webp",
        text: "Maguu"
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
        url: "images/pma2.webp",
        text: "PMA"
      },
      {
        url: "images/setekh wenut.webp",
        text: "Setekh Wenut"
      },
      {
        url: "images/setekh wenut.webp",
        text: "Setekh Wenut"
      },
      {
        url: "images/eulsNani.png",
        text: "Apep (Temporary Image)"
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
    }, 5000);
    imageOutputModal.style.display = "block";
}
  
  imageOutputModal.addEventListener("click", function(event) {
      if (event.target === imageOutputModal) {
          imageOutputModal.style.display = "none";
      }
  });

  