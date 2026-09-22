const note_areaEl = document.querySelector(".note_area");
const btnEl = document.querySelector(".btn");
const showListEl = document.querySelector(".showList");

let notes = [];

function addNote() {
  const fetchContent = note_areaEl.value.trim();

  if (fetchContent === "") {
    alert("Please Type something");
    return;
  }

  // Date Concept

  const now = Date.now();

  const dateObj = new Date(now);

  const list = document.createElement("p");
  list.innerHTML = fetchContent;
  list.classList.add("paragraph");
  showListEl.append(list);

  const newSpan = document.createElement("span");
  newSpan.innerHTML = dateObj.toLocaleString();
  newSpan.classList.add("timeSpan");
  list.appendChild(newSpan);

  note_areaEl.value = "";

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.classList.add("deleteBtn");
  list.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    list.remove();
  });

  const objectEl = {
    id: now,
    text: fetchContent,
    time: dateObj.toLocaleString(),
  };

  notes.push(objectEl);
  localStorage.setItem("notes", JSON.stringify(notes));
}

btnEl.addEventListener("click", () => {
  addNote();
});
