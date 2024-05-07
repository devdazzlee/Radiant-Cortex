import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Text_Image from '../../Components/One_Side_Text _Image/One_Side_Text _Image'
import ServiceBanner from '../../Components/Banner/ServiceBanner'
import ServiceBanner2 from '../../Components/Banner/ServiceBanner2'
import OurClient_ino from '../../Components/OurClient_ino/OurClient_ino'
import Footer from '../../Components/Footer/Footer'
import OfferCardssec from '../../Components/Services_Cards/Services_Cards'
import OfferCardssec2 from '../../Components/Services_Cards/Services_Cards2'
import OfferCardssec3 from '../../Components/Services_Cards/Services_Cards3'

const Services = () => {
  return (
 <>
<div  className='bg-img-dv-3 '    >
<MegaMenu/>
<ServiceBanner/>
</div>
<OfferCardssec/>
<OfferCardssec2/>
<OfferCardssec3/>
<ServiceBanner2/>
<OurClient_ino/>
<Footer/>
</>
  )
}

export default Services