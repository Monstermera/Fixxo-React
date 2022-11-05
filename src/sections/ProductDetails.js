import React, { useState, useEffect} from 'react'
import PlusMinusButton from '../components/productDetails/PlusMinusButton';
import DropdownButton from '../components/productDetails/DropdownButton';
import SizeOptions from '../components/productDetails/SizeOptions';
import ShareIcons from '../components/productDetails/ShareIcons';
import { NavLink, useParams } from 'react-router-dom';
import { ProductContext } from '../context/contexts';

const ProductDetailsSection = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setProduct(await result.json())
        }
        fetchData()
    }, [])  
   
  return (
    <section className="product-view">
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="large-img" src={product.imageName} alt={product.name} />
                    <div className="small-img">
                            <img src={product.imageName} alt={product.name} />
                            <img src={product.imageName} alt={product.name}/>
                            <img src={product.imageName} alt={product.name} />
                    </div>
                    <div className="text-box-left" >
                        <ul className="details">
                            <li className="active">Description</li>
                            <li>Additional</li>
                            <li>Shopping & Returns</li>
                            <li>Reviews</li>  
                        </ul>
                        <div className="gradient-border"></div>
                        <p>
                            Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. 
                            Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode 
                            earnestly no he commanded if. Put still any about manor heard. 
                        </p>
                        <p> 
                            * Village did removed enjoyed explain nor ham saw calling talking. <br /> 
                            * Securing as informed declared or margaret.<br />
                            * Joy horrible moreover man feelings own shy.
                        </p>
                        <p>
                            On even feet time have an no at. Relation so in confined smallest children unpacked delicate. 
                            Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. 
                        </p>
                    </div>
                </div>
                
                <div className="col">
                    <div className="text-box-right">
                        <h1>{product.name}</h1>
                        <span>
                            <p>SKU: {product.articleNumber}</p> 
                            <p>BRAND: {product.category}</p>
                        </span>
                        <p className="card-rating">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </p>
                        <p className="card-price">{product.price}</p>
                        <p>
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
                        <DropdownButton />
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
