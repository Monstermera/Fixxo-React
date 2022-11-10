import React, {useState, useContext} from 'react'
import SeventyOff from '../sections/home/SeventyOff'
import Clearance from '../sections/home/Clearance'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import Speciality from '../sections/home/Speciality'
import PamelaTopPicks from '../sections/home/PamelaTopPicks'
import ProductGrid from '../sections/ProductGrid'
import SelectedGrid from '../sections/home/SelectedGrid'
import ShowCase from '../sections/home/ShowCase'
import TwoFor29 from '../sections/home/TwoFor29'
import TwoFor49 from '../sections/home/TwoFor49'
import WebshopInfo from '../sections/home/WebshopInfo'
import SelectedHeaders from '../components/home/SelectedHeaders'
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
      <ProductGrid title="Featured Products" items={featuredContext} />
      <PamelaTopPicks />
      <Speciality title="Our Speciality" speciality={specialityCards} />
      <TwoFor29 items={flashSaleContext}/>
      <TwoFor49 items={flashSaleContext}/>
      <SeventyOff />
      <SelectedHeaders />
      <SelectedGrid title="Latest" selectedItems={selectedContext} /> 
      <WebshopInfo />
      <Footer />
    </>
  )
}

export default HomeView