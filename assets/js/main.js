const toggle = document.querySelector("#toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", function () {
  //   if (navbar.classList.contains("active")) {
  //     navbar.classList.remove("active");
  //   } else {
  //     navbar.classList.add("active");
  //   }

  navbar.classList.toggle("active");
  toggle.querySelector("i").classList.toggle("fa-x");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
  });
});
