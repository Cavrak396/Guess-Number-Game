'use strict';

const check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const again = document.querySelector('.again');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Choose number!');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('To high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose!');
      document.querySelector('body').style.backgroundColor = 're#FF0000';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('To low!');
      document.querySelector('body').style.backgroundColor = '';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose!');
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

again.addEventListener('click', function () {
  displayMessage('Start quessing');
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
