function updateStreak(){

    let today = new Date().toDateString();

    let lastLogin = localStorage.getItem("lastLogin");

    let streak = localStorage.getItem("streak");


    if(streak == null){
        streak = 0;
    }


    if(lastLogin != today){

        let yesterday = new Date();

        yesterday.setDate(yesterday.getDate()-1);

        yesterday = yesterday.toDateString();


        if(lastLogin == yesterday){

            streak++;

        } else {

            streak = 1;

        }


        localStorage.setItem("streak", streak);

        localStorage.setItem("lastLogin", today);

    }


}

function loadProgress() {
    let completed = localStorage.getItem("completedTasks");

    if (completed == null) {
        completed = 0;
    }

    document.getElementById("completed").innerHTML = completed;

    let streak = localStorage.getItem("streak");

    if (streak == null) {
        streak = 0;
    }

    document.getElementById("streak").innerHTML = streak;

    let score = completed * 10;

    if (score > 100) {
        score = 100;
    }

    document.getElementById("score").innerHTML = score + "%";
}

updateStreak();
loadProgress();

localStorage.setItem("timeSpent", 0.5);

let hours = localStorage.getItem("timeSpent");

document.getElementById("hours").innerHTML = hours;


localStorage.setItem("interest", "Learning");

let interest = localStorage.getItem("interest");

document.getElementById("activities").innerHTML = 
`
    <p>${interest}</p>
`;