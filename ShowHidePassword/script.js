const inputPasswordEl = document.querySelector(".inputPassword");
const eyeIconEl = document.getElementById("eyeIcon");

eyeIconEl.addEventListener("click", () => {
  if (inputPasswordEl.type === "password") {
    inputPasswordEl.type = "text";
    eyeIconEl.textContent = "🙉";
  } else {
    inputPasswordEl.type = "password";
    eyeIconEl.textContent = "👁️";
  }
});
