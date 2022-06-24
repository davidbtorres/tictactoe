import React from 'react'
import { useState } from 'react'
import { RadioButton } from './RadioButton'
import { Checkbox } from './Checkbox'
import './SetupPage.css'

interface SetupProps {
  startGame: () => void
}

export const Setup = (Props: SetupProps) => {
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

  const [isCheckedLog, setIsCheckedLog] = useState<boolean>(true)
  const handleChangeLog = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedLog(!isCheckedLog)
  }
  return (
    <div className="SetupContentParent">
      <div className="SetupContent">
        <RadioButton
          handleChange={handleChangePlayer}
          isChecked={isCheckedPlayer}
          label="VS Player"
        ></RadioButton>
        <RadioButton
          handleChange={handleChangeComputer}
          isChecked={isCheckedComputer}
          label="VS Computer"
        ></RadioButton>
      </div>
      <div className="SetupContent">
        <Checkbox
          handleChange={handleChangeLog}
          isChecked={isCheckedLog}
          label="Allow Log Jumps"
        ></Checkbox>
      </div>
      <div className="StartGameButtonParent">
        <button className="StartGameButton" onClick={Props.startGame}>
          Start Game
        </button>
      </div>
    </div>
  )
}
