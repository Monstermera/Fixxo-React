import React from 'react'
import { NavLink } from 'react-router-dom'

const SpecialityCard = ({speciality}) => {

  return (
    <div className="speciality-flex">
      <div className="flex-left">
        <h5>{speciality.name}</h5>
        <NavLink to="">{speciality.text}<i className="fa-solid fa-greater-than"></i></NavLink>
      </div>
      <div className="flex-right">
        <img src={speciality.img} alt={speciality.name} />
      </div>
    </div>
  )
}

export default SpecialityCard