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
const answerOne = document.getElementById("answer1");
const answerTwo = document.getElementById("answer2");
const answerThree = document.getElementById("answer3");
const answerFour = document.getElementById("answer4");
const timeLeftBar = document.getElementById("time-remaining");
const resultsSection = document.getElementById("end-results");
const answerBox = document.getElementById("answer-box");
const answerOptions = answerBox.querySelectorAll(".answer");

const quizQuestions = [{
  questionNum: "1",
  questionText: "Ninety percent of the Earth's population lives in which hemisphere?",
  choices: [
    "The Northern Hemisphere",
    "The Southern Hemisphere",
    "The Eastern Hemisphere",
    "The Western Hemisphere"
  ],
  correctAns: "The Northern Hemisphere"
},
{
  questionNum: "2",
  questionText: "How many time zones does Australia have?",
  choices: [
    "6",
    "5",
    "4",
    "3"
  ],
  correctAns: "3"
},
{
  questionNum: "3",
  questionText: "Which continent is in all four hemispheres?",
  choices: [
    "Africa",
    "South America",
    "Asia",
    "Europe"
  ],
  correctAns: "Africa"
},
{
  questionNum: "4",
  questionText: "What is the order of the largest oceans on Earth?",
  choices: [
    "Atlantic, Pacific, Indian, Arctic, and Southern",
    "Arctic, Southern, Indian, Atlantic and Pacific",
    "Pacific, Atlantic, Indian, Southern and Arctic",
    "Indian, Artic, Atlantic, Southern, and Pacific"
  ],
  correctAns: "Pacific, Atlantic, Indian, Southern & the Arctic"
},
{
  questionNum: "5",
  questionText: "Where is the world's largest desert located?",
  choices: [
    "Arctic Desert",
    "Sahara Desert",
    "Arabian Desert",
    "Antarctic Desert"
  ],
  correctAns: "Antarctic Desert"
},
{
  questionNum: "6",
  questionText: "What is the capital city of Spain?",
  choices: [
    "Madrid",
    "Valencia",
    "Barcelona",
    "Seville "
  ],
  correctAns: "Madrid"
},
{
  questionNum: "7",
  questionText: "What is the capital city of Australia?",
  choices: [
    "Canberra",
    "Sydney",
    "Melbourne",
    "Brisbane"
  ],
  correctAns: "Canberra"
},
{
  questionNum: "8",
  questionText: "What is the capital city of South Korea",
  choices: [
    "Busan",
    "Incheon",
    "Seoul",
    "Daegu"
  ],
  correctAns: "Seoul"
},
{
  questionNum: "9",
  questionText: "What is the capital city of New Zealand?",
  choices: [
    "Wellington",
    "Auckland",
    "Christchurch",
    "Dunedin"
  ],
  correctAns: "Wellington"
},
{
  questionNum: "10",
  questionText: "What country has the largest population in the world?",
  choices: [
    "China",
    "The United States",
    "Indonesia",
    "India"
  ],
  correctAns: "China"
},
{
  questionNum: "11",
  questionText: "",
  choices: [
    "Monaco",
    "Nauru",
    "Macau",
    "Vatican City"
  ],
  correctAns: "Vatican City"
},
{
  questionNum: "12",
  questionText: "What is the largest ocean in the world?",
  choices: [
    "Atlantic Ocean",
    "Artic Ocean",
    "Indian Ocean",
    "Pacfic Ocean"
  ],
  correctAns: "Pacfic Ocean"
},
{
  questionNum: "13",
  questionText: "Which city in the Philippines is the most densely populated?",
  choices: [
    "Caloocan",
    "Manila",
    "Pateros",
    "Mandaluyong"
  ],
  correctAns: "Manila"
},
{
  questionNum: "14",
  questionText: "",
  choices: [
    "Mount Fuji",
    "Popocatépetl",
    "Mauna Loa",
    "Kilimanjaro"
  ],
  correctAns: "Mauna Loa located in Hawaii"
},
{
  questionNum: "15",
  questionText: "What is the name of China's largest river?",
  choices: [
    "The Yangshe River",
    "The Yangsea River",
    "The Yangtze River",
    "The YangZee River"
  ],
  correctAns: "The Yangtze River"
},
{
  questionNum: "16",
  questionText: "What is the tallest moutain the UK?",
  choices: [
    "Carn Eige",
    "Snowdon",
    "Carrauntoohil",
    "Ben Nevis"
  ],
  correctAns: "Ben Nevis"
},
{
  questionNum: "17",
  questionText: "How many States does the United States consist of?",
  choices: [
    "50",
    "52",
    "49",
    "48"
  ],
  correctAns: "50"
},
{
  questionNum: "18",
  questionText: "How many countries are there in the United Kingdom?",
  choices: [
    "4",
    "5",
    "3",
    "2"
  ],
  correctAns: ""
},
{
  questionNum: "19",
  questionText: "How many time zones does Russia have?",
  choices: [
    "11",
    "13",
    "10",
    "A lot"
  ],
  correctAns: "11"
},
{
  questionNum: "20",
  questionText: "What is the name of the largest city in Australia?",
  choices: [
    "Brisbane",
    "Sydney",
    "Melbourne",
    "Perth"
  ],
  correctAns: "Brisbane"
},
{
  questionNum: "21",
  questionText: "What country is known to have the best quality tap water?",
  choices: [
    "France",
    "Switzerland",
    "Norway",
    "Luxembourg"
  ],
  correctAns: "Switzerland"
},
{
  questionNum: "23",
  questionText: "In what ocean is the Bermuda Triangle located?",
  choices: [
    "Pacific Ocean",
    "Indian Ocean",
    "Atlantic Ocean",
    "Arctic Ocean"
  ],
  correctAns: "Atlantic Ocean"
},
{
  questionNum: "24",
  questionText: "The Grand Canyon is located in which US state?",
  choices: [
    "Florida",
    "Texas",
    "Arizona",
    "Mississippi"
  ],
  correctAns: "Arizona"
}
];


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

