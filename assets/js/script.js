/* jshint esversion: 8 */

// variables 
let yaynay = "not-answered";
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
const nextButton = document.getElementById("next-button");
const quizSection = document.getElementById("quiz");
const question = document.getElementById("question-box");
const optionOne = document.getElementById("option1");
const optionTwo = document.getElementById("option2");
const optionThree = document.getElementById("option3");
const optionFour = document.getElementById("option4");
const timeLeftBar = document.getElementById("time-remaining");
const resultsSection = document.getElementById("end-results");
const answerOptions = answerBox.querySelectorAll(".answer");
const answerBox = document.getElementById("answer-box");


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
  optionOne.innerHTML = quizQuestions[questionID].options[0];
  optionTwo.innerHTML = quizQuestions[questionID].options[1];
  optionThree.innerHTML = quizQuestions[questionID].options[2];
  optionFour.innerHTML = quizQuestions[questionID].options[3];
}
function resetAnswersStyles(){
  for(let options of answerOptions){
    options.setAttribute("class", ".answers")
  }
}

for (let answers of answerOptions){
  answers.addEventListener("click", answerChoices)
}

function answerChoices(event){
  resetAnswersStyles();
  this.setAttribute("class", "answers-selected");
  let targetID = event.target.id;
  evaluateAnswers(targetID);
}

function evaluateAnswers(targetID){
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
      trackerColor = "forest-green";
      break;
    case "incorrect":
      trackerColor = "red";
      break;
    case undefined:
    case null:
    case "not-answered":
      trackerColor = "gray"
      break;
  }
document.getElementsByClassName("circle")[questionCount - 1].style.backgroundColor = trackerColor;
yaynay = "not-answered";
}

function nextQuestion(){
  resetAnswersStyles();
  resetTime();
  questionCount += 1;
  scoreTracker();
  if (questionCount < quizLength){
    formQuizQuestion(questionCount);
    countDown();
    progressBar();
  } else {
    counter.innerHTML = ``;
    endOfQuiz();
  }
}
nextButton.addEventListener("click", nextQuestion);

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
    if(timeLeft >= 20){
      timeLeftBar.style.backgroundColor = "forest-green";
    }else if (timeLeft <= 10){
      timeLeftBar.style.backgroundColor = "red";
    }else {
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

  const playerFeedback = document.querySelector("#player-feedback");
  let player = playerName.value;
  if (correctNum <= 2){
    playerFeedback = `You're not from around here are you ${player}???`;
  }else if (correctNum <= 6){
    playerFeedback = `Beleaf in your self ${player}`;
  }else if (correctNum <= 8){
    playerFeedback = `${player} Haters gonna hate, Equators gonna equate.`
  }else if (correctNum < 10){
    playerFeedback = `My word here we see a rare yellow spotted ${player} strutting proudly about their quiz score, said "Sir David Attenborough.`
  }else if (correctNum >= 10){
    playerFeedback =`Man ${player}, you are definitely out of this world!`
  }
}