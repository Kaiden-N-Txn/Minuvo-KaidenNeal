function addTask() {
    let input = document.getElementById("newTask");

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
}

function removeTask(button){

button.parentElement.remove();

}

document.addEventListener("change", function(event) {

    if (event.target.type == "checkbox") {

        let task = event.target.nextElementSibling;

        task.style.textDecoration = "line-through";

        task.style.color = "gray";

    }

});
