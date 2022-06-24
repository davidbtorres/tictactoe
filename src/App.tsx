import React from 'react'
import './App.css'
import { useState } from 'react'
import { Game } from './components/Game'
import { Checkbox } from './components/Checkbox'

function App() {
  const [activeGame, setActiveGame] = useState<boolean>(false)
  const [setupGame, setSetupGame] = useState<boolean>(false)
  const [isCheckedPlayer, setIsCheckedPlayer] = useState<boolean>(true)
  const handleChangePlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedPlayer(e.target.checked)
    setIsCheckedComputer(!e.target.checked)
  }

  const [isCheckedComputer, setIsCheckedComputer] = useState<boolean>(false)
  const handleChangeComputer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedComputer(e.target.checked)
    setIsCheckedPlayer(!e.target.checked)
  }
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
        {!activeGame && !setupGame && (
          <div className="TitleButtonContent">
            <button
              className="TitleButton"
              onClick={() => setActiveGame(!activeGame)}
            >
              PLAY
            </button>
            <button
              className="TitleButton"
              onClick={() => setSetupGame(!setupGame)}
            >
              SET UP GAME
            </button>
          </div>
        )}
        {!activeGame && setupGame && (
          <div className="SetupContent">
            <Checkbox
              handleChange={handleChangePlayer}
              isChecked={isCheckedPlayer}
              label="VS Player"
            ></Checkbox>
            <Checkbox
              handleChange={handleChangeComputer}
              isChecked={isCheckedComputer}
              label="VS Computer"
            ></Checkbox>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
