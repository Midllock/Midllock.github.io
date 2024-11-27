document.addEventListener("DOMContentLoaded", function() {
  fetch("/pivnipochod/galerie",{
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
  .then(response => response.json())
  .then(Fotky => {
    for(let jmeno_fotky of Fotky){
      document.getElementById("galerie").innerHTML += 
      `<div class="mySlides fade"><img src="galerie/${jmeno_fotky}"><div class="text"></div></div>`
    }
  }).then(() => {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Get references to the "prev" and "next" buttons by their class names
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // Add event listeners to the buttons
    prevButton.addEventListener("click", function() {
      plusSlides(-1);
    });

    nextButton.addEventListener("click", function() {
      plusSlides(1);
    });

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }
  });
});