import React from 'react'
import PamelaLeft from '../assets/images/placeholder-3.png'
import PamelaRight from '../assets/images/placeholder-4.png'


const PamelaTopPicksSection = () => {
  return (
    <section className="top-picks container">
        <img src={PamelaLeft} alt="placeholder woman" />
        <span className="text-block-1">
            <h1>Pamela Reif's Top Picks</h1>
            <button className="btn-dark">SHOP NOW</button>
        </span>
        <img src={PamelaRight} alt="placeholder woman" />
        <span className="text-block-2">
            <h1>Let's Be Conscious</h1>
            <button className="btn-white">FLASH SALE</button>
        </span>
    </section>
  )
}

export default PamelaTopPicksSection