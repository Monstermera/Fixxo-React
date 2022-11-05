import React, {useState} from 'react'

const PlusMinusButton = () => {
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
        <div className="qty-button">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
        <button onClick className="btn-red">ADD TO CART</button>
    </div>
    )
}

export default PlusMinusButton