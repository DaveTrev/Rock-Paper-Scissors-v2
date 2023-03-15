// Cache the dom (storing for future use) & reset everything to 0 value
let userScore = 0;
let computerScore = 0;
let uName = "";
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const userNameDiv = document.getElementById("name");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
// modal open and close -- using florin pop guide to making a modal popup https://www.florin-pop.com/blog/2019/04/how-to-create-a-modal/
const openModal = document.getElementById("openThis");
const modalContainer = document.getElementById("modalContainer");
const closeModal = document.getElementById("closeThis");
const playmeBtn = document.getElementById("play-me");


playmeBtn.addEventListener("click", () => {
  isNameValid();
});

// setting up modal open and close
openModal.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

// Function to handle username input
function getUser_Name() {
  var x = document.getElementById("signDiv");
  x.style.display = "none";
  var y = document.getElementById("gameDiv");
  y.style.display = "block";
  userNameDiv.innerHTML = uName;
}

function isNameValid() {
  uName = document.getElementById("username").value;
  if (uName.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a user name!",
    });
  } else {
    getUser_Name();
  }
}

// recognise pressing enter on keyboard 
document.querySelector("#username").addEventListener("keyup", event => {
  if(event.key !== "Enter") return;
  document.querySelector("#play-me").click();
  event.preventDefault();
});

// Setting up computer choice. using math.random to loop through an array to return a value
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
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
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `Your choice of ${convertToWord(
    userChoice
  )} beats ${convertToWord(computerChoice)},  You WIN!! 🎉🎉🎉 `;
  if (userScore === 5) {
    Swal.fire("YOU WIN, CONGRATULATIONS!"); // using sweet alert2 [https://sweetalert2.github.io/] to highlight user Wins and games lost
    reset();
  }
  userChoiceDiv.classList.add("win-glow");
  setTimeout(() => userChoiceDiv.classList.remove("win-glow"), 200);
}

// Losing Condition - what happens when a user clicks on one of the choices and how the value is passed through the parameter
function lose(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `Your choice of ${convertToWord(
    userChoice
  )} loses to ${convertToWord(computerChoice)},  You LOST. 💩💩💩`; // using sweet alert2 [https://sweetalert2.github.io/] to highlight user Wins and games lost
  if (computerScore === 5) {
    Swal.fire("YOU LOSE, Better luck next time!");
    reset();
  }
  userChoiceDiv.classList.add("lose-glow");
  setTimeout(() => userChoiceDiv.classList.remove("lose-glow"), 200);
}

// Draw Condition - what happens when a user clicks on one of the choices and how the value is passed through the parameter
function draw(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  resultP.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )},  Its a Tie! 👔👔👔`;
  userChoiceDiv.classList.add("gray-glow");
  setTimeout(() => userChoiceDiv.classList.remove("gray-glow"), 200);
}

// The logic of game, win, lose, draw conditions aka "paper" beats "rock" etc
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "ps":
    case "rp":
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
function main() {
  rockDiv.addEventListener("click", () => game("r"));

  paperDiv.addEventListener("click", () => game("p"));

  scissorsDiv.addEventListener("click", () => game("s"));
}

main();

// reset button to set scores for user and comp to 0
function reset() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").innerHTML = 0;
  document.getElementById("computer-score").innerHTML = 0;
  resultP.innerHTML = ``;
}