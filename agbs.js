const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("ul");
const links = document.querySelectorAll("ul li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
