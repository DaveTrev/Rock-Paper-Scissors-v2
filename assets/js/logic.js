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
    const randomNumber = (Math.floor(Math.random() * 3.5));
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
const userChoice_div = document.getElementById(userChoice)
 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You WIN!! 🎉🎉🎉 `;
 userChoice_div.classList.add('green-glow');
 setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 200); 
}

function lose(userChoice, computerChoice) {
 computerScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = `${convertToWord(userChoice)} loses ${convertToWord(computerChoice)} You LOST. 💩💩💩`;
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} Its a Draw! 👔👔👔`;
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
