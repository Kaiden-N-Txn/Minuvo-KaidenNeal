function saveTasks() {

    let tasks = [];

    document.querySelectorAll(".task").forEach(function(task) {

        tasks.push({
            text: task.querySelector("span").textContent,
            completed: task.querySelector("input").checked,
            status: task.dataset.status
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
    div.dataset.status = "todo";

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

function changeStatus(select){

    let task = select.parentElement;

    task.dataset.status = select.value;

    if(select.value == "completed"){
        task.querySelector("input").checked = true;
        task.querySelector("span").style.textDecoration = "line-through";
        task.querySelector("span").style.color = "gray";
    }
    else{
        task.querySelector("input").checked = false;
        task.querySelector("span").style.textDecoration = "none";
        task.querySelector("span").style.color = "black";
    }

    saveTasks();

}

window.onload = function() {

    let savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {

        savedTasks.forEach(function(task) {

            let list = document.getElementById("taskList");

            let div = document.createElement("div");

            div.className = "task";
            div.dataset.status = task.status || "todo";


            div.innerHTML = `
    <input type="checkbox" ${task.completed ? "checked" : ""}>

    <span>${task.text}</span>

    <select onchange="changeStatus(this)">
        <option value="todo" ${task.status=="todo" ? "selected":""}>To Do</option>
        <option value="progress" ${task.status=="progress" ? "selected":""}>In Progress</option>
        <option value="completed" ${task.status=="completed" ? "selected":""}>Completed</option>
    </select>

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

function filterTasks(category){

    let tasks = document.querySelectorAll(".task");


    tasks.forEach(function(task){

        if(category == "all"){
            task.style.display = "flex";
        }

        else if(task.dataset.status == category){
            task.style.display = "flex";
        }

        else{
            task.style.display = "none";
        }

    });

}

