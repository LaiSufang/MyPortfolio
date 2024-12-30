"use strict";

// Scroll to the top of the page when the button is clicked
document
  .querySelector(".scroll-up-icon")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  });
