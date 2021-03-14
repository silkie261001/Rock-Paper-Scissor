let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

function convertToWord(letter) {
    if (letter === 'rock') return "Rock";
    if (letter === 'paper') return "Paper";
    return "Scissor";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `<p>${convertToWord(user)} beats ${convertToWord(computer)}. You win!!🏆🏆</p>`;
  }
  
  function loses(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `<p>${convertToWord(computer)} beats ${convertToWord(user)}. You lose...😢😢</p>`;
  }

  function draw(user, computer) {
      const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_p.innerHTML = `<p>It was a draw!😐😐 You both chose ${convertToWord(user)}</p>`;
  }
  
  function game(userChoice) {
    const computerChoice = getComputerChoice();
  
    switch (userChoice + computerChoice) {
      case 'paperrock':
      case 'rockscissors':
      case 'scissorspaper':
        win(userChoice, computerChoice);
        // console.log("user wins");
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        loses(userChoice, computerChoice);
        // console.log("computer wins");
        break;
      case 'rockrock':
      case 'scissorsscissors':
      case 'paperpaper':
        draw(userChoice, computerChoice);
        // console.log("draw");
        break;
    }
  }
  
  function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
  }
  
  main();
  