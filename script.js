'use strict';
// // data manipulation (DOM)
// console.log(document.querySelector('.message').textContent); //this is how element is selected by js
// document.querySelector('.message').textContent = ' you guessed it right 👌'; // manipulate text with id message
// console.log(document.querySelector('.message').textContent); //text changed
// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//ON CLICK EVENTS
document.querySelector('.guess').value = 0; // default value as 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //we can put any value in guess box then
  //after clicking check btn it will be diplayed on console
  console.log(typeof guess, guess);

  //when no number entered
  if (!guess) {
    displayMessage('no number! 🚫');
  }
  //When Right Number guessed
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = guess;
    displayMessage('You Guessed it Right 👌\nGame developed By Prag dev singh');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guessed number > random number
  else if (guess > secretNumber) {
    greaterthanZero('Greater');
  }
  //when guessed number < random number
  else if (guess < secretNumber) {
    greaterthanZero('Smaller');
  }
});

//Again button used to reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});

//Function used above to Reduce code length
function greaterthanZero(s) {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector(
      '.message'
    ).textContent = `You Guessed a ${s} Number 👎`;
  } else {
    displayMessage('GAME OVER ☹️');
  }
}

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}
