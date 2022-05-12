const menuMobileBtn = document.querySelector(".menuMobileBtn");
const menuMobile = document.querySelector(".menuMobile");
const btnsMobileMenu = document.querySelectorAll(".btnMobile");

menuMobileBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menuMobile--show");
  btnsMobileMenu.forEach(btn => 
    btn.classList.toggle("hiddenBtn"))
})