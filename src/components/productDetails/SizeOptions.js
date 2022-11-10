import React from 'react'

const SizeOptions = () => {
  return (
    <div className="size">
        <input 
          type="radio" 
          className="btn-check" 
          name="options" 
          id="small"/>
        <label className="btn btn-light" htmlFor="small">S</label>
    
        <input 
          type="radio" 
          className="btn-check" 
          name="options" 
          id="medium"/>
        <label className="btn btn-light" htmlFor="medium">M</label>

        <input 
          type="radio" 
          className="btn-check" 
          name="options" 
          id="large"/>
        <label className="btn btn-light" htmlFor="large">L</label>
    
        <input 
          type="radio" 
          className="btn-check" 
          name="options" 
          id="xlarge"/>
        <label className="btn btn-light" htmlFor="xlarge">XL</label>
    </div>
  )
}

export default SizeOptions