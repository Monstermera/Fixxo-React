import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const TwoForUsdLeft = ({products}) => {
  return (
    <section className="flashsales container">
        <div className="flashsales-box">
            <div className="flashsales-body">
                <h1>2 FOR USD $29</h1>
                <NavLink>
                    <button className="btn-white">FLASH SALE</button>
                </NavLink>
            </div>
        </div>
       
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{"width": "70%"}}>
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }      
        </div>
    </section>
  )
}

export default TwoForUsdLeft