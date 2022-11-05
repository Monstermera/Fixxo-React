import React from 'react'
import ProductCard from '../components/ProductCard'

const TwoForUsdRight = ({products = []}) => {
  return (
    <section className="flashsales container">
               <div className="image-box-2"> 

        <div id="left" className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4" >
            {
                products.map(product => <ProductCard key={product.articleNumber} product={product} />)
            }      
        </div>
        </div>
        <div className="flashsales-box">
            <div className="flashsales-body">
                <h1>2 FOR USD $49</h1>
                <button className="btn-white">FLASH SALE</button>
            </div>
        </div>
    </section>
    )
}

export default TwoForUsdRight