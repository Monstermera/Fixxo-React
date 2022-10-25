import React from 'react'
import ClearanceWomen from '../assets/images/women-1.png'
import ClearanceMen from '../assets/images/men-1.png'

const ClearanceSection = () => {
  return (
      <section className="clearance container">
        <img src={ClearanceWomen} alt="placeholder-1" />
        <span className="text-block-1"> 
            <h1>Winter Clearance <br /> Up to 70% Off!</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem apriam eaque ipsa quae ab illo inventore.</p>
            <a href="#">
                <button className="btn-dark">SHOP NOW</button> 
            </a>
        </span>
        <img src={ClearanceMen} alt="placeholder-2" />
        <span className="text-block-2">
            <h1>New Arrivals</h1>
            <a href="#">
                <button className="btn-dark">SHOP NOW</button>
            </a>
        </span>
    </section> 
  )
}

export default ClearanceSection