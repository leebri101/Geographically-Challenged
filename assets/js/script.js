/* jshint esversion: 8 */

// variables 
let yaynay = "unanswered";
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
const nextButton = document.getElementById("next-btn");
const quizSection = document.getElementById("quiz");
const question = document.getElementById("question-box");
const choiceOne = document.getElementById("answer1");
const choiceTwo = document.getElementById("answer2");
const choiceThree = document.getElementById("answer3");
const choiceFour = document.getElementById("answer4");
const resultsSection = document.getElementById("results");
const answerBox = document.getElementById("answer-box");
const answerOptions = answerBox.querySelectorAll(".answer");
const timeLeftBar = document.getElementById("time-left");

function startNewGame() {
  landingSection.style.display = "none";
  newGameSection.style.display = "inline-flex";
  playerName.focus();
}
    
playButton.addEventListener("click", startNewGame);

// Start game section
function leaveQuiz() {
  playerName.value = "";
  landingSection.style.display = "inline-flex";
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
    buildQuizQuestion(questionCount);
    progressBar(questionCount);
    startTimer();
  }
}

// Left click & Enter event listeners to start the quiz
startQuizBtn.addEventListener("click", startQuiz);
playerName.addEventListener("keypress", function (e){
  if (e.key === "Enter") {
    startQuiz();
  }
});


let timeLeft;
const counter = document.getElementById("counter")
let timer;

function startTimer(){
  timeLeft = 30;
  timer = setInterval(function () {
    countdown(timeLeft);
  }, 1000);
}

/* On each major interval of the timer
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
    timeLeftWidth = timeLeftWidth - (100/ 30);
    timeLeft -= 1;
    counter.innerHTML = timeLeft; 
    timeLeftBar.style.width = timeLeftWidth + "%";
    if(timeLeft >= 20){
      timeLeftBar.style.backgroundColor = "green";
    }else if (timeLeft <= 10){
      timeLeftBar.style.backgroundColor = "red";
    }else {
      timeLeftBar.style.backgroundColor = "yellow";
    }
  }
}

let timeLeftWidth= 100; 

/**
 * Timer can only be reset by nextQuestion()function.
 * When the timer reaches zero when or when the player moves onto the nect question.
 */
function resetTimer (){
  counter.innerHTML =`30`;
  timeLeftWidth = 100;
  timeLeftBar.style.width = "100%";
  timeLeftBar.style.backgroundColor = "green";
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
}questionCount


/*
 * The nextQuestion() function is th main way to, calling on fucntions to:
 * 1. To reset to answer/timer elements to the default values/styles.
 * 2. To allow for paging and moving onto the next question.
 * 3. Manipulating the DOM elements in the score-tracker for players to see the current progress.
 * 4. Restarting timers to show players question they are on in the score tracker.
 * 5. To check if the quiz has reached the max length of 10 questions. 
 */
function nextQuestion(){
  resetAnswerStyles();
  resetTimer();
  questionCount += 1;
  scoreTracker();
  if (questionCount < quizLength){
    buildQuizQuestion(questionCount);
    startTimer();
    progressBar(questionCount);
  } else {
    counter.innerHTML = ``;
    endOfQuiz();
  }
}

nextButton.addEventListener("click", nextQuestion);


function buildQuizQuestion(questionID){
  let currentQuestionNum = document.getElementById("current-question");
  let totalQuestions = document.getElementById("total-questions");
  currentQuestionNum.innerHTML = questionCount + 1;
  totalQuestions.innerHTML = quizLength;
  question.innerHTML = quizQuestions[questionID].questionText;
  choiceOne.innerHTML = quizQuestions[questionID].choices[0];
  choiceTwo.innerHTML = quizQuestions[questionID].choices[1];
  choiceThree.innerHTML = quizQuestions[questionID].choices[2];
  choiceFour.innerHTML = quizQuestions[questionID].choices[3];
}

function resetAnswerStyles(){
  for(let answer of answerOptions){
    answer.setAttribute("class", "answer")
  }
}

function progressBar(questionCount){
  document.getElementsByClassName("circle")[questionCount]
  .style.backgroundColor = "yellow";
}

for (let answer of answerOptions){
  answer.addEventListener("click", choiceAnswer)
}

function choiceAnswer(event){
  resetAnswerStyles();
  this.setAttribute("class", "answer-selected");
  let targetID = event.target.id;
  evaluateAnswer(targetID);
}

function evaluateAnswer(targetID){
  let playerAnswer = document.getElementById(targetID).innerText;
  let correctAnswer = quizQuestions[questionCount].correctAns;

  if (correctAnswer === playerAnswer){
    correctNum++;
    yaynay = "correct";
  }else {
    yaynay = "incorrect";
  }
}

function scoreTracker(){
  let trackerColor;
  switch(yaynay){
    case "correct":
      trackerColor = "green";
      break;
    case "incorrect":
      trackerColor = "red";
      break;
    case undefined:
    case null:
    case "unanswered":
      trackerColor = "gray"
      break;
  }
  document.getElementsByClassName("circle")[questionCount - 1].style.backgroundColor = trackerColor;
  yaynay = "unanswered";
}


function endOfQuiz(){
  quizSection.style.display = "none";
  resultsSection.style.display = "inline-flex";  
    headerSection.style.display = "block";
    footerSection.style.display = "block";
  playerResults();
}

function playerResults(){
  const scoreResult = document.querySelector("#score-result");
  let scoreOutput = `${correctNum} / ${questionCount}`;
  scoreResult.innerHTML = scoreOutput

  const playerFeedback = document.querySelector("#player-feedback");
  let player = playerName.value;
  if (correctNum <= 2){
    playerFeedback.innerHTML = `You're not from around here are you ${player}???`;
  }else if (correctNum <= 6){
    playerFeedback.innerHTML = `Beleaf in your self ${player}`;
  }else if (correctNum <= 8){
    playerFeedback.innerHTML= `${player} Haters gonna hate, Equators gonna equate.`
  }else if (correctNum < 10){
    playerFeedback.innerHTML = `My word here we see a rare yellow spotted ${player} strutting proudly about their quiz score, said "Sir David Attenborough.`
  }else if (correctNum >= 10){
    playerFeedback.innerHTML = `Man ${player}, you are definitely out of this world!`
  }
}