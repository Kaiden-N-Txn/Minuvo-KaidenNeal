let interest = "";

function chooseInterest(choice){
    interest = choice;
}

function generateIdeas(){

    let time = document.getElementById("time").value;
    let result = document.getElementById("result");

    if(interest == ""){
        result.innerHTML = "Please choose an interest.";
        return;
    }

    if(interest == "Learning"){
        result.innerHTML = "Watch an educational video for " + time + ".";
    }

    else if(interest == "Health"){
        result.innerHTML = "Go for a walk for " + time + ".";
    }

    else if(interest == "Creativity"){
        result.innerHTML = "Draw or paint for " + time + ".";
    }

    else if(interest == "Career"){
        result.innerHTML = "Update your resume for " + time + ".";
    }

    else if(interest == "Social"){
        result.innerHTML = "Call a friend for " + time + ".";
    }

    else if(interest == "Relaxation"){
        result.innerHTML = "Listen to relaxing music for " + time + ".";
    }

}