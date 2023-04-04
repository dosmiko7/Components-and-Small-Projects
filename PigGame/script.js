'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Starting values
let currentScore, activePlayer, playing;
const scores = [0, 0];

// Reset values to start point
const init = function(){
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add('hidden');

  for (const player in scores) scores[player] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player0Element.classList.add('player--active');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--active', 'player--winner');

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
}
init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

// Rolling dice
btnRoll.addEventListener('click', function(){
  if (playing) {
    // 1. Generating a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNumber}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (diceNumber !== 1) {
      // Add diceNumber to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Holding and adding points to active player's score
btnHold.addEventListener('click', function(){
  if(playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. Check if player's score is === 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      const winner = document.querySelector(`.player--${activePlayer}`);
      winner.classList.add('player--winner');
      winner.classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Button to reset the game
btnNew.addEventListener('click', init);

