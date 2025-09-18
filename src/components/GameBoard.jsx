import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const { square, player } = turn;
        const { row,col} = square;

        gameBoard[row][col] = player;
    }  

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowKey) => (
                <li key={rowKey}>
                    <ol>
                        {row.map((col, colKey) => (
                            <li key={colKey}>
                                <button onClick={() => onSelectSquare(rowKey, colKey)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}