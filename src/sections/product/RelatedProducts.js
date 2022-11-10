import React from 'react'
import ProductCard from '../../components/ProductCard'

const RelatedProductsSection = ({items = []}) => {

  return (
    <section className="related-products">
        <div className="container">
            <div className="section-title">
                <h1>Related Products</h1>
                <div className="chevron"> 
                    <button className="fa-regular fa-chevron-left"></button>
                    <button className="fa-regular fa-chevron-right"></button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                }      
            </div>
        </div>
    </section>
    )
}

export default RelatedProductsSection