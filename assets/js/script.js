"use strict";

//Element Selectors to Change Content
let qText = document.getElementById("question-text");
let c1Text = document.getElementById("choice1");
let c2Text = document.getElementById("choice2");
let c3Text = document.getElementById("choice3");
let c4Text = document.getElementById("choice4");

//Constructor for player data in leaderboard entry.
function Player(name, score) {
    this.playerName = name;
    this.playerScore = score;
}

//Constructor for Quiz Questions
function QuizQuestion(question, c1, c2, c3, c4, correct) {
    this.questionText = question;
    this.choiceOneText = c1;
    this.choiceTwoText = c2;
    this.choiceThreeText = c3;
    this.choiceFourText = c4;
    this.correctAnswer = correct;
}

//Question Objects to be Used for Quiz Questions
let Question1 = new QuizQuestion(

    "What is the purpose of a variable in JavaScript?",
    "To add or subtract numbers.",
    "To recursively call a function.",
    "To store data.",
    "All of the above.",
    2
);

let Question2 = new QuizQuestion(

    "Which of the following is an example of a 'falsy' value?",
    "NaN",
    "Undefined",
    "0",
    "All of the above.",
    3

);

let Question3 = new QuizQuestion(

    "What sort of 'typing' does the JavaScript language use?",
    "Strong",
    "Dynamic",
    "Ambivalent",
    "Literal",
    1

);

let Question4 = new QuizQuestion(

    "What is a very common use of a for loop?",
    "To iterate through an array.",
    "To return from a function repeatedly.",
    "To change callbacks on each loop cycle.",
    "To hack the Gibson.",
    0

);

let Question5 = new QuizQuestion(

    "What is JavaScripts relation to Java?",
    "JavaScript is a fork of Java used for web applications.",
    "The two are completely unrelated.",
    "Java is dynamically typed whereas JavaScript is strongly typed.",
    "JavaScript is interpreted whearas Java is compiled.",
    1

);

let Question6 = new QuizQuestion(

    "What type of programming language is JavaScript?",
    "Imperative",
    "Object-Oriented",
    "Recursive",
    "Asynchronous",
    1

);

let Question7 = new QuizQuestion(

    "Which of the following best descibes a boolean?",
    "A lean function",
    "The current stack offset",
    "An octal number which is passed as an argument to a function.",
    "A binary statement with only two possible states.",
    3

);

let Question8 = new QuizQuestion(

    "Which of the following data types is not one used in JavaScript?",
    "Number",
    "Decimal",
    "Long",
    "String",
    2

);

let Question9 = new QuizQuestion(

    "Which major implementation of JavaScript introduced arrow functions?",
    "LTS1",
    "ES5",
    "ES6",
    "LTS12",
    2

);

let Question10 = new QuizQuestion(

    "Which of the following can JavaScript be used for?",
    "Web Applications",
    "Desktop Applications via Electron",
    "Games",
    "All of the above",
    3

);

//This array stores the question object for easy comparisons later on.
let questionArray = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10];

//STATE-VARIABLES
//Boolean to control the state of the game.
let gameRunning = true;
let allowInput = false;
//Keeps track of the maximum number of rounds.
let finalRound = 9
//Keeps track of the current round.
let currentRound = 0;
let interval;
let timeRemaining = 60;

let timer = document.getElementById("timer");
timer.textContent = `Time Remaining: ${timeRemaining}`;

//Keeps track of the number of questions answered correctly or incorrectly.
let numCorrect = 0, numIncorrect = 0;
let startGameButton = document.querySelector("#choice1");

startGameButton.addEventListener("click", gameInit);

//Initializes the game environment.
function gameInit() {

    //Enable all choice buttons.
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice3").style.display = "block";
    document.getElementById("choice4").style.display = "block";
    gameRunning = true;

    startGameButton.removeEventListener("click", gameInit);

    c1Text.addEventListener("click", evaluateClickEvent);
    c2Text.addEventListener("click", evaluateClickEvent);
    c3Text.addEventListener("click", evaluateClickEvent);
    c4Text.addEventListener("click", evaluateClickEvent);
    
    interval = setInterval(gameTimer,1000);
    
    changeQuestion();

}

//Handles timer logic.
function gameTimer(){
    timeRemaining--;
    timer.textContent = `Time Remaining: ${timeRemaining}`;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        scoreEntry();
    }

}

//Receives the click event parameter from even listeners and passes along arguments to game logic.
function evaluateClickEvent(event) {

    let chosenAnswer = event.target.id;

    if(chosenAnswer == "choice1") {
        checkAnswer(0);
    } else if (chosenAnswer == "choice2") {
        checkAnswer(1);
    } else if (chosenAnswer == "choice3") {
        checkAnswer(2);
    } else {
        checkAnswer(3);
    }
   
}

