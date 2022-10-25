import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const TwoForUsdRight = ({products}) => {
  return (
    <section className="flashsales container">
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{"width": "70%", "marginLeft": "16rem"}}>
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }      
        </div>
        <div className="flashsales-box">
            <div className="flashsales-body">
                <h1>2 FOR USD $29</h1>
                <NavLink>
                    <button className="btn-white">FLASH SALE</button>
                </NavLink>
            </div>
        </div>
    </section>
    )
}

export default TwoForUsdRight