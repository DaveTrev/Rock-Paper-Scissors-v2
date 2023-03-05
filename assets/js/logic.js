let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

// computer choice is an array of choices via random number generation
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}  

// function to convert r,p,s to readable rock, paper, scissors
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

// functions to state win, lose or draw (user or computer)
function win(userChoice, computerChoice) {
 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 const smallUserWord = "user".fontsize(3)
 result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp) You WIN!!`;
}

function lose() {
  console.log("LOST!");
}
function draw() {
  console.log("DRAW!");
}

// The logic of game, win, lose, draw conditions
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
            lose(userChoice, computerChoice);
            break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;

    }

}

// event listeners to create actions on r/p/s images
function main() {
  rock_div.addEventListener('click', function() {
    game("r");
})

  paper_div.addEventListener('click', function() {
    game("p");
})

  scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();
