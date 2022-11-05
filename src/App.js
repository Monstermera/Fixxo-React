import React, {useEffect, useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import { ProductContext } from './context/contexts'
import { FeaturedContext } from './context/contexts'
import { FlashSaleContext } from './context/contexts'
import { SelectedContext } from './context/contexts'
import { RelatedContext } from './context/contexts'


function App() {
    const [products, setProducts] = useState ([])
    const [featuredProducts, setFeaturedProducts] = useState ([])
    const [flashSaleProducts, setFlashSaleProducts] = useState ([])
    const [selectedProducts, setSelectedProducts] = useState ([])
    const [relatedProducts, setRelatedProducts] = useState ([])

    useEffect (() => {
      const fetchAllProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        setProducts(await result.json())
      }
      fetchAllProducts()
   
      const fetchFeaturedProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        setFeaturedProducts(await result.json())
      }
      fetchFeaturedProducts()

      const fetchFlashSaleProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
        setFlashSaleProducts(await result.json())
      }
      fetchFlashSaleProducts()
      
      const fetchSelectedProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')
        setSelectedProducts(await result.json())
      }
      fetchSelectedProducts()

      const fetchRelatedProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
        setRelatedProducts(await result.json())
      }
      fetchRelatedProducts()
  
    }, [setFeaturedProducts, setFlashSaleProducts, setSelectedProducts, setRelatedProducts])


  return (
     <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedContext.Provider value={featuredProducts}>
      <FlashSaleContext.Provider value={flashSaleProducts}>
      <SelectedContext.Provider value={selectedProducts}>
      <RelatedContext.Provider value={relatedProducts}>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>

      </RelatedContext.Provider>
      </SelectedContext.Provider>
      </FlashSaleContext.Provider>
      </FeaturedContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
    

   
  
  );
}

export default App;
