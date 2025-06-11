document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger-menu");
  var navbar = document.querySelector(".header .navbar");
  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});
