function showImageLayer(img) {
    var layer = document.querySelector(".image-layer");
    layer.querySelector("img").src = img.src;
    layer.classList.add("show");
  }
  