var options = ['rock', 'paper','scissors'];
function game() {
    var playerChoice = getPlayerChoice();
    var compChoice = getCompChoice();
    compare(playerChoice, compChoice);
  }

  function getPlayerChoice() {
    'use strict';
    var choice;
    do {
        var arg = window.prompt("Please select: rock, paper, or scissors").toLowerCase();
    } while (options.indexOf(arg) === -1)
    return arg;
}

function getCompChoice() {
    'use strict';
    var rand = Math.floor(Math.random() * Math.floor(3));
    return options[rand];
}

function compare(playerChoice,compChoice)
{
    if ((compChoice === 'rock' && playerChoice === 'paper') || (compChoice === 'paper' && playerChoice === 'sicssors') || (compChoice === 'sicssors' && playerChoice === 'rock')) {
        win(playerChoice, compChoice);
    } 
    else if(compChoice == playerChoice)
    {
        tie(playerChoice, compChoice);
    }
    else
    {
        lose(playerChoice, compChoice);
    }
}

function win(playerChoice, compChoice) {
    alert("Your choice is "+playerChoice+", and computer choice is " +compChoice + " Win! ");
  }
  
  function lose(playerChoice, compChoice) {
    alert("Your choice is "+playerChoice+", and computer choice is " +compChoice+ " Loose! ");
  }
  
  function tie(playerChoice, compChoice) {
    alert("Your choice is "+playerChoice+", and computer choice is " +compChoice+ " Tie! ");
  }
  
game()