function buildQuizQuestion(questionID){
  let currentQuestionNum = document.getElementById("current-question");
  let totalQuestions = document.getElementById("total-questions");
  currentQuestionNum.innerHTML = questionCount + 1;
  totalQuestions.innerHTML = quizLength;
  question.innerHTML = quizQuestions[questionID].questionText;
  answerOne.innerHTML = quizQuestions[questionID].answers[0];
  console.log(answerOne.innerHTML = quizQuestions[questionID].answers[0]);
  answerTwo.innerHTML = quizQuestions[questionID].answers[1];
  answerThree.innerHTML = quizQuestions[questionID].answers[2];
  answerFour.innerHTML = quizQuestions[questionID].answers[3];
}
function resetAnswersStyles(){
  for(let answer of answerOptions){
    answer.setAttribute("class", ".answer")
  }
}

for (let answer of answerOptions){
  answer.addEventListener("click", answerChoice)
}

function answerChoice(event){
  resetAnswersStyles();
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
      trackerColor = "forest-green";
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

function nextQuestion(){
  resetAnswersStyles();
  resetTime();
  questionCount += 1;
  scoreTracker();
  if (questionCount < quizLength){
    buildQuizQuestion(questionCount);
    countDown();
    progressBar(questionCount);
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
  timeLeft = 30;
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
    timeLeftWidth = timeLeftWidth - (100/ 30);
    timeLeft -= 1;
    counter.innerHTML = timeLeft; 
    timeLeftBar.style.width = timeLeftBar + "%";
    if(timeLeft >= 20){
      timeLeftBar.style.backgroundColor = "green";
    }else if (timeLeft <= 10){
      timeLeftBar.style.backgroundColor = "red";
    }else {
      timeLeftBar.style.backgroundColor = "amber";
    }
  }
}
  
let timeLeftWidth= 100; 

function resetTime (){
  counter.innerHTML =`30`;
  timeLeftWidth = 100;
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
}questionCount


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
    playerFeedback.innerHTML = `You're not from around here are you ${player}???`;
  }else if (correctNum <= 6){
    playerFeedback.innerHTML = `Beleaf in your self ${player}`;
  }else if (correctNum <= 8){
    playerFeedback.innerHTML= `${player} Haters gonna hate, Equators gonna equate.`
  }else if (correctNum < 10){
    playerFeedback.innerHTML = `My word here we see a rare yellow spotted ${player} strutting proudly about their quiz score, said "Sir David Attenborough.`
  }else if (correctNum >= 10){
    playerFeedback.innerHTML =`Man ${player}, you are definitely out of this world!`
  }
}

/* quiz questions */

