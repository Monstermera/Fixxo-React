import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'


const NotFoundView = () => {
  return (
    <>
      <MainMenuSection />
      <div className="container d-flex justify-content-center align-items-center">
        <h1>404 - Page Not Found</h1>
      </div>

      <div style={{ position: "fixed", bottom: "0"}}>
          <FooterSection />
      </div>
    
    </>
  )
}

export default NotFoundView