const inputPasswordEl = document.querySelector(".inputPassword");
const eyeIconEl = document.getElementById("eyeIcon");
const alertmessageEl = document.querySelector(".alertmessage");

eyeIconEl.addEventListener("click", () => {
  if (inputPasswordEl.type === "password") {
    inputPasswordEl.type = "text";
    eyeIconEl.textContent = "🙉";
  } else {
    inputPasswordEl.type = "password";
    eyeIconEl.textContent = "👁️";
  }
  alertmessagefunction();
});

let messageShown = false;

function alertmessagefunction() {
  if (!messageShown) {
    alertmessageEl.textContent = "This is Confidential Beaware";
    messageShown = true;
  }
}
