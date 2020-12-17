const shareBtn = document.querySelector(".share-icon-wrapper");
const tooltipDesktop = document.querySelector(".tooltip-desktop");
const avatarWrapper = document.querySelector(".avatar-wrapper");
const authorInfo = document.querySelector(".author-info");
const activeShareMobile = document.querySelector(".active-share");
const shareSection = document.querySelector(".share-section");

shareBtn.addEventListener("click", () => {
    if (window.innerWidth > 768) {
        tooltipDesktop.classList.toggle("show");
    }
    if (window.innerWidth <= 768) {
        avatarWrapper.classList.toggle("hidden");
        authorInfo.classList.toggle("hidden");
        activeShareMobile.classList.toggle("hidden");
        shareSection.classList.toggle("active");
    }
});

window.addEventListener("resize", () => {
    if (innerWidth > 768) {
        avatarWrapper.classList.remove("hidden");
        authorInfo.classList.remove("hidden");
        activeShareMobile.classList.add("hidden");
        shareSection.classList.remove("active");
    }
    if (innerWidth <= 768) {
        tooltipDesktop.classList.remove("show");
    }
});
