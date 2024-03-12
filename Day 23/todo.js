document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    renderTasks();
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        tasks.push(taskText);
        saveTasks();
        renderTasks();
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const taskIndex = Array.from(taskList.children).indexOf(event.target);
        tasks.splice(taskIndex, 1);
        saveTasks();
        renderTasks();
      }
    });
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        taskList.appendChild(taskItem);
      });
    }
  
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
  