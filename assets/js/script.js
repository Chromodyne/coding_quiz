//Constructor for Quiz Questions
function QuizQuestion(question, c1, c2, c3, c4, correct) {
    this.questionText = question;
    this.choiceOneText = c1;
    this.choiceTwoText = c2;
    this.choiceThreeText = c3;
    this.choiceFourText = c4;
    this.correctIndex = correct;
}

//Question Objects to be Used for Quiz Questions
let Question1 = new QuizQuestion(

    "What is the purpose of a variable in JavaScript?",
    "To add or subtract numbers.",
    "To recursively call a function.",
    "To store data.",
    "All of the above.",
    3

);

//Quiz Logic Follows
document.getElementById("question-text").textContent = Question1.questionText;

//This function holds the logic to be used while the game loop is running.
function gameLoop() {

    //Boolean to control the state of the game.
    let gameRunning = false;
    //Keeps track of the current round.
    let currentRound = 0;
    //Keeps track of the maximum number of rounds.
    let finalRound = 2;

    while (gameRunning) {







    }


}

//Performs game initialization 
function gameSetup() {

    let startGameButton = document.querySelector("#start-game");

    startGameButton.addEventListener("click", gameInit);

}

function gameInit() {

    gameLoop();

}

function gameTimer() {

}