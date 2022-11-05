import React, {useState, useContext} from 'react'
import HugeSale from '../components/HugeSale'
import Clearance from '../sections/Clearance'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import Speciality from '../sections/Speciality'
import PamelaTopPicks from '../sections/PamelaTopPicks'
import ProductGrid from '../sections/ProductGrid'
import SelectedGrid from '../sections/SelectedGrid'
import ShowCase from '../sections/ShowCase'
import TwoFor29 from '../sections/TwoFor29'
import TwoFor49 from '../sections/TwoFor49'
import WebshopInfo from '../sections/WebshopInfo'
import SelectedHeaders from '../components/SelectedHeaders'
import { FeaturedContext } from '../context/contexts'
import { FlashSaleContext } from '../context/contexts'
import { SelectedContext } from '../context/contexts'

const HomeView = () => {
  const featuredContext = useContext(FeaturedContext)
  const flashSaleContext = useContext(FlashSaleContext)
  const selectedContext = useContext(SelectedContext)

  window.top.document.title = 'Fixxo.'

    const [specialityCards, setSpecialityCards] = useState ([
    { id: 1, name: "Track Your Order", text: "Get Started", img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Make a Return", text: "Get Started", img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, name: "Request a Price Adjustment", text: "Get Started", img: "https://images.pexels.com/photos/5925951/pexels-photo-5925951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  return (
    <>
      <div className="gradient-grey">
        <MainMenu /> 
        <ShowCase />
      </div>

      <Clearance />
      <ProductGrid title="Featured Products" products={featuredContext} />
      <PamelaTopPicks />
      <Speciality title="Our Speciality" speciality={specialityCards} />
      <TwoFor29 products={flashSaleContext}/>
      <TwoFor49 products={flashSaleContext}/>
      <HugeSale />
      <SelectedHeaders />
      <SelectedGrid title="Latest" selected={selectedContext} /> 
      <WebshopInfo />
      <Footer />
    </>
  )
}

export default HomeView