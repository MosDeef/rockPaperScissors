const getUserChoice = function() {
    let userInput = prompt('Rock, paper, or Scissors?');
    userInput = userInput.toLowerCase();
    return userInput;
};
// shall. we. play. a. game?
const getComputerChoice = function() {
    let comNum = Math.floor(Math.random() * 3);
    if (comNum === 0) {
        return 'rock';
    } else if (comNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie. Everyone go home.";
// up, up, down, down...
    } else if (userChoice === 'bomb') {
        return "User wins!! But at what cost?";
    }  else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
        return "User wins!";
        } else {
        return "Technology triumphs :(";
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
        return "User wins!";
        } else {
        return "Technology triumphs :(";
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return "User wins!";

    } else {
        return "Technology triumphs :(";
        }
    }
};
// let's see it in action
const playGame = function() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`User picks ${userChoice}, The Computer picks ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
