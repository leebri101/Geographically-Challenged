/* jshint esversion: 8 */

// variables 
const quizLength = 10;
let correctNum = 0;
let questionCount = 0;
const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
const landingSection = document.getElementById("landing");
const playButton = document.getElementById("play-btn");
const newGameSection = document.getElementById("start-game");
const playerName = document.getElementById("player-name");
const startQuizBtn = document.getElementById("start-quiz-btn");
const leaveQuizBtn = document.getElementById("leave-quiz-btn");
const quizSection = document.getElementById("quiz");
const question = document.getElementById("question-box");
const answerBox = document.getElementById("answer-box");
const optionOne = document.getElementById("answer1");
const optionTwo = document.getElementById("answer2");
const optionThree = document.getElementById("answer3");
const optionFour = document.getElementById("answer4");



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


function startQuiz(){;
if (playerName.value == "" || playerName == null || playerName == undefined){
    playerName.style.borderBlockColor = "red"
  } else{
    quizSection.style.display = "inline-flex";
    newGameSection.style.display = "none";
    headerSection.style.display = "none";
    footerSection.style.display = "none";
    shuffle(quizQuestions);
  }
}


/* "Fisher Yates" method is used to shuffle quiz questions in any given order.
* 
* Credits go to Mike Bostock. https://bost.ocks.org/mike/shuffle/
*/

function shuffle(array) {
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


function endOfQuiz(){
    footerSection.style.display = "block";
    quizSection.style.display = "none"
}

/*
function checkAnswer(){

}
*/