import React, {useContext} from 'react'
import { RelatedContext } from '../context/contexts'
import Banner from '../sections/Banner'
import Breadcrumb from '../sections/Breadcrumb'
import MainMenu from '../sections/MainMenu'
import ProductDetails from '../sections/ProductDetails'
import RelatedProducts from '../sections/RelatedProducts'
import Footer from '../sections/Footer'


const ProductDetailsView = () => {
    const relatedContext = useContext(RelatedContext)

  return (
    <>
      <MainMenu />
      <Banner />
      <Breadcrumb currentPage="Product Signal"/>
      <ProductDetails />
      <RelatedProducts title="Related Products" products={relatedContext} /> 
      <Footer />
    </>
  )
}

export default ProductDetailsView