//Evaluates whether the selected answer was correct or incorrect.
function checkAnswer(value) {

    if (value == questionArray[currentRound].correctAnswer) {
        evalCorrect(value);
    } else {
        evalIncorrect(value);
    }

}

//Invoked when checkAnswer determines the answer selected was correct.
function evalCorrect(value) {

    //Change question text to "Correct!";
    qText.textContent = "Correct!";
    numCorrect++;
 
    //Color the correct answer green if selected.
    if (value === 0) {
        c1Text.style.backgroundColor = "green";
    } else if (value === 1) {
        c2Text.style.backgroundColor = "green";
    } else if (value === 2) {
        c3Text.style.backgroundColor = "green";
    } else if (value === 3) {
        c4Text.style.backgroundColor = "green";
    }

    changeRound();
    
}

//Invoked when checkAnswer determines the answer selected was incorrect.
function evalIncorrect(value) {

    qText.textContent = "Sorry, that is incorrect.";

    numIncorrect++;

    let correct = questionArray[currentRound].correctAnswer;
    //Color the chosen answer red since it was deemed incorrect.
    if (value === 0) {
        c1Text.style.backgroundColor = "red";
    } else if (value === 1) {
        c2Text.style.backgroundColor = "red";
    } else if (value === 2) {
        c3Text.style.backgroundColor = "red";
    } else if (value === 3) {
        c4Text.style.backgroundColor = "red";
    }

    //Color the correct answer cyan.
    if (correct === 0) {
        c1Text.style.backgroundColor = "cyan";
    } else if (correct === 1) {
        c2Text.style.backgroundColor = "cyan";
    } else if (correct === 2) {
        c3Text.style.backgroundColor = "cyan";
    } else if (correct === 3) {
        c4Text.style.backgroundColor = "cyan";
    }

    //Lower timer if answer was incorrect.
    timeRemaining -= 5;

    changeRound();
 }

 //Changes currentRound state variable and waits 5 seconds before changing the round.
function changeRound() {

    currentRound++;
    
    if (currentRound <= finalRound && timeRemaining >= 0) {
        setTimeout(changeQuestion, 750);
    } else {
        scoreEntry();
    }
    
}


//Changes the question and answer text on new round also listens for click events.
function changeQuestion() {

    resetDefaults();

    qText.textContent = questionArray[currentRound].questionText;
    c1Text.textContent = questionArray[currentRound].choiceOneText;
    c2Text.textContent = questionArray[currentRound].choiceTwoText;
    c3Text.textContent = questionArray[currentRound].choiceThreeText;
    c4Text.textContent = questionArray[currentRound].choiceFourText;

}

//Used to reset the colors of the choice backgrounds on a new round start.
function resetDefaults() {

    c1Text.style.backgroundColor = "purple";
    c2Text.style.backgroundColor = "purple";
    c3Text.style.backgroundColor = "purple";
    c4Text.style.backgroundColor = "purple";

}

//Handles end of game stuff.
function scoreEntry() {

    //Stops the game timer if it hasn't been stopped already.
    clearInterval(interval);

    //Remove "button" elements and replace the first with a text entry box that stores data.
    console.log(`Game has ended. Correct: ${numCorrect} Incorrect: ${numIncorrect}`);

    //Disables the unneeded elements.
    document.getElementById("choice3").style.display = "none";
    document.getElementById("choice4").style.display = "none";

    qText.textContent = "Game Over";
    
    //Need to remove the event listeners here.
    c1Text.removeEventListener("click", evaluateClickEvent);
    c2Text.removeEventListener("click", evaluateClickEvent);
    setupTextEntry();
    

}

//Prepares the page for text entry.
function setupTextEntry() {
    c1Text.style.backgroundColor = "white";
    c1Text.style.color = "black";
    c1Text.style.border = "none";
    c1Text.style.fontSize = "22px";
    c2Text.textContent = "Submit";
    c2Text.style.backgroundColor = "blue";
    c1Text.textContent = "Please enter your name: ";
    let input = document.createElement("input");
    input.setAttribute("id", "name-input");
    c1Text.appendChild(input);
    c2Text.addEventListener("click", () => {
        submitScore();
    });

}

//Handles the score submission to the leaderboard.
function submitScore() {

    let nameEntered = document.getElementById("name-input").value;
    let numQuestions = 10;
    let percentageScore = (numCorrect / numQuestions) * 100;

    let CurrentPlayer = new Player(
        nameEntered,
        percentageScore
    );

    //Save data in local storage as a JSON string.
    let saveData = JSON.stringify(CurrentPlayer);
    localStorage.setItem("playerData", saveData);

    //Change to the leaderboard.
    window.location = "./leaderboard.html";
} 