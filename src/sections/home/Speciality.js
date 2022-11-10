import React from 'react'
import SpecialityCard from '../../components/home/SpecialityCard'

const OurSpecialitySection = ({title, speciality}) => {

  return (
    <section className="speciality container">  
      <div className="section-title">
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-1 row-cols-xxl-3">
          {
            speciality.map(speciality => <SpecialityCard key={speciality.id} speciality={speciality} />)
          }
        </div>
      </div>
    </section>
  )
}

export default OurSpecialitySection