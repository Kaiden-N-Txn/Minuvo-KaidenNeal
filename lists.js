function saveTasks() {
    let tasks = [];

    document.querySelectorAll(".task").forEach(function(task) {
        tasks.push({
            text: task.querySelector("span").textContent,
            completed: task.querySelector("input").checked
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let input = document.getElementById("newTask");

    if (input.value.trim() === "") {
        return;
    }

    let list = document.getElementById("taskList");

    let div = document.createElement("div");

    div.className = "task";

    div.innerHTML = `
        <input type="checkbox">

        <span>${input.value}</span>

        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    list.appendChild(div);

    input.value = "";

     saveTasks(); 
}

function removeTask(button){

button.parentElement.remove();

  saveTasks();
}

document.addEventListener("change", function(event){

    if(event.target.type == "checkbox"){

        let task = event.target.nextElementSibling;

        task.style.textDecoration = "line-through";
        task.style.color = "gray";


        let completedTasks = localStorage.getItem("completedTasks");

        if(completedTasks == null){
            completedTasks = 0;
        }

        completedTasks++;

        localStorage.setItem("completedTasks", completedTasks);

    }

});

window.onload = function() {

    let savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {

        savedTasks.forEach(function(task) {

            let list = document.getElementById("taskList");

            let div = document.createElement("div");

            div.className = "task";

            div.innerHTML = `
                <input type="checkbox" ${task.completed ? "checked" : ""}>
                <span>${task.text}</span>
                <button class="delete-btn" onclick="removeTask(this)">Delete</button>
            `;

            if (task.completed) {
                div.querySelector("span").style.textDecoration = "line-through";
                div.querySelector("span").style.color = "gray";
            }

            list.appendChild(div);
        });

    }

};

