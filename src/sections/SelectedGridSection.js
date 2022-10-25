import React from 'react'
import SelectedCard from '../components/SelectedCard'

const SelectedGridSection = ({title, selected}) => {
  return (
    <section className="selected-products">
            <div className="container">
                <div className="grid-layout">
                    <div className="selected-title">
                        <h1>{title}</h1>
                    </div>
                        {
                            selected.map(selected => <SelectedCard key={selected.id} selected={selected} />)

                        }
              
                </div>
            </div>
    </section>
    )
}

export default SelectedGridSection