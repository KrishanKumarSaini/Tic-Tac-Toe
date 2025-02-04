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
*   Responsive design (Optional - add this if your CSS supports it).

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

## Project Structure

The project consists of the following files:

*   `index.html`: The main HTML file containing the structure of the game.
*   `style.css`:  The CSS file containing the styles for the game.
*   `script.js`: The JavaScript file containing the game logic. It's structured as follows:

    *   **`gameBoard` Module:**
        *   Manages the game board state (represented as an array).
        *   Provides functions to get the board state, update a cell with a mark, and reset the board.
    *   **`gameController` Module:**
        *   Manages the game flow, player turns, and win/draw conditions.
        *   Includes functions to:
            *   Create player objects (with names and marks).
            *   Handle player moves (`makeMove`).
            *   Check for a winner (`checkWinner`).
            *   Check for a draw (`checkDraw`).
            *   Start and reset the game (`startGame`).
        *   Attaches event listeners to the cells and buttons to handle user interactions.

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

*   This project was created by [Your Name/GitHub Username].

## License

This project is licensed under the [Choose a license, e.g., MIT License] - see the `LICENSE` file for details (if you have one).  If you don't have a license file, consider adding one (e.g., the MIT license is permissive and easy to use).

---

**To customize this README:**

*   **Replace placeholders:**  Fill in `[your repository URL]`, `[Your Name/GitHub Username]`, and `[Choose a license, e.g., MIT License]` with your actual information.
*   **Add a live demo link:** If you have deployed the game online, include a link to the live demo.
*   **Include screenshots or GIFs:** Visuals can greatly enhance your README.
*   **Add more details about the code:**  If there are specific algorithms or techniques you used that are interesting, explain them further.
*   **Mention any known issues or limitations:**  Be transparent about any problems with the game.
*   **Add instructions for contributing:**  If you're open to contributions, explain how others can contribute to the project.
*   **Update the "Technologies Used" section:** If you used any external libraries or frameworks, list them here.
*   **Include Source Maps information** If you've used terser with name mangling you'll need to add instructions on using the `.map` files for debugging purposes.

This README provides a good starting point.  Tailor it to your specific project and audience. Good luck!