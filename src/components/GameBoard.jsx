import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleRow(rowKey, colKey) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowKey][colKey] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowKey) => (
                <li key={rowKey}>
                    <ol>
                        {row.map((col, colKey) => (
                            <li key={colKey}>
                                <button onClick={() => handleRow(rowKey, colKey)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}