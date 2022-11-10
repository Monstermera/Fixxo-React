import React, {useState} from 'react'

const SelectButton = () => {

  return (
    <select className="form-select">
        <option defaultValue>Choose an option</option>
        <option value="1">Black</option>
        <option value="2">Navy blue</option>
        <option value="2">Grey</option>
        <option value="3">White</option>
        <option value="4">Red</option>
    </select>

  )
}

export default SelectButton