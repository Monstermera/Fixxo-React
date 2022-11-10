import React from 'react'
import { NavLink } from 'react-router-dom'

const BannerSection = () => {

  return (
    <div className="banner container">
      <NavLink to="/products">Get 25% OFF at the Fixxo Selection - Shop Now!</NavLink>
    </div>
    )
}

export default BannerSection