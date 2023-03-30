/* jshint esversion: 8 */

// variables 
const quizLength = 10;
let correctNum = 0;
let questionCount = 0;
const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
const landingSection = document.getElementById("landing");
const playButton = document.getElementById("play-btn");
const newGameSection = document.getElementById("new-game");
const playerName = document.getElementById("player-name");
const startQuizBtn = document.getElementById("start-quiz-btn");
const leaveQuizBtn = document.getElementById("leave-quiz-btn");


function startNewGame(){
    landingSection.style.display = "none";
    newGameSection.style.display = "inline-flex";
    playerName.focus();
}

playButton.addEventListener("click", startNewGame);

// Start game section
function leaveQuiz(){
    playerName.value = "";
    landingSection.style.display = "inline-flex";;
    newGameSection.style.display = "none";
}

leaveQuizBtn.addEventListener("click", leaveQuiz);


function startQuiz();
if (playerName.value == "" || playerName == null || playerName == undefined){
    playerName.style.borderBlockColor = "red"
} else{
    quizSection.style.display = "inline-flex";
    newGameSection.style.display = "none";
    headerSection.style.display = "none";
    footerSection.style.display = "none";
}


/*
function endOfQuiz(){
    footerSection.style.display = "block";
}
function checkAnswer(){

}
*/