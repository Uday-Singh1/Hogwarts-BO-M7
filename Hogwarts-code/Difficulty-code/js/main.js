var easyButton = document.getElementById("easy");
var mediumButton = document.getElementById("medium");
var hardButton = document.getElementById("hard");

easyButton.addEventListener("click", function() {
  startGame("easy");
});

mediumButton.addEventListener("click", function() {
  startGame("medium");
});

hardButton.addEventListener("click", function() {
  startGame("hard");
});

function startGame(difficulty) {
  // start game with selected difficulty
}
