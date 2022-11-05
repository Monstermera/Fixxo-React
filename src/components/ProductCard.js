import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log("added to wish list")
    }
    const addToCompare = (e) => {
        console.log(`${e.name} added to compare`)
    }
    const addToCart = (e) => {
        console.log("added to shopping cart")
    }

  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={product.imageName} alt={product.name} />
                <div className="card-menu d-xl-none">
                    <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart} className="menu-link"><i className="fa-light fa-bag-shopping"></i></button>
                </div>
               <NavLink to={`/products/${product.articleNumber}`} className="btn-theme d-xl-none">QUICK VIEW</NavLink>
            </div>
            <div className="card-body">
                <p className="card-text">{product.text}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <div className="price">
                    <p className="card-old-price">{product.oldPrice}</p> 
                    <p className="card-price">{product.price}</p>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default ProductCard