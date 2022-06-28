"use strict";

//Element Selectors to Change Content
let qText = document.getElementById("question-text");
let c1Text = document.getElementById("choice1");
let c2Text = document.getElementById("choice2");
let c3Text = document.getElementById("choice3");
let c4Text = document.getElementById("choice4");

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

//This array stores the question object for easy comparisons later on.
let questionArray = [Question1, Question2, Question3];

//STATE-VARIABLES
//Boolean to control the state of the game.
let gameRunning = true;
let allowInput = false;
//Keeps track of the maximum number of rounds.
let finalRound = 3;
//Keeps track of the current round.
let currentRound = 0;

//Keeps track of the number of questions answered correctly or incorrectly.
let numCorrect = 0, numIncorrect = 0;
let startGameButton = document.querySelector("#choice1");

startGameButton.addEventListener("click", gameInit);

function gameInit() {

    //Enable all choice buttons.
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice3").style.display = "block";
    document.getElementById("choice4").style.display = "block";
    gameRunning = true;

    startGameButton.removeEventListener("click", gameInit);

    c1Text.addEventListener("click", function() {
        checkAnswer(0);
        console.log("Clicked answer zero.");
    });
    c2Text.addEventListener("click", function() {
        checkAnswer(1);
        console.log("Clicked answer one.");
    });
    c3Text.addEventListener("click", function() {
        checkAnswer(2);
        console.log("Clicked answer two.");
    });
    c4Text.addEventListener("click", function() {
        checkAnswer(3);
        console.log("Clicked answer three.");
    });
    
    changeQuestion();

}

//Evaluates whether the selected answer was correct or incorrect.
function checkAnswer(value) {

    if (value == questionArray[currentRound].correctAnswer) {
        console.log("It's correct!");
        evalCorrect(value);
    } else {
        console.log("It's incorrect. :(");
        evalIncorrect(value);
    }

}


//Invoked when checkAnswer determines the answer selected was correct.
function evalCorrect(value) {

    //Change question text to "Correct!";
    let correct = questionArray[currentRound].correctAnswer;
    qText.textContent = "Correct!";
    //console.log("Evaluated corect.");
 
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

    let correct = questionArray[currentRound].correctAnswer;
    //console.log("Evaluated incorrect.");
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

    changeRound();
 }

 //Changes currentRound state variable and waits 5 seconds before changing the round.
function changeRound() {
    currentRound++;
}


//Changes the question and answer text on new round also listens for click events.
function changeQuestion() {

    qText.textContent = questionArray[currentRound].questionText;
    c1Text.textContent = questionArray[currentRound].choiceOneText;
    c2Text.textContent = questionArray[currentRound].choiceTwoText;
    c3Text.textContent = questionArray[currentRound].choiceThreeText;
    c4Text.textContent = questionArray[currentRound].choiceFourText;

    allowInput = true;

    

}

//Used to reset the colors of the choice backgrounds on a new round start.
function resetDefaults() {

    c1Text.style.backgroundColor = "purple";
    c2Text.style.backgroundColor = "purple";
    c3Text.style.backgroundColor = "purple";
    c4Text.style.backgroundColor = "purple";

}

function forceReturn() {
    return;
}
