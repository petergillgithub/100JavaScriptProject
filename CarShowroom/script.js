const buttonsEl = document.querySelector(".btn");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

buttonsEl.addEventListener("click", () => {
  // document.body.style.color = randomColor();
  // buttonsEl.style.color = randomColor();
  // buttonsEl.style.backgroundColor = randomColor();
  document.body.style.backgroundColor = randomColor();
});
