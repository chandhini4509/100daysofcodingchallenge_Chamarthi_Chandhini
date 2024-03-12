function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task !== "") {
        simulateServerRequest(task)
            .then(() => {
                appendTaskToList(task);
                taskInput.value = "";
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
}

function simulateServerRequest(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating server response
            const success = Math.random() < 0.8; // 80% success rate
            if (success) {
                resolve();
            } else {
                reject("Failed to add task. Please try again later.");
            }
        }, 1000); // Simulating delay of 1 second
    });
}

function appendTaskToList(task) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
