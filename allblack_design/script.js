//////////SCROLL UP//////////
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show__scroll");
  else scrollUp.classList.remove("show__scroll");
}
window.addEventListener("scroll", scrollUp);
//////////// menu animation /////////////////
let menu = document.querySelector(".navbar ul");
let hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function () {
  menu.classList.toggle("open");
});
////////////REVEAL SECTIONS//////////////
window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
