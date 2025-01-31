const gameBoard = (function(){
    const board = ["","","","","","","","",""];

    const getBoard = ()=>{
        return board;
    };

    const updateBoard = ()=>{
        //do something
    };

    const resetBoard = ()=>{
        board.fill("");
    };

    return {
        getBoard,
        updateBoard,
        resetBoard
    };
})();

const gameController = (function(){
    const players= [
        {name: 'Krishan', mark:'X'},
        {name: 'Ayush', mark:'O'}
    ];

})();