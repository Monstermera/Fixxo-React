import React from 'react'
import ProductCard from '../components/ProductCard'

const TwoForUsdLeft = ({products = []}) => {
  return (
    <section className="flashsales container">
         
        <div className="flashsales-box">
            <div className="flashsales-body">
                <h1>2 FOR USD $29</h1>
                    <button className="btn-white">FLASH SALE</button>
            </div>
        </div>
       <div className="image-box-1"> 
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
            {
                products.map(product => <ProductCard key={product.articleNumber} product={product} />)
            }      
        </div>
        </div>
    </section>
  )
}

export default TwoForUsdLeft