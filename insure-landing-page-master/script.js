const hamburger = document.querySelector("#hamburger");
const topMenu = document.querySelector(".top-menu");
const hamburgerOpen = document.querySelector(".open");
const hamburgerClose = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    topMenu.classList.toggle("showMenu");
    hamburgerOpen.classList.toggle("close");
    hamburgerClose.classList.toggle("show");
});
