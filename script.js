'use strict';

// DOM - document object model
// DOM isn't a part of JavaScript
// DOM and DOM methods and properties are parts of the WEB APIs
// The WEB APIs are like libraries (written in JS) that browsers implement, and we can access from our JS code
// WEB APIs - DOM, Timers, Fetch...

/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);

//move line up/down -> ctrl + shift + up/down

 */
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function(score) {
  document.querySelector('.score').textContent = score;
};

const calcRand = function(){
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = calcRand();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) { // when there is no input
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) { // when player wins
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347'; // inline style (doesn't change css)
    document.querySelector('.number').style.width = '30rem'; // always assign to string
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage((guess <= secretNumber) ? '📉 Too low!' : '📈 Too high!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('💥 You lost the game!');
    }
  }
  // else if (guess >= secretNumber) { // when guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //   }
  // } else if (guess <= secretNumber) { // when guess is too low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //   }
  // }

});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = calcRand();
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
