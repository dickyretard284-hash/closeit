// Database of Trivia Questions
const questionBank = [
    {
        q: "Which gaming platform uses a square-headed blocky avatar?",
        options: ["Minecraft", "Roblox", "Fortnite", "Terraria"],
        correct: 1 // index matching 'Roblox'
    },
    {
        q: "What is the highest standard tier rarity commonly found in arcade packs?",
        options: ["Common", "Rare", "Epic", "Legendary"],
        correct: 3
    },
    {
        q: "Which language runs native logic controls inside web browsers?",
        options: ["Python", "HTML", "C++", "JavaScript"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let tokenScore = 0;

function loadQuestion() {
    const currentQuestion = questionBank[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.q;
    
    const buttons = document.getElementsByClassName("answer-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = currentQuestion.options[i];
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questionBank[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.correct) {
        tokenScore += 5; // Reward tokens
        alert("Correct! +5 Tokens 🪙");
    } else {
        alert("Wrong answer! Keep trying.");
    }
    
    document.getElementById("score").innerText = tokenScore;
    
    // Move to next question or loop back
    currentQuestionIndex = (currentQuestionIndex + 1) % questionBank.length;
    loadQuestion();
}

// Start the game automatically on page load
window.onload = loadQuestion;