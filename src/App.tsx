import React from 'react'
import './App.css'
import { useState } from 'react'
import { Game } from './components/Game'

function App() {
  const [activeGame, setActiveGame] = useState<boolean>(false)
  return (
    <div>
      <div>{activeGame && <Game />}</div>
      <div className="AppContent">
        <h2 className="Title">TicTacToe</h2>
        <button onClick={() => setActiveGame(!activeGame)}>PLAY</button>
      </div>
    </div>
  )
}

export default App
