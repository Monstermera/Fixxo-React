import React from 'react'
import { NavLink } from 'react-router-dom'

const HugeSale = () => {
  return (
    <section className="hugesale">
        <div className="container">
            <div className="hugesale-body">
                <h1>Up to 70% off*</h1>
                <p>Women's, Men's & Kids' Winter Fashion</p>
                <NavLink>
                    <button className="btn-white">FLASH SALE</button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default HugeSale