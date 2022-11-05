import React from 'react'
import { NavLink } from 'react-router-dom';
import ShowCaseLeft from '../assets/images/showcase-one.png';
import ShowCaseRight from '../assets/images/showcase-two.png';

const ShowCaseSection = () => {
  return (
    <section className="showcase">
        <div className="container">
            <img src={ShowCaseLeft} className="img-left" alt="Girl sitting on chair"  />
            <div className="showcase-body">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <NavLink>
                    <button className="btn-theme">SHOP NOW</button> 
                </NavLink>
            </div>
            <img src={ShowCaseRight} className="img-right" alt="Girl with coat sitting on chair" />
        </div>
    </section>     )
}

export default ShowCaseSection