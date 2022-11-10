import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { useShoppingCart } from '../../context/ShoppingCartContext'

const PlusMinusButton = () => {
    const { incrementQuantity } = useShoppingCart()

    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setItem(await result.json())
        }
        fetchData()
    }, [])  

    const [count, setCount] = useState(() => {
        return 0
    })

    const decrementCount = (e) => {
        if(count > 0)
          setCount (prevCount => prevCount - 1)
    }
      
    const incrementCount = (e)=>  {
        setCount (prevCount => prevCount + 1)
    }

    return (
    <div className="options"> 
            <p className="type">Qty:</p> 
            <div className="qty-button d-none d-xl-block" >
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} className="btn-red">ADD TO CART</button>
        </div>
    )
}

export default PlusMinusButton