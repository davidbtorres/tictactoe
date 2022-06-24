import React from 'react'
import './Checkbox.css'

interface Props {
  isChecked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

export const Checkbox = (props: Props) => {
  return (
    <div>
      <label className="CheckboxLabel" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        type="checkbox"
        id={props.label}
        checked={props.isChecked}
        onChange={props.handleChange}
      ></input>
    </div>
  )
}
