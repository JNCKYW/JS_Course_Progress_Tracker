'use strict';

//#################################
//SELECTING ELEMENTS
//#################################

//const score0 = document.querySelector(`#score--0`)
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const name0El = document.getElementById(`name--0`);
const name1El = document.getElementById(`name--1`);

//BUTTONS
const btnNewEl = document.querySelector(`.btn--new`);
const btnRollEl = document.querySelector(`.btn--roll`);
const btnHoldEl = document.querySelector(`.btn--hold`);

//##################################
//SETTING STARTING POINTS IN GAME
//##################################

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

function switchingPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
}

//##################################
//ROLLING THE DICE
//##################################

let currentScore = 0;
let activePlayer = 0;
let playing = true;

btnRollEl.addEventListener(`click`, function () {
  if (playing) {
    //1. generate random roll
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${diceValue}.png`;

    //3. check if rolled dice is 1, if it is switch to other player
    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchingPlayer();
    }
  }
});

//##################################
//HOLDING THE SCORE
//##################################

let scores = [0, 0];

btnHoldEl.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document.getElementById(`name--${activePlayer}`).textContent = `WINNER`;
      playing = false;
      diceEl.classList.add(`hidden`);
    } else {
      switchingPlayer();
    }
  }
});

//##################################
//NEW GAME
//##################################

btnNewEl.addEventListener(`click`, function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
  document.getElementById(`name--${activePlayer}`).textContent = `Player ${
    activePlayer + 1
  }`;

  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  if (player1El.classList.contains(`player--active`)) {
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});
