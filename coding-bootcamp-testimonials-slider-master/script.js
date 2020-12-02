const btns = document.querySelectorAll(".buttons");
const slide = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide-box");

let index = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => slideF(e));
});

function slideF(e) {
    const width = slide.clientWidth;
    if (e.currentTarget.classList.contains("next")) {
        if (index === 0) {
            index++;
            slide.style.transform = `translateX(-${width}px)`;
        } else {
            index--;
            slide.style.transform = `translateX(0)`;
        }
    } else {
        console.log(slides.length - 1);
        if (index === slides.length - 1) {
            index--;
            slide.style.transform = `translateX(0)`;
        } else {
            index++;
            slide.style.transform = `translateX(-${width}px)`;
        }
    }
}
