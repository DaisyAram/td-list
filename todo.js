const form = document.getElementById("add-task-form");
const taskInput = document.getElementById("new-task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskInput.value === "") return;

  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = "";

  newTask.addEventListener("click", () => {
    newTask.remove();
  });
});
