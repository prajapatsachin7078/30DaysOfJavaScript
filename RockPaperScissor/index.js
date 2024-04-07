const btns = document.querySelectorAll('button');
const user = document.querySelector('#user-score');
const computer = document.querySelector('#computer-score');
const res =  document.querySelector('#res');


let userScore = 0;
let computerScore = 0;
var choices = ["rock", "paper", "scissors"];

// function to update the score and choices
function Play(userChoice) {
    let computerChoice = Computer();
    console.log('computer: ' + computerChoice);
    console.log('user: ' + userChoice);
    if (userChoice === computerChoice) {
        res.textContent = 'The Game has been tied';
        return;
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'rock') {
        userScore++;
        res.textContent = 'You have Won the game';
    } else {
        res.textContent = 'You have lost the game';
        computerScore++;
    }
    user.textContent = userScore;
    computer.textContent = computerScore;
}

// computer selects random choice
function Computer() {
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const userChoice = e.target.dataset.value; // Fetching the text content of the button
        Play(userChoice);
    });
});
