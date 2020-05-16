/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND (Current) score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, 
it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, dice, gamePlaying;

// Taking user inputs for player names
var player1 = prompt('Enter Player 1 Name. (Don\'t use long ones');
var player2 = prompt('Enter Player 1 Name. (Don\'t use long ones');
var names = [player1, player2]

//initializing the scores to zero & selecting the first player
init();





//while rolling the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying) {

    //Generate Random number for the dice rolled each time
    dice = Math.floor(Math.random()*6) + 1;
    
    //display the dice image as per the rolled dice value
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';



    // Update the round score (current score) if the rolled number was not 1
    if (dice !== 1){
      // Add score
      roundScore += dice;
      //show score to the current score section
      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
      // pass on to the nex player if 1 comes as the dice value after rolling
      nextPlayer();

    }

  }
  
});

// when hold is pressed
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying){

    // Add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI of global score
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];


    // check if player won the game

    if (scores[activePlayer] >= 100){
      document.querySelector('#name-' + activePlayer).textContent = names[activePlayer] + ' is the WINNER';
      //stop the dice image
      document.querySelector('.dice').style.display = 'none';
      //add the winner class
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      //remove the active player class
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {

    // Pass on to the next player
    nextPlayer();

    }

  }

});





function nextPlayer() {
  // Select the Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  //make current score zero
  roundScore = 0;
  // set current scores of the both players to zero
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // toggle the active class
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // turn off the dice image
  document.querySelector('.dice').style.display = 'none';
};


// when new game button is pressed
document.querySelector('.btn-new').addEventListener('click', init)


// initializing function
function init() {

  gamePlaying = true;

  scores = [0,0];
  activePlayer = 0;
  roundScore =  0;
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('#name-0').textContent = names[0];
  document.querySelector('#name-1').textContent = names[1];
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

};