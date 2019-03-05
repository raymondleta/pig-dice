# PIG DICE

This website using html forms and javascript allows users to play the pigdice game, giving them points with the first one to get to 100 points being the winner.

Version 1.0.0

# Contributors
Raymond Gitonga

## Description
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

## BDD
|Behaviour   	|  Score Input  	|   Output	|   	
|---	|---	|---	|
|User gets 1 point   	|1 |"Not your turn"|   	
|User gets more than 1 point |>1|Player can continue playing	|   
|User gets to 100 points first	|100 | User is the winner	|   	

## Setup Installation Requirement
To access this project, you will need to access it from github then clone it.
Then run 'git clone https://github.com/raymondleta/pig-dice' on your terminal

## Demo website

To test this website here is a live demo of the site https://raymondleta.github.io/pig-dice/
