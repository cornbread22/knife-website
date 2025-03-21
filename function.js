document.getElementById("carbonblackened").addEventListener("click", function () {
  var img = document.getElementById("imageElementId"); // Replace with the actual ID of the image element
  img.src = "carbonblackened.jpg";
  img.addEventListener("click", function () {
    img.classList.toggle("expanded");
  });
});
