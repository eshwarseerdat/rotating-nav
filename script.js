const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const circle = document.querySelector(".circle");
const main = document.querySelector("main");

const toggleNav = () => {
  main.classList.toggle("show-nav");
  circle.classList.toggle("show-nav");
};

[openBtn, closeBtn].forEach((btn) => {
  btn.addEventListener("click", toggleNav);
});
