import React, {useContext} from 'react'
import { RelatedContext } from '../context/contexts'
import Banner from '../sections/Banner'
import Breadcrumb from '../sections/Breadcrumb'
import MainMenu from '../sections/MainMenu'
import ProductDetails from '../sections/ProductDetails'
import RelatedProducts from '../sections/product/RelatedProducts'
import Footer from '../sections/Footer'
import DetailsInfo from '../components/productDetails/DetailsInfo'

const ProductDetailsView = () => {
    const relatedContext = useContext(RelatedContext)

    return (
      <>
        <MainMenu />
        <Banner />
        <Breadcrumb currentPage="Product Signal"/>
        <ProductDetails />
        <DetailsInfo />
        <RelatedProducts title="Related Products" items={relatedContext} /> 
        <Footer />
      </>
    )
}

export default ProductDetailsView