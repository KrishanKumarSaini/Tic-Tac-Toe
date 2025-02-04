const gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => {
        return board;
    };

    const updateBoard = (index, mark) => {
        const updatedBoard = [...board];

        if (updatedBoard[index] === '') {
            updatedBoard[index] = mark;
            board = updatedBoard;

            return board[index];
        } else {
            return;
        }
    };

    const resetBoard = () => {
        return board = ["", "", "", "", "", "", "", "", ""];
    };

    return {
        getBoard,
        updateBoard,
        resetBoard
    };
})();


const gameController = (function () {

    let currentPlayer;
    let gameActive = false;
    let players = [];
    const startBtn = document.getElementById('start-btn');
    const cells = document.querySelectorAll('.cell');
    const messages = document.querySelector('.messages');
    const resetBtn = document.getElementById('reset-btn');
    const player1Input = document.getElementById('player1-name');
    const player2Input = document.getElementById('player2-name');


    const createPlayer = (name, mark) => {
        return { name, mark };
    };


    //Deals with player's turn
    function makeMove(index) {

        if (!gameActive) {
            messages.textContent = 'Game Ended. Please start new game.';
            return false;
        }

        const updatedValue = gameBoard.updateBoard(index, currentPlayer.mark);

        if (index > 8) {
            messages.textContent = 'Invalid';

        }

        if (updatedValue === undefined) {
            messages.textContent = 'Already taken, choose another place';

            return false;
        } else {

            if (checkWinner()) {
                gameActive = false;

                return true;
            }

            if (checkDraw()) {
                gameActive = false;

                return true;
            }

            const nextPlayer = (players.indexOf(currentPlayer) + 1) % players.length;
            currentPlayer = players[nextPlayer];
            messages.textContent = `${currentPlayer.name}'s turn`;

            return true;
        }
    }

    //Checks if any Winner
    function checkWinner() {
        const board = gameBoard.getBoard();

        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of combos) {
            const [a, b, c] = combo;

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                messages.textContent = `${currentPlayer.name} has won!`;

                return true;
            }
        }
        return false;
    }

    //Check if there is a Draw
    function checkDraw() {
        const board = gameBoard.getBoard();

        if ((board[0] === 'X' || board[0] === 'O') &&
            (board[1] === 'X' || board[1] === 'O') &&
            (board[2] === 'X' || board[2] === 'O') &&
            (board[3] === 'X' || board[3] === 'O') &&
            (board[4] === 'X' || board[4] === 'O') &&
            (board[5] === 'X' || board[5] === 'O') &&
            (board[6] === 'X' || board[6] === 'O') &&
            (board[7] === 'X' || board[7] === 'O') &&
            (board[8] === 'X' || board[8] === 'O')) {
            messages.textContent = 'Game Draw!!! Please start new game.';
            return true;
        }
        return false;
    }

    //Deals with starting the game
    function startGame() {

        if (player1Input.value === '' && player2Input.value === '') {
            document.getElementById('gamedisplay').style.display = 'none';
            document.querySelector('.player-inputs').style.display = 'block';
        } else {
            document.getElementById('gamedisplay').style.display = 'block';
            document.querySelector('.player-inputs').style.display = 'none';


            const player1Name = player1Input.value.trim() || 'Player 1';
            const player2Name = player2Input.value.trim() || 'Player 2';



            gameBoard.resetBoard();
            renderBoard();

            players = [
                createPlayer(player1Name, 'X'),
                createPlayer(player2Name, 'O')
            ];

            const randomNo = Math.floor(Math.random() * 2);
            currentPlayer = players[randomNo];
            messages.textContent = `First Player is ${currentPlayer.name} with mark ${currentPlayer.mark}`;

            gameActive = true;

            player1Input.value = '';
            player2Input.value = '';
        }
    }


    //displaying the game board
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });


    function handleCellClick(e) {
        const index = parseInt(e.target.getAttribute('data-index'));
        if (gameController.makeMove(index)) {
            renderBoard();
        };
    }

    function renderBoard() {
        const board = gameBoard.getBoard();
        cells.forEach((cell, index) => {
            cell.textContent = board[index]
        });
    }


    //for start the game
    startBtn.addEventListener('click', startGame);

    //for resetting the game board
    resetBtn.addEventListener('click', startGame);


    return {
        startGame,
        makeMove,
        checkDraw,
        checkWinner
    }

})();

//calling startGame to run the game
gameController.startGame();