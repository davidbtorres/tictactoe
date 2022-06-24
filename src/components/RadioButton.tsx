import React from 'react'
import './RadioButton.css'

interface Props {
  isChecked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

export const RadioButton = (props: Props) => {
  return (
    <div>
      <label className="RadioButtonLabel" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        type="radio"
        id={props.label}
        checked={props.isChecked}
        onChange={props.handleChange}
      ></input>
    </div>
  )
}
