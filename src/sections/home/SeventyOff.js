import React from 'react'
import HugeSale from '../../assets/images/seventy-off.png'

const SeventyOff = () => {

  return (
    <section className="hugesale">
        <div className="container">  
        <img src={HugeSale} alt="Girl with one bag in each hand" />
            <div className="hugesale-body">
                <h1>Up to 70% off*</h1>
                <p>Women's, Men's & Kids' Winter Fashion</p>
                <button className="btn-white">FLASH SALE</button>
            </div>
        </div>
    </section>
    )
}

export default SeventyOff