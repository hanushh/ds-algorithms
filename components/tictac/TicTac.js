import React, { useReducer } from 'react';
import reducer from './reducer';

const initialState = {
    currentPlayer: 0,
    gameState: [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ]
};


export default function TicTac() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (<div>

        {state.gameState.map((row, rowId) => <div key={'row' + rowId}>
            {row.map((column, columnId) => <button style={{padding:"10px", display:"inline-block", width:"40px"}} key={'column' + columnId} onClick={e => {
                e.preventDefault();
                dispatch({
                    type: 'TRIGGER',
                    payload: [rowId, columnId]
                })
            }}>{(column > -1) ? column : '.'}</button>)}
        </div>)}
    </div>);

}