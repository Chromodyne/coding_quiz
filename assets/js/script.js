//Constructor for Quiz Questions
function QuizQuestion(question, c1, c2, c3, c4) {
    this.questionText = question;
    this.choiceOneText = c1;
    this.choiceTwoText = c2;
    this.choiceThreeText = c3;
    this.choiceFourText = c4;
}

//Question Objects to be Used for Quiz Questions
let Question1 = new QuizQuestion(

    "What is the purpose of a variable in JavaScript?",
    "To add or subtract numbers.",
    "To recursively call a function.",
    "To store data.",
    "All of the above."
);

let Question2 = new QuizQuestion(

    "Which of the following is an example of a 'falsy' value? ",
    "NaN",
    "Undefined",
    "0",
    "All of the above."

);

let currentQuestion = 0;
let correctAnswersArray = [3, 4];
//TODO: Add more questions here.

//Boolean to control the state of the game.
let gameRunning = false;
//Keeps track of the maximum number of rounds.
let finalRound = 2;
//Keeps track of the current round.
let currentRound = 0;

//Keeps track of the number of questions answered correctly or incorrectly.
let numCorrect = 0;
let numIncorrect = 0;

//Element Selectors to Change Content
let qText = document.getElementById("question-text");
let c1Text = document.getElementById("choice1");
let c2Text = document.getElementById("choice2");
let c3Text = document.getElementById("choice3");
let c4Text = document.getElementById("choice4");

gameSetup();

//This function holds the logic to be used while the game loop is running.
function gameLoop() {

    if (gameRunning) {

        if (currentRound === 0) {

            currentQuestion = 1;

            qText.textContent = Question1.questionText;
            c1Text.textContent = Question1.choiceOneText;
            c2Text.textContent = Question1.choiceTwoText;
            c3Text.textContent = Question1.choiceThreeText;
            c4Text.textContent = Question1.choiceFourText;

            c1Text.addEventListener("click", function() {
                checkAnswer(1);
            });
            c2Text.addEventListener("click", function() {
                checkAnswer(2);
            });
            c3Text.addEventListener("click", function() {
                checkAnswer(3);
            });
            c4Text.addEventListener("click", function() {
                checkAnswer(4);
            });

        }

        if (currentRound === 1) {

        }



   }

}

//Performs game initialization 
function gameSetup() {

    let startGameButton = document.querySelector("#choice1");

    startGameButton.addEventListener("click", gameInit);

}

function gameInit() {

    //Enable all choice buttons.
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice3").style.display = "block";
    document.getElementById("choice4").style.display = "block";
    
    gameRunning = true;
    currentQuestion = 1;

    gameLoop();

}

function checkAnswer(value) {
    if(value === currentQuestion.) {
        numCorrect++;
    } else {
        numIncorrect++;
    }
}

function changeRound() {

}

function gameTimer() {

}