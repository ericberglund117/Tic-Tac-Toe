# Tic-Tac-Toe
Final solo project for Turing Mod1
A Javascript driven project by Eric Berglund.

## Introduction

- For this project, I had to create a Tic Tac Toe game primarily using the data model to update the DOM. In this project, the is an index.html, a styling.css, and three javaScript files (player, game, and main). Each js file includes different functionality based on the instantiation of players into the game class. 

- In order to play the game, the user needs a partner or they can play as both players (X or O). The first player will click on a square to place their mark, then the next player goes until a win occurs or there is a draw. A win occurs when the same mark is placed three times horizontally, vertically, or diagonally. After each win or draw, the board will send an alert, have a 2 second timeout, and then the game will be ready to play again. The player's wins are tracked on each side of the game board and the win count will be updated and stored in localStorage so they can hold bragging rights. 

## Progression
- Start game board
![image](https://user-images.githubusercontent.com/64567312/89370950-3543c780-d69f-11ea-899b-77dac4464e2c.png)

- In this part of the project, the html and the styling was complete but was later updated using the data model. 

- There is where you'll see empty spaces for players to put their marks and play the game.

- In this part of the project, I was building the functionality for the game like checking which player is up, playing their mark, checking for a win/draw, 

- Placing marks
![image](https://user-images.githubusercontent.com/64567312/89370420-e6e1f900-d69d-11ea-9798-57d600f5ef6b.png)

- In this part of the game, the player can identify which square to put their mark and upon a click event, the X or O is displayed. 

- This is done through the playMark function.

- You can also see the display at the top of the game board telling you whose turn is up. 

- Player wins
![image](https://user-images.githubusercontent.com/64567312/89370333-b39f6a00-d69d-11ea-95e1-17d775f41865.png)

- In this part of the project, the player with 3 marks in a row is crowned the winner. 

- I set up a function to check for the winner and if there was one, then the game board gets an alert that the player won and the board is set to a timeout for 2 seconds before the next game. During this, the cells are disabled until the next game starts. 

- The player's win score is also incremented if they won.

- LocalStorage
![image](https://user-images.githubusercontent.com/64567312/89370346-be59ff00-d69d-11ea-896b-5aab53b578b9.png)

- On this screenshot, you can see the game board is reset to empty and, but the player wins are incrementing if they won. 

- This screenshot was taken after a reload so the player's score is still present. This is due to their wins being saved in localStorage. 

## Key Concepts and Challenges

__Key Concepts__

- class creation
- instantiating a class
- Creating a new instance of a class and passing an object through as an argument
- object oriented pogramming

__Challenges__

- Checking for wins
- Creating and updating win counter per player
- Restarting the game after a win or draw

- These were challenges because the checking for wins function would iterate through the players moves and the winning combos, but it wouldn't define a winner if those arrays matched. The others were an issue because I couldn't update those functions if a winner was not detected. 


## Contributors


Eric Berglund - Main

Hannah Hudson - Evaluator

Eric Fitzsimons - Mentor (Code review - checkWins function)

Dylan Cruise - Data Consultant (Code review - localStorage)

## Acknowledgements and Resources

I would like to acknowledge our instructors, Hannah Hudson, Casey DallaValle, and Scott Ertmer for their guidance and help during the course of the mod. I would also like to thank the other members the 2006FE cohort for creating a dynamic and inclusive atmosphere which fosters learning and embraces fun while simultaneously undergoing significant challenges and growth. Thank you to my mentor Eric for a code review and to my friend Dylan for also reviewing my code at the end. 

__resources__

 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 
 - https://css-tricks.com/almanac/selectors/a/attribute/
 
 - https://frontend.turing.io/lessons/module-1/json-and-localstorage.html

## Additional information Concerning the Project

Project spec & rubric can be found here: https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html
