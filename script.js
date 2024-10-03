document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const taskInput = document.getElementById("todo-input");
    const task = taskInput.value;
  
    if (task === "") {
      alert("type some word.");
      return;
    }
  
    const taskList = document.getElementById("todo-list");
  
    const newTask = document.createElement("li");
    newTask.textContent = task;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
  
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(newTask);
    });
  
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
  
    taskInput.value = "";
  });
  