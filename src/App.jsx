import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player isActive={activePlayer === 'X'} name="Player 1" symbol="X" />
            <Player isActive={activePlayer === 'O'} name="Player 2" symbol="O" />
        </ol>
        <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  )
}

export default App
