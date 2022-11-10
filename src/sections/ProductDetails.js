import React, { useState, useEffect} from 'react'
import PlusMinusButton from '../components/productDetails/PlusMinusButton';
import SelectButton from '../components/productDetails/SelectButton';
import SizeOptions from '../components/productDetails/SizeOptions';
import ShareIcons from '../components/productDetails/ShareIcons';
import { NavLink, useParams } from 'react-router-dom';
import { currencyFormatter } from '../utilities/currencyFormatter'
import DetailsInfo from '../components/productDetails/DetailsInfo';

const ProductDetailsSection = () => {

    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setItem(await result.json())
        }
        fetchData()
    }, [])  
   
    return (
        <section className="product-view">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="large-img" src={item.imageName} alt={item.name} />
                        <div className="small-img d-none d-lg-flex">
                            <img src={item.imageName} alt={item.name} />
                            <img src={item.imageName} alt={item.name}/>
                            <img src={item.imageName} alt={item.name} />
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="text-box">
                            <h1>{item.name}</h1>
                            <span>
                                <p>SKU: {item.articleNumber}</p> 
                                <p>BRAND: {item.category}</p>
                            </span>
                            <p className="card-rating">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                            </p>
                            <p className="card-price">{currencyFormatter(item.price)}</p>
                            <p className="d-none d-md-block">
                                Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. 
                                Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. <NavLink>(read more)</NavLink>
                            </p>
                        </div>
                    
                        <div className="options"> 
                            <p className="type">Size:</p> 
                            <SizeOptions />
                        </div>
                        
                        <div className="options"> 
                            <p className="type">Color:</p> 
                            <SelectButton />
                        </div>
                        
                        <PlusMinusButton /> 

                        <div className="options"> 
                            <p className="type">Share:</p> 
                            <ShareIcons />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default ProductDetailsSection
