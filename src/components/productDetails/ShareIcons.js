import React from 'react'
import { NavLink } from 'react-router-dom'

const ShareIcons = () => {
  return (
    <div className="socialmedia">
        <NavLink><i className="fa-brands fa-facebook-f"></i></NavLink>
        <NavLink><i className="fa-brands fa-instagram"></i></NavLink>
        <NavLink><i className="fa-brands fa-twitter"></i></NavLink>
        <NavLink><i className="fa-brands fa-google"></i></NavLink>
        <NavLink><i className="fa-brands fa-linkedin"></i></NavLink>
    </div>
    )
}

export default ShareIcons