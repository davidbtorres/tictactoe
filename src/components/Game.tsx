import React from 'react'
import { useGameState } from './GameState'
import { Board } from './Board'
import { Log } from './Log'
import './../Game.css'

export function Game() {
  const { gameState, current, xIsNext, jumpTo, winner, handleClick } =
    useGameState()

  let xScore = 0
  let oScore = 0

  function checkForWinner() {
    if (winner) {
      if (winner === 'X') {
        xScore++
      } else {
        oScore++
      }
      return winner
    }
    return null
  }

  return (
    <div>
      <div className="GameContent">
        <div className="Game">
          <div>
            <Board board={current} onClick={handleClick} />
          </div>
        </div>
        <div className="Log">
          <div className="GameStatus">
            {checkForWinner()
              ? `WINNER: ${winner}`
              : `CURRENT TURN: ${xIsNext ? 'X' : 'O'}`}
          </div>
          <Log history={gameState.history} jumpTo={jumpTo} />
        </div>
      </div>
      <div className="ScoreKeeper">
        <div className="PlayerScore">
          <div className="ScoreStatus">PLAYER (X) :</div>
          <div className="ScoreStatus">{xScore}</div>
        </div>
        <div className="PlayerScore">
          <div className="ScoreStatus">COMPUTER (O) :</div>
          <div className="ScoreStatus">{oScore}</div>
        </div>
      </div>
    </div>
  )
}
