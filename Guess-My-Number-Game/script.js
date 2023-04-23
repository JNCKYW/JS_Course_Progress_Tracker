'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;

function changeMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

const highScores = [];

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  //Jak ktoś nic nie wpisze do input to poniższy kod się wykona
  //jak ktoś nic nie wpisze do .guess to value będzie wynosić = 0
  //0 to falsy value czyli .guess to FALSE
  //chcemy żeby kod się wykonał więc żeby IF zadziałał to dajemy !guess czyli TRUE
  if (!guess) {
    changeMessage(`No number inputed...`);
    //
    //
  } else if (guess === secretNumber && score > 1) {
    changeMessage(`Correct Number!`);
    highScores.push(score);
    document.querySelector(`.highscore`).textContent = Math.max(...highScores);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    //
    //
  } else if (guess !== secretNumber && score > 1) {
    changeMessage(secretNumber > guess ? `Too low...` : `Too high`);
    score--;
    document.querySelector(`.score`).textContent = score;
  }
  /*
  } else if (guess > secretNumber && score > 1) {
    document.querySelector(`.message`).textContent = `Too high...`;
    score--;
    document.querySelector(`.score`).textContent = score;
    //
    //
  } else if (guess < secretNumber && score > 1) {
    document.querySelector(`.message`).textContent = `Too low...`;
    score--;
    document.querySelector(`.score`).textContent = score;
    */
  //
  //
  else {
    changeMessage(`You Lose :(`);
    document.querySelector(`.score`).textContent = 0;
    document.querySelector(`body`).style.backgroundColor = `red`;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.guess`).value = undefined;
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  changeMessage(`Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
});
