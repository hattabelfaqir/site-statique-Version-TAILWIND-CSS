const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("-translate-y-2");
  menu.classList.toggle("pointer-events-none");
});
