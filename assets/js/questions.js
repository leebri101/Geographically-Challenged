/* jshint esversion: 8 */

/**
 * Question and Answer structure:
 * Each Q&A object is set up as an array,
 * Each of the objects contain:
 * 1. Question numbers for the user display in the #question-number element in quiz-tracker. 
 * (This is a requirement as the indexes start from 0).
 * Unintuitive for casual users or with little to no knowledge.
 * 2. Each question text will fill the #question-box element.
 * 3. Each object conatins an array with 4 texted based choices to pick from.
 * 4. The object which contains the correct answer will be compared from the user's selection from 'choices'.
 */
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
    questionText: "Which is the smallest country in the world?",
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
    questionText: "Which one is the largest volcano?",
    choices: [
      "Mount Fuji",
      "Popocatépetl",
      "Mauna Loa",
      "Kilimanjaro"
    ],
    correctAns: "Mauna Loa"
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
      "Snowdon - Yr Wyddfa",
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
    correctAns: "4"
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
    questionNum: "22",
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
    questionNum: "23",
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