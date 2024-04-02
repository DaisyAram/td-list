// Initialize tasks array
var tasks = [];

// Function to add a task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  
  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  
  // Add task to tasks array
  tasks.push({ name: taskInput.value, completed: false });
  
  // Update task list HTML
  renderTasks();
  
  // Clear input field
  taskInput.value = "";
}

// Function to render tasks to HTML
function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing list
  
  // Loop through tasks array and create list items
  tasks.forEach(function(task, index) {
    var li = document.createElement("li");
    li.textContent = task.name;
    
    // Add click event listener to toggle completion status
    li.addEventListener("click", function() {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });
    
    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent li click event from firing
      tasks.splice(index, 1);
      renderTasks();
    });
    
    li.appendChild(deleteButton);
    
    // Add completed class if task is completed
    if (task.completed) {
      li.classList.add("completed");
    }
    
    taskList.appendChild(li);
  });
}
