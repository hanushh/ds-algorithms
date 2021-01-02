import React, { useReducer } from 'react';
import reducer from './reducer';

const gameState = [];
const rows = 3;
for (let i = 0; i < rows; i++) {
    gameState.push(Array(rows).fill(-1, 0, rows));
}


const initialState = {
    currentPlayer: 0,
    currentState: "START",
    gameState,
    wonPlayer: -1
};


export default function TicTac() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const style = { padding: "10px", display: "inline-block", width: "40px" };

    return (<div>
        {state.currentState === "COMPLETE" && <div>Player {state.wonPlayer} has won</div>}
        {state.gameState.map((row, rowId) => <div key={'row' + rowId}>
            {row.map((column, columnId) => <button disabled={(state.currentState === "COMPLETE" || (column > -1))} style={style} key={'column' + columnId} onClick={e => {
                e.preventDefault();
                dispatch({
                    type: 'TRIGGER',
                    payload: [rowId, columnId]
                })
            }}>{(column > -1) ? column : '.'}</button>)}
        </div>)}
    </div>);

}