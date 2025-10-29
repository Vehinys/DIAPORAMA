const slides = document.querySelectorAll(".slide-container");
const dotButtons = document.querySelectorAll(".dot-button");

dotButtons[0].classList.add("active");

dotButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        goToSlide(index);
    });
});

function goToSlide(index) {

    const allDiapos = document.querySelectorAll(".diapo");
    allDiapos.forEach(diapo => diapo.classList.remove("visible"));
    dotButtons.forEach(btn => btn.classList.remove("active"));
    slides[index].querySelector(".diapo").classList.add("visible");
    dotButtons[index].classList.add("active");
}

document.addEventListener("keydown", function(event) {
    let currentIndex = Array.from(dotButtons).findIndex(btn => btn.classList.contains("active"));
    
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }
});