const slides = document.querySelectorAll(".slide-container");
const dotButtons = document.querySelectorAll(".dot-button");
const allDiapos = document.querySelectorAll(".diapo");

let currentIndex = 0;
let cycle;

const goToSlide = (index) => {
    if (index < 0 || index >= slides.length) return;
    allDiapos.forEach(d => d.classList.remove("visible"));
    dotButtons.forEach(b => b.classList.remove("active"));
    slides[index].querySelector(".diapo").classList.add("visible");
    dotButtons[index].classList.add("active");
    currentIndex = index;
};

const startAutoSlide = () => {
    cycle = setInterval(() => goToSlide((currentIndex + 1) % slides.length), 6000);
};

const restartAutoSlide = () => {
    clearInterval(cycle);
    startAutoSlide();
};

goToSlide(0);
startAutoSlide();

dotButtons.forEach((btn, i) => btn.addEventListener("click", () => {
    goToSlide(i);
    restartAutoSlide();
}));

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goToSlide((currentIndex + 1) % slides.length), restartAutoSlide();
    if (e.key === "ArrowLeft") goToSlide((currentIndex - 1 + slides.length) % slides.length), restartAutoSlide();
});