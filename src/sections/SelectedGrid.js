import React from 'react'
import SelectedCard from '../components/SelectedCard'
const SelectedGridSection = ({selected = []}) => {
  return (
    <section className="selected-products">
            <div className="container">
                <div className="grid-layout">
                        {
                            selected.map(selected => <SelectedCard key={selected.articleNumber} selected={selected} />)

                        }
              
                </div>
            </div>
           
    </section>
    )
}

export default SelectedGridSection