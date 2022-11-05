import React from 'react'

const SizeOptions = () => {
  return (
    <div className="size">
        <label>
            <input type="radio" name="options"/>
            <span>S</span>
        </label>

        <label>
            <input type="radio" name="options"/>
            <span>M</span>
        </label>

        <label>
            <input type="radio" name="options"/>
            <span>L</span>
        </label>

        <label>
            <input type="radio" name="options"/>
            <span>X</span>
        </label>
    </div>
  )
}

export default SizeOptions