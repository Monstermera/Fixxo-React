import React from 'react'
import { NavLink } from 'react-router-dom'

const SelectedCard = ({selected}) => {
  return (
    <div className="card mb-0" style={{"maxWidth": "350px"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <div className="img">
                    <img src={selected.img} alt={selected.name} />
                    <NavLink to={`/products/${selected.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme d-xl-none">QUICK VIEW</NavLink>
                </div>
            </div>

            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text">{selected.text}</p>
                    <h5 className="card-title">{selected.name}</h5>
                    <p className="card-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </p>
                    <p className="card-price">{selected.price}</p>
                </div>
            </div>
        </div>
    </div>
                
  )
}

export default SelectedCard