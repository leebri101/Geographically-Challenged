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
const timeLeftBar = document.getElementById("time-remaining");
const resultsSection = document.getElementById("end-results");

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

// Left click & Enter event listeners to start the quiz
startQuizBtn.addEventListener("click", startQuiz);
playerName.addEventListener("keypress", function (e){
  if (e.key === "Enter") {
    startQuiz();
  }
});

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
  resetAnswer()

}

let timeLeft;
  const counter = document.getElementById("counter")
  let timer;


function countDown(){
  timeLeft = 50;
  timer =setInterval(function () {
    countdown(timeLeft);
  }, 1000);
}

/*
 * On each major interval of the timer
 * evaluate if the timer has not reached zero.
 * If it does move to the next question and make sure the counter says 0.
 * If the time still remains, then remove 1 second each time from time counter ,
 * to decrease width of time bar to show the new number.
 */
function countdown(seconds){
    if (seconds === 0) {
    counter.innerHTML = `0`;
    nextQuestion();
    } else{
    timeLeftLength = timeLeftLength - (100/ 50);
    timeLeft -= 1;
    counter.innerHTML = timeLeft; 
    timeLeftBar.style.width = timeLeftBar + "%";
    if(timeLeft >= 50){
      timeLeftBar.style.backgroundColor = "green";
    }else if (timeLeft <= 10){
      timeLeftBar.style.backgroundColor = "red";
    } else {
      timeLeftBar.style.backgroundColor = "amber";
    }
  }
}
  
let timeLeftLength = 100; 

function resetTime (){
  counter.innerHTML =`50`;
  timeLeftLength = 100;
  timeLeftBar.style.width = "100%";
  timeLeftBar.style.backgroundColor ="green";
  clearInterval(timer);
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
    headerSection.style.display = "block";
    quizSection.style.display = "none";
    resultsSection.style.display = "inline-flex";
    playerResults();
}

function playerResults(){
  const scoreResults = document.querySelector("#score-results");
  let scoreOutput = `${correctNum} / ${questionCount}`;
  scoreResults.innerHTML = scoreOutput
}