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
        board = ["", "", "", "", "", "", "", "", ""];
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

    const createPlayer = (name, mark) => {
        return { name, mark };
    };



    function makeMove(index) {

        if(!gameActive){
            console.log('Game Ended. Please start new game.');
            return false;   
        }

        const updatedValue = gameBoard.updateBoard(index, currentPlayer.mark);

        if(index>8){
            console.log('Invalid');
            
        }
        
        if (updatedValue === undefined) {
            console.log('Already taken, choose another place');

            return false;
        } else {

            if(checkWinner()){
                gameActive = false;

                return true;
            }

            if(checkDraw()){
                gameActive = false;

                return true;
            }

            const nextPlayer = (players.indexOf(currentPlayer) + 1) % players.length;
            currentPlayer = players[nextPlayer];
            console.log(`${currentPlayer.name}'s turn`);

            return true;
        }
    }


    function checkWinner() {
        const board = gameBoard.getBoard();

        const combos = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];

        for(const combo of combos){
            const [a,b,c] = combo;

            if(board[a] && board[a]===board[b] && board[a]===board[c]){
                console.log(`${currentPlayer.name} has won!`);
                
                return true;
            }
        }
        return false;
    }

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
            console.log('Game Draw!!!');
            return true;
        }
        return false;
    }

    function startGame() {
        gameBoard.resetBoard();

        players = [
            createPlayer('Krishan', 'X'),
            createPlayer('Ayush', 'O')
        ];

        const randomNo = Math.floor(Math.random() * 2);
        currentPlayer = players[randomNo];
        console.log(`First Player is ${currentPlayer.name} with mark ${currentPlayer.mark}`);

        gameActive = true;
    }


    return {
        startGame,
        makeMove,
        checkDraw,
        checkWinner
    }

})();