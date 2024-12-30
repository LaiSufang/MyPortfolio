"use strict";

// About Page - UI component: modal windows

// Select all necessary classes:

const overlay = document.querySelector(".overlay");
const abouts = document.querySelectorAll(".about");
const closeAboutBtn = document.querySelector(".close-about-btn");

const closeWindow = function () {
  console.log("HIhi");
  overlay.classList.add("hidden");
  abouts.forEach((about) => {
    about.classList.remove("hidden");
    about.classList.remove("raise");
    const aboutPara = about.querySelector("p");
    aboutPara.classList.add("hidden");
    closeAboutBtn.classList.remove("show");
  });
};

abouts.forEach((about) => {
  about.addEventListener("click", function () {
    abouts.forEach((otherAbout) => {
      if (otherAbout !== about) {
        otherAbout.classList.add("hidden");
      }
    });

    about.classList.add("raise");

    const aboutPara = about.querySelector("p");
    aboutPara.classList.remove("hidden");

    closeAboutBtn.classList.add("show");
    closeAboutBtn.addEventListener("click", closeWindow);

    overlay.classList.remove("hidden");
  });
});

overlay.addEventListener("click", closeWindow);

// const about1 = document.querySelector(".about1");
// const about2 = document.querySelector(".about2");
// const about3 = document.querySelector(".about3");
// const about1P = document.querySelector(".about1-p");
// const about2P = document.querySelector(".about2-p");
// const about3P = document.querySelector(".about3-p");

// 1. when each modal is clicked, display the modal window and overlay
// about1.addEventListener("click", function () {
//   about1P.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   about1.classList.add("raise");
//   about2.classList.add("hidden");
//   about3.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   about1P.classList.toggle("hidden");
//   overlay.classList.toggle("hidden");
//   about1.classList.toggle("raise");
//   about2.classList.toggle("hidden");
//   about3.classList.toggle("hidden");
// });

// about2.addEventListener("click", function () {
//   about2P.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   about2.classList.add("raise");
//   about1.classList.add("hidden");
//   about3.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   about2P.classList.toggle("hidden");
//   overlay.classList.toggle("hidden");
//   about2.classList.toggle("raise");
//   about1.classList.toggle("hidden");
//   about3.classList.toggle("hidden");
// });

// about3.addEventListener("click", function () {
//   about3P.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   about3.classList.add("raise");
//   about1.classList.add("hidden");
//   about2.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   about3P.classList.toggle("hidden");
//   overlay.classList.toggle("hidden");
//   about3.classList.toggle("raise");
//   about2.classList.toggle("hidden");
//   about1.classList.toggle("hidden");
// });
