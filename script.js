let interest = "";

const ideas = {
    Learning: [
        "Watch an educational video",
        "Read an interesting article",
        "Learn a few words in a new language",
        "Take a free online course",
        "Listen to an educational podcast"
    ],

    Health: [
        "Go for a walk",
        "Stretch your body",
        "Do a home workout",
        "Practice yoga",
        "Ride a bike"
    ],

    Creativity: [
        "Draw a picture",
        "Paint something",
        "Write a short story",
        "Take photos outside",
        "Try origami"
    ],

    Career: [
        "Update your resume",
        "Practice interview questions",
        "Learn a new job skill",
        "Organize your workspace",
        "Research career opportunities"
    ],

    Social: [
        "Call a friend",
        "Text a family member",
        "Invite someone for coffee",
        "Play a game with friends",
        "Write a thoughtful message"
    ],

    Relaxation: [
        "Listen to relaxing music",
        "Meditate",
        "Read a book",
        "Take a break outside",
        "Practice deep breathing"
    ]
};

function chooseInterest(choice) {
    interest = choice;
}

function generateIdeas() {

    let time = document.getElementById("time").value;
    let result = document.getElementById("result");

    if (interest == "") {
        result.innerHTML = "<p>Please choose an interest.</p>";
        return;
    }

    let activityList = ideas[interest];

    result.innerHTML = "<h2>Here are some ideas:</h2>";

    for (let i = 0; i < activityList.length; i++) {
        result.innerHTML += "<p>• " + activityList[i] + " for " + time + ".</p>";
    }
}