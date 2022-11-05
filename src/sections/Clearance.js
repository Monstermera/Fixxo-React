import React from 'react'
import { NavLink } from 'react-bootstrap'
import ClearanceWomen from '../assets/images/women-1.png'
import ClearanceMen from '../assets/images/men-1.png'

const ClearanceSection = () => {
  return (
    <section className="clearance container">
        <img className="clear-img-left" src={ClearanceWomen} alt="Woman with her hands in the air" />
        <span className="text-block-1"> 
            <h1>Winter Clearance <br /> Up to 70% Off!</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem apriam eaque ipsa quae ab illo inventore.</p>
            <NavLink>
                <button className="btn-dark">SHOP NOW</button> 
            </NavLink>
        </span>
        <img className="clear-img-right" src={ClearanceMen} alt="Man with coat" />
        <span className="text-block-2">
            <h1>New Arrivals</h1>
            <NavLink>
                <button className="btn-dark">SHOP NOW</button>
            </NavLink>
        </span>
    </section> 
  )
}

export default ClearanceSection