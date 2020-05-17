# The Pig Game with Two Dices

## The rules of the game:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls two dices as many times as he whishes. Each sum of the two dices gets added to his ROUND (Current) score
- BUT, if the player rolls a 1 in any one of the dices, all his ROUND (Current) score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, 
it's the next player's turn
- The first player to reach Winning Score points on GLOBAL score wins the game.
- Default winning score is 100, but can be changed with user input in the game.

## How to run the game:

- You need a live server or local host to run it. Recommended is VSCode Live Server plugin.

### Running the game with VSCode Live Server & Web Browser
- Goto the game folder. Open the 'index.html' file. 
- Then right click on inside the 'index.html' file & select 'run with live server'
- You are ready to play. Enter player 1 & player 2 names and start playing.
- If you wish a different winning score than 100, enter it in the cosole input 'Set Winning Score'

## The framework & languages used in the game
- HTML & CSS to design the user interface
- Javascript DOM Manipulation & Event handler (refer 'app.js' file inside the game folder) 
