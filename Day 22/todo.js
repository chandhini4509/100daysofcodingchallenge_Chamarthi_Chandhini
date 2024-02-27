document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todo-form");
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement("li");
      li.innerText = taskText;
      li.addEventListener("click", function() {
        li.classList.toggle("completed");
      });
      li.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        li.remove();
      });
      taskList.appendChild(li);
    }
  });
  