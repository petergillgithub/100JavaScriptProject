const track = document.getElementById("sliderTrack");
const cards = document.querySelectorAll(".sliderwrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
});

let index = 0;

const visible = 3;

const maxIndex = cards.length - visible;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

function autoSlide() {
  if (index < maxIndex) {
    index++;
  } else {
    index = 0; // last pe pahunch gaye to wapas start
  }
  updateSlider();
}

setInterval(autoSlide, 2000); // har 3000 ms (3 second) me autoSlide chalao
