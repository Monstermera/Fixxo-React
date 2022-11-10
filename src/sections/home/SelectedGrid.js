import React from 'react'
import SelectedCard from '../../components/home/SelectedCard'

const SelectedGridSection = ({selectedItems = []}) => {
    
  return (
    <section className="selected-products">
        <div className="container">
            <div className="grid-layout">
                {
                    selectedItems.map(product => <SelectedCard key={product.articleNumber} selectedItem={product} />)
                }
            </div>
        </div>   
    </section>
    )
}

export default SelectedGridSection