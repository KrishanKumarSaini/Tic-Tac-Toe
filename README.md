# Tic-Tac-Toe Game

A classic Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript.  This project provides a simple and engaging way to play the game in your browser.

## Table of Contents

*   [Features](#features)
*   [How to Play](#how-to-play)
*   [Technologies Used](#technologies-used)
*   [Project Structure](#project-structure)
*   [Setup and Installation](#setup-and-installation)
*   [Credits](#credits)
*   [License](#license)

## Features

*   Two-player game mode.
*   Clear visual representation of the game board.
*   Displays current player's turn.
*   Detects and announces the winner or a draw.
*   Input validation to prevent illegal moves (e.g., playing on an already occupied cell).
*   A "Start Game" button to begin a new game.
*   A "Reset Game" button to restart the game.
*   Player name input fields.
*   Basic styling using CSS.

## How to Play

1.  Enter names of the players in Player 1 and Player 2 input fields.
2.  Click the "Start Game" button.
3.  Players take turns clicking on empty cells on the game board to place their mark ('X' or 'O').
4.  The game automatically detects a winner (three in a row horizontally, vertically, or diagonally) or a draw (all cells filled).
5.  The result is displayed on the screen.
6.  Click the "Reset Game" button to start a new game.

## Technologies Used

*   **HTML:**  Provides the structure and elements of the game board and interface.
*   **CSS:**  Styles the game board, buttons, and text for a visually appealing experience.
*   **JavaScript:** Implements the game logic, handles user input, updates the game board, and determines the winner.  The core game logic is contained in the `gameBoard` and `gameController` modules.

## Setup and Installation

1.  Clone the repository to your local machine:

    ```bash
    git clone [your repository URL]
    ```

2.  Navigate to the project directory:

    ```bash
    cd tic-tac-toe
    ```

3.  Open the `index.html` file in your web browser.

## Code Explanation (Highlights)

The `script.js` file uses the module pattern to encapsulate the game logic.  Here are some key parts:

*   **`gameBoard`:** This module keeps track of the board's state. The `updateBoard` function ensures that a cell can only be marked once.
*   **`gameController`:** This module manages the game flow. The `makeMove` function updates the board, checks for a winner or draw, and switches to the next player.  The `checkWinner` function iterates through winning combinations to determine if a player has won. The `checkDraw` function verifies if all cells are occupied without a winner.
*   **Event Handling:**  Event listeners are attached to each cell to capture player clicks. The `startGame` function initializes the game with player names and randomly selects the first player.

## Credits

*   This project was created with the help of TOP course.
