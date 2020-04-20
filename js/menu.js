"use-strict";

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
