var selectedImage = JSON.parse(sessionStorage.getItem("selectedImage"));
var imageElement = document.getElementById("image-element");
if(selectedImage) imageElement.src = selectedImage.url;
