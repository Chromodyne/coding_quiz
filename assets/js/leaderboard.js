let loadPlayerStringData = localStorage.getItem("playerData");
let loadPlayerData = JSON.parse(loadPlayerStringData);

let newNameEntry = document.createElement("li");
let newScoreEntry = document.createElement("li");
let nameList = document.getElementById("name-list");
let scoreList = document.getElementById("score-list");

nameList.appendChild(newNameEntry).textContent = loadPlayerData.playerName;
scoreList.appendChild(newScoreEntry).textContent = loadPlayerData.playerScore;

console.log(loadPlayerData.playerName);