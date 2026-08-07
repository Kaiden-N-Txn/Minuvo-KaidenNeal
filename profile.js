function loadProfile() {
    let completed = localStorage.getItem("completedTasks");
    let hours = localStorage.getItem("timeSpent");
    let streak = localStorage.getItem("streak");
    let longestStreak = localStorage.getItem("longestStreak");

    if (completed === null) {
        completed = 0;
    }

    if (hours === null) {
        hours = 0;
    }

    if (streak === null) {
        streak = 0;
    }

    if (longestStreak === null) {
        longestStreak = streak;
    }

    let score = Number(completed) * 10;

    if (score > 100) {
        score = 100;
    }

    document.getElementById("tasksCompleted").innerHTML = completed;
    document.getElementById("hoursInvested").innerHTML = hours;
    document.getElementById("currentStreak").innerHTML = streak;
    document.getElementById("productivityScore").innerHTML = score + "%";

    document.getElementById("accountTasks").innerHTML = completed;
    document.getElementById("accountHours").innerHTML = hours;
    document.getElementById("accountStreak").innerHTML = streak + " days";
    document.getElementById("longestStreak").innerHTML = longestStreak + " days";
}

function editProfile() {
    let name = prompt("Enter your name:");

    if (name !== null && name.trim() !== "") {
        localStorage.setItem("profileName", name);

        document.getElementById("profileName").innerHTML = name;
    }
}

function loadName() {
    let savedName = localStorage.getItem("profileName");

    if (savedName !== null) {
        document.getElementById("profileName").innerHTML = savedName;
    }
}

loadProfile();
loadName();