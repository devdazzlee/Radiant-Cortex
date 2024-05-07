import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import CareerBanner from '../../Components/Banner/CarrerBanner'
import ContactBanner2 from '../../Components/Banner/CarrerBanner2'
import CareerBanner2 from '../../Components/Banner/CarrerBanner2'
import Footer from '../../Components/Footer/Footer'

const Carrers = () => {
  return (
<>
<div  className='bg-img-dv-3'    >
<MegaMenu/>
<CareerBanner/>
</div>
<CareerBanner2/>
<Footer/>


</>
  )
}

export default Carrers