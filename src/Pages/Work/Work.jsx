import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import ServiceBanner3 from '../../Components/Banner/ServiceBannner3'
import WorkBanner from '../../Components/Banner/WorkBanner'
import OurClient_ino from '../../Components/OurClient_ino/OurClient_ino'
import Footer from '../../Components/Footer/Footer'
import Work_Card from '../../Components/Work_Card/Work_Card'
import img1 from '../../Images/Layer-617.jpg'
import img2 from '../../Images/Layer-618.jpg'
import img3 from '../../Images/Layer-619.jpg'
import img4 from '../../Images/Layer-620.jpg'
import img5 from '../../Images/02.jpg'
import img6 from '../../Images/07.jpg'
import img7 from '../../Images/portfolio-12.jpg'
import img8 from '../../Images/portfolio-11.jpg'

const Work = () => {
  return (
    <>
    <div  className='bg-img-dv-3 '    >
<MegaMenu/>
<ServiceBanner3/>
</div>  
<WorkBanner/>
<div  className='flex  justify-center m-auto	flex-wrap ' > 

<Work_Card
img={img1}
heading={"Logo Design"}
paragraph={"Branding/ Stationery"}
/>
<Work_Card
img={img2}
heading={"Arabic Logo Design"}
paragraph={"Branding/ Stationery"}
/>
<Work_Card
img={img3}
heading={"Artistic Logo Design"}
paragraph={"Branding/ Stationery"}
/>
<Work_Card
img={img4}
heading={"Creative Logo Design"}
paragraph={"Branding/ Stationery"}
/>

</div>
<div  className='flex  justify-center m-auto	flex-wrap ' > 

<Work_Card
img={img5}
heading={"Website Design"}
paragraph={"Branding/ Stationery"}
/>
<Work_Card
img={img6}
heading={"Stationery Design"}
paragraph={"Motion / Package"}
/>
<Work_Card
img={img7}
heading={"Logo Design"}
paragraph={"Artwork / Mockup"}
/>
<Work_Card
img={img8}
heading={"Packaging Design"}
paragraph={"Branding / Mockup"}
/>

</div>


<OurClient_ino/>
<Footer/>
    
    </>
  )
}

export default Work