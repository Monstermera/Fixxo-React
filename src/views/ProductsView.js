import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductGrid from '../sections/ProductGrid'
import { ProductContext } from '../context/contexts'

const ProductsDetailsView = () => {
  const productContext = useContext(ProductContext)

  const params = useParams ()
  return (
    <> 
      <MainMenu />
        <div className="container mt-5">
          <h1>{params.name}</h1>
        </div>

      <Breadcrumb  currentPage="Products" />
      <ProductGrid title="Products" products={productContext} />
      <Footer />
    </>
  )
}

export default ProductsDetailsView