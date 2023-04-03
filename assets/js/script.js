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
const timeRemaining = document.getElementById("time-remaining")


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
    formQuizQuestion(questionCount);
    progressBar(questionCount);
    countDown();
  }
}


 function formQuizQuestion(questionID){
  let currentQuestionNum = document.getElementById("current-question");
  let totalQuestions = document.getElementById("total-questions");
  currentQuestionNum.innerHTML = questionCount + 1;
  totalQuestions.innerHTML = quizLength;
  question.innerHTML = quizQuestions[questionID].questionText;
  optionOne.innerHTML = quizQuestions[questionID].option[0];
  optionTwo.innerHTML = quizQuestions[questionID].option[1];
  optionThree.innerHTML = quizQuestions[questionID].option[2];
  optionFour.innerHTML = quizQuestions[questionID].option[3];
 }

 function nextQuestion(){
  

 }

function timeRemaining(){
  const counter = document.getElementById("counter")
  let timer
}

 function countDown(){
  timeRemaining = 25;
  timer =setInterval(function () {
    countdown(timeRemaining);
   }, 1000);
  }

  function countdown(seconds){
    if (seconds === 0) {
      counter.innerHTML = `0`;
      nextQuestion();
    } else{

    }
  }
  
  


/* "Fisher Yates" method is used to shuffle quiz questions in any given order.
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


function countDown(){}

function endOfQuiz(){
    footerSection.style.display = "block";
    quizSection.style.display = "none"
}

/*
function checkAnswer(){

}
*/