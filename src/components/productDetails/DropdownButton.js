import React, {useState} from 'react'

const DropdownButton = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");
    const options = ['Black', 'Navy blue', 'Grey', 'White', 'Red', 'Purple']

  return (
    <div className="dropdown">
        <button 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            onClick={(e) =>
            setIsActive(!isActive)}>
                {selected}
            <option value="" disabled>
                Choose an option
                <i className="fa-regular fa-chevron-down fa-xs"></i> 
            </option>
        </button>
        <ul className="dropdown-menu">
            {options.map((option) => (
            <li><a onClick={(e) => {
                setSelected(option)
                setIsActive(false)
            }}
            className="dropdown-item" to="">{option}</a></li>
            ))}
        </ul>
    </div>
  )
}

export default DropdownButton