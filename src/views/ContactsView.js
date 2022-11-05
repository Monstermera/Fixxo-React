import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import ContactForm from '../sections/ContactForm'
import MainMenu from '../sections/MainMenu'
import Map from '../sections/Map'


const ContactsView = () => {
    window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
      <MainMenu />
      <Breadcrumb currentPage="Contacts" />
      <Map />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactsView