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

    "Which of the following is an example of a 'falsy' value? ",
    "NaN",
    "Undefined",
    "0",
    "All of the above.",
    3

);

let Question3 = new QuizQuestion(

    "Which of the following is an example of a 'falsy' value? ",
    "NaN",
    "Undefined",
    "0",
    "All of the above.",
    3

);

//TODO: Add more questions here.

//This array stores the question object for easy comparisons later on.
let questionArray = [Question1, Question2, Question3];

//Boolean to control the state of the game.
let gameRunning = false;
//Keeps track of the maximum number of rounds.
let finalRound = 3;
//Keeps track of the current round.
let currentRound = 0;

//Keeps track of the number of questions answered correctly or incorrectly.
let numCorrect = 0, numIncorrect = 0;

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
                checkAnswer(0);
            });
            c2Text.addEventListener("click", function() {
                checkAnswer(1);
            });
            c3Text.addEventListener("click", function() {
                checkAnswer(2);
            });
            c4Text.addEventListener("click", function() {
                checkAnswer(3);
            });

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
    if(value === questionArray[currentRound].correctAnswer) {
        numCorrect++;
        evalCorrect();
    } else {
        numIncorrect++;
    }
}

function changeRound() {
    currentRound++;
}

function gameTimer() {

}

function evalCorrect() {
    qText.textContent = "Correct!"
    //Set the "button" color green.
    //TODO: Generalize this.
    c3Text.style.backgroundColor = "green";
}

function evalIncorrect() {


}

function changeQuestion() {
    
}