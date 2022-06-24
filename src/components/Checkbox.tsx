import React from 'react'
import './RadioButton.css'

interface Props {
  isChecked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

export const Checkbox = (props: Props) => {
  return (
    <div>
      <label className="RadioButtonLabel" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        type="Checkbox"
        id={props.label}
        checked={props.isChecked}
        onChange={props.handleChange}
      ></input>
    </div>
  )
}
