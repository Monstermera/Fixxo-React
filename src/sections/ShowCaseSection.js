import React from 'react'
import ShowCaseLeft from '../assets/images/showcase-1.svg';
import ShowCaseRight from '../assets/images/showcase-2.svg';

const ShowCaseSection = () => {
  return (
    <section className="showcase container">
        <img src={ShowCaseLeft} className="img-left" alt="Showcase image-1" />
        <div className="showcase-body">
            <h1>SALE UP</h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <a href="#">
                <button className="btn-theme">SHOP NOW</button> 
            </a>
        </div>
        <img src={ShowCaseRight} className="img-right" alt="Showcase image-2" />
    </section>     )
}

export default ShowCaseSection