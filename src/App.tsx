import React from 'react'
import './App.css'
import { useState } from 'react'
import { Game } from './components/Game'

function App() {
  const [activeGame, setActiveGame] = useState<boolean>(false)
  return (
    <div>
      <div>
        {activeGame && (
          <button
            className="BackButton"
            onClick={() => setActiveGame(!activeGame)}
          >
            Back
          </button>
        )}
      </div>
      <div>{activeGame && <Game />}</div>
      <div className="AppContent">
        {!activeGame && <h2 className="Title">TicTacToe</h2>}
        {!activeGame && (
          <div className="TitleButtonContent">
            <button
              className="TitleButton"
              onClick={() => setActiveGame(!activeGame)}
            >
              PLAY
            </button>
            <button
              className="TitleButton"
              onClick={() => setActiveGame(!activeGame)}
            >
              SET UP GAME
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
