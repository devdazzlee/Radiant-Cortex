import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Text_Image from '../../Components/One_Side_Text _Image/One_Side_Text _Image'
import './Home.css'
import Image_Text from '../../Components/Image_Text/Image_Text'
import Why_Choose from '../../Components/Why_Choose/Why_Choose'
import Ui_UX from '../../Components/UI_UX/Ui_UX'
import Second_last_Sec from '../../Components/Second_last_Sec/Second_last_Sec'
import Footer from '../../Components/Footer/Footer'
import Our_Client from '../../Components/OurClient/Our_Client'
import CuriousWhy from '../../Components/CuriousWhy/CuriousWhy'
import Testimonial from '../../Components/Testimonial/Testimonial'
// import One_Side_Image_Text from '../../Components/One_Side_Image_Text/One_Side_Image_Text'

const Home = () => {
  return (
    <>
<div  className='bg-img-dv-1 '    >
<MegaMenu/>
<Text_Image/>
</div>
<Image_Text/>

<div  className='bg-img-dv-2 '   >
<Why_Choose/>
</div>
<Ui_UX/>
<Our_Client/>
<CuriousWhy/>
<Testimonial/>
<Second_last_Sec/>
<Footer/>
    </>
  )
}

export default Home