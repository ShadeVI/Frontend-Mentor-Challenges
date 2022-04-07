/* DOM ELEMENTS */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", handleMenu);

function handleMenu() {
  const img = this.children;
  if (img[0].src.includes("hamburger")) {
    img[0].src = "./images/icon-close.svg";
  } else {
    img[0].src = "./images/icon-hamburger.svg";
  }

  navLinks.classList.toggle("close");
}
