import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import AboutBanner3 from '../../Components/Banner/AboutBanner'
import About_Us2 from '../../Components/Banner/AboutUs2'
import OfferCardssec from '../../Components/Services_Cards/Services_Cards'
import OfferCardssec2 from '../../Components/Services_Cards/Services_Cards2'
import OfferCardssec3 from '../../Components/Services_Cards/Services_Cards3'
import OurClient_ino from '../../Components/OurClient_ino/OurClient_ino'
import Footer from '../../Components/Footer/Footer'
import RevertText_Image2 from '../../Components/About_Us_Section/About_Us_Section'

const About_Us = () => {
  return (
<>
<div  className='bg-img-dv-3 '    >
<MegaMenu/>
<AboutBanner3/>
</div>  
<About_Us2/>
<RevertText_Image2/>
<OfferCardssec/>
<OfferCardssec2/>
<OfferCardssec3/>
<OurClient_ino/>
<Footer/>



</>
  )
}

export default About_Us