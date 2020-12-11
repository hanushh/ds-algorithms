
function miniMaxAlgorithm(matrix){



}


const reducer = (state, action) => {


    switch (action.type) {
        case 'TRIGGER':
            
            const gameState = state.gameState.map(row => row.slice())
            const row = action.payload[0];
            const column = action.payload[1];
            if(gameState[row][column])
            gameState[row][column] = state.currentPlayer;

            const currentPlayer = state.currentPlayer === 0 ? 1 : 0;

            return { currentPlayer, gameState };
        default:
            return state;
    }
}

export default reducer;