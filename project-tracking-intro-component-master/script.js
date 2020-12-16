const hamburger = document.querySelector(".hamburger img");
const mobileMenu = document.querySelector(".mobile-menu-container");

hamburger.addEventListener("click", () => {
    handleHamburgerStatus();
});

function handleHamburgerStatus() {
    mobileMenu.style.display = "block";
    if (hamburger.dataset.status == "open") {
        hamburger.src = "./images/icon-close.svg";
        hamburger.dataset.status = "close";
        mobileMenu.classList.add("fadeInMobileMenuAnimation");
        mobileMenu.classList.remove("fadeOutMobileMenuAnimation");
    } else {
        hamburger.src = "./images/icon-hamburger.svg";
        hamburger.dataset.status = "open";
        mobileMenu.classList.add("fadeOutMobileMenuAnimation");
        mobileMenu.classList.remove("fadeInMobileMenuAnimation");
    }
}
