import React, {useState} from 'react'
import HugeSale from '../components/HugeSale'
import ProductCard from '../components/ProductCard'
import SelectedCard from '../components/SelectedCard'
import ClearanceSection from '../sections/ClearanceSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import OurSpecialitySection from '../sections/OurSpecialitySection'
import PamelaTopPicksSection from '../sections/PamelaTopPicksSection'
import ProductGridSection from '../sections/ProductGridSection'
import SelectedGridSection from '../sections/SelectedGridSection'
import ShowCaseSection from '../sections/ShowCaseSection'
import TwoForUsdLeft from '../sections/TwoForUsdLeft'
import TwoForUsdRight from '../sections/TwoForUsdRight'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'

    const [featuredProducts, setFeaturedProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Black Blouse", text: "Category", price: "$35.00", oldPrice: "$30.00", rating: 5, img: "https://images.pexels.com/photos/6111735/pexels-photo-6111735.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 3, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7211239/pexels-photo-7211239.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 4, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2716698/pexels-photo-2716698.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 5, name: "Modern Black Blouse", text: "Category", price: "$35.00", oldPrice: "$30.00", rating: 5, img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 6, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6111735/pexels-photo-6111735.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 7, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7211239/pexels-photo-7211239.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 8, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2716698/pexels-photo-2716698.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
  ])


    const [specialityCards, setSpecialityCards] = useState ([
    { id: 1, name: "Track Your Order", text: "Get Started", img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Make a Return", text: "Get Started", img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, name: "Request a Price Adjustment", text: "Get Started", img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

    const [twoForUsdLeftProducts, settwoForUsdLeftProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", text: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Black Blouse", text: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/6111735/pexels-photo-6111735.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 3, name: "Modern Black Blouse", text: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/7211239/pexels-photo-7211239.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 4, name: "Modern Black Blouse", text: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/2716698/pexels-photo-2716698.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
  ])

    const [twoForUsdRightProducts, settwoForUsdRightProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", text: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Black Blouse", text: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/6111735/pexels-photo-6111735.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 3, name: "Modern Black Blouse", text: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/7211239/pexels-photo-7211239.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 4, name: "Modern Black Blouse", text: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/2716698/pexels-photo-2716698.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
  ])

    const [selectedCards, setSelectedCards] = useState ([
    { id: 1, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6111735/pexels-photo-6111735.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 3, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7211239/pexels-photo-7211239.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    { id: 4, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2716698/pexels-photo-2716698.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    // { id: 5, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    // { id: 6, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6111735/pexels-photo-6111735.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    // { id: 7, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7211239/pexels-photo-7211239.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    // { id: 8, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2716698/pexels-photo-2716698.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    // { id: 9, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    // { id: 10, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6111735/pexels-photo-6111735.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    // { id: 11, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7211239/pexels-photo-7211239.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    // { id: 12, name: "Modern Black Blouse", text: "Category", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2716698/pexels-photo-2716698.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}

  ])




  return (
    <>
      <MainMenuSection />
      <ShowCaseSection />
      <ClearanceSection />
      <ProductGridSection title="Featured Product" products={featuredProducts} />
      <PamelaTopPicksSection />
      <OurSpecialitySection title="Our Speciality" speciality={specialityCards} />
      <TwoForUsdLeft products={twoForUsdLeftProducts}/>
      <TwoForUsdRight products={twoForUsdRightProducts}/>
      <HugeSale />
      <SelectedGridSection selected={selectedCards} />
      
      <FooterSection />
    </>
  )
}

export default HomeView