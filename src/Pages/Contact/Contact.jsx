import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Text_Image from '../../Components/One_Side_Text _Image/One_Side_Text _Image'
import ContactBanner from '../../Components/Banner/ContactBanner'
import OurClient_ino from '../../Components/OurClient_ino/OurClient_ino'
import Contact_From from '../../Components/Conatact_Form/Contact_From'
import './Contact.css'
import Carrers from '../../Components/Carrers/Carrers'
import Footer from '../../Components/Footer/Footer'


const Contact = () => {
  return (
<>
<div style={{"overflowX" :"hidden"}}  className='bg-img-dv-3'    >
<MegaMenu/>
<ContactBanner/>
</div>
<Contact_From/>
<OurClient_ino/>
<Carrers/>
<Footer/>
</>
  )
}

export default Contact