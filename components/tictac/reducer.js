function miniMaxAlgorithm(matrix) {

}
function checkGameStatus(matrix) {

    let backwardSlide = {};
    let forwardSlide = {};
    const straightMatch = !matrix.every((row, i) => {

        let vertical = {};
        if (typeof backwardSlide[matrix[i][i]] === "undefined") {
            backwardSlide[matrix[i][i]] = 0;
        }

        backwardSlide[matrix[i][i]]++;

        const forwardLeftIndex = matrix.length - 1 - i;
        if (typeof forwardSlide[matrix[forwardLeftIndex][i]] === "undefined") {
            forwardSlide[matrix[forwardLeftIndex][i]] = 0;
        }
        forwardSlide[matrix[forwardLeftIndex][i]]++;

        let horizontal = {};
        for (let j = 0; j < matrix.length; j++) {
            if (typeof horizontal[matrix[i][j]] === "undefined") {
                horizontal[matrix[i][j]] = 0;
            }

            horizontal[matrix[i][j]]++;
            if (typeof vertical[matrix[j][i]] === "undefined") {
                vertical[matrix[j][i]] = 0;
            }
            vertical[matrix[j][i]]++;
        }
        if (!horizontal[-1] && (horizontal[0] === matrix.length || horizontal[1] === matrix.length)) {
            return false;
        }
        if (!vertical[-1] && (vertical[0] === matrix.length || vertical[1] === matrix.length)) {
            return false;
        }
        return true;

    });
    if (!backwardSlide[-1] && (backwardSlide[0] === matrix.length || backwardSlide[1] === matrix.length)) {
        return "COMPLETE";
    }
    if (!forwardSlide[-1] && (forwardSlide[0] === matrix.length || forwardSlide[1] === matrix.length)) {
        return "COMPLETE";
    }
    if (straightMatch) {
        return "COMPLETE";
    }



    return "PROGRESS";
}


const reducer = (state, action) => {


    switch (action.type) {
        case 'TRIGGER':

            const gameState = state.gameState.map(row => row.slice())
            const row = action.payload[0];
            const column = action.payload[1];
            if (gameState[row][column])
                gameState[row][column] = state.currentPlayer;

            const currentPlayer = state.currentPlayer === 0 ? 1 : 0;
            const currentState = checkGameStatus(gameState);
            const wonPlayer = state.currentPlayer;
            return { currentPlayer, gameState, currentState, wonPlayer };
        default:
            return state;
    }
}

export default reducer;