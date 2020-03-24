"use-strict";

// const button = document.getElementById ("text");
//
// button.addEventListener("dblclick", sup);
//
// function sup() {
//   if ( (button.innerHTML === "Click me")) {
//     button.innerHTML = "thanks";
//   } else {
//     button.innerHTML ="Click me";
//   }
//
// }


// // this is for the hamburger
menuButton.addEventListener("click", toggleMenu);

function toggleMenu () {
  console.log("clicked menu");
  if  (myNav.classList.contains("show")){
    myNav.classList.remove("show");
  } else {
      myNav.classList.add("show");
  }
}

////////////////////////////////////////////////////////////

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/////////////////////////////////////////
