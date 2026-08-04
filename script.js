let interest = "";


const ideas = {

    Learning: {

        "15 Minutes": [
            "Watch an educational video",
            "Read an interesting article",
            "Learn a few words in a new language",
            "Practice typing speed",
            "Solve a brain teaser",
            "Learn a fun fact about the world",
            "Practice a new computer shortcut",
            "Read a few pages of a book",
            "Update your vocabulary",
            "Read a short article",
            "Watch a quick tutorial",
            "Learn a random fact",
            "Practice memory games"
        ],

        "30 Minutes": [
            "Listen to an educational podcast",
            "Read a chapter of a book",
            "Practice mental math",
            "Research a historical event",
            "Watch a TED Talk",
            "Explore a new topic online",
            "Practice problem solving",
            "Watch a documentary clip",
            "Learn a new study technique",
            "Watch a language lesson",
            "Read about a new invention",
            "Explore a new website for learning",
            "Practice a skill you are improving",
             "Create a study plan",
            "Learn basic photography",
            "Complete a learning challenge",
            "Study a new subject",
            "Practice a new software program"
        ],

        "1 Hour": [
            "Take a free online course",
            "Learn basic coding",
            "Watch a science documentary",
            "Create flashcards for a subject",
            "Study a topic you are curious about",
            "Complete a practice quiz",
            "Learn a new hobby",
            "Practice a new language",
            "Create a personal learning project",
            "Master a new skill",
            "Take a full online class",
            "Write a research summary",
            "Create a presentation about something you learned"
        ],

        "2+ Hours": [
            "Complete multiple course lessons",
            "Read an entire book",
            "Build a small coding project",
            "Create a research project",
            "Start learning a new language",
            "Finish a full online lesson",
            "Teach someone something you learned"
        ]
    },


    Health: {

        "15 Minutes": [
            "Stretch your body",
            "Practice deep breathing",
            "Take a short walk",
            "Do jumping jacks",
            "Do a quick ab workout",
            "Practice balance exercises",
            "Do a quick cardio routine",
            "Check your posture",
             "Do a quick stretch routine",
            "Walk around your neighborhood",
            "Practice breathing exercises",
            "Do a mini workout",
            "Fix your sitting posture"
        ],

        "30 Minutes": [
            "Go for a walk",
            "Ride a bike",
            "Practice yoga",
            "Dance to your favorite songs",
            "Do Pilates",
            "Practice a sport skill",
            "Go for a light jog",
            "Prepare a healthy snack",
             "Practice a sport drill",
            "Go on a walk outside",
            "Do a yoga session",
            "Try a dance workout",
            "Stretch while listening to music"
        ],

        "1 Hour": [
            "Do a home workout",
            "Go swimming",
            "Play a sport",
            "Complete a strength workout",
            "Practice volleyball or soccer skills",
            "Try a new workout routine",
            "Go hiking",
            "Visit the gym",
             "Practice soccer skills",
            "Practice volleyball skills",
            "Go for a longer run",
            "Complete a workout challenge",
            "Try a new fitness activity"
        ],

        "2+ Hours": [
            "Go on a long hike",
            "Take a long bike ride",
            "Explore a new park",
            "Play a full sports game",
            "Spend time outdoors",
            "Try a new outdoor activity",
            "Play a full sports game",
            "Go on an outdoor adventure",
            "Spend the day being active",
            "Explore a hiking trail",
            "Try a new recreational activity"
        ]
    },


    Creativity: {

        "15 Minutes": [
            "Sketch a quick drawing",
            "Write a short poem",
            "Try origami",
            "Take creative photos",
            "Create a phone wallpaper design",
            "Write down creative ideas",
            "Try a new drawing style",
            "Make a quick sketch",
            "Create a new design idea",
            "Write down story ideas",
            "Take artistic photos",
            "Draw something from memory"
        ],

        "30 Minutes": [
            "Draw a picture",
            "Write a short story",
            "Design a logo",
            "Create a playlist",
            "Make a vision board",
            "Try a new recipe",
            "Create a DIY decoration",
            "Make a bracelet",
            "Create a digital drawing",
            "Try a new craft",
            "Design a poster",
            "Decorate a notebook"
        ],

        "1 Hour": [
            "Paint something",
            "Create digital art",
            "Make a handmade gift",
            "Learn basic video editing",
            "Create a photo collection",
            "Decorate your room",
            "Create a painting",
            "Edit a video",
            "Write a short story",
            "Make a photo collage",
            "Learn a new art style"
        ],

        "2+ Hours": [
            "Create a large art project",
            "Write a short story collection",
            "Build a creative portfolio",
            "Make a detailed craft project",
            "Create a short film",
            "Create a large art piece",
            "Write a short book",
            "Make a short movie",
            "Design a personal brand",
            "Build a creative collection"
        ]
    },


    Career: {

        "15 Minutes": [
            "Research a career",
            "Read career advice",
            "Set a career goal",
            "Organize your digital files",
            "Improve your study habits",
            "Read about a successful person",
            "Write down career goals",
            "Organize your workspace",
            "Read a career article",
            "Learn a professional word",
            "Review your achievements"
        ],

        "30 Minutes": [
            "Practice interview questions",
            "Research colleges",
            "Learn Excel basics",
            "Practice professional emails",
            "Research a dream job",
            "Create a weekly plan",
            "Practice communication skills",
            "Research a company",
            "Learn a workplace skill",
            "Update your achievements list",
            "Watch a career interview"
        ],

        "1 Hour": [
            "Update your resume",
            "Learn a new job skill",
            "Improve your portfolio",
            "Create a LinkedIn profile",
            "Work on a personal project",
            "Research future opportunities",
            "Build a personal project",
            "Improve your resume",
            "Learn a useful program",
            "Practice networking skills",
            "Research internships"
        ],

        "2+ Hours": [
            "Complete a career project",
            "Create a professional portfolio",
            "Take a detailed online course",
            "Work toward a certification",
            "Volunteer for experience",
             "Create a portfolio project",
            "Complete a professional course",
            "Work on a long-term goal",
            "Volunteer for experience",
            "Practice advanced skills"
        ]
    },


    Social: {

        "15 Minutes": [
            "Call a friend",
            "Text a family member",
            "Write a thoughtful message",
            "Send someone encouragement",
            "Ask a friend a question",
            "Catch up with someone",
             "Send a kind message",
            "Ask someone how they are doing",
            "Share a memory with someone",
            "Thank someone",
            "Give someone a compliment"
        ],

        "30 Minutes": [
            "Play a game with friends",
            "Video chat with someone",
            "Study with a friend",
            "Have a conversation with family",
            "Plan a future activity",
            "Play a game with someone",
            "Have a meaningful conversation",
            "Study with a friend",
            "Help someone with a task",
            "Catch up with family"
        ],

        "1 Hour": [
            "Meet a friend",
            "Go out for coffee",
            "Join a school activity",
            "Volunteer locally",
            "Play a sport with friends",
            "Plan an activity with friends",
            "Go out with someone",
            "Join a club",
            "Meet someone new",
            "Spend time with family"

        ],

        "2+ Hours": [
            "Spend the day with friends",
            "Attend a local event",
            "Plan a group adventure",
            "Volunteer with others",
            "Visit family",
            "Host a game night",
            "Go to an event",
            "Plan a group activity",
            "Volunteer with others",
            "Take a day trip with friends"
        ]
    },


    Relaxation: {

        "15 Minutes": [
            "Meditate",
            "Listen to relaxing music",
            "Practice deep breathing",
            "Sit outside",
            "Look through old photos",
            "Practice positive thinking",
            "Listen to calming music",
            "Watch the clouds",
            "Write down things you are grateful for",
            "Take a quiet break",
            "Enjoy a peaceful drink"
        ],

        "30 Minutes": [
            "Read a book",
            "Journal your thoughts",
            "Take a warm shower",
            "Do a skincare routine",
            "Spend time with a pet",
            "Watch a relaxing video",
            "Color or draw for fun",
            "Watch a relaxing show",
            "Read a magazine",
            "Organize your room",
            "Spend time outside"
        ],

        "1 Hour": [
            "Watch a favorite movie",
            "Practice mindfulness",
            "Try a relaxing hobby",
            "Watch a comfort show",
            "Write in a journal",
            "Try a relaxing hobby",
            "Watch a movie",
            "Read a book",
            "Take a relaxing bath",
            "Journal your thoughts"
        ],

        "2+ Hours": [
            "Have a relaxing evening",
            "Spend time doing your favorite hobby",
            "Plan a peaceful day",
            "Unplug and recharge",
            "Spend time in nature",
            "Have a self-care afternoon",
            "Spend time in nature",
            "Have a relaxing movie night",
            "Disconnect from technology",
            "Spend time doing your favorite hobby"
        ]
    }

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


    let activityList = ideas[interest][time];


    if (!activityList) {

        result.innerHTML = "<p>No activities found.</p>";
        return;

    }


    let shuffled = [...activityList].sort(() => Math.random() - 0.5);


    let selectedActivities = shuffled.slice(0, 5);


    result.innerHTML = "<h2>Here are some ideas:</h2>";


    for (let i = 0; i < selectedActivities.length; i++) {

        result.innerHTML += `<p>• ${selectedActivities[i]}</p>`;

    }

}