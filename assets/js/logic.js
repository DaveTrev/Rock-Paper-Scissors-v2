// Cache the dom (storing for future use) & reset everything to 0 value

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

// Setting up computer choice. using math.random to loop through an array to return a value
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}  

// function to convert r,p,s to a human readable rock, paper, scissors
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

// Winning Condition - what happens when a user clicks on one of the choices and how the value is passed through the parameter
function win(userChoice, computerChoice) {
const userChoice_div = document.getElementById(userChoice)
 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)},  You WIN!! 🎉🎉🎉 `;
 userChoice_div.classList.add('green-glow');
 setTimeout(() => userChoice_div.classList.remove('green-glow'), 200); 
}

// Losing Condition - what happens when a user clicks on one of the choices and how the value is passed through the parameter
function lose(userChoice, computerChoice) {
const userChoice_div = document.getElementById(userChoice)
 computerScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)},  You LOST. 💩💩💩`;
 userChoice_div.classList.add('red-glow');
 setTimeout(() => userChoice_div.classList.remove('red-glow'), 200);
}

// Draw Condition - what happens when a user clicks on one of the choices and how the value is passed through the parameter
function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice)
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)},  Its a Tie! 👔👔👔`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 200);
}

// The logic of game, win, lose, draw conditions aka "paper" beats "rock" etc
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

// event listeners to create actions on r/p/s html element and passes that element value through the game function
  rock_div.addEventListener('click', () => game("r"));

  paper_div.addEventListener('click', () => game("p"));

  scissors_div.addEventListener('click',() =>  game("s"));
}

main();
