import React from 'react'
import { useGameState } from './GameState'
import { Board } from './Board'
import { Log } from './Log'
import './../Game.css'

export function Game() {
  const { gameState, current, xIsNext, jumpTo, winner, handleClick } =
    useGameState()

  return (
    <div className="GameContent">
      <div className="Game">
        <div>
          <Board board={current} onClick={handleClick} />
        </div>
        <div className="GameStatus">
          {winner
            ? `WINNER: ${winner}`
            : `CURRENT TURN: ${xIsNext ? 'X' : 'O'}`}
        </div>
      </div>
      <div className="Log">
        <div className="ScoreStatus">X : 1 O : 2</div>
        <Log history={gameState.history} jumpTo={jumpTo} />
      </div>
    </div>
  )
}
