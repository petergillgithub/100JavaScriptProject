const minimumEl = document.querySelector(".minimum");
const maximumEl = document.querySelector(".maximum");
const generteNumBtnEl = document.querySelector(".generteNumBtn");
const showNumberEl = document.querySelector(".showNumber");
const resetBtnEl = document.querySelector(".resetBtn");

function getRandom() {
  const min = parseInt(minimumEl.value);
  const max = parseInt(maximumEl.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert("Please write correctly minimum and maximim number");
    return;
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  showNumberEl.textContent = `Your Random Number is : ${randomNum}`;
}

function reset() {
  minimumEl.value = 1;
  maximumEl.value = 1000;
  showNumberEl.textContent = "Pleasee type your random number";
}

generteNumBtnEl.addEventListener("click", getRandom);
resetBtnEl.addEventListener("click", reset);
