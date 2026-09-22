const taskInputEl = document.querySelector(".taskInput");
const addBtnEl = document.querySelector(".addBtn");
const taskListEl = document.querySelector(".taskList");

function addTask() {
  const getValue = taskInputEl.value.trim();

  if (getValue === "") {
    alert("Please Add Some Task");
  }

  const list = document.createElement("list");
  // list.innerText = getValue;
  list.classList.add("list");
  taskListEl.appendChild(list);

  list.addEventListener("click", () => {
    list.classList.toggle("completed");
  });

  const newSpan = document.createElement("span");
  newSpan.innerText = getValue;
  newSpan.classList.add("span");
  list.appendChild(newSpan);

  taskInputEl.value = "";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.classList.add("deleteBtn");
  newSpan.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation;
    list.remove();
  });
}

addBtnEl.addEventListener("click", () => {
  addTask();
});
