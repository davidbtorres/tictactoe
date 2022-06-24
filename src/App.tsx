import React from 'react'
import './App.css'
import { useState } from 'react'
import { Game } from './components/Game'
import { Setup } from './components/SetupPage'

function App() {
  const [activeGame, setActiveGame] = useState<boolean>(false)
  const [setupGame, setSetupGame] = useState<boolean>(false)

  const goToTitle = () => {
    setActiveGame(false)
    setSetupGame(false)
  }
  const goToSetup = () => {
    setActiveGame(false)
    setSetupGame(true)
  }
  const goToGame = () => {
    console.log('Button Pressed')
    setActiveGame(true)
    setSetupGame(false)
  }
  return (
    <div>
      <div>
        {(activeGame || setupGame) && (
          <button className="BackButton" onClick={() => goToTitle()}>
            Back
          </button>
        )}
      </div>
      <div>{activeGame && <Game />}</div>
      <div className="AppContent">
        {!activeGame && <h2 className="Title">TicTacToe</h2>}
        {!activeGame && !setupGame && (
          <div className="TitleButtonContent">
            <button className="TitleButton" onClick={() => goToGame()}>
              PLAY
            </button>
            <button className="TitleButton" onClick={() => goToSetup()}>
              SET UP GAME
            </button>
          </div>
        )}
        {!activeGame && setupGame && <Setup startGame={() => goToGame()} />}
      </div>
    </div>
  )
}

export default